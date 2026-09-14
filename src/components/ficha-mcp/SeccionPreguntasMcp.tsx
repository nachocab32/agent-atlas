import type { PreguntaPorAudiencia } from '@/types/ficha-mcp'
import { Titulo } from './comunes'

export function SeccionPreguntasMcp({ grupos, onSeleccionar }: { grupos: PreguntaPorAudiencia[]; onSeleccionar: (pregunta: string) => void }) {
  return (
    <>
      {grupos.map((grupo) => (
        <section key={grupo.audiencia} className="flex flex-col gap-4">
          <Titulo>{grupo.audiencia}</Titulo>
          <div className="flex flex-col gap-3">
            {grupo.preguntas.map((pregunta) => (
              <button
                key={pregunta}
                type="button"
                onClick={() => onSeleccionar(pregunta)}
                className="rounded-xl border border-border bg-card p-4 text-left text-sm leading-relaxed text-foreground transition-colors hover:border-primary/25 hover:bg-primary/5"
              >
                {pregunta}
              </button>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
