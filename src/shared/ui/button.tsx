import type { ComponentProps } from 'react'
import { Button as ShadcnButton } from '@/components/ui/button'

type AtlasVariant = 'primary' | 'accent' | 'outline' | 'ghost' | 'destructive' | 'link'
type AtlasSize = 'default' | 'icon'

interface ButtonProps extends Omit<ComponentProps<typeof ShadcnButton>, 'variant' | 'size'> {
  variant?: AtlasVariant
  size?: AtlasSize
}

// Compatibility adapter: pages keep Atlas vocabulary while the primitive is shadcn/ui.
export function Button({ variant = 'primary', size = 'default', className, ...props }: ButtonProps) {
  const shadcnVariant = variant === 'primary' ? 'default' : variant === 'accent' ? 'secondary' : variant
  return <ShadcnButton variant={shadcnVariant} size={size === 'icon' ? 'icon' : 'lg'} className={className} {...props} />
}
