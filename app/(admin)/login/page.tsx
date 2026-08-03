import type { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Login | Mobile Tyres Watford 24/7',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#060e20] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-full bg-[#f97316]/10 items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[#f97316] text-[22px]">lock</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin Login</h1>
          <p className="text-[#7a90b8] text-sm mt-1">Mobile Tyres Watford 24/7</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
