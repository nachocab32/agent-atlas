import { cn } from '@/shared/lib/utils'
import type { EtapaViaje } from '@/types/viaje'
import { IndicePasoItem } from './IndicePasoItem'

interface IndiceViajeProps {
  etapas: EtapaViaje[]
  pasoActivoId: string | null
  onSeleccionarPaso: (pasoId: string) => void
}

export function IndiceViaje({ etapas, pasoActivoId, onSeleccionarPaso }: IndiceViajeProps) {
  return (
    <nav className="relative flex flex-col gap-6">
      {/* Columna vertebral: continua de arriba a abajo de todo el índice. */}
      <div className="absolute top-4 bottom-4 left-4 w-px bg-border" aria-hidden="true" />

      {etapas.map((etapa) => {
        const etapaActiva = etapa.pasos.some((paso) => paso.id === pasoActivoId)
        return (
          <div key={etapa.id} className="relative flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 bg-background text-xs font-semibold',
                  etapaActiva ? 'border-accent text-accent' : 'border-border text-muted-foreground',
                )}
              >
                {etapa.numero}
              </span>
              <p className="text-xs font-medium text-muted-foreground">{etapa.nombre}</p>
            </div>
            <ul className="ml-11 flex flex-col gap-1">
              {etapa.pasos.map((paso) => (
                <IndicePasoItem
                  key={paso.id}
                  paso={paso}
                  activo={paso.id === pasoActivoId}
                  onSeleccionar={() => onSeleccionarPaso(paso.id)}
                />
              ))}
            </ul>
          </div>
        )
      })}
    </nav>
  )
}
