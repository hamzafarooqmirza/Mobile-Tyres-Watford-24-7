'use client'
import { useActionState } from 'react'
import { changePassword, type AuthState } from '@/lib/actions/auth'

const inputCls =
  'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316] transition-colors'
const labelCls = 'block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5'

export default function ChangePasswordForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(changePassword, {})

  return (
    <form action={action} className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
      <h2 className="text-white font-bold text-base">Change Admin Password</h2>
      {state.error && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="bg-green-900/30 border border-green-700/50 text-green-300 px-4 py-3 rounded-lg text-sm">
          Password changed successfully.
        </div>
      )}
      <div>
        <label className={labelCls}>Current Password</label>
        <input type="password" name="currentPassword" required autoComplete="current-password" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>New Password</label>
        <input type="password" name="newPassword" required autoComplete="new-password" minLength={8} className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Confirm New Password</label>
        <input type="password" name="confirmPassword" required autoComplete="new-password" className={inputCls} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#1e2d4a] hover:bg-[#2a3d5e] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-colors"
      >
        {pending ? 'Changing…' : 'Change Password'}
      </button>
    </form>
  )
}
