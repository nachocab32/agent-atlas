import type { ReactNode } from 'react'
import { ContinuaCard } from '@/components/home/ContinuaCard'
import { ExplorarChips } from '@/components/home/ExplorarChips'
import { NovedadFila } from '@/components/home/NovedadFila'
import { SaludoHome } from '@/components/home/SaludoHome'
import { actividadesEnCurso, novedadesTemas, temasHome } from '@/data/home'
import { currentUser } from '@/data/sidebar'
import { useTranslation } from '@/i18n'

interface HomeRecurrenteProps {
  composer: ReactNode
}

export function HomeRecurrente({ composer }: HomeRecurrenteProps) {
  const { t } = useTranslation()

  return (
    <div className="flex-1 overflow-y-auto px-6">
      <div className="mx-auto flex min-h-full max-w-4xl flex-col justify-center gap-8 py-8">
        <div>
          <SaludoHome nombre={currentUser.firstName} />
          <div className="mt-4">{composer}</div>
        </div>

        <section>
          <h2 className="text-sm font-medium text-muted-foreground">{t('home.continua.titulo')}</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {actividadesEnCurso.map((actividad) => (
              <ContinuaCard key={actividad.id} {...actividad} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium text-muted-foreground">{t('home.novedades.titulo')}</h2>
          <div className="mt-3 flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {novedadesTemas.map((novedad) => (
              <NovedadFila key={novedad.id} novedad={novedad} />
            ))}
          </div>
        </section>

        <ExplorarChips temas={temasHome} />
      </div>
    </div>
  )
}
