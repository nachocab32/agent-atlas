export type TipoActivo = 'arquetipo' | 'skill' | 'agente' | 'mcp-server' | 'api'

export interface RequisitoActivo {
  id: string
  descripcion: string
  cumplido: boolean
}

export interface EtapaAplicable {
  etapaId: string
  control: string
}

export interface FraseDePrueba {
  id: string
  texto: string
}

export interface Responsable {
  nombre: string
  area: string
  iniciales: string
}

export interface Activo {
  id: string
  nombre: string
  tipo: TipoActivo
  version: string
  descripcion: string
  descripcionLarga: string
  categorias: string[]
  equiposUsando: number
  aplicaAlStack: boolean
  fechaIncorporacion: string
  fechaActualizacion: string
  responsable: Responsable
  pruebalo: FraseDePrueba[]
  contenido: string[]
  enCencoFlow: EtapaAplicable[]
  requisitos: RequisitoActivo[]
  // Específicos de tipo 'api' — opcionales, los demás tipos no los usan.
  dominio?: string
  lifecycle?: 'production' | 'experimental'
  ownerId?: string
  tags?: string[]
}

export interface EtapaCencoFlow {
  id: string
  nombre: string
}

export interface ActivoAnclado {
  id: string
  nombre: string
  version: string
}
