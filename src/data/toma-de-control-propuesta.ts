import type { DocumentoGuia } from '@/types/documento'
import { paginasArtefactosTdc } from './toma-de-control-propuesta-artefactos'
import { paginasRecursosTdc } from './toma-de-control-propuesta-recursos'

// Migración del contenido oficial revisado en /docs/tdc del portal anterior.
// Se conserva la estructura de decisión, los 15 artefactos y el Manual A–G,
// adaptados a las superficies de lectura del nuevo portal.
export const tomaDeControlPropuesta: DocumentoGuia = {
  id: 'toma-de-control-propuesta',
  titulo: 'Toma de Control',
  descripcion:
    'Procedimiento y artefactos para transferir un producto a Operaciones con un Manual completo, evidencia verificable y un plan explícito para las brechas.',
  categorias: ['Gobierno', 'Operaciones'],
  owner: 'Ecosistema Retail',
  madurez: 'production',
  tags: ['tdc', 'continuidad', 'operaciones', 'gobierno', 'manual', 'runbook'],
  detalle: {
    version: '1.3',
    actualizado: 'Julio 2026',
    owner: 'Ecosistema Retail / Continuidad Operativa',
    tags: ['tdc', 'continuidad', 'operaciones', 'gobierno', 'manual', 'runbook'],
  },
  paginas: [
    {
      id: 'inicio',
      titulo: '1. Toma de Control',
      bajada: 'Transfiere un producto a Operaciones con la evidencia necesaria para operarlo de forma autónoma.',
      cuerpo: [
        {
          tipo: 'parrafo',
          texto:
            'La Toma de Control (TDC) formaliza la transferencia desde el equipo que construye un producto hacia el equipo que lo operará. No es un documento que se redacta al final: el Manual se ensambla progresivamente con evidencia generada durante el ciclo de vida.',
        },
        {
          tipo: 'destacado',
          variante: 'informativo',
          titulo: 'Por qué importa',
          texto:
            'Reconstruir una TDC sin documentación adecuada cuesta en promedio 235 horas-hombre. Anticipar los artefactos evita esa reconstrucción bajo presión.',
        },
        { tipo: 'encabezado', texto: 'Elige tu camino' },
        {
          tipo: 'grilla-tarjetas',
          tarjetas: [
            {
              titulo: 'Producto nuevo o feature relevante',
              descripcion: 'Construye el Manual a medida que avanza el producto; usa la guía anticipada.',
              href: '/guias/toma-de-control-propuesta/guia-anticipada',
            },
            {
              titulo: 'Producto ya en producción',
              descripcion: 'Audita la evidencia disponible y registra las brechas con dueño y fecha.',
              href: '/guias/toma-de-control-propuesta/auditoria-producto-existente',
            },
            {
              titulo: 'No estás seguro',
              descripcion: 'Responde una pregunta para identificar el camino correcto.',
              href: '/guias/toma-de-control-propuesta/elegir-situacion',
            },
          ],
        },
        {
          tipo: 'destacado',
          variante: 'regla',
          texto:
            'La transferencia se cierra cuando el equipo receptor confirma que puede operar el producto sin depender de explicaciones orales.',
        },
      ],
    },
    {
      id: 'manual-a-g',
      titulo: '2. El Manual A–G',
      bajada: 'Las siete secciones que certifican que un producto puede ser operado y mantenido.',
      cuerpo: [
        { tipo: 'encabezado', texto: 'Qué certifica cada sección' },
        {
          tipo: 'tabla',
          encabezados: ['Sección', 'Qué debe demostrar'],
          filas: [
            ['A · Identificación y gobierno', 'Producto, ownership, valor, criticidad y clasificación de datos.'],
            ['B · Arquitectura e inventario', 'Diagramas HLD/C4, componentes, dependencias, ADR e inventario técnico.'],
            ['C · Seguridad y accesos', 'Accesos, baseline, rotación de secretos y Compliance Pack.'],
            ['D · Observabilidad y operación', 'Dashboards, logs, alertas y señales que activan los runbooks.'],
            ['E · Recuperación y continuidad', 'Backups, RTO/RPO, DR Plan, pruebas y riesgos de recuperación.'],
            ['F · Soporte y escalamiento', 'Runbooks, niveles N1/N2/N3, capacitación, incidentes y guardias.'],
            ['G · Excepciones y riesgos', 'Brechas aceptadas, plan de mitigación, dueño, fecha y aprobación SRE.'],
          ],
        },
        {
          tipo: 'destacado',
          variante: 'regla',
          texto:
            'Una excepción documentada con plan y fecha es mejor que una casilla vacía o un dato inventado. La Sección G no oculta brechas: hace visible cómo se resolverán.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Para todas las secciones aplica la misma regla: no reescribas la evidencia que ya existe en una fuente oficial; enlázala o llévala al Manual indicando su ubicación vigente.',
        },
      ],
    },
    {
      id: 'guia-anticipada',
      titulo: '3. Guía de TDC anticipada',
      bajada: 'Construye el Manual mientras desarrollas, no después de llegar a producción.',
      cuerpo: [
        {
          tipo: 'parrafo',
          texto:
            'Esta guía aplica a un producto que parte desde cero y también a un feature nuevo que, aunque viva dentro de un producto existente, requiere su propia transferencia por cambio de arquitectura, dependencia o dueño operativo.',
        },
        { tipo: 'encabezado', texto: 'Cuándo nace cada bloque del Manual' },
        {
          tipo: 'tabla',
          encabezados: ['Sección', 'Momento de preparación'],
          filas: [
            ['A', 'Desde Preparación: Ficha del Producto, RUA, criticidad y clasificación de datos.'],
            ['B', 'Desde Preparación y Diseño: HLD/ADR, luego LLD, C4 e inventario por recurso.'],
            ['C', 'Accesos en Desarrollo; baseline y Compliance Pack antes de Monitoreo.'],
            ['D', 'Se diseña antes y se consolida en Monitoreo con dashboards y alertas reales.'],
            ['E', 'RTO, RPO y DRP nacen temprano; se prueban con datos reales antes de cerrar.'],
            ['F', 'Se diseña en Desarrollo y se consolida en Monitoreo con soporte y guardias reales.'],
            ['G', 'Se diligencia antes del cierre por SRE para las brechas que no se resuelven a tiempo.'],
          ],
        },
        {
          tipo: 'destacado',
          variante: 'advertencia',
          texto:
            'Para criticidad Alta o Crítica, RPO, RTO y DR Plan son obligatorios. Un DRP que nunca se ha ensayado no es evidencia de recuperación.',
        },
      ],
    },
    {
      id: 'auditoria-producto-existente',
      titulo: '4. Auditoría de producto existente',
      bajada: 'Consolida lo que ya existe, identifica lo que falta y no generes confianza falsa.',
      cuerpo: [
        {
          tipo: 'pasos',
          pasos: [
            { titulo: 'Reúne al equipo', texto: 'PM, referente técnico y, cuando corresponda, Arquitectura o Seguridad. Una primera pasada suele tomar 60 a 90 minutos.' },
            { titulo: 'Recorre A–G', texto: 'Marca el estado real de cada evidencia; un “sí” sin respaldo solo traslada el problema a la TDC formal.' },
            { titulo: 'Traslada la evidencia', texto: 'Lo que ya existe y está vigente se enlaza o copia al Manual; no se reescribe.' },
            { titulo: 'Registra las brechas', texto: 'Todo “no” o “parcial” lleva dueño y fecha; si no alcanza a resolverse, queda como excepción en G.' },
          ],
        },
        { tipo: 'encabezado', texto: 'Dónde buscar primero' },
        {
          tipo: 'grilla-tarjetas',
          tarjetas: [
            { titulo: 'A · Gobierno', descripcion: 'RUA, DAO y TDC App. La fuente oficial prevalece sobre el Manual.' },
            { titulo: 'B · Arquitectura', descripcion: 'Repositorio de Arquitectura, ADR, LLD/C4 y consola cloud para el inventario.' },
            { titulo: 'C–F · Operación', descripcion: 'IAM, vault, Coralogix/Dynatrace, tickets, backups, PagerDuty y documentación de DR.' },
          ],
        },
        {
          tipo: 'destacado',
          variante: 'informativo',
          texto:
            'El checklist oficial integra 43 preguntas mínimas. Si necesitas priorizar, parte por esas evidencias y por Runbook, recuperación y continuidad.',
        },
      ],
    },
    {
      id: 'arquitectura',
      titulo: '5. Arquitectura: anteproyecto o evolución',
      bajada: 'Clasifica la iniciativa antes de producir documentación de arquitectura.',
      cuerpo: [
        { tipo: 'encabezado', texto: 'Anteproyecto · iniciativa nueva' },
        {
          tipo: 'pasos',
          pasos: [
            { titulo: 'Solicitud de trabajo', texto: 'RoAW define stakeholders, principios, objetivos, drivers y restricciones.' },
            { titulo: 'Análisis estratégico', texto: 'Cadena de valor, capacidades, sistemas actuales y brechas.' },
            { titulo: 'Dos análisis en paralelo', texto: 'Alcance funcional AS-IS y atributos de calidad priorizados para el uso real.' },
            { titulo: 'Diseño TO-BE', texto: 'La evaluación de estándares produce el HLD consolidado.' },
            { titulo: 'Registro de decisión', texto: 'El ADR se genera después del diseño TO-BE, nunca antes ni en paralelo.' },
          ],
        },
        { tipo: 'encabezado', texto: 'Proyecto · evolución de un producto existente' },
        {
          tipo: 'parrafo',
          texto:
            'En Preparación se confirma la clasificación y se activa el track de negocio/PMO. La arquitectura de proyecto se inicia más adelante, en Diseño de solución, solo si la evaluación de impacto confirma un cambio arquitectónico significativo.',
        },
        {
          tipo: 'destacado',
          variante: 'regla',
          texto:
            'El ADR documenta una decisión arquitectónica con alternativas y trade-offs reales; no toda decisión técnica necesita uno.',
        },
      ],
    },
    ...paginasArtefactosTdc,
    ...paginasRecursosTdc,
  ],
}
