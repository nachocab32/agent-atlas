// Contenido extraído en vivo el 8 de septiembre de 2026 desde /docs del portal real
// (ver contenido-apis-docs-extraido.md, secciones "Docs — Documentación" y
// "Toma de Control — estructura interna del documento").
//
// CyberArk y el Runbook de Secret Scanning no tienen páginas extraídas:
// `paginas` queda vacío para ambos.
//
// Los conteos de los filtros de Guías (Categoría, Madurez) no se hardcodean: se
// derivan de `categorias`/`madurez` en features/guias/use-guias-filtros.ts, tal como
// vienen del portal real.
import type { DocumentoGuia } from '@/types/documento'
import { tomaDeControlPropuesta } from './toma-de-control-propuesta'

const detalleSecretScanning = {
  version: '2026.1',
  actualizado: '31 agosto 2026',
  owner: 'Seguridad / Ingeniería de Plataforma',
  tags: ['security', 'runbook', 'secret-scanning', 'github', 'gitlab', 'compliance'],
}

const detalleCyberArk = {
  version: '2026.1',
  actualizado: 'Septiembre 2026',
  owner: 'Seguridad PAM / Plataforma',
  tags: ['security', 'secrets', 'cyberark', 'pam', 'ccp', 'mtls'],
}

export const documentosGuia: DocumentoGuia[] = [
  tomaDeControlPropuesta,
  {
    id: 'cyberark',
    titulo: 'Gestión de secretos con CyberArk',
    descripcion:
      'Qué es CyberArk, cuándo te corresponde usarlo, qué mecanismo de consumo aplica a tu caso, cómo pedir la credencial por AGP y cómo integrarla desde tu aplicación. Incluye el escenario CCP con mTLS con ejemplos en TypeScript, curl, Python y Java.',
    categorias: ['Seguridad', 'Plataforma'],
    owner: 'Seguridad',
    madurez: 'beta',
    tags: ['security', 'secrets', 'cyberark', 'pam', 'ccp', 'runbook'],
    detalle: detalleCyberArk,
    paginas: [
      {
        id: 'introduccion', titulo: '1. Qué es CyberArk y cuándo lo necesitás', bajada: 'La regla simple para decidir si un valor tuyo va a la bóveda.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'CyberArk es la plataforma corporativa donde Cencosud almacena, controla y rota información sensible: contraseñas, credenciales de bases de datos, API keys, llaves de cifrado, tokens y usuarios programáticos. La bóveda PAM es la fuente de verdad: la aplicación no guarda el valor, lo solicita.' },
          { tipo: 'parrafo', texto: 'Si tu aplicación necesita un valor secreto para funcionar y no debería estar visible en el código, repositorio o variables de entorno, es candidato a CyberArk.' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: 'Credenciales', descripcion: 'Contraseñas de sistemas, bases de datos o servidores.' },
            { titulo: 'Tokens y API keys', descripcion: 'Valores de acceso que no deben quedar expuestos.' },
            { titulo: 'Llaves de cifrado', descripcion: 'Material criptográfico y secretos de aplicación.' },
            { titulo: 'Usuarios programáticos', descripcion: 'Bots, servicios y tareas automatizadas.' },
          ] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Este documento orienta para identificar el caso e integrar el consumo. El procedimiento vinculante y el formulario vigente se descargan desde AGP.' },
        ],
      },
      {
        id: 'modelo', titulo: '2. Cómo se gestiona un secreto', bajada: 'Principios, responsabilidades por rol y el flujo de punta a punta.',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Principios' },
          { tipo: 'tabla', encabezados: ['Principio', 'Qué exige'], filas: [
            ['Centralización', 'Todo secreto se gestiona en la bóveda, no en repositorios, variables de entorno ni archivos de configuración.'],
            ['Acceso controlado', 'El acceso se restringe a quien lo necesita, con aprobación explícita y trazable.'],
            ['No exposición del valor', 'La aplicación consume el secreto sin que la persona desarrolladora conozca su valor, cuando es técnicamente posible.'],
            ['Rotación', 'Los secretos rotables se rotan según su criticidad para limitar la exposición.'],
            ['Trazabilidad', 'Creación, acceso, modificación y rotación quedan disponibles para auditoría.'],
          ] },
          { tipo: 'encabezado', texto: 'Responsabilidades' },
          { tipo: 'tabla', encabezados: ['Rol', 'Responsabilidad'], filas: [
            ['Desarrollo', 'Identifica secretos fuera de CyberArk, solicita su gestión y adapta la aplicación para consumirlos desde la bóveda.'],
            ['Seguridad (PAM)', 'Define reglas y excepciones; aprueba accesos, configura cuentas y valida el modelo.'],
            ['Operaciones / Plataforma', 'Apoya la configuración e integración técnica según el entorno.'],
          ] },
          { tipo: 'encabezado', texto: 'Flujo general' },
          { tipo: 'codigo', lenguaje: 'text', codigo: 'Necesidad → Identificación → Solicitud AGP + Formulario PAM → Bóveda → Permisos → Integración → Consumo → Rotación → Auditoría' },
        ],
      },
      {
        id: 'mecanismo', titulo: '3. Qué mecanismo de consumo te corresponde', bajada: 'CCP, Secrets Hub o Conjur: la pregunta es quién consume, no qué tipo de secreto es.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'El equipo PAM define el mecanismo final al revisar el formulario. Esta clasificación permite llegar con el caso ya identificado. CCP es el Central Credential Provider: entrega la contraseña a la aplicación cuando la necesita, sin persistirla en código.' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: 'Acceso humano en PVWA', descripcion: 'Una persona ve o copia una contraseña autorizada. Admite aviso previo a rotación y ticket de compliance.' },
            { titulo: 'API CCP', descripcion: 'La aplicación realiza el lookup REST directamente con su identidad mTLS.' },
            { titulo: 'Integraciones CCP', descripcion: 'Conectores existentes para .NET, Java, PowerShell o Python.' },
            { titulo: 'Infraestructura / desarrollo', descripcion: 'PAM orienta a CCP, Secrets Hub, Conjur o la integración certificada correspondiente.' },
          ] },
          { tipo: 'encabezado', texto: 'Gestor de rotación automática' },
          { tipo: 'parrafo', texto: 'Es una capacidad transversal, no un mecanismo de consumo. Actualiza los lugares que usan una credencial al rotarla y cubre motores de bases de datos, servicios Unix/Linux, Windows Services, Task Scheduler, IIS y archivos INI/ENV.' },
          { tipo: 'destacado', variante: 'informativo', texto: 'La dependencia de rotación automática se solicita antes del AGP escribiendo a seguridad.pam@cencosud.com; no sigue el flujo de formulario y ticket.' },
        ],
      },
      {
        id: 'runbook-agp', titulo: '4. Runbook: pedir la credencial por AGP', bajada: 'Los dos caminos de AGP y los campos reales del Formulario PAM.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Hay dos caminos distintos según si la credencial es de dominio o no. Elige el camino antes de entrar al portal.' },
          { tipo: 'encabezado', texto: 'Camino A · Cuenta de dominio (Active Directory)' },
          { tipo: 'parrafo', texto: 'Aplica a Windows Services, tareas programadas, IIS Application Pool, bots/RPA y usuarios interactivos de dominio.' },
          { tipo: 'pasos', pasos: [
            { texto: 'En AGP selecciona Usuarios de Servicio AD y define si la solicitud es para ti o para otra persona.' },
            { texto: 'Selecciona ambiente, completa campos y adjunta el Formulario PAM. Si tienes dudas, usa Enviar consulta a PAM.' },
            { texto: 'Elige aprobador y agrega contexto; la solicitud viaja cuando el aprobador acepta.' },
          ] },
          { tipo: 'tabla', encabezados: ['Ambiente', '¿Va a PAM?', 'Detalle'], filas: [['Productivo', 'Sí', 'Requiere formulario adjunto.'], ['DEV / QA', 'Sí', 'También se gestiona por trazabilidad y auditoría.'], ['POC', 'No', 'Cuenta temporal de 90 días, prefijo POC_, sin formulario.']] },
          { tipo: 'encabezado', texto: 'Camino B · Cuenta local, sistema operativo o aplicación' },
          { tipo: 'parrafo', texto: 'Aplica a cuentas locales Linux/Unix, secretos de aplicación, cloud tokens y API keys. En AGP selecciona Creación de AGP, busca cyberark y elige Usuario de servicio para una credencial nueva o Usuario funcional para acceder a una existente.' },
          { tipo: 'tabla', encabezados: ['Caso de uso', 'Para qué se usa'], filas: [['Servicio / Proceso', 'Windows Service, tarea programada, bot o RPA con credenciales.'], ['Aplicación', 'Consumo vía CCP, Conjur o sincronización cloud. Es el caso habitual de migración.'], ['Cloud Sync', 'Sincronización hacia AWS, Azure Key Vault, GCP o HCP Vault.'], ['Kubernetes / Conjur', 'Cargas K8s por Conjur, CSI o Injector.'], ['Alero / Acceso externo', 'Acceso temporal controlado de proveedor o consultora.']] },
          { tipo: 'destacado', variante: 'advertencia', titulo: 'Formulario PAM', texto: 'Descarga siempre el template desde AGP. Una copia local puede estar desactualizada y obligarte a rehacer la solicitud.' },
        ],
      },
      {
        id: 'migracion', titulo: '5. Escenario A · Migrar un secreto que vive fuera de CyberArk', bajada: 'De una variable de entorno o repositorio a la bóveda, sin dejar el valor atrás.',
        cuerpo: [
          { tipo: 'pasos', pasos: [
            { texto: 'Identifica el secreto y su ubicación actual: repositorio, variable de entorno, archivo de configuración o pipeline.' },
            { texto: 'Identifica el caso en el Camino B del runbook AGP; normalmente corresponde a Aplicación.' },
            { texto: 'Ejecuta solicitud, Formulario PAM y aprobación.' },
            { texto: 'Integra el consumo con el mecanismo asignado por PAM; si es CCP, continúa con el escenario B.' },
            { texto: 'Elimina el secreto de su ubicación original.' },
            { texto: 'Valida el consumo desde la bóveda y configura rotación cuando aplique.' },
          ] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Si el secreto fue expuesto en un incidente, la limpieza de historial es previa e independiente y se realiza con el Runbook de Secret Scanning. La migración a CyberArk ocurre después.' },
        ],
      },
      {
        id: 'ccp-mtls', titulo: '6. Escenario B · Consumir el secreto desde CCP con mTLS', bajada: 'Vocabulario, contrato HTTP y por qué un 404 no significa que la cuenta no exista.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'CCP, también llamado AIM Web Service, entrega credenciales a aplicaciones mediante un lookup autorizado por mTLS. Es el mecanismo más frecuente fuera de Kubernetes.' },
          { tipo: 'codigo', lenguaje: 'text', codigo: 'Aplicación → HTTPS con certificado cliente (mTLS) → CCP\nGET /AIMWebService/api/Accounts?AppID=<id>&Safe=<safe>&Object=<object>&Folder=Root\n← UserName + Content → uso solo en memoria' },
          { tipo: 'destacado', variante: 'regla', texto: 'Content es el secreto: nunca se imprime, persiste en disco, envía a telemetría ni se incluye en una excepción.' },
          { tipo: 'encabezado', texto: 'Vocabulario esencial' },
          { tipo: 'tabla', encabezados: ['Concepto', 'Qué significa'], filas: [['AppID', 'Identidad lógica de la aplicación autorizada para consultar CCP.'], ['Safe de API', 'Contenedor exacto enviado como parámetro Safe.'], ['Object de API', 'Identificador exacto que selecciona el registro administrado.'], ['Folder', 'Carpeta dentro del Safe; suele ser Root, pero se confirma.'], ['UserName', 'Identidad que CCP devuelve para autenticarse en el sistema destino.'], ['Content', 'Password o secreto del UserName devuelto.'], ['Certificado mTLS', 'Identidad criptográfica presentada a CCP.']] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'PVWA y la API CCP no forman un contrato de igualdad: no deduzcas Safe u Object desde el nombre visible de la cuenta, su username o un alias.' },
          { tipo: 'encabezado', texto: 'Rotación de password vs. reemplazo de identidad' },
          { tipo: 'tabla', encabezados: ['Cambio', 'Qué validar'], filas: [['Rotación de password', 'UserName y normalmente Safe/Object se mantienen; CCP debe entregar la nueva versión.'], ['Reemplazo de identidad', 'UserName cambia y Safe/Object pueden cambiar. Actualiza el lookup completo de forma atómica.']] },
          { tipo: 'encabezado', texto: 'Datos que debe entregar CyberArk' },
          { tipo: 'grilla-tarjetas', tarjetas: [{ titulo: 'Lookup', descripcion: 'URL de CCP, AppID, Safe, Object y Folder confirmados por ambiente.' }, { titulo: 'mTLS', descripcion: 'Certificado cliente, private key o PKCS#12, passphrase y CA corporativa.' }, { titulo: 'Red', descripcion: 'DNS, VPN/ruta, TCP 443 y allowlist de origen.' }] },
          { tipo: 'codigo', lenguaje: 'http', codigo: 'GET /AIMWebService/api/Accounts?AppID=<app-id>&Safe=<safe>&Object=<object>&Folder=Root\nAccept: application/json\n\n{ "UserName": "<username>", "Content": "<secret>" }' },
          { tipo: 'parrafo', texto: 'Éxito mínimo: HTTP 2xx, UserName y Content presentes. Un HTTP 200 no demuestra que la credencial sea vigente ni que el sistema destino la acepte.' },
        ],
      },
      {
        id: 'ejemplos', titulo: '7. Ejemplos de integración',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Configura los ejemplos fuera del repositorio. La plantilla contiene el lookup y rutas de archivos, nunca el secreto ni la passphrase.' },
          { tipo: 'codigo', lenguaje: 'bash', codigo: 'cp cyberark.env.example /ruta/privada/cyberark.env\nchmod 600 /ruta/privada/cyberark.env\nset -a; source /ruta/privada/cyberark.env; set +a' },
          { tipo: 'codigo', lenguaje: 'dotenv', codigo: 'CYBERARK_API_URL=https://<ccp-host>/AIMWebService/api/Accounts\nCYBERARK_APP_ID=<app-id>\nCYBERARK_SAFE=<safe-name>\nCYBERARK_OBJECT=<object-name>\nCYBERARK_FOLDER=Root\nCYBERARK_CERT_FILE=/secure/path/client.crt\nCYBERARK_KEY_FILE=/secure/path/client.key\nCYBERARK_CA_FILE=/secure/path/corporate-ca-chain.pem' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'No copies Safe ni Object desde PVWA. Usa siempre el mapeo confirmado por el owner de CyberArk para cada ambiente.' },
        ],
      },
      {
        id: 'produccion', titulo: '8. Reglas de producción',
        cuerpo: [
          { tipo: 'grilla-tarjetas', tarjetas: [{ titulo: 'Uso en memoria', descripcion: 'El secreto no llega a logs, métricas, trazas, errores ni almacenamiento temporal.' }, { titulo: 'Configuración protegida', descripcion: 'Certificados, llaves y archivos de configuración viven fuera del repositorio y con permisos mínimos.' }, { titulo: 'Rotación preparada', descripcion: 'La aplicación debe tolerar la renovación sin intervención manual ni secretos estáticos.' }] },
          { tipo: 'destacado', variante: 'regla', texto: 'Nunca codifiques el secreto ni la passphrase, y evita exponer el valor mediante excepciones o herramientas de diagnóstico.' },
        ],
      },
      {
        id: 'diagnostico', titulo: '9. Diagnóstico y checklist',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Checklist de un lookup CCP' },
          { tipo: 'pasos', pasos: [{ texto: 'Confirma URL de CCP, AppID, Safe, Object y Folder con PAM.' }, { texto: 'Valida certificado cliente, private key/PKCS#12, CA corporativa y permisos de archivos.' }, { texto: 'Comprueba DNS, ruta/VPN, TCP 443 y allowlist de origen.' }, { texto: 'Revisa HTTP 2xx, UserName y Content sin registrar el secreto.' }, { texto: 'Prueba de forma autorizada contra el sistema destino; 200 en CCP no confirma autenticación final.' }] },
          { tipo: 'destacado', variante: 'informativo', texto: 'Un 404 puede indicar que el tuple AppID/Safe/Object no coincide con el contrato de CCP, aunque la cuenta sea visible en PVWA.' },
        ],
      },
      {
        id: 'contactos', titulo: '10. Contactos y estado',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Para onboarding, dependencias de rotación automática o dudas del mecanismo, contacta al equipo Seguridad PAM. Los accesos, datos de lookup y mTLS se confirman en el handoff del caso.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Seguridad PAM', descripcion: 'Consulta de rotación automática y orientación previa al AGP.', href: 'mailto:seguridad.pam@cencosud.com' }, { titulo: 'AGP', descripcion: 'Portal para iniciar la solicitud y descargar el formulario vigente.', href: 'https://agp.cencosud.corp/' }] },
          { tipo: 'destacado', variante: 'informativo', texto: 'La gestión de secretos sigue siendo un proceso compartido: Desarrollo identifica e integra, PAM aprueba y configura, y Plataforma apoya la operación técnica.' },
        ],
      },
    ],
  },
  {
    id: 'secret-scanning-runbook',
    titulo: 'Runbook: Respuesta a Alertas de Secret Scanning',
    descripcion:
      'Procedimiento paso a paso para alertas de secret scanning de GitHub y GitLab: cómo distinguir un falso positivo de un secreto real, y cómo revocar, limpiar y cerrar cada caso.',
    categorias: ['Seguridad'],
    owner: 'Seguridad',
    madurez: 'production',
    tags: ['security', 'runbook', 'compliance'],
    detalle: detalleSecretScanning,
    paginas: [
      {
        id: 'plan-de-mitigacion', titulo: '1. Plan de mitigación 2026',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Antes de empezar' },
          { tipo: 'parrafo', texto: 'Este runbook aplica para alertas de secret scanning de GitHub y GitLab, dentro del plan vigente entre el 15 de julio y el 1 de septiembre de 2026. Una alerta puede ser un falso positivo o un secreto real expuesto. En ambos casos el historial debe quedar limpio; para GitLab, además, se emite la respuesta en DefectDojo. GitHub se cierra directamente en la alerta.' },
          { tipo: 'destacado', variante: 'regla', titulo: 'Regla de oro', texto: 'Nunca cierres una alerta sin revocar el secreto si es real y sin limpiar el historial. Cerrar la alerta sin revocar deja el riesgo activo.' },
          { tipo: 'encabezado', texto: 'Plan de mitigación 2026' },
          { tipo: 'parrafo', texto: 'Los repositorios alcanzados por el incidente tienen prioridad máxima, sin importar su criticidad de negocio. El plan cerró el 1 de septiembre de 2026 con una meta de al menos 60 % del volumen detectado resuelto.' },
          { tipo: 'destacado', variante: 'informativo', titulo: 'Sobre las cifras', texto: 'El volumen de alertas, pendientes y repositorios afectados no se publica en este runbook porque constituye superficie de ataque. El detalle se habilita previa aprobación.' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: '15 julio 2026 · Procedimiento oficial', descripcion: 'Seguridad entrega la guía y la distribuye a los equipos.' },
            { titulo: '15 julio – 1 septiembre · Ejecución', descripcion: 'Los equipos atienden alertas; los repositorios del incidente van primero.' },
            { titulo: '1 septiembre 2026 · Cierre', descripcion: 'Meta: al menos 60 % del volumen de secretos expuestos resuelto.' },
          ] },
          { tipo: 'encabezado', texto: 'Orden de prioridad para atender alertas' },
          { tipo: 'pasos', pasos: [
            { titulo: 'Repositorios del incidente', texto: 'Atiéndelos primero, sin importar su criticidad de negocio. Consulta a tu referente de país o dirección si no sabes si tu repositorio está incluido.' },
            { titulo: 'Criticidad de negocio', texto: 'Alta: ventas, pagos, datos de clientes, e-commerce, Cencopay o PII. Luego media: sistemas internos sin datos de clientes. Finalmente baja: reporting, datos no sensibles o solo lectura.' },
            { titulo: 'Flujo continuo', texto: 'Las alertas de repositorios no comprometidos se atienden después, también según criticidad.' },
          ] },
          { tipo: 'destacado', variante: 'advertencia', titulo: 'Riesgo declarado', texto: 'Limpiar el historial no elimina el riesgo si el secreto sigue activo. La revocación en el sistema de origen es inmediata y no espera el plazo del plan.' },
          { tipo: 'parrafo', texto: 'Desde el 15 de julio cada país o dirección debe contar con un referente para escalar la ejecución y dar seguimiento semanal. Limpiar el historial y corregir el código es obligatorio en todos los casos.' },
        ],
      },
      {
        id: 'avance', titulo: '2. Avance del programa',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Resumen ejecutivo de mitigación de secretos expuestos en código. Corte al 31 de agosto de 2026; cierre del programa: 1 de septiembre de 2026.' },
          { tipo: 'encabezado', texto: 'Avance total logrado: 63,3 %' },
          { tipo: 'parrafo', texto: 'Alertas cerradas o descartadas sobre el total detectado. La meta al 1 de septiembre de 2026 era al menos 60 %.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Ver detalle del avance', descripcion: 'Acceso previa aprobación. Seguimiento por equipo, repositorio y cortes.', href: 'https://seguimiento-alertas.gamma.pulsar.codes/' }] },
          { tipo: 'encabezado', texto: 'Logros del periodo' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: '25,6 % atendido', descripcion: 'Del volumen vigente desde el 23 de julio de 2026.' },
            { titulo: 'Foco en CRITICAL', descripcion: 'El esfuerzo del periodo se concentró primero en el mayor riesgo.' },
            { titulo: '+3,3 % sobre la meta', descripcion: 'La meta de 60 % se alcanzó antes del cierre.' },
          ] },
          { tipo: 'parrafo', texto: 'El movimiento reportado es neto: durante el programa ingresaron hallazgos y repositorios nuevos. Alcanzar la meta no cierra las alertas abiertas; la revocación y limpieza sigue vigente para cada una.' },
          { tipo: 'encabezado', texto: 'Historial de cortes' },
          { tipo: 'tabla', encabezados: ['Corte', 'Avance total', 'Atendido en el periodo'], filas: [['31-ago-2026 · Actual', '63,3 %', '25,6 %'], ['26-ago-2026', '56,3 %', '11,3 %'], ['19-ago-2026', '55,5 %', '9,9 %'], ['12-ago-2026', '54,6 %', '8,1 %'], ['4-ago-2026', '53,3 %', '5,3 %']] },
          { tipo: 'destacado', variante: 'informativo', titulo: 'Cómo leer el avance', texto: 'El porcentaje incluye falsos positivos descartados durante el triage. Los volúmenes, pendientes y seguimiento por equipo no se publican aquí y requieren acceso aprobado.' },
        ],
      },
      {
        id: 'prerrequisitos', titulo: '3. Prerrequisitos: VS Code + tu LLM',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Configura el MCP de GitHub en VS Code' },
          { tipo: 'pasos', pasos: [
            { texto: 'Inicia sesión en VS Code con tu cuenta de GitHub Enterprise Cencosud desde Accounts → Login.' },
            { texto: 'Abre Cmd/Ctrl+Shift+P, busca MCP: Open User Configuration y agrega github con el toolset secret_protection dentro de servers.' },
          ] },
          { tipo: 'codigo', lenguaje: 'json', codigo: '"github": {\n  "url": "https://api.githubcopilot.com/mcp",\n  "headers": { "X-MCP-Toolsets": "secret_protection" }\n}' },
          { tipo: 'encabezado', texto: 'Instala git-filter-repo' },
          { tipo: 'parrafo', texto: 'Es necesario para la limpieza de historial que se utiliza en los prompts del runbook.' },
          { tipo: 'codigo', lenguaje: 'bash', codigo: 'brew install git-filter-repo\ngit filter-repo --help' },
        ],
      },
      {
        id: 'como-revocar', titulo: '4. Cómo revocar cada secreto',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Por qué revocar primero' },
          { tipo: 'parrafo', texto: 'Un secreto real expuesto sigue siendo un riesgo activo mientras no se revoque en el sistema que lo emitió, aunque ya se haya borrado del código o limpiado el historial. Por eso la revocación siempre es el primer paso.' },
          { tipo: 'encabezado', texto: 'Tabla de revocación por tipo de secreto' },
          { tipo: 'tabla', encabezados: ['Tipo de secreto', 'Dónde revocar'], filas: [
            ['AWS Access Key', 'AWS Console → IAM → Users → Security credentials → Deactivate'], ['Token de GitHub', 'GitHub → Settings → Developer settings → Personal access tokens → Delete'], ['Token de GitLab', 'GitLab → User Settings → Access tokens → Revoke'], ['Google API Key', 'Google Cloud Console → APIs & Services → Credentials → Delete'], ['Azure Client Secret', 'Azure Portal → App registrations → Certificates & secrets → Delete'], ['API key interna Cencosud', 'Contactar al equipo dueño del sistema'], ['Credencial de BD u otro', 'Contactar a Plataforma o Seguridad si no sabes dónde revocar'],
          ] },
          { tipo: 'destacado', variante: 'regla', texto: 'Después de revocar, genera una credencial nueva si el servicio la necesita y guárdala en CyberArk o en el vault del IDP del producto; nunca en el código.' },
        ],
      },
      {
        id: 'procedimiento-github', titulo: '5. Procedimiento en GitHub',
        cuerpo: [
          { tipo: 'destacado', variante: 'informativo', texto: 'GitHub no usa DefectDojo. La alerta se identifica, resuelve y cierra directamente en /security/secret-scanning del repositorio.' },
          { tipo: 'encabezado', texto: 'Flujo paso a paso' },
          { tipo: 'pasos', pasos: [
            { titulo: 'Identifica', texto: 'Abre Security → Secret scanning alerts en el repositorio.' },
            { titulo: 'Clasifica', texto: 'Define si es falso positivo o secreto real; usa el prompt de clasificación con MCP si está disponible.' },
            { titulo: 'Falso positivo', texto: 'Usa Close as → False positive con comentario. Si el valor fue commiteado, limpia igualmente el historial.' },
            { titulo: 'Secreto real', texto: 'Revoca primero en el origen, genera una credencial nueva, corrige el código, sube el cambio y limpia el historial, un secreto a la vez.' },
            { titulo: 'Valida', texto: 'Confirma en el proveedor que el valor anterior ya no es válido.' },
            { titulo: 'Cierra', texto: 'Vuelve a /security/secret-scanning y cierra la alerta reflejando la acción tomada. No pases por DefectDojo.' },
          ] },
        ],
      },
      {
        id: 'procedimiento-gitlab', titulo: '6. Procedimiento en GitLab',
        cuerpo: [
          { tipo: 'destacado', variante: 'informativo', texto: 'Los hallazgos de GitLab se responden en DefectDojo; es el paso final y la diferencia principal con GitHub.' },
          { tipo: 'encabezado', texto: 'Flujo paso a paso' },
          { tipo: 'pasos', pasos: [
            { titulo: 'Identifica', texto: 'Abre Security → Vulnerability report en el proyecto.' },
            { titulo: 'Clasifica', texto: 'Determina falso positivo o secreto real, con el mismo criterio usado en GitHub.' },
            { titulo: 'Falso positivo', texto: 'Cambia a Dismissed, motivo False positive y agrega una nota justificando. Limpia el historial si corresponde.' },
            { titulo: 'Secreto real', texto: 'Revoca en el origen, genera la nueva credencial en el vault, corrige el código y limpia el historial de forma individual.' },
            { titulo: 'Valida', texto: 'Confirma que la credencial antigua ya no funciona.' },
            { titulo: 'Actualiza GitLab', texto: 'Marca Resolved o Dismissed según corresponda.' },
            { titulo: 'Emite respuesta', texto: 'Registra clasificación y evidencia de revocación en DefectDojo para que Seguridad valide y cierre.' },
          ] },
        ],
      },
      {
        id: 'secretos-dummy', titulo: '7. Usa secretos dummy, no valores reales',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Por qué existe esta regla' },
          { tipo: 'parrafo', texto: 'Para evitar falsos positivos en Gitleaks, GitHub Secret Scanning, Semgrep y otros escáneres, todo valor de ejemplo, prueba, mocking, demo o documentación debe usar siempre el prefijo DUMMY_ o MOCK_. Nunca uses valores aleatorios que parezcan credenciales reales.' },
          { tipo: 'destacado', variante: 'regla', titulo: 'Prefijo obligatorio', texto: 'DUMMY_ o MOCK_ para toda credencial ficticia.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Guía de secretos dummy', descripcion: 'Guía oficial DevSecOps.', href: 'https://devsecops.cencosud.net/es/docs/sdlc/secretosdummy/' }] },
        ],
      },
      {
        id: 'prompts', titulo: '8. Prompts para tu LLM favorito',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Dos prompts para Copilot Chat, Claude o el asistente de VS Code: uno clasifica y prioriza alertas; el otro limpia un secreto a la vez del historial local con git-filter-repo.' },
          { tipo: 'destacado', variante: 'informativo', texto: 'El toolset secret_protection expone list_secret_scanning_alerts y get_secret_scanning_alert. No uses run_secret_scanning: ese comando es para escaneos ad-hoc, no alertas históricas.' },
          { tipo: 'encabezado', texto: 'Prompt 1 · Clasificación de secretos expuestos' },
          { tipo: 'parrafo', texto: 'Requiere el MCP de GitHub con secret_protection. Pide explícitamente la organización y repositorio, consulta solo ese alcance y filtra state=open salvo que el usuario indique otro estado.' },
          { tipo: 'pasos', pasos: [
            { texto: 'Obtén alertas con list_secret_scanning_alerts y solicita el motivo: incidente confirmado, acción preventiva, auditoría/compliance o cierre del repositorio.' },
            { texto: 'Clasifica por secret_type y prioriza: credenciales de BD, claves SSH, JWT/API keys, secretos genéricos y posibles falsos positivos.' },
            { texto: 'Define la acción según criticidad, motivo y necesidad de coordinación. Un falso positivo se reemplaza por lista blanca; no se rota ni limpia por defecto.' },
            { texto: 'Genera un Markdown revisable con prioridad, checkboxes de falso positivo y coordinación, más la lista Equipos a coordinar por alerta.' },
            { texto: 'Espera la revisión, vuelve a leer el archivo, valida inconsistencias y recalcula la prioridad final.' },
          ] },
          { tipo: 'codigo', lenguaje: 'markdown', codigo: '| N° alerta | Tipo de secreto | Prioridad | Falso positivo | Coord. equipos | Coord. infra/seguridad | Estado |\n|---|---|---|---|---|---|---|\n| 12 | database_connection_string | 1 | [ ] | [ ] | [x] | Abierta |\n| 15 | jwt_signing_secret | 3 | [ ] | [x] | [x] | Abierta |' },
          { tipo: 'encabezado', texto: 'Prompt 2 · Limpieza de historial' },
          { tipo: 'parrafo', texto: 'Opera solo sobre un clon local fresco. No ejecuta force push ni acciones contra el remoto; la reescritura y verificación deben hacerse individualmente para cada secreto, nunca con bucles ni múltiples entradas en una pasada.' },
          { tipo: 'tabla', encabezados: ['Tipo de secreto', 'Ejemplo de reemplazo'], filas: [['Credencial de base de datos', 'MOCK_DATABASE_URI'], ['Clave SSH', 'DUMMY_SSH_KEY'], ['JWT o API key', 'MOCK_API_KEY'], ['Secreto genérico', 'DUMMY_SECRET']] },
          { tipo: 'pasos', pasos: [
            { texto: 'Confirma ruta local, valor exacto expuesto y valor DUMMY_ o MOCK_ que lo reemplazará.' },
            { texto: 'Crea replacements.txt con VALOR_SECRETO_EXPUESTO==>VALOR_DE_REEMPLAZO.' },
            { texto: 'Ejecuta git-filter-repo con --replace-text sobre el clon local.' },
            { texto: 'Verifica todo el historial con git log y git grep. Si hay resultados, la limpieza no está completa.' },
            { texto: 'Si no hay coincidencias, informa que la limpieza local fue exitosa y que el force push remoto se coordina con Seguridad.' },
          ] },
          { tipo: 'codigo', lenguaje: 'bash', codigo: 'git filter-repo --replace-text replacements.txt\n\ngit --no-pager log --all -p -S "VALOR_SECRETO_EXPUESTO" --source\ngit --no-pager rev-list --all | xargs -I {} git --no-pager grep -l "VALOR_SECRETO_EXPUESTO" {} 2>/dev/null' },
          { tipo: 'destacado', variante: 'advertencia', titulo: 'Restricción', texto: 'No ejecutes git push --force ni ninguna operación contra el remoto desde este prompt.' },
        ],
      },
      {
        id: 'recursos', titulo: '9. Recursos y contacto',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Herramientas y guías' },
          { tipo: 'enlaces', enlaces: [
            { titulo: 'DefectDojo', descripcion: 'Solo para hallazgos GitLab: emite la respuesta y sigue el caso.', href: 'https://defectdojo.cencosud.net/' },
            { titulo: 'Cápsulas de seguridad', descripcion: 'Buenas prácticas y funcionamiento de DefectDojo.', href: 'https://cencodesec.cencosud.net/capsulas' },
          ] },
          { tipo: 'encabezado', texto: 'Seguimiento y estado del programa' },
          { tipo: 'parrafo', texto: 'Las planillas semanales identifican repositorios, alertas y responsables. No se enlazan desde este runbook por ser superficie de ataque; solicita acceso al detalle del avance para revisar el seguimiento vigente e histórico.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Detalle del avance', descripcion: 'Acceso previa aprobación.', href: 'https://seguimiento-alertas.gamma.pulsar.codes/' }] },
          { tipo: 'encabezado', texto: 'Contactos por escenario' },
          { tipo: 'tabla', encabezados: ['Escenario', 'A quién contactar'], filas: [
            ['Necesitas apoyo para force push', 'Gabriel Lavini o Mathias Velilla'], ['No sabes dónde revocar un secreto', 'Plataforma o Seguridad'], ['API key interna Cencosud', 'Equipo dueño del sistema'], ['Cierre o validación GitLab en DefectDojo', 'Seguridad'], ['Acceso al detalle del programa', 'Seguridad'],
          ] },
        ],
      },
    ],
  },
  /* Documento anterior de TDC retirado del prototipo: la propuesta migrada
     reemplaza su ruta, índice y tarjeta en Guías.
  {
    id: 'toma-de-control',
    titulo: 'Toma de Control',
    descripcion:
      'Proceso formal de transferencia de un producto digital desde el equipo que lo construyó hacia el equipo que lo operará. Incluye checklist, documentos requeridos y manual de referencia.',
    categorias: ['Gobierno', 'Operaciones'],
    owner: 'Operaciones',
    madurez: 'production',
    tags: ['governance', 'documentation', 'operaciones', 'tdc'],
    detalle: detalleTomaDeControl,
    paginas: [
      {
        id: 'que-es-una-tdc', titulo: 'Qué es una TDC',
        bajada: 'La transferencia formal para que un equipo pueda operar un producto sin depender de quienes lo construyeron.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'La Toma de Control transfiere formalmente un producto digital desde el equipo que lo construyó al equipo que lo operará en adelante. Se concreta en el Manual de Toma de Control, que certifica el cumplimiento, y el Modelo de Soporte y Continuidad, que aporta la evidencia operativa.' },
          { tipo: 'destacado', variante: 'regla', titulo: 'La prueba', texto: '¿Puede un equipo nuevo resolver un incidente crítico a las 3:00 AM usando solo la documentación, sin llamar al desarrollador original? Si la respuesta es no, la TDC no está completa.' },
          { tipo: 'parrafo', texto: 'Una transferencia sin documentación adecuada genera en promedio 235 horas-hombre de reconstrucción durante los primeros seis meses. La TDC evita esa deuda al reutilizar los artefactos generados a lo largo del CencoFlow.' },
          { tipo: 'grilla-tarjetas', tarjetas: [{ titulo: 'Documentación', descripcion: 'Arquitectura, inventario técnico y decisiones de diseño.' }, { titulo: 'Operación', descripcion: 'Runbooks, observabilidad y planes de respaldo.' }, { titulo: 'Gobierno', descripcion: 'RUA, ownership funcional y técnico, y matriz RACI.' }] },
        ],
      },
      {
        id: 'documentos-requeridos',
        titulo: 'Documentos requeridos',
        cuerpo: [
          { tipo: 'encabezado', texto: '1. El documento maestro' },
          {
            tipo: 'grilla-tarjetas',
            tarjetas: [
              {
                titulo: 'Manual de Toma de Control',
                descripcion:
                  'Consolida toda la información. Estructura en 7 secciones (A–G): Identificación, Arquitectura, Seguridad, Observabilidad, Respaldo, Soporte y Excepciones.',
              },
            ],
          },
          { tipo: 'encabezado', texto: '2. Gobierno e identidad' },
          {
            tipo: 'grilla-tarjetas',
            tarjetas: [
              { titulo: 'Ficha RUA', descripcion: 'Registro único de aplicaciones con datos del producto.' },
              { titulo: 'Matriz RACI', descripcion: 'Responsabilidades claras por rol y actividad.' },
              { titulo: 'Ownership del Producto', descripcion: 'Dueño funcional y técnico identificados.' },
            ],
          },
          { tipo: 'encabezado', texto: '3. Arquitectura técnica' },
          {
            tipo: 'grilla-tarjetas',
            tarjetas: [
              { titulo: 'Diagramas HLD/C4', descripcion: 'Diagramas de alto nivel y contexto de la arquitectura.' },
              { titulo: 'ADR', descripcion: 'Registros de decisiones de arquitectura.' },
              { titulo: 'Inventario Técnico', descripcion: 'Componentes, dependencias, URLs, repos.' },
            ],
          },
          { tipo: 'encabezado', texto: '4. Operación' },
          {
            tipo: 'grilla-tarjetas',
            tarjetas: [
              { titulo: 'Runbook', descripcion: 'Procedimientos operativos paso a paso.' },
              { titulo: 'Guía de Monitoreo', descripcion: 'Dashboards, alertas y métricas clave.' },
              { titulo: 'Plan de Respaldo', descripcion: 'RPO, RTO y procedimientos de recuperación.' },
            ],
          },
          { tipo: 'encabezado', texto: '5. Seguridad y compliance' },
          {
            tipo: 'grilla-tarjetas',
            tarjetas: [
              {
                titulo: 'Scripts de Seguridad (Baseline)',
                descripcion: 'Validaciones de configuración de seguridad automatizadas.',
              },
              {
                titulo: 'Compliance Pack',
                descripcion: 'DAO + GRC + SecShield, paquete de cumplimiento normativo.',
              },
            ],
          },
          {
            tipo: 'destacado',
            variante: 'advertencia',
            texto:
              'El Manual de Toma de Control consolida todos estos documentos. Sin él, Operaciones no puede aceptar la transferencia.',
          },
        ],
      },
      {
        id: 'criticidad-del-producto', titulo: 'Criticidad del producto',
        bajada: 'La criticidad es un dato oficial del RUA; debe coincidir con esa fuente.',
        cuerpo: [
          { tipo: 'tabla', encabezados: ['Criticidad', 'Descripción', 'Ejemplo'], filas: [['Alta', 'Impacto directo en ingresos, operación o regulación.', 'Checkout, pagos, inventario'], ['Media', 'Importante, pero una falla temporal no detiene la operación.', 'Herramientas internas con SLA'], ['Baja', 'Herramientas internas o reportes sin impacto en el cliente final.', 'Dashboard histórico']] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Para productos de criticidad alta o crítica, Respaldo, Recuperación y Continuidad —RPO, RTO y DRP— dejan de ser opcionales.' },
          { tipo: 'destacado', variante: 'informativo', texto: 'Si tienes dudas, valida la criticidad con Arquitectura o con el dueño funcional antes de avanzar.' },
        ],
      },
      {
        id: 'si-no-tengo-todo-listo', titulo: 'Si no tengo todo listo',
        bajada: 'No bloquea, pero debe documentarse honestamente en la Sección G del Manual.',
        cuerpo: [
          { tipo: 'pasos', pasos: [{ titulo: 'No ocultes ni inventes cumplimiento', texto: 'Marcar un criterio sin evidencia genera un riesgo oculto para el equipo receptor.' }, { titulo: 'Documenta la excepción', texto: 'Aclara qué falta, qué riesgo implica y cuál es el control compensatorio.' }, { titulo: 'Asigna responsable y fecha', texto: 'Toda excepción necesita dueño y fecha de cierre.' }, { titulo: 'Revisión SRE', texto: 'SRE revisa y aprueba que las excepciones y controles sean manejables.' }] },
          { tipo: 'destacado', variante: 'informativo', texto: 'Un campo vacío sin explicación es una señal de alarma. Una excepción bien documentada define el riesgo aceptado y cuándo se resolverá.' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Si las excepciones son graves —por ejemplo, un producto alto sin recuperación— SRE puede exigir un plan de cierre estricto antes de aceptar la transferencia.' },
        ],
      },
      {
        id: 'producto-en-construccion',
        titulo: 'Producto en construcción',
        bajada:
          'Tienes la mejor posición posible: la oportunidad de no acumular la deuda de las 235 horas en primer lugar.',
        cuerpo: [
          {
            tipo: 'tabla',
            encabezados: ['Si estás en...', 'Empieza a preparar'],
            filas: [
              ['Ideación / Anteproyecto / Proyecto', 'Sección A — datos básicos del Caso de Negocio'],
              ['Diseño de solución', 'Secciones A (Ficha), B (HLD/ADR), C (Riesgos & Compliance)'],
              ['Desarrollo', 'Secciones B (README, APIs), C.1 (Accesos)'],
              ['Piloto', 'Borrador de Sección F — escalamiento, incidencias, F.1 y F.4'],
              ['Producción', 'Secciones D, E, F con datos reales; scripts C.2; hito F.2 (capacitación)'],
              ['Continuidad Operativa', 'Cierre del Manual completo, Sección G si quedan excepciones'],
            ],
          },
          {
            tipo: 'destacado',
            variante: 'regla',
            titulo: 'Regla de oro',
            texto:
              'Si ya generaste un documento del Golden Path que contiene la información de una sección, no la reescribas — solo cópiala o enlázala.',
          },
        ],
      },
      {
        id: 'producto-en-produccion', titulo: 'Producto en producción',
        bajada: 'Localiza lo que ya existe y llévalo al formato oficial.',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Las 3 preguntas de auditoría' },
          { tipo: 'pasos', pasos: [{ titulo: '¿Tenemos esta información?', texto: 'Verifica documentación, runbooks, diagramas y configuraciones para cada sección del Manual.' }, { titulo: '¿Dónde está?', texto: 'Localiza la fuente de verdad: repositorios, wikis, Confluence, Grafana y alertas configuradas.' }, { titulo: '¿Está actualizada?', texto: 'La documentación obsoleta es peor que no tener documentación: crea confianza falsa.' }] },
          { tipo: 'encabezado', texto: 'Clasifica cada hallazgo' },
          { tipo: 'grilla-tarjetas', tarjetas: [{ titulo: 'Sí, con evidencia', descripcion: 'Se traslada directamente al Manual.' }, { titulo: 'Parcial', descripcion: 'Registra pendiente, dueño y fecha de cierre.' }, { titulo: 'No se resuelve antes', descripcion: 'Documenta la excepción en la Sección G.' }] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'La sección que más suele faltar es Respaldo, Recuperación y Continuidad. Si el producto es de criticidad alta, comienza por allí.' },
        ],
      },
      {
        id: 'aprobacion-y-firmas', titulo: 'Aprobación y firmas',
        bajada: 'La Toma de Control es una validación compartida, no el cierre de una sola persona.',
        cuerpo: [
          { tipo: 'tabla', encabezados: ['Rol', 'Responsabilidad'], filas: [['Equipo de Desarrollo / Proyecto', 'Entrega un Manual completo y ejecutable sin explicación oral.'], ['Continuidad Operativa', 'Valida que puede operar el producto de manera autónoma.'], ['Seguridad', 'Valida la Sección C: accesos y scripts de baseline.'], ['SRE', 'Revisa y aprueba formalmente la Sección G: excepciones y riesgos aceptados.']] },
          { tipo: 'destacado', variante: 'regla', texto: 'La transferencia se cierra solo cuando el equipo receptor confirma que puede operar el producto de forma autónoma.' },
          { tipo: 'parrafo', texto: 'Se recomienda una sesión de transferencia, presencial o remota, en la que el equipo que entrega recorra el documento junto con el receptor antes del cierre.' },
        ],
      },
      {
        id: 'manual-de-referencia',
        titulo: 'Manual de referencia',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Sección B — Arquitectura e inventario técnico' },
          {
            tipo: 'parrafo',
            texto:
              '¿Existe un diagrama de arquitectura (HLD/C4)? ¿Hay un inventario de componentes y dependencias actualizado?',
          },
          {
            tipo: 'tabla',
            encabezados: ['#', 'Pregunta', 'Dónde está la evidencia', 'Acción si falta'],
            filas: [
              ['B.1', '¿Existen diagramas de arquitectura (HLD o C4)?', '', ''],
              ['B.2', '¿Hay un inventario técnico (repos, URLs, infra)?', '', ''],
              ['B.3', '¿Se documentaron las decisiones de arquitectura (ADR)?', '', ''],
              ['B.4', '¿Los README de los repos están actualizados?', '', ''],
              ['B.5', '¿Las APIs tienen contratos documentados (OpenAPI/AsyncAPI)?', '', ''],
            ],
          },
          { tipo: 'encabezado', texto: 'Sección C — Seguridad, accesos y validaciones técnicas' },
          {
            tipo: 'parrafo',
            texto: '¿Quién tiene acceso a qué? ¿Los accesos están documentados y el equipo receptor los tiene?',
          },
          {
            tipo: 'tabla',
            encabezados: ['#', 'Pregunta', 'Dónde está la evidencia', 'Acción si falta'],
            filas: [
              ['C.1', '¿Hay un inventario de accesos (consolas, repos, secrets)?', '', ''],
              ['C.2', '¿Existen scripts de validación de seguridad (baseline)?', '', ''],
              ['C.3', '¿El equipo receptor tiene los accesos necesarios?', '', ''],
              ['C.4', '¿Hay un proceso documentado de rotación de secrets?', '', ''],
              ['C.5', '¿El compliance pack (DAO + GRC + SecShield) está completo?', '', ''],
            ],
          },
        ],
      },
    ],
  }, */
]

export const categoriaGuiaOpciones = ['Gobierno', 'Seguridad', 'Operaciones'] as const
export const madurezGuiaOpciones = ['production', 'experimental'] as const

export const madurezGuiaLabel: Record<DocumentoGuia['madurez'], string> = {
  production: 'Producción',
  experimental: 'Experimental',
  beta: 'Beta',
}
