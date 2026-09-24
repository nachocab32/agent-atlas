import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import type { PaginaDocumento } from '@/types/documento'

interface IndiceTomaDeControlProps {
  paginas: PaginaDocumento[]
  paginaActivaId?: string
  onSeleccionarPagina: (id: string) => void
}

const grupos = ['Entender la TDC', 'Guías', 'Biblioteca de templates', 'Manual de referencia']

function ancla(texto: string) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

type SeccionInterna = { texto: string; hijas: string[] }

function seccionesDePagina(pagina?: PaginaDocumento): SeccionInterna[] {
  const markdown = pagina?.cuerpo.find((bloque) => bloque.tipo === 'markdown')
  if (!markdown || markdown.tipo !== 'markdown') return []
  const secciones: SeccionInterna[] = []
  for (const linea of markdown.texto.split('\n')) {
    const resultado = linea.match(/^(#{2,3})\s+(.+)$/)
    if (!resultado) continue
    const texto = resultado[2].replace(/[*`]/g, '')
    if (resultado[1].length === 2) secciones.push({ texto, hijas: [] })
    else if (secciones.length > 0) secciones[secciones.length - 1].hijas.push(texto)
  }
  return secciones
}

export function IndiceTomaDeControl({ paginas, paginaActivaId, onSeleccionarPagina }: IndiceTomaDeControlProps) {
  const paginaActiva = paginas.find((pagina) => pagina.id === paginaActivaId)
  const seccionesActivas = seccionesDePagina(paginaActiva)
  const grupoActivo = paginaActiva?.seccion
  const [grupoAbierto, setGrupoAbierto] = useState(grupoActivo ?? 'Guías')
  const [paginasAbiertas, setPaginasAbiertas] = useState<string[]>([])
  const [seccionesAbiertas, setSeccionesAbiertas] = useState<string[]>([])

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base font-semibold text-foreground">Toma de Control</h1>

      <nav aria-label="Índice de Toma de Control" className="border-y border-border py-2">
        {grupos.map((grupo) => {
          const paginasGrupo = paginas.filter((pagina) => pagina.seccion === grupo)
          const abierto = grupoAbierto === grupo || grupoActivo === grupo

          return (
            <div key={grupo} className="border-b border-border last:border-b-0">
              <button
                type="button"
                onClick={() => setGrupoAbierto(abierto ? '' : grupo)}
                className="flex w-full items-center justify-between py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
                aria-expanded={abierto}
              >
                {grupo}
                <ChevronDown className={cn('size-3.5 transition-transform', abierto && 'rotate-180')} />
              </button>

              {abierto && (
                <ul className="mb-2 flex flex-col gap-0.5">
                  {paginasGrupo.map((pagina, indice) => (
                    <li key={pagina.id}>
                      {pagina.subseccion && pagina.subseccion !== paginasGrupo[indice - 1]?.subseccion && (
                        <div className="mt-2 mb-0.5 px-2 text-xs font-semibold text-muted-foreground first:mt-0">{pagina.subseccion}</div>
                      )}
                      {(() => {
                        const activa = pagina.id === paginaActivaId
                        const tieneIndice = activa && seccionesActivas.length > 0
                        const expandida = activa || paginasAbiertas.includes(pagina.id)
                        return <>
                          <div className="flex items-center gap-1">
                            {tieneIndice && <button type="button" onClick={() => setPaginasAbiertas((actual) => actual.includes(pagina.id) ? actual.filter((id) => id !== pagina.id) : [...actual, pagina.id])} aria-label={`${expandida ? 'Contraer' : 'Expandir'} ${pagina.titulo}`} className="grid size-6 shrink-0 place-items-center rounded hover:bg-muted"><ChevronDown className={cn('size-3.5 transition-transform', !expandida && '-rotate-90')} /></button>}
                            <button type="button" onClick={() => onSeleccionarPagina(pagina.id)} className={cn('min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted', activa ? 'font-medium text-accent' : 'text-muted-foreground')}>
                              {pagina.titulo.replace(/^\d+\.\s*/, '').replace(/^Template ·\s*/, '')}
                            </button>
                          </div>
                          {tieneIndice && expandida && <ul className="mb-1 ml-3 border-l border-border pl-3">
                            {seccionesActivas.map((seccion) => {
                              const clave = `${pagina.id}-${seccion.texto}`
                              const abierta = seccionesAbiertas.includes(clave)
                              return <li key={seccion.texto}>
                                <div className="flex items-center gap-1">
                                  {seccion.hijas.length > 0 && <button type="button" onClick={() => setSeccionesAbiertas((actual) => actual.includes(clave) ? actual.filter((id) => id !== clave) : [...actual, clave])} aria-label={`${abierta ? 'Contraer' : 'Expandir'} ${seccion.texto}`} className="grid size-5 shrink-0 place-items-center"><ChevronDown className={cn('size-3 transition-transform', !abierta && '-rotate-90')} /></button>}
                                  <a href={`#${ancla(seccion.texto)}`} className="block py-1 text-sm font-medium leading-snug text-muted-foreground transition-colors hover:text-accent">{seccion.texto}</a>
                                </div>
                                {seccion.hijas.length > 0 && abierta && <ul className="ml-2 border-l border-border pl-3">{seccion.hijas.map((hija) => <li key={hija}><a href={`#${ancla(hija)}`} className="block py-1 text-sm leading-snug text-muted-foreground transition-colors hover:text-accent">{hija}</a></li>)}</ul>}
                              </li>
                            })}
                          </ul>}
                        </>
                      })()}
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
