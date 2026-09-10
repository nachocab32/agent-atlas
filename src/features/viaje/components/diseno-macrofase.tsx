import { useNavigate, useOutletContext } from 'react-router'
import type { AppOutletContext } from '@/app/app-layout'
import { BloqueEntradaViaje } from '@/components/viaje/BloqueEntradaViaje'
import { BloqueEntrega } from '@/components/viaje/BloqueEntrega'
import { IndiceViaje } from '@/components/viaje/IndiceViaje'
import { PiePaso } from '@/components/viaje/PiePaso'
import { RelacionPasoBloque } from '@/components/viaje/RelacionPasoBloque'
import { RotuloEtapa } from '@/components/viaje/RotuloEtapa'
import { TarjetaPaso } from '@/components/viaje/TarjetaPaso'
import { entradaViaje, etapasViaje, pasoActivoCatalogo } from '@/data/viaje'
import { resolverTipoOrigen } from '../resolver-tipo-origen'
import { useViajeNavegacion } from '../use-viaje-navegacion'

export function DisenoMacrofase() {
  const navigate = useNavigate()
  const { anclarActivo } = useOutletContext<AppOutletContext>()
  const {
    pasoActivo,
    etapaActiva,
    hayPasoActivo,
    siguiente,
    irAPaso,
    irASiguiente,
    saltarAEtapa2,
    saltarAEtapa1,
  } = useViajeNavegacion()

  const pasoInvestigacion = etapasViaje.find((etapa) => etapa.numero === 1)?.pasos[0]

  function handleAccionPaso() {
    if (!pasoActivo) return
    anclarActivo({ id: pasoActivo.id, nombre: pasoActivo.titulo, version: '' })
    navigate('/')
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-[16rem_minmax(0,45rem)] items-start gap-10 px-6 pb-10 xl:gap-14">
      <aside className="sticky top-6 self-start rounded-xl border border-border bg-card p-4 max-md:static max-md:col-span-full">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Etapas del viaje</p>
        <div className="mt-4 max-md:hidden">
          <IndiceViaje etapas={etapasViaje} pasoActivoId={pasoActivo?.id ?? null} onSeleccionarPaso={irAPaso} />
        </div>
        <select
          value={pasoActivo?.id ?? ''}
          onChange={(event) => event.target.value && irAPaso(event.target.value)}
          className="mt-3 h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 md:hidden"
          aria-label="Seleccionar etapa del viaje"
        >
          <option value="" disabled>Selecciona una etapa</option>
          {etapasViaje.flatMap((etapa) => etapa.pasos.map((paso) => (
            <option key={paso.id} value={paso.id}>{etapa.numero}. {etapa.nombre} — {paso.etiqueta}</option>
          )))}
        </select>
      </aside>

      <main className="flex min-w-0 flex-col gap-4 max-md:col-span-full">
        {!hayPasoActivo && pasoInvestigacion && (
          <BloqueEntradaViaje
            etiquetaBotonEtapa2={entradaViaje.accionEtiqueta}
            cuerpoEtapa2={entradaViaje.texto}
            antecedentes={entradaViaje.antecedentes}
            onComenzarEtapa2={saltarAEtapa2}
            cuerpoEtapa1={pasoInvestigacion.descripcion}
            onComenzarEtapa1={saltarAEtapa1}
          />
        )}

        {pasoActivo && etapaActiva && (
          <>
            <RotuloEtapa numero={etapaActiva.numero} nombre={etapaActiva.nombre} intencion={etapaActiva.intencion} />
            <TarjetaPaso paso={pasoActivo} activoCatalogoId={pasoActivoCatalogo[pasoActivo.id]} />
            <BloqueEntrega entrega={pasoActivo.entrega} />
            {pasoActivo.relacion && (
              <RelacionPasoBloque
                relacion={pasoActivo.relacion}
                tipoOrigen={resolverTipoOrigen(pasoActivo.relacion.pasoOrigen)}
              />
            )}
            <PiePaso
              accionVerbo={pasoActivo.accion?.verbo}
              onAccion={handleAccionPaso}
              mostrarSiguiente={Boolean(siguiente)}
              onSiguiente={irASiguiente}
            />
          </>
        )}
      </main>
    </div>
  )
}
