# 🧪 Test Strategy — Tablero Nash

> Estrategia de testing para proyecto estático HTML/CSS/JS.

---

## 1. Enfoque de testing

### Niveles de testing

| Nivel | Tipo | Cobertura objetivo | Herramienta | Frecuencia |
|-------|------|--------------------|-------------|------------|
| L1 | Unit tests | > 80% funciones JS | Jest / Vitest | Cada commit |
| L2 | Integration tests | Módulos principales | Jest | Cada PR |
| L3 | E2E tests | Flujos críticos | Playwright | Cada merge |
| L4 | Visual regression | Componentes UI | Playwright screenshots | Semanal |
| L5 | Performance | Lighthouse > 90 | Lighthouse CI | Cada deploy |
| L6 | Accessibility | WCAG 2.1 AA | axe-core | Cada deploy |
| L7 | Cross-browser | Chrome, Firefox, Safari, Edge | Playwright | Cada release |
| L8 | Mobile responsive | 320px - 1536px | Playwright | Cada release |

---

## 2. Prioridades de testing

### P0 — Crítico (debe pasar siempre)
- Carga de la página < 2s
- Métricas se renderizan correctamente
- Navegación funciona en todas las pantallas
- Sin errores de consola
- CSP no bloquea recursos legítimos

### P1 — Alto
- Interacciones de filtros
- Transiciones entre vistas
- Datos se actualizan visualmente
- Modo mobile funcional

### P2 — Medio
- Animaciones suaves
- Hover states
- Edge cases de datos (valores nulos, extremos)
- Print styles

---

## 3. Test cases principales

### 3.1 Dashboard principal
| ID | Test | Tipo | Prioridad |
|----|------|------|-----------|
| T-001 | Página carga en < 2s | Performance | P0 |
| T-002 | 4 métricas visibles en desktop | Visual | P0 |
| T-003 | 2 métricas visibles en mobile | Visual | P0 |
| T-004 | Métricas muestran valores | Functional | P0 |
| T-005 | Cambio de color correcto (positivo/negativo) | Visual | P1 |
| T-006 | Navegación entre módulos funciona | Functional | P0 |

### 3.2 Actores
| ID | Test | Tipo | Prioridad |
|----|------|------|-----------|
| T-010 | Lista de actores se carga | Functional | P0 |
| T-011 | Filtro por alianza funciona | Functional | P1 |
| T-012 | Actor card muestra utilidad | Visual | P1 |
| T-013 | Click en actor muestra detalle | Functional | P1 |

### 3.3 Escenarios Nash
| ID | Test | Tipo | Prioridad |
|----|------|------|-----------|
| T-020 | Escenarios se renderizan | Functional | P0 |
| T-021 | Matriz de pagos visible | Visual | P0 |
| T-022 | Probabilidades suman 100% | Functional | P0 |
| T-023 | Equilibrio Nash marcado correctamente | Functional | P0 |

### 3.4 Cross-browser
| ID | Test | Navegador | Prioridad |
|----|------|-----------|-----------|
| T-030 | Layout correcto | Chrome | P0 |
| T-031 | Layout correcto | Firefox | P0 |
| T-032 | Layout correcto | Safari | P1 |
| T-033 | Layout correcto | Edge | P1 |

### 3.5 Responsive
| ID | Test | Viewport | Prioridad |
|----|------|----------|-----------|
| T-040 | Mobile layout | 375px | P0 |
| T-041 | Tablet layout | 768px | P0 |
| T-042 | Desktop layout | 1280px | P0 |
| T-043 | Large desktop | 1536px | P2 |

---

## 4. Performance targets

| Métrica | Target | Tool |
|---------|--------|------|
| First Contentful Paint | < 1.0s | Lighthouse |
| Largest Contentful Paint | < 2.0s | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Lighthouse Performance | > 90 | Lighthouse CI |
| Lighthouse Accessibility | > 90 | Lighthouse CI |
| Lighthouse Best Practices | > 90 | Lighthouse CI |
| Lighthouse SEO | > 90 | Lighthouse CI |

---

## 5. Test environment

| Entorno | URL | Uso |
|---------|-----|-----|
| Local | `localhost:3000` | Desarrollo |
| Preview | PR deploy preview | Review |
| Staging | `staging.nash-dashboard.pages.dev` | Pre-producción |
| Production | `pabloeckert.github.io/nash-dashboard` | Producción |

---

## 6. CI/CD integration

```yaml
# En cada push a master:
1. Lint (HTML, CSS, JS)
2. Unit tests (Jest)
3. Build verification
4. Lighthouse CI
5. Deploy a GitHub Pages
6. E2E tests post-deploy (opcional)
```

---

> **Última actualización:** 2026-04-25
> **Responsable:** QA Automation Engineer
