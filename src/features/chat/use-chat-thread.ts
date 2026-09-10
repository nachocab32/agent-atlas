import { useCallback, useRef, useState } from 'react'
import { responder } from '@/lib/respuestaSimulada'
import type { Turno } from './types'

export function useChatThread() {
  const [turnos, setTurnos] = useState<Turno[]>([])
  const [cargando, setCargando] = useState(false)
  const sesionRef = useRef(0)

  const enviar = useCallback(async (consulta: string) => {
    const texto = consulta.trim()
    if (!texto) return
    const sesion = sesionRef.current

    setTurnos((previos) => [...previos, { rol: 'usuario', texto }])
    setCargando(true)
    try {
      const bloques = await responder(texto)
      if (sesion !== sesionRef.current) return
      setTurnos((previos) => [...previos, { rol: 'asistente', estado: 'ok', bloques }])
    } catch {
      if (sesion !== sesionRef.current) return
      setTurnos((previos) => [...previos, { rol: 'asistente', estado: 'error', consultaOriginal: texto }])
    } finally {
      if (sesion === sesionRef.current) setCargando(false)
    }
  }, [])

  // Reintenta un turno fallido en el lugar donde está: el turno del usuario ya
  // quedó en el hilo, así que no vuelve a escribirse en el composer ni se duplica.
  const reintentar = useCallback(async (indice: number, consultaOriginal: string) => {
    const sesion = sesionRef.current
    setCargando(true)
    try {
      const bloques = await responder(consultaOriginal)
      if (sesion !== sesionRef.current) return
      setTurnos((previos) =>
        previos.map((turno, i) => (i === indice ? { rol: 'asistente', estado: 'ok', bloques } : turno)),
      )
    } catch {
      if (sesion !== sesionRef.current) return
      setTurnos((previos) =>
        previos.map((turno, i) => (i === indice ? { rol: 'asistente', estado: 'error', consultaOriginal } : turno)),
      )
    } finally {
      if (sesion === sesionRef.current) setCargando(false)
    }
  }, [])

  const nuevaConsulta = useCallback(() => {
    sesionRef.current += 1
    setTurnos([])
    setCargando(false)
  }, [])

  return { turnos, cargando, enviar, reintentar, nuevaConsulta }
}
