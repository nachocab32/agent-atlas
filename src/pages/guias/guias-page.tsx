import { useNavigate } from 'react-router'
import { GrillaDocumentos } from '@/components/documento/GrillaDocumentos'
import { categoriaGuiaOpciones, documentosGuia, madurezGuiaLabel, madurezGuiaOpciones } from '@/data/documentos'
import { useGuiasFiltros, type OrdenGuia } from '@/features/guias/use-guias-filtros'
import { FilaFacetaPildoras, ToolbarCatalogo } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
import type { DocumentoGuia } from '@/types/documento'

const ordenOpciones: { valor: OrdenGuia; label: string }[] = [{ valor: 'nombre', label: 'Por nombre' }]

function TabsCategoriaGuia({
  categoria,
  onSeleccionar,
}: {
  categoria: 'todos' | (typeof categoriaGuiaOpciones)[number]
  onSeleccionar: (categoria: 'todos' | (typeof categoriaGuiaOpciones)[number]) => void
}) {
  const opciones = [{ valor: 'todos' as const, label: 'Todos' }, ...categoriaGuiaOpciones.map((valor) => ({ valor, label: valor }))]

  return (
    <div className="flex flex-wrap gap-2">
      {opciones.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          onClick={() => onSeleccionar(opcion.valor)}
          className={cn(
            'rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:bg-muted',
            opcion.valor === categoria && 'border-primary/30 bg-accent text-accent-foreground',
          )}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  )
}

export function GuiasPage() {
  const navigate = useNavigate()
  const {
    categoria,
    setCategoria,
    madurez,
    setMadurez,
    busqueda,
    setBusqueda,
    orden,
    setOrden,
    documentosFiltrados,
    conteoMadurez,
    hayFiltrosActivos,
  } = useGuiasFiltros(documentosGuia)

  function irADocumento(documento: DocumentoGuia) {
    const primeraPagina = documento.paginas[0]?.id
    navigate(primeraPagina ? `/guias/${documento.id}/${primeraPagina}` : `/guias/${documento.id}`)
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Documentación</h1>
          <p className="mt-1 text-muted-foreground">
            Lineamientos, marcos de gobierno y guías técnicas del ecosistema.
          </p>
        </div>

        <ToolbarCatalogo
          tabs={<TabsCategoriaGuia categoria={categoria} onSeleccionar={setCategoria} />}
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          busquedaPlaceholder="Buscar por nombre"
          filtrosActivos={hayFiltrosActivos}
          filtros={
            <div className="flex flex-col gap-4">
              <FilaFacetaPildoras
                etiqueta="Madurez"
                opciones={madurezGuiaOpciones.map((m) => ({ valor: m, label: `${madurezGuiaLabel[m]} (${conteoMadurez[m]})` }))}
                valorSeleccionado={madurez === 'todos' ? null : madurez}
                onSeleccionar={(valor) =>
                  setMadurez((actual) => (actual === valor ? 'todos' : (valor as (typeof madurezGuiaOpciones)[number])))
                }
              />
            </div>
          }
          ordenOpciones={ordenOpciones}
          orden={orden}
          onOrdenChange={setOrden}
        />

        <section>
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Documentos</h2>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {documentosFiltrados.length}
            </span>
          </div>
          <div className="mt-3">
            <GrillaDocumentos documentos={documentosFiltrados} onSeleccionarDocumento={irADocumento} />
          </div>
        </section>
      </div>
    </div>
  )
}
