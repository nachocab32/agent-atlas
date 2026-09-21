import { ChevronLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useTranslation } from '@/i18n'
import type { Activo } from '@/types/catalogo'
import { iconoPorTipo } from '@/components/catalogo/iconos'
import { useContextoFicha } from '@/features/referencia/contexto-ficha'

interface EncabezadoFichaProps {
  activo: Activo
  tipoLabel: string
  accionPrimaria: ReactNode
}

export function EncabezadoFicha({ activo, tipoLabel, accionPrimaria }: EncabezadoFichaProps) {
  const { t } = useTranslation()
  const contexto = useContextoFicha()
  const Icono = iconoPorTipo[activo.tipo]

  return (
    <div>
      {contexto === 'pagina' && <Link
        to="/aceleradores"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-4" />
        {t('ficha.volver')}
      </Link>}

      <div className="mt-3 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground">
            <Icono className="size-5" />
          </span>
          <div>
            <h1 className="text-xl font-semibold text-foreground">{activo.nombre}</h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {activo.responsable.nombre} · v{activo.version} · {activo.fechaActualizacion} · {tipoLabel}
            </p>
          </div>
        </div>
        {accionPrimaria}
      </div>
    </div>
  )
}
