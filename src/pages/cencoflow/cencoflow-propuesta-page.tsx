import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { BloqueEntrega } from '@/components/viaje/BloqueEntrega'
import { RelacionPasoBloque } from '@/components/viaje/RelacionPasoBloque'
import { TarjetaPaso } from '@/components/viaje/TarjetaPaso'
import { etapasViaje } from '@/data/viaje'
import { resolverTipoOrigen } from '@/features/viaje/resolver-tipo-origen'
import { Button, Tabs, TabsList, TabsTrigger } from '@/shared/ui'

const pasos = etapasViaje.flatMap((etapa) => etapa.pasos.map((paso) => ({ etapa, paso })))

export function CencoflowPropuestaPage() {
  const [pasoId, setPasoId] = useState('generar-la-propuesta')
  const indice = Math.max(0, pasos.findIndex((item) => item.paso.id === pasoId))
  const actual = pasos[indice]
  const siguiente = pasos[indice + 1]
  const anterior = pasos[indice - 1]
  const progreso = Math.round(((indice + 1) / pasos.length) * 100)
  const textoSiguiente = useMemo(() => siguiente ? `Continuar a ${siguiente.paso.etiqueta}` : 'Finalizar etapa', [siguiente])
  const origenRelacion = actual.paso.relacion
    ? pasos.find(({ etapa, paso }) => actual.paso.relacion?.pasoOrigen === `${etapa.nombre} · ${paso.etiqueta}` || actual.paso.relacion?.pasoOrigen === paso.etiqueta)
    : undefined

  function irA(id: string) { setPasoId(id); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="max-w-3xl">
          <h1 className="font-heading text-2xl font-semibold text-foreground">CencoFlow</h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">Una guía de trabajo para transformar una necesidad en una solución lista para construir y operar.</p>
        </header>

        <Tabs value="diseno">
          <TabsList>
            <TabsTrigger value="diseno">Diseño</TabsTrigger>
            <TabsTrigger value="desarrollo" disabled>Desarrollo</TabsTrigger>
            <TabsTrigger value="produccion" disabled>Producción</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-[minmax(0,45rem)_16rem] items-start gap-10 max-md:grid-cols-1">
          <main className="flex min-w-0 flex-col gap-6 max-md:order-1">
            <header className="border-b border-border pb-5">
              <p className="text-xs font-medium text-primary">Etapa {actual.etapa.numero} · {actual.etapa.nombre} · Paso {indice + 1} de {pasos.length}</p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">{actual.paso.etiqueta}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{actual.etapa.intencion}</p>
              <div className="mt-4 rounded-lg bg-muted px-4 py-3 text-sm text-foreground"><span className="font-medium">Resultado esperado: </span>{actual.paso.entrega.modo === 'manual' ? actual.paso.entrega.tuHaces : actual.paso.entrega.output}</div>
            </header>

            <TarjetaPaso paso={actual.paso} />
            <BloqueEntrega entrega={actual.paso.entrega} />
            {actual.paso.relacion && <RelacionPasoBloque relacion={actual.paso.relacion} tipoOrigen={resolverTipoOrigen(actual.paso.relacion.pasoOrigen)} onSeleccionar={origenRelacion ? () => irA(origenRelacion.paso.id) : undefined} />}

            <footer className="flex items-center justify-between gap-3 border-t border-border pt-5">
              {anterior ? <Button variant="outline" onClick={() => irA(anterior.paso.id)}><ArrowLeft className="size-4" />{anterior.paso.etiqueta}</Button> : <span />}
              {siguiente ? <Button onClick={() => irA(siguiente.paso.id)}>{textoSiguiente}<ArrowRight className="size-4" /></Button> : <Button><CheckCircle2 className="size-4" />Finalizar Diseño</Button>}
            </footer>
          </main>

          <aside className="sticky top-6 self-start rounded-xl border border-border bg-card p-4 max-md:static max-md:order-2">
            <div className="flex items-end justify-between gap-3">
              <div><p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Etapas del viaje</p><p className="mt-1 text-sm font-medium text-foreground">Paso {indice + 1} de {pasos.length}</p></div>
              <span className="text-xs font-medium text-primary">{progreso}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progreso}%` }} /></div>
            <nav className="mt-5 flex flex-col gap-5" aria-label="Pasos de Diseño">
              {etapasViaje.map((etapa) => {
                const activa = etapa.id === actual.etapa.id
                return <section key={etapa.id}>
                  <div className="flex items-center gap-2"><span className={`flex size-6 items-center justify-center rounded-full text-xs font-semibold ${activa ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{etapa.numero}</span><p className={`text-xs font-medium ${activa ? 'text-foreground' : 'text-muted-foreground'}`}>{etapa.nombre}</p></div>
                  <div className="mt-2 ml-3 border-l border-border pl-4">{etapa.pasos.map((paso) => <button key={paso.id} type="button" onClick={() => irA(paso.id)} className={`block w-full rounded-lg px-2 py-2 text-left text-sm transition-colors ${paso.id === pasoId ? 'bg-primary/5 font-medium text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}>{paso.etiqueta}{paso.id === pasoId && <span className="ml-2 text-[10px] font-semibold tracking-wide uppercase">Actual</span>}</button>)}</div>
                </section>
              })}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  )
}
