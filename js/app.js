/**
 * Tablero Nash — Application Logic
 * Dashboard interactivo de análisis político argentino
 */

document.addEventListener('DOMContentLoaded', () => {
  const app = new NashDashboard();
  app.init();
});

class NashDashboard {
  constructor() {
    this.currentSection = 'dashboard';
    this.data = NASH_DATA;
  }

  init() {
    this.setupNavigation();
    this.renderMetrics();
    this.renderNetwork();
    this.renderAlliances();
    this.renderScenarios();
    this.renderCongress();
    this.renderProvinces();
    this.renderActors();
    this.renderShadows();
    this.renderInternational();
    this.updateTimestamp();
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
    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`)?.classList.add('active');

    // Update sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(section)?.classList.add('active');

    this.currentSection = section;
  }

  // === Metrics ===
  renderMetrics() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;

    const metrics = Object.values(this.data.metrics);
    grid.innerHTML = metrics.map(m => {
      const changeClass = m.trend === 'down' && m.color === 'red' ? 'positive' :
                          m.trend === 'up' && m.color === 'green' ? 'positive' :
                          m.trend === 'down' ? 'positive' : 'negative';
      const changeSign = m.change > 0 ? '+' : '';
      const arrow = m.change > 0 ? '↑' : m.change < 0 ? '↓' : '→';

      return `
        <div class="metric-card">
          <div class="metric-label">${m.label}</div>
          <div class="metric-value" style="color: var(--accent-${m.color})">
            ${typeof m.value === 'number' ? m.value.toLocaleString('es-AR') : m.value}${m.unit}
          </div>
          <div class="metric-change ${changeClass}">
            ${arrow} ${changeSign}${m.change}${m.unit} vs. período anterior
          </div>
          <div class="metric-source">Fuente: ${m.source} · ${m.date}</div>
        </div>
      `;
    }).join('');
  }

  // === Network Graph (Actores) ===
  renderNetwork() {
    const container = document.getElementById('network-graph');
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const actors = this.data.actors;

    // Position nodes in a circle
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.35;

    const positions = {};
    actors.forEach((actor, i) => {
      const angle = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
      positions[actor.id] = {
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle)
      };
    });

    // Draw lines first
    let linesHTML = '';
    actors.forEach(actor => {
      actor.alliances.forEach(targetId => {
        if (positions[targetId]) {
          const from = positions[actor.id];
          const to = positions[targetId];
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          linesHTML += `<div class="network-line solid" style="left:${from.x}px;top:${from.y}px;width:${length}px;transform:rotate(${angle}deg)"></div>`;
        }
      });
      actor.enemies.forEach(targetId => {
        if (positions[targetId]) {
          const from = positions[actor.id];
          const to = positions[targetId];
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          linesHTML += `<div class="network-line broken" style="left:${from.x}px;top:${from.y}px;width:${length}px;transform:rotate(${angle}deg)"></div>`;
        }
      });
    });

    // Draw nodes
    let nodesHTML = '';
    actors.forEach(actor => {
      const pos = positions[actor.id];
      const initials = actor.name.split(' ').map(w => w[0]).join('').substring(0, 2);
      nodesHTML += `
        <div class="network-node ${actor.faction}"
             style="left:${pos.x - 24}px;top:${pos.y - 24}px"
             data-tooltip="${actor.name} — ${actor.role} (Utilidad: ${actor.utility})"
             title="${actor.name} — ${actor.role}">
          ${initials}
        </div>
      `;
    });

    container.innerHTML = linesHTML + nodesHTML;
  }

  // === Alliances ===
  renderAlliances() {
    const list = document.getElementById('alliance-list');
    if (!list) return;

    list.innerHTML = this.data.alliances.map(a => `
      <div class="alliance-item">
        <div class="alliance-names">
          ${a.a} <span class="vs">↔</span> ${a.b}
        </div>
        <span class="alliance-badge ${a.type}">${a.type === 'solid' ? 'Sólida' : a.type === 'weak' ? 'Débil' : 'Rota'}</span>
      </div>
    `).join('');
  }

  // === Scenarios Nash ===
  renderScenarios() {
    const grid = document.getElementById('scenarios-grid');
    if (!grid) return;

    grid.innerHTML = this.data.scenarios.map(s => {
      const playersHTML = s.players.map(p => {
        const payoffClass = p.payoff > 0 ? 'positive' : p.payoff < 0 ? 'negative' : 'neutral';
        return `
          <div class="scenario-player">
            <span class="name">${p.name}</span>
            <span class="payoff ${payoffClass}">${p.payoff > 0 ? '+' : ''}${p.payoff}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="scenario-card">
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

  // === Actors Grid ===
  renderActors() {
    const grid = document.getElementById('actors-grid');
    if (!grid) return;

    grid.innerHTML = this.data.actors.map(a => {
      const utilityPercent = (a.utility * 100).toFixed(0);
      const utilityColor = a.utility > 0.7 ? 'var(--accent-green)' :
                           a.utility > 0.5 ? 'var(--accent-yellow)' : 'var(--accent-red)';

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
          <div class="utility-bar">
            <div class="utility-fill" style="width:${utilityPercent}%;background:${utilityColor}"></div>
          </div>
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
      const relationColor = i.relation > 60 ? 'var(--accent-green)' :
                            i.relation > 40 ? 'var(--accent-yellow)' : 'var(--accent-red)';

      return `
        <div class="intl-card">
          <div class="intl-name">${i.name}</div>
          <div class="intl-members">${i.type}</div>
          <div class="intl-relation">
            <span style="font-size:0.75rem;color:var(--text-secondary)">Relación</span>
            <span style="font-family:var(--font-mono);font-size:0.75rem;color:${relationColor}">${i.relation}/100</span>
          </div>
          <div class="relation-bar" style="margin-top:var(--space-2)">
            <div class="relation-fill" style="width:${i.relation}%;background:${relationColor}"></div>
          </div>
          <div style="margin-top:var(--space-3);font-size:0.6875rem;color:var(--text-muted)">${i.description}</div>
        </div>
      `;
    }).join('');
  }

  // === Timestamp ===
  updateTimestamp() {
    const el = document.getElementById('update-time');
    if (el) {
      el.textContent = this.data.meta.lastUpdate;
    }
  }
}
