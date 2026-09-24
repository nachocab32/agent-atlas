import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function BloqueCodigoCopiable({ codigo, className = '' }: { codigo: string; className?: string }) {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCopiado(true)
      window.setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button type="button" onClick={copiar} className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-neutral-100 transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={copiado ? 'Código copiado' : 'Copiar código'}>
        {copiado ? <Check className="size-3.5 text-emerald-300" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        {copiado ? 'Copiado' : 'Copiar'}
      </button>
      <pre className="overflow-x-auto rounded-xl border border-border bg-neutral-950 pt-14 pr-4 pb-4 pl-4 font-mono text-xs leading-relaxed text-white"><code>{codigo}</code></pre>
    </div>
  )
}
