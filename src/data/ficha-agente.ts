// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { FichaAgenteDetalle } from '@/types/ficha-agente'

export const fichaAgenteDetallePorId: Record<string, FichaAgenteDetalle> = {
  'cenco-writer': {
    friccion: 'Historias de usuario mal definidas generan rework y ping-pong entre negocio y dev antes de empezar a codear.',
    comoActivarlo: [
      { numero: 1, texto: 'Verifica licencia Atlassian corporativa asignada.' },
      { numero: 2, texto: 'Ábrelo desde el ícono de IA en la barra lateral de Jira o Confluence.' },
      { numero: 3, texto: 'Describe el requerimiento en lenguaje natural.' },
    ],
    ejemploUso:
      'Quiero crear una Historia de Usuario para el proyecto B2B: como comprador quiero ver el estado de mi pedido en tiempo real. Genera criterios de aceptación y estima el esfuerzo.',
    recurso: {
      titulo: 'Guía rápida Cenco Writer',
      descripcion: 'Documento compartido en SharePoint, no un .zip descargable como las skills.',
      href: 'https://cnco.sharepoint.com/:b:/s/CoEEngineering/IQCcJB-sO8NxSpSFgSnl6W2eAUTs4ndNvVYc6S9_yLy6nlM?e=a5kGN9',
    },
    video: { duracion: '07:53', vimeoId: '1208846861' },
    hrefUso: 'https://home.atlassian.com/o/5988a12j-da4d-16d9-7a66-92jd69j82663/chat?rovoChatPathway=chat&rovoChatCloudId=e98853f7-4b51-4e56-972c-6060aab3fa3d&rovoChatAgentId=d9592c98-0cdd-4d7c-b495-1f8df1bf3cdf&cloudId=e98853f7-4b51-4e56-972c-6060aab3fa3d',
  },
}
