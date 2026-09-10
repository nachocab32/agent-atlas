import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/shared/lib/utils'

// Decorativo: no persiste la respuesta en ningún lado, solo refleja la
// selección visualmente. No hay backend al que enviarla.
export function WidgetFeedback() {
  const [seleccion, setSeleccion] = useState<'util' | 'no-util' | null>(null)

  return (
    <div className="flex items-center gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
      <span>¿Te sirvió esta página?</span>
      <button
        type="button"
        aria-label="Sí, me sirvió"
        onClick={() => setSeleccion('util')}
        className={cn(
          'rounded-full border border-border p-1.5 transition-colors hover:bg-muted',
          seleccion === 'util' && 'border-accent/30 bg-accent/5 text-accent',
        )}
      >
        <ThumbsUp className="size-4" />
      </button>
      <button
        type="button"
        aria-label="No me sirvió"
        onClick={() => setSeleccion('no-util')}
        className={cn(
          'rounded-full border border-border p-1.5 transition-colors hover:bg-muted',
          seleccion === 'no-util' && 'border-foreground/30 bg-muted text-foreground',
        )}
      >
        <ThumbsDown className="size-4" />
      </button>
    </div>
  )
}
