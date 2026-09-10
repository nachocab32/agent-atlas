# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Cómo se conecta esto al motor real

> El prototipo está construido para conectarse a CopilotKit por la vía headless, conservando esta interfaz.
>
> - Cada componente de `src/components/respuesta/` se registra contra el agente pasando su nombre y su función de render. Reciben exactamente las props que ya tienen; no requieren cambios.
> - El hilo pasa a leer los mensajes del agente en lugar del estado local, y el envío pasa a agregar el mensaje y ejecutar el agente.
> - El indicador de carga pasa a leer el estado de ejecución del agente.
> - `src/lib/respuestaSimulada.ts` se elimina completo. Es el único archivo desechable.
> - En un SPA con Vite el runtime necesita un servidor propio en otro puerto, con CORS habilitado explícitamente y una URL absoluta desde el frontend. No aplica la ruta relativa de los quickstarts de Next.js.
