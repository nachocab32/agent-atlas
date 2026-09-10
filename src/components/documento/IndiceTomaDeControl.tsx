import { ChevronDown, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import type { PaginaDocumento } from '@/types/documento'

interface IndiceTomaDeControlProps {
  paginas: PaginaDocumento[]
  paginaActivaId?: string
  onSeleccionarPagina: (id: string) => void
}

const grupos = [
  { titulo: 'Guías', paginas: ['inicio', 'elegir-situacion', 'minimo-indispensable', 'guia-anticipada', 'auditoria-producto-existente', 'arquitectura'] },
  { titulo: 'Biblioteca de templates', paginas: ['artefactos-gobierno', 'artefactos-arquitectura', 'artefactos-operacion'], incluyeTemplates: true },
  { titulo: 'Manual de referencia', paginas: ['manual-a-g', 'referencia-y-cierre', 'aclaraciones-frecuentes'] },
]

export function IndiceTomaDeControl({ paginas, paginaActivaId, onSeleccionarPagina }: IndiceTomaDeControlProps) {
  const grupoActivo = grupos.find((grupo) => grupo.paginas.includes(paginaActivaId ?? '') || (grupo.incluyeTemplates && paginaActivaId?.startsWith('template-')))?.titulo
  const [grupoAbierto, setGrupoAbierto] = useState(grupoActivo ?? 'Guías')

  return (
    <div className="flex flex-col gap-5">
      <Link to="/guias" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <ChevronLeft className="size-4" />
        Volver a Guías
      </Link>

      <h1 className="text-base font-semibold text-foreground">Toma de Control</h1>

      <nav aria-label="Índice de Toma de Control" className="border-y border-border py-2">
        {grupos.map((grupo) => {
          const paginasBase = grupo.paginas
            .map((id) => paginas.find((pagina) => pagina.id === id))
            .filter((pagina): pagina is PaginaDocumento => Boolean(pagina))
          const templates = grupo.incluyeTemplates ? paginas.filter((pagina) => pagina.id.startsWith('template-')) : []
          const paginasGrupo = [...paginasBase, ...templates]
          const abierto = grupoAbierto === grupo.titulo || grupoActivo === grupo.titulo

          return (
            <div key={grupo.titulo} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => setGrupoAbierto(abierto ? '' : grupo.titulo)}
                className="flex w-full items-center justify-between py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
                aria-expanded={abierto}
              >
                {grupo.titulo}
                <ChevronDown className={cn('size-3.5 transition-transform', abierto && 'rotate-180')} />
              </button>

              {abierto && (
                <ul className="mb-2 flex flex-col gap-0.5">
                  {paginasGrupo.map((pagina) => (
                    <li key={pagina.id}>
                      <button
                        type="button"
                        onClick={() => onSeleccionarPagina(pagina.id)}
                        className={cn(
                          'w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted',
                          pagina.id === paginaActivaId ? 'bg-accent/5 font-medium text-accent' : 'text-muted-foreground',
                        )}
                      >
                        {pagina.titulo.replace(/^\d+\.\s*/, '').replace(/^Template ·\s*/, '')}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
