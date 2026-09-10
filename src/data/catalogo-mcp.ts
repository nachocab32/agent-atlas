// Contenido extraído del portal real de Atlas (localhost:3000) el 8 de septiembre de 2026.
// Puede haber cambiado desde entonces; verificar contra el portal antes de una demo externa.
//
// equiposUsando, fechaIncorporacion y aplicaAlStack son 0 / false: el documento fuente no trae
// ese dato. version es '1.0' como placeholder — no es un dato real.
//
// [PENDIENTE DE DISEÑO] La ficha no tiene una sección dedicada a "tools expuestas" de un MCP
// server (el tipo Activo no la contempla y esta tarea no agrega componentes ni tipos nuevos).
// Como solución de datos, el conteo de tools y el tipo de autenticación se exponen como tags en
// `categorias` (visibles como pills en la pestaña Resumen), y las 3 tools reales de
// MCP AI-Workflow se listan en `contenido` en vez de quedar sin usar. Si se agrega una sección
// propia de "Tools" en una iteración de UI, migrar este contenido ahí.
import type { Activo } from '@/types/catalogo'

export const activosMcp: Activo[] = [
  {
    id: 'mcp-ai-workflow',
    nombre: 'MCP AI-Workflow',
    tipo: 'mcp-server',
    version: '1.0',
    descripcion:
      'Conecta tu IDE compatible (como Windsurf o Cursor) a este servidor para leer y actualizar work items de Jira. Aprovecha las capacidades agénticas de tu asistente para refinar, desarrollar y validar tareas directamente contra los criterios de aceptación.',
    descripcionLarga:
      'Conecta tu IDE compatible (como Windsurf o Cursor) a este servidor para leer y actualizar work items de Jira. Aprovecha las capacidades agénticas de tu asistente para refinar, desarrollar y validar tareas directamente contra los criterios de aceptación.',
    categorias: ['MCP Server', '3 tools', 'Autenticación: OAuth SSO'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: { nombre: 'COE DevEx', area: 'Centro de Excelencia - Developer Experience', iniciales: 'CD' },
    pruebalo: [],
    contenido: [
      'refine_work_item — Lee el work item de Jira y genera un plan de implementación con subtareas, criterios de aceptación y estimación de esfuerzo.',
      'execute_development_plan — Ejecuta el plan refinado desde el IDE: genera código, tests y documentación alineados al work item, con supervisión del dev.',
      'validate_against_criteria — Contrasta el código generado contra el plan refinado y los criterios de aceptación, y actualiza el estado del work item en Jira.',
    ],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'mcp-atlas-knowledge',
    nombre: 'MCP Atlas Knowledge',
    tipo: 'mcp-server',
    version: '1.0',
    descripcion:
      'Conecta tu asistente al catálogo de Atlas. Tu IA responde sobre las APIs, Skills, Agentes, Arquetipos, la documentación de Toma de Control y los tech radars con el contenido real del portal, en vez de aproximarlo.',
    descripcionLarga:
      'Conecta tu asistente al catálogo de Atlas. Tu IA responde sobre las APIs, Skills, Agentes, Arquetipos, la documentación de Toma de Control y los tech radars con el contenido real del portal, en vez de aproximarlo.',
    categorias: ['MCP Server', '20 tools', 'Autenticación: Red interna (VPN)'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: { nombre: 'COE DevEx', area: 'Centro de Excelencia - Developer Experience', iniciales: 'CD' },
    pruebalo: [],
    contenido: [
      'Conecta tu asistente al catálogo de Atlas. Tu IA responde sobre las APIs, Skills, Agentes, Arquetipos, la documentación de Toma de Control y los tech radars con el contenido real del portal, en vez de aproximarlo.',
    ],
    enCencoFlow: [],
    requisitos: [],
  },
]
