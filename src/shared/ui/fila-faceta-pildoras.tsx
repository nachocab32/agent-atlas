import { cn } from '@/shared/lib/utils'

interface OpcionFaceta {
  valor: string
  label: string
  cantidad?: number
}

interface FilaFacetaPildorasProps {
  etiqueta: string
  opciones: OpcionFaceta[]
  valorSeleccionado: string | null
  onSeleccionar: (valor: string) => void
  resaltarValor?: string
}

// Fila de píldoras de selección única (toggle: reclic quita el filtro).
// Reusada por las facetas del popover de filtros: etapa y categoría (Aceleradores),
// categoría y madurez (Guías), y dominio/lifecycle/owner (dentro de FiltrosApiExtra).
export function FilaFacetaPildoras({
  etiqueta,
  opciones,
  valorSeleccionado,
  onSeleccionar,
  resaltarValor,
}: FilaFacetaPildorasProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{etiqueta}</span>
      <div className="flex flex-wrap items-center gap-1.5">
        {opciones.map((opcion) => {
          const activa = opcion.valor === valorSeleccionado
          const esResaltada = resaltarValor && opcion.valor === resaltarValor
          return (
            <button
              key={opcion.valor}
              type="button"
              onClick={() => onSeleccionar(opcion.valor)}
              className={cn(
                'inline-flex items-center gap-1 rounded-full border bg-card px-2.5 py-1 text-xs font-medium transition-colors',
                esResaltada
                  ? cn('border-accent/30', activa ? 'bg-accent text-accent-foreground' : 'bg-accent/5 text-accent')
                  : cn('border-border text-muted-foreground hover:border-foreground/20 hover:bg-muted', activa && 'border-foreground bg-foreground text-background'),
              )}
            >
              <span>{opcion.label}</span>
              {opcion.cantidad !== undefined && (
                <span
                  className={cn(
                    'text-[10px] tabular-nums',
                    activa ? 'text-accent-foreground/75' : 'text-muted-foreground/75',
                  )}
                >
                  {opcion.cantidad}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
