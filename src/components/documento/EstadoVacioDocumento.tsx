import { FileText } from 'lucide-react'

interface EstadoVacioDocumentoProps {
  mensaje: string
}

export function EstadoVacioDocumento({ mensaje }: EstadoVacioDocumentoProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card px-6 py-24 text-center">
      <FileText className="size-5 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{mensaje}</p>
    </div>
  )
}
