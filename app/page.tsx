import Link from 'next/link'
import Image from 'next/image'
import FaqAccordion from '@/components/FaqAccordion'
import BookingForm from '@/components/BookingForm'
import RevealObserver from '@/components/RevealObserver'

const faqSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can Mobile Tyres Watford 24/7 arrive for emergency tyre service near me?', acceptedAnswer: { '@type': 'Answer', text: 'On average under 60 minutes across Watford and surrounding areas, depending on traffic and availability. Our emergency tyre service line is open 24/7 — including nights, weekends, and bank holidays.' } },
    { '@type': 'Question', name: 'Do you offer same day mobile tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mobile Tyres Watford 24/7 offers same day mobile tyre fitting for tyre changes, puncture repairs, and new tyre installations across Watford and nearby areas — subject to technician availability. Call or WhatsApp us on 07466756907.' } },
    { '@type': 'Question', name: 'What does your mobile tyre service include?', acceptedAnswer: { '@type': 'Answer', text: 'Our mobile tyre service covers tyre puncture repair, new tyre fitting, tyre replacement, wheel balancing, tyre rotation, locking wheel nut removal, and flat tyre emergency service — all performed at your home, office, or roadside.' } },
    { '@type': 'Question', name: 'Can you repair my flat tyre, or do I need a full tyre replacement?', acceptedAnswer: { '@type': 'Answer', text: "In many cases a flat tyre can be repaired rather than replaced. Our technician will inspect the puncture on-site — if it's a simple nail or screw in the tread area, a tyre puncture repair is usually sufficient." } },
  ],
}

const schemaData = {
  '@context': 'https://schema.org',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  description:
    'Mobile Tyres Watford 24/7 provides same day mobile tyre fitting, tyre puncture repair, wheel balancing, tyre rotation, locking wheel nut removal, and emergency flat tyre service in Watford and surrounding areas.',
  areaServed: ['Watford', 'Hemel Hempstead', 'St Albans', 'Bushey', 'Rickmansworth', 'Abbots Langley', 'Chorleywood'],
  priceRange: '££',
  sameAs: ['https://wa.me/447466756907'],
}

const googleReviews = [
  {
    author: 'James Harrison',
    initials: 'JH',
    color: '#ea4335',
    ago: '2 weeks ago',
    text: 'Fantastic service! Had a flat tyre at 11pm and they arrived within 45 minutes. Professional, friendly and reasonably priced. Highly recommend Mobile Tyres Watford 24/7!',
  },
  {
    author: 'Sarah Mitchell',
    initials: 'SM',
    color: '#4285f4',
    ago: '1 month ago',
    text: 'Called them on a Sunday morning with a puncture and they were at my door within the hour. Sorted the tyre quickly and the price was very fair. Will definitely use again.',
  },
  {
    author: 'David Okafor',
    initials: 'DO',
    color: '#34a853',
    ago: '3 weeks ago',
    text: 'Great mobile tyre fitting service. They came to my office in Watford and changed all four tyres while I was in meetings. Super convenient and professionally done.',
  },
  {
    author: 'Emma Clarke',
    initials: 'EC',
    color: '#9c27b0',
    ago: '2 months ago',
    text: 'Needed a locking wheel nut removed — no other garage could help quickly but these guys came out the same day and sorted it without any damage. Brilliant service.',
  },
  {
    author: 'Mohammed Ali',
    initials: 'MA',
    color: '#ff6d00',
    ago: '1 month ago',
    text: 'Very fast response, good pricing and excellent workmanship. Got two new tyres fitted on my driveway. Will be using them for all my tyre needs going forward.',
  },
  {
    author: 'Claire Thompson',
    initials: 'CT',
    color: '#e91e63',
    ago: '6 weeks ago',
    text: 'I got a puncture on the M25 and they arrived roadside within 50 minutes. Absolute lifesavers. Very professional and kept me informed throughout.',
  },
  {
    author: 'Raj Patel',
    initials: 'RP',
    color: '#00897b',
    ago: '2 months ago',
    text: 'Used them for a full set of new tyres. Came to my home, completed the job efficiently and the wheel balancing is spot on. No vibration at all. Really impressed.',
  },
  {
    author: 'Lucy Barnes',
    initials: 'LB',
    color: '#4285f4',
    ago: '3 months ago',
    text: 'Reliable, punctual and great value. I had my tyres rotated and balanced at home which saved me so much time. 10/10 service.',
  },
]

const GoogleG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const services = [
  {
    img: '/Tire Change & Balancing-airanko.webp',
    alt: 'Technician performing mobile tyre puncture repair',
    title: 'Tyre Puncture Repair',
    desc: 'Got a puncture? We come to you and repair it on the spot — at home, office, or roadside. Fast, safe, and professionally done without needing a tow truck.',
    tags: ['On-Site', 'Same Day', 'Roadside'],
  },
  {
    img: '/New Tire Installation-airanko.webp',
    alt: 'New tyre being fitted mobile service Watford',
    title: 'New Tyre Fitting',
    desc: 'We supply and fit new tyres from leading brands at your location. Choose from premium or budget-friendly options — all balanced and fitted to manufacturer specification.',
    tags: ['Premium Brands', 'Budget Options', 'Same Day'],
  },
  {
    img: '/New & Used Tires-airanko.webp',
    alt: 'Mobile tyre replacement service Watford',
    title: 'Tyre Replacement',
    desc: 'Whether you need one tyre or a full set replaced, we bring the tyres to you and fit them on-site. No garage visit, no waiting room — just professional service at your door.',
    tags: ['Full Set', 'Single Tyre', 'On-Site'],
  },
  {
    img: '/Tire Change & Balancing-airanko.webp',
    alt: 'Wheel balancing mobile service Watford',
    title: 'Wheel Balancing',
    desc: 'Vibration or uneven tyre wear? Our mobile wheel balancing service corrects imbalances at your location, giving you a smooth, safe drive every time.',
    tags: ['Vibration Fix', 'On-Site', 'All Vehicles'],
  },
  {
    img: '/Seasonal Tire Swap-airanko.webp',
    alt: 'Tyre rotation mobile service Watford',
    title: 'Tyre Rotation',
    desc: 'Extend the life of your tyres with a regular rotation service. We come to you and rotate your tyres to ensure even wear across all four corners.',
    tags: ['Extended Tyre Life', 'On-Site', 'Quick Service'],
  },
  {
    img: '/Alloy Rim Fitting-airanko.webp',
    alt: 'Locking wheel nut removal mobile service Watford',
    title: 'Locking Wheel Nut Removal',
    desc: 'Lost your locking wheel nut key? Our specialist technicians can safely remove locking wheel nuts without causing damage to your alloys or wheel bolts.',
    tags: ['No Damage', 'Specialist Tool', 'Same Day'],
  },
  {
    img: '/Emergency Flat Repair-airanko.webp',
    alt: 'Emergency flat tyre service Watford 24/7',
    title: 'Flat Tyre Emergency Service',
    desc: 'Flat tyre in the middle of the night or on the motorway? Our 24/7 emergency flat tyre service dispatches immediately — we typically arrive within 60 minutes anywhere in Watford.',
    tags: ['24/7', '60-Min ETA', 'Roadside'],
  },
  {
    img: '/The Full Shop Experienc-airanko.webp',
    alt: 'Mobile tyre fitting at home office roadside Watford',
    title: 'Mobile Tyre Fitting',
    desc: 'We come to your home, office, or roadside location with everything needed to fit your tyres professionally. No garage visit required — fully mobile, fully equipped.',
    tags: ['Home / Office', 'Roadside', 'Fully Equipped'],
  },
]

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
      <RevealObserver />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#060e20] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Home Page Hero Section Background Image-airanko.webp"
            alt="Professional mobile tyre fitting technician at work in Watford"
            fill
            priority
            quality={40}
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e20] via-[#060e20]/80 to-[#060e20]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-[#060e20]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e20]/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-4 md:px-12 max-w-[1280px] mx-auto w-full py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/25 text-[#f97316] mb-5">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="font-mono text-[11px] uppercase tracking-widest font-bold">24/7 Mobile Tyre Service · Watford</span>
          </div>

          <h1 className="text-[42px] sm:text-[56px] md:text-[72px] font-extrabold tracking-tight leading-[1.05] text-white mb-5 max-w-3xl">
            Mobile Tyre Fitting at Your Doorstep —{' '}
            <span className="text-[#f97316]">Watford &amp; Surrounding Areas</span>
          </h1>

          <p className="text-[#9aadcc] text-[16px] sm:text-[18px] leading-relaxed max-w-xl mb-8">
            Mobile Tyres Watford 24/7 is Watford&apos;s trusted mobile tyre service. Whether you need same day tyre fitting, puncture repair, wheel balancing, or emergency tyre service — our technicians come to your home, office, or roadside anywhere in Watford.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            <a
              href="tel:07466756907"
              className="flex items-center justify-center gap-2 bg-[#f97316] text-white px-7 py-4 rounded-xl font-bold text-[15px] uppercase tracking-wide emergency-pulse shadow-lg shadow-[#f97316]/20"
            >
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              Mobile 24/7 — 07466 756907
            </a>
            <a
              href="tel:01923240599"
              className="flex items-center justify-center gap-2 bg-[#1e2d4a] border border-[#2d4470] text-white px-7 py-4 rounded-xl font-bold text-[15px] uppercase tracking-wide hover:bg-[#2d4470] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              Office — 01923 240599
            </a>
            <a
              href="https://wa.me/447466756907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-xl font-bold text-[15px] uppercase tracking-wide"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              WhatsApp Us
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: 'timer', text: '60-Min Emergency ETA' },
              { icon: 'verified_user', text: 'Fully Insured Technicians' },
              { icon: 'location_on', text: 'Watford & Hertfordshire' },
              { icon: 'price_check', text: 'Upfront Transparent Pricing' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-[#7a90b8] text-[13px]">
                <span className="material-symbols-outlined text-[#f97316] text-[16px]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Reviews Carousel ── */}
      <section className="py-8 bg-[#060d1a] border-b border-[#1a2540] overflow-hidden reviews-outer">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <GoogleG />
            <span className="text-white font-bold text-[14px]">Google Reviews</span>
            <span className="flex gap-0.5 ml-1">
              {[1,2,3,4,5].map((i) => (
                <span key={i} style={{ color: '#FBBC05', fontSize: 13 }}>★</span>
              ))}
            </span>
            <span className="text-[#7a90b8] text-[13px]">5.0 · Watford</span>
          </div>
        </div>

        <div className="reviews-track gap-4 px-4">
          {[...googleReviews, ...googleReviews].map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[290px] bg-white rounded-2xl p-4 shadow-md flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[13px] shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-[13px] leading-tight">{r.author}</p>
                    <p className="text-gray-400 text-[11px]">{r.ago}</p>
                  </div>
                </div>
                <GoogleG />
              </div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((j) => (
                  <span key={j} style={{ color: '#FBBC05', fontSize: 15 }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-[12.5px] leading-relaxed line-clamp-3">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Brand Ticker ── */}
      <section className="py-5 bg-[#0b1326] border-y border-[#1e2d4a] overflow-hidden">
        <div className="animate-brand-scroll whitespace-nowrap">
          {['Michelin', 'Goodyear', 'Continental', 'Pirelli', 'Bridgestone', 'Yokohama', 'Dunlop', 'Hankook', 'Falken', 'Toyo', 'Kumho',
            'Michelin', 'Goodyear', 'Continental', 'Pirelli', 'Bridgestone', 'Yokohama', 'Dunlop', 'Hankook', 'Falken', 'Toyo', 'Kumho'].map((brand, i) => (
            <span key={i} className="text-[#2d3f5e] font-black text-[15px] uppercase tracking-widest mx-10">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="text-center mb-6 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">What We Do</p>
            <h2 className="text-[30px] md:text-[38px] font-extrabold tracking-tight text-white">Mobile Tyre Services We Offer in Watford &amp; Surrounding Areas</h2>
          </div>
          <p className="text-center text-[#7a90b8] text-[15px] leading-relaxed max-w-2xl mx-auto mb-12 reveal">
            From routine tyre fitting to roadside emergency puncture repair, Mobile Tyres Watford 24/7 provides a full range of mobile tyre services delivered to your location. No tow truck, no waiting room — just professional mobile tyre fitting wherever you are.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="reveal group bg-[#131b2e] rounded-2xl overflow-hidden border border-[#1e2d4a] hover:border-[#f97316]/40 hover:shadow-xl hover:shadow-[#f97316]/5 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="relative h-44 overflow-hidden bg-[#0b1326]">
                  <Image
                    src={svc.img}
                    alt={svc.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[16px] font-bold text-white mb-1.5">{svc.title}</h3>
                  <p className="text-[#7a90b8] text-[13px] leading-relaxed flex-1 mb-3">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#0b1326] border border-[#1e2d4a] rounded text-[10px] font-mono text-[#f97316] uppercase tracking-wide">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-3">Why Choose Us</p>
              <h2 className="text-[30px] md:text-[40px] font-extrabold tracking-tight text-white mb-5 leading-tight">
                Professional Tyre Service,{' '}
                <span className="text-[#f97316]">Delivered to Your Door</span>
              </h2>
              <p className="text-[#7a90b8] text-[16px] leading-relaxed mb-8">
                Mobile Tyres Watford 24/7 isn&apos;t just a mobile tyre service — we bring the full garage experience wherever you are. From puncture repair to same day tyre fitting, every visit is handled by experienced technicians using professional-grade equipment. No shortcuts, no surprises.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: 'speed',
                    title: 'Rapid Emergency Response',
                    desc: 'Under 60 minutes to your location across Watford and surrounding areas — 24/7, including nights and weekends.',
                  },
                  {
                    icon: 'build',
                    title: 'Professional Equipment',
                    desc: 'We arrive fully equipped to handle tyre fitting, balancing, puncture repair, and locking wheel nut removal on-site.',
                  },
                  {
                    icon: 'price_check',
                    title: 'Upfront Transparent Pricing',
                    desc: 'We quote before we start. Your invoice always matches your quote. No surprises — ever.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#f97316] text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-[15px] mb-0.5">{item.title}</p>
                      <p className="text-[#7a90b8] text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-[#f97316] font-bold text-[14px] hover:gap-3 transition-all">
                  Learn more about us
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-2xl overflow-hidden border border-[#1e2d4a] shadow-2xl">
                <div className="relative h-72 w-full">
                  <Image
                    src="/The Full Shop Experienc-airanko.webp"
                    alt="Professional mobile tyre service delivered to your door in Watford"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="bg-[#0b1326] p-5 grid grid-cols-3 divide-x divide-[#1e2d4a]">
                  {[
                    { value: '5000+', label: 'Tyres Fitted' },
                    { value: '5★', label: 'Rated Service' },
                    { value: '24/7', label: 'Emergency Line' },
                  ].map((s) => (
                    <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
                      <p className="text-[22px] font-extrabold text-[#f97316] leading-none">{s.value}</p>
                      <p className="font-mono text-[10px] text-[#7a90b8] uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-14 bg-[#131b2e] border-y border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div className="reveal">
                <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-1">Service Area</p>
                <h2 className="text-white font-bold text-[20px] md:text-[24px] leading-snug">
                  Mobile Tyre Service Near You —<br className="hidden sm:block" /> Watford &amp; Hertfordshire
                </h2>
              </div>
              <div className="reveal flex flex-wrap gap-2 justify-start sm:justify-end">
                {['Watford', 'Hemel Hempstead', 'St Albans', 'Bushey', 'Rickmansworth', 'Abbots Langley', 'Chorleywood'].map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-[#0b1326] border border-[#1e2d4a] rounded-full text-[13px] text-[#9aadcc] font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <p className="reveal text-[#7a90b8] text-[14px] leading-relaxed max-w-3xl">
              Mobile Tyres Watford 24/7 provides mobile tyre repair near you across Watford and the surrounding Hertfordshire area. Whether you need a puncture repair in Hemel Hempstead, a tyre change near you in St Albans, or same day mobile tyre fitting in Bushey — we come to you.
            </p>

            {/* NAP Block */}
            <div className="reveal flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-2">
              <div className="flex items-center gap-2 text-[#7a90b8] text-[13px]">
                <span className="material-symbols-outlined text-[#f97316] text-[15px]">location_on</span>
                Watford, Hertfordshire
              </div>
              <a href="tel:07466756907" className="flex items-center gap-2 text-[#7a90b8] text-[13px] hover:text-[#dae2fd] transition-colors">
                <span className="material-symbols-outlined text-[#f97316] text-[15px]">local_shipping</span>
                Mobile 24/7: 07466 756907
              </a>
              <a href="tel:01923240599" className="flex items-center gap-2 text-[#7a90b8] text-[13px] hover:text-[#dae2fd] transition-colors">
                <span className="material-symbols-outlined text-[#f97316] text-[15px]">call</span>
                Office: 01923 240599
              </a>
              <a href="mailto:Mirahmed0101@gmail.com" className="flex items-center gap-2 text-[#7a90b8] text-[13px] hover:text-[#dae2fd] transition-colors">
                <span className="material-symbols-outlined text-[#f97316] text-[15px]">mail</span>
                Mirahmed0101@gmail.com
              </a>
            </div>

            {/* Map */}
            <div className="reveal rounded-2xl overflow-hidden border border-[#1e2d4a] shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39718.97185484076!2d-0.4368849!3d51.6564981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764b05a4c26db9%3A0x6a31af4a3e3fcb2!2sWatford!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mobile Tyres Watford 24/7 — Watford, Hertfordshire"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section id="booking" className="py-20 bg-[#0b1326]">
        <div className="px-4 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Form */}
            <div className="reveal">
              <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">Book a Service</p>
              <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-white mb-2 leading-tight">
                Get a Fast Quote for Mobile Tyre Service Near You
              </h2>
              <p className="text-[#7a90b8] text-[14px] mb-7">
                Need a tyre puncture repair, tyre fitting, or emergency tyre service in Watford? Fill out the form below and we will respond within 5–10 minutes during business hours.
              </p>
              <BookingForm />
            </div>

            {/* Contact Info */}
            <div className="reveal flex flex-col gap-6">
              <div className="bg-[#131b2e] border border-[#1e2d4a] rounded-2xl p-6">
                <p className="font-mono text-[11px] text-[#f97316] uppercase tracking-[0.15em] font-bold mb-5">Contact Us Directly</p>
                <div className="space-y-5">
                  <a href="tel:07466756907" className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">local_shipping</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Mobile Service 24/7</p>
                      <p className="text-white font-bold text-[18px] group-hover:text-[#f97316] transition-colors">07466 756907</p>
                    </div>
                  </a>
                  <a href="tel:01923240599" className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">call</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Office</p>
                      <p className="text-white font-bold text-[18px] group-hover:text-[#f97316] transition-colors">01923 240599</p>
                    </div>
                  </a>
                  <a href="https://wa.me/447466756907" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">chat</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">WhatsApp</p>
                      <p className="text-[#9aadcc] group-hover:text-white transition-colors text-[14px] font-bold">07466 756907</p>
                    </div>
                  </a>
                  <a href="mailto:Mirahmed0101@gmail.com" className="flex gap-3 items-start group">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">mail</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-[#9aadcc] group-hover:text-white transition-colors text-[13px] break-all">Mirahmed0101@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#f97316] text-[18px] mt-0.5 shrink-0">location_on</span>
                    <div>
                      <p className="font-mono text-[10px] text-[#4a5f80] uppercase tracking-widest mb-0.5">Service Area</p>
                      <p className="text-[#9aadcc] text-[14px]">Watford, Hertfordshire &amp; surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f97316]/10 border border-[#f97316]/20 rounded-2xl p-5 flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#f97316] shrink-0">warning</span>
                <div>
                  <p className="text-white font-bold text-[14px] mb-0.5">Flat tyre or roadside emergency? We operate 24/7.</p>
                  <p className="text-[#9aadcc] text-[13px]">Mobile Tyres Watford 24/7 operates around the clock. Call or WhatsApp anytime — our emergency tyre service line never closes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#131b2e] border-t border-[#1e2d4a]">
        <div className="px-4 md:px-12 max-w-[720px] mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="font-mono text-[#f97316] text-[12px] uppercase tracking-[0.2em] font-bold mb-2">FAQ</p>
            <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-white">
              Frequently Asked Questions — Mobile Tyre Service Watford
            </h2>
          </div>
          <FaqAccordion />
          <div className="text-center mt-8 reveal">
            <Link href="/contact#faq" className="inline-flex items-center gap-2 text-[#f97316] font-bold text-[14px] hover:gap-3 transition-all">
              See more FAQs on Contact page
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
