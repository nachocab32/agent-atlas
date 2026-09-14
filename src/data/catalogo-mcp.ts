// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
//
// equiposUsando, fechaIncorporacion y aplicaAlStack son 0 / false: el documento fuente no trae
// ese dato. version es '1.0' como placeholder — no es un dato real.
//
// El detalle propio de MCP Server (qué resuelve / qué no hace, config de conexión, tools,
// prueba de verificación, preguntas por audiencia, seguridad, troubleshooting) vive en
// src/data/ficha-mcp.ts, cargado por FichaMcpTemplate — no cabe en la forma genérica de Activo.
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
      'Refinamiento — Lee work items de Jira, enriquece la descripción, desglosa tareas, propone criterios y estima esfuerzo.',
      'Desarrollo — Accede al contexto completo del work item para que el asistente genere código, tests y documentación alineados.',
      'Validación — Contrasta el código generado contra los criterios de aceptación y actualiza el estado en Jira.',
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
      'Cuando le preguntas a tu asistente por una API interna o por qué template usar en una Toma de Control, responde con lo que sabe del mundo, no con lo que hay en Atlas. Este servidor le da acceso directo al contenido del portal, para que responda con lo publicado y el link exacto.',
    categorias: ['MCP Server', '20 tools', 'Autenticación: Red interna (VPN)', 'Beta'],
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
