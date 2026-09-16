import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

export interface SegmentoBreadcrumb {
  etiqueta: string
  href?: string
}

interface BreadcrumbDocumentoProps {
  segmentos: SegmentoBreadcrumb[]
}

export function BreadcrumbDocumento({ segmentos }: BreadcrumbDocumentoProps) {
  return (
    <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {segmentos.map((segmento, indice) => (
        <span key={`${segmento.etiqueta}-${indice}`} className="flex items-center gap-1.5">
          {indice > 0 && <ChevronRight aria-hidden="true" className="size-3.5 shrink-0" />}
          {segmento.href && indice !== segmentos.length - 1 ? (
            <Link to={segmento.href} className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {segmento.etiqueta}
            </Link>
          ) : (
            <span aria-current={indice === segmentos.length - 1 ? 'page' : undefined} className={indice === segmentos.length - 1 ? 'text-foreground' : undefined}>
              {segmento.etiqueta}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
