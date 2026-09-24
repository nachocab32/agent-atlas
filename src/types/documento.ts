export type MadurezDocumento = 'production' | 'experimental' | 'beta'

export type BloqueContenido =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'markdown'; texto: string }
  | { tipo: 'encabezado'; texto: string }
  | { tipo: 'subtitulo-parrafo'; titulo: string; texto: string; separacionSuperior?: boolean }
  | { tipo: 'pasos'; pasos: { titulo?: string; texto: string; enlace?: { texto: string; href: string }; textoPosterior?: string }[] }
  | { tipo: 'codigo'; lenguaje?: string; codigo: string }
  | { tipo: 'codigo-plataforma'; titulo: string; variantes: { id: string; etiqueta: string; codigo: string }[] }
  | { tipo: 'video'; titulo: string; duracion: string; vimeoId: string }
  | { tipo: 'selector-mecanismo-cyberark' }
  | { tipo: 'enlaces'; enlaces: { titulo: string; descripcion: string; href?: string; icono?: 'defectdojo' | 'capsulas' | 'avance' }[] }
  | { tipo: 'enlace-destacado'; titulo: string; descripcion: string; etiqueta: string; href: string; variante?: 'acceso' | 'recurso' }
  | { tipo: 'grilla-tarjetas'; tarjetas: { titulo: string; descripcion: string; href?: string }[] }
  | { tipo: 'tabla'; encabezados: string[]; filas: string[][] }
  | { tipo: 'destacado'; variante: 'informativo' | 'advertencia' | 'regla' | 'secreto-dummy'; titulo?: string; texto: string }

export interface PaginaDocumento {
  id: string
  titulo: string
  bajada?: string
  // Agrupa páginas extensas en el índice lateral sin alterar la navegación
  // lineal entre ellas.
  seccion?: string
  // Subagrupa dentro de una `seccion` (ej. los 3 dominios de la Biblioteca
  // de templates de TDC). Solo afecta el índice lateral.
  subseccion?: string
  orden?: number
  temaObservabilidad?: TemaObservabilidad
  bibliotecaObservabilidad?: BibliotecaObservabilidad
  cuerpo: BloqueContenido[]
}

// Metadata que se repite en cada página de un documento multi-página (distinta,
// en general, de la metadata de la tarjeta de índice: por ejemplo el owner de
// tarjeta puede ser el área y el de página el equipo operativo real).
export interface DetalleDocumento {
  version: string
  actualizado: string
  owner: string
  tags: string[]
}

export interface DocumentoGuia {
  id: string
  titulo: string
  descripcion: string
  categorias: string[]
  owner: string
  madurez: MadurezDocumento
  tags: string[]
  // Declara cuando una guía fue migrada o reorganizada desde una fuente previa.
  notaOrigen?: string
  detalle?: DetalleDocumento
  // Índice de páginas del documento. Vacío cuando el documento no tiene
  // estructura de páginas extraída (no se inventa una).
  paginas: PaginaDocumento[]
}
import type { BibliotecaObservabilidad, TemaObservabilidad } from './observabilidad'
