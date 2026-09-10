import { useNavigate, useParams } from 'react-router'
import { documentosGuia } from '@/data/documentos'

export function useDocumentoNavegacion() {
  const { documentoId, paginaId } = useParams()
  const navigate = useNavigate()

  const documento = documentosGuia.find((doc) => doc.id === documentoId)
  const paginas = documento?.paginas ?? []

  const indiceActivo = paginaId ? paginas.findIndex((p) => p.id === paginaId) : -1
  const pagina = indiceActivo >= 0 ? paginas[indiceActivo] : undefined
  const anterior = indiceActivo > 0 ? paginas[indiceActivo - 1] : undefined
  const siguiente = indiceActivo >= 0 && indiceActivo < paginas.length - 1 ? paginas[indiceActivo + 1] : undefined

  function irAPagina(id: string, opciones?: { reemplazar?: boolean }) {
    if (documentoId) navigate(`/guias/${documentoId}/${id}`, { replace: opciones?.reemplazar })
  }

  return { documento, paginas, pagina, anterior, siguiente, irAPagina }
}
