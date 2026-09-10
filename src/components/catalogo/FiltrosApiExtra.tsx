import { FilaFacetaPildoras } from '@/shared/ui'

interface FiltrosApiExtraProps {
  dominios: readonly string[]
  lifecycles: readonly string[]
  owners: readonly string[]
  dominioSeleccionado: string | null
  onSeleccionarDominio: (valor: string | null) => void
  lifecycleSeleccionado: string | null
  onSeleccionarLifecycle: (valor: string | null) => void
  ownerSeleccionado: string | null
  onSeleccionarOwner: (valor: string | null) => void
}

// Facetas propias de APIs. Solo se muestran dentro del popover de filtros
// cuando el tipo activo de la pestaña es 'APIs'.
export function FiltrosApiExtra({
  dominios,
  lifecycles,
  owners,
  dominioSeleccionado,
  onSeleccionarDominio,
  lifecycleSeleccionado,
  onSeleccionarLifecycle,
  ownerSeleccionado,
  onSeleccionarOwner,
}: FiltrosApiExtraProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-3">
      <FilaFacetaPildoras
        etiqueta="Dominio"
        opciones={dominios.map((valor) => ({ valor, label: valor }))}
        valorSeleccionado={dominioSeleccionado}
        onSeleccionar={(valor) => onSeleccionarDominio(valor === dominioSeleccionado ? null : valor)}
      />
      <FilaFacetaPildoras
        etiqueta="Lifecycle"
        opciones={lifecycles.map((valor) => ({ valor, label: valor }))}
        valorSeleccionado={lifecycleSeleccionado}
        onSeleccionar={(valor) => onSeleccionarLifecycle(valor === lifecycleSeleccionado ? null : valor)}
        resaltarValor="production"
      />
      <FilaFacetaPildoras
        etiqueta="Owner"
        opciones={owners.map((valor) => ({ valor, label: valor }))}
        valorSeleccionado={ownerSeleccionado}
        onSeleccionar={(valor) => onSeleccionarOwner(valor === ownerSeleccionado ? null : valor)}
      />
    </div>
  )
}
