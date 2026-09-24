import type { DocumentoGuia } from '@/types/documento'
import { paginasTdcOriginal } from './toma-de-control-original'

// Migración del contenido oficial revisado en /docs/tdc del portal anterior.
// Se conserva la estructura de decisión, los 15 artefactos y el Manual A–G,
// adaptados a las superficies de lectura del nuevo portal.
export const tomaDeControlPropuesta: DocumentoGuia = {
  id: 'toma-de-control-propuesta',
  titulo: 'Toma de Control',
  descripcion:
    'Procedimiento y artefactos para transferir un producto a Operaciones con un Manual completo, evidencia verificable y un plan explícito para las brechas.',
  categorias: ['Gobierno', 'Operaciones'],
  owner: 'Operaciones',
  madurez: 'production',
  tags: ['tdc', 'continuidad', 'operaciones', 'gobierno', 'manual', 'runbook'],
  detalle: {
    version: '1.3',
    actualizado: 'Julio 2026',
    owner: 'Operaciones',
    tags: ['tdc', 'continuidad', 'operaciones', 'gobierno', 'manual', 'runbook'],
  },
  paginas: [
    { id: 'inicio', titulo: 'Toma de Control', seccion: 'Guías', cuerpo: [] },
    ...paginasTdcOriginal,
  ],
}
