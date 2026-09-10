import { useEffect } from 'react'
import { BreadcrumbDocumento } from '@/components/documento/BreadcrumbDocumento'
import { CuerpoDocumento } from '@/components/documento/CuerpoDocumento'
import { EstadoVacioDocumento } from '@/components/documento/EstadoVacioDocumento'
import { FilaDistintivos } from '@/components/documento/FilaDistintivos'
import { IndiceDocumento } from '@/components/documento/IndiceDocumento'
import { IndiceTomaDeControl } from '@/components/documento/IndiceTomaDeControl'
import { PiePaginaDocumento } from '@/components/documento/PiePaginaDocumento'
import { TomaDeControlPortada } from '@/components/documento/TomaDeControlPortada'
import { WidgetFeedback } from '@/components/documento/WidgetFeedback'
import { useDocumentoNavegacion } from '@/features/documento/use-documento-navegacion'

export function DocumentoPage() {
  const { documento, paginas, pagina, anterior, siguiente, irAPagina } = useDocumentoNavegacion()

  // Refleja siempre una página concreta en la URL cuando el documento tiene índice.
  useEffect(() => {
    if (documento && paginas.length > 0 && !pagina) {
      irAPagina(paginas[0].id, { reemplazar: true })
    }
  }, [documento, paginas, pagina, irAPagina])

  if (!documento) {
    return (
      <div className="flex-1 px-6 py-8">
        <p className="text-sm text-muted-foreground">No encontramos este documento en Guías.</p>
      </div>
    )
  }

  const detalle = documento.detalle
  const breadcrumb = ['Guías', documento.categorias[0], documento.titulo, ...(pagina ? [pagina.titulo] : [])]
  const esTomaDeControl = documento.id === 'toma-de-control-propuesta'
  const esPortadaTdc = esTomaDeControl && pagina?.id === 'inicio'

  return (
    <div className="flex flex-1 overflow-y-auto px-8 py-10 max-md:px-4 max-md:py-6 2xl:px-12">
      <div className="grid w-full grid-cols-[15rem_minmax(0,1fr)] gap-10 max-md:grid-cols-1 max-md:gap-6">
        <aside className="sticky top-4 self-start border-r border-border pr-6 max-md:static max-md:border-r-0 max-md:border-b max-md:pb-6 max-md:pr-0">
          {esTomaDeControl ? <IndiceTomaDeControl
            paginas={paginas}
            paginaActivaId={pagina?.id}
            onSeleccionarPagina={irAPagina}
          /> : <IndiceDocumento
            titulo={documento.titulo}
            paginas={paginas}
            paginaActivaId={pagina?.id}
            onSeleccionarPagina={irAPagina}
          />}
        </aside>

        <main className="min-w-0 max-w-none">
          {esPortadaTdc ? <TomaDeControlPortada /> : <div className="flex flex-col gap-6">
        <BreadcrumbDocumento segmentos={breadcrumb} />

        <div>
          <h2 className="text-xl font-semibold text-foreground">{pagina?.titulo ?? documento.titulo}</h2>
        </div>

        <FilaDistintivos madurez={documento.madurez} tags={detalle?.tags ?? documento.tags} />

        <p className="text-sm text-muted-foreground">
          {detalle
            ? `Versión ${detalle.version} · Actualizado ${detalle.actualizado} · Owner: ${detalle.owner}`
            : `Owner: ${documento.owner}`}
        </p>

        {pagina?.bajada && <p className="max-w-3xl text-muted-foreground">{pagina.bajada}</p>}

        {pagina && pagina.cuerpo.length > 0 ? (
          <CuerpoDocumento bloques={pagina.cuerpo} />
        ) : (
          <EstadoVacioDocumento
            mensaje={
              paginas.length > 0
                ? 'Contenido de esta página pendiente de cargar.'
                : `Contenido de "${documento.titulo}" pendiente de cargar.`
            }
          />
        )}

        {pagina && <PiePaginaDocumento anterior={anterior} siguiente={siguiente} onSeleccionarPagina={irAPagina} />}

            <WidgetFeedback />
          </div>}
        </main>
      </div>
    </div>
  )
}
