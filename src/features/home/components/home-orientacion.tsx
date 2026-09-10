import { useState } from 'react'
import type { ReactNode } from 'react'
import { PreguntasSugeridas } from '@/components/home/PreguntasSugeridas'
import { TemaCard } from '@/components/home/TemaCard'
import { temasHome } from '@/data/home'
import { useTranslation } from '@/i18n'
import { ChipContexto } from '@/shared/ui'
import type { TemaHome } from '@/types/home'

interface HomeOrientacionProps {
  composer: ReactNode
  onSeleccionarPregunta: (texto: string) => void
}

export function HomeOrientacion({ composer, onSeleccionarPregunta }: HomeOrientacionProps) {
  const { t } = useTranslation()
  const [temaSeleccionado, setTemaSeleccionado] = useState<TemaHome | null>(null)

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-[clamp(1.875rem,1.2rem+2vw,2.375rem)] font-semibold tracking-tight text-foreground">
          {t('home.orientacion.title')}
        </h1>
        <p className="mt-2 text-muted-foreground">{t('home.orientacion.subtitle')}</p>

        <div className="mt-6">{composer}</div>

        {temaSeleccionado ? (
          <div className="mt-8">
            <ChipContexto
              label={temaSeleccionado.label}
              onQuitar={() => setTemaSeleccionado(null)}
            />
            <PreguntasSugeridas
              preguntas={temaSeleccionado.preguntasSugeridas}
              onSeleccionar={onSeleccionarPregunta}
            />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4">
            {temasHome.map((tema) => (
              <TemaCard key={tema.id} tema={tema} onSeleccionar={() => setTemaSeleccionado(tema)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
