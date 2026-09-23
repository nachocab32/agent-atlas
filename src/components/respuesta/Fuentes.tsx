import { BookOpen } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import type { BloqueRespuesta } from '@/types/respuesta'
import { referenciasPorId } from '@/features/referencia/registro-referencias'

type FuentesProps = Extract<BloqueRespuesta, { componente: 'Fuentes' }>['props']

export function Fuentes({ fuentes }: FuentesProps) {
  const location = useLocation()
  return (
    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
      <span>Basado en:</span>
      {fuentes.map((fuente) => (
        <span key={fuente.id}>
          {referenciasPorId[fuente.id] ? (
            <Link
              to={{ pathname: location.pathname, search: `?panel=${encodeURIComponent(fuente.id)}&modo=completo` }}
              className="inline-flex items-center gap-1 font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent focus-visible:rounded-sm"
            >
              {fuente.titulo}
              <BookOpen className="size-3" aria-hidden="true" />
            </Link>
          ) : (
            <span className="font-medium text-foreground">{fuente.titulo}</span>
          )}
          <span className="ml-1 text-muted-foreground">
            v{fuente.version} · {fuente.seccion}
          </span>
        </span>
      ))}
    </div>
  )
}
