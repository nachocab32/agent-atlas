import { useNavigate, useParams } from 'react-router'
import type { EtapaSimple } from '@/types/viaje'

// Navegación para macrofases sin desglose de pasos (hoy, Desarrollo): la etapa misma
// es la unidad seleccionable. Si no hay etapa en la URL, se muestra la primera.
export function useMacrofaseSimpleNavegacion(macrofase: string, etapas: EtapaSimple[]) {
  const { pasoId: etapaId } = useParams()
  const navigate = useNavigate()

  const indiceActivo = etapaId ? etapas.findIndex((etapa) => etapa.id === etapaId) : 0
  const etapaActiva = etapas[indiceActivo] ?? etapas[0]
  const siguiente = indiceActivo >= 0 && indiceActivo < etapas.length - 1 ? etapas[indiceActivo + 1] : undefined

  function irAEtapa(id: string) {
    navigate(`/cencoflow/${macrofase}/${id}`)
  }

  function irASiguiente() {
    if (siguiente) irAEtapa(siguiente.id)
  }

  return { etapaActiva, siguiente, irAEtapa, irASiguiente }
}
