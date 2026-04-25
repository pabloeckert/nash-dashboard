/**
 * Tablero Nash — Application Logic v1.1
 * Dashboard interactivo de análisis político argentino
 * Mejoras: búsqueda, tema claro/oscuro, filtros, teclado, back-to-top
 */

document.addEventListener('DOMContentLoaded', () => {
  const app = new NashDashboard();
  app.init();
});

class NashDashboard {
  constructor() {
    this.currentSection = 'dashboard';
    this.data = NASH_DATA;
    this.theme = localStorage.getItem('nash-theme') || 'dark';
    this.searchIndex = [];
  }

  init() {
    this.setupNavigation();
    this.setupTheme();
    this.setupSearch();
    this.setupFilters();
    this.setupBackToTop();
    this.setupKeyboardNav();
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
    this.buildSearchIndex();
  }

  // === Theme ===
  setupTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Apply saved theme
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

    // Actors
    this.data.actors.forEach(a => {
      this.searchIndex.push({
        type: 'Actor',
        name: a.name,
        detail: `${a.role} — ${a.party}`,
        section: 'actores',
        keywords: `${a.name} ${a.role} ${a.party} ${a.faction}`.toLowerCase()
      });
    });

    // Provinces
    this.data.provinces.forEach(p => {
      this.searchIndex.push({
        type: 'Provincia',
        name: p.name,
        detail: `${p.governor} (${p.party})`,
        section: 'provincias',
        keywords: `${p.name} ${p.governor} ${p.party} ${p.alliance}`.toLowerCase()
      });
    });

    // Scenarios
    this.data.scenarios.forEach(s => {
      this.searchIndex.push({
        type: 'Escenario',
        name: s.name,
        detail: `Prob: ${s.probability}% — Nash: ${s.equilibrium ? 'Sí' : 'No'}`,
        section: 'nash',
        keywords: `${s.name} ${s.description}`.toLowerCase()
      });
    });

    // Alliances
    this.data.alliances.forEach(a => {
      this.searchIndex.push({
        type: 'Alianza',
        name: `${a.a} ↔ ${a.b}`,
        detail: `${a.type === 'solid' ? 'Sólida' : a.type === 'weak' ? 'Débil' : 'Rota'} — ${a.description}`,
        section: 'alianzas',
        keywords: `${a.a} ${a.b} ${a.type} ${a.description}`.toLowerCase()
      });
    });

    // Shadows
    this.data.shadows.forEach(s => {
      this.searchIndex.push({
        type: 'Sombra',
        name: s.name,
        detail: `${s.type} — Influencia: ${s.influence}`,
        section: 'sombras',
        keywords: `${s.name} ${s.type} ${s.description}`.toLowerCase()
      });
    });

    // International
    this.data.international.forEach(i => {
      this.searchIndex.push({
        type: 'Internacional',
        name: i.name,
        detail: `${i.type} — Relación: ${i.relation}/100`,
        section: 'internacional',
        keywords: `${i.name} ${i.type} ${i.description}`.toLowerCase()
      });
    });
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
        if (query.length < 2) {
          results.hidden = true;
          return;
        }

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

        // Click handlers
        results.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            this.switchSection(item.dataset.section);
            input.value = '';
            results.hidden = true;
          });
        });
      }, 200);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        results.hidden = true;
      }
    });

    // Keyboard navigation in search
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        results.hidden = true;
        input.blur();
      }
      if (e.key === 'Enter') {
        const first = results.querySelector('.search-result-item');
        if (first) first.click();
      }
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
          if (!section) return;

          this.applyFilter(section.id, filter);
        });
      });
    });
  }

  applyFilter(sectionId, filter) {
    if (sectionId === 'actores') {
      const cards = document.querySelectorAll('#actors-grid .actor-card');
      cards.forEach(card => {
        const faction = card.style.borderLeftColor;
        if (filter === 'todos') {
          card.style.display = '';
        } else if (filter === 'gobierno') {
          card.style.display = faction.includes('59, 130, 246') || faction.includes('3b82f6') ? '' : 'none';
        } else if (filter === 'oposición') {
          card.style.display = faction.includes('239, 68, 68') || faction.includes('ef4444') ? '' : 'none';
        } else if (filter === 'independientes') {
          card.style.display = faction.includes('245, 158, 11') || faction.includes('f59e0b') ? '' : 'none';
        }
      });
    }

    if (sectionId === 'provincias') {
      const cards = document.querySelectorAll('#provinces-grid .province-card');
      cards.forEach(card => {
        const badge = card.querySelector('.province-alliance');
        if (!badge) return;
        const alliance = badge.textContent.trim().toLowerCase();
        if (filter === 'todas') {
          card.style.display = '';
        } else if (filter === 'oficialismo') {
          card.style.display = alliance === 'oficialismo' ? '' : 'none';
        } else if (filter === 'oposición') {
          card.style.display = alliance === 'oposición' ? '' : 'none';
        } else if (filter === 'independientes') {
          card.style.display = alliance === 'independiente' ? '' : 'none';
        }
      });
    }

    if (sectionId === 'alianzas') {
      const items = document.querySelectorAll('#alliance-list-full .alliance-item');
      items.forEach(item => {
        const badge = item.querySelector('.alliance-badge');
        if (!badge) return;
        const type = badge.textContent.trim().toLowerCase();
        if (filter === 'todas') {
          item.style.display = '';
        } else if (filter === 'sólidas') {
          item.style.display = type === 'sólida' ? '' : 'none';
        } else if (filter === 'débiles') {
          item.style.display = type === 'débil' ? '' : 'none';
        } else if (filter === 'rotas') {
          item.style.display = type === 'rota' ? '' : 'none';
        }
      });
    }
  }

  // === Back to Top ===
  setupBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Volver arriba');
    btn.title = 'Volver arriba';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === Keyboard Navigation ===
  setupKeyboardNav() {
    // Show hint on first Tab press
    let hintShown = false;
    const hint = document.createElement('div');
    hint.className = 'keyboard-nav-hint';
    hint.textContent = 'Navegá con ← → entre secciones';
    document.body.appendChild(hint);

    document.addEventListener('keydown', (e) => {
      // Arrow keys for section navigation
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (document.activeElement.tagName === 'INPUT') return;

        const sections = ['dashboard', 'actores', 'congreso', 'provincias', 'alianzas', 'nash', 'sombras', 'internacional'];
        const currentIndex = sections.indexOf(this.currentSection);

        let newIndex;
        if (e.key === 'ArrowRight') {
          newIndex = (currentIndex + 1) % sections.length;
        } else {
          newIndex = (currentIndex - 1 + sections.length) % sections.length;
        }

        this.switchSection(sections[newIndex]);

        if (!hintShown) {
          hint.classList.add('visible');
          setTimeout(() => hint.classList.remove('visible'), 3000);
          hintShown = true;
        }
      }

      // Ctrl+K or / to focus search
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }

      // Escape to close search
      if (e.key === 'Escape') {
        document.getElementById('search-results')?.setAttribute('hidden', '');
      }
    });
  }

  // === Metrics ===
  renderMetrics() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;

    const metrics = Object.values(this.data.metrics);
    grid.innerHTML = metrics.map(m => {
      // For inflation: up = bad (red), down = good (green)
      // For GDP/EMAE: up = good (green), down = bad (red)
      // For risk: down = good (green), up = bad (red)
      // For poverty: down = good (green), up = bad (red)
      let changeClass;
      if (m.label.includes('Inflación')) {
        changeClass = m.change > 0 ? 'negative' : 'positive';
      } else if (m.label.includes('EMAE') || m.label.includes('PIB')) {
        changeClass = m.change > 0 ? 'positive' : 'negative';
      } else if (m.label.includes('Riesgo')) {
        changeClass = m.change > 0 ? 'negative' : 'positive';
      } else if (m.label.includes('Pobreza')) {
        changeClass = m.change > 0 ? 'negative' : 'positive';
      } else {
        changeClass = m.trend === 'down' ? 'positive' : 'negative';
      }

      const changeSign = m.change > 0 ? '+' : '';
      const arrow = m.change > 0 ? '↑' : m.change < 0 ? '↓' : '→';

      return `
        <div class="metric-card" tabindex="0" aria-label="${m.label}: ${m.value}${m.unit}" data-tooltip="${m.detail || ''}">
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
    const html = this.data.alliances.map(a => `
      <div class="alliance-item">
        <div class="alliance-names">
          ${a.a} <span class="vs">↔</span> ${a.b}
        </div>
        <span class="alliance-badge ${a.type}">${a.type === 'solid' ? 'Sólida' : a.type === 'weak' ? 'Débil' : 'Rota'}</span>
      </div>
    `).join('');

    const list = document.getElementById('alliance-list');
    if (list) list.innerHTML = html;

    const fullList = document.getElementById('alliance-list-full');
    if (fullList) fullList.innerHTML = html;
  }

  // === Scenarios Nash ===
  renderScenarios() {
    const html = this.data.scenarios.map(s => {
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
    el.setAttribute('datetime', this.data.meta.lastUpdate);
    if (el) {
      const [y, m, d] = this.data.meta.lastUpdate.split('-');
      el.textContent = `${d}/${m}/${y}`;
    }
  }
}
