import { cookies } from 'next/headers'
import { SESSION_COOKIE, signToken, verifyToken } from './auth-token'

const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export async function createSession(): Promise<void> {
  const token = await signToken()
  const jar = await cookies()
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  })
}

export async function destroySession(): Promise<void> {
  const jar = await cookies()
  jar.delete(SESSION_COOKIE)
}

export async function getSession(): Promise<boolean> {
  const jar = await cookies()
  const token = jar.get(SESSION_COOKIE)?.value
  if (!token) return false
  return verifyToken(token)
}
