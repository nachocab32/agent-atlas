import { Circle, CircleCheck, CircleHelp } from 'lucide-react'
import { useTranslation, type TranslationKey } from '@/i18n'
import { cn } from '@/shared/lib/utils'
import type { BloqueRespuesta, EstadoItem } from '@/types/respuesta'

type ListaEstadoProps = Extract<BloqueRespuesta, { componente: 'ListaEstado' }>['props']

const configEstado: Record<EstadoItem, { icono: typeof Circle; clase: string; labelKey: TranslationKey }> = {
  cumplido: { icono: CircleCheck, clase: 'text-accent', labelKey: 'chat.estado.cumplido' },
  pendiente: { icono: Circle, clase: 'text-amber-600', labelKey: 'chat.estado.pendiente' },
  desconocido: { icono: CircleHelp, clase: 'text-muted-foreground', labelKey: 'chat.estado.desconocido' },
}

export function ListaEstado({ items }: ListaEstadoProps) {
  const { t } = useTranslation()
  const todoDesconocido = items.every((item) => item.estado === 'desconocido')

  // Cuatro badges idénticos que repiten "desconocido" no aportan nada: se
  // aplana a lista de prosa, conservando solo el ícono que marca "no lo sé".
  if (todoDesconocido) {
    return (
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.titulo} className="flex items-start gap-2">
            <CircleHelp className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <p className="text-foreground">
              <span className="font-medium">{item.titulo}</span>
              {item.detalle && <span className="text-muted-foreground"> — {item.detalle}</span>}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
      {items.map((item) => {
        const config = configEstado[item.estado]
        const Icono = config.icono
        return (
          <li key={item.titulo} className="flex items-start gap-3 px-4 py-3">
            <Icono className={cn('mt-0.5 size-4 shrink-0', config.clase)} />
            <div className="flex-1">
              <p className="font-medium text-foreground">{item.titulo}</p>
              {item.detalle && <p className="mt-0.5 text-muted-foreground">{item.detalle}</p>}
            </div>
            {item.pilar && (
              <span className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {item.pilar}
              </span>
            )}
            <span className={cn('shrink-0 text-xs font-medium', config.clase)}>{t(config.labelKey)}</span>
          </li>
        )
      })}
    </ul>
  )
}
