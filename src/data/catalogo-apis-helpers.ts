import type { Activo } from '@/types/catalogo'

export const responsablePorOwner = {
  mdh: { nombre: 'Equipo MDH', area: 'Master Data Hub', iniciales: 'MD' },
  mc: { nombre: 'Equipo MC', area: 'Information Security', iniciales: 'MC' },
  crm: { nombre: 'Equipo CRM', area: 'Customer Relationship Management', iniciales: 'CR' },
  txd: { nombre: 'Equipo TXD', area: 'Transacciones', iniciales: 'TX' },
  sm: { nombre: 'Equipo SM', area: 'Sales Management', iniciales: 'SM' },
  'b2b-integraciones': { nombre: 'Equipo B2B Integraciones', area: 'B2B', iniciales: 'B2' },
}

export function crearApi(
  id: string,
  nombre: string,
  dominio: string,
  owner: keyof typeof responsablePorOwner,
  lifecycle: 'production' | 'experimental',
  tags: string[],
): Activo {
  const detallePublicado = id === 'stock-online-easy-api'
  const descripcion = detallePublicado
    ? 'API para consultar stock de productos por centro (WERKS) y material (MATNR) utilizando un servicio OData SAP XSODATA.'
    : 'El portal publica su dominio, owner, lifecycle y tags; el contrato técnico no está publicado.'
  return {
    id,
    nombre,
    tipo: 'api',
    version: detallePublicado ? '1.0.0' : 'No publicada',
    descripcion,
    descripcionLarga: descripcion,
    categorias: [],
    equiposUsando: 0,
    aplicaAlStack: false,
    fechaIncorporacion: '2026-09-08',
    fechaActualizacion: '2026-09-08',
    responsable: responsablePorOwner[owner],
    pruebalo: [],
    contenido: [descripcion],
    enCencoFlow: [],
    requisitos: [],
    dominio,
    lifecycle,
    ownerId: owner,
    tags,
  }
}
