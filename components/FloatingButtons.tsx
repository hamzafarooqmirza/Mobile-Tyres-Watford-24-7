'use client'
import { useSettings } from './SettingsProvider'
import { fmtPhone, telHref, waHref } from '@/lib/settings'

export default function FloatingButtons() {
  const settings = useSettings()
  const mobile = settings.phoneMobile
  const office = settings.phoneOffice
  const wa = settings.whatsappNumber

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href={waHref(wa)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — Mobile Service"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <span className="material-symbols-outlined text-white text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          WhatsApp · {fmtPhone(mobile)}
        </span>
      </a>

      {/* Mobile Tyre Service — 24/7 */}
      <a
        href={telHref(mobile)}
        aria-label="Mobile Tyre Service 24/7"
        className="group relative w-14 h-14 rounded-full bg-[#f97316] flex items-center justify-center shadow-xl shadow-[#f97316]/40 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          Mobile 24/7 · {fmtPhone(mobile)}
        </span>
      </a>

      {/* Office Call */}
      <a
        href={telHref(office)}
        aria-label="Call the Office"
        className="group relative w-14 h-14 rounded-full bg-[#1e2d4a] border border-[#2d4470] flex items-center justify-center shadow-xl hover:bg-[#f97316] hover:border-[#f97316] hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          Office · {fmtPhone(office)}
        </span>
      </a>

    </div>
  )
}
