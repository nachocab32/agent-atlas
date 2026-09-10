import { ArrowUpDown, Search, SlidersHorizontal } from 'lucide-react'
import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { usePopover } from './popover-context'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

interface OrdenOpcion<T extends string> {
  valor: T
  label: string
}

function MenuOrden<T extends string>({
  opciones,
  valor,
  onSeleccionar,
}: {
  opciones: OrdenOpcion<T>[]
  valor: T
  onSeleccionar: (valor: T) => void
}) {
  const { setAbierto } = usePopover()
  return (
    <div className="flex min-w-40 flex-col gap-0.5">
      {opciones.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          onClick={() => {
            onSeleccionar(opcion.valor)
            setAbierto(false)
          }}
          className={cn(
            'rounded-lg px-3 py-2 text-left text-sm transition-colors',
            opcion.valor === valor ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground hover:bg-muted',
          )}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  )
}

interface ToolbarCatalogoProps<T extends string> {
  tabs?: ReactNode
  busqueda: string
  onBusquedaChange: (valor: string) => void
  busquedaPlaceholder?: string
  filtrosActivos: boolean
  filtros: ReactNode
  ordenOpciones: OrdenOpcion<T>[]
  orden: T
  onOrdenChange: (valor: T) => void
}

export function ToolbarCatalogo<T extends string>({
  tabs,
  busqueda,
  onBusquedaChange,
  busquedaPlaceholder = 'Buscar',
  filtrosActivos,
  filtros,
  ordenOpciones,
  orden,
  onOrdenChange,
}: ToolbarCatalogoProps<T>) {
  const [buscadorAbierto, setBuscadorAbierto] = useState(busqueda !== '')
  const inputRef = useRef<HTMLInputElement>(null)

  function abrirBuscador() {
    setBuscadorAbierto(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function onBlurBuscador() {
    if (!busqueda) setBuscadorAbierto(false)
  }

  return (
    <div className={cn('flex items-center gap-3 border-b border-border pb-3', tabs ? 'justify-between' : 'justify-end')}>
      {tabs && <div className="min-w-0 flex-1 overflow-hidden">{tabs}</div>}
      {tabs && <Separator orientation="vertical" className="h-6" />}

      <div className="flex shrink-0 items-center gap-1">
        {buscadorAbierto ? (
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={busqueda}
              onChange={(evento) => onBusquedaChange(evento.target.value)}
              onBlur={onBlurBuscador}
              placeholder={busquedaPlaceholder}
              className="h-8 w-40 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
            />
          </div>
        ) : (
          <button
            type="button"
            aria-label="Buscar"
            onClick={abrirBuscador}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Search className="size-4" />
          </button>
        )}

        <Popover>
          <PopoverTrigger label="Filtrar" active={filtrosActivos}>
            <SlidersHorizontal className="size-4" />
          </PopoverTrigger>
          <PopoverContent className="w-72">{filtros}</PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger label="Ordenar">
            <ArrowUpDown className="size-4" />
          </PopoverTrigger>
          <PopoverContent className="p-1">
            <MenuOrden opciones={ordenOpciones} valor={orden} onSeleccionar={onOrdenChange} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
