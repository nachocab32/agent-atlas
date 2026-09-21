import { useState } from 'react'
import { useNavigate } from 'react-router'
import { EtapaCelda } from '@/components/catalogo/EtapaCelda'
import { FiltroTipo } from '@/components/catalogo/FiltroTipo'
import { FiltrosApiExtra } from '@/components/catalogo/FiltrosApiExtra'
import { GrillaActivos } from '@/components/catalogo/GrillaActivos'
import { activoEtapaConfirmada, activos, etapasCencoFlow, filtroTipoOpciones, filtrosApiOpciones } from '@/data/catalogo'
import { useCatalogoFiltros, type OrdenCatalogo } from '@/features/catalogo/use-catalogo-filtros'
import { SeccionApisFiltros, type VistaApis } from '@/features/catalogo/components/seccion-apis-filtros'
import { SeccionSkillsPorCategoria } from '@/features/catalogo/components/seccion-skills-por-categoria'
import { VitrinaPorTipo } from '@/features/catalogo/components/vitrina-por-tipo'
import { useTranslation } from '@/i18n'
import { FilaFacetaPildoras, ToolbarCatalogo } from '@/shared/ui'
import type { Activo, TipoActivo } from '@/types/catalogo'

// Las APIs no traen categorias (ver crearApi en catalogo-apis-helpers.ts): se excluyen
// del listado de categorías filtrables, no tendría sentido una píldora "undefined".
const categoriasUnicas = [...new Set(activos.filter((a) => a.categorias.length > 0).map((a) => a.categorias[0]))].sort(
  (a, b) => a.localeCompare(b),
)

const ordenOpciones: { valor: OrdenCatalogo; label: string }[] = [
  { valor: 'nombre', label: 'Por nombre' },
  { valor: 'reciente', label: 'Más reciente' },
]

interface FiltrosCatalogoProps {
  filtroTipo: 'todos' | TipoActivo
  categoriaSeleccionada: string | null
  alternarCategoria: (categoria: string) => void
  dominioApi: string | null
  setDominioApi: (valor: string | null) => void
  lifecycleApi: string | null
  setLifecycleApi: (valor: string | null) => void
  ownerApi: string | null
  setOwnerApi: (valor: string | null) => void
  conteoCategoriaFiltrado: Record<string, number>
  limpiarFiltros: () => void
}

// Facetas del popover de filtros de Aceleradores. Dominio/Lifecycle/Owner solo
// aparecen cuando la pestaña activa es APIs.
function FiltrosCatalogo({
  filtroTipo,
  categoriaSeleccionada,
  alternarCategoria,
  dominioApi,
  setDominioApi,
  lifecycleApi,
  setLifecycleApi,
  ownerApi,
  setOwnerApi,
  conteoCategoriaFiltrado,
  limpiarFiltros,
}: FiltrosCatalogoProps) {
  return (
    <div className="flex flex-col gap-4">
      <FilaFacetaPildoras
        etiqueta="Categoría"
        opciones={categoriasUnicas.map((categoria) => ({ valor: categoria, label: categoria, cantidad: conteoCategoriaFiltrado[categoria] ?? 0 }))}
        valorSeleccionado={categoriaSeleccionada}
        onSeleccionar={alternarCategoria}
      />
      {filtroTipo === 'api' && (
        <FiltrosApiExtra
          dominios={filtrosApiOpciones.dominio}
          lifecycles={filtrosApiOpciones.lifecycle}
          owners={filtrosApiOpciones.owner}
          dominioSeleccionado={dominioApi}
          onSeleccionarDominio={setDominioApi}
          lifecycleSeleccionado={lifecycleApi}
          onSeleccionarLifecycle={setLifecycleApi}
          ownerSeleccionado={ownerApi}
          onSeleccionarOwner={setOwnerApi}
        />
      )}
      <button
        type="button"
        onClick={limpiarFiltros}
        className="self-start text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Limpiar filtros
      </button>
    </div>
  )
}

interface SeccionEtapasProps {
  conteoPorEtapa: Record<string, number>
  etapaSeleccionada: string | null
  alternarEtapa: (etapaId: string) => void
}

function SeccionEtapas({ conteoPorEtapa, etapaSeleccionada, alternarEtapa }: SeccionEtapasProps) {
  const { t } = useTranslation()
  return (
    <section>
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {t('catalogo.explorarEtapa')}
      </h2>
      <div className="mt-[var(--space-component)] grid grid-cols-2 gap-[var(--space-component)] sm:grid-cols-3 lg:grid-cols-5">
        {etapasCencoFlow.map((etapa) => (
          <EtapaCelda
            key={etapa.id}
            etapa={etapa}
            conteo={conteoPorEtapa[etapa.id] ?? 0}
            seleccionada={etapaSeleccionada === etapa.id}
            onSeleccionar={() => alternarEtapa(etapa.id)}
          />
        ))}
      </div>
    </section>
  )
}

function SeccionTipoActivos({ activos, tipo, onSeleccionarActivo }: { activos: Activo[]; tipo: TipoActivo; onSeleccionarActivo: (activo: Activo) => void }) {
  const titulos: Record<TipoActivo, string> = { arquetipo: 'Arquetipos', skill: 'Skills', agente: 'Agentes', 'mcp-server': 'MCP servers', api: 'APIs' }
  return <section><h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{titulos[tipo]}</h2><div className="mt-3"><GrillaActivos activos={activos} onSeleccionarActivo={onSeleccionarActivo} /></div></section>
}

export function CatalogoPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const filtros = useCatalogoFiltros(activos, activoEtapaConfirmada)
  const [vistaApis, setVistaApis] = useState<VistaApis>('tarjetas')
  const { filtroTipo, setFiltroTipo, busqueda, setBusqueda, orden, setOrden, hayFiltrosActivos } = filtros

  function irAFicha(activo: Activo) {
    navigate(`/aceleradores/${activo.id}`)
  }

  function seleccionarTipo(tipo: 'todos' | TipoActivo) {
    setFiltroTipo(tipo)
    if (tipo === 'api') setVistaApis('tabla')
  }

  const mostrarVitrinaPorTipo = filtroTipo === 'todos'
  const mostrarSkillsPorCategoria = filtroTipo === 'skill'
  const mostrarFiltrosApi = filtroTipo === 'api'
  const mostrarListaPorTipo = filtroTipo === 'arquetipo' || filtroTipo === 'agente' || filtroTipo === 'mcp-server'

  return (
    <main id="contenido-principal" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-[var(--space-section)]">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t('catalogo.titulo')}</h1>
          <p className="mt-1 text-muted-foreground">{t('catalogo.bajada')}</p>
        </div>

        <ToolbarCatalogo
          tabs={<FiltroTipo opciones={filtroTipoOpciones} valorSeleccionado={filtroTipo} onSeleccionar={seleccionarTipo} />}
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          busquedaPlaceholder="Buscar por nombre"
          filtrosActivos={hayFiltrosActivos}
          filtros={<FiltrosCatalogo {...filtros} />}
          ordenOpciones={ordenOpciones}
          orden={orden}
          onOrdenChange={setOrden}
        />

        {mostrarVitrinaPorTipo && (
          <VitrinaPorTipo
            activos={filtros.activosFiltrados}
            onSeleccionarActivo={irAFicha}
            onVerTodo={seleccionarTipo}
          />
        )}

        {mostrarSkillsPorCategoria && (
          <SeccionSkillsPorCategoria activos={filtros.activosOrdenados} onSeleccionarActivo={irAFicha} />
        )}

        {mostrarFiltrosApi && (
          <SeccionApisFiltros
            activosFiltrados={filtros.activosFiltrados}
            onSeleccionarActivo={irAFicha}
            vista={vistaApis}
            onCambiarVista={setVistaApis}
          />
        )}

        {mostrarListaPorTipo && (
          <SeccionTipoActivos activos={filtros.activosFiltrados} tipo={filtroTipo} onSeleccionarActivo={irAFicha} />
        )}

        <SeccionEtapas
          conteoPorEtapa={filtros.conteoPorEtapa}
          etapaSeleccionada={filtros.etapaSeleccionada}
          alternarEtapa={filtros.alternarEtapa}
        />
      </div>
    </main>
  )
}
