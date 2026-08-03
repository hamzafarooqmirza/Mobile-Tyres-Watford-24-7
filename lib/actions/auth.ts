'use server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { createServiceClient } from '@/lib/supabase/server'
import { createSession, destroySession, getSession } from '@/lib/auth-session'

export interface AuthState {
  error?: string
  success?: boolean
}

// In-memory rate limiter: max 5 attempts per IP per 15-minute window
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(ip)
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

function clearRateLimit(ip: string) {
  loginAttempts.delete(ip)
}

async function getClientIp(): Promise<string> {
  const h = await headers()
  return h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? h.get('x-real-ip') ?? 'unknown'
}

async function getCredentials() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null
  const supabase = createServiceClient()
  const { data } = await supabase
    .from('mtw_admin_credentials')
    .select('email, password_hash')
    .eq('id', 1)
    .single()
  return data
}

export async function signIn(_: AuthState, formData: FormData): Promise<AuthState> {
  const ip = await getClientIp()
  if (!checkRateLimit(ip)) {
    return { error: 'Too many login attempts. Please wait 15 minutes before trying again.' }
  }

  const email = (formData.get('email') as string ?? '').trim().toLowerCase()
  const password = (formData.get('password') as string ?? '').trim()
  if (!email || !password) return { error: 'Email and password are required.' }

  const creds = await getCredentials()
  if (!creds || !creds.password_hash) return { error: 'Admin account not yet configured.' }

  const emailMatch = creds.email?.toLowerCase() === email
  const passwordMatch = await bcrypt.compare(password, creds.password_hash)
  if (!emailMatch || !passwordMatch) return { error: 'Invalid email or password.' }

  clearRateLimit(ip)
  await createSession()
  redirect('/settings')
}

export async function signOut() {
  await destroySession()
  redirect('/login')
}


export async function changePassword(_: AuthState, formData: FormData): Promise<AuthState> {
  const loggedIn = await getSession()
  if (!loggedIn) redirect('/login')

  const current = (formData.get('currentPassword') as string ?? '').trim()
  const next = (formData.get('newPassword') as string ?? '').trim()
  const confirm = (formData.get('confirmPassword') as string ?? '').trim()

  if (!current || !next) return { error: 'All fields are required.' }
  if (next.length < 8) return { error: 'New password must be at least 8 characters.' }
  if (next !== confirm) return { error: 'New passwords do not match.' }

  const creds = await getCredentials()
  if (!creds?.password_hash) return { error: 'No admin credentials found.' }

  const valid = await bcrypt.compare(current, creds.password_hash)
  if (!valid) return { error: 'Current password is incorrect.' }

  const hash = await bcrypt.hash(next, 12)
  const supabase = createServiceClient()
  const { error } = await supabase
    .from('mtw_admin_credentials')
    .update({ password_hash: hash })
    .eq('id', 1)

  if (error) return { error: `Database error: ${error.message}` }

  return { success: true }
}
