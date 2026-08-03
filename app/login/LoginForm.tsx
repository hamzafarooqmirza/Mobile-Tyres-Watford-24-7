'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError('Invalid email or password.')
      setLoading(false)
      return
    }
    router.push('/settings')
    router.refresh()
  }

  const inputCls =
    'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
      {error && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-colors"
      >
        {loading ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  )
}
