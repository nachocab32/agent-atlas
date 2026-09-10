import { Button } from '@/shared/ui'

interface PiePasoProps {
  accionVerbo?: string
  onAccion: () => void
  mostrarSiguiente: boolean
  onSiguiente: () => void
}

export function PiePaso({ accionVerbo, onAccion, mostrarSiguiente, onSiguiente }: PiePasoProps) {
  return (
    <div className="flex items-center justify-between">
      <div>{accionVerbo && <Button onClick={onAccion}>{accionVerbo} →</Button>}</div>
      {mostrarSiguiente && (
        <Button variant="outline" onClick={onSiguiente}>
          Siguiente
        </Button>
      )}
    </div>
  )
}
