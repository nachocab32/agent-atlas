import { useTranslation } from '@/i18n'
import type { NovedadTema } from '@/types/home'

interface NovedadFilaProps {
  novedad: NovedadTema
}

export function NovedadFila({ novedad }: NovedadFilaProps) {
  const { t } = useTranslation()

  if (novedad.tipo === 'activo-nuevo') {
    // Un activo sin razón de aplicabilidad no se muestra.
    if (!novedad.razonAplicabilidad) return null

    return (
      <div className="flex items-center justify-between gap-3 bg-accent/5 px-3 py-2">
        <div>
          <p className="text-sm font-medium text-accent first-letter:uppercase">{novedad.nombre}</p>
          <p className="text-xs text-accent">{novedad.razonAplicabilidad}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
          {t('home.novedades.nuevo')}
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2">
      <div>
        <p className="text-sm font-medium text-foreground first-letter:uppercase">
          {novedad.nombre} <span className="text-muted-foreground">· {novedad.version}</span>
        </p>
        <p className="text-xs text-muted-foreground">{novedad.cambio}</p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{novedad.fechaRelativa}</span>
    </div>
  )
}
