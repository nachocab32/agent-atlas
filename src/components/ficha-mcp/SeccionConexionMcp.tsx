import { LifeBuoy } from 'lucide-react'
import type { FichaMcpDetalle } from '@/types/ficha-mcp'
import { BloqueCodigo, Lista, Titulo } from './comunes'

function ListaPildoras({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          {item}
        </span>
      ))}
    </div>
  )
}

export function SeccionConexionMcp({ detalle, onProbarPregunta }: { detalle: FichaMcpDetalle; onProbarPregunta: (pregunta: string) => void }) {
  return (
    <>
      {detalle.antesDeEmpezar && (
        <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <h3 className="font-medium text-foreground">Antes de empezar</h3>
          <Lista items={detalle.antesDeEmpezar} icono="ninguno" />
        </section>
      )}

      {detalle.urlConexion && (
        <section className="flex flex-col gap-4">
          <Titulo>URL de conexión</Titulo>
          <BloqueCodigo codigo={detalle.urlConexion} />
        </section>
      )}

      <section className="flex flex-col gap-4">
        <Titulo>Configuración MCP</Titulo>
        <BloqueCodigo codigo={detalle.configCodigo} />
      </section>

      {detalle.configuraciones?.map((configuracion) => (
        <section key={configuracion.titulo} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
          <h3 className="font-medium text-foreground">{configuracion.titulo}</h3>
          <ol className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            {configuracion.pasos.map((paso, index) => <li key={paso}>{index + 1}. {paso}</li>)}
          </ol>
          {configuracion.codigo && <BloqueCodigo codigo={configuracion.codigo} />}
        </section>
      ))}

      {detalle.clientesSoportados && (
        <section className="flex flex-col gap-4">
          <Titulo>Clientes soportados</Titulo>
          <ListaPildoras items={detalle.clientesSoportados} />
        </section>
      )}

      {detalle.idesRecomendados && (
        <section className="flex flex-col gap-4">
          <Titulo>IDEs recomendados</Titulo>
          <ListaPildoras items={detalle.idesRecomendados} />
        </section>
      )}

      {detalle.pruebaVerificacion && (
        <section className="flex flex-col gap-4 rounded-xl border border-accent/30 bg-card p-4">
          <h3 className="font-medium text-foreground">Prueba de verificación</h3>
          <button
            type="button"
            onClick={() => onProbarPregunta(detalle.pruebaVerificacion?.pregunta ?? '')}
            className="rounded-lg border border-border bg-background p-3 text-left text-sm text-foreground transition-colors hover:border-primary/25 hover:bg-primary/5"
          >
            {detalle.pruebaVerificacion.pregunta}
          </button>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-accent">Conectado: </span>
            {detalle.pruebaVerificacion.exito}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-destructive">No conectado: </span>
            {detalle.pruebaVerificacion.falla}
          </p>
        </section>
      )}

      {detalle.troubleshooting && (
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <LifeBuoy className="size-4 text-muted-foreground" />
            <Titulo>Troubleshooting</Titulo>
          </div>
          <Lista items={detalle.troubleshooting} icono="ninguno" />
        </section>
      )}
    </>
  )
}
