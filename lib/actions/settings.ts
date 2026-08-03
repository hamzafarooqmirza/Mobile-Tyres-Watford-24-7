'use server'
import { redirect } from 'next/navigation'
import { createServiceClient } from '@/lib/supabase/server'
import { getSession } from '@/lib/auth-session'
import { validateSettings, type ValidationError } from '@/lib/validate-settings'

export interface ActionState {
  success: boolean
  errors: ValidationError[]
}

export async function saveSettings(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const loggedIn = await getSession()
  if (!loggedIn) redirect('/login')

  const input = {
    phoneMobile:     (formData.get('phoneMobile')     as string ?? '').trim(),
    phoneOffice:     (formData.get('phoneOffice')     as string ?? '').trim(),
    whatsappNumber:  (formData.get('whatsappNumber')  as string ?? '').trim(),
    email:           (formData.get('email')           as string ?? '').trim(),
    addressLocality: (formData.get('addressLocality') as string ?? '').trim(),
    addressRegion:   (formData.get('addressRegion')   as string ?? '').trim(),
    headScripts:     (formData.get('headScripts')     as string ?? ''),
    bodyScripts:     (formData.get('bodyScripts')     as string ?? ''),
  }

  const errors = validateSettings(input)
  if (errors.length > 0) return { success: false, errors }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      success: false,
      errors: [{ field: '_', message: 'Supabase is not configured on this server. Set env vars and redeploy.' }],
    }
  }

  const supabase = createServiceClient()
  const { error } = await supabase
    .schema('mobile_tyres_watford')
    .from('site_settings')
    .upsert({
      id: 1,
      phone_mobile:     input.phoneMobile,
      phone_office:     input.phoneOffice,
      whatsapp_number:  input.whatsappNumber,
      email:            input.email,
      address_locality: input.addressLocality,
      address_region:   input.addressRegion,
      head_scripts:     input.headScripts,
      body_scripts:     input.bodyScripts,
      updated_at:       new Date().toISOString(),
    })

  if (error) {
    return { success: false, errors: [{ field: '_', message: `Database error: ${error.message}` }] }
  }

  return { success: true, errors: [] }
}
