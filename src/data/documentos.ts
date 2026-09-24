// Contenido extraído en vivo el 8 de septiembre de 2026 desde /docs del portal real
// (ver contenido-apis-docs-extraido.md, secciones "Docs — Documentación" y
// "Toma de Control — estructura interna del documento").
//
// Las cuatro guías cuentan con páginas navegables. CyberArk y Secret Scanning
// preservan además sus recorridos operativos y recursos de implementación.
//
// Los conteos de los filtros de Guías (Categoría, Madurez) no se hardcodean: se
// derivan de `categorias`/`madurez` en features/guias/use-guias-filtros.ts, tal como
// vienen del portal real.
import type { DocumentoGuia } from '@/types/documento'
import { tomaDeControlPropuesta } from './toma-de-control-propuesta'
import { observabilidad } from './observabilidad'

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
  observabilidad,
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
          { tipo: 'destacado', variante: 'advertencia', texto: 'Este documento no reemplaza el runbook operativo del equipo PAM. Es la capa de orientación para que identifiques tu caso, sepas a qué parte del proceso oficial dirigirte y puedas integrar el consumo. El procedimiento vinculante y el formulario vigente se descargan desde AGP.' },
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
          { tipo: 'parrafo', texto: 'La primera pregunta no es qué tipo de secreto tenés, sino quién o qué va a consumir la credencial. El equipo PAM define el mecanismo definitivo al revisar tu formulario; esta clasificación es para que llegues con el caso ya identificado.' },
          { tipo: 'destacado', variante: 'informativo', titulo: '¿Qué es el CCP?', texto: 'Es el Central Credential Provider: el componente de CyberArk que le entrega la contraseña a la aplicación en el momento en que la necesita, sin que la aplicación la guarde en su propio código. Funciona como intermediario — la app pide el secreto, CyberArk verifica que tenga permiso y se lo entrega, y todo queda registrado para auditoría. Por eso aparecen dos formas distintas de hablarle: API CCP, donde armás vos la llamada REST, e Integraciones CCP, donde le hablás a través de un conector ya armado (plugin .NET, Java, PowerShell o Python).' },
          { tipo: 'selector-mecanismo-cyberark' },
          { tipo: 'encabezado', texto: 'Gestor de rotación automática' },
          { tipo: 'parrafo', texto: 'No es un mecanismo de consumo sino una capacidad transversal: detecta y actualiza todos los lugares donde se usa una credencial cada vez que rota, sin intervención manual. Cubre Oracle, MSSQL, MySQL, PostgreSQL, MongoDB, SAP HANA, Snowflake y DB2; usuarios locales, de servicio, root y de aplicación en Unix/Linux; y Windows Services, Task Scheduler, IIS Application Pools y archivos INI/ENV en Windows.' },
          { tipo: 'destacado', variante: 'informativo', texto: 'La configuración de dependencias la hace el equipo PAM durante el onboarding y se solicita antes de iniciar el AGP, escribiendo a seguridad.pam@cencosud.com. No sigue el flujo de formulario y ticket descrito abajo.' },
        ],
      },
      {
        id: 'runbook-agp', titulo: '4. Runbook: pedir la credencial por AGP', bajada: 'Los dos caminos de AGP y los campos reales del Formulario PAM.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Existen dos caminos de AGP distintos según si la credencial es de dominio o no. Elegí el camino antes de entrar al portal.' },
          { tipo: 'encabezado', texto: 'Camino A · Cuenta de dominio (Active Directory)' },
          { tipo: 'parrafo', texto: 'Aplica a Windows Services, tareas programadas, IIS Application Pool, bots/RPA y usuarios interactivos de dominio.' },
          { tipo: 'pasos', pasos: [
            { texto: 'Entrá a AGP y seleccioná Usuarios de Servicio AD.' },
            { texto: 'Elegí destinatario: solicitud para tu usuario o para otro usuario.' },
            { texto: 'Elegí el ambiente y definí si la cuenta va a la bóveda.' },
            { texto: 'Completá los campos y adjuntá el Formulario PAM. Si tenés dudas, usá “Enviar consulta a PAM” en lugar de adjuntar el archivo.' },
            { texto: 'Seleccioná el aprobador y agregá un comentario de contexto. La solicitud viaja recién cuando el aprobador acepta.' },
          ] },
          { tipo: 'tabla', encabezados: ['Ambiente', '¿Va al PAM?', 'Detalle'], filas: [['Productivo', 'Sí', 'Requiere formulario adjunto.'], ['Ambiente bajo (DEV/QA)', 'Sí', 'También va a la bóveda, por trazabilidad y auditoría.'], ['POC', 'No', 'Cuenta temporal de 90 días que expira sola. El nombre debe empezar con POC_. No requiere formulario.']] },
          { tipo: 'parrafo', texto: 'Campos que pide el formulario para este camino: país, nombre APL o proceso, plataforma Windows/AD, si es cuenta de dominio y su tipo de uso, servidor o hostname, tipo de secreto, si depende de un archivo de configuración y su ruta completa, si hay que reiniciar el servicio tras la rotación, aplicación vinculada y owner técnico.' },
          { tipo: 'encabezado', texto: 'Camino B · Cuenta local, sistema operativo o aplicación' },
          { tipo: 'parrafo', texto: 'Aplica a cuentas locales Linux/Unix, secretos de aplicación, cloud tokens y API Keys — todo lo que no sea una cuenta de dominio AD.' },
          { tipo: 'pasos', pasos: [{ texto: 'Entrá a AGP y seleccioná Creación de AGP.' }, { texto: 'Elegí destinatario.' }, { texto: 'Buscá cyberark. Aparecen dos aplicaciones: Usuario de servicio para cargar una credencial nueva en la bóveda (requiere formulario), y Usuario funcional para acceder a una credencial ya existente (no requiere formulario).' }, { texto: 'Descargá el template desde AGP, completalo y adjuntalo con “Elegir archivo”.' }, { texto: 'Seleccioná el aprobador y finalizá.' }] },
          { tipo: 'encabezado', texto: 'Casos de uso que se marcan en el formulario' },
          { tipo: 'tabla', encabezados: ['Caso de uso', 'Descripción', 'Campos propios'], filas: [['Servicio / Proceso', 'Windows Service, tarea programada, bot o RPA con credenciales.', 'Nombre del servicio, plataforma, servidor, tipo de secreto, dependencia de archivo de config, reinicio tras rotación.'], ['Aplicación', 'App que consume secretos vía CCP, Conjur o sincroniza con cloud. Caso más frecuente en migraciones.', 'Nombre de cuenta o secreto, entorno, tipo de consumo, owner técnico.'], ['Cloud Sync', 'Sincronizar hacia AWS, Azure Key Vault, GCP o HCP Vault.', 'Proveedor y servicio destino, ID de cuenta o proyecto, región, si la sincronización es bidireccional, si hay rotación automática en origen.'], ['Kubernetes / Conjur', 'Cargas en K8s que consumen secretos vía Conjur, CSI o Injector.', 'Namespace y ServiceAccount, método de autenticación, deployment, método de inyección, reinicio de pod tras rotación, pipeline asociado.'], ['Alero / Acceso externo', 'Proveedor o consultora con acceso temporal controlado.', 'Proveedor, usuario externo y correo para la invitación.']] },
          { tipo: 'encabezado', texto: 'Sobre el formulario PAM' },
          { tipo: 'parrafo', texto: 'El template tiene dos pestañas. FORMULARIO es para solicitudes individuales: marcás el caso de uso en Sí y sólo se muestran sus campos; podés marcar más de uno. MASIVO es una fila por cuenta o secreto, con columnas agrupadas por caso de uso — completás sólo las que aplican y la columna “Caso de uso” se elige del desplegable, no se escribe a mano.' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Descargá siempre el template desde AGP. No uses una copia guardada localmente: la versión del formulario cambia y una versión vieja te obliga a rehacer la solicitud.' },
        ],
      },
      {
        id: 'migracion', titulo: '5. Escenario A · Migrar un secreto que vive fuera de CyberArk', bajada: 'De una variable de entorno o repositorio a la bóveda, sin dejar el valor atrás.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Situación actual: el equipo mantiene uno o más secretos — típicamente una API Key — en una variable de entorno o en un repositorio. Situación objetivo: el secreto queda centralizado en la bóveda, con acceso controlado, y la aplicación lo consume sin que la persona desarrolladora conozca su valor.' },
          { tipo: 'pasos', pasos: [
            { texto: 'Identifica el secreto y su ubicación actual: repositorio, variable de entorno, archivo de configuración o pipeline.' },
            { texto: 'Identifica el caso en el Camino B del runbook AGP; normalmente corresponde a Aplicación.' },
            { texto: 'Ejecuta solicitud, Formulario PAM y aprobación.' },
            { texto: 'Integra el consumo con el mecanismo asignado por PAM; si es CCP, continúa con el escenario B.' },
            { texto: 'Elimina el secreto de su ubicación original.' },
            { texto: 'Valida el consumo desde la bóveda y configura rotación cuando aplique.' },
          ] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Si el secreto quedó expuesto por un incidente —por ejemplo, commiteado en un repositorio— la limpieza del historial es un paso previo e independiente, a cargo de Ingeniería de Software. Ese procedimiento está en el Runbook de Secret Scanning. La migración a CyberArk viene después de esa limpieza.' },
        ],
      },
      {
        id: 'ccp-mtls', titulo: '6. Escenario B · Consumir el secreto desde CCP con mTLS', bajada: 'Vocabulario, contrato HTTP y por qué un 404 no significa que la cuenta no exista.',
        cuerpo: [
          { tipo: 'parrafo', texto: 'CCP (Central Credential Provider, también llamado AIM Web Service) entrega credenciales a aplicaciones mediante un lookup autorizado sobre mTLS. Es el mecanismo de consumo más frecuente fuera de Kubernetes. El código está en Ejemplos de integración y los errores típicos en Diagnóstico.' },
          { tipo: 'codigo', lenguaje: 'text', codigo: 'Aplicación\n  -> HTTPS con certificado cliente (mTLS)\n  -> CyberArk CCP: GET /AIMWebService/api/Accounts\n  -> lookup: AppID + Safe + Object (+ Folder opcional)\n  <- UserName + Content\n  -> uso del secreto en memoria' },
          { tipo: 'destacado', variante: 'regla', texto: 'Content es el secreto: nunca se imprime, persiste en disco, envía a telemetría ni se incluye en una excepción.' },
          { tipo: 'encabezado', texto: 'Vocabulario esencial' },
          { tipo: 'tabla', encabezados: ['Concepto', 'Qué significa', 'Qué no debés asumir'], filas: [['PVWA', 'Interfaz que usan los operadores autorizados para localizar y administrar cuentas.', 'Que sus nombres visibles sean idénticos a los parámetros de CCP.'], ['Safe visible en PVWA', 'Contenedor donde el operador encuentra la cuenta.', 'Que sea igual al Safe del query de CCP. Se confirma en el handoff.'], ['Sobre o tarjeta de cuenta', 'Registro visible de una cuenta administrada dentro de PVWA.', 'Que su nombre sea el Object de la API ni el username real.'], ['AppID', 'Identidad lógica de la aplicación autorizada para consultar CCP.', 'Que sea un username o que identifique por sí sola la cuenta destino.'], ['Safe de CCP API', 'Contenedor exacto enviado como parámetro Safe.', 'Que se conserve si la cuenta nueva fue creada en otro Safe.'], ['Object de CCP API', 'Identificador exacto enviado como parámetro Object; selecciona el registro administrado.', 'Que sea el UserName, el nombre del sobre o un alias derivable.'], ['Folder', 'Carpeta dentro del Safe. Suele ser Root, pero se confirma.', 'Que siempre pueda omitirse o reutilizarse entre cuentas.'], ['UserName', 'Identidad devuelta por CCP para autenticarse en el sistema destino.', 'Que sea igual al Object, ni que una respuesta presente implique vigencia.'], ['Content', 'El password o secreto correspondiente al UserName devuelto.', 'Que pueda imprimirse, persistirse o compararse fuera de memoria segura.'], ['Certificado mTLS', 'Identidad criptográfica que la aplicación presenta a CCP.', 'Que reemplace la autorización de AppID/Safe/Object, ni que el certificado local coincida con el de runtime.'], ['Sistema destino', 'SAP, base de datos u otro servicio que finalmente valida UserName + Content.', 'Que un HTTP 200 de CCP implique autenticación exitosa ahí.']] },
          { tipo: 'destacado', variante: 'advertencia', texto: 'El plano operativo de PVWA y el lookup de CCP API no forman un contrato de igualdad. El Safe donde un operador ve la cuenta puede no ser el Safe que exige AIMWebService, el nombre del sobre puede no ser el Object, y el Object puede no ser el UserName. Tener acceso al password en PVWA no demuestra que un tuple de CCP resuelva esa misma credencial.' },
          { tipo: 'encabezado', texto: 'Rotación de password vs. reemplazo de identidad' },
          { tipo: 'parrafo', texto: 'Son dos cambios distintos y tratarlos igual es el error más caro de este escenario.' },
          { tipo: 'tabla', encabezados: ['Cambio', 'Rotación de password', 'Reemplazo de identidad'], filas: [['UserName', 'Igual', 'Cambia'], ['Content', 'Cambia', 'Cambia'], ['Safe / Object', 'Normalmente iguales', 'Pueden cambiar: la cuenta nueva puede vivir en otro registro o contenedor'], ['Acción', 'Verificar reconciliación y que CCP entregue la versión nueva', 'Actualizar el lookup completo y de forma atómica']] },
          { tipo: 'destacado', variante: 'informativo', texto: 'Cuando cambian username y password, la cuenta nueva puede requerir otro Safe y otro Object tanto en PVWA como en CCP API. Mantener el tuple anterior puede seguir devolviendo la cuenta vieja o producir un 404, aunque la cuenta nueva exista.' },
          { tipo: 'encabezado', texto: 'Datos que debe entregar CyberArk' },
          { tipo: 'tabla', encabezados: ['Dato', 'Uso'], filas: [['URL de CCP', 'Endpoint base de AIM, normalmente terminado en /AIMWebService/api/Accounts'], ['AppID', 'Aplicación autorizada'], ['Safe visible en PVWA', 'Contenedor que usa el operador para localizar la cuenta. Se mapea explícitamente al lookup de CCP.'], ['Nombre del sobre o tarjeta', 'Nombre visible de la cuenta en PVWA. Puede ser un alias.'], ['Safe de CCP API', 'Valor exacto enviado como query Safe.'], ['Object de CCP API', 'Identificador exacto enviado como query Object.'], ['Folder', 'Opcional, normalmente Root.'], ['Certificado cliente', 'PEM/CRT o PKCS#12 según el lenguaje.'], ['Private key', 'Para clientes PEM.'], ['Passphrase', 'Si la key o el PKCS#12 están cifrados.'], ['CA corporativa', 'Para validar el certificado del servidor.'], ['Reglas de red', 'DNS, VPN o ruta, TCP 443 y allowlist de origen.']] },
          { tipo: 'destacado', variante: 'informativo', texto: 'No infieras un Safe u Object de API desde lo que ves en PVWA ni desde el nombre de usuario, y no asumas que dos ambientes comparten los mismos valores. Documentá el mapeo confirmado en una matriz por ambiente, rol y sistema destino, sin passwords, Content, private keys ni passphrases.' },
          { tipo: 'encabezado', texto: 'Contrato HTTP' },
          { tipo: 'codigo', lenguaje: 'http', codigo: 'GET /AIMWebService/api/Accounts?AppID=<app-id>&Safe=<safe>&Object=<object>&Folder=Root\nAccept: application/json\n\n{\n  "UserName": "<username>",\n  "Content": "<secret>",\n  "Address": "<optional>",\n  "SystemNumber": "<optional>",\n  "Client": "<optional>"\n}' },
          { tipo: 'destacado', variante: 'informativo', texto: 'Criterio mínimo de éxito: HTTP 2xx, UserName presente y no vacío, Content presente y no vacío. Un HTTP 200 sólo demuestra que CCP resolvió y entregó un secreto. No demuestra que la credencial sea vigente ni que el sistema destino la acepte.' },
          { tipo: 'encabezado', texto: 'Configuración de los ejemplos' },
          { tipo: 'parrafo', texto: 'Copiá la plantilla fuera del repositorio y protegela. Contiene el lookup y rutas a archivos; nunca el secreto ni la passphrase.' },
          { tipo: 'codigo', lenguaje: 'dotenv', codigo: 'CYBERARK_API_URL=https://<ccp-host>/AIMWebService/api/Accounts\nCYBERARK_APP_ID=<app-id>\nCYBERARK_SAFE=<safe-name>\nCYBERARK_OBJECT=<object-name>\nCYBERARK_FOLDER=Root\n# Clientes PEM: curl, TypeScript y Python\nCYBERARK_CERT_FILE=/secure/path/client.crt\nCYBERARK_KEY_FILE=/secure/path/client.key\nCYBERARK_KEY_PASSPHRASE_FILE=/secure/path/client-key-passphrase.txt\nCYBERARK_CA_FILE=/secure/path/corporate-ca-chain.pem\n# Cliente Java: bundle PKCS#12 y un archivo con su password\nCYBERARK_P12_FILE=/secure/path/client.p12\nCYBERARK_P12_PASSWORD_FILE=/secure/path/client-p12-password.txt' },
        ],
      },
      {
        id: 'ejemplos', titulo: '7. Ejemplos de integración CCP',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Los ejemplos completos, con su package.json, pom.xml y scripts de verificación, están en la carpeta de la guía CCP en SharePoint. Ninguno contiene URLs, cuentas ni credenciales reales. Antes de copiar cualquiera de estos clientes a producción, leé las reglas de producción.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Carpeta de la guía CCP en SharePoint', descripcion: 'Ejemplos completos de TypeScript, curl, Python y Java; incluye fuentes, configuración y scripts de verificación.', href: 'https://cnco.sharepoint.com/:f:/s/CoEEngineering/IgDpM-jPO-tPRITOcBEU2KmVAT3H-elvD76ENKwU5Q0tC_U?e=s7iaKW' }] },
          { tipo: 'encabezado', texto: 'TypeScript · Node 18+' },
          { tipo: 'parrafo', texto: 'Es el stack más usado en Cencosud, así que empezá por acá. Sólo APIs HTTPS de Node en runtime: lee certificado, key, passphrase y CA desde archivos, valida la respuesta y nunca imprime el secreto. El punto de entrada reporta sólo la forma de la respuesta, nunca su valor.' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'Nunca hagas console.log(secret) ni console.log(secret.content). Loguear la forma (hasContent: true) es el contrato; loguear el valor lo rompe.' },
          { tipo: 'encabezado', texto: 'curl · diagnóstico de mTLS' },
          { tipo: 'parrafo', texto: 'Útil para verificar TLS, hostname y el mapeo del lookup antes de escribir código. Guardá la respuesta sólo en un archivo temporal con permisos restringidos, validá la presencia de UserName y Content, y borrá el body.' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'No agregues -k ni --insecure en producción. Si lo usás de forma temporal para diagnóstico, el resultado no valida la cadena de CA ni el hostname, así que no sirve como evidencia de que la integración quedó bien.' },
          { tipo: 'encabezado', texto: 'Python 3.10+' },
          { tipo: 'parrafo', texto: 'Sin dependencias externas: ssl y urllib de la biblioteca estándar. El ejemplo completo construye el contexto mTLS, limita el tamaño de la respuesta y valida UserName y Content antes de devolverlos.' },
          { tipo: 'encabezado', texto: 'Java 17+' },
          { tipo: 'parrafo', texto: 'El ejemplo usa un bundle PKCS#12. Si recibiste PEM, generalo de forma interactiva para no dejar el password en el historial de shell. La CA corporativa tiene que estar en el truststore de la JVM.' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'No reemplaces el truststore completo por un archivo que contenga únicamente la CA de CyberArk: debe conservar también las raíces necesarias para descargar dependencias y conectarse a otros servicios.' },
          { tipo: 'codigo', lenguaje: 'bash', codigo: 'cp cyberark.env.example /ruta/privada/cyberark.env\nchmod 600 /ruta/privada/cyberark.env\nset -a; source /ruta/privada/cyberark.env; set +a' },
          { tipo: 'codigo', lenguaje: 'dotenv', codigo: 'CYBERARK_API_URL=https://<ccp-host>/AIMWebService/api/Accounts\nCYBERARK_APP_ID=<app-id>\nCYBERARK_SAFE=<safe-name>\nCYBERARK_OBJECT=<object-name>\nCYBERARK_FOLDER=Root\nCYBERARK_CERT_FILE=/secure/path/client.crt\nCYBERARK_KEY_FILE=/secure/path/client.key\nCYBERARK_CA_FILE=/secure/path/corporate-ca-chain.pem' },
          { tipo: 'destacado', variante: 'advertencia', texto: 'No copies Safe ni Object desde PVWA. Usa siempre el mapeo confirmado por el owner de CyberArk para cada ambiente.' },
        ],
      },
      {
        id: 'produccion', titulo: '8. Reglas de producción',
        cuerpo: [
          { tipo: 'encabezado', texto: 'TLS y archivos' },
          { tipo: 'pasos', pasos: [{ texto: 'Validá siempre la CA y el hostname del servidor.' }, { texto: 'Montá cert y key con permisos mínimos, idealmente 0600.' }, { texto: 'Mantené la passphrase en un secret store y entregala a la aplicación como archivo o mecanismo equivalente.' }, { texto: 'No incluyas certificados, keys, passphrases, bodies ni archivos generados en Git ni en imágenes de contenedor.' }, { texto: 'Confirmá que cert y key forman pareja antes de desplegar.' }] },
          { tipo: 'encabezado', texto: 'Caché opcional' },
          { tipo: 'parrafo', texto: 'Si el volumen lo requiere, usá caché sólo en memoria, con el lookup completo y normalizado como clave: AppID + Safe + Object + Folder. TTL corto definido por política, del orden de 2 a 10 minutos. Reutilizá requests concurrentes idénticos. No caches errores ni respuestas incompletas. Invalidá sólo la entrada exacta cuando el sistema destino rechace la credencial con 401 o 403. Nunca registres la cache key cruda.' },
          { tipo: 'encabezado', texto: 'Timeout y reintentos' },
          { tipo: 'parrafo', texto: 'Definí timeout de conexión y timeout total. No reintentes automáticamente 400, 401 ni 403. Reintentá sólo fallas transitorias —timeout, DNS temporal o 5xx— con límite bajo y backoff con jitter. El GET de CCP es idempotente, pero una tormenta de reintentos puede saturar al proveedor.' },
          { tipo: 'encabezado', texto: 'Logging seguro' },
          { tipo: 'tabla', encabezados: ['Sí registrar', 'Nunca registrar'], filas: [['HTTP status', 'UserName o Content'], ['Duración de la llamada', 'Passphrase, private key o certificado completo'], ['Cache hit/miss', 'Body de la respuesta'], ['hasUsername=true/false', 'URL completa con query string'], ['hasContent=true/false', 'Headers y objetos de error HTTP completos'], ['Tipo de error de transporte', 'AppID, Safe y Object crudos si la política los trata como metadata sensible']] },
        ],
      },
      {
        id: 'diagnostico', titulo: '9. Diagnóstico y checklist de rollout',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Qué significa cada error y qué validar antes de salir a producción.' },
          { tipo: 'encabezado', texto: 'Diagnóstico rápido' },
          { tipo: 'tabla', encabezados: ['Señal', 'Interpretación probable'], filas: [['Falla DNS o TCP', 'VPN, ruta, DNS o firewall.'], ['Falla el handshake TLS', 'CA, vigencia, pareja cert/key, passphrase o mTLS.'], ['HTTP 400', 'Query incompleta o inconsistente, o problema de mapeo en CCP.'], ['HTTP 401 / 403', 'Certificado o AppID no autorizado, allowlist, o falta de acceso al Safe/Object.'], ['HTTP 404 con la cuenta visible en PVWA', 'El Safe/Object del query no corresponde al mapeo de API. No demuestra que la cuenta o su password no existan.'], ['HTTP 2xx sin UserName o Content', 'Respuesta incompleta. No usar ni cachear.'], ['HTTP 2xx con UserName inesperado', 'El Object resolvió otra identidad. Confirmar la relación Object → cuenta administrada → sistema destino.'], ['Cambió username y password pero se conservó Safe/Object', 'Se trató un reemplazo de identidad como rotación. Obtener y desplegar el tuple completo nuevo.'], ['CCP responde 2xx y el destino 401 / 403', 'CCP funcionó. Revisar vigencia, reconciliación, bloqueo, permisos y ambiente de la cuenta.'], ['Sin errores pero sin tráfico', 'No está validado. Ejecutar un flujo controlado.']] },
          { tipo: 'destacado', variante: 'informativo', texto: 'Para probar el mTLS con curl usá curl --http1.1 --verbose. La evidencia esperada es que el servidor solicite un certificado y el cliente lo presente. Redactá URL, subject y demás metadata antes de compartir el verbose.' },
          { tipo: 'encabezado', texto: 'Checklist antes del rollout' },
          { tipo: 'pasos', pasos: [{ texto: 'URL, AppID, Safe, Object y ambiente confirmados por el owner.' }, { texto: 'Safe visible en PVWA, nombre del sobre, Safe de API, Object de API y UserName esperado mapeados como campos distintos.' }, { texto: 'El cambio está clasificado como onboarding, rotación de password o reemplazo de identidad.' }, { texto: 'Si cambió el username, se revalidaron Safe y Object; no se asumió que sólo había que actualizar el password.' }, { texto: 'No se copiaron nombres de PVWA al query de CCP por similitud o convención.' }, { texto: 'Certificado vigente y pareja cert/key validada.' }, { texto: 'CA y hostname verificados, sin modo insecure.' }, { texto: 'HTTP 2xx con UserName y Content presentes.' }, { texto: 'Ningún log, excepción ni artefacto contiene valores sensibles.' }, { texto: 'Un flujo controlado del sistema destino funciona.' }, { texto: 'Si existe caché, se probó el aislamiento entre Object distintos.' }, { texto: 'Se probó rotación, reemplazo de identidad o invalidez según corresponda, sin persistir respuestas fallidas.' }, { texto: 'Existe rollback para los certificados y la configuración anteriores.' }] },
        ],
      },
      {
        id: 'contactos', titulo: '10. Contactos, referencias y estado del documento',
        cuerpo: [
          { tipo: 'parrafo', texto: 'A quién escribirle según el escenario y qué queda pendiente de definir.' },
          { tipo: 'encabezado', texto: 'Contactos y referencias' },
          { tipo: 'tabla', encabezados: ['Escenario', 'A quién contactar'], filas: [['Dudas de contenido, principios y alcance de esta guía', 'Ayelen · Seguridad de la Información'], ['Solicitud, formulario y onboarding en la bóveda', 'Equipo PAM · seguridad.pam@cencosud.com'], ['Configurar dependencias de rotación automática', 'Equipo PAM, antes de iniciar el AGP'], ['Dudas antes de adjuntar el formulario', 'Opción “Enviar consulta a PAM” desde AGP'], ['Estructura y mantenimiento de este documento en Atlas', 'Ingeniería de Software']] },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Portal AGP', descripcion: 'Iniciar una solicitud y descargar el formulario vigente.', href: 'https://agp.cencosud.corp/' }, { titulo: 'Ejemplos de código del escenario CCP', descripcion: 'Carpeta oficial en SharePoint.', href: 'https://cnco.sharepoint.com/:f:/s/CoEEngineering/IgDpM-jPO-tPRITOcBEU2KmVAT3H-elvD76ENKwU5Q0tC_U?e=s7iaKW' }, { titulo: 'Runbook de Secret Scanning', descripcion: 'Respuesta a alertas de secretos expuestos.', href: '/guias/secret-scanning-runbook/plan-de-mitigacion' }] },
          { tipo: 'encabezado', texto: 'Estado del documento y pendientes' },
          { tipo: 'parrafo', texto: 'Esta versión resuelve el escenario más urgente identificado —migrar secretos que hoy viven fuera de la bóveda, y consumirlos por CCP— sin esperar a que el conjunto completo de escenarios esté documentado. El material del equipo PAM sigue evolucionando.' },
          { tipo: 'tabla', encabezados: ['Tema', 'Estado'], filas: [['Validación formal de los cinco principios', 'Pendiente · Seguridad'], ['Runbook específico para retirar el secreto de su ubicación original', 'Pendiente · Seguridad'], ['Definición del usuario para “ambiente bajo” en el Camino A', 'Pendiente · Seguridad'], ['Condición de producción en el Camino B para usuarios programáticos cloud', 'Pendiente · Seguridad'], ['Ubicación del caso “ver contraseña / rescatar” entre Camino A y caso aparte', 'Pendiente · Seguridad'], ['Escenarios de aplicación nueva, API Keys con rotación, Cloud Sync y Kubernetes', 'Planificado']] },
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
          { tipo: 'video', titulo: 'Demo · Respuesta a alertas de Secret Scanning', duracion: '12:50', vimeoId: '1209984209' },
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
          { tipo: 'parrafo', texto: 'Resumen ejecutivo · Mitigación de secretos expuestos en código.' },
          { tipo: 'parrafo', texto: 'Secret Scanning GitHub & GitLab · status del programa. Corte al 31-ago-2026 · cierre: 01-sep-2026.' },
          { tipo: 'encabezado', texto: 'Avance total logrado' },
          { tipo: 'parrafo', texto: '63,3 % de avance total logrado sobre el volumen detectado al inicio del programa. Alertas cerradas o descartadas sobre el total detectado. Meta al 01-sep-2026: al menos 60 %.' },
          { tipo: 'enlace-destacado', titulo: 'Ver detalle del avance', etiqueta: 'Acceso previa aprobación', descripcion: 'Seguimiento por equipo, repositorio y cortes.', href: 'https://seguimiento-alertas.gamma.pulsar.codes/' },
          { tipo: 'encabezado', texto: 'Logros del periodo' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: '25,6 % atendido', descripcion: 'Del volumen vigente atendido desde el 23-jul-2026.' },
            { titulo: 'Foco en CRITICAL', descripcion: 'El esfuerzo del periodo se concentró en las alertas críticas: el mayor riesgo primero.' },
            { titulo: '+3,3 % sobre la meta', descripcion: 'Sobre la meta del 60 %, alcanzada antes del 01-sep-2026.' },
            { titulo: '1 día restante', descripcion: 'Sostener el ritmo para consolidar el cierre.' },
          ] },
          { tipo: 'destacado', variante: 'informativo', titulo: 'Cómo está el dato de este corte', texto: 'Corte de cierre del plan, completo en ambas plataformas. El avance del periodo es un movimiento neto: durante el programa ingresaron hallazgos nuevos y repositorios recién incorporados al escaneo, así que el trabajo bruto de cierre es mayor que el neto; un país aumentó su volumen pese a haber remediado. Alcanzar la meta no cierra las alertas que siguen abiertas: el procedimiento de revocación y limpieza sigue vigente para cada una.' },
          { tipo: 'encabezado', texto: 'Países con mayor avance en el periodo' },
          { tipo: 'grilla-tarjetas', tarjetas: [
            { titulo: 'Colombia · 57 %', descripcion: 'Avance en el periodo.' },
            { titulo: 'Perú · 43 %', descripcion: 'Avance en el periodo.' },
            { titulo: 'Regional · 33 %', descripcion: 'Avance en el periodo.' },
          ] },
          { tipo: 'encabezado', texto: 'Gobernanza' },
          { tipo: 'parrafo', texto: '1 equipo reportó formalmente qué repositorios y alertas le corresponden (CencoMalls Shopping) y sobre ese alcance declarado ya atendió alrededor del 79 % de sus alertas, con una reducción cercana al 72 % en los repositorios afectados. El resto de los equipos cerró el plan sin haber reportado su alcance, así que su avance solo se mide a nivel de país y departamento.' },
          { tipo: 'encabezado', texto: 'Historial de cortes' },
          { tipo: 'parrafo', texto: 'El programa reporta un corte por semana hasta el cierre del 01-sep-2026.' },
          { tipo: 'tabla', encabezados: ['Corte', 'Avance total', 'Atendido en el periodo'], filas: [['31-ago-2026 · Actual', '63,3 %', '25,6 %'], ['26-ago-2026', '56,3 %', '11,3 %'], ['19-ago-2026', '55,5 %', '9,9 %'], ['12-ago-2026', '54,6 %', '8,1 %'], ['4-ago-2026', '53,3 %', '5,3 %']] },
          { tipo: 'destacado', variante: 'informativo', titulo: 'Cómo leer el avance', texto: 'El porcentaje total se mide sobre el volumen detectado al inicio e incluye los falsos positivos descartados durante el triage, así que corre por delante del trabajo de remediación pendiente. El desglose —volúmenes, pendientes y seguimiento por equipo— no se publica acá: está en el detalle del avance, que se habilita previa aprobación.' },
          { tipo: 'enlace-destacado', titulo: 'Ver detalle del avance', etiqueta: 'Acceso previa aprobación', descripcion: 'Volúmenes, pendientes, seguimiento por equipo y por repositorio, y las planillas de seguimiento de cada corte.', href: 'https://seguimiento-alertas.gamma.pulsar.codes/' },
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
          { tipo: 'codigo-plataforma', titulo: 'Instalar git-filter-repo', variantes: [
            { id: 'macos', etiqueta: 'macOS', codigo: 'brew install git-filter-repo\ngit filter-repo --help' },
            { id: 'windows-linux', etiqueta: 'Windows / Linux', codigo: 'pip install git-filter-repo\ngit filter-repo --help' },
          ] },
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
          { tipo: 'destacado', variante: 'informativo', texto: 'GitHub no usa DefectDojo. La alerta se identifica, se resuelve y se cierra por completo dentro de GitHub, en /security/secret-scanning de tu repositorio.' },
          { tipo: 'encabezado', texto: 'Flujo paso a paso' },
          { tipo: 'pasos', pasos: [
            { titulo: 'Identifica', texto: 'Identifica la alerta en tu repositorio, en Security → Secret scanning alerts (ruta /security/secret-scanning).' },
            { titulo: 'Clasifica', texto: '¿Falso positivo o secreto real? Con el MCP configurado, usa el ', enlace: { texto: 'prompt de clasificación de secretos expuestos', href: '/guias/secret-scanning-runbook/prompts' }, textoPosterior: ' para automatizar este paso.' },
            { titulo: 'Falso positivo', texto: 'Usa Close as → False positive con comentario. Si el valor quedó commiteado, límpialo igual del historial con el ', enlace: { texto: 'prompt de limpieza', href: '/guias/secret-scanning-runbook/prompts' }, textoPosterior: '.' },
            { titulo: 'Secreto real', texto: 'Revoca primero en el origen, genera una credencial nueva, corrige el código, sube el cambio y limpia el historial, un secreto a la vez.' },
            { titulo: 'Valida la revocación', texto: 'Confirma en el proveedor que el valor anterior ya no es válido antes de dar el paso por completado.' },
            { titulo: 'Cierra', texto: 'Vuelve a /security/secret-scanning y cierra la alerta reflejando la acción tomada. GitHub se cierra acá, sin pasar por DefectDojo.' },
          ] },
        ],
      },
      {
        id: 'procedimiento-gitlab', titulo: '6. Procedimiento en GitLab',
        cuerpo: [
          { tipo: 'destacado', variante: 'informativo', texto: 'Los hallazgos de GitLab sí se responden en DefectDojo: es el paso final de este flujo, distinto al de GitHub.' },
          { tipo: 'encabezado', texto: 'Flujo paso a paso' },
          { tipo: 'pasos', pasos: [
            { titulo: 'Identifica', texto: 'Identifica la alerta en tu proyecto, en Security → Vulnerability report.' },
            { titulo: 'Clasifica', texto: 'Determina falso positivo o secreto real, con el mismo criterio usado en GitHub.' },
            { titulo: 'Falso positivo', texto: 'Cambia a Dismissed, motivo False positive y agrega una nota justificando. Limpia el historial si corresponde.' },
            { titulo: 'Secreto real', texto: 'Revoca primero en el sistema de origen, genera la nueva credencial en el vault, corrige el código, sube el cambio y limpia el historial, un secreto a la vez.' },
            { titulo: 'Valida la revocación', texto: 'Confirma que la credencial antigua ya no funciona antes de dar el caso por resuelto.' },
            { titulo: 'Actualiza GitLab', texto: 'Actualiza el estado de la vulnerabilidad en GitLab: Resolved o Dismissed según corresponda.' },
            { titulo: 'Emite tu respuesta', texto: 'Registra clasificación y evidencia de revocación en ', enlace: { texto: 'DefectDojo', href: 'https://defectdojo.cencosud.net/' }, textoPosterior: '; ahí Seguridad valida y cierra el caso.' },
          ] },
        ],
      },
      {
        id: 'secretos-dummy', titulo: '7. Usa secretos dummy, no valores reales',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Por qué existe esta regla' },
          { tipo: 'parrafo', texto: 'Para evitar falsos positivos en Gitleaks, GitHub Secret Scanning, Semgrep y otros escáneres, todo valor de ejemplo, prueba, mocking, demo o documentación debe usar siempre el prefijo DUMMY_ o MOCK_. Nunca uses valores aleatorios que parezcan credenciales reales.' },
          { tipo: 'destacado', variante: 'secreto-dummy', titulo: 'Prefijo obligatorio', texto: 'DUMMY_ o MOCK_ para toda credencial ficticia; nunca un valor que se asemeje a una credencial real.' },
          { tipo: 'enlace-destacado', variante: 'recurso', titulo: 'Guía de secretos dummy', etiqueta: 'Guía oficial', descripcion: 'Guía oficial DevSecOps.', href: 'https://devsecops.cencosud.net/es/docs/sdlc/secretosdummy/' },
        ],
      },
      {
        id: 'prompts', titulo: '8. Prompts para tu LLM favorito',
        cuerpo: [
          { tipo: 'parrafo', texto: 'Dos prompts listos para copiar en Copilot Chat, Claude o el asistente que uses en VS Code. El primero clasifica y prioriza las alertas del repositorio; el segundo limpia el historial local, un secreto a la vez, apoyado en git-filter-repo.' },
          { tipo: 'destacado', variante: 'informativo', texto: 'El toolset secret_protection expone list_secret_scanning_alerts y get_secret_scanning_alert. No uses run_secret_scanning: ese comando es para escaneos ad-hoc, no alertas históricas.' },
          { tipo: 'subtitulo-parrafo', titulo: 'Prompt 1 · Clasificación de secretos expuestos', texto: 'Requiere el MCP de GitHub con el toolset secret_protection.' },
          { tipo: 'codigo', lenguaje: 'markdown', codigo: [
            '---',
            'name: clasificacion-secretos-expuestos',
            'description: >-',
            '  Clasifica y prioriza alertas de GitHub Secret Scanning de un repositorio.',
            '  Úsala cuando el usuario pida listar, clasificar, priorizar o generar un',
            '  checklist de alertas de secretos expuestos, secret scanning, o remediación',
            '  de credenciales filtradas en un repositorio.',
            '---',
            '',
            '# Clasificación de secretos expuestos',
            '',
            '## Objetivo',
            'Dado un repositorio, obtener sus alertas de GitHub Secret Scanning, clasificarlas por tipo, priorizarlas por sensibilidad y generar una tabla con acción recomendada y checklist de remediación.',
            '',
            '## Alcance',
            'Antes de iniciar el procedimiento, si el usuario no ha indicado la organización y el repositorio a analizar, solicitárselos explícitamente. Todo el procedimiento se ejecuta únicamente sobre ese repositorio; no se debe consultar ni incluir alertas de otros repositorios u organizaciones salvo que el usuario lo indique de forma explícita.',
            '',
            '## Prerrequisitos',
            '- El servidor MCP de GitHub debe tener habilitado el toolset `secret_protection` (tools `list_secret_scanning_alerts` y `get_secret_scanning_alert`). Si estas tools no aparecen disponibles, informar al usuario que falta habilitar el toolset en la configuración del MCP; no intentar sustituir con `run_secret_scanning` (esa tool es para escaneo ad-hoc de contenido, no para alertas históricas).',
            '- Tener `git-filter-repo` instalado localmente, ya que los comandos de limpieza de historial que se documenten en el checklist de salida asumen su disponibilidad.',
            '',
            '## Procedimiento',
            '1. **Obtener alertas.** Usar `list_secret_scanning_alerts` sobre el repositorio indicado. Filtrar por `state=open` salvo que el usuario pida otro estado explícitamente.',
            '2. **Solicitar al usuario el motivo de la limpieza.** Antes de clasificar, preguntar cuál de las siguientes situaciones aplica (u otra que el usuario indique):',
            '   - Incidente confirmado / ataque activo (uso indebido detectado del secreto).',
            '   - Acción preventiva por exposición histórica (sin evidencia de uso indebido).',
            '   - Hallazgo de auditoría o requerimiento de compliance.',
            '   - Cierre, migración o archivado del repositorio.',
            '   Este motivo se usa como insumo para determinar la acción recomendada en el paso 5.',
            '3. **Clasificar por secret_type.** Usar el campo `secret_type` que retorna la API de GitHub para cada alerta.',
            '4. **Priorizar por sensibilidad**, en este orden (de mayor a menor prioridad):',
            '   1. Credenciales de base de datos (connection strings, contraseñas de DB)',
            '   2. Claves SSH / pares de claves (private keys, key pairs)',
            '   3. JWT / claves de API (API keys, tokens de servicio)',
            '   4. Secretos genéricos (passwords genéricos, tokens no clasificados)',
            '   5. Posible falso positivo (pendiente de confirmación del usuario, ver paso 6)',
            '5. **Determinar acción recomendada** por alerta, en función de la combinación de si la alerta fue marcada como falso positivo, el motivo de la limpieza, la prioridad/criticidad del tipo de secreto y si requiere coordinación con otros equipos de desarrollo y/o con infraestructura/seguridad.',
            '   - **Es falso positivo** → Reemplazar por el valor de referencia de la lista blanca otorgada por seguridad. No aplica rotación ni limpieza de historial.',
            '   - **No es falso positivo, incidente confirmado, sin necesidad de coordinación** → Rotar de inmediato + limpiar historial.',
            '   - **No es falso positivo, incidente confirmado, requiere coordinación (con otros equipos y/o infra/seguridad)** → Notificar a los equipos involucrados antes de rotar; limpieza de historial puede ejecutarse en paralelo sin esperar la coordinación.',
            '   - **No es falso positivo, acción preventiva o hallazgo de auditoría, sin coordinación** → Rotar + limpiar historial, sin urgencia de ventana anunciada.',
            '   - **No es falso positivo, acción preventiva o hallazgo de auditoría, requiere coordinación** → Programar rotación coordinada con los equipos involucrados; limpieza de historial en paralelo.',
            '   - **Secreto de firma JWT simple (no par de claves), cualquier motivo** → Rotación queda marcada como requiere decisión manual; solo se ejecuta la limpieza de historial de forma automática.',
            '6. **Generar un archivo Markdown con la tabla** con los campos checkeables (falso positivo, requiere coordinación con otros equipos, requiere coordinación con infra/seguridad) sin marcar y el campo Prioridad en blanco o como Pendiente. Incluir además, debajo de la tabla, una lista adicional titulada Equipos a coordinar con un ítem vacío por cada alerta, identificada por su N° de alerta, para que el usuario complete allí los equipos con los que requiere coordinar la rotación. Entregar este archivo al usuario y solicitarle que lo revise y complete directamente en el archivo, en lugar de solicitar esa información por chat.',
            '7. **Esperar confirmación del usuario de que terminó de completar el archivo.** Una vez confirmado, releer el archivo Markdown actualizado, incluyendo la lista de equipos a coordinar.',
            '8. **Hacer un doble check** de lo marcado por el usuario en el archivo contra la clasificación por tipo de secreto (pasos 3/4) antes de asignar la prioridad final, y señalar al usuario cualquier inconsistencia detectada.',
            '9. **Calcular la prioridad final** de cada alerta con base en tipo de secreto, motivo de la limpieza, falso positivo y necesidad de coordinación. Reordenar la lista completa según esta prioridad.',
            '10. **Regenerar el archivo Markdown** con la tabla final ya priorizada y con la columna Prioridad completa.',
            '',
            '## Formato de la tabla de salida',
            '| N° Alerta | Tipo de secreto | Prioridad | Falso positivo | Requiere coordinación con otros equipos | Requiere coordinación con infra/seguridad | Estado |',
            '|---|---|---|---|---|---|---|',
            '| 12 | database_connection_string | 1 | [ ] | [ ] | [ x ] | Abierta |',
            '| 15 | jwt_signing_secret | 3 | [ ] | [ x ] | [ x ] | Abierta |',
            '| 20 | generic_token | - | [ x ] | [ ] | [ ] | Abierta |',
            '',
            '**Equipos a coordinar**',
            '- Alerta 12: infra/seguridad',
            '- Alerta 15: equipo-web, infra/seguridad',
          ].join('\n') },
          { tipo: 'subtitulo-parrafo', titulo: 'Prompt 2 · Limpieza de historial', texto: 'Corre sobre un clon local del repositorio, usando valores de la lista blanca (DUMMY_ / MOCK_). Nunca reemplaza varios secretos en una sola pasada: es una regla de trazabilidad, no una limitación técnica.', separacionSuperior: true },
          { tipo: 'codigo', lenguaje: 'markdown', codigo: [
            '---',
            'name: limpieza-historial-secretos',
            'description: >-',
            '  Elimina o reemplaza un secreto expuesto del historial de un repositorio',
            '  Git local usando git-filter-repo, y verifica que no queden referencias',
            '  remanentes al valor original. Úsala cuando el usuario pida limpiar,',
            '  purgar, reemplazar o eliminar un secreto del historial de commits.',
            '---',
            '',
            '# Limpieza de secretos en el historial de Git',
            '',
            '## Alcance',
            'Esta skill opera exclusivamente sobre un repositorio Git clonado localmente. No ejecuta force push ni ninguna acción contra el remoto; eso queda a cargo del equipo de seguridad, según lo definido en el procedimiento general de la organización.',
            'Antes de iniciar, si el usuario no ha indicado la ruta del repositorio local sobre el que trabajar, solicitársela explícitamente. No operar sobre ningún otro repositorio ni ruta.',
            'Si el usuario solicita la eliminación de varios secretos, el procedimiento de reemplazo y verificación debe ejecutarse de forma individual para cada secreto, uno por uno. Nunca automatizar el reemplazo de múltiples secretos mediante un bucle `for`, un archivo de reemplazo con varias entradas procesadas en una sola pasada, ni ningún otro mecanismo que agrupe la operación. Esto es obligatorio para preservar la trazabilidad de cada limpieza.',
            '',
            '## Prerrequisitos',
            '- `git-filter-repo` instalado localmente.',
            '- El repositorio debe tener un clon fresco (`git-filter-repo` recomienda trabajar sobre un clon dedicado, no sobre el working directory habitual del desarrollador).',
            '- Conocer el valor exacto del secreto a eliminar, o el nombre de la entrada de la lista blanca que lo reemplaza.',
            '',
            '## Lista blanca de valores de reemplazo (seguridad)',
            'Los valores de reemplazo definidos por seguridad no son cadenas fijas: deben comenzar con el prefijo `DUMMY_` o `MOCK_`, seguido de un identificador descriptivo del tipo de secreto en mayúsculas y guion bajo.',
            '| Tipo de secreto | Ejemplo de valor de reemplazo |',
            '|---|---|',
            '| Credencial de base de datos | `MOCK_DATABASE_URI` |',
            '| Clave SSH / par de claves | `DUMMY_SSH_KEY` |',
            '| JWT / clave de API | `MOCK_API_KEY` |',
            '| Secreto genérico | `DUMMY_SECRET` |',
            'Si el usuario indica un valor de reemplazo distinto para el caso puntual, usar ese valor en lugar del generado, siempre que también respete el prefijo `DUMMY_` o `MOCK_`.',
            '',
            '## Procedimiento',
            '1. **Confirmar con el usuario:** ruta del repositorio local, valor exacto del secreto a eliminar (o el archivo/patrón que lo contiene) y qué valor de reemplazo usar (uno de la lista blanca u otro indicado por el usuario).',
            '2. **Preparar el archivo de reemplazo.** Crear un archivo de texto, por ejemplo `replacements.txt`, con el formato que espera `git-filter-repo`:',
            '   VALOR_SECRETO_EXPUESTO==>VALOR_DE_REEMPLAZO',
            '3. **Ejecutar `git-filter-repo` con `--replace-text`** sobre el repositorio local:',
            '   git filter-repo --replace-text replacements.txt',
            '   Esto reescribe todo el historial, sustituyendo cada aparición del valor original por el valor de reemplazo en todos los commits, ramas y tags.',
            '4. **Verificar que no queden referencias al valor original.** Usar `git log` sobre todo el historial reescrito para buscar coincidencias del secreto original:',
            '   git --no-pager log --all -p -S "VALOR_SECRETO_EXPUESTO" --source',
            '   `-S` busca commits donde cambió el conteo de apariciones; `--all` incluye todas las ramas y referencias; `--no-pager` evita interacción.',
            '   Complementar con una búsqueda directa sobre el árbol de cada commit, para cubrir casos que `-S` pueda no capturar:',
            '   git --no-pager rev-list --all | xargs -I {} git --no-pager grep -l "VALOR_SECRETO_EXPUESTO" {} 2>/dev/null',
            '   Si cualquiera de los comandos retorna resultados, el secreto original todavía existe en el historial reescrito y la limpieza no se considera completa.',
            '5. **Informar el resultado al usuario:** si no se encontraron coincidencias, la limpieza es exitosa a nivel local y queda pendiente el force push coordinado con seguridad; si se encontraron coincidencias, reportar los commits/ramas afectados.',
            '',
            '## Restricción',
            'No ejecutar `git push --force` ni ninguna operación contra el repositorio remoto. Esta skill se limita a la reescritura y verificación del historial local.',
          ].join('\n') },
        ],
      },
      {
        id: 'recursos', titulo: '9. Recursos y contacto',
        cuerpo: [
          { tipo: 'encabezado', texto: 'Herramientas y guías' },
          { tipo: 'parrafo', texto: 'Enlaces que vas a necesitar durante el procedimiento.' },
          { tipo: 'enlaces', enlaces: [
            { titulo: 'DefectDojo', descripcion: 'Solo para hallazgos de GitLab: emite tu respuesta y sigue el estado del caso.', href: 'https://defectdojo.cencosud.net/', icono: 'defectdojo' },
            { titulo: 'Cápsulas de seguridad', descripcion: 'Buenas prácticas y funcionamiento de DefectDojo.', href: 'https://cencodesec.cencosud.net/capsulas', icono: 'capsulas' },
          ] },
          { tipo: 'encabezado', texto: 'Seguimiento del programa' },
          { tipo: 'parrafo', texto: 'Las planillas de seguimiento se publican en cada corte semanal e identifican repositorios, alertas y responsables. No se enlazan desde este runbook: ese nivel de detalle es superficie de ataque y se entrega de forma controlada. Pedí acceso al detalle del avance y ahí vas a encontrar el seguimiento vigente y los cortes anteriores.' },
          { tipo: 'enlace-destacado', titulo: 'Ver detalle del avance', etiqueta: 'Acceso previa aprobación', descripcion: 'Seguimiento vigente e histórico por corte, con el desglose por equipo y por repositorio. Debes solicitar acceso para verlo.', href: 'https://seguimiento-alertas.gamma.pulsar.codes/' },
          { tipo: 'encabezado', texto: 'Estado del programa' },
          { tipo: 'parrafo', texto: 'El avance reportado en cada corte, en términos relativos.' },
          { tipo: 'enlaces', enlaces: [{ titulo: 'Avance del programa', descripcion: 'Resumen ejecutivo del corte al 31-ago-2026, brecha contra la meta y logros del periodo.', href: '/guias/secret-scanning-runbook/avance', icono: 'avance' }] },
          { tipo: 'encabezado', texto: 'Contactos por escenario' },
          { tipo: 'parrafo', texto: 'A quién escribir cuando el procedimiento se traba. Si tu caso no está acá, escribe a Seguridad antes de improvisar una salida.' },
          { tipo: 'tabla', encabezados: ['Escenario', 'A quién contactar'], filas: [
            ['Necesitas apoyo para hacer force push en tu repositorio. El prompt de limpieza no ejecuta force push: reescribe y verifica el historial local, y el push al remoto se coordina con estos contactos.', 'Gabriel Lavini o Mathias Velilla'],
            ['No sabes dónde revocar un secreto expuesto', 'Plataforma o Seguridad'],
            ['El secreto es una API key interna de Cencosud', 'Equipo dueño del sistema (quien emitió la credencial)'],
            ['Cierre o validación de un caso de GitLab en DefectDojo. Aplica solo a hallazgos de GitLab. En GitHub la alerta se cierra en el propio repositorio, sin pasar por DefectDojo.', 'Seguridad'],
            ['Necesitas acceso al detalle del avance del programa. El sitio de seguimiento no está abierto por defecto: el acceso se solicita.', 'Seguridad'],
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

export const categoriaGuiaOpciones = ['Gobierno', 'Seguridad', 'Operaciones', 'Observabilidad'] as const
export const madurezGuiaOpciones = ['production', 'experimental'] as const

export const madurezGuiaLabel: Record<DocumentoGuia['madurez'], string> = {
  production: 'Producción',
  experimental: 'Experimental',
  beta: 'Beta',
}
