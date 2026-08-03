'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useSettings } from './SettingsProvider'
import { fmtPhone, telHref, waHref } from '@/lib/settings'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const settings = useSettings()

  const mobile = settings.phoneMobile
  const office = settings.phoneOffice
  const wa = settings.whatsappNumber

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-[#0d1525]/95 backdrop-blur-md border-b border-[#1e2d4a] shadow-lg">
        <div className="flex justify-between items-center px-4 md:px-12 py-0 max-w-[1280px] mx-auto h-16">

          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center group shrink-0"
            aria-label="Mobile Tyres Watford 24/7 — Home"
          >
            <Image
              src="/mobile-tyre-watford-24-7-site-logo.webp"
              alt="Mobile Tyres Watford 24/7 logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                    active
                      ? 'text-[#f97316] bg-[#f97316]/10'
                      : 'text-[#b8c9e8] hover:text-[#dae2fd] hover:bg-white/5'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#f97316] rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA + Mobile Controls */}
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <a
              href={waHref(wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#25D366] hover:bg-[#25D366]/10 transition-colors text-[13px] font-bold"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="hidden sm:inline">{fmtPhone(mobile)}</span>
            </a>

            {/* Mobile 24/7 */}
            <a
              href={telHref(mobile)}
              className="hidden sm:flex items-center gap-1.5 bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-2 rounded-lg font-bold text-[13px] uppercase tracking-wide transition-colors shadow-md shadow-[#f97316]/20"
            >
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span className="hidden lg:inline">Mobile 24/7</span>
              <span className="lg:hidden">Mobile</span>
            </a>

            {/* Office */}
            <a
              href={telHref(office)}
              className="hidden lg:flex items-center gap-1.5 bg-[#1e2d4a] hover:bg-[#2d4470] border border-[#2d4470] text-white px-4 py-2 rounded-lg font-bold text-[13px] uppercase tracking-wide transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Office
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors gap-1.5"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-[#dae2fd] rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#dae2fd] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#dae2fd] rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-[#0d1525] border-b border-[#1e2d4a] shadow-2xl transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[16px] font-semibold transition-colors ${
                  active
                    ? 'bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20'
                    : 'text-[#b8c9e8] hover:bg-white/5 hover:text-[#dae2fd]'
                }`}
              >
                {label}
                {active && <span className="material-symbols-outlined text-[18px]">check_circle</span>}
              </Link>
            )
          })}
        </div>

        <div className="px-4 pb-2 grid grid-cols-2 gap-3">
          <a
            href={telHref(mobile)}
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center justify-center gap-0.5 bg-[#f97316] text-white py-3 rounded-xl font-bold text-[12px] uppercase tracking-wide shadow-lg shadow-[#f97316]/20"
          >
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            Mobile 24/7
            <span className="font-mono text-[10px] opacity-80 normal-case tracking-normal">{fmtPhone(mobile)}</span>
          </a>
          <a
            href={telHref(office)}
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center justify-center gap-0.5 bg-[#1e2d4a] border border-[#2d4470] text-white py-3 rounded-xl font-bold text-[12px] uppercase tracking-wide"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Office
            <span className="font-mono text-[10px] opacity-80 normal-case tracking-normal">{fmtPhone(office)}</span>
          </a>
        </div>
        <div className="px-4 pb-4">
          <a
            href={waHref(wa)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-[14px] uppercase tracking-wide w-full"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            WhatsApp · {fmtPhone(mobile)}
          </a>
        </div>

        <div className="px-8 pb-4 text-center text-[12px] text-[#6b7fa3] font-mono">
          {settings.addressLocality} &nbsp;·&nbsp; {fmtPhone(mobile)}
        </div>
      </div>
    </>
  )
}
