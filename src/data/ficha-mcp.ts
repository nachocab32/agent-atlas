// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { FichaMcpDetalle } from '@/types/ficha-mcp'

export const fichaMcpDetallePorId: Record<string, FichaMcpDetalle> = {
  'mcp-ai-workflow': {
    tools: [
      {
        nombre: 'Refinamiento',
        descripcion: 'Lee work items de Jira, enriquece la descripción, desglosa tareas, propone criterios y estima esfuerzo.',
        acceso: 'Read / Write',
      },
      {
        nombre: 'Desarrollo',
        descripcion: 'Accede al contexto completo del work item para que el asistente genere código, tests y documentación alineados.',
        acceso: 'Read',
      },
      {
        nombre: 'Validación',
        descripcion: 'Contrasta el código generado contra los criterios de aceptación y actualiza el estado en Jira.',
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
      { titulo: 'Introducción', duracion: '01:30' },
      { titulo: 'Recomendaciones', duracion: '02:10' },
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
  },
}
