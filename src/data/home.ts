// [PROVISORIO] Datos de ejemplo para el prototipo visual.
// No es documentación de Cencosud. Revisar antes de cualquier demo.
import type { ActividadContinua, NovedadTema, TemaHome } from '@/types/home'

export const temasHome: TemaHome[] = [
  {
    id: 'cencoflow',
    label: 'CencoFlow',
    icono: 'cencoflow',
    descripcion: 'Etapas, pilares y controles del ciclo de vida.',
    preguntaEjemplo: '¿Qué me piden para cerrar construcción?',
    preguntasSugeridas: [
      '¿Qué me piden para cerrar construcción?',
      '¿Cuáles son los controles de la etapa de diseño?',
      '¿Qué pilares aplican a un servicio nuevo?',
    ],
  },
  {
    id: 'toma-control',
    label: 'Toma de control',
    icono: 'toma-control',
    descripcion: 'Recibe un producto y documéntalo paso a paso.',
    preguntaEjemplo: 'Heredé un servicio sin documentación',
    preguntasSugeridas: [
      'Heredé un servicio sin documentación',
      '¿Por dónde empiezo a levantar el contexto?',
      '¿Qué información mínima necesito del equipo anterior?',
    ],
  },
  {
    id: 'runbooks',
    label: 'Runbooks',
    icono: 'runbooks',
    descripcion: 'Qué hacer cuando algo falla en producción.',
    preguntaEjemplo: '¿Cómo escalo un secreto expuesto?',
    preguntasSugeridas: [
      '¿Cómo escalo un secreto expuesto?',
      '¿Qué hago ante una caída de servicio crítico?',
      '¿A quién aviso primero en un incidente de datos?',
    ],
  },
  {
    id: 'skills',
    label: 'Skills',
    icono: 'skills',
    descripcion: 'Lo que ya está resuelto y puedes reutilizar.',
    preguntaEjemplo: '¿Qué aplica a mi stack?',
    preguntasSugeridas: [
      '¿Qué aplica a mi stack?',
      '¿Hay una skill para autenticación ya lista?',
      '¿Qué skills existen para observabilidad?',
    ],
  },
]

export const actividadesEnCurso: ActividadContinua[] = [
  {
    id: 'doc-1',
    tipo: 'documento',
    titulo: 'Ficha técnica — Servicio de pagos',
    contexto: 'Checkout Unificado',
    fechaRelativa: 'hace 2 días',
    seccionesCompletadas: 3,
    seccionesTotales: 9,
  },
  {
    id: 'conv-1',
    tipo: 'conversacion',
    titulo: 'Trazas lentas en pago',
    contexto: 'Quedó pendiente confirmar el activo de instrumentación recomendado.',
    fechaRelativa: 'ayer',
  },
]

export const novedadesTemas: NovedadTema[] = [
  {
    id: 'nov-1',
    tipo: 'contenido',
    nombre: 'Guía de Observabilidad',
    version: 'v2.3',
    cambio: 'Se agregó la sección de trazas distribuidas.',
    fechaRelativa: 'hace 2 días',
  },
  {
    id: 'nov-2',
    tipo: 'activo-nuevo',
    nombre: 'CencoFlow Tracing Kit',
    razonAplicabilidad: 'Aplica porque tu servicio ya expone spans OpenTelemetry.',
  },
]
