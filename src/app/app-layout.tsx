import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { useChatThread } from '@/features/chat/use-chat-thread'
import { Sidebar } from '@/shared/layout/sidebar'
import type { ActivoAnclado } from '@/types/catalogo'

export interface AppOutletContext extends ReturnType<typeof useChatThread> {
  activoAnclado: ActivoAnclado | null
  anclarActivo: (activo: ActivoAnclado) => void
  quitarAnclaje: () => void
  nuevaConsulta: () => void
  panelAbierto: boolean
  sidebarColapsado: boolean
  setSidebarColapsado: (colapsado: boolean) => void
}

export function AppLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const chatThread = useChatThread()
  const conversacionActiva = chatThread.turnos.length > 0
  const [sidebarColapsado, setSidebarColapsado] = useState(false)
  const [sidebarMovilAbierto, setSidebarMovilAbierto] = useState(false)
  const [movilActivo, setMovilActivo] = useState(() => window.matchMedia('(max-width: 767px)').matches)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const actualizar = () => setMovilActivo(media.matches)
    actualizar()
    media.addEventListener('change', actualizar)
    return () => media.removeEventListener('change', actualizar)
  }, [])

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
    panelAbierto: new URLSearchParams(location.search).has('panel'),
    sidebarColapsado,
    setSidebarColapsado,
  }

  return (
    <div className="relative flex h-screen overflow-hidden">
      <a href="#contenido-principal" className="sr-only z-[60] rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--elevation-1)] focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Saltar al contenido principal
      </a>
      {sidebarMovilAbierto && <button type="button" aria-label="Cerrar menú de navegación" className="fixed inset-0 z-40 bg-foreground/15 md:hidden" onClick={() => setSidebarMovilAbierto(false)} />}
      <Sidebar
        conversacionActiva={conversacionActiva}
        onNuevaConsulta={nuevaConsulta}
        colapsado={sidebarColapsado}
        onAlternarColapsado={() => setSidebarColapsado((actual) => !actual)}
        movilAbierto={sidebarMovilAbierto}
        movilActivo={movilActivo}
        onCerrarMovil={() => setSidebarMovilAbierto(false)}
      />
      {!sidebarMovilAbierto && <button type="button" aria-label="Abrir menú de navegación" className="fixed top-3 right-3 z-30 inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-[var(--elevation-1)] md:hidden" onClick={() => setSidebarMovilAbierto(true)}><Menu className="size-5" /></button>}
      <Outlet context={context} />
    </div>
  )
}
