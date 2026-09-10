import { X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ChipContextoProps {
  label: string
  onQuitar: () => void
}

export function ChipContexto({ label, onQuitar }: ChipContextoProps) {
  return (
    <Badge variant="accent" className="h-auto gap-2 px-3 py-1.5 text-sm !text-accent-foreground">
      {label}
      <button
        type="button"
        onClick={onQuitar}
        aria-label="Quitar"
        className="text-accent-foreground/70 transition-colors hover:text-accent-foreground"
      >
        <X className="size-3.5" />
      </button>
    </Badge>
  )
}
