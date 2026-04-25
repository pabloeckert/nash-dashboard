# 📊 Research Report — Tablero Nash (Fase 1: Discovery)

> Investigación de usuarios y mercado para el dashboard político Nash.

---

## 1. Metodología

| Método | Muestra | Fecha |
|--------|---------|-------|
| Análisis de mercado (desk research) | 8 competidores | 2026-04-25 |
| Análisis de audiencia potencial | Datos públicos | 2026-04-25 |
| Benchmarking de features | 5 plataformas | 2026-04-25 |

---

## 2. Análisis de Competencia

### 2.1 Competidores directos

| Competidor | URL | Fortalezas | Debilidades | Diferenciador Nash |
|------------|-----|------------|-------------|-------------------|
| **Poliarquía** | poliarquia.com.ar | Datos electorales históricos | Sin modelado estratégico | Nash modela interacciones |
| **Electoral Lab** | electorallab.com.ar | Visualizaciones elegantes | Solo elecciones | Nash cubre alianzas y poder |
| **Chequeado** | chequeado.com.ar | Fact-checking, credibilidad | No es dashboard | Nash es análisis estratégico |
| **Pulso Político** | pulsoPolitico.com.ar | Actualización frecuente | Solo noticias | Nash es visual + analítico |
| **El Destape (datos)** | eldestapeweb.com.seccion/datos | Medio establecido | Sesgo editorial | Nash aspira a neutralidad |

### 2.2 Competidores indirectos

| Tipo | Ejemplo | Relevancia |
|------|---------|------------|
| Dashboards económicos | TradingView, Inverfor | Comparten UX de métricas |
| Think tanks | CIPPEC, CEPRO | Contenido de análisis |
| Medios con data journalism | La Nación Data, Chequeado | Visualización de datos |

### 2.3 Gap analysis

| Necesidad no cubierta | Oportunidad para Nash |
|-----------------------|----------------------|
| Modelado de alianzas con teoría de juegos | **Core feature** — único en el mercado |
| Visualización de "actores en la sombra" | Diferenciador fuerte |
| Escenarios Nash con probabilidades | Valor agregado único |
| Mapa provincial interactivo con alianzas | Competidores solo muestran datos electorales |
| Análisis de poder blando (religión, medios) | Nicho desatendido |

---

## 3. Análisis de Audiencia

### 3.1 Segmentos prioritarios

| Segmento | Tamaño estimado (Argentina) | Necesidad principal | Frecuencia de uso |
|----------|---------------------------|--------------------|--------------------|
| Analistas políticos | ~5,000 | Datos estructurados para informes | Diaria |
| Periodistas | ~15,000 | Datos verificables, visualizaciones | Diaria |
| Consultores políticos | ~2,000 | Modelado estratégico, escenarios | Semanal |
| Académicos (ciencia política) | ~3,000 | Teoría de juegos aplicada | Mensual |
| Ciudadanos interesados | ~200,000 | Comprensión del panorama político | Semanal |
| Equipos de campaña | ~500 | Inteligencia competitiva | Diaria (en campaña) |

### 3.2 Segmento primario: Analistas + Periodistas

**Perfil:**
- 25-55 años, universitario
- Usa Twitter/X como fuente principal de información política
- Valora datos sobre opiniones
- Necesita visualizaciones para sus audiencias
- Mobile-first (consulta desde celular)

**Pain points:**
- Datos dispersos en múltiples fuentes
- Sin herramientas de modelado estratégico
- Visualizaciones estáticas, no interactivas
- Falta de contexto histórico

---

## 4. Benchmarking de UX

| Criterio | TradingView | Poliarquia | Chequeado | **Nash (target)** |
|----------|-------------|------------|-----------|-------------------|
| Carga inicial | < 2s | ~3s | ~2s | **< 2s** |
| Mobile responsive | ✅ | Parcial | ✅ | **✅** |
| Interactividad | Alta | Baja | Media | **Alta** |
| Actualización datos | Real-time | Manual | Diaria | **Semanal** |
| Profundidad analítica | Alta | Media | Baja | **Alta** |
| Accesibilidad WCAG | AA | B | AA | **AA** |

---

## 5. Insights clave

1. **No hay competidor directo** que modele política argentina con teoría de juegos
2. **La audiencia existe** — analistas y periodistas buscan datos estructurados
3. **Mobile-first es obligatorio** — la mayoría consulta desde celular
4. **La velocidad importa** — carga < 2s es expected
5. **Neutralidad percibida** es un activo diferenciador vs. medios con sesgo
6. **Actualización semanal** es suficiente para el tipo de análisis
7. **Visualización > texto** — el dashboard debe priorizar lo visual

---

## 6. Recomendaciones

| # | Recomendación | Prioridad | Responsable |
|---|---------------|-----------|-------------|
| 1 | Priorizar mobile-first en diseño | Alta | UX Designer |
| 2 | Incluir fuentes y timestamps en cada métrica | Alta | Content Manager |
| 3 | Diseñar para compartir (screenshots, embeds) | Media | Growth Manager |
| 4 | Neutralidad editorial como pilar de marca | Alta | Product Manager |
| 5 | Empezar con 4 métricas core, expandir gradualmente | Alta | Product Owner |
| 6 | Investigar APIs públicas de datos económicos | Media | Data Engineer |

---

> **Última actualización:** 2026-04-25
> **Responsable:** UX Researcher + Product Manager
