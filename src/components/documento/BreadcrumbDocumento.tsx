import { ChevronRight } from 'lucide-react'

interface BreadcrumbDocumentoProps {
  segmentos: string[]
}

export function BreadcrumbDocumento({ segmentos }: BreadcrumbDocumentoProps) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {segmentos.map((segmento, indice) => (
        <span key={`${segmento}-${indice}`} className="flex items-center gap-1.5">
          {indice > 0 && <ChevronRight className="size-3.5 shrink-0" />}
          <span className={indice === segmentos.length - 1 ? 'text-foreground' : undefined}>{segmento}</span>
        </span>
      ))}
    </nav>
  )
}
