import { registroRespuesta } from '@/components/respuesta/registro'
import type { BloqueRespuesta } from '@/types/respuesta'

interface RespuestaRendererProps {
  bloque: BloqueRespuesta
  onSugerencia: (texto: string) => void
}

export function RespuestaRenderer({ bloque, onSugerencia }: RespuestaRendererProps) {
  const Componente = registroRespuesta[bloque.componente]
  if (!Componente) return null

  const propsExtra =
    bloque.componente === 'Sugerencias' || bloque.componente === 'ArbolDecision'
      ? { onSeleccionar: onSugerencia }
      : {}

  return <Componente {...bloque.props} {...propsExtra} />
}
