import { LayoutGrid, TableProperties } from 'lucide-react'
import { GrillaActivos } from '@/components/catalogo/GrillaActivos'
import { cn } from '@/shared/lib/utils'
import type { Activo } from '@/types/catalogo'

export type VistaApis = 'tarjetas' | 'tabla'

interface SeccionApisFiltrosProps {
  activosFiltrados: Activo[]
  onSeleccionarActivo: (activo: Activo) => void
  vista: VistaApis
  onCambiarVista: (vista: VistaApis) => void
}

// Los filtros propios de APIs (dominio/lifecycle/owner) viven ahora en el popover
// de filtros de la toolbar (ver ToolbarCatalogo en catalogo-page.tsx).
export function SeccionApisFiltros({ activosFiltrados, onSeleccionarActivo, vista, onCambiarVista }: SeccionApisFiltrosProps) {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Todas las APIs</h2>
        <div role="group" aria-label="Vista de APIs" className="inline-flex rounded-lg border border-border bg-card p-0.5">
          <button
            type="button"
            onClick={() => onCambiarVista('tarjetas')}
            aria-pressed={vista === 'tarjetas'}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              vista === 'tarjetas' ? 'bg-primary text-primary-foreground hover:bg-green-900' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            <LayoutGrid className="size-4" />
            Tarjetas
          </button>
          <button
            type="button"
            onClick={() => onCambiarVista('tabla')}
            aria-pressed={vista === 'tabla'}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              vista === 'tabla' ? 'bg-primary text-primary-foreground hover:bg-green-900' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            <TableProperties className="size-4" />
            Tabla
          </button>
        </div>
      </div>
      <div className="mt-3">
        {vista === 'tarjetas' ? (
          <GrillaActivos activos={activosFiltrados} onSeleccionarActivo={onSeleccionarActivo} />
        ) : (
          <TablaApis activos={activosFiltrados} onSeleccionarActivo={onSeleccionarActivo} />
        )}
      </div>
    </section>
  )
}

function TablaApis({ activos, onSeleccionarActivo }: { activos: Activo[]; onSeleccionarActivo: (activo: Activo) => void }) {
  if (activos.length === 0) {
    return <p className="text-sm text-muted-foreground">No encontramos aceleradores que coincidan con los filtros.</p>
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="min-w-[44rem] w-full text-left text-sm">
        <thead className="bg-muted text-xs text-muted-foreground">
          <tr>
            <th scope="col" className="px-4 py-3 font-medium">API</th>
            <th scope="col" className="px-4 py-3 font-medium">Dominio</th>
            <th scope="col" className="px-4 py-3 font-medium">Lifecycle</th>
            <th scope="col" className="px-4 py-3 font-medium">Owner</th>
            <th scope="col" className="px-4 py-3 font-medium">Versión</th>
          </tr>
        </thead>
        <tbody>
          {activos.map((activo) => (
            <tr
              key={activo.id}
              tabIndex={0}
              onClick={() => onSeleccionarActivo(activo)}
              onKeyDown={(evento) => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                  evento.preventDefault()
                  onSeleccionarActivo(activo)
                }
              }}
              className="cursor-pointer border-t border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              aria-label={`Abrir ${activo.nombre}`}
            >
              <th scope="row" className="px-4 py-3 font-medium text-foreground">{activo.nombre}</th>
              <td className="px-4 py-3 text-muted-foreground">{activo.dominio ?? '—'}</td>
              <td className="px-4 py-3 text-muted-foreground">{activo.lifecycle === 'production' ? 'Producción' : 'Experimental'}</td>
              <td className="px-4 py-3 text-muted-foreground">{activo.responsable.nombre}</td>
              <td className="px-4 py-3 text-muted-foreground">v{activo.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
