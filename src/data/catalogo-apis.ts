import type { Activo } from '@/types/catalogo'
import { activosApisExperimental } from './catalogo-apis-experimental'
import { activosApisProduction } from './catalogo-apis-production'

export const activosApis: Activo[] = [...activosApisProduction, ...activosApisExperimental]

// Valores reales de los filtros propios de APIs (hub /apis del portal real).
export const filtrosApiOpciones = {
  dominio: [
    'b2b',
    'customer-management',
    'customer-relations-management',
    'information-security',
    'inventory-management',
    'order-management',
    'pricing-management',
    'promotions-management',
    'sales-management',
  ],
  lifecycle: ['production', 'experimental'] as const,
  owner: ['b2b-integraciones', 'crm', 'mc', 'mdh', 'sm', 'txd'],
}
