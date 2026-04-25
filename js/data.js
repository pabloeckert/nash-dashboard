/**
 * Tablero Nash — Datos del Dashboard
 * Fuentes: INDEC, BCRA, Congreso de la Nación, medios públicos
 * Última actualización: 2026-04-25
 */

const NASH_DATA = {
  meta: {
    version: '1.0.0',
    lastUpdate: '2026-04-25',
    sources: {
      inflation: 'INDEC',
      gdp: 'INDEC',
      risk: 'BCRA / JP Morgan',
      poverty: 'INDEC',
      congress: 'Honorable Congreso de la Nación',
      provinces: 'Ministerio del Interior'
    }
  },

  // === Métricas económicas ===
  metrics: {
    inflation: {
      label: 'Inflación (anual)',
      value: 48.5,
      previous: 52.3,
      unit: '%',
      change: -3.8,
      trend: 'down', // down = bueno para inflación
      source: 'INDEC',
      date: '2026-03',
      color: 'red'
    },
    gdp: {
      label: 'PIB (var. trimestral)',
      value: 1.2,
      previous: 0.8,
      unit: '%',
      change: 0.4,
      trend: 'up',
      source: 'INDEC',
      date: '2026-Q1',
      color: 'green'
    },
    risk: {
      label: 'Riesgo País',
      value: 1250,
      previous: 1380,
      unit: 'pbs',
      change: -130,
      trend: 'down',
      source: 'BCRA',
      date: '2026-04-25',
      color: 'yellow'
    },
    poverty: {
      label: 'Pobreza',
      value: 38.2,
      previous: 40.1,
      unit: '%',
      change: -1.9,
      trend: 'down',
      source: 'INDEC',
      date: '2025-H2',
      color: 'purple'
    }
  },

  // === Actores políticos internos ===
  actors: [
    { id: 'A1', name: 'Javier Milei', role: 'Presidente', party: 'La Libertad Avanza', utility: 0.82, faction: 'gobierno', alliances: ['A3', 'A5'], enemies: ['A2', 'A6'] },
    { id: 'A2', name: 'Cristina Kirchner', role: 'VP (ex)', party: 'Frente de Todos', utility: 0.45, faction: 'oposicion', alliances: ['A4'], enemies: ['A1', 'A3'] },
    { id: 'A3', name: 'Mauricio Macri', role: 'Ex presidente', party: 'PRO', utility: 0.68, faction: 'gobierno', alliances: ['A1', 'A5'], enemies: ['A2', 'A4'] },
    { id: 'A4', name: 'Axel Kicillof', role: 'Gobernador Bs.As.', party: 'Frente de Todos', utility: 0.55, faction: 'oposicion', alliances: ['A2'], enemies: ['A1', 'A3'] },
    { id: 'A5', name: 'Patricia Bullrich', role: 'Ministra Seguridad', party: 'PRO', utility: 0.72, faction: 'gobierno', alliances: ['A1', 'A3'], enemies: ['A2'] },
    { id: 'A6', name: 'Sergio Massa', role: 'Ex ministro', party: 'Frente Renovador', utility: 0.38, faction: 'independiente', alliances: [], enemies: ['A1'] },
    { id: 'A7', name: 'Gerardo Morales', role: 'Gobernador Jujuy', party: 'UCR', utility: 0.52, faction: 'independiente', alliances: ['A3'], enemies: [] },
    { id: 'A8', name: 'Juan Schiaretti', role: 'Ex gobernador Córdoba', party: 'Hacemos', utility: 0.48, faction: 'independiente', alliances: [], enemies: [] }
  ],

  // === Congreso ===
  congress: {
    deputies: {
      total: 257,
      majority: 129,
      blocks: [
        { name: 'La Libertad Avanza', seats: 39, color: '#8b5cf6' },
        { name: 'Unión por la Patria', seats: 99, color: '#3b82f6' },
        { name: 'PRO', seats: 37, color: '#f59e0b' },
        { name: 'UCR', seats: 26, color: '#ef4444' },
        { name: 'Hacemos', seats: 16, color: '#10b981' },
        { name: 'Otros', seats: 40, color: '#6b7280' }
      ]
    },
    senators: {
      total: 72,
      majority: 37,
      blocks: [
        { name: 'Unión por la Patria', seats: 33, color: '#3b82f6' },
        { name: 'La Libertad Avanza', seats: 7, color: '#8b5cf6' },
        { name: 'PRO', seats: 10, color: '#f59e0b' },
        { name: 'UCR', seats: 9, color: '#ef4444' },
        { name: 'Otros', seats: 13, color: '#6b7280' }
      ]
    }
  },

  // === Provincias ===
  provinces: [
    { id: 'BA', name: 'Buenos Aires', governor: 'Axel Kicillof', party: 'Frente de Todos', alliance: 'oposicion', population: '17.5M' },
    { id: 'CF', name: 'CABA', governor: 'Jorge Macri', party: 'PRO', alliance: 'gobierno', population: '3.1M' },
    { id: 'CC', name: 'Catamarca', governor: 'Raúl Jalil', party: 'Frente de Todos', alliance: 'oposicion', population: '430K' },
    { id: 'CH', name: 'Chaco', governor: 'Leandro Zdero', party: 'UCR', alliance: 'independiente', population: '1.2M' },
    { id: 'CT', name: 'Chubut', governor: 'Ignacio Torres', party: 'PRO', alliance: 'gobierno', population: '620K' },
    { id: 'ER', name: 'Entre Ríos', governor: 'Rogelio Frigerio', party: 'PRO', alliance: 'gobierno', population: '1.4M' },
    { id: 'FO', name: 'Formosa', governor: 'Gildo Insfrán', party: 'Frente de Todos', alliance: 'oposicion', population: '600K' },
    { id: 'JY', name: 'Jujuy', governor: 'Carlos Sadir', party: 'PRO', alliance: 'gobierno', population: '800K' },
    { id: 'LP', name: 'La Pampa', governor: 'Sergio Ziliotto', party: 'Frente de Todos', alliance: 'oposicion', population: '400K' },
    { id: 'LR', name: 'La Rioja', governor: 'Quintela', party: 'Frente de Todos', alliance: 'oposicion', population: '390K' },
    { id: 'MZ', name: 'Mendoza', governor: 'Alfredo Cornejo', party: 'UCR', alliance: 'independiente', population: '2.1M' },
    { id: 'MI', name: 'Misiones', governor: 'Hugo Passalacqua', party: 'Frente de Todos', alliance: 'oposicion', population: '1.3M' },
    { id: 'NQ', name: 'Neuquén', governor: 'Rolando Figueroa', party: 'MPN', alliance: 'independiente', population: '720K' },
    { id: 'RN', name: 'Río Negro', governor: 'Alberto Weretilneck', party: 'JSRN', alliance: 'independiente', population: '750K' },
    { id: 'SA', name: 'Salta', governor: 'Gustavo Sáenz', party: 'Frente de Todos', alliance: 'oposicion', population: '1.5M' },
    { id: 'SJ', name: 'San Juan', governor: 'Marcelo Orrego', party: 'Frente de Todos', alliance: 'oposicion', population: '800K' },
    { id: 'SL', name: 'San Luis', governor: 'Claudio Poggi', party: 'PRO', alliance: 'gobierno', population: '530K' },
    { id: 'SC', name: 'Santa Cruz', governor: 'Claudio Vidal', party: 'Frente de Todos', alliance: 'oposicion', population: '390K' },
    { id: 'SF', name: 'Santa Fe', governor: 'Maximiliano Pullaro', party: 'UCR', alliance: 'independiente', population: '3.5M' },
    { id: 'SE', name: 'Santiago del Estero', governor: 'Gerardo Zamora', party: 'Frente de Todos', alliance: 'oposicion', population: '1.1M' },
    { id: 'TF', name: 'Tierra del Fuego', governor: 'Gustavo Melella', party: 'Frente de Todos', alliance: 'oposicion', population: '190K' },
    { id: 'TU', name: 'Tucumán', governor: 'Osvaldo Jaldo', party: 'Frente de Todos', alliance: 'oposicion', population: '1.8M' },
    { id: 'CB', name: 'Córdoba', governor: 'Martín Llaryora', party: 'Hacemos', alliance: 'independiente', population: '3.8M' },
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

  // === Alianzas ===
  alliances: [
    { a: 'Javier Milei', b: 'Mauricio Macri', type: 'solid', since: '2024', description: 'Coalición de gobierno' },
    { a: 'Javier Milei', b: 'Patricia Bullrich', type: 'solid', since: '2024', description: 'Alianza en seguridad' },
    { a: 'Mauricio Macri', b: 'Patricia Bullrich', type: 'solid', since: '2019', description: 'PRO - liderazgo compartido' },
    { a: 'Cristina Kirchner', b: 'Axel Kicillof', type: 'solid', since: '2019', description: 'Frente de Todos - Buenos Aires' },
    { a: 'Gerardo Morales', b: 'Mauricio Macri', type: 'weak', since: '2023', description: 'UCR-PRO tensión por reformas' },
    { a: 'Juan Schiaretti', b: 'Axel Kicillof', type: 'weak', since: '2025', description: 'Hacemos-FdT acuerdo parcial' },
    { a: 'Sergio Massa', b: 'Javier Milei', type: 'broken', since: '2023', description: 'Ex oponentes presidenciales' },
    { a: 'Cristina Kirchner', b: 'Javier Milei', type: 'broken', since: '2024', description: 'Oposición frontal' },
    { a: 'Sergio Massa', b: 'Cristina Kirchner', type: 'weak', since: '2023', description: 'Tensión post-elecciones' },
    { a: 'Gerardo Morales', b: 'Axel Kicillof', type: 'weak', since: '2025', description: 'Acuerdo fiscal provincial' }
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
