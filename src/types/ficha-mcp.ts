export interface ToolMcp {
  nombre: string
  descripcion: string
  acceso: 'Read' | 'Read / Write'
}

export interface VideoMcp {
  titulo: string
  duracion: string
  vimeoId?: string
}

export interface ConfiguracionClienteMcp {
  titulo: string
  pasos: string[]
  codigo?: string
}

export interface PreguntaPorAudiencia {
  audiencia: string
  preguntas: string[]
}

export interface PruebaVerificacion {
  pregunta: string
  exito: string
  falla: string
}

export interface FichaMcpDetalle {
  queResuelve?: string[]
  queNoHace?: string[]
  antesDeEmpezar?: string[]
  urlConexion?: string
  configCodigo: string
  tools?: ToolMcp[]
  clientesSoportados?: string[]
  idesRecomendados?: string[]
  pruebaVerificacion?: PruebaVerificacion
  preguntasPorAudiencia?: PreguntaPorAudiencia[]
  seguridad?: string[]
  troubleshooting?: string[]
  videos: VideoMcp[]
  configuraciones?: ConfiguracionClienteMcp[]
}
