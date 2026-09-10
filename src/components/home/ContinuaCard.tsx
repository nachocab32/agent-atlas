import { useTranslation } from '@/i18n'
import type { ActividadContinua } from '@/types/home'

type ContinuaCardProps = ActividadContinua

export function ContinuaCard(actividad: ContinuaCardProps) {
  const { t } = useTranslation()
  const esDocumento = actividad.tipo === 'documento'
  const etiqueta = esDocumento ? t('home.continua.documento') : t('home.continua.conversacion')

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-medium text-muted-foreground">{etiqueta}</p>
      <p className="mt-1 font-medium text-foreground first-letter:uppercase">{actividad.titulo}</p>
      <p className="mt-1 text-sm text-muted-foreground">{actividad.contexto}</p>

      {esDocumento && (
        <>
          <p className="mt-3 text-xs text-muted-foreground">
            {actividad.seccionesCompletadas} de {actividad.seccionesTotales} secciones
          </p>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${Math.round((actividad.seccionesCompletadas / actividad.seccionesTotales) * 100)}%` }}
            />
          </div>
        </>
      )}

      <p className="mt-auto pt-3 text-xs text-muted-foreground">{actividad.fechaRelativa}</p>
    </div>
  )
}
