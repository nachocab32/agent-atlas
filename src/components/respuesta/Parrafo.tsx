import type { BloqueRespuesta } from '@/types/respuesta'

type ParrafoProps = Extract<BloqueRespuesta, { componente: 'Parrafo' }>['props']

export function Parrafo({ texto }: ParrafoProps) {
  return <p className="leading-relaxed text-foreground">{texto}</p>
}
