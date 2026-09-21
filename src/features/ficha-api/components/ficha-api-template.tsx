import { EncabezadoFichaApi } from '@/components/ficha-api/EncabezadoFichaApi'
import { IndiceFichaApi } from '@/components/ficha-api/IndiceFichaApi'
import { PieFeedbackFichaApi } from '@/components/ficha-api/PieFeedbackFichaApi'
import { SeccionAutenticacion } from '@/components/ficha-api/SeccionAutenticacion'
import { SeccionEndpoints } from '@/components/ficha-api/SeccionEndpoints'
import { SeccionErroresComunes } from '@/components/ficha-api/SeccionErroresComunes'
import { SeccionOwnerSoporte } from '@/components/ficha-api/SeccionOwnerSoporte'
import { SeccionQueHace } from '@/components/ficha-api/SeccionQueHace'
import { SeccionQuickstart } from '@/components/ficha-api/SeccionQuickstart'
import { fichaApiDetallePorId } from '@/data/ficha-api'
import type { Activo } from '@/types/catalogo'
import { SECCIONES_FICHA_API, useIndiceScrollSpy } from '../use-indice-scroll-spy'
import { useContextoFicha } from '@/features/referencia/contexto-ficha'

interface FichaApiTemplateProps {
  activo: Activo
}

export function FichaApiTemplate({ activo }: FichaApiTemplateProps) {
  useContextoFicha()
  const { seccionActiva, registrarSeccion, irASeccion } = useIndiceScrollSpy()
  const detalle = fichaApiDetallePorId[activo.id]

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-[var(--space-content)]">
      <EncabezadoFichaApi
        dominio={activo.dominio ?? ''}
        activoId={activo.id}
        titulo={activo.nombre}
        descripcion={activo.descripcion}
        lifecycle={activo.lifecycle}
        protocolo="openapi · rest"
        version={activo.version}
        tags={activo.tags ?? []}
      />

      <div className="grid grid-cols-1 gap-[var(--space-section)] md:grid-cols-3">
        <div className="flex flex-col gap-[var(--space-section)] md:col-span-2">
          <div ref={registrarSeccion('que-hace')} id="que-hace">
            <SeccionQueHace titulo={SECCIONES_FICHA_API[0].label} texto={detalle?.quePara ?? activo.descripcionLarga} />
          </div>
          <div ref={registrarSeccion('endpoints')} id="endpoints">
            <SeccionEndpoints titulo={SECCIONES_FICHA_API[1].label} endpoints={detalle?.endpoints ?? []} />
          </div>
          <div ref={registrarSeccion('autenticacion')} id="autenticacion">
            <SeccionAutenticacion
              titulo={SECCIONES_FICHA_API[2].label}
              esquemas={detalle?.autenticacion ?? []}
              credencialesTexto={detalle?.credencialesTexto}
            />
          </div>
          <div ref={registrarSeccion('quickstart')} id="quickstart">
            <SeccionQuickstart titulo={SECCIONES_FICHA_API[3].label} pasos={detalle?.quickstart ?? []} />
          </div>
          <div ref={registrarSeccion('errores')} id="errores">
            <SeccionErroresComunes titulo={SECCIONES_FICHA_API[4].label} errores={detalle?.errores ?? []} />
          </div>
          <div ref={registrarSeccion('owner')} id="owner">
            <SeccionOwnerSoporte
              titulo={SECCIONES_FICHA_API[5].label}
              sigla={activo.responsable.iniciales}
              equipo={activo.responsable.nombre}
            />
          </div>

          <PieFeedbackFichaApi />
        </div>

        <div className="self-start md:sticky md:top-4">
          <IndiceFichaApi
            secciones={SECCIONES_FICHA_API}
            seccionActivaId={seccionActiva}
            onSeleccionarSeccion={(id) => irASeccion(id as (typeof SECCIONES_FICHA_API)[number]['id'])}
          />
        </div>
      </div>
    </div>
  )
}
