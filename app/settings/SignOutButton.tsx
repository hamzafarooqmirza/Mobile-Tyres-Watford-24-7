'use client'
import { signOut } from '@/lib/actions/auth'

export default function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="flex items-center gap-1.5 text-[#7a90b8] hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">logout</span>
        Sign out
      </button>
    </form>
  )
}
