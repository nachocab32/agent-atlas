// Configuración estructural del catálogo (etapas, labels, filtros, acción por tipo).
// No es contenido de ejemplo — no lleva marca [PROVISORIO] ni de contenido extraído.
// El arreglo de activos se compone de los 5 archivos por tipo (uno de ellos, Arquetipos,
// sigue en [PROVISORIO] porque el portal real no tiene esa ruta disponible).
import type { Activo, EtapaCencoFlow, TipoActivo } from '@/types/catalogo'
import { activosAgentes } from './catalogo-agentes'
import { activosApis, filtrosApiOpciones } from './catalogo-apis'
import { activosArquetipos } from './catalogo-arquetipos'
import { activosMcp } from './catalogo-mcp'
import { activosSkills } from './catalogo-skills'

export { filtrosApiOpciones }

export const activos: Activo[] = [
  ...activosArquetipos,
  ...activosSkills,
  ...activosAgentes,
  ...activosMcp,
  ...activosApis,
]

// Las 10 etapas son las reales de CencoFlow (ver etapas-de-cencoflow.md).
// Solo ITDS Board Composer tiene asociación de etapa confirmada por el portal real
// ("Cencoflow · Diseño de solución"). El resto de los activos no tiene etapa asignada
// todavía: no se inventó ninguna asociación.
export const etapasCencoFlow: EtapaCencoFlow[] = [
  { id: 'research', nombre: 'Research' },
  { id: 'diseno-solucion', nombre: 'Diseño de solución' },
  { id: 'backlog', nombre: 'Backlog' },
  { id: 'planificacion', nombre: 'Planificación' },
  { id: 'desarrollo', nombre: 'Desarrollo' },
  { id: 'mejora-continua', nombre: 'Mejora Continua' },
  { id: 'monitoreo', nombre: 'Monitoreo' },
  { id: 'revision-negocio', nombre: 'Revisión de negocio' },
  { id: 'revision-financiera', nombre: 'Revisión Financiera' },
  { id: 'toma-control-soporte', nombre: 'Toma de Control y Soporte' },
]

// Asociación confirmada activo → etapa de CencoFlow. Vive aparte de Activo.enCencoFlow
// (que requiere un texto de "control" real que no existe para este dato) para no forzar
// un campo con forma de dato real que en realidad estaría vacío.
export const activoEtapaConfirmada: Record<string, string> = {
  'itds-board-composer': 'diseno-solucion',
}

export const tipoActivoLabel: Record<TipoActivo, string> = {
  arquetipo: 'Arquetipo',
  skill: 'Skill',
  agente: 'Agente',
  'mcp-server': 'MCP server',
  api: 'API',
}

export const filtroTipoOpciones: { valor: 'todos' | TipoActivo; label: string }[] = [
  { valor: 'todos', label: 'Todos' },
  { valor: 'arquetipo', label: 'Arquetipos' },
  { valor: 'skill', label: 'Skills' },
  { valor: 'agente', label: 'Agentes' },
  { valor: 'mcp-server', label: 'MCP servers' },
  { valor: 'api', label: 'APIs' },
]

export const accionPrimariaPorTipo: Record<TipoActivo, { etiqueta: string; comportamiento: 'chat' | 'contenido' }> = {
  arquetipo: { etiqueta: 'Hablar de esto', comportamiento: 'chat' },
  skill: { etiqueta: 'Ver requisitos', comportamiento: 'contenido' },
  agente: { etiqueta: 'Usar', comportamiento: 'chat' },
  'mcp-server': { etiqueta: 'Ver cómo conectarlo', comportamiento: 'chat' },
  api: { etiqueta: 'Ver contrato', comportamiento: 'contenido' },
}
