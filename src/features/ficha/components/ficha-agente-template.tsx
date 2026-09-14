import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import { ExternalLink, Play } from 'lucide-react'
import type { AppOutletContext } from '@/app/app-layout'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { fichaAgenteDetallePorId } from '@/data/ficha-agente'
import { tipoActivoLabel } from '@/data/catalogo'
import { Button } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'
import type { VideoAgente } from '@/types/ficha-agente'

function SeccionVideoAgente({ nombreActivo, video }: { nombreActivo: string; video: VideoAgente }) {
  const [videoCargado, setVideoCargado] = useState(false)
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <Play className="size-4 text-primary" />
          <h2 className="text-sm font-medium">Demo</h2>
        </div>
        <span className="text-xs text-muted-foreground">{video.duracion}</span>
      </div>
      <div className="relative aspect-video overflow-hidden bg-neutral-950">
        {video.vimeoId ? (
          <iframe
            className={`size-full transition-opacity duration-300 ${videoCargado ? 'opacity-100' : 'opacity-0'}`}
            src={`https://player.vimeo.com/video/${video.vimeoId}`}
            title={`Demo de ${nombreActivo}`}
            onLoad={() => setVideoCargado(true)}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-white">Video sin embed configurado ({video.duracion})</div>
        )}
      </div>
    </section>
  )
}

export function FichaAgenteTemplate({ activo }: { activo: Activo }) {
  const detalle = fichaAgenteDetallePorId[activo.id]
  const { anclarActivo, enviar } = useOutletContext<AppOutletContext>()
  const navigate = useNavigate()
  if (!detalle) return null

  function usar() {
    anclarActivo({ id: activo.id, nombre: activo.nombre, version: activo.version })
    void enviar(detalle.ejemploUso)
    navigate('/')
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={<Button onClick={usar}>Usar</Button>} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Qué hace este agente</h2>
            <p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Fricción que resuelve</h2>
            <p className="leading-relaxed text-muted-foreground">{detalle.friccion}</p>
          </section>

          {detalle.video && <SeccionVideoAgente nombreActivo={activo.nombre} video={detalle.video} />}

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

          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">Ejemplo de uso real</h2>
            <button
              type="button"
              onClick={usar}
              className="rounded-xl border border-border bg-card p-4 text-left text-sm leading-relaxed text-foreground transition-colors hover:border-primary/25 hover:bg-primary/5"
            >
              {detalle.ejemploUso}
            </button>
          </section>

          <section className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
            <h3 className="font-medium text-foreground">{detalle.recurso.titulo}</h3>
            <p className="text-sm text-muted-foreground">{detalle.recurso.descripcion}</p>
            <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-primary">
              <ExternalLink className="size-3.5" />
              Abrir en SharePoint
            </span>
          </section>
        </div>
        <aside className="max-md:order-first">
          <PanelResponsable responsable={activo.responsable} />
        </aside>
      </div>
    </div>
  )
}
