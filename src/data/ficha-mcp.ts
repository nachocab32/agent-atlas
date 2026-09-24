// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { FichaMcpDetalle } from '@/types/ficha-mcp'

export const fichaMcpDetallePorId: Record<string, FichaMcpDetalle> = {
  'mcp-coralogix': {
    queResuelve: [
      'Consultar logs, métricas y trazas para reunir evidencia de diagnóstico.',
      'Ejecutar consultas DataPrime y revisar alertas y reglas de parsing según los permisos de la identidad.',
      'Mantener el análisis en el entorno de trabajo, sin copiar credenciales al repositorio ni a conversaciones.',
    ],
    antesDeEmpezar: [
      'Usa un cliente compatible con MCP remoto y una identidad autorizada en la cuenta de Coralogix.',
      'Confirma región, permisos y conectividad antes de conectar. El endpoint documentado corresponde a US2.',
      'API key y OAuth son alternativas: una conexión con bearer token no requiere login OAuth.',
    ],
    urlConexion: 'https://api.us2.coralogix.com/mgmt/api/v1/mcp',
    configCodigo: 'export CORALOGIX_API_KEY="<TU_API_KEY_PERSONAL>"\ncodex mcp add coralogix-server --url "https://api.us2.coralogix.com/mgmt/api/v1/mcp" --bearer-token-env-var CORALOGIX_API_KEY\ncodex mcp list\ncodex mcp get coralogix-server',
    clientesSoportados: ['Codex', 'Cursor', 'OpenCode', 'Claude Code', 'Claude Desktop / web'],
    configuraciones: [
      {
        titulo: 'Codex · API key',
        pasos: ['Define CORALOGIX_API_KEY mediante el mecanismo autorizado de secretos.', 'Registra el servidor, recarga el cliente y verifica que aparezca conectado.'],
        codigo: 'export CORALOGIX_API_KEY="<TU_API_KEY_PERSONAL>"\ncodex mcp add coralogix-server --url "https://api.us2.coralogix.com/mgmt/api/v1/mcp" --bearer-token-env-var CORALOGIX_API_KEY',
      },
      {
        titulo: 'OAuth en otros clientes',
        pasos: ['Elige OAuth en la configuración MCP de Cursor, OpenCode, Claude Code o Claude Desktop/web.', 'Completa la autorización en el navegador y confirma los permisos efectivos de tu identidad.'],
      },
    ],
    pruebaVerificacion: {
      pregunta: 'Consulta los errores del servicio <SERVICIO> en el ambiente <AMBIENTE> durante los últimos 30 minutos. Resume patrones y evidencia, indicando el intervalo consultado. No ejecutes modificaciones.',
      exito: 'El servidor aparece conectado, publica herramientas y devuelve evidencia del servicio e intervalo solicitado.',
      falla: 'Si no hay datos, revisa región, servicio, intervalo y permisos antes de asumir una falla del servidor.',
    },
    seguridad: [
      'Mantén las credenciales fuera del repositorio y de las conversaciones.',
      'No pegues resultados sensibles en tickets ni en prompts compartidos.',
      'Revisa el alcance de cada herramienta antes de ejecutar cambios; las operaciones de escritura requieren permisos específicos.',
    ],
    troubleshooting: [
      'Error de autenticación: revisa vigencia de la credencial o repite OAuth.',
      'Acceso denegado: valida permisos con el administrador de la cuenta.',
      'Problemas de conectividad: revisa la red autorizada y escala con hora, cliente, región y mensaje sanitizado.',
    ],
    videos: [],
  },
  'mcp-ai-workflow': {
    tools: [
      {
        nombre: 'Refinamiento',
        descripcion: 'Lee work items de Jira y usa tu asistente para enriquecer la descripción, desglosar tareas, proponer criterios de aceptación y estimar el esfuerzo antes de comenzar el desarrollo.',
        acceso: 'Read / Write',
      },
      {
        nombre: 'Desarrollo',
        descripcion: 'Accede al contexto completo del work item desde tu IDE para que tu asistente genere código, tests y documentación alineados directamente con los requerimientos de la tarea.',
        acceso: 'Read',
      },
      {
        nombre: 'Validación',
        descripcion: 'Contrasta el código o los entregables generados contra los criterios de aceptación del work item y actualiza el estado en Jira automáticamente al aprobar o rechazar la tarea.',
        acceso: 'Read / Write',
      },
    ],
    configCodigo: `"mcpServers": {
  "W-AI": {
    "command": "npx",
    "args": ["mcp-remote", "https://ai-workflow-coe-utils.coe-utils.ecomm.cencosud.com/mcp"]
  }
}`,
    idesRecomendados: ['Cursor', 'Windsurf', 'Kiro', 'otros IDEs MCP-ready'],
    videos: [
      { titulo: 'Introducción', duracion: '01:30', vimeoId: '1209904488' },
      { titulo: 'Recomendaciones', duracion: '02:10', vimeoId: '1209904487' },
    ],
    configuraciones: [
      { titulo: 'Cursor', pasos: ['Abre la configuración de servidores MCP.', 'Pega el snippet de AI-Workflow.', 'Guarda y reinicia el IDE para cargar el servidor.'], codigo: `{
  "mcpServers": {
    "W-AI": { "command": "npx", "args": ["mcp-remote", "https://ai-workflow-coe-utils.coe-utils.ecomm.cencosud.com/mcp"] }
  }
}` },
      { titulo: 'Windsurf, Kiro y otros IDEs MCP-ready', pasos: ['Abre la configuración MCP del IDE.', 'Usa el mismo snippet de conexión.', 'Reinicia la sesión y comprueba que las tres tools estén disponibles.'] },
    ],
  },
  'mcp-atlas-knowledge': {
    queResuelve: [
      'Buscar sin abrir el portal.',
      'Elegir el acelerador correcto — cada asset declara para qué sirve y cuándo no usarlo.',
      'Consultar la Toma de Control mientras se trabaja — los cuatro pilares y las 15 plantillas quedan disponibles como contexto.',
      'Generar un arquetipo conversando, campo por campo.',
      'Revisar el tech radar.',
    ],
    queNoHace: [
      'No lee código ni repositorio, solo contenido publicado en Atlas.',
      'No toca Jira (para eso está el MCP AI-Workflow; ambos pueden convivir).',
      'No escribe en el portal — no publica ni edita.',
      'No sabe de permisos, proyectos ni historial del equipo.',
    ],
    antesDeEmpezar: [
      'No requiere credencial, token ni solicitar acceso: el servidor vive en la red interna, solo necesitas VPN corporativa.',
      'Si la VPN está caída, la conexión falla sin mensaje claro: queda esperando ~20 segundos y termina en timeout sin mencionar la VPN.',
    ],
    urlConexion: 'https://atlas-platform.cencosud.net/api/mcp',
    configCodigo: `{
  "mcpServers": {
    "atlas-knowledge": {
      "command": "npx",
      "args": ["mcp-remote", "https://atlas-platform.cencosud.net/api/mcp"]
    }
  }
}`,
    clientesSoportados: ['Claude Desktop', 'Claude Code', 'Cursor', 'VS Code + Copilot'],
    pruebaVerificacion: {
      pregunta: '¿Cuáles son los cuatro pilares del manual de Toma de Control de Atlas?',
      exito: 'Conectado si nombra los cuatro pilares con link.',
      falla: 'No conectado si responde en general, dice que no encuentra información, o pide más contexto.',
    },
    preguntasPorAudiencia: [
      {
        audiencia: 'Si desarrollas',
        preguntas: [
          '¿Hay alguna API interna que ya resuelva autenticación de usuarios?',
          'Necesito partir un microservicio nuevo. ¿Qué arquetipo me conviene y qué me va a pedir?',
          '¿Qué dice el tech radar sobre Kafka?',
        ],
      },
      {
        audiencia: 'Si estás en diseño o producto',
        preguntas: [
          '¿Qué es la Toma de Control y en qué momento me toca?',
          'Muéstrame la plantilla de Ficha del Producto y explícame cada sección.',
          '¿En qué etapa de Cencoflow entra la validación de UX?',
        ],
      },
      {
        audiencia: 'Si lideras un equipo',
        preguntas: [
          'Vamos a tomar control de un producto existente. ¿Qué artefactos tengo que preparar?',
          '¿Qué skills hay publicadas que le sirvan a mi equipo?',
        ],
      },
    ],
    seguridad: [
      'Activar confirmación antes de ejecutar herramientas.',
      'Dos tools producen archivos (generate_archetype, download_skill); el resto solo lee.',
      'El servidor no requiere autenticación. Cualquier persona dentro de la red corporativa puede consultarlo. El contenido que publiques en Atlas queda legible por MCP para toda la red interna, aunque en el portal requiera sesión.',
      'Cuidado al mezclar servidores MCP: el contenido de uno puede influir lo que el asistente hace con otro.',
    ],
    troubleshooting: [
      'El asistente no ve el servidor tras configurarlo — cerrar del todo y reabrir (en Mac, Cmd+Q).',
      'Timeout o error de red.',
      'El cliente rechaza la URL.',
      'El asistente responde cosas que no están en Atlas.',
      'Error 406.',
      'Claude Code configurado pero las tools no aparecen.',
    ],
    videos: [],
    configuraciones: [
      { titulo: 'Claude Desktop', pasos: ['Ve a Configuración → Conectores.', 'Elige Agregar conector personalizado.', 'Pega la URL, nómbrala Atlas y guarda.'], codigo: 'https://atlas-platform.cencosud.net/api/mcp' },
      { titulo: 'Claude Code, Cursor y VS Code + Copilot', pasos: ['Si tu cliente no acepta una URL directa, instala Node.js.', 'Agrega el puente mcp-remote con el snippet.', 'Reinicia el cliente y realiza la prueba de verificación.'], codigo: `{
  "mcpServers": {
    "atlas-knowledge": {
      "command": "npx",
      "args": ["mcp-remote", "https://atlas-platform.cencosud.net/api/mcp"]
    }
  }
}` },
    ],
  },
}
