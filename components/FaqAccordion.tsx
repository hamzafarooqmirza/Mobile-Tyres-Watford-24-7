'use client'
import { useState } from 'react'
import { useSettings } from './SettingsProvider'
import { fmtPhone } from '@/lib/settings'

export default function FaqAccordion() {
  const settings = useSettings()
  const mobile = fmtPhone(settings.phoneMobile)
  const office = fmtPhone(settings.phoneOffice)
  const mobileRaw = settings.phoneMobile

  const faqs = [
    {
      q: 'How quickly can Mobile Tyres Watford 24/7 arrive for an emergency tyre service near me?',
      a: 'On average under 60 minutes across Watford and surrounding areas, depending on traffic and availability. Our emergency tyre service line is open 24/7 — including nights, weekends, and bank holidays.',
    },
    {
      q: 'Do you offer same day mobile tyre fitting?',
      a: `Yes. Mobile Tyres Watford 24/7 offers same day mobile tyre fitting for tyre changes, puncture repairs, and new tyre installations across Watford and nearby areas — subject to technician availability. Call or WhatsApp us on ${mobileRaw} to confirm a same day slot.`,
    },
    {
      q: 'What does your mobile tyre repair service include?',
      a: 'Our mobile tyre service covers tyre puncture repair, new tyre fitting, tyre replacement, wheel balancing, tyre rotation, locking wheel nut removal, and flat tyre emergency service — all performed at your home, office, or roadside location.',
    },
    {
      q: 'How much does mobile tyre service cost compared to a tyre shop near me?',
      a: 'Our pricing is highly competitive with any tyre shop near you — and you save the time and cost of driving in, waiting, and returning. All quotes are upfront and transparent. Contact us for a free quote tailored to your vehicle and service needs.',
    },
    {
      q: 'Can you repair my flat tyre, or do I need a full tyre replacement?',
      a: "In many cases a flat tyre can be repaired rather than replaced. Our technician will inspect the puncture on-site — if it's a simple nail or screw in the tread area, a tyre puncture repair is usually sufficient. If the sidewall is damaged or the tread is too worn, we'll recommend a replacement and can supply one on the spot.",
    },
    {
      q: 'Do I need to be present during mobile tyre fitting?',
      a: "Not necessarily. As long as we have access to your vehicle and the locking wheel-nut key (if applicable), our technicians can complete your mobile tyre service without you being present. We'll send you a completion update when the job is done.",
    },
    {
      q: 'What areas in and around Watford do you cover?',
      a: 'Our core service area is Watford. We also regularly serve Hemel Hempstead, St Albans, Bushey, Rickmansworth, Abbots Langley, Chorleywood, and surrounding Hertfordshire areas. Call us to confirm availability.',
    },
    {
      q: 'Is your mobile tyre service available 24/7 for emergency tyre situations?',
      a: `Yes. Our mobile emergency tyre service line (${mobileRaw}) is available 24 hours a day, 7 days a week. Whether you have a blowout late at night or a flat tyre before an early morning meeting, Mobile Tyres Watford 24/7 is the emergency tyre service near you that never closes.`,
    },
    {
      q: "Can you remove a locking wheel nut if I've lost the key?",
      a: 'Yes — locking wheel nut removal is one of our specialist services. Our technicians carry professional tools to safely remove locking wheel nuts without damaging your alloys.',
    },
    {
      q: 'Can I book a tyre fitting in advance?',
      a: `Absolutely. You can request a quote via our contact form, WhatsApp us on ${mobile}, or call our office on ${office}. Same day mobile tyre fitting is also available for urgent requests, subject to availability.`,
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="reveal bg-[#0b1326] border border-[#1e2d4a] rounded-xl overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-[#131b2e] transition-colors gap-4"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <span className="text-white font-semibold text-[15px]">{faq.q}</span>
            <span
              className="material-symbols-outlined text-[#f97316] shrink-0 transition-transform duration-300"
              style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none' }}
            >
              expand_more
            </span>
          </button>
          <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
            <div className="faq-inner">
              <p className="px-6 pb-5 text-[#7a90b8] text-[14px] leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
