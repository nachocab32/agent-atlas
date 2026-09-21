import { Code2, ListChecks, Play, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router'
import { TarjetaCatalogo } from '@/shared/ui'
import type { FichaMcpDetalle } from '@/types/ficha-mcp'
import { Lista, Titulo } from './comunes'

const herramientasAiWorkflow = {
  Refinamiento: { href: '/aceleradores/mcp-ai-workflow/refinamiento', icono: ListChecks },
  Desarrollo: { href: '/aceleradores/mcp-ai-workflow/desarrollo', icono: Code2 },
  Validación: { href: '/aceleradores/mcp-ai-workflow/validacion', icono: ShieldCheck },
}

export function SeccionResumenMcp({ descripcionLarga, detalle }: { descripcionLarga: string; detalle: FichaMcpDetalle }) {
  const navigate = useNavigate()

  return (
    <>
      <section className="flex flex-col gap-4">
        <Titulo>Qué hace este servidor</Titulo>
        <p className="leading-relaxed text-muted-foreground">{descripcionLarga}</p>
      </section>

      {detalle.queResuelve && (
        <section className="flex flex-col gap-4">
          <Titulo>Qué resuelve</Titulo>
          <Lista items={detalle.queResuelve} />
        </section>
      )}

      {detalle.queNoHace && (
        <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <h3 className="font-medium text-foreground">Qué NO hace</h3>
          <Lista items={detalle.queNoHace} icono="ninguno" />
        </section>
      )}

      {detalle.tools && (
        <section className="flex flex-col gap-4">
          <Titulo>Tools</Titulo>
          <div className="grid gap-3 md:grid-cols-3">
            {detalle.tools.map((tool) => {
              const herramienta = herramientasAiWorkflow[tool.nombre as keyof typeof herramientasAiWorkflow]
              if (!herramienta) return null
              return (
                <TarjetaCatalogo
                  key={tool.nombre}
                  icono={herramienta.icono}
                  titulo={tool.nombre}
                  descripcion={tool.descripcion}
                  metadata={<span className="inline-flex rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">{tool.acceso}</span>}
                  onSeleccionar={() => navigate(herramienta.href)}
                />
              )
            })}
          </div>
        </section>
      )}

      {detalle.videos.map((video) => (
        <section key={video.titulo} className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <Play className="size-4 text-primary" />
              <h2 className="text-sm font-medium">{video.titulo}</h2>
            </div>
            <span className="text-xs text-muted-foreground">{video.duracion}</span>
          </div>
          <div className="flex aspect-video items-center justify-center bg-muted text-sm text-muted-foreground">
            {video.vimeoId ? (
              <iframe className="size-full" src={`https://player.vimeo.com/video/${video.vimeoId}`} title={video.titulo} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              `Video sin embed configurado (${video.duracion})`
            )}
          </div>
        </section>
      ))}
    </>
  )
}
