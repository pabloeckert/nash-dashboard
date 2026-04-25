# 📝 Tablero Nash — Registro de Actualizaciones

> Cada vez que se diga "documentar", agregar entrada aquí.

---

## v3.0 — 25/04/2026

### Nuevos — Paneles
- **🧠 Panel IA** — Pensamiento de IA (GPT-4, Claude, Gemini, Llama, DeepSeek), tendencias redes sociales (Twitter, Reddit, YouTube, Telegram), analistas nacionales e internacionales con quotes y stance, organismos nacionales e internacionales/privados
- **🏪 Panel PyMEs** — Diagnóstico sectorial (6 sectores), indicadores en tiempo real, políticas públicas con impacto, escenarios PyME dic 2026
- **📋 Panel Kanban** — 10 escenarios drag-and-drop entre 4 columnas (Emergentes/Activos/Dominantes/Colapsados), recalculo automático de matriz de pagos Nash
- **🔮 Panel Predictor** — Formulario de carga (variable, horizonte 1m-2y, valor actual, tendencia, factor externo, datos históricos JSON/CSV), gráfico de proyección, intervalos de confianza
- **Simulador Nash** — Elegir 2 jugadores + estrategia, ver payoff y si es equilibrio
- **🤖 Consulta IA** — Modal flotante con knowledge base (inflación, pobreza, Milei, Karina, provincias, PyMEs, FMI)

### Nuevos — Técnico
- **PWA** — manifest.json + service worker con cache offline
- **GitHub Actions** — Workflow `.github/workflows/pages.yml` para deploy automático
- **OG meta tags** — og:title, og:description, og:type, og:url, og:image, og:locale
- **Favicon SVG** — Logo "N" azul inline
- **Accesibilidad** — aria-label, role="tab", aria-selected en navegación

### Mejoras
- Navegación reorganizada: Dashboard → IA → PyMEs → Kanban → Predictor → Actores → Congreso → Provincias → Alianzas → Sombra → Escenarios → Fuentes
- Versión bump a v3.0 en header
- CSS expandido con estilos para Kanban, Predictor, Modal IA, PyMEs, Simulador
- app.js reestructurado (~57KB) con todas las funciones nuevas

### Corregidos
- Bug: `r.evangélical` → `r.evangelical` en renderReligion() (sección evangélicos no se mostraba)
- GitHub Pages: migrado de build legacy a GitHub Actions

---

## v2.0 — 25/04/2026

### Nuevos
- **Carpeta Documents/** creada con documentación maestra
- **DOCUMENTACION.md** — doc completa de arquitectura, módulos, fuentes
- **PLAN.md** — plan por etapas con criterios de éxito
- **FUENTES.md** — base de fuentes y metodología
- **Panel Internacional** expandido: +Venezuela/Cuba, México, India (15 bloques)
- **Sección "Los Tapados"** — actores que trabajan en la sombra expandidos
- **FAIE** — Federación Argentina de Iglesias Evangélicas
- **Papa Francisco** — actualizado como fallecido (abr 2025), homenaje 1 año
- **Villarruel** — actualizado con autorización sueldos senadores (abr 2026)

### Mejoras
- Feed de fuentes expandido con más analistas
- Temperatura del sistema con 10 indicadores
- Provincias con más detalle de alianzas
- Matriz de pagos Nash mejorada

---

## v1.0 — Estado inicial

- Dashboard base con 10 paneles
- 24 provincias mapeadas
- Escenarios Nash con matriz de pagos
- Feed de fuentes básico
- Diseño light profesional con Inter + JetBrains Mono
