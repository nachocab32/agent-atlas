import { Play } from 'lucide-react'
import { useTranslation } from '@/i18n'
import type { FraseDePrueba } from '@/types/catalogo'

interface BloquePruebaloProps {
  frases: FraseDePrueba[]
  onSeleccionar: (texto: string) => void
}

export function BloquePruebalo({ frases, onSeleccionar }: BloquePruebaloProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground">{t('ficha.pruebaloTitulo')}</h3>
      <div className="mt-3 flex flex-col gap-2">
        {frases.map((frase) => (
          <button
            key={frase.id}
            type="button"
            onClick={() => onSeleccionar(frase.texto)}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-accent/5"
          >
            <Play className="size-4 shrink-0 text-accent" />
            {frase.texto}
          </button>
        ))}
      </div>
    </div>
  )
}
