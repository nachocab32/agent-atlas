import { useSearchParams } from 'react-router'

export type HomeVariante = 'orientacion' | 'recurrente'

export function useHomeVariant(): HomeVariante {
  const [searchParams] = useSearchParams()
  const forzado = searchParams.get('home')

  if (forzado === 'recurrente') return 'recurrente'
  if (forzado === 'nuevo') return 'orientacion'

  // [COMPORTAMIENTO FUTURO] En producto, la variante la decide el estado:
  // si el usuario tiene un borrador o una conversación sin cerrar, va el home recurrente.
  // En el prototipo el default es siempre el de orientación, para efectos de demo.
  return 'orientacion'
}
