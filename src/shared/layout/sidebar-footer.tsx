import { ExternalLink, LogOut, Settings, UsersRound } from 'lucide-react'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'
import type { CurrentUser } from '@/data/types'

const comunidadAtlasTeamsUrl =
  'https://teams.microsoft.com/l/team/19%3AWApF0gFd7KMvqWGLbDG250ErmhUjujBa5oKQSVOhjY01%40thread.tacv2/conversations?groupId=47cbf360-a44d-4c5c-a8eb-7ab7ea6f98f9&tenantId=a50762c4-c5ad-413a-a05e-9ffe15752882'

interface SidebarFooterProps {
  user: CurrentUser
  colapsado?: boolean
}

export function SidebarFooter({ user, colapsado = false }: SidebarFooterProps) {
  return (
    <div className={`border-t border-sidebar-border pt-3 ${colapsado ? 'flex justify-center' : ''}`}>
      <div className={`flex items-center gap-2 px-1 ${colapsado ? '' : 'mt-3'}`}>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
          {user.initial}
        </span>
        <span className={colapsado ? 'hidden' : 'min-w-0 flex-1'}>
          <span className="block truncate text-sm font-medium text-sidebar-foreground">
            {user.name}
          </span>
          <span className="block truncate text-xs text-sidebar-muted">
            {user.provider} · {user.email}
          </span>
        </span>
        <Popover className={colapsado ? 'hidden' : undefined}>
          <PopoverTrigger label="Configuración" className="rounded-lg text-sidebar-foreground hover:bg-muted">
            <Settings className="size-4" />
          </PopoverTrigger>

          <PopoverContent className="top-auto bottom-full mt-0 mb-2 w-64 p-2">
            <div className="flex items-center gap-3 px-2 py-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
                {user.initial}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{user.name}</p>
                <p className="truncate text-xs text-muted-foreground">{user.provider} · {user.email}</p>
              </div>
            </div>

            <div className="border-y border-border py-2">
              <div className="flex items-center gap-3 rounded-lg bg-accent/5 px-3 py-2.5 text-sm font-medium text-accent">
                <Settings className="size-4 shrink-0" />
                Configuración
              </div>
              <a
                href={comunidadAtlasTeamsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent/5"
              >
                <UsersRound className="size-4 shrink-0 text-accent" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-foreground">Comunidad Atlas en Teams</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    Haz preguntas y entérate de las novedades.
                  </span>
                </span>
                <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
              </a>
            </div>

            <Button variant="ghost" className="mt-2 w-full justify-start">
              <LogOut className="size-4" />
              Cerrar sesión
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
