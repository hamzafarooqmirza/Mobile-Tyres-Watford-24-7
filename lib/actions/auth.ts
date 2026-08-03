'use server'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import { createServiceClient } from '@/lib/supabase/server'
import { createSession, destroySession, getSession } from '@/lib/auth-session'

export interface AuthState {
  error?: string
  success?: boolean
}

async function getCredentials() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null
  const supabase = createServiceClient()
  const { data } = await supabase
    .schema('mobile_tyres_watford')
    .from('admin_credentials')
    .select('email, password_hash')
    .eq('id', 1)
    .single()
  return data
}

export async function signIn(_: AuthState, formData: FormData): Promise<AuthState> {
  const email = (formData.get('email') as string ?? '').trim().toLowerCase()
  const password = (formData.get('password') as string ?? '').trim()
  if (!email || !password) return { error: 'Email and password are required.' }

  const creds = await getCredentials()
  if (!creds || !creds.password_hash) return { error: 'Admin account not yet configured. Visit /settings/setup first.' }

  const emailMatch = creds.email?.toLowerCase() === email
  const passwordMatch = await bcrypt.compare(password, creds.password_hash)
  // same error regardless of which field is wrong — don't leak which one failed
  if (!emailMatch || !passwordMatch) return { error: 'Invalid email or password.' }

  await createSession()
  redirect('/settings')
}

export async function signOut() {
  await destroySession()
  redirect('/login')
}

export async function setupAdmin(_: AuthState, formData: FormData): Promise<AuthState> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { error: 'Supabase is not configured. Set env vars and redeploy.' }
  }

  const supabase = createServiceClient()
  const { data: existing } = await supabase
    .schema('mobile_tyres_watford')
    .from('admin_credentials')
    .select('password_hash')
    .eq('id', 1)
    .single()

  if (existing?.password_hash) return { error: 'Admin already configured. Log in instead.' }

  const email = (formData.get('email') as string ?? '').trim().toLowerCase()
  const password = (formData.get('password') as string ?? '').trim()
  const confirm = (formData.get('confirmPassword') as string ?? '').trim()

  if (!email || !email.includes('@')) return { error: 'A valid email address is required.' }
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' }
  if (password !== confirm) return { error: 'Passwords do not match.' }

  const hash = await bcrypt.hash(password, 12)
  const { error } = await supabase
    .schema('mobile_tyres_watford')
    .from('admin_credentials')
    .upsert({ id: 1, email, password_hash: hash })

  if (error) return { error: `Database error: ${error.message}` }

  await createSession()
  redirect('/settings')
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
    .schema('mobile_tyres_watford')
    .from('admin_credentials')
    .update({ password_hash: hash })
    .eq('id', 1)

  if (error) return { error: `Database error: ${error.message}` }

  return { success: true }
}
