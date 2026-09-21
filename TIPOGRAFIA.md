# Tipografía del prototipo Atlas

## Propósito y alcance

Este documento consolida los tamaños tipográficos que están implementados actualmente en el prototipo de Atlas. Está pensado como referencia de handoff para diseño y desarrollo: registra las escalas usadas en la interfaz, su rol visual y los contextos donde aparecen.

La interfaz usa Inter como tipografía principal. JetBrains Mono se reserva para bloques de código y contenido técnico que lo requiera.

## Escala tipográfica implementada

| Jerarquía | Clase de implementación | Tamaño | Interlineado | Uso habitual |
| --- | --- | ---: | ---: | --- |
| Micro marca | `text-[9px]` | 9 px | Normal | Tagline de Atlas en el sidebar. |
| Micro etiqueta | `text-[10px]` | 10 px | Normal | Atajos de teclado, contadores, badges y estado `Actual`. |
| Etiqueta y metadata | `text-xs` | 12 px | 16 px | Rótulos de sección, chips, metadata de tarjetas, tablas, navegación secundaria y fuentes. |
| Texto de interfaz | `text-sm` | 14 px | 20 px | Botones, inputs, descripciones de tarjetas, barras de navegación, mensajes de chat y cuerpo breve. |
| Cuerpo de lectura | `text-base` | 16 px | 24 px | Contenido extenso de documentos, fichas de API y explicaciones técnicas. |
| Subtítulo | `text-lg` | 18 px | 28 px | Títulos internos puntuales, entradas de viaje y elementos destacados del sidebar. |
| Título de bloque | `text-xl` | 20 px | 28 px | Encabezados de fichas, etapas, secciones destacadas y saludo de Home. |
| Título de página | `text-2xl` | 24 px | 32 px | Encabezados de Catálogo, Guías, Plataforma y CencoFlow. |
| Título editorial | `text-[40px]` | 40 px | 48 px | Portadas y encabezados principales de documentos de Guías. |
| Hero adaptable | `text-[clamp(1.875rem,1.2rem+2vw,2.375rem)]` | 30–38 px | Normal | Título principal de orientación en Home; se adapta al ancho de pantalla. |

## Pesos y tratamiento

Los pesos de Inter disponibles en el proyecto son 400, 500, 600 y 700. En la interfaz predominan los siguientes usos:

| Peso | Clase | Uso habitual |
| ---: | --- | --- |
| 400 | Sin clase explícita o `font-normal` | Texto de lectura y contenido secundario. |
| 500 | `font-medium` | Navegación, controles, títulos de tarjetas y etiquetas con énfasis moderado. |
| 600 | `font-semibold` | Títulos de página, encabezados y acciones que requieren mayor jerarquía. |
| 700 | `font-bold` | Disponible en la fuente, con uso excepcional dentro del prototipo. |

## Criterio de jerarquía

La escala se organiza en tres niveles de lectura:

1. **Navegación y soporte:** 9–12 px para etiquetas, metadata, estados y controles compactos.
2. **Interfaz y contenido:** 14–16 px para la mayor parte de la interacción y la lectura continua.
3. **Encabezados:** 18–40 px para estructurar secciones, páginas y portadas; Home usa una variante fluida de 30 a 38 px.

## Fuente de verdad en el código

- Tipografías y tokens globales: `src/shared/styles/tokens.css`.
- Escalas estándar: clases tipográficas de Tailwind (`text-xs` a `text-2xl`).
- Escalas especiales: `src/shared/layout/sidebar.tsx`, `src/pages/guias/documento-page.tsx`, `src/components/documento/TomaDeControlPortada.tsx` y `src/features/home/components/home-orientacion.tsx`.

## Recomendación de uso

Para mantener consistencia, usar las escalas estándar para interfaz cotidiana y reservar los tamaños arbitrarios para los roles que ya los justifican: la micro marca de 9 px, los micro indicadores de 10 px, las portadas editoriales de 40 px y el hero responsive de Home.
