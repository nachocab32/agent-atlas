import { AlertTriangle } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { Button } from '@/shared/ui'

interface TurnoErrorProps {
  onReintentar: () => void
}

export function TurnoError({ onReintentar }: TurnoErrorProps) {
  const { t } = useTranslation()

  return (
    <div className="flex items-start gap-3 rounded-xl border border-rose-600/30 bg-rose-100/60 px-4 py-3 text-sm" role="alert">
      <AlertTriangle className="size-4 shrink-0 text-rose-600" />
      <div className="flex-1">
        <p className="text-foreground">{t('chat.error.mensaje')}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{t('chat.error.conservada')}</p>
      </div>
      <Button variant="outline" className="h-auto shrink-0 px-3 py-1.5 text-xs" onClick={onReintentar}>
        {t('chat.error.reintentar')}
      </Button>
    </div>
  )
}
