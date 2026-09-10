import { cn } from '@/shared/lib/utils'
import type { EtapaSimple } from '@/types/viaje'

interface IndiceMacrofaseSimpleProps {
  etapas: EtapaSimple[]
  etapaActivaId: string
  onSeleccionarEtapa: (etapaId: string) => void
}

export function IndiceMacrofaseSimple({ etapas, etapaActivaId, onSeleccionarEtapa }: IndiceMacrofaseSimpleProps) {
  return (
    <nav className="relative flex flex-col gap-1">
      {/* Misma columna vertebral que el índice de Diseño. */}
      <div className="absolute top-4 bottom-4 left-4 w-px bg-border" aria-hidden="true" />

      {etapas.map((etapa) => {
        const activa = etapa.id === etapaActivaId
        return (
          <button
            key={etapa.id}
            type="button"
            onClick={() => onSeleccionarEtapa(etapa.id)}
            className={cn(
              'relative flex items-start gap-3 rounded-lg py-2 pr-2 text-left transition-colors hover:bg-muted',
              activa && 'bg-accent/5',
            )}
          >
            <span
              className={cn(
                'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 bg-background text-xs font-semibold',
                activa ? 'border-accent text-accent' : 'border-border text-muted-foreground',
              )}
            >
              {etapa.numero}
            </span>
            <span className="flex flex-col pt-1">
              <span className={cn('text-sm font-medium', activa ? 'text-accent' : 'text-foreground')}>
                {etapa.nombre}
              </span>
              <span className="text-xs text-muted-foreground">{etapa.descripcion}</span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}
