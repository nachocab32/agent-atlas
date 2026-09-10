// Contenido real del Runbook de Secret Scanning de Cencosud (v1.0, Julio 2026).
// Owner: Seguridad / COE Tomm. No modificar sin verificar contra la fuente.
import type { BloqueRespuesta } from '@/types/respuesta'

interface RespuestaMock {
  palabrasClave: string[]
  bloques: BloqueRespuesta[]
}

export const respuestasSecretScanningRemediacion: RespuestaMock[] = [
  {
    palabrasClave: ['dónde revoco', 'revocar una credencial', 'credencial expuesta'],
    bloques: [
      {
        componente: 'Parrafo',
        props: { texto: 'Dónde revocar depende del tipo de secreto expuesto.' },
      },
      {
        componente: 'Tabla',
        props: {
          columnas: ['Tipo de secreto', 'Dónde revocar'],
          etiquetaFilas: 'credenciales',
          filas: [
            ['AWS Access Key', 'AWS Console → IAM → Users → Security credentials → Deactivate'],
            ['Token de GitHub', 'GitHub → Settings → Developer settings → Personal access tokens → Delete'],
            ['Token de GitLab', 'GitLab → User Settings → Access tokens → Revoke'],
            ['Google API Key', 'Google Cloud Console → APIs & Services → Credentials → Delete'],
            ['Azure Client Secret', 'Azure Portal → App registrations → Certificates & secrets → Delete'],
            ['API key interna Cencosud', 'Contactar al equipo dueño del sistema para revocar'],
            ['Credencial de BD', 'Cambiar password en el motor de BD directamente'],
            ['Otro', 'Contactar a Seguridad si no sabes dónde revocar'],
          ],
          nota:
            'Después de revocar, genera una nueva credencial si el servicio la necesita y guárdala en el vault corporativo, nunca en el código.',
        },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            {
              titulo: 'Runbook · Respuesta a Alertas de Secret Scanning',
              id: 'ss-donderevocar',
              version: '1.0',
              seccion: 'Dónde revocar por tipo de secreto',
              href: '/guias/secret-scanning-runbook/plan-de-mitigacion',
            },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: { opciones: ['¿Cómo limpio el historial de git después de revocar?'] },
      },
    ],
  },
  {
    palabrasClave: ['limpio el historial', 'historial de git', 'limpiar el historial'],
    bloques: [
      {
        componente: 'Parrafo',
        props: {
          texto: 'El secreto debe retirarse del código y reemplazarse por una variable de entorno o el vault.',
        },
      },
      {
        componente: 'SinFuente',
        props: { tema: 'la limpieza del historial de git', responsable: 'Seguridad' },
      },
      {
        componente: 'Fuentes',
        props: {
          fuentes: [
            {
              titulo: 'Runbook · Respuesta a Alertas de Secret Scanning',
              id: 'ss-secretoreal-b2',
              version: '1.0',
              seccion: 'Qué hacer si el secreto es real',
              href: '/guias/secret-scanning-runbook/plan-de-mitigacion',
            },
          ],
        },
      },
      {
        componente: 'Sugerencias',
        props: { opciones: ['¿Dónde revoco una credencial expuesta?'] },
      },
    ],
  },
]
