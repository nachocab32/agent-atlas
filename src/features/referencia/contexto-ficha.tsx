import { createContext, useContext } from 'react'

export type ContextoFicha = 'pagina' | 'panel'

export const ContextoFichaContext = createContext<ContextoFicha>('pagina')

export function useContextoFicha() {
  return useContext(ContextoFichaContext)
}
