import { useState } from 'react'
import { categoriaGuiaOpciones, madurezGuiaOpciones } from '@/data/documentos'
import type { DocumentoGuia } from '@/types/documento'

type Categoria = (typeof categoriaGuiaOpciones)[number]
type Madurez = (typeof madurezGuiaOpciones)[number]

// Sin fecha real y comparable en los documentos (ver ASUNCIÓN 2: `detalle.actualizado`
// es un string tipo "Junio 2026" y solo 1 de 3 documentos lo tiene): único orden posible.
export type OrdenGuia = 'nombre'

export function useGuiasFiltros(documentos: DocumentoGuia[], categoriaInicial: Categoria | 'todos' = 'todos') {
  const [categoria, setCategoria] = useState<Categoria | 'todos'>(categoriaInicial)
  const [madurez, setMadurez] = useState<Madurez | 'todos'>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<OrdenGuia>('nombre')

  const documentosFiltrados = documentos
    .filter((doc) => {
      if (categoria !== 'todos' && !doc.categorias.includes(categoria)) return false
      if (madurez !== 'todos' && doc.madurez !== madurez) return false
      if (busqueda && !doc.titulo.toLowerCase().includes(busqueda.toLowerCase())) return false
      return true
    })
    .sort((a, b) => a.titulo.localeCompare(b.titulo))

  const hayFiltrosActivos = categoria !== 'todos' || madurez !== 'todos'

  // Conteos derivados de los documentos reales: no se hardcodean para no perder
  // la inconsistencia real del portal (las categorías suman 4 sobre 3 documentos).
  const conteoCategoria: Record<Categoria, number> = Object.fromEntries(
    categoriaGuiaOpciones.map((c) => [c, documentos.filter((doc) => doc.categorias.includes(c)).length]),
  ) as Record<Categoria, number>

  const conteoMadurez: Record<Madurez, number> = Object.fromEntries(
    madurezGuiaOpciones.map((m) => [m, documentos.filter((doc) => doc.madurez === m).length]),
  ) as Record<Madurez, number>

  return {
    categoria,
    setCategoria,
    madurez,
    setMadurez,
    busqueda,
    setBusqueda,
    orden,
    setOrden,
    documentosFiltrados,
    conteoCategoria,
    conteoMadurez,
    hayFiltrosActivos,
  }
}
