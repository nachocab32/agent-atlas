import { useTranslation } from '@/i18n'
import { cn } from '@/shared/lib/utils'
import type { BloqueRespuesta } from '@/types/respuesta'

type PasosSecuenciaProps = Extract<BloqueRespuesta, { componente: 'PasosSecuencia' }>['props']

export function PasosSecuencia({ pasos }: PasosSecuenciaProps) {
  const { t } = useTranslation()
  const [primero] = pasos

  // Menos de dos pasos no tiene orden que mostrar: es una frase, no una secuencia.
  if (pasos.length < 2) {
    if (!primero) return null
    return (
      <p className="leading-relaxed text-foreground">
        <span className="font-medium">{primero.titulo}: </span>
        {primero.detalle}
      </p>
    )
  }

  return (
    <ol className="relative flex flex-col gap-4">
      {/* Misma columna vertebral que el índice del viaje de CencoFlow, sin tocar esos componentes. */}
      <div className="absolute top-4 bottom-4 left-4 w-px bg-border" aria-hidden="true" />
      {pasos.map((paso, index) => (
        <li key={paso.titulo} className="relative flex gap-3">
          <span
            className={cn(
              'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 bg-background text-xs font-semibold',
              paso.urgente ? 'border-rose-600 text-rose-600' : 'border-border text-muted-foreground',
            )}
          >
            {index + 1}
          </span>
          <div className="flex-1 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium text-foreground">{paso.titulo}</p>
              {paso.manual && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500">
                  {t('chat.paso.manual')}
                </span>
              )}
              {paso.urgente && (
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-600">
                  {t('chat.paso.urgente')}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{paso.detalle}</p>
            {(paso.input || paso.output) && (
              <div className="mt-1.5 flex flex-col gap-0.5 text-xs text-muted-foreground">
                {paso.input && (
                  <span>
                    {t('chat.paso.entrada')}: {paso.input}
                  </span>
                )}
                {paso.output && (
                  <span>
                    {t('chat.paso.salida')}: {paso.output}
                  </span>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
