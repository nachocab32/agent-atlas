import { Expand, Minimize2, X } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { activos } from '@/data/catalogo'
import { documentosGuia } from '@/data/documentos'
import { etapasViaje } from '@/data/viaje'
import { CuerpoDocumento } from '@/components/documento/CuerpoDocumento'
import { IndiceDocumento } from '@/components/documento/IndiceDocumento'
import { FichaApiTemplate } from '@/features/ficha-api/components/ficha-api-template'
import { FichaMcpTemplate } from '@/features/ficha-mcp/components/ficha-mcp-template'
import { DeckGenFicha } from '@/features/ficha/components/deck-gen-ficha'
import { FichaAgenteTemplate } from '@/features/ficha/components/ficha-agente-template'
import { FichaGenericaActivo } from '@/features/ficha/components/ficha-generica-activo'
import { FichaSkillGuia } from '@/features/ficha/components/ficha-skill-guia'
import { ContextoFichaContext } from './contexto-ficha'
import { referenciasPorId } from './registro-referencias'
import { Button } from '@/shared/ui'

function FichaReferencia({ activoId }: { activoId: string }) {
  const activo = activos.find((item) => item.id === activoId)
  if (!activo) return null
  if (activo.tipo === 'api') return <FichaApiTemplate activo={activo} />
  if (activo.id === 'deck-gen') return <DeckGenFicha activo={activo} />
  if (activo.tipo === 'skill') return <FichaSkillGuia activo={activo} />
  if (activo.tipo === 'agente') return <FichaAgenteTemplate activo={activo} />
  if (activo.tipo === 'mcp-server') return <FichaMcpTemplate activo={activo} />
  return <FichaGenericaActivo activo={activo} />
}

function FichaRapida({ activoId }: { activoId: string }) {
  const activo = activos.find((item) => item.id === activoId)
  if (!activo) return null
  return <div className="flex flex-col gap-5"><div><p className="text-xs font-medium text-accent">{activo.tipo}</p><h2 className="mt-1 text-xl font-semibold text-foreground">{activo.nombre}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p></div><section className="rounded-xl border border-border bg-card p-4"><p className="text-xs font-medium text-muted-foreground">Referencia citada</p><p className="mt-2 text-sm text-foreground">Versión {activo.version} · Actualizado {activo.fechaActualizacion}</p></section>{activo.contenido[0] && <section><h3 className="font-medium text-foreground">Contenido relevante</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activo.contenido[0]}</p></section>}</div>
}

function DocumentoReferencia({ documentoId, paginaId, completo, ampliado }: { documentoId: string; paginaId: string; completo: boolean; ampliado: boolean }) {
  const documento = documentosGuia.find((item) => item.id === documentoId)
  const [paginaActiva, setPaginaActiva] = useState(paginaId)
  if (!documento) return null
  const pagina = documento.paginas.find((item) => item.id === paginaActiva) ?? documento.paginas[0]
  if (!pagina) return null
  if (!completo) return <><p className="text-sm text-muted-foreground">{documento.descripcion}</p><h3 className="font-medium text-foreground">{pagina.titulo}</h3><CuerpoDocumento bloques={pagina.cuerpo.slice(0, 3)} /></>
  return <div className={ampliado ? 'grid w-full grid-cols-[minmax(0,48rem)_15rem] justify-between gap-x-16 max-md:grid-cols-1 max-md:gap-6' : 'grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_10rem]'}><main className={ampliado ? 'col-start-1 row-start-1 min-w-0 max-w-[48rem] max-md:col-start-auto max-md:row-start-auto' : 'min-w-0'}><h2 className="text-xl font-semibold text-foreground">{pagina.titulo}</h2><div className="mt-5"><CuerpoDocumento bloques={pagina.cuerpo} /></div></main><aside className={ampliado ? 'sticky top-4 col-start-2 self-start border-l border-border pl-6 max-md:static max-md:col-start-auto max-md:border-l-0 max-md:border-t max-md:pt-4 max-md:pl-0' : 'border-t border-border pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-4'}><IndiceDocumento titulo={documento.titulo} paginas={documento.paginas} paginaActivaId={pagina.id} onSeleccionarPagina={setPaginaActiva} /></aside></div>
}

function PasoViajeReferencia({ pasoId, completo }: { pasoId: string; completo: boolean }) {
  const paso = etapasViaje.flatMap((etapa) => etapa.pasos.map((item) => ({ etapa, item }))).find(({ item }) => item.id === pasoId)
  if (!paso) return null
  const entrada = paso.item.entrega.modo === 'manual' ? 'Actividad manual dentro del viaje.' : paso.item.entrega.input
  return <div className="flex flex-col gap-4"><p className="text-xs font-medium text-primary">Etapa {paso.etapa.numero} · {paso.etapa.nombre}</p><h2 className="text-xl font-semibold text-foreground">{paso.item.etiqueta}</h2><p className="text-sm leading-relaxed text-muted-foreground">{paso.item.descripcion}</p><div className="rounded-lg bg-muted p-4 text-sm text-foreground"><span className="font-medium">Resultado esperado: </span>{paso.item.entrega.modo === 'manual' ? paso.item.entrega.tuHaces : paso.item.entrega.output}</div>{completo && <><div className="rounded-xl border border-border bg-card p-4 text-sm"><p className="font-medium">Entrada</p><p className="mt-1 text-muted-foreground">{entrada}</p></div>{paso.item.relacion && <p className="text-sm text-muted-foreground">Se alimenta de {paso.item.relacion.pasoOrigen}.</p>}</>}</div>
}

export function PanelReferencia() {
  const [params, setParams] = useSearchParams()
  const referenciaId = params.get('panel')
  const modo = params.get('modo') === 'ampliado' ? 'ampliado' : params.get('modo') === 'completo' ? 'completo' : 'rapido'
  const referencia = referenciaId ? referenciasPorId[referenciaId] : undefined

  if (!referencia || !referenciaId) return null
  const completo = modo !== 'rapido'
  const ampliado = modo === 'ampliado'
  const cerrar = () => { const siguiente = new URLSearchParams(params); siguiente.delete('panel'); siguiente.delete('modo'); setParams(siguiente) }
  const alternar = () => { const siguiente = new URLSearchParams(params); siguiente.set('modo', ampliado ? 'completo' : 'ampliado'); setParams(siguiente) }
  const titulo = referencia.tipo === 'activo' ? activos.find((item) => item.id === referencia.activoId)?.nombre : referencia.tipo === 'documento' ? documentosGuia.find((item) => item.id === referencia.documentoId)?.titulo : 'CencoFlow'

  return <aside className={`h-full shrink-0 overflow-y-auto border-l border-border ${ampliado ? 'bg-background w-full' : completo ? 'w-[70%] bg-muted/40' : 'w-[312px] bg-muted/40'} max-md:fixed max-md:inset-0 max-md:z-40 max-md:w-full`} aria-label="Referencia consultada">
    <div className={`sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border px-4 py-3 ${ampliado ? 'bg-background' : 'bg-muted/40'}`}><p className="min-w-0 truncate text-sm font-medium text-foreground">{titulo}</p><div className="flex shrink-0 gap-1"><Button variant="ghost" size="icon" title={ampliado ? 'Vista dividida' : 'Expandir referencia'} aria-label={ampliado ? 'Vista dividida' : 'Expandir referencia'} onClick={alternar}>{ampliado ? <Minimize2 className="size-4" /> : <Expand className="size-4" />}</Button><Button variant="ghost" size="icon" title="Cerrar referencia" aria-label="Cerrar referencia" onClick={cerrar}><X className="size-4" /></Button></div></div>
    <div className={ampliado ? 'w-full px-6 py-10 lg:px-10 2xl:px-14' : 'p-4 sm:p-5'}><div className={ampliado ? 'mx-auto w-full max-w-[76rem]' : undefined}><ContextoFichaContext.Provider value="panel">{referencia.tipo === 'activo' ? (completo ? <FichaReferencia activoId={referencia.activoId} /> : <FichaRapida activoId={referencia.activoId} />) : referencia.tipo === 'documento' ? <DocumentoReferencia documentoId={referencia.documentoId} paginaId={referencia.paginaId} completo={completo} ampliado={ampliado} /> : <PasoViajeReferencia pasoId={referencia.pasoId} completo={completo} />}</ContextoFichaContext.Provider></div></div>
  </aside>
}
