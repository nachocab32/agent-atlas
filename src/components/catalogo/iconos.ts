import {
  Activity,
  Banknote,
  Bot,
  Box,
  Briefcase,
  CalendarClock,
  Code2,
  LifeBuoy,
  ListTodo,
  Plug,
  PenTool,
  RefreshCw,
  Search,
  Server,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { TipoActivo } from '@/types/catalogo'

export const iconoPorTipo: Record<TipoActivo, LucideIcon> = {
  arquetipo: Box,
  skill: Sparkles,
  agente: Bot,
  'mcp-server': Server,
  api: Plug,
}

export const iconoPorEtapa: Record<string, LucideIcon> = {
  research: Search,
  'diseno-solucion': PenTool,
  backlog: ListTodo,
  planificacion: CalendarClock,
  desarrollo: Code2,
  'mejora-continua': RefreshCw,
  monitoreo: Activity,
  'revision-negocio': Briefcase,
  'revision-financiera': Banknote,
  'toma-control-soporte': LifeBuoy,
}
