import { useTranslation } from '@/i18n'
import type { Responsable } from '@/types/catalogo'

interface PanelResponsableProps {
  responsable: Responsable
}

export function PanelResponsable({ responsable }: PanelResponsableProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground">{t('ficha.responsable')}</h3>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
          {responsable.iniciales}
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">{responsable.nombre}</p>
          <p className="text-xs text-muted-foreground">{responsable.area}</p>
        </div>
      </div>
    </div>
  )
}
