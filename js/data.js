/**
 * Tablero Nash — Datos del Dashboard
 * Última actualización: 2026-04-25
 *
 * Fuentes cruzadas:
 * - INDEC (ipc, pobreza, EMAE): indec.gob.ar
 * - BCRA (riesgo país, política monetaria): bcra.gob.ar
 * - JP Morgan (riesgo país): perfil.com, sintesisargentina
 * - Honorable Senado de la Nación (composición): senado.gob.ar
 * - Honorable Cámara de Diputados (composición): diputados.gov.ar
 * - Directorio Legislativo (análisis post-elecciones 2025)
 * - Ministerio de Capital Humano (pobreza)
 * - Infobae (EMAE, actividad económica)
 */

const NASH_DATA = {
  meta: {
    version: '1.1.0',
    lastUpdate: '2026-04-25',
    dataDate: '2026-04-25',
    sources: {
      inflation: 'INDEC — IPC Marzo 2026 (publicado abril 2026)',
      gdp: 'INDEC — EMAE Febrero 2026 (publicado abril 2026)',
      risk: 'JP Morgan vía Perfil.com — 22 abril 2026',
      poverty: 'INDEC/Ministerio de Capital Humano — EPH T3 2025 (publicado feb 2026)',
      congress: 'Senado.gob.ar + Diputados.gob.ar — composición post-elecciones oct 2025',
      provinces: 'Directorio Legislativo + medios provinciales'
    },
    notes: [
      'Inflación: mensual marzo 3.4%, acumulada año ~9.3%',
      'Riesgo País: 535 pbs al 22/04/2026, alta volatilidad',
      'Pobreza: último dato oficial INDEC semestral = 31.6% (H1 2025). Estimación ministerio T3 2025 = 26.9%',
      'EMAE: -2.6% interanual febrero 2026',
      'Congreso: post-elecciones legislativas oct 2025, nuevos legisladores asumieron dic 2025'
    ]
  },

  // === Métricas económicas (DATOS REALES) ===
  metrics: {
    inflation: {
      label: 'Inflación (mensual)',
      value: 3.4,
      previous: 2.9,  // febrero 2026
      unit: '%',
      change: 0.5,
      trend: 'up', // subió respecto a febrero
      source: 'INDEC',
      date: '2026-03',
      color: 'red',
      detail: 'IPC marzo 2026. Acumulada año: ~9.3%. Interanual estimada: ~42%.'
    },
    gdp: {
      label: 'EMAE (var. interanual)',
      value: -2.6,
      previous: -2.1,  // estimación anterior
      unit: '%',
      change: -0.5,
      trend: 'down',
      source: 'INDEC',
      date: '2026-02',
      color: 'red',
      detail: 'Estimador Mensual de Actividad Económica, febrero 2026. Caída interanual de 2.6%.'
    },
    risk: {
      label: 'Riesgo País',
      value: 535,
      previous: 551,  // sept 2025
      unit: 'pbs',
      change: -16,
      trend: 'down',
      source: 'JP Morgan',
      date: '2026-04-22',
      color: 'yellow',
      detail: '535 puntos básicos al 22/04/2026. Alta volatilidad reciente (rango: 534-600).'
    },
    poverty: {
      label: 'Pobreza',
      value: 26.9,
      previous: 31.6,  // H1 2025
      unit: '%',
      change: -4.7,
      trend: 'down',
      source: 'INDEC / MCH',
      date: '2025-T3',
      color: 'green',
      detail: 'Tercer trimestre 2025 (estimación Ministerio de Capital Humano). Último dato oficial INDEC semestral: 31.6% (H1 2025). Pico: 54.8% T1 2024.'
    }
  },

  // === Actores políticos internos (actualizado abril 2026) ===
  actors: [
    { id: 'A1', name: 'Javier Milei', role: 'Presidente', party: 'La Libertad Avanza', utility: 0.78, faction: 'gobierno', alliances: ['A3', 'A5'], enemies: ['A2', 'A4'] },
    { id: 'A2', name: 'Cristina Kirchner', role: 'Senadora / Ex VP', party: 'Fuerza Patria', utility: 0.35, faction: 'oposicion', alliances: ['A4', 'A6'], enemies: ['A1', 'A3'] },
    { id: 'A3', name: 'Mauricio Macri', role: 'Ex presidente / Dir. PRO', party: 'PRO', utility: 0.72, faction: 'gobierno', alliances: ['A1', 'A5'], enemies: ['A2'] },
    { id: 'A4', name: 'Axel Kicillof', role: 'Gobernador Bs.As.', party: 'Fuerza Patria', utility: 0.58, faction: 'oposicion', alliances: ['A2'], enemies: ['A1'] },
    { id: 'A5', name: 'Patricia Bullrich', role: 'Ministra Seguridad / Senadora', party: 'PRO / LLA', utility: 0.80, faction: 'gobierno', alliances: ['A1', 'A3'], enemies: ['A2'] },
    { id: 'A6', name: 'Sergio Massa', role: 'Ex candidato presidente', party: 'Fuerza Patria', utility: 0.30, faction: 'oposicion', alliances: ['A2'], enemies: ['A1'] },
    { id: 'A7', name: 'Gerardo Morales', role: 'Senador / Ex gobernador Jujuy', party: 'UCR', utility: 0.55, faction: 'independiente', alliances: ['A3'], enemies: [] },
    { id: 'A8', name: 'Martín Llaryora', role: 'Gobernador Córdoba', party: 'Provincias Unidas', utility: 0.62, faction: 'independiente', alliances: [], enemies: [] },
    { id: 'A9', name: 'Maximiliano Pullaro', role: 'Gobernador Santa Fe', party: 'UCR', utility: 0.60, faction: 'independiente', alliances: ['A7'], enemies: [] },
    { id: 'A10', name: 'Santiago Cafiero', role: 'Diputado', party: 'Fuerza Patria', utility: 0.42, faction: 'oposicion', alliances: ['A2', 'A6'], enemies: ['A1'] }
  ],

  // === Congreso (post-elecciones legislativas oct 2025, asumidos dic 2025) ===
  // Fuente: senado.gob.ar (listado por bloques) + diputados.gov.ar + directoriolegislativo.org
  congress: {
    deputies: {
      total: 257,
      majority: 129,
      blocks: [
        { name: 'La Libertad Avanza', seats: 64, color: '#8b5cf6', note: 'Segunda minoría, crecimiento post-elecciones 2025' },
        { name: 'Fuerza Patria (UxP)', seats: 82, color: '#3b82f6', note: 'Primera minoría, incluye ex-FdT' },
        { name: 'PRO', seats: 29, color: '#f59e0b', note: 'Aliado del oficialismo' },
        { name: 'UCR', seats: 22, color: '#ef4444', note: 'Tercera fuerza' },
        { name: 'Provincias Unidas', seats: 7, color: '#10b981', note: 'Bloque provincial surgido en 2025' },
        { name: 'FIT-U', seats: 4, color: '#ec4899', note: 'Frente de Izquierda' },
        { name: 'Otros / Independientes', seats: 49, color: '#6b7280', note: 'Bloques provinciales y menores' }
      ]
    },
    senators: {
      total: 72,
      majority: 37,
      blocks: [
        { name: 'Justicialista', seats: 21, color: '#3b82f6', note: 'Principal bloque opositor' },
        { name: 'La Libertad Avanza', seats: 21, color: '#8b5cf6', note: 'Fuerte crecimiento (era 6 pre-2025)' },
        { name: 'UCR', seats: 10, color: '#ef4444', note: 'Tercera fuerza' },
        { name: 'Frente Pro', seats: 3, color: '#f59e0b', note: 'Aliado oficialismo' },
        { name: 'Convicción Federal', seats: 3, color: '#06b6d4' },
        { name: 'Frente Cívico Santiago', seats: 2, color: '#84cc16' },
        { name: 'Frente Renovador Concordia', seats: 2, color: '#f97316' },
        { name: 'Movere Santa Cruz', seats: 2, color: '#14b8a6' },
        { name: 'Provincias Unidas', seats: 2, color: '#a855f7' },
        { name: 'Justicia Social Federal', seats: 2, color: '#64748b' },
        { name: 'Otros', seats: 4, color: '#9ca3af', note: 'Independencia, La Neuquinidad, Primero los Salteños, Despierta Chubut' }
      ]
    }
  },

  // === Provincias (gobernadores actuales abril 2026) ===
  provinces: [
    { id: 'BA', name: 'Buenos Aires', governor: 'Axel Kicillof', party: 'Fuerza Patria', alliance: 'oposicion', population: '17.5M' },
    { id: 'CF', name: 'CABA', governor: 'Jorge Macri', party: 'PRO', alliance: 'gobierno', population: '3.1M' },
    { id: 'CC', name: 'Catamarca', governor: 'Raúl Jalil', party: 'Fuerza Patria', alliance: 'oposicion', population: '430K' },
    { id: 'CH', name: 'Chaco', governor: 'Leandro Zdero', party: 'UCR', alliance: 'independiente', population: '1.2M' },
    { id: 'CT', name: 'Chubut', governor: 'Ignacio Torres', party: 'PRO', alliance: 'gobierno', population: '620K' },
    { id: 'ER', name: 'Entre Ríos', governor: 'Rogelio Frigerio', party: 'PRO', alliance: 'gobierno', population: '1.4M' },
    { id: 'FO', name: 'Formosa', governor: 'Gildo Insfrán', party: 'Fuerza Patria', alliance: 'oposicion', population: '600K' },
    { id: 'JY', name: 'Jujuy', governor: 'Carlos Sadir', party: 'PRO', alliance: 'gobierno', population: '800K' },
    { id: 'LP', name: 'La Pampa', governor: 'Sergio Ziliotto', party: 'Fuerza Patria', alliance: 'oposicion', population: '400K' },
    { id: 'LR', name: 'La Rioja', governor: 'Quintela', party: 'Fuerza Patria', alliance: 'oposicion', population: '390K' },
    { id: 'MZ', name: 'Mendoza', governor: 'Alfredo Cornejo', party: 'UCR', alliance: 'independiente', population: '2.1M' },
    { id: 'MI', name: 'Misiones', governor: 'Hugo Passalacqua', party: 'Fuerza Patria', alliance: 'oposicion', population: '1.3M' },
    { id: 'NQ', name: 'Neuquén', governor: 'Rolando Figueroa', party: 'MPN', alliance: 'independiente', population: '720K' },
    { id: 'RN', name: 'Río Negro', governor: 'Alberto Weretilleck', party: 'JSRN', alliance: 'independiente', population: '750K' },
    { id: 'SA', name: 'Salta', governor: 'Gustavo Sáenz', party: 'Frente Salteño', alliance: 'independiente', population: '1.5M' },
    { id: 'SJ', name: 'San Juan', governor: 'Marcelo Orrego', party: 'Fuerza Patria', alliance: 'oposicion', population: '800K' },
    { id: 'SL', name: 'San Luis', governor: 'Claudio Poggi', party: 'PRO', alliance: 'gobierno', population: '530K' },
    { id: 'SC', name: 'Santa Cruz', governor: 'Claudio Vidal', party: 'Fuerza Patria', alliance: 'oposicion', population: '390K' },
    { id: 'SF', name: 'Santa Fe', governor: 'Maximiliano Pullaro', party: 'UCR', alliance: 'independiente', population: '3.5M' },
    { id: 'SE', name: 'Santiago del Estero', governor: 'Gerardo Zamora', party: 'FCSdE', alliance: 'independiente', population: '1.1M' },
    { id: 'TF', name: 'Tierra del Fuego', governor: 'Gustavo Melella', party: 'Fuerza Patria', alliance: 'oposicion', population: '190K' },
    { id: 'TU', name: 'Tucumán', governor: 'Osvaldo Jaldo', party: 'Fuerza Patria', alliance: 'oposicion', population: '1.8M' },
    { id: 'CB', name: 'Córdoba', governor: 'Martín Llaryora', party: 'Provincias Unidas', alliance: 'independiente', population: '3.8M' },
    { id: 'COR', name: 'Corrientes', governor: 'Gustavo Valdés', party: 'UCR', alliance: 'independiente', population: '1.2M' }
  ],

  // === Escenarios Nash ===
  scenarios: [
    {
      id: 'S1',
      name: 'Acuerdo Fiscal con Gobernadores',
      probability: 35,
      equilibrium: true,
      players: [
        { name: 'Gobierno Nacional', payoff: 3 },
        { name: 'Gobernadores', payoff: 2 },
        { name: 'Mercados', payoff: 5 }
      ],
      description: 'Acuerdo de reducción del déficit fiscal con apoyo de gobernadores. Equilibrio inestable: requiere transferencias compensatorias.',
      matrix: {
        headers: ['Colaborar', 'No colaborar'],
        rows: [
          [{ gov: 3, gob: 2 }, { gov: 1, gob: 4 }],
          [{ gov: 4, gob: 1 }, { gov: 0, gob: 0 }]
        ]
      }
    },
    {
      id: 'S2',
      name: 'Reforma Previsional',
      probability: 20,
      equilibrium: false,
      players: [
        { name: 'Gobierno Nacional', payoff: 4 },
        { name: 'Oposición', payoff: -2 },
        { name: 'Jubilados', payoff: -3 }
      ],
      description: 'Reforma del sistema previsional. Sin equilibrio: oposición tiene incentivo a bloquear, gobierno a forzar.',
      matrix: {
        headers: ['Aprobar', 'Bloquear'],
        rows: [
          [{ gov: 4, op: -1 }, { gov: -2, op: 2 }],
          [{ gov: 2, op: -2 }, { gov: -1, op: -1 }]
        ]
      }
    },
    {
      id: 'S3',
      name: 'Pacto con Gobernadores Peronistas',
      probability: 25,
      equilibrium: true,
      players: [
        { name: 'Gobierno Nacional', payoff: 2 },
        { name: 'Gobernadores PJ', payoff: 3 }
      ],
      description: 'Acuerdo bilateral: reformas a cambio de recursos. Equilibrio estable con incentivos alineados.',
      matrix: {
        headers: ['Cooperar', 'Defectar'],
        rows: [
          [{ gov: 2, pj: 3 }, { gov: -1, pj: 1 }],
          [{ gov: 1, pj: -1 }, { gov: 0, pj: 0 }]
        ]
      }
    },
    {
      id: 'S4',
      name: 'Ley Ómnibus 2.0',
      probability: 40,
      equilibrium: true,
      players: [
        { name: 'Gobierno Nacional', payoff: 3 },
        { name: 'Congreso', payoff: 2 },
        { name: 'Mercados', payoff: 4 }
      ],
      description: 'Paquete legislativo con negociaciones. Equilibrio alcanzado tras concesiones sectoriales.',
      matrix: {
        headers: ['Aprobar', 'Rechazar'],
        rows: [
          [{ gov: 3, con: 2, mer: 4 }, { gov: -2, con: 0, mer: -3 }],
          [{ gov: 1, con: -1, mer: 1 }, { gov: -1, con: -1, mer: -1 }]
        ]
      }
    },
    {
      id: 'S5',
      name: 'Devaluación Controlada',
      probability: 30,
      equilibrium: true,
      players: [
        { name: 'BCRA', payoff: 2 },
        { name: 'Exportadores', payoff: 4 },
        { name: 'Consumidores', payoff: -3 }
      ],
      description: 'Ajuste del tipo de cambio oficial. Equilibrio: exportadores ganan, consumidores pierden, BCRA gana reservas.',
      matrix: {
        headers: ['Devaluar', 'Mantener'],
        rows: [
          [{ bcra: 2, exp: 4, con: -3 }, { bcra: -1, exp: -1, con: 0 }],
          [{ bcra: 1, exp: 2, con: -2 }, { bcra: 0, exp: 0, con: 0 }]
        ]
      }
    },
    {
      id: 'S6',
      name: 'Acuerdo con FMI',
      probability: 50,
      equilibrium: true,
      players: [
        { name: 'Gobierno Nacional', payoff: 3 },
        { name: 'FMI', payoff: 3 }
      ],
      description: 'Renegociación del acuerdo stand-by. Equilibrio: ambos actores cooperan porque el default es peor para los dos.',
      matrix: {
        headers: ['Cumplir', 'Incumplir'],
        rows: [
          [{ gov: 3, fmi: 3 }, { gov: -5, fmi: -2 }],
          [{ gov: -2, fmi: -5 }, { gov: -8, fmi: -8 }]
        ]
      }
    }
  ],

  // === Alianzas (abril 2026) ===
  alliances: [
    { a: 'Javier Milei', b: 'Mauricio Macri', type: 'solid', since: '2024', description: 'Coalición de gobierno LLA-PRO. Base legislativa conjunta.' },
    { a: 'Javier Milei', b: 'Patricia Bullrich', type: 'solid', since: '2024', description: 'Bullrich pasó de PRO a LLA. Ministra de Seguridad y senadora.' },
    { a: 'Mauricio Macri', b: 'Patricia Bullrich', type: 'solid', since: '2015', description: 'PRO — liderazgo compartido, ahora en coalición con LLA.' },
    { a: 'Cristina Kirchner', b: 'Axel Kicillof', type: 'solid', since: '2019', description: 'Fuerza Patria — Buenos Aires. CFK senadora, Kicillof gobernador.' },
    { a: 'Cristina Kirchner', b: 'Sergio Massa', type: 'solid', since: '2023', description: 'Fuerza Patria — unidad opositora post-elecciones 2023.' },
    { a: 'Cristina Kirchner', b: 'Santiago Cafiero', type: 'solid', since: '2019', description: 'Fuerza Patria — dirigencia partidaria.' },
    { a: 'Gerardo Morales', b: 'Mauricio Macri', type: 'weak', since: '2023', description: 'UCR-PRO tensión por reformas y autonomía radical.' },
    { a: 'Martín Llaryora', b: 'Axel Kicillof', type: 'weak', since: '2025', description: 'Provincias Unidas — acuerdo fiscal provincial sin alianza formal.' },
    { a: 'Maximiliano Pullaro', b: 'Gerardo Morales', type: 'weak', since: '2025', description: 'UCR — liderazgos provinciales con visiones distintas.' },
    { a: 'Sergio Massa', b: 'Javier Milei', type: 'broken', since: '2023', description: 'Ex oponentes presidenciales. Sin diálogo.' },
    { a: 'Cristina Kirchner', b: 'Javier Milei', type: 'broken', since: '2024', description: 'Oposición frontal. CFK critica duramente al gobierno.' },
    { a: 'Sergio Massa', b: 'Cristina Kirchner', type: 'weak', since: '2024', description: 'Tensión interna en Fuerza Patria por liderazgo.' }
  ],

  // === Actores en la sombra ===
  shadows: [
    { name: 'Corte Suprema', type: 'Judicial', influence: 'Alta', description: 'Tribunal que define la constitucionalidad de las reformas. Sus fallos condicionan la agenda legislativa.' },
    { name: 'Clarín / Grupo', type: 'Medios', influence: 'Alta', description: 'Grupo mediático más influyente. Su línea editorial impacta la opinión pública.' },
    { name: 'UIA', type: 'Empresarial', influence: 'Media', description: 'Unión Industrial Argentina. Representa a la industria manufacturera, clave en política comercial.' },
    { name: 'Sociedad Rural', type: 'Empresarial', influence: 'Media', description: 'Campo y exportaciones. Influye en política cambiaria y retenciones.' },
    { name: 'CGT', type: 'Sindical', influence: 'Alta', description: 'Central obrera. Su capacidad de movilización condiciona reformas laborales.' },
    { name: 'CTA', type: 'Sindical', influence: 'Media', description: 'Central de trabajadores. Alternativa a la CGT, más combativa.' },
    { name: 'Papa Francisco', type: 'Religioso', influence: 'Media', description: 'Influencia moral y diplomática. Media en conflictos sociales.' },
    { name: 'Embajada EEUU', type: 'Internacional', influence: 'Alta', description: 'Relación bilateral clave en comercio, deuda y geopolítica.' }
  ],

  // === Bloques internacionales ===
  international: [
    { name: '🇺🇸 Estados Unidos', type: 'Bilateral', relation: 65, description: 'Socio comercial y financiero clave. Relación condicionada por deuda y alineamiento geopolítico.' },
    { name: '🇧🇷 Brasil', type: 'Bilateral', relation: 55, description: 'Principal socio comercial. Tensión por Mercosur y política comercial.' },
    { name: '🇨🇳 China', type: 'Bilateral', relation: 60, description: 'Segundo socio comercial. Swap cambiario y financiamiento de infraestructura.' },
    { name: '🇪🇺 Unión Europea', type: 'Bloque', relation: 50, description: 'Mercado destino de exportaciones. Negociación de acuerdo Mercosur-UE.' },
    { name: '🇷🇺 Rusia', type: 'Bilateral', relation: 45, description: 'Compra de vacunas Sputnik. Tensión por alineamiento post-Ucrania.' },
    { name: 'Mercosur', type: 'Bloque', relation: 55, description: 'Bloque regional. Debate sobre flexibilización arancelaria.' },
    { name: 'FMI', type: 'Organismo', relation: 60, description: 'Acreedor principal. Acuerdo stand-by condiciona política económica.' },
    { name: 'Banco Mundial', type: 'Organismo', relation: 55, description: 'Financiamiento para desarrollo. Proyectos de infraestructura social.' },
    { name: 'CELAC', type: 'Bloque', relation: 40, description: 'Comunidad de Estados Latinoamericanos. Foro de diálogo regional.' },
    { name: 'G20', type: 'Bloque', relation: 50, description: 'Foro económico global. Argentina miembro permanente.' },
    { name: 'ONU', type: 'Organismo', relation: 60, description: 'Organismo multilateral. Participación en misiones de paz.' },
    { name: 'OEA', type: 'Organismo', relation: 45, description: 'Organización de Estados Americanos. Foro de derechos humanos y democracia.' }
  ]
};

// Export for use in app
if (typeof module !== 'undefined') {
  module.exports = NASH_DATA;
}
