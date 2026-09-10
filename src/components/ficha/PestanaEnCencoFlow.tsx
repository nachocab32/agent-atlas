interface EtapaResuelta {
  etapaNombre: string
  control: string
}

interface PestanaEnCencoFlowProps {
  etapas: EtapaResuelta[]
}

export function PestanaEnCencoFlow({ etapas }: PestanaEnCencoFlowProps) {
  return (
    <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {etapas.map((etapa) => (
        <li key={etapa.etapaNombre} className="flex items-center justify-between gap-4 px-4 py-3">
          <span className="text-sm font-medium text-foreground">{etapa.etapaNombre}</span>
          <span className="text-sm text-muted-foreground">{etapa.control}</span>
        </li>
      ))}
    </ul>
  )
}
