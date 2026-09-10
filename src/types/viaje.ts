export type TipoPaso = 'artefacto' | 'skill' | 'agente' | 'herramienta' | 'sin-tipo'

export type RelacionPaso =
  | { clase: 'se-alimenta-de'; pasoOrigen: string; explicacion: string }
  | { clase: 'integrada-en'; pasoOrigen: string; explicacion: string }

export type Paso = {
  id: string
  etiqueta: string
  titulo: string
  tipo: TipoPaso
  descripcionMenu: string
  descripcion: string
  entrega:
    | { modo: 'automatiza'; input: string; output: string }
    | { modo: 'manual'; tuHaces: string }
  relacion?: RelacionPaso
  accion?: { verbo: string }
}

export type EtapaViaje = {
  id: string
  numero: number
  nombre: string
  intencion: string
  pasos: Paso[]
}

// Etapa sin desglose de pasos: el portal solo expone número, nombre y descripción
// para algunas macrofases (hoy, Desarrollo). No confundir con EtapaViaje.
export type EtapaSimple = {
  id: string
  numero: number
  nombre: string
  descripcion: string
}
