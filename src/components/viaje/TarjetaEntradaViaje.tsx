import { Button } from '@/shared/ui'

interface TarjetaEntradaViajeProps {
  rotulo: string
  titulo: string
  cuerpo: string
  etiquetaBoton: string
  variante: 'primary' | 'outline'
  pie: string
  notaExtra?: string
  onIniciar: () => void
}

export function TarjetaEntradaViaje({
  rotulo,
  titulo,
  cuerpo,
  etiquetaBoton,
  variante,
  pie,
  notaExtra,
  onIniciar,
}: TarjetaEntradaViajeProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-muted p-6">
      <p className="text-xs font-medium text-muted-foreground">{rotulo}</p>
      <h2 className="mt-1 text-lg font-semibold text-foreground">{titulo}</h2>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{cuerpo}</p>
      <Button variant={variante} className="mt-4 self-start" onClick={onIniciar}>
        {etiquetaBoton} →
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">{pie}</p>
      {notaExtra && <p className="mt-2 text-xs text-muted-foreground">{notaExtra}</p>}
    </div>
  )
}
