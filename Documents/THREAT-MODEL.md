# 🛡️ Threat Model — Tablero Nash

> Modelado de amenazas para proyecto estático HTML/CSS/JS en GitHub Pages.

---

## 1. Contexto del sistema

```
┌─────────────┐     HTTPS      ┌──────────────────┐
│   Usuario   │ ◄────────────► │  GitHub Pages    │
│  (navegador)│                │  (CDN estático)  │
└─────────────┘                └──────────────────┘
                                       │
                                       │ sirve
                                       ▼
                                ┌──────────────────┐
                                │  index.html      │
                                │  CSS, JS, datos  │
                                │  (embebidos)     │
                                └──────────────────┘
```

### Trust boundaries
- **TB1:** Navegador del usuario (no controlado por nosotros)
- **TB2:** GitHub Pages (infraestructura de terceros, confiable)
- **TB3:** Repositorio Git (acceso controlado por nosotros)

---

## 2. Identificación de amenazas (STRIDE)

### 2.1 Spoofing (Suplantación)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| S1 | Suplantación del sitio web (phishing) | Baja | Alto | HTTPS forzado, CSP, dominio verificado |
| S2 | Modificación del repo por tercero | Baja | Crítico | 2FA obligatorio, branch protection |

### 2.2 Tampering (Manipulación)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| T1 | Manipulación de datos embebidos en JS | Media | Alto | Validación de datos, fuentes citadas, hash de datos |
| T2 | Inyección de código vía datos maliciosos | Baja | Crítico | Sanitización, CSP, sin eval/innerHTML con datos |
| T3 | Modificación del CSS para ocultar/mostrar info | Baja | Medio | CSS en archivo separado, SRI si es CDN |

### 2.3 Repudiation (Repudio)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| R1 | No saber quién modificó qué | Baja | Bajo | Git log con autores, commits firmados |

### 2.4 Information Disclosure (Divulgación)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| I1 | Datos personales expuestos | N/A | N/A | No se recopilan datos personales |
| I2 | Tokens/keys en el repo | Baja | Crítico | .gitignore, secret scanning habilitado |
| I3 | Datos políticos incorrectos percibidos como oficiales | Media | Medio | Disclaimer claro, fuentes citadas |

### 2.5 Denial of Service (Denegación)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| D1 | DDoS a GitHub Pages | Baja | Bajo | GitHub lo mitiga automáticamente |
| D2 | JavaScript pesado bloquea render | Media | Medio | Code splitting, lazy loading, performance budget |

### 2.6 Elevation of Privilege (Escalada)

| ID | Amenaza | Probabilidad | Impacto | Mitigación |
|----|---------|-------------|---------|------------|
| E1 | XSS que ejecuta código arbitrario | Baja | Crítico | CSP estricto, sanitización, sin innerHTML |
| E2 | Supply chain attack vía Google Fonts | Baja | Medio | SRI hashes, fallback fonts locales |

---

## 3. Controles de seguridad

### 3.1 Implementados
| Control | Estado | Evidencia |
|---------|--------|-----------|
| HTTPS forzado | ✅ | GitHub Pages default |
| CSP básico | ✅ | Meta tag en index.html |
| Sin dependencias npm | ✅ | Solo Google Fonts CDN |
| Licencia MIT (auditable) | ✅ | LICENSE file |
| Datos embebidos (sin API calls) | ✅ | Reduce attack surface |

### 3.2 Pendientes
| Control | Prioridad | Responsable | Deadline |
|---------|-----------|-------------|----------|
| SRI para Google Fonts | Alta | Frontend Dev | Fase 3 |
| Branch protection (PR required) | Alta | DevOps | Fase 0 |
| Dependabot alerts | Media | DevOps | Fase 0 |
| Secret scanning | Media | DevOps | Fase 0 |
| Security headers en `_headers` | Baja | DevOps | Fase 3 |
| CodeQL analysis | Baja | DevOps | Fase 3 |

---

## 4. Diagrama de datos

```
Fuentes públicas ──► Data Engineer ──► JS objects embebidos ──► Render en DOM
(INDEC, BCRA,      (recolección,       (datos en              (sanitización
 Congreso)          validación)          index.html)            antes de render)
```

### Puntos de validación
1. **Recolección:** Verificar fuente oficial
2. **Procesamiento:** Validar formato y rangos
3. **Embebido:** Escape de caracteres especiales
4. **Render:** Sanitización antes de DOM insertion

---

## 5. Respuesta a incidentes

| Paso | Acción | Responsable |
|------|--------|-------------|
| 1 | Detectar (GitHub alert, reporte usuario) | Todos |
| 2 | Evaluar severidad | Cybersecurity |
| 3 | Contener (revert commit si necesario) | DevOps |
| 4 | Corregir (fix + test) | Frontend Dev |
| 5 | Comunicar (si afecta a usuarios) | Product Manager |
| 6 | Post-mortem | Scrum Master |

---

> **Última actualización:** 2026-04-25
> **Responsable:** Cybersecurity Architect
