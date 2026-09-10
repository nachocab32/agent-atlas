import { useNavigate, useParams } from 'react-router'
import { etapasViaje } from '@/data/viaje'
import type { EtapaViaje, Paso } from '@/types/viaje'

const MACROFASE_DEFAULT = 'diseno'

interface PasoConEtapa {
  paso: Paso
  etapa: EtapaViaje
}

function aplanar(etapas: EtapaViaje[]): PasoConEtapa[] {
  return etapas.flatMap((etapa) => etapa.pasos.map((paso) => ({ paso, etapa })))
}

export function useViajeNavegacion() {
  const { macrofase = MACROFASE_DEFAULT, pasoId } = useParams()
  const navigate = useNavigate()
  const pasosFlat = aplanar(etapasViaje)

  const indiceActivo = pasoId ? pasosFlat.findIndex((item) => item.paso.id === pasoId) : -1
  const activo = indiceActivo >= 0 ? pasosFlat[indiceActivo] : undefined
  const siguiente = indiceActivo >= 0 && indiceActivo < pasosFlat.length - 1 ? pasosFlat[indiceActivo + 1] : undefined

  function irAPaso(id: string) {
    navigate(`/cencoflow/${macrofase}/${id}`)
  }

  function irASiguiente() {
    if (siguiente) irAPaso(siguiente.paso.id)
  }

  function saltarAEtapa2() {
    const primerPasoEtapa2 = etapasViaje.find((etapa) => etapa.numero === 2)?.pasos[0]
    if (primerPasoEtapa2) irAPaso(primerPasoEtapa2.id)
  }

  function saltarAEtapa1() {
    const primerPasoEtapa1 = etapasViaje.find((etapa) => etapa.numero === 1)?.pasos[0]
    if (primerPasoEtapa1) irAPaso(primerPasoEtapa1.id)
  }

  return {
    macrofase,
    pasoActivo: activo?.paso,
    etapaActiva: activo?.etapa,
    hayPasoActivo: Boolean(activo),
    siguiente: siguiente?.paso,
    irAPaso,
    irASiguiente,
    saltarAEtapa2,
    saltarAEtapa1,
  }
}
