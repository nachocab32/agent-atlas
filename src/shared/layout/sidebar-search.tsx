import { useEffect, useState } from 'react'
import { BookOpen, GitBranch, Layers, MessageCircle, Rocket, Search } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useTranslation } from '@/i18n'
import { recentConversations, sidebarDestinos } from '@/data/sidebar'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

const navigationItems = [
  { ...sidebarDestinos[0], href: '/cencoflow', Icon: GitBranch },
  { ...sidebarDestinos[1], href: '/aceleradores', Icon: Rocket },
  { ...sidebarDestinos[2], href: '/guias', Icon: BookOpen },
  { ...sidebarDestinos[3], href: '/plataforma', Icon: Layers },
]

export function SidebarSearch({ colapsado = false }: { colapsado?: boolean }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    function onKeyDown(evento: KeyboardEvent) {
      if ((evento.metaKey || evento.ctrlKey) && evento.key.toLowerCase() === 'k') {
        evento.preventDefault()
        setAbierto(true)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function abrirDestino(href: string) {
    setAbierto(false)
    navigate(href)
  }

  return (
    <>
      <button
        type="button"
        aria-label={t('sidebar.search')}
        title={colapsado ? t('sidebar.search') : undefined}
        onClick={() => setAbierto(true)}
        className={`flex w-full items-center gap-3 rounded-[0.75rem] border border-sidebar-border bg-[var(--bg-surface)] px-2 py-2 text-left text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent ${colapsado ? 'justify-center' : ''}`}
      >
        <Search className="size-4 shrink-0 text-sidebar-foreground" />
        {!colapsado && <span className="flex-1">{t('sidebar.search')}</span>}
        {!colapsado && <kbd className="rounded-full border border-sidebar-border bg-[var(--chip-bg)] px-1.5 py-0.5 font-mono text-[10px] text-sidebar-muted">⌘K</kbd>}
      </button>

      <CommandDialog open={abierto} onOpenChange={setAbierto} title="Buscar en Atlas">
        <Command>
          <CommandInput placeholder="Buscar en Atlas..." autoFocus />
          <CommandList>
            <CommandEmpty>No encontramos resultados para esa búsqueda.</CommandEmpty>
            <CommandGroup heading="Navegación">
              {navigationItems.map(({ id, label, href, Icon }) => (
                <CommandItem key={id} value={`${label} navegación`} onSelect={() => abrirDestino(href)}>
                  <Icon className="size-4 text-accent" />
                  <span>{label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Chats recientes">
              {recentConversations.map((conversation) => (
                <CommandItem key={conversation.id} value={`${conversation.title} ${conversation.timeLabel}`} onSelect={() => setAbierto(false)}>
                  <MessageCircle className="size-4 text-muted-foreground" />
                  <span className="min-w-0 flex-1 truncate">{conversation.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{conversation.timeLabel}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
            <span>Busca contenido, secciones y conversaciones.</span>
            <span>Esc para cerrar</span>
          </div>
        </Command>
      </CommandDialog>
    </>
  )
}
