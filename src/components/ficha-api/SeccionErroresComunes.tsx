import type { ErrorComunApi } from '@/types/ficha-api'
import { EstadoVacioSeccion } from './EstadoVacioSeccion'

interface SeccionErroresComunesProps {
  titulo: string
  errores: ErrorComunApi[]
}

export function SeccionErroresComunes({ titulo, errores }: SeccionErroresComunesProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>

      {errores.length === 0 ? (
        <div className="mt-2">
          <EstadoVacioSeccion mensaje="La fuente de Atlas no publica errores comunes para esta API." />
        </div>
      ) : (
        <ul className="mt-2 flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {errores.map((error) => (
            <li key={error.codigo} className="flex items-center gap-4 px-4 py-3">
              <span className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-xs font-semibold text-foreground">
                {error.codigo}
              </span>
              <span className="text-sm text-muted-foreground">{error.descripcion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
