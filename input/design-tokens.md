# ATLAS — Design Tokens

Extraído de `src/styles/tokens.css`, `src/styles/theme.css`,
`src/lib/design-system/fonts.ts` y `src/app/(auth)/login/_components/login.module.css`.

## Color — foundations (paleta cruda)

| Token | Valor |
|---|---|
| `--atlas-color-green-500` | `#1D9E75` |
| `--atlas-color-blue-500` | `#378ADD` |
| `--atlas-color-teal-400` | `#5DCAA5` |
| `--atlas-color-amber-400` | `#FBBF24` |
| `--atlas-color-rose-400` | `#FB7185` |
| `--atlas-color-white` | `#FFFFFF` |
| `--atlas-color-black` | `#000000` |

## Color — tema (dark / light)

| Token | Dark (default) | Light (`.light` / `prefers-color-scheme`) |
|---|---|---|
| `--bg-base` | `#060D18` | `#F4F6FB` |
| `--bg-surface` | `rgba(8, 18, 32, 0.85)` | `#FFFFFF` |
| `--bg-surface-hover` | `rgba(255, 255, 255, 0.05)` | `rgba(15, 23, 42, 0.05)` |
| `--border` | `rgba(255, 255, 255, 0.09)` | `rgba(15, 23, 42, 0.12)` |
| `--text-main` | `#FFFFFF` | `#0A0F1E` |
| `--text-muted` | `#7A94AB` | `#5A6B7C` |
| `--primary` | `#1D9E75` | `#0F6B53` |
| `--primary-dim` | `rgba(29, 158, 117, 0.15)` | `rgba(18, 132, 99, 0.12)` |
| `--violet` | `#378ADD` | `#6D4BD8` |
| `--teal` | `#5DCAA5` | `#0B7256` |
| `--cta-fg` | `#052E1B` | `#FFFFFF` |
| `--amber` | `#FBBF24` | `#7A5410` |
| `--rose` | `#FB7185` | `#C81E47` |
| `--chip-bg` | *(no definido, ver fallback en cada componente)* | `rgba(15, 23, 42, 0.05)` |
| `--card-hover-shadow` | *(no definido)* | `0 0.5rem 1.5rem rgba(15, 23, 42, 0.08)` |

Alias legacy (referenciados por código antiguo, mapean a los mismos valores por tema):
`--primary-light`, `--bg-hover`, `--text`, `--danger`, `--bg`.

### Syntax highlighting (`.code-body`, `.mcp-code-body`, `.md-body pre.doc-code`)

| Token | Dark | Light |
|---|---|---|
| `--syntax-fg` | `#a6accd` | `#1F2937` |
| `--syntax-comment` | `#5A6B8C` | `#6B7280` |
| `--syntax-keyword` | `#A78BFA` | `#6D4BD8` |
| `--syntax-string` | `#7CE3A8` | `#0B7256` |
| `--syntax-fn` | `#27D6F0` | `#0E7490` |
| `--syntax-num` | `#FBBF24` | `#B45309` |
| `--syntax-ph-bg` | `rgba(251, 191, 36, 0.14)` | `rgba(122, 84, 16, 0.14)` |
| `--syntax-ph-fg` | `#FBBF24` | `#7A5410` |

### Bloques de código (fijos, no cambian con el tema)

| Token | Valor |
|---|---|
| `--code-bg` | `#0F172A` |
| `--code-fg` | `#DCE3F0` |
| `--code-border` | `rgba(255, 255, 255, 0.10)` |
| `--code-head-bg` | `#16203A` |
| `--code-head-fg` | `#9FB0CC` |
| `--code-inline-bg` | `rgba(255, 255, 255, 0.06)` dark / `rgba(15, 23, 42, 0.06)` light |

## Color — semántico (API pública)

| Token | Referencia |
|---|---|
| `--color-background-canvas` | `var(--bg-base)` |
| `--color-background-surface` | `var(--bg-surface)` |
| `--color-background-surface-hover` | `var(--bg-surface-hover)` |
| `--color-background-selected` | `var(--primary-dim)` |
| `--color-border-default` | `var(--border)` |
| `--color-text-primary` | `var(--text-main)` |
| `--color-text-secondary` | `var(--text-muted)` |
| `--color-text-link` | `var(--primary)` |
| `--color-action-primary-background` | `var(--primary)` |
| `--color-action-primary-foreground` | `var(--atlas-color-white)` |
| `--color-action-secondary-background` | `transparent` |
| `--color-action-secondary-foreground` | `var(--text-main)` |
| `--color-status-success` | `var(--teal)` |
| `--color-status-info` | `var(--violet)` |
| `--color-status-warning` | `var(--amber)` |
| `--color-status-danger` | `var(--rose)` |
| `--color-focus-ring` | `var(--primary)` |

## Espaciado

| Token | Valor |
|---|---|
| `--space-0` | `0` |
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-7` | `1.75rem` |
| `--space-8` | `2rem` |
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |

## Radios

| Token | Valor |
|---|---|
| `--radius-none` | `0` |
| `--radius-sm` | `0.25rem` |
| `--radius-md` | `0.375rem` |
| `--radius-lg` | `0.75rem` |
| `--radius-xl` | `1rem` |
| `--radius-pill` | `9999px` |
| `--radius-full` | `50%` |
| `--radius` (componentes) | `0.75rem` |

## Bordes, elevación y foco

| Token | Valor |
|---|---|
| `--border-width-default` | `0.0625rem` |
| `--elevation-0` | `none` |
| `--elevation-1` | `0 0.125rem 0.5rem rgba(0, 0, 0, 0.16)` |
| `--elevation-2` | `0 0.5rem 1.5rem rgba(0, 0, 0, 0.2)` |
| `--elevation-3` | `0 1.25rem 3rem rgba(0, 0, 0, 0.28)` |
| `--focus-ring-width` | `0.1875rem` |
| `--focus-ring-offset` | `0.125rem` |

## Movimiento

| Token | Valor |
|---|---|
| `--duration-instant` | `100ms` |
| `--duration-fast` | `150ms` |
| `--duration-normal` | `200ms` |
| `--duration-slow` | `300ms` |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--ease-emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` |

## Breakpoints

| Token | Valor |
|---|---|
| `--breakpoint-sm` | `40rem` |
| `--breakpoint-md` | `48rem` |
| `--breakpoint-lg` | `64rem` |
| `--breakpoint-xl` | `80rem` |

## Tipografía

### Familias (next/font, cargadas en `layout.tsx` vía `src/lib/design-system/fonts.ts`)

| Token | Fuente | Pesos cargados |
|---|---|---|
| `--font-sans` | Inter (`--font-inter`) | 300, 400, 500, 600, 700 |
| `--font-heading` | Space Grotesk (`--font-space-grotesk`) | 400, 500, 600, 700 |
| `--font-mono` | JetBrains Mono (`--font-jetbrains-mono`) | 400, 500 |

### Escala de tamaño

| Token | Valor |
|---|---|
| `--font-size-caption` | `0.6875rem` |
| `--font-size-label` | `0.75rem` |
| `--font-size-body-sm` | `0.8125rem` |
| `--font-size-body` | `0.875rem` |
| `--font-size-body-lg` | `1rem` |
| `--font-size-heading-4` | `1.125rem` |
| `--font-size-heading-3` | `1.25rem` |
| `--font-size-heading-2` | `1.5rem` |
| `--font-size-heading-1` | `2rem` |
| `--font-size-display` | `2.5rem` |

### Line-height

| Token | Valor |
|---|---|
| `--line-height-tight` | `1.2` |
| `--line-height-heading` | `1.3` |
| `--line-height-body` | `1.5` |
| `--line-height-relaxed` | `1.6` |

## Íconos y controles

| Token | Valor |
|---|---|
| `--icon-size-sm` | `1rem` |
| `--icon-size-md` | `1.25rem` |
| `--icon-size-lg` | `1.5rem` |
| `--control-size-sm` | `2rem` |
| `--control-size-md` | `2.5rem` |
| `--control-size-lg` | `3rem` |

## Excepción — `/login` (tokens `--adx-*`)

El splash de login usa su propio set, no participa del theming claro/oscuro
(siempre oscuro), definido en `login.module.css`:

| Token | Valor |
|---|---|
| `--adx-bg` | `#060D18` |
| `--adx-surface` | `rgba(8, 18, 32, 0.85)` |
| `--adx-surface-hover` | `rgba(255, 255, 255, 0.05)` |
| `--adx-border` | `rgba(255, 255, 255, 0.09)` |
| `--adx-text` | `#FFFFFF` |
| `--adx-muted` | `#7A94AB` |
| `--adx-primary` | `#1D9E75` |
| `--adx-primary-dim` | `rgba(29, 158, 117, 0.15)` |
| `--adx-violet` | `#378ADD` |
| `--adx-teal` | `#5DCAA5` |
| `--adx-amber` | `#FBBF24` |
| `--adx-rose` | `#FB7185` |
| `--adx-gradient` | `linear-gradient(135deg, #1D9E75, #378ADD)` |
| `--adx-gradient-btn` | `linear-gradient(135deg, #1eb87e 0%, #1380a8 100%)` |
| `--adx-radius` | `0.75rem` |
| `--adx-radius-pill` | `9999px` |
| `--adx-radius-sm` | `0.375rem` |
| `--adx-font-sans` | Inter |
| `--adx-font-mono` | JetBrains Mono |
| `--adx-font-heading` | Space Grotesk |

---

Fuente única: `src/styles/tokens.css` (paleta + semánticos) y
`src/styles/theme.css` (overrides light theme). No editar valores acá —
este documento es una vista exportada, generado el 2026-09-09.
