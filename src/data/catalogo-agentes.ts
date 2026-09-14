// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
//
// equiposUsando, fechaIncorporacion y aplicaAlStack son 0 / false: el documento fuente no trae
// ese dato. version es '1.0' como placeholder por la misma razón — no es un dato real.
// El detalle real (fricción, cómo activarlo, ejemplo de uso, recurso SharePoint, video) vive
// en src/data/ficha-agente.ts, cargado por FichaAgenteTemplate.
import type { Activo } from '@/types/catalogo'

export const activosAgentes: Activo[] = [
  {
    id: 'cenco-writer',
    nombre: 'Cenco Writer',
    tipo: 'agente',
    version: '1.0',
    descripcion:
      'Convierte requerimientos en lenguaje natural en Historias de Usuario, Issues y Tareas listas para Jira.',
    descripcionLarga:
      'Agente conversacional que convierte requerimientos en lenguaje natural en Historias de Usuario, Issues y Tareas listas para Jira, con contexto completo del proyecto, sin salir de Atlassian.',
    categorias: ['AI & Contenido', 'agent', 'core', 'atlassian', 'coe-utils'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: { nombre: 'CoE Utils', area: 'Centro de Excelencia - Utilidades', iniciales: 'CU' },
    pruebalo: [],
    contenido: [
      'Convierte requerimientos en lenguaje natural en Historias de Usuario, Issues y Tareas listas para Jira.',
    ],
    enCencoFlow: [],
    requisitos: [],
  },
]
