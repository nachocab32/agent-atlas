import { AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import type { BloqueContenido } from '@/types/documento'

interface CuerpoDocumentoProps {
  bloques: BloqueContenido[]
}

// Las 3 variantes del bloque destacado no tienen tokens de color propios (ver
// reporte de reconocimiento): se distinguen por ícono y peso de borde, usando
// solo los tokens semánticos existentes (border, accent, foreground).
const iconoDestacado = { informativo: Info, advertencia: AlertTriangle, regla: CheckCircle2 }
const claseDestacado = {
  informativo: 'border-border',
  advertencia: 'border-foreground/30',
  regla: 'border-accent',
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

          case 'encabezado':
            return (
              <h3 key={indice} className="text-base font-semibold text-foreground">
                {bloque.texto}
              </h3>
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
                    </p>
                  </li>
                ))}
              </ol>
            )

          case 'codigo':
            return (
              <pre key={indice} className="overflow-x-auto rounded-xl border border-border bg-neutral-950 p-4 text-sm leading-relaxed text-neutral-100">
                <code className="font-mono">{bloque.codigo}</code>
              </pre>
            )

          case 'enlaces':
            return (
              <div key={indice} className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                {bloque.enlaces.map((enlace) => {
                  const contenido = <><span className="font-medium text-foreground">{enlace.titulo}</span><span className="mt-0.5 text-sm text-muted-foreground">{enlace.descripcion}</span></>
                  return enlace.href ? (
                    <a key={enlace.titulo} href={enlace.href} target="_blank" rel="noreferrer" className="px-4 py-3 transition-colors hover:bg-accent/5">
                      {contenido}
                    </a>
                  ) : <div key={enlace.titulo} className="px-4 py-3">{contenido}</div>
                })}
              </div>
            )

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
                          <td key={celdaIndice} className="px-4 py-2 text-foreground">
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
                <Icono className="size-5 shrink-0 text-foreground" />
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
