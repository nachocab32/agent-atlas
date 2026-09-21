export type ReferenciaResuelta =
  | { tipo: 'activo'; activoId: string; ruta: string }
  | { tipo: 'documento'; documentoId: string; paginaId: string; ruta: string }
  | { tipo: 'paso-viaje'; pasoId: string; ruta: string }

// Solo incluye fuentes con contenido construido en este prototipo. Las fuentes
// provisorias permanecen deliberadamente como texto plano.
export const referenciasPorId: Record<string, ReferenciaResuelta> = {
  'cat-logging-expert': { tipo: 'activo', activoId: 'logging-expert', ruta: '/aceleradores/logging-expert' },
  'cf-014': { tipo: 'paso-viaje', pasoId: 'generar-la-propuesta', ruta: '/cencoflow' },
  'ss-arbol': { tipo: 'documento', documentoId: 'secret-scanning-runbook', paginaId: 'plan-de-mitigacion', ruta: '/guias/secret-scanning-runbook/plan-de-mitigacion' },
  'ss-falsopositivo': { tipo: 'documento', documentoId: 'secret-scanning-runbook', paginaId: 'plan-de-mitigacion', ruta: '/guias/secret-scanning-runbook/plan-de-mitigacion' },
  'ss-secretoreal': { tipo: 'documento', documentoId: 'secret-scanning-runbook', paginaId: 'plan-de-mitigacion', ruta: '/guias/secret-scanning-runbook/plan-de-mitigacion' },
  'ss-donderevocar': { tipo: 'documento', documentoId: 'secret-scanning-runbook', paginaId: 'plan-de-mitigacion', ruta: '/guias/secret-scanning-runbook/plan-de-mitigacion' },
  'ss-secretoreal-b2': { tipo: 'documento', documentoId: 'secret-scanning-runbook', paginaId: 'plan-de-mitigacion', ruta: '/guias/secret-scanning-runbook/plan-de-mitigacion' },
}
