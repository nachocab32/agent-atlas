import { useState } from 'react'
import { EncabezadoFichaApi } from '@/components/ficha-api/EncabezadoFichaApi'
import { PieFeedbackFichaApi } from '@/components/ficha-api/PieFeedbackFichaApi'
import { SeccionAutenticacion } from '@/components/ficha-api/SeccionAutenticacion'
import { SeccionEndpoints } from '@/components/ficha-api/SeccionEndpoints'
import { SeccionErroresComunes } from '@/components/ficha-api/SeccionErroresComunes'
import { SeccionOwnerSoporte } from '@/components/ficha-api/SeccionOwnerSoporte'
import { SeccionQueHace } from '@/components/ficha-api/SeccionQueHace'
import { SeccionQuickstart } from '@/components/ficha-api/SeccionQuickstart'
import { fichaApiDetallePorId } from '@/data/ficha-api'
import type { Activo } from '@/types/catalogo'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import { useContextoFicha } from '@/features/referencia/contexto-ficha'

interface FichaApiTemplateProps {
  activo: Activo
}

export function FichaApiTemplate({ activo }: FichaApiTemplateProps) {
  useContextoFicha()
  const detalle = fichaApiDetallePorId[activo.id]
  const [tab, setTab] = useState('resumen')

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

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
          <TabsTrigger value="resumen">Resumen</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="autenticacion">Autenticación</TabsTrigger>
          <TabsTrigger value="quickstart">Quickstart</TabsTrigger>
          <TabsTrigger value="errores">Errores</TabsTrigger>
          <TabsTrigger value="soporte">Soporte</TabsTrigger>
        </TabsList>

        <TabsContent value="resumen" className="flex flex-col gap-8">
          <SeccionQueHace titulo="Qué hace esta API" texto={detalle?.quePara ?? activo.descripcionLarga} />
        </TabsContent>

        <TabsContent value="endpoints" className="flex flex-col gap-8">
          <SeccionEndpoints titulo="Endpoints" endpoints={detalle?.endpoints ?? []} />
        </TabsContent>

        <TabsContent value="autenticacion" className="flex flex-col gap-8">
          <SeccionAutenticacion
              titulo="Autenticación"
              esquemas={detalle?.autenticacion ?? []}
              credencialesTexto={detalle?.credencialesTexto}
          />
        </TabsContent>

        <TabsContent value="quickstart" className="flex flex-col gap-8">
          <SeccionQuickstart titulo="Quickstart" pasos={detalle?.quickstart ?? []} />
        </TabsContent>

        <TabsContent value="errores" className="flex flex-col gap-8">
          <SeccionErroresComunes titulo="Errores comunes" errores={detalle?.errores ?? []} />
        </TabsContent>

        <TabsContent value="soporte" className="flex flex-col gap-8">
          <SeccionOwnerSoporte
            titulo="Owner y soporte"
            sigla={activo.responsable.iniciales}
            equipo={activo.responsable.nombre}
            persona={detalle?.soporte}
          />
        </TabsContent>

        <PieFeedbackFichaApi tieneContratoPublicado={Boolean(detalle)} />
      </Tabs>
    </div>
  )
}
