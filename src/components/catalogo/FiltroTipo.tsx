import { Tabs, TabsList, TabsTrigger } from '@/shared/ui'
import type { TipoActivo } from '@/types/catalogo'

interface FiltroTipoProps {
  opciones: { valor: 'todos' | TipoActivo; label: string }[]
  valorSeleccionado: 'todos' | TipoActivo
  onSeleccionar: (valor: 'todos' | TipoActivo) => void
}

export function FiltroTipo({ opciones, valorSeleccionado, onSeleccionar }: FiltroTipoProps) {
  return (
    <Tabs value={valorSeleccionado} onValueChange={(valor) => onSeleccionar(valor as 'todos' | TipoActivo)}>
      <TabsList>
        {opciones.map((opcion) => <TabsTrigger key={opcion.valor} value={opcion.valor}>{opcion.label}</TabsTrigger>)}
      </TabsList>
    </Tabs>
  )
}
