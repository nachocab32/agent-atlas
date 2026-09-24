import { useState, type ReactNode } from 'react'
import { AlertTriangle, ArrowUpRight, BookOpen, ChartNoAxesCombined, Check, CheckCircle2, Copy, GraduationCap, Info, KeyRound, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import { ReproductorVideo, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'
import type { BloqueContenido } from '@/types/documento'

interface CuerpoDocumentoProps {
  bloques: BloqueContenido[]
}

function inlineMarkdown(texto: string): ReactNode[] {
  return texto.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).filter(Boolean).map((trozo, indice) => {
    if (trozo.startsWith('**') && trozo.endsWith('**')) return <strong key={indice}>{trozo.slice(2, -2)}</strong>
    if (trozo.startsWith('`') && trozo.endsWith('`')) return <code key={indice} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">{trozo.slice(1, -1)}</code>
    if (trozo.startsWith('*') && trozo.endsWith('*')) return <em key={indice}>{trozo.slice(1, -1)}</em>
    return trozo
  })
}

function cells(linea: string) {
  return linea.trim().replace(/^\||\|$/g, '').split('|').map((celda) => celda.trim())
}

function ancla(texto: string) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function MarkdownTdc({ texto }: { texto: string }) {
  const lineas = texto.replace(/\r/g, '').split('\n')
  const bloques: ReactNode[] = []
  let indice = 0

  while (indice < lineas.length) {
    const linea = lineas[indice]
    if (!linea.trim() || /^---+$/.test(linea.trim())) { indice += 1; continue }
    const encabezado = linea.match(/^(#{1,6})\s+(.+)$/)
    if (encabezado) {
      const nivel = encabezado[1].length
      const contenido = inlineMarkdown(encabezado[2])
      const id = ancla(encabezado[2])
      bloques.push(nivel === 1
        ? <h2 key={indice} id={id} className="scroll-mt-6 text-3xl font-semibold tracking-tight">{contenido}</h2>
        : nivel === 2
          ? <h3 key={indice} id={id} className="scroll-mt-6 mt-8 text-xl font-semibold tracking-tight">{contenido}</h3>
          : <h4 key={indice} id={id} className="scroll-mt-6 mt-6 text-base font-semibold">{contenido}</h4>)
      indice += 1; continue
    }
    if (linea.startsWith('> ')) {
      const cita: string[] = []
      while (lineas[indice]?.startsWith('> ')) cita.push(lineas[indice++].slice(2))
      bloques.push(<aside key={indice} className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm leading-6 text-foreground">{inlineMarkdown(cita.join(' '))}</aside>)
      continue
    }
    if (linea.startsWith('```')) {
      const codigo: string[] = []; indice += 1
      while (indice < lineas.length && !lineas[indice].startsWith('```')) codigo.push(lineas[indice++])
      indice += 1
      bloques.push(<BloqueCodigo key={indice} codigo={codigo.join('\n')} />)
      continue
    }
    if (linea.startsWith('|') && /^\s*\|?\s*:?-{3,}/.test(lineas[indice + 1] ?? '')) {
      const encabezados = cells(linea); indice += 2; const filas: string[][] = []
      while (lineas[indice]?.startsWith('|')) filas.push(cells(lineas[indice++]))
      bloques.push(<div key={indice} className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-left text-sm"><thead className="bg-muted"><tr>{encabezados.map((celda, i) => <th key={i} className="px-4 py-2 font-medium">{inlineMarkdown(celda)}</th>)}</tr></thead><tbody>{filas.map((fila, i) => <tr key={i} className="border-t border-border">{fila.map((celda, j) => <td key={j} className="px-4 py-2 align-top leading-6">{inlineMarkdown(celda)}</td>)}</tr>)}</tbody></table></div>)
      continue
    }
    if (/^[-*]\s+/.test(linea) || /^\d+\.\s+/.test(linea)) {
      const ordenada = /^\d+\.\s+/.test(linea); const items: string[] = []
      while (indice < lineas.length && (ordenada ? /^\d+\.\s+/.test(lineas[indice]) : /^[-*]\s+/.test(lineas[indice]))) items.push(lineas[indice++].replace(ordenada ? /^\d+\.\s+/ : /^[-*]\s+/, ''))
      const Lista = ordenada ? 'ol' : 'ul'
      bloques.push(<Lista key={indice} className={ordenada ? 'list-decimal space-y-2 pl-5 leading-7' : 'list-disc space-y-2 pl-5 leading-7'}>{items.map((item, i) => <li key={i}>{inlineMarkdown(item)}</li>)}</Lista>)
      continue
    }
    const parrafo: string[] = []
    while (indice < lineas.length && lineas[indice].trim() && !/^(#{1,6})\s+|^> |^```|^\||^[-*]\s+|^\d+\.\s+|^---+$/.test(lineas[indice])) parrafo.push(lineas[indice++])
    bloques.push(<p key={indice} className="leading-7 text-foreground">{inlineMarkdown(parrafo.join(' '))}</p>)
  }
  return <div className="flex max-w-none flex-col gap-5">{bloques}</div>
}

// Los bloques usan color sólo cuando comunican una acción o atención concreta:
// azul para orientación, ámbar para advertencias y verde para reglas obligatorias.
const iconoDestacado = { informativo: Info, advertencia: AlertTriangle, regla: CheckCircle2, 'secreto-dummy': KeyRound }
const claseDestacado = {
  informativo: 'border-[#B8C7D9] bg-[#F5F8FC]',
  advertencia: 'border-amber-700/70 bg-amber-50',
  regla: 'border-accent bg-[var(--primary-dim)]',
  'secreto-dummy': 'border-[#F5D99A] bg-[#FFFCF4]',
}
const claseIconoDestacado = {
  informativo: 'text-[#46627F]',
  advertencia: 'text-amber-700',
  regla: 'text-accent',
  'secreto-dummy': 'text-amber-500',
}

const mecanismosInfraestructura = {
  api: {
    etiqueta: 'API CCP',
    detalle: 'consulta REST',
    lineas: ['La app pide la credencial por REST autenticándose con certificado de cliente.', 'Opción preferida fuera de Kubernetes.', 'Sin límite de aplicaciones.'],
  },
  integraciones: {
    etiqueta: 'Integraciones CCP',
    detalle: 'Herramienta con conector certificado',
    lineas: ['Plugins y conectores nativos para .NET, Java, PowerShell, Python y scripts.', 'Se configura una vez; la rotación queda transparente.'],
  },
  secretsHub: {
    etiqueta: 'Secrets Hub',
    detalle: 'Sistema que ya consume un vault cloud',
    lineas: ['Sincroniza el secreto desde PAM hacia AWS Secrets Manager, GCP Secret Manager, Azure Key Vault o HashiCorp Vault.', 'Límite de 200 sincronizaciones.'],
  },
  conjur: {
    etiqueta: 'Conjur',
    detalle: 'inyección nativa',
    lineas: ['Vault Agent Sidecar, Secrets Store CSI Driver, Summon o API directa.', 'GitHub Actions y GitLab CI.', 'Límite de 100 aplicaciones.'],
  },
} as const

function SelectorMecanismoCyberArk() {
  const [mecanismo, setMecanismo] = useState<keyof typeof mecanismosInfraestructura>('api')
  const detalle = mecanismosInfraestructura[mecanismo]

  return (
    <section aria-labelledby="formas-consumo" className="flex flex-col gap-4">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Credencial en bóveda PAM</p>
      <h3 id="formas-consumo" className="text-base font-semibold text-foreground">Formas de consumo</h3>
      <Tabs defaultValue="humano">
        <TabsList className="max-sm:w-full max-sm:overflow-x-auto">
          <TabsTrigger value="humano">Acceso humano <span className="text-xs font-normal text-muted-foreground">Ver secreto o contraseña</span></TabsTrigger>
          <TabsTrigger value="infraestructura">Infraestructura o desarrollo <span className="text-xs font-normal text-muted-foreground">Dónde o cómo</span></TabsTrigger>
        </TabsList>

        <TabsContent value="humano" className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-semibold text-foreground">Acceso humano en PVWA <span className="font-normal text-muted-foreground">· Una persona</span></p>
          <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-foreground">
            <li>Ver o copiar una contraseña de forma autorizada.</li>
            <li>Admite notificación previa a la rotación y requiere ticket para compliance.</li>
          </ul>
        </TabsContent>

        <TabsContent value="infraestructura" className="flex flex-col gap-4">
          <Tabs value={mecanismo} onValueChange={(valor) => setMecanismo(valor as keyof typeof mecanismosInfraestructura)}>
            <TabsList className="max-w-full max-sm:w-full max-sm:overflow-x-auto">
              {Object.entries(mecanismosInfraestructura).map(([id, opcion]) => (
                <TabsTrigger key={id} value={id}>{opcion.etiqueta}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={mecanismo} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-semibold text-foreground">{detalle.etiqueta} <span className="font-normal text-muted-foreground">· {detalle.detalle}</span></p>
              <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-foreground">
                {detalle.lineas.map((linea) => <li key={linea}>{linea}</li>)}
              </ul>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
      <p className="text-sm leading-relaxed text-muted-foreground">Si tu herramienta no figura en la lista de integraciones, consultá al equipo PAM antes de escribir código: el catálogo de conectores certificados de CyberArk es amplio y puede cubrir el caso. Con el mecanismo ya identificado, seguí con el <Link to="/guias/cyberark/runbook-agp" className="font-medium text-primary hover:underline">runbook de AGP</Link>.</p>
    </section>
  )
}

function BotonCopiar({ codigo }: { codigo: string }) {
  const [copiado, setCopiado] = useState(false)

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCopiado(true)
      window.setTimeout(() => setCopiado(false), 2000)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copiarCodigo}
        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-neutral-100 transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={copiado ? 'Código copiado' : 'Copiar código'}
      >
        {copiado ? <Check className="size-3.5 text-emerald-300" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        {copiado ? 'Copiado' : 'Copiar'}
      </button>
      <span className="sr-only" aria-live="polite">{copiado ? 'Código copiado al portapapeles.' : ''}</span>
    </>
  )
}

function BloqueCodigo({ codigo, integrado = false, mostrarCopia = true }: { codigo: string; integrado?: boolean; mostrarCopia?: boolean }) {
  return (
    <div className="relative">
      {mostrarCopia && <span className="absolute top-3 right-3"><BotonCopiar codigo={codigo} /></span>}
      <pre className={cn('overflow-x-auto bg-neutral-950 text-sm leading-relaxed text-neutral-100', integrado ? 'p-4' : 'rounded-xl border border-border pt-14 pr-4 pb-4 pl-4')}>
        <code className="font-mono">{codigo}</code>
      </pre>
    </div>
  )
}

function BloqueCodigoPorPlataforma({ titulo, variantes }: { titulo: string; variantes: { id: string; etiqueta: string; codigo: string }[] }) {
  const primeraVariante = variantes[0]
  const [varianteActiva, setVarianteActiva] = useState(primeraVariante?.id ?? '')
  if (!primeraVariante) return null
  const codigoActivo = variantes.find((variante) => variante.id === varianteActiva)?.codigo ?? primeraVariante.codigo

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-neutral-950">
      <Tabs value={varianteActiva} onValueChange={setVarianteActiva}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-700 px-4 py-2">
          <h4 className="text-sm font-medium text-neutral-100">{titulo}</h4>
          <div className="flex items-center gap-2">
            <TabsList className="rounded-none border-0 bg-transparent p-0">
              {variantes.map((variante) => (
                <TabsTrigger
                  key={variante.id}
                  value={variante.id}
                  className="rounded-none px-3 py-2 text-neutral-400 data-[state=active]:border-x-0 data-[state=active]:border-t-0 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  {variante.etiqueta}
                </TabsTrigger>
              ))}
            </TabsList>
            <BotonCopiar codigo={codigoActivo} />
          </div>
        </div>
        {variantes.map((variante) => (
          <TabsContent key={variante.id} value={variante.id} className="mt-0">
            <BloqueCodigo codigo={variante.codigo} integrado mostrarCopia={false} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

export function CuerpoDocumento({ bloques }: CuerpoDocumentoProps) {
  return (
    <div className="flex flex-col gap-5">
      {bloques.map((bloque, indice) => {
        switch (bloque.tipo) {
          case 'parrafo':
            return (
              <p key={indice} className="max-w-3xl leading-relaxed text-foreground">
                {bloque.texto}
              </p>
            )

          case 'markdown':
            return <MarkdownTdc key={indice} texto={bloque.texto} />

          case 'encabezado':
            return (
              <h3 key={indice} className="text-base font-semibold text-foreground">
                {bloque.texto}
              </h3>
            )

          case 'subtitulo-parrafo':
            return (
              <section key={indice} className={cn('flex flex-col gap-2', bloque.separacionSuperior && 'mt-3')}>
                <h3 className="text-base font-semibold text-foreground">{bloque.titulo}</h3>
                <p className="max-w-3xl leading-relaxed text-foreground">{bloque.texto}</p>
              </section>
            )

          case 'pasos':
            return (
              <ol key={indice} className="flex flex-col gap-3">
                {bloque.pasos.map((paso, pasoIndice) => (
                  <li key={`${paso.titulo ?? paso.texto}-${pasoIndice}`} className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-dim)] text-xs font-semibold text-accent">
                      {pasoIndice + 1}
                    </span>
                    <p className="max-w-3xl pt-0.5 text-sm leading-relaxed text-foreground">
                      {paso.titulo && <span className="font-semibold">{paso.titulo}: </span>}
                      {paso.texto}
                      {paso.enlace && (paso.enlace.href.startsWith('/') ? (
                        <Link to={paso.enlace.href} className="font-medium text-primary hover:underline">{paso.enlace.texto}</Link>
                      ) : (
                        <a href={paso.enlace.href} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">{paso.enlace.texto}</a>
                      ))}
                      {paso.textoPosterior}
                    </p>
                  </li>
                ))}
              </ol>
            )

          case 'codigo':
            return <BloqueCodigo key={indice} codigo={bloque.codigo} />

          case 'codigo-plataforma':
            return <BloqueCodigoPorPlataforma key={indice} titulo={bloque.titulo} variantes={bloque.variantes} />

          case 'video':
            return (
              <ReproductorVideo key={indice} titulo={bloque.titulo} duracion={bloque.duracion} vimeoId={bloque.vimeoId} />
            )

          case 'selector-mecanismo-cyberark':
            return <SelectorMecanismoCyberArk key={indice} />

          case 'enlaces':
            return (
              <div key={indice} className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                {bloque.enlaces.map((enlace) => {
                  const Icono = enlace.icono === 'defectdojo' ? ShieldCheck : enlace.icono === 'capsulas' ? GraduationCap : enlace.icono === 'avance' ? ChartNoAxesCombined : null
                  const contenido = (
                    <div className="flex min-w-0 items-start gap-3">
                      {Icono && <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icono className="size-4" aria-hidden="true" /></span>}
                      <span className="min-w-0">
                        <span className="block font-medium text-foreground">{enlace.titulo}</span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">{enlace.descripcion}</span>
                      </span>
                    </div>
                  )
                  return enlace.href ? (
                    <a key={enlace.titulo} href={enlace.href} target="_blank" rel="noreferrer" className="px-4 py-3 transition-colors hover:bg-accent/5">
                      {contenido}
                    </a>
                  ) : <div key={enlace.titulo} className="px-4 py-3">{contenido}</div>
                })}
              </div>
            )

          case 'enlace-destacado': {
            const IconoEnlace = bloque.variante === 'recurso' ? BookOpen : LockKeyhole
            return (
              <a
                key={indice}
                href={bloque.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 rounded-xl border border-primary/30 bg-primary/5 p-4 transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex min-w-0 gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <IconoEnlace className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1 block text-xs font-medium text-primary uppercase">{bloque.etiqueta}</span>
                    <span className="block font-semibold text-foreground">{bloque.titulo}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{bloque.descripcion}</span>
                  </span>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            )
          }

          case 'grilla-tarjetas':
            return (
              <div key={indice} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {bloque.tarjetas.map((tarjeta) => {
                  const contenido = <><p className="font-medium text-foreground">{tarjeta.titulo}</p><p className="mt-1 text-sm text-muted-foreground">{tarjeta.descripcion}</p></>
                  return tarjeta.href ? (
                    <Link
                      key={tarjeta.titulo}
                      to={tarjeta.href}
                      className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {contenido}
                    </Link>
                  ) : (
                    <div key={tarjeta.titulo} className="rounded-xl border border-border bg-card p-4">
                      {contenido}
                    </div>
                  )
                })}
              </div>
            )

          case 'tabla':
            return (
              <div key={indice} className="overflow-x-auto rounded-xl border border-border bg-card">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      {bloque.encabezados.map((encabezado) => (
                        <th key={encabezado} className="px-4 py-2 font-medium text-muted-foreground">
                          {encabezado}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bloque.filas.map((fila, filaIndice) => (
                      <tr key={filaIndice} className="border-b border-border last:border-0">
                        {fila.map((celda, celdaIndice) => (
                          <td key={celdaIndice} className={cn('px-4 py-2 text-foreground', celdaIndice === 0 && 'font-medium')}>
                            {celda || <span className="text-muted-foreground">—</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'destacado': {
            const Icono = iconoDestacado[bloque.variante]
            return (
              <div
                key={indice}
                className={cn('flex gap-3 rounded-xl border bg-card p-4', claseDestacado[bloque.variante])}
              >
                <Icono className={cn('size-5 shrink-0', claseIconoDestacado[bloque.variante])} />
                <p className="text-sm text-foreground">
                  {bloque.titulo && <span className="font-semibold">{bloque.titulo}: </span>}
                  {bloque.texto}
                </p>
              </div>
            )
          }

          default:
            return null
        }
      })}
    </div>
  )
}
