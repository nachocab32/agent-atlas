// Contenido real del portal Atlas (localhost:3000), extraído el 10 de septiembre de 2026.
// Fichas de Skills, Agente Cenco Writer y MCP Servers. No modificar sin verificar contra
// la fuente. Arquetipos queda fuera: sin fuente real disponible.
import type { FichaSkillDetalle } from '@/types/ficha-skill'

export const fichaSkillDetalleArquitectura: Record<string, FichaSkillDetalle> = {
  'ea-principles-align-expert': {
    friccion: 'Elimina las horas que el CoE invierte auditando manualmente cada propuesta arquitectónica.',
    bloques: [
      {
        titulo: 'Es un evaluador, no un generador',
        items: ['No inventa pilares — cuando un principio no está documentado, lo reporta como gap.'],
      },
      {
        titulo: 'Estructura del reporte',
        items: [
          'Puntaje global (0–10).',
          'Score por principio (cumple / parcial / gap).',
          'Top 3 principios en riesgo y top 3 fuertes.',
          'Remediaciones priorizadas (quick wins primero).',
          'Referencias cruzadas a Arquetipos del catálogo cuando aplica.',
          'Resumen ejecutivo de 1 página bajo pedido.',
        ],
      },
    ],
    activacion: [
      { senal: 'Evaluación', ejemplo: 'Evalúa esta propuesta contra los principios del CoE' },
      { senal: 'Auditoría', ejemplo: 'Audita este servicio antes del refactor' },
      { senal: 'Governance', ejemplo: 'Genera el 1-pager para el comité' },
      { senal: 'Arquetipos', ejemplo: 'Chequea si respeta los Arquetipos vigentes' },
    ],
    evitar: ['No inventa pilares: reporta principios no documentados como gap.', 'No mide modularidad de código: eso corresponde a MMI Analyzer.', 'No genera la solución; propone remediaciones.'],
    requisitos: ['ADR, diagrama C4, descripción de servicio o propuesta de cambio.', 'Acceso a Cencosud-IT y CencoSkills para instalarla.'],
    archivos: ['SKILL.md', 'INSTALL.md', 'references/', '  ├── principles.md  (fuente de verdad)', '  ├── scoring-rubric.md', '  └── archetypes-link.md'],
    video: { duracion: '02:30' },
    relaciones: [
      {
        nombre: 'Archetype Governance',
        frase: 'Combínala con Archetype Governance — esta skill evalúa principios; el documento Archetype Governance materializa los principios en Arquetipos reutilizables del catálogo.',
      },
      {
        nombre: 'MMI Analyzer',
        frase: 'Combínala con MMI Analyzer — el MMI mide la modularidad del código; esta skill evalúa la alineación de la solución contra los principios del CoE.',
      },
    ],
  },
  'mmi-analyzer': {
    friccion:
      'Elimina la subjetividad en las revisiones de arquitectura — 77% determinista, convierte "creo que el código está mal" en evidencia medible.',
    bloques: [
      {
        titulo: 'Interpretación',
        items: ['🟢 8–10 saludable', '🟡 4–8 degradado, refactoring gradual', '🔴 0–4 crítico, decisión de refactorizar o reemplazar'],
      },
      {
        titulo: 'Pipeline de 3 herramientas',
        items: [
          'Metrics Analyzer (lizard, complejidad ciclomática).',
          'Architecture Analyzer (infiere módulos y capas).',
          'MMI Calculator (score final + reporte).',
        ],
      },
      {
        titulo: 'Lenguajes soportados',
        items: ['TypeScript/JavaScript', 'Python', 'Java', 'Go', 'Kotlin'],
      },
    ],
    tablas: [
      {
        titulo: 'Las 3 categorías',
        columnas: ['Categoría', 'Peso', 'Qué evalúa'],
        filas: [
          ['Modularity', '45%', 'Descomposición en módulos, interfaces claras, proporciones de tamaño'],
          ['Hierarchy', '30%', 'Violaciones de capas y dependencias cíclicas'],
          ['Pattern Consistency', '25%', 'Aplicación de patrones y separación dominio/técnico'],
        ],
      },
      {
        titulo: 'Escenarios de referencia (mismo dominio, mismo lenguaje, distinta calidad)',
        columnas: ['Escenario', 'MMI', 'Características'],
        filas: [
          ['🔴 Big Ball of Mud', '~2.0', 'Todo en 1 archivo (283 LOC), sin capas'],
          ['🟡 Degradado', '~5.5', 'Capas con violaciones, god class de 228 LOC'],
          ['🟢 Bien estructurado', '~9.6', 'Hexagonal, cero violaciones, clases <70 LOC'],
        ],
      },
    ],
    activacion: [
      { senal: 'Arquitectura', ejemplo: 'Evalúa la arquitectura de este proyecto' },
      { senal: 'Deuda técnica', ejemplo: 'Mide la deuda técnica del servicio' },
      { senal: 'Dependencias', ejemplo: '¿Hay ciclos entre módulos?' },
      { senal: 'Decisión', ejemplo: '¿Conviene refactorizar o reemplazar?' },
    ],
    evitar: ['No genera ni refactoriza código.', 'No evalúa principios del CoE: eso corresponde a EA Principles Align.'],
    requisitos: ['Python 3.8+, pip install lizard networkx.', 'Un coding agent (Kiro, Claude Code, Cline).'],
    archivos: ['SKILL.md', 'metadata.json', 'scripts/  (3 scripts Python)', 'references/  (3 archivos)', 'assets/  (2 archivos de ejemplo)'],
    video: { duracion: '11:44' },
    relaciones: [
      {
        nombre: 'EA Principles Align Expert',
        frase: 'Combínala con EA Principles Align Expert — el MMI mide la modularidad del código; esa skill evalúa la alineación de la solución contra los principios del CoE.',
      },
    ],
  },
  'logging-expert': {
    friccion:
      'Elimina la inconsistencia de logging entre servicios — mezcla de niveles, mensajes genéricos, PII filtrada, request_id perdido entre Kafka y APIs síncronas.',
    bloques: [
      {
        titulo: 'Los 6 niveles corporativos',
        items: ['FATAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE — cada uno con su cuándo usarlo documentado.'],
      },
      {
        titulo: 'Nivel por ambiente',
        items: [
          'Development: cualquiera, normalmente TRACE.',
          'Staging: DEBUG o menor, nunca TRACE.',
          'Production: INFO; DEBUG solo momentáneo con mecanismo dinámico de cambio de nivel.',
        ],
      },
      {
        titulo: 'Redacción — regla dura',
        items: ['Nunca mensajes genéricos ("User authentication failed" es malo).', 'Nunca PII (email, password, address, phone) — usar siempre IDs de referencia.'],
      },
    ],
    activacion: [
      { senal: 'Logging', ejemplo: 'Configura los logs según la política' },
      { senal: 'Framework', ejemplo: 'Usa winston con los niveles corporativos' },
      { senal: 'Auditoría', ejemplo: 'Revisa si este repo cumple la política' },
      { senal: 'Correlación', ejemplo: 'Propaga el request_id desde REST hasta Kafka' },
    ],
    evitar: ['No define la política corporativa: la aplica.', 'Requiere un logger jerárquico como winston o pino.'],
    requisitos: ['Servicio con logger jerárquico.', 'Acceso a Cencosud-IT y CencoSkills para instalarla.'],
    archivos: ['SKILL.md', 'INSTALL.md', 'references/', '  ├── levels.md  (fuente de verdad)', '  ├── formats.md', '  └── request-id.md'],
    video: { duracion: '02:45' },
  },
}
