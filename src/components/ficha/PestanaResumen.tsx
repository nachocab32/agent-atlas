import { BloquePruebalo } from './BloquePruebalo'
import type { FraseDePrueba } from '@/types/catalogo'

interface PestanaResumenProps {
  descripcionLarga: string
  categorias: string[]
  frasesPruebalo: FraseDePrueba[]
  onSeleccionarFrase: (texto: string) => void
}

export function PestanaResumen({
  descripcionLarga,
  categorias,
  frasesPruebalo,
  onSeleccionarFrase,
}: PestanaResumenProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="leading-relaxed text-foreground">{descripcionLarga}</p>

      <div className="flex flex-wrap gap-2">
        {categorias.map((categoria) => (
          <span
            key={categoria}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
          >
            {categoria}
          </span>
        ))}
      </div>

      <BloquePruebalo frases={frasesPruebalo} onSeleccionar={onSeleccionarFrase} />
    </div>
  )
}
