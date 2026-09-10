import { ArrowRight } from 'lucide-react'
import { useTranslation, type TranslationKey } from '@/i18n'
import { cn } from '@/shared/lib/utils'
import type { BloqueRespuesta, Urgencia } from '@/types/respuesta'
import { PasosSecuencia } from './PasosSecuencia'

type ArbolDecisionProps = Extract<BloqueRespuesta, { componente: 'ArbolDecision' }>['props'] & {
  onSeleccionar?: (texto: string) => void
}

const configUrgencia: Record<Urgencia, { clase: string; labelKey: TranslationKey }> = {
  inmediata: { clase: 'bg-rose-100 text-rose-600', labelKey: 'chat.urgencia.inmediata' },
  plazo: { clase: 'bg-amber-100 text-amber-600', labelKey: 'chat.urgencia.plazo' },
  ninguna: { clase: 'bg-neutral-100 text-neutral-500', labelKey: 'chat.urgencia.ninguna' },
}

export function ArbolDecision({ pregunta, ramas, nota, onSeleccionar }: ArbolDecisionProps) {
  const { t } = useTranslation()
  const [primera] = ramas

  // Una condición con una sola salida no es un árbol: es el paso a seguir.
  if (ramas.length < 2) {
    if (!primera) return null
    return (
      <PasosSecuencia
        pasos={[{ titulo: primera.condicion, detalle: primera.resultado, urgente: primera.urgencia === 'inmediata' }]}
      />
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="font-medium text-foreground">{pregunta}</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        {ramas.map((rama) => {
          const config = configUrgencia[rama.urgencia]
          const esAccionable = Boolean(rama.accion && onSeleccionar)
          const contenido = (
            <>
              <span className={cn('inline-flex rounded-full px-2 py-0.5 text-xs font-medium', config.clase)}>
                {t(config.labelKey)}
              </span>
              <p className="mt-2 text-sm text-foreground">{rama.condicion}</p>
              <p className="mt-1 text-sm text-muted-foreground">{rama.resultado}</p>
              {esAccionable && (
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent">
                  Ver los pasos <ArrowRight className="size-3.5" />
                </span>
              )}
            </>
          )

          return esAccionable ? (
            <button
              key={rama.condicion}
              type="button"
              onClick={() => onSeleccionar?.(rama.accion ?? '')}
              className="flex-1 rounded-lg border border-border bg-card p-3 text-left transition-colors hover:border-accent/30 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {contenido}
            </button>
          ) : (
            <div key={rama.condicion} className="flex-1 rounded-lg border border-border bg-card p-3">
              {contenido}
            </div>
          )
        })}
      </div>
      {nota && <p className="mt-3 text-xs text-muted-foreground">{nota}</p>}
    </div>
  )
}
