'use client'
import { useActionState } from 'react'
import { saveSettings, type ActionState } from '@/lib/actions/settings'
import type { SiteSettings } from '@/lib/settings'

const labelCls = 'block text-[#7a90b8] text-xs font-mono uppercase tracking-widest mb-1.5'
const inputCls =
  'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316] transition-colors'
const textareaCls =
  'w-full bg-[#0b1326] border border-[#1e2d4a] rounded-lg px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-[#f97316] transition-colors resize-y min-h-[120px]'

function Field({
  label,
  name,
  defaultValue,
  type = 'text',
  hint,
}: {
  label: string
  name: string
  defaultValue: string
  type?: string
  hint?: string
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={inputCls}
      />
      {hint && <p className="text-[#7a90b8] text-xs mt-1">{hint}</p>}
    </div>
  )
}

function TextareaField({
  label,
  name,
  defaultValue,
  hint,
}: {
  label: string
  name: string
  defaultValue: string
  hint?: string
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <textarea name={name} defaultValue={defaultValue} className={textareaCls} />
      {hint && <p className="text-[#7a90b8] text-xs mt-1">{hint}</p>}
    </div>
  )
}

const initialState: ActionState = { success: false, errors: [] }

export default function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [state, action, pending] = useActionState(saveSettings, initialState)

  const globalError = state.errors.find((e) => e.field === '_')?.message

  return (
    <form action={action} className="space-y-8">
      {state.success && (
        <div className="bg-green-900/30 border border-green-700/50 text-green-300 px-4 py-3 rounded-lg text-sm">
          Settings saved successfully.
        </div>
      )}
      {globalError && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm">
          {globalError}
        </div>
      )}
      {state.errors.length > 0 && !globalError && (
        <div className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-sm space-y-1">
          {state.errors.map((e, i) => <p key={i}>{e.message}</p>)}
        </div>
      )}

      {/* Contact Details */}
      <section className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
        <h2 className="text-white font-bold text-base mb-4">Contact Details</h2>
        <Field
          label="Mobile Number"
          name="phoneMobile"
          defaultValue={settings.phoneMobile}
          hint="Shown in header, footer, floating button. E.g. 07466756907"
        />
        <Field
          label="Office Number"
          name="phoneOffice"
          defaultValue={settings.phoneOffice}
          hint="Shown in header and footer. E.g. 01923240599"
        />
        <Field
          label="WhatsApp Number"
          name="whatsappNumber"
          defaultValue={settings.whatsappNumber}
          hint="International format without +. E.g. 447466756907"
        />
        <Field
          label="Email Address"
          name="email"
          defaultValue={settings.email}
          type="email"
        />
        <Field
          label="Town / City"
          name="addressLocality"
          defaultValue={settings.addressLocality}
          hint="E.g. Watford"
        />
        <Field
          label="County / Region"
          name="addressRegion"
          defaultValue={settings.addressRegion}
          hint="E.g. Hertfordshire"
        />
      </section>

      {/* Scripts */}
      <section className="bg-[#0d1525] border border-[#1e2d4a] rounded-2xl p-6 space-y-4">
        <h2 className="text-white font-bold text-base mb-4">Analytics &amp; Tracking Scripts</h2>
        <TextareaField
          label="Head Scripts"
          name="headScripts"
          defaultValue={settings.headScripts}
          hint="Paste GTM init, Meta Pixel, or other <script> tags to inject into <head>. Max 20,000 chars."
        />
        <TextareaField
          label="Body Scripts"
          name="bodyScripts"
          defaultValue={settings.bodyScripts}
          hint="Paste <noscript> fallbacks or body-open snippets. Max 20,000 chars."
        />
      </section>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white font-bold py-3 rounded-xl text-sm uppercase tracking-wide transition-colors"
      >
        {pending ? 'Saving…' : 'Save Settings'}
      </button>
    </form>
  )
}
