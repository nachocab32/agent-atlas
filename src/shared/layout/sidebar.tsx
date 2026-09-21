import { PanelLeftClose, PanelLeftOpen, Plus } from 'lucide-react'
import { Link } from 'react-router'
import { useTranslation } from '@/i18n'
import { Button } from '@/shared/ui'
import { currentUser, recentConversations, sidebarDestinos } from '@/data/sidebar'
import { SidebarConversations } from './sidebar-conversations'
import { SidebarDestinos } from './sidebar-destinos'
import { SidebarFooter } from './sidebar-footer'
import { SidebarSearch } from './sidebar-search'

interface SidebarProps {
  conversacionActiva: boolean
  onNuevaConsulta: () => void
  colapsado: boolean
  onAlternarColapsado: () => void
  movilAbierto: boolean
  movilActivo: boolean
  onCerrarMovil: () => void
}

export function Sidebar({ conversacionActiva, onNuevaConsulta, colapsado, onAlternarColapsado, movilAbierto, movilActivo, onCerrarMovil }: SidebarProps) {
  const { t } = useTranslation()
  const activeConversationId = conversacionActiva ? recentConversations[0]?.id : undefined

  return (
    <aside aria-hidden={movilActivo && !movilAbierto} inert={movilActivo && !movilAbierto} className={`atlas-brand flex h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar py-5 transition-[width,transform] duration-200 ease-out ${colapsado ? 'w-[72px] px-3' : 'w-[272px] px-4'} max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-50 max-md:w-[min(17rem,calc(100vw-3rem))] max-md:px-4 ${movilAbierto ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}`}>
      <div className={`flex items-center ${colapsado ? 'flex-col gap-2' : 'justify-between'}`}>
        <Link to="/" className="flex min-w-0 items-center gap-2 px-1" aria-label="Atlas: inicio">
        <img src="/atlas-symbol-rounded.svg" alt="" className="h-8 w-auto" />
        <div className={colapsado ? 'hidden' : undefined}>
          <h1 className="text-lg font-medium tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t('app.name')}</h1>
          <p className="text-[9px] font-semibold tracking-wide uppercase" style={{ color: 'var(--primary)' }}>BY PULSR</p>
        </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label={colapsado ? 'Expandir menú' : 'Colapsar menú'}
          title={colapsado ? 'Expandir menú' : 'Colapsar menú'}
          onClick={onAlternarColapsado}
          className="max-md:hidden"
        >
          {colapsado ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Cerrar menú" onClick={onCerrarMovil}>
          <PanelLeftClose className="size-4" />
        </Button>
      </div>

      <Button variant="outline" className={`mt-5 ${colapsado ? 'justify-center px-0' : 'justify-start'}`} onClick={() => { onNuevaConsulta(); onCerrarMovil() }} aria-label={colapsado ? t('sidebar.newConversation') : undefined} title={colapsado ? t('sidebar.newConversation') : undefined}>
        <Plus className="size-4" />
        {!colapsado && t('sidebar.newConversation')}
      </Button>

      <div className="mt-2">
        <SidebarSearch colapsado={colapsado} />
      </div>

      <div className="my-3 border-t border-sidebar-border" />

      <SidebarDestinos destinos={sidebarDestinos} colapsado={colapsado} onNavegar={onCerrarMovil} />

      {!colapsado && <div className="my-3 border-t border-sidebar-border" />}

      <div className={colapsado ? 'flex-1 overflow-visible' : 'flex-1 overflow-y-auto'}>
        <SidebarConversations
          conversations={recentConversations}
          activeConversationId={activeConversationId}
          colapsado={colapsado}
        />
      </div>

      <SidebarFooter user={currentUser} colapsado={colapsado} />
    </aside>
  )
}
