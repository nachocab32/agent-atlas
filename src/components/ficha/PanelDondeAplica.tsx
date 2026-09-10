import { useTranslation } from '@/i18n'

interface EtapaResuelta {
  etapaNombre: string
  control: string
}

interface PanelDondeAplicaProps {
  etapas: EtapaResuelta[]
}

export function PanelDondeAplica({ etapas }: PanelDondeAplicaProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground">{t('ficha.dondeAplica')}</h3>
      <ul className="mt-3 flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
        {etapas.map((etapa) => (
          <li key={etapa.etapaNombre}>
            <p className="text-sm font-medium text-foreground">{etapa.etapaNombre}</p>
            <p className="text-xs text-muted-foreground">{etapa.control}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
