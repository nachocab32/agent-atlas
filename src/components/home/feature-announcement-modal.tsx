import { Sparkles, X } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type FeatureAnnouncement = {
  badge: string
  title: string
  description: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
  dismissLabel?: string
  imageUrl: string
  imageAlt: string
}

interface FeatureAnnouncementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  feature: FeatureAnnouncement
}

export function FeatureAnnouncementModal({ open, onOpenChange, feature }: FeatureAnnouncementModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="atlas-brand top-1/2 -translate-y-1/2 gap-0 overflow-hidden border-[var(--border)] bg-[var(--bg-surface)] p-0 sm:max-w-[880px]">
        <button type="button" onClick={() => onOpenChange(false)} aria-label="Cerrar" className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-main)] sm:h-8 sm:w-8">
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-[42%_1fr]">
          <div className="relative min-h-[280px] sm:min-h-[420px]">
            <img src={feature.imageUrl} alt={feature.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>

          <div className="flex flex-col gap-5 p-8">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--primary-dim)] px-3 py-1 text-xs font-semibold text-[var(--primary)]"><Sparkles className="h-3.5 w-3.5" />{feature.badge}</span>
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-medium text-[var(--text-main)]" style={{ fontFamily: 'var(--font-heading)' }}>{feature.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-[var(--text-muted)]">{feature.description}</DialogDescription>
            </div>
            <ul className="flex flex-col gap-3">
              {feature.bullets.map((bullet, i) => <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-main)]"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" /><span className="leading-relaxed">{bullet}</span></li>)}
            </ul>
            <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5">
              <button type="button" onClick={() => onOpenChange(false)} className="min-h-11 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-main)] sm:min-h-0">{feature.dismissLabel ?? 'Quizás después'}</button>
              <Button onClick={() => { window.location.href = feature.ctaHref }} className="bg-[var(--primary)] text-[var(--cta-fg)] hover:opacity-90">{feature.ctaLabel}</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const deckGenAnnouncement: FeatureAnnouncement = {
  badge: 'Nuevo',
  title: 'Deck Gen',
  description: 'Genera presentaciones on-brand a partir de tu contenido: primero arma un blueprint para que lo apruebes, y recién después construye el deck.',
  bullets: [
    'Cubre reportes, pitches, cursos y propuestas, con temas de marca intercambiables (Cencosud y DevExp).',
    'Propone un blueprint del deck antes de construirlo, para que lo apruebes primero.',
    'Aplica automáticamente tokens de marca, tipografía y espaciado del theme elegido.',
    'Exporta en HTML interactivo, PowerPoint editable o PDF, según el theme.',
  ],
  ctaLabel: 'Explorar Deck Gen',
  ctaHref: '/aceleradores/deck-gen',
  imageUrl: '/images/announcements/deck-gen.jpg',
  imageAlt: 'Vista previa de una presentación creada con Deck Gen',
}
