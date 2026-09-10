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
}

export function Sidebar({ conversacionActiva, onNuevaConsulta, colapsado, onAlternarColapsado }: SidebarProps) {
  const { t } = useTranslation()
  const activeConversationId = conversacionActiva ? recentConversations[0]?.id : undefined

  return (
    <aside className={`flex h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar py-5 transition-[width] duration-200 ease-out ${colapsado ? 'w-[72px] px-3' : 'w-[280px] px-4'}`}>
      <div className={`flex items-center ${colapsado ? 'flex-col gap-2' : 'justify-between'}`}>
        <Link to="/" className="flex min-w-0 items-center gap-2 px-1" aria-label="Atlas: inicio">
        <img src="/atlas-symbol-rounded.svg" alt="" className="h-8 w-auto" />
        <div className={colapsado ? 'hidden' : undefined}>
          <h1 className="text-lg font-semibold tracking-tight text-foreground uppercase">
            {t('app.name')}
          </h1>
          <p className="text-[9px] font-semibold tracking-wide text-muted-foreground uppercase">
            {t('app.tagline')}
          </p>
        </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label={colapsado ? 'Expandir menú' : 'Colapsar menú'}
          title={colapsado ? 'Expandir menú' : 'Colapsar menú'}
          onClick={onAlternarColapsado}
        >
          {colapsado ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
        </Button>
      </div>

      <Button variant="outline" className={`mt-5 ${colapsado ? 'justify-center px-0' : 'justify-start'}`} onClick={onNuevaConsulta} aria-label={colapsado ? t('sidebar.newConversation') : undefined} title={colapsado ? t('sidebar.newConversation') : undefined}>
        <Plus className="size-4" />
        {!colapsado && t('sidebar.newConversation')}
      </Button>

      <div className="mt-2">
        <SidebarSearch colapsado={colapsado} />
      </div>

      <div className="my-3 border-t border-sidebar-border" />

      <SidebarDestinos destinos={sidebarDestinos} colapsado={colapsado} />

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
