// Contenido real de la macrofase Desarrollo (índice de etapas del portal), extraído el
// 8 de septiembre de 2026. A diferencia de Diseño, el portal no expone detalle de pasos
// para estas etapas — solo número, nombre y descripción corta. No se inventó ningún paso.
import type { EtapaSimple, EtapaViaje } from '@/types/viaje'

export const etapasDesarrolloWizard: EtapaViaje[] = [
  {
    id: 'desarrollo',
    numero: 5,
    nombre: 'Desarrollo',
    intencion: 'Tengo las historias listas y quiero empezar a construir sobre una base sólida.',
    estado: 'confirmado',
    pasos: [
      { id: 'elegir-arquetipo', etiqueta: 'Elegir un arquetipo', titulo: 'Templates & Scaffolder', tipo: 'artefacto', descripcionMenu: 'Arquetipos self-service para arrancar con golden paths ya gobernados por Arquitectura.', descripcion: 'Arquetipos self-service (Data Pipeline · Infrastructure as Code, Data Pipeline · Lambda Deploy, Middleware Service) para arrancar con golden paths ya gobernados por Arquitectura.', entrega: { modo: 'automatiza', input: 'Las historias y criterios de aceptación del backlog, y el tipo de componente que necesitas (pipeline de datos, servicio middleware, etc.).', output: 'Un repositorio inicial con la arquitectura base, IaC y CI/CD ya configurados.' }, relacion: { clase: 'se-alimenta-de', pasoOrigen: 'Entrega a desarrollo · Generar documentación', explicacion: 'toma el contexto y las historias ya trazables y ayuda a elegir el arquetipo que mejor calza.' } },
      { id: 'construir-con-ia', etiqueta: 'Construir con asistencia IA', titulo: 'MCP AI-Workflow', tipo: 'herramienta', descripcionMenu: 'Avanzar las historias desde el IDE.', descripcion: 'Conecta tu IDE compatible (Windsurf, Cursor) a este servidor para leer y actualizar work items de Jira. Aprovecha las capacidades agénticas de tu asistente para refinar, desarrollar y validar tareas directamente contra los criterios de aceptación.', entrega: { modo: 'automatiza', input: 'El repositorio inicial y las historias de Jira del backlog.', output: 'Código implementado, tareas actualizadas y validadas contra sus criterios de aceptación.' }, relacion: { clase: 'se-alimenta-de', pasoOrigen: 'Desarrollo · Elegir un arquetipo', explicacion: 'toma el repositorio base y lo conecta con el backlog para implementar sobre él.' } },
      { id: 'cumplir-cicd', etiqueta: 'Cumplir la práctica CI/CD', titulo: 'Pulsar CI/CD', tipo: 'herramienta', descripcionMenu: 'Dejar pipeline y quality gates funcionando.', descripcion: 'Práctica CencoFlow obligatoria (peso 7% en la evaluación): pipeline CI/CD, repos conectados a Jira, quality gates y tableros de build.', resultadoEsperado: 'Repositorio conectado a Jira, pipeline CI/CD activo, quality gates y tableros de build funcionando.', entrega: { modo: 'manual', tuHaces: 'Configuras el pipeline CI/CD en Pulsar, conectas el repositorio a Jira y activas los quality gates y tableros de build.' } },
    ],
  },
  {
    id: 'mejora-continua',
    numero: 6,
    nombre: 'Mejora Continua',
    intencion: 'Terminé un sprint o una entrega y quiero capturar aprendizajes antes de seguir.',
    estado: 'propuesta',
    pasos: [{ id: 'cerrar-retrospectiva', etiqueta: 'Cerrar el ciclo con retrospectiva', titulo: 'Retrospectiva guiada', tipo: 'sin-tipo', descripcionMenu: 'Propuesta, sin skill/agente asociado hoy.', descripcion: 'Aún no existe un recurso de Atlas para esta etapa (el portal antiguo la marca "En construcción"). Este es un placeholder razonable, no contenido confirmado.', resultadoEsperado: 'Hallazgos, deuda técnica y mejoras priorizadas para el próximo ciclo.', entrega: { modo: 'manual', tuHaces: 'Documentas hallazgos, deuda técnica identificada y mejoras propuestas; las priorizas para el próximo ciclo del backlog.' } }],
  },
]

export const etapasDesarrollo: EtapaSimple[] = etapasDesarrolloWizard.map((etapa) => ({
  id: etapa.id,
  numero: etapa.numero,
  nombre: etapa.nombre,
  descripcion: etapa.intencion,
}))
