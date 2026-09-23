import { BookOpen, GitBranch, Layers, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { cn } from '@/shared/lib/utils'
import type { SidebarDestino } from '@/types/sidebar'

const iconByKey: Record<SidebarDestino['icono'], LucideIcon> = {
  cencoflow: GitBranch,
  aceleradores: Rocket,
  guias: BookOpen,
  plataforma: Layers,
}

const rutaPorDestino: Partial<Record<SidebarDestino['icono'], string>> = {
  cencoflow: '/cencoflow',
  aceleradores: '/aceleradores',
  guias: '/guias',
  plataforma: '/plataforma',
}

interface SidebarDestinosProps {
  destinos: SidebarDestino[]
  colapsado?: boolean
  onNavegar?: () => void
}

export function SidebarDestinos({ destinos, colapsado = false, onNavegar }: SidebarDestinosProps) {
  const location = useLocation()

  return (
    <ul className="space-y-0.5">
      {destinos.map((destino) => {
        const Icono = iconByKey[destino.icono]
        const ruta = rutaPorDestino[destino.icono]
        const activo = ruta !== undefined && location.pathname.startsWith(ruta)
        const className = cn(
          'flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent',
          colapsado && 'justify-center',
          activo && 'bg-sidebar-accent',
        )

        return (
          <li key={destino.id}>
            {ruta ? (
              <Link to={ruta} className={className} aria-label={colapsado ? destino.label : undefined} title={colapsado ? destino.label : undefined} onClick={onNavegar}>
                <Icono className={cn('size-4 shrink-0 transition-colors', activo ? 'text-primary' : 'text-sidebar-muted')} />
                {!colapsado && destino.label}
              </Link>
            ) : (
              <button type="button" className={className} aria-label={colapsado ? destino.label : undefined} title={colapsado ? destino.label : undefined}>
                <Icono className={cn('size-4 shrink-0 transition-colors', activo ? 'text-primary' : 'text-sidebar-muted')} />
                {!colapsado && destino.label}
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}
