import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const sourceRoot = '/Users/ignaciocabrera/Documents/CencoGit/atlas-site/src/content/tdc-pages'
const outputFile = 'src/data/toma-de-control-original.ts'
const docBase = '/guias/toma-de-control-propuesta'

const sectionLabel = {
  entender: 'Entender la TDC',
  guias: 'Guías',
  templates: 'Biblioteca de templates',
  referencia: 'Manual de referencia',
}
const pilarOrden = { entender: 0, guias: 1, templates: 2, referencia: 3 }

const templateGrupoLabel = {
  'identificacion-gobierno': 'Identificación, gobierno y criticidad',
  arquitectura: 'Arquitectura',
  'soporte-escalamiento': 'Soporte y escalamiento',
}
const templateGrupoOrden = { 'identificacion-gobierno': 0, arquitectura: 1, 'soporte-escalamiento': 2 }

// Slugs cubiertos por el callout "Cada artefacto que menciona esta guía
// tiene su propio estándar en la Biblioteca de templates" en el portal original.
const GUIDE_SLUGS = new Set([
  'guia-tdc-anticipada',
  'guia-auditoria-equipos-existentes',
  'guia-arquitectura-anteproyecto-proyecto',
  'flujo-arquitectura-anteproyecto-adm',
])

// Letras de Sección del Manual enlazadas desde manual-seccion-por-seccion en
// el portal original (deliberadamente sin la C — así está en la fuente).
const MANUAL_LETTERS = [
  { letra: 'A', etiqueta: 'A — Identificación, gobierno y criticidad' },
  { letra: 'B', etiqueta: 'B — Arquitectura e inventario técnico' },
  { letra: 'D', etiqueta: 'D — Observabilidad y operación' },
  { letra: 'E', etiqueta: 'E — Respaldo, recuperación y continuidad' },
  { letra: 'F', etiqueta: 'F — Soporte y escalamiento' },
  { letra: 'G', etiqueta: 'G — Excepciones y riesgos aceptados' },
]

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map(async (entry) => {
    const file = join(directory, entry.name)
    return entry.isDirectory() ? filesIn(file) : [file]
  }))
  return nested.flat().filter((file) => file.endsWith('.json'))
}

function metaTarjetas(source) {
  const campos = [
    ['Sección del Manual', source.seccionManual],
    ['Nace en', source.naceEn],
    ['Se consolida en', source.consolidaEn],
    ['Coordinación', source.coordinacion],
  ].filter(([, valor]) => valor && valor.trim().length > 0)
  if (campos.length === 0) return null
  return { tipo: 'grilla-tarjetas', tarjetas: campos.map(([titulo, descripcion]) => ({ titulo, descripcion })) }
}

const files = await filesIn(sourceRoot)
const sources = await Promise.all(files.map(async (file) => {
  const source = JSON.parse(await readFile(file, 'utf8'))
  const [pilar] = relative(sourceRoot, file).split('/')
  return { ...source, pilar }
}))

const bySlug = new Map(sources.map((s) => [s.slug, s]))

// Zona 5 — "Templates que alimentan cada sección", calculada una vez desde
// los mismos datos que usaba el componente original (TdcCrossLinks).
const templatesPorSeccionManual = MANUAL_LETTERS
  .map(({ letra, etiqueta }) => ({
    etiqueta,
    templates: sources.filter((s) => s.pilar === 'templates' && (s.seccionManual ?? '').trim().toUpperCase().startsWith(letra)),
  }))
  .filter((s) => s.templates.length > 0)

function crossLinkBloques(source) {
  const bloques = []
  if (source.slug === 'cual-es-tu-situacion') {
    bloques.push({
      tipo: 'grilla-tarjetas',
      tarjetas: [
        { titulo: 'Producto en construcción →', descripcion: 'Guía de Toma de Control Anticipada', href: `${docBase}/guia-tdc-anticipada` },
        { titulo: 'Producto en producción →', descripcion: 'Guía de Auditoría', href: `${docBase}/guia-auditoria-equipos-existentes` },
      ],
    })
  }
  if (GUIDE_SLUGS.has(source.slug)) {
    bloques.push({
      tipo: 'grilla-tarjetas',
      tarjetas: [{
        titulo: 'Biblioteca de templates',
        descripcion: 'Cada artefacto que menciona esta guía tiene su propio estándar.',
        href: `${docBase}/biblioteca-templates`,
      }],
    })
  }
  if (source.slug === 'manual-seccion-por-seccion' && templatesPorSeccionManual.length > 0) {
    bloques.push({
      tipo: 'tabla',
      encabezados: ['Sección del Manual', 'Templates que la alimentan'],
      filas: templatesPorSeccionManual.map((s) => [s.etiqueta, s.templates.map((t) => t.title).join(' · ')]),
    })
  }
  return bloques
}

const records = sources.map((source) => {
  const cuerpo = []
  const meta = source.pilar === 'templates' ? metaTarjetas(source) : null
  if (meta) cuerpo.push(meta)
  cuerpo.push({ tipo: 'markdown', texto: source.bodyMarkdown })
  cuerpo.push(...crossLinkBloques(source))

  return {
    id: source.slug,
    titulo: source.title,
    bajada: source.description || undefined,
    seccion: sectionLabel[source.pilar],
    subseccion: source.pilar === 'templates' ? templateGrupoLabel[source.grupo] : undefined,
    orden: source.order,
    cuerpo,
    // Solo para ordenar el arreglo final — no viaja al archivo de salida.
    _sortA: pilarOrden[source.pilar],
    _sortB: source.pilar === 'templates' ? templateGrupoOrden[source.grupo] : 0,
    _sortC: source.order,
  }
})

// Página de aterrizaje de la Biblioteca de templates (equivalente a
// /docs/tdc/templates del portal original): un grupo por dominio, con las
// mismas tarjetas y descripciones.
const gruposTemplates = Object.entries(templateGrupoLabel).map(([id, label]) => ({
  label,
  orden: templateGrupoOrden[id],
  pages: sources.filter((s) => s.pilar === 'templates' && s.grupo === id).sort((a, b) => a.order - b.order),
}))
const bibliotecaTemplates = {
  id: 'biblioteca-templates',
  titulo: 'Biblioteca de templates',
  bajada: 'Estándares de documentación agrupados por dominio. El qué y el cómo de cada artefacto de la Toma de Control.',
  seccion: 'Biblioteca de templates',
  subseccion: undefined,
  orden: -1,
  cuerpo: gruposTemplates.flatMap((grupo) => [
    { tipo: 'encabezado', texto: `${grupo.label} · ${grupo.pages.length} templates` },
    {
      tipo: 'grilla-tarjetas',
      tarjetas: grupo.pages.map((p) => ({ titulo: p.title, descripcion: p.description, href: `${docBase}/${p.slug}` })),
    },
  ]),
  _sortA: pilarOrden.templates,
  _sortB: -1,
  _sortC: -1,
}

records.push(bibliotecaTemplates)
records.sort((a, b) => a._sortA - b._sortA || a._sortB - b._sortB || a._sortC - b._sortC)
for (const record of records) {
  delete record._sortA
  delete record._sortB
  delete record._sortC
}

const body = `// Generado desde atlas-site/src/content/tdc-pages. No editar a mano.\nimport type { PaginaDocumento } from '@/types/documento'\n\nexport const paginasTdcOriginal: PaginaDocumento[] = ${JSON.stringify(records, null, 2)}\n`
await writeFile(outputFile, body)
console.log(`Migradas ${records.length} páginas a ${outputFile}`)
