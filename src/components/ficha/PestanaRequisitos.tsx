import { Circle, CircleCheck } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { cn } from '@/shared/lib/utils'
import type { RequisitoActivo } from '@/types/catalogo'

interface PestanaRequisitosProps {
  requisitos: RequisitoActivo[]
}

export function PestanaRequisitos({ requisitos }: PestanaRequisitosProps) {
  const { t } = useTranslation()

  return (
    <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {requisitos.map((requisito) => (
        <li key={requisito.id} className="flex items-center gap-3 px-4 py-3">
          {requisito.cumplido ? (
            <CircleCheck className="size-4 shrink-0 text-accent" />
          ) : (
            <Circle className="size-4 shrink-0 text-muted-foreground" />
          )}
          <span className="flex-1 text-sm text-foreground">{requisito.descripcion}</span>
          <span
            className={cn(
              'shrink-0 text-xs font-medium',
              requisito.cumplido ? 'text-accent' : 'text-muted-foreground',
            )}
          >
            {requisito.cumplido ? t('ficha.requisitoCumplido') : t('ficha.requisitoPendiente')}
          </span>
        </li>
      ))}
    </ul>
  )
}
