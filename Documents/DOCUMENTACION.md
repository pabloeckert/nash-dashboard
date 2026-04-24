# 📚 Tablero Nash — Documentación Maestra

> **Instrucción:** Cuando se diga "documentar", actualizar este archivo con los trabajos realizados.
> Última actualización: 25/04/2026

---

## 1. Visión General

**Tablero Nash** es un dashboard interactivo de análisis político-estratégico de Argentina mediante teoría de juegos de Nash. Opera como artefacto vivo que se alimenta de fuentes internas y externas, cruza datos y genera escenarios probabilísticos.

- **Producción:** https://pabloeckert.github.io/nash-dashboard
- **Stack:** HTML5 + CSS3 + JavaScript vanilla (sin dependencias)
- **Repositorio:** github.com/pabloeckert/nash-dashboard

---

## 2. Arquitectura del Sistema

### 2.1 Estructura de Archivos

```
nash-dashboard/
├── index.html          ← Estructura principal (10 paneles)
├── app.js              ← Datos + lógica interactiva
├── styles.css          ← Tema profesional light
├── Documents/
│   ├── DOCUMENTACION.md    ← Este archivo (doc maestra)
│   ├── ACTUALIZACIONES.md  ← Changelog y tracking
│   ├── PLAN.md             ← Plan por etapas
│   └── FUENTES.md          ← Base de fuentes y metodología
└── README.md
```

### 2.2 Paneles del Dashboard

| # | Panel | Contenido | Estado |
|---|-------|-----------|--------|
| 1 | **Dashboard** | Métricas macro, temperatura del sistema, escenarios mini, análisis cruzado | ✅ Activo |
| 2 | **Actores** | Triángulo de hierro LLA, gabinete económico, figuras emergentes | ✅ Activo |
| 3 | **Congreso** | Diputados, Senado, Villarruel, agenda legislativa | ✅ Activo |
| 4 | **Provincias** | 24 provincias con gobernadores, alianzas, transferencias | ✅ Activo |
| 5 | **Alianzas** | Sólidas / débiles / rotas con análisis Nash | ✅ Activo |
| 6 | **En la sombra** | Operadores judiciales, ecosistema digital, empresarios | ✅ Activo |
| 7 | **Religión** | Evangélicos, católicos, judaísmo, otras religiones | ✅ Activo |
| 8 | **Internacional** | 15+ bloques geopolíticos con escenarios | ✅ Activo |
| 9 | **Escenarios Nash** | 5 escenarios con probabilidades + matriz de pagos | ✅ Activo |
| 10 | **Fuentes** | Metodología, medios, analistas, feed generado | ✅ Activo |

### 2.3 Flujo de Datos

```
Fuentes externas ──┐
                   ├──→ Motor de análisis ──→ Datos JSON ──→ Renderizado UI
Fuentes internas ──┘                              │
                                                  ├──→ Cruce y contraste
                                                  └──→ Escenarios Nash
```

---

## 3. Módulos Detallados

### 3.1 Dashboard Principal

**Métricas en tiempo real:**
- Inflación mensual (INDEC / BCRA REM)
- Proyección PIB (FMI WEO / Banco Mundial)
- Riesgo país (JP Morgan / Bloomberg)
- Pobreza (INDEC)

**Temperatura del sistema:** Barras de tensión que miden conflictividad en 10 dimensiones clave:
1. Interna Karina vs Caputo
2. Nación vs Provincia de Buenos Aires
3. Inflación vs meta presupuesto
4. Conflicto social / ajuste
5. Gobernadores aliados: deserción
6. PRO como actor autónomo
7. Iglesias evangélicas (presión)
8. Medio Oriente → commodities
9. Relación FMI / mercados
10. EEUU — acuerdo Vaca Muerta

**Equilibrio de Nash observado:** Texto analítico que describe el estado actual del sistema como juego no-cooperativo.

### 3.2 Actores Internos

**Triángulo de hierro — LLA:**
- **Javier Milei:** Presidente, árbitro supremo. Función de utilidad: reelección 2027.
- **Karina Milei:** Secretaria General, "El Jefe". Controla 4 de 9 ministerios.
- **Santiago Caputo:** Asesor presidencial, "Las Fuerzas del Cielo". Bajo presión máxima.

**Gabinete económico:**
- Luis Caputo (Economía)
- Federico Sturzenegger (Desregulación)

**Figuras emergentes:**
- Ramiro Marra / Lule Menem / Martín Menem
- Manuel Adorni (Jefe de Gabinete)
- Juan Bautista Mahiques (Justicia)
- Patricia Bullrich (Seguridad)
- Sandra Pettovello (Capital Humano)
- Karina Milei como armadora territorial

### 3.3 Congreso

**Cámara de Diputados:**
- LLA: ~130+ bancas (primera minoría post oct-2025)
- UxP: ~99 bancas (oposición dura)
- PRO: ~38 bancas (aliado táctico)
- Provincias Unidas: ~28 bancas (bisagra)
- UCR/Evolución: ~22 bancas (volátil)
- Hacemos/Reg.: ~18 bancas (pragmático)
- Presidente: Martín Menem (LLA)
- Para 2/3: necesita 172 votos

**Senado:**
- UxP: ~33 bancas (oposición, llave de PASO)
- LLA: ~22 bancas
- PRO: ~8 bancas
- Peronismo aliado: ~12 bancas
- UCR/otros: ~9 bancas
- Vicepresidenta: Victoria Villarruel (LLA)

**Victoria Villarruel:**
- Presidenta del Senado, poder de desempate
- Tensiones con Milei, perfil propio
- Derecha tradicional, vínculo militar
- Potencial "tapado" para 2027
- Autorizó aumento de sueldos senadores (abr 2026)

**Agenda legislativa 2026:**
- Reforma laboral: Aprobada ✓
- Acuerdo Mercosur-UE: Media sanción ✓
- Eliminación PASO: En debate
- Reforma política (uninominal): Bloqueada
- Baja edad imputabilidad: Aprobada ✓
- Ley de Glaciares: Media sanción Senado
- Tratado PCT (Patentes): Demorado
- Presupuesto 2026: Aprobado ✓

### 3.4 Provincias (24 jurisdicciones)

Cada provincia tiene:
- Gobernador y partido
- Alineación con Nación (aliada/neutral/hostil)
- Transferencias discrecionales (variación vs 2023)
- Nota analítica

**Provincias aliadas:** CABA, Tucumán, Salta, Misiones, Entre Ríos, Neuquén, Chaco, San Juan, San Luis, Catamarca

**Provincias neutrales/bisagra:** Córdoba, Santa Fe, Mendoza, Chubut, Río Negro, Jujuy, Corrientes, Santa Cruz, Santiago del Estero

**Provincias opositoras:** Buenos Aires (Kicillof), Formosa (Insfrán), La Rioja (Quintela), La Pampa, Tierra del Fuego

**Dilema del desdoblamiento 2027:**
- Nación quiere unificación (arrastre Milei)
- Gobernadores prefieren desdoblamiento
- 12-14 provincias esperadas desdobladas
- Juego de Nash: dilema del prisionero clásico

### 3.5 Alianzas

**Sólidas:**
- LLA — Casa Rosada (núcleo duro)
- Milei — Trump/EEUU (alineamiento ideológico)
- Milei — Netanyahu/Israel (relación personal)
- Santa Cruz — Nación (Gadano + ATN)
- LLA — Evangélicos (apoyo transversal)

**Débiles/Volátiles:**
- LLA — PRO (Macri explora autonomía)
- LLA — Provincias Unidas (caso a caso)
- LLA — Peronismo aliado (Jaldo, Jalil, Sáenz)
- Argentina — Mercosur (tensión Brasil/Venezuela)

**Rotas/Hostilidad:**
- Nación — Buenos Aires (Kicillof)
- Nación — Formosa/La Rioja
- LLA — Kirchnerismo
- Argentina — China (Hidrovía)

### 3.6 Actores en la Sombra

**Operadores judiciales y de inteligencia:**
- Cristian Auguarda (SIDE/Caputo)
- Diego Kravetz (Sub-SIDE)
- Sebastián Amerio (ex-Justicia)
- Eduardo Casal (Procurador interino)

**Ecosistema digital libertario:**
- Daniel Parisini "Gordo Dan"
- Lilia Lemoine (diputada)
- Agustín Laje / Javier Negrete / Iñaki Gutiérrez

**Empresarios y poderes económicos:**
- Techint/Rocca
- YPF/Vaca Muerta
- Grupo Clarín/La Nación
- Laboratorios nacionales

**Kirchnerismo en la sombra:**
- Sergio Massa (influencia PSA)
- Mario Ishii (José C. Paz)
- Cristina Kirchner (proceso judicial)

### 3.7 Religión y Poder Blando

**Iglesias evangélicas:**
- 10-15% del padrón nacional
- Referentes: Pastor Jorge Himitian, Pastor Dante Gebel, Christian Hooft
- Pastores como líderes territoriales
- FAIE (Federación Argentina de Iglesias Evangélicas)
- Tensión: reducción plan MESA

**Iglesia Católica:**
- Papa Francisco fallecido (abr 2025)
- Homenaje a un año de su muerte (abr 2026)
- CEA: preocupación por pobreza
- Cáritas: primer receptor del ajuste
- Proceso de sucesión papal

**Judaísmo:**
- AMIA/DAIA
- Conversión de Milei en proceso
- 3 viajes a Israel en 2 años

**Otras religiones:**
- Islam: triple frontera
- Pueblos originarios: derechos territoriales
- Masones/logias: presencia en Poder Judicial

### 3.8 Política Internacional

**15 bloques analizados:**
1. 🇺🇸 EEUU/Trump — aliado estratégico
2. 🇮🇱 Israel/Netanyahu — alianza personal
3. 🇧🇷 Brasil/Lula — tensión ideológica
4. 🇨🇳 China — tensión silenciosa
5. 🇷🇺 Rusia — ruptura formal
6. 🌍 África/Global Sur — distanciamiento
7. 🇪🇺 UE/Mercosur — hito histórico
8. 🕌 Medio Oriente — impacto directo
9. 🌏 Asia/Japón/Corea — oportunidad abierta
10. 🌐 FMI/BM/organismos — relación clave
11. 🌎 Latinoamérica aliados — mixto
12. 📊 WEF/OCDE/OMC — engagement activo
13. 🇻🇪 Venezuela/Cuba — confrontación
14. 🇲🇽 México — relación tensa
15. 🇮🇳 India — potencial comercial

### 3.9 Escenarios Nash

**Modelo:** Juego no-cooperativo de N jugadores con funciones de utilidad.

| Escenario | Prob. | Descripción |
|-----------|-------|-------------|
| A — Consolidación libertaria | 35% | Karina desplaza Caputo, economía sostiene |
| B — Parálisis por interna | 30% | Interna no resuelta, inflación resistente |
| C — Shock externo | 20% | Medio Oriente + presión cambiaria |
| D — Realineamiento | 10% | Provincias Unidas como tercer polo |
| E — Ruptura sistémica | 5% | Tail risk, crisis aguda |

**Matriz de pagos:** Nación vs Gobernadores (cooperación/desdoblamiento)

---

## 4. Metodología de Fuentes

### 4.1 Fuentes primarias
- INDEC (inflación, pobreza, EPH)
- BCRA (REM, reservas, tipo de cambio)
- FMI (WEO, Art. IV)
- Banco Mundial, OCDE, BID, CEPAL

### 4.2 Medios argentinos
- La Nación, Infobae, Clarín, El Cronista
- Bloomberg Línea, Chequeado, elDiarioAR, Ámbito
- La Política Online (LPO), Letra P

### 4.3 Medios internacionales
- The Economist, Financial Times, Bloomberg, Reuters
- El País, BBC Mundo, France24

### 4.4 Think tanks
- IERAL (Fundación Mediterránea)
- LCG, Invecq, IARAF
- FocusEconomics, Deloitte LATAM
- Poliarquía (encuestas)

### 4.5 Analistas clave
- Jorge Lanata, Eduardo van der Kooy
- Marcelo Bonelli, Carlos Pagni
- Rosendo Fraga, Sergio Berensztein
- Alejandro Catterberg

### 4.6 Proceso de cruce y contraste
1. Recolección de fuentes primarias y secundarias
2. Identificación de contradicciones entre fuentes
3. Ponderación por confiabilidad y actualidad
4. Síntesis analítica con marcadores de incertidumbre
5. Actualización semanal o ante eventos de alto impacto

---

## 5. Plan de Actualización

Ver `Documents/PLAN.md` para el plan por etapas detallado.

**Protocolo "documentar":**
1. Abrir este archivo
2. Agregar sección de trabajos realizados con fecha
3. Actualizar versión y changelog en `ACTUALIZACIONES.md`
4. Commit + push

---

## 6. Equipo Técnico (Roles para desarrollo futuro)

### Área Técnica
- Software Architect, Cloud Architect
- Backend/Frontend Developer
- iOS/Android Developer
- DevOps Engineer, SRE
- Cybersecurity Architect
- Data Engineer, ML Engineer
- QA Automation, DBA

### Área de Producto y Gestión
- Product Manager/Owner
- Scrum Master/Agile Coach
- UX Researcher/Designer, UI Designer
- UX Writer, Localization Manager
- Delivery Manager

### Área Comercial y Crecimiento
- Growth Manager, ASO Specialist
- Performance Marketing, SEO
- Business Development, Account Manager
- Content Manager, Community Manager

### Área de Operaciones, Legal y Análisis
- BI Analyst, Data Scientist
- Legal & Compliance, DPO
- Customer Success
- Technical Support T1/T2/T3
- Revenue Operations (RevOps)

---

## 7. Registro de Actualizaciones

### v2.0 — 25/04/2026 (Actualización mayor)
- [x] Creada carpeta Documents/ con documentación completa
- [x] Expandido panel Internacional de 12 a 15 bloques
- [x] Agregado detalle de Papa Francisco fallecido (abr 2025)
- [x] Agregada sección FAIE y referentes evangélicos
- [x] Expandido panel Actores con más figuras emergentes
- [x] Mejorado panel Villarruel con autorización sueldos senadores
- [x] Agregados "tapados" y actores en la sombra expandidos
- [x] Nueva sección de escenarios internacionales detallados
- [x] Documentación maestra creada
- [x] Plan por etapas elaborado
- [x] Base de fuentes documentada

### v1.0 — Estado inicial
- Dashboard base con 10 paneles
- 24 provincias mapeadas
- Escenarios Nash con matriz de pagos
- Feed de fuentes básico
