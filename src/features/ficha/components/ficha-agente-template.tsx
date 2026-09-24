import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { fichaAgenteDetallePorId } from '@/data/ficha-agente'
import { tipoActivoLabel } from '@/data/catalogo'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { ReproductorVideo, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'
import type { VideoAgente } from '@/types/ficha-agente'

function SeccionVideoAgente({ nombreActivo, video }: { nombreActivo: string; video: VideoAgente }) {
  return <ReproductorVideo titulo={`Demo de ${nombreActivo}`} duracion={video.duracion} vimeoId={video.vimeoId} />
}

export function FichaAgenteTemplate({ activo }: { activo: Activo }) {
  const detalle = fichaAgenteDetallePorId[activo.id]
  const [tab, setTab] = useState('resumen')
  if (!detalle) return null

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={<a href={detalle.hrefUso} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'shrink-0')}>Abrir Cenco Writer <ExternalLink className="size-4" /></a>} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="activacion">Activación</TabsTrigger>
            <TabsTrigger value="ejemplo">Ejemplo</TabsTrigger>
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Qué hace este agente</h2>
            <p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Fricción que resuelve</h2>
            <p className="leading-relaxed text-muted-foreground">{detalle.friccion}</p>
          </section>

          {detalle.video && <SeccionVideoAgente nombreActivo={activo.nombre} video={detalle.video} />}
          </TabsContent>

          <TabsContent value="activacion" className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Cómo activarlo</h2>
            <ol className="flex flex-col gap-3">
              {detalle.comoActivarlo.map((paso) => (
                <li key={paso.numero} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">{paso.numero}</span>
                  {paso.texto}
                </li>
              ))}
            </ol>
          </section>
          </TabsContent>

          <TabsContent value="ejemplo" className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Ejemplo de uso real</h2>
            <div className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground">
              {detalle.ejemploUso}
            </div>
          </section>
          </TabsContent>

          <TabsContent value="recursos" className="flex flex-col gap-8">
          <section className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
            <h3 className="font-medium text-foreground">{detalle.recurso.titulo}</h3>
            <p className="text-sm text-muted-foreground">{detalle.recurso.descripcion}</p>
            <a href={detalle.recurso.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-primary hover:underline">
              <ExternalLink className="size-3.5" />
              Abrir en SharePoint
            </a>
          </section>
          </TabsContent>
        </Tabs>
        <aside className="max-md:order-first">
          <PanelResponsable responsable={activo.responsable} />
        </aside>
      </div>
    </div>
  )
}
