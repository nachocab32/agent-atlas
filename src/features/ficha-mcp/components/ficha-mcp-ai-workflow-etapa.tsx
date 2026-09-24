import { Link } from 'react-router'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { activos } from '@/data/catalogo'
import { etapasAiWorkflow, type EtapaAiWorkflowId } from '@/data/ficha-mcp-ai-workflow'
import { BloqueCodigoCopiable, ReproductorVideo, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

function Titulo({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

export function FichaMcpAiWorkflowEtapa({ etapaId }: { etapaId: EtapaAiWorkflowId }) {
  const etapa = etapasAiWorkflow[etapaId]
  const hub = activos.find((activo) => activo.id === 'mcp-ai-workflow')
  if (!hub) return null

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header>
        <Link to="/aceleradores/mcp-ai-workflow" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← Volver a MCP AI-Workflow
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          Aceleradores / <Link to="/aceleradores/mcp-ai-workflow" className="hover:text-foreground">MCP AI-Workflow</Link> / <span className="text-foreground">{etapa.nombre}</span>
        </p>
        <h1 className="mt-2 text-xl font-semibold text-foreground">{etapa.nombre}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {etapa.badges.map((badge) => <span key={badge} className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">{badge}</span>)}
        </div>
      </header>

      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs defaultValue="resumen">
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="usar">Cuándo usar</TabsTrigger>
            <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <section className="flex flex-col gap-4"><Titulo>{etapa.nombre}</Titulo><p className="leading-relaxed text-muted-foreground">{etapa.descripcion}</p></section>
            <section className="flex flex-col gap-4"><Titulo>Fricción que resuelve</Titulo><p className="leading-relaxed text-muted-foreground">{etapa.friccion}</p></section>
            <ReproductorVideo titulo={`Demo de ${etapa.nombre}`} duracion={etapa.video.duracion} vimeoId={etapa.video.vimeoId} />
            <section className="flex flex-col gap-4"><Titulo>Beneficio</Titulo><p className="leading-relaxed text-muted-foreground">{etapa.beneficio}</p>{etapa.notaBeneficio && <p className="text-sm italic text-muted-foreground">{etapa.notaBeneficio}</p>}<p className="text-sm italic text-muted-foreground">{etapa.usoPendiente}</p></section>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1"><div className="rounded-xl border border-border bg-card p-4"><p className="text-lg font-semibold text-foreground">{etapa.metrica.antes.valor}</p><p className="mt-1 text-sm text-muted-foreground">{etapa.metrica.antes.etiqueta}</p></div><div className="rounded-xl border border-primary/30 bg-primary/5 p-4"><p className="text-lg font-semibold text-foreground">{etapa.metrica.despues.valor}</p><p className="mt-1 text-sm text-muted-foreground">{etapa.metrica.despues.etiqueta}</p></div></div>
            <Link to={`/aceleradores/mcp-ai-workflow/${etapa.siguientePaso.destino}`} className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/25 hover:bg-primary/5"><p className="text-xs font-medium text-primary">{etapa.siguientePaso.etiqueta}</p><p className="mt-1 text-sm font-medium text-foreground">{etapa.siguientePaso.nombre}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{etapa.siguientePaso.descripcion}</p></Link>
          </TabsContent>

          <TabsContent value="usar" className="flex flex-col gap-6"><Titulo>Ejemplos de uso</Titulo>{etapa.ejemplos.map((ejemplo) => <section key={ejemplo.titulo} className="rounded-xl border border-border bg-card p-4"><p className="font-medium text-foreground">{ejemplo.titulo}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ejemplo.texto}</p></section>)}</TabsContent>

          <TabsContent value="requisitos" className="flex flex-col gap-8">
            <section className="flex flex-col gap-4"><Titulo>Cómo se invoca</Titulo><p className="leading-relaxed text-muted-foreground">{etapa.comoSeInvoca}</p><BloqueCodigoCopiable codigo={etapa.promptEjemplo} /></section>
            <section className="flex flex-col gap-4"><Titulo>Detalle técnico</Titulo><p className="text-sm text-muted-foreground">{etapa.notaTecnica ?? 'Tools que usa (a confirmar):'}</p><div className="flex flex-wrap gap-2">{etapa.tools.map((tool) => <code key={tool} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">{tool}</code>)}</div></section>
          </TabsContent>
        </Tabs>
        <aside className="max-md:order-first"><PanelResponsable responsable={hub.responsable} /></aside>
      </div>
    </div>
  )
}
