import { IndiceMacrofaseSimple } from '@/components/viaje/IndiceMacrofaseSimple'
import { PanelEtapaSimple } from '@/components/viaje/PanelEtapaSimple'
import { PiePaso } from '@/components/viaje/PiePaso'
import { etapasDesarrollo } from '@/data/viaje-desarrollo'
import { useMacrofaseSimpleNavegacion } from '../use-macrofase-simple-navegacion'

export function DesarrolloMacrofase() {
  const { etapaActiva, siguiente, irAEtapa, irASiguiente } = useMacrofaseSimpleNavegacion(
    'desarrollo',
    etapasDesarrollo,
  )

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-[16rem_minmax(0,45rem)] items-start gap-10 px-6 pb-10 xl:gap-14">
      <aside className="sticky top-6 self-start rounded-xl border border-border bg-card p-4 max-md:static max-md:col-span-full">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Etapas de desarrollo</p>
        <div className="mt-4 max-md:hidden">
          <IndiceMacrofaseSimple etapas={etapasDesarrollo} etapaActivaId={etapaActiva.id} onSeleccionarEtapa={irAEtapa} />
        </div>
        <select
          value={etapaActiva.id}
          onChange={(event) => irAEtapa(event.target.value)}
          className="mt-3 h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 md:hidden"
          aria-label="Seleccionar etapa de desarrollo"
        >
          {etapasDesarrollo.map((etapa) => <option key={etapa.id} value={etapa.id}>{etapa.numero}. {etapa.nombre}</option>)}
        </select>
      </aside>

      <main className="flex min-w-0 flex-col gap-4 max-md:col-span-full">
        <PanelEtapaSimple etapa={etapaActiva} total={etapasDesarrollo.length} />
        <PiePaso
          accionVerbo={undefined}
          onAccion={() => {}}
          mostrarSiguiente={Boolean(siguiente)}
          onSiguiente={irASiguiente}
        />
      </main>
    </div>
  )
}
