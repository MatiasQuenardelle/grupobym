// Generate Google Ads Editor CSV with proper column alignment and character limits
// Headlines: max 30 chars | Descriptions: max 90 chars | Path: max 15 chars

const COLS = [
  'Campaign','Campaign Type','Campaign Status','Bid Strategy Type','Budget','Budget Type','Networks',
  'Ad Group','Ad Group Status','Ad Group Type',
  'Keyword','Match Type','Keyword Status',
  'Ad Type',
  'Headline 1','Headline 2','Headline 3','Headline 4','Headline 5','Headline 6','Headline 7',
  'Headline 8','Headline 9','Headline 10','Headline 11','Headline 12','Headline 13','Headline 14','Headline 15',
  'Description 1','Description 2','Description 3','Description 4',
  'Final URL','Path 1','Path 2','Status'
];

const rows = [COLS];

function row(data) {
  const r = new Array(COLS.length).fill('');
  for (const [key, val] of Object.entries(data)) {
    const idx = COLS.indexOf(key);
    if (idx === -1) throw new Error(`Unknown column: ${key}`);
    // Validate limits
    if (key.startsWith('Headline') && val.length > 30) console.error(`HEADLINE TOO LONG (${val.length}): "${val}"`);
    if (key.startsWith('Description') && val.length > 90) console.error(`DESC TOO LONG (${val.length}): "${val}"`);
    if (key.startsWith('Path') && val.length > 15) console.error(`PATH TOO LONG (${val.length}): "${val}"`);
    r[idx] = val;
  }
  rows.push(r);
}

function campaign(name, budget) {
  row({ Campaign: name, 'Campaign Type': 'Search', 'Campaign Status': 'Paused', 'Bid Strategy Type': 'Maximize Conversions', Budget: String(budget), 'Budget Type': 'Daily', Networks: 'Google Search; Search Partners' });
}

function adGroup(campaign, name) {
  row({ Campaign: campaign, 'Ad Group': name, 'Ad Group Status': 'Active', 'Ad Group Type': 'Standard' });
}

function keyword(campaign, adGroup, kw) {
  row({ Campaign: campaign, 'Ad Group': adGroup, Keyword: kw, 'Match Type': 'Phrase', 'Keyword Status': 'Active' });
}

function ad(campaignName, adGroupName, headlines, descriptions, url, path1, path2) {
  const data = {
    Campaign: campaignName, 'Ad Group': adGroupName, 'Ad Type': 'Responsive Search Ad',
    'Final URL': url, 'Path 1': path1, 'Path 2': path2, Status: 'Active'
  };
  headlines.forEach((h, i) => data[`Headline ${i + 1}`] = h);
  descriptions.forEach((d, i) => data[`Description ${i + 1}`] = d);
  row(data);
}

// ============================================================
// CAMPAIGN 1: BYPASS GÁSTRICO
// ============================================================
const C1 = 'Bypass Gástrico - Búsqueda';
campaign(C1, 5000);

// Ad Group: General
adGroup(C1, 'Bypass Gástrico - General');
['bypass gastrico', 'bypass gastrico argentina', 'cirugía bypass gástrico', 'operación bypass gástrico', 'bypass gastrico resistencia', 'bypass gastrico chaco']
  .forEach(k => keyword(C1, 'Bypass Gástrico - General', k));
ad(C1, 'Bypass Gástrico - General',
  [
    'Bypass Gástrico Resistencia',   // 28
    'Dr. Pablo Rodríguez',           // 19
    'Perdé 60-80% Exceso de Peso',   // 28
    'Cirujano Certificado',          // 20
    'Gold Standard en Cirugía',      // 24
    '+15 Años de Experiencia',       // 23
    'Consultá Sin Compromiso',       // 23
    'Resultados Comprobados',        // 22
    'Operación Bypass Gástrico',     // 25
    'Equipo Especializado',          // 20
    'Turno Online Disponible',       // 23
    'Cirugía Mínima Invasión',       // 24
    'Técnica Laparoscópica',         // 21
    'Atención Personalizada',        // 22
    'Clínica en Resistencia',        // 22
  ],
  [
    'Gold standard mundial. Perdé entre 60 y 80% del exceso de peso.',           // 64
    '+15 años en cirugía bariátrica. Consultá y comenzá tu transformación.',      // 71
    'Equipo especializado en Resistencia Chaco. Técnica laparoscópica.',          // 67
    'Consultá sin compromiso. Acompañamiento pre y postoperatorio completo.',     // 72
  ],
  'https://grupobym.com.ar/lp/bypass-gastrico', 'bypass', 'gastrico'
);

// Ad Group: Precio
adGroup(C1, 'Bypass Gástrico - Precio');
['bypass gastrico precio', 'bypass gastrico costo', 'cuanto sale bypass gastrico', 'precio operación bypass']
  .forEach(k => keyword(C1, 'Bypass Gástrico - Precio', k));
ad(C1, 'Bypass Gástrico - Precio',
  [
    'Bypass Gástrico - Precio',      // 25
    'Financiación Disponible',       // 23
    'Perdé 60-80% Exceso de Peso',   // 28
    'Dr. Pablo Rodríguez',           // 19
    'Presupuesto Sin Compromiso',    // 27
    'Cirujano Certificado',          // 20
    'Planes de Pago Accesibles',     // 26
    'Operación Bypass Gástrico',     // 25
    'Precio Competitivo',            // 19
    'Consultá Hoy Mismo',            // 19
    '+15 Años de Experiencia',       // 23
    'Clínica en Resistencia',        // 22
    'Gold Standard en Cirugía',      // 24
    'Atención Personalizada',        // 22
    'Turno Online',                  // 12
  ],
  [
    'Consultá el precio del bypass gástrico. Financiación disponible.',            // 65
    'Mejor equipo en Resistencia Chaco. Pedí tu presupuesto personalizado.',       // 71
    'Planes de pago accesibles para tu cirugía. +15 años de experiencia.',         // 69
    'Precio competitivo con atención de primer nivel. Agendá tu consulta.',        // 70
  ],
  'https://grupobym.com.ar/lp/bypass-gastrico', 'bypass', 'precio'
);

// Ad Group: Resultados
adGroup(C1, 'Bypass Gástrico - Resultados');
['bypass gastrico resultados', 'bypass gastrico antes y despues', 'cuanto se baja con bypass gastrico']
  .forEach(k => keyword(C1, 'Bypass Gástrico - Resultados', k));
ad(C1, 'Bypass Gástrico - Resultados',
  [
    'Bypass Gástrico - Resultados',  // 29
    'Perdé 60-80% Exceso de Peso',   // 28
    'Casos de Éxito Comprobados',    // 27
    'Dr. Pablo Rodríguez',           // 19
    'Antes y Después Reales',        // 23
    'Transformá Tu Vida Hoy',        // 23
    '+15 Años de Experiencia',       // 23
    'Cirujano Certificado',          // 20
    'Pacientes Satisfechos',         // 22
    'Cambio de Vida Real',           // 19
    'Técnica Laparoscópica',         // 21
    'Gold Standard Mundial',         // 21
    'Consultá Sin Compromiso',       // 23
    'Equipo Especializado',          // 20
    'Resultados Comprobados',        // 22
  ],
  [
    'Nuestros pacientes pierden 60-80% del exceso de peso. Resultados reales.',    // 74
    'Casos de éxito reales. +15 años transformando vidas en Resistencia.',          // 69
    'Resultados comprobados con técnica laparoscópica. Recuperación rápida.',       // 72
    'Comenzá tu transformación hoy. Consultá sin compromiso.',                      // 57
  ],
  'https://grupobym.com.ar/lp/bypass-gastrico', 'bypass', 'resultados'
);

// ============================================================
// CAMPAIGN 2: MANGA GÁSTRICA
// ============================================================
const C2 = 'Manga Gástrica - Búsqueda';
campaign(C2, 5000);

// Ad Group: General
adGroup(C2, 'Manga Gástrica - General');
['manga gastrica', 'manga gastrica argentina', 'sleeve gastrico', 'gastrectomia en manga', 'manga gastrica resistencia', 'manga gastrica chaco', 'operación manga gastrica']
  .forEach(k => keyword(C2, 'Manga Gástrica - General', k));
ad(C2, 'Manga Gástrica - General',
  [
    'Manga Gástrica Resistencia',    // 27
    'Dr. Pablo Rodríguez',           // 19
    'La Cirugía Más Realizada',      // 25
    'Recuperación Rápida',           // 19
    'Cirujano Certificado',          // 20
    '+15 Años de Experiencia',       // 23
    'Técnica Laparoscópica',         // 21
    'Consultá Sin Compromiso',       // 23
    'Operación Manga Gástrica',      // 25
    'Equipo Especializado',          // 20
    'Sleeve Gástrico',               // 16
    'Atención Personalizada',        // 22
    'Clínica en Resistencia',        // 22
    'Turno Online Disponible',       // 23
    'Resultados Comprobados',        // 22
  ],
  [
    'La manga gástrica es la cirugía más realizada del mundo. Recuperación rápida.',  // 79
    'Técnica laparoscópica. Mínima invasión y recuperación en pocos días.',            // 70
    '+15 años de experiencia en cirugía bariátrica en Resistencia Chaco.',             // 70
    'Equipo especializado. Acompañamiento pre y postoperatorio. Agendá turno.',        // 75
  ],
  'https://grupobym.com.ar/lp/manga-gastrica', 'manga', 'gastrica'
);

// Ad Group: Precio
adGroup(C2, 'Manga Gástrica - Precio');
['manga gastrica precio', 'manga gastrica costo', 'cuanto sale manga gastrica', 'precio operación manga']
  .forEach(k => keyword(C2, 'Manga Gástrica - Precio', k));
ad(C2, 'Manga Gástrica - Precio',
  [
    'Manga Gástrica - Precio',      // 24
    'Financiación Disponible',       // 23
    'La Cirugía Más Realizada',      // 25
    'Dr. Pablo Rodríguez',           // 19
    'Presupuesto Sin Compromiso',    // 27
    'Planes de Pago Accesibles',     // 26
    'Precio Competitivo',            // 19
    'Recuperación Rápida',           // 19
    'Consultá Hoy Mismo',            // 19
    '+15 Años de Experiencia',       // 23
    'Cirujano Certificado',          // 20
    'Clínica en Resistencia',        // 22
    'Operación Manga Gástrica',      // 25
    'Atención Personalizada',        // 22
    'Turno Online',                  // 12
  ],
  [
    'Consultá el precio de la manga gástrica. Financiación disponible.',            // 67
    'Mejor equipo de Chaco. Pedí tu presupuesto personalizado sin compromiso.',     // 74
    'Planes de pago accesibles. La operación más realizada en el mundo.',            // 68
    'Precio competitivo y atención de primer nivel. Agendá tu consulta.',            // 68
  ],
  'https://grupobym.com.ar/lp/manga-gastrica', 'manga', 'precio'
);

// Ad Group: Recuperación
adGroup(C2, 'Manga Gástrica - Recuperación');
['manga gastrica recuperación', 'manga gastrica postoperatorio', 'manga gastrica riesgos']
  .forEach(k => keyword(C2, 'Manga Gástrica - Recuperación', k));
ad(C2, 'Manga Gástrica - Recuperación',
  [
    'Manga Gástrica - Recuperá',     // 26
    'Volvé a Tu Rutina en Días',     // 26
    'Técnica Laparoscópica',         // 21
    'Dr. Pablo Rodríguez',           // 19
    'Mínima Invasión',               // 16
    'Cirujano Certificado',          // 20
    '+15 Años de Experiencia',       // 23
    'Internación Breve',             // 18
    'Postoperatorio Simple',         // 22
    'Sin Cortes Grandes',            // 19
    'Consultá Sin Compromiso',       // 23
    'Equipo Especializado',          // 20
    'La Cirugía Más Realizada',      // 25
    'Clínica en Resistencia',        // 22
    'Atención Personalizada',        // 22
  ],
  [
    'Manga gástrica con recuperación rápida. Técnica laparoscópica.',               // 65
    'Volvé a tu rutina en pocos días. Internación breve y postop simple.',           // 69
    'Cirugía laparoscópica sin cortes grandes. +15 años de experiencia.',            // 68
    'Acompañamiento completo en tu recuperación. Consultá sin compromiso.',          // 71
  ],
  'https://grupobym.com.ar/lp/manga-gastrica', 'manga', 'recuperacion'
);

// ============================================================
// CAMPAIGN 3: CIRUGÍA METABÓLICA
// ============================================================
const C3 = 'Cirugía Metabólica - Búsqueda';
campaign(C3, 3000);

// Ad Group: Diabetes
adGroup(C3, 'Cirugía Metabólica - Diabetes');
['cirugia metabolica diabetes', 'cirugía para diabetes tipo 2', 'operación para curar diabetes', 'remisión diabetes cirugía', 'tratamiento quirúrgico diabetes']
  .forEach(k => keyword(C3, 'Cirugía Metabólica - Diabetes', k));
ad(C3, 'Cirugía Metabólica - Diabetes',
  [
    'Cirugía Metabólica Diabetes',   // 28
    'Remisión Diabetes Tipo 2',      // 25
    'Dr. Pablo Rodríguez',           // 19
    'Tratamiento Quirúrgico',        // 23
    'Más Allá de la Medicación',     // 26
    '+15 Años de Experiencia',       // 23
    'Cirujano Certificado',          // 20
    'Consultá Sin Compromiso',       // 23
    'Solución para Diabetes',        // 23
    'Resultados Comprobados',        // 22
    'Dejá la Insulina',              // 17
    'Técnica Laparoscópica',         // 21
    'Equipo Especializado',          // 20
    'Clínica en Resistencia',        // 22
    'Atención Personalizada',        // 22
  ],
  [
    'La cirugía metabólica logra remisión de diabetes tipo 2. Consultá hoy.',       // 72
    'Más allá de la medicación: solución real para la diabetes tipo 2.',             // 67
    'Resultados comprobados en remisión de diabetes. +15 años experiencia.',         // 71
    'Tratamiento quirúrgico cuando la medicación no alcanza. Agendá turno.',         // 72
  ],
  'https://grupobym.com.ar/lp/cirugia-metabolica', 'cirugia', 'metabolica'
);

// Ad Group: General
adGroup(C3, 'Cirugía Metabólica - General');
['cirugia metabolica', 'cirugia metabolica argentina', 'cirugia metabolica precio']
  .forEach(k => keyword(C3, 'Cirugía Metabólica - General', k));
ad(C3, 'Cirugía Metabólica - General',
  [
    'Cirugía Metabólica',            // 19
    'Dr. Pablo Rodríguez',           // 19
    'Tratá Diabetes y Obesidad',     // 26
    'Cirujano Certificado',          // 20
    '+15 Años de Experiencia',       // 23
    'Técnica Laparoscópica',         // 21
    'Consultá Sin Compromiso',       // 23
    'Equipo Especializado',          // 20
    'Resultados Comprobados',        // 22
    'Clínica en Resistencia',        // 22
    'Turno Online Disponible',       // 23
    'Atención Personalizada',        // 22
    'Solución Quirúrgica',           // 20
    'Mejorá Tu Calidad de Vida',     // 26
    'Acompañamiento Completo',       // 24
  ],
  [
    'Cirugía metabólica con el Dr. Rodríguez. Tratamiento para diabetes.',          // 70
    'Equipo especializado en cirugía metabólica. Técnica laparoscópica.',            // 68
    '+15 años de experiencia. Consultá y mejorá tu calidad de vida.',                // 65
    'Acompañamiento pre y postoperatorio completo. Agendá tu turno hoy.',            // 70
  ],
  'https://grupobym.com.ar/lp/cirugia-metabolica', 'cirugia', 'metabolica'
);

// ============================================================
// CAMPAIGN 4: CIRUGÍA BARIÁTRICA PARAGUAY
// ============================================================
const C4 = 'Bariátrica Paraguay - Búsqueda';
campaign(C4, 5000);

// Ad Group: Precio
adGroup(C4, 'Paraguay - Precio');
['cirugía bariátrica precio paraguay', 'operarse en argentina desde paraguay', 'cirugía bariátrica barata', 'bypass gastrico precio paraguay', 'manga gastrica precio paraguay']
  .forEach(k => keyword(C4, 'Paraguay - Precio', k));
ad(C4, 'Paraguay - Precio',
  [
    'Cirugía Bariátrica 50% Menos',  // 29
    'Desde Paraguay a Argentina',    // 27
    'Precio Imbatible',              // 17
    'Dr. Pablo Rodríguez',           // 19
    'Paquete Todo Incluido',         // 21
    'Uber Desde Asunción',           // 20
    'Ahorrá en Tu Cirugía',          // 21
    'Misma Calidad Menor Precio',    // 27
    '+15 Años de Experiencia',       // 23
    'Financiación Disponible',       // 23
    'Consultá Precio Final',         // 22
    'Cirujano Certificado',          // 20
    'Sin Costos Ocultos',            // 19
    'Presupuesto Sin Compromiso',    // 27
    'Equipo Especializado',          // 20
  ],
  [
    'Cirugía bariátrica hasta 50% menos. Paquete todo incluido desde Asunción.',    // 75
    'Operáte en Argentina y ahorrá. Precio imbatible. Consultá hoy.',               // 65
    'Misma calidad a menor precio. Paquete con Uber desde Asunción incluido.',      // 74
    'Sin costos ocultos. Presupuesto final sin compromiso. Financiación.',           // 70
  ],
  'https://grupobym.com.ar/lp/cirugia-bariatrica-paraguay', 'cirugia', 'paraguay'
);

// Ad Group: General
adGroup(C4, 'Paraguay - General');
['cirugía bariátrica paraguay', 'cirugía bariátrica asunción', 'cirugía obesidad paraguay']
  .forEach(k => keyword(C4, 'Paraguay - General', k));
ad(C4, 'Paraguay - General',
  [
    'Bariátrica para Paraguayos',    // 27
    'Operáte en Argentina',          // 21
    'Dr. Pablo Rodríguez',           // 19
    'Cirujano Certificado',          // 20
    '+15 Años de Experiencia',       // 23
    'A Horas de Asunción',           // 20
    'Consultá Sin Compromiso',       // 23
    'Equipo Especializado',          // 20
    'Técnica Laparoscópica',         // 21
    'Paquete Todo Incluido',         // 21
    'Clínica de Primer Nivel',       // 24
    'Resultados Comprobados',        // 22
    'Turno Online Disponible',       // 23
    'Traslado Incluido',             // 18
    'Atención Personalizada',        // 22
  ],
  [
    'Cirugía bariátrica de primer nivel en Resistencia. A horas de Asunción.',      // 73
    '+15 años de experiencia atendiendo pacientes de Paraguay. Todo incluido.',      // 74
    'Equipo certificado. Técnica laparoscópica. Recuperación rápida.',               // 65
    'Operáte en Argentina con la mejor atención. Traslado incluido.',                // 65
  ],
  'https://grupobym.com.ar/lp/cirugia-bariatrica-paraguay', 'cirugia', 'paraguay'
);

// Ad Group: Paquete
adGroup(C4, 'Paraguay - Paquete');
['turismo médico argentina cirugía', 'paquete cirugía bariátrica argentina', 'cirugía bariátrica todo incluido']
  .forEach(k => keyword(C4, 'Paraguay - Paquete', k));
ad(C4, 'Paraguay - Paquete',
  [
    'Paquete Bariátrico Incluido',   // 28
    'Uber Desde Asunción',           // 20
    'Cirugía + Traslado + Hotel',    // 27
    'Dr. Pablo Rodríguez',           // 19
    'Sin Preocupaciones',            // 19
    '50% Menos que en Paraguay',     // 26
    '+15 Años de Experiencia',       // 23
    'Consultá Sin Compromiso',       // 23
    'Todo Coordinado',               // 16
    'Cirujano Certificado',          // 20
    'Atención Personalizada',        // 22
    'Paquete Completo',              // 16
    'Operáte en Argentina',          // 21
    'Equipo Especializado',          // 20
    'Precio Final Sin Sorpresas',    // 27
  ],
  [
    'Paquete todo incluido: cirugía + Uber desde Asunción + acompañamiento.',       // 73
    'Nos encargamos de todo. Vos solo preocupáte por tu recuperación.',              // 66
    'Paquete completo hasta 50% menos. Dr. Rodríguez +15 años experiencia.',        // 73
    'Precio final sin sorpresas. Agendá tu consulta online hoy.',                    // 61
  ],
  'https://grupobym.com.ar/lp/cirugia-bariatrica-paraguay', 'cirugia', 'paquete'
);

// Generate CSV
const csvContent = rows.map(r => r.map(cell => {
  // Escape cells containing commas or quotes
  if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
    return `"${cell.replace(/"/g, '""')}"`;
  }
  return cell;
}).join(',')).join('\n');

require('fs').writeFileSync('/Users/matiasquenardelle/GitHub/grupobym/google-ads-import/google-ads-import.csv', csvContent);
console.log(`Generated ${rows.length - 1} rows (excluding header)`);
console.log('Done!');
