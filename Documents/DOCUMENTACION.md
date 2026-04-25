# 📚 Tablero Nash — Documentación Maestra

> **Instrucción:** Cuando se diga "documentar", actualizar este archivo con los trabajos realizados.
> Última actualización: 25/04/2026 — v3.0

---

## 1. Visión General

**Tablero Nash** es un dashboard interactivo de análisis político-estratégico de Argentina mediante teoría de juegos de Nash. Opera como artefacto vivo que se alimenta de fuentes internas y externas, cruza datos y genera escenarios probabilísticos.

- **Producción:** https://pabloeckert.github.io/nash-dashboard
- **Stack:** HTML5 + CSS3 + JavaScript vanilla (sin dependencias)
- **Repositorio:** github.com/pabloeckert/nash-dashboard
- **PWA:** Service Worker + manifest.json para modo offline

---

## 2. Arquitectura del Sistema

### 2.1 Estructura de Archivos

```
nash-dashboard/
├── index.html              ← Estructura principal (14 paneles)
├── app.js                  ← Datos + lógica interactiva (~57KB)
├── styles.css              ← Tema profesional light (~16KB)
├── manifest.json           ← PWA manifest
├── sw.js                   ← Service Worker (cache offline)
├── .nojekyll              ← Bypass Jekyll en GitHub Pages
├── .github/workflows/
│   └── pages.yml           ← GitHub Actions deploy
├── Documents/
│   ├── DOCUMENTACION.md    ← Este archivo (doc maestra)
│   ├── ACTUALIZACIONES.md  ← Changelog y tracking
│   ├── PLAN.md             ← Plan por etapas
│   └── FUENTES.md          ← Base de fuentes y metodología
└── README.md
```

### 2.2 Paneles del Dashboard

| # | Panel | Contenido | Estado |
|---|-------|-----------|--------|
| 1 | **Dashboard** | Métricas macro, temperatura del sistema, escenarios mini, análisis cruzado | ✅ v1.0 |
| 2 | **🧠 IA** | Pensamiento IA, redes sociales, analistas nacionales/internacionales, organismos | ✅ v3.0 |
| 3 | **🏪 PyMEs** | Diagnóstico sectorial, indicadores, políticas públicas, escenarios | ✅ v3.0 |
| 4 | **📋 Kanban** | Escenarios drag-drop con recalculo Nash en vivo | ✅ v3.0 |
| 5 | **🔮 Predictor** | Carga de datos, proyecciones multihorizonte, simulador Nash | ✅ v3.0 |
| 6 | **Actores** | Triángulo de hierro LLA, gabinete económico, figuras emergentes | ✅ v1.0 |
| 7 | **Congreso** | Diputados, Senado, Villarruel, agenda legislativa | ✅ v1.0 |
| 8 | **Provincias** | 24 provincias con gobernadores, alianzas, transferencias | ✅ v1.0 |
| 9 | **Alianzas** | Sólidas / débiles / rotas con análisis Nash | ✅ v1.0 |
| 10 | **Sombra** | Operadores judiciales, ecosistema digital, empresarios | ✅ v1.0 |
| 11 | **Escenarios** | 5 escenarios con probabilidades + matriz de pagos | ✅ v1.0 |
| 12 | **Fuentes** | Metodología, medios, analistas, feed generado | ✅ v1.0 |

### 2.3 Flujo de Datos

```
Fuentes externas ──┐
                   ├──→ Motor de análisis ──→ Datos JSON ──→ Renderizado UI
Fuentes internas ──┘                              │
Fuentes IA ──────────┘                            ├──→ Cruce y contraste
                                                  ├──→ Escenarios Nash
                                                  ├──→ Kanban (drag-drop)
                                                  └──→ Predictor (proyecciones)
```

---

## 3. Módulos Detallados

### 3.1 Dashboard Principal

**Métricas en tiempo real:**
- Inflación mensual (INDEC / BCRA REM)
- Proyección PIB (FMI WEO / Banco Mundial)
- Riesgo país (JP Morgan / Bloomberg)
- Pobreza (INDEC)

**Temperatura del sistema:** 10 barras de tensión que miden conflictividad:
1. Interna Karina vs Caputo (88%)
2. Nación vs Provincia de Buenos Aires (85%)
3. Inflación vs meta presupuesto (80%)
4. Conflicto social / ajuste (58%)
5. Gobernadores aliados: deserción (52%)
6. PRO como actor autónomo (46%)
7. Iglesias evangélicas (presión) (35%)
8. Medio Oriente → commodities (65%)
9. Relación FMI / mercados (25%)
10. EEUU — acuerdo Vaca Muerta (20%)

### 3.2 🧠 Pensamiento IA (NUEVO v3.0)

**Consensos de modelos de IA:**
- GPT-4o: análisis geopolítico (78% confianza)
- Claude 3.5: modelo económico (82% confianza)
- Gemini Pro: análisis político (71% confianza)
- Llama 3.1: análisis social (65% confianza)
- DeepSeek V2: modelado de crisis (74% confianza)

**Tendencias en redes sociales:**
- Twitter/X: hashtags, volumen, cambio porcentual
- Reddit: discusiones r/argentina, r/merval
- YouTube: trending topics, views
- Telegram: canales libertarios, actividad

**Analistas nacionales:**
- Carlos Pagni (La Nación) — Neutral
- Eduardo van der Kooy (Clarín) — Optimista
- Jorge Lanata (LN+) — Pesimista
- Sergio Berensztein (Poliarquía) — Neutral
- Rosendo Fraga (Nuevo Mundo) — Optimista
- Alejandro Catterberg (Poliarquía) — Pesimista

**Analistas internacionales:**
- The Economist Intelligence Unit — Neutral
- Bloomberg Economics — Optimista
- Financial Times — Neutral
- Moody's Analytics — Optimista
- Reuters Emerging Markets — Neutral

**Organismos nacionales:**
- BCRA, INDEC, IERAL, CGT, Poliarquía

**Organismos internacionales/privados:**
- FMI, OCDE, Banco Mundial, BID, BlackRock/Fidelity, Techint/Arcor

### 3.3 🏪 PyMEs (NUEVO v3.0)

**Métricas clave:**
- 62% PyMEs con caída de ventas
- 41% redujo personal
- 28% accedió a crédito
- 17% exporta

**Diagnóstico sectorial (6 sectores):**
- Manufactura (38% salud)
- Comercio minorista (42%)
- Servicios profesionales (68%)
- Agroindustria (82%)
- Construcción (30%)
- Tecnología (88%)

**Indicadores en tiempo real:**
- Ventas PyME (índice), acceso a crédito, cierre de empresas
- Exportaciones, empleo, confianza empresarial

**Políticas públicas:**
- Ley PyME (crédito subsidiado) — Parcial
- Exporta Simple — Positivo
- Ley de Economía del Conocimiento — Positivo
- Ajuste fiscal / reducción obra pública — Negativo
- Régimen MiPyME — Neutral

**Escenarios PyME dic 2026:**
- Recuperación gradual (30%)
- Estancamiento (45%)
- Deterioro (25%)

### 3.4 📋 Kanban Escenarios (NUEVO v3.0)

**4 columnas:**
- Emergentes (azul)
- Activos (ámbar)
- Dominantes (verde)
- Colapsados (rojo)

**10 escenarios arrastrables:**
1. Consolidación libertaria (35%) — Dominante
2. Parálisis por interna (30%) — Activo
3. Shock externo + crisis (20%) — Activo
4. Provincias Unidas 3er polo (10%) — Emergente
5. Ruptura sistémica (5%) — Emergente
6. Boom Vaca Muerta (15%) — Emergente
7. Victoria legislativa total (8%) — Emergente
8. Deserción gobernadores (22%) — Activo
9. Inflación controlada <20% (18%) — Emergente
10. Crisis social / estallido (7%) — Emergente

**Interactividad:**
- Drag-and-drop entre columnas
- Recalculo automático de matriz de pagos Nash
- Contadores por columna

### 3.5 🔮 Predictor (NUEVO v3.0)

**Formulario de carga:**
- Variable: inflación, riesgo país, pobreza, PIB, tipo de cambio, desempleo, ventas PyME, aprobación
- Horizonte: 1m, 3m, 6m, 1y, 2y
- Valor actual (numérico)
- Tendencia: subiendo, estable, bajando
- Factor externo: neutro, positivo, negativo
- Datos históricos: JSON `[3.2, 3.5, 3.1]` o CSV `fecha,valor`

**Output:**
- Gráfico de barras con proyección visual
- Valor actual vs proyectado
- Rango min-max
- Intervalo de confianza (degrada con horizonte)

**Simulador Nash:**
- Elegir 2 jugadores (Milei, Gobernadores, Oposición, FMI, Mercados)
- Elegir estrategia (Cooperar, Desertar, Presionar, Esperar)
- Matriz de payoff calculada
- Indicador de equilibrio Nash

### 3.6 🤖 Consulta IA (NUEVO v3.0)

**Modal flotante** accesible desde botón en header.

**Knowledge base con keywords:**
- inflación, pobreza, milei, karina, provincias, pymes, fmi
- Default: resumen del modelo Nash

**Respuestas incluyen fuentes citadas.**

### 3.7 Actores Internos

**Triángulo de hierro — LLA:**
- Javier Milei: Presidente, árbitro supremo
- Karina Milei: Secretaria General, "El Jefe" (4/9 ministerios)
- Santiago Caputo: Asesor, bajo presión máxima

**Gabinete económico:**
- Luis Caputo (Economía)
- Federico Sturzenegger (Desregulación)
- Pablo Quirno (Canciller)

### 3.8 Congreso

**Diputados:** LLA ~130+, UxP ~99, PRO ~38, PU ~28, UCR ~22
**Senado:** UxP ~33, LLA ~22, PRO ~8, Peronismo aliado ~12
**Villarruel:** Presidenta Senado, perfil propio, potencial 2027

### 3.9 Provincias (24)

**Aliadas (10):** CABA, Tucumán, Salta, Misiones, Entre Ríos, Neuquén, Chaco, San Juan, San Luis, Catamarca
**Neutrales (9):** Córdoba, Santa Fe, Mendoza, Chubut, Río Negro, Jujuy, Corrientes, Santa Cruz, Santiago del Estero
**Hostiles (5):** Buenos Aires, Formosa, La Rioja, La Pampa, Tierra del Fuego

### 3.10 Internacional (8 bloques principales)

EEUU, Israel, Brasil, China, UE/Mercosur, FMI, Medio Oriente, Venezuela

---

## 4. Stack Técnico

- **HTML5** — Semántico, accesible (aria-labels, roles)
- **CSS3** — Variables, grid, responsive (1024/768/480), animaciones
- **JavaScript vanilla** — Sin frameworks, renderizado dinámico
- **PWA** — manifest.json + service worker con cache
- **GitHub Actions** — Deploy automático desde main
- **Google Fonts** — Inter + JetBrains Mono

---

## 5. Metodología de Fuentes

Ver `Documents/FUENTES.md` para detalle completo.

**Cadena:** Eventos → Fuentes primarias → Medios → Think tanks → Análisis cruzado → Dashboard

---

## 6. Protocolo "documentar"

1. Abrir este archivo
2. Agregar sección de trabajos realizados con fecha
3. Actualizar versión y changelog en `ACTUALIZACIONES.md`
4. Actualizar PLAN.md con nuevo estado
5. Commit + push

---

## 8. Troubleshooting — GitHub Pages

### Problema: 404 persistente después de deploy

**Causa:** GitHub Pages procesa con Jekyll por defecto. Jekyll puede ignorar archivos con `_` prefijo, procesar Markdown, o fallar con sitios estáticos vanilla.

**Fix:** Agregar archivo `.nojekyll` en la raíz del repo. Esto le dice a Pages que sirva los archivos tal cual.

**Causa adicional:** CDN cache de GitHub Pages. El browser puede tener cacheada una respuesta 404 de un edge diferente.

**Fix:** Hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) o ventana incógnito. Esperar 5-10 minutos para propagación completa del CDN.

### Verificación del deploy

```bash
# Verificar que el servidor devuelve el contenido correcto
curl -sI "https://pabloeckert.github.io/nash-dashboard/" | head -5
# Debe retornar HTTP/2 200

# Verificar contenido
curl -s "https://pabloeckert.github.io/nash-dashboard/" | grep "v3.0"
# Debe encontrar "v3.0"
```

### Workflow de deploy

El deploy se hace via GitHub Actions (`.github/workflows/pages.yml`):
- Trigger: push a `main`
- Sube el contenido como artifact
- Deploy al environment `github-pages`
- El build_type debe ser `workflow` (no `legacy`)

---

## 7. Registro de Actualizaciones

### v3.0.1 — 25/04/2026
- [x] Agregado `.nojekyll` para bypass de Jekyll en GitHub Pages
- [x] Documentado problema de cache CDN

### v3.0 — 25/04/2026 (Actualización mayor)
- [x] Panel **🧠 Pensamiento IA** — consenso de 5 modelos de IA
- [x] Panel **Redes sociales** — Twitter, Reddit, YouTube, Telegram
- [x] Panel **Analistas nacionales** — 6 analistas con quotes y stance
- [x] Panel **Analistas internacionales** — 5 analistas
- [x] Panel **Organismos nacionales** — BCRA, INDEC, IERAL, CGT, Poliarquía
- [x] Panel **Organismos internacionales/privados** — FMI, OCDE, BM, BID, BlackRock, Techint
- [x] Panel **🏪 PyMEs** — diagnóstico sectorial, indicadores, políticas, escenarios
- [x] Panel **📋 Kanban** — 10 escenarios drag-drop con recalculo Nash
- [x] Panel **🔮 Predictor** — carga de datos, proyecciones multihorizonte
- [x] **Simulador Nash** — elegir jugadores + estrategia, ver payoff
- [x] **🤖 Consulta IA** — modal con knowledge base
- [x] PWA: manifest.json + service worker
- [x] GitHub Actions workflow para deploy
- [x] OG meta tags + favicon SVG
- [x] Accesibilidad: aria-labels, roles ARIA
- [x] Bug fix: renderReligion() (evangélical → evangelical)
- [x] Navegación reorganizada (14 items)
- [x] Documentación actualizada a v3.0

### v2.0 — 25/04/2026
- Documents/ creado, Internacional expandido a 15 bloques
- Actores en la sombra, FAIE, Papa Francisco

### v1.0 — Estado inicial
- Dashboard base con 10 paneles, 24 provincias, escenarios Nash
