import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import type { AppOutletContext } from '@/app/app-layout'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelDondeAplica } from '@/components/ficha/PanelDondeAplica'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { PestanaContenido } from '@/components/ficha/PestanaContenido'
import { PestanaEnCencoFlow } from '@/components/ficha/PestanaEnCencoFlow'
import { PestanaRequisitos } from '@/components/ficha/PestanaRequisitos'
import { PestanaResumen } from '@/components/ficha/PestanaResumen'
import { accionPrimariaPorTipo, etapasCencoFlow, tipoActivoLabel } from '@/data/catalogo'
import { useTranslation } from '@/i18n'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'

interface FichaGenericaActivoProps {
  activo: Activo
}

export function FichaGenericaActivo({ activo }: FichaGenericaActivoProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { anclarActivo, enviar } = useOutletContext<AppOutletContext>()
  const [tabActiva, setTabActiva] = useState('resumen')

  const etapasResueltas = activo.enCencoFlow.map((etapa) => ({
    etapaNombre: etapasCencoFlow.find((e) => e.id === etapa.etapaId)?.nombre ?? etapa.etapaId,
    control: etapa.control,
  }))

  function abrirChat(consulta?: string) {
    anclarActivo({ id: activo.id, nombre: activo.nombre, version: activo.version })
    if (consulta) void enviar(consulta)
    navigate('/')
  }

  const accion = accionPrimariaPorTipo[activo.tipo]

  const accionPrimaria = (
    <Button onClick={() => (accion.comportamiento === 'chat' ? abrirChat() : setTabActiva('contenido'))}>
      {accion.etiqueta}
    </Button>
  )

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={accionPrimaria} />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Tabs value={tabActiva} onValueChange={setTabActiva}>
            <TabsList>
              <TabsTrigger value="resumen">{t('ficha.resumen')}</TabsTrigger>
              <TabsTrigger value="contenido">{t('ficha.contenido')}</TabsTrigger>
              <TabsTrigger value="cencoflow">
                {t('ficha.enCencoFlow')} · {activo.enCencoFlow.length}
              </TabsTrigger>
              <TabsTrigger value="requisitos">
                {t('ficha.requisitos')} · {activo.requisitos.length}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="resumen">
              <PestanaResumen
                descripcionLarga={activo.descripcionLarga}
                categorias={activo.categorias}
                frasesPruebalo={activo.pruebalo}
                onSeleccionarFrase={(texto) => abrirChat(texto)}
              />
            </TabsContent>
            <TabsContent value="contenido">
              <PestanaContenido parrafos={activo.contenido} />
            </TabsContent>
            <TabsContent value="cencoflow">
              <PestanaEnCencoFlow etapas={etapasResueltas} />
            </TabsContent>
            <TabsContent value="requisitos">
              <PestanaRequisitos requisitos={activo.requisitos} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col gap-8">
          <PanelDondeAplica etapas={etapasResueltas} />
          <PanelResponsable responsable={activo.responsable} />
        </div>
      </div>
    </div>
  )
}
