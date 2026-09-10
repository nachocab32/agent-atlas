import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import type { PaginaDocumento } from '@/types/documento'

interface IndiceDocumentoProps {
  titulo: string
  paginas: PaginaDocumento[]
  paginaActivaId?: string
  onSeleccionarPagina: (id: string) => void
}

export function IndiceDocumento({ titulo, paginas, paginaActivaId, onSeleccionarPagina }: IndiceDocumentoProps) {
  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/guias"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-4" />
        Volver a Guías
      </Link>

      <h1 className="text-lg font-semibold text-foreground">{titulo}</h1>

      {paginas.length > 0 && (
        <nav>
          <ul className="flex flex-col gap-0.5">
            {paginas.map((pagina) => (
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
          </ul>
        </nav>
      )}
    </div>
  )
}
