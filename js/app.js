/**
 * Tablero Nash — Command Center v2.0
 * Centro de Comando Ejecutivo con datos en tiempo real
 */

document.addEventListener('DOMContentLoaded', () => {
  try {
    const app = new NashDashboard();
    app.init();
  } catch (err) {
    console.error('Dashboard init error:', err);
  }
});

class NashDashboard {
  constructor() {
    this.currentSection = 'dashboard';
    this.data = NASH_DATA;
    this.theme = localStorage.getItem('nash-theme') || 'dark';
    this.searchIndex = [];
    this.liveData = LiveDataSource;
    this.refreshInterval = null;
  }

  async init() {
    this.setupNavigation();
    this.setupTheme();
    this.setupSearch();
    this.setupFilters();
    this.setupBackToTop();
    this.setupKeyboardNav();
    this.buildSearchIndex();

    // Render static data (each wrapped to prevent one failure from blocking others)
    const render = (fn) => { try { fn(); } catch(e) { console.error(fn.name, e); } };
    render(() => this.renderMetrics());
    render(() => this.renderNetwork());
    render(() => this.renderAlliances());
    render(() => this.renderScenarios());
    render(() => this.renderCongress());
    render(() => this.renderProvinces());
    render(() => this.renderActors());
    render(() => this.renderShadows());
    render(() => this.renderInternational());
    render(() => this.updateTimestamp());

    // Fetch live data (non-blocking)
    this.fetchLiveData();

    // Auto-refresh every 2 minutes
    this.refreshInterval = setInterval(() => this.fetchLiveData(), 120000);
  }

  // === Live Data ===
  async fetchLiveData() {
    try {
      this.updateFreshnessIndicator('loading');
      await this.liveData.fetchAll();
      this.renderDollarPanel();
      this.renderAlerts();
      this.renderDecisionMatrix();
      this.renderDataFreshness();
      this.updateFreshnessIndicator(this.liveData.getDataFreshness());
    } catch (err) {
      console.warn('Live data fetch failed:', err);
      this.updateFreshnessIndicator('error');
      // Still render with static data
      this.renderAlerts();
      this.renderDecisionMatrix();
    }
  }

  updateFreshnessIndicator(status) {
    const el = document.getElementById('live-status');
    if (!el) return;

    const states = {
      loading: { text: 'Actualizando...', color: 'var(--accent-yellow)', dot: '🟡' },
      fresh: { text: 'En vivo', color: 'var(--accent-green)', dot: '🟢' },
      recent: { text: 'Reciente', color: 'var(--accent-green)', dot: '🟡' },
      aging: { text: 'Desactualizado', color: 'var(--accent-yellow)', dot: '🟠' },
      stale: { text: 'Obsoleto', color: 'var(--accent-red)', dot: '🔴' },
      error: { text: 'Sin conexión', color: 'var(--accent-red)', dot: '🔴' },
    };

    const s = states[status] || states.loading;
    el.innerHTML = `<span class="status-dot" style="background:${s.color}"></span> ${s.text}`;
    el.style.color = s.color;
  }

  // === Dollar Panel ===
  renderDollarPanel() {
    const container = document.getElementById('dollar-panel');
    if (!container) return;

    const { dollar } = this.liveData.liveData;
    const spread = this.liveData.getDollarSpread();

    if (!dollar.oficial.venta && !dollar.blue.venta) {
      container.innerHTML = `
        <div class="dollar-loading">
          <span class="skeleton" style="width:100%;height:60px;display:block"></span>
        </div>
      `;
      return;
    }

    const formatNum = (n) => n ? `$${n.toLocaleString('es-AR')}` : '—';

    const cards = [
      {
        label: 'Dólar Oficial',
        compra: formatNum(dollar.oficial.compra),
        venta: formatNum(dollar.oficial.venta),
        color: 'blue',
        fecha: dollar.oficial.fecha,
      },
      {
        label: 'Dólar Blue',
        compra: formatNum(dollar.blue.compra),
        venta: formatNum(dollar.blue.venta),
        color: 'green',
        fecha: dollar.blue.fecha,
      },
      {
        label: 'Dólar MEP',
        compra: formatNum(dollar.mep.compra),
        venta: formatNum(dollar.mep.venta),
        color: 'purple',
        fecha: dollar.mep.fecha,
      },
      {
        label: 'Dólar CCL',
        compra: formatNum(dollar.ccl.compra),
        venta: formatNum(dollar.ccl.venta),
        color: 'orange',
        fecha: dollar.ccl.fecha,
      },
    ];

    let html = '<div class="dollar-grid">';
    cards.forEach(c => {
      html += `
        <div class="dollar-card" style="border-top: 3px solid var(--accent-${c.color})">
          <div class="dollar-label">${c.label}</div>
          <div class="dollar-rates">
            <div class="dollar-rate">
              <span class="dollar-rate-label">Compra</span>
              <span class="dollar-rate-value">${c.compra}</span>
            </div>
            <div class="dollar-rate">
              <span class="dollar-rate-label">Venta</span>
              <span class="dollar-rate-value">${c.venta}</span>
            </div>
          </div>
        </div>
      `;
    });
    html += '</div>';

    // Spread indicator
    if (spread) {
      const spreadColor = spread.status === 'critical' ? 'red' : spread.status === 'warning' ? 'yellow' : 'green';
      html += `
        <div class="spread-indicator" style="border-left:3px solid var(--accent-${spreadColor})">
          <span class="spread-label">Brecha cambiaria</span>
          <span class="spread-value" style="color:var(--accent-${spreadColor})">${spread.percent}%</span>
          <span class="spread-detail">Blue vs Oficial: ${formatNum(spread.absolute)}</span>
        </div>
      `;
    }

    if (dollar.tarjeta) {
      html += `<div class="tarjeta-note">Dólar tarjeta: ${formatNum(dollar.tarjeta)}</div>`;
    }

    container.innerHTML = html;
  }

  // === Alerts ===
  renderAlerts() {
    const container = document.getElementById('alerts-panel');
    if (!container) return;

    const alerts = this.liveData.getAlerts();

    if (alerts.length === 0) {
      container.innerHTML = '<div class="no-alerts">✅ Sin alertas activas</div>';
      return;
    }

    const levelColors = {
      critical: 'red',
      warning: 'yellow',
      info: 'blue',
    };

    container.innerHTML = alerts.map(a => `
      <div class="alert-card alert-${a.level}" style="border-left:3px solid var(--accent-${levelColors[a.level]})">
        <div class="alert-header">
          <span class="alert-icon">${a.icon}</span>
          <span class="alert-title">${a.title}</span>
        </div>
        <div class="alert-message">${a.message}</div>
        <div class="alert-action">→ ${a.action}</div>
      </div>
    `).join('');
  }

  // === Decision Matrix ===
  renderDecisionMatrix() {
    const container = document.getElementById('decision-matrix');
    if (!container) return;

    const decisions = this.liveData.getDecisionMatrix();

    container.innerHTML = decisions.map(d => {
      const scoreColor = d.score >= 70 ? 'green' : d.score >= 40 ? 'yellow' : 'red';
      return `
        <div class="decision-card">
          <div class="decision-header">
            <span class="decision-scenario">${d.scenario}</span>
            <span class="decision-score" style="color:var(--accent-${scoreColor})">${d.score}/100</span>
          </div>
          <div class="decision-recommendation" style="background:var(--accent-${scoreColor});color:white">
            ${d.recommendation}
          </div>
          <div class="decision-bar">
            <div class="decision-fill" style="width:${d.score}%;background:var(--accent-${scoreColor})"></div>
          </div>
          <div class="decision-factors">
            ${d.factors.map(f => `<span class="factor-tag">${f}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // === Data Freshness ===
  renderDataFreshness() {
    const el = document.getElementById('data-freshness');
    if (!el) return;

    const freshness = this.liveData.getFreshnessLabel();
    const lastFetch = this.liveData.liveData.lastFetch;

    let timeStr = 'Nunca';
    if (lastFetch) {
      const diff = Date.now() - new Date(lastFetch).getTime();
      const minutes = Math.floor(diff / 60000);
      if (minutes < 1) timeStr = 'Hace menos de 1 min';
      else if (minutes < 60) timeStr = `Hace ${minutes} min`;
      else timeStr = `Hace ${Math.floor(minutes / 60)}h ${minutes % 60}min`;
    }

    el.innerHTML = `
      <span>${freshness.icon} Última actualización: ${timeStr}</span>
      <button onclick="document.querySelector('.app').__vue_app__?.fetchLiveData?.()" class="refresh-btn" title="Actualizar ahora">🔄</button>
    `;
  }

  // === Theme ===
  setupTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    if (this.theme === 'light') {
      document.documentElement.classList.add('light-theme');
      toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', () => {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('light-theme');
      toggle.textContent = this.theme === 'light' ? '☀️' : '🌙';
      localStorage.setItem('nash-theme', this.theme);
    });
  }

  // === Navigation ===
  setupNavigation() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        this.switchSection(section);
      });
    });
  }

  switchSection(section) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`)?.classList.add('active');

    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(section);
    if (target) {
      target.classList.add('active');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.currentSection = section;
  }

  // === Search ===
  buildSearchIndex() {
    this.searchIndex = [];

    this.data.actors.forEach(a => {
      this.searchIndex.push({
        type: 'Actor', name: a.name,
        detail: `${a.role} — ${a.party}`,
        section: 'actores',
        keywords: `${a.name} ${a.role} ${a.party} ${a.faction}`.toLowerCase()
      });
    });

    this.data.provinces.forEach(p => {
      this.searchIndex.push({
        type: 'Provincia', name: p.name,
        detail: `${p.governor} (${p.party})`,
        section: 'provincias',
        keywords: `${p.name} ${p.governor} ${p.party} ${p.alliance}`.toLowerCase()
      });
    });

    this.data.scenarios.forEach(s => {
      this.searchIndex.push({
        type: 'Escenario', name: s.name,
        detail: `Prob: ${s.probability}% — Nash: ${s.equilibrium ? 'Sí' : 'No'}`,
        section: 'nash',
        keywords: `${s.name} ${s.description}`.toLowerCase()
      });
    });

    this.data.alliances.forEach(a => {
      this.searchIndex.push({
        type: 'Alianza', name: `${a.a} ↔ ${a.b}`,
        detail: `${a.type === 'solid' ? 'Sólida' : a.type === 'weak' ? 'Débil' : 'Rota'}`,
        section: 'alianzas',
        keywords: `${a.a} ${a.b} ${a.type} ${a.description}`.toLowerCase()
      });
    });

    this.data.shadows.forEach(s => {
      this.searchIndex.push({
        type: 'Sombra', name: s.name,
        detail: `${s.type} — Influencia: ${s.influence}`,
        section: 'sombras',
        keywords: `${s.name} ${s.type} ${s.description}`.toLowerCase()
      });
    });

    this.data.international.forEach(i => {
      this.searchIndex.push({
        type: 'Internacional', name: i.name,
        detail: `${i.type} — Relación: ${i.relation}/100`,
        section: 'internacional',
        keywords: `${i.name} ${i.type} ${i.description}`.toLowerCase()
      });
    });

    // Add dollar data to search
    this.searchIndex.push(
      { type: 'Cotización', name: 'Dólar Oficial', detail: '', section: 'dashboard', keywords: 'dolar oficial cotizacion tipo cambio' },
      { type: 'Cotización', name: 'Dólar Blue', detail: '', section: 'dashboard', keywords: 'dolar blue cotizacion brecha cambiaria' },
      { type: 'Cotización', name: 'Dólar MEP', detail: '', section: 'dashboard', keywords: 'dolar mep bolsa cotizacion' },
      { type: 'Cotización', name: 'Dólar CCL', detail: '', section: 'dashboard', keywords: 'dolar ccl contado con liquidacion' },
      { type: 'Cotización', name: 'Riesgo País', detail: '', section: 'dashboard', keywords: 'riesgo pais jp morgan spread' },
      { type: 'Cotización', name: 'Inflación', detail: '', section: 'dashboard', keywords: 'inflacion ipc precios indec' },
      { type: 'Cotización', name: 'EMAE', detail: '', section: 'dashboard', keywords: 'emae actividad economica pib gdp' },
      { type: 'Cotización', name: 'Pobreza', detail: '', section: 'dashboard', keywords: 'pobreza indigencia ingresos' },
    );
  }

  setupSearch() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    let debounceTimer;

    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 2) { results.hidden = true; return; }

        const matches = this.searchIndex
          .filter(item => item.keywords.includes(query))
          .slice(0, 8);

        if (matches.length === 0) {
          results.innerHTML = '<div class="search-result-item"><span class="result-name" style="color:var(--text-muted)">Sin resultados</span></div>';
          results.hidden = false;
          return;
        }

        results.innerHTML = matches.map(m => `
          <div class="search-result-item" data-section="${m.section}" role="option">
            <div>
              <div class="result-name">${this.highlightMatch(m.name, query)}</div>
              <div style="font-size:0.6875rem;color:var(--text-muted)">${m.detail}</div>
            </div>
            <span class="result-type">${m.type}</span>
          </div>
        `).join('');
        results.hidden = false;

        results.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            this.switchSection(item.dataset.section);
            input.value = '';
            results.hidden = true;
          });
        });
      }, 200);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) results.hidden = true;
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { results.hidden = true; input.blur(); }
      if (e.key === 'Enter') { const first = results.querySelector('.search-result-item'); if (first) first.click(); }
    });
  }

  highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong style="color:var(--accent-blue)">$1</strong>');
  }

  // === Filters ===
  setupFilters() {
    document.querySelectorAll('.filters').forEach(filterGroup => {
      const buttons = filterGroup.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.textContent.trim().toLowerCase();
          const section = btn.closest('.section');
          if (section) this.applyFilter(section.id, filter);
        });
      });
    });
  }

  applyFilter(sectionId, filter) {
    if (sectionId === 'actores') {
      document.querySelectorAll('#actors-grid .actor-card').forEach(card => {
        const faction = card.style.borderLeftColor;
        if (filter === 'todos') card.style.display = '';
        else if (filter === 'gobierno') card.style.display = faction.includes('59, 130, 246') || faction.includes('3b82f6') ? '' : 'none';
        else if (filter === 'oposición') card.style.display = faction.includes('239, 68, 68') || faction.includes('ef4444') ? '' : 'none';
        else if (filter === 'independientes') card.style.display = faction.includes('245, 158, 11') || faction.includes('f59e0b') ? '' : 'none';
      });
    }
    if (sectionId === 'provincias') {
      document.querySelectorAll('#provinces-grid .province-card').forEach(card => {
        const badge = card.querySelector('.province-alliance');
        if (!badge) return;
        const alliance = badge.textContent.trim().toLowerCase();
        if (filter === 'todas') card.style.display = '';
        else if (filter === 'oficialismo') card.style.display = alliance === 'oficialismo' ? '' : 'none';
        else if (filter === 'oposición') card.style.display = alliance === 'oposición' ? '' : 'none';
        else if (filter === 'independientes') card.style.display = alliance === 'independiente' ? '' : 'none';
      });
    }
    if (sectionId === 'alianzas') {
      document.querySelectorAll('#alliance-list-full .alliance-item').forEach(item => {
        const badge = item.querySelector('.alliance-badge');
        if (!badge) return;
        const type = badge.textContent.trim().toLowerCase();
        if (filter === 'todas') item.style.display = '';
        else if (filter === 'sólidas') item.style.display = type === 'sólida' ? '' : 'none';
        else if (filter === 'débiles') item.style.display = type === 'débil' ? '' : 'none';
        else if (filter === 'rotas') item.style.display = type === 'rota' ? '' : 'none';
      });
    }
  }

  // === Back to Top ===
  setupBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // === Keyboard Nav ===
  setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (document.activeElement.tagName === 'INPUT') return;
        const sections = ['dashboard', 'command', 'actores', 'congreso', 'provincias', 'alianzas', 'nash', 'sombras', 'internacional'];
        const currentIndex = sections.indexOf(this.currentSection);
        const newIndex = e.key === 'ArrowRight' ? (currentIndex + 1) % sections.length : (currentIndex - 1 + sections.length) % sections.length;
        this.switchSection(sections[newIndex]);
      }
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }
      if (e.key === 'Escape') document.getElementById('search-results')?.setAttribute('hidden', '');
    });
  }

  // === Metrics ===
  renderMetrics() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;

    const metrics = Object.values(this.data.metrics);
    grid.innerHTML = metrics.map(m => {
      let changeClass;
      if (m.label.includes('Inflación')) changeClass = m.change > 0 ? 'negative' : 'positive';
      else if (m.label.includes('EMAE') || m.label.includes('PIB')) changeClass = m.change > 0 ? 'positive' : 'negative';
      else if (m.label.includes('Riesgo')) changeClass = m.change > 0 ? 'negative' : 'positive';
      else if (m.label.includes('Pobreza')) changeClass = m.change > 0 ? 'negative' : 'positive';
      else changeClass = m.trend === 'down' ? 'positive' : 'negative';

      const changeSign = m.change > 0 ? '+' : '';
      const arrow = m.change > 0 ? '↑' : m.change < 0 ? '↓' : '→';

      return `
        <div class="metric-card" tabindex="0" data-tooltip="${m.detail || ''}">
          <div class="metric-label">${m.label}</div>
          <div class="metric-value" style="color: var(--accent-${m.color})">
            ${typeof m.value === 'number' ? m.value.toLocaleString('es-AR') : m.value}${m.unit}
          </div>
          <div class="metric-change ${changeClass}">
            ${arrow} ${changeSign}${m.change}${m.unit} vs. anterior
          </div>
          <div class="metric-source">${m.source} · ${m.date}</div>
        </div>
      `;
    }).join('');
  }

  // === Network ===
  renderNetwork() {
    const container = document.getElementById('network-graph');
    if (!container) return;

    const width = container.offsetWidth || 400;
    const height = container.offsetHeight || 280;
    const actors = this.data.actors;
    const cx = width / 2, cy = height / 2;
    const radius = Math.min(width, height) * 0.35;

    const positions = {};
    actors.forEach((actor, i) => {
      const angle = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
      positions[actor.id] = { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
    });

    let linesHTML = '';
    actors.forEach(actor => {
      actor.alliances.forEach(targetId => {
        if (positions[targetId]) {
          const from = positions[actor.id], to = positions[targetId];
          const dx = to.x - from.x, dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          linesHTML += `<div class="network-line solid" style="left:${from.x}px;top:${from.y}px;width:${length}px;transform:rotate(${angle}deg)"></div>`;
        }
      });
      actor.enemies?.forEach(targetId => {
        if (positions[targetId]) {
          const from = positions[actor.id], to = positions[targetId];
          const dx = to.x - from.x, dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          linesHTML += `<div class="network-line broken" style="left:${from.x}px;top:${from.y}px;width:${length}px;transform:rotate(${angle}deg)"></div>`;
        }
      });
    });

    let nodesHTML = '';
    actors.forEach(actor => {
      const pos = positions[actor.id];
      const initials = actor.name.split(' ').map(w => w[0]).join('').substring(0, 2);
      nodesHTML += `
        <div class="network-node ${actor.faction}"
             style="left:${pos.x - 24}px;top:${pos.y - 24}px"
             data-tooltip="${actor.name} — ${actor.role} (Utilidad: ${actor.utility})">
          ${initials}
        </div>
      `;
    });

    container.innerHTML = linesHTML + nodesHTML;
  }

  // === Alliances ===
  renderAlliances() {
    const html = this.data.alliances.map(a => `
      <div class="alliance-item">
        <div class="alliance-names">${a.a} <span class="vs">↔</span> ${a.b}</div>
        <span class="alliance-badge ${a.type}">${a.type === 'solid' ? 'Sólida' : a.type === 'weak' ? 'Débil' : 'Rota'}</span>
      </div>
    `).join('');
    const list = document.getElementById('alliance-list');
    if (list) list.innerHTML = html;
    const fullList = document.getElementById('alliance-list-full');
    if (fullList) fullList.innerHTML = html;
  }

  // === Scenarios ===
  renderScenarios() {
    const html = this.data.scenarios.map(s => {
      const playersHTML = s.players.map(p => {
        const payoffClass = p.payoff > 0 ? 'positive' : p.payoff < 0 ? 'negative' : 'neutral';
        return `<div class="scenario-player"><span class="name">${p.name}</span><span class="payoff ${payoffClass}">${p.payoff > 0 ? '+' : ''}${p.payoff}</span></div>`;
      }).join('');
      return `
        <div class="scenario-card" tabindex="0">
          <div class="scenario-header">
            <span class="scenario-name">${s.name}</span>
            <span class="scenario-prob">Prob: ${s.probability}%</span>
          </div>
          <div class="scenario-body">
            <div class="scenario-players">${playersHTML}</div>
            <div class="scenario-equilibrium ${s.equilibrium ? 'yes' : 'no'}">
              Equilibrio Nash: ${s.equilibrium ? '✅ Sí' : '❌ No'}
            </div>
          </div>
          <div class="scenario-footer">${s.description}</div>
        </div>
      `;
    }).join('');
    const grid = document.getElementById('scenarios-grid');
    if (grid) grid.innerHTML = html;
    const fullGrid = document.getElementById('scenarios-grid-full');
    if (fullGrid) fullGrid.innerHTML = html;
  }

  // === Congress ===
  renderCongress() {
    this.renderChamber('deputies', this.data.congress.deputies);
    this.renderChamber('senators', this.data.congress.senators);
  }

  renderChamber(id, chamber) {
    const container = document.getElementById(`${id}-body`);
    if (!container) return;

    const barHTML = chamber.blocks.map(b => {
      const percent = (b.seats / chamber.total * 100).toFixed(1);
      return `<div class="congress-segment" style="flex:${percent};background:${b.color}">${b.seats}</div>`;
    }).join('');

    const legendHTML = chamber.blocks.map(b => `
      <div class="congress-legend-item">
        <div class="congress-dot" style="background:${b.color}"></div>
        ${b.name} (${b.seats})
      </div>
    `).join('');

    container.innerHTML = `
      <div class="congress-bar">${barHTML}</div>
      <div style="font-size:0.6875rem;color:var(--text-muted);margin-bottom:var(--space-3)">
        Total: ${chamber.total} bancas · Mayoría: ${chamber.majority}
      </div>
      <div class="congress-legend">${legendHTML}</div>
    `;
  }

  // === Provinces ===
  renderProvinces() {
    const grid = document.getElementById('provinces-grid');
    if (!grid) return;

    grid.innerHTML = this.data.provinces.map(p => `
      <div class="province-card" style="border-left-color: var(--pol-${p.alliance})">
        <div class="province-name">${p.name}</div>
        <div class="province-governor">${p.governor} (${p.party})</div>
        <span class="province-alliance ${p.alliance}">
          ${p.alliance === 'gobierno' ? 'Oficialismo' : p.alliance === 'oposicion' ? 'Oposición' : 'Independiente'}
        </span>
      </div>
    `).join('');
  }

  // === Actors ===
  renderActors() {
    const grid = document.getElementById('actors-grid');
    if (!grid) return;

    grid.innerHTML = this.data.actors.map(a => {
      const utilityPercent = (a.utility * 100).toFixed(0);
      const utilityColor = a.utility > 0.7 ? 'var(--accent-green)' : a.utility > 0.5 ? 'var(--accent-yellow)' : 'var(--accent-red)';
      const allianceBadges = a.alliances.map(id => {
        const ally = this.data.actors.find(ac => ac.id === id);
        return ally ? `<span class="alliance-badge solid" style="font-size:0.5625rem">${ally.name.split(' ').pop()}</span>` : '';
      }).join('');

      return `
        <div class="actor-card" style="border-left-color: var(--pol-${a.faction})">
          <div class="actor-name">${a.name}</div>
          <div class="actor-role">${a.role} · ${a.party}</div>
          <div class="actor-utility">
            <span>Utilidad</span>
            <span style="font-family:var(--font-mono);color:${utilityColor}">${a.utility}</span>
          </div>
          <div class="utility-bar"><div class="utility-fill" style="width:${utilityPercent}%;background:${utilityColor}"></div></div>
          ${allianceBadges ? `<div class="actor-alliances">${allianceBadges}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  // === Shadows ===
  renderShadows() {
    const grid = document.getElementById('shadows-grid');
    if (!grid) return;

    grid.innerHTML = this.data.shadows.map(s => `
      <div class="shadow-card">
        <div class="shadow-name">${s.name}</div>
        <div class="shadow-type">${s.type}</div>
        <div class="shadow-desc">${s.description}</div>
        <div class="shadow-influence">Influencia: ${s.influence}</div>
      </div>
    `).join('');
  }

  // === International ===
  renderInternational() {
    const grid = document.getElementById('intl-grid');
    if (!grid) return;

    grid.innerHTML = this.data.international.map(i => {
      const relationColor = i.relation > 60 ? 'var(--accent-green)' : i.relation > 40 ? 'var(--accent-yellow)' : 'var(--accent-red)';

      let dataBadges = '';
      if (i.data) {
        if (i.data.gdpGrowth2026) dataBadges += `<span class="intl-badge" style="background:rgba(16,185,129,0.1);color:var(--accent-green);border:1px solid rgba(16,185,129,0.2)">PIB 2026: +${i.data.gdpGrowth2026}%</span>`;
        if (i.data.sp) dataBadges += `<span class="intl-badge" style="background:rgba(245,158,11,0.1);color:var(--accent-yellow);border:1px solid rgba(245,158,11,0.2)">S&P: ${i.data.sp.rating} | Moody's: ${i.data.moodys.rating}</span>`;
        if (i.data.southAmericaGrowth2026) dataBadges += `<span class="intl-badge" style="background:rgba(139,92,246,0.1);color:var(--accent-purple);border:1px solid rgba(139,92,246,0.2)">Sudamérica 2026: +${i.data.southAmericaGrowth2026}%</span>`;
      }

      return `
        <div class="intl-card">
          <div class="intl-name">${i.name}</div>
          <div class="intl-members">${i.type}</div>
          <div class="intl-relation">
            <span style="font-size:0.75rem;color:var(--text-secondary)">Relación</span>
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:${relationColor}">${i.relation}/100</span>
          </div>
          <div class="relation-bar" style="margin-top:var(--space-2)"><div class="relation-fill" style="width:${i.relation}%;background:${relationColor}"></div></div>
          ${dataBadges ? `<div style="display:flex;flex-wrap:wrap;gap:var(--space-1);margin-top:var(--space-3)">${dataBadges}</div>` : ''}
          <div style="margin-top:var(--space-3);font-size:0.6875rem;color:var(--text-muted)">${i.description}</div>
          <div style="margin-top:var(--space-2);font-size:0.5625rem;color:var(--text-muted)">Fuente: ${i.source} · ${i.lastUpdate}</div>
        </div>
      `;
    }).join('');
  }

  // === Timestamp ===
  updateTimestamp() {
    const el = document.getElementById('update-time');
    if (el) {
      const [y, m, d] = this.data.meta.lastUpdate.split('-');
      el.textContent = `${d}/${m}/${y}`;
      el.setAttribute('datetime', this.data.meta.lastUpdate);
    }
  }
}
