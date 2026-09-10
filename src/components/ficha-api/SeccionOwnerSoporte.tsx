interface SeccionOwnerSoporteProps {
  titulo: string
  sigla: string
  equipo: string
  persona?: string
}

export function SeccionOwnerSoporte({ titulo, sigla, equipo, persona }: SeccionOwnerSoporteProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{titulo}</h2>
      <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-card p-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-medium text-white">
          {sigla}
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">{equipo}</p>
          {persona && <p className="text-xs text-muted-foreground">{persona}</p>}
        </div>
      </div>
    </div>
  )
}
