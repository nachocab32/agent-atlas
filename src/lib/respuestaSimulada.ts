import { respuestasMock } from '@/data/respuestas'
import type { BloqueRespuesta } from '@/types/respuesta'

const LATENCIA_MIN_MS = 600
const LATENCIA_MAX_MS = 1200

function esperar(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function responder(consulta: string): Promise<BloqueRespuesta[]> {
  await esperar(LATENCIA_MIN_MS + Math.random() * (LATENCIA_MAX_MS - LATENCIA_MIN_MS))

  const normalizada = consulta.toLowerCase()

  // Dispara el estado de error del prototipo (criterio de aceptación 8).
  if (normalizada.includes('error')) {
    throw new Error('Error simulado para el prototipo.')
  }

  const coincidencia = respuestasMock.find((entrada) =>
    entrada.palabrasClave.some((palabra) => normalizada.includes(palabra)),
  )

  if (coincidencia) return coincidencia.bloques

  // Provisorio: el fallback conserva la consulta cruda como tema. El motor real
  // deberá entregar un tema normalizado desde la recuperación, no desde el texto ingresado.
  return [{ componente: 'SinFuente', props: { tema: consulta } }]
}
