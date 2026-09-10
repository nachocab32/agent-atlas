import { useEffect } from 'react'
import { BreadcrumbDocumento } from '@/components/documento/BreadcrumbDocumento'
import { CuerpoDocumento } from '@/components/documento/CuerpoDocumento'
import { EstadoVacioDocumento } from '@/components/documento/EstadoVacioDocumento'
import { FilaDistintivos } from '@/components/documento/FilaDistintivos'
import { IndiceDocumento } from '@/components/documento/IndiceDocumento'
import { PiePaginaDocumento } from '@/components/documento/PiePaginaDocumento'
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

  return (
    <div className="flex flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <main className="min-w-0 max-w-3xl">
          <div className="flex flex-col gap-6">
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

        {pagina?.bajada && <p className="text-muted-foreground">{pagina.bajada}</p>}

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
          </div>
        </main>

        <aside className="sticky top-4 self-start max-md:static max-md:order-first">
          <IndiceDocumento
            titulo={documento.titulo}
            paginas={paginas}
            paginaActivaId={pagina?.id}
            onSeleccionarPagina={irAPagina}
          />
        </aside>
      </div>
    </div>
  )
}
