import type { PaginaDocumento } from '@/types/documento'

type TemplateTdc = {
  id: string
  titulo: string
  descripcion: string
  cuando: string
  coordinacion: string
  evidencia: string
}

const templates: TemplateTdc[] = [
  { id: 'template-ficha-producto', titulo: 'Ficha del Producto', descripcion: 'Identificación, gobierno, valor, criticidad y evidencia oficial del producto.', cuando: 'Desde Preparación; se actualiza cuando cambian ownership, criticidad o alcance.', coordinacion: 'PO, Technical Lead y dueños de aplicación e infraestructura.', evidencia: 'Registro consistente con RUA y DAO.' },
  { id: 'template-proposito-valor', titulo: 'Propósito y Valor', descripcion: 'Visión, propuesta de valor, usuarios, outcomes, OKR y métricas.', cuando: 'Desde la definición de la iniciativa y antes de decidir cómo construirla.', coordinacion: 'PO, negocio y equipo de producto.', evidencia: 'Outcome y métricas que permitan entender el valor esperado.' },
  { id: 'template-raci', titulo: 'Matriz RACI', descripcion: 'Responsabilidades R, A, C e I para actividades y entregables.', cuando: 'En Preparación y ante cada cambio de ownership o dotación.', coordinacion: 'PO, Technical Lead, Operaciones y dueños de plataforma.', evidencia: 'Responsables explícitos para aplicación e infraestructura.' },
  { id: 'template-adr', titulo: 'ADR', descripcion: 'Decisiones arquitectónicas, alternativas, trade-offs y consecuencias.', cuando: 'Después del diseño TO-BE; se profundiza en Diseño de solución.', coordinacion: 'Arquitectura, Technical Lead y stakeholders de la decisión.', evidencia: 'Alternativas evaluadas y decisión trazable a la solución.' },
  { id: 'template-lld', titulo: 'LLD', descripcion: 'Diseño de bajo nivel y los cuatro diagramas C4 mínimos.', cuando: 'En Diseño de solución, antes de consolidar la implementación.', coordinacion: 'Arquitectura, Desarrollo y dueños de dependencias.', evidencia: 'Contexto, contenedores, componentes y código actualizados.' },
  { id: 'template-matriz-calidad', titulo: 'Matriz de atributos de calidad', descripcion: 'Priorización de rendimiento, seguridad, escalabilidad y resiliencia.', cuando: 'En análisis de arquitectura y cuando cambia el uso esperado.', coordinacion: 'Arquitectura, negocio, Seguridad y Operaciones.', evidencia: 'Atributos priorizados con escenarios verificables.' },
  { id: 'template-roadmap-arquitectura', titulo: 'Roadmap de evolución', descripcion: 'Estados objetivo, brechas y trabajo para avanzar entre estados.', cuando: 'Al definir la evolución de la solución y ante cambios relevantes.', coordinacion: 'Arquitectura, PM y equipo de producto.', evidencia: 'Estados estables y dependencias del roadmap explícitos.' },
  { id: 'template-mapa-contexto', titulo: 'Mapa de contexto y dependencias', descripcion: 'Mapa C4 de contexto y dependencias de primer y segundo nivel.', cuando: 'Durante Diseño de solución y ante nuevas integraciones.', coordinacion: 'Arquitectura, Desarrollo y dueños de sistemas externos.', evidencia: 'Sistemas, límites, integraciones y flujos actualizados.' },
  { id: 'template-inventario-tecnico', titulo: 'Inventario técnico', descripcion: 'Activos, componentes, servicios, dependencias y resource IDs.', cuando: 'Desde Diseño de solución; se mantiene en cada cambio de infraestructura.', coordinacion: 'Arquitectura, Plataforma y dueños de servicios.', evidencia: 'Activos registrados en el inventario corporativo.' },
  { id: 'template-runbook', titulo: 'Runbook', descripcion: 'Señal, diagnóstico, remediación y escalamiento por incidente.', cuando: 'Borrador en Desarrollo; consolidación en Monitoreo con datos reales.', coordinacion: 'Desarrollo, SRE, Operaciones y dueños de dependencias.', evidencia: 'Pasos ejecutables, umbrales, validación y escalamiento definido.' },
  { id: 'template-monitoreo-alertas', titulo: 'Guía de monitoreo y alertas', descripcion: 'Métricas, logs, dashboards, umbrales y alertas del producto.', cuando: 'Borrador en Desarrollo; consolidación en Monitoreo.', coordinacion: 'Desarrollo, SRE, Operaciones y Seguridad para auditoría de logs.', evidencia: 'Alertas y dashboards reales, con revisión trimestral.' },
  { id: 'template-dr-plan', titulo: 'DR Plan', descripcion: 'RTO/RPO, recuperación, failback, pruebas y riesgos.', cuando: 'Nace en Preparación, se profundiza en Diseño y Desarrollo, y se prueba en Monitoreo.', coordinacion: 'Arquitectura, Operaciones, negocio y dueños de datos.', evidencia: 'Prueba de recuperación, backups verificados y riesgos conocidos.' },
  { id: 'template-modelo-soporte', titulo: 'Modelo de soporte y continuidad', descripcion: 'N1/N2/N3, capacitación, causa raíz e itinerario de guardias.', cuando: 'Niveles en Planificación; capacitación e incidentes desde Monitoreo.', coordinacion: 'PO, Technical Lead, SRE y equipo receptor.', evidencia: 'Calendario on-call, acta de capacitación e incidentes con causa raíz.' },
  { id: 'template-compliance-pack', titulo: 'Compliance Pack', descripcion: 'Checklist de RUA, DAO, GRC, SecShield, IAM y seguridad.', cuando: 'Se consolida en Monitoreo antes del cierre de TDC.', coordinacion: 'Seguridad de la Información, Operaciones/Cloud, PO y Technical Lead.', evidencia: 'Controles implementados, pentest vigente y acciones correctivas cerradas.' },
  { id: 'template-catalogo-datos', titulo: 'Catálogo de datos', descripcion: 'Datos críticos, dueño, clasificación, consumo y controles.', cuando: 'Al identificar datos sensibles o relevantes para negocio; se mantiene vivo.', coordinacion: 'Data Owner, negocio, Seguridad y equipo de producto.', evidencia: 'Datos clasificados, dueño identificado y controles definidos.' },
]

const paginasTemplates: PaginaDocumento[] = templates.map((template) => ({
  id: template.id,
  titulo: `Template · ${template.titulo}`,
  bajada: template.descripcion,
  cuerpo: [
    { tipo: 'parrafo', texto: template.descripcion },
    { tipo: 'encabezado', texto: 'Cuándo prepararlo' },
    { tipo: 'parrafo', texto: template.cuando },
    { tipo: 'encabezado', texto: 'Coordinación necesaria' },
    { tipo: 'parrafo', texto: template.coordinacion },
    { tipo: 'destacado', variante: 'regla', titulo: 'Evidencia suficiente', texto: template.evidencia },
  ],
}))

export const paginasRecursosTdc: PaginaDocumento[] = [
  {
    id: 'elegir-situacion',
    titulo: '10. Elegir tu situación',
    bajada: 'Una sola pregunta decide qué guía necesitas.',
    cuerpo: [
      { tipo: 'parrafo', texto: '¿Lo que estás documentando ya está en producción o todavía lo estás construyendo? La respuesta determina la guía; no hay un término medio.' },
      {
        tipo: 'tabla',
        encabezados: ['Situación', 'Qué usar'],
        filas: [
          ['Producto nuevo o feature aún en construcción', 'Guía de TDC anticipada: genera evidencia por etapa y llega con el Manual prácticamente armado.'],
          ['Producto ya en producción', 'Auditoría de equipos existentes: localiza evidencia A–G y registra brechas.'],
          ['No estás seguro', 'Confirma si el alcance ya opera en producción; si no, sigue el camino anticipado.'],
        ],
      },
    ],
  },
  {
    id: 'minimo-indispensable',
    titulo: '11. Las 43 preguntas mínimas',
    bajada: 'Prioriza la evidencia que bloquea una Toma de Control.',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Las 43 preguntas mínimas están integradas en la auditoría oficial y se identifican con ★. Cada una indica la etapa donde nace su evidencia, para evitar exigir información antes de que corresponda.' },
      {
        tipo: 'tabla',
        encabezados: ['Sección', 'Preguntas ★', 'Prioridad de revisión'],
        filas: [
          ['A · Identificación y gobierno', '4 + 1 en RACI', 'RUA, DAO, criticidad y responsables.'],
          ['B · Arquitectura e inventario', '5', 'C4/HLD, SPOF, ADR, flujos de datos e inventario.'],
          ['C · Seguridad y accesos', '14', 'IAM, baseline, pentest, DevSecOps, datos y Compliance Pack.'],
          ['D · Observabilidad y operación', '5', 'Alertas, tableros, detección y causa raíz.'],
          ['E · Recuperación y continuidad', '4', 'Backups, rollback, dependencias, RTO/RPO y recuperación.'],
          ['F · Soporte y escalamiento', '10', 'Runbook, SLA, soporte, notificaciones y dependencias externas.'],
          ['G · Excepciones y riesgos', '0', 'Registra lo que no alcanza a resolverse con dueño y fecha.'],
        ],
      },
      { tipo: 'destacado', variante: 'advertencia', texto: 'Las tres preguntas adicionales sobre el ciclo de vida del DR Plan no se incluyen en las 43, pero se deben registrar cuando apliquen.' },
    ],
  },
  {
    id: 'aclaraciones-frecuentes',
    titulo: '12. Aclaraciones frecuentes',
    bajada: 'Respuestas operativas ya validadas para dudas recurrentes.',
    cuerpo: [
      {
        tipo: 'grilla-tarjetas',
        tarjetas: [
          { titulo: 'Rollback y degradación', descripcion: 'Declara y enlaza el mecanismo existente; crea un procedimiento nuevo solo si hoy no existe evidencia operable.' },
          { titulo: 'Criticidad', descripcion: 'No se define a criterio individual: se justifica con impacto económico, operativo y datos.' },
          { titulo: 'Diagramas y datos', descripcion: 'El Manual referencia el diagrama adecuado y la clasificación corporativa; no los sustituye.' },
          { titulo: 'DR y observabilidad', descripcion: 'Se adaptan al riesgo y criticidad del producto; deben probarse o verificarse con evidencia real.' },
          { titulo: 'Runbook y Centro de Soluciones', descripcion: 'El mínimo es una señal clara, diagnóstico, remediación y escalamiento que alguien pueda ejecutar.' },
        ],
      },
    ],
  },
  ...paginasTemplates,
]
