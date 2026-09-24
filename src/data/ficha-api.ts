// Contenido extraído del portal real de Atlas (localhost:3000) el 8 de septiembre de 2026.
// Solo "API de Consulta de Stock Easy" (id stock-online-easy-api) tiene detalle real
// extraído. Para las otras 24 APIs no hay endpoints, esquemas, quickstart ni errores
// reales — no se inventó ninguno; sus fichas muestran el estado vacío deliberado.
import type { FichaApiDetalle } from '@/types/ficha-api'

export const fichaApiDetallePorId: Record<string, FichaApiDetalle> = {
  'stock-online-easy-api': {
    quePara:
      'API para consultar stock de productos por centro (WERKS) y material (MATNR) utilizando un servicio OData SAP XSODATA.',
    endpoints: [
      {
        metodo: 'GET',
        ruta: '/sku',
        descripcion: 'Obtener stock de un SKU.',
        parametros: ['$format', '$filter'],
      },
    ],
    autenticacion: [
      { nombre: 'API key en header (apikey)', tipo: 'apiKey' },
      { nombre: 'HTTP basic', tipo: 'http' },
    ],
    credencialesTexto: 'El owner mdh gestiona los accesos. El ambiente MOCK no requiere credenciales.',
    quickstart: [
      { numero: 1, texto: 'Explora el contrato completo y prueba los requests en la pestaña OpenAPI.' },
      {
        numero: 2,
        texto:
          'Empieza contra el ambiente MOCK — no requiere credenciales y devuelve ejemplos del contrato.',
        codigo: 'https://qa-api.cencosud.cl/mdh/cl/v1/ventas/productos/stockonline',
      },
      { numero: 3, texto: '¿Dudas o acceso a QA/PROD? Contacta al owner.' },
    ],
    errores: [
      { codigo: '400', descripcion: 'Parámetros inválidos.' },
      { codigo: '401', descripcion: 'No autorizado.' },
      { codigo: '500', descripcion: 'Error interno del servidor.' },
    ],
    soporte: 'Luis Gyllen · luis.gyllen@cencosud.cl',
  },
}
