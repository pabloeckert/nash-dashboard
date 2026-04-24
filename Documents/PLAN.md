# 📋 Tablero Nash — Plan por Etapas

> Última actualización: 25/04/2026

---

## Estado Actual

El dashboard tiene una base sólida con 10 paneles funcionales, pero presentaba:
- Contenido desactualizado (datos de marzo 2026 sin reflejar abril)
- Falta de documentación unificada
- Internacional limitado (12 bloques)
- Falta de detalle en actores en la sombra
- Sin módulo de "tapados"
- Sin integración Papa Francisco / sucesión papal
- Sin FAIE y referentes evangélicos detallados

---

## Etapa 1: Documentación y Estructura ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Crear carpeta `Documents/`
- [x] Crear `DOCUMENTACION.md` (doc maestra)
- [x] Crear `PLAN.md` (este archivo)
- [x] Crear `ACTUALIZACIONES.md` (changelog)
- [x] Crear `FUENTES.md` (metodología)
- [x] Protocolo "documentar" definido

## Etapa 2: Contenido y Datos ✅ COMPLETADA
**Fecha:** 25/04/2026

- [x] Actualizar datos a abril 2026
- [x] Agregar Papa Francisco fallecido (abr 2025)
- [x] Agregar FAIE y referentes evangélicos (Christian Hooft, etc.)
- [x] Expandir Internacional a 15 bloques (Venezuela, México, India)
- [x] Expandir "En la sombra" con más actores
- [x] Agregar sección "Los Tapados" expandida
- [x] Actualizar Villarruel (sueldos senadores abr 2026)
- [x] Agregar Escenarios Internacionales detallados

## Etapa 3: Artefacto Dinámico 🔄 EN PROGRESO
**Fecha:** 25/04/2026

- [x] Motor de actualización con simulación de datos en vivo
- [x] Sistema de carga con mensajes rotativos
- [x] Feed de fuentes aleatorizado
- [ ] Integración con APIs externas (FMI, BCRA) — futuro
- [ ] Web scraping automatizado — futuro
- [ ] Alertas de cambio de escenario — futuro

## Etapa 4: Push y Despliegue 🔄 EN PROGRESO
**Fecha:** 25/04/2026

- [x] Commit todos los cambios
- [x] Push a main
- [ ] Verificar GitHub Pages actualizado
- [ ] Monitorear rendimiento post-deploy

## Etapa 5: Futuro — Funcionalidades Avanzadas
**Timeline:** Q2-Q3 2026

- [ ] Dashboard en tiempo real con WebSockets
- [ ] Integración API BCRA (tipo de cambio, reservas)
- [ ] Integración API INDEC (inflación, pobreza)
- [ ] Scraping de medios para feed automático
- [ ] Modelo Nash computacional con Python/NumPy
- [ ] Notificaciones de cambio de escenario
- [ ] Exportación PDF/Excel de reportes
- [ ] Modo oscuro
- [ ] App móvil (PWA primero, luego nativa)
- [ ] Autenticación para acceso premium
- [ ] Panel de administración para edición de datos
- [ ] Machine Learning para predicción de escenarios

---

## Criterios de Éxito

| Métrica | Meta | Estado |
|---------|------|--------|
| Paneles activos | 10 | ✅ 10/10 |
| Provincias mapeadas | 24 | ✅ 24/24 |
| Bloques internacionales | 15+ | ✅ 15 |
| Escenarios Nash | 5+ | ✅ 5 |
| Fuentes documentadas | 20+ | ✅ 25+ |
| Documentación unificada | Sí | ✅ |
| Push a producción | Sí | 🔄 |
| Tiempo de carga | <2s | ✅ |

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos desactualizados | Alta | Alto | Protocolo "documentar" + cron |
| GitHub Pages caído | Baja | Alto | Backup en Netlify/Vercel |
| Dependencia de fuentes | Media | Medio | Diversificar fuentes |
| Complejidad de mantenimiento | Media | Medio | Documentación + automatización |
