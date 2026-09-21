import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import { useContextoFicha } from '@/features/referencia/contexto-ficha'

interface EncabezadoFichaApiProps {
  dominio: string
  activoId: string
  titulo: string
  descripcion: string
  lifecycle?: 'production' | 'experimental'
  protocolo?: string
  version: string
  tags: string[]
}

export function EncabezadoFichaApi({
  dominio,
  activoId,
  titulo,
  descripcion,
  lifecycle,
  protocolo,
  version,
  tags,
}: EncabezadoFichaApiProps) {
  const contexto = useContextoFicha()
  const esProduction = lifecycle === 'production'

  return (
    <div>
      <p className="text-xs text-muted-foreground">
        {contexto === 'pagina' && <Link to="/aceleradores" className="hover:text-foreground hover:underline">
          APIs
        </Link>}{contexto === 'pagina' && ' / '}{dominio} / {activoId}
      </p>

      <h1 className="mt-2 text-xl font-semibold text-foreground">{titulo}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{descripcion}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {lifecycle && (
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
              esProduction ? 'bg-accent text-accent-foreground' : 'border border-border bg-card text-muted-foreground',
            )}
          >
            <span className="size-1.5 rounded-full bg-current" />
            {lifecycle}
          </span>
        )}
        {protocolo && (
          <span className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
            {protocolo}
          </span>
        )}
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
          v{version}
        </span>
      </div>

      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
