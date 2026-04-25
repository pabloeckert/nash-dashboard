# ⚠️ Risk Register — Tablero Nash

> Registro de riesgos del proyecto. Actualizar en cada sprint.

---

## Matriz de impacto/probabilidad

```
              Impacto
              Bajo    Medio    Alto    Crítico
Probabilidad
Alta          M       A        A       C
Media         B       M        A       A
Baja          B       B        M       A
Muy baja      B       B        B       M
```

**B = Bajo** | **M = Medio** | **A = Alto** | **C = Crítico**

---

## Riesgos activos

| # | Riesgo | Categoría | Probabilidad | Impacto | Nivel | Mitigación | Responsable | Estado |
|---|--------|-----------|-------------|---------|-------|------------|-------------|--------|
| R01 | Datos políticos desactualizados o incorrectos | Datos | Media | Alto | 🟠 A | Múltiples fuentes, timestamps, proceso de validación | Content Manager | Abierto |
| R02 | Dependencia de Google Fonts CDN | Técnico | Baja | Bajo | 🟢 B | SRI hashes, fallback fonts | Frontend Dev | Abierto |
| R03 | Sesgo político en el análisis | Contenido | Media | Alto | 🟠 A | Peer review, disclaimer, fuentes citadas | Product Owner | Abierto |
| R04 | GitHub Pages downtime | Infra | Baja | Medio | 🟢 B | Backup en Netlify/Vercel como fallback | DevOps | Abierto |
| R05 | Complejidad de modelar Nash con JS vanilla | Técnico | Media | Medio | 🟡 M | POC temprano, testing de escenarios | Software Architect | Abierto |
| R06 | Un solo desarrollador (Pablo) | Equipo | Media | Alto | 🟠 A | Documentación clara, modularización, onboarding | Scrum Master | Abierto |
| R07 | Regulación electoral / veda | Legal | Baja | Medio | 🟢 B | Calendarizar veda, sistema de "pausa" de publicaciones | Legal | Abierto |
| R08 | Mantenimiento de datos a largo plazo | Operaciones | Alta | Medio | 🟠 A | Automatizar actualización, data pipeline | Data Engineer | Abierto |
| R09 | XSS si se renderizan datos dinámicos | Seguridad | Baja | Alto | 🟡 M | Sanitización, CSP, sin innerHTML con datos | Cybersecurity | Abierto |
| R10 | Competencia con dashboards existentes | Negocio | Media | Bajo | 🟢 B | Diferenciación: teoría de juegos Nash | Product Manager | Abierto |

---

## Riesgos cerrados

| # | Riesgo | Categoría | Nivel | Resolución | Fecha cierre |
|---|--------|-----------|-------|------------|--------------|
| — | — | — | — | — | — |

---

## Triggers de escalamiento

- Cualquier riesgo **Crítico** → Escalar a Product Manager inmediatamente
- Cualquier riesgo **Alto** sin mitigación activa → Revisar en próxima daily
- Más de 3 riesgos **Alto** abiertos simultáneamente → Sprint de estabilización

---

## Revisión

| Fecha | Revisado por | Cambios |
|-------|-------------|---------|
| 2026-04-25 | AI Assistant + Delivery Manager | Creación inicial — 10 riesgos identificados |

---

> **Última actualización:** 2026-04-25
> **Responsable:** Delivery Manager
