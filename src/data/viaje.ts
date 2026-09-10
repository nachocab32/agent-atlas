// Contenido extraído de la propuesta de viaje (viaje-atlas-2.gamma.pulsar.codes)
// el 8 de septiembre de 2026. Diseño y Desarrollo tienen contenido real; Producción
// todavía no — sigue en el estado vacío deliberado hasta que se cargue su contenido.
//
// El vínculo con el catálogo de Aceleradores vive aparte de EtapaViaje/Paso (no se agregó ese
// campo al tipo central): solo dos pasos tienen cruce confirmado con el catálogo real.
// MCP CoE · CencoWriter no se enlaza — relación no confirmada según el documento fuente.
import type { EtapaViaje } from '@/types/viaje'

export const entradaViaje = {
  titulo: '¿Ya sabes qué necesitas resolver?',
  texto:
    'Si cuentas con el levantamiento AS-IS y tienes claro el objetivo de la solución, puedes comenzar directamente a diseñar tu propuesta.',
  accionEtiqueta: 'Diseñar solución',
  antecedentes: 'También puedes sumar: Journey Map · casos de uso · Blueprint · KPIs u otros antecedentes.',
}

export const etapasViaje: EtapaViaje[] = [
  {
    id: 'research',
    numero: 1,
    nombre: 'Research',
    intencion: 'Tengo un problema y necesito entenderlo mejor.',
    pasos: [
      {
        id: 'mapear-un-proceso',
        etiqueta: 'Mapear un proceso',
        titulo: 'UX Map Generator',
        tipo: 'artefacto',
        descripcionMenu: 'Entender cómo funciona hoy.',
        descripcion:
          'Mapea el flujo actual, dónde duele y qué falta por confirmar. Su output alimenta todo lo demás.',
        entrega: {
          modo: 'automatiza',
          input: 'Tus notas o una descripción del proceso.',
          output: 'El flujo mapeado, los dolores y los vacíos por completar.',
        },
        accion: { verbo: 'Abrir artefacto' },
      },
    ],
  },
  {
    id: 'diseno-solucion',
    numero: 2,
    nombre: 'Diseño de solución',
    intencion: 'Ya entiendo el problema y quiero crear o mejorar una solución.',
    pasos: [
      {
        id: 'generar-la-propuesta',
        etiqueta: 'Generar la propuesta',
        titulo: 'Proto-starter',
        tipo: 'skill',
        descripcionMenu: 'Generar el diseño de solución desde el mapeo, todo IA.',
        descripcion:
          'Convierte artefactos UX en la arquitectura de información y un prototipo navegable, iterando antes y después de construirlo.',
        entrega: {
          modo: 'automatiza',
          input: 'El output de UX Map Generator (Journey Map / Blueprint / ASIS) y casos de uso.',
          output: 'El diseño de solución en wireframe, listo para iterar.',
        },
        relacion: {
          clase: 'se-alimenta-de',
          pasoOrigen: 'Research · Mapear un proceso',
          explicacion: 'toma el output del mapeo (Journey Map, Blueprint, ASIS) y genera el diseño de solución.',
        },
        accion: { verbo: 'Abrir skill' },
      },
      {
        id: 'refinamiento-visual',
        etiqueta: 'Refinamiento visual',
        titulo: 'Lleva tu propuesta a un diseño consistente',
        tipo: 'sin-tipo',
        descripcionMenu:
          'Incorporar tokens, componentes del IT Design System y el look & feel del proyecto.',
        descripcion:
          'Refina el diseño base incorporando tokens, themes, componentes, elementos de branding y el look & feel propio del proyecto.',
        entrega: {
          modo: 'automatiza',
          input: 'El diseño de la propuesta o una descripción de la solución.',
          output:
            'Una propuesta visual refinada y consistente, alineada a la identidad del proyecto y el sistema de diseño o ui kit según el caso.',
        },
        relacion: {
          clase: 'se-alimenta-de',
          pasoOrigen: 'Diseño de solución · Generar la propuesta',
          explicacion:
            'toma el diseño base y lo estandariza según la pauta de diseño o Design System proporcionado por el equipo.',
        },
      },
      {
        id: 'revisar-mi-diseno',
        etiqueta: 'Revisar mi diseño',
        titulo: 'UX Heuristics Review',
        tipo: 'skill',
        descripcionMenu: 'Revisar mi diseño: el que generaste o el que ya traes.',
        descripcion:
          'Audita prototipos o sitios según las 10 heurísticas de Nielsen y genera un informe con hallazgos, severidad y evidencia.',
        entrega: {
          modo: 'automatiza',
          input: 'Tu interfaz: la que generaste o una que ya tengas.',
          output: 'Un informe de heurísticas exportable con los hallazgos.',
        },
        relacion: {
          clase: 'integrada-en',
          pasoOrigen: 'Generar la propuesta',
          explicacion: 'revisa lo que se genera, sin pedirla aparte.',
        },
        accion: { verbo: 'Abrir skill' },
      },
      {
        id: 'validar-con-usuarios',
        etiqueta: 'Validar con usuarios',
        titulo: 'Gamma',
        tipo: 'herramienta',
        descripcionMenu: 'Revisar la solución con usuarios reales.',
        descripcion: 'Esto no es una skill: la validación con usuarios la haces tú.',
        entrega: {
          modo: 'manual',
          tuHaces:
            'Subes tu prototipo a Gamma, lo compartes y lo pruebas con usuarios reales. El feedback lo recoges tú; la herramienta no te lo devuelve.',
        },
        accion: { verbo: 'Abrir Gamma' },
      },
    ],
  },
  {
    id: 'backlog',
    numero: 3,
    nombre: 'Backlog',
    intencion: 'Tengo una solución y necesito dejarla lista para construir.',
    pasos: [
      {
        id: 'crear-historias-para-desarrollo',
        etiqueta: 'Crear historias para desarrollo',
        titulo: 'CencoWriter',
        tipo: 'agente',
        descripcionMenu: 'Convertir la solución en trabajo claro y trazable.',
        descripcion: 'Convierte tu solución en historias claras y trazables para el backlog.',
        entrega: {
          modo: 'automatiza',
          input: 'La solución o el diseño.',
          output: 'Historias con criterios y trazabilidad, listas para Jira.',
        },
        accion: { verbo: 'Abrir skill' },
      },
    ],
  },
  {
    id: 'entrega-desarrollo',
    numero: 4,
    nombre: 'Entrega a desarrollo',
    intencion: 'Quiero pasar mi solución a desarrollo.',
    pasos: [
      {
        id: 'preparar-el-handoff',
        etiqueta: 'Preparar el handoff',
        titulo: 'Deja tu solución lista para desarrollo',
        tipo: 'sin-tipo',
        // El documento fuente no trae una descripción corta de menú para este paso;
        // se reusa la descripción larga en vez de inventar una línea nueva.
        descripcionMenu:
          'Ordena y estandariza el diseño refinado para facilitar su traspaso al equipo de desarrollo, consolidando el código, recursos y documentación específica del proyecto.',
        descripcion:
          'Ordena y estandariza el diseño refinado para facilitar su traspaso al equipo de desarrollo, consolidando el código, recursos y documentación específica del proyecto.',
        entrega: {
          modo: 'automatiza',
          input: 'El diseño refinado en HTML o React.',
          output:
            'Pantallas y flujos en React + CSS, recursos y documentación necesaria para implementar la solución.',
        },
        relacion: {
          clase: 'se-alimenta-de',
          pasoOrigen: 'Refinamiento visual',
          explicacion:
            'toma el diseño refinado y lo prepara como un paquete de entrega estandarizado para el equipo de desarrollo.',
        },
      },
      {
        id: 'generar-documentacion',
        etiqueta: 'Generar documentación',
        titulo: 'MCP CoE · CencoWriter',
        tipo: 'skill',
        // Mismo caso que Preparar el handoff: no hay descripción corta de menú en la fuente.
        descripcionMenu: 'Deja a desarrollo toda la documentación y el contexto que necesita.',
        descripcion: 'Deja a desarrollo toda la documentación y el contexto que necesita.',
        entrega: {
          modo: 'automatiza',
          input: 'El contexto de la solución.',
          output: 'La documentación que dev necesita para construir.',
        },
        accion: { verbo: 'Abrir skill' },
      },
    ],
  },
]

// Cruces confirmados con el catálogo de Aceleradores (ver contenido-viaje-diseno-extraido.md).
// "MCP CoE · CencoWriter" no está acá: la relación con MCP AI-Workflow no está confirmada.
export const pasoActivoCatalogo: Record<string, string> = {
  'revisar-mi-diseno': 'ux-heuristics-review',
  'crear-historias-para-desarrollo': 'cenco-writer',
}
