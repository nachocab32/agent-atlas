export interface PasoActivacion {
  numero: number
  texto: string
}

export interface RecursoExterno {
  titulo: string
  descripcion: string
}

export interface VideoAgente {
  duracion: string
  vimeoId?: string
}

export interface FichaAgenteDetalle {
  friccion: string
  comoActivarlo: PasoActivacion[]
  ejemploUso: string
  recurso: RecursoExterno
  video?: VideoAgente
}
