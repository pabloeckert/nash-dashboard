# Tablero Nash — Argentina: Poder, Alianzas y Escenarios

Dashboard interactivo de análisis político argentino mediante teoría de juegos de Nash.

**Producción:** https://pabloeckert.github.io/nash-dashboard

## Características

### Dashboard principal
- 📊 Métricas en tiempo real (inflación, PIB, riesgo país, pobreza)
- 🎯 Mapa de actores internos con alianzas y funciones de utilidad
- 🏛️ Análisis del Congreso (Diputados + Senado)
- 🗺️ Mapa provincial con 24 provincias y sus alianzas
- 🤝 Mapa de alianzas (sólidas, débiles, rotas)
- 👥 Actores en la sombra (judiciales, empresarios, ecosistema digital)
- ⛪ Religión y poder blando
- 🌐 Política internacional (8 bloques principales)
- 🎲 Escenarios Nash con probabilidades y matriz de pagos
- 📰 Feed de fuentes y análisis

### v3.0 — Funcionalidades avanzadas
- 🧠 **Pensamiento IA** — Consenso de GPT-4, Claude, Gemini, Llama, DeepSeek
- 📱 **Redes sociales** — Tendencias en Twitter, Reddit, YouTube, Telegram
- 🎙️ **Analistas** — Nacionales e internacionales con quotes y postura
- 🏢 **Organismos** — Nacionales (BCRA, INDEC) e internacionales (FMI, OCDE)
- 🏪 **PyMEs** — Diagnóstico sectorial, indicadores, políticas, escenarios
- 📋 **Kanban** — 10 escenarios drag-and-drop con recalculo Nash en vivo
- 🔮 **Predictor** — Carga de datos, proyecciones multihorizonte (1m a 2y)
- 🎮 **Simulador Nash** — Elegir jugadores + estrategia, ver payoff
- 🤖 **Consulta IA** — Modal con knowledge base para preguntas puntuales

## Stack

- HTML5 + CSS3 + JavaScript vanilla
- Sin dependencias externas
- PWA (Service Worker + manifest.json)
- Diseño responsivo (mobile-first)
- Tipografía: Inter + JetBrains Mono (Google Fonts)
- Deploy: GitHub Actions → GitHub Pages

## Desarrollo

```bash
# Servidor local
npx serve .

# O simplemente abrir
open index.html
```

## Despliegue

GitHub Actions automático desde `main` → `https://pabloeckert.github.io/nash-dashboard`

## Documentación

- [Documentación maestra](Documents/DOCUMENTACION.md)
- [Registro de actualizaciones](Documents/ACTUALIZACIONES.md)
- [Plan por etapas](Documents/PLAN.md)
- [Base de fuentes](Documents/FUENTES.md)

## Licencia

MIT
