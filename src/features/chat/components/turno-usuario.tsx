interface TurnoUsuarioProps {
  texto: string
}

export function TurnoUsuario({ texto }: TurnoUsuarioProps) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[75%] whitespace-pre-wrap rounded-2xl bg-muted px-4 py-2.5 text-sm text-foreground">
        {texto}
      </p>
    </div>
  )
}
