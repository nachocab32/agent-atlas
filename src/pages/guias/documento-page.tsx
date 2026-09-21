import { useEffect } from 'react'
import { BreadcrumbDocumento } from '@/components/documento/BreadcrumbDocumento'
import { CuerpoDocumento } from '@/components/documento/CuerpoDocumento'
import { BibliotecaObservabilidad, ContenidoObservabilidad } from '@/components/documento/ContenidoObservabilidad'
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
  const categoria = documento.categorias[0]
  const breadcrumb = [
    { etiqueta: 'Guías', href: '/guias' },
    { etiqueta: categoria, href: `/guias?categoria=${encodeURIComponent(categoria)}` },
    { etiqueta: documento.titulo, href: `/guias/${documento.id}/${paginas[0]?.id ?? ''}` },
    ...(pagina ? [{ etiqueta: pagina.titulo }] : []),
  ]
  const esTomaDeControl = documento.id === 'toma-de-control-propuesta'
  const esPortadaTdc = esTomaDeControl && pagina?.id === 'inicio'

  return (
    <div className="flex flex-1 overflow-y-auto px-6 py-10 max-md:px-4 max-md:py-6 lg:px-10 2xl:px-14">
      <div className="mx-auto grid w-full max-w-[76rem] grid-cols-[minmax(0,48rem)_15rem] justify-between gap-x-16 max-md:grid-cols-1 max-md:gap-6">
        <aside className="sticky top-4 col-start-2 self-start border-l border-border pl-6 max-md:static max-md:col-start-auto max-md:border-l-0 max-md:border-b max-md:pb-6 max-md:pl-0">
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

        <main id="contenido-principal" className="col-start-1 row-start-1 min-w-0 max-w-[48rem] max-md:col-start-auto max-md:row-start-auto">
          {esPortadaTdc ? <TomaDeControlPortada /> : <div className="flex flex-col gap-6">
        <BreadcrumbDocumento segmentos={breadcrumb} />

        <div>
          <h2 className="text-[40px] font-semibold leading-[1.2] tracking-[-2px] text-foreground">{pagina?.titulo ?? documento.titulo}</h2>
        </div>

        <FilaDistintivos madurez={documento.madurez} tags={detalle?.tags ?? documento.tags} />

        <p className="text-sm text-muted-foreground">
          {detalle
            ? `Versión ${detalle.version} · Actualizado ${detalle.actualizado} · Owner: ${detalle.owner}`
            : `Owner: ${documento.owner}`}
        </p>

        {pagina?.bajada && <p className="max-w-3xl text-muted-foreground">{pagina.bajada}</p>}

        {pagina?.temaObservabilidad ? (
          <ContenidoObservabilidad tema={pagina.temaObservabilidad} />
        ) : pagina?.bibliotecaObservabilidad ? (
          <BibliotecaObservabilidad biblioteca={pagina.bibliotecaObservabilidad} />
        ) : pagina && pagina.cuerpo.length > 0 ? (
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
