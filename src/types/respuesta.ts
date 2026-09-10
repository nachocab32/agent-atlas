export type EstadoItem = 'cumplido' | 'pendiente' | 'desconocido'

export interface ListaEstadoItem {
  titulo: string
  detalle?: string
  pilar?: string
  estado: EstadoItem
}

export type Urgencia = 'inmediata' | 'plazo' | 'ninguna'

export interface RamaDecision {
  condicion: string
  resultado: string
  urgencia: Urgencia
  accion?: string
}

export interface PasoSecuencia {
  titulo: string
  detalle: string
  input?: string
  output?: string
  manual?: boolean
  urgente?: boolean
}

export interface FuenteItem {
  titulo: string
  id: string
  version: string
  seccion: string
  href?: string
}

export type BloqueRespuesta =
  | { componente: 'Parrafo'; props: { texto: string } }
  | { componente: 'ListaEstado'; props: { items: ListaEstadoItem[] } }
  | { componente: 'TarjetaActivo'; props: { nombre: string; descripcion: string; etapa: string; condicion: string } }
  | { componente: 'SinFuente'; props: { tema: string; responsable?: string } }
  | { componente: 'Fuentes'; props: { fuentes: FuenteItem[] } }
  | { componente: 'Sugerencias'; props: { opciones: string[] } }
  | { componente: 'ArbolDecision'; props: { pregunta: string; ramas: RamaDecision[]; nota?: string } }
  | { componente: 'PasosSecuencia'; props: { pasos: PasoSecuencia[] } }
  | {
      componente: 'Tabla'
      props: { columnas: string[]; filas: string[][]; nota?: string; etiquetaFilas?: string }
    }
