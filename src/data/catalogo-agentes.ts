// Contenido extraído del portal real de Atlas (localhost:3000) el 8 de septiembre de 2026.
// Puede haber cambiado desde entonces; verificar contra el portal antes de una demo externa.
//
// equiposUsando, fechaIncorporacion y aplicaAlStack son 0 / false: el documento fuente no trae
// ese dato. version es '1.0' como placeholder por la misma razón — no es un dato real.
// pruebalo, contenido, enCencoFlow y requisitos quedan vacíos: el portal real solo trae
// nombre, descripción, tags y dueño para este agente.
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
      'Convierte requerimientos en lenguaje natural en Historias de Usuario, Issues y Tareas listas para Jira.',
    categorias: ['AI & Contenido', 'agent', 'core', 'atlassian'],
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
