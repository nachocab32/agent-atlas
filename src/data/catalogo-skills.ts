// Contenido extraído del portal real de Atlas (localhost:3000) el 8 de septiembre de 2026.
// Puede haber cambiado desde entonces; verificar contra el portal antes de una demo externa.
//
// equiposUsando, fechaIncorporacion y aplicaAlStack son 0 / false para los activos
// sin dato real ni mock previo equivalente. No se fabricó ninguna métrica.
//
// enCencoFlow queda vacío en los 7: el portal real no organiza Skills por etapa de CencoFlow.
// contenido queda con una sola línea (resumen) para las 6 skills de esta tanda — el detalle
// real (fricción, activación, archivos, video, mantenedor, relaciones) vive en
// src/data/ficha-skill.ts, cargado por la plantilla FichaSkillGuia.
//
// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { Activo } from '@/types/catalogo'

const responsableDesignUx = { nombre: 'Cencosud Design & UX', area: 'Design & UX', iniciales: 'DU' }
const responsableArquitectura = {
  nombre: 'Enterprise Architecture',
  area: 'Arquitectura Empresarial',
  iniciales: 'EA',
}
const responsableEngineeringCoe = {
  nombre: 'Engineering CoE',
  area: 'Centro de Excelencia de Ingeniería',
  iniciales: 'EC',
}

export const activosSkills: Activo[] = [
  {
    id: 'deck-gen',
    nombre: 'deck-gen',
    tipo: 'skill',
    version: '2.2',
    descripcion:
      'Genera presentaciones ejecutivas on-brand en HTML o PowerPoint a partir de contenido en texto libre, con la identidad de marca Cencosud aplicada vía tokens de theme.',
    descripcionLarga:
      'Genera presentaciones, decks, slides y diapositivas on-brand a partir del contenido del usuario. Cubre reportes, pitches, cursos y propuestas, en identidades visuales (themes) intercambiables. Arma primero un blueprint del deck para que el usuario lo apruebe, y recién después construye el resultado, con verificación automática de calidad visual antes de entregarlo.',
    categorias: ['Diseño & UX', 'tool', 'claude'],
    equiposUsando: 14,
    aplicaAlStack: true,
    fechaIncorporacion: '2026-07-12',
    fechaActualizacion: '2026-08-17',
    responsable: responsableDesignUx,
    pruebalo: [
      {
        id: 'p1',
        texto:
          'Necesito un deck de reporte para el comité directivo con los resultados del trimestre: [pegar KPIs]. Formato: PowerPoint. Foco en 3-4 métricas clave y una lectura ejecutiva del avance.',
      },
      { id: 'p2', texto: 'Arma un pitch de producto para presentar ante el directorio.' },
      { id: 'p3', texto: 'Convertí este contenido de capacitación en una presentación educativa por módulos.' },
    ],
    contenido: [
      '1. Input (tipo + formato + contenido).',
      '2. Paso 0: splash + pregunta guiada (tipo de presentación, theme). La pregunta de formato solo aparece si el theme elegido es Cencosud; con DevExp el resultado es HTML directo.',
      '3. Blueprint con el motor de ensamblaje (requiere aprobación del usuario).',
      '4. Construcción slide por slide (HTML o PPTX) con tokens del theme.',
      '5. Verificación (Playwright / LibreOffice).',
      '6. Entrega autocontenida.',
    ],
    enCencoFlow: [],
    requisitos: [
      { id: 'r1', descripcion: 'Claude Code instalado (npm install -g @anthropic-ai/claude-code)', cumplido: true },
      { id: 'r2', descripcion: 'Acceso a la carpeta de skills de Claude Code (~/.claude/skills/)', cumplido: true },
      {
        id: 'r3',
        descripcion: 'Perfil desarrollador: acceso a CencoSkills vía terminal, npm y accesos corporativos',
        cumplido: false,
      },
      {
        id: 'r4',
        descripcion: 'Perfil no desarrollador: sin requisitos, descarga directa del .zip',
        cumplido: true,
      },
    ],
  },
  {
    id: 'itds-board-composer',
    nombre: 'ITDS Board Composer',
    tipo: 'skill',
    version: '1.5',
    descripcion: 'Construye boards completos en Penpot a partir de una descripción en lenguaje natural con el IT DS.',
    descripcionLarga:
      'Construye boards completos en Penpot a partir de una descripción en lenguaje natural, usando exclusivamente los componentes y tokens reales del IT DS de Cencosud.',
    categorias: ['Diseño & UX', 'tool', 'core', 'claude', 'penpot'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableDesignUx,
    pruebalo: [
      {
        id: 'p1',
        texto:
          "Diseña un login mobile con el IT DS. Debe tener: campo de email, campo de contraseña, checkbox de 'Recordarme' y dos botones en el footer: 'Ingresar' (primario) y 'Crear cuenta' (secundario).",
      },
    ],
    contenido: ['Construye boards completos en Penpot a partir de una descripción en lenguaje natural con el IT DS.'],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'itds-code-forge',
    nombre: 'ITDS Code Forge',
    tipo: 'skill',
    version: '1.0',
    descripcion: 'Genera pantallas y flujos en React + CSS variables con el IT DS, inspeccionando Penpot vía MCP.',
    descripcionLarga:
      'Construye pantallas web y flujos interactivos en React + CSS variables usando exclusivamente los componentes del IT DS (459 componentes, 65 páginas), inspeccionando Penpot vía MCP. Sin HEX hardcodeados, sin librerías externas, sin componentes inventados.',
    categorias: ['Diseño & UX', 'tool', 'production', 'claude', 'penpot'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableDesignUx,
    pruebalo: [],
    contenido: ['Genera pantallas y flujos en React + CSS variables con el IT DS, inspeccionando Penpot vía MCP.'],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'ux-heuristics-review',
    nombre: 'UX Heuristics Review',
    tipo: 'skill',
    version: '2.0',
    descripcion: 'Evalúa interfaces con las 10 Heurísticas de Nielsen y genera un informe exportable.',
    descripcionLarga:
      'Evalúa una interfaz digital con las 10 heurísticas de Nielsen y entrega un informe profesional exportable a PDF, PowerPoint o Google Slides.',
    categorias: ['Diseño & UX', 'tool', 'core', 'claude'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableDesignUx,
    pruebalo: [],
    contenido: ['Evalúa interfaces con las 10 Heurísticas de Nielsen y genera un informe exportable.'],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'ea-principles-align-expert',
    nombre: 'EA Principles Align Expert',
    tipo: 'skill',
    version: '0.x',
    descripcion: 'Evaluador de alineación arquitectónica contra los pilares de Cencosud.',
    descripcionLarga:
      'Evaluador de alineación arquitectónica contra los pilares definidos por Enterprise Architecture. Trabaja sobre descripciones de servicios, ADRs, diagramas o propuestas de cambio y entrega un reporte priorizado con score por principio, gaps detectados y remediaciones accionables.',
    categorias: ['Arq. & Backend', 'tool', 'experimental', 'core', 'antigravity'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableArquitectura,
    pruebalo: [],
    contenido: ['Evaluador de alineación arquitectónica contra los pilares de Cencosud.'],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'mmi-analyzer',
    nombre: 'MMI Analyzer',
    tipo: 'skill',
    version: '0.1.0',
    descripcion:
      'Evaluación cuantitativa de deuda técnica en arquitectura con el Modularity Maturity Index: score 0–10 con hallazgos y remediaciones priorizadas.',
    descripcionLarga:
      'Evaluación cuantitativa de deuda técnica con el Modularity Maturity Index (MMI). Analiza código fuente en múltiples lenguajes, puntúa en 3 ejes y entrega un score de 0 a 10 con hallazgos y remediaciones priorizadas.',
    categorias: ['Arq. & Backend', 'tool', 'experimental', 'community', 'architecture', 'maturity', 'engineering', 'claude', 'kiro'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableArquitectura,
    pruebalo: [],
    contenido: [
      'Evaluación cuantitativa de deuda técnica en arquitectura con el Modularity Maturity Index: score 0–10 con hallazgos y remediaciones priorizadas.',
    ],
    enCencoFlow: [],
    requisitos: [],
  },
  {
    id: 'logging-expert',
    nombre: 'Logging Expert',
    tipo: 'skill',
    version: '1.0',
    descripcion: 'Guía de implementación del logging corporativo de Cencosud.',
    descripcionLarga:
      'Experto en la Política de Logging Corporativa de Cencosud: niveles jerárquicos, redacción de mensajes, propagación de request_id y formatos de salida (JSON, CEF+logfmt, CLF).',
    categorias: ['Observabilidad', 'tool', 'core', 'antigravity'],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsableEngineeringCoe,
    pruebalo: [],
    contenido: ['Guía de implementación del logging corporativo de Cencosud.'],
    enCencoFlow: [],
    requisitos: [],
  },
]
