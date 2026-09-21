import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { FeatureAnnouncementModal, deckGenAnnouncement } from '@/components/home/feature-announcement-modal'
import { PreguntasSugeridas } from '@/components/home/PreguntasSugeridas'
import { TemaCard } from '@/components/home/TemaCard'
import { temasHome } from '@/data/home'
import { ChipContexto } from '@/shared/ui'
import type { TemaHome } from '@/types/home'

interface HomeOrientacionProps {
  composer: ReactNode
  onSeleccionarPregunta: (texto: string) => void
  nombre: string
}

export function HomeOrientacion({ composer, onSeleccionarPregunta, nombre }: HomeOrientacionProps) {
  const [temaSeleccionado, setTemaSeleccionado] = useState<TemaHome | null>(null)
  const [anuncioAbierto, setAnuncioAbierto] = useState(false)

  useEffect(() => {
    if (!window.localStorage.getItem('atlas.announcement.deck-gen.dismissed')) setAnuncioAbierto(true)
  }, [])

  function cambiarAnuncioAbierto(abierto: boolean) {
    setAnuncioAbierto(abierto)
    if (!abierto) window.localStorage.setItem('atlas.announcement.deck-gen.dismissed', 'true')
  }

  return (
    <div className="atlas-brand relative flex flex-1 flex-col overflow-hidden bg-[var(--bg-surface)] px-4 sm:px-6">
      <FeatureAnnouncementModal open={anuncioAbierto} onOpenChange={cambiarAnuncioAbierto} feature={deckGenAnnouncement} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[460px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--primary),var(--secondary))] opacity-16 blur-[90px]" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-20">
      <div className="w-full max-w-4xl text-center">
        <img src="/images/mascota/mascota-ai-animada.svg" alt="Mascota de Atlas" className="mx-auto h-28 w-28 object-contain" />
        <h1 className="text-[clamp(1.875rem,1.2rem+2vw,2.375rem)] font-medium tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Buenos días, {nombre}</h1>
        <p className="mt-2 text-lg text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>¿En qué te ayudo con <span className="font-medium text-[var(--primary)]">Atlas</span> hoy?</p>

        <div className="mt-8 flex justify-center">{composer}</div>

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
          <div className="mt-[var(--space-section)] grid grid-cols-1 gap-[var(--space-block)] sm:grid-cols-2">
            {temasHome.map((tema) => (
              <TemaCard key={tema.id} tema={tema} onSeleccionar={() => setTemaSeleccionado(tema)} />
            ))}
          </div>
        )}
      </div></div>
    </div>
  )
}
