'use client'

import { useState, useEffect } from 'react'
import { useSettings } from '@/components/SettingsProvider'
import { fmtPhone, telHref, waHref } from '@/lib/settings'

const shopHours = [
  { day: 'Monday',    time: 'Available 24/7' },
  { day: 'Tuesday',   time: 'Available 24/7' },
  { day: 'Wednesday', time: 'Available 24/7' },
  { day: 'Thursday',  time: 'Available 24/7' },
  { day: 'Friday',    time: 'Available 24/7' },
  { day: 'Saturday',  time: 'Available 24/7' },
  { day: 'Sunday',    time: 'Available 24/7' },
]

const faqs = [
  {
    q: 'How quickly can you arrive after I call?',
    a: 'Our average emergency response time across Watford and surrounding areas is under 60 minutes. Scheduled appointments arrive within the agreed window.',
  },
  {
    q: 'Do I need to be present during the service?',
    a: "Not necessarily. As long as we have access to your vehicle and the locking wheel-nut key (if required), we can complete the service without you present.",
  },
  {
    q: 'What vehicles do you service?',
    a: 'All passenger vehicles — hatchbacks, saloons, SUVs, vans, luxury, and electric vehicles. Our equipment is suited to every platform.',
  },
  {
    q: 'Do you carry tyre stock on the van?',
    a: 'Yes. Our vans carry a selection of popular sizes and brands. For specialist or rare sizes we can usually source and deliver the same day.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Our core area is Watford. We also regularly serve Hemel Hempstead, St Albans, Bushey, Rickmansworth, Abbots Langley, and Chorleywood. Call to confirm availability.',
  },
  {
    q: 'Are you available on weekends and bank holidays?',
    a: 'Yes — our mobile emergency line is available 24/7 every day of the year, including weekends and bank holidays.',
  },
]

export default function ContactPage() {
  const settings = useSettings()
  const mobile = settings.phoneMobile
  const office = settings.phoneOffice
  const wa = settings.whatsappNumber
  const email = settings.email
  const locality = settings.addressLocality
  const region = settings.addressRegion

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const todayName = new Date().toLocaleDateString('en-GB', { weekday: 'long' })
  const [form, setForm] = useState({ name: '', phone: '', service: '', vehicle: '', address: '', notes: '' })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      '🔧 *New Quote Request — Mobile Tyres Watford 24/7*',
      '',
      `*Name:* ${form.name || '—'}`,
      `*Phone:* ${form.phone || '—'}`,
      `*Service:* ${form.service || '—'}`,
      `*Vehicle:* ${form.vehicle || '—'}`,
      `*Address:* ${form.address || '—'}`,
      form.notes ? `*Notes:* ${form.notes}` : '',
    ].filter(Boolean).join('\n')
    window.open(`${waHref(wa)}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact Mobile Tyres Watford 24/7 — Mobile Tyre Service Near Me`,
    url: 'https://mobiletyreswatford247.co.uk/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Mobile Tyres Watford 24/7',
      url: 'https://mobiletyreswatford247.co.uk',
      telephone: [mobile, office],
      email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: locality,
        addressRegion: region,
        addressCountry: 'GB',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      contactPoint: [
        { '@type': 'ContactPoint', telephone: mobile, contactType: 'customer service', availableLanguage: 'English', hoursAvailable: { '@type': 'OpeningHoursSpecification', opens: '00:00', closes: '23:59', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] } },
        { '@type': 'ContactPoint', telephone: office, contactType: 'sales', availableLanguage: 'English' },
      ],
    },
  }

  return (
    <main className="pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* ── Hero ── */}
      <section className="py-14 sm:py-20 bg-[#060e20] border-b border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <p className="font-mono text-[#f97316] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">Get In Touch</p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-extrabold tracking-tight leading-[1.05] text-white mb-4">
            Contact <span className="text-[#f97316]">Us</span>
          </h1>
          <p className="text-[#9aadcc] text-[15px] sm:text-[17px] leading-relaxed max-w-md">
            Phone, WhatsApp, or email — we respond fast. Emergency line available 24/7.
          </p>
        </div>
      </section>

      {/* ── Quick Contact Strip ── */}
      <section className="bg-[#0b1326] border-b border-[#1e2d4a]">
        {/* Mobile: horizontal action buttons */}
        <div className="grid grid-cols-2 sm:hidden border-b border-[#1e2d4a]">
          <a
            href={telHref(mobile)}
            className="flex flex-col items-center justify-center gap-1 py-4 bg-[#f97316] text-white font-bold text-[12px] uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            Mobile 24/7
            <span className="font-mono text-[10px] opacity-80 normal-case">{fmtPhone(mobile)}</span>
          </a>
          <a
            href={telHref(office)}
            className="flex flex-col items-center justify-center gap-1 py-4 bg-[#1e2d4a] text-white font-bold text-[12px] uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            Office
            <span className="font-mono text-[10px] opacity-80 normal-case">{fmtPhone(office)}</span>
          </a>
        </div>

        {/* sm+: 4-column cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-12 max-w-[1280px] mx-auto py-12">
          <a
            href={telHref(mobile)}
            className="contact-card group bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6 hover:border-[#f97316]/40 hover:shadow-lg hover:shadow-[#f97316]/5 transition-all text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#f97316]/20 transition-colors">
              <span className="material-symbols-outlined text-[#f97316] text-[24px]">local_shipping</span>
            </div>
            <p className="font-mono text-[10px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-1">Mobile Service</p>
            <p className="text-[18px] font-extrabold text-white mb-0.5">{fmtPhone(mobile)}</p>
            <p className="text-[#7a90b8] text-[12px]">24/7 — Anywhere in {locality}</p>
          </a>

          <a
            href={telHref(office)}
            className="contact-card group bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6 hover:border-[#f97316]/40 hover:shadow-lg hover:shadow-[#f97316]/5 transition-all text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#f97316]/20 transition-colors">
              <span className="material-symbols-outlined text-[#f97316] text-[24px]">call</span>
            </div>
            <p className="font-mono text-[10px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-1">Office</p>
            <p className="text-[18px] font-extrabold text-white mb-0.5">{fmtPhone(office)}</p>
            <p className="text-[#7a90b8] text-[12px]">General enquiries</p>
          </a>

          <a
            href={waHref(wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6 hover:border-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/5 transition-all text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#25D366]/20 transition-colors">
              <span className="material-symbols-outlined text-[#25D366] text-[24px]">chat</span>
            </div>
            <p className="font-mono text-[10px] text-[#25D366] uppercase tracking-[0.15em] font-bold mb-1">WhatsApp</p>
            <p className="text-[18px] font-extrabold text-white mb-0.5">{fmtPhone(mobile)}</p>
            <p className="text-[#7a90b8] text-[12px]">Fastest for quotes</p>
          </a>

          <a
            href={`mailto:${email}`}
            className="contact-card group bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6 hover:border-[#fed7aa]/30 hover:shadow-lg hover:shadow-[#fed7aa]/5 transition-all text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#fed7aa]/10 border border-[#fed7aa]/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#fed7aa]/20 transition-colors">
              <span className="material-symbols-outlined text-[#fed7aa] text-[24px]">mail</span>
            </div>
            <p className="font-mono text-[10px] text-[#fed7aa] uppercase tracking-[0.15em] font-bold mb-1">Email</p>
            <p className="text-[13px] font-bold text-white mb-0.5 break-all leading-snug">{email}</p>
            <p className="text-[#7a90b8] text-[12px]">Non-urgent enquiries</p>
          </a>
        </div>

        {/* Mobile: extra contact info */}
        <div className="sm:hidden divide-y divide-[#1e2d4a]">
          <a href={waHref(wa)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-4 py-4">
            <span className="material-symbols-outlined text-[#25D366] text-[20px] shrink-0">chat</span>
            <div>
              <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest">WhatsApp</p>
              <p className="text-[#9aadcc] text-[13px] font-bold">{fmtPhone(mobile)}</p>
            </div>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-4 px-4 py-4">
            <span className="material-symbols-outlined text-[#fed7aa] text-[20px] shrink-0">mail</span>
            <div>
              <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest">Email</p>
              <p className="text-[#9aadcc] text-[13px] break-all">{email}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 px-4 py-4">
            <span className="material-symbols-outlined text-[#f97316] text-[20px] shrink-0">location_on</span>
            <div>
              <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest">Service Area</p>
              <p className="text-[#9aadcc] text-[13px]">{locality}, {region} &amp; surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-14 sm:py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Booking Form */}
            <div className="lg:col-span-3 reveal">
              <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white mb-1.5">Book a Service</h2>
              <p className="text-[#7a90b8] text-[13px] mb-6">We&apos;ll confirm within 5–10 minutes during business hours.</p>
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
                  <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Service Needed</label>
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
                  <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Your Vehicle</label>
                  <input type="text" placeholder="e.g. 2021 Volkswagen Golf" value={form.vehicle} onChange={set('vehicle')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors text-[14px]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Service Address</label>
                  <input type="text" placeholder={`Your address in ${locality} / surrounding area`} value={form.address} onChange={set('address')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors text-[14px]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mb-1.5">Notes (optional)</label>
                  <textarea placeholder="Any additional details…" rows={3} value={form.notes} onChange={set('notes')} className="w-full bg-[#131b2e] border border-[#1e2d4a] text-white placeholder-[#4a5f80] rounded-xl py-3.5 px-4 outline-none focus:border-[#f97316] transition-colors resize-none text-[14px]" />
                </div>
                <button type="submit" className="shimmer-btn w-full text-white font-bold py-4 rounded-xl uppercase tracking-widest text-[13px] shadow-lg shadow-[#f97316]/20 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Send Quote via WhatsApp
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Location & Contact */}
              <div className="reveal hidden sm:block bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6">
                <p className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-5">Location &amp; Contact</p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">location_on</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Service Area</p>
                      <p className="text-[#9aadcc] text-[14px]">{locality}, {region} &amp; surrounding areas</p>
                    </div>
                  </div>
                  <a href={telHref(mobile)} className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">local_shipping</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Mobile Service 24/7</p>
                      <p className="text-white font-bold text-[17px] group-hover:text-[#f97316] transition-colors">{fmtPhone(mobile)}</p>
                    </div>
                  </a>
                  <a href={telHref(office)} className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">call</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Office</p>
                      <p className="text-white font-bold text-[17px] group-hover:text-[#f97316] transition-colors">{fmtPhone(office)}</p>
                    </div>
                  </a>
                  <a href={waHref(wa)} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">chat</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">WhatsApp</p>
                      <p className="text-[#9aadcc] group-hover:text-white transition-colors text-[14px] font-bold">{fmtPhone(mobile)}</p>
                    </div>
                  </a>
                  <a href={`mailto:${email}`} className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">mail</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-[#9aadcc] group-hover:text-white transition-colors text-[13px] break-all">{email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="reveal bg-[#131b2e] border border-[#1e2d4a] rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[#1e2d4a]">
                  <p className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold">Availability</p>
                </div>
                <div className="px-5 py-3 border-b border-[#1e2d4a]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[#f97316] text-[16px]">local_shipping</span>
                    <span className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest font-bold">Mobile — {fmtPhone(mobile)}</span>
                  </div>
                  {shopHours.map((row) => {
                    const isToday = row.day === todayName
                    return (
                      <div
                        key={row.day}
                        className={`flex justify-between items-center py-2 text-[13px] border-b border-[#1e2d4a]/40 last:border-0 ${isToday ? 'bg-[#f97316]/5 -mx-5 px-5' : ''}`}
                      >
                        <span className={`font-medium flex items-center gap-2 ${isToday ? 'text-white' : 'text-[#9aadcc]'}`}>
                          {row.day}
                          {isToday && <span className="font-mono text-[9px] bg-[#f97316] text-white px-1.5 py-0.5 rounded uppercase tracking-wide">Today</span>}
                        </span>
                        <span className={`font-mono text-[12px] ${isToday ? 'text-white font-bold' : 'text-[#7a90b8]'}`}>{row.time}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="px-5 py-4 bg-[#f97316]/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#f97316] text-[16px]">schedule</span>
                    <span className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest font-bold">Emergency — 24/7</span>
                  </div>
                  <p className="text-[#fed7aa] font-bold text-[14px]">24 / 7 — Anytime</p>
                  <p className="text-[#7a90b8] text-[12px] mt-0.5">Emergency dispatch available every day of the year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-14 sm:py-20 bg-[#131b2e] border-t border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[720px] mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="font-mono text-[#f97316] text-[11px] uppercase tracking-[0.2em] font-bold mb-2">FAQ</p>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold tracking-tight text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal bg-[#0b1326] border border-[#1e2d4a] rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-[#131b2e] transition-colors gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-semibold text-[14px] sm:text-[15px]">{faq.q}</span>
                  <span
                    className="material-symbols-outlined text-[#f97316] shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none' }}
                  >
                    expand_more
                  </span>
                </button>
                <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
                  <div className="faq-inner">
                    <p className="px-5 pb-5 text-[#7a90b8] text-[13px] sm:text-[14px] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
