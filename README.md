# 🏦 Bank Modern App

**Interfaz bancaria moderna y conceptual construida con React 19, Tailwind CSS 4 y Vite.**  
Diseñada con un enfoque centrado en UX/UI premium, arquitectura modular de componentes y navegación fluida para portafolio.

<p align="left">
  <a href="https://portfolio-test-b-modern-app.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Demo_en_Vivo-008080?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo en Vivo" />
  </a>
  <a href="https://github.com/bryansuarezdev/bank-modern-app" target="_blank">
    <img src="https://img.shields.io/badge/Repositorio-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositorio" />
  </a>
</p>

<p align="left">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/ESLint_10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint 10" />
</p>

🔗 **Demo en vivo:** [https://portfolio-test-b-modern-app.vercel.app](https://portfolio-test-b-modern-app.vercel.app/)  
📁 **Repositorio:** [https://github.com/bryansuarezdev/bank-modern-app](https://github.com/bryansuarezdev/bank-modern-app)

---

> ⚠️ **Nota aclaratoria:** Este es un **proyecto conceptual y demostrativo** con fines de portafolio y aprendizaje. No es una entidad bancaria real, no solicita credenciales, no crea cuentas ni procesa pagos o transacciones reales. Todas las marcas, testimonios y métricas son ficticios y puramente ilustrativos.

---

## 📸 Vista Previa

<p align="center">
  <img src="./screenshots/preview.png" alt="Vista previa de Bank Modern App" width="100%" />
</p>

---

## 📋 Tabla de Contenidos

1. [📸 Vista Previa](#-vista-previa)
2. [💡 Sobre el Proyecto](#-sobre-el-proyecto)
3. [✨ Características Principales](#-características-principales)
4. [🛠️ Stack Tecnológico](#️-stack-tecnológico)
5. [📁 Estructura del Proyecto](#-estructura-del-proyecto)
6. [🚀 Ejecución Local](#-ejecución-local)
7. [🧪 Scripts y Comprobaciones](#-scripts-y-comprobaciones)
8. [🙏 Agradecimiento y Aprendizaje](#-agradecimiento-y-aprendizaje)
9. [👨‍💻 Autor](#-autor)

---

## 💡 Sobre el Proyecto

Este proyecto nació como un ejercicio práctico siguiendo un tutorial de referencia para dominar React y Tailwind CSS. Posteriormente, lo evolucioné y amplié de forma integral como pieza de portafolio:
- Incorporé **arquitectura modular de rutas** con React Router.
- Diseñé un **sistema dinámico de páginas informativas** para los enlaces del footer.
- Implementé una **paleta de color propia** en tonos noche profunda, menta y violeta eléctrico.
- Añadí **scripts de verificación automatizada** para garantizar la integridad de rutas y enlaces.

---

## ✨ Características Principales

### 🎯 **Experiencia de Usuario y Diseño**
- **Estética Fintech Premium:** Esquema dark mode con gradientes sutiles, microinteracciones y efectos de desenfoque de fondo (*glassmorphism*).
- **100% Adaptable (Responsive):** Experiencia fluida y consistente en móviles, tablets y escritorios.
- **Accesibilidad y Semántica:** Navegación por teclado optimizada, enlaces con identificadores de sección y etiquetas accesibles.

### 🧭 **Navegación y Páginas**
- **Inicio (`/`):** Hero section interactivo, métricas clave (*stats*), sección de exploración rápida y llamada a la acción (CTA).
- **Funciones (`/features`):** Presentación detallada de recompensas, seguridad bancaria y transferencias.
- **Producto (`/product`):** Módulo de facturación, gestión y análisis visual de tarjetas.
- **Clientes (`/clients`):** Sección de testimonios de usuarios y marcas aliadas.
- **Páginas Informativas (`/info/:slug`):** 12 vistas dinámicas para enlaces del footer (*How it Works*, *Help Center*, *Blog*, *Terms & Services*, etc.).

---

## 🛠️ Stack Tecnológico

| Capa / Herramienta | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Librería UI** | [React 19](https://react.dev/) | Componentes declarativos, hooks y gestión reactiva de estado |
| **Enrutamiento** | [React Router 7](https://reactrouter.com/) | Navegación multipágina SPA y soporte para historial del navegador |
| **Estilos y Diseño** | [Tailwind CSS 4](https://tailwindcss.com/) | Utilidades JIT de alto rendimiento y diseño responsivo |
| **Build Tool** | [Vite 8](https://vite.dev/) | Entorno ultrarrápido con HMR y empaquetado optimizado |
| **Calidad de Código** | [ESLint 10](https://eslint.org/) | Análisis estático y mejores prácticas para React |
| **Despliegue** | [Vercel](https://vercel.com/) | CI/CD automático y alojamiento optimizado para frontend |

---

## 📁 Estructura del Proyecto

Organización modular orientada a la mantenibilidad y separación clara de responsabilidades:

```text
bank-modern-app/
├── public/                 # Favicon y recursos públicos estáticos
├── scripts/
│   └── check-routes.mjs    # Script de verificación para todas las rutas y enlaces
├── src/
│   ├── assets/             # Logotipos, íconos SVG e imágenes de demostración
│   ├── components/         # Componentes reutilizables (Navbar, Hero, Stats, Footer, etc.)
│   ├── constants/          # Datos estáticos de navegación y catálogo de infoPages
│   │   ├── index.js        # Enlaces de navegación y contenidos de secciones
│   │   └── infoPages.js    # Definición de páginas informativas dinámicas
│   ├── App.jsx             # Enrutador principal y layout general
│   ├── index.css           # Tokens de diseño, tema y utilidades globales de Tailwind
│   ├── main.jsx            # Punto de entrada de React en el DOM
│   └── style.js            # Tokens de espaciado y layout reutilizables
├── index.html              # Shell HTML principal y metadatos SEO
├── package.json            # Scripts y dependencias del proyecto
└── vite.config.js          # Configuración de Vite y plugins de React / Tailwind
```

---

## 🚀 Ejecución Local

### Prerrequisitos
Asegúrate de tener instalada una versión LTS reciente de **Node.js (20.19+, 22.13+ o 24+)** y npm.

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/bryansuarezdev/bank-modern-app.git
   cd bank-modern-app
   ```

2. **Instalar dependencias:**
   ```bash
   npm ci
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para interactuar con la app.

---

## 🧪 Scripts y Comprobaciones

El proyecto incluye scripts para asegurar que el código y las rutas funcionen sin fallas:

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con Hot Module Replacement (HMR) |
| `npm run lint` | Ejecuta ESLint para comprobar estándares y prevenir errores |
| `npm run check:routes` | Valida que las 4 rutas principales y los 12 enlaces del footer resuelvan correctamente |
| `npm run build` | Compila el bundle de producción optimizado en `dist/` |
| `npm run preview` | Previsualiza localmente el build de producción |

---

## 🙏 Agradecimiento y Aprendizaje

Este proyecto nació mientras seguía el tutorial **[Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind](https://www.youtube.com/watch?v=_oO4Qi5aVZs)** de [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), creado por [Adrian Hajdin](https://jsmastery.com/knowledge-base/understanding-the-weird-parts-and-behaviors-of-javascript).

**Gracias, Adrian, por compartir el proyecto y explicarlo paso a paso.** Construí la versión inicial acompañando el video para practicar los fundamentos de React. La estructura visual base y los componentes originales se inspiran en su tutorial; este repositorio documenta ese proceso y las sucesivas ampliaciones que implementé para transformarlo en una web app completa con navegación y rutas reales.

---

## 👨‍💻 Autor

<p align="left">
  <strong>Bryan Suárez</strong><br>
  <em>Full-Stack Developer & Digital Operations Specialist</em><br>
</p>

<p align="left">
  <a href="https://www.linkedin.com/in/bryansuarez1989/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/bryansuarezdev" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:bryan.end.dev@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  <sub>Construido con foco en código limpio, interfaces modernas y atención al detalle.</sub>
</p>
