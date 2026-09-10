import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { BloqueRespuesta } from '@/types/respuesta'
import { RespuestaRenderer } from './respuesta-renderer'

const MAX_BLOQUES_CONTENIDO = 2
const RETRASO_ESCALONADO_MS = 220

interface BloquesOrganizados {
  bloques: BloqueRespuesta[]
  indiceSinFuente?: number
  soloSinFuente: boolean
}

// Las respuestas parciales separan explícitamente lo respaldado por una fuente
// de aquello que todavía no está documentado. En los demás casos, las fuentes
// y sugerencias conservan su ubicación final.
function ordenarYRecortar(bloques: BloqueRespuesta[]): BloquesOrganizados {
  const fuentes = bloques.find((bloque) => bloque.componente === 'Fuentes')
  const sugerencias = bloques.find((bloque) => bloque.componente === 'Sugerencias')
  const sinFuente = bloques.find((bloque) => bloque.componente === 'SinFuente')
  const contenidoDocumentado = bloques
    .filter(
      (bloque) =>
        bloque.componente !== 'Fuentes' && bloque.componente !== 'Sugerencias' && bloque.componente !== 'SinFuente',
    )
    .slice(0, MAX_BLOQUES_CONTENIDO)

  if (sinFuente && contenidoDocumentado.length > 0) {
    const bloquesParciales = [...contenidoDocumentado, fuentes, sinFuente, sugerencias].filter(
      (bloque): bloque is BloqueRespuesta => Boolean(bloque),
    )
    return {
      bloques: bloquesParciales,
      indiceSinFuente: bloquesParciales.findIndex((bloque) => bloque === sinFuente),
      soloSinFuente: false,
    }
  }

  const contenido = bloques
    .filter((bloque) => bloque.componente !== 'Fuentes' && bloque.componente !== 'Sugerencias')
    .slice(0, MAX_BLOQUES_CONTENIDO)
  const bloquesCompletos = [...contenido, fuentes, sugerencias].filter((bloque): bloque is BloqueRespuesta => Boolean(bloque))

  return {
    bloques: bloquesCompletos,
    soloSinFuente: bloquesCompletos.length === 1 && bloquesCompletos[0]?.componente === 'SinFuente',
  }
}

interface TurnoAsistenteProps {
  bloques: BloqueRespuesta[]
  onSugerencia: (texto: string) => void
}

export function TurnoAsistente({ bloques, onSugerencia }: TurnoAsistenteProps) {
  const { bloques: visibles, indiceSinFuente, soloSinFuente } = ordenarYRecortar(bloques)
  const [cantidadVisible, setCantidadVisible] = useState(1)

  // Aparición escalonada: simula que los bloques llegan de a uno, no todos
  // juntos al resolver la promesa mock.
  useEffect(() => {
    if (cantidadVisible >= visibles.length) return
    const id = setTimeout(() => setCantidadVisible((n) => n + 1), RETRASO_ESCALONADO_MS)
    return () => clearTimeout(id)
  }, [cantidadVisible, visibles.length])

  return (
    <section className="flex flex-col gap-4 text-sm" aria-label="Respuesta de Atlas">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="flex size-5 items-center justify-center rounded-md bg-accent/5 text-accent">
          <Sparkles className="size-3.5" />
        </span>
        Atlas
      </div>
      {soloSinFuente && (
        <p className="leading-relaxed text-foreground">
          No hay una guía documentada en Atlas que responda esta consulta.
        </p>
      )}
      {visibles.slice(0, cantidadVisible).map((bloque, index) => (
        <div key={index} className="animate-in fade-in-0 slide-in-from-bottom-1 duration-300">
          {index === indiceSinFuente && <div className="mb-4 border-t border-border" aria-hidden="true" />}
          <RespuestaRenderer bloque={bloque} onSugerencia={onSugerencia} />
        </div>
      ))}
    </section>
  )
}
