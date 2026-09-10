interface EncabezadoCategoriaProps {
  categoria: string
  cantidad: number
}

export function EncabezadoCategoria({ categoria, cantidad }: EncabezadoCategoriaProps) {
  return (
    <div className="flex items-center gap-2 border-t border-border pt-4">
      <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{categoria}</h3>
      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{cantidad}</span>
    </div>
  )
}
