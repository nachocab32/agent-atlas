import { createContext, useContext } from 'react'

interface PopoverContextValue {
  abierto: boolean
  setAbierto: (valor: boolean) => void
}

export const PopoverContext = createContext<PopoverContextValue | null>(null)

export function usePopover() {
  const contexto = useContext(PopoverContext)
  if (!contexto) throw new Error('usePopover debe usarse dentro de <Popover>')
  return contexto
}
