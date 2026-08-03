'use client'
import { useActionState } from 'react'
import { signIn, type AuthState } from '@/lib/actions/auth'

const inputCls =
  'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316] transition-colors'

export default function LoginForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(signIn, {})

  return (
    <form action={action} className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
      {state.error && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm">
          {state.error}
        </div>
      )}
      <div>
        <label className="block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5">
          Admin Password
        </label>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-colors"
      >
        {pending ? 'Signing in…' : 'Sign In'}
      </button>
      <p className="text-center text-[#7a90b8] text-xs">
        First time?{' '}
        <a href="/settings/setup" className="text-[#f97316] hover:underline">
          Set up your admin password
        </a>
      </p>
    </form>
  )
}
