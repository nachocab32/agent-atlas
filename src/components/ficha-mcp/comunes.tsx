import { Check } from 'lucide-react'
import { BloqueCodigoCopiable } from '@/shared/ui'

export function Titulo({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

export function Lista({ items, icono }: { items: string[]; icono?: 'check' | 'ninguno' }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
          {icono !== 'ninguno' && <Check className="mt-0.5 size-4 shrink-0 text-primary" />}
          {item}
        </li>
      ))}
    </ul>
  )
}

export function BloqueCodigo({ codigo }: { codigo: string }) {
  return <BloqueCodigoCopiable codigo={codigo} />
}
