// [PROVISORIO] Datos de ejemplo para el prototipo visual.
// No es documentación de Cencosud. Revisar antes de cualquier demo.
import type { BloqueRespuesta } from '@/types/respuesta'
import { respuestasSecretScanningDecision } from './respuestas-secret-scanning-decision'
import { respuestasSecretScanningRemediacion } from './respuestas-secret-scanning-remediacion'

interface RespuestaMock {
  palabrasClave: string[]
  bloques: BloqueRespuesta[]
}

const respuestasBase: RespuestaMock[] = [
  {
    palabrasClave: ['observabilidad', 'logs', 'trazas lentas', 'monitoreo', 'alertas'],
    bloques: [
      {
        componente: 'Parrafo',
        props: {
          texto:
            '[PROVISORIO] La observabilidad se apoya en tres pilares: logs centralizados, trazas distribuidas y métricas de servicio.',
        },
      },
      {
        componente: 'ListaEstado',
        props: {
          items: [
            {
              titulo: 'Logs centralizados',
              detalle: '[PROVISORIO] Agregación vía el stack de logging corporativo, retención de 30 días.',
              pilar: 'Logs',
              estado: 'cumplido',
            },
            {
              titulo: 'Trazas distribuidas',
              detalle: '[PROVISORIO] Instrumentación con OpenTelemetry en servicios críticos de pago.',
              pilar: 'Trazas',
              estado: 'cumplido',
            },
            {
              titulo: 'Métricas de servicio',
              detalle: '[PROVISORIO] Dashboards de latencia y error rate por equipo.',
              pilar: 'Métricas',
              estado: 'cumplido',
            },
          ],
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            { titulo: 'Guía de Observabilidad', id: 'obs-001', version: '1.0', seccion: 'Pilares' },
            { titulo: 'Runbook de Alertas', id: 'obs-002', version: '1.0', seccion: 'Configuración' },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: {
          opciones: ['¿Cómo configuro alertas de alta latencia?', '¿Qué activo cubre trazas distribuidas?'],
        },
      },
    ],
  },
  {
    palabrasClave: ['cencoflow', 'activo de trazas', 'tracing', 'trazas distribuidas'],
    bloques: [
      {
        componente: 'Parrafo',
        props: {
          texto: '[PROVISORIO] Para trazas distribuidas, el activo recomendado dentro de CencoFlow es el siguiente.',
        },
      },
      {
        componente: 'TarjetaActivo',
        props: {
          nombre: 'CencoFlow Tracing Kit',
          descripcion:
            '[PROVISORIO] Librería de instrumentación estándar para exponer spans OpenTelemetry desde cualquier servicio.',
          condicion:
            'Aplica si el servicio ya expone spans OpenTelemetry y está registrado en el catálogo de CencoFlow.',
          etapa: 'Disponible',
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [{ titulo: 'Catálogo CencoFlow', id: 'cf-014', version: '1.0', seccion: 'Activos' }],
        },
      },
    ],
  },
  // Activo real ya cargado en el catálogo (src/data/catalogo-skills.ts) — usado
  // aquí para el caso de TarjetaActivo, sin relación con secret scanning.
  {
    palabrasClave: ['logging corporativo', 'guía de logging', 'activo para el logging'],
    bloques: [
      {
        componente: 'Parrafo',
        props: { texto: 'Para logging corporativo, el activo disponible en el catálogo es el siguiente.' },
      },
      {
        componente: 'TarjetaActivo',
        props: {
          nombre: 'Logging Expert',
          descripcion: 'Guía de implementación del logging corporativo de Cencosud.',
          condicion: 'Aplica si tu servicio necesita alinear el formato y la retención de logs al estándar corporativo.',
          etapa: 'Disponible',
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            { titulo: 'Catálogo de Aceleradores', id: 'cat-logging-expert', version: '1.0', seccion: 'Skills · Logging Expert' },
          ],
        },
      },
    ],
  },
]

export const respuestasMock: RespuestaMock[] = [
  ...respuestasBase,
  ...respuestasSecretScanningDecision,
  ...respuestasSecretScanningRemediacion,
]
