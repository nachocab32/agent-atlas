import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/shared/ui'
import type { BloqueRespuesta } from '@/types/respuesta'

type TablaProps = Extract<BloqueRespuesta, { componente: 'Tabla' }>['props']

const FILAS_INICIALES = 4

export function Tabla({ columnas, filas, nota, etiquetaFilas = 'filas' }: TablaProps) {
  const [expandida, setExpandida] = useState(false)
  // Regla dura: una celda vacía comunica "el dato existe y no se encontró", que
  // es distinto de "no aplica". Ante esa duda, la tabla completa no se renderiza.
  const incompleta = filas.some((fila) => fila.length !== columnas.length || fila.some((celda) => !celda))
  if (incompleta || filas.length < 3) return null
  const esExtensa = filas.length > FILAS_INICIALES
  const filasVisibles = esExtensa && !expandida ? filas.slice(0, FILAS_INICIALES) : filas

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              {columnas.map((columna) => (
                <th key={columna} className="px-4 py-2 font-medium text-muted-foreground">
                  {columna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filasVisibles.map((fila, indice) => (
              <tr key={indice} className="border-b border-border last:border-0">
                {fila.map((celda, celdaIndice) => (
                  <td key={celdaIndice} className="px-4 py-2 text-foreground">
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {esExtensa && (
        <div className="border-t border-border bg-muted/60 px-3 py-2">
          <Button
            variant="ghost"
            className="h-auto px-1 py-1 text-xs font-medium text-accent hover:bg-transparent hover:text-accent/80"
            onClick={() => setExpandida((valor) => !valor)}
            aria-expanded={expandida}
          >
            {expandida ? `Ocultar ${etiquetaFilas}` : `Ver las ${filas.length} ${etiquetaFilas}`}
            {expandida ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </Button>
        </div>
      )}
      {nota && <p className="border-t border-border bg-muted px-4 py-2 text-xs text-muted-foreground">{nota}</p>}
    </div>
  )
}
