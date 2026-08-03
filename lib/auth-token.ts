import { SignJWT, jwtVerify } from 'jose'

export const SESSION_COOKIE = 'mtw_admin_session'
const SITE_CLAIM = 'mobile_tyres_watford'

function secret(): Uint8Array {
  const s = process.env.SESSION_SECRET ?? ''
  if (s.length < 32) throw new Error('SESSION_SECRET must be at least 32 characters')
  return new TextEncoder().encode(s)
}

export async function signToken(): Promise<string> {
  return new SignJWT({ site: SITE_CLAIM })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, secret())
    return payload.site === SITE_CLAIM
  } catch {
    return false
  }
}
