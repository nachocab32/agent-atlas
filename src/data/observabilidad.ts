import { observabilidadExtraida } from './observabilidad-extraida'
import type { DocumentoGuia, PaginaDocumento } from '@/types/documento'
import type { BibliotecaObservabilidad, TemaObservabilidad } from '@/types/observabilidad'

const documentoFuente = observabilidadExtraida.documento

const paginas: PaginaDocumento[] = [
  {
    id: 'inicio',
    titulo: documentoFuente.titulo,
    bajada: 'El recorrido para adoptar, gobernar e implementar observabilidad corporativa.',
    seccion: 'Introducción',
    cuerpo: [
      { tipo: 'parrafo', texto: 'Este documento reúne el contenido operativo completo del portal de Observabilidad. Elige un recorrido según el momento en que estés: adoptar la capacidad, definir su gobierno o implementar la ruta técnica.' },
      {
        tipo: 'grilla-tarjetas',
        tarjetas: [
          { titulo: 'Adopción', descripcion: 'Fundamentos, señales, OpenTelemetry y evolución de la capacidad.', href: '/guias/observabilidad/fundamentos' },
          { titulo: 'Gobierno', descripcion: 'Servicios, cuentas, identidad, seguridad, estándares y decisiones.', href: '/guias/observabilidad/servicios' },
          { titulo: 'Golden Path', descripcion: 'La ruta para instrumentar, validar, operar y evolucionar una implementación.', href: '/guias/observabilidad/arquitectura' },
        ],
      },
    ],
  },
  ...documentoFuente.capitulos.flatMap((capitulo) => capitulo.temas.map((tema) => ({
    id: tema.id,
    titulo: tema.titulo,
    bajada: tema.bajada,
    seccion: capitulo.titulo,
    temaObservabilidad: tema as unknown as TemaObservabilidad,
    cuerpo: [],
  }))),
  {
    id: 'biblioteca',
    titulo: documentoFuente.bibliotecaDeFuentes.titulo,
    bajada: `${documentoFuente.bibliotecaDeFuentes.totalReferencias} referencias verificadas del marco de Observabilidad.`,
    seccion: 'Referencias',
    bibliotecaObservabilidad: documentoFuente.bibliotecaDeFuentes as unknown as BibliotecaObservabilidad,
    cuerpo: [],
  },
]

export const observabilidad: DocumentoGuia = {
  id: documentoFuente.id,
  titulo: documentoFuente.titulo,
  descripcion: 'Marco completo para adoptar, gobernar e implementar observabilidad corporativa con OpenTelemetry, Ægis, OES y Coralogix.',
  categorias: ['Observabilidad', 'Gobierno', 'Operaciones'],
  owner: 'Plataforma / Observabilidad',
  madurez: 'production',
  tags: ['observabilidad', 'opentelemetry', 'aegis', 'oes', 'coralogix', 'rum', 'gobierno'],
  detalle: {
    version: 'Portal de Observabilidad',
    actualizado: '8 septiembre 2026',
    owner: 'Plataforma / Observabilidad',
    tags: ['observabilidad', 'opentelemetry', 'aegis', 'oes', 'coralogix', 'rum', 'gobierno'],
  },
  paginas,
}
