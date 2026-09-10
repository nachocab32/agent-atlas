// Contenido extraído del portal real de Atlas (localhost:3000) el 8 de septiembre de 2026.
// Las 13 APIs experimentales son todas dominio b2b, owner b2b-integraciones.
import type { Activo } from '@/types/catalogo'
import { crearApi } from './catalogo-apis-helpers'

const TAGS_COMUNES = ['openapi', 'rest', 'sm', 'pe', 'b2b']

function crearApiB2b(id: string, nombre: string, tagPropio: string): Activo {
  return crearApi(id, nombre, 'b2b', 'b2b-integraciones', 'experimental', [...TAGS_COMUNES, tagPropio])
}

export const activosApisExperimental: Activo[] = [
  crearApiB2b('auth-api', 'Auth API', 'auth'),
  crearApiB2b('autogestion-order-api', 'Autogestion Order API', 'order'),
  crearApiB2b('checkout-api', 'Checkout API', 'checkout'),
  crearApiB2b('customer-api', 'Customer API', 'customer'),
  crearApiB2b('geocode-api', 'Google Geocode API', 'geocode'),
  crearApiB2b('loyalty-api', 'Loyalty API', 'loyalty'),
  crearApiB2b('products-api', 'Products API', 'product'),
  crearApiB2b('promotions-api', 'Promotions API', 'promotions'),
  crearApiB2b('shipping-api', 'Shipping API', 'shipping'),
  crearApiB2b('shopping-cart-api', 'Shopping Cart API', 'cart'),
  crearApiB2b('shopping-list-api', 'Shopping List API', 'shopping-list'),
  crearApiB2b('store-api', 'Store API', 'store'),
  crearApiB2b('user-api', 'User API', 'user'),
]
