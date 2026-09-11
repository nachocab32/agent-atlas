# Design

<!-- impeccable:design-schema 1 -->

## Dirección

**Estilo Perplexity (light mode), con el segundo tono de Codify.** Registro casi monocromo: fondo cálido casi blanco, bordes de 1px en vez de sombras, cero color decorativo en el chrome. El verde corporativo de Atlas (`#0F6B53`) es el único acento vivo del sistema, reservado para: la acción primaria de cada pantalla, el subrayado de la pestaña/filtro activo, y las señales de estado que ya existían antes de este rediseño (cumplido, urgencia). Nunca se usa como color decorativo de un ícono o de una tarjeta completa.

Se descartaron 4 direcciones más ambiciosas y temáticas (cuaderno de campo de naturalista, atlas de expedición cartográfico, instrumento de espectrograma, lexicón de diccionario del siglo XIX — ver `.impeccable/mocks/decision/`) antes de pinnear esta referencia. No revivir esas direcciones sin que el usuario lo pida explícitamente.

## Paleta

Fondo en dos tonos — la costura entre ambos es la firma del sistema:

| Token | Valor | Uso |
|---|---|---|
| `--canvas` / `--background` | `#FDFCFA` | Contenido, página |
| `--sidebar` | `#F3F1EC` | Sidebar únicamente — siempre más apagado que el canvas |
| `--bg-surface` / `--card` | `#FFFFFF` | Tarjetas, popovers |
| `--atlas-border` / `--border` | `rgba(26, 23, 18, 0.12)` | Hairline — reemplaza la sombra como separador de superficies |
| `--text-main` / `--foreground` | `#1C1B1A` | Texto principal (negro cálido, no azulado) |
| `--text-muted` | `#6B6863` | Texto secundario |
| `--atlas-primary` / `--accent` | `#0F6B53` | Único acento vivo |

Categóricos existentes (`teal`/`violet`/`amber`/`rose` en `--color-*`) se conservan **solo** para señales funcionales ya confirmadas antes de este rediseño (urgencia en `ArbolDecision`/`PasosSecuencia`, estado `pendiente` en `ListaEstado`) — nunca para colorear un ícono de tipo o una tarjeta completa a modo decorativo.

## Elevación

`--elevation-1` y `--elevation-2` quedaron casi imperceptibles a propósito (`0 1px 2px rgba(26,23,18,.05)` y similar). Este sistema separa superficies con **borde de 1px**, no con sombra. Si algo necesita destacarse, sube el peso del borde o el contraste de fondo, no la sombra.

## Tipografía

Un solo tipo de letra para todo: **Inter**. Se retiró Space Grotesk de los encabezados (`--font-heading` ahora apunta a `--font-sans`) — este registro no usa un display font distinto para títulos, los títulos son el mismo grotesco en negrita, como en la referencia. JetBrains Mono se conserva solo para bloques de código real (`CuerpoDocumento`), no como adorno.

## Iconografía

Íconos de tipo de activo (arquetipo/skill/agente/mcp-server/api) son **monocromos**: contenedor con borde fino + fondo `bg-card`, ícono en `text-foreground`. Nunca un chip de color por tipo — ese era el patrón anterior (`bg-muted text-accent` o chips categóricos) y quedó retirado en `TarjetaCatalogo` y `EncabezadoFicha`.

## Estados activos / seleccionados

Patrón único en todo el sistema: **píldora o tarjeta con relleno sólido `bg-foreground text-background`** (negro cálido, no verde) para "seleccionado". Aplica a: `FiltroTipo`, `EtapaCelda`, filtros de Guías y Plataforma, `FilaFacetaPildoras`. El verde se reserva para el subrayado de pestañas de texto (`data-[state=active]` en `Tabs`) y para botones de acción primaria reales (`Button` variant default).

## Componentes tocados en este rediseño

- `src/shared/styles/tokens.css` — fuente de la mayoría del cambio (cascada automática).
- `src/shared/ui/tarjeta-catalogo.tsx` — ícono monocromo.
- `src/components/ficha/EncabezadoFicha.tsx` — ícono monocromo.
- `src/components/catalogo/FiltroTipo.tsx`, `EtapaCelda.tsx` — estado activo a negro sólido.
- `src/shared/ui/fila-faceta-pildoras.tsx`, `src/pages/guias/guias-page.tsx`, `src/pages/plataforma/plataforma-page.tsx` — mismo patrón de filtro.

No se tocó la estructura de ningún componente, solo color/borde/ícono. Los bloques de respuesta del chat (`src/components/respuesta/*`) heredan el cambio vía tokens sin modificación propia, salvo que ya usaban colores funcionales (urgencia, estado) que se mantienen intactos a propósito.

## Comps de referencia

`.impeccable/mocks/decision/` guarda los 6 comps HTML explorados (standalone, con contenido real del catálogo) — incluye las 4 direcciones descartadas y las 2 que sí anclaron la decisión final (`estandar-sobrio.html`, `perplexity-style.html`). Sirven de referencia histórica, no se cargan en la app.
