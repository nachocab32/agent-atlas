import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Badge } from '@/shared/ui'
import { BreadcrumbDocumento } from './BreadcrumbDocumento'

const caminos = [
  {
    titulo: 'Producto nuevo, aún no en producción',
    descripcion: 'Sigue la Guía de Toma de Control Anticipada para llegar con el Manual prácticamente armado.',
    href: '/guias/toma-de-control-propuesta/guia-tdc-anticipada',
  },
  {
    titulo: 'Producto ya en producción',
    descripcion: 'Sigue la Guía de Auditoría de Equipos Existentes para consolidar tu documentación.',
    href: '/guias/toma-de-control-propuesta/guia-auditoria-equipos-existentes',
  },
]

const pilares = [
  { titulo: 'Entender la TDC', descripcion: 'El qué y el por qué del procedimiento.', detalle: '5 páginas', href: '/guias/toma-de-control-propuesta/que-es-la-tdc' },
  { titulo: 'Guías — cuándo y por qué', descripcion: 'Cuándo prepararte y qué camino seguir.', detalle: '1 router + 4 guías', href: '/guias/toma-de-control-propuesta/cual-es-tu-situacion' },
  { titulo: 'Biblioteca de templates', descripcion: 'El qué y el cómo de cada artefacto.', detalle: '15 en 3 grupos', href: '/guias/toma-de-control-propuesta/biblioteca-templates' },
  { titulo: 'Manual de referencia', descripcion: 'Consulta el detalle sección por sección.', detalle: '5 páginas', href: '/guias/toma-de-control-propuesta/manual-seccion-por-seccion' },
]

export function TomaDeControlPortada() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-3xl">
        <BreadcrumbDocumento
          segmentos={[
            { etiqueta: 'Guías', href: '/guias' },
            { etiqueta: 'Gobierno', href: '/guias?categoria=Gobierno' },
            { etiqueta: 'Toma de Control' },
          ]}
        />
        <h2 className="mt-6 text-[40px] font-semibold leading-[1.2] tracking-[-2px] text-foreground">Toma de Control</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          El procedimiento para entregar tu producto a Operaciones sin fricción: guías que responden el cuándo y el por qué, templates que responden el qué y el cómo.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="accent">● Etapa 10 · Cencoflow</Badge>
          <Badge variant="outline">Manual A–G</Badge>
          <Badge variant="outline">15 artefactos</Badge>
        </div>
      </header>

      <section aria-labelledby="situacion-titulo" className="border-t border-border pt-10">
        <h3 id="situacion-titulo" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">¿Cuál es tu situación?</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {caminos.map((camino) => (
            <Link key={camino.titulo} to={camino.href} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <h4 className="text-lg font-semibold text-foreground">{camino.titulo}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{camino.descripcion}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">Ver guía <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
        <Link to="/guias/toma-de-control-propuesta/cual-es-tu-situacion" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">¿No estás seguro cuál aplica? Te ayudamos a elegir <ArrowRight className="size-4" /></Link>
      </section>

      <section aria-labelledby="pilares-titulo">
        <h3 id="pilares-titulo" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Explora por pilar</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {pilares.map((pilar) => (
            <Link key={pilar.titulo} to={pilar.href} className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <h4 className="font-semibold text-foreground">{pilar.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pilar.descripcion}</p>
              <span className="mt-4 block text-sm font-medium text-accent">{pilar.detalle} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
