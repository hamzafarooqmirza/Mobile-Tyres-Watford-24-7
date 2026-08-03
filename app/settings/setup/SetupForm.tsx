'use client'
import { useActionState } from 'react'
import { setupAdmin, type AuthState } from '@/lib/actions/auth'

const inputCls =
  'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316] transition-colors'
const labelCls = 'block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5'

export default function SetupForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(setupAdmin, {})

  return (
    <form action={action} className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
      {state.error && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm">
          {state.error}
        </div>
      )}
      <div>
        <label className={labelCls}>Admin Email</label>
        <input type="email" name="email" required autoComplete="email" className={inputCls} />
        <p className="text-[#7a90b8] text-xs mt-1">You will use this email to log in.</p>
      </div>
      <div>
        <label className={labelCls}>Admin Password</label>
        <input type="password" name="password" required autoComplete="new-password" minLength={8} className={inputCls} />
        <p className="text-[#7a90b8] text-xs mt-1">Minimum 8 characters. Store it somewhere safe — there is no recovery flow.</p>
      </div>
      <div>
        <label className={labelCls}>Confirm Password</label>
        <input type="password" name="confirmPassword" required autoComplete="new-password" className={inputCls} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-colors"
      >
        {pending ? 'Setting up…' : 'Create Admin Account'}
      </button>
    </form>
  )
}
