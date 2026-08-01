'use client'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/447466756907"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — Mobile Service"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <span className="material-symbols-outlined text-white text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          WhatsApp · 07466 756907
        </span>
      </a>

      {/* Mobile Tyre Service — 24/7 */}
      <a
        href="tel:07466756907"
        aria-label="Mobile Tyre Service 24/7"
        className="group relative w-14 h-14 rounded-full bg-[#e11d48] flex items-center justify-center shadow-xl shadow-[#e11d48]/40 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          Mobile 24/7 · 07466 756907
        </span>
      </a>

      {/* Office Call */}
      <a
        href="tel:01923240599"
        aria-label="Call the Office"
        className="group relative w-14 h-14 rounded-full bg-[#1e2d4a] border border-[#2d4470] flex items-center justify-center shadow-xl hover:bg-[#e11d48] hover:border-[#e11d48] hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
        <span className="pointer-events-none absolute right-16 bg-[#0d1525] text-white text-[12px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-[#1e2d4a]">
          Office · 01923 240599
        </span>
      </a>

    </div>
  )
}
