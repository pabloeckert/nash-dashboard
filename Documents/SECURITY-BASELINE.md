# 🔒 Security Baseline — Tablero Nash

## Clasificación de riesgo: BAJO

Proyecto estático (HTML/CSS/JS vanilla) sin backend, sin base de datos, sin autenticación. GitHub Pages como hosting.

---

## Superficie de ataque

| Componente | Riesgo | Mitigación |
|------------|--------|------------|
| GitHub Pages (hosting) | Bajo | HTTPS forzado por defecto |
| Código estático | Bajo | Sin ejecución server-side |
| Datos embebidos | Bajo | Sin datos sensibles, todo público |
| Dependencias externas | Mínimo | Google Fonts (CDN) — riesgo de supply chain |
| Formularios/inputs | N/A | No hay (sin backend) |

---

## Controles de seguridad

### ✅ Implementados
- [x] Repositorio privado/seguro en GitHub
- [x] HTTPS por defecto en GitHub Pages
- [x] Sin dependencias npm/pip (reduce attack surface)
- [x] MIT License (auditable)

### 🟡 Pendientes
- [ ] Content Security Policy (CSP) headers
- [ ] Subresource Integrity (SRI) para Google Fonts
- [ ] GitHub branch protection rules
- [ ] Dependabot alerts habilitado
- [ ] Secret scanning habilitado

### ⚪ Futuros
- [ ] Security headers en GitHub Pages (via `_headers` o Actions)
- [ ] Rate limiting (no aplicable sin backend)
- [ ] WAF (no aplicable sin backend)

---

## Datos manejados

| Tipo | Clasificación | Fuente | Almacenamiento |
|------|---------------|--------|----------------|
| Métricas económicas | Público | APIs públicas | Embebido en JS |
| Actores políticos | Público | Fuentes públicas | Embebido en JS |
| Alianzas políticas | Público | Análisis propio | Embebido en JS |
| Datos de usuarios | N/A | — | No se recopilan |

---

## Amenazas identificadas

| # | Amenaza | Probabilidad | Impacto | Mitigación |
|---|---------|-------------|---------|------------|
| T1 | Inyección de código vía datos | Baja | Alto | Sanitización de datos, CSP |
| T2 | Supply chain (Google Fonts CDN) | Baja | Bajo | SRI hashes |
| T3 | Defacement del repo | Baja | Alto | Branch protection, 2FA |
| T4 | DDoS a GitHub Pages | Baja | N/A | GitHub lo mitiga |
| T5 | Datos manipulados/erróneos | Media | Medio | Validación de fuentes, fechas |

---

## Recomendaciones inmediatas (Fase 0)

1. Habilitar **branch protection** en `master`
2. Habilitar **Dependabot** alerts
3. Agregar **SRI** a Google Fonts links
4. Configurar **CSP** básico en `<meta>` tag
5. Documentar fuentes de datos oficiales

---

> **Última actualización:** 2026-04-25
> **Responsable:** Cybersecurity Architect
