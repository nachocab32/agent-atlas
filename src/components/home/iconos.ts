import { ClipboardCheck, GitBranch, LifeBuoy, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconoTemaHome } from '@/types/home'

export const iconoPorTema: Record<IconoTemaHome, LucideIcon> = {
  cencoflow: GitBranch,
  'toma-control': ClipboardCheck,
  runbooks: LifeBuoy,
  skills: Sparkles,
}
