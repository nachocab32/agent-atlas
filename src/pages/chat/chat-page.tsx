import { useState } from 'react'
import { Link, useOutletContext } from 'react-router'
import type { AppOutletContext } from '@/app/app-layout'
import { ChatThread } from '@/features/chat/components/chat-thread'
import { HomeOrientacion } from '@/features/home/components/home-orientacion'
import { HomeRecurrente } from '@/features/home/components/home-recurrente'
import { useHomeVariant } from '@/features/home/use-home-variant'
import { useTranslation } from '@/i18n'
import { ChipContexto } from '@/shared/ui'
import { ChatInput } from './chat-input'
import { ChatTabs } from './chat-tabs'

export function ChatPage() {
  const { t } = useTranslation()
  const { turnos, cargando, enviar, reintentar, activoAnclado, quitarAnclaje } = useOutletContext<AppOutletContext>()
  const [valorComposer, setValorComposer] = useState('')
  const variante = useHomeVariant()
  const conversacionActiva = turnos.length > 0

  function handleEnviar(texto: string) {
    setValorComposer('')
    void enviar(texto)
  }

  const composer = (
    <div className="flex flex-col items-center gap-2 px-6 pb-8">
      {activoAnclado && (
        <div className="flex w-full max-w-3xl items-center justify-between">
          <ChipContexto
            label={`${activoAnclado.nombre} · v${activoAnclado.version}`}
            onQuitar={quitarAnclaje}
          />
          <Link
            to={`/aceleradores/${activoAnclado.id}`}
            className="text-xs font-medium text-accent hover:underline"
          >
            {t('chat.verFicha')}
          </Link>
        </div>
      )}
      <ChatInput
        value={valorComposer}
        onChange={setValorComposer}
        onSend={() => handleEnviar(valorComposer)}
      />
    </div>
  )

  return (
    <div className="flex h-screen flex-1 flex-col">
      {conversacionActiva ? (
        <>
          <ChatTabs />
          <ChatThread turnos={turnos} cargando={cargando} onSugerencia={handleEnviar} onReintentar={reintentar} />
          {composer}
        </>
      ) : variante === 'orientacion' ? (
        <HomeOrientacion composer={composer} onSeleccionarPregunta={handleEnviar} />
      ) : (
        <HomeRecurrente composer={composer} />
      )}
    </div>
  )
}
