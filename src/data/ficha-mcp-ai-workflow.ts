export type EtapaAiWorkflowId = 'refinamiento' | 'desarrollo' | 'validacion'

export interface EtapaAiWorkflow {
  id: EtapaAiWorkflowId
  nombre: string
  badges: string[]
  descripcion: string
  friccion: string
  comoSeInvoca: string
  promptEjemplo: string
  tools: string[]
  notaTecnica?: string
  beneficio: string
  notaBeneficio?: string
  usoPendiente: string
  ejemplos: { titulo: string; texto: string }[]
  video: { duracion: string; vimeoId: string }
  metrica: {
    antes: { valor: string; etiqueta: string }
    despues: { valor: string; etiqueta: string }
  }
  siguientePaso: {
    etiqueta: string
    nombre: string
    descripcion: string
    destino: EtapaAiWorkflowId
  }
}

export const etapasAiWorkflow: Record<EtapaAiWorkflowId, EtapaAiWorkflow> = {
  refinamiento: {
    id: 'refinamiento',
    nombre: 'Refinamiento',
    badges: ['● core', 'Oficial CoE / revisado', 'Cencoflow · Backlog', 'v1.0'],
    descripcion: 'Desde el IDE, un agente toma un work item de Jira y genera un plan de implementación detallado, creando las subtareas correspondientes en Jira. El dev revisa y ajusta el plan antes de avanzar al desarrollo.',
    friccion: 'el refinamiento manual (desglosar una historia en subtareas técnicas, pensar el enfoque de implementación) consume tiempo y suele quedar incompleto o desalineado respecto al código real. Esta destreza produce un plan estructurado en minutos, partiendo del contexto real del repositorio.',
    comoSeInvoca: 'Requiere el MCP AI-Workflow configurado en tu IDE. IDEs compatibles: Cursor, Windsurf, Kiro u otros MCP-ready.',
    promptEjemplo: '"Quiero refinar..." + link del work item de Jira',
    tools: ['get_work_item', 'create_subtask', 'update_work_item'],
    beneficio: 'Obtené un plan de implementación con subtareas en minutos, en vez de refinar a mano. Ahorra ~25% del tiempo del equipo en el refinamiento, con un plan alineado al código real de tu repositorio y listo para desarrollar.',
    usoPendiente: 'Uso: cantidad de HUs refinadas con la destreza (dato a completar).',
    ejemplos: [
      { titulo: 'Refinar una historia nueva.', texto: '"Quiero refinar" + link de la HU. El agente lee el work item, propone un plan de implementación y crea las subtareas técnicas en Jira. Revísalo y ajusta antes de desarrollar.' },
      { titulo: 'Pre-refinamiento de una historia existente.', texto: '"Quiero refinar" + link de una historia ya escrita. Útil antes de la ceremonia de refinamiento en equipo: llegas con un plan borrador y subtareas ya propuestas.' },
      { titulo: 'Regenerar el plan tras un cambio de alcance.', texto: '"Quiero refinar de nuevo" + link, indicando qué cambió. El agente actualiza el plan y las subtareas según el nuevo alcance.' },
      { titulo: 'Refinar un bug o hotfix.', texto: '"Quiero refinar" + link del bug. Genera el plan de corrección con los pasos técnicos y el diagnóstico.' },
    ],
    video: { duracion: '02:10', vimeoId: '1209904486' },
    metrica: { antes: { valor: 'Horas', etiqueta: 'Refinar a mano' }, despues: { valor: 'Minutos', etiqueta: 'Con AI-Workflow' } },
    siguientePaso: { etiqueta: 'Siguiente paso', nombre: 'Desarrollo', descripcion: 'Con el work item refinado, el agente ya tiene todo el contexto para generar código, tests y documentación.', destino: 'desarrollo' },
  },
  desarrollo: {
    id: 'desarrollo',
    nombre: 'Desarrollo',
    badges: ['● core', 'Oficial CoE / revisado', 'Cencoflow · Desarrollo', 'v1.0'],
    descripcion: 'Desde el IDE, un agente ejecuta el plan de implementación refinado, escribiendo el código según los patrones del repositorio. El dev supervisa, corrige y aprueba: pasa de escribir todo a decidir y controlar.',
    friccion: 'el salto del plan al código (interpretar el refinamiento, escribir el boilerplate, respetar los patrones del repo) es lento y repetitivo. El agente ejecuta el plan ya acordado con el contexto del repositorio, y el dev se concentra en supervisar y tomar las decisiones que importan.',
    comoSeInvoca: 'Requiere el MCP AI-Workflow configurado en tu IDE. IDEs compatibles: Cursor, Windsurf, Kiro u otros MCP-ready.',
    promptEjemplo: '"Quiero desarrollar..." + link del work item de Jira',
    tools: ['get_work_item', 'update_work_item'],
    notaTecnica: 'Acceso al código del repo vía IDE.',
    beneficio: 'Desarrolla más rápido y entrega más por sprint. El agente ejecuta el plan refinado, con el contexto de tu repositorio, y vos supervisás. Reduce ~35% el cycle time de desarrollo, siempre con el control de las decisiones en tus manos.',
    usoPendiente: 'Uso: cantidad de HUs desarrolladas con la destreza (dato a completar).',
    ejemplos: [
      { titulo: 'Desarrollar a partir de un plan refinado.', texto: '"Quiero desarrollar" + link del work item ya refinado. El agente ejecuta el plan y escribe el código. Vos supervisás cada paso.' },
      { titulo: 'Desarrollar una subtarea puntual.', texto: '"Quiero desarrollar" + link de la subtarea específica. Útil para avanzar el plan por partes en vez de todo de una.' },
      { titulo: 'Retomar un desarrollo en curso.', texto: '"Quiero seguir desarrollando" + link, indicando qué ya está hecho. El agente continúa desde donde quedó, respetando lo ya construido.' },
      { titulo: 'Ajustar lo generado.', texto: 'Pedile un cambio puntual sobre lo que acaba de escribir ("cambia X", "usa el patrón Y"). El dev mantiene el control final.' },
    ],
    video: { duracion: '02:45', vimeoId: '1209904509' },
    metrica: { antes: { valor: 'Escribís', etiqueta: 'Todo el código' }, despues: { valor: 'Supervisás', etiqueta: 'Con AI-Workflow' } },
    siguientePaso: { etiqueta: 'Siguiente paso', nombre: 'Validación', descripcion: 'Con el código generado, contrasta el resultado contra los criterios de aceptación antes de mergear.', destino: 'validacion' },
  },
  validacion: {
    id: 'validacion',
    nombre: 'Validación',
    badges: ['● core', 'Oficial CoE / revisado', 'Cencoflow · Desarrollo', 'v1.0'],
    descripcion: 'Desde el IDE, un agente verifica que el código implementado cumpla el plan refinado y los criterios de aceptación del work item. Entrega un diagnóstico de brechas antes de la revisión humana y el mergeo.',
    friccion: 'el chequeo de que lo construido cumple lo acordado (criterios de aceptación, alcance del plan) suele hacerse informal o saltearse por tiempo. Esta destreza lo hace explícito y estructurado: señala qué cumple y qué falta, antes de que el dev haga la revisión crítica y mergee.',
    comoSeInvoca: 'Requiere el MCP AI-Workflow configurado en tu IDE. IDEs compatibles: Cursor, Windsurf, Kiro u otros MCP-ready.',
    promptEjemplo: '"Quiero validar..." + link del work item de Jira',
    tools: ['get_work_item'],
    notaTecnica: 'Lectura del código del repo vía IDE.',
    beneficio: 'Llega a la revisión y al merge con las brechas ya detectadas. Menos retrabajo y más confianza en que lo construido cumple el plan y los criterios de aceptación, antes de pasar a producción.',
    notaBeneficio: 'Beneficio cualitativo: mejora la calidad de la entrega, no la velocidad.',
    usoPendiente: 'Uso: cantidad de HUs validadas con la destreza (dato a completar).',
    ejemplos: [
      { titulo: 'Validar contra el plan refinado.', texto: '"Quiero validar" + link del work item. El agente compara el código con el plan y los criterios de aceptación, y devuelve qué cumple y qué falta.' },
      { titulo: 'Validar antes de abrir el PR.', texto: 'Corre la validación como paso previo al pull request, para llegar a la revisión humana con las brechas ya resueltas.' },
      { titulo: 'Validar un criterio de aceptación específico.', texto: '"Quiero validar que se cumpla [criterio]" + link. Enfoca el chequeo en un criterio puntual del work item.' },
      { titulo: 'Re-validar tras correcciones.', texto: 'Después de ajustar el código, volvés a validar para confirmar que las brechas quedaron cerradas antes de mergear.' },
    ],
    video: { duracion: '02:00', vimeoId: '1209904483' },
    metrica: { antes: { valor: 'Informal', etiqueta: 'Chequeo manual' }, despues: { valor: 'Estructurado', etiqueta: 'Con AI-Workflow' } },
    siguientePaso: { etiqueta: 'Ver también', nombre: 'Refinamiento', descripcion: 'Vuelve al inicio del ciclo: refina el próximo work item con todo el contexto del proyecto.', destino: 'refinamiento' },
  },
}
