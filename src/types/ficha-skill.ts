export interface SenalActivacion {
  senal: string
  ejemplo: string
}

export interface TablaSkill {
  titulo: string
  columnas: string[]
  filas: string[][]
}

export interface BloqueTexto {
  titulo: string
  items: string[]
}

export interface VideoSkill {
  duracion: string
  vimeoId?: string
}

export interface MantenedorSkill {
  equipo: string
  fechaPublicacion: string
  estado: string
}

export interface RelacionActivo {
  nombre: string
  frase: string
}

export interface FichaSkillDetalle {
  friccion?: string
  bloques?: BloqueTexto[]
  tablas?: TablaSkill[]
  activacion: SenalActivacion[]
  evitar: string[]
  requisitos: string[]
  archivos: string[]
  video?: VideoSkill
  mantenedor?: MantenedorSkill
  widgetUtilidad?: boolean
  relaciones?: RelacionActivo[]
}
