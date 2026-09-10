interface RotuloEtapaProps {
  numero: number
  nombre: string
  intencion: string
}

export function RotuloEtapa({ numero, nombre, intencion }: RotuloEtapaProps) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">Etapa {numero} de 4</p>
      <h1 className="mt-0.5 text-xl font-semibold text-foreground">{nombre}</h1>
      <p className="mt-1 text-sm text-muted-foreground italic">{intencion}</p>
    </div>
  )
}
