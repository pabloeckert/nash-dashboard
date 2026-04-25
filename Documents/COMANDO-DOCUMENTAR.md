# 🔄 Comando "documentar" — Instrucciones de Actualización

> Este archivo define el protocolo cuando el usuario dice **"documentar"**.

---

## Protocolo de Actualización

Cuando el usuario invoca **"documentar"**, ejecutar los siguientes pasos:

### 1. Recopilar información
- Revisar el historial de la sesión actual
- Identificar trabajos realizados, decisiones tomadas, cambios hechos
- Revisar archivos modificados en el workspace (`git diff`, `git log`)

### 2. Actualizar `Documents/DOCUMENTACION.md`
- Agregar entrada en **Log de Cambios** con fecha y descripción
- Actualizar secciones correspondientes según el tipo de trabajo:
  - Cambios técnicos → Secciones 2-5 (Arquitectura, API, DB)
  - Cambios de seguridad → Sección 6
  - Cambios de testing → Sección 7
  - Cambios de producto/UX → Sección 8
  - Cambios de infra → Sección 9
  - Cambios de marketing → Sección 10
  - Cambios legales → Sección 11
  - Cambios de soporte → Sección 12
- Actualizar **Última actualización** en Metadatos
- Actualizar **Estado** si cambió

### 3. Actualizar `Documents/PLAN-ETAPAS.md`
- Marcar entregables completados con [x]
- Actualizar porcentajes de progreso
- Actualizar estado de fases si corresponde

### 4. Commit y push
```bash
cd /root/.openclaw/workspace
git add Documents/
git commit -m "📝 documentar: [resumen del trabajo realizado]"
git push
```

### 5. Confirmar al usuario
- Resumen de lo documentado
- Estado actualizado del plan

---

## Plantilla de Entrada para Log

```markdown
| YYYY-MM-DD | [Autor] | [Descripción detallada del trabajo] |
```

---

## Ejemplo de invocación

**Usuario:** "documentar"

**Respuesta esperada:**
1. Revisar qué se hizo desde la última actualización
2. Actualizar DOCUMENTACION.md
3. Actualizar PLAN-ETAPAS.md
4. Commit + push
5. Responder con resumen
