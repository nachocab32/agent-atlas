import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import { Check, Play } from 'lucide-react'
import type { AppOutletContext } from '@/app/app-layout'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { PieFeedbackContenido } from '@/components/ficha/PieFeedbackContenido'
import { TablaSimple } from '@/components/ficha/TablaSimple'
import { fichaSkillDetallePorId } from '@/data/ficha-skill'
import { tipoActivoLabel } from '@/data/catalogo'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'
import type { FichaSkillDetalle } from '@/types/ficha-skill'
import { useContextoFicha } from '@/features/referencia/contexto-ficha'

function Titulo({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

function Lista({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function SeccionVideoSkill({ nombreActivo, video }: { nombreActivo: string; video: NonNullable<FichaSkillDetalle['video']> }) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <Play className="size-4 text-primary" />
          <h2 className="text-sm font-medium">Demo</h2>
        </div>
        <span className="text-xs text-muted-foreground">{video.duracion}</span>
      </div>
      <div className="aspect-video bg-muted">
        {video.vimeoId ? (
          <iframe className="size-full" src={`https://player.vimeo.com/video/${video.vimeoId}`} title={`Demo de ${nombreActivo}`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">Video sin embed configurado ({video.duracion})</div>
        )}
      </div>
    </section>
  )
}

function PestanaResumenSkill({ activo, detalle }: { activo: Activo; detalle: FichaSkillDetalle }) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Titulo>Qué hace este skill</Titulo>
        <p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p>
      </section>

      {detalle.friccion && (
        <section className="flex flex-col gap-4">
          <Titulo>Fricción que resuelve</Titulo>
          <p className="leading-relaxed text-muted-foreground">{detalle.friccion}</p>
        </section>
      )}

      {detalle.video && <SeccionVideoSkill nombreActivo={activo.nombre} video={detalle.video} />}

      {detalle.bloques?.map((bloque) => (
        <section key={bloque.titulo} className="flex flex-col gap-4">
          <Titulo>{bloque.titulo}</Titulo>
          <Lista items={bloque.items} />
        </section>
      ))}

      {detalle.tablas?.map((tabla) => (
        <section key={tabla.titulo} className="flex flex-col gap-4">
          <Titulo>{tabla.titulo}</Titulo>
          <TablaSimple columnas={tabla.columnas} filas={tabla.filas} />
        </section>
      ))}

      {detalle.relaciones && detalle.relaciones.length > 0 && (
        <section className="flex flex-col gap-4">
          <Titulo>Combínala con</Titulo>
          <div className="flex flex-col gap-3">
            {detalle.relaciones.map((relacion) => (
              <div key={relacion.nombre} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-medium text-foreground">{relacion.nombre}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{relacion.frase}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {detalle.mantenedor && (
        <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Mantenedor</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground">
            <span>{detalle.mantenedor.equipo}</span>
            <span className="text-muted-foreground">Publicado el {detalle.mantenedor.fechaPublicacion}</span>
            <span className="rounded-full border border-accent/30 px-2 py-0.5 text-xs font-medium text-accent">{detalle.mantenedor.estado}</span>
          </div>
        </section>
      )}

      {detalle.widgetUtilidad && <PieFeedbackContenido />}
    </>
  )
}

function PestanaUsarSkill({ detalle, onUsar }: { detalle: FichaSkillDetalle; onUsar: (texto: string) => void }) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Titulo>Cuándo se activa</Titulo>
        <div className="flex flex-col gap-3">
          {detalle.activacion.map((entrada) => (
            <button
              key={entrada.senal}
              type="button"
              onClick={() => onUsar(entrada.ejemplo)}
              className="rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/25 hover:bg-primary/5"
            >
              <p className="font-medium text-foreground">{entrada.senal}</p>
              <p className="mt-1 text-sm text-muted-foreground">{entrada.ejemplo}</p>
            </button>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-border bg-card p-4">
        <h3 className="font-medium text-foreground">Cuándo no usarla</h3>
        <div className="mt-4">
          <Lista items={detalle.evitar} />
        </div>
      </section>
    </>
  )
}

export function FichaSkillGuia({ activo }: { activo: Activo }) {
  const contexto = useContextoFicha()
  const detalle = fichaSkillDetallePorId[activo.id]
  const { anclarActivo, enviar } = useOutletContext<AppOutletContext>()
  const navigate = useNavigate()
  const [tab, setTab] = useState('resumen')
  if (!detalle) return null

  const usar = (texto: string) => {
    anclarActivo({ id: activo.id, nombre: activo.nombre, version: activo.version })
    void enviar(texto)
    if (contexto === 'pagina') navigate('/')
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={contexto === 'pagina' ? <Button onClick={() => setTab('requisitos')}>Ver requisitos</Button> : null} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="usar">Cuándo usar</TabsTrigger>
            <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
            <TabsTrigger value="archivos">Archivos</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <PestanaResumenSkill activo={activo} detalle={detalle} />
          </TabsContent>

          <TabsContent value="usar" className="flex flex-col gap-8">
            <PestanaUsarSkill detalle={detalle} onUsar={usar} />
          </TabsContent>

          <TabsContent value="requisitos" className="flex flex-col gap-6">
            <Titulo>Requisitos previos</Titulo>
            <Lista items={detalle.requisitos} />
          </TabsContent>

          <TabsContent value="archivos" className="flex flex-col gap-6">
            <Titulo>Archivos del skill</Titulo>
            <pre className="overflow-x-auto rounded-xl border border-border bg-neutral-950 p-4 font-mono text-xs leading-relaxed text-white">
              {[`skills/${activo.id}/`, ...detalle.archivos].join('\n')}
            </pre>
          </TabsContent>
        </Tabs>
        <aside className="max-md:order-first">
          <PanelResponsable responsable={activo.responsable} />
        </aside>
      </div>
    </div>
  )
}
