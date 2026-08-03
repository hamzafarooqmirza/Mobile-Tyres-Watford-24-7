import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createAuthClient } from '@/lib/supabase/server'
import { getSettings } from '@/lib/get-settings'
import SettingsForm from './SettingsForm'
import SignOutButton from './SignOutButton'

export const metadata: Metadata = {
  title: 'Settings | Mobile Tyres Watford 24/7',
  robots: { index: false, follow: false },
}

export default async function SettingsPage() {
  // Guard: redirect unauthenticated visitors
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <main className="min-h-screen bg-[#060e20] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <span className="material-symbols-outlined text-[#f97316] text-[48px] mb-4 block">
            settings_suggest
          </span>
          <h1 className="text-xl font-extrabold text-white mb-2">Supabase Not Configured</h1>
          <p className="text-[#7a90b8] text-sm leading-relaxed">
            Set <code className="text-[#f97316]">NEXT_PUBLIC_SUPABASE_URL</code>,{' '}
            <code className="text-[#f97316]">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and{' '}
            <code className="text-[#f97316]">SUPABASE_SERVICE_ROLE_KEY</code> in your environment
            and redeploy.
          </p>
        </div>
      </main>
    )
  }

  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) redirect('/login')

  const settings = await getSettings()

  return (
    <main className="min-h-screen bg-[#060e20] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="font-mono text-[#f97316] text-xs uppercase tracking-[0.2em] font-bold mb-1">
              Admin
            </p>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Site Settings</h1>
            <p className="text-[#7a90b8] text-sm mt-1">{user.email}</p>
          </div>
          <SignOutButton />
        </div>
        <SettingsForm settings={settings} />
      </div>
    </main>
  )
}
