import { useEffect, useRef, useState } from 'react'

export const SECCIONES_FICHA_API = [
  { id: 'que-hace', label: 'Qué hace y cuándo usarla' },
  { id: 'endpoints', label: 'Endpoints' },
  { id: 'autenticacion', label: 'Autenticación' },
  { id: 'quickstart', label: 'Quickstart' },
  { id: 'errores', label: 'Errores comunes' },
  { id: 'owner', label: 'Owner y soporte' },
] as const

export type SeccionFichaApiId = (typeof SECCIONES_FICHA_API)[number]['id']

// Índice lateral con scroll-spy: distinto del índice del viaje de CencoFlow, que
// navega cambiando de ruta. Acá todas las secciones viven en la misma página.
export function useIndiceScrollSpy() {
  const [seccionActiva, setSeccionActiva] = useState<SeccionFichaApiId>(SECCIONES_FICHA_API[0].id)
  const refs = useRef<Partial<Record<SeccionFichaApiId, HTMLElement | null>>>({})

  function registrarSeccion(id: SeccionFichaApiId) {
    return (el: HTMLElement | null) => {
      refs.current[id] = el
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setSeccionActiva(visible.target.id as SeccionFichaApiId)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    for (const { id } of SECCIONES_FICHA_API) {
      const el = refs.current[id]
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  function irASeccion(id: SeccionFichaApiId) {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return { seccionActiva, registrarSeccion, irASeccion }
}
