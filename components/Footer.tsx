'use client'
import Link from 'next/link'
import { useSettings } from './SettingsProvider'
import { fmtPhone, telHref, waHref } from '@/lib/settings'

const year = new Date().getFullYear()

const pages = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/contact#faq', label: 'FAQ' },
]

const servicesList = [
  'Tyre Puncture Repair',
  'New Tyre Fitting',
  'Tyre Replacement',
  'Wheel Balancing',
  'Tyre Rotation',
  'Locking Wheel Nut Removal',
  'Flat Tyre Emergency Service',
  'Mobile Tyre Fitting',
]

export default function Footer() {
  const settings = useSettings()
  const mobile = settings.phoneMobile
  const office = settings.phoneOffice
  const wa = settings.whatsappNumber
  const email = settings.email
  const locality = settings.addressLocality

  return (
    <>
      <footer className="w-full bg-[#060d1a] text-[#dae2fd] border-t border-[#1a2540]">

        {/* Top CTA bar */}
        <div className="bg-[#f97316] px-4 md:px-12 py-4">
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white font-bold text-[15px]">
              <span className="material-symbols-outlined text-[20px]">warning</span>
              Flat tyre or roadside emergency? We&apos;re available 24/7.
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href={telHref(mobile)}
                className="bg-white text-[#f97316] px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wide hover:bg-[#fff7ed] transition-colors"
              >
                Mobile 24/7 · {fmtPhone(mobile)}
              </a>
              <a
                href={telHref(office)}
                className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wide hover:bg-white/30 transition-colors"
              >
                Office · {fmtPhone(office)}
              </a>
              <a
                href={waHref(wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wide hover:bg-[#1fb859] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-flex items-center mb-4 group">
                <span className="text-white font-extrabold text-[18px] tracking-tight group-hover:text-[#f97316] transition-colors leading-tight">
                  Mobile Tyres <span className="text-[#f97316]">Watford 24/7</span>
                </span>
              </Link>
              <p className="text-[#7a90b8] text-[14px] leading-relaxed mb-5">
                Mobile Tyres Watford 24/7 — {locality}&apos;s trusted mobile tyre fitting service. Same day tyre fitting, puncture repair, and emergency tyre service delivered to your home, office, or roadside — fast and professional.
              </p>
              <div className="flex gap-3">
                <a
                  href={telHref(mobile)}
                  className="w-9 h-9 rounded-lg bg-[#131f38] border border-[#1e2d4a] flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                  aria-label="Mobile 24/7"
                >
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                </a>
                <a
                  href={telHref(office)}
                  className="w-9 h-9 rounded-lg bg-[#131f38] border border-[#1e2d4a] flex items-center justify-center text-[#f97316] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                  aria-label="Office"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                </a>
                <a
                  href={waHref(wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#131f38] border border-[#1e2d4a] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                  aria-label="WhatsApp"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="w-9 h-9 rounded-lg bg-[#131f38] border border-[#1e2d4a] flex items-center justify-center text-[#fed7aa] hover:bg-[#fed7aa] hover:text-[#060d1a] hover:border-[#fed7aa] transition-all"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(locality)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#131f38] border border-[#1e2d4a] flex items-center justify-center text-[#fed7aa] hover:bg-[#fed7aa] hover:text-[#060d1a] hover:border-[#fed7aa] transition-all"
                  aria-label="Location"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </a>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-5">Navigation</h3>
              <ul className="space-y-3">
                {pages.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-[#7a90b8] hover:text-[#dae2fd] transition-colors text-[14px] group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#f97316]/40 group-hover:bg-[#f97316] transition-colors shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-5">Services</h3>
              <ul className="space-y-3">
                {servicesList.map((svc) => (
                  <li key={svc}>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-[#7a90b8] hover:text-[#dae2fd] transition-colors text-[14px] group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#f97316]/40 group-hover:bg-[#f97316] transition-colors shrink-0" />
                      {svc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-5">Contact Info</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">location_on</span>
                    <div>
                      <div className="text-[#7a90b8] text-[12px] font-mono uppercase tracking-wide mb-0.5">Service Area</div>
                      <div className="text-[#dae2fd] text-[14px] leading-snug">{locality} &amp; Surrounding Areas</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">local_shipping</span>
                    <div>
                      <div className="text-[#7a90b8] text-[12px] font-mono uppercase tracking-wide mb-0.5">Mobile Service 24/7</div>
                      <a href={telHref(mobile)} className="text-[#dae2fd] text-[15px] font-bold hover:text-[#f97316] transition-colors">
                        {fmtPhone(mobile)}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">call</span>
                    <div>
                      <div className="text-[#7a90b8] text-[12px] font-mono uppercase tracking-wide mb-0.5">Office</div>
                      <a href={telHref(office)} className="text-[#dae2fd] text-[15px] font-bold hover:text-[#f97316] transition-colors">
                        {fmtPhone(office)}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">schedule</span>
                    <div>
                      <div className="text-[#7a90b8] text-[12px] font-mono uppercase tracking-wide mb-0.5">Hours</div>
                      <div className="text-[#dae2fd] text-[14px]">Mon–Sun: Available</div>
                      <div className="text-[#fed7aa] text-[13px]">Mobile: 24/7 Anytime</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">mail</span>
                    <div>
                      <div className="text-[#7a90b8] text-[12px] font-mono uppercase tracking-wide mb-0.5">Email</div>
                      <a
                        href={`mailto:${email}`}
                        className="text-[#dae2fd] text-[13px] hover:text-[#f97316] transition-colors break-all"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a2540] px-4 md:px-12 py-5">
          <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#4a5f80]">
            <span className="font-mono uppercase tracking-wider">
              © {year} Mobile Tyres Watford 24/7. All rights reserved.
            </span>
            <div className="flex items-center gap-1 font-mono uppercase tracking-wider">
              <span className="material-symbols-outlined text-[14px] text-[#f97316]">location_on</span>
              Serving {locality} &amp; Surrounding Areas
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="grid grid-cols-2 border-t border-[#1a2540] bg-[#060d1a] shadow-2xl">
          <a
            href={telHref(mobile)}
            className="flex flex-col items-center justify-center gap-0.5 py-3 bg-[#f97316] text-white font-bold text-[11px] uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            Mobile 24/7
            <span className="font-mono text-[9px] opacity-80 normal-case">{fmtPhone(mobile)}</span>
          </a>
          <a
            href={telHref(office)}
            className="flex flex-col items-center justify-center gap-0.5 py-3 bg-[#1e2d4a] text-white font-bold text-[11px] uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Office
            <span className="font-mono text-[9px] opacity-80 normal-case">{fmtPhone(office)}</span>
          </a>
        </div>
      </div>
    </>
  )
}
