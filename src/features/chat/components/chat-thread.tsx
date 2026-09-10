import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/ui'
import type { Turno } from '../types'
import { ChatLoadingIndicator } from './chat-loading-indicator'
import { TurnoAsistente } from './turno-asistente'
import { TurnoError } from './turno-error'
import { TurnoUsuario } from './turno-usuario'

interface ChatThreadProps {
  turnos: Turno[]
  cargando: boolean
  onSugerencia: (texto: string) => void
  onReintentar: (indice: number, consultaOriginal: string) => void
}

export function ChatThread({ turnos, cargando, onSugerencia, onReintentar }: ChatThreadProps) {
  const finRef = useRef<HTMLDivElement>(null)
  const contenedorRef = useRef<HTMLDivElement>(null)
  const estaCercaDelFinalRef = useRef(true)
  const [mostrarIrAlFinal, setMostrarIrAlFinal] = useState(false)

  function actualizarPosicion() {
    const contenedor = contenedorRef.current
    if (!contenedor) return
    const distanciaAlFinal = contenedor.scrollHeight - contenedor.scrollTop - contenedor.clientHeight
    const estaCercaDelFinal = distanciaAlFinal < 112
    estaCercaDelFinalRef.current = estaCercaDelFinal
    setMostrarIrAlFinal(!estaCercaDelFinal)
  }

  function irAlFinal() {
    finRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  useEffect(() => {
    if (estaCercaDelFinalRef.current) irAlFinal()
  }, [turnos, cargando])

  if (turnos.length === 0) {
    return <div className="flex-1" />
  }

  return (
    <div className="relative min-h-0 flex-1">
      <div ref={contenedorRef} onScroll={actualizarPosicion} className="size-full overflow-y-auto px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 py-5">
          {turnos.map((turno, index) => {
            if (turno.rol === 'usuario') return <TurnoUsuario key={index} texto={turno.texto} />
            if (turno.estado === 'error') {
              return (
                <TurnoError
                  key={index}
                  onReintentar={() => onReintentar(index, turno.consultaOriginal)}
                />
              )
            }
            return <TurnoAsistente key={index} bloques={turno.bloques} onSugerencia={onSugerencia} />
          })}
          {cargando && <ChatLoadingIndicator />}
          <div ref={finRef} />
        </div>
      </div>
      {mostrarIrAlFinal && (
        <div className="pointer-events-none absolute right-6 bottom-4 left-6 mx-auto flex max-w-3xl justify-end">
          <Button
            variant="outline"
            className="pointer-events-auto h-9 gap-1.5 bg-card px-3 text-xs shadow-[var(--elevation-1)]"
            onClick={irAlFinal}
          >
            Ir al final
            <ArrowDown className="size-3.5" aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  )
}
