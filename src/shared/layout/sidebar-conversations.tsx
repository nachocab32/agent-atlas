import { MessageCircle, Search } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { cn } from '@/shared/lib/utils'
import type { Conversation } from '@/data/types'

interface SidebarConversationsProps {
  conversations: Conversation[]
  activeConversationId?: string
  colapsado?: boolean
}

export function SidebarConversations({ conversations, activeConversationId, colapsado = false }: SidebarConversationsProps) {
  const { t } = useTranslation()

  if (colapsado) {
    return (
      <div className="group relative mt-3">
        <button
          type="button"
          aria-label={t('sidebar.recent')}
          title={t('sidebar.recent')}
          className="flex w-full items-center justify-center rounded-lg px-2 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
        >
          <MessageCircle className="size-4 shrink-0 text-sidebar-foreground" />
        </button>
        <div className="pointer-events-none absolute top-0 left-full z-50 w-72 pl-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
          <div className="rounded-xl border border-border bg-popover p-2 shadow-[var(--elevation-1)]">
            <p className="px-2 py-2 text-xs font-medium text-muted-foreground">{t('sidebar.recent')}</p>
            <ul className="space-y-0.5">
              {conversations.map((conversation) => {
                const active = conversation.id === activeConversationId
                return (
                  <li key={conversation.id}>
                    <button
                      type="button"
                      className={cn(
                        'flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-popover-foreground transition-colors hover:bg-muted',
                        active && 'bg-sidebar-accent text-sidebar-accent-foreground',
                      )}
                    >
                      <span className="min-w-0 flex-1 truncate">{conversation.title}</span>
                      {active && <span className="size-1.5 shrink-0 rounded-full bg-accent" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <p className="px-2 text-xs font-medium text-sidebar-muted">{t('sidebar.recent')}</p>
      <ul className="mt-2 space-y-0.5">
        {conversations.map((conversation) => {
          const active = conversation.id === activeConversationId
          return (
            <li key={conversation.id}>
              <button
                type="button"
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-sidebar-accent',
                  active && 'bg-sidebar-accent',
                )}
              >
                <Search className="size-4 shrink-0 text-sidebar-foreground" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-sidebar-foreground">
                    {conversation.title}
                  </span>
                  <span className="block text-xs text-sidebar-muted">{conversation.timeLabel}</span>
                </span>
                {active && <span className="size-2 shrink-0 rounded-full bg-accent" />}
              </button>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        className="mt-2 px-2 text-sm text-sidebar-foreground hover:underline"
      >
        {t('sidebar.seeMore')}
      </button>
    </div>
  )
}
