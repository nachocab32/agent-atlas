// Contenido real de la macrofase Desarrollo (índice de etapas del portal), extraído el
// 8 de septiembre de 2026. A diferencia de Diseño, el portal no expone detalle de pasos
// para estas etapas — solo número, nombre y descripción corta. No se inventó ningún paso.
import type { EtapaSimple } from '@/types/viaje'

export const etapasDesarrollo: EtapaSimple[] = [
  {
    id: 'planificacion',
    numero: 1,
    nombre: 'Planificación',
    descripcion: 'Definición de tareas, dependencias, responsables y alcance del sprint.',
  },
  {
    id: 'desarrollo',
    numero: 2,
    nombre: 'Desarrollo',
    descripcion: 'Copilotos, generación de tests unitarios y revisión de código con IA.',
  },
  {
    id: 'mejora-continua',
    numero: 3,
    nombre: 'Mejora continua',
    descripcion: 'Detección de deuda técnica y PRs de refactorización automáticos.',
  },
]
