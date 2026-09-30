# Bank Modern App

Landing page bancaria construida con React 19, Tailwind CSS 4 y Vite 8. Es una interfaz de demostración; no procesa operaciones bancarias.

## Requisitos

- Node.js 20.19+, 22.13+ o 24+ (versiones pares compatibles)
- npm

## Desarrollo

```bash
npm ci
npm run dev
```

Abre la dirección que muestra Vite (normalmente `http://localhost:5173`).

## Verificación y producción

```bash
npm run lint
npm run check:routes
npm run build
npm run preview
```

El build queda en `dist/`. Se puede publicar como sitio estático en Vercel, Netlify o un servidor similar.

## Estilos

La paleta azul noche, menta y violeta, la fuente Poppins y los puntos de quiebre personalizados están definidos en `src/index.css` mediante `@theme`. Tailwind se integra con Vite desde `vite.config.js`.

El menú superior lleva a Inicio, Funciones, Producto y Clientes. La navegación usa rutas con `#` para funcionar también en alojamiento estático sin configurar redirecciones en el servidor.

## Estructura

- `src/components/`: secciones y componentes de la página.
- `src/assets/`: imágenes e iconos.
- `src/constants/`: datos de la página.
- `src/style.js`: clases reutilizadas por los componentes.

## Autor

Bryan Suarez · [GitHub](https://github.com/bryansuarezdev) · [LinkedIn](https://www.linkedin.com/in/bryansuarez1989/)
