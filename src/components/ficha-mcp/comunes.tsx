import { Check } from 'lucide-react'

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
  return <pre className="overflow-x-auto rounded-xl border border-border bg-neutral-950 p-4 font-mono text-xs leading-relaxed text-white">{codigo}</pre>
}
