import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/** Auth-aware client for server components / route handlers — reads/writes session cookies. */
export async function createAuthClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // setAll can throw in read-only contexts (e.g. server components after headers sent)
          }
        },
      },
    }
  )
}

/** Service-role client for admin DB access — bypasses RLS, never exposes key to browser. */
export function createServiceClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: { getAll: () => [], setAll: () => {} },
      auth: { persistSession: false, autoRefreshToken: false },
    }
  )
}
