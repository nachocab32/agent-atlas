import type { PaginaDocumento } from '@/types/documento'

export const paginasArtefactosTdc: PaginaDocumento[] = [
  {
    id: 'artefactos-gobierno',
    titulo: '6. Artefactos: gobierno y criticidad',
    bajada: 'La evidencia para la Sección A del Manual y las responsabilidades del producto.',
    cuerpo: [
      {
        tipo: 'grilla-tarjetas',
        tarjetas: [
          { titulo: 'Ficha del Producto', descripcion: 'Identificación, ownership, valor, criticidad y evidencia de gobierno del producto.', href: '/guias/toma-de-control-propuesta/template-ficha-producto' },
          { titulo: 'Propósito y Valor', descripcion: 'Visión, propuesta de valor, usuarios, outcomes, OKR y métricas de negocio.', href: '/guias/toma-de-control-propuesta/template-proposito-valor' },
          { titulo: 'Matriz RACI', descripcion: 'Quién ejecuta, aprueba, se consulta e informa para cada actividad y entregable.', href: '/guias/toma-de-control-propuesta/template-raci' },
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'La Ficha del Producto resuelve la mayor parte de la Sección A desde Preparación. RACI debe distinguir responsabilidades de aplicación e infraestructura y mantenerse vigente cuando cambie la dotación o el ownership.',
      },
    ],
  },
  {
    id: 'artefactos-arquitectura',
    titulo: '7. Artefactos: arquitectura',
    bajada: 'El set que alimenta la Sección B y evita reconstruir decisiones técnicas al final.',
    cuerpo: [
      {
        tipo: 'grilla-tarjetas',
        tarjetas: [
          { titulo: 'ADR', descripcion: 'Decisiones estructurales, alternativas, trade-offs y consecuencias.', href: '/guias/toma-de-control-propuesta/template-adr' },
          { titulo: 'LLD', descripcion: 'Diseño de bajo nivel y los cuatro diagramas C4 mínimos.', href: '/guias/toma-de-control-propuesta/template-lld' },
          { titulo: 'Matriz de atributos de calidad', descripcion: 'Prioriza rendimiento, seguridad, escalabilidad, mantenibilidad y tolerancia a fallas.', href: '/guias/toma-de-control-propuesta/template-matriz-calidad' },
          { titulo: 'Roadmap de evolución', descripcion: 'Estados estables, brechas y trabajo necesario para llegar a cada estado.', href: '/guias/toma-de-control-propuesta/template-roadmap-arquitectura' },
          { titulo: 'Mapa de contexto y dependencias', descripcion: 'C4 nivel 1 y 2 para sistemas, integraciones y límites del producto.', href: '/guias/toma-de-control-propuesta/template-mapa-contexto' },
          { titulo: 'Inventario técnico', descripcion: 'Activos, componentes, servicios, dependencias y resource IDs corporativos.', href: '/guias/toma-de-control-propuesta/template-inventario-tecnico' },
        ],
      },
      {
        tipo: 'destacado',
        variante: 'informativo',
        texto:
          'El HLD explica la solución objetivo; el LLD y el inventario permiten a Operaciones conocer cómo está implementada y qué depende de qué.',
      },
    ],
  },
  {
    id: 'artefactos-operacion',
    titulo: '8. Artefactos: soporte y continuidad',
    bajada: 'Evidencia ejecutable para seguridad, observabilidad, recuperación y soporte.',
    cuerpo: [
      {
        tipo: 'grilla-tarjetas',
        tarjetas: [
          { titulo: 'Runbook', descripcion: 'Un documento por servicio y tipo de incidente: señal, diagnóstico, remediación y escalamiento.', href: '/guias/toma-de-control-propuesta/template-runbook' },
          { titulo: 'Guía de monitoreo y alertas', descripcion: 'Métricas, logs, dashboards, umbrales y evidencia de alertas reales.', href: '/guias/toma-de-control-propuesta/template-monitoreo-alertas' },
          { titulo: 'DR Plan', descripcion: 'Recuperación, RTO/RPO, dependencias, escenarios, pruebas y failback.', href: '/guias/toma-de-control-propuesta/template-dr-plan' },
          { titulo: 'Modelo de soporte y continuidad', descripcion: 'N1/N2/N3, capacitación del receptor, incidentes con causa raíz y guardias.', href: '/guias/toma-de-control-propuesta/template-modelo-soporte' },
          { titulo: 'Compliance Pack', descripcion: 'Evidencia de RUA, DAO, GRC, SecShield, IAM y validaciones de seguridad.', href: '/guias/toma-de-control-propuesta/template-compliance-pack' },
          { titulo: 'Catálogo de datos', descripcion: 'Datos críticos o sensibles, owner, clasificación, consumo y controles.', href: '/guias/toma-de-control-propuesta/template-catalogo-datos' },
        ],
      },
      {
        tipo: 'destacado',
        variante: 'regla',
        texto:
          'El Runbook debe poder ejecutarlo alguien que no construyó el sistema: máximo tres pasos de diagnóstico, remediación progresiva y escalamiento con criterios explícitos.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Runbook, monitoreo y escalamiento nacen como borrador en Desarrollo y se consolidan en Monitoreo con datos de operación reales. El Compliance Pack se verifica con Seguridad y Operaciones antes del cierre.',
      },
    ],
  },
  {
    id: 'referencia-y-cierre',
    titulo: '9. Verificación, aprobación y cierre',
    bajada: 'Contrasta fuentes oficiales, coordina a quienes validan y deja el Manual gobernado.',
    cuerpo: [
      { tipo: 'encabezado', texto: 'Antes de aprobar' },
      {
        tipo: 'pasos',
        pasos: [
          { titulo: 'Verifica los datos', texto: 'Contrasta identificación y ownership con RUA, DAO y las fuentes corporativas antes de completar la Sección A.' },
          { titulo: 'Resuelve discrepancias', texto: 'Corrige el Manual cuando difiera de la fuente oficial; no normalices datos contradictorios.' },
          { titulo: 'Confirma evidencias', texto: 'Revisa vigencia, enlaces, responsables y evidencia ejecutable para cada artefacto.' },
          { titulo: 'Formaliza el cierre', texto: 'Desarrollo entrega; Operaciones valida autonomía; Seguridad revisa C y SRE aprueba las excepciones de G.' },
        ],
      },
      { tipo: 'encabezado', texto: 'Gobierno del documento' },
      {
        tipo: 'parrafo',
        texto:
          'Ingeniería de Software mantiene el procedimiento; cada equipo mantiene vigente la evidencia de su producto. Actualiza el Manual ante cambios de arquitectura, ownership, alertas, recuperación o dotación de soporte.',
      },
      {
        tipo: 'enlaces',
        enlaces: [
          { titulo: 'RUA', descripcion: 'Fuente oficial para identificación y gobierno de aplicaciones.' },
          { titulo: 'DAO', descripcion: 'Fuente para activos de Operaciones y su información operativa.' },
          { titulo: 'Continuidad Operativa / SRE', descripcion: 'Consulta para excepciones, riesgos aceptados y cierre de TDC.' },
        ],
      },
    ],
  },
]
