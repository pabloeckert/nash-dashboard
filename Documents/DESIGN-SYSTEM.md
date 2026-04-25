# 🎨 Design System — Tablero Nash

> Sistema de diseño base para el dashboard. Dark theme, datos densos, mobile-first.

---

## 1. Principios de diseño

1. **Datos primero** — El diseño sirve a los datos, no al revés
2. **Densidad controlada** — Mucha información sin abrumar
3. **Jerarquía clara** — El ojo sabe dónde mirar primero
4. **Consistencia** — Mismos patrones en todo el dashboard
5. **Mobile-first** — Diseñar para celular, escalar a desktop

---

## 2. Paleta de colores

### Base
| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | `#0a0e17` | Fondo principal |
| `--bg-secondary` | `#111827` | Fondo secundario, header |
| `--bg-card` | `#1a2332` | Tarjetas, módulos |
| `--border` | `#1e293b` | Bordes, separadores |

### Texto
| Token | Valor | Uso |
|-------|-------|-----|
| `--text-primary` | `#e2e8f0` | Texto principal |
| `--text-secondary` | `#94a3b8` | Labels, texto secundario |
| `--text-muted` | `#64748b` | Placeholders, hints |

### Semánticos
| Token | Valor | Uso |
|-------|-------|-----|
| `--accent-blue` | `#3b82f6` | Links, acciones primarias, datos neutrales |
| `--accent-green` | `#10b981` | Positivo, subida, éxito |
| `--accent-red` | `#ef4444` | Negativo, bajada, alerta |
| `--accent-yellow` | `#f59e0b` | Advertencia, neutro |
| `--accent-purple` | `#8b5cf6` | Destacado, especial |

### Políticos (alineaciones)
| Token | Valor | Uso |
|-------|-------|-----|
| `--pol-gobierno` | `#3b82f6` | Alineación oficialista |
| `--pol-oposicion` | `#ef4444` | Alineación opositora |
| `--pol-independiente` | `#f59e0b` | Independientes |
| `--pol-sombra` | `#6b7280` | Actores en la sombra |

---

## 3. Tipografía

| Elemento | Font | Weight | Size | Line-height |
|----------|------|--------|------|-------------|
| H1 (título) | Inter | 700 | 1.75rem | 1.2 |
| H2 (sección) | Inter | 600 | 1.25rem | 1.3 |
| H3 (card title) | Inter | 500 | 1rem | 1.4 |
| Body | Inter | 400 | 0.875rem | 1.6 |
| Small | Inter | 400 | 0.75rem | 1.5 |
| Mono (datos) | JetBrains Mono | 500 | 0.875rem | 1.4 |
| Label | Inter | 500 | 0.75rem | 1.4 |
| Badge | Inter | 500 | 0.6875rem | 1.0 |

---

## 4. Espaciado

Base: **4px** (0.25rem)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Espacio mínimo (inline) |
| `--space-2` | 8px | Espacio pequeño (entre elementos) |
| `--space-3` | 12px | Espacio medio (padding card) |
| `--space-4` | 16px | Espacio estándar (gap grid) |
| `--space-6` | 24px | Espacio entre secciones |
| `--space-8` | 32px | Espacio entre módulos |

---

## 5. Componentes

### 5.1 Metric Card
```html
<div class="metric-card">
  <div class="label">Inflación (anual)</div>
  <div class="value" style="color: var(--accent-red);">143%</div>
  <div class="change negative">↑ +12% vs mes anterior</div>
</div>
```

### 5.2 Actor Card
```html
<div class="actor-card" style="border-left: 3px solid var(--pol-gobierno);">
  <div class="actor-name">Nombre del Actor</div>
  <div class="actor-role">Cargo / Rol</div>
  <div class="actor-alliance">
    <span class="badge solid">Alianza sólida</span>
  </div>
  <div class="actor-utility">Utilidad: 0.85</div>
</div>
```

### 5.3 Province Card (Mapa)
```html
<div class="province-card">
  <div class="province-name">Buenos Aires</div>
  <div class="province-governor">Gobernador: [Nombre]</div>
  <div class="province-alliance">
    <span class="badge" style="background: var(--pol-gobierno);">Oficialismo</span>
  </div>
</div>
```

### 5.4 Scenario Card (Nash)
```html
<div class="scenario-card">
  <div class="scenario-header">
    <span class="scenario-prob">Prob: 35%</span>
    <span class="scenario-name">Escenario: Acuerdo Fiscal</span>
  </div>
  <div class="scenario-payoff">
    <div class="player">Gobierno: +3</div>
    <div class="player">Oposición: +1</div>
    <div class="player">Mercados: +5</div>
  </div>
  <div class="scenario-equilibrium">Equilibrio de Nash: Sí</div>
</div>
```

---

## 6. Iconografía

| Contexto | Icono | Fuente |
|----------|-------|--------|
| Métricas | 📊 | Emoji |
| Mapa | 🗖️ | Emoji |
| Alianzas | 🤝 | Emoji |
| Escenarios | 🎲 | Emoji |
| Congreso | 🏛️ | Emoji |
| Actores sombra | 👥 | Emoji |
| Internacional | 🌐 | Emoji |
| Religión | ⛪ | Emoji |
| Feed | 📰 | Emoji |

---

## 7. Breakpoints

| Nombre | Ancho | Uso |
|--------|-------|-----|
| `sm` | 640px | Móvil landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

---

## 8. Grid system

- **Métricas:** 4 columnas (2 en mobile)
- **Módulos dashboard:** 2 columnas (1 en mobile)
- **Mapa provincial:** 3 columnas (2 en mobile, 1 en xs)
- **Escenarios Nash:** 2 columnas (1 en mobile)

---

## 9. Animaciones

| Elemento | Animación | Duración |
|----------|-----------|----------|
| Card hover | translateY(-2px) + shadow | 200ms ease |
| Valor actualizado | pulse | 300ms |
| Transición de datos | opacity fade | 400ms ease-in-out |
| Loading | skeleton pulse | 1.5s infinite |

---

> **Última actualización:** 2026-04-25
> **Responsable:** UI Designer
