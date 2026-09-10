import type { BloqueRespuesta } from '@/types/respuesta'

export type Turno =
  | { rol: 'usuario'; texto: string }
  | { rol: 'asistente'; estado: 'ok'; bloques: BloqueRespuesta[] }
  | { rol: 'asistente'; estado: 'error'; consultaOriginal: string }
