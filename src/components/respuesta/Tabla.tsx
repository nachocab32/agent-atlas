import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/shared/ui'
import type { BloqueRespuesta } from '@/types/respuesta'
import { useOutletContext } from 'react-router'
import type { AppOutletContext } from '@/app/app-layout'

type TablaProps = Extract<BloqueRespuesta, { componente: 'Tabla' }>['props']

const FILAS_INICIALES = 4

export function Tabla({ columnas, filas, nota, etiquetaFilas = 'filas' }: TablaProps) {
  const [expandida, setExpandida] = useState(false)
  const { panelAbierto } = useOutletContext<AppOutletContext>()
  // Regla dura: una celda vacía comunica "el dato existe y no se encontró", que
  // es distinto de "no aplica". Ante esa duda, la tabla completa no se renderiza.
  const incompleta = filas.some((fila) => fila.length !== columnas.length || fila.some((celda) => !celda))
  if (incompleta || filas.length < 3) return null
  const esExtensa = filas.length > FILAS_INICIALES
  const filasVisibles = esExtensa && !expandida ? filas.slice(0, FILAS_INICIALES) : filas

  if (panelAbierto) return (
    <div className="flex flex-col gap-3">
      {filasVisibles.map((fila, indice) => <dl key={indice} className="rounded-xl border border-border bg-card p-3 text-sm">{fila.map((celda, celdaIndice) => <div key={columnas[celdaIndice]} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-3 py-1"><dt className="font-medium text-muted-foreground">{columnas[celdaIndice]}</dt><dd className="text-foreground">{celda}</dd></div>)}</dl>)}
      {esExtensa && <Button variant="ghost" className="w-fit px-1 text-xs text-accent" onClick={() => setExpandida((valor) => !valor)}>{expandida ? `Ocultar ${etiquetaFilas}` : `Ver las ${filas.length} ${etiquetaFilas}`}</Button>}
      {nota && <p className="text-xs text-muted-foreground">{nota}</p>}
    </div>
  )

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
