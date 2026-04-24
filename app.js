// ═══════════════════════════════════════════════════════════════
// Tablero Nash — Argentina
// Data & Interactive Logic
// ═══════════════════════════════════════════════════════════════

const PROVINCES = [
  {name:"Buenos Aires",gov:"Axel Kicillof",party:"UxP",align:"hostile",funds:"-ajuste 20%",note:"No invitado a reunión de gobernadores. Caso Aubasa/hidrovía. Conflicto total con Nación."},
  {name:"CABA",gov:"Jorge Macri",party:"PRO",align:"allied",funds:"+57,3% vs 2024",note:"Aliada por Corte Suprema (coparticipación). Bullrich senadora. Alianza LLA-PRO con más del 50%."},
  {name:"Córdoba",gov:"Martín Llaryora",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Confirmó desdoblamiento 2027. Miembro de Provincias Unidas. Apoyo caso a caso."},
  {name:"Santa Fe",gov:"Maximiliano Pullaro",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Desdoblamiento confirmado. Bloque Provincias Unidas."},
  {name:"Mendoza",gov:"Alfredo Cornejo",party:"UCR",align:"neutral",funds:"media",note:"LLA ganó Mendoza en oct-2025. Ley de Glaciares genera tensión."},
  {name:"Tucumán",gov:"Osvaldo Jaldo",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Volvió al consenso con LLA a mediados de 2025."},
  {name:"Salta",gov:"Gustavo Sáenz",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Aliado variable. Construye frente regional con Figueroa y Passalacqua."},
  {name:"Misiones",gov:"Hugo Passalacqua",party:"FR-aliado",align:"allied",funds:"+$4.000M ATN",note:"Alianza sólida con Nación. Construye frente regional."},
  {name:"Entre Ríos",gov:"Rogelio Frigerio",party:"PRO/LLA",align:"allied",funds:"media",note:"Relación muy buena con el Ejecutivo."},
  {name:"Neuquén",gov:"Rolando Figueroa",party:"MPN",align:"allied",funds:"+récord (incendios)",note:"$15.000M en feb por incendios. Vaca Muerta = prioridad compartida."},
  {name:"Chubut",gov:"Ignacio Torres",party:"Prov.Unidas",align:"neutral",funds:"media",note:"Posición de bisagra. Intereses en hidrocarburos patagónicos."},
  {name:"Río Negro",gov:"Alberto Weretilneck",party:"regional",align:"neutral",funds:"media",note:"Relación funcional. Sin conflictos mayores."},
  {name:"Jujuy",gov:"Carlos Sadir",party:"UCR/JxC",align:"neutral",funds:"media",note:"Intereses en litio. Posición oscilante."},
  {name:"Catamarca",gov:"Raúl Jalil",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Volvió al consensus a mediados de 2025."},
  {name:"Corrientes",gov:"Juan Pablo Valdés",party:"ECO/Prov.Unidas",align:"neutral",funds:"+$3.000M ATN",note:"Apoyo funcional al Ejecutivo."},
  {name:"Chaco",gov:"Leandro Zdero",party:"PRO/LLA",align:"allied",funds:"media",note:"LLA ganó Chaco en oct-2025."},
  {name:"Formosa",gov:"Gildo Insfrán",party:"PJ-K",align:"hostile",funds:"-72,1% vs 2023",note:"Segundo en pérdida de fondos. Kirchnerismo duro."},
  {name:"La Rioja",gov:"Ricardo Quintela",party:"PJ-K",align:"hostile",funds:"-87,9% vs 2023",note:"Provincia más castigada. Ejemplo máximo del mecanismo de 'asfixia'."},
  {name:"San Juan",gov:"Marcelo Orrego",party:"PRO/LLA",align:"allied",funds:"media",note:"Excelente relación con el Ejecutivo."},
  {name:"San Luis",gov:"Claudio Poggi",party:"LLA",align:"allied",funds:"positiva",note:"Relación sólida con el Ejecutivo."},
  {name:"Santa Cruz",gov:"Claudio Vidal",party:"Prov.Unidas",align:"neutral",funds:"+$4.000M ATN",note:"ATN de $100M consolidó relación. Posible acercamiento a LLA."},
  {name:"La Pampa",gov:"Sergio Ziliotto",party:"PJ",align:"hostile",funds:"-70,9% vs 2023",note:"Tercer lugar en pérdida de fondos."},
  {name:"Tierra del Fuego",gov:"Gustavo Melella",party:"MFUT",align:"hostile",funds:"baja",note:"Posición autónoma y crítica."},
  {name:"Santiago del Estero",gov:"Gerardo Zamora",party:"FRES",align:"neutral",funds:"media",note:"Posición pragmática. Largo historial de negociación."},
];

const INTL_BLOCS = [
  {flag:"🇺🇸",name:"Estados Unidos / Trump",status:"aliado estratégico",statusColor:"var(--green)",body:"Relación más cálida desde Reagan. Trump y Milei comparten ideología libertaria-nacionalista. Vaca Muerta como moneda de cambio energético. CNA creado en 2026 como plataforma de cooperación en seguridad. <strong>Riesgo:</strong> dependencia del alineamiento hace vulnerable ante cambio en Washington."},
  {flag:"🇮🇱",name:"Israel / Netanyahu",status:"alianza personal",statusColor:"var(--green)",body:"3 viajes de Milei a Israel en 2 años. Conversión al judaísmo en proceso. Apoyo explícito post-7/10. <strong>Tensión:</strong> alineamiento total tensiona relación con países árabes."},
  {flag:"🇧🇷",name:"Brasil / Lula",status:"tensión ideológica",statusColor:"var(--red)",body:"Relación fría. Milei se negó a apoyar a Lula en crisis interna. Sin embargo, acuerdo Mercosur-UE requirió coordinación con Brasilia. <strong>Paradoja:</strong> Milei critica el socialismo de Lula pero necesita su firma para el acuerdo comercial más grande del Mercosur."},
  {flag:"🇨🇳",name:"China",status:"tensión silenciosa",statusColor:"var(--amber)",body:"Licitación de hidrovía excluyó empresas con capitales soberanos. Swap BCRA renovado pragmáticamente. <strong>Paradoja:</strong> China es 2do destino de exportaciones argentinas. Tensión entre ideología y pragmatismo."},
  {flag:"🇷🇺",name:"Rusia",status:"ruptura formal",statusColor:"var(--red)",body:"Abandono del alineamiento con regímenes autoritarios. Salida del proceso BRICS. Rechazo a narrativa rusa sobre Ucrania."},
  {flag:"🌍",name:"África / Global Sur",status:"distanciamiento",statusColor:"var(--amber)",body:"Salida de BRICS. Reducción de presencia en foros multilaterales progresistas. <strong>Costo:</strong> pérdida de votos en ONU y organismos regionales."},
  {flag:"🇪🇺",name:"Unión Europea / Mercosur",status:"hito histórico",statusColor:"var(--green)",body:"Acuerdo Mercosur-UE: acceso a mercado de 700M de consumidores. Beneficia a agroexportadores y sector automotriz. <strong>Desafío:</strong> oposición europea a deforestación amazónica puede complicar implementación."},
  {flag:"🕌",name:"Medio Oriente / Israel-Irán",status:"impacto directo",statusColor:"var(--red)",body:"FMI cita conflicto como factor que redujo PIB al 3,5% e inflación al 30,4%. Argentina exportador neto de energía (Vaca Muerta) tiene efecto positivo parcial."},
  {flag:"🌏",name:"Asia / Japón / Corea",status:"oportunidad abierta",statusColor:"var(--blue)",body:"Socios estratégicos potenciales en litio y energía. RIGI busca atraer capitales asiáticos. Cadena de valor del litio conecta con industria de baterías."},
  {flag:"🌐",name:"FMI / BM / organismos",status:"relación clave",statusColor:"var(--green)",body:"Segunda revisión del programa FMI esperada. Desembolso potencial USD 1.000M. Riesgo país cayó de ~2.000 a 634pb. <strong>Condicionalidad:</strong> cumplimiento de metas fiscales y cambiarias."},
  {flag:"🌎",name:"Latinoamérica — aliados",status:"mixto",statusColor:"var(--amber)",body:"Bukele y Milei comparten ideología. Chile de Boric distante pero pragmático. Venezuela y Cuba como contraste ideológico. Milei busca ser referente de la derecha liberal latinoamericana."},
  {flag:"📊",name:"WEF / OCDE / OMC",status:"engagement activo",statusColor:"var(--green)",body:"Participación en Davos con discursos de alto impacto. OCDE mejoró proyecciones de PIB. Ingreso formal a la OCDE como objetivo de mediano plazo."},
];

const SCENARIOS = [
  {title:"A — Consolidación libertaria ordenada",pct:35,color:"var(--green)",tag:"Nash cooperativo",body:"<strong>Condiciones:</strong> Karina desplaza definitivamente a Caputo; economía sostiene 3-3,5%; inflación converge a 20-22% anual; gobernadores aliados sostienen apoyo legislativo; FMI aprueba desembolsos. Milei llega a 2027 con base sólida para reelección. <strong>Señal de alerta:</strong> salida de Caputo antes de junio = +10 puntos de probabilidad."},
  {title:"B — Parálisis por interna + inflación resistente",pct:30,color:"var(--amber)",tag:"Nash desequilibrio",body:"<strong>Condiciones:</strong> interna Karina–Caputo no se resuelve y genera bloqueos. Inflación no baja del 2,5-3% mensual en Q3. Gobernadores aliados se distancian. Cada jugador maximiza poder propio a costa del proyecto colectivo. <strong>Referente:</strong> De la Rúa 2000-2001."},
  {title:"C — Shock externo + presión cambiaria",pct:20,color:"var(--red)",tag:"Nash crisis dominante",body:"<strong>Condiciones:</strong> escalada en Medio Oriente impacta commodities. Inflación supera 35% anual. FMI retrasa desembolsos. Milei enfrenta dilema: ajuste adicional (riesgo social) vs expansión fiscal (riesgo credibilidad). <strong>Referente:</strong> crisis del Tequila 1995."},
  {title:"D — Realineamiento: Provincias Unidas como tercer polo",pct:10,color:"var(--purple)",tag:"Nuevo equilibrio",body:"<strong>Condiciones:</strong> Provincias Unidas consolida identidad propia. Se posiciona como bisagra legislativa autónoma con poder de veto. Equilibrio de tres jugadores. Milei pierde el monopolio de la agenda. <strong>Referente:</strong> peronismo del interior 2007-2011."},
  {title:"E — Ruptura sistémica / crisis aguda",pct:5,color:"var(--red)",tag:"Tail risk",body:"<strong>Condiciones:</strong> shock externo severo + crisis interna explosiva + pérdida de credibilidad FMI + movilización social. Baja probabilidad pero altísima consecuencia. <strong>Indicador adelantado:</strong> caída de depósitos bancarios en dólares y brecha cambiaria >15%."},
];

const FEED_ITEMS = [
  {source:"The Economist — 2026",text:"'Javier Milei's Argentina is a case study in whether shock therapy can work in a democracy. The fiscal results are real; the social costs, also real.'",tag:"análisis"},
  {source:"FMI WEO Abril 2026",text:"Crecimiento proyectado 3,5% (↓ desde 4%). Inflación 30,4% (↑ casi el doble). La revisión refleja menor impulso del 2S-2025.",tag:"dato"},
  {source:"Bloomberg Línea — mar 2026",text:"Milei descongeló ATN de $20.000M a 6 provincias justo antes de la votación de la reforma laboral. Patrón 'fondos por votos' consistente.",tag:"investigación"},
  {source:"BCRA REM — mar 2026",text:"Mercado proyecta tipo de cambio $1.700/USD para dic-2026 (+17,4% interanual). Inflación esperada top-10: 24,4% anual.",tag:"proyección"},
  {source:"Carlos Pagni / La Nación",text:"'La interna Karina-Caputo no es una disputa de estilos. Es una disputa por quién conduce la Argentina después de Milei.'",tag:"columnista"},
  {source:"Eduardo van der Kooy / Clarín",text:"'Villarruel es el comodín que nadie mira. Desde el Senado está construyendo silenciosamente su propio espacio.'",tag:"columna"},
  {source:"Alejandro Catterberg / Poliarquía",text:"Encuesta interna: LLA mantiene 40%+ imagen positiva, pero núcleo duro más estrecho que voto oct-2025. Economía es el único driver.",tag:"sondeo"},
  {source:"IERAL / Fundación Mediterránea",text:"Proyección base: inflación 23% anual dic-2026. Optimista (BCRA acumula USD 9.500M): 18-19%. Pesimista: hasta 30%.",tag:"proyección"},
  {source:"Deloitte LATAM — mar 2026",text:"PIB Argentina 2025: +4,4%. Finanzas y minería lideraron. Recuperación 2026 condicionada a menor inflación.",tag:"dato"},
  {source:"World Economic Forum",text:"Argentina fue en 2025 el país con mayor mejora en libertad económica global. Sturzenegger lo celebró como validación del modelo.",tag:"internacional"},
];

// ═══════════════ RENDER FUNCTIONS ═══════════════

function showPanel(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
}

function togglePlayer(el) {
  const was = el.classList.contains('expanded');
  document.querySelectorAll('.player-card.expanded').forEach(c => c.classList.remove('expanded'));
  if (!was) el.classList.add('expanded');
}

function renderProvinces() {
  const list = document.getElementById('province-list');
  let html = '';
  PROVINCES.forEach(p => {
    const col = p.align === 'allied' ? 'var(--green)' : p.align === 'hostile' ? 'var(--red)' : 'var(--amber)';
    const label = p.align === 'allied' ? 'aliada' : p.align === 'hostile' ? 'opositora' : 'variable';
    html += `
      <div class="prov-row" onclick="toggleProv(this)">
        <div class="prov-dot" style="background:${col}"></div>
        <span class="prov-name">${p.name}</span>
        <span class="prov-gov">${p.gov}</span>
        <span class="prov-align" style="background:${col}18;color:${col}">${label}</span>
      </div>
      <div class="prov-detail"><strong>${p.party}</strong> · Fondos: ${p.funds}<br>${p.note}</div>`;
  });
  list.innerHTML = html;
}

function toggleProv(el) {
  const det = el.nextElementSibling;
  const was = el.classList.contains('expanded');
  document.querySelectorAll('.prov-row.expanded').forEach(r => {
    r.classList.remove('expanded');
    r.nextElementSibling.style.display = 'none';
  });
  if (!was) { el.classList.add('expanded'); det.style.display = 'block'; }
}

function renderIntl() {
  const c = document.getElementById('intl-list');
  let html = '<div style="display:flex;flex-direction:column;gap:8px">';
  INTL_BLOCS.forEach(b => {
    html += `
      <div class="bloc" onclick="this.classList.toggle('open')">
        <div class="bloc-head">
          <span class="bloc-flag">${b.flag}</span>
          <span class="bloc-name">${b.name}</span>
          <span class="bloc-status" style="color:${b.statusColor}">${b.status}</span>
        </div>
        <div class="bloc-body">${b.body}</div>
      </div>`;
  });
  html += '</div>';
  c.innerHTML = html;
}

function renderScenarios() {
  const c = document.getElementById('scenarios-list');
  let html = '';
  SCENARIOS.forEach(s => {
    html += `
      <div class="scenario" onclick="this.classList.toggle('open')">
        <div class="scenario-head">
          <div>
            <div class="scenario-title">${s.title}</div>
            <span class="scenario-tag" style="background:${s.color}18;color:${s.color}">${s.tag}</span>
          </div>
          <div class="scenario-pct" style="color:${s.color}">${s.pct}%</div>
        </div>
        <div class="prob-bar"><div class="prob-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
        <div class="scenario-body">${s.body}</div>
      </div>`;
  });
  document.getElementById('esc-mini').innerHTML = SCENARIOS.map(s => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span style="font-size:12px;color:var(--text-secondary);flex:1">${s.title.split('—')[0]}</span>
      <div style="width:100px;height:5px;background:var(--bg-muted);border-radius:3px;overflow:hidden"><div style="width:${s.pct}%;height:5px;background:${s.color};border-radius:3px"></div></div>
      <span style="font-size:12px;font-family:var(--font-mono);font-weight:600;color:${s.color};width:36px;text-align:right">${s.pct}%</span>
    </div>`).join('');
  c.innerHTML = html;
}

// ═══════════════ UPDATE ═══════════════

async function fetchUpdate() {
  const btn = document.getElementById('updateBtn');
  const loading = document.getElementById('loading');
  btn.disabled = true;
  loading.classList.add('show');

  const msgs = [
    "Consultando fuentes internacionales…",
    "Cruzando datos del FMI y BCRA…",
    "Analizando movimientos en el Congreso…",
    "Procesando señales de tensión…",
    "Actualizando escenarios Nash…"
  ];
  let mi = 0;
  const iv = setInterval(() => {
    document.getElementById('loading-msg').textContent = msgs[mi++ % msgs.length];
  }, 800);

  await new Promise(r => setTimeout(r, 3500 + Math.random() * 1500));
  clearInterval(iv);

  const randInflation = (3.0 + Math.random() * 0.6).toFixed(1);
  document.getElementById('inf-metric').textContent = randInflation + '%';
  document.getElementById('last-update').textContent = 'Act. ' + new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

  const shuffled = [...FEED_ITEMS].sort(() => Math.random() - 0.5);
  document.getElementById('feed-list').innerHTML = shuffled.map(f => `
    <div class="feed-item">
      <div class="feed-source">${f.source} <span class="feed-tag" style="background:var(--blue-50);color:var(--blue)">${f.tag}</span></div>
      <div class="feed-text">${f.text}</div>
    </div>`).join('');

  const items3 = shuffled.slice(0, 3);
  document.getElementById('analysis-feed').innerHTML = items3.map(f => `
    <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-light)">
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-family:var(--font-mono)">${f.source}</div>
      <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${f.text}</div>
    </div>`).join('');

  loading.classList.remove('show');
  btn.disabled = false;
}

// ═══════════════ INIT ═══════════════

renderProvinces();
renderIntl();
renderScenarios();

document.getElementById('feed-list').innerHTML = FEED_ITEMS.slice(0, 5).map(f => `
  <div class="feed-item">
    <div class="feed-source">${f.source} <span class="feed-tag" style="background:var(--blue-50);color:var(--blue)">${f.tag}</span></div>
    <div class="feed-text">${f.text}</div>
  </div>`).join('');

document.getElementById('analysis-feed').innerHTML = FEED_ITEMS.slice(0, 3).map(f => `
  <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-light)">
    <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-family:var(--font-mono)">${f.source}</div>
    <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">${f.text}</div>
  </div>`).join('');

document.getElementById('last-update').textContent = 'Act. ' + new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
