import { type NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

const PROTECTED = ['/settings']

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isProtected = PROTECTED.some((p) => pathname.startsWith(p))
  const isLogin = pathname === '/login'

  if (!isProtected && !isLogin) return NextResponse.next()

  // If Supabase isn't configured, protect routes conservatively
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    if (isProtected) return NextResponse.redirect(new URL('/login', request.url))
    return NextResponse.next()
  }

  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (isProtected && !user) return NextResponse.redirect(new URL('/login', request.url))
  if (isLogin && user) return NextResponse.redirect(new URL('/settings', request.url))

  return response
}

export const config = {
  matcher: ['/settings/:path*', '/login'],
}
