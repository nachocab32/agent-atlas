import { useState } from 'react'
import type { Activo, TipoActivo } from '@/types/catalogo'

export type OrdenCatalogo = 'nombre' | 'reciente'

export function useCatalogoFiltros(activos: Activo[], activoEtapaConfirmada: Record<string, string>) {
  const [filtroTipo, setFiltroTipo] = useState<'todos' | TipoActivo>('todos')
  const [etapaSeleccionada, setEtapaSeleccionada] = useState<string | null>(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null)
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState<OrdenCatalogo>('nombre')

  // Filtros propios de APIs, combinables entre sí. Solo tienen efecto cuando filtroTipo === 'api'.
  const [dominioApi, setDominioApi] = useState<string | null>(null)
  const [lifecycleApi, setLifecycleApi] = useState<string | null>(null)
  const [ownerApi, setOwnerApi] = useState<string | null>(null)

  function alternarEtapa(etapaId: string) {
    setEtapaSeleccionada((actual) => (actual === etapaId ? null : etapaId))
  }

  function alternarCategoria(categoria: string) {
    setCategoriaSeleccionada((actual) => (actual === categoria ? null : categoria))
  }

  function compararActivos(a: Activo, b: Activo) {
    return orden === 'nombre' ? a.nombre.localeCompare(b.nombre) : b.fechaIncorporacion.localeCompare(a.fechaIncorporacion)
  }

  // Búsqueda, categoría y orden son transversales: aplican sobre cualquier lista de activos
  // (la del tipo activo, o la lista completa que usa la sección de Skills por categoría).
  function aplicarBusquedaCategoriaYOrden(lista: Activo[]) {
    return lista
      .filter((a) => !categoriaSeleccionada || a.categorias.includes(categoriaSeleccionada))
      .filter((a) => !busqueda || a.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      .sort(compararActivos)
  }

  const activosPorTipo = filtroTipo === 'todos' ? activos : activos.filter((a) => a.tipo === filtroTipo)

  const activosPorTipoYFiltrosApi =
    filtroTipo === 'api'
      ? activosPorTipo.filter(
          (a) =>
            (!dominioApi || a.dominio === dominioApi) &&
            (!lifecycleApi || a.lifecycle === lifecycleApi) &&
            (!ownerApi || a.ownerId === ownerApi),
        )
      : activosPorTipo

  const activosPorEtapa = etapaSeleccionada
    ? activosPorTipoYFiltrosApi.filter((a) => activoEtapaConfirmada[a.id] === etapaSeleccionada)
    : activosPorTipoYFiltrosApi

  const activosFiltrados = aplicarBusquedaCategoriaYOrden(activosPorEtapa)

  // Los conteos muestran qué resultados quedan disponibles sin que la faceta
  // se filtre a sí misma. Así orientan la decisión antes de hacer clic.
  const activosParaConteoCategoria = activosPorEtapa.filter(
    (activo) => !busqueda || activo.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  // Lista completa (sin filtrar por tipo/etapa/API) para la sección de Skills por categoría,
  // que agrupa entre tipos — solo respeta búsqueda, categoría y orden.
  const activosOrdenados = aplicarBusquedaCategoriaYOrden(activos)

  // Índice estable: el conteo por etapa no cambia con el filtro de tipo ni de etapa.
  const conteoPorEtapa: Record<string, number> = {}
  for (const etapaId of Object.values(activoEtapaConfirmada)) {
    conteoPorEtapa[etapaId] = (conteoPorEtapa[etapaId] ?? 0) + 1
  }

  const conteoCategoriaFiltrado: Record<string, number> = {}
  for (const activo of activosParaConteoCategoria) {
    for (const categoria of activo.categorias) {
      conteoCategoriaFiltrado[categoria] = (conteoCategoriaFiltrado[categoria] ?? 0) + 1
    }
  }

  function limpiarFiltros() {
    setCategoriaSeleccionada(null)
    setDominioApi(null)
    setLifecycleApi(null)
    setOwnerApi(null)
  }

  const hayFiltrosActivos =
    etapaSeleccionada !== null ||
    categoriaSeleccionada !== null ||
    (filtroTipo === 'api' && (dominioApi !== null || lifecycleApi !== null || ownerApi !== null))

  return {
    filtroTipo,
    setFiltroTipo,
    etapaSeleccionada,
    alternarEtapa,
    categoriaSeleccionada,
    alternarCategoria,
    busqueda,
    setBusqueda,
    orden,
    setOrden,
    conteoPorEtapa,
    conteoCategoriaFiltrado,
    activosFiltrados,
    activosOrdenados,
    hayFiltrosActivos,
    dominioApi,
    setDominioApi,
    lifecycleApi,
    setLifecycleApi,
    ownerApi,
    setOwnerApi,
    limpiarFiltros,
  }
}
