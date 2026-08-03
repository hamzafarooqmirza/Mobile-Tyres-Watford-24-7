import Script from 'next/script'

interface ParsedItem {
  type: 'external' | 'inline' | 'noscript'
  src?: string
  code?: string
  html?: string
}

/**
 * Parses a raw HTML string into distinct script/noscript tokens.
 * Handles: <script src="...">, <script>...code...</script>, <noscript>...</noscript>.
 * Strips HTML comments. Ignores anything that isn't one of the above three.
 */
function parseScripts(raw: string): ParsedItem[] {
  if (!raw.trim()) return []
  const items: ParsedItem[] = []
  const cleaned = raw.replace(/<!--[\s\S]*?-->/g, '')
  const re = /<(script|noscript)((?:\s[^>]*)?)\s*>([\s\S]*?)<\/\1>/gi
  let match: RegExpExecArray | null

  while ((match = re.exec(cleaned)) !== null) {
    const tag = match[1].toLowerCase()
    const attrs = match[2] ?? ''
    const content = match[3] ?? ''

    if (tag === 'noscript') {
      items.push({ type: 'noscript', html: content })
    } else {
      const srcMatch = attrs.match(/src\s*=\s*["']([^"']+)["']/)
      if (srcMatch) {
        items.push({ type: 'external', src: srcMatch[1] })
      } else if (content.trim()) {
        items.push({ type: 'inline', code: content })
      }
    }
  }

  return items
}

/**
 * Renders parsed GTM / analytics scripts injected via the settings panel.
 * Use idPrefix to ensure unique Script IDs when multiple injectors are on the page.
 */
export function ScriptInjector({ html, idPrefix }: { html: string; idPrefix: string }) {
  const items = parseScripts(html)
  if (!items.length) return null

  return (
    <>
      {items.map((item, i) => {
        if (item.type === 'external') {
          return <Script key={i} src={item.src!} strategy="afterInteractive" />
        }
        if (item.type === 'inline') {
          return (
            <Script key={i} id={`${idPrefix}-${i}`} strategy="afterInteractive">
              {item.code!}
            </Script>
          )
        }
        // noscript — rendered server-side for bots / no-JS environments
        return <noscript key={i} dangerouslySetInnerHTML={{ __html: item.html! }} />
      })}
    </>
  )
}
