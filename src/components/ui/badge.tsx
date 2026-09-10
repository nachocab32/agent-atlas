import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'

const badgeVariants = cva('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium transition-colors', {
  variants: {
    variant: {
      default: 'border-primary bg-primary text-primary-foreground', secondary: 'border-transparent bg-secondary text-secondary-foreground',
      outline: 'border-border bg-background text-foreground', accent: 'border-transparent bg-accent text-accent-foreground',
      destructive: 'border-transparent bg-destructive text-destructive-foreground',
    },
  }, defaultVariants: { variant: 'default' },
})

function Badge({ className, variant, ...props }: ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
