import type { Paso } from '@/types/viaje'

interface BloqueEntregaProps {
  entrega: Paso['entrega']
}

export function BloqueEntrega({ entrega }: BloqueEntregaProps) {
  if (entrega.modo === 'manual') {
    return (
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-xs font-medium text-muted-foreground">Tú haces</p>
        <p className="mt-1 text-sm text-foreground">{entrega.tuHaces}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      <div className="px-4 py-3">
        <p className="text-xs font-medium text-muted-foreground">Input</p>
        <p className="mt-0.5 text-sm text-foreground">{entrega.input}</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs font-medium text-muted-foreground">Output</p>
        <p className="mt-0.5 text-sm text-foreground">{entrega.output}</p>
      </div>
    </div>
  )
}
