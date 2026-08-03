export interface SettingsInput {
  phoneMobile: string
  phoneOffice: string
  whatsappNumber: string
  email: string
  addressLocality: string
  addressRegion: string
  headScripts: string
  bodyScripts: string
}

export interface ValidationError {
  field: string
  message: string
}

const PHONE_RE = /^[\d\s+\-().]+$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSettings(input: SettingsInput): ValidationError[] {
  const errors: ValidationError[] = []

  if (!input.phoneMobile.trim()) {
    errors.push({ field: 'phoneMobile', message: 'Mobile phone is required.' })
  } else if (input.phoneMobile.length > 20) {
    errors.push({ field: 'phoneMobile', message: 'Mobile phone must be 20 characters or fewer.' })
  } else if (!PHONE_RE.test(input.phoneMobile)) {
    errors.push({ field: 'phoneMobile', message: 'Mobile phone contains invalid characters.' })
  }

  if (!input.phoneOffice.trim()) {
    errors.push({ field: 'phoneOffice', message: 'Office phone is required.' })
  } else if (input.phoneOffice.length > 20) {
    errors.push({ field: 'phoneOffice', message: 'Office phone must be 20 characters or fewer.' })
  } else if (!PHONE_RE.test(input.phoneOffice)) {
    errors.push({ field: 'phoneOffice', message: 'Office phone contains invalid characters.' })
  }

  if (!input.whatsappNumber.trim()) {
    errors.push({ field: 'whatsappNumber', message: 'WhatsApp number is required.' })
  } else if (input.whatsappNumber.length > 20) {
    errors.push({ field: 'whatsappNumber', message: 'WhatsApp number must be 20 characters or fewer.' })
  } else if (!/^\d+$/.test(input.whatsappNumber.replace(/[\s+]/g, ''))) {
    errors.push({ field: 'whatsappNumber', message: 'WhatsApp number must be digits only (no spaces or + needed).' })
  }

  if (!input.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required.' })
  } else if (input.email.length > 320) {
    errors.push({ field: 'email', message: 'Email must be 320 characters or fewer.' })
  } else if (!EMAIL_RE.test(input.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' })
  }

  if (!input.addressLocality.trim()) {
    errors.push({ field: 'addressLocality', message: 'City / locality is required.' })
  } else if (input.addressLocality.length > 200) {
    errors.push({ field: 'addressLocality', message: 'City must be 200 characters or fewer.' })
  }

  if (!input.addressRegion.trim()) {
    errors.push({ field: 'addressRegion', message: 'Region / county is required.' })
  } else if (input.addressRegion.length > 200) {
    errors.push({ field: 'addressRegion', message: 'Region must be 200 characters or fewer.' })
  }

  if (input.headScripts.length > 20000) {
    errors.push({ field: 'headScripts', message: 'Head scripts must be 20,000 characters or fewer.' })
  }

  if (input.bodyScripts.length > 20000) {
    errors.push({ field: 'bodyScripts', message: 'Body scripts must be 20,000 characters or fewer.' })
  }

  return errors
}
