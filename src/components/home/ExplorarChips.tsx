import { useTranslation } from '@/i18n'
import type { TemaHome } from '@/types/home'
import { iconoPorTema } from './iconos'

interface ExplorarChipsProps {
  temas: TemaHome[]
}

export function ExplorarChips({ temas }: ExplorarChipsProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
      <span className="text-sm font-medium text-muted-foreground">{t('home.explorar')}</span>
      {temas.map((tema) => {
        const Icono = iconoPorTema[tema.icono]
        return (
          <span
            key={tema.id}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            <Icono className="size-3.5" />
            {tema.label}
          </span>
        )
      })}
    </div>
  )
}
