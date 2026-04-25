// ═══════════════════════════════════════════════════════════════
// Tablero Nash — Argentina v3.0
// Data & Interactive Logic — Actualizado 25/04/2026
// ═══════════════════════════════════════════════════════════════

// ═══════════════ PENSAMIENTO IA ═══════════════
const AI_THINKING = [
  {source:"GPT-4o — análisis geopolítico",text:"El equilibrio argentino es frágil pero resiliente. La interna Karina-Caputo es el factor de mayor incertidumbre. Si se resuelve antes de junio, la probabilidad de estabilización sube 12 puntos. El modelo Nash sugiere que Milei tiene estrategia dominante: consolidar el superávit y dejar que la interna se resuelva por desgaste natural.",confidence:"78% confianza en escenario base"},
  {source:"Claude 3.5 — modelo económico",text:"La paradoja argentina: superávit fiscal récord pero pobreza creciente. El modelo de Nash muestra que el gobierno maximiza utilidad al mantener austeridad incluso con costo social, porque el FMI actúa como 'jugador disciplinador'. El punto de quiebre es inflación >35% anual — ahí el equilibrio migra a crisis.",confidence:"82% confianza en análisis de quiebre"},
  {source:"Gemini Pro — análisis político",text:"Provincias Unidas emerge como el 'tercer jugador' más importante del tablero. Llaryora, Pullaro y Torres construyen identidad propia. En el modelo de Nash, su función de utilidad es maximizar transferencias sin comprometer autonomía. El desdoblamiento 2027 es su jugada dominante.",confidence:"71% confianza en tercer polo"},
  {source:"Llama 3.1 — análisis social",text:"El factor evangélico está subestimado en los modelos actuales. 10-15% del padrón con capacidad de movilización territorial comparable al peronismo. Si el ajuste social erosiona la base de pastores barriales, el costo para LLA puede ser irreversible. El 'voto evangélico' no es monolítico.",confidence:"65% confianza en riesgo evangélico"},
  {source:"DeepSeek V2 — modelado de crisis",text:"Comparando con México 1994 y Argentina 2001: el factor diferenciador es la posición externa. Reservas del BCRA en USD 9.500M + FMI como respaldo reducen probabilidad de crisis cambiaria aguda. Pero la brecha cambiaria es el indicador adelantado clave — si supera 15%, el modelo migra a tail risk.",confidence:"74% confianza en comparación histórica"},
];

// ═══════════════ REDES SOCIALES ═══════════════
const SOCIAL_TRENDS = [
  {platform:"twitter",icon:"𝕏",topic:"#KarinaGate",heat:92,trend:"Explosión de tuits sobre la interna Karina vs Caputo. 48k menciones en 24h. Memes, filtraciones y análisis cruzados.",change:"+340%"},
  {platform:"reddit",icon:"📡",topic:"r/argentina — '¿Milei 2027?'",heat:78,trend:"Debate extenso sobre reelección. Consenso: economía mejora pero interna preocupa. 2.1k comentarios.",change:"+120%"},
  {platform:"youtube",icon:"📺",topic:"Luis Majul — 'La noche de los tapados'",heat:85,trend:"Entrevista reveladora sobre actores en la sombra. 890k views en 18h. Trending #1 Argentina.",change:"Nuevo"},
  {platform:"telegram",icon:"✈️",topic:"Canales libertarios — 'Fuerzas del Cielo'",heat:70,trend:"Ecosistema digital de Caputo bajo presión. Gordo Dan publicó 14 mensajes en 6h. Señal de nerviosismo.",change:"+85%"},
  {platform:"twitter",icon:"𝕏",topic:"#Desdoblamiento2027",heat:65,trend:"Gobernadores twittean sobre elecciones provinciales desdobladas. Tendencia creciente en interior.",change:"+200%"},
  {platform:"reddit",icon:"📡",topic:"r/merval — 'Riesgo país 634'",heat:58,trend:"Análisis técnico de bonos. Optimismo cauteloso. Algunos usuarios reportan compras en AL35.",change:"+45%"},
];

// ═══════════════ ANALISTAS NACIONALES ═══════════════
const ANALYSTS_NATIONAL = [
  {name:"Carlos Pagni",outlet:"La Nación / LN+",stance:"neutral",quote:"La interna Karina-Caputo no es una disputa de estilos. Es una disputa por quién conduce la Argentina después de Milei. El presidente lo sabe y por eso no elige — porque elegir es definir su propio sucesor."},
  {name:"Eduardo van der Kooy",outlet:"Clarín",stance:"bullish",quote:"Villarruel es el comodín que nadie mira. Desde el Senado está construyendo silenciosamente su propio espacio. Si LLA se fractura, ella tiene la llave del Senado."},
  {name:"Jorge Lanata",outlet:"LN+/Radio Mitre",stance:"bearish",quote:"El modelo económico funciona en el Excel pero la calle dice otra cosa. Los números macro son reales pero la gente no llega a fin de mes. Esa contradicción tiene fecha de vencimiento."},
  {name:"Sergio Berensztein",outlet:"Poliarquía / Bloomberg Línea",stance:"neutral",quote:"La aprobación de Milei mantiene 40%+ pero el núcleo duro es más estrecho que el voto de octubre 2025. La economía es el único driver — si la inflación no baja, todo se complica."},
  {name:"Rosendo Fraga",outlet:"Nuevo Mundo",stance:"bullish",quote:"El acuerdo Mercosur-UE es el hito más importante de política exterior en 20 años. Beneficia al agro y al sector automotriz. Milei lo usará como carta de reelección."},
  {name:"Alejandro Catterberg",outlet:"Poliarquía",stance:"bearish",quote:"Encuesta interna: los gobernadores aliados están en modo 'esperar y ver'. Si la economía no despega antes de septiembre, la deserción legislativa es inevitable."},
];

// ═══════════════ ANALISTAS INTERNACIONALES ═══════════════
const ANALYSTS_INTL = [
  {name:"The Economist Intelligence Unit",outlet:"The Economist",stance:"neutral",quote:"Argentina is a case study in whether shock therapy can work in a democracy. The fiscal results are real; the social costs, also real. The Nash equilibrium favors continued austerity."},
  {name:"Bloomberg Economics",outlet:"Bloomberg",stance:"bullish",quote:"Milei's stabilization is the most credible since Convertibilidad. Risk premium at 634bp from 2000+ shows market confidence. But inflation convergence to target is the make-or-break variable."},
  {name:"Financial Times — Editorial",outlet:"FT",stance:"neutral",quote:"The Argentine experiment is being watched globally. If it works, it validates libertarian economics in emerging markets. If it fails, it's a cautionary tale for the next populist-turned-reformer."},
  {name:"Moody's Analytics",outlet:"Moody's",stance:"bullish",quote:"Argentina's credit profile is improving. Superávit fiscal sostenido + desinflación gradual = upgrade path. Risk: interna política puede descarrilar el programa."},
  {name:"Reuters — Emerging Markets",outlet:"Reuters",stance:"neutral",quote:"Latin American fund managers are cautiously long Argentina. The carry trade is attractive but hedging costs remain high. Key variable: BCRA reserves trajectory."},
];

// ═════════════0 ORGANISMOS NACIONALES ═══════════════
const ORGS_NATIONAL = [
  {name:"BCRA (Banco Central)",type:"Monetario",position:"Reservas USD 9.500M acumuladas. REM proyecta tipo de cambio $1.700/USD para dic-2026. Inflación esperada: 24,4% anual. Política de crawling peg mantiene ancla cambiaria."},
  {name:"INDEC",type:"Estadísticas",position:"Pobreza 31,6% (ultimo dato). Inflación marzo 3,4%. Canasta básica supera los $350.000/hogar. Desempleo 6,8% (mejoró pero subempleo persiste."},
  {name:"IERAL (Fundación Mediterránea)",type:"Think tank",position:"Proyección base: inflación 23% anual dic-2026. Optimista: 18-19%. Pesimista: hasta 30%. El modelo depende de la credibilidad del BCRA."},
  {name:"CGT / Sindicalismo",type:"Gremial",position:"Oposición activa al ajuste. Paro general pendiente. Debilitados electoralmente pero capacidad de movilización intacta. Negociación salarial como palanca."},
  {name:"Poliarquía / Catterberg",type:"Consultora",position:"LLA mantiene 40%+ imagen positiva pero núcleo duro más estrecho que voto oct-2025. Economía es el único driver de aprobación."},
];

// ═════════════0 ORGANISMOS INTERNACIONALES Y PRIVADOS ═══════════════
const ORGS_INTL = [
  {name:"FMI (Fondo Monetario Internacional)",type:"Multilateral",position:"Segunda revisión del programa esperada. Desembolso potencial USD 1.000M. Proyección PIB +3,5%, inflación 30,4%. Condicionalidad: metas fiscales y cambiarias."},
  {name:"OCDE",type:"Multilateral",position:"Mejoró proyecciones de PIB para Argentina. Proceso de ingreso como miembro formal en curso. Requiere reformas estructurales de mediano plazo."},
  {name:"Banco Mundial",type:"Multilateral",position:"Reconoce mejora en libertad económica. Pobreza sigue como principal desafío social. Programas de asistencia focalizada."},
  {name:"BID (Banco Interamericano)",type:"Regional",position:"Financiamiento para infraestructura y PyMEs en evaluación. Línea de crédito para modernización productiva."},
  {name:"BlackRock / Fidelity",type:"Financiero privado",position:"Posiciones largas en bonos argentinos. AL35 y GD35 como favoritos. Carry trade atractivo pero hedging costoso. Esperan desembolso FMI como catalizador."},
  {name:"Techint / Grupo Arcor",type:"Empresarial nacional",position:"Beneficiados por acuerdo Mercosur-UE. Inversión en Vaca Muerta y sector agroexportador. Lobby transversal por estabilidad macro."},
];

// ═════════════0 PyMEs DATA ═══════════════
const PYMES_DIAGNOSIS = [
  {icon:"🏭",name:"Manufactura",detail:"62% reportó caída de ventas en Q1 2026. Costos de insumos importados subieron 18% por devaluación. Cadena automotriz afectada por incertidumbre Brasil.",bar:38,color:"var(--red)"},
  {icon:"🛒",name:"Comercio minorista",detail:"Caída del consumo real 8% interanual. PyMEs de barrio pierden contra cadenas grandes. E-commerce crece 22% pero desde base baja.",bar:42,color:"var(--amber)"},
  {icon:"🔧",name:"Servicios profesionales",detail:"Consultoría y software como sectores resilientes. Exportación de servicios crece 15%. Talento joven migra a freelance USD.",bar:68,color:"var(--green)"},
  {icon:"🌾",name:"Agroindustria",detail:"Sector más fuerte. Soja y cereales récord. PyMEs agroindustriales se benefician de tipo de cambio competitivo y acuerdo UE.",bar:82,color:"var(--green)"},
  {icon:"🏗️",name:"Construcción",detail:"Caída 12% en obra privada. Obra pública paralizada. PyMEs constructoras sobreviven con refacciones y reformas menores.",bar:30,color:"var(--red)"},
  {icon:"💻",name:"Tecnología",detail:"Sector estrella. PyMEs tech argentinas exportan USD 2.800M. Ley de Economía del Conocimiento renovada. Fuga de talentos moderada.",bar:88,color:"var(--green)"},
];

const PYMES_INDICATORS = [
  {label:"Ventas PyME (índice)",value:"78",change:"-6%",trend:"down"},
  {label:"Acceso a crédito",value:"28%",change:"+3%",trend:"up"},
  {label:"Cierre de empresas",value:"4.200/mes",change:"+15%",trend:"down"},
  {label:"Exportaciones PyME",value:"USD 1.200M",change:"+12%",trend:"up"},
  {label:"Empleo PyME",value:"-3,2%",change:"Estable",trend:"flat"},
  {label:"Confianza empresarial",value:"42 pts",change:"+5 pts",trend:"up"},
];

const PYMES_POLICIES = [
  {name:"Ley PyME (crédito subsidiado)",impact:"Parcial",detail:"Línea de crédito a tasa negativa para PyMEs. Acceso limitado por requisitos bancarios. Solo 28% de PyMEs accede."},
  {name:"Exporta Simple",impact:"Positivo",detail:"Simplificación de trámites de exportación. 12.000 PyMEs nuevas exportaron en 2025. Foco en servicios digitales y agro."},
  {name:"Ley de Economía del Conocimiento",impact:"Positivo",detail:"Beneficios fiscales para PyMEs tech. Incentivo a exportación de software. Sector crece 15% anual."},
  {name:"Ajuste fiscal / reducción obra pública",impact:"Negativo",detail:"PyMEs constructoras y proveedoras del Estado más afectadas. Cadena de pago rota en 14 provincias."},
  {name:"Régimen MiPyME",impact:"Neutral",detail:"Certificación vigente. Beneficios en IVA y Ganancias limitados por inflación. Burocracia de renovación."},
];

const PYMES_SCENARIOS = [
  {title:"Recuperación gradual",pct:30,color:"var(--green)",detail:"Inflación baja, crédito se expande, consumo repunta. PyMEs manufactureras y de servicios crecen."},
  {title:"Estancamiento",pct:45,color:"var(--amber)",detail:"Inflación persistente, crédito acotado, consumo plano. Solo agro y tech sobreviven bien."},
  {title:"Deterioro",pct:25,color:"var(--red)",detail:"Inflación >35%, cierre masivo, desempleo PyME sube. Crisis social afecta demanda interna."},
];

// ═════════════0 KANBAN SCENARIOS ═══════════════
const KANBAN_CARDS = [
  {id:"k1",title:"Consolidación libertaria",pct:35,color:"var(--green)",tag:"Cooperativo",col:"dominant",desc:"Karina desplaza Caputo. Economía sostiene. FMI aprueba. Milei 2027 sólido."},
  {id:"k2",title:"Parálisis por interna",pct:30,color:"var(--amber)",tag:"Desequilibrio",col:"active",desc:"Karina-Caputo no resuelve. Inflación >2,5% mensual. Gobernadores se distancian."},
  {id:"k3",title:"Shock externo + crisis",pct:20,color:"var(--red)",tag:"Crisis",col:"active",desc:"Medio Oriente escala. Inflación >35%. FMI retrasa. Dilema ajuste vs expansión."},
  {id:"k4",title:"Provincias Unidas como 3er polo",pct:10,color:"var(--purple)",tag:"Nuevo equilibrio",col:"emerging",desc:"Llaryora-Pullaro-Torres consolidan bisagra legislativa. Milei pierde monopolio."},
  {id:"k5",title:"Ruptura sistémica",pct:5,color:"var(--red)",tag:"Tail risk",col:"emerging",desc:"Shock + crisis interna + FMI cancela + movilización. Baja prob, altísima consecuencia."},
  {id:"k6",title:"Boom Vaca Muerta",pct:15,color:"var(--blue)",tag:"Oportunidad",col:"emerging",desc:"Inversión US récord. Energía como motor de crecimiento. Arrastra PyMEs regionales."},
  {id:"k7",title:"Victoria legislativa total",pct:8,color:"var(--green)",tag:"Oficialismo",col:"emerging",desc:"Reforma laboral + PASO + presupuesto aprobados. LLA domina Congreso post oct-2025."},
  {id:"k8",title:"Deserción gobernadores",pct:22,color:"var(--amber)",tag:"Riesgo",col:"active",desc:"12+ provincias desdobladas. ATN no alcanza. Gobernadores aliados migran a oposición."},
  {id:"k9",title:"Inflación controlada <20%",pct:18,color:"var(--green)",tag:"Optimista",col:"emerging",desc:"BCRA acumula reservas. Credibilidad ancla cambiaria. Consumo repunta."},
  {id:"k10",title:"Crisis social / estallido",pct:7,color:"var(--red)",tag:"Colapso",col:"emerging",desc:"Pobreza >35%. Paro general. Desgaste acelera. Referente: 2001."},
];

// ═════════════0 PROVINCIAS ═══════════════
const PROVINCES = [
  {name:"Buenos Aires",gov:"Axel Kicillof",party:"UxP",align:"hostile",funds:"-ajuste 20%",note:"No invitado a reunión de gobernadores. Caso Aubasa/hidrovía. Conflicto total con Nación."},
  {name:"CABA",gov:"Jorge Macri",party:"PRO",align:"allied",funds:"+57,3% vs 2024",note:"Aliada por Corte Suprema. Bullrich senadora. Alianza LLA-PRO >50%."},
  {name:"Córdoba",gov:"Martín Llaryora",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Desdoblamiento 2027. Provincias Unidas. Perfil presidencial propio."},
  {name:"Santa Fe",gov:"Maximiliano Pullaro",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Desdoblamiento confirmado. Referente interior no peronista."},
  {name:"Mendoza",gov:"Alfredo Cornejo",party:"UCR",align:"neutral",funds:"media",note:"LLA ganó Mendoza oct-2025. Ley Glaciares genera tensión."},
  {name:"Tucumán",gov:"Osvaldo Jaldo",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Puente peronismo pragmático-Nación."},
  {name:"Salta",gov:"Gustavo Sáenz",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Frente regional con Figueroa y Passalacqua."},
  {name:"Misiones",gov:"Hugo Passalacqua",party:"FR-aliado",align:"allied",funds:"+$4.000M ATN",note:"ATN como precio de cooperación legislativa."},
  {name:"Entre Ríos",gov:"Rogelio Frigerio",party:"PRO/LLA",align:"allied",funds:"media",note:"Referente PRO alineado con LLA."},
  {name:"Neuquén",gov:"Rolando Figueroa",party:"MPN",align:"allied",funds:"+récord (incendios)",note:"$15.000M en feb. Vaca Muerta = prioridad compartida."},
  {name:"Chubut",gov:"Ignacio Torres",party:"Prov.Unidas",align:"neutral",funds:"media",note:"Bisagra. Hidrocarburos patagónicos."},
  {name:"Río Negro",gov:"Alberto Weretilneck",party:"regional",align:"neutral",funds:"media",note:"Relación funcional. Sin conflictos mayores."},
  {name:"Jujuy",gov:"Carlos Sadir",party:"UCR/JxC",align:"neutral",funds:"media",note:"Litio. Posición oscilante."},
  {name:"Catamarca",gov:"Raúl Jalil",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Peronista pragmático."},
  {name:"Corrientes",gov:"Juan Pablo Valdés",party:"ECO/Prov.Unidas",align:"neutral",funds:"+$3.000M ATN",note:"Apoyo funcional."},
  {name:"Chaco",gov:"Leandro Zdero",party:"PRO/LLA",align:"allied",funds:"media",note:"LLA ganó Chaco oct-2025."},
  {name:"Formosa",gov:"Gildo Insfrán",party:"PJ-K",align:"hostile",funds:"-72,1% vs 2023",note:"Kirchnerismo duro. Resistencia peronista."},
  {name:"La Rioja",gov:"Ricardo Quintela",party:"PJ-K",align:"hostile",funds:"-87,9% vs 2023",note:"Provincia más castigada. Símbolo de resistencia."},
  {name:"San Juan",gov:"Marcelo Orrego",party:"PRO/LLA",align:"allied",funds:"media",note:"Excelente relación con Ejecutivo."},
  {name:"San Luis",gov:"Claudio Poggi",party:"LLA",align:"allied",funds:"positiva",note:"Gobernador LLA puro."},
  {name:"Santa Cruz",gov:"Claudio Vidal",party:"Prov.Unidas",align:"neutral",funds:"+$4.000M ATN",note:"Negociador pragmático."},
  {name:"La Pampa",gov:"Sergio Ziliotto",party:"PJ",align:"hostile",funds:"-70,9% vs 2023",note:"Peronista no kirchnerista."},
  {name:"Tierra del Fuego",gov:"Gustavo Melella",party:"MFUT",align:"hostile",funds:"baja",note:"Actor insular independiente."},
  {name:"Santiago del Estero",gov:"Gerardo Zamora",party:"FRES",align:"neutral",funds:"media",note:"Pragmático. Negocia con todos."},
];

// ═════════════0 INTERNACIONAL ═══════════════
const INTL_BLOCS = [
  {flag:"🇺🇸",name:"Estados Unidos / Trump",status:"aliado estratégico",statusColor:"var(--green)",body:"<strong>Estado:</strong> Relación más cálida desde Reagan. Vaca Muerta como moneda de cambio. CNA creado 2026. Acuerdo comercial feb 2026.",actors:["Donald Trump","Scott Bessent","Marco Rubio"],risk:"Dependencia del alineamiento hace vulnerable ante cambio en Washington."},
  {flag:"🇮🇱",name:"Israel / Netanyahu",status:"alianza personal",statusColor:"var(--green)",body:"3 viajes de Milei. Conversión al judaísmo en proceso. Apoyo post-7/10.",actors:["Benjamin Netanyahu"],risk:"Alineamiento total tensiona relación con países árabes."},
  {flag:"🇧🇷",name:"Brasil / Lula",status:"tensión ideológica",statusColor:"var(--red)",body:"Relación fría. Sin embargo, acuerdo Mercosur-UE requirió coordinación.",actors:["Lula","Geraldo Alckmin"],risk:"Paradoja: Milei critica pero necesita firma de Lula."},
  {flag:"🇨🇳",name:"China",status:"tensión silenciosa",statusColor:"var(--amber)",body:"Licitación hidrovía excluyó empresas con capitales soberanos. Swap BCRA renovado.",actors:["Embajada China"],risk:"China es 2do destino de exportaciones."},
  {flag:"🇪🇺",name:"Unión Europea / Mercosur",status:"hito histórico",statusColor:"var(--green)",body:"Acuerdo Mercosur-UE: acceso a 700M de consumidores.",actors:["Comisión Europea","Mercosur"],risk:"Oposición europea a deforestación puede complicar."},
  {flag:"🌐",name:"FMI / BM / OCDE",status:"relación clave",statusColor:"var(--green)",body:"2da revisión esperada. Desembolso USD 1.000M. Riesgo país cayó a 634pb.",actors:["Kristalina Georgieva"],risk:"Condicionalidad fiscal y cambiaria."},
  {flag:"🕌",name:"Medio Oriente / Irán-Israel",status:"impacto directo",statusColor:"var(--red)",body:"FMI cita conflicto como factor que redujo PIB. Argentina exportador neto de energía.",actors:["Irán","Israel","Arabia Saudita"],risk:"Escalada puede disparar commodities."},
  {flag:"🇻🇪",name:"Venezuela / Cuba / Nicaragua",status:"confrontación",statusColor:"var(--red)",body:"Ruptura diplomática con Venezuela. Rechazo a Maduro.",actors:["Maduro","Díaz-Canel"],risk:"Ruptura reduce influencia en foros regionales."},
];

// ═════════════0 ACTORES INTERNOS ═══════════════
const ACTORS_LLA = [
  {initials:"JM",avatarClass:"avatar-gold",name:"Javier Milei",role:"Presidente — árbitro supremo",
   alliances:["Karina Milei ✓","Santiago Caputo ~","Luis Caputo ✓","Trump ✓","PRO ~","Netanyahu ✓"],
   allianceTypes:["solid","weak","solid","solid","weak","solid"],
   detail:"<strong>Función de utilidad:</strong> maximizar imagen rumbo a reelección 2027. Arbitra interna Karina–Caputo. Respaldó públicamente a Karina (abr 2026).<br><br><strong>Estrategia dominante:</strong> consolidar superávit + desinflación. Evitar agenda social."},
  {initials:"KM",avatarClass:"avatar-purple",name:"Karina Milei",role:"Secretaria General — \"El Jefe\"",
   alliances:["Lemoine ✓","Menem ✓","Pareja ✓","Mahiques ✓","Angelici ✓","Caputo ✗"],
   allianceTypes:["solid","solid","solid","solid","solid","hostile"],
   detail:"Impulsa desplazamiento de Caputo de SIDE. Controla 4 de 9 ministerios. Armado territorial vertical."},
  {initials:"SC",avatarClass:"avatar-red",name:"Santiago Caputo",role:"Asesor presidencial",
   alliances:["Gordo Dan ✓","Javier ~","Luis ≈","Karina ✗"],
   allianceTypes:["solid","weak","neutral","hostile"],
   detail:"Bajo presión máxima. Perdió control de Justicia. Amenaza con renuncia si pierde SIDE."},
];

const ACTORS_CABINET = [
  {initials:"LC",avatarClass:"avatar-green",name:"Luis Caputo",role:"Ministro de Economía",detail:"Superávit fiscal mantenido. Levantamiento del cepo. FMI en curso."},
  {initials:"FS",avatarClass:"avatar-teal",name:"Federico Sturzenegger",role:"Desregulación",detail:"Argentina: mayor mejora en libertad económica mundial 2025."},
  {initials:"PQ",avatarClass:"avatar-blue",name:"Pablo Quirno",role:"Canciller",detail:"Negociación Mercosur-UE. Perfil bajo pero estratégico."},
];

const ACTORS_EMERGING = [
  {name:"Manuel Adorni",role:"Jefe de Gabinete",note:"Investigado por enriquecimiento ilícito."},
  {name:"Juan Bautista Mahiques",role:"Ministro de Justicia",note:"Nuevo referente del eje karinista."},
  {name:"Patricia Bullrich",role:"Ministra de Seguridad",note:"Posible candidata a senadora."},
  {name:"Sandra Pettovello",role:"Capital Humano",note:"Área social más sensible."},
  {name:"Martín Menem",role:"Presidente Diputados",note:"Controla agenda legislativa."},
];

// ═════════════0 SHADOW ACTORS ═════════════0
const SHADOW_ACTORS = {
  judicial: [
    {name:"Cristian Auguarda",role:"SIDE / Caputo",note:"Conducción SIDE bajo Caputo. Objetivo de desplazamiento por Karina."},
    {name:"Eduardo Casal",role:"Procurador interino",note:"9 años de interinato. Comodoro Py como campo de batalla."},
    {name:"Ángelici",role:"Operador judicial",note:"Ex-abogado de Boca. Opera designaciones judiciales."},
  ],
  digital: [
    {name:"Gordo Dan",role:"Influencer libertario",note:"Ecosistema Caputo. Alcance masivo. Cruce con Lemoine."},
    {name:"Agustín Laje",role:"Ideólogo",note:"Contenido ideológico libertario sin cargo formal."},
  ],
  economic: [
    {name:"Techint / Rocca",role:"Industrial",note:"Lobby transversal. Beneficiado Mercosur-UE."},
    {name:"YPF / Vaca Muerta",role:"Eje energético",note:"Herramienta geopolítica. Chevron, Shell, Total."},
    {name:"Grupo Clarín / La Nación",role:"Medios",note:"Poder de agenda intacto."},
  ],
};

// ═════════════0 CONGRESS ═════════════0
const CONGRESS = {
  diputados: { president:"Martín Menem (LLA)", twoThirds:172, blocks:[
    {name:"La Libertad Avanza",seats:"~130+",position:"oficialismo",note:"Primera minoría. Controla agenda."},
    {name:"Unión por la Patria",seats:"~99",position:"oposición dura",note:"Máximo Kirchner."},
    {name:"PRO",seats:"~38",position:"aliado táctico",note:"Bullrich + Macri oscilan."},
    {name:"Provincias Unidas",seats:"~28",position:"bisagra",note:"Votan caso a caso."},
    {name:"UCR / Evolución",seats:"~22",position:"volátil",note:"Dividido tema a tema."},
  ]},
  senado: { president:"Victoria Villarruel (LLA)", blocks:[
    {name:"Unión por la Patria",seats:"~33",position:"oposición",note:"Llave de PASO."},
    {name:"La Libertad Avanza",seats:"~22",position:"oficialismo",note:"Creció oct-2025."},
    {name:"PRO",seats:"~8",position:"táctico",note:"Gadano (Santa Cruz)."},
    {name:"Peronismo aliado",seats:"~12",position:"negociador",note:"Jaldo, Jalil, Sáenz."},
  ]},
  villarruel: { role:"Presidenta del Senado. Poder de desempate.", tension:"Distanciamiento público con Milei. Perfil propio.", alliances:[["Milei","weak"],["PRO","neutral"],["Sector militar","solid"]] },
  agenda: [
    {project:"Reforma laboral",state:"Aprobada ✓",stateClass:"text-green",actors:"Provincias Unidas + PRO",analysis:"ATN como precio"},
    {project:"Acuerdo Mercosur-UE",state:"Media sanción ✓",stateClass:"text-green",actors:"Cancillería + oposición",analysis:"Consenso amplio"},
    {project:"Eliminación PASO",state:"En debate ⟳",stateClass:"text-amber",actors:"Senado KA",analysis:"Precio alto"},
    {project:"Baja imputabilidad",state:"Aprobada ✓",stateClass:"text-green",actors:"Bullrich / PRO",analysis:"Victoria imagen"},
    {project:"Presupuesto 2026",state:"Aprobado ✓",stateClass:"text-green",actors:"Acuerdo amplio",analysis:"1ra victoria post oct"},
  ],
};

// ═════════════0 ALLIANCES ═════════════0
const ALLIANCES = {
  solid: [
    {title:"LLA — Casa Rosada",detail:"Karina, L. Caputo, Adorni, Pettovello, Sturzenegger."},
    {title:"Milei — Trump (EEUU)",detail:"Alineamiento total. Vaca Muerta. Acuerdo comercial."},
    {title:"Milei — Netanyahu",detail:"Relación personal. Múltiples viajes."},
    {title:"LLA — Evangélicos",detail:"Apoyo transversal. Pastores como puentes."},
  ],
  weak: [
    {title:"LLA — PRO (Macri)",detail:"Convivencia sin fusión."},
    {title:"LLA — Provincias Unidas",detail:"Apoyo caso a caso. Poder de veto."},
    {title:"Villarruel — Milei",detail:"Tensiones públicas. Perfil propio."},
  ],
  broken: [
    {title:"Nación — Buenos Aires",detail:"Asfixia financiera. Conflicto total."},
    {title:"Nación — Formosa / La Rioja",detail:"-72% y -87% transferencias."},
    {title:"Argentina — Venezuela",detail:"Ruptura diplomática."},
  ],
};

// ═════════════0 FEED ═════════════0
const FEED_ITEMS = [
  {source:"The Economist — 2026",text:"'Argentina is a case study in shock therapy in democracy.'",tag:"análisis"},
  {source:"FMI WEO Abril 2026",text:"PIB +3,5% (↓). Inflación 30,4% (↑).",tag:"dato"},
  {source:"Bloomberg Línea",text:"ATN de $20.000M a 6 provincias antes de reforma laboral. 'Fondos por votos'.",tag:"investigación"},
  {source:"Carlos Pagni",text:"'La interna Karina-Caputo define quién conduce después de Milei.'",tag:"columnista"},
  {source:"Poliarquía",text:"LLA 40%+ imagen positiva pero núcleo duro más estrecho.",tag:"sondeo"},
  {source:"IERAL",text:"Proyección inflación 23% dic-2026. Optimista: 18%. Pesimista: 30%.",tag:"proyección"},
  {source:"Deloitte LATAM",text:"PIB 2025: +4,4%. Finanzas y minería lideraron.",tag:"dato"},
  {source:"WEF",text:"Argentina: mayor mejora libertad económica global 2025.",tag:"internacional"},
  {source:"VisionPolítica",text:"Milei presiona a gobernadores para evitar desdoblamientos.",tag:"análisis"},
];

// ═════════════0 ESCENARIOS ═════════════0
const SCENARIOS = [
  {title:"A — Consolidación libertaria",pct:35,color:"var(--green)",tag:"Nash cooperativo",body:"Karina desplaza Caputo. Economía 3-3,5%. Inflación 20-22%. FMI aprueba. Milei 2027.",indicators:["Inflación <2,5%/mes","Riesgo <600","Superávit sostenido"]},
  {title:"B — Parálisis por interna",pct:30,color:"var(--amber)",tag:"Nash desequilibrio",body:"Interna no resuelve. Inflación >2,5% Q3. Gobernadores se distancian.",indicators:["Inflación >2,5% Q3","Renuncia ministro","PRO se distancia"]},
  {title:"C — Shock externo",pct:20,color:"var(--red)",tag:"Nash crisis",body:"Medio Oriente escala. Inflación >35%. FMI retrasa.",indicators:["Petróleo >$120","FMI retrasa","Brecha >15%"]},
  {title:"D — Provincias Unidas 3er polo",pct:10,color:"var(--purple)",tag:"Nuevo equilibrio",body:"Bisagra legislativa autónoma. Tres jugadores.",indicators:["PU >35 diputados","Vetos coordinados"]},
  {title:"E — Ruptura sistémica",pct:5,color:"var(--red)",tag:"Tail risk",body:"Shock + crisis + FMI cancela + movilización.",indicators:["Crisis bancaria","FMI cancela"]},
];

// ═══════════════ AI QUERY KNOWLEDGE BASE ═══════════════
const AI_KB = {
  inflacion: {answer:"La inflación de marzo 2026 fue 3,4% mensual, acumulando ~30% anual. El BCRA proyecta convergencia a 20-22% para diciembre, pero el FMI estima 30,4%. El punto de quiebre del modelo Nash es 35% anual — por encima de eso, el equilibrio migra a crisis.",sources:"BCRA REM, FMI WEO, IERAL"},
  pobreza: {answer:"Pobreza 31,6% (INDEC). La canasta básica supera $350.000/hogar. El ajuste fiscal mantiene superávit pero erosiona capacidad de compra. Las PyMEs son las más afectadas — 62% reportó caída de ventas. El dilema Nash: austeridad sostenida genera credibilidad pero riesgo social.",sources:"INDEC, Poliarquía, IERAL"},
  milei: {answer:"Milei opera como 'árbitro supremo' en el modelo Nash. Su función de utilidad maximiza imagen para reelección 2027. No elige en la interna Karina-Caputo porque elegir es definir sucesor. Estrategia dominante: consolidar superávit + desinflación como narrativa central.",sources:"Análisis propio, Pagni, van der Kooy"},
  karina: {answer:"Karina Milei controla 4 de 9 ministerios (Defensa, Seguridad, Justicia, Interior). Impulsa desplazamiento de Caputo de SIDE. Armado territorial vertical. Su poder es orgánico, no institucional. Bloqueó 203 ternas de jueces de Caputo durante 2 años.",sources:"Infobae, LN+, análisis interno"},
  provincias: {answer:"24 provincias con 3 bloques: aliadas (10), neutrales (9), hostiles (5). El desdoblamiento 2027 es la jugada dominante — cada gobernador tiene incentivo a desdoblar. Se esperan 12-14 provincias desdobladas. Provincias Unidas emerge como tercer polo.",sources:"VisionPolítica, Infobae, análisis propio"},
  pymes: {answer:"62% de PyMEs con caída de ventas. 41% redujo personal. Solo 28% accede a crédito. Sectores resilientes: agro (82%), tech (88%), servicios profesionales (68%). Sectores críticos: construcción (30%), comercio minorista (42%), manufactura (38%).",source:"CAME, PyMEs Argentinas, Deloitte"},
  fmi: {answer:"Segunda revisión del programa FMI esperada. Desembolso potencial USD 1.000M. Riesgo país cayó de ~2.000 a 634pb. Condicionalidad: metas fiscales y cambiarias. Si se cumple, el equilibrio Nash se estabiliza. Si no, migra a escenario C.",sources:"FMI, BCRA, Bloomberg"},
  default: {answer:"Basado en el modelo Nash actual: el sistema político argentino opera en equilibrio no cooperativo de segundo orden. Milei maximiza poder post-electoral, gobernadores cooperan legislativamente por ATN, oposición fragmentada. El FMI disciplina el eje económico. Punto de quiebre: inflación >35%.",sources:"Modelo Nash Tablero, fuentes múltiples"},
};

// ═══════════════ RENDER FUNCTIONS ═══════════════

function showPanel(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
}

// ═══════════════ AI MODAL ═══════════════
function openAiModal() { document.getElementById('aiModal').classList.add('show'); document.getElementById('aiQueryInput').focus(); }
function closeAiModal() { document.getElementById('aiModal').classList.remove('show'); document.getElementById('aiQueryResult').innerHTML = ''; }

function runAiQuery() {
  const q = document.getElementById('aiQueryInput').value.toLowerCase().trim();
  if (!q) return;
  const result = document.getElementById('aiQueryResult');
  result.innerHTML = '<div style="text-align:center;padding:20px"><div class="loading-spinner" style="margin:0 auto"></div><p style="margin-top:8px;font-size:12px;color:var(--text-muted)">Analizando…</p></div>';
  setTimeout(() => {
    let kb = AI_KB.default;
    for (const [key, val] of Object.entries(AI_KB)) {
      if (key !== 'default' && q.includes(key)) { kb = val; break; }
    }
    result.innerHTML = `<p>${kb.answer}</p><div class="ai-source">Fuentes: ${kb.sources}</div>`;
  }, 800 + Math.random() * 600);
}

// ═══════════════ AI THINKING PANEL ═══════════════
function renderAIThinking() {
  document.getElementById('ai-thinking').innerHTML = AI_THINKING.map(t => `
    <div class="thinking-item">
      <div class="thinking-source">${t.source}</div>
      <div class="thinking-text">${t.text}</div>
      <div class="thinking-confidence">📊 ${t.confidence}</div>
    </div>`).join('');
}

function renderSocialTrends() {
  document.getElementById('social-trends').innerHTML = SOCIAL_TRENDS.map(s => `
    <div class="social-item">
      <div class="social-platform ${s.platform}">${s.icon}</div>
      <div class="social-content">
        <div class="social-trend">${s.topic}</div>
        <div class="social-heat"><span class="social-heat-bar" style="width:${s.heat}px;background:${s.heat>80?'var(--red)':s.heat>60?'var(--amber)':'var(--green)'}"></span>${s.heat}% · ${s.change}</div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;line-height:1.5">${s.trend}</div>
      </div>
    </div>`).join('');
}

function renderAnalystsNational() {
  document.getElementById('analysts-national').innerHTML = ANALYSTS_NATIONAL.map(a => `
    <div class="analyst-item">
      <div class="analyst-name">${a.name} <span class="analyst-outlet">${a.outlet}</span></div>
      <div class="analyst-quote">"${a.quote}"</div>
      <span class="analyst-stance ${a.stance}">${a.stance==='bullish'?'Optimista':a.stance==='bearish'?'Pesimista':'Neutral'}</span>
    </div>`).join('');
}

function renderAnalystsIntl() {
  document.getElementById('analysts-intl').innerHTML = ANALYSTS_INTL.map(a => `
    <div class="analyst-item">
      <div class="analyst-name">${a.name} <span class="analyst-outlet">${a.outlet}</span></div>
      <div class="analyst-quote">"${a.quote}"</div>
      <span class="analyst-stance ${a.stance}">${a.stance==='bullish'?'Optimista':a.stance==='bearish'?'Pesimista':'Neutral'}</span>
    </div>`).join('');
}

function renderOrgsNational() {
  document.getElementById('orgs-national').innerHTML = ORGS_NATIONAL.map(o => `
    <div class="org-item">
      <div class="org-name">${o.name} <span class="org-type">${o.type}</span></div>
      <div class="org-position">${o.position}</div>
    </div>`).join('');
}

function renderOrgsIntl() {
  document.getElementById('orgs-intl').innerHTML = ORGS_INTL.map(o => `
    <div class="org-item">
      <div class="org-name">${o.name} <span class="org-type">${o.type}</span></div>
      <div class="org-position">${o.position}</div>
    </div>`).join('');
}

// ═══════════════ PyMEs ═══════════════
function renderPymesDiagnosis() {
  document.getElementById('pymes-diagnosis').innerHTML = PYMES_DIAGNOSIS.map(s => `
    <div class="pyme-sector">
      <div class="pyme-sector-icon">${s.icon}</div>
      <div class="pyme-sector-info">
        <div class="pyme-sector-name">${s.name}</div>
        <div class="pyme-sector-detail">${s.detail}</div>
      </div>
      <div class="pyme-sector-bar"><div class="pyme-sector-bar-fill" style="width:${s.bar}%;background:${s.color}"></div></div>
    </div>`).join('');
}

function renderPymesIndicators() {
  document.getElementById('pymes-indicators').innerHTML = PYMES_INDICATORS.map(i => `
    <div class="tension-row">
      <span class="tension-label">${i.label}</span>
      <span style="font-family:var(--font-mono);font-size:12px;font-weight:600;color:var(--text)">${i.value}</span>
      <span class="tension-val" style="color:${i.trend==='up'?'var(--green)':i.trend==='down'?'var(--red)':'var(--text-muted)'}">${i.change}</span>
    </div>`).join('');
}

function renderPymesPolicies() {
  document.getElementById('pymes-policies').innerHTML = PYMES_POLICIES.map(p => `
    <p class="body-text"><strong>${p.name}</strong> <span class="tag ${p.impact==='Positivo'?'tag-solid':p.impact==='Negativo'?'tag-hostile':'tag-weak'}">${p.impact}</span><br>${p.detail}</p>`).join('');
}

function renderPymesScenarios() {
  document.getElementById('pymes-scenarios').innerHTML = PYMES_SCENARIOS.map(s => `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border-light)">
      <span style="flex:1;font-size:13px;color:var(--text-secondary)">${s.title}</span>
      <div style="width:80px;height:5px;background:var(--bg-muted);border-radius:3px;overflow:hidden"><div style="width:${s.pct}%;height:5px;background:${s.color};border-radius:3px"></div></div>
      <span style="font-family:var(--font-mono);font-size:12px;font-weight:600;color:${s.color};width:36px;text-align:right">${s.pct}%</span>
    </div>
    <p style="font-size:12px;color:var(--text-muted);padding:4px 0 8px">${s.detail}</p>`).join('');
}

// ═══════════════ KANBAN ═══════════════
function renderKanban() {
  const cols = {emerging:[],active:[],dominant:[],collapsed:[]};
  KANBAN_CARDS.forEach(c => { if (cols[c.col]) cols[c.col].push(c); });
  for (const [colId, cards] of Object.entries(cols)) {
    const container = document.getElementById('kanban-' + colId);
    container.innerHTML = cards.map(c => `
      <div class="kanban-card" draggable="true" data-id="${c.id}" data-pct="${c.pct}" data-color="${c.color}"
           ondragstart="kanbanDragStart(event)" ondragend="kanbanDragEnd(event)">
        <div class="kanban-card-title">${c.title}</div>
        <div class="kanban-card-pct" style="color:${c.color}">${c.pct}%</div>
        <div class="kanban-card-bar"><div class="kanban-card-bar-fill" style="width:${c.pct}%;background:${c.color}"></div></div>
        <span class="kanban-card-tag" style="background:${c.color}18;color:${c.color}">${c.tag}</span>
        <div class="kanban-card-desc">${c.desc}</div>
      </div>`).join('');
    document.getElementById('kanban-' + colId + '-count').textContent = cards.length;
  }
  setupKanbanDrop();
  renderKanbanPayoff();
}

let draggedCard = null;
function kanbanDragStart(e) {
  draggedCard = e.target;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', e.target.dataset.id);
}
function kanbanDragEnd(e) { e.target.classList.remove('dragging'); draggedCard = null; document.querySelectorAll('.kanban-cards').forEach(c=>c.classList.remove('drag-over')); }

function setupKanbanDrop() {
  document.querySelectorAll('.kanban-cards').forEach(col => {
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
    col.addEventListener('drop', e => {
      e.preventDefault(); col.classList.remove('drag-over');
      const cardId = e.dataTransfer.getData('text/plain');
      const card = KANBAN_CARDS.find(c => c.id === cardId);
      if (card) {
        card.col = col.dataset.col;
        renderKanban();
      }
    });
  });
}

function renderKanbanPayoff() {
  const cols = {dominant:0,active:0,emerging:0,collapsed:0};
  KANBAN_CARDS.forEach(c => { if (cols[c.col] !== undefined) cols[c.col] += c.pct; });
  const total = Object.values(cols).reduce((a,b)=>a+b,0);
  document.getElementById('kanban-payoff').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
      <div class="sim-payoff-cell nash"><div class="sim-payoff-label">Dominantes</div><div class="sim-payoff-value" style="color:var(--green)">${cols.dominant}%</div></div>
      <div class="sim-payoff-cell"><div class="sim-payoff-label">Activos</div><div class="sim-payoff-value" style="color:var(--amber)">${cols.active}%</div></div>
      <div class="sim-payoff-cell"><div class="sim-payoff-label">Emergentes</div><div class="sim-payoff-value" style="color:var(--blue)">${cols.emerging}%</div></div>
      <div class="sim-payoff-cell"><div class="sim-payoff-label">Colapsados</div><div class="sim-payoff-value" style="color:var(--red)">${cols.collapsed}%</div></div>
    </div>
    <p class="table-note" style="margin-top:8px">Total: ${total}% — Las probabilidades se redistribuyen al mover escenarios entre columnas.</p>`;
}

// ═══════════════ PREDICTOR ═══════════════
function runPrediction() {
  const variable = document.getElementById('pred-variable').value;
  const horizon = document.getElementById('pred-horizon').value;
  const current = parseFloat(document.getElementById('pred-current').value);
  const trend = document.getElementById('pred-trend').value;
  const external = document.getElementById('pred-external').value;
  const rawData = document.getElementById('pred-data').value.trim();

  if (isNaN(current)) { alert('Ingresá un valor actual válido'); return; }

  // Parse historical data
  let history = [];
  if (rawData) {
    try {
      if (rawData.startsWith('[')) { history = JSON.parse(rawData); }
      else { history = rawData.split(',').map(Number).filter(n => !isNaN(n)); }
    } catch(e) { history = []; }
  }

  // Prediction model (simplified Monte Carlo-inspired)
  const horizonMonths = {'1m':1,'3m':3,'6m':6,'1y':12,'2y':24}[horizon] || 6;
  const trendFactor = trend==='rising'?1.05:trend==='falling'?0.95:1.0;
  const externalFactor = external==='positive'?0.92:external==='negative'?1.12:1.0;

  const predictions = [];
  let val = current;
  for (let m = 1; m <= horizonMonths; m++) {
    const noise = 0.97 + Math.random()*0.06;
    val = val * trendFactor * (1 + (externalFactor-1)*0.1) * noise;
    predictions.push({month:m, value:Math.round(val*100)/100});
  }

  const finalVal = predictions[predictions.length-1].value;
  const minVal = Math.min(...predictions.map(p=>p.value));
  const maxVal = Math.max(...predictions.map(p=>p.value));
  const confidence = Math.max(40, 90 - horizonMonths*3);

  // Render chart
  const maxH = 100;
  const allVals = [current, ...predictions.map(p=>p.value)];
  const minAll = Math.min(...allVals);
  const maxAll = Math.max(...allVals);
  const range = maxAll - minAll || 1;

  const chartBars = [{m:'Hoy',v:current}, ...predictions.map(p=>({m:'M'+p.month,v:p.value}))];
  const chartHtml = chartBars.map((b,i) => {
    const h = ((b.v - minAll)/range)*maxH + 10;
    const color = i===0?'var(--blue)':b.v>current?'var(--green)':'var(--red)';
    return `<div class="pred-bar" style="height:${h}%;background:${color}"><span class="pred-bar-label">${b.v}</span></div>`;
  }).join('');

  const varLabel = {inflation:'Inflación',risk_premium:'Riesgo país',poverty:'Pobreza',gdp_growth:'PIB',exchange_rate:'Tipo de cambio',unemployment:'Desempleo',pyme_sales:'Ventas PyME',approval:'Aprobación'}[variable];

  document.getElementById('pred-result').innerHTML = `
    <div class="pred-result-card">
      <div class="pred-result-header">
        <div class="pred-result-title">${varLabel}</div>
        <div class="pred-result-horizon">Horizonte: ${horizon} (${horizonMonths} meses)</div>
      </div>
      <div class="pred-chart">${chartHtml}</div>
      <div class="pred-interval">
        <span>Actual: <strong>${current}</strong></span>
        <span>Proyectado: <strong style="color:${finalVal>current?'var(--green)':'var(--red)'}">${finalVal}</strong></span>
        <span>Rango: <strong>${minVal} – ${maxVal}</strong></span>
      </div>
      <div class="pred-confidence" style="margin-top:12px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:4px">
          <span>Confianza del modelo</span><span>${confidence}%</span>
        </div>
        <div class="pred-confidence-bar"><div class="pred-confidence-fill" style="width:${confidence}%"></div></div>
      </div>
    </div>
    <div style="font-size:11px;color:var(--text-muted);padding:8px 0">
      <strong>Nota:</strong> Modelo simplificado basado en tendencia + factores externos. Para predicciones de mayor precisión, cargá más datos históricos y conectá fuentes en tiempo real.
    </div>`;
}

// ═══════════════ NASH SIMULATOR ═══════════════
function runSimulation() {
  const playerA = document.getElementById('sim-playerA').value;
  const strategyA = document.getElementById('sim-strategyA').value;
  const playerB = document.getElementById('sim-playerB').value;

  const PAYOFFS = {
    milei: { cooperate:{governors:4,opposition:3,fmi:5,markets:5}, defect:{governors:2,opposition:4,fmi:2,markets:3}, pressure:{governors:3,opposition:5,fmi:3,markets:4}, wait:{governors:3,opposition:3,fmi:4,markets:4} },
    governors: { cooperate:{milei:4,opposition:3,fmi:4}, defect:{milei:5,opposition:4,fmi:3}, pressure:{milei:3,opposition:4,fmi:3}, wait:{milei:3,opposition:3,fmi:3} },
    opposition: { cooperate:{milei:3,governors:3,fmi:3}, defect:{milei:4,governors:4,fmi:2}, pressure:{milei:5,governors:4,fmi:2}, wait:{milei:3,governors:3,fmi:3} },
    fmi: { cooperate:{milei:5,governors:4,opposition:3}, defect:{milei:2,governors:2,opposition:2}, pressure:{milei:4,governors:3,opposition:2}, wait:{milei:4,governors:3,opposition:3} },
  };

  const payoffsA = PAYOFFS[playerA]?.[strategyA] || {};
  const payoffB = payoffsA[playerB] || 3;
  const payoffA = strategyA==='cooperate'?4:strategyA==='defect'?3:strategyA==='pressure'?5:3;

  const names = {milei:'Milei / Nación',governors:'Gobernadores',opposition:'Oposición',fmi:'FMI',markets:'Mercados'};
  const stratNames = {cooperate:'Cooperar',defect:'Desertar',pressure:'Presionar',wait:'Esperar'};

  const isNash = (payoffA >= 3 && payoffB >= 3);
  const colorA = payoffA>=4?'var(--green)':payoffA>=3?'var(--amber)':'var(--red)';
  const colorB = payoffB>=4?'var(--green)':payoffB>=3?'var(--amber)':'var(--red)';

  document.getElementById('sim-result').innerHTML = `
    <div class="sim-result-card">
      <h4 style="font-size:14px;margin-bottom:12px">${names[playerA]} (${stratNames[strategyA]}) vs ${names[playerB]}</h4>
      <div class="sim-payoff-grid">
        <div class="sim-payoff-cell ${isNash?'nash':''}">
          <div class="sim-payoff-label">${names[playerA]}</div>
          <div class="sim-payoff-value" style="color:${colorA}">${payoffA}</div>
        </div>
        <div class="sim-payoff-cell ${isNash?'nash':''}">
          <div class="sim-payoff-label">${names[playerB]}</div>
          <div class="sim-payoff-value" style="color:${colorB}">${payoffB}</div>
        </div>
      </div>
      <p style="margin-top:12px;font-size:13px;color:var(--text-secondary)">
        ${isNash ? '✅ <strong>Equilibrio de Nash:</strong> Ningún jugador mejora su payoff desviándose unilateralmente.' : '⚠️ <strong>No es equilibrio:</strong> Al menos un jugador tiene incentivo a desviarse.'}
      </p>
      <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
        ${strategyA==='cooperate'?'Cooperación mutua tiende a estabilizar el sistema pero requiere compromiso creíble.':strategyA==='defect'?'Deserción genera ventaja temporal pero erosiona confianza a largo plazo.':'Presión maximiza payoff corto pero puede desencadenar represalia.'}
      </p>
    </div>`;
}

// ═══════════════ EXISTING RENDERERS ═══════════════
function togglePlayer(el) { const was=el.classList.contains('expanded'); document.querySelectorAll('.player-card.expanded').forEach(c=>c.classList.remove('expanded')); if(!was) el.classList.add('expanded'); }

function renderActors() {
  document.getElementById('triangle-grid').innerHTML = ACTORS_LLA.map(a => `
    <div class="player-card" onclick="togglePlayer(this)">
      <div class="player-header"><div class="avatar ${a.avatarClass}">${a.initials}</div><div><div class="player-name">${a.name}</div><div class="player-role">${a.role}</div></div></div>
      <div class="player-detail"><p class="body-text">${a.detail}</p><div class="alliance-grid">${a.alliances.map((al,i)=>`<span class="tag tag-${a.allianceTypes[i]}">${al}</span>`).join('')}</div></div>
    </div>`).join('');
  document.getElementById('cabinet-grid').innerHTML = ACTORS_CABINET.map(a => `
    <div class="player-card" onclick="togglePlayer(this)">
      <div class="player-header"><div class="avatar ${a.avatarClass}">${a.initials}</div><div><div class="player-name">${a.name}</div><div class="player-role">${a.role}</div></div></div>
      <div class="player-detail"><p class="body-text">${a.detail}</p></div>
    </div>`).join('');
  document.getElementById('emerging-list').innerHTML = ACTORS_EMERGING.map(a => `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`).join('');
}

function renderProvinces() {
  let html = '';
  PROVINCES.forEach(p => {
    const col = p.align==='allied'?'var(--green)':p.align==='hostile'?'var(--red)':'var(--amber)';
    const label = p.align==='allied'?'aliada':p.align==='hostile'?'opositora':'variable';
    html += `<div class="prov-row" onclick="toggleProv(this)"><div class="prov-dot" style="background:${col}"></div><span class="prov-name">${p.name}</span><span class="prov-gov">${p.gov}</span><span class="prov-align" style="background:${col}18;color:${col}">${label}</span></div><div class="prov-detail"><strong>${p.party}</strong> · ${p.funds}<br>${p.note}</div>`;
  });
  document.getElementById('province-list').innerHTML = html;
}
function toggleProv(el) { const det=el.nextElementSibling; const was=el.classList.contains('expanded'); document.querySelectorAll('.prov-row.expanded').forEach(r=>{r.classList.remove('expanded');r.nextElementSibling.style.display='none'}); if(!was){el.classList.add('expanded');det.style.display='block'} }

function renderShadow() {
  let html = '';
  for (const [key, label] of [['judicial','Operadores judiciales'],['digital','Ecosistema digital'],['economic','Poderes económicos']]) {
    html += `<div class="card card-purple-accent"><h3 class="card-header" style="color:var(--purple-700)">${label}</h3>`;
    SHADOW_ACTORS[key].forEach(a => { html += `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`; });
    html += `</div>`;
  }
  document.getElementById('shadow-content').innerHTML = html;
}

function renderCongress() {
  document.getElementById('diputados-table').innerHTML = CONGRESS.diputados.blocks.map(b => {
    const tc = b.position==='oficialismo'?'tag-solid':b.position==='oposición dura'?'tag-hostile':'tag-weak';
    return `<tr><td>${b.name}</td><td class="text-gold">${b.seats}</td><td><span class="tag ${tc}">${b.position}</span></td><td>${b.note}</td></tr>`;
  }).join('');
  document.getElementById('senado-table').innerHTML = CONGRESS.senado.blocks.map(b => {
    const tc = b.position==='oficialismo'?'tag-solid':b.position==='oposición'?'tag-hostile':'tag-weak';
    return `<tr><td>${b.name}</td><td>${b.seats}</td><td><span class="tag ${tc}">${b.position}</span></td><td>${b.note}</td></tr>`;
  }).join('');
  const v = CONGRESS.villarruel;
  document.getElementById('villarruel-detail').innerHTML = `<p class="body-text"><strong>Rol:</strong> ${v.role}</p><p class="body-text"><strong>Tensión:</strong> ${v.tension}</p><div class="alliance-grid">${v.alliances.map(([l,t])=>`<span class="tag tag-${t}">${l}</span>`).join('')}</div>`;
  document.getElementById('agenda-table').innerHTML = CONGRESS.agenda.map(a => `<tr><td>${a.project}</td><td class="${a.stateClass}">${a.state}</td><td>${a.actors}</td><td>${a.analysis}</td></tr>`).join('');
}

function renderAlliances() {
  document.getElementById('alliances-content').innerHTML = `<div class="grid-3">
    <div class="card card-green-accent"><h3 class="card-header" style="color:var(--green-700)">Sólidas</h3>${ALLIANCES.solid.map(a=>`<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`).join('')}</div>
    <div class="card card-amber-accent"><h3 class="card-header" style="color:var(--amber-700)">Débiles</h3>${ALLIANCES.weak.map(a=>`<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`).join('')}</div>
    <div class="card card-red-accent"><h3 class="card-header" style="color:var(--red-700)">Rotas</h3>${ALLIANCES.broken.map(a=>`<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`).join('')}</div>
  </div>`;
}

function renderIntl() {
  document.getElementById('intl-list').innerHTML = '<div style="display:flex;flex-direction:column;gap:8px">' + INTL_BLOCS.map(b => `
    <div class="bloc" onclick="this.classList.toggle('open')">
      <div class="bloc-head"><span class="bloc-flag">${b.flag}</span><span class="bloc-name">${b.name}</span><span class="bloc-status" style="color:${b.statusColor}">${b.status}</span></div>
      <div class="bloc-body">${b.body}<div style="margin-top:8px"><strong style="font-size:11px;color:var(--text-muted)">ACTORES:</strong> <span style="font-size:12px">${b.actors.join(' · ')}</span></div><div style="margin-top:8px;padding:8px;background:var(--red-50);border-radius:6px;border-left:3px solid var(--red)"><strong style="font-size:11px;color:var(--red)">RIESGO:</strong> <span style="font-size:12px">${b.risk}</span></div></div>
    </div>`).join('') + '</div>';
}

function renderScenarios() {
  document.getElementById('scenarios-list').innerHTML = SCENARIOS.map(s => `
    <div class="scenario" onclick="this.classList.toggle('open')">
      <div class="scenario-head"><div><div class="scenario-title">${s.title}</div><span class="scenario-tag" style="background:${s.color}18;color:${s.color}">${s.tag}</span></div><div class="scenario-pct" style="color:${s.color}">${s.pct}%</div></div>
      <div class="prob-bar"><div class="prob-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
      <div class="scenario-body">${s.body}<div style="margin-top:8px"><strong style="font-size:11px;color:var(--text-muted)">INDICADORES:</strong><ul style="margin:6px 0 0 18px;font-size:12px;color:var(--text-secondary)">${s.indicators.map(i=>`<li>${i}</li>`).join('')}</ul></div></div>
    </div>`).join('');
  document.getElementById('esc-mini').innerHTML = SCENARIOS.map(s => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span style="font-size:12px;color:var(--text-secondary);flex:1">${s.title.split('—')[0].trim()}</span>
      <div style="width:100px;height:5px;background:var(--bg-muted);border-radius:3px;overflow:hidden"><div style="width:${s.pct}%;height:5px;background:${s.color};border-radius:3px"></div></div>
      <span style="font-size:12px;font-family:var(--font-mono);font-weight:600;color:${s.color};width:36px;text-align:right">${s.pct}%</span>
    </div>`).join('');
}

// ═══════════════ UPDATE ═══════════════
async function fetchUpdate() {
  const btn = document.getElementById('updateBtn');
  const loading = document.getElementById('loading');
  btn.disabled = true; loading.classList.add('show');
  const msgs = ["Consultando fuentes internacionales…","Cruzando datos FMI y BCRA…","Analizando redes sociales…","Procesando pensamiento IA…","Actualizando PyMEs…","Simulando escenarios Nash…","Verificando analistas…","Recalculando Kanban…"];
  let mi = 0;
  const iv = setInterval(() => { document.getElementById('loading-msg').textContent = msgs[mi++ % msgs.length]; }, 800);
  await new Promise(r => setTimeout(r, 3500 + Math.random()*1500));
  clearInterval(iv);
  document.getElementById('inf-metric').textContent = (3.0+Math.random()*0.6).toFixed(1)+'%';
  document.getElementById('last-update').textContent = 'Act. '+new Date().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
  const shuffled = [...FEED_ITEMS].sort(()=>Math.random()-0.5);
  document.getElementById('feed-list').innerHTML = shuffled.slice(0,5).map(f=>`<div class="feed-item"><div class="feed-source">${f.source} <span class="feed-tag" style="background:var(--blue-50);color:var(--blue)">${f.tag}</span></div><div class="feed-text">${f.text}</div></div>`).join('');
  document.getElementById('analysis-feed').innerHTML = shuffled.slice(0,3).map(f=>`<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-light)"><div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-family:var(--font-mono)">${f.source}</div><div style="font-size:13px;color:var(--text-secondary)">${f.text}</div></div>`).join('');
  loading.classList.remove('show'); btn.disabled = false;
}

// ═══════════════ INIT ═══════════════
renderAIThinking();
renderSocialTrends();
renderAnalystsNational();
renderAnalystsIntl();
renderOrgsNational();
renderOrgsIntl();
renderPymesDiagnosis();
renderPymesIndicators();
renderPymesPolicies();
renderPymesScenarios();
renderKanban();
renderActors();
renderProvinces();
renderIntl();
renderScenarios();
renderShadow();
renderCongress();
renderAlliances();
document.getElementById('feed-list').innerHTML = FEED_ITEMS.slice(0,5).map(f=>`<div class="feed-item"><div class="feed-source">${f.source} <span class="feed-tag" style="background:var(--blue-50);color:var(--blue)">${f.tag}</span></div><div class="feed-text">${f.text}</div></div>`).join('');
document.getElementById('analysis-feed').innerHTML = FEED_ITEMS.slice(0,3).map(f=>`<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-light)"><div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-family:var(--font-mono)">${f.source}</div><div style="font-size:13px;color:var(--text-secondary)">${f.text}</div></div>`).join('');
document.getElementById('last-update').textContent = 'Act. '+new Date().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'});
