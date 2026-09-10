import { Info } from 'lucide-react'

interface EstadoVacioViajeProps {
  mensaje: string
}

export function EstadoVacioViaje({ mensaje }: EstadoVacioViajeProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-24 text-center">
      <Info className="size-5 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{mensaje}</p>
    </div>
  )
}
