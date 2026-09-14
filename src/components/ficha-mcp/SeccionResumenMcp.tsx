import { Play } from 'lucide-react'
import type { FichaMcpDetalle } from '@/types/ficha-mcp'
import { Lista, Titulo } from './comunes'

export function SeccionResumenMcp({ descripcionLarga, detalle }: { descripcionLarga: string; detalle: FichaMcpDetalle }) {
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
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-xs text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Tool</th>
                  <th className="px-4 py-3 font-medium">Descripción</th>
                  <th className="px-4 py-3 font-medium">Acceso</th>
                </tr>
              </thead>
              <tbody>
                {detalle.tools.map((tool) => (
                  <tr key={tool.nombre} className="border-t border-border align-top">
                    <td className="px-4 py-3 font-medium text-foreground">{tool.nombre}</td>
                    <td className="px-4 py-3 text-muted-foreground">{tool.descripcion}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">{tool.acceso}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
