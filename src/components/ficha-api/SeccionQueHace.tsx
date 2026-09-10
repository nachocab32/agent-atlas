interface SeccionQueHaceProps {
  titulo: string
  texto: string
}

export function SeccionQueHace({ titulo, texto }: SeccionQueHaceProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{texto}</p>
    </div>
  )
}
