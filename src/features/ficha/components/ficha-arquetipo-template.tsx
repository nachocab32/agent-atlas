import { AlertTriangle, FileCode2, Wrench } from 'lucide-react'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { fichaArquetipoDetallePorId } from '@/data/ficha-arquetipo'
import { tipoActivoLabel } from '@/data/catalogo'
import { BloqueCodigoCopiable, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'

function Titulo({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

function Lista({ items }: { items: string[] }) {
  return <ul className="flex flex-col gap-3 text-sm leading-relaxed text-foreground">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
}

export function FichaArquetipoTemplate({ activo }: { activo: Activo }) {
  const detalle = fichaArquetipoDetallePorId[activo.id]
  if (!detalle) return null

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={null} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs defaultValue="resumen">
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="estructura">Estructura</TabsTrigger>
            {detalle.parametros && <TabsTrigger value="implementacion">Implementación</TabsTrigger>}
            {detalle.runbook && <TabsTrigger value="runbook">Runbook</TabsTrigger>}
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <section className="flex flex-col gap-4"><Titulo>Qué genera</Titulo><p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p></section>
            <section className="rounded-xl border border-border bg-card p-4"><div className="flex items-center gap-2"><FileCode2 className="size-4 text-primary" /><h3 className="font-medium text-foreground">Generación asistida</h3></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">La generación se realiza mediante MCP Atlas Knowledge. Este prototipo documenta el arquetipo, pero todavía no crea repositorios.</p></section>
            {detalle.advertenciaFuente && <section className="flex gap-3 rounded-xl border border-amber-700/70 bg-amber-50 p-4"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-700" /><p className="text-sm leading-relaxed text-foreground">{detalle.advertenciaFuente}</p></section>}
          </TabsContent>

          <TabsContent value="estructura" className="flex flex-col gap-6"><Titulo>Estructura generada</Titulo><Lista items={detalle.estructura} /></TabsContent>

          {detalle.parametros && <TabsContent value="implementacion" className="flex flex-col gap-8">
            <section className="flex flex-col gap-4"><Titulo>Parámetros del formulario</Titulo><div className="overflow-hidden rounded-xl border border-border"><table className="w-full text-left text-sm"><thead className="border-b border-border bg-muted/40 text-muted-foreground"><tr><th className="px-4 py-3 font-medium">Parámetro</th><th className="px-4 py-3 font-medium">Uso</th></tr></thead><tbody>{detalle.parametros.map((parametro) => <tr key={parametro.nombre} className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-xs text-foreground">{parametro.nombre}</td><td className="px-4 py-3 text-muted-foreground">{parametro.uso}</td></tr>)}</tbody></table></div></section>
            {detalle.arquitectura && <section className="flex flex-col gap-4"><Titulo>Arquitectura</Titulo><Lista items={detalle.arquitectura} /></section>}
          </TabsContent>}

          {detalle.runbook && <TabsContent value="runbook" className="flex flex-col gap-8">
            <section className="flex flex-col gap-4"><div className="flex items-center gap-2"><Wrench className="size-4 text-primary" /><Titulo>Primeros pasos</Titulo></div><Lista items={detalle.runbook} /></section>
            {detalle.codigoValidacion && <BloqueCodigoCopiable codigo={detalle.codigoValidacion} />}
            {detalle.troubleshooting && <section className="flex flex-col gap-4"><Titulo>Troubleshooting</Titulo><Lista items={detalle.troubleshooting} /></section>}
          </TabsContent>}
        </Tabs>
        <aside className="max-md:order-first"><PanelResponsable responsable={activo.responsable} /></aside>
      </div>
    </div>
  )
}
