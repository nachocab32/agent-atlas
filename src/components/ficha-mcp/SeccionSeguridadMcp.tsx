import { AlertTriangle } from 'lucide-react'

export function SeccionSeguridadMcp({ items }: { items: string[] }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-5">
      <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-lg font-semibold text-destructive">Seguridad y buenas prácticas</h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) =>
            item.startsWith('El servidor no requiere autenticación') ? (
              <li key={item} className="rounded-lg border border-destructive/30 bg-background p-3 text-sm font-medium leading-relaxed text-destructive">
                "{item}"
              </li>
            ) : (
              <li key={item} className="text-sm leading-relaxed text-foreground">
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
