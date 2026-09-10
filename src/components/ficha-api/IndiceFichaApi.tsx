import { cn } from '@/shared/lib/utils'

interface IndiceFichaApiProps {
  secciones: readonly { id: string; label: string }[]
  seccionActivaId: string
  onSeleccionarSeccion: (id: string) => void
}

export function IndiceFichaApi({ secciones, seccionActivaId, onSeleccionarSeccion }: IndiceFichaApiProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      {secciones.map((seccion) => {
        const activa = seccion.id === seccionActivaId
        return (
          <button
            key={seccion.id}
            type="button"
            onClick={() => onSeleccionarSeccion(seccion.id)}
            className={cn(
              'rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted',
              activa ? 'bg-accent/5 font-medium text-accent' : 'text-muted-foreground',
            )}
          >
            {seccion.label}
          </button>
        )
      })}
    </nav>
  )
}
