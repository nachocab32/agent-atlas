import { GrillaActivos } from '@/components/catalogo/GrillaActivos'
import { tipoActivoLabel } from '@/data/catalogo'
import type { Activo, TipoActivo } from '@/types/catalogo'

const TIPOS_VITRINA: TipoActivo[] = ['arquetipo', 'skill', 'agente', 'mcp-server', 'api']

const tituloPorTipo: Record<TipoActivo, string> = {
  arquetipo: 'Arquetipos', skill: 'Skills', agente: 'Agentes', 'mcp-server': 'MCP servers', api: 'APIs',
}

interface VitrinaPorTipoProps {
  activos: Activo[]
  onSeleccionarActivo: (activo: Activo) => void
  onVerTodo: (tipo: TipoActivo) => void
}

// En "Todos" el catálogo muestra una muestra uniforme de cada familia.
export function VitrinaPorTipo({ activos, onSeleccionarActivo, onVerTodo }: VitrinaPorTipoProps) {
  return (
    <div className="flex flex-col gap-8">
      {TIPOS_VITRINA.map((tipo) => {
        const activosTipo = activos.filter((activo) => activo.tipo === tipo)
        if (activosTipo.length === 0) return null

        return (
          <section key={tipo} aria-label={tipoActivoLabel[tipo]}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{tituloPorTipo[tipo]}</h2>
              {activosTipo.length > 4 && (
                <button type="button" onClick={() => onVerTodo(tipo)} className="text-xs font-medium text-primary underline-offset-4 hover:underline">
                  Ver todo
                </button>
              )}
            </div>
            <div className="mt-3">
              <GrillaActivos activos={activosTipo.slice(0, 4)} onSeleccionarActivo={onSeleccionarActivo} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
