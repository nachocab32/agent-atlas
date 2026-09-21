import { useNavigate, useSearchParams } from 'react-router'
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
    <div className="flex flex-wrap gap-[var(--space-control)]">
      {opciones.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          onClick={() => onSeleccionar(opcion.valor)}
          className={cn(
            'rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted',
            opcion.valor === categoria && 'border-foreground bg-foreground text-background',
          )}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  )
}

function VitrinaGuiasPorCategoria({
  documentos,
  onSeleccionarDocumento,
  onVerTodo,
}: {
  documentos: DocumentoGuia[]
  onSeleccionarDocumento: (documento: DocumentoGuia) => void
  onVerTodo: (categoria: (typeof categoriaGuiaOpciones)[number]) => void
}) {
  return (
    <div className="flex flex-col gap-[var(--space-section)]">
      {categoriaGuiaOpciones.map((categoria) => {
        const documentosCategoria = documentos.filter((documento) => documento.categorias.includes(categoria))
        if (documentosCategoria.length === 0) return null

        return (
          <section key={categoria} aria-label={categoria}>
            <div className="flex items-center justify-between gap-[var(--space-block)]">
              <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{categoria}</h2>
              {documentosCategoria.length > 4 && (
                <button type="button" onClick={() => onVerTodo(categoria)} className="text-xs font-medium text-primary underline-offset-4 hover:underline">
                  Ver todo
                </button>
              )}
            </div>
            <div className="mt-3">
              <GrillaDocumentos documentos={documentosCategoria.slice(0, 4)} onSeleccionarDocumento={onSeleccionarDocumento} />
            </div>
          </section>
        )
      })}
    </div>
  )
}

export function GuiasPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const categoriaParam = searchParams.get('categoria')
  const categoriaInicial = categoriaGuiaOpciones.includes(categoriaParam as (typeof categoriaGuiaOpciones)[number])
    ? (categoriaParam as (typeof categoriaGuiaOpciones)[number])
    : 'todos'
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
  } = useGuiasFiltros(documentosGuia, categoriaInicial)

  function seleccionarCategoria(nuevaCategoria: 'todos' | (typeof categoriaGuiaOpciones)[number]) {
    setCategoria(nuevaCategoria)
    setSearchParams(nuevaCategoria === 'todos' ? {} : { categoria: nuevaCategoria })
  }

  function irADocumento(documento: DocumentoGuia) {
    const primeraPagina = documento.paginas[0]?.id
    navigate(primeraPagina ? `/guias/${documento.id}/${primeraPagina}` : `/guias/${documento.id}`)
  }

  return (
    <main id="contenido-principal" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-[var(--space-section)]">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Documentación</h1>
          <p className="mt-1 text-muted-foreground">
            Lineamientos, marcos de gobierno y guías técnicas del ecosistema.
          </p>
        </div>

        <ToolbarCatalogo
          tabs={<TabsCategoriaGuia categoria={categoria} onSeleccionar={seleccionarCategoria} />}
          busqueda={busqueda}
          onBusquedaChange={setBusqueda}
          busquedaPlaceholder="Buscar por nombre"
          filtrosActivos={hayFiltrosActivos}
          filtros={
            <div className="flex flex-col gap-[var(--space-block)]">
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

        {categoria === 'todos' ? (
          <VitrinaGuiasPorCategoria
            documentos={documentosFiltrados}
            onSeleccionarDocumento={irADocumento}
            onVerTodo={seleccionarCategoria}
          />
        ) : (
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
        )}
      </div>
    </main>
  )
}
