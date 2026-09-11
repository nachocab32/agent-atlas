import { useState } from 'react'
import { Radar, Search, Sparkles } from 'lucide-react'
import { Input } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'

type TipoRadar = 'tech' | 'hype'
type RadarItem = { id: string; titulo: string; descripcion: string; tipo: TipoRadar }

const radares: RadarItem[] = [
  { id: 'engineering-software', titulo: 'Engineering Software', descripcion: 'Cuadrantes × anillos con histórico de adopción por tecnología.', tipo: 'tech' },
  { id: 'enterprise-automation', titulo: 'Enterprise Automation', descripcion: 'Cuadrantes × anillos con histórico de adopción por tecnología.', tipo: 'tech' },
  { id: 'middleware-integration-stack', titulo: 'Middleware & Integration Stack', descripcion: 'Cuadrantes × anillos con histórico de adopción por tecnología.', tipo: 'tech' },
  { id: 'security', titulo: 'Security', descripcion: 'Cuadrantes × anillos con histórico de adopción por tecnología.', tipo: 'tech' },
  { id: 'retail-innovation-hype-radar', titulo: 'Retail Innovation Hype Radar', descripcion: 'Ciclo de expectativas: etapas × tiempo a la meseta de productividad.', tipo: 'hype' },
]

const tabs: { valor: 'todos' | TipoRadar; etiqueta: string }[] = [
  { valor: 'todos', etiqueta: 'Todos' }, { valor: 'tech', etiqueta: 'Tech Radars' }, { valor: 'hype', etiqueta: 'Hype Radars' },
]

export function PlataformaPage() {
  const [tipo, setTipo] = useState<'todos' | TipoRadar>('todos')
  const [busqueda, setBusqueda] = useState('')
  const visibles = radares.filter((radar) => (tipo === 'todos' || radar.tipo === tipo) && radar.titulo.toLowerCase().includes(busqueda.toLowerCase()))

  return <div className="flex-1 overflow-y-auto px-6 py-8"><div className="mx-auto flex max-w-4xl flex-col gap-8">
    <header><h1 className="text-2xl font-semibold text-foreground">Plataforma</h1><p className="mt-1 text-muted-foreground">Radares tecnológicos corporativos para orientar decisiones de adopción e innovación.</p></header>
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-3">
      <div className="flex flex-wrap gap-2">{tabs.map((tab) => <button key={tab.valor} type="button" onClick={() => setTipo(tab.valor)} className={cn('rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted', tipo === tab.valor && 'border-foreground bg-foreground text-background')}>{tab.etiqueta}</button>)}</div>
      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5"><Search className="size-4 shrink-0 text-muted-foreground" /><Input value={busqueda} onChange={(event) => setBusqueda(event.target.value)} placeholder="Buscar radar" className="h-6 w-40 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0" /></div>
    </div>
    <section><div className="flex items-center gap-2"><h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{tipo === 'hype' ? 'Hype Radars' : tipo === 'tech' ? 'Tech Radars' : 'Radares tecnológicos'}</h2><span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{visibles.length}</span></div>
      {visibles.length === 0 ? <p className="mt-3 text-sm text-muted-foreground">No encontramos radares que calcen con tu búsqueda.</p> : <div className="mt-3 grid grid-cols-2 gap-3">{visibles.map((radar) => { const Icono = radar.tipo === 'tech' ? Radar : Sparkles; return <button key={radar.id} type="button" className="flex min-h-48 flex-col items-start rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/25 hover:bg-primary/5"><span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium', radar.tipo === 'tech' ? 'bg-blue-50 text-blue-500' : 'bg-amber-100 text-amber-600')}><Icono className="size-3" />{radar.tipo === 'tech' ? 'Tech Radar' : 'Hype Radar'}</span><h3 className="mt-4 text-lg font-semibold text-foreground">{radar.titulo}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{radar.descripcion}</p><span className="mt-auto pt-5 text-sm font-medium text-primary">Abrir radar →</span></button> })}</div>}</section>
  </div></div>
}
