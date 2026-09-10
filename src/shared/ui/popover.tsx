import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { PopoverContext, usePopover } from './popover-context'

// No hay primitiva de popover/dropdown instalada (solo @radix-ui/react-tabs).
// Implementación mínima: anclaje por CSS (relative/absolute), sin cálculo de posición,
// con cierre por click-outside y Escape.
export function Popover({ children, className }: { children: ReactNode; className?: string }) {
  const [abierto, setAbierto] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!abierto) return
    function onPointerDown(evento: PointerEvent) {
      if (ref.current && !ref.current.contains(evento.target as Node)) setAbierto(false)
    }
    function onKeyDown(evento: KeyboardEvent) {
      if (evento.key === 'Escape') setAbierto(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [abierto])

  return (
    <PopoverContext.Provider value={{ abierto, setAbierto }}>
      <div ref={ref} className={cn('relative', className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

interface PopoverTriggerProps {
  children: ReactNode
  className?: string
  active?: boolean
  label: string
}

export function PopoverTrigger({ children, className, active, label }: PopoverTriggerProps) {
  const { abierto, setAbierto } = usePopover()
  return (
    <button
      type="button"
      aria-expanded={abierto}
      aria-label={label}
      onClick={() => setAbierto(!abierto)}
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        active && 'bg-accent/5 text-accent',
        className,
      )}
    >
      {children}
    </button>
  )
}

interface PopoverContentProps {
  children: ReactNode
  className?: string
  align?: 'start' | 'end'
}

export function PopoverContent({ children, className, align = 'end' }: PopoverContentProps) {
  const { abierto } = usePopover()
  if (!abierto) return null

  return (
    <div
      className={cn(
        'absolute top-full z-20 mt-2 min-w-56 rounded-xl border border-border bg-popover p-3',
        align === 'end' ? 'right-0' : 'left-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
