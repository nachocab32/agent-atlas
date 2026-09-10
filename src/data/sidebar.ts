import type { Conversation, CurrentUser } from './types'
import type { SidebarDestino } from '@/types/sidebar'

export const recentConversations: Conversation[] = [
  { id: '1', title: 'Conversar y entender', timeLabel: 'Ahora' },
  { id: '2', title: 'Observabilidad en mi app', timeLabel: 'Ayer' },
  { id: '3', title: 'Trazas lentas en pago', timeLabel: 'Ayer' },
  { id: '4', title: 'Alertas de alta latencia', timeLabel: '2 días' },
  { id: '5', title: 'Logs no visibles', timeLabel: '3 días' },
]

export const sidebarDestinos: SidebarDestino[] = [
  { id: 'cencoflow', label: 'CencoFlow', icono: 'cencoflow' },
  { id: 'aceleradores', label: 'Aceleradores', icono: 'aceleradores' },
  { id: 'guias', label: 'Guías', icono: 'guias' },
  { id: 'plataforma', label: 'Plataforma', icono: 'plataforma' },
]

export const currentUser: CurrentUser = {
  name: 'Ricardo, Samuel (E...',
  firstName: 'Samuel',
  provider: 'GitHub',
  email: 'samuel.ricardo+cenco...',
  initial: 'N',
}
