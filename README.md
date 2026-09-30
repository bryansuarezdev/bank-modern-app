# 🏦 Bank Modern App

**Una interfaz bancaria conceptual que construí para aprender React y que hoy forma parte de mi portafolio.**

![React](https://img.shields.io/badge/React-19.3-149eca?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18-ca4245?logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06b6d4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646cff?logo=vite&logoColor=white)

## 🙏 Agradecimiento principal

Este proyecto nació mientras seguía el tutorial **[Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind](https://www.youtube.com/watch?v=_oO4Qi5aVZs)** de [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), creado por [Adrian Hajdin](https://jsmastery.com/knowledge-base/understanding-the-weird-parts-and-behaviors-of-javascript).

**Gracias, Adrian, por compartir el proyecto y explicarlo paso a paso.** Construí la versión inicial acompañando el video y fui practicando React durante todo el proceso. La estructura visual y los componentes originales se basan en su tutorial; este repositorio documenta ese aprendizaje y las ampliaciones que hice después.

> **Proyecto demostrativo:** no es un banco, no crea cuentas y no procesa pagos. Las cifras, reseñas y marcas se usan como contenido de ejemplo para mostrar el diseño.

## ✨ Qué puedes explorar

- **Inicio:** presentación del concepto y accesos a las secciones principales.
- **Funciones:** tarjetas que muestran ideas de recompensas, seguridad y transferencias.
- **Producto:** diseños de facturación y tarjetas.
- **Clientes:** testimonios y logotipos de muestra.
- **Pie de página:** 12 enlaces con páginas informativas propias, entre ellas How it Works, Help Center, Blog y Terms & Services.

El menú funciona en escritorio y móvil, indica la página activa y permite usar los botones Atrás y Adelante del navegador. Las rutas usan `#` para que el sitio pueda publicarse como archivos estáticos sin configurar redirecciones.

## 🧰 Tecnologías

| Tecnología | Uso |
| --- | --- |
| React 19 | Componentes, propiedades y estado del menú móvil |
| React Router 7 | Navegación entre páginas y rutas informativas |
| Tailwind CSS 4 | Diseño adaptable, utilidades y colores personalizados |
| Vite 8 | Servidor de desarrollo y build de producción |
| JavaScript (ES modules) | Lógica de la aplicación |
| ESLint 10 | Revisión estática del código |

La paleta azul noche, menta y violeta y los puntos de quiebre están definidos en [`src/index.css`](src/index.css).

## 🚀 Ejecutarlo localmente

Necesitas npm y una versión compatible de Node.js: **20.19+, 22.13+ o 24+** dentro de las ramas pares correspondientes.

```bash
git clone https://github.com/bryansuarezdev/bank-modern-app.git
cd bank-modern-app
npm ci
npm run dev
```

Abre la URL que muestra Vite, normalmente `http://localhost:5173`. Por ejemplo, la página de Funciones estará en `http://localhost:5173/#/features`.

## ✅ Comprobaciones

```bash
npm run lint          # Revisa el código
npm run check:routes  # Comprueba las 4 páginas principales y los 12 enlaces del pie
npm run build         # Genera dist/
npm run preview       # Sirve el build localmente
```

El contenido de `dist/` puede publicarse en un alojamiento de sitios estáticos.

## 📁 Organización

```text
src/
├── assets/            # Imágenes e iconos
├── components/        # Secciones y elementos compartidos
├── constants/         # Datos de navegación y páginas informativas
├── App.jsx            # Páginas y rutas
├── index.css          # Tema y estilos globales
└── main.jsx           # Entrada de React
scripts/
└── check-routes.mjs   # Comprobación de rutas y enlaces
```

## 💡 Origen y aprendizaje

Después de completar la versión guiada por el tutorial, amplié el proyecto como muestra de portafolio: añadí navegación real, páginas informativas, un tema de color propio y comprobaciones de rutas. Me sirvió para seguir trabajando con componentes reutilizables, estado, diseño adaptable y herramientas de build.

## 👨‍💻 Autor

**Bryan Suarez** · [GitHub](https://github.com/bryansuarezdev) · [LinkedIn](https://www.linkedin.com/in/bryansuarez1989/)
