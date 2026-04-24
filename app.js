// ═══════════════════════════════════════════════════════════════
// Tablero Nash — Argentina v2.0
// Data & Interactive Logic — Actualizado 25/04/2026
// ═══════════════════════════════════════════════════════════════

// ═══════════════ PROVINCIAS (24) ═══════════════
const PROVINCES = [
  {name:"Buenos Aires",gov:"Axel Kicillof",party:"UxP",align:"hostile",funds:"-ajuste 20%",note:"No invitado a reunión de gobernadores. Caso Aubasa/hidrovía. Conflicto total con Nación. Desdoblamiento confirmado 2025. Kicillof construye bloque anti-Milei con Formosa y La Rioja."},
  {name:"CABA",gov:"Jorge Macri",party:"PRO",align:"allied",funds:"+57,3% vs 2024",note:"Aliada por Corte Suprema (coparticipación). Bullrich senadora. Alianza LLA-PRO con más del 50%. Macri oscila entre autonomía y alianza con LLA."},
  {name:"Córdoba",gov:"Martín Llaryora",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Confirmó desdoblamiento 2027. Miembro de Provincias Unidas. Apoyo caso a caso. Llaryora busca perfil presidencial propio."},
  {name:"Santa Fe",gov:"Maximiliano Pullaro",party:"Prov.Unidas",align:"neutral",funds:"variable",note:"Desdoblamiento confirmado. Bloque Provincias Unidas. Pullaro como referente del interior no peronista."},
  {name:"Mendoza",gov:"Alfredo Cornejo",party:"UCR",align:"neutral",funds:"media",note:"LLA ganó Mendoza en oct-2025. Ley de Glaciares genera tensión. Cornejo mantiene autonomía dentro de JxC."},
  {name:"Tucumán",gov:"Osvaldo Jaldo",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Volvió al consenso con LLA a mediados de 2025. Jaldo como puente entre peronismo pragmático y Nación."},
  {name:"Salta",gov:"Gustavo Sáenz",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Aliado variable. Construye frente regional con Figueroa y Passalacqua. Elecciones provinciales desdobladas."},
  {name:"Misiones",gov:"Hugo Passalacqua",party:"FR-aliado",align:"allied",funds:"+$4.000M ATN",note:"Alianza sólida con Nación. Construye frente regional. ATN como precio de cooperación legislativa."},
  {name:"Entre Ríos",gov:"Rogelio Frigerio",party:"PRO/LLA",align:"allied",funds:"media",note:"Relación muy buena con el Ejecutivo. Frigerio como referente PRO alineado con LLA."},
  {name:"Neuquén",gov:"Rolando Figueroa",party:"MPN",align:"allied",funds:"+récord (incendios)",note:"$15.000M en feb por incendios. Vaca Muerta = prioridad compartida. Relación estratégica con Nación."},
  {name:"Chubut",gov:"Ignacio Torres",party:"Prov.Unidas",align:"neutral",funds:"media",note:"Posición de bisagra. Intereses en hidrocarburos patagónicos. Torres como actor independiente."},
  {name:"Río Negro",gov:"Alberto Weretilneck",party:"regional",align:"neutral",funds:"media",note:"Relación funcional. Sin conflictos mayores. Weretilneck como gobernador regional puro."},
  {name:"Jujuy",gov:"Carlos Sadir",party:"UCR/JxC",align:"neutral",funds:"media",note:"Intereses en litio. Posición oscilante. Sadir busca equilibrio entre Nación y provincias del norte."},
  {name:"Catamarca",gov:"Raúl Jalil",party:"PJ-aliado",align:"allied",funds:"+fondos",note:"Volvió al consenso a mediados de 2025. Jalil como peronista pragmático."},
  {name:"Corrientes",gov:"Juan Pablo Valdés",party:"ECO/Prov.Unidas",align:"neutral",funds:"+$3.000M ATN",note:"Apoyo funcional al Ejecutivo. ATN como herramienta de negociación."},
  {name:"Chaco",gov:"Leandro Zdero",party:"PRO/LLA",align:"allied",funds:"media",note:"LLA ganó Chaco en oct-2025. Zdero como aliado orgánico."},
  {name:"Formosa",gov:"Gildo Insfrán",party:"PJ-K",align:"hostile",funds:"-72,1% vs 2023",note:"Segundo en pérdida de fondos. Kirchnerismo duro. Insfrán como bastión de resistencia peronista."},
  {name:"La Rioja",gov:"Ricardo Quintela",party:"PJ-K",align:"hostile",funds:"-87,9% vs 2023",note:"Provincia más castigada. Ejemplo máximo del mecanismo de 'asfixia'. Quintela como símbolo de la resistencia."},
  {name:"San Juan",gov:"Marcelo Orrego",party:"PRO/LLA",align:"allied",funds:"media",note:"Excelente relación con el Ejecutivo. Orrego como aliado orgánico del proyecto libertario."},
  {name:"San Luis",gov:"Claudio Poggi",party:"LLA",align:"allied",funds:"positiva",note:"Relación sólida con el Ejecutivo. Poggi como gobernador LLA puro."},
  {name:"Santa Cruz",gov:"Claudio Vidal",party:"Prov.Unidas",align:"neutral",funds:"+$4.000M ATN",note:"ATN de $100M consolidó relación. Posible acercamiento a LLA. Vidal como negociador pragmático."},
  {name:"La Pampa",gov:"Sergio Ziliotto",party:"PJ",align:"hostile",funds:"-70,9% vs 2023",note:"Tercer lugar en pérdida de fondos. Ziliotto como peronista no alineado con Kirchnerismo."},
  {name:"Tierra del Fuego",gov:"Gustavo Melella",party:"MFUT",align:"hostile",funds:"baja",note:"Posición autónoma y crítica. Melella como actor insular independiente."},
  {name:"Santiago del Estero",gov:"Gerardo Zamora",party:"FRES",align:"neutral",funds:"media",note:"Posición pragmática. Largo historial de negociación con todos los gobiernos."},
];

// ═══════════════ INTERNACIONAL (15 bloques) ═══════════════
const INTL_BLOCS = [
  {flag:"🇺🇸",name:"Estados Unidos / Trump",status:"aliado estratégico",statusColor:"var(--green)",
   body:"<strong>Estado:</strong> Relación más cálida desde Reagan. Trump y Milei comparten ideología libertaria-nacionalista. Vaca Muerta como moneda de cambio energético. CNA creado en 2026 como plataforma de cooperación en seguridad. Acuerdo comercial bilateral firmado feb 2026.",
   scenarios:[
     {title:"Escenario base (60%)",text:"Alineamiento sostiene. Vaca Muerta atrae inversión US. Argentina recibe respaldo del Tesoro."},
     {title:"Escenario tensión (25%)",text:"Cambios en política comercial de EEUU afectan acuerdos. Milei pierde respaldo pero mantiene alineamiento ideológico."},
     {title:"Escenario ruptura (15%)",text:"Cambio de administración o crisis interna en EEUU debilita relación. Argentina busca diversificación."}
   ],
   actors:["Donald Trump","Scott Bessent (Tesoro)","Marco Rubio (Estado)"],
   risk:"Dependencia del alineamiento hace vulnerable ante cambio en Washington."},
  {flag:"🇮🇱",name:"Israel / Netanyahu",status:"alianza personal",statusColor:"var(--green)",
   body:"<strong>Estado:</strong> 3 viajes de Milei a Israel en 2 años. Conversión al judaísmo en proceso. Apoyo explícito post-7/10. Dimensión espiritual y geopolítica.",
   scenarios:[
     {title:"Escenario base (65%)",text:"Relación personal sostiene. Cooperación en defensa y tecnología."},
     {title:"Escenario tensión (25%)",text:"Conflicto Medio Oriente escala. Argentina presionada por países árabes."},
     {title:"Escenario ruptura (10%)",text:"Cambio político en Israel o Argentina debilita vínculo personal."}
   ],
   actors:["Benjamin Netanyahu","Embajada Argentina en Israel"],
   risk:"Alineamiento total tensiona relación con países árabes y parte de la comunidad internacional."},
  {flag:"🇧🇷",name:"Brasil / Lula",status:"tensión ideológica",statusColor:"var(--red)",
   body:"<strong>Estado:</strong> Relación fría. Milei se negó a apoyar a Lula en crisis interna. Sin embargo, acuerdo Mercosur-UE requirió coordinación con Brasilia.",
   scenarios:[
     {title:"Escenario cooperación (40%)",text:"Pragmatismo comercial supera diferencias ideológicas. Mercosur funciona."},
     {title:"Escenario tensión (45%)",text:"Diferencias ideológicas impiden avances. Mercosur se estanca."},
     {title:"Escenario ruptura (15%)",text:"Confrontación abierta. Argentina busca acuerdos bilaterales fuera del Mercosur."}
   ],
   actors:["Lula da Silva","Geraldo Alckmin (Vice)"],
   risk:"Paradoja: Milei critica el socialismo de Lula pero necesita su firma para el acuerdo comercial más grande del Mercosur."},
  {flag:"🇨🇳",name:"China",status:"tensión silenciosa",statusColor:"var(--amber)",
   body:"<strong>Estado:</strong> Licitación de hidrovía excluyó empresas con capitales soberanos. Swap BCRA renovado pragmáticamente.",
   scenarios:[
     {title:"Escenario pragmático (50%)",text:"Relación comercial continúa a pesar de diferencias ideológicas."},
     {title:"Escenario distanciamiento (35%)",text:"Tensiones ideológicas afectan comercio. China busca alternativas."},
     {title:"Escenario confrontación (15%)",text:"China usa palancas económicas como represalia. Swap cancelado."}
   ],
   actors:["Embajada China","Empresas con capitales soberanos"],
   risk:"Paradoja: China es 2do destino de exportaciones argentinas. Tensión entre ideología y pragmatismo."},
  {flag:"🇷🇺",name:"Rusia",status:"ruptura formal",statusColor:"var(--red)",
   body:"<strong>Estado:</strong> Abandono del alineamiento con regímenes autoritarios. Salida del proceso BRICS. Rechazo a narrativa rusa sobre Ucrania.",
   scenarios:[
     {title:"Escenario base (80%)",text:"Ruptura formal se mantiene. Argentina alineada con Occidente."},
     {title:"Escenario pragmático (15%)",text:"Necesidad energética lleva a acercamiento táctico."},
     {title:"Escenario realineamiento (5%)",text:"Cambio geopolítico global reabre diálogo."}
   ],
   actors:["Embajada Rusa (reducida)"],
   risk:"Pérdida de relación histórica. Impacto limitado por bajo volumen comercial actual."},
  {flag:"🌍",name:"África / Global Sur",status:"distanciamiento",statusColor:"var(--amber)",
   body:"<strong>Estado:</strong> Salida de BRICS. Reducción de presencia en foros multilaterales progresistas.",
   scenarios:[
     {title:"Escenario base (70%)",text:"Distanciamiento se mantiene. Argentina prioriza EEUU/Europa."},
     {title:"Escenario reacercamiento (20%)",text:"Necesidad de votos en ONU lleva a reacercamiento táctico."},
     {title:"Escenario ruptura total (10%)",text:"Argentina completamente aislada del Global Sur."}
   ],
   actors:["BRICS","Unión Africana","CELAC"],
   risk:"Pérdida de votos en ONU y organismos regionales."},
  {flag:"🇪🇺",name:"Unión Europea / Mercosur",status:"hito histórico",statusColor:"var(--green)",
   body:"<strong>Estado:</strong> Acuerdo Mercosur-UE: acceso a mercado de 700M de consumidores. Beneficia a agroexportadores y sector automotriz.",
   scenarios:[
     {title:"Escenario implementación (55%)",text:"Acuerdo se implementa gradualmente. Beneficios comerciales se materializan."},
     {title:"Escenario obstrucción (30%)",text:"Oposición europea a deforestación amazónica complica implementación."},
     {title:"Escenario fracaso (15%)",text:"Presiones proteccionistas en Europa bloquean acuerdo."}
   ],
   actors:["Comisión Europea","Parlamento Europeo","Mercosur"],
   risk:"Oposición europea a deforestación amazónica puede complicar implementación."},
  {flag:"🕌",name:"Medio Oriente / Irán-Israel",status:"impacto directo",statusColor:"var(--red)",
   body:"<strong>Estado:</strong> FMI cita conflicto como factor que redujo PIB al 3,5% e inflación al 30,4%. Argentina exportador neto de energía (Vaca Muerta) tiene efecto positivo parcial.",
   scenarios:[
     {title:"Escenario contención (40%)",text:"Conflicto se mantiene localizado. Impacto en commodities moderado."},
     {title:"Escenario escalada (40%)",text:"Escalada regional. Commodities suben. Inflación importada."},
     {title:"Escenario guerra regional (20%)",text:"Conflicto ampliado. Crisis energética global. Argentina beneficiada como exportador."}
   ],
   actors:["Irán","Israel","Arabia Saudita","Hamas","Hezbollah"],
   risk:"Escalada puede disparar commodities pero también generar inestabilidad financiera global."},
  {flag:"🌏",name:"Asia / Japón / Corea / India",status:"oportunidad abierta",statusColor:"var(--blue)",
   body:"<strong>Estado:</strong> Socios estratégicos potenciales en litio y energía. RIGI busca atraer capitales asiáticos. India como mercado emergente para soja y litio.",
   scenarios:[
     {title:"Escenario cooperación (50%)",text:"Acuerdos bilaterales se concretan. Inversión asiática crece."},
     {title:"Escenario estancamiento (35%)",text:"Burocracia y falta de confianza frenan acuerdos."},
     {title:"Escenario competencia (15%)",text:"China y EEUU compiten por influencia en Argentina."}
   ],
   actors:["JETRO (Japón)","KOTRA (Corea)","CII (India)"],
   risk:"Cadena de valor del litio conecta con industria de baterías. Competencia con Australia y Chile."},
  {flag:"🌐",name:"FMI / BM / OCDE",status:"relación clave",statusColor:"var(--green)",
   body:"<strong>Estado:</strong> Segunda revisión del programa FMI esperada. Desembolso potencial USD 1.000M. Riesgo país cayó de ~2.000 a 634pb.",
   scenarios:[
     {title:"Escenario cumplimiento (55%)",text:"Metas fiscales y cambiarias cumplidas. Desembolsos en tiempo y forma."},
     {title:"Escenario ajuste (30%)",text:"FMI exige ajuste adicional. Tensión política interna."},
     {title:"Escenario incumplimiento (15%)",text:"Metas no cumplidas. Reestructuración del programa."}
   ],
   actors:["Kristalina Georgieva (FMI)","OCDE (proyecciones positivas)"],
   risk:"Condicionalidad: cumplimiento de metas fiscales y cambiarias."},
  {flag:"🌎",name:"Latinoamérica — aliados",status:"mixto",statusColor:"var(--amber)",
   body:"<strong>Estado:</strong> Bukele y Milei comparten ideología. Chile de Boric distante pero pragmático. Venezuela y Cuba como contraste ideológico.",
   scenarios:[
     {title:"Escenario alianza ideológica (40%)",text:"Derecha liberal latinoamericana se consolida como bloque."},
     {title:"Escenario pragmatismo (45%)",text:"Países priorizan comercio sobre ideología."},
     {title:"Escenario confrontación (15%)",text:"División ideológica se profundiza. Foros regionales paralizados."}
   ],
   actors:["Nayib Bukele (El Salvador)","Gabriel Boric (Chile)","Nicolás Maduro (Venezuela)"],
   risk:"Milei busca ser referente de la derecha liberal latinoamericana."},
  {flag:"📊",name:"WEF / OCDE / OMC",status:"engagement activo",statusColor:"var(--green)",
   body:"<strong>Estado:</strong> Participación en Davos con discursos de alto impacto. OCDE mejoró proyecciones de PIB. Ingreso formal a la OCDE como objetivo de mediano plazo.",
   scenarios:[
     {title:"Escenario integración (60%)",text:"Argentina avanza hacia ingreso a OCDE. Reputación internacional mejora."},
     {title:"Escenario estancamiento (30%)",text:"Proceso de ingreso se ralentiza por condiciones internas."},
     {title:"Escenario rechazo (10%)",text:"Condiciones no cumplidas. Proceso suspendido."}
   ],
   actors:["WEF (Davos)","OCDE (proyecciones)","OMC (comercio)"],
   risk:"Ingreso a OCDE como objetivo de mediano plazo requiere reformas estructurales."},
  {flag:"🇻🇪",name:"Venezuela / Cuba / Nicaragua",status:"confrontación",statusColor:"var(--red)",
   body:"<strong>Estado:</strong> Ruptura diplomática con Venezuela. Rechazo al régimen de Maduro. Cuba y Nicaragua como ejes del 'eje del mal' según narrativa libertaria.",
   scenarios:[
     {title:"Escenario base (70%)",text:"Confrontación se mantiene. Argentina alineada con EEUU."},
     {title:"Escenario pragmático (20%)",text:"Diálogo táctico para temas migratorios y comerciales."},
     {title:"Escenario acercamiento (10%)",text:"Cambio de gobierno en Venezuela reabre relaciones."}
   ],
   actors:["Nicolás Maduro","Miguel Díaz-Canel (Cuba)"],
   risk:"Ruptura total reduce influencia argentina en foros regionales."},
  {flag:"🇲🇽",name:"México",status:"tensión bilateral",statusColor:"var(--amber)",
   body:"<strong>Estado:</strong> Relación tensa con gobierno de Sheinbaum. Diferencias ideológicas profundas. Comercialmente importante pero políticamente distante.",
   scenarios:[
     {title:"Escenario tensión controlada (50%)",text:"Diferencias se mantienen pero comercio continúa."},
     {title:"Escenario distanciamiento (35%)",text:"Tensiones afectan acuerdos comerciales y diplomáticos."},
     {title:"Escenario confrontación (15%)",text:"Ruptura diplomática. Retiro de embajadores."}
   ],
   actors:["Claudia Sheinbaum","Marcelo Ebrard (Canciller)"],
   risk:"México como referente de la izquierda latinoamericana. Competencia por influencia regional."},
  {flag:"🇮🇳",name:"India",status:"potencial comercial",statusColor:"var(--blue)",
   body:"<strong>Estado:</strong> India como mercado emergente clave para soja, litio y energía. Potencial de cooperación en tecnología y farmacéutica.",
   scenarios:[
     {title:"Escenario cooperación (45%)",text:"Acuerdos bilaterales se concretan. Comercio crece."},
     {title:"Escenario estancamiento (40%)",text:"Distancia geográfica y falta de prioridad frenan avances."},
     {title:"Escenario competencia (15%)",text:"India compite con China por recursos argentinos."}
   ],
   actors:["Narendra Modi","Embajada India"],
   risk:"India como alternativa a China. Potencial en litio y farmacéutica."},
];

// ═══════════════ ACTORES INTERNOS EXPANDIDOS ═══════════════
const ACTORS_LLA = [
  {initials:"JM",avatarClass:"avatar-gold",name:"Javier Milei",role:"Presidente — árbitro supremo",
   alliances:["Karina Milei ✓","Santiago Caputo ~","Luis Caputo ✓","Trump / EEUU ✓","PRO ~","Netanyahu / Israel ✓"],
   allianceTypes:["solid","weak","solid","solid","weak","solid"],
   detail:"<strong>Función de utilidad:</strong> maximizar imagen rumbo a reelección 2027. Arbitra interna Karina–Caputo sin elegir abiertamente hasta que el costo lo exige. Respaldó públicamente a Karina (abr 2026) al interactuar con mensajes de su entorno en X.<br><br><strong>Estrategia dominante:</strong> consolidar superávit + desinflación como narrativa central. Evitar agenda social que lo desgaste. Usar victorias legislativas (reforma laboral, acuerdo UE-Mercosur) como señal hacia mercados.<br><br><strong>Debilidad:</strong> la interna no resuelta genera bloqueos en gestión. Viaje a Israel (abr 2026) coincide con explosión pública de la interna.<br><br><strong>Tapado:</strong> podría sorprender con un cambio de gabinete post elecciones legislativas 2025 si la interna escala."},
  {initials:"KM",avatarClass:"avatar-purple",name:"Karina Milei",role:"Secretaria General — \"El Jefe\"",
   alliances:["Lilia Lemoine ✓","Martín Menem ✓","Sebastián Pareja ✓","Mahiques (Justicia) ✓","Angelici ✓","Santiago Caputo ✗"],
   allianceTypes:["solid","solid","solid","solid","solid","hostile"],
   detail:"<strong>Movimientos recientes (abr 2026):</strong> impulsa desplazamiento de Caputo de la SIDE; responsabiliza a Caputo por filtraciones del caso Libra; controla 4 de 9 ministerios: Defensa, Seguridad, Justicia e Interior.<br><br><strong>Táctica:</strong> armado territorial vertical. Control de candidaturas 2027. Bloqueó 203 ternas de jueces armadas por Caputo durante 2 años.<br><br><strong>Activo clave:</strong> control de la estructura partidaria y vínculo directo con gobernadores aliados. Su poder es orgánico, no institucional."},
  {initials:"SC",avatarClass:"avatar-red",name:"Santiago Caputo",role:"Asesor presidencial — \"Las Fuerzas del Cielo\"",
   alliances:["Gordo Dan / Fuerzas Cielo ✓","Javier Milei ~","Luis Caputo ≈","Karina Milei ✗"],
   allianceTypes:["solid","weak","neutral","hostile"],
   detail:"<strong>Status actual:</strong> bajo presión máxima. Perdió control de Justicia (salida de Amerio, llegada de Mahiques). Amenaza con renuncia si pierde la SIDE.<br><br><strong>Activos restantes:</strong> influencia comunicacional, \"Gordo Dan\" y ecosistema digital libertario, vínculo personal con Javier Milei.<br><br><strong>Riesgo:</strong> si renuncia, vacío estratégico en comunicación digital y posible faccionalismo abierto dentro de LLA."},
];

const ACTORS_CABINET = [
  {initials:"LC",avatarClass:"avatar-green",name:"Luis Caputo",role:"Ministro de Economía",
   detail:"Pilar del programa de estabilización. Superávit fiscal mantenido. Levantamiento del cepo (abr 2025). Acuerdo FMI en curso. Políticamente \"independiente\" según el propio gobierno.<br><br><strong>Desafío 2026:</strong> inflación de marzo 3,4% contradice meta presupuestaria del 10,1% anual. FMI proyecta 30,4%. Su credibilidad como âncora está en juego."},
  {initials:"FS",avatarClass:"avatar-teal",name:"Federico Sturzenegger",role:"Desregulación — vínculo directo con Milei",
   detail:"Celebrado internacionalmente: Argentina fue en 2025 el país con la mayor mejora en libertad económica del mundo. Relación directa con el presidente. Clave para el Pacto de Mayo y agenda de privatizaciones."},
  {initials:"PQ",avatarClass:"avatar-blue",name:"Pablo Quirno",role:"Canciller",
   detail:"Condujo negociación del acuerdo Mercosur-UE. Presidió reunión FAIE en Palacio San Martín (mar 2026). Perfil bajo pero estratégico en política exterior."},
];

const ACTORS_EMERGING = [
  {name:"Manuel Adorni",role:"Jefe de Gabinete",note:"Investigado por enriquecimiento ilícito. Karina lo respaldó públicamente. Posible candidato a jefe de gobierno porteño."},
  {name:"Juan Bautista Mahiques",role:"Ministro de Justicia",note:"Nuevo referente del eje karinista. Promovido por Karina con apoyo de Angelici. Reemplazó a Amerio."},
  {name:"Patricia Bullrich",role:"Ministra de Seguridad",note:"Bajo el eje de Karina. Obtuvo más del 50% en CABA (alianza LLA-PRO). Posible candidata a senadora."},
  {name:"Sandra Pettovello",role:"Capital Humano",note:"Figura en equilibrio entre Karina y el presidente. Administra el área social más sensible."},
  {name:"Martín Menem",role:"Presidente Diputados",note:"Bloque familiar-territorial dentro de LLA. Controla agenda legislativa."},
  {name:"Lilia Lemoine",role:"Diputada",note:"Operadora del eje Karina en el Congreso. El cruce con Gordo Dan fue la 'ruptura de Perón con Montoneros'."},
  {name:"Ramiro Marra",role:"Diputado",note:"Ecosistema digital. Figura mediática del bloque LLA."},
];

// ═══════════════ TAPADOS (ACTORES EN LA SOMBRA EXPANDIDO) ═══════════════
const SHADOW_ACTORS = {
  judicial: [
    {name:"Cristian Auguarda",role:"SIDE / Caputo",note:"Conducción actual de la SIDE bajo influencia de Santiago Caputo. Objetivo de desplazamiento por Karina. Controla inteligencia doméstica."},
    {name:"Diego Kravetz",role:"Sub-SIDE",note:"Salida prevista para competir por intendencia de Lanús. Vínculo con ecosistema Caputo."},
    {name:"Sebastián Amerio",role:"Ex-Justicia",note:"Desplazado por Mahiques. Compensado con la Procuración del Tesoro. Caputo lo quería en la SIDE."},
    {name:"Eduardo Casal",role:"Procurador interino",note:"9 años de interinato. Sin designación definitiva. Comodoro Py como campo de batalla político encubierto."},
    {name:"Ángelici",role:"Operador judicial",note:"Ex-abogado de Boca. Vínculo con Karina y Mahiques. Opera en la sombra designaciones judiciales."},
  ],
  digital: [
    {name:"Daniel Parisini \"Gordo Dan\"",role:"Influencer libertario",note:"Influencer clave del ecosistema Caputo. Alcance masivo en redes. Su cruce con Lemoine fue la 'ruptura de Perón con Montoneros'."},
    {name:"Agustín Laje",role:"Ideólogo",note:"Generador de contenido ideológico libertario. Sin cargo formal pero influencia real en la base."},
    {name:"Javier Negrete",role:"Comunicador",note:"Ecosistema digital libertario. Vínculo con Caputo."},
    {name:"Iñaki Gutiérrez",role:"Comunicador",note:"Ecosistema digital libertario. Alcance joven."},
  ],
  economic: [
    {name:"Techint / Rocca",role:"Grupo industrial",note:"Lobby transversal. Beneficiado por acuerdo Mercosur-UE. Presencia en Vaca Muerta."},
    {name:"YPF / Vaca Muerta",role:"Eje energético",note:"Herramienta geopolítica. Chevron, Shell, TotalEnergies como socios. Eje con EEUU."},
    {name:"Grupo Clarín / La Nación",role:"Medios",note:"Acompañaron el cambio pero mantienen independencia. Poder de agenda intacto."},
    {name:"Laboratorios nacionales",role:"Sector farmacéutico",note:"Resistencia al Tratado de Patentes (PCT). Lograron trabar legislación."},
    {name:"Sociedad Rural",role:"Agro",note:"Apoyo tácito al modelo exportador. Tensión por retenciones."},
  ],
  kirchnerismo: [
    {name:"Sergio Massa",role:"Ex-candidato presidencial",note:"Mantiene influencia en la Policía de Seguridad Aeroportuaria (PSA). Señalado como posible fuente de filtraciones. Perfil bajo."},
    {name:"Mario Ishii",role:"Intendente José C. Paz",note:"Puente entre territorio bonaerense y bloque KA. Operador territorial clave."},
    {name:"Cristina Kirchner",role:"Ex-presidenta",note:"Proceso judicial activo. Comodoro Py es el campo de batalla político más encubierto. Poder simbólico intacto."},
    {name:"Máximo Kirchner",role:"Diputado",note:"Liderazgo del bloque UxP. Estrategia de resistencia en Congreso."},
  ],
};

// ═══════════════ RELIGIÓN EXPANDIDO ═══════════════
const RELIGION = {
  evangelical: {
    title:"Iglesias evangélicas",
    weight:"10-15% del padrón nacional",
    regions:"Conurbano, NOA y Norte",
    references:[
      {name:"Pastor Jorge Himitian",role:"Líder territorial",note:"Capacidad de movilización comparable a punteros peronistas."},
      {name:"Pastor Dante Gebel",role:"Influencer evangélico",note:"Llena estadios. Lidera una de las iglesias más convocantes de EEUU. Actuó en campaña oct-2025."},
      {name:"Christian Hooft",role:"Pastor referente",note:"Bendijo a Milei. Vínculo directo con la Casa Rosada."},
      {name:"FAIE",role:"Federación Argentina de Iglesias Evangélicas",note:"Reunión con Canciller Quirno en Palacio San Martín (mar 2026). Interlocutor institucional."},
    ],
    tension:"Reducción del plan MESA genera fricción con pastores de barrios humildes. Agenda conservadora alineada con LLA pero ajuste social genera conflicto.",
    alliances:[["Milei / LLA","solid"],["Agenda conserv.","solid"],["Ajuste social","weak"]],
  },
  catholic: {
    title:"Iglesia Católica",
    weight:"Mayoría nominal (~60%)",
    keyEvent:"Papa Francisco fallecido (abr 2025). Homenaje a un año de su muerte (abr 2026).",
    references:[
      {name:"CEA",role:"Conferencia Episcopal Argentina",note:"Preocupación creciente por pobreza. Documentos como señal de alerta."},
      {name:"Cáritas",role:"Red de solidaridad",note:"Primer receptor del ajuste. La red no puede absorber toda la presión."},
      {name:"Sucesión papal",role:"Proceso global",note:"Cónclave en curso. Candidatos: Parolin (Italia), Turkson (Ghana), Tagle (Filipinas). Impacto simbólico en Argentina."},
    ],
    tension:"Relación compleja y distante con Milei. La Iglesia argentina tiene posición crítica sobre el ajuste social. Homenaje a Francisco como gesto político.",
    alliances:[["Milei","hostile"],["Peronistas","solid"],["Sociedad civil","neutral"]],
  },
  judaism: {
    title:"Judaísmo — eje Milei/Israel",
    weight:"~200.000 personas",
    references:[
      {name:"AMIA / DAIA",role:"Comunidad judía",note:"Milei ratificó alineamiento con EEUU e Israel. Alta representación en medios, finanzas y academia."},
      {name:"Conversión de Milei",role:"Proceso personal",note:"3 viajes a Israel en 2 años. Dimensión espiritual y geopolítica."},
    ],
  },
  other: {
    title:"Otras religiones y dimensión sociocultural",
    items:[
      {name:"Islam",note:"Comunidad pequeña pero activa en triple frontera. Agenda antiterrorista con EEUU tiene implicancias."},
      {name:"Pueblos originarios",note:"Ley de Glaciares y minería generan conflictos por derechos territoriales."},
      {name:"Masones y logias",note:"Actor histórico con presencia en Poder Judicial y FFAA. Simpatía moderada por Milei."},
    ],
  },
};

// ═══════════════ ESCENARIOS NASH ═══════════════
const SCENARIOS = [
  {title:"A — Consolidación libertaria ordenada",pct:35,color:"var(--green)",tag:"Nash cooperativo",
   body:"<strong>Condiciones:</strong> Karina desplaza definitivamente a Caputo; economía sostiene 3-3,5%; inflación converge a 20-22% anual; gobernadores aliados sostienen apoyo legislativo; FMI aprueba desembolsos. Milei llega a 2027 con base sólida para reelección. <strong>Señal de alerta:</strong> salida de Caputo antes de junio = +10 puntos de probabilidad.",
   indicators:["Inflación mensual <2,5%","Riesgo país <600pb","Superávit fiscal sostenido","Caputo fuera de SIDE"]},
  {title:"B — Parálisis por interna + inflación resistente",pct:30,color:"var(--amber)",tag:"Nash desequilibrio",
   body:"<strong>Condiciones:</strong> interna Karina–Caputo no se resuelve y genera bloqueos. Inflación no baja del 2,5-3% mensual en Q3. Gobernadores aliados se distancian. Cada jugador maximiza poder propio a costa del proyecto colectivo. <strong>Referente:</strong> De la Rúa 2000-2001.",
   indicators:["Inflación mensual >2,5% en Q3","Renuncia de algún ministro","Gobernadores piden más ATN","PRO se distancia"]},
  {title:"C — Shock externo + presión cambiaria",pct:20,color:"var(--red)",tag:"Nash crisis dominante",
   body:"<strong>Condiciones:</strong> escalada en Medio Oriente impacta commodities. Inflación supera 35% anual. FMI retrasa desembolsos. Milei enfrenta dilema: ajuste adicional (riesgo social) vs expansión fiscal (riesgo credibilidad). <strong>Referente:</strong> crisis del Tequila 1995.",
   indicators:["Petróleo >$120/barril","FMI retrasa revisión","Brecha cambiaria >15%","Depósitos bancarios caen"]},
  {title:"D — Realineamiento: Provincias Unidas como tercer polo",pct:10,color:"var(--purple)",tag:"Nuevo equilibrio",
   body:"<strong>Condiciones:</strong> Provincias Unidas consolida identidad propia. Se posiciona como bisagra legislativa autónoma con poder de veto. Equilibrio de tres jugadores. Milei pierde el monopolio de la agenda. <strong>Referente:</strong> peronismo del interior 2007-2011.",
   indicators:["Provincias Unidas >35 diputados","Llaryora/Perfil presidencial","Vetos legislativos coordinados"]},
  {title:"E — Ruptura sistémica / crisis aguda",pct:5,color:"var(--red)",tag:"Tail risk",
   body:"<strong>Condiciones:</strong> shock externo severo + crisis interna explosiva + pérdida de credibilidad FMI + movilización social. Baja probabilidad pero altísima consecuencia. <strong>Indicador adelantado:</strong> caída de depósitos bancarios en dólares y brecha cambiaria >15%.",
   indicators:["Crisis bancaria","Movilización masiva","FMI cancela programa","Renuncia masiva de ministros"]},
];

// ═══════════════ CONGRESO EXPANDIDO ═══════════════
const CONGRESS = {
  diputados: {
    president:"Martín Menem (LLA)",
    twoThirds:172,
    blocks:[
      {name:"La Libertad Avanza",seats:"~130+",position:"oficialismo",note:"Primera minoría post oct-2025. Controla agenda pero no alcanza 2/3 solo."},
      {name:"Unión por la Patria",seats:"~99",position:"oposición dura",note:"Bloque resistencia social. Máximo Kirchner como líder."},
      {name:"PRO",seats:"~38",position:"aliado táctico",note:"Bullrich + Macri oscilan. Convivencia sin fusión."},
      {name:"Provincias Unidas",seats:"~28",position:"bisagra",note:"Poder de negociación clave. Votan caso a caso."},
      {name:"UCR / Evolución",seats:"~22",position:"volátil",note:"Dividido tema a tema."},
      {name:"Hacemos / Reg.",seats:"~18",position:"pragmático",note:"Negocia caso a caso."},
    ],
  },
  senado: {
    president:"Victoria Villarruel (LLA)",
    blocks:[
      {name:"Unión por la Patria",seats:"~33",position:"oposición",note:"Tienen la llave de las PASO."},
      {name:"La Libertad Avanza",seats:"~22",position:"oficialismo",note:"Creció en oct-2025."},
      {name:"PRO",seats:"~8",position:"táctico",note:"Natalia Gadano (Santa Cruz)."},
      {name:"Peronismo aliado",seats:"~12",position:"negociador",note:"Jaldo, Jalil, Sáenz."},
      {name:"UCR / otros",seats:"~9",position:"volátil",note:"Divide por tema."},
    ],
  },
  villarruel: {
    role:"Presidenta del Senado. Poder de desempate y conducción del cuerpo. Puede facilitar o bloquear la agenda del Ejecutivo.",
    tension:"Episodios de distanciamiento público con Milei. Perfil propio ligado a la derecha tradicional y al mundo militar.",
    hypothesis:"Podría ser el \"tapado\" para construir un espacio propio de cara a 2027 si el desgaste de LLA se acelera.",
    recent:"Autorizó aumento de sueldos senadores (abr 2026). Generó controversia pública.",
    alliances:[["Milei","weak"],["PRO","neutral"],["Sector militar","solid"],["Gobernadores norte","neutral"],["Kirchnerismo","hostile"]],
  },
  agenda: [
    {project:"Reforma laboral",state:"Aprobada ✓",stateClass:"text-green",actors:"Provincias Unidas + PRO",analysis:"ATN como precio pagado"},
    {project:"Acuerdo Mercosur-UE",state:"Media sanción ✓",stateClass:"text-green",actors:"Cancillería + oposición moderada",analysis:"Consenso amplio"},
    {project:"Eliminación PASO",state:"En debate ⟳",stateClass:"text-amber",actors:"Senado KA tiene la llave",analysis:"Peronismo pedirá precio alto"},
    {project:"Reforma política (uninominal)",state:"Bloqueada ✗",stateClass:"text-red",actors:"Resistencia multi-bloque",analysis:"Gobernadores jamás consienten"},
    {project:"Baja edad imputabilidad",state:"Aprobada ✓",stateClass:"text-green",actors:"Bullrich / PRO",analysis:"Victoria de imagen para LLA"},
    {project:"Ley de Glaciares",state:"Media sanción Senado",stateClass:"text-amber",actors:"Provincias mineras",analysis:"Tensión con Mendoza, San Juan"},
    {project:"Tratado PCT (Patentes)",state:"Demorado ✗",stateClass:"text-red",actors:"Laboratorios nacionales",analysis:"Interna Karina–Caputo lo traba"},
    {project:"Presupuesto 2026",state:"Aprobado ✓",stateClass:"text-green",actors:"Acuerdo amplio",analysis:"Primera victoria post oct-2025"},
    {project:"Ley Ómnibus (restos)",state:"Parcial ✓",stateClass:"text-amber",actors:"Negociación multi-bloque",analysis:"Artículo por artículo"},
    {project:"Blanqueo de capitales",state:"Aprobado ✓",stateClass:"text-green",actors:"Oficialismo + PRO",analysis:"USD ingresados al sistema"},
  ],
};

// ═══════════════ ALIANZAS EXPANDIDO ═══════════════
const ALLIANCES = {
  solid: [
    {title:"LLA — Casa Rosada",detail:"Karina, L. Caputo, Adorni, Pettovello, Sturzenegger. Núcleo duro cohesionado."},
    {title:"Milei — Trump (EEUU)",detail:"Alineamiento ideológico total. Vaca Muerta como convergencia energética. Acuerdo comercial feb 2026."},
    {title:"Milei — Netanyahu / Israel",detail:"Relación personal intensa. Múltiples viajes. Conversión al judaísmo en proceso."},
    {title:"Santa Cruz (Vidal) — Nación",detail:"Senadora Gadano + ATN de $100M. Relación consolidada."},
    {title:"LLA — Evangélicos",detail:"Apoyo transversal. Pastores clave como puentes territoriales. FAIE como interlocutor."},
    {title:"LLA — San Luis / San Juan",detail:"Gobernadores orgánicos. Relación sin fricciones."},
  ],
  weak: [
    {title:"LLA — PRO (Macri)",detail:"Alianza en CABA pero Macri explora autonomía. 'Convivencia sin fusión'."},
    {title:"LLA — Provincias Unidas",detail:"6 gobernadores. Apoyan caso a caso. Tienen poder de veto."},
    {title:"LLA — Peronismo aliado",detail:"Jaldo, Jalil, Sáenz. Volvieron al consenso a mediados de 2025."},
    {title:"Argentina — Mercosur",detail:"Acuerdo UE representa avance pero relación con Brasil y Venezuela es tensa."},
    {title:"Villarruel — Milei",detail:"Tensiones públicas. Perfil propio. Potencial candidatura independiente 2027."},
  ],
  broken: [
    {title:"Nación — Buenos Aires (Kicillof)",detail:"'Asfixia financiera' institucionalizada. Conflicto total."},
    {title:"Nación — Formosa / La Rioja",detail:"-72% y -87% de transferencias. Relación rota."},
    {title:"LLA — Kirchnerismo",detail:"Confrontación total en todos los ámbitos."},
    {title:"Argentina — China (Hidrovía)",detail:"Licitación excluyó empresas con capitales soberanos. Tensión silenciosa."},
    {title:"Argentina — Venezuela",detail:"Ruptura diplomática. Rechazo al régimen de Maduro."},
  ],
};

// ═══════════════ FEED ITEMS EXPANDIDO ═══════════════
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
  {source:"Infobae — mar 2026",text:"Las limitaciones que desafían al armado anti Milei: gobernadores de Provincias Unidas planifican desdoblamiento. Dudas por PASO.",tag:"investigación"},
  {source:"Chequeado — dic 2025",text:"Evangélicos en el Congreso: quiénes son, cómo llegaron y cuál es su agenda política. Referentes como Dante Gebel actuaron en campaña.",tag:"investigación"},
  {source:"BBC Mundo — sep 2025",text:"'Argentina es un aliado sistémicamente importante de EEUU en América Latina.' Respaldo del Tesoro de EEUU a Milei.",tag:"internacional"},
  {source:"Infobae — abr 2026",text:"La Iglesia homenajeará al Papa Francisco a un año de su muerte. Gesto pastoral y fuerte señal política contra el ajuste.",tag:"religión"},
  {source:"El Mundo — ene 2026",text:"'Vaca Muerta, el tesoro petrolero de Milei en riesgo.' No hay mejor alumno de Trump en las Américas que Milei.",tag:"internacional"},
  {source:"VisionPolítica — mar 2026",text:"Milei presiona a gobernadores para evitar desdoblamientos rumbo a 2027. Competirá en provincias que no logre alianzas.",tag:"análisis"},
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

function renderActors() {
  // Triángulo de hierro
  const tri = document.getElementById('triangle-grid');
  tri.innerHTML = ACTORS_LLA.map(a => `
    <div class="player-card" onclick="togglePlayer(this)">
      <div class="player-header">
        <div class="avatar ${a.avatarClass}">${a.initials}</div>
        <div><div class="player-name">${a.name}</div><div class="player-role">${a.role}</div></div>
      </div>
      <div class="player-detail">
        <p class="body-text">${a.detail}</p>
        <div class="alliance-grid">
          ${a.alliances.map((al,i) => `<span class="tag tag-${a.allianceTypes[i]}">${al}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');

  // Gabinete
  const cab = document.getElementById('cabinet-grid');
  cab.innerHTML = ACTORS_CABINET.map(a => `
    <div class="player-card" onclick="togglePlayer(this)">
      <div class="player-header">
        <div class="avatar ${a.avatarClass}">${a.initials}</div>
        <div><div class="player-name">${a.name}</div><div class="player-role">${a.role}</div></div>
      </div>
      <div class="player-detail"><p class="body-text">${a.detail}</p></div>
    </div>`).join('');

  // Emergentes
  const em = document.getElementById('emerging-list');
  em.innerHTML = ACTORS_EMERGING.map(a => `
    <p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`).join('');
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

function renderShadow() {
  const c = document.getElementById('shadow-content');
  let html = '';

  // Judicial
  html += `<div class="card card-purple-accent"><h3 class="card-header" style="color:var(--purple-700)">Operadores judiciales y de inteligencia</h3>`;
  SHADOW_ACTORS.judicial.forEach(a => {
    html += `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`;
  });
  html += `</div>`;

  // Digital
  html += `<div class="card card-purple-accent"><h3 class="card-header" style="color:var(--purple-700)">Ecosistema digital libertario</h3>`;
  SHADOW_ACTORS.digital.forEach(a => {
    html += `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`;
  });
  html += `</div>`;

  // Económico
  html += `<div class="card card-purple-accent"><h3 class="card-header" style="color:var(--purple-700)">Empresarios y poderes económicos</h3>`;
  SHADOW_ACTORS.economic.forEach(a => {
    html += `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`;
  });
  html += `</div>`;

  // Kirchnerismo
  html += `<div class="card card-purple-accent"><h3 class="card-header" style="color:var(--purple-700)">Kirchnerismo en la sombra</h3>`;
  SHADOW_ACTORS.kirchnerismo.forEach(a => {
    html += `<p class="body-text"><strong>${a.name} (${a.role}):</strong> ${a.note}</p>`;
  });
  html += `</div>`;

  c.innerHTML = html;
}

function renderReligion() {
  const c = document.getElementById('religion-content');
  const r = RELIGION;
  let html = '<div class="grid-2"><div class="col-stack">';

  // Evangélicos
  html += `<div class="card"><h3 class="card-header">${r.evangélical.title}</h3>`;
  html += `<p class="body-text"><strong>Peso electoral:</strong> ${r.evangélical.weight}. Alta concentración en ${r.evangélical.regions}.</p>`;
  html += `<p class="body-text"><strong>Referentes:</strong></p>`;
  r.evangélical.references.forEach(ref => {
    html += `<p class="body-text" style="padding-left:12px;border-left:2px solid var(--border-light)"><strong>${ref.name}</strong> (${ref.role}): ${ref.note}</p>`;
  });
  html += `<p class="body-text"><strong>Tensión emergente:</strong> ${r.evangélical.tension}</p>`;
  html += `<div class="alliance-grid">`;
  r.evangélical.alliances.forEach(([label, type]) => {
    html += `<span class="tag tag-${type}">${label}</span>`;
  });
  html += `</div></div>`;

  // Católica
  html += `<div class="card"><h3 class="card-header">${r.catholic.title}</h3>`;
  html += `<p class="body-text"><strong>Peso:</strong> ${r.catholic.weight}. <strong>Evento clave:</strong> ${r.catholic.keyEvent}</p>`;
  r.catholic.references.forEach(ref => {
    html += `<p class="body-text"><strong>${ref.name} (${ref.role}):</strong> ${ref.note}</p>`;
  });
  html += `<p class="body-text"><strong>Tensión:</strong> ${r.catholic.tension}</p>`;
  html += `<div class="alliance-grid">`;
  r.catholic.alliances.forEach(([label, type]) => {
    html += `<span class="tag tag-${type}">${label}</span>`;
  });
  html += `</div></div>`;

  html += `</div><div class="col-stack">`;

  // Judaísmo
  html += `<div class="card"><h3 class="card-header">${r.judaism.title}</h3>`;
  html += `<p class="body-text"><strong>Peso:</strong> ${r.judaism.weight}</p>`;
  r.judaism.references.forEach(ref => {
    html += `<p class="body-text"><strong>${ref.name} (${ref.role}):</strong> ${ref.note}</p>`;
  });
  html += `</div>`;

  // Otras
  html += `<div class="card"><h3 class="card-header">${r.other.title}</h3>`;
  r.other.items.forEach(item => {
    html += `<p class="body-text"><strong>${item.name}:</strong> ${item.note}</p>`;
  });
  html += `</div>`;

  html += `</div></div>`;
  c.innerHTML = html;
}

function renderCongress() {
  // Diputados
  const dip = document.getElementById('diputados-table');
  dip.innerHTML = CONGRESS.diputados.blocks.map(b => {
    const tagClass = b.position === 'oficialismo' ? 'tag-solid' :
                     b.position === 'oposición dura' ? 'tag-hostile' :
                     b.position === 'bisagra' ? 'tag-neutral' :
                     b.position === 'pragmático' ? 'tag-neutral' : 'tag-weak';
    return `<tr><td>${b.name}</td><td class="text-gold">${b.seats}</td><td><span class="tag ${tagClass}">${b.position}</span></td><td>${b.note}</td></tr>`;
  }).join('');

  // Senado
  const sen = document.getElementById('senado-table');
  sen.innerHTML = CONGRESS.senado.blocks.map(b => {
    const tagClass = b.position === 'oficialismo' ? 'tag-solid' :
                     b.position === 'oposición' ? 'tag-hostile' :
                     b.position === 'negociador' ? 'tag-neutral' : 'tag-weak';
    return `<tr><td>${b.name}</td><td>${b.seats}</td><td><span class="tag ${tagClass}">${b.position}</span></td><td>${b.note}</td></tr>`;
  }).join('');

  // Villarruel
  const vill = document.getElementById('villarruel-detail');
  vill.innerHTML = `
    <p class="body-text"><strong>Rol institucional:</strong> ${CONGRESS.villarruel.role}</p>
    <p class="body-text"><strong>Tensión con Milei:</strong> ${CONGRESS.villarruel.tension}</p>
    <p class="body-text"><strong>Hipótesis:</strong> ${CONGRESS.villarruel.hypothesis}</p>
    <p class="body-text"><strong>Movimiento reciente:</strong> ${CONGRESS.villarruel.recent}</p>
    <div class="alliance-grid">
      ${CONGRESS.villarruel.alliances.map(([label, type]) => `<span class="tag tag-${type}">${label}</span>`).join('')}
    </div>`;

  // Agenda
  const ag = document.getElementById('agenda-table');
  ag.innerHTML = CONGRESS.agenda.map(a => {
    return `<tr><td>${a.project}</td><td class="${a.stateClass}">${a.state}</td><td>${a.actors}</td><td>${a.analysis}</td></tr>`;
  }).join('');
}

function renderAlliances() {
  const c = document.getElementById('alliances-content');
  let html = '<div class="grid-3">';

  // Sólidas
  html += `<div class="card card-green-accent"><h3 class="card-header" style="color:var(--green-700)">Alianzas sólidas</h3>`;
  ALLIANCES.solid.forEach(a => {
    html += `<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`;
  });
  html += `</div>`;

  // Débiles
  html += `<div class="card card-amber-accent"><h3 class="card-header" style="color:var(--amber-700)">Alianzas débiles / volátiles</h3>`;
  ALLIANCES.weak.forEach(a => {
    html += `<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`;
  });
  html += `</div>`;

  // Rotas
  html += `<div class="card card-red-accent"><h3 class="card-header" style="color:var(--red-700)">Alianzas rotas / hostilidad</h3>`;
  ALLIANCES.broken.forEach(a => {
    html += `<p class="body-text"><strong>${a.title}:</strong> ${a.detail}</p>`;
  });
  html += `</div>`;

  html += '</div>';
  c.innerHTML = html;
}

function renderIntl() {
  const c = document.getElementById('intl-list');
  let html = '<div style="display:flex;flex-direction:column;gap:8px">';
  INTL_BLOCS.forEach(b => {
    let scenariosHtml = '';
    if (b.scenarios) {
      scenariosHtml = '<div style="margin-top:12px">';
      b.scenarios.forEach(s => {
        scenariosHtml += `<div style="margin-bottom:8px;padding:8px;background:var(--bg-muted);border-radius:6px"><strong style="font-size:12px">${s.title}</strong><br><span style="font-size:12px;color:var(--text-secondary)">${s.text}</span></div>`;
      });
      scenariosHtml += '</div>';
    }
    let actorsHtml = '';
    if (b.actors) {
      actorsHtml = `<div style="margin-top:8px"><strong style="font-size:11px;color:var(--text-muted)">ACTORES CLAVE:</strong> <span style="font-size:12px;color:var(--text-secondary)">${b.actors.join(' · ')}</span></div>`;
    }
    let riskHtml = '';
    if (b.risk) {
      riskHtml = `<div style="margin-top:8px;padding:8px;background:var(--red-50);border-radius:6px;border-left:3px solid var(--red)"><strong style="font-size:11px;color:var(--red)">RIESGO:</strong> <span style="font-size:12px;color:var(--text-secondary)">${b.risk}</span></div>`;
    }
    html += `
      <div class="bloc" onclick="this.classList.toggle('open')">
        <div class="bloc-head">
          <span class="bloc-flag">${b.flag}</span>
          <span class="bloc-name">${b.name}</span>
          <span class="bloc-status" style="color:${b.statusColor}">${b.status}</span>
        </div>
        <div class="bloc-body">${b.body}${scenariosHtml}${actorsHtml}${riskHtml}</div>
      </div>`;
  });
  html += '</div>';
  c.innerHTML = html;
}

function renderScenarios() {
  const c = document.getElementById('scenarios-list');
  let html = '';
  SCENARIOS.forEach(s => {
    let indicatorsHtml = '';
    if (s.indicators) {
      indicatorsHtml = `<div style="margin-top:10px"><strong style="font-size:11px;color:var(--text-muted)">INDICADORES ADELANTADOS:</strong><ul style="margin:6px 0 0 18px;font-size:12px;color:var(--text-secondary)">`;
      s.indicators.forEach(ind => {
        indicatorsHtml += `<li>${ind}</li>`;
      });
      indicatorsHtml += '</ul></div>';
    }
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
        <div class="scenario-body">${s.body}${indicatorsHtml}</div>
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
    "Actualizando escenarios Nash…",
    "Verificando provincias y alianzas…",
    "Consultando analistas y columnistas…",
    "Actualizando mapa internacional…",
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

renderActors();
renderProvinces();
renderIntl();
renderScenarios();
renderShadow();
renderReligion();
renderCongress();
renderAlliances();

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
