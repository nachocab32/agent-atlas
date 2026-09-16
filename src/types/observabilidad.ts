export type BloqueObservabilidad =
  | { tipo: 'encabezado'; nivel: number; texto: string }
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; ordenada: boolean; items: string[] }
  | { tipo: 'tabla'; encabezados: string[]; filas: string[][] }
  | { tipo: 'imagen'; alt: string; caption?: string; src: string }
  | { tipo: 'acordeon'; titulo: string; contenido: BloqueObservabilidad[] }
  | { tipo: 'pasos'; pasos: { titulo: string; contenido: BloqueObservabilidad[] }[] }

export interface TemaObservabilidad {
  id: string
  titulo: string
  bajada: string
  modoLectura: 'unico' | 'resumen-completa'
  resumen: BloqueObservabilidad[]
  completa: BloqueObservabilidad[]
  fuentes?: { titulo: string; url: string }[]
}

export interface BibliotecaObservabilidad {
  titulo: string
  alcance: BloqueObservabilidad[]
  fuentes: { titulo: string; url: string; grupo: string; estado: string }[]
  totalReferencias: number
}
