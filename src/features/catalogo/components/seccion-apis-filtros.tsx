import { GrillaActivos } from '@/components/catalogo/GrillaActivos'
import type { Activo } from '@/types/catalogo'

interface SeccionApisFiltrosProps {
  activosFiltrados: Activo[]
  onSeleccionarActivo: (activo: Activo) => void
}

// Los filtros propios de APIs (dominio/lifecycle/owner) viven ahora en el popover
// de filtros de la toolbar (ver ToolbarCatalogo en catalogo-page.tsx).
export function SeccionApisFiltros({ activosFiltrados, onSeleccionarActivo }: SeccionApisFiltrosProps) {
  return (
    <section>
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Todas las APIs</h2>
      <div className="mt-3">
        <GrillaActivos activos={activosFiltrados} onSeleccionarActivo={onSeleccionarActivo} />
      </div>
    </section>
  )
}
