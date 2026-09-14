// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { FichaSkillDetalle } from '@/types/ficha-skill'

export const fichaSkillDetalleDesign: Record<string, FichaSkillDetalle> = {
  'itds-board-composer': {
    friccion:
      'Elimina el tiempo de armar pantallas en Penpot manualmente componente por componente. No requiere conocer los nombres de los componentes del DS: basta con describir lo que se necesita.',
    bloques: [
      {
        titulo: 'Qué hace',
        items: [
          'Interpreta la descripción y construye el board directamente en Penpot, sin URL de Figma ni archivos externos — trabaja exclusivamente con el MCP de Penpot conectado al archivo IT DS Lab.',
          'Entrega boards con flex layout, tokens semánticos vinculados y textos reales, nunca placeholders.',
          'Construye pantallas individuales (mobile 375×812 o desktop 1280×832) o flujos de múltiples pantallas, cada una en su propia página de Penpot.',
          'Informa si un componente no existe en la librería antes de construir.',
          'Genera un reporte de test al finalizar cada build.',
        ],
      },
    ],
    activacion: [
      { senal: 'Tipo de pantalla + plataforma', ejemplo: 'Diseñame un login desktop' },
      { senal: 'Flujo de pantallas', ejemplo: 'Crea el flujo de checkout mobile' },
      { senal: 'Descripción de secciones o componentes', ejemplo: 'Arma un dashboard con tabla y filtros' },
      { senal: 'Pedido de modal o componente contenedor', ejemplo: 'Agrega un modal de confirmación' },
    ],
    evitar: [
      'No genera código: entrega boards en Penpot.',
      'No inventa componentes fuera de la librería IT DS.',
      'El cambio de theme IT → Arcus es manual en Penpot; el skill siempre construye con IT.',
    ],
    requisitos: [
      'Librería IT DS activa y conectada (IT DS Lab o equivalente).',
      'Token Studio con los sets del IT DS cargados.',
      'MCP de Penpot conectado en la sesión de Claude Code.',
    ],
    archivos: ['SKILL.md', 'INSTALL.md', 'references/', '  ├── ds-snapshot.md', '  ├── component-decisions.md', '  ├── component-descriptions.md', '  └── penpot-tokens.md'],
    video: { duracion: '01:33' },
    relaciones: [
      {
        nombre: 'ITDS Code Forge',
        frase: 'Cuando el board esté validado, exporta el mismo flujo a código con ITDS Code Forge.',
      },
    ],
  },
  'itds-code-forge': {
    bloques: [
      {
        titulo: 'Output por construcción',
        items: [
          '[Nombre].jsx — componente React funcional.',
          '[Nombre].html — previsualización standalone con mockup de dispositivo.',
          'tokens.css',
          'components.css',
        ],
      },
    ],
    tablas: [
      {
        titulo: 'Los 6 modos de trabajo',
        columnas: ['Modo', 'Señales', 'Output'],
        filas: [
          ['A — Pantalla única', '"construye la pantalla X", "arma el login"', '4 archivos de la pantalla'],
          ['B — Flujo de pantallas', '"construye el flujo de checkout"', '4 archivos con navegación animada'],
          ['C — Editar pantalla existente', '"cambia el botón", "agrega un Alert"', 'Archivos actualizados solo en lo pedido'],
          ['D — Exportar a producción', '"exportar a Next.js", "versión para Vite"', 'Código production-ready con imports locales'],
          ['E — Iteración rápida', '"cambia el color" (post-entrega)', 'Ajuste puntual sin wizard completo'],
          ['F — Documentación / Storybook', '"genera el README"', 'README.md + página de estados'],
        ],
      },
    ],
    activacion: [
      { senal: 'Pantalla única', ejemplo: 'Construye la pantalla de login' },
      { senal: 'Flujo', ejemplo: 'Construye el happy path de registro' },
      { senal: 'Editar pantalla', ejemplo: 'Agrega un Alert y ajusta el spacing' },
      { senal: 'Exportar', ejemplo: 'Exporta a Next.js o Vite' },
    ],
    evitar: [
      'No diseña en Penpot: consume el DS desde ahí.',
      'No usa HEX hardcodeados, librerías externas ni componentes inventados.',
      'Plataformas: Mobile (iPhone 15 Pro, 24.375rem), Desktop (MacBook Pro, 1280px).',
      'Themes: IT (default) y Arcus (bajo pedido).',
    ],
    requisitos: [
      'Claude Desktop con el skill instalado.',
      'MCP de Penpot con Access Token válido.',
      'Archivo Penpot del IT DS Lab accesible.',
      'Node.js solo si se exporta a Next.js/Vite.',
    ],
    archivos: ['SKILL.md', 'INSTALL.md', 'references/  (7 archivos, incluido ds-snapshot.md como fuente de verdad)', 'tests/  (3 archivos de test)'],
    video: { duracion: '01:58' },
    mantenedor: { equipo: 'Equipo Design UX (dato provisional según el portal)', fechaPublicacion: '23 jul 2026', estado: 'Vigente' },
    widgetUtilidad: true,
    relaciones: [{ nombre: 'ITDS Board Composer', frase: 'Diseña primero el board en Penpot con ITDS Board Composer, luego lleva ese mismo flujo a código con este skill.' }],
  },
  'ux-heuristics-review': {
    bloques: [
      {
        titulo: 'El informe incluye',
        items: [
          'Puntuación 0–10 por heurística, score global ponderado.',
          'Top 3 problemas críticos y top 3 fortalezas.',
          'Ejemplos de mejora concretos (no genéricos).',
          'Sigue la paleta corporativa Cencosud (#061494, #06EACE) y cumple WCAG AA.',
        ],
      },
      {
        titulo: 'Cómo construye por dentro',
        items: [
          'Recibe input (imagen o URL).',
          'Si es URL, captura screenshot vía Microlink.',
          'Analiza con IA.',
          'Renderiza el informe en pantalla.',
          'Pregunta formato de exportación.',
          'Genera PDF/PPTX/Slides.',
        ],
      },
    ],
    tablas: [
      {
        titulo: 'Escala de severidad',
        columnas: ['Score', 'Nivel', 'Acción'],
        filas: [
          ['0–3', 'Crítico', 'Corregir antes de lanzar'],
          ['4–5', 'Alto', 'Planificar en próximo sprint'],
          ['6–7', 'Medio', 'Mejorar iterativamente'],
          ['8–9', 'Bueno', 'Mantener'],
          ['10', 'Excelente', 'Referencia de buenas prácticas'],
        ],
      },
    ],
    activacion: [
      { senal: 'Feedback sobre screenshot', ejemplo: '¿Qué piensas de esta pantalla?' },
      { senal: 'Usabilidad', ejemplo: 'Evalúa este flujo con heurísticas' },
      { senal: 'URL o mockup', ejemplo: 'Revisa https://…' },
      { senal: 'Mejora', ejemplo: '¿Cómo mejoraría este diseño?' },
    ],
    evitar: [
      'No compensa screenshots de baja calidad: lo indica en el informe.',
      'Entrega hallazgos accionables, no el rediseño ni el código.',
    ],
    requisitos: ['Claude Code instalado (npm install -g @anthropic-ai/claude-code).', 'Screenshot, URL, mockup o wireframe.', 'Contexto del flujo completo para una evaluación más precisa.'],
    archivos: [
      'SKILL.md',
      'README.md',
      'references/',
      '  ├── heuristics.md',
      '  ├── analysis-prompt.md',
      '  ├── output-schema.md',
      '  ├── report-template.md',
      '  ├── document-standards.md',
      '  ├── spacing-standards.md',
      '  └── (más sus 6 equivalentes en inglés)',
    ],
    video: { duracion: '00:51' },
  },
}
