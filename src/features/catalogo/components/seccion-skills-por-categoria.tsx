import { EncabezadoCategoria } from '@/components/catalogo/EncabezadoCategoria'
import { GrillaActivos } from '@/components/catalogo/GrillaActivos'
import { useTranslation } from '@/i18n'
import type { Activo } from '@/types/catalogo'

// Orden real de las categorías de Skills en el portal (/skills).
const ORDEN_CATEGORIAS_SKILLS = ['Diseño & UX', 'Arq. & Backend', 'Observabilidad']

interface SeccionSkillsPorCategoriaProps {
  activos: Activo[]
  onSeleccionarActivo: (activo: Activo) => void
}

// `activos` viene ya filtrado por búsqueda/categoría y ordenado (ver activosOrdenados
// en useCatalogoFiltros) — esta sección agrupa entre tipos, por eso no usa activosFiltrados.
export function SeccionSkillsPorCategoria({ activos, onSeleccionarActivo }: SeccionSkillsPorCategoriaProps) {
  const { t } = useTranslation()

  const skillsPorCategoria = ORDEN_CATEGORIAS_SKILLS.map((categoria) => ({
    categoria,
    activos: activos.filter((activo) => activo.tipo === 'skill' && activo.categorias[0] === categoria),
  }))

  return (
    <section>
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {t('catalogo.todasLasSkills')}
      </h2>
      <div className="mt-3 flex flex-col gap-6">
        {skillsPorCategoria.map(
          (grupo) =>
            grupo.activos.length > 0 && (
              <div key={grupo.categoria}>
                <EncabezadoCategoria categoria={grupo.categoria} cantidad={grupo.activos.length} />
                <div className="mt-3">
                  <GrillaActivos activos={grupo.activos} onSeleccionarActivo={onSeleccionarActivo} />
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  )
}
