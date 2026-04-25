# 📋 Tablero Nash — Plan por Etapas

> Última actualización: 25/04/2026 — v3.0

---

## Estado Actual

El dashboard tiene **14 paneles** funcionales con:
- Análisis político-estratégico completo (10 paneles originales)
- Pensamiento de IA + redes sociales + analistas (nuevo v3.0)
- Situación PyME con diagnóstico sectorial (nuevo v3.0)
- Kanban de escenarios con drag-and-drop (nuevo v3.0)
- Predictor con carga de datos y simulador Nash (nuevo v3.0)
- PWA con modo offline
- Deploy automático via GitHub Actions

---

## Etapa 1: Documentación y Estructura ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Crear carpeta `Documents/`
- [x] Crear `DOCUMENTACION.md`, `PLAN.md`, `ACTUALIZACIONES.md`, `FUENTES.md`
- [x] Protocolo "documentar" definido

## Etapa 2: Contenido y Datos ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Actualizar datos a abril 2026
- [x] Internacional expandido a 15 bloques
- [x] Actores en la sombra expandidos
- [x] FAIE, Papa Francisco, Villarruel actualizados

## Etapa 3: v3.0 — Funcionalidades Avanzadas ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Panel Pensamiento IA (5 modelos, redes sociales, analistas, organismos)
- [x] Panel PyMEs (diagnóstico, indicadores, políticas, escenarios)
- [x] Panel Kanban (10 escenarios drag-drop, recalculo Nash)
- [x] Panel Predictor (carga datos, proyecciones, simulador Nash)
- [x] Consulta IA (modal con knowledge base)
- [x] PWA (manifest + service worker)
- [x] GitHub Actions deploy
- [x] OG meta tags, favicon, accesibilidad

## Etapa 4: Push y Despliegue ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Commit + push a main (82b9e31)
- [x] GitHub Actions deploy automático
- [x] GitHub Pages activo

## Etapa 5: Futuro — Q2-Q3 2026

### Datos en tiempo real
- [ ] Integración API BCRA (tipo de cambio, reservas)
- [ ] Integración API INDEC (inflación, pobreza)
- [ ] Scraping de medios para feed automático
- [ ] WebSockets para actualización en vivo

### Modelo Nash computacional
- [ ] Python/NumPy para cálculo de equilibrios
- [ ] Monte Carlo para simulaciones
- [ ] Machine Learning para predicción de escenarios

### UX y producto
- [ ] Modo oscuro
- [ ] Exportación PDF/Excel
- [ ] Notificaciones de cambio de escenario
- [ ] Panel de administración para edición de datos
- [ ] Autenticación para acceso premium
- [ ] App móvil nativa (PWA como puente)

### Contenido
- [ ] Expandir a 20+ bloques internacionales
- [ ] Panel de historia argentina (crisis comparadas)
- [ ] Timeline de eventos interactiva
- [ ] Mapa interactivo de provincias con SVG

---

## Criterios de Éxito

| Métrica | Meta | Estado |
|---------|------|--------|
| Paneles activos | 12+ | ✅ 14/14 |
| Provincias mapeadas | 24 | ✅ 24/24 |
| Bloques internacionales | 8+ | ✅ 8 |
| Escenarios Nash | 10+ | ✅ 10 |
| Fuentes documentadas | 20+ | ✅ 30+ |
| Documentación unificada | Sí | ✅ |
| PWA funcional | Sí | ✅ |
| Deploy automático | Sí | ✅ |
| Tiempo de carga | <2s | ✅ |

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos desactualizados | Alta | Alto | Protocolo "documentar" + cron |
| GitHub Pages caído | Baja | Alto | Backup en Netlify/Vercel |
| Dependencia de fuentes | Media | Medio | Diversificar fuentes |
| Complejidad de mantenimiento | Media | Medio | Documentación + automatización |
| PWA cache stale | Baja | Bajo | Versionado en sw.js |
