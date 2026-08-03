export interface SiteSettings {
  phoneMobile: string      // e.g. "07466756907"
  phoneOffice: string      // e.g. "01923240599"
  whatsappNumber: string   // international digits, e.g. "447466756907"
  email: string
  addressLocality: string  // e.g. "Watford"
  addressRegion: string    // e.g. "Hertfordshire"
  headScripts: string      // raw HTML for injection before </body> (GTM init etc.)
  bodyScripts: string      // raw HTML for injection after <body> (GTM noscript etc.)
}

export const DEFAULT_SETTINGS: SiteSettings = {
  phoneMobile: '07466756907',
  phoneOffice: '01923240599',
  whatsappNumber: '447466756907',
  email: 'Mirahmed0101@gmail.com',
  addressLocality: 'Watford',
  addressRegion: 'Hertfordshire',
  headScripts: '',
  bodyScripts: '',
}

/** Format a raw phone number with a space after the 5th digit — e.g. "07466 756907". */
export function fmtPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  return digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : (digits || raw)
}

/** Build a tel: href, stripping spaces. */
export function telHref(raw: string): string {
  return `tel:${raw.replace(/\s/g, '')}`
}

/** Build a wa.me/ href from the stored international number. */
export function waHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, '')}`
}

