import { type NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE, verifyToken } from '@/lib/auth-token'

const PROTECTED = ['/settings']

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = PROTECTED.some((p) => pathname.startsWith(p))
  const isLogin = pathname === '/login'

  if (!isProtected && !isLogin) return NextResponse.next()

  const token = request.cookies.get(SESSION_COOKIE)?.value
  const authenticated = token ? await verifyToken(token) : false

  if (isProtected && !authenticated) return NextResponse.redirect(new URL('/login', request.url))
  if (isLogin && authenticated) return NextResponse.redirect(new URL('/settings', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/settings/:path*', '/login'],
}
