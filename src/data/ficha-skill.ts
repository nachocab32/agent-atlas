// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
//
// Detalle real dividido en dos archivos por equipo dueño (Design & UX / Enterprise
// Architecture-Engineering CoE) solo para mantenerlos bajo el límite de líneas por archivo.
import type { FichaSkillDetalle } from '@/types/ficha-skill'
import { fichaSkillDetalleArquitectura } from './ficha-skill-arquitectura'
import { fichaSkillDetalleDesign } from './ficha-skill-design'

export const fichaSkillDetallePorId: Record<string, FichaSkillDetalle> = {
  ...fichaSkillDetalleDesign,
  ...fichaSkillDetalleArquitectura,
}
