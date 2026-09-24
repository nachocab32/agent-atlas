import { useState } from 'react'
import { Check } from 'lucide-react'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { PieFeedbackContenido } from '@/components/ficha/PieFeedbackContenido'
import { TablaSimple } from '@/components/ficha/TablaSimple'
import { fichaSkillDetallePorId } from '@/data/ficha-skill'
import { tipoActivoLabel } from '@/data/catalogo'
import { BloqueCodigoCopiable, BotonDescargaSkill, ReproductorVideo, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'
import type { FichaSkillDetalle } from '@/types/ficha-skill'

function Titulo({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

function Lista({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function SeccionVideoSkill({ nombreActivo, video }: { nombreActivo: string; video: NonNullable<FichaSkillDetalle['video']> }) {
  return <ReproductorVideo titulo={`Demo de ${nombreActivo}`} duracion={video.duracion} vimeoId={video.vimeoId} />
}

function PestanaResumenSkill({ activo, detalle }: { activo: Activo; detalle: FichaSkillDetalle }) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Titulo>Qué hace este skill</Titulo>
        <p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p>
      </section>

      {detalle.friccion && (
        <section className="flex flex-col gap-4">
          <Titulo>Fricción que resuelve</Titulo>
          <p className="leading-relaxed text-muted-foreground">{detalle.friccion}</p>
        </section>
      )}

      {detalle.video && <SeccionVideoSkill nombreActivo={activo.nombre} video={detalle.video} />}

      {detalle.bloques?.map((bloque) => (
        <section key={bloque.titulo} className="flex flex-col gap-4">
          <Titulo>{bloque.titulo}</Titulo>
          <Lista items={bloque.items} />
        </section>
      ))}

      {detalle.tablas?.map((tabla) => (
        <section key={tabla.titulo} className="flex flex-col gap-4">
          <Titulo>{tabla.titulo}</Titulo>
          <TablaSimple columnas={tabla.columnas} filas={tabla.filas} />
        </section>
      ))}

      {detalle.relaciones && detalle.relaciones.length > 0 && (
        <section className="flex flex-col gap-4">
          <Titulo>Combínala con</Titulo>
          <div className="flex flex-col gap-3">
            {detalle.relaciones.map((relacion) => (
              <div key={relacion.nombre} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-medium text-foreground">{relacion.nombre}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{relacion.frase}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {detalle.mantenedor && (
        <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground">Mantenedor</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground">
            <span>{detalle.mantenedor.equipo}</span>
            <span className="text-muted-foreground">Publicado el {detalle.mantenedor.fechaPublicacion}</span>
            <span className="rounded-full border border-accent/30 px-2 py-0.5 text-xs font-medium text-accent">{detalle.mantenedor.estado}</span>
          </div>
        </section>
      )}

      {detalle.widgetUtilidad && <PieFeedbackContenido />}
    </>
  )
}

function PestanaUsarSkill({ detalle }: { detalle: FichaSkillDetalle }) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Titulo>Cuándo se activa</Titulo>
        <div className="flex flex-col gap-3">
          {detalle.activacion.map((entrada) => (
            <div
              key={entrada.senal}
              className="rounded-xl border border-border bg-card p-4"
            >
              <p className="font-medium text-foreground">{entrada.senal}</p>
              <p className="mt-1 text-sm text-muted-foreground">{entrada.ejemplo}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-border bg-card p-4">
        <h3 className="font-medium text-foreground">Cuándo no usarla</h3>
        <div className="mt-4">
          <Lista items={detalle.evitar} />
        </div>
      </section>
    </>
  )
}

function PestanaInstalarSkill({ activo }: { activo: Activo }) {
  const descarga = {
    'itds-board-composer': {
      archivo: 'itds-board-composer.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/itds-board-composer/download?slug=itds-board-composer',
    },
    'itds-code-forge': {
      archivo: 'itds-code-forge.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/itds-code-forge/download?slug=itds-code-forge',
    },
    'ux-heuristics-review': {
      archivo: 'ux-heuristics-review.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/ux-heuristics-review/download?slug=ux-heuristics-review',
    },
    'ea-principles-align-expert': {
      archivo: 'ea-principles-align.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/ea-principles-align/download?slug=ea-principles-align-expert',
    },
    'mmi-analyzer': {
      archivo: 'mmi-analyzer.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/mmi-analyzer/download?slug=mmi-analyzer',
    },
    'logging-expert': {
      archivo: 'logging.zip',
      href: 'https://atlas-platform.cencosud.net/api/skills/logging/download?slug=logging-expert',
    },
  }[activo.id]

  if (!descarga) return null

  if (activo.id === 'itds-code-forge') {
    return <>
      <section className="flex flex-col gap-4"><Titulo>Instálalo en Claude Desktop</Titulo><p className="leading-relaxed text-muted-foreground">Descarga el paquete oficial, crea un proyecto en Claude Desktop y conéctalo al MCP de Penpot.</p><BotonDescargaSkill href={descarga.href} nombreArchivo={descarga.archivo} /></section>
      <ol className="flex flex-col gap-3 text-sm leading-relaxed text-foreground"><li><span className="font-medium">1. Crea un proyecto.</span> En Claude Desktop, abre <span className="font-medium">New Project</span> y nómbralo IT DS Code Forge.</li><li><span className="font-medium">2. Copia el skill.</span> Descomprime el ZIP y copia la carpeta a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">~/.claude/skills/</code>.</li><li><span className="font-medium">3. Conecta Penpot.</span> Agrega este servidor MCP en Settings → Integrations → MCP Servers.</li></ol>
      <BloqueCodigoCopiable codigo={`{
  "mcpServers": {
    "penpot": {
      "command": "npx",
      "args": ["-y", "@penpot/mcp"],
      "env": {
        "PENPOT_BASE_URL": "https://design.penpot.app",
        "PENPOT_ACCESS_TOKEN": "[tu access token de Penpot]"
      }
    }
  }
}`} />
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Verifica la instalación</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">En una conversación del proyecto, pregunta si tiene acceso a <code className="font-mono text-xs">itds-code-forge</code> y al MCP de Penpot. Debe confirmar ambos antes de construir.</p></section>
    </>
  }

  if (activo.id === 'mmi-analyzer') {
    return <>
      <section className="flex flex-col gap-4"><Titulo>Instala este skill</Titulo><p className="leading-relaxed text-muted-foreground">Prepara las dependencias de análisis, instala el paquete oficial y ejecútalo sobre el repositorio que quieras evaluar.</p><BotonDescargaSkill href={descarga.href} nombreArchivo={descarga.archivo} /></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Dependencias y CencoSkills</h3><code className="mt-4 block rounded-lg bg-neutral-950 p-3 font-mono text-xs text-white">pip install lizard networkx{'\n'}npm install -g @cencosud-it/it-skills-cli{'\n'}npx cenco-skills add --skill mmi-analyzer</code></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Instalación local</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Descomprime el ZIP y copia la carpeta a <code className="font-mono text-xs">~/.kiro/skills/mmi-analyzer/</code>, o al directorio de skills de tu agente.</p></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Ejecución inicial</h3><code className="mt-4 block rounded-lg bg-neutral-950 p-3 font-mono text-xs text-white">python3 ./scripts/metrics_analyzer.py /path/to/project{'\n'}python3 ./scripts/architecture_analyzer.py /path/to/project{'\n'}python3 ./scripts/mmi_calculator.py /path/to/project</code><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Revisa el resultado en <code className="font-mono text-xs">.mmi-analyzer/mmi_report.md</code>.</p></section>
    </>
  }

  const skillCencoSkills = {
    'itds-board-composer': { comando: 'itds-board-composer', carpeta: 'itds-board-composer', requisitos: 'Librería IT DS activa, Token Studio cargado y MCP de Penpot conectado en la sesión de Claude Code.', configuracion: null },
    'ea-principles-align-expert': { comando: 'ea-principles-align-expert', carpeta: 'ea-principles-align-expert', requisitos: 'Necesitas un ADR, diagrama C4, descripción de servicio o propuesta de cambio para evaluarla.', configuracion: 'Eres ea-principles-align-expert, evaluador de alineación arquitectónica contra los principios de Cencosud. Evalúas ADRs, diagramas y propuestas; no inventas pilares no documentados.' },
    'logging-expert': { comando: 'logging', carpeta: 'logging', requisitos: 'Requiere un logger jerárquico como winston o pino en el servicio que vas a auditar.', configuracion: 'Eres logging, experto en la Política de Logging Corporativa de Cencosud. Exiges logger jerárquico, request_id propagado, PII fuera de los logs y formato JSON en staging y producción.' },
  }[activo.id]

  if (skillCencoSkills) {
    return <>
      <section className="flex flex-col gap-4"><Titulo>Instala este skill</Titulo><p className="leading-relaxed text-muted-foreground">Puedes instalarlo desde CencoSkills o descargar el paquete oficial y copiarlo localmente.</p><BotonDescargaSkill href={descarga.href} nombreArchivo={descarga.archivo} /></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Desde CencoSkills</h3><code className="mt-4 block rounded-lg bg-neutral-950 p-3 font-mono text-xs text-white">npm install -g @cencosud-it/it-skills-cli{'\n'}npx cenco-skills add --skill {skillCencoSkills.comando}</code></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Instalación local</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Descomprime el ZIP y copia la carpeta completa a <code className="font-mono text-xs">~/.claude/skills/</code>. Verifica con <code className="font-mono text-xs">ls ~/.claude/skills/{skillCencoSkills.carpeta}/</code> que incluya <code className="font-mono text-xs">SKILL.md</code>, <code className="font-mono text-xs">INSTALL.md</code> y <code className="font-mono text-xs">references/</code>.</p></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Requisitos de entorno</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{skillCencoSkills.requisitos}</p></section>
      {skillCencoSkills.configuracion && <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Configuración recomendada</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Agrega estas instrucciones a tu <code className="font-mono text-xs">CLAUDE.md</code> o al proyecto de Claude Desktop.</p><code className="mt-4 block rounded-lg bg-neutral-950 p-3 font-mono text-xs leading-relaxed text-white">{skillCencoSkills.configuracion}</code></section>}
    </>
  }

  return (
    <>
      <section className="flex flex-col gap-4"><Titulo>Instala este skill</Titulo><p className="leading-relaxed text-muted-foreground">Descarga el paquete oficial, descomprímelo y copia la carpeta del skill en tu directorio de Claude Code.</p><BotonDescargaSkill href={descarga.href} nombreArchivo={descarga.archivo} /></section>
      <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Pasos de instalación</h3><ol className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground"><li>1. Instala Claude Code: <code className="font-mono text-xs text-foreground">npm install -g @anthropic-ai/claude-code</code>.</li><li>2. Descomprime el ZIP y copia la carpeta <code className="font-mono text-xs text-foreground">heuristics-review</code> a <code className="font-mono text-xs text-foreground">~/.claude/skills/</code>.</li><li>3. Abre Claude Code y escribe <code className="font-mono text-xs text-foreground">/heuristics-review</code>, o adjunta un screenshot y pide “evalúa esta pantalla”.</li></ol></section>
    </>
  )
}

export function FichaSkillGuia({ activo }: { activo: Activo }) {
  const detalle = fichaSkillDetallePorId[activo.id]
  const [tab, setTab] = useState('resumen')
  if (!detalle) return null
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={null} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="usar">Cuándo usar</TabsTrigger>
            <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
            <TabsTrigger value="instalar">Instalar</TabsTrigger>
            <TabsTrigger value="archivos">Archivos</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <PestanaResumenSkill activo={activo} detalle={detalle} />
          </TabsContent>

          <TabsContent value="usar" className="flex flex-col gap-8">
            <PestanaUsarSkill detalle={detalle} />
          </TabsContent>

          <TabsContent value="requisitos" className="flex flex-col gap-6">
            <Titulo>Requisitos previos</Titulo>
            <Lista items={detalle.requisitos} />
          </TabsContent>

          <TabsContent value="instalar" className="flex flex-col gap-6">
            <PestanaInstalarSkill activo={activo} />
          </TabsContent>

          <TabsContent value="archivos" className="flex flex-col gap-6">
            <Titulo>Archivos del skill</Titulo>
            <BloqueCodigoCopiable codigo={[`skills/${activo.id}/`, ...detalle.archivos].join('\n')} />
          </TabsContent>
        </Tabs>
        <aside className="max-md:order-first">
          <PanelResponsable responsable={activo.responsable} />
        </aside>
      </div>
    </div>
  )
}
