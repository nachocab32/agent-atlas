interface PestanaContenidoProps {
  parrafos: string[]
}

export function PestanaContenido({ parrafos }: PestanaContenidoProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      {parrafos.map((parrafo) => (
        <p key={parrafo} className="leading-relaxed text-foreground">
          {parrafo}
        </p>
      ))}
    </div>
  )
}
