export const SITE_NAME = "GrupoByM - Cirugia Bariatrica";
export const SITE_URL = "https://grupobym.com.ar";
export const SITE_DESCRIPTION =
  "Cirugia bariatrica en Argentina. Bypass gastrico, manga gastrica y cirugia metabolica con el Dr. Pablo Rodriguez y equipo interdisciplinario. Mas de 50 resenas 5 estrellas.";

export const DOCTOR_NAME = "Dr. Pablo Rodriguez";
export const PRACTICE_NAME = "GrupoByM";

export const WHATSAPP_RESISTENCIA = "5493625195169";
export const WHATSAPP_SAENZ_PENA = "5493644302136";
export const WHATSAPP_GENERAL = "5493644305110";
export const WHATSAPP_NUMBER = WHATSAPP_GENERAL;
export const WHATSAPP_MESSAGE = "Hola, me gustaria solicitar una consulta sobre cirugia bariatrica.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const PHONE_RESISTENCIA = "362 519 5169";
export const PHONE_SAENZ_PENA = "364 422 2136";
export const PHONE_GENERAL = "364 430 5110";
export const PHONE_NUMBER = PHONE_GENERAL;
export const EMAIL = "contacto@grupobym.com.ar";

export const LOCATIONS = [
  {
    city: "Resistencia",
    address: "Carlos Pellegrini 677, H3500 Resistencia, Chaco",
    phone: PHONE_RESISTENCIA,
    whatsapp: WHATSAPP_RESISTENCIA,
  },
  {
    city: "Saenz Pena",
    phone: PHONE_SAENZ_PENA,
    whatsapp: WHATSAPP_SAENZ_PENA,
  },
];

export const ADDRESS = "Carlos Pellegrini 677, H3500 Resistencia, Chaco";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Grupo+ByM/@-27.4474037,-58.9791898,17z/data=!4m8!3m7!1s0x94450dc300af83ef:0x9b25ee678b6cf360!8m2!3d-27.4474037!4d-58.9791898!9m1!1b1!16s%2Fg%2F11z1rnlsn6";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/grupobymoficial",
  facebook: "https://www.facebook.com/grupobym",
  youtube: "https://www.youtube.com/@grupobym",
};

export const STATS = {
  reviews: "50+",
  rating: "5.0",
  surgeries: "500+",
  yearsExperience: "15+",
  countries: "3",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Procedimientos", href: "/#procedimientos" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Transformaciones", href: "/#transformaciones" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

export const PROCEDURES = [
  {
    title: "Bypass Gastrico",
    slug: "bypass-gastrico",
    description:
      "Tecnica gold standard para el tratamiento de la obesidad severa. Resultados comprobados a largo plazo.",
    icon: "bypass",
  },
  {
    title: "Manga Gastrica",
    slug: "manga-gastrica",
    description:
      "Procedimiento minimamente invasivo que reduce el tamano del estomago. Recuperacion rapida y excelentes resultados.",
    icon: "manga",
  },
  {
    title: "Cirugia Metabolica",
    slug: "cirugia-metabolica",
    description:
      "Tratamiento quirurgico de la diabetes tipo 2 y sindrome metabolico. Mejora significativa de la calidad de vida.",
    icon: "metabolica",
  },
  {
    title: "Endoscopia",
    slug: "endoscopia",
    description:
      "Endoscopias altas y bajas con equipamiento de ultima generacion. Diagnostico preciso y seguro.",
    icon: "endoscopia",
  },
];

export const REVIEWS = [
  {
    name: "Maria G.",
    rating: 5,
    text: "Excelente profesional. Me cambio la vida. El equipo es increible y el seguimiento post-operatorio es impecable.",
    date: "Hace 2 meses",
  },
  {
    name: "Carlos R.",
    rating: 5,
    text: "Despues de anos luchando con la obesidad, el Dr. Pablo Rodriguez y su equipo me dieron una nueva oportunidad. Baje 45 kilos.",
    date: "Hace 3 meses",
  },
  {
    name: "Ana L.",
    rating: 5,
    text: "Vine desde Paraguay y la experiencia fue excelente. Me ayudaron con toda la logistica. 100% recomendable.",
    date: "Hace 1 mes",
  },
  {
    name: "Roberto M.",
    rating: 5,
    text: "Profesionalismo y calidez humana. El equipo interdisciplinario marca la diferencia. Gracias por todo.",
    date: "Hace 4 meses",
  },
  {
    name: "Lucia P.",
    rating: 5,
    text: "La mejor decision de mi vida. Baje 50 kilos en un ano. El acompanamiento es constante.",
    date: "Hace 2 meses",
  },
  {
    name: "Fernando D.",
    rating: 5,
    text: "Llegue con muchas dudas y miedos. Hoy, 8 meses despues, soy otra persona. Gracias Dr. Pablo Rodriguez y equipo.",
    date: "Hace 5 meses",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Que es la cirugia bariatrica?",
    answer:
      "La cirugia bariatrica es un conjunto de procedimientos quirurgicos disenados para ayudar a perder peso cuando los metodos tradicionales no han funcionado. Incluye tecnicas como el bypass gastrico y la manga gastrica.",
  },
  {
    question: "Soy candidato para una cirugia bariatrica?",
    answer:
      "Generalmente, los candidatos tienen un IMC mayor a 35 con comorbilidades (diabetes, hipertension, apnea del sueno) o un IMC mayor a 40. Cada caso se evalua individualmente en consulta.",
  },
  {
    question: "Cual es el tiempo de recuperacion?",
    answer:
      "La mayoria de los pacientes pueden retomar actividades livianas en 1-2 semanas y actividades normales en 4-6 semanas. La cirugia se realiza por via laparoscopica, lo que acelera la recuperacion.",
  },
  {
    question: "Que diferencia hay entre bypass gastrico y manga gastrica?",
    answer:
      "El bypass gastrico crea un pequeno reservorio gastrico y desvio intestinal, logrando perdida de peso por restriccion y malabsorcion. La manga gastrica reduce el tamano del estomago sin desvio intestinal. La eleccion depende de cada caso particular.",
  },
  {
    question: "Atienden pacientes de otros paises?",
    answer:
      "Si, recibimos pacientes de Paraguay, Brasil y otros paises. Ofrecemos asistencia con la logistica, alojamiento y seguimiento post-operatorio a distancia.",
  },
  {
    question: "Como es el seguimiento post-operatorio?",
    answer:
      "El seguimiento incluye controles periodicos con nuestro equipo interdisciplinario: cirujano, nutricionista, psicologo y especialista en actividad fisica. El acompanamiento es clave para el exito a largo plazo.",
  },
  {
    question: "Cuanto cuesta la cirugia bariatrica?",
    answer:
      "El costo varia segun el procedimiento y la cobertura de obra social o prepaga. Muchas obras sociales cubren la cirugia bariatrica. Contactenos para una evaluacion personalizada.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Dr. Pablo Rodriguez",
    role: "Cirujano General, Laparoscopista, Bariatrico y Esofago-Gastroduodenal",
    description: "Lider del equipo. Cirujano general y laparoscopista, especialista en cirugia bariatrica y esofago-gastroduodenal.",
  },
  {
    name: "Lic. en Nutricion",
    role: "Nutricionista",
    description: "Acompanamiento nutricional pre y post-quirurgico. Plan alimentario personalizado.",
  },
  {
    name: "Lic. en Psicologia",
    role: "Psicologo/a",
    description: "Apoyo emocional y evaluacion psicologica. Manejo de la relacion con la comida.",
  },
  {
    name: "Prof. de Educacion Fisica",
    role: "Actividad Fisica",
    description: "Plan de actividad fisica adaptado a cada etapa del proceso. Recuperacion activa.",
  },
];
