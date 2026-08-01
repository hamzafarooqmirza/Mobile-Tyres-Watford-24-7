'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', address: '' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      '🔧 *New Quote Request — Mobile Tyres Watford 24/7*',
      '',
      `*Name:* ${form.name || '—'}`,
      `*Phone:* ${form.phone || '—'}`,
      `*Service:* ${form.service || '—'}`,
      `*Address:* ${form.address || '—'}`,
    ].join('\n')
    window.open(`https://wa.me/447466756907?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <form className="space-y-4" onSubmit={sendToWhatsApp}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Name</label>
          <input type="text" placeholder="Your full name" value={form.name} onChange={set('name')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors text-[14px]" />
        </div>
        <div>
          <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Phone</label>
          <input type="tel" placeholder="07xxx xxxxxx" value={form.phone} onChange={set('phone')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors text-[14px]" />
        </div>
      </div>
      <div>
        <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Service</label>
        <select value={form.service} onChange={set('service')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors appearance-none text-[14px]">
          <option value="">Select a service…</option>
          <option>Tyre Puncture Repair</option>
          <option>New Tyre Fitting</option>
          <option>Tyre Replacement</option>
          <option>Wheel Balancing</option>
          <option>Tyre Rotation</option>
          <option>Locking Wheel Nut Removal</option>
          <option>Flat Tyre Emergency Service</option>
          <option>Mobile Tyre Fitting — Home / Office / Roadside</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Address</label>
        <input type="text" placeholder="Your address in Watford / surrounding area" value={form.address} onChange={set('address')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors text-[14px]" />
      </div>
      <button type="submit" className="shimmer-btn w-full text-white font-bold py-4 rounded-xl uppercase tracking-widest text-[13px] shadow-lg shadow-[#f97316]/20 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[18px]">chat</span>
        Send Quote via WhatsApp
      </button>
    </form>
  )
}
