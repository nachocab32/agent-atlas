import { useTranslation } from '@/i18n'
import { Badge } from '@/components/ui/badge'
import type { BloqueRespuesta } from '@/types/respuesta'

type TarjetaActivoProps = Extract<BloqueRespuesta, { componente: 'TarjetaActivo' }>['props']

export function TarjetaActivo({ nombre, descripcion, condicion, etapa }: TarjetaActivoProps) {
  const { t } = useTranslation()

  if (!condicion) {
    return (
      <div className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
        {t('chat.activo.sinCondicion')} ({nombre}).
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-primary/25 bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-semibold text-foreground first-letter:uppercase">{nombre}</p>
        <Badge className="shrink-0" variant="default">
          {etapa}
        </Badge>
      </div>
      <p className="mt-1 text-muted-foreground">{descripcion}</p>
      <p className="mt-3 text-xs font-medium text-primary">Condición: {condicion}</p>
    </div>
  )
}
