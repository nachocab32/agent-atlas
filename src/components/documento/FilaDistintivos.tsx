import { cn } from '@/shared/lib/utils'
import { madurezGuiaLabel } from '@/data/documentos'
import type { MadurezDocumento } from '@/types/documento'

interface FilaDistintivosProps {
  madurez: MadurezDocumento
  tags: string[]
}

// Beta no es una opción del filtro de Madurez del portal real (ver ASUNCIÓN 2):
// se muestra igual como distintivo, con un borde punteado para no confundirlo
// visualmente con Producción o Experimental.
const claseMadurez: Record<MadurezDocumento, string> = {
  production: 'border-transparent bg-green-100 text-accent',
  experimental: 'border-border text-muted-foreground',
  beta: 'border-dashed border-border text-muted-foreground',
}

export function FilaDistintivos({ madurez, tags }: FilaDistintivosProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
          claseMadurez[madurez],
        )}
      >
        <span className="size-1.5 rounded-full bg-current" />
        {madurezGuiaLabel[madurez]}
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
