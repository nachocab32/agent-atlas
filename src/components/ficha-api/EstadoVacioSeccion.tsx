import { Info } from 'lucide-react'

interface EstadoVacioSeccionProps {
  mensaje: string
}

export function EstadoVacioSeccion({ mensaje }: EstadoVacioSeccionProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{mensaje}</p>
    </div>
  )
}
