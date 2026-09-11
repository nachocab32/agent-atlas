# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Perfiles técnicos y de producto de Cencosud (ingeniería, diseño, product) que buscan descubrir y reutilizar aceleradores ya construidos —arquetipos, skills de Claude Code, agentes, servidores MCP y APIs— en vez de rehacer trabajo ya resuelto. Llegan con una tarea concreta del ciclo de vida CencoFlow (research, diseño de solución, backlog, desarrollo, monitoreo, etc.) y usan el chat como apoyo puntual para dudas operativas (p. ej. runbooks de seguridad) o para entender cómo aplicar un acelerador específico.

## Product Purpose

Atlas es el punto único para descubrir, evaluar y adoptar aceleradores internos de Cencosud, y para resolver dudas operativas con respaldo documental real en vez de respuestas genéricas o inventadas. Éxito significa que una persona encuentra el activo correcto más rápido que rehaciéndolo desde cero, y que el chat nunca presenta como hecho algo que no está documentado.

## Positioning

A diferencia de un buscador de documentación genérico o un directorio estático de librerías, Atlas conecta el catálogo con el chat: cada ficha de acelerador puede anclarse como contexto de una conversación, y el chat responde con el tipo de bloque que corresponde a la forma real del conocimiento (una decisión con ramas, una secuencia de pasos, una tabla, una lista de estado) citando la fuente exacta —versión y sección—, y declara explícitamente cuando algo no está documentado en vez de rellenar el vacío.

## Operating Context

- Navegación por catálogo de aceleradores, filtrable por tipo (arquetipo, skill, agente, mcp-server, api) y por etapa de CencoFlow.
- Fichas de detalle específicas por tipo de activo (instalación para skills, contrato para APIs, conexión para MCP servers, etc.).
- Chat conversacional con historial de conversaciones recientes, opcionalmente anclado a un acelerador puntual.
- Sección de Guías (runbooks y documentos operativos reales, p. ej. Runbook de Secret Scanning).
- Flujo de "Toma de control": documentar paso a paso un servicio heredado sin documentación previa.
- Página de propuesta de CencoFlow (etapas del ciclo de vida del producto).

## Capabilities and Constraints

- Prototipo de frontend puro (sin backend real); el chat hoy usa datos simulados en `src/lib/respuestaSimulada.ts`, pendiente de reemplazo por CopilotKit.
- **Restricción dura confirmada:** los componentes de `src/components/respuesta/` (Parrafo, ListaEstado, TarjetaActivo, SinFuente, Fuentes, ArbolDecision, PasosSecuencia, Tabla, Sugerencias) y sus props deben seguir funcionando igual tras cualquier rediseño visual, porque el motor real se conecta contra ese mismo contrato.
- El chat sostiene cinco estados de conversación: respondiendo, respuesta completa, respuesta parcial (con transición a "sin fuente"), sin fuente, y error con reintento sin pérdida del mensaje del usuario.
- Máximo dos bloques de contenido por respuesta del chat; toda respuesta abre con prosa, nunca con un bloque suelto (contrato de producto ya implementado, no solo visual).
- Copy de interfaz en español, tuteo, registro formal.
- Contenido real que no debe reescribirse ni resumirse: entradas de catálogo extraídas del portal real (incluye erratas intencionalmente conservadas) y el Runbook de Secret Scanning v1.0 (Julio 2026, Owner: Seguridad / COE Tomm).

## Brand Commitments

**Dirección visual confirmada (2026-09-10):** registro sobrio y casi monocromo, anclado en Perplexity (light mode) y en menor medida Codify — ver `DESIGN.md`. El usuario probó y descartó 4 direcciones temáticas más ambiciosas (cuaderno de campo naturalista, atlas de expedición cartográfico, instrumento de espectrograma, lexicón de diccionario) antes de pinnear esta referencia; no reabrir esa exploración sin pedido explícito. El nombre "Atlas", el símbolo/logo y el verde corporativo (`#0F6B53`) se mantienen como el único acento vivo del sistema — no es una restricción heredada del portal real, es una decisión de diseño confirmada para este rediseño.

## Evidence on Hand

- Screenshots y `design-tokens.md` en `input/`, extraídos del portal DevEx real de Cencosud el 8 de septiembre de 2026 — usados como referencia de contenido y estructura, no como ancla visual obligatoria.
- Entradas reales de catálogo (`src/data/catalogo-apis-production.ts` y otros) tomadas del portal real, con erratas del original conservadas a propósito.
- Runbook · Respuesta a Alertas de Secret Scanning v1.0 (Julio 2026, Owner: Seguridad / COE Tomm), usado como contenido real de las respuestas de chat sobre ese tema.
- No hay demo grabada, testimonios ni métricas de uso real: es un prototipo visual, no un producto en producción.

## Product Principles

1. **Nunca inventar documentación.** Toda respuesta del chat traza a una fuente real (título, versión, sección) o declara explícitamente que no hay fuente — nunca rellena el vacío con una respuesta genérica.
2. **Descubrimiento y guía están conectados.** Una ficha de acelerador puede anclarse como contexto del chat, para no perder ese hilo al pasar de "explorar" a "preguntar cómo se usa".
3. **La respuesta toma la forma del conocimiento**, no al revés: pasos ordenados, una decisión con ramas, una tabla comparativa o una lista de estado, según lo que la fuente realmente documenta.
4. **El contrato de los bloques de respuesta es la costura hacia el motor real.** Cualquier cambio visual o de comportamiento debe preservar la forma de esas props, porque ahí se conecta CopilotKit después.
5. **CencoFlow es la columna organizadora.** Aceleradores y guías se ubican y se explican en relación a las etapas del ciclo de vida de producto que Cencosud ya usa.
