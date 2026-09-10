import type { ComponentType } from 'react'
import { ArbolDecision } from './ArbolDecision'
import { Fuentes } from './Fuentes'
import { ListaEstado } from './ListaEstado'
import { Parrafo } from './Parrafo'
import { PasosSecuencia } from './PasosSecuencia'
import { SinFuente } from './SinFuente'
import { Sugerencias } from './Sugerencias'
import { Tabla } from './Tabla'
import { TarjetaActivo } from './TarjetaActivo'

// Registro por nombre: la misma forma en la que CopilotKit resuelve un
// componente para renderizar la respuesta de una acción del agente.
export const registroRespuesta: Record<string, ComponentType<any>> = {
  Parrafo,
  ListaEstado,
  TarjetaActivo,
  SinFuente,
  Fuentes,
  Sugerencias,
  ArbolDecision,
  PasosSecuencia,
  Tabla,
}
