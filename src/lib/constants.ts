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
    name: "Fannyines Tejerina",
    rating: 5,
    text: "Esa intervencion no solo cambio mi cuerpo, sino tambien mi vida entera. Tengo mas energia, puedo hacer actividades que antes no podia y mi calidad de vida ha mejorado de forma increible. Todo esto es gracias a la habilidad del Dr. Pablo Rodriguez como cirujano, a su cuidado y a la confianza que me transmitio en todo momento. Tambien quiero agradecer su trato humano, por escuchar mis dudas y por estar ahi para guiarme en este proceso. Hoy, un ano y cinco meses despues, su trabajo ha tenido un impacto profundo en mi vida. Muchas gracias a todo el increible grupo ByM, nutricionista Fernanda Farias y psicologa Ivana Quiroz.",
    date: "Hace 2 meses",
    image: "/images/review-fannyines.jpg",
  },
  {
    name: "Alicia",
    rating: 5,
    text: "Excelente experiencia con el Grupo ByM y el equipo del Dr. Rodriguez. Desde el primer momento, me senti en buenas manos gracias a la calidez, compromiso y profesionalismo del equipo. Me opere en enero del 2025 y llevo bajados 45 kilos, no solo me despoje de kilos fisicos sino tambien emocionales, ahora me gusta lo que veo y no estoy limitada en mis movimientos. Gracias a Daiana nutri del equipo por su dedicacion en mi seguimiento. Muchas gracias por devolverme a mi y sobre todo la salud! Un gran equipo!",
    date: "Hace 1 mes",
    beforeImage: "/images/review-alicia-before.png",
    afterImage: "/images/review-alicia-after.png",
  },
  {
    name: "Yanina Mansilla",
    rating: 5,
    text: "Hace 4 meses tome una de las decisiones mas importantes de mi vida: mi cirugia bariatrica. Fue un cambio completo, no solo fisico, sino tambien mental y emocional. Hoy puedo decir que mejore mi Diabetes tipo 2, mi sobrepeso y, sobre todo, recupere mi confianza. Gracias al mejor cirujano, doc Pablo Rodriguez, por su profesionalismo, humanidad y acompanamiento. A mi nutri, Dai Svoboda, la mejor de todas. A mi psico, Ivana Quiroz, porque no es facil confiar y ella lo logro. Son un equipo tan profesional como humano, y eso hace toda la diferencia. Hoy me miro y no solo veo un cambio fisico... veo fuerza, resiliencia y una nueva oportunidad de vida.",
    date: "Hace 3 meses",
    image: "/images/review-yanina.jpg",
  },
  {
    name: "Talia Wolcoff",
    rating: 5,
    text: "No tengo mas que palabras de agradecimiento para todo el Grupo ByM. Mi hijo volvio a nacer gracias a ustedes. Desde el minuto 1, nos sentimos contenidos y seguros con la decision. Hoy 7 meses despues puedo confirmar que seguimos igual de contenidos y seguros. Muchas gracias Dr Pablo por haber sido el faro que guio el barco a la deriva de mi hijo, hacia un puerto seguro. Gracias a todos los que forman parte de este maravilloso equipo de profesionales.",
    date: "Hace 2 meses",
    image: "/images/review-talia.png",
  },
];

export const SHORT_REVIEWS = [
  {
    name: "Daniel Esquivel",
    text: "Me siento re feliz de haber conocido al Grupo ByM y al Dr. Pablo Rodriguez. Mi recuperacion fue espectacular, cero complicaciones. Voy bajando 67 kilos a la fecha... me cambiaron la vida.",
    date: "Hace 3 dias",
  },
  {
    name: "Tomy",
    text: "Excelente atencion! El proceso de la operacion todo con seguimientos, el doc un crack. Hoy a casi 2 anos de la operacion tengo una vida distinta.",
    date: "Hace 3 dias",
  },
  {
    name: "Rocio Pereyra Wettstein",
    text: "Este equipo no te hace una cirugia... TE DEVUELVE LA VIDA. Gracias!!!",
    date: "Hace 3 dias",
  },
  {
    name: "Martha Medina",
    text: "Gozan de un equipo extremadamente profesionales y con un corazon y trato hacia los pacientes indescriptible. Sumamente conforme con cada consulta y tratamiento. Equipo totalmente recomendable.",
    date: "Hace 3 dias",
  },
  {
    name: "Maria Jose Bogado",
    text: "El acompanamiento del equipo es incondicional. Pablo me salvo la vida y me dio una nueva en la que aprendi a cuidarme, a tratarme con carino, a alimentarme mejor. Recupere anos y energia.",
    date: "Hace 3 dias",
  },
  {
    name: "Myriam Gimenez",
    text: "Excelente acompanamiento, explicacion, contencion. Todo el equipo medico super preparados para todo. Mejore mi calidad de vida 100%. Eternas gracias Dr Rodriguez y equipo.",
    date: "Hace 2 dias",
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
    role: "Cirujano Bariatrico",
    description: "Lider del equipo. Cirujano general y laparoscopista, especialista en cirugia bariatrica y esofago-gastroduodenal.",
  },
  {
    name: "Lic. Fernanda Farias",
    role: "Nutricionista",
    description: "Acompanamiento nutricional pre y post-quirurgico. Plan alimentario personalizado para cada etapa.",
  },
  {
    name: "Lic. Dai Svoboda",
    role: "Nutricionista",
    description: "Seguimiento nutricional dedicado y personalizado. Guia en cada paso del proceso alimentario.",
  },
  {
    name: "Lic. Ivana Quiroz",
    role: "Psicologa",
    description: "Apoyo emocional y evaluacion psicologica. Acompanamiento para construir confianza y bienestar.",
  },
  {
    name: "Prof. de Educacion Fisica",
    role: "Actividad Fisica",
    description: "Plan de actividad fisica adaptado a cada etapa del proceso. Recuperacion activa.",
  },
];
