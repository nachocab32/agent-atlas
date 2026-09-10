import { useTranslation } from '@/i18n'

interface SaludoHomeProps {
  nombre: string
}

export function SaludoHome({ nombre }: SaludoHomeProps) {
  const { t } = useTranslation()

  return (
    <p className="text-xl font-semibold text-foreground">
      {t('home.saludoPrefijo')}, {nombre}.
    </p>
  )
}
