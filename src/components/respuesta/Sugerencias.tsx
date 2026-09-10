import { Button } from '@/shared/ui'
import type { BloqueRespuesta } from '@/types/respuesta'

type SugerenciasProps = Extract<BloqueRespuesta, { componente: 'Sugerencias' }>['props'] & {
  onSeleccionar: (texto: string) => void
}

export function Sugerencias({ opciones, onSeleccionar }: SugerenciasProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium text-muted-foreground">Siguientes preguntas</p>
      <div className="flex flex-wrap gap-2">
        {opciones.slice(0, 3).map((opcion) => (
          <Button
            key={opcion}
            variant="outline"
            className="h-auto bg-card px-3 py-1.5 text-left text-xs hover:border-accent/40 hover:bg-accent/5"
            onClick={() => onSeleccionar(opcion)}
          >
            {opcion}
          </Button>
        ))}
      </div>
    </div>
  )
}
