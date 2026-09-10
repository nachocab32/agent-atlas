import { Info } from 'lucide-react'
import { useTranslation } from '@/i18n'
import type { BloqueRespuesta } from '@/types/respuesta'

type SinFuenteProps = Extract<BloqueRespuesta, { componente: 'SinFuente' }>['props']

export function SinFuente({ responsable }: SinFuenteProps) {
  const { t } = useTranslation()

  return (
    <div className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <div>
        <p className="font-medium text-foreground">{t('chat.sinFuente.title')}</p>
        <p className="mt-0.5 text-muted-foreground">
          {`${t('chat.sinFuente.body')}.`}
          {responsable && (
            <>
              {' '}
              {t('chat.sinFuente.responsable')} {responsable}.
            </>
          )}
        </p>
      </div>
    </div>
  )
}
