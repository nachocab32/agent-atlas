import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/shared/lib/utils'

export const Tabs = TabsPrimitive.Root

export function TabsList({ className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-border bg-card p-1',
        className,
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, ...props }: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors',
        'data-[state=active]:border data-[state=active]:border-accent/30 data-[state=active]:bg-accent/5 data-[state=active]:text-accent',
        'data-[state=inactive]:hover:bg-primary/10 data-[state=inactive]:hover:text-primary',
        className,
      )}
      {...props}
    />
  )
}

export function TabsContent({ className, ...props }: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content className={cn('mt-6 focus-visible:outline-none', className)} {...props} />
  )
}
