import { Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/shared/lib/utils'

interface BotonDescargaSkillProps {
  href: string
  nombreArchivo: string
  className?: string
}

export function BotonDescargaSkill({ href, nombreArchivo, className }: BotonDescargaSkillProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'self-start', className)}>
      <Download className="size-4" />
      Descargar {nombreArchivo}
    </a>
  )
}
