import { Bot, FileText, Sparkles, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { TipoPaso } from '@/types/viaje'

export const iconoPorTipoPaso: Partial<Record<TipoPaso, LucideIcon>> = {
  artefacto: FileText,
  skill: Sparkles,
  agente: Bot,
  herramienta: Wrench,
}

export const labelPorTipoPaso: Partial<Record<TipoPaso, string>> = {
  artefacto: 'Artefacto',
  skill: 'Skill',
  agente: 'Agente',
  herramienta: 'Herramienta',
}

// Acento categórico por tipo. Herramienta queda fuera a propósito: es el tipo que no
// automatiza nada y se queda en gris neutro, no en un cuarto acento de color.
export const tintPorTipoPaso: Partial<Record<TipoPaso, { bg: string; text: string }>> = {
  artefacto: { bg: 'bg-teal-100', text: 'text-teal-600' },
  skill: { bg: 'bg-violet-100', text: 'text-violet-600' },
  agente: { bg: 'bg-amber-100', text: 'text-amber-600' },
}
