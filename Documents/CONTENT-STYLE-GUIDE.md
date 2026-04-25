# ✍️ Content Style Guide — Tablero Nash

> Guía de contenido, tono de voz y microcopy para el dashboard.

---

## 1. Principios de contenido

1. **Claro** — Sin jerga innecesaria. Si hay término técnico, explicar.
2. **Conciso** — Decir más con menos. Cada palabra suma.
3. **Neutral** — Datos sin editorializar. El usuario interpreta.
4. **Accesible** — Lenguaje que cualquiera entienda.
5. **Verificable** — Cada dato tiene fuente y fecha.

---

## 2. Tono de voz

| Dimensión | Posición |
|-----------|----------|
| Formal ↔ Casual | **Medio** — Profesional pero accesible |
| Serio ↔ Divertido | **Serio** — Es política, no entretenimiento |
| Técnico ↔ Simple | **Simple** — Explicar, no asumir conocimiento |
| Directo ↔ Diplomático | **Directo** — Los datos hablan solos |

### Ejemplos

| ❌ No | ✅ Sí |
|-------|-------|
| "La tasa de inflación interanual se ha incrementado en un 12% con respecto al período anterior" | "Inflación: ↑ +12% vs. mes anterior" |
| "Los actores políticos están en una situación compleja" | "5 alianzas rotas en el último mes" |
| "Hay un equilibrio de Nash en este escenario" | "Equilibrio alcanzado: ambos actores cooperan" |

---

## 3. Microcopy

### 3.1 Labels de métricas
| Métrica | Formato | Ejemplo |
|---------|---------|---------|
| Inflación | `Inflación (anual)` | Inflación (anual) |
| PIB | `PIB (var. trimestral)` | PIB (var. trimestral) |
| Riesgo País | `Riesgo País` | Riesgo País |
| Pobreza | `Pobreza` | Pobreza |

### 3.2 Cambios de valor
| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Subida | `↑ +X% vs. [período]` | ↑ +12% vs. mes anterior |
| Bajada | `↓ -X% vs. [período]` | ↓ -0.3% vs. trimestre anterior |
| Sin cambio | `→ Sin cambio` | → Sin cambio |
| Sin dato | `— Sin datos` | — Sin datos |

### 3.3 Estados de alianza
| Estado | Badge | Color |
|--------|-------|-------|
| Sólida | `Alianza sólida` | Verde |
| Débil | `Alianza débil` | Amarillo |
| Rota | `Alianza rota` | Rojo |
| Nueva | `Nueva alianza` | Azul |

### 3.4 Equilibrio Nash
| Estado | Texto |
|--------|-------|
| Equilibrio alcanzado | "Equilibrio de Nash: ambos actores cooperan" |
| Sin equilibrio | "Sin equilibrio: incentivos desalineados" |
| Equilibrio parcial | "Equilibrio parcial: un actor coopera" |

---

## 4. Fuentes de datos

| Métrica | Fuente oficial | URL base | Frecuencia |
|---------|---------------|----------|------------|
| Inflación | INDEC | indec.gob.ar | Mensual |
| PIB | INDEC | indec.gob.ar | Trimestral |
| Riesgo País | BCRA / JP Morgan | bcra.gob.ar | Diaria |
| Pobreza | INDEC | indec.gob.ar | Semestral |
| Composición Congreso | Honorable Congreso | congreso.gob.ar | Trimestral |
| Gobernadores | Ministerio del Interior | mininterior.gob.ar | Anual |

### Formato de citación
```
Fuente: [Organismo] · Actualizado: [DD/MM/AAAA]
Ejemplo: Fuente: INDEC · Actualizado: 25/04/2026
```

---

## 5. Formatos de datos

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Porcentaje | `X.X%` | 143.2% |
| Moneda (ARS) | `$X.XXX` | $1.234 |
| Millones | `X.XM` | 45.2M |
| Miles | `X.XK` | 12.5K |
| Fecha | `DD/MM/AAAA` | 25/04/2026 |
| Probabilidad | `XX%` | 35% |
| Utilidad (Nash) | `0.XX` | 0.85 |

---

## 6. Textos de interfaz

### Títulos de sección
| Sección | Título |
|---------|--------|
| Home | "Dashboard" |
| Actores | "Mapa de Actores" |
| Congreso | "Análisis del Congreso" |
| Mapa | "Mapa Provincial" |
| Alianzas | "Mapa de Alianzas" |
| Nash | "Escenarios Nash" |
| Sombra | "Actores en la Sombra" |
| Internacional | "Política Internacional" |
| Feed | "Fuentes y Análisis" |

### Empty states
| Contexto | Texto |
|----------|-------|
| Sin datos | "No hay datos disponibles para este período" |
| Sin resultados | "No se encontraron resultados. Probá con otros filtros." |
| Cargando | "Actualizando datos..." |
| Error | "No se pudieron cargar los datos. Intentá de nuevo." |

### Tooltips
| Elemento | Tooltip |
|----------|---------|
| Utilidad Nash | "Valor de 0 a 1 que indica la satisfacción del actor con el estado actual" |
| Probabilidad escenario | "Probabilidad estimada de que este escenario se materialice en los próximos 30 días" |
| Alianza sólida | "Relación estratégica con alta confianza y cooperación sostenida" |
| Alianza débil | "Relación en tensión, susceptible a cambios" |
| Alianza rota | "Relación disuelta o en conflicto activo" |

---

## 7. Disclaimer

Texto fijo en footer:
```
Análisis propio basado en fuentes públicas. Los escenarios Nash son modelos 
teóricos y no predicciones. Última actualización: [fecha].
```

---

> **Última actualización:** 2026-04-25
> **Responsable:** UX Writer + Content Manager
