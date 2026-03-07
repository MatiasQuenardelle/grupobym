export const SITE_NAME = "GrupoByM - Cirugía Bariátrica";
export const SITE_URL = "https://grupobym.com.ar";
export const SITE_DESCRIPTION =
  "Cirugía bariátrica en Argentina. Bypass gástrico, manga gástrica y cirugía metabólica con el Dr. Pablo Rodríguez y equipo interdisciplinario. Más de 50 reseñas 5 estrellas.";

export const DOCTOR_NAME = "Dr. Pablo Rodríguez";
export const PRACTICE_NAME = "GrupoByM";

export const WHATSAPP_RESISTENCIA = "5493625195169";
export const WHATSAPP_SAENZ_PENA = "5493644302136";
export const WHATSAPP_GENERAL = "5493644305110";
export const WHATSAPP_NUMBER = WHATSAPP_GENERAL;
export const WHATSAPP_MESSAGE = "Hola, me gustaria solicitar una consulta sobre cirugía bariátrica.";
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
  surgeries: "250+",
  yearsExperience: "3+",
  countries: "3",
  maxWeightLoss: "67",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Procedimientos", href: "/procedimientos" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

export const PROCEDURES = [
  {
    title: "Bypass Gástrico",
    slug: "bypass-gastrico",
    description:
      "Técnica gold standard para el tratamiento de la obesidad severa. Resultados comprobados a largo plazo.",
    icon: "bypass",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&h=400&fit=crop",
  },
  {
    title: "Manga Gástrica",
    slug: "manga-gastrica",
    description:
      "Procedimiento mínimamente invasivo que reduce el tamaño del estómago. Recuperación rápida y excelentes resultados.",
    icon: "manga",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  },
  {
    title: "Cirugía Bariátrica y Metabólica",
    slug: "cirugia-metabolica",
    description:
      "Tratamiento quirúrgico de la diabetes tipo 2 y sindrome metabólico. Mejora significativa de la calidad de vida.",
    icon: "metabólica",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop",
  },
  {
    title: "Cirugía de Revisión y Conversion",
    slug: "cirugia-revision-conversion",
    description:
      "Reintervencion quirúrgica para corregir o convertir una cirugía bariátrica previa que no logro los resultados esperados.",
    icon: "revision",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
  },
  {
    title: "Endoscopia",
    slug: "endoscopia",
    description:
      "Endoscopias altas y bajas con equipamiento de última generación. Diagnóstico preciso y seguro.",
    icon: "endoscopia",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
  },
];

export const REVIEWS = [
  {
    name: "Fannyines Tejerina",
    rating: 5,
    text: "Quiero agradecerle de todo corazon por la cirugía bariátrica que me realizo hace un año y cinco meses. Esa intervencion no solo cambio mi cuerpo, sino tambien mi vida entera. Antes de la cirugía, pasaba por momentos dificiles con mi salud y mi bienestar, pero hoy me siento una persona nueva. Tengo más energía, puedo hacer actividades que antes no podia y mi calidad de vida ha mejorado de forma increible. Todo esto es gracias a su habilidad como cirujano, a su cuidado y a la confianza que me transmitio en todo momento. Tambien quiero agradecerle por su trato humano, por escuchar mis dudas y por estar ahi para guiarme en este proceso. Saber que contaba con un profesional tan comprometido y amable me dio mucha tranquilidad durante todo el camino. Hoy, un año y cinco meses después, quiero que sepa que su trabajo ha tenido un impacto profundo en mi vida y que siempre lo llevare en mi corazon como alguien que me dio una nueva oportunidad. Muchas gracias por todo a ud y al increible grupo ByM, nutricionista Fernanda Farias y psicologa Ivana Quiroz.",
    date: "Hace 2 meses",
    beforeImage: "/images/fannyines before.png",
    afterImage: "/images/fannyines after.png",
  },
  {
    name: "Alicia",
    rating: 5,
    text: "Excelente experiencia con el Grupo ByM y el equipo del Dr. Rodríguez. Desde el primer momento, me senti en buenas manos gracias a la calidez, compromiso y profesionalismo del equipo. Gracias a Daiana nutri del equipo por su dedicacion en mi seguimiento. Muchas gracias, por devolverme a mi y sobre todo la salud! Me opere en enero del 2025 y llevo bajados 45 kilos, no solo me despoje de kilos fisicos sino tambien emocionales, ahora me gusta lo que veo y no estoy limitada en mis movimientos. Muchas gracias grupo ByM. Un gran equipo!",
    date: "Hace 1 mes",
    beforeImage: "/images/review-alicia-before.png",
    afterImage: "/images/review-alicia-after.png",
  },
  {
    name: "Yanina Mansilla",
    rating: 5,
    text: "Hace 4 meses tome una de las decisiones más importantes de mi vida: mi cirugía bariátrica. Fue un cambio completo, no solo fisico, sino tambien mental y emocional. Hoy puedo decir que mejore mi Diabetes tipo 2, mi sobrepeso y, sobre todo, recupere mi confianza. Nada de esto hubiese sido posible sin Dios, que puso en mi camino a personas maravillosas. Gracias al mejor cirujano, doc Pablo Rodríguez, por su profesionalismo, humanidad, por brindarme esa confianza y seguridad en mi misma, su acompañamiento. A mi nutri, Dai Svoboda, la mejor de todas, por guiarme en cada paso. A mi psico, Ivana Quiroz, porque no es facil confiar, abrir el corazon y contar lo que uno tiene guardado... y ella lo logro. Y Ruth, la mejor secretaria de este equipazo, siempre atenta a todo, recordando laboratorios, consultas, dudas. Son un equipo tan profesional como humano, y eso hace toda la diferencia. Soy una bendecida por estar rodeada de amigos incondicionales y personas que me sostienen en cada etapa. Hoy me miro y no solo veo un cambio fisico... veo fuerza, resiliencia y una nueva oportunidad de vida.",
    date: "Hace 3 meses",
    image: "/images/review-yanina.jpg",
  },
  {
    name: "Talia Wolcoff",
    rating: 5,
    text: "No tengo más que palabras de agradecimiento para todo el Grupo ByM. Mi hijo volvio a nacer gracias a ustedes. Desde el minuto 1, nos sentimos contenidos y seguros con la decision. Hoy 7 meses después puedo confirmar que seguimos igual de contenidos y seguros. Muchas gracias Dr Pablo por haber sido el faro que guio el barco a la deriva de mi hijo, hacia un puerto seguro. Gracias a todos los que forman parte de este maravilloso equipo de profesionales.",
    date: "Hace 2 meses",
    beforeImage: "/images/Talia before.png",
    afterImage: "/images/Talia after.png",
  },
];

export const SHORT_REVIEWS = [
  {
    name: "Daniel Esquivel",
    text: "Me siento re feliz de haber conocido al Grupo ByM y al Dr. Pablo Rodríguez. Mi recuperación fue espectacular, cero complicaciones. Voy bajando 67 kilos a la fecha... me cambiaron la vida.",
    date: "Hace 3 dias",
  },
  {
    name: "Tomy",
    text: "Excelente atención! El proceso de la operacion todo con seguimientos, el doc un crack. Hoy a casi 2 anos de la operacion tengo una vida distinta.",
    date: "Hace 3 dias",
  },
  {
    name: "Rocio Pereyra Wettstein",
    text: "Este equipo no te hace una cirugía... TE DEVUELVE LA VIDA. Gracias!!!",
    date: "Hace 3 dias",
  },
  {
    name: "Martha Medina",
    text: "Gozan de un equipo extremadamente profesionales y con un corazon y trato hacia los pacientes indescriptible. Sumamente conforme con cada consulta y tratamiento. Equipo totalmente recomendable.",
    date: "Hace 3 dias",
  },
  {
    name: "Maria Jose Bogado",
    text: "El acompañamiento del equipo es incondicional. Pablo me salvo la vida y me dio una nueva en la que aprendi a cuidarme, a tratarme con carino, a alimentarme mejor. Recupere anos y energía.",
    date: "Hace 3 dias",
  },
  {
    name: "Myriam Gimenez",
    text: "Excelente acompañamiento, explicacion, contencion. Todo el equipo médico super preparados para todo. Mejore mi calidad de vida 100%. Eternas gracias Dr Rodríguez y equipo.",
    date: "Hace 2 dias",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qué es la cirugía bariátrica?",
    answer:
      "La cirugía bariátrica es un conjunto de procedimientos quirúrgicos diseñados para ayudar a perder peso cuando los métodos tradicionales no han funcionado. Incluye técnicas como el bypass gástrico y la manga gástrica.",
  },
  {
    question: "Soy candidato para una cirugía bariátrica?",
    answer:
      "Generalmente, los candidatos tienen un IMC mayor a 35 con comorbilidades (diabetes, hipertension, apnea del sueno) o un IMC mayor a 40. Cada caso se evalua individualmente en consulta.",
  },
  {
    question: "Cuál es el tiempo de recuperación?",
    answer:
      "La mayoría de los pacientes pueden retomar actividades livianas en 1-2 semanas y actividades normales en 4-6 semanas. La cirugía se realiza por via laparoscópica, lo que acelera la recuperación.",
  },
  {
    question: "Qué diferencia hay entre bypass gástrico y manga gástrica?",
    answer:
      "El bypass gástrico crea un pequeño reservorio gastrico y desvio intestinal, logrando pérdida de peso por restriccion y malabsorcion. La manga gástrica reduce el tamaño del estómago sin desvio intestinal. La elección depende de cada caso particular.",
  },
  {
    question: "Atienden pacientes de otros países?",
    answer:
      "Si, recibimos pacientes de Paraguay, Brasil y otros países. Ofrecemos asistencia con la logística, alojamiento y seguimiento post-operatorio a distancia.",
  },
  {
    question: "Cómo es el seguimiento post-operatorio?",
    answer:
      "El seguimiento incluye controles periódicos con nuestro equipo interdisciplinario: cirujano, nutricionista, psicologo y especialista en actividad fisica. El acompañamiento es clave para el exito a largo plazo.",
  },
  {
    question: "Cuánto cuesta la cirugía bariátrica?",
    answer:
      "El costo varia segun el procedimiento y la cobertura de obra social o prepaga. Muchas obras sociales cubren la cirugía bariátrica. Contactenos para una evaluación personalizada.",
  },
];

export const BLOG_CATEGORIES = [
  { slug: "procedimientos", label: "Procedimientos" },
  { slug: "recuperacion-postoperatoria", label: "Recuperación Post-Operatoria" },
  { slug: "preparacion", label: "Preparación Pre-Operatoria" },
  { slug: "nutricion", label: "Nutrición" },
  { slug: "costos-y-cobertura", label: "Costos y Cobertura" },
  { slug: "historias-de-pacientes", label: "Historias de Pacientes" },
  { slug: "pacientes-internacionales", label: "Pacientes Internacionales" },
];

export const TEAM_MEMBERS = [
  {
    name: "Dr. Pablo Rodríguez",
    role: "Cirujano Bariátrico",
    description: "Lider del equipo. Cirujano general y laparoscopista, especialista en cirugía bariátrica y esófago-gastroduodenal.",
  },
  {
    name: "Lic. Fernanda Farias",
    role: "Nutricionista",
    description: "Acompañamiento nutriciónal pre y post-quirúrgico. Plan alimentario personalizado para cada etapa.",
  },
  {
    name: "Lic. Dai Svoboda",
    role: "Nutricionista",
    description: "Seguimiento nutriciónal dedicado y personalizado. Guia en cada paso del proceso alimentario.",
  },
  {
    name: "Lic. Ivana Quiroz",
    role: "Psicologa",
    description: "Apoyo emocional y evaluación psicológica. Acompañamiento para construir confianza y bienestar.",
  },
  {
    name: "Prof. de Educacion Fisica",
    role: "Actividad Fisica",
    description: "Plan de actividad fisica adaptado a cada etapa del proceso. Recuperación activa.",
  },
];
