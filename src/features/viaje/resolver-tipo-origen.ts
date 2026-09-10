import { etapasViaje } from '@/data/viaje'
import type { TipoPaso } from '@/types/viaje'

// `RelacionPaso.pasoOrigen` es el texto literal de la fuente ("Research · Mapear un
// proceso" o, para integrada-en, solo la etiqueta), no una referencia al paso. Para
// pintar la tarjeta de relación con el color del tipo de origen sin tocar el modelo de
// datos, se empareja ese texto contra el contenido ya cargado.
export function resolverTipoOrigen(pasoOrigen: string): TipoPaso | undefined {
  for (const etapa of etapasViaje) {
    for (const paso of etapa.pasos) {
      if (pasoOrigen === `${etapa.nombre} · ${paso.etiqueta}` || pasoOrigen === paso.etiqueta) {
        return paso.tipo
      }
    }
  }
  return undefined
}
