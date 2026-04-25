# 🌐 i18n Strategy — Tablero Nash

> Estrategia de internacionalización y localización.

---

## 1. Estado actual

| Idioma | Estado | Prioridad |
|--------|--------|-----------|
| Español (Argentina) | ✅ Primario | P0 |
| Inglés (US) | ⚪ Futuro | P2 |
| Portugués (BR) | ⚪ Futuro | P3 |

---

## 2. Enfoque de implementación

### 2.1 Para MVP (Fase 3)
- **Solo español (es-AR)**
- Datos hardcodeados en español
- Sin sistema de i18n (simplifica desarrollo)

### 2.2 Para expansión (post-MVP)
- Sistema de i18n con JSON files
- Estructura: `i18n/es-AR.json`, `i18n/en-US.json`
- Detección automática de idioma del navegador
- Selector de idioma en header

---

## 3. Contenido a traducir

| Categoría | Ejemplo | Complejidad |
|-----------|---------|-------------|
| Labels UI | "Inflación", "Riesgo País" | Media (términos técnicos) |
| Microcopy | "↑ +12% vs. mes anterior" | Baja |
| Descripciones | Tooltips, empty states | Media |
| Disclaimer | Texto legal | Alta (requiere revisión legal) |
| Nombres de actores | No traducir | N/A |
| Datos numéricos | Formato local | Media (separadores) |

---

## 4. Formatos regionales

| Formato | es-AR | en-US |
|---------|-------|-------|
| Fecha | 25/04/2026 | 04/25/2026 |
| Decimal | 1.234,56 | 1,234.56 |
| Moneda | $ 1.234 | $1,234 |
| Porcentaje | 143,2% | 143.2% |

---

## 5. Consideraciones culturales

| Aspecto | Nota |
|---------|------|
| Nombres de partidos | No traducir, mantener en español |
| Términos constitucionales | Explicar en tooltip para audiencia no-argentina |
| Colores políticos | Convención argentina ≠ US (azul/peronista vs rojo/republicano) |
| Referencias históricas | Contextualizar para audiencia internacional |

---

## 6. Implementación técnica (futura)

```javascript
// i18n loader
async function loadLocale(locale) {
  const response = await fetch(`/i18n/${locale}.json`);
  return response.json();
}

// Formato de números
function formatNumber(num, locale) {
  return new Intl.NumberFormat(locale).format(num);
}

// Formato de fechas
function formatDate(date, locale) {
  return new Intl.DateTimeFormat(locale).format(date);
}
```

---

> **Última actualización:** 2026-04-25
> **Responsable:** Localization Manager
