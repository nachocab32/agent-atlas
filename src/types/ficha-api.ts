export interface EndpointApi {
  metodo: string
  ruta: string
  descripcion: string
  parametros: string[]
}

export interface EsquemaAutenticacion {
  nombre: string
  tipo: string
}

export interface PasoQuickstart {
  numero: number
  texto: string
  codigo?: string
}

export interface ErrorComunApi {
  codigo: string
  descripcion: string
}

export interface FichaApiDetalle {
  quePara: string
  endpoints: EndpointApi[]
  autenticacion: EsquemaAutenticacion[]
  credencialesTexto?: string
  quickstart: PasoQuickstart[]
  errores: ErrorComunApi[]
}
