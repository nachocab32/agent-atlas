import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from '@/shared/ui'

export function PieFeedbackContenido() {
  return (
    <div className="flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
      <span>¿Te sirvió este contenido?</span>
      <Button variant="ghost" size="icon" aria-label="Sí, me sirvió">
        <ThumbsUp className="size-4" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="No me sirvió">
        <ThumbsDown className="size-4" />
      </Button>
    </div>
  )
}
