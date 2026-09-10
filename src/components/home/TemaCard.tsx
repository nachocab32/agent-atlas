import type { TemaHome } from '@/types/home'
import { iconoPorTema } from './iconos'

interface TemaCardProps {
  tema: TemaHome
  onSeleccionar: () => void
}

export function TemaCard({ tema, onSeleccionar }: TemaCardProps) {
  const Icono = iconoPorTema[tema.icono]

  return (
    <button
      type="button"
      onClick={onSeleccionar}
      className="flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-muted"
    >
      <Icono className="size-5 text-accent" />
      <p className="font-medium text-foreground first-letter:uppercase">{tema.label}</p>
      <p className="text-sm text-muted-foreground">{tema.descripcion}</p>
      <p className="text-xs text-muted-foreground">"{tema.preguntaEjemplo}"</p>
    </button>
  )
}
