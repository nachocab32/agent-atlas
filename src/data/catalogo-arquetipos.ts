// Contenido oficial extraído de las fichas de Arquetipos de Atlas Platform
// el 9 de septiembre de 2026. No contiene datos provisionales.
import type { Activo } from '@/types/catalogo'

const architectureTeam = { nombre: 'Architecture Team', area: 'Arquitectura', iniciales: 'AR' }
const b2bIntegraciones = { nombre: 'B2B-Integraciones', area: 'Integraciones', iniciales: 'B2' }

export const activosArquetipos: Activo[] = [
  {
    id: 'data-pipeline-infrastructure-as-code', nombre: 'Data Pipeline — Infrastructure as Code', tipo: 'arquetipo', version: '—',
    descripcion: 'Genera un proyecto Terraform con infraestructura complementaria para un pipeline de datos: IAM, Step Functions, AppConfig, Secrets Manager, EventBridge, S3, SNS, KMS y Lambda Layer.',
    descripcionLarga: 'Genera la infraestructura que un pipeline de datos necesita más allá de sus recursos base. Descubre automáticamente la infraestructura base por convención de nombres durante el terraform apply e incluye un conector Snowflake opcional.',
    categorias: ['community', 'terraform', 'iac', 'step-functions', 'lambda', 'data-pipeline', 'appconfig'], equiposUsando: 0, aplicaAlStack: true, fechaIncorporacion: 'No publicada', fechaActualizacion: 'No publicada', responsable: architectureTeam,
    pruebalo: [{ id: 'p1', texto: 'Necesito generar la infraestructura Terraform para un pipeline de datos nuevo.' }],
    contenido: ['Estructura generada: skeleton y skeleton-connector-snowflake.', 'Crea módulos IAM, Lambda Layer, Step Functions, AppConfig, Secrets Manager, EventBridge schedulers y triggers S3.', 'Descubre la infraestructura base mediante data sources y mantiene la convención de nombres corporativa.', 'Incluye flujos export/import con Step Functions y un conector Snowflake opcional.'],
    enCencoFlow: [], requisitos: [
      { id: 'r1', descripcion: 'La infraestructura base debe existir y estar creada con Terraform directo.', cumplido: false },
      { id: 'r2', descripcion: 'Backend S3 de Terraform configurado en provider.tf.', cumplido: false },
      { id: 'r3', descripcion: 'Workflow corporativo de Terraform configurado en el repositorio.', cumplido: false },
    ],
  },
  {
    id: 'data-pipeline-lambda-deploy', nombre: 'Data Pipeline — Lambda Deploy', tipo: 'arquetipo', version: '—',
    descripcion: 'Genera un repositorio con N funciones Lambda Python y un pipeline CI/CD en GitHub Actions que detecta cambios y despliega selectivamente mediante el workflow corporativo reutilizable.',
    descripcionLarga: 'Incluye convención lambda.json, script de resolución de matriz y estructura de carpetas lista para desarrollar. El pipeline detecta cambios en lambdas/ y despliega sólo las funciones afectadas.',
    categorias: ['community', 'python', 'lambda', 'ci-cd', 'github-actions', 'data-pipeline'], equiposUsando: 0, aplicaAlStack: true, fechaIncorporacion: 'No publicada', fechaActualizacion: 'No publicada', responsable: architectureTeam,
    pruebalo: [{ id: 'p1', texto: 'Quiero desplegar varias Lambdas Python con CI/CD corporativo.' }],
    contenido: ['Estructura generada: skeleton.', 'Cada Lambda incluye handler.py, lambda.json, build.sh, requirements.txt y test_handler.py.', 'El workflow deploy-lambdas.yml detecta cambios y genera la matriz de despliegue.', 'Incluye convención de nombres, validación local y troubleshooting para permisos OIDC, dependencias y matriz vacía.'],
    enCencoFlow: [], requisitos: [
      { id: 'r1', descripcion: 'Variables de entorno GitHub: ROL_ARN y S3_BUCKET configuradas.', cumplido: false },
      { id: 'r2', descripcion: 'Rol IAM para GitHub OIDC creado.', cumplido: false },
      { id: 'r3', descripcion: 'Lambda Layer con dependencias compartidas publicada.', cumplido: false },
    ],
  },
  {
    id: 'middleware-service', nombre: 'Middleware Service', tipo: 'arquetipo', version: '—',
    descripcion: 'Estandariza la construcción de servicios de capa media generando un workspace con tres microservicios NestJS conectados vía NATS, patrones y observabilidad desde el inicio.',
    descripcionLarga: 'Genera Expose, Mediation y Adapter con contratos OpenAPI de central-schema para garantizar alineación con los contratos canónicos. Incluye autenticación M2M JWT, tracing distribuido OpenTelemetry, dashboards Grafana, Swagger UI, manejo de errores estandarizado, test unitarios y Docker Compose para desarrollo local.',
    categorias: ['community', 'typescript', 'nestjs', 'nats', 'opentelemetry', 'docker', 'jwt', 'openapi', 'rest-api'], equiposUsando: 0, aplicaAlStack: true, fechaIncorporacion: 'No publicada', fechaActualizacion: 'No publicada', responsable: b2bIntegraciones,
    pruebalo: [{ id: 'p1', texto: 'Necesito crear un servicio de capa media con NestJS, NATS y contratos OpenAPI.' }],
    contenido: ['Estructura generada: skeleton-adapter, skeleton-expose, skeleton-mediation y skeleton-workspace.', 'Tres microservicios NestJS conectados vía NATS: Expose, Mediation y Adapter.', 'Contratos central-schema, autenticación M2M JWT y trazabilidad OpenTelemetry.', 'Dashboards Grafana, Swagger UI, manejo estandarizado de errores, pruebas unitarias y Docker Compose local.'],
    enCencoFlow: [], requisitos: [
      { id: 'r1', descripcion: 'Acceso a los contratos canónicos de central-schema.', cumplido: false },
      { id: 'r2', descripcion: 'Configuración de autenticación M2M JWT para el ambiente correspondiente.', cumplido: false },
      { id: 'r3', descripcion: 'Entorno Docker para desarrollo local.', cumplido: false },
    ],
  },
]
