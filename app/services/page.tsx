'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Tyre Puncture Repair',
    desc: 'Got a puncture? We come to you and repair it on the spot. Fast, safe, and professionally done without the need for a tow truck — at your home, office, or roadside.',
    tags: ['On-Site', 'Roadside', 'Same Day'],
    img: '/Tire Change & Balancing-airanko.webp',
    imgAlt: 'Mobile tyre puncture repair Watford',
  },
  {
    title: 'New Tyre Fitting',
    desc: 'We supply and fit new tyres from leading UK and European brands at your location. Premium options include Michelin, Goodyear, Pirelli, and Continental — all balanced and fitted to spec.',
    tags: ['Premium Brands', 'Budget Options', 'Same Day'],
    img: '/New Tire Installation-airanko.webp',
    imgAlt: 'New tyre fitting mobile service Watford',
  },
  {
    title: 'Tyre Replacement',
    desc: 'Whether you need a single tyre or a full set replaced, we bring the tyres to you and fit them on-site. No garage visit required — professional service at your door.',
    tags: ['Full Set', 'Single Tyre', 'On-Site'],
    img: '/New & Used Tires-airanko.webp',
    imgAlt: 'Mobile tyre replacement Watford',
  },
  {
    title: 'Wheel Balancing',
    desc: 'Vibration or uneven tyre wear? Our mobile wheel balancing service corrects imbalances at your location, giving you a smooth and safe drive.',
    tags: ['Vibration Fix', 'On-Site', 'All Vehicles'],
    img: '/Tire Change & Balancing-airanko.webp',
    imgAlt: 'Mobile wheel balancing service Watford',
  },
  {
    title: 'Tyre Rotation',
    desc: 'Extend the life of your tyres with a regular rotation service. We come to you and rotate your tyres to ensure even tread wear across all four corners.',
    tags: ['Extended Tyre Life', 'On-Site', 'Quick Service'],
    img: '/Seasonal Tire Swap-airanko.webp',
    imgAlt: 'Mobile tyre rotation service Watford',
  },
  {
    title: 'Locking Wheel Nut Removal',
    desc: 'Lost your locking wheel nut key? Our specialist technicians carry professional tools to safely remove locking wheel nuts without causing damage to your alloys.',
    tags: ['No Damage', 'Specialist Tools', 'Same Day'],
    img: '/Alloy Rim Fitting-airanko.webp',
    imgAlt: 'Locking wheel nut removal Watford',
  },
  {
    title: 'Flat Tyre Emergency Service',
    desc: 'Stuck on the roadside with a flat tyre? We dispatch immediately and aim to arrive within 60 minutes anywhere in Watford and surrounding areas — 24 hours a day, 7 days a week.',
    tags: ['24/7', '60-Min ETA', 'Roadside'],
    img: '/Emergency Flat Repair-airanko.webp',
    imgAlt: 'Emergency flat tyre service Watford 24/7',
  },
  {
    title: 'Mobile Tyre Fitting at Home, Office or Roadside',
    desc: 'Our fully equipped mobile unit comes to you — wherever your car is. Home, office car park, or roadside — we handle everything on-site with professional equipment.',
    tags: ['Home / Office', 'Roadside', 'Fully Equipped'],
    img: '/The Full Shop Experienc-airanko.webp',
    imgAlt: 'Mobile tyre fitting at home office or roadside Watford',
  },
]

const faqs = [
  {
    q: 'How long does a mobile tyre fitting take?',
    a: 'A single tyre change typically takes 20–30 minutes. A full four-tyre swap with balancing takes around 45–60 minutes on-site.',
  },
  {
    q: 'Do you service apartment or office car parks?',
    a: 'Yes — as long as there is sufficient clearance for our equipment and you have permission to use the space, we can come to you.',
  },
  {
    q: 'Can you source specific tyre brands or sizes?',
    a: 'Yes. Give us the specs and we can usually source and bring your preferred brand or size within 24 hours.',
  },
  {
    q: 'Is there a guarantee on the work?',
    a: 'All tyre fittings and balancing work is guaranteed. Any issue within 7 days? We come back and fix it free of charge.',
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mobile Tyres Watford 24/7',
    url: 'https://mobiletyreswatford247.co.uk/services',
    telephone: ['07466756907', '01923240599'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Watford',
      addressRegion: 'Hertfordshire',
      addressCountry: 'GB',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Tyre Services Watford',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tyre Puncture Repair', description: 'Mobile tyre puncture repair at your home, office, or roadside in Watford.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Tyre Fitting', description: 'Supply and fit new tyres from leading brands at your location in Watford.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tyre Replacement', description: 'Single or full set tyre replacement delivered and fitted at your location.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wheel Balancing', description: 'Mobile wheel balancing to eliminate vibration and uneven tyre wear.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tyre Rotation', description: 'Mobile tyre rotation to extend tyre life with even tread wear.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Locking Wheel Nut Removal', description: 'Specialist removal of locking wheel nuts when the key is lost or damaged.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flat Tyre Emergency Service', description: '24/7 emergency flat tyre service across Watford and surrounding Hertfordshire areas.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Tyre Fitting at Home, Office or Roadside', description: 'Fully mobile tyre fitting service at your preferred location in Watford.' } },
      ],
    },
  }

  return (
    <main className="pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* ── Hero ── */}
      <section className="relative py-24 bg-[#060e20] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/The Full Shop Experienc-airanko.webp"
            alt="Mobile tyre service Watford"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e20] via-[#060e20]/80 to-transparent" />
        </div>
        <div className="relative z-10 px-4 md:px-12 max-w-[1280px] mx-auto">
          <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-3">What We Do</p>
          <h1 className="text-[44px] md:text-[64px] font-extrabold tracking-tight leading-[1.05] text-white mb-5 max-w-2xl">
            Mobile Tyre Services in Watford
          </h1>
          <p className="text-[#9aadcc] text-[17px] leading-relaxed max-w-lg mb-8">
            We bring the full tyre service to your driveway, office, or roadside — no garage, no waiting. Fast, professional, and precise.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:07466756907" className="bg-[#f97316] text-white px-7 py-3.5 rounded-xl font-bold text-[14px] uppercase tracking-wide emergency-pulse shadow-lg shadow-[#f97316]/20">
              Call for Emergency
            </a>
            <a href="https://wa.me/447466756907" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-[14px] uppercase tracking-wide">
              WhatsApp · 07466 756907
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">8 Services</p>
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-white">Everything You Need, On-Site</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="reveal group bg-[#131b2e] rounded-2xl overflow-hidden border border-[#1e2d4a] hover:border-[#f97316]/40 hover:shadow-xl hover:shadow-[#f97316]/5 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-[#0b1326]">
                  <img
                    src={svc.img}
                    alt={svc.imgAlt}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[18px] font-bold text-white mb-2 leading-snug">{svc.title}</h3>
                  <p className="text-[#7a90b8] text-[14px] leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-[#0b1326] border border-[#1e2d4a] rounded-md text-[11px] font-mono text-[#f97316] uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-[#131b2e] border-y border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">Why Choose Us</p>
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-white">The Mobile Tyres Watford Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: 'speed', title: '60-Min Emergency Response', desc: 'We dispatch fast. Average Watford area arrival time under one hour.' },
              { icon: 'build', title: 'Professional Equipment', desc: 'Fully equipped mobile unit — tyre fitting, balancing, and specialist tools on board.' },
              { icon: 'verified_user', title: 'Fully Insured Technicians', desc: 'Every tech carries liability insurance. Your vehicle is always protected.' },
              { icon: 'price_check', title: 'Upfront Pricing', desc: 'We quote before we start. You approve every charge before we touch your car.' },
              { icon: 'location_on', title: 'Serving Watford & Hertfordshire', desc: 'We cover Watford, Hemel Hempstead, St Albans, Bushey, Rickmansworth and more.' },
              { icon: 'thumb_up', title: '5-Star Rated', desc: 'Consistently 5-star reviews from happy customers across Watford and the surrounding area.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="reveal flex gap-4 p-5 rounded-2xl bg-[#0b1326] border border-[#1e2d4a]"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#f97316] text-[20px]">{item.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] mb-1">{item.title}</p>
                  <p className="text-[#7a90b8] text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">Process</p>
            <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: 'phone_in_talk', step: '1', title: 'Contact Us', desc: 'Call, WhatsApp, or book online.' },
              { icon: 'event_available', step: '2', title: 'Get a Quote', desc: 'Upfront price. You approve before we start.' },
              { icon: 'local_shipping', step: '3', title: 'We Arrive', desc: 'Fully-equipped van at your location, on time.' },
              { icon: 'build', step: '4', title: 'Service Done', desc: 'Fitted, balanced, and checked to spec.' },
              { icon: 'task_alt', step: '5', title: 'Drive Away', desc: 'Final check complete. You\'re good to go.' },
            ].map((item, i) => (
              <div
                key={item.step}
                className="reveal flex flex-col items-center text-center p-6 rounded-2xl bg-[#131b2e] border border-[#1e2d4a] relative"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center mb-4 shadow-lg shadow-[#f97316]/25">
                  <span className="material-symbols-outlined text-white text-[22px]">{item.icon}</span>
                </div>
                <div className="font-mono text-[11px] text-[#f97316] uppercase tracking-widest mb-1">Step {item.step}</div>
                <p className="text-white font-bold text-[15px] mb-1">{item.title}</p>
                <p className="text-[#7a90b8] text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ── */}
      <section className="py-14 bg-[#f97316]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-white/80 font-mono text-[12px] uppercase tracking-widest mb-1">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              24/7 Emergency Line
            </div>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-white leading-tight">Flat Tyre Right Now?</h2>
            <p className="text-white/75 text-[15px] mt-1">We dispatch immediately. Average Watford area arrival under 60 minutes.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:07466756907" className="bg-white text-[#f97316] px-7 py-3.5 rounded-xl font-bold text-[14px] uppercase tracking-wide hover:bg-[#fff7ed] transition-colors">
              Call Now
            </a>
            <a href="https://wa.me/447466756907" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-[14px] uppercase tracking-wide">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[720px] mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">FAQ</p>
            <h2 className="text-[32px] font-extrabold tracking-tight text-white">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal bg-[#131b2e] border border-[#1e2d4a] rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-[#1a2540] transition-colors gap-4"
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
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-[#131b2e] border-t border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-[#7a90b8] text-[17px] mb-10 max-w-md mx-auto">
            No garage visit, no waiting room. A certified tyre technician at your door — when and where you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07466756907" className="shimmer-btn text-white px-10 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider">
              Call 07466 756907
            </a>
            <Link href="/contact" className="border-2 border-[#f97316] text-[#f97316] px-10 py-4 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#f97316] hover:text-white transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
