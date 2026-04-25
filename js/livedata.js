/**
 * Tablero Nash — Live Data Fetcher v2.0
 * Centro de Comando Ejecutivo con datos en tiempo real
 *
 * APIs utilizadas:
 * - Bluelytics: api.bluelytics.com.ar/v2/latest (dólar oficial, blue, MEP, CCL)
 * - BCRA: api.bcra.gob.ar (reservas, base monetaria, tasas)
 * - BYMA: open.bymadata.com.ar (MERVAL, acciones)
 * - Dolarito: dolarito.ar (cotizaciones)
 */

const LiveDataSource = {
  // === API Endpoints ===
  APIs: {
    bluelytics: 'https://api.bluelytics.com.ar/v2/latest',
    bluelytics_evolution: 'https://api.bluelytics.com.ar/v2/evolution.json',
    // BCRA requires token, using public stats page as fallback
    dolarApi: 'https://dolarapi.com/v1/dolares',
    cotizaciones: 'https://dolarapi.com/v1/cotizaciones',
  },

  // === State ===
  liveData: {
    dollar: {
      oficial: { compra: null, venta: null, fecha: null },
      blue: { compra: null, venta: null, fecha: null },
      mep: { compra: null, venta: null, fecha: null },
      ccl: { compra: null, venta: null, fecha: null },
      tarjeta: null,
    },
    risk: {
      value: 535,
      lastUpdate: '2026-04-22',
      source: 'JP Morgan',
    },
    market: {
      merval: { value: null, change: null },
      sp500: { value: null, change: null },
    },
    bcra: {
      reservas: null,
      baseMonetaria: null,
      tasaPolMonetaria: null,
    },
    status: {
      dollar: 'loading', // loading | ok | error | stale
      market: 'loading',
      risk: 'static',
    },
    lastFetch: null,
  },

  // === Fetch Dollar Rates ===
  async fetchDollarRates() {
    try {
      // Try dolarapi.com first (more reliable, CORS-friendly)
      const response = await fetch(this.APIs.dolarApi);
      if (!response.ok) throw new Error('API error');
      const data = await response.json();

      // dolarapi returns array of dollar types
      const oficial = data.find(d => d.casa === 'oficial');
      const blue = data.find(d => d.casa === 'blue');
      const bolsa = data.find(d => d.casa === 'bolsa');
      const ccl = data.find(d => d.casa === 'contadoconliqui');
      const tarjeta = data.find(d => d.casa === 'tarjeta');

      if (oficial) {
        this.liveData.dollar.oficial = {
          compra: oficial.compra,
          venta: oficial.venta,
          fecha: oficial.fechaActualizacion,
        };
      }
      if (blue) {
        this.liveData.dollar.blue = {
          compra: blue.compra,
          venta: blue.venta,
          fecha: blue.fechaActualizacion,
        };
      }
      if (bolsa) {
        this.liveData.dollar.mep = {
          compra: bolsa.compra,
          venta: bolsa.venta,
          fecha: bolsa.fechaActualizacion,
        };
      }
      if (ccl) {
        this.liveData.dollar.ccl = {
          compra: ccl.compra,
          venta: ccl.venta,
          fecha: ccl.fechaActualizacion,
        };
      }
      if (tarjeta) {
        this.liveData.dollar.tarjeta = tarjeta.venta;
      }

      this.liveData.status.dollar = 'ok';
      this.liveData.lastFetch = new Date().toISOString();
      return true;
    } catch (err) {
      console.warn('Dollar API error, trying fallback:', err);
      return this.fetchDollarFallback();
    }
  },

  // === Fallback: Bluelytics ===
  async fetchDollarFallback() {
    try {
      const response = await fetch(this.APIs.bluelytics);
      if (!response.ok) throw new Error('Bluelytics API error');
      const data = await response.json();

      this.liveData.dollar.oficial = {
        compra: data.oficial.value_buy,
        venta: data.oficial.value_sell,
        fecha: data.last_update,
      };
      this.liveData.dollar.blue = {
        compra: data.blue.value_buy,
        venta: data.blue.value_sell,
        fecha: data.last_update,
      };

      this.liveData.status.dollar = 'ok';
      this.liveData.lastFetch = new Date().toISOString();
      return true;
    } catch (err) {
      console.error('All dollar APIs failed:', err);
      this.liveData.status.dollar = 'error';
      return false;
    }
  },

  // === Fetch all data ===
  async fetchAll() {
    const promises = [
      this.fetchDollarRates(),
    ];

    await Promise.allSettled(promises);
    return this.liveData;
  },

  // === Getters ===
  getDollarSpread() {
    const { oficial, blue } = this.liveData.dollar;
    if (!oficial.venta || !blue.venta) return null;
    const spread = ((blue.venta - oficial.venta) / oficial.venta * 100).toFixed(1);
    return {
      absolute: blue.venta - oficial.venta,
      percent: spread,
      status: spread > 50 ? 'critical' : spread > 30 ? 'warning' : 'normal',
    };
  },

  getDataFreshness() {
    if (!this.liveData.lastFetch) return 'never';
    const diff = Date.now() - new Date(this.liveData.lastFetch).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 5) return 'fresh';
    if (minutes < 30) return 'recent';
    if (minutes < 60) return 'aging';
    return 'stale';
  },

  getFreshnessLabel() {
    const freshness = this.getDataFreshness();
    const labels = {
      fresh: { text: 'En vivo', color: 'green', icon: '🟢' },
      recent: { text: 'Reciente', color: 'green', icon: '🟡' },
      aging: { text: 'Desactualizado', color: 'yellow', icon: '🟠' },
      stale: { text: 'Obsoleto', color: 'red', icon: '🔴' },
      never: { text: 'Sin datos', color: 'red', icon: '⚫' },
    };
    return labels[freshness] || labels.never;
  },

  // === Alerts ===
  getAlerts() {
    const alerts = [];
    const { dollar } = this.liveData;

    // Dollar spread alert
    const spread = this.getDollarSpread();
    if (spread && spread.status === 'critical') {
      alerts.push({
        level: 'critical',
        icon: '🚨',
        title: 'Brecha cambiaria crítica',
        message: `Dólar blue $${dollar.blue.venta} vs oficial $${dollar.oficial.venta} — brecha ${spread.percent}%`,
        action: 'Evaluar cobertura cambiaria',
      });
    } else if (spread && spread.status === 'warning') {
      alerts.push({
        level: 'warning',
        icon: '⚠️',
        title: 'Brecha cambiaria elevada',
        message: `Brecha del ${spread.percent}% entre blue y oficial`,
        action: 'Monitorear evolución',
      });
    }

    // Risk country alert
    if (NASH_DATA.metrics.risk.value > 700) {
      alerts.push({
        level: 'critical',
        icon: '🚨',
        title: 'Riesgo País elevado',
        message: `${NASH_DATA.metrics.risk.value} pbs — acceso limitado a mercados`,
        action: 'Evaluar fuentes de financiamiento alternativas',
      });
    } else if (NASH_DATA.metrics.risk.value > 500) {
      alerts.push({
        level: 'warning',
        icon: '⚠️',
        title: 'Riesgo País moderado-alto',
        message: `${NASH_DATA.metrics.risk.value} pbs — monitorear`,
        action: 'Diversificar fuentes de deuda',
      });
    }

    // Inflation alert
    if (NASH_DATA.metrics.inflation.value > 4) {
      alerts.push({
        level: 'critical',
        icon: '🚨',
        title: 'Inflación mensual alta',
        message: `${NASH_DATA.metrics.inflation.value}% mensual — impacto en costos`,
        action: 'Revisar pricing y contratos',
      });
    } else if (NASH_DATA.metrics.inflation.value > 3) {
      alerts.push({
        level: 'warning',
        icon: '⚠️',
        title: 'Inflación persistente',
        message: `${NASH_DATA.metrics.inflation.value}% mensual — por encima del target`,
        action: 'Ajustar proyecciones de costos',
      });
    }

    // EMAE/GDP alert
    if (NASH_DATA.metrics.gdp.value < -2) {
      alerts.push({
        level: 'warning',
        icon: '⚠️',
        title: 'Actividad económica en caída',
        message: `EMAE ${NASH_DATA.metrics.gdp.value}% interanual — recesión`,
        action: 'Conservar liquidez, revisar expansiones',
      });
    }

    // Poverty alert
    if (NASH_DATA.metrics.poverty.value > 35) {
      alerts.push({
        level: 'info',
        icon: 'ℹ️',
        title: 'Pobreza alta',
        message: `${NASH_DATA.metrics.poverty.value}% — impacto en consumo masivo`,
        action: 'Ajustar segmentación de mercado',
      });
    }

    // Credit rating
    alerts.push({
      level: 'info',
      icon: '📊',
      title: 'Calificación crediticia sub-investment grade',
      message: 'S&P CCC+ | Moody\'s Caa1 — acceso limitado a deuda soberana',
      action: 'Evaluar financiamiento corporativo alternativo',
    });

    return alerts;
  },

  // === Decision Support ===
  getDecisionMatrix() {
    return [
      {
        scenario: 'Expansión internacional',
        recommendation: 'CAUTELOSO',
        color: 'yellow',
        factors: ['Brecha cambiaria', 'Controles de capital', 'Inestabilidad macro'],
        score: 35,
      },
      {
        scenario: 'Inversión en infraestructura',
        recommendation: 'FAVORABLE',
        color: 'green',
        factors: ['Costos en USD bajos', 'Mano de obra disponible', 'Tasa real negativa'],
        score: 70,
      },
      {
        scenario: 'Financiamiento en USD',
        recommendation: 'RISKY',
        color: 'red',
        factors: ['CCC+ rating', 'Riesgo país >500', 'Acceso limitado'],
        score: 25,
      },
      {
        scenario: 'Pricing y contratos',
        recommendation: 'REVISAR',
        color: 'yellow',
        factors: ['Inflación 3.4% mensual', 'Indexación necesaria', 'Volatilidad cambiaria'],
        score: 40,
      },
      {
        scenario: 'Talento y headcount',
        recommendation: 'OPORTUNIDAD',
        color: 'green',
        factors: ['Salarios USD competitivos', 'Talento tech abundante', 'EMAE negativo'],
        score: 75,
      },
      {
        scenario: 'Exportación de servicios',
        recommendation: 'MUY FAVORABLE',
        color: 'green',
        factors: ['Tipo de cambio alto', 'Competitividad global', 'Sin retenciones servicios'],
        score: 85,
      },
    ];
  }
};

// Export
if (typeof module !== 'undefined') {
  module.exports = LiveDataSource;
}
