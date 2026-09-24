import type { EndpointApi } from '@/types/ficha-api'
import { EstadoVacioSeccion } from './EstadoVacioSeccion'

interface SeccionEndpointsProps {
  titulo: string
  endpoints: EndpointApi[]
}

export function SeccionEndpoints({ titulo, endpoints }: SeccionEndpointsProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>

      {endpoints.length === 0 ? (
        <div className="mt-2">
          <EstadoVacioSeccion mensaje="El contrato técnico no está publicado en la fuente de Atlas para esta API." />
        </div>
      ) : (
        <>
          <div className="mt-2 flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {endpoints.map((endpoint) => (
              <div key={`${endpoint.metodo}-${endpoint.ruta}`} className="p-4">
                <p className="font-mono text-sm font-medium text-foreground">
                  <span className="text-accent">{endpoint.metodo}</span> {endpoint.ruta}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{endpoint.descripcion}</p>
                {endpoint.parametros.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {endpoint.parametros.map((parametro) => (
                      <span
                        key={parametro}
                        className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {parametro}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Detalle completo, schemas y pruebas en la pestaña OpenAPI.
          </p>
        </>
      )}
    </div>
  )
}
