import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import type { PaginaDocumento } from '@/types/documento'

interface IndiceDocumentoProps {
  titulo: string
  paginas: PaginaDocumento[]
  paginaActivaId?: string
  onSeleccionarPagina: (id: string) => void
}

export function IndiceDocumento({ titulo, paginas, paginaActivaId, onSeleccionarPagina }: IndiceDocumentoProps) {
  const secciones = paginas.reduce<{ titulo: string; paginas: PaginaDocumento[] }[]>((acumulado, pagina) => {
    const tituloSeccion = pagina.seccion ?? 'Contenido'
    const seccion = acumulado.find((item) => item.titulo === tituloSeccion)
    if (seccion) seccion.paginas.push(pagina)
    else acumulado.push({ titulo: tituloSeccion, paginas: [pagina] })
    return acumulado
  }, [])
  const [seccionesCerradas, setSeccionesCerradas] = useState<string[]>(
    () => secciones.filter((seccion) => seccion.titulo !== 'Contenido').map((seccion) => seccion.titulo),
  )

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-foreground">{titulo}</h1>

      {paginas.length > 0 && (
        <nav aria-label={`Índice de ${titulo}`} className="flex flex-col gap-3">
          {secciones.map((seccion) => {
            const tieneGrupos = seccion.titulo !== 'Contenido'
            const estaCerrada = seccionesCerradas.includes(seccion.titulo)
            return (
              <section key={seccion.titulo}>
                {tieneGrupos && (
                  <button
                    type="button"
                    aria-expanded={!estaCerrada}
                    onClick={() => setSeccionesCerradas((actual) => actual.includes(seccion.titulo)
                      ? actual.filter((item) => item !== seccion.titulo)
                      : [...actual, seccion.titulo])}
                    className="flex w-full items-center justify-between gap-2 px-1 py-1 text-left text-xs font-medium tracking-wide text-muted-foreground uppercase hover:text-foreground"
                  >
                    {seccion.titulo}
                    <ChevronDown className={cn('size-3.5 transition-transform', estaCerrada && '-rotate-90')} />
                  </button>
                )}
                {!estaCerrada && <ul className="mt-1 flex flex-col gap-0.5">
                  {seccion.paginas.map((pagina) => (
                    <li key={pagina.id}>
                      <button
                        type="button"
                        onClick={() => onSeleccionarPagina(pagina.id)}
                        className={cn(
                          'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted',
                          pagina.id === paginaActivaId ? 'bg-accent/5 font-medium text-accent' : 'text-muted-foreground',
                        )}
                      >
                        {pagina.titulo}
                      </button>
                    </li>
                  ))}
                </ul>}
              </section>
            )
          })}
        </nav>
      )}
    </div>
  )
}
