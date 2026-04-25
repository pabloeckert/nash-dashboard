# 📋 Release Notes — Tablero Nash v1.0.0

> Primera versión del dashboard político con teoría de juegos.

---

## 🎉 Tablero Nash v1.0.0 — Lanzamiento inicial

**Fecha:** 2026-04-25
**Commit:** `master`
**URL:** https://pabloeckert.github.io/nash-dashboard

---

### ✨ Features

#### Dashboard principal
- 4 métricas económicas: Inflación, PIB, Riesgo País, Pobreza
- Valores con variación y tendencia
- Fuentes citadas con fecha de actualización

#### Mapa de Actores
- 8 actores políticos internos
- Red visual con alianzas (sólidas) y enemigos (rotas)
- Función de utilidad por actor (0-1)
- Filtros por facción

#### Análisis del Congreso
- Diputados (257 bancas) por bloque
- Senadores (72 bancas) por bloque
- Barras proporcionales con leyenda

#### Mapa Provincial
- 24 provincias con gobernador y partido
- Clasificación: Oficialismo / Oposición / Independiente
- Tarjetas con color coding

#### Mapa de Alianzas
- 10 alianzas documentadas
- Tipos: Sólida / Débil / Rota
- Descripción de cada relación

#### Escenarios Nash
- 6 escenarios modelados
- Matrices de pagos por jugador
- Indicador de equilibrio Nash
- Probabilidades estimadas

#### Actores en la Sombra
- 8 actores no-formales (judicial, medios, sindicatos, etc.)
- Nivel de influencia
- Descripción de rol

#### Política Internacional
- 12 bloques/bilaterales
- Indicador de relación (0-100)
- Descripción de vínculo

---

### 🏗️ Arquitectura

- **Stack:** HTML5 + CSS3 + JavaScript vanilla
- **Dependencias externas:** Google Fonts (Inter + JetBrains Mono)
- **Datos:** Embebidos en `js/data.js`
- **Estilos:** `css/styles.css` con design system
- **Lógica:** `js/app.js` con clase `NashDashboard`
- **Hosting:** GitHub Pages (deploy automático)

---

### 🎨 Design

- Dark theme optimizado para datos densos
- Mobile-first responsive (320px → 1536px)
- Paleta semántica: azul (neutro), verde (positivo), rojo (negativo), amarillo (alerta)
- Tipografía: Inter (UI) + JetBrains Mono (datos)
- Espaciado base: 4px grid
- Animaciones sutiles (hover, fade-in)

---

### 🔒 Seguridad

- CSP headers básicos
- HTTPS forzado (GitHub Pages)
- Sin dependencias npm (reduce supply chain risk)
- Datos embebidos (sin API calls de terceros)

---

### 📱 Responsive

- **Mobile (< 768px):** Navegación por íconos, 2 columnas métricas, módulos apilados
- **Tablet (768px-1024px):** Tabs completos, 2 columnas módulos
- **Desktop (> 1024px):** Layout completo, 4 métricas, 2 columnas principales

---

### 🙏 Agradecimientos

- Desarrollado por Pablo Eckert
- Análisis basado en fuentes públicas (INDEC, BCRA, Congreso)
- Inspirado en teoría de juegos de John Nash

---

### 📝 Notas conocidas

- Datos de ejemplo (no en tiempo real)
- Sin export de datos (planificado para v1.1)
- Sin modo oscuro/claro toggle (solo dark theme)

---

> **Siguiente versión (v1.1):** Export de datos, actualización automática de métricas, más actores.
