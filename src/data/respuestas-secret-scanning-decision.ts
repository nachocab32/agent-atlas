// Contenido real del Runbook de Secret Scanning de Cencosud (v1.0, Julio 2026).
// Owner: Seguridad / COE Tomm. No modificar sin verificar contra la fuente.
import type { BloqueRespuesta } from '@/types/respuesta'

interface RespuestaMock {
  palabrasClave: string[]
  bloques: BloqueRespuesta[]
}

export const respuestasSecretScanningDecision: RespuestaMock[] = [
  {
    palabrasClave: ['alerta de secret scanning', 'me llegó una alerta', 'alerta de secret'],
    bloques: [
      {
        componente: 'Parrafo',
        props: { texto: 'Antes de decidir cómo actuar, confirma si el valor detectado es un secreto real.' },
      },
      {
        componente: 'ArbolDecision',
        props: {
          pregunta: '¿El valor detectado es un secreto real?',
          ramas: [
            {
              condicion: 'El valor es un ejemplo, un test, un placeholder o un valor aleatorio sin privilegios.',
              resultado: 'Marcar la alerta como falso positivo en la plataforma y limpiar el historial si quedó commiteado.',
              urgencia: 'ninguna',
              accion: '¿Cómo sé si es un falso positivo?',
            },
            {
              condicion: 'Es una credencial real con acceso activo.',
              resultado: 'Revocar de inmediato, luego limpiar, luego cerrar.',
              urgencia: 'inmediata',
              accion: '¿Qué hago si el secreto es real?',
            },
          ],
          nota: 'Si tienes dudas, trátalo como secreto real.',
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            {
              titulo: 'Runbook · Respuesta a Alertas de Secret Scanning',
              id: 'ss-arbol',
              version: '1.0',
              seccion: '¿Es un secreto real?',
              href: '/guias/secret-scanning-runbook/plan-de-mitigacion',
            },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: {
          opciones: ['¿Cómo sé si es un falso positivo?', '¿Qué hago si el secreto es real?'],
        },
      },
    ],
  },
  {
    palabrasClave: ['falso positivo', 'cómo sé si es un falso positivo'],
    bloques: [
      {
        componente: 'Parrafo',
        props: { texto: 'Confirma al menos uno de estos criterios.' },
      },
      {
        componente: 'ListaEstado',
        props: {
          items: [
            {
              titulo: 'El valor es claramente un placeholder (example, dummy, test, XXXXXXXX)',
              estado: 'desconocido',
            },
            {
              titulo: 'Es un secreto de un entorno de desarrollo sin acceso a producción',
              estado: 'desconocido',
            },
            {
              titulo: 'Es un secreto ya expirado y verificaste que no tiene acceso activo',
              estado: 'desconocido',
            },
            {
              titulo: 'El patrón fue detectado por similitud pero no es una credencial real',
              estado: 'desconocido',
            },
          ],
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            {
              titulo: 'Runbook · Respuesta a Alertas de Secret Scanning',
              id: 'ss-falsopositivo',
              version: '1.0',
              seccion: 'Cómo confirmar un falso positivo',
              href: '/guias/secret-scanning-runbook/plan-de-mitigacion',
            },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: {
          opciones: ['¿Qué hago si el secreto es real?', '¿Dónde revoco una credencial expuesta?'],
        },
      },
    ],
  },
  {
    palabrasClave: ['secreto es real', 'qué hago con el secreto'],
    bloques: [
      {
        componente: 'Parrafo',
        props: { texto: 'El orden de los pasos no es opcional.' },
      },
      {
        componente: 'PasosSecuencia',
        props: {
          pasos: [
            {
              titulo: 'Revoca el secreto en el sistema de origen',
              detalle:
                'Mientras el secreto esté activo, el riesgo existe independientemente de si ya lo borraste del código.',
              urgente: true,
            },
            {
              titulo: 'Retira el secreto del código actual',
              detalle: 'Reemplaza el valor por una referencia a variable de entorno o al vault.',
            },
            {
              titulo: 'Cierra la alerta',
              detalle: 'Solo después de completar los pasos anteriores.',
            },
          ],
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            {
              titulo: 'Runbook · Respuesta a Alertas de Secret Scanning',
              id: 'ss-secretoreal',
              version: '1.0',
              seccion: 'Qué hacer si el secreto es real',
              href: '/guias/secret-scanning-runbook/plan-de-mitigacion',
            },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: {
          opciones: ['¿Dónde revoco una credencial expuesta?', '¿Cómo limpio el historial de git después de revocar?'],
        },
      },
    ],
  },
]
