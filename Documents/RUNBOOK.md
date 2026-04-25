# ⚙️ Production Runbook — Tablero Nash

> Procedimientos operacionales para el dashboard en producción.

---

## 1. Información del sistema

| Campo | Valor |
|-------|-------|
| **URL producción** | https://pabloeckert.github.io/nash-dashboard |
| **Repositorio** | https://github.com/pabloeckert/nash-dashboard |
| **Branch de producción** | master |
| **Hosting** | GitHub Pages |
| **CDN** | GitHub Pages CDN (Fastly) |
| **SSL** | Automático (GitHub) |
| **DNS** | GitHub Pages default |

---

## 2. Deploy

### Deploy automático (normal)
```bash
# Cualquier push a master activa el deploy
git add .
git commit -m "descripción del cambio"
git push origin master

# GitHub Actions ejecuta:
# 1. Checkout
# 2. Upload artifact
# 3. Deploy a GitHub Pages
# Tiempo estimado: 1-3 minutos
```

### Deploy manual (emergencia)
```bash
# Ir a GitHub → Actions → Deploy to GitHub Pages → Run workflow
```

### Verificar deploy
```bash
# Abrir en navegador
open https://pabloeckert.github.io/nash-dashboard

# Verificar que no hay errores de consola
# Verificar que los datos se renderizan
```

---

## 3. Rollback

### Revert último commit
```bash
# Revert el último commit
git revert HEAD
git push origin master

# O resetear a un commit específico
git log --oneline  # encontrar commit deseado
git reset --hard <commit-hash>
git push --force origin master  # ⚠️ CUIDADO
```

### Rollback de GitHub Pages
```bash
# Ir a GitHub → Settings → Pages
# Cambiar branch temporalmente a otro
# Luego volver a master con el commit correcto
```

---

## 4. Monitoreo

### Checks manuales
| Check | Frecuencia | Método |
|-------|------------|--------|
| Site accesible | Diaria | Abrir URL en browser |
| Sin errores consola | Diaria | F12 → Console |
| Datos actualizados | Semanal | Verificar fechas en métricas |
| Performance | Semanal | Lighthouse (F12 → Lighthouse) |
| SSL válido | Mensual | Verificar candado en browser |

### GitHub Actions status
- Ir a: https://github.com/pabloeckert/nash-dashboard/actions
- Verificar que los últimos runs son exitosos (verde)

---

## 5. Actualización de datos

### Proceso manual
1. Editar `js/data.js`
2. Actualizar valores de métricas
3. Actualizar `meta.lastUpdate` con fecha
4. Actualizar fuentes si cambiaron
5. Commit + push
6. Verificar en producción

### Fuentes de datos
| Métrica | Fuente | URL | Frecuencia |
|---------|--------|-----|------------|
| Inflación | INDEC | indec.gob.ar | Mensual (día 15) |
| PIB | INDEC | indec.gob.ar | Trimestral |
| Riesgo País | BCRA | bcra.gob.ar | Diaria |
| Pobreza | INDEC | indec.gob.ar | Semestral |
| Congreso | Congreso | congreso.gob.ar | Trimestral |

---

## 6. Troubleshooting

### Problema: Site no carga
1. Verificar GitHub Pages está habilitado: Settings → Pages
2. Verificar que el último deploy fue exitoso: Actions
3. Verificar que `index.html` existe en root
4. Esperar 5 minutos (propagación CDN)

### Problema: Errores de JavaScript
1. Abrir F12 → Console
2. Identificar el error
3. Verificar que `js/data.js` y `js/app.js` se cargan
4. Verificar CSP no bloquea scripts

### Problema: CSS no se aplica
1. Verificar que `css/styles.css` se carga
2. Verificar CSP no bloquea estilos
3. Hard refresh: Ctrl+Shift+R

### Problema: Datos no se renderizan
1. Verificar que `NASH_DATA` existe en consola
2. Verificar que `js/data.js` se carga antes que `js/app.js`
3. Verificar que los IDs de los elementos HTML coinciden

---

## 7. Contactos

| Rol | Responsable | Contacto |
|-----|-------------|----------|
| Owner | Pablo Eckert | GitHub: @pabloeckert |
| DevOps | (pendiente) | — |
| SRE | (pendiente) | — |

---

## 8. SLA

| Métrica | Target |
|---------|--------|
| Uptime | > 99.5% (GitHub Pages SLA) |
| Tiempo de respuesta | < 2s (LCP) |
| MTTR (fix deploy) | < 30 min |
| Frecuencia de datos | Semanal (manual) |

---

> **Última actualización:** 2026-04-25
> **Responsable:** DevOps Engineer + SRE
