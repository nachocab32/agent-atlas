import { tipoActivoLabel } from '@/data/catalogo'
import { useTranslation } from '@/i18n'
import { TarjetaCatalogo } from '@/shared/ui'
import type { Activo } from '@/types/catalogo'
import { iconoPorTipo } from './iconos'

interface GrillaActivosProps {
  activos: Activo[]
  onSeleccionarActivo: (activo: Activo) => void
}

export function GrillaActivos({ activos, onSeleccionarActivo }: GrillaActivosProps) {
  const { t } = useTranslation()

  if (activos.length === 0) {
    return <p className="text-sm text-muted-foreground">{t('catalogo.sinResultados')}</p>
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {activos.map((activo) => (
        <TarjetaCatalogo
          key={activo.id}
          icono={iconoPorTipo[activo.tipo]}
          titulo={activo.nombre}
          descripcion={activo.descripcion}
          metadata={`${tipoActivoLabel[activo.tipo]} · ${activo.categorias[0] ?? activo.version} · ${activo.responsable.nombre}`}
          onSeleccionar={() => onSeleccionarActivo(activo)}
        />
      ))}
    </div>
  )
}
