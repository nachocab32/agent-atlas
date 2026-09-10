import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from '@/shared/ui'

export function PieFeedbackFichaApi() {
  return (
    <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span>¿Te sirvió esta página?</span>
        <Button variant="ghost" size="icon" aria-label="Sí, me sirvió">
          <ThumbsUp className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="No me sirvió">
          <ThumbsDown className="size-4" />
        </Button>
      </div>
      <span>Generado desde OpenAPI · Editar en GitHub</span>
    </div>
  )
}
