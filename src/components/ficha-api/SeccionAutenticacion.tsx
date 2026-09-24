import type { EsquemaAutenticacion } from '@/types/ficha-api'
import { EstadoVacioSeccion } from './EstadoVacioSeccion'

interface SeccionAutenticacionProps {
  titulo: string
  esquemas: EsquemaAutenticacion[]
  credencialesTexto?: string
}

export function SeccionAutenticacion({ titulo, esquemas, credencialesTexto }: SeccionAutenticacionProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>

      {esquemas.length === 0 ? (
        <div className="mt-2">
          <EstadoVacioSeccion mensaje="La fuente de Atlas no publica esquemas de autenticación para esta API." />
        </div>
      ) : (
        <>
          <ul className="mt-2 flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {esquemas.map((esquema) => (
              <li key={esquema.nombre} className="flex items-center justify-between gap-4 px-4 py-3">
                <span className="text-sm font-medium text-foreground">{esquema.nombre}</span>
                <span className="rounded-full border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
                  {esquema.tipo}
                </span>
              </li>
            ))}
          </ul>

          {credencialesTexto && (
            <div className="mt-3 rounded-xl border border-accent/30 bg-card p-4">
              <p className="text-sm font-medium text-accent">¿Necesitas credenciales para un ambiente real?</p>
              <p className="mt-1 text-sm text-foreground">{credencialesTexto}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
