import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { SettingsProvider } from '@/components/SettingsProvider'
import { ScriptInjector } from '@/components/ScriptInjector'
import { getSettings } from '@/lib/get-settings'

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSettings()

  return (
    <>
      <ScriptInjector html={settings.headScripts} idPrefix="head" />
      <ScriptInjector html={settings.bodyScripts} idPrefix="body" />
      <SettingsProvider settings={settings}>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </SettingsProvider>
    </>
  )
}
