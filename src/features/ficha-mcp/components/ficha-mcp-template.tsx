import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import type { AppOutletContext } from '@/app/app-layout'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { SeccionConexionMcp } from '@/components/ficha-mcp/SeccionConexionMcp'
import { SeccionPreguntasMcp } from '@/components/ficha-mcp/SeccionPreguntasMcp'
import { SeccionResumenMcp } from '@/components/ficha-mcp/SeccionResumenMcp'
import { SeccionSeguridadMcp } from '@/components/ficha-mcp/SeccionSeguridadMcp'
import { fichaMcpDetallePorId } from '@/data/ficha-mcp'
import { tipoActivoLabel } from '@/data/catalogo'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'

export function FichaMcpTemplate({ activo }: { activo: Activo }) {
  const detalle = fichaMcpDetallePorId[activo.id]
  const { anclarActivo, enviar } = useOutletContext<AppOutletContext>()
  const navigate = useNavigate()
  const [tab, setTab] = useState('resumen')
  if (!detalle) return null

  function abrirChat(consulta: string) {
    anclarActivo({ id: activo.id, nombre: activo.nombre, version: activo.version })
    void enviar(consulta)
    navigate('/')
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={<Button onClick={() => setTab('conexion')}>Ver cómo conectarlo</Button>} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="conexion">Conexión</TabsTrigger>
            {detalle.preguntasPorAudiencia && <TabsTrigger value="preguntas">Preguntas</TabsTrigger>}
            {detalle.seguridad && <TabsTrigger value="seguridad">Seguridad</TabsTrigger>}
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <SeccionResumenMcp descripcionLarga={activo.descripcionLarga} detalle={detalle} />
          </TabsContent>

          <TabsContent value="conexion" className="flex flex-col gap-8">
            <SeccionConexionMcp detalle={detalle} onProbarPregunta={abrirChat} />
          </TabsContent>

          {detalle.preguntasPorAudiencia && (
            <TabsContent value="preguntas" className="flex flex-col gap-8">
              <SeccionPreguntasMcp grupos={detalle.preguntasPorAudiencia} onSeleccionar={abrirChat} />
            </TabsContent>
          )}

          {detalle.seguridad && (
            <TabsContent value="seguridad" className="flex flex-col gap-6">
              <SeccionSeguridadMcp items={detalle.seguridad} />
            </TabsContent>
          )}
        </Tabs>
        <aside className="max-md:order-first">
          <PanelResponsable responsable={activo.responsable} />
        </aside>
      </div>
    </div>
  )
}
