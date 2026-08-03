import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createServiceClient } from '@/lib/supabase/server'
import SetupForm from './SetupForm'

export const metadata: Metadata = {
  title: 'Admin Setup | Mobile Tyres Watford 24/7',
  robots: { index: false, follow: false },
}

export default async function SetupPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return (
      <main className="min-h-screen bg-[#060e20] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-extrabold text-white mb-2">Supabase Not Configured</h1>
          <p className="text-[#7a90b8] text-sm">
            Set <code className="text-[#f97316]">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
            <code className="text-[#f97316]">SUPABASE_SERVICE_ROLE_KEY</code> first.
          </p>
        </div>
      </main>
    )
  }

  // If admin credentials already exist, redirect to login
  const supabase = createServiceClient()
  const { data } = await supabase
    .schema('mobile_tyres_watford')
    .from('admin_credentials')
    .select('password_hash')
    .eq('id', 1)
    .single()

  if (data?.password_hash) redirect('/login')

  return (
    <main className="min-h-screen bg-[#060e20] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-full bg-[#f97316]/10 items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[#f97316] text-[22px]">manage_accounts</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">First-Time Setup</h1>
          <p className="text-[#7a90b8] text-sm mt-1">Create your admin password for this site.</p>
        </div>
        <SetupForm />
      </div>
    </main>
  )
}
