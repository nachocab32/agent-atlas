import type { PasoQuickstart } from '@/types/ficha-api'
import { EstadoVacioSeccion } from './EstadoVacioSeccion'

interface SeccionQuickstartProps {
  titulo: string
  pasos: PasoQuickstart[]
}

export function SeccionQuickstart({ titulo, pasos }: SeccionQuickstartProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>

      {pasos.length === 0 ? (
        <div className="mt-2">
          <EstadoVacioSeccion mensaje="La fuente de Atlas no publica un quickstart para esta API." />
        </div>
      ) : (
        <ol className="mt-2 flex flex-col gap-3">
          {pasos.map((paso) => (
            <li key={paso.numero} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground">
                {paso.numero}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground">{paso.texto}</p>
                {paso.codigo && (
                  <code className="mt-1.5 block overflow-x-auto rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs leading-relaxed text-foreground">
                    {paso.codigo}
                  </code>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
