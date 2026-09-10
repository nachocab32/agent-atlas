import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useChatThread } from '@/features/chat/use-chat-thread'
import { Sidebar } from '@/shared/layout/sidebar'
import type { ActivoAnclado } from '@/types/catalogo'

export interface AppOutletContext extends ReturnType<typeof useChatThread> {
  activoAnclado: ActivoAnclado | null
  anclarActivo: (activo: ActivoAnclado) => void
  quitarAnclaje: () => void
  nuevaConsulta: () => void
}

export function AppLayout() {
  const navigate = useNavigate()
  const chatThread = useChatThread()
  const conversacionActiva = chatThread.turnos.length > 0
  const [sidebarColapsado, setSidebarColapsado] = useState(false)

  // El contexto ancla nombre + versión del activo. En producto, esto es lo que
  // mantiene la conversación válida y auditable cuando el activo cambia después.
  const [activoAnclado, setActivoAnclado] = useState<ActivoAnclado | null>(null)

  function nuevaConsulta() {
    chatThread.nuevaConsulta()
    setActivoAnclado(null)
    navigate('/')
  }

  const context: AppOutletContext = {
    ...chatThread,
    activoAnclado,
    anclarActivo: setActivoAnclado,
    quitarAnclaje: () => setActivoAnclado(null),
    nuevaConsulta,
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        conversacionActiva={conversacionActiva}
        onNuevaConsulta={nuevaConsulta}
        colapsado={sidebarColapsado}
        onAlternarColapsado={() => setSidebarColapsado((actual) => !actual)}
      />
      <Outlet context={context} />
    </div>
  )
}
