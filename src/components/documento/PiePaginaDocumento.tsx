import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { PaginaDocumento } from '@/types/documento'

interface PiePaginaDocumentoProps {
  anterior?: PaginaDocumento
  siguiente?: PaginaDocumento
  onSeleccionarPagina: (id: string) => void
}

export function PiePaginaDocumento({ anterior, siguiente, onSeleccionarPagina }: PiePaginaDocumentoProps) {
  if (!anterior && !siguiente) return null

  return (
    <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
      {anterior ? (
        <button
          type="button"
          onClick={() => onSeleccionarPagina(anterior.id)}
          className="flex items-center gap-1.5 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4 shrink-0" />
          <span>
            Anterior: <span className="font-medium text-foreground">{anterior.titulo}</span>
          </span>
        </button>
      ) : (
        <span />
      )}

      {siguiente && (
        <button
          type="button"
          onClick={() => onSeleccionarPagina(siguiente.id)}
          className="flex items-center gap-1.5 text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>
            Siguiente: <span className="font-medium text-foreground">{siguiente.titulo}</span>
          </span>
          <ChevronRight className="size-4 shrink-0" />
        </button>
      )}
    </div>
  )
}
