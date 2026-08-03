import { createServiceClient } from './supabase/server'
import { DEFAULT_SETTINGS, type SiteSettings } from './settings'

/**
 * Fetch settings server-side using the service-role key.
 * Falls back gracefully to defaults if Supabase is not configured or the row is missing.
 * Must only be called from server components / server actions.
 */
export async function getSettings(): Promise<SiteSettings> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return DEFAULT_SETTINGS
  }

  try {
    const supabase = createServiceClient()
    const { data, error } = await supabase
      .from('mtw_site_settings')
      .select('*')
      .eq('id', 1)
      .single()

    if (error || !data) return DEFAULT_SETTINGS

    return {
      phoneMobile: data.phone_mobile || DEFAULT_SETTINGS.phoneMobile,
      phoneOffice: data.phone_office || DEFAULT_SETTINGS.phoneOffice,
      whatsappNumber: data.whatsapp_number || DEFAULT_SETTINGS.whatsappNumber,
      email: data.email || DEFAULT_SETTINGS.email,
      addressLocality: data.address_locality || DEFAULT_SETTINGS.addressLocality,
      addressRegion: data.address_region || DEFAULT_SETTINGS.addressRegion,
      headScripts: data.head_scripts ?? '',
      bodyScripts: data.body_scripts ?? '',
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}
