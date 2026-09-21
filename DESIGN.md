---
name: Atlas
description: Portal interno para descubrir, evaluar y adoptar aceleradores de Cencosud.
colors:
  canvas: "#FDFCFA"
  sidebar: "#F3F1EC"
  surface: "#FFFFFF"
  text: "#1C1B1A"
  text-muted: "#6B6863"
  border: "rgba(26, 23, 18, 0.12)"
  primary: "#0F6B53"
typography:
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
rounded:
  sm: "7.2px"
  md: "9.6px"
  lg: "12px"
spacing:
  control: "8px"
  component: "12px"
  block: "16px"
  content: "24px"
  section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    height: "40px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "{spacing.component}"
---

# Design System: Atlas

## Overview

**Creative North Star: "El instrumento de consulta sobrio"**

Atlas es una interfaz de trabajo, no una vitrina. Combina la claridad editorial de Perplexity en modo claro con la densidad tranquila de Codify: fondo cálido, texto oscuro, bordes finos y una jerarquía que hace encontrable el conocimiento técnico.

El sistema es casi monocromo. El verde corporativo Atlas aparece sólo cuando expresa una acción primaria, una pestaña textual activa o un estado funcional confirmado. La densidad es predecible: los componentes compactan relaciones cercanas y las secciones conservan aire para orientar la lectura.

**Key Characteristics:**

- Superficies planas y bordes hairline en lugar de tarjetas elevadas.
- Un único acento funcional, nunca decorativo.
- Ritmo espacial por relaciones semánticas, no valores aislados.
- Desktop con sidebar persistente; móvil con drawer y contenido a ancho completo.

## Colors

La paleta usa blanco cálido y negro cálido para lectura prolongada; el verde Atlas es escaso y significativo.

- **Verde Atlas** (`#0F6B53`): acción primaria, pestaña de texto activa y señales funcionales existentes.
- **Canvas cálido** (`#FDFCFA`): fondo del contenido.
- **Sidebar apagado** (`#F3F1EC`): navegación lateral; debe diferenciarse del canvas.
- **Superficie blanca** (`#FFFFFF`): tarjetas, popovers y campos.
- **Tinta cálida** (`#1C1B1A`): texto, íconos monocromos y estado seleccionado.
- **Texto secundario** (`#6B6863`): metadatos y soporte.
- **Borde hairline** (`rgba(26, 23, 18, 0.12)`): separación de superficies.

**The One Accent Rule.** No uses verde para colorear tarjetas, íconos de tipo ni decoración. Violet, teal, amber y rose sólo pueden comunicar los estados funcionales ya definidos.

## Typography

**Display Font:** Inter, ui-sans-serif, system-ui, sans-serif.
**Body Font:** Inter, ui-sans-serif, system-ui, sans-serif.
**Label/Mono Font:** JetBrains Mono sólo en código y datos técnicos.

**Character:** Títulos y cuerpo pertenecen a una única familia grotesca; la jerarquía nace de peso, tamaño y espaciado, no de una display font decorativa.

- **Headline** (600, 24 px): título de página y secciones principales.
- **Title** (500–600, 16–20 px): títulos de tarjetas y bloques.
- **Body** (400, 16 px móvil / 14–16 px desktop): lectura y campos; el mínimo móvil evita zoom automático en iOS.
- **Label** (500, 12 px, tracking amplio, mayúsculas): clasificación y navegación secundaria.

## Layout

El recorrido principal es: navegación → título/contexto → controles → contenido → detalle secundario. Los grupos estrechos usan `gap`; los márgenes sólo separan bloques o anclan un elemento a su encabezado.

| Rol | Token | Valor | Uso |
|---|---|---:|---|
| Control | `--space-control` | 8 px | botones hermanos, grillas compactas |
| Componente | `--space-component` | 12 px | anatomía de tarjetas, toolbar, etiqueta→contenido |
| Bloque | `--space-block` | 16 px | grupos relacionados y encabezados con acción |
| Contenido | `--space-content` | 24 px | encabezado de ficha→cuerpo |
| Sección | `--space-section` | 32 px | secciones principales y columnas de detalle |

En desktop el sidebar es persistente y el contenido usa contenedores de 4–6xl según complejidad. En móvil (`<768px`) el sidebar se convierte en drawer, las grillas pasan a una columna y los paneles secundarios se reordenan después del contenido principal. Las tabs pueden desplazarse horizontalmente, pero nunca se recortan de forma silenciosa.

## Elevation & Depth

La profundidad se construye con contraste de superficie y borde de 1 px. `--elevation-1` y `--elevation-2` son casi imperceptibles y se reservan para popovers o controles flotantes.

**The Border-First Rule.** Si una superficie necesita distinguirse, primero usa borde o fondo; la sombra sólo acompaña una capa flotante.

## Shapes

Las superficies usan radios de 12 px; los radios menores se reservan para controles compactos. Píldoras sólo para filtros, tags y controles breves. Los íconos de tipo viven en un contenedor cuadrado de borde fino y fondo de superficie, siempre monocromos.

## Components

### Buttons

- **Primary:** verde Atlas, texto blanco y altura de 40 px en desktop; el área táctil llega a 44 px en móvil cuando el control es iconográfico.
- **Outline / ghost:** fondo plano, borde o hover suave `bg-muted`; foco visible mediante ring de 3 px.
- **Selected filters:** fondo `foreground` y texto `background`, no verde.

### Cards / Collections

- **TarjetaCatalogo:** borde hairline, radio de 12 px, padding y anatomía interna de `--space-component`.
- **Grillas:** `--space-control` entre tarjetas; una columna en móvil y dos desde `sm`.
- **Secciones:** `--space-section` entre colecciones, `--space-component` entre encabezado y grilla.

### Inputs / Fields

- Fondo transparente o de superficie, borde de 1 px y radio de 12 px.
- Ring visible de 3 px al enfocar.
- Texto de 16 px en móvil; `sm:text-sm` sólo desde desktop compacto.

### Navigation

- Sidebar apagado en desktop; el estado activo usa una superficie tenue, no una tarjeta coloreada.
- En móvil, el drawer cerrado debe estar fuera del árbol de foco (`inert` + `aria-hidden`).
- Toda ruta principal expone un landmark `main` y el shell ofrece “Saltar al contenido principal”.

### Dialogs

- Modal con backdrop tenue, foco contenido y título/descripción semánticos.
- Los controles de cierre y descarte usan objetivos táctiles de al menos 44 px en móvil.

## Do's and Don'ts

### Do:

- **Do** usa los cinco roles espaciales antes de introducir un valor de gap puntual.
- **Do** conserva el contraste canvas/sidebar y separa superficies con bordes finos.
- **Do** reordena contenido secundario bajo el principal en móvil.
- **Do** conserva foco visible, landmarks y etiquetas accesibles en cada flujo nuevo.

### Don't:

- **Don't** uses color categórico o verde como decoración.
- **Don't** uses sombras fuertes ni tarjetas dentro de tarjetas sin una relación funcional clara.
- **Don't** ocultes tabs, filtros o navegación por falta de espacio; refluye, desplaza explícitamente o usa drawer.
- **Don't** añadas inputs con texto menor a 16 px en móvil.
