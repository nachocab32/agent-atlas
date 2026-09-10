import { TarjetaEntradaViaje } from './TarjetaEntradaViaje'

interface BloqueEntradaViajeProps {
  etiquetaBotonEtapa2: string
  cuerpoEtapa2: string
  antecedentes: string
  onComenzarEtapa2: () => void
  cuerpoEtapa1: string
  onComenzarEtapa1: () => void
}

export function BloqueEntradaViaje({
  etiquetaBotonEtapa2,
  cuerpoEtapa2,
  antecedentes,
  onComenzarEtapa2,
  cuerpoEtapa1,
  onComenzarEtapa1,
}: BloqueEntradaViajeProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TarjetaEntradaViaje
        rotulo="Ya sé qué necesito resolver"
        titulo="Tengo el AS-IS y el objetivo claro"
        cuerpo={cuerpoEtapa2}
        etiquetaBoton={etiquetaBotonEtapa2}
        variante="primary"
        pie="Empieza en Etapa 2 · Diseño de solución"
        notaExtra={antecedentes}
        onIniciar={onComenzarEtapa2}
      />
      <TarjetaEntradaViaje
        rotulo="Todavía no lo tengo claro"
        titulo="Tengo un problema y necesito entenderlo mejor"
        cuerpo={cuerpoEtapa1}
        etiquetaBoton="Empezar por Research"
        variante="outline"
        pie="Empieza en Etapa 1 · Research"
        onIniciar={onComenzarEtapa1}
      />
    </div>
  )
}
