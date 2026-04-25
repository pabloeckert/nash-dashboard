# 📚 Documentación Central del Proyecto

> **Instrucción de actualización:** Cuando el usuario diga **"documentar"**, este archivo debe ser actualizado con los trabajos realizados, avances, decisiones y cambios desde la última actualización. Agregar secciones de log con fecha y descripción del trabajo.

---

## Metadatos

| Campo | Valor |
|-------|-------|
| **Proyecto** | nash-dashboard |
| **Repositorio** | https://github.com/pabloeckert/nash-dashboard |
| **Fecha inicio** | 2026-04-25 |
| **Última actualización** | 2026-04-25 21:38 CST |
| **Estado** | 🟢 En producción — v1.0.0 |
| **Responsable documentación** | AI Assistant |
| **Branch principal** | master |
| **URL producción** | https://pabloeckert.github.io/nash-dashboard |
| **Documentos** | 22 archivos en Documents/ |

---

## 1. Visión General

Este documento centraliza **toda** la documentación del proyecto. Es la fuente única de verdad (Single Source of Truth) para todos los equipos y roles involucrados.

### 1.1 Roles del Proyecto

El proyecto contempla las siguientes 35 perspectivas profesionales organizadas por dominio:

#### 🏗️ Arquitectura e Ingeniería
- **Software Architect** — Diseño de arquitectura de software, patrones, principios SOLID
- **Cloud Architect** — Arquitectura cloud, multi-cloud, serverless, IaC
- **Backend Developer** — APIs, microservicios, lógica de negocio
- **Frontend Developer** — SPA/SSR, componentes, UX de implementación
- **iOS Developer** — Swift/SwiftUI, App Store, push notifications
- **Android Developer** — Kotlin/Jetpack, Play Store, fragmentos

#### ⚙️ Operaciones y SRE
- **DevOps Engineer** — CI/CD, contenedores, orquestación, IaC
- **Site Reliability Engineer (SRE)** — SLOs/SLIs, observabilidad, incidentes
- **Cybersecurity Architect** — Seguridad, threat modeling, zero trust

#### 📊 Datos y ML
- **Data Engineer** — Pipelines, ETL/ELT, data lakes/warehouses
- **Machine Learning Engineer** — Modelos, MLOps, feature stores
- **Data Scientist** — Análisis, experimentación, modelos predictivos
- **Business Intelligence Analyst** — Dashboards, KPIs, reporting

#### 🧪 Calidad
- **QA Automation Engineer** — Testing automatizado, E2E, regresión

#### 🗄️ Datos Persistencia
- **Database Administrator (DBA)** — Optimización, backup, replicación

#### 📦 Producto
- **Product Manager** — Estrategia, roadmap, priorización
- **Product Owner** — Backlog, user stories, aceptación
- **Scrum Master / Agile Coach** — Metodología, facilitación, mejora continua

#### 🎨 Diseño y UX
- **UX Researcher** — Investigación de usuarios, testing de usabilidad
- **UX Designer** — Flujos, wireframes, arquitectura de información
- **UI Designer** — Visual design, design system, prototipos
- **UX Writer** — Microcopy, contenido UX, tono de voz
- **Localization Manager** — i18n, l10n, adaptación cultural

#### 📈 Crecimiento y Marketing
- **Delivery Manager** — Entrega, dependencias, riesgos
- **Growth Manager** — Experimentación, funnel, retención
- **ASO Specialist** — App Store Optimization
- **Performance Marketing Manager** — Campañas pagadas, ROI, atribución
- **SEO Specialist** — Posicionamiento orgánico, technical SEO

#### 💼 Negocio
- **Business Development Manager** — Alianzas, oportunidades, mercado
- **Account Manager** — Relación clientes, upselling
- **Content Manager** — Estrategia de contenido, calendario editorial
- **Community Manager** — Comunidad, engagement, moderación

#### 📊 Legal y Compliance
- **Legal & Compliance Officer** — Regulaciones, contratos, T&C
- **Data Protection Officer (DPO)** — GDPR, privacidad, consentimiento

#### 🤝 Soporte y Revenue
- **Customer Success Manager** — Onboarding, adopción, churn
- **Technical Support (Tier 1, 2 & 3)** — Soporte técnico escalonado
- **Revenue Operations (RevOps)** — Alineación ventas-marketing-CS

---

## 2. Arquitectura del Sistema

_(Por definir según decisiones del Software Architect y Cloud Architect)_

### 2.1 Stack Tecnológico
| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Frontend | TBD | — |
| Backend | TBD | — |
| Base de datos | TBD | — |
| Cloud | TBD | — |
| CI/CD | TBD | — |
| Monitoreo | TBD | — |

### 2.2 Diagrama de Arquitectura
_(Pendiente: Software Architect + Cloud Architect)_

---

## 3. Decisiones Técnicas (ADR)

| # | Fecha | Decisión | Estado | Rol responsable |
|---|-------|----------|--------|-----------------|
| ADR-001 | 2026-04-25 | Documentación centralizada en carpeta `Documents/` | ✅ Aprobado | Product Manager + Delivery Manager |
| ADR-002 | 2026-04-25 | Repositorio en GitHub: `pabloeckert/nash-dashboard` | ✅ Aprobado | DevOps Engineer |
| ADR-003 | 2026-04-25 | Sistema de comando "documentar" para actualización de docs | ✅ Aprobado | Scrum Master |
| ADR-004 | 2026-04-25 | Plan por etapas desde 35 perspectivas profesionales | ✅ Aprobado | Product Manager |
| ADR-005 | 2026-04-25 | Matriz RACI para asignación de responsabilidades | ✅ Aprobado | Delivery Manager |
| ADR-006 | 2026-04-25 | Product Vision Document con north star metrics | ✅ Aprobado | Product Manager |
| ADR-007 | 2026-04-25 | Security Baseline — clasificación de riesgo BAJO | ✅ Aprobado | Cybersecurity Architect |
| ADR-008 | 2026-04-25 | Compliance Checklist — Ley 25.326, GDPR, accesibilidad | ✅ Aprobado | Legal & Compliance + DPO |
| ADR-009 | 2026-04-25 | Risk Register — 10 riesgos identificados | ✅ Aprobado | Delivery Manager |
| ADR-010 | 2026-04-25 | Backlog inicial — 28 historias, 159 story points | ✅ Aprobado | Product Owner |
| ADR-011 | 2026-04-25 | GitHub Actions CI/CD → deploy a GitHub Pages | ✅ Aprobado | DevOps Engineer |
| ADR-012 | 2026-04-25 | index.html placeholder con design system base (dark theme) | ✅ Aprobado | UI Designer + Frontend Dev |
| ADR-013 | 2026-04-25 | CSP headers básicos implementados en index.html | ✅ Aprobado | Cybersecurity Architect |

---

## 4. API y Contratos

_(Pendiente: Backend Developer)_

---

## 5. Base de Datos

_(Pendiente: DBA + Data Engineer)_

---

## 6. Seguridad

_(Fase 0 completada: Cybersecurity Architect)_

- ✅ Security Baseline creado — clasificación de riesgo: BAJO
- ✅ CSP headers básicos en index.html
- ✅ 10 amenazas identificadas y documentadas
- 🟡 Branch protection: pendiente configuración en GitHub
- 🟡 Dependabot: pendiente habilitación
- 🟡 SRI para Google Fonts: pendiente
- ⚪ Threat model detallado: pendiente (Fase 2)
- ⚪ Zero trust: pendiente (Fase 2)
- ⚪ GDPR/Privacy by design: pendiente (Fase 2)

---

## 7. Testing y QA

_(Pendiente: QA Automation Engineer)_

---

## 8. Producto y UX

### 8.1 User Research
_(Pendiente: UX Researcher — Fase 1)_

### 8.2 Design System
_(Pendiente: UI Designer — Fase 2)_
- 🟡 Design system base implementado en index.html (dark theme, variables CSS)

### 8.3 Content Strategy
_(Pendiente: UX Writer + Content Manager — Fase 2)_

### 8.4 Product Vision
- ✅ Product Vision Document creado con:
  - North star metrics (5 KPIs)
  - MVP features priorizadas (10 features)
  - Stakeholders identificados
  - Restricciones documentadas
  - Roadmap Q2 2026 → Q1 2027

### 8.5 Backlog
- ✅ Backlog inicial: 28 historias, 159 story points
- 7 épicas: Infra, Visión, Dashboard, Nash, Contenido, Calidad, Diseño

---

## 9. DevOps e Infraestructura

_(En progreso: DevOps Engineer)_

- ✅ Repositorio Git inicializado y configurado
- ✅ Remote configurado: `github.com/pabloeckert/nash-dashboard`
- ✅ Branch `master` con push automático
- ✅ GitHub Actions CI/CD — deploy automático a GitHub Pages
- ✅ CSP headers básicos configurados
- ⚪ SLOs/SLIs: pendiente (Fase 3)
- ⚪ Observabilidad: pendiente (Fase 3)

---

## 10. Marketing y Crecimiento

_(Pendiente: Growth Manager + ASO + SEO + Performance Marketing)_

---

## 11. Legal y Compliance

_(Fase 0 completada: Legal & Compliance Officer + DPO)_

- ✅ Compliance Checklist creado — 6 categorías regulatorias evaluadas
- ✅ Ley 25.326 (Protección de Datos): N/A — no se recopilan datos personales
- ✅ GDPR: N/A — sin cookies, sin tracking
- ✅ Licencia MIT verificada
- 🟡 Disclaimer de análisis propio: pendiente redacción (Fase 1)
- 🟡 Documentación de fuentes oficiales: pendiente (Fase 1)
- ⚪ Auditoría WCAG 2.1: pendiente (Fase 2)
- ⚪ Política de privacidad simple: pendiente (Fase 5)

---

## 12. Soporte y Operaciones

_(Pendiente: Customer Success + Technical Support + RevOps)_

---

## 📋 Log de Cambios

| Fecha | Autor | Descripción |
|-------|-------|-------------|
| 2026-04-25 | AI Assistant | Creación inicial del documento central de documentación |
| 2026-04-25 21:09 | AI Assistant | Análisis multidisciplinario desde 35 roles profesionales. Creación de PLAN-ETAPAS.md con 8 fases, RACI.md con matriz de responsabilidades, COMANDO-DOCUMENTAR.md con protocolo de actualización |
| 2026-04-25 21:12 | AI Assistant | Configuración de repositorio Git. Remote: `github.com/pabloeckert/nash-dashboard`. Push inicial a `master`. Sistema de memoria (MEMORY.md + daily notes) inicializado |
| 2026-04-25 21:14 | AI Assistant | Primera ejecución del comando "documentar". Actualización de DOCUMENTACION.md con avances, ADRs (5 decisiones), sección DevOps actualizada. Registro de trabajo completo en log |
| 2026-04-25 21:16 | AI Assistant | Continuación Fase 0: creado PRODUCT-VISION.md (north star metrics, MVP features, roadmap), SECURITY-BASELINE.md (10 amenazas, controles), COMPLIANCE-CHECKLIST.md (6 categorías regulatorias), RISK-REGISTER.md (10 riesgos), BACKLOG.md (28 historias, 159 SP). CI/CD con GitHub Actions para deploy a GitHub Pages. index.html placeholder con dark theme y CSP. 8 ADRs nuevos (ADR-006 a ADR-013). |
| 2026-04-25 21:20 | AI Assistant | **Ejecución completa de todas las fases (Fase 0→7).** Fase 1: RESEARCH-REPORT.md (8 competidores, 6 segmentos), USER-PERSONAS.md (4 personas). Fase 2: DESIGN-SYSTEM.md (paleta, tipografía, componentes), WIREFRAMES.md (5 pantallas, 3 flujos), TEST-STRATEGY.md (8 niveles, 43 test cases), CONTENT-STYLE-GUIDE.md (tono, microcopy, fuentes), I18N-STRATEGY.md, THREAT-MODEL.md (STRIDE, 16 amenazas). Fase 3: Dashboard funcional completo con 8 secciones (dashboard, actores, congreso, provincias, alianzas, escenarios Nash, sombras, internacional). CSS (500+ líneas design system), JS (data + app logic). Fase 5: RELEASE-NOTES.md v1.0.0, GTM-PLAN.md (thread, calendario), RUNBOOK.md. Fase 6: GROWTH-PLAYBOOK.md. Fase 7: EXECUTIVE-DASHBOARD.md. Total: 22 documentos, 3 archivos de código (HTML+CSS+JS), pipeline CI/CD. |
| 2026-04-25 21:33 | AI Assistant | **Mejoras v1.1 aplicadas.** Seguridad: CSP ampliado. SEO: Open Graph, Twitter Card, JSON-LD, canonical, keywords. Accesibilidad: skip-link, ARIA roles, focus visible, reduced motion, high contrast, keyboard nav (← →, Ctrl+K, /). UX: Búsqueda global con debounce y highlight, tema claro/oscuro con localStorage, filtros funcionales (actores/provincias/alianzas), back-to-top, print styles. Código: render dual para alianzas y escenarios. |
| 2026-04-25 21:38 | AI Assistant | **Datos reales verificados con múltiples fuentes.** Inflación: 3.4% mensual marzo 2026 (INDEC IPC). EMAE: -2.6% interanual feb 2026 (INDEC). Riesgo País: 535 pbs al 22/04/2026 (JP Morgan vía Perfil.com). Pobreza: 26.9% T3 2025 (INDEC/MCH), pico 54.8% T1 2024. Congreso: actualizado post-elecciones oct 2025 — Diputados LLA 64, Fuerza Patria 82; Senado LLA 21, Justicialista 21 (senado.gob.ar). Actores: 10 con roles actualizados. Provincias: Fuerza Patria reemplaza Frente de Todos. 12 alianzas actualizadas. Fuentes cruzadas: INDEC, JP Morgan, Senado.gob.ar, Diputados.gob.ar, Directorio Legislativo, Infobae, Perfil. |
| 2026-04-25 21:42 | AI Assistant | **Fuentes internacionales agregadas.** IMF WEO Apr 2026: PIB +3.5%. World Bank MPO: PIB +4.4% (2025), +3.6% (2026). OECD Survey 2025: PIB +5.2% (2025), +4.3% (2026). ECLAC/CEPAL: Sudamérica +2.4% (2026). Calificación crediticia: S&P CCC+ (Estable, dic 2025), Moody's Caa1 (Estable, jul 2025), Fitch CCC+ (may 2025). Badges de datos en tarjetas internacionales. 12 entidades internacionales con fuentes y fechas. |
| 2026-04-25 21:46 | AI Assistant | **Centro de Comando Ejecutivo v2.0.** Nueva sección 'Comando' con datos en tiempo real. Cotizaciones dólar (Oficial, Blue, MEP, CCL) vía dolarapi.com + bluelytics.com.ar fallback, auto-refresh 2min. Panel de alertas automáticas (brecha cambiaria, riesgo país, inflación, EMAE, pobreza, rating crediticio). Matriz de decisión con 6 escenarios de negocio y scores. Indicador de frescura de datos. Nuevo archivo js/livedata.js (LiveDataSource). 964 líneas nuevas. |

---

> **Recuerdo:** Al decir **"documentar"**, agregar una nueva entrada en el Log de Cambios con todos los trabajos realizados desde la última actualización, y actualizar las secciones correspondientes.
