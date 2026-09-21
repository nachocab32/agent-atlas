import { Input as InputPrimitive } from '@base-ui/react/input'
import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return <InputPrimitive type={type} data-slot="input" className={cn('h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 sm:h-9 sm:text-sm', className)} {...props} />
}
export { Input }
