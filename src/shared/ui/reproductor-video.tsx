import { cn } from '@/shared/lib/utils'

interface ReproductorVideoProps {
  titulo: string
  duracion: string
  vimeoId?: string
  className?: string
}

/**
 * Reproductor sobrio para contenido editorial. Toma como referencia el video
 * de AG-UI: una pieza de foco, con un título editorial y sin una tarjeta adicional.
 */
export function ReproductorVideo({ titulo, duracion, vimeoId, className }: ReproductorVideoProps) {
  return (
    <figure className={cn('my-2 w-[85%] max-w-[56rem] max-md:w-full', className)}>
      <h3 className="mb-2 text-sm font-semibold text-foreground">{titulo}</h3>
      <div className="aspect-video overflow-hidden rounded-xl bg-neutral-950 shadow-[0_8px_32px_rgba(15,23,42,0.12)]">
        {vimeoId ? (
          <iframe
            className="size-full"
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0`}
            title={titulo}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex size-full items-center justify-center px-4 text-center text-sm text-neutral-300">
            Video sin embed configurado ({duracion})
          </div>
        )}
      </div>
      <figcaption className="sr-only">{titulo} · Duración: {duracion}</figcaption>
    </figure>
  )
}
