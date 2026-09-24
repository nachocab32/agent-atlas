import { useParams } from 'react-router'
import { activos } from '@/data/catalogo'
import { FichaApiTemplate } from '@/features/ficha-api/components/ficha-api-template'
import { FichaMcpTemplate } from '@/features/ficha-mcp/components/ficha-mcp-template'
import { FichaAgenteTemplate } from '@/features/ficha/components/ficha-agente-template'
import { FichaGenericaActivo } from '@/features/ficha/components/ficha-generica-activo'
import { FichaArquetipoTemplate } from '@/features/ficha/components/ficha-arquetipo-template'
import { DeckGenFicha } from '@/features/ficha/components/deck-gen-ficha'
import { FichaSkillGuia } from '@/features/ficha/components/ficha-skill-guia'

export function FichaPage() {
  const { id } = useParams()
  const activo = activos.find((item) => item.id === id)

  if (!activo) {
    return (
      <main id="contenido-principal" className="flex-1 px-6 py-8">
        <p className="text-sm text-muted-foreground">No encontramos este activo en el catálogo.</p>
      </main>
    )
  }

  return (
    <main id="contenido-principal" className="flex-1 overflow-y-auto px-6 py-8">
      {activo.tipo === 'api' ? (
        <FichaApiTemplate activo={activo} />
      ) : activo.id === 'deck-gen' ? (
        <DeckGenFicha activo={activo} />
      ) : activo.tipo === 'skill' ? (
        <FichaSkillGuia activo={activo} />
      ) : activo.tipo === 'agente' ? (
        <FichaAgenteTemplate activo={activo} />
      ) : activo.tipo === 'mcp-server' ? (
        <FichaMcpTemplate activo={activo} />
      ) : activo.tipo === 'arquetipo' ? (
        <FichaArquetipoTemplate activo={activo} />
      ) : (
        <FichaGenericaActivo activo={activo} />
      )}
    </main>
  )
}
