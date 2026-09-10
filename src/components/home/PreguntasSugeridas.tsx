interface PreguntasSugeridasProps {
  preguntas: string[]
  onSeleccionar: (texto: string) => void
}

export function PreguntasSugeridas({ preguntas, onSeleccionar }: PreguntasSugeridasProps) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {preguntas.map((pregunta) => (
        <button
          key={pregunta}
          type="button"
          onClick={() => onSeleccionar(pregunta)}
          className="rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
        >
          {pregunta}
        </button>
      ))}
    </div>
  )
}
