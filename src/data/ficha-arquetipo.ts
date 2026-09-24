import type { Activo } from '@/types/catalogo'

interface ParametroArquetipo {
  nombre: string
  uso: string
}

interface FichaArquetipoDetalle {
  estructura: string[]
  parametros?: ParametroArquetipo[]
  arquitectura?: string[]
  runbook?: string[]
  codigoValidacion?: string
  troubleshooting?: string[]
  advertenciaFuente?: string
}

export const fichaArquetipoDetallePorId: Record<string, FichaArquetipoDetalle> = {
  'data-pipeline-infrastructure-as-code': {
    estructura: ['skeleton', 'skeleton-connector-snowflake (opcional)', 'Módulos iam, lambda-layer y stepfunctions.', 'Ambiente base en environments/staging/.'],
    parametros: [
      { nombre: 'solutionName', uso: 'Nombre base de recursos, IAM y auto-descubrimiento.' },
      { nombre: 'realm', uso: 'Realm de despliegue Pulsar.' },
      { nombre: 'owner', uso: 'Email del propietario para tags owner_email y created_by.' },
      { nombre: 'awsRegion / pais', uso: 'Región AWS y tag de país.' },
      { nombre: 'aplCode / ceco / tribe', uso: 'Tags de compliance, costos y equipo.' },
      { nombre: 'includeSnowflakeConnector', uso: 'Genera connectors/snowflake/, pero no lo activa.' },
    ],
    arquitectura: [
      'Crea IAM, State Machines, AppConfig, Secrets Manager, EventBridge schedulers y triggers S3, y Lambda Layer.',
      'Descubre bucket S3, DynamoDB, SQS, SNS, KMS y Lambdas de negocio por convención de nombres; se pueden usar *_name_override cuando no coincidan.',
      'Incluye flujos export/import en Step Functions. Los triggers y schedulers nacen deshabilitados por diseño.',
    ],
    runbook: [
      'Configura el backend S3 propio en provider.tf.',
      'Completa credenciales en un .auto.tfvars local sin versionar.',
      'Ejecuta validación local, luego terraform plan con credenciales AWS reales y finalmente terraform apply.',
      'Activa Snowflake y EventBridge sólo después de validar el pipeline end-to-end.',
    ],
    codigoValidacion: 'cd environments/staging\nterraform init -backend=false\nterraform validate',
    troubleshooting: [
      'Una referencia rota entre IAM y Step Functions requiere que ambos módulos usen exactamente solution_name.',
      '“No matching resource found” indica que la infraestructura base no coincide con la convención; usa *_name_override si corresponde.',
      'terraform plan requiere credenciales AWS y recursos base existentes; validate puede correr offline.',
    ],
  },
  'data-pipeline-lambda-deploy': {
    estructura: ['skeleton', 'lambdas/<nombre>/handler.py, lambda.json, build.sh, requirements.txt y test_handler.py.', '.github/workflows/deploy-lambdas.yml.', '.github/scripts/resolve-matrix.js.'],
    parametros: [
      { nombre: 'pipelineName', uso: 'Nombre base del repositorio y default de functionName.' },
      { nombre: 'realm', uso: 'Realm de despliegue Pulsar.' },
      { nombre: 'owner', uso: 'Responsable del pipeline.' },
      { nombre: 'awsRegion', uso: 'Región AWS de despliegue.' },
    ],
    arquitectura: [
      'detect-changes identifica las carpetas modificadas bajo lambdas/.',
      'resolve-matrix lee lambda.json y arma una matriz por función y ambiente.',
      'deploy delega el despliegue al workflow corporativo reutilizable deploy-to-lambda-zip.yml.',
      'handler.py expone handler.main(event, context); lambda.json declara runtime, región y functionName por ambiente.',
    ],
    runbook: [
      'Duplica lambdas/example-function/ y ajusta handler.py, lambda.json, dependencias y test.',
      'Mantén functionName como <pipelineName>-<sufijo>: IaC lo usa para encontrar la función.',
      'Configura ROL_ARN, S3_BUCKET, GitHub OIDC y el Lambda Layer antes del primer deploy.',
      'En Actions → Deploy Lambdas, usa force: true para todas o lambda: <nombre> para una sola función.',
    ],
    codigoValidacion: 'python3 -m py_compile lambdas/<nombre>/handler.py\npip install -r requirements-dev.txt\npytest lambdas/<nombre>/test_handler.py -v',
    troubleshooting: [
      'Una matrix vacía indica que no hubo cambios bajo lambdas/ o falta lambda.json.',
      'Si build.sh no encuentra wheels manylinux, revisa las dependencias de esa Lambda.',
      'Un error OIDC requiere revisar ROL_ARN y su trust policy de GitHub.',
      'Si IaC no encuentra la Lambda, revisa la convención de functionName.',
    ],
  },
  'middleware-service': {
    estructura: ['skeleton-adapter', 'skeleton-exposure', 'skeleton-mediation', 'skeleton-workspace'],
    advertenciaFuente: 'La ficha original enlaza un README genérico de GitLab, no una guía técnica validada del arquetipo. Se conserva el resumen publicado, pero no se replica ese contenido como documentación operativa.',
  },
}

export function esArquetipoConDocumentacion(activo: Activo) {
  return activo.tipo === 'arquetipo' && activo.id in fichaArquetipoDetallePorId
}
