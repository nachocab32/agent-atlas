import type { EtapaSimple } from '@/types/viaje'

interface PanelEtapaSimpleProps {
  etapa: EtapaSimple
  total: number
}

export function PanelEtapaSimple({ etapa, total }: PanelEtapaSimpleProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-medium text-muted-foreground">
        Etapa {etapa.numero} de {total}
      </p>
      <h2 className="mt-1 text-xl font-semibold text-foreground">{etapa.nombre}</h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{etapa.descripcion}</p>
    </div>
  )
}
