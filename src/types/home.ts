export type IconoTemaHome = 'cencoflow' | 'toma-control' | 'runbooks' | 'skills'

export interface TemaHome {
  id: string
  label: string
  icono: IconoTemaHome
  descripcion: string
  preguntaEjemplo: string
  preguntasSugeridas: string[]
}

export type ActividadContinua =
  | {
      id: string
      tipo: 'documento'
      titulo: string
      contexto: string
      fechaRelativa: string
      seccionesCompletadas: number
      seccionesTotales: number
    }
  | {
      id: string
      tipo: 'conversacion'
      titulo: string
      contexto: string
      fechaRelativa: string
    }

export type NovedadTema =
  | { id: string; tipo: 'contenido'; nombre: string; version: string; cambio: string; fechaRelativa: string }
  | { id: string; tipo: 'activo-nuevo'; nombre: string; razonAplicabilidad?: string }
