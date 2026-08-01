'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stats = [
  { end: 5000, suffix: '+', label: 'Tyres Fitted', decimal: false },
  { end: 5.0, suffix: '/5', label: 'Average Rating', decimal: true },
  { end: 5, suffix: '+', label: 'Years in Business', decimal: false },
  { end: 60, suffix: 'min', label: 'Avg ETA', decimal: false },
]

const values = [
  { icon: 'speed', title: 'Speed Without Shortcuts', desc: 'We respond fast because we stay ready — stocked vans, trained techs, optimised dispatch across Watford.' },
  { icon: 'build', title: 'Precision Every Time', desc: 'Professional fitting, correct torque, and proper balancing — no guesswork, no return visits.' },
  { icon: 'handshake', title: 'Honest Pricing', desc: 'Quote before we start, invoice matches the quote. Always.' },
  { icon: 'verified_user', title: 'Fully Insured', desc: 'Every technician carries liability insurance. Your vehicle is covered.' },
  { icon: 'location_on', title: 'Watford Based', desc: 'We know Watford and Hertfordshire inside out — fast local response every time.' },
  { icon: 'thumb_up', title: 'Satisfaction Guaranteed', desc: 'Any fitment issue within 7 days? We come back and correct it, free of charge.' },
]

export default function AboutPage() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLSpanElement
          const i = parseInt(el.dataset.idx ?? '0')
          const stat = stats[i]
          if (!stat) return
          const duration = 1600
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            const val = eased * stat.end
            el.textContent = stat.decimal ? val.toFixed(1) : Math.floor(val).toLocaleString()
            if (p < 1) requestAnimationFrame(tick)
            else el.textContent = stat.decimal ? stat.end.toFixed(1) : stat.end.toLocaleString()
          }
          requestAnimationFrame(tick)
          obs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    counterRefs.current.forEach((el) => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Mobile Tyres Watford 24/7 — Mobile Tyre Service Watford',
    url: 'https://mobiletyreswatford247.co.uk/about',
    description: 'Learn about Mobile Tyres Watford 24/7, Watford\'s trusted mobile tyre fitting service. Experienced technicians, 24/7 emergency tyre service, and professional wheel balancing across Hertfordshire.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Mobile Tyres Watford 24/7',
      url: 'https://mobiletyreswatford247.co.uk',
      telephone: ['07466756907', '01923240599'],
      email: 'Mirahmed0101@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Watford',
        addressRegion: 'Hertfordshire',
        addressCountry: 'GB',
      },
      areaServed: ['Watford', 'Hemel Hempstead', 'St Albans', 'Bushey', 'Rickmansworth', 'Abbots Langley', 'Chorleywood'],
      description: 'Mobile Tyres Watford 24/7 provides same day mobile tyre fitting, puncture repair, wheel balancing, and emergency tyre service in Watford and across Hertfordshire.',
    },
  }

  return (
    <main className="pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* ── Hero ── */}
      <section className="relative flex items-end pb-12 sm:pb-16 pt-20 sm:pt-24 overflow-hidden bg-[#060e20]">
        <div className="absolute inset-0">
          <img
            src="/The Full Shop Experienc-airanko.webp"
            alt="Mobile tyre technician at work in Watford"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e20] via-[#060e20]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 px-4 md:px-12 max-w-[1280px] mx-auto w-full">
          <p className="font-mono text-[#e11d48] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">Our Story</p>
          <h1 className="text-[34px] sm:text-[48px] md:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white mb-4 max-w-3xl">
            Built for the <span className="text-[#e11d48]">Drivers of Watford.</span>
          </h1>
          <p className="text-[#9aadcc] text-[15px] sm:text-[17px] leading-relaxed max-w-lg">
            Mobile Tyres Watford 24/7 was founded on a simple premise: professional tyre service should come to you — not the other way around.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-14 sm:py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal">
              <p className="font-mono text-[#e11d48] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">Who We Are</p>
              <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold tracking-tight text-white mb-5 leading-tight">
                Watford&apos;s Trusted Mobile Tyre Team
              </h2>
              <p className="text-[#7a90b8] text-[15px] leading-relaxed mb-4">
                We started with a clear vision: deliver professional tyre services directly to the driver&apos;s driveway. No waiting rooms, no wasted afternoons at a garage.
              </p>
              <p className="text-[#7a90b8] text-[15px] leading-relaxed mb-7">
                Today our experienced technicians serve hundreds of Watford and Hertfordshire customers every year, carrying premium tyre inventory and the expertise to handle everything from emergency puncture repairs to full tyre replacements.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Watford', 'Hemel Hempstead', 'St Albans', 'Bushey', 'Rickmansworth', 'Chorleywood'].map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-[#131b2e] border border-[#1e2d4a] rounded-full text-[12px] text-[#9aadcc] font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-2xl overflow-hidden border border-[#1e2d4a] shadow-2xl">
                <img
                  src="/Tire Change & Balancing-airanko.webp"
                  alt="Mobile tyre service van ready for dispatch in Watford"
                  className="w-full h-52 sm:h-64 object-cover opacity-80"
                />
                <div className="bg-[#131b2e] p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e11d48]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#e11d48] text-[20px]">verified</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px] mb-1">Experienced &amp; Fully Insured</p>
                    <p className="text-[#7a90b8] text-[13px] leading-relaxed">
                      All technicians are background-checked and carry liability coverage. Your vehicle is always in professional hands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 sm:py-16 bg-[#131b2e] border-y border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className="reveal text-center py-7 sm:py-10 px-3 rounded-2xl bg-[#0b1326] border border-[#1e2d4a]">
                <div className="text-[36px] sm:text-[44px] font-extrabold tracking-tight text-[#e11d48] leading-none mb-1">
                  <span ref={(el) => { counterRefs.current[i] = el }} data-idx={i}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-14 sm:py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="font-mono text-[#e11d48] text-[11px] uppercase tracking-[0.2em] font-bold mb-2">What We Stand For</p>
            <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold tracking-tight text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal flex gap-4 p-5 rounded-2xl bg-[#131b2e] border border-[#1e2d4a] hover:border-[#e11d48]/30 transition-colors"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#e11d48]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#e11d48] text-[20px]">{v.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-[14px] mb-1">{v.title}</p>
                  <p className="text-[#7a90b8] text-[13px] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-14 sm:py-20 bg-[#131b2e] border-y border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#1e2d4a] shadow-2xl">
                <img
                  src="/Seasonal Tire Swap-airanko.webp"
                  alt="Technician performing professional tyre service in Watford"
                  className="w-full h-56 sm:h-72 object-cover opacity-75"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b1326] to-transparent p-5">
                  <p className="font-mono text-[10px] text-[#ffb3b6] uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-[22px] sm:text-[26px] font-extrabold text-white">Under 60 Minutes</p>
                </div>
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <p className="font-mono text-[#e11d48] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">How It Works</p>
              <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-extrabold tracking-tight text-white mb-7 leading-tight">
                Your Tyre Service, Your Location
              </h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Book in Seconds', desc: 'Call, WhatsApp, or fill in our form. We confirm within minutes.' },
                  { step: '02', title: 'We Come to You', desc: 'Our fully-loaded van heads to your home, office, or wherever your car is parked in Watford.' },
                  { step: '03', title: 'Professional Service', desc: 'Tyre fitted, balanced, torqued to spec — done right, on-site, every time.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-mono text-[#e11d48] text-[12px] font-bold pt-0.5 shrink-0">{item.step}</span>
                    <div>
                      <p className="text-white font-bold text-[15px] mb-1">{item.title}</p>
                      <p className="text-[#7a90b8] text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-20 bg-[#e11d48]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight text-white mb-3">
            Ready to Experience Mobile Tyre Service?
          </h2>
          <p className="text-white/75 text-[15px] sm:text-[17px] mb-8 max-w-md mx-auto">
            Join hundreds of Watford drivers who skipped the garage. Book today — no garage visit required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:07466756907"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#e11d48] px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#fff5f6] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call 07466 756907
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
