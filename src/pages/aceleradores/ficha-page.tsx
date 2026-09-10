import { useParams } from 'react-router'
import { activos } from '@/data/catalogo'
import { FichaApiTemplate } from '@/features/ficha-api/components/ficha-api-template'
import { FichaGenericaActivo } from '@/features/ficha/components/ficha-generica-activo'
import { DeckGenFicha } from '@/features/ficha/components/deck-gen-ficha'
import { FichaSkillGuia } from '@/features/ficha/components/ficha-skill-guia'

export function FichaPage() {
  const { id } = useParams()
  const activo = activos.find((item) => item.id === id)

  if (!activo) {
    return (
      <div className="flex-1 px-6 py-8">
        <p className="text-sm text-muted-foreground">No encontramos este activo en el catálogo.</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      {activo.tipo === 'api' ? <FichaApiTemplate activo={activo} /> : activo.id === 'deck-gen' ? <DeckGenFicha activo={activo} /> : activo.tipo === 'skill' ? <FichaSkillGuia activo={activo} /> : <FichaGenericaActivo activo={activo} />}
    </div>
  )
}
