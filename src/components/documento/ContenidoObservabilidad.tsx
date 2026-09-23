import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import type { BibliotecaObservabilidad, BloqueObservabilidad, TemaObservabilidad } from '@/types/observabilidad'

function TextoConFormato({ texto }: { texto: string }) {
  const partes = texto.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^\s)]+\))/g)
  return <>{partes.map((parte, indice) => {
    if (parte.startsWith('**') && parte.endsWith('**')) return <strong key={indice}>{parte.slice(2, -2)}</strong>
    const enlace = parte.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/)
    if (enlace) return <a key={indice} href={enlace[2]} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">{enlace[1]}</a>
    return <span key={indice}>{parte}</span>
  })}</>
}

function Acordeon({ titulo, contenido, expandido }: { titulo: string; contenido: BloqueObservabilidad[]; expandido: boolean }) {
  const [abierto, setAbierto] = useState(false)
  return <section className="overflow-hidden rounded-lg border border-border bg-card">
    <button type="button" onClick={() => setAbierto((actual) => !actual)} aria-expanded={abierto} className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted">
      <ChevronRight className={cn('size-4 shrink-0 text-muted-foreground transition-transform', abierto && 'rotate-90')} />
      {titulo}
    </button>
    {abierto && <div className="border-t border-border px-4 py-5"><BloquesObservabilidad bloques={contenido} completo={expandido} /></div>}
  </section>
}

function Pasos({ pasos, completo }: { pasos: { titulo: string; contenido: BloqueObservabilidad[] }[]; completo: boolean }) {
  const [pasoActivo, setPasoActivo] = useState(0)
  if (completo) return <div className="flex flex-col gap-7">{pasos.map((paso, indice) => <section key={paso.titulo}><h3 className="text-base font-semibold text-foreground">{indice + 1}. {paso.titulo}</h3><div className="mt-3"><BloquesObservabilidad bloques={paso.contenido} completo /></div></section>)}</div>
  const paso = pasos[pasoActivo]
  return <div className="rounded-xl border border-border bg-card p-4"><div className="flex flex-wrap gap-2">{pasos.map((item, indice) => <button key={item.titulo} type="button" onClick={() => setPasoActivo(indice)} className={cn('rounded-full border border-border px-3 py-1.5 text-sm transition-colors', indice === pasoActivo ? 'border-primary bg-primary text-primary-foreground hover:bg-green-900' : 'text-muted-foreground hover:bg-muted')}>{indice + 1}. {item.titulo}</button>)}</div><div className="mt-5"><BloquesObservabilidad bloques={paso.contenido} completo={false} /></div></div>
}

export function BloquesObservabilidad({ bloques, completo = true }: { bloques: BloqueObservabilidad[]; completo?: boolean }) {
  return <div className="flex max-w-3xl flex-col gap-5">{bloques.map((bloque, indice) => {
    if (bloque.tipo === 'encabezado') return bloque.nivel <= 3 ? <h3 key={indice} className="text-xl font-semibold tracking-tight text-foreground">{bloque.texto}</h3> : <h4 key={indice} className="text-base font-semibold text-foreground">{bloque.texto}</h4>
    if (bloque.tipo === 'parrafo') {
      const esFuente = /^(\*\*)?(Fuentes|Fuente|Referencias documentales)(\*\*)?:/i.test(bloque.texto)
      return <p key={indice} className={cn(esFuente ? 'text-sm leading-relaxed text-muted-foreground' : 'leading-relaxed text-foreground')}><TextoConFormato texto={bloque.texto} /></p>
    }
    if (bloque.tipo === 'lista') { const Lista = bloque.ordenada ? 'ol' : 'ul'; return <Lista key={indice} className={cn('flex flex-col gap-2 pl-5 leading-relaxed text-foreground', bloque.ordenada ? 'list-decimal' : 'list-disc')}>{bloque.items.map((item) => <li key={item}><TextoConFormato texto={item} /></li>)}</Lista> }
    if (bloque.tipo === 'tabla') return <div key={indice} className="overflow-x-auto rounded-xl border border-border bg-card"><table className="w-full text-left text-sm"><thead><tr className="border-b border-border bg-muted">{bloque.encabezados.map((encabezado) => <th key={encabezado} className="px-4 py-3 font-medium text-foreground">{encabezado}</th>)}</tr></thead><tbody>{bloque.filas.map((fila, filaIndice) => <tr key={filaIndice} className="border-b border-border last:border-0">{fila.map((celda, celdaIndice) => <td key={celdaIndice} className="px-4 py-3 align-top leading-relaxed text-foreground"><TextoConFormato texto={celda} /></td>)}</tr>)}</tbody></table></div>
    if (bloque.tipo === 'imagen') return <figure key={indice} className="overflow-hidden rounded-xl border border-border bg-card"><img src={bloque.src} alt={bloque.alt} className="w-full" />{bloque.caption && <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">{bloque.caption}</figcaption>}</figure>
    if (bloque.tipo === 'acordeon') return <Acordeon key={bloque.titulo} titulo={bloque.titulo} contenido={bloque.contenido} expandido={completo} />
    return <Pasos key={indice} pasos={bloque.pasos} completo={completo} />
  })}</div>
}

export function ContenidoObservabilidad({ tema }: { tema: TemaObservabilidad }) {
  const [modo, setModo] = useState<'resumen' | 'completa'>(tema.modoLectura === 'resumen-completa' ? 'resumen' : 'completa')
  const esCompleta = modo === 'completa'
  const bloques = esCompleta ? tema.completa : tema.resumen
  return <div className="flex flex-col gap-6">{tema.modoLectura === 'resumen-completa' && <div role="group" aria-label="Modo de lectura" className="inline-flex w-fit rounded-lg border border-border bg-card p-1"><button type="button" onClick={() => setModo('resumen')} className={cn('rounded-md px-3 py-1.5 text-sm font-medium', !esCompleta && 'bg-primary text-primary-foreground hover:bg-green-900')}>Resumen</button><button type="button" onClick={() => setModo('completa')} className={cn('rounded-md px-3 py-1.5 text-sm font-medium', esCompleta && 'bg-primary text-primary-foreground hover:bg-green-900')}>Completa</button></div>}<BloquesObservabilidad bloques={bloques} completo={esCompleta} /></div>
}

export function BibliotecaObservabilidad({ biblioteca }: { biblioteca: BibliotecaObservabilidad }) {
  const grupos = biblioteca.fuentes.reduce<Record<string, BibliotecaObservabilidad['fuentes']>>((acumulado, fuente) => ({ ...acumulado, [fuente.grupo]: [...(acumulado[fuente.grupo] ?? []), fuente] }), {})
  return <div className="flex flex-col gap-8"><BloquesObservabilidad bloques={biblioteca.alcance} />{Object.entries(grupos).map(([grupo, fuentes]) => <section key={grupo}><h3 className="text-base font-semibold text-foreground">{grupo}</h3><div className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">{fuentes.map((fuente) => <a key={fuente.url} href={fuente.url} target="_blank" rel="noreferrer" className="flex items-baseline justify-between gap-4 px-4 py-3 hover:bg-muted"><span className="text-sm font-medium text-foreground">{fuente.titulo}</span><span className="shrink-0 text-xs text-muted-foreground">{fuente.estado}</span></a>)}</div></section>)}</div>
}
