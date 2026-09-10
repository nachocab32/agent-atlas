import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import { Check, LoaderCircle, Play } from 'lucide-react'
import type { AppOutletContext } from '@/app/app-layout'
import { EncabezadoFicha } from '@/components/ficha/EncabezadoFicha'
import { PanelResponsable } from '@/components/ficha/PanelResponsable'
import { tipoActivoLabel } from '@/data/catalogo'
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'

const temas = [
  ['Cencosud', 'Identidad corporativa clara basada en un PowerPoint aprobado. Permite HTML, PowerPoint y PDF.'],
  ['DevExp', 'Identidad técnica dark-first con Space Grotesk, Inter y JetBrains Mono. Entrega HTML exportable a PDF.'],
]

const tipos = [
  ['report', 'Reporte / informe de KPIs, resultados y métricas'],
  ['pitch', 'Propuesta de negocio, producto o idea'],
  ['course', 'Curso o presentación de capacitación'],
  ['proposal', 'Plan, iniciativa o presupuesto de proyecto'],
]

const proceso = [
  'Input: tipo, formato y contenido en texto libre.',
  'Selección guiada de theme y formato de salida.',
  'Blueprint del deck con el orden y contenido de cada lámina; requiere aprobación.',
  'Construcción slide por slide en HTML o PPTX con tokens del theme.',
  'Verificación automática con Playwright o LibreOffice.',
  'Entrega autocontenida, lista para compartir o editar.',
]

const ejemplos = [
  'Necesito un deck de reporte para el comité directivo con los resultados del trimestre: [pegar KPIs]. Formato: PowerPoint. Foco en 3–4 métricas clave y una lectura ejecutiva del avance.',
  'Arma un pitch de producto para presentar ante el directorio.',
  'Convertí este contenido de capacitación en una presentación educativa por módulos.',
]

function TituloSeccion({ children }: { children: string }) {
  return <h2 className="font-heading text-xl font-semibold text-foreground">{children}</h2>
}

function ListaChequeo({ items }: { items: string[] }) {
  return <ul className="flex flex-col gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
}

export function DeckGenFicha({ activo }: { activo: Activo }) {
  const navigate = useNavigate()
  const { anclarActivo, enviar } = useOutletContext<AppOutletContext>()
  const [tab, setTab] = useState('resumen')
  const [videoCargado, setVideoCargado] = useState(false)

  function abrirChat(texto?: string) {
    anclarActivo({ id: activo.id, nombre: activo.nombre, version: activo.version })
    if (texto) void enviar(texto)
    navigate('/')
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <EncabezadoFicha activo={activo} tipoLabel={tipoActivoLabel[activo.tipo]} accionPrimaria={<Button onClick={() => abrirChat()}>Usar</Button>} />
      <div className="grid grid-cols-[minmax(0,1fr)_14rem] gap-8 max-md:grid-cols-1">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
            <TabsTrigger value="resumen">Resumen</TabsTrigger>
            <TabsTrigger value="instalar">Instalar</TabsTrigger>
            <TabsTrigger value="uso">Uso</TabsTrigger>
            <TabsTrigger value="archivos">Archivos</TabsTrigger>
          </TabsList>

          <TabsContent value="resumen" className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <TituloSeccion>Qué hace este skill</TituloSeccion>
              <p className="leading-relaxed text-muted-foreground">{activo.descripcionLarga}</p>
              <ListaChequeo items={[
                'Guía la selección del tipo de presentación y formato de salida.',
                'Propone un blueprint antes de construir el resultado.',
                'Aplica tokens de marca, tipografía y espaciado del theme activo.',
                'Verifica la calidad visual antes de entregar el deck.',
              ]} />
            </div>

            <section className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <Play className="size-4 text-primary" />
                <h2 className="text-sm font-medium text-foreground">Demo de deck-gen</h2>
              </div>
              <div className="relative aspect-video overflow-hidden bg-neutral-950">
                {!videoCargado && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-950 text-center text-sm text-white" aria-live="polite">
                    <LoaderCircle className="size-5 animate-spin text-primary-foreground" />
                    <span>Cargando demo de deck-gen…</span>
                  </div>
                )}
                <iframe
                  className={`size-full transition-opacity duration-300 ${videoCargado ? 'opacity-100' : 'opacity-0'}`}
                  src="https://player.vimeo.com/video/1219229744"
                  title="Demo de deck-gen"
                  onLoad={() => setVideoCargado(true)}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>

            <div className="flex flex-col gap-4">
              <TituloSeccion>Fricción que resuelve</TituloSeccion>
              <p className="leading-relaxed text-muted-foreground">Reemplaza el armado manual de una presentación —layout, marca y maquetación lámina por lámina— por un flujo guiado que parte de contenido en texto libre y entrega un deck validado.</p>
              <p className="leading-relaxed text-muted-foreground">Las salidas pueden ser HTML interactivo, PowerPoint editable o PDF; la disponibilidad depende del theme elegido.</p>
            </div>

            <div className="flex flex-col gap-4"><TituloSeccion>Themes disponibles</TituloSeccion>
              {temas.map(([nombre, descripcion]) => <div key={nombre} className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">{nombre}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{descripcion}</p></div>)}
            </div>

            <div className="flex flex-col gap-4"><TituloSeccion>Tipos de presentación</TituloSeccion>
              <div className="overflow-hidden rounded-xl border border-border bg-card"><table className="w-full text-left text-sm"><thead className="bg-muted text-xs text-muted-foreground"><tr><th className="px-4 py-3 font-medium">Tipo</th><th className="px-4 py-3 font-medium">Uso típico</th></tr></thead><tbody>{tipos.map(([tipo, uso]) => <tr key={tipo} className="border-t border-border"><td className="px-4 py-3 font-mono text-xs text-primary">{tipo}</td><td className="px-4 py-3 text-muted-foreground">{uso}</td></tr>)}</tbody></table></div>
            </div>
          </TabsContent>

          <TabsContent value="instalar" className="flex flex-col gap-6">
            <TituloSeccion>Instálala en tu repo</TituloSeccion>
            <p className="leading-relaxed text-muted-foreground">Hay dos caminos según tu perfil. Desarrollo instala desde CencoSkills; diseño, producto y otros roles pueden usar la descarga directa del paquete.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Perfil desarrollador</h3><p className="mt-1 text-sm text-muted-foreground">Requiere terminal, npm y accesos corporativos.</p><code className="mt-4 block rounded-lg bg-neutral-950 p-3 font-mono text-xs text-white">npx cenco-skills add --skill deck-gen</code></section>
              <section className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Diseño, producto y otros roles</h3><p className="mt-1 text-sm text-muted-foreground">Descarga el .zip, descomprime la carpeta y sincronízala donde uses tus skills.</p><p className="mt-4 text-xs text-muted-foreground">La descarga directa se conectará cuando migremos el endpoint de assets.</p></section>
            </div>
            <div className="rounded-xl border border-border bg-card p-4"><h3 className="font-medium text-foreground">Requisitos previos</h3><div className="mt-4"><ListaChequeo items={['Claude Code instalado.', 'Acceso a la carpeta de skills de Claude Code (~/.claude/skills/).']} /></div></div>
          </TabsContent>

          <TabsContent value="uso" className="flex flex-col gap-8">
            <div className="flex flex-col gap-4"><TituloSeccion>Ejemplos de uso</TituloSeccion>{ejemplos.map((ejemplo) => <button key={ejemplo} type="button" onClick={() => abrirChat(ejemplo)} className="rounded-xl border border-border bg-card p-4 text-left text-sm leading-relaxed text-foreground transition-colors hover:border-primary/25 hover:bg-primary/5">{ejemplo}</button>)}</div>
            <div className="flex flex-col gap-4"><TituloSeccion>Cómo construye por dentro</TituloSeccion><ol className="flex flex-col gap-3">{proceso.map((paso, index) => <li key={paso} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">{index + 1}</span>{paso}</li>)}</ol></div>
          </TabsContent>

          <TabsContent value="archivos" className="flex flex-col gap-6"><TituloSeccion>Archivos del skill</TituloSeccion><pre className="overflow-x-auto rounded-xl border border-border bg-neutral-950 p-4 font-mono text-xs leading-relaxed text-white">skills/deck-gen/{'\n'}├── SKILL.md{'\n'}├── references/{'\n'}├── scripts/{'\n'}└── themes/</pre><p className="leading-relaxed text-muted-foreground">Claude Code detecta los skills por la presencia de <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">SKILL.md</code> en la carpeta del skill.</p><div className="rounded-xl border border-border bg-card p-4"><TituloSeccion>Notas para mejores resultados</TituloSeccion><div className="mt-4"><ListaChequeo items={['Aprueba el blueprint antes de construir para evitar rehacer slides.', 'Pega el contenido completo —ideas, texto y datos— en una sola entrega.', 'Indica audiencia y necesidad de edición en PowerPoint para calibrar el resultado.']} /></div></div></TabsContent>
        </Tabs>
        <aside className="flex flex-col gap-6 max-md:order-first"><PanelResponsable responsable={activo.responsable} /><div className="rounded-xl border border-border bg-card p-4"><p className="text-xs font-medium text-muted-foreground">Formato de salida</p><p className="mt-2 text-sm text-foreground">HTML · PPTX · PDF</p></div></aside>
      </div>
    </div>
  )
}
