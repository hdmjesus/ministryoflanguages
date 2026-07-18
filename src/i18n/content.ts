/**
 * Per-locale translations for every visible string on the site.
 * Structural data (icons, hrefs, flags, email, class names) stays in
 * @/data/site — only human-readable copy lives here.
 *
 * `footer` uses the `{year}` placeholder, replaced at render time.
 */

export const locales = ["en", "es", "it", "fr", "ru", "pt", "de"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export type ContentShape = {
  localeLabel: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  heroTitle: string;
  subtitle: string;
  registerNow: string;
  infoHeading: string;
  nav: {
    about: string;
    classes: string;
    languages: string;
    signin: string;
    contact: string;
  };
  leftInfo: { title: string; text: string }[];
  rightInfo: { title: string; text: string }[];
  about: { title: string; text: string }[];
  classesHeading: string;
  classesSubtitle: string;
  levels: { beginner: string; elementary: string; intermediateReading: string };
  languageNames: string[];
  signin: {
    eyebrow: string;
    title: string;
    description: string;
    fullName: string;
    namePlaceholder: string;
    email: string;
    selectLanguage: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
  };
  footer: string;
  aboutPage: {
    seoTitle: string;
    seoDescription: string;
    hero: {
      line1: string;
      line2: string;
      line3: string;
      lead: string;
      statLabels: [string, string, string];
    };
    intro: {
      whoKicker: string;
      whoTitle: string;
      whoText: [string, string];
      missionKicker: string;
      missionTitle: string;
      missionText: [string, string];
    };
    why: {
      kicker: string;
      title: string;
      sub: string;
      pillars: { title: string; desc: string }[];
    };
    instructor: {
      kicker: string;
      name: string;
      role: string;
      bio: [string, string];
      credTitle: string;
      credentials: string[];
      photoLabel: string;
      languages: string[];
    };
    values: {
      kicker: string;
      title: string;
      items: { title: string; desc: string }[];
    };
    programs: { kicker: string; title: string; text: string; list: string[] };
    promise: {
      kicker: string;
      title: string;
      text: string;
      seeClasses: string;
      seePricing: string;
    };
  };
};

export const content: Record<Locale, ContentShape> = {
  en: {
    localeLabel: "English",
    seoTitle:
      "Online Language Classes | Learn English, French, Italian & Portuguese",
    seoDescription:
      "Join live online language classes for adults. Study English, French, Italian and Portuguese with small groups, clear grammar lessons, pronunciation support and real conversation practice.",
    tagline: "Live online language classes for adults.",
    heroTitle: "Online English, French, Italian and Portuguese Classes",
    subtitle:
      "Learn with live online lessons, small groups, grammar guidance and real conversation practice for adult learners.",
    registerNow: "Register Now",
    infoHeading: "Info",
    nav: {
      about: "About Us",
      classes: "Our Classes",
      languages: "The Languages",
      signin: "Sign-In",
      contact: "Contact Us",
    },
    leftInfo: [
      {
        title: "Live classes",
        text: "Real-time online sessions with a teacher guiding every step.",
      },
      {
        title: "Small groups",
        text: "Limited seats so everyone gets attention and speaking time.",
      },
      {
        title: "Practice focused",
        text: "Built around using the language, not just memorizing rules.",
      },
    ],
    rightInfo: [
      {
        title: "Clear grammar",
        text: "Step-by-step lessons that build confidence in the basics.",
      },
      {
        title: "Pronunciation",
        text: "Improve listening and speaking until it feels natural.",
      },
      {
        title: "Conversation",
        text: "Reading, writing and real conversation in every class.",
      },
    ],
    about: [
      {
        title: "Who We Are",
        text: "The Ministry of Languages helps adult learners build confidence in English, French, Italian and Portuguese through structured lessons, live practice and supportive teaching.",
      },
      {
        title: "Online Learning",
        text: "Classes are taught online in live sessions, making it easy for students to join from anywhere and practice consistently with a real teacher.",
      },
      {
        title: "Extra Speaking Practice",
        text: "Students can use HelloTalk as an extra tool to connect with native speakers and keep improving their speaking and listening skills outside class.",
      },
    ],
    classesHeading: "Our Classes",
    classesSubtitle:
      "Build confidence in grammar, pronunciation, reading, and conversation. Pick your language and level.",
    levels: {
      beginner: "Beginner",
      elementary: "Elementary",
      intermediateReading: "Intermediate · Reading",
    },
    languageNames: ["English", "Spanish", "Italian", "French", "Russian", "Portuguese", "German"],
    signin: {
      eyebrow: "Sign-In",
      title: "Reserve your seat in the next group",
      description:
        "Tell us which language you want to learn and we'll send you the schedule and joining details for the live online classes.",
      fullName: "Full name",
      namePlaceholder: "Your name",
      email: "Email",
      selectLanguage: "Select a language",
      send: "Send",
      sending: "Sending...",
      sent: "Sent successfully.",
      error: "Error sending email.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Lessons delivered online via HelloTalk.",
    aboutPage: {
      seoTitle: "About Us — The Ministry of Languages",
      seoDescription:
        "Meet The Ministry of Languages and your instructor Jeffrey A. Guzman: methodology, values and live language programs.",
      hero: {
        line1: "Learn with confidence.",
        line2: "Speak with purpose.",
        line3: "Connect with the world.",
        lead: "We believe learning a language should open doors, not create barriers. We help you communicate naturally through structured instruction, live conversation and the guidance of an experienced multilingual educator.",
        statLabels: [
          "Languages offered",
          "Live online classes",
          "Years of cultural experience",
        ],
      },
      intro: {
        whoKicker: "Who We Are",
        whoTitle: "A language is the key to connecting with the world",
        whoText: [
          "Whether your goal is to travel, advance your career, succeed academically, relocate or grow personally, our classes are designed so you communicate with confidence from your very first lesson.",
          "We create a welcoming environment where every student is encouraged to grow, ask questions, make mistakes and celebrate their progress.",
        ],
        missionKicker: "Our Mission",
        missionTitle:
          "Language education that is accessible, engaging and effective",
        missionText: [
          "We believe anyone can reach fluency with the right guidance, consistent practice and a motivating learning environment.",
          "Every lesson builds practical communication skills you can apply right away in daily life, work, academics and international travel.",
        ],
      },
      why: {
        kicker: "Why Choose Us",
        title: "A methodology centered on communicating",
        sub: "Every lesson balances grammar, vocabulary, pronunciation, listening comprehension, reading, writing and conversation, with continuous follow-up and individual support.",
        pillars: [
          {
            title: "Communication from day one",
            desc: "Instead of memorizing isolated rules, you speak and practice from your first lesson with personalized feedback.",
          },
          {
            title: "Live classes, 100% online",
            desc: "Live instruction with students from around the world: immediate feedback, guided practice and real interaction.",
          },
          {
            title: "Beyond the classroom",
            desc: "We guide you to practice with native speakers in exchange communities like HelloTalk and other platforms.",
          },
          {
            title: "Individualized support",
            desc: "Everyone learns differently. We combine clear structure with personalized attention for your needs.",
          },
        ],
      },
      instructor: {
        kicker: "Meet Your Instructor",
        name: "Jeffrey A. Guzman",
        role: "Multilingual educator, linguist, interpreter, crime analyst and historian, born in the Dominican Republic and a New York resident for more than twenty years.",
        bio: [
          "Jeffrey speaks seven languages. In addition to his native Spanish and fluent English, he studied French, Italian, Portuguese and Russian at university level, living firsthand the challenges of learning several languages as an adult. That experience lets him connect closely with his students and understand the obstacles they face.",
          "His passion for Dominican history —from Taíno heritage to the diaspora— enriches his teaching, helping students appreciate the cultures behind each language. His philosophy rests on patience, structure, encouragement and personalized support: mistakes are not failures, they are essential steps toward fluency.",
        ],
        credTitle: "Training and credentials",
        credentials: [
          "Master's in International Crime and Justice — John Jay College (CUNY)",
          "Certified teacher by Bridge Education Group (Bridge Academy)",
          "Professional interpreter certified by Berlitz (French and Spanish)",
          "French and Spanish interpreter for the NYPD",
          "NYPD crime analyst",
        ],
        photoLabel: "Instructor photo",
        languages: [
          "Spanish",
          "English",
          "French",
          "Italian",
          "Portuguese",
          "Russian",
        ],
      },
      values: {
        kicker: "Our Values",
        title: "Five principles that guide every class",
        items: [
          {
            title: "Excellence",
            desc: "We pursue the highest standards in teaching and learning.",
          },
          {
            title: "Respect",
            desc: "Every student deserves patience, encouragement and dignity.",
          },
          {
            title: "Communication",
            desc: "Languages are tools for building relationships and understanding.",
          },
          {
            title: "Cultural Awareness",
            desc: "Learning a language means appreciating the people and cultures behind it.",
          },
          {
            title: "Lifelong Learning",
            desc: "Education never ends; every language opens new opportunities.",
          },
        ],
      },
      programs: {
        kicker: "Our Programs",
        title: "Live instruction in six languages",
        text: "Each program follows a structured curriculum that develops speaking, listening, reading, writing, pronunciation, grammar, vocabulary and cultural understanding.",
        list: [
          "English",
          "French",
          "Italian",
          "Portuguese",
          "Spanish",
          "German",
        ],
      },
      promise: {
        kicker: "Our Promise",
        title: "At The Ministry of Languages, every student matters",
        text: "Whether you want to travel with confidence, boost your career, prepare for school, communicate with your family or simply challenge yourself with a new language, we are committed to your success.",
        seeClasses: "See our classes",
        seePricing: "Explore pricing",
      },
    },
  },

  es: {
    localeLabel: "Español",
    seoTitle:
      "Clases de idiomas online | Aprende inglés, francés, italiano y portugués",
    seoDescription:
      "Únete a clases de idiomas online en vivo para adultos. Estudia inglés, francés, italiano y portugués con grupos reducidos, lecciones claras de gramática, apoyo en pronunciación y práctica de conversación real.",
    tagline: "Clases de idiomas online en vivo para adultos.",
    heroTitle: "Clases online de inglés, francés, italiano y portugués",
    subtitle:
      "Aprende con clases online en vivo, grupos reducidos, guía gramatical y práctica de conversación real para estudiantes adultos.",
    registerNow: "Regístrate ahora",
    infoHeading: "Info",
    nav: {
      about: "Sobre nosotros",
      classes: "Nuestras clases",
      languages: "Los idiomas",
      signin: "Inscripción",
      contact: "Contáctanos",
    },
    leftInfo: [
      {
        title: "Clases en vivo",
        text: "Sesiones online en tiempo real con un profesor que te guía en cada paso.",
      },
      {
        title: "Grupos reducidos",
        text: "Plazas limitadas para que todos reciban atención y tiempo para hablar.",
      },
      {
        title: "Enfoque en la práctica",
        text: "Diseñadas para usar el idioma, no solo memorizar reglas.",
      },
    ],
    rightInfo: [
      {
        title: "Gramática clara",
        text: "Lecciones paso a paso que dan confianza en lo básico.",
      },
      {
        title: "Pronunciación",
        text: "Mejora la escucha y el habla hasta que suene natural.",
      },
      {
        title: "Conversación",
        text: "Lectura, escritura y conversación real en cada clase.",
      },
    ],
    about: [
      {
        title: "Quiénes somos",
        text: "The Ministry of Languages ayuda a estudiantes adultos a ganar confianza en inglés, francés, italiano y portugués mediante clases estructuradas, práctica en vivo y una enseñanza cercana.",
      },
      {
        title: "Aprendizaje online",
        text: "Las clases se imparten online en sesiones en vivo, para que los estudiantes se unan desde cualquier lugar y practiquen de forma constante con un profesor real.",
      },
      {
        title: "Práctica extra de conversación",
        text: "Los estudiantes pueden usar HelloTalk como herramienta adicional para conectar con hablantes nativos y seguir mejorando su expresión y comprensión fuera de clase.",
      },
    ],
    classesHeading: "Nuestras clases",
    classesSubtitle:
      "Gana confianza en gramática, pronunciación, lectura y conversación. Elige tu idioma y tu nivel.",
    levels: {
      beginner: "Principiante",
      elementary: "Elemental",
      intermediateReading: "Intermedio · Lectura",
    },
    languageNames: ["Inglés", "Español", "Italiano", "Francés", "Ruso", "Portugués", "Alemán"],
    signin: {
      eyebrow: "Inscripción",
      title: "Reserva tu plaza en el próximo grupo",
      description:
        "Dinos qué idioma quieres aprender y te enviaremos el horario y los detalles para unirte a las clases online en vivo.",
      fullName: "Nombre completo",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      selectLanguage: "Selecciona un idioma",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Enviado correctamente.",
      error: "Error al enviar el correo.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Clases impartidas online a través de HelloTalk.",
    aboutPage: {
      seoTitle: "Nosotros — The Ministry of Languages",
      seoDescription:
        "Conoce a The Ministry of Languages y a tu instructor Jeffrey A. Guzman: metodología, valores y programas de idiomas en vivo.",
      hero: {
        line1: "Aprende con confianza.",
        line2: "Habla con propósito.",
        line3: "Conecta con el mundo.",
        lead: "Creemos que aprender un idioma debe abrir puertas, no crear barreras. Te ayudamos a comunicarte con naturalidad a través de instrucción estructurada, conversación en vivo y la guía de un educador multilingüe experimentado.",
        statLabels: [
          "Idiomas ofrecidos",
          "Clases en vivo online",
          "Años de experiencia cultural",
        ],
      },
      intro: {
        whoKicker: "Quiénes Somos",
        whoTitle: "Un idioma es la llave para conectar con el mundo",
        whoText: [
          "Ya sea que tu meta sea viajar, avanzar en tu carrera, tener éxito académico, mudarte o crecer personalmente, nuestras clases están diseñadas para que te comuniques con confianza desde tu primera lección.",
          "Creamos un entorno acogedor donde cada estudiante es motivado a crecer, hacer preguntas, cometer errores y celebrar su progreso.",
        ],
        missionKicker: "Nuestra Misión",
        missionTitle: "Educación de idiomas accesible, atractiva y efectiva",
        missionText: [
          "Creemos que cualquier persona puede alcanzar la fluidez con la guía adecuada, práctica constante y un entorno de aprendizaje motivador.",
          "Cada lección desarrolla habilidades prácticas de comunicación que puedes aplicar de inmediato en la vida diaria, el trabajo, la academia y los viajes internacionales.",
        ],
      },
      why: {
        kicker: "Por Qué Elegirnos",
        title: "Una metodología centrada en comunicar",
        sub: "Cada lección equilibra gramática, vocabulario, pronunciación, comprensión auditiva, lectura, escritura y conversación, con seguimiento continuo y apoyo individual.",
        pillars: [
          {
            title: "Comunicación desde el primer día",
            desc: "En lugar de memorizar reglas aisladas, hablas y practicas desde tu primera lección con retroalimentación personalizada.",
          },
          {
            title: "Clases en vivo, 100% online",
            desc: "Instrucción en directo con estudiantes de todo el mundo: feedback inmediato, práctica guiada e interacción real.",
          },
          {
            title: "Más allá del aula",
            desc: "Te guiamos para practicar con hablantes nativos en comunidades de intercambio como HelloTalk y otras plataformas.",
          },
          {
            title: "Acompañamiento individualizado",
            desc: "Cada persona aprende distinto. Combinamos estructura clara con atención personalizada para tus necesidades.",
          },
        ],
      },
      instructor: {
        kicker: "Conoce a tu Instructor",
        name: "Jeffrey A. Guzman",
        role: "Educador multilingüe, lingüista, intérprete, analista criminal e historiador, nacido en República Dominicana y residente en Nueva York por más de veinte años.",
        bio: [
          "Jeffrey habla siete idiomas. Además de su español nativo e inglés fluido, estudió francés, italiano, portugués y ruso a nivel universitario, viviendo en carne propia los retos de aprender varios idiomas siendo adulto. Esa experiencia le permite conectar de cerca con sus estudiantes y entender los obstáculos que enfrentan.",
          "Su pasión por la historia dominicana —desde la herencia Taína hasta la diáspora— enriquece su enseñanza, ayudando a los estudiantes a apreciar las culturas detrás de cada idioma. Su filosofía se basa en la paciencia, la estructura, el aliento y el apoyo personalizado: los errores no son fracasos, son pasos esenciales hacia la fluidez.",
        ],
        credTitle: "Formación y credenciales",
        credentials: [
          "Maestría en Crimen y Justicia Internacional — John Jay College (CUNY)",
          "Profesor certificado por Bridge Education Group (Bridge Academy)",
          "Intérprete profesional certificado por Berlitz (francés y español)",
          "Intérprete de francés y español para el NYPD",
          "Analista criminal del NYPD",
        ],
        photoLabel: "Foto del profesor",
        languages: [
          "Español",
          "Inglés",
          "Francés",
          "Italiano",
          "Portugués",
          "Ruso",
        ],
      },
      values: {
        kicker: "Nuestros Valores",
        title: "Cinco principios que guían cada clase",
        items: [
          {
            title: "Excelencia",
            desc: "Buscamos los más altos estándares en la enseñanza y el aprendizaje.",
          },
          {
            title: "Respeto",
            desc: "Cada estudiante merece paciencia, aliento y dignidad.",
          },
          {
            title: "Comunicación",
            desc: "Los idiomas son herramientas para construir relaciones y entendimiento.",
          },
          {
            title: "Conciencia Cultural",
            desc: "Aprender un idioma es apreciar a las personas y culturas detrás de él.",
          },
          {
            title: "Aprendizaje de por Vida",
            desc: "La educación nunca termina; cada idioma abre nuevas oportunidades.",
          },
        ],
      },
      programs: {
        kicker: "Nuestros Programas",
        title: "Instrucción en vivo en seis idiomas",
        text: "Cada programa sigue un currículo estructurado que desarrolla el habla, la escucha, la lectura, la escritura, la pronunciación, la gramática, el vocabulario y la comprensión cultural.",
        list: [
          "Inglés",
          "Francés",
          "Italiano",
          "Portugués",
          "Español",
          "Alemán",
        ],
      },
      promise: {
        kicker: "Nuestra Promesa",
        title: "En The Ministry of Languages, cada estudiante importa",
        text: "Ya sea que quieras viajar con confianza, impulsar tu carrera, prepararte para la escuela, comunicarte con tu familia o simplemente desafiarte con un nuevo idioma, estamos comprometidos con tu éxito.",
        seeClasses: "Ver nuestras clases",
        seePricing: "Explorar precios",
      },
    },
  },

  it: {
    localeLabel: "Italiano",
    seoTitle:
      "Corsi di lingue online | Impara inglese, francese, italiano e portoghese",
    seoDescription:
      "Partecipa a corsi di lingue online dal vivo per adulti. Studia inglese, francese, italiano e portoghese con piccoli gruppi, lezioni di grammatica chiare, supporto alla pronuncia e pratica di conversazione reale.",
    tagline: "Lezioni di lingue online dal vivo per adulti.",
    heroTitle: "Corsi online di inglese, francese, italiano e portoghese",
    subtitle:
      "Impara con lezioni online dal vivo, piccoli gruppi, guida grammaticale e pratica di conversazione reale per studenti adulti.",
    registerNow: "Iscriviti ora",
    infoHeading: "Info",
    nav: {
      about: "Chi siamo",
      classes: "I nostri corsi",
      languages: "Le lingue",
      signin: "Iscrizione",
      contact: "Contattaci",
    },
    leftInfo: [
      {
        title: "Lezioni dal vivo",
        text: "Sessioni online in tempo reale con un insegnante che ti guida a ogni passo.",
      },
      {
        title: "Piccoli gruppi",
        text: "Posti limitati perché tutti ricevano attenzione e tempo per parlare.",
      },
      {
        title: "Focus sulla pratica",
        text: "Pensate per usare la lingua, non solo per memorizzare regole.",
      },
    ],
    rightInfo: [
      {
        title: "Grammatica chiara",
        text: "Lezioni passo dopo passo che danno sicurezza sulle basi.",
      },
      {
        title: "Pronuncia",
        text: "Migliora ascolto e conversazione finché non diventa naturale.",
      },
      {
        title: "Conversazione",
        text: "Lettura, scrittura e conversazione reale in ogni lezione.",
      },
    ],
    about: [
      {
        title: "Chi siamo",
        text: "The Ministry of Languages aiuta gli studenti adulti a prendere sicurezza in inglese, francese, italiano e portoghese con lezioni strutturate, pratica dal vivo e un insegnamento attento.",
      },
      {
        title: "Apprendimento online",
        text: "Le lezioni si tengono online in sessioni dal vivo, così gli studenti possono partecipare ovunque e praticare con costanza con un insegnante reale.",
      },
      {
        title: "Pratica extra di conversazione",
        text: "Gli studenti possono usare HelloTalk come strumento in più per entrare in contatto con madrelingua e continuare a migliorare l'ascolto e il parlato fuori dalle lezioni.",
      },
    ],
    classesHeading: "I nostri corsi",
    classesSubtitle:
      "Prendi sicurezza in grammatica, pronuncia, lettura e conversazione. Scegli la tua lingua e il tuo livello.",
    levels: {
      beginner: "Principiante",
      elementary: "Elementare",
      intermediateReading: "Intermedio · Lettura",
    },
    languageNames: ["Inglese", "Spagnolo", "Italiano", "Francese", "Russo", "Portoghese", "Tedesco"],
    signin: {
      eyebrow: "Iscrizione",
      title: "Prenota il tuo posto nel prossimo gruppo",
      description:
        "Dicci quale lingua vuoi imparare e ti invieremo l'orario e i dettagli per partecipare alle lezioni online dal vivo.",
      fullName: "Nome completo",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      selectLanguage: "Seleziona una lingua",
      send: "Invia",
      sending: "Invio in corso...",
      sent: "Inviato con successo.",
      error: "Errore durante l'invio dell'email.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Lezioni erogate online tramite HelloTalk.",
    aboutPage: {
      seoTitle: "Chi siamo — The Ministry of Languages",
      seoDescription:
        "Scopri The Ministry of Languages e il tuo insegnante Jeffrey A. Guzman: metodologia, valori e programmi di lingue dal vivo.",
      hero: {
        line1: "Impara con sicurezza.",
        line2: "Parla con uno scopo.",
        line3: "Connettiti con il mondo.",
        lead: "Crediamo che imparare una lingua debba aprire porte, non creare barriere. Ti aiutiamo a comunicare con naturalezza attraverso un'istruzione strutturata, conversazione dal vivo e la guida di un educatore multilingue esperto.",
        statLabels: [
          "Lingue offerte",
          "Lezioni online dal vivo",
          "Anni di esperienza culturale",
        ],
      },
      intro: {
        whoKicker: "Chi Siamo",
        whoTitle: "Una lingua è la chiave per connettersi con il mondo",
        whoText: [
          "Che il tuo obiettivo sia viaggiare, far crescere la carriera, avere successo negli studi, trasferirti o crescere a livello personale, le nostre lezioni sono pensate per farti comunicare con sicurezza fin dalla prima lezione.",
          "Creiamo un ambiente accogliente in cui ogni studente è incoraggiato a crescere, fare domande, sbagliare e celebrare i propri progressi.",
        ],
        missionKicker: "La Nostra Missione",
        missionTitle:
          "Un'educazione linguistica accessibile, coinvolgente ed efficace",
        missionText: [
          "Crediamo che chiunque possa raggiungere la fluidità con la giusta guida, una pratica costante e un ambiente di apprendimento motivante.",
          "Ogni lezione sviluppa competenze pratiche di comunicazione che puoi applicare subito nella vita quotidiana, al lavoro, negli studi e nei viaggi internazionali.",
        ],
      },
      why: {
        kicker: "Perché Sceglierci",
        title: "Una metodologia incentrata sul comunicare",
        sub: "Ogni lezione bilancia grammatica, vocabolario, pronuncia, comprensione orale, lettura, scrittura e conversazione, con un monitoraggio continuo e un supporto individuale.",
        pillars: [
          {
            title: "Comunicazione fin dal primo giorno",
            desc: "Invece di memorizzare regole isolate, parli e ti eserciti dalla prima lezione con un feedback personalizzato.",
          },
          {
            title: "Lezioni dal vivo, 100% online",
            desc: "Istruzione dal vivo con studenti di tutto il mondo: feedback immediato, pratica guidata e interazione reale.",
          },
          {
            title: "Oltre l'aula",
            desc: "Ti guidiamo a fare pratica con madrelingua in comunità di scambio come HelloTalk e altre piattaforme.",
          },
          {
            title: "Accompagnamento individuale",
            desc: "Ogni persona impara in modo diverso. Uniamo una struttura chiara ad un'attenzione personalizzata per le tue esigenze.",
          },
        ],
      },
      instructor: {
        kicker: "Conosci il tuo Insegnante",
        name: "Jeffrey A. Guzman",
        role: "Educatore multilingue, linguista, interprete, analista criminale e storico, nato nella Repubblica Dominicana e residente a New York da oltre vent'anni.",
        bio: [
          "Jeffrey parla sette lingue. Oltre allo spagnolo madrelingua e all'inglese fluente, ha studiato francese, italiano, portoghese e russo a livello universitario, vivendo in prima persona le sfide di imparare più lingue da adulto. Questa esperienza gli permette di entrare in sintonia con i suoi studenti e comprendere gli ostacoli che affrontano.",
          "La sua passione per la storia dominicana —dall'eredità Taína alla diaspora— arricchisce il suo insegnamento, aiutando gli studenti ad apprezzare le culture dietro ogni lingua. La sua filosofia si basa su pazienza, struttura, incoraggiamento e supporto personalizzato: gli errori non sono fallimenti, sono passi essenziali verso la fluidità.",
        ],
        credTitle: "Formazione e credenziali",
        credentials: [
          "Master in Crimine e Giustizia Internazionale — John Jay College (CUNY)",
          "Insegnante certificato da Bridge Education Group (Bridge Academy)",
          "Interprete professionale certificato da Berlitz (francese e spagnolo)",
          "Interprete di francese e spagnolo per il NYPD",
          "Analista criminale del NYPD",
        ],
        photoLabel: "Foto dell'insegnante",
        languages: [
          "Spagnolo",
          "Inglese",
          "Francese",
          "Italiano",
          "Portoghese",
          "Russo",
        ],
      },
      values: {
        kicker: "I Nostri Valori",
        title: "Cinque principi che guidano ogni lezione",
        items: [
          {
            title: "Eccellenza",
            desc: "Perseguiamo i più alti standard nell'insegnamento e nell'apprendimento.",
          },
          {
            title: "Rispetto",
            desc: "Ogni studente merita pazienza, incoraggiamento e dignità.",
          },
          {
            title: "Comunicazione",
            desc: "Le lingue sono strumenti per costruire relazioni e comprensione.",
          },
          {
            title: "Consapevolezza Culturale",
            desc: "Imparare una lingua significa apprezzare le persone e le culture che ci sono dietro.",
          },
          {
            title: "Apprendimento Continuo",
            desc: "L'educazione non finisce mai; ogni lingua apre nuove opportunità.",
          },
        ],
      },
      programs: {
        kicker: "I Nostri Programmi",
        title: "Istruzione dal vivo in sei lingue",
        text: "Ogni programma segue un curriculum strutturato che sviluppa espressione orale, ascolto, lettura, scrittura, pronuncia, grammatica, vocabolario e comprensione culturale.",
        list: [
          "Inglese",
          "Francese",
          "Italiano",
          "Portoghese",
          "Spagnolo",
          "Tedesco",
        ],
      },
      promise: {
        kicker: "La Nostra Promessa",
        title: "Alla The Ministry of Languages, ogni studente conta",
        text: "Che tu voglia viaggiare con sicurezza, dare slancio alla carriera, prepararti per la scuola, comunicare con la tua famiglia o semplicemente metterti alla prova con una nuova lingua, siamo impegnati per il tuo successo.",
        seeClasses: "Guarda i nostri corsi",
        seePricing: "Esplora i prezzi",
      },
    },
  },

  fr: {
    localeLabel: "Français",
    seoTitle:
      "Cours de langues en ligne | Apprenez l'anglais, le français, l'italien et le portugais",
    seoDescription:
      "Rejoignez des cours de langues en ligne en direct pour adultes. Étudiez l'anglais, le français, l'italien et le portugais en petits groupes, avec des leçons de grammaire claires, un soutien à la prononciation et une vraie pratique de la conversation.",
    tagline: "Cours de langues en ligne en direct pour adultes.",
    heroTitle:
      "Cours en ligne d'anglais, de français, d'italien et de portugais",
    subtitle:
      "Apprenez avec des cours en ligne en direct, en petits groupes, un accompagnement en grammaire et une vraie pratique de la conversation pour les adultes.",
    registerNow: "Inscrivez-vous",
    infoHeading: "Info",
    nav: {
      about: "À propos",
      classes: "Nos cours",
      languages: "Les langues",
      signin: "Inscription",
      contact: "Contactez-nous",
    },
    leftInfo: [
      {
        title: "Cours en direct",
        text: "Des sessions en ligne en temps réel avec un enseignant qui vous guide à chaque étape.",
      },
      {
        title: "Petits groupes",
        text: "Des places limitées pour que chacun reçoive de l'attention et du temps de parole.",
      },
      {
        title: "Axé sur la pratique",
        text: "Conçu pour utiliser la langue, pas seulement mémoriser des règles.",
      },
    ],
    rightInfo: [
      {
        title: "Grammaire claire",
        text: "Des leçons pas à pas qui donnent confiance dans les bases.",
      },
      {
        title: "Prononciation",
        text: "Améliorez l'écoute et l'expression jusqu'à ce que ce soit naturel.",
      },
      {
        title: "Conversation",
        text: "Lecture, écriture et vraie conversation à chaque cours.",
      },
    ],
    about: [
      {
        title: "Qui sommes-nous",
        text: "The Ministry of Languages aide les apprenants adultes à gagner en confiance en anglais, français, italien et portugais grâce à des leçons structurées, une pratique en direct et un enseignement bienveillant.",
      },
      {
        title: "Apprentissage en ligne",
        text: "Les cours sont donnés en ligne lors de sessions en direct, ce qui permet aux étudiants de participer depuis n'importe où et de pratiquer régulièrement avec un vrai enseignant.",
      },
      {
        title: "Pratique orale supplémentaire",
        text: "Les étudiants peuvent utiliser HelloTalk comme outil complémentaire pour échanger avec des locuteurs natifs et continuer à progresser à l'oral en dehors des cours.",
      },
    ],
    classesHeading: "Nos cours",
    classesSubtitle:
      "Gagnez en confiance en grammaire, prononciation, lecture et conversation. Choisissez votre langue et votre niveau.",
    levels: {
      beginner: "Débutant",
      elementary: "Élémentaire",
      intermediateReading: "Intermédiaire · Lecture",
    },
    languageNames: ["Anglais", "Espagnol", "Italien", "Français", "Russe", "Portugais", "Allemand"],
    signin: {
      eyebrow: "Inscription",
      title: "Réservez votre place dans le prochain groupe",
      description:
        "Dites-nous quelle langue vous souhaitez apprendre et nous vous enverrons l'horaire et les informations pour rejoindre les cours en ligne en direct.",
      fullName: "Nom complet",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      selectLanguage: "Choisissez une langue",
      send: "Envoyer",
      sending: "Envoi en cours...",
      sent: "Envoyé avec succès.",
      error: "Erreur lors de l'envoi de l'e-mail.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Cours dispensés en ligne via HelloTalk.",
    aboutPage: {
      seoTitle: "À propos — The Ministry of Languages",
      seoDescription:
        "Découvrez The Ministry of Languages et votre enseignant Jeffrey A. Guzman : méthodologie, valeurs et programmes de langues en direct.",
      hero: {
        line1: "Apprenez avec confiance.",
        line2: "Parlez avec intention.",
        line3: "Connectez-vous au monde.",
        lead: "Nous croyons qu'apprendre une langue doit ouvrir des portes, pas créer des barrières. Nous vous aidons à communiquer avec naturel grâce à un enseignement structuré, une conversation en direct et l'accompagnement d'un éducateur multilingue expérimenté.",
        statLabels: [
          "Langues proposées",
          "Cours en ligne en direct",
          "Années d'expérience culturelle",
        ],
      },
      intro: {
        whoKicker: "Qui Sommes-Nous",
        whoTitle: "Une langue est la clé pour se connecter au monde",
        whoText: [
          "Que votre objectif soit de voyager, de faire progresser votre carrière, de réussir vos études, de déménager ou de grandir personnellement, nos cours sont conçus pour que vous communiquiez avec confiance dès votre première leçon.",
          "Nous créons un environnement accueillant où chaque élève est encouragé à progresser, à poser des questions, à faire des erreurs et à célébrer ses progrès.",
        ],
        missionKicker: "Notre Mission",
        missionTitle:
          "Un enseignement des langues accessible, engageant et efficace",
        missionText: [
          "Nous croyons que chacun peut atteindre la fluidité avec le bon accompagnement, une pratique régulière et un environnement d'apprentissage motivant.",
          "Chaque leçon développe des compétences pratiques de communication que vous pouvez appliquer immédiatement dans la vie quotidienne, au travail, dans les études et lors de voyages internationaux.",
        ],
      },
      why: {
        kicker: "Pourquoi Nous Choisir",
        title: "Une méthodologie centrée sur la communication",
        sub: "Chaque leçon équilibre grammaire, vocabulaire, prononciation, compréhension orale, lecture, écriture et conversation, avec un suivi continu et un soutien individuel.",
        pillars: [
          {
            title: "Communiquer dès le premier jour",
            desc: "Au lieu de mémoriser des règles isolées, vous parlez et pratiquez dès votre première leçon avec un retour personnalisé.",
          },
          {
            title: "Cours en direct, 100% en ligne",
            desc: "Un enseignement en direct avec des élèves du monde entier : retour immédiat, pratique guidée et interaction réelle.",
          },
          {
            title: "Au-delà de la salle de classe",
            desc: "Nous vous guidons pour pratiquer avec des locuteurs natifs dans des communautés d'échange comme HelloTalk et d'autres plateformes.",
          },
          {
            title: "Accompagnement individualisé",
            desc: "Chacun apprend différemment. Nous associons une structure claire à une attention personnalisée selon vos besoins.",
          },
        ],
      },
      instructor: {
        kicker: "Rencontrez Votre Enseignant",
        name: "Jeffrey A. Guzman",
        role: "Éducateur multilingue, linguiste, interprète, analyste criminel et historien, né en République dominicaine et résident de New York depuis plus de vingt ans.",
        bio: [
          "Jeffrey parle sept langues. Outre son espagnol natal et son anglais courant, il a étudié le français, l'italien, le portugais et le russe au niveau universitaire, vivant lui-même les défis d'apprendre plusieurs langues à l'âge adulte. Cette expérience lui permet de se rapprocher de ses élèves et de comprendre les obstacles qu'ils rencontrent.",
          "Sa passion pour l'histoire dominicaine —de l'héritage Taïno à la diaspora— enrichit son enseignement, aidant les élèves à apprécier les cultures derrière chaque langue. Sa philosophie repose sur la patience, la structure, l'encouragement et le soutien personnalisé : les erreurs ne sont pas des échecs, ce sont des étapes essentielles vers la fluidité.",
        ],
        credTitle: "Formation et titres",
        credentials: [
          "Master en Criminalité et Justice Internationale — John Jay College (CUNY)",
          "Enseignant certifié par Bridge Education Group (Bridge Academy)",
          "Interprète professionnel certifié par Berlitz (français et espagnol)",
          "Interprète français et espagnol pour le NYPD",
          "Analyste criminel au NYPD",
        ],
        photoLabel: "Photo de l'enseignant",
        languages: [
          "Espagnol",
          "Anglais",
          "Français",
          "Italien",
          "Portugais",
          "Russe",
        ],
      },
      values: {
        kicker: "Nos Valeurs",
        title: "Cinq principes qui guident chaque cours",
        items: [
          {
            title: "Excellence",
            desc: "Nous recherchons les plus hauts standards dans l'enseignement et l'apprentissage.",
          },
          {
            title: "Respect",
            desc: "Chaque élève mérite patience, encouragement et dignité.",
          },
          {
            title: "Communication",
            desc: "Les langues sont des outils pour construire des relations et de la compréhension.",
          },
          {
            title: "Conscience Culturelle",
            desc: "Apprendre une langue, c'est apprécier les personnes et les cultures qui se cachent derrière.",
          },
          {
            title: "Apprentissage Continu",
            desc: "L'éducation ne s'arrête jamais ; chaque langue ouvre de nouvelles opportunités.",
          },
        ],
      },
      programs: {
        kicker: "Nos Programmes",
        title: "Un enseignement en direct dans six langues",
        text: "Chaque programme suit un cursus structuré qui développe l'expression orale, l'écoute, la lecture, l'écriture, la prononciation, la grammaire, le vocabulaire et la compréhension culturelle.",
        list: [
          "Anglais",
          "Français",
          "Italien",
          "Portugais",
          "Espagnol",
          "Allemand",
        ],
      },
      promise: {
        kicker: "Notre Promesse",
        title: "À The Ministry of Languages, chaque élève compte",
        text: "Que vous souhaitiez voyager en confiance, dynamiser votre carrière, vous préparer à l'école, communiquer avec votre famille ou simplement vous lancer un défi avec une nouvelle langue, nous sommes engagés pour votre réussite.",
        seeClasses: "Voir nos cours",
        seePricing: "Découvrir les tarifs",
      },
    },
  },

  ru: {
    localeLabel: "Русский",
    seoTitle:
      "Онлайн-курсы языков | Английский, французский, итальянский и португальский",
    seoDescription:
      "Присоединяйтесь к живым онлайн-занятиям по языкам для взрослых. Изучайте английский, французский, итальянский и португальский в небольших группах с понятной грамматикой, работой над произношением и реальной разговорной практикой.",
    tagline: "Живые онлайн-занятия по языкам для взрослых.",
    heroTitle:
      "Онлайн-курсы английского, французского, итальянского и португальского",
    subtitle:
      "Учитесь на живых онлайн-занятиях в небольших группах с грамматической поддержкой и реальной разговорной практикой для взрослых.",
    registerNow: "Записаться",
    infoHeading: "Инфо",
    nav: {
      about: "О нас",
      classes: "Наши курсы",
      languages: "Языки",
      signin: "Запись",
      contact: "Контакты",
    },
    leftInfo: [
      {
        title: "Живые занятия",
        text: "Онлайн-сессии в реальном времени, где преподаватель ведёт вас на каждом шаге.",
      },
      {
        title: "Небольшие группы",
        text: "Ограниченное число мест, чтобы каждому уделили внимание и дали время говорить.",
      },
      {
        title: "Упор на практику",
        text: "Построены на использовании языка, а не на зубрёжке правил.",
      },
    ],
    rightInfo: [
      {
        title: "Понятная грамматика",
        text: "Пошаговые уроки, которые дают уверенность в основах.",
      },
      {
        title: "Произношение",
        text: "Улучшайте восприятие и речь, пока это не станет естественным.",
      },
      {
        title: "Разговор",
        text: "Чтение, письмо и реальный разговор на каждом занятии.",
      },
    ],
    about: [
      {
        title: "Кто мы",
        text: "The Ministry of Languages помогает взрослым обрести уверенность в английском, французском, итальянском и португальском через структурированные уроки, живую практику и поддерживающее преподавание.",
      },
      {
        title: "Онлайн-обучение",
        text: "Занятия проходят онлайн в живом формате, поэтому студенты могут присоединиться откуда угодно и регулярно практиковаться с настоящим преподавателем.",
      },
      {
        title: "Дополнительная разговорная практика",
        text: "Студенты могут использовать HelloTalk как дополнительный инструмент, чтобы общаться с носителями языка и продолжать улучшать речь и восприятие вне занятий.",
      },
    ],
    classesHeading: "Наши курсы",
    classesSubtitle:
      "Обретайте уверенность в грамматике, произношении, чтении и разговоре. Выберите язык и уровень.",
    levels: {
      beginner: "Начальный",
      elementary: "Элементарный",
      intermediateReading: "Средний · Чтение",
    },
    languageNames: ["Английский", "Испанский", "Итальянский", "Французский", "Русский", "Португальский", "Немецкий"],
    signin: {
      eyebrow: "Запись",
      title: "Забронируйте место в следующей группе",
      description:
        "Сообщите, какой язык вы хотите изучать, и мы пришлём вам расписание и данные для подключения к живым онлайн-занятиям.",
      fullName: "Полное имя",
      namePlaceholder: "Ваше имя",
      email: "Электронная почта",
      selectLanguage: "Выберите язык",
      send: "Отправить",
      sending: "Отправка...",
      sent: "Успешно отправлено.",
      error: "Ошибка при отправке письма.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Занятия проводятся онлайн через HelloTalk.",
    aboutPage: {
      seoTitle: "О нас — The Ministry of Languages",
      seoDescription:
        "Познакомьтесь с The Ministry of Languages и вашим преподавателем Jeffrey A. Guzman: методика, ценности и живые языковые программы.",
      hero: {
        line1: "Учитесь уверенно.",
        line2: "Говорите осмысленно.",
        line3: "Соединяйтесь с миром.",
        lead: "Мы верим, что изучение языка должно открывать двери, а не создавать барьеры. Мы помогаем вам общаться естественно благодаря структурированному обучению, живому разговору и поддержке опытного многоязычного педагога.",
        statLabels: [
          "Языков предлагается",
          "Живых онлайн-занятий",
          "Лет культурного опыта",
        ],
      },
      intro: {
        whoKicker: "Кто Мы",
        whoTitle: "Язык — ключ к связи с миром",
        whoText: [
          "Какой бы ни была ваша цель — путешествовать, продвигаться по карьере, добиваться успехов в учёбе, переезжать или расти лично — наши занятия построены так, чтобы вы уверенно общались с самого первого урока.",
          "Мы создаём доброжелательную атмосферу, где каждого студента поощряют расти, задавать вопросы, ошибаться и радоваться своим успехам.",
        ],
        missionKicker: "Наша Миссия",
        missionTitle:
          "Доступное, увлекательное и эффективное языковое образование",
        missionText: [
          "Мы верим, что любой может достичь свободного владения языком при правильном руководстве, постоянной практике и мотивирующей учебной среде.",
          "Каждый урок развивает практические навыки общения, которые вы можете сразу применить в повседневной жизни, на работе, в учёбе и в международных поездках.",
        ],
      },
      why: {
        kicker: "Почему Мы",
        title: "Методика, ориентированная на общение",
        sub: "Каждый урок сочетает грамматику, лексику, произношение, восприятие на слух, чтение, письмо и разговор с постоянным сопровождением и индивидуальной поддержкой.",
        pillars: [
          {
            title: "Общение с первого дня",
            desc: "Вместо зубрёжки отдельных правил вы говорите и практикуетесь с первого урока и получаете персональную обратную связь.",
          },
          {
            title: "Живые занятия, 100% онлайн",
            desc: "Живое обучение со студентами со всего мира: мгновенная обратная связь, направляемая практика и настоящее общение.",
          },
          {
            title: "За пределами класса",
            desc: "Мы помогаем вам практиковаться с носителями языка в сообществах обмена, таких как HelloTalk и другие платформы.",
          },
          {
            title: "Индивидуальное сопровождение",
            desc: "Каждый учится по-своему. Мы сочетаем чёткую структуру с индивидуальным вниманием к вашим потребностям.",
          },
        ],
      },
      instructor: {
        kicker: "Познакомьтесь с Преподавателем",
        name: "Jeffrey A. Guzman",
        role: "Многоязычный педагог, лингвист, переводчик, криминальный аналитик и историк, родившийся в Доминиканской Республике и живущий в Нью-Йорке более двадцати лет.",
        bio: [
          "Jeffrey говорит на семи языках. Помимо родного испанского и свободного английского, он изучал французский, итальянский, португальский и русский на университетском уровне, на себе испытав трудности изучения нескольких языков во взрослом возрасте. Этот опыт позволяет ему быть близким к студентам и понимать препятствия, с которыми они сталкиваются.",
          "Его страсть к доминиканской истории —от наследия таино до диаспоры— обогащает преподавание, помогая студентам ценить культуры, стоящие за каждым языком. Его философия основана на терпении, структуре, поддержке и индивидуальном сопровождении: ошибки — не провалы, а необходимые шаги к свободному владению.",
        ],
        credTitle: "Образование и квалификация",
        credentials: [
          "Магистр по международной преступности и правосудию — John Jay College (CUNY)",
          "Сертифицированный преподаватель Bridge Education Group (Bridge Academy)",
          "Профессиональный переводчик, сертифицированный Berlitz (французский и испанский)",
          "Переводчик французского и испанского для NYPD",
          "Криминальный аналитик NYPD",
        ],
        photoLabel: "Фото преподавателя",
        languages: [
          "Испанский",
          "Английский",
          "Французский",
          "Итальянский",
          "Португальский",
          "Русский",
        ],
      },
      values: {
        kicker: "Наши Ценности",
        title: "Пять принципов, направляющих каждое занятие",
        items: [
          {
            title: "Совершенство",
            desc: "Мы стремимся к самым высоким стандартам преподавания и обучения.",
          },
          {
            title: "Уважение",
            desc: "Каждый студент заслуживает терпения, поддержки и достоинства.",
          },
          {
            title: "Общение",
            desc: "Языки — это инструменты для построения отношений и взаимопонимания.",
          },
          {
            title: "Культурная Осознанность",
            desc: "Изучать язык — значит ценить людей и культуры, стоящие за ним.",
          },
          {
            title: "Обучение на всю Жизнь",
            desc: "Образование никогда не заканчивается; каждый язык открывает новые возможности.",
          },
        ],
      },
      programs: {
        kicker: "Наши Программы",
        title: "Живое обучение на шести языках",
        text: "Каждая программа следует структурированному учебному плану, развивающему речь, восприятие на слух, чтение, письмо, произношение, грамматику, лексику и понимание культуры.",
        list: [
          "Английский",
          "Французский",
          "Итальянский",
          "Португальский",
          "Испанский",
          "Немецкий",
        ],
      },
      promise: {
        kicker: "Наше Обещание",
        title: "В The Ministry of Languages важен каждый студент",
        text: "Хотите ли вы уверенно путешествовать, продвинуть карьеру, подготовиться к учёбе, общаться с семьёй или просто бросить себе вызов новым языком — мы привержены вашему успеху.",
        seeClasses: "Смотреть наши курсы",
        seePricing: "Узнать цены",
      },
    },
  },

  pt: {
    localeLabel: "Português",
    seoTitle:
      "Aulas de idiomas online | Aprenda inglês, francês, italiano e português",
    seoDescription:
      "Participe de aulas de idiomas online ao vivo para adultos. Estude inglês, francês, italiano e português em grupos pequenos, com lições de gramática claras, apoio na pronúncia e prática de conversação real.",
    tagline: "Aulas de idiomas online ao vivo para adultos.",
    heroTitle: "Aulas online de inglês, francês, italiano e português",
    subtitle:
      "Aprenda com aulas online ao vivo, grupos pequenos, orientação gramatical e prática de conversação real para alunos adultos.",
    registerNow: "Inscreva-se agora",
    infoHeading: "Info",
    nav: {
      about: "Sobre nós",
      classes: "Nossas aulas",
      languages: "Os idiomas",
      signin: "Inscrição",
      contact: "Fale conosco",
    },
    leftInfo: [
      {
        title: "Aulas ao vivo",
        text: "Sessões online em tempo real com um professor guiando cada passo.",
      },
      {
        title: "Grupos pequenos",
        text: "Vagas limitadas para que todos recebam atenção e tempo para falar.",
      },
      {
        title: "Foco na prática",
        text: "Feitas para usar o idioma, não apenas memorizar regras.",
      },
    ],
    rightInfo: [
      {
        title: "Gramática clara",
        text: "Lições passo a passo que dão confiança no básico.",
      },
      {
        title: "Pronúncia",
        text: "Melhore a escuta e a fala até soar natural.",
      },
      {
        title: "Conversação",
        text: "Leitura, escrita e conversação real em todas as aulas.",
      },
    ],
    about: [
      {
        title: "Quem somos",
        text: "The Ministry of Languages ajuda alunos adultos a ganhar confiança em inglês, francês, italiano e português por meio de aulas estruturadas, prática ao vivo e ensino acolhedor.",
      },
      {
        title: "Aprendizado online",
        text: "As aulas são ministradas online em sessões ao vivo, facilitando que os alunos participem de qualquer lugar e pratiquem com constância com um professor real.",
      },
      {
        title: "Prática extra de conversação",
        text: "Os alunos podem usar o HelloTalk como ferramenta extra para se conectar com falantes nativos e continuar melhorando a fala e a escuta fora da aula.",
      },
    ],
    classesHeading: "Nossas aulas",
    classesSubtitle:
      "Ganhe confiança em gramática, pronúncia, leitura e conversação. Escolha seu idioma e seu nível.",
    levels: {
      beginner: "Iniciante",
      elementary: "Elementar",
      intermediateReading: "Intermediário · Leitura",
    },
    languageNames: ["Inglês", "Espanhol", "Italiano", "Francês", "Russo", "Português", "Alemão"],
    signin: {
      eyebrow: "Inscrição",
      title: "Reserve sua vaga no próximo grupo",
      description:
        "Diga-nos qual idioma você quer aprender e enviaremos o horário e os detalhes para participar das aulas online ao vivo.",
      fullName: "Nome completo",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      selectLanguage: "Selecione um idioma",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Enviado com sucesso.",
      error: "Erro ao enviar o e-mail.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Aulas ministradas online via HelloTalk.",
    aboutPage: {
      seoTitle: "Sobre nós — The Ministry of Languages",
      seoDescription:
        "Conheça a The Ministry of Languages e o seu professor Jeffrey A. Guzman: metodologia, valores e programas de idiomas ao vivo.",
      hero: {
        line1: "Aprenda com confiança.",
        line2: "Fale com propósito.",
        line3: "Conecte-se com o mundo.",
        lead: "Acreditamos que aprender um idioma deve abrir portas, não criar barreiras. Ajudamos você a se comunicar com naturalidade por meio de instrução estruturada, conversação ao vivo e a orientação de um educador multilíngue experiente.",
        statLabels: [
          "Idiomas oferecidos",
          "Aulas online ao vivo",
          "Anos de experiência cultural",
        ],
      },
      intro: {
        whoKicker: "Quem Somos",
        whoTitle: "Um idioma é a chave para se conectar com o mundo",
        whoText: [
          "Seja o seu objetivo viajar, avançar na carreira, ter sucesso acadêmico, mudar de país ou crescer pessoalmente, nossas aulas são pensadas para que você se comunique com confiança desde a primeira lição.",
          "Criamos um ambiente acolhedor onde cada aluno é incentivado a crescer, fazer perguntas, cometer erros e celebrar seu progresso.",
        ],
        missionKicker: "Nossa Missão",
        missionTitle: "Educação de idiomas acessível, envolvente e eficaz",
        missionText: [
          "Acreditamos que qualquer pessoa pode alcançar a fluência com a orientação certa, prática constante e um ambiente de aprendizado motivador.",
          "Cada lição desenvolve habilidades práticas de comunicação que você pode aplicar de imediato no dia a dia, no trabalho, nos estudos e em viagens internacionais.",
        ],
      },
      why: {
        kicker: "Por Que Nos Escolher",
        title: "Uma metodologia centrada em comunicar",
        sub: "Cada lição equilibra gramática, vocabulário, pronúncia, compreensão auditiva, leitura, escrita e conversação, com acompanhamento contínuo e apoio individual.",
        pillars: [
          {
            title: "Comunicação desde o primeiro dia",
            desc: "Em vez de memorizar regras isoladas, você fala e pratica desde a primeira lição com feedback personalizado.",
          },
          {
            title: "Aulas ao vivo, 100% online",
            desc: "Instrução ao vivo com alunos do mundo todo: feedback imediato, prática guiada e interação real.",
          },
          {
            title: "Além da sala de aula",
            desc: "Orientamos você a praticar com falantes nativos em comunidades de intercâmbio como o HelloTalk e outras plataformas.",
          },
          {
            title: "Acompanhamento individualizado",
            desc: "Cada pessoa aprende de forma diferente. Combinamos estrutura clara com atenção personalizada às suas necessidades.",
          },
        ],
      },
      instructor: {
        kicker: "Conheça o seu Professor",
        name: "Jeffrey A. Guzman",
        role: "Educador multilíngue, linguista, intérprete, analista criminal e historiador, nascido na República Dominicana e residente em Nova York há mais de vinte anos.",
        bio: [
          "Jeffrey fala sete idiomas. Além do espanhol nativo e do inglês fluente, estudou francês, italiano, português e russo em nível universitário, vivenciando na pele os desafios de aprender vários idiomas na vida adulta. Essa experiência lhe permite se conectar de perto com seus alunos e entender os obstáculos que eles enfrentam.",
          "Sua paixão pela história dominicana —da herança Taína à diáspora— enriquece seu ensino, ajudando os alunos a apreciar as culturas por trás de cada idioma. Sua filosofia baseia-se em paciência, estrutura, incentivo e apoio personalizado: os erros não são fracassos, são passos essenciais rumo à fluência.",
        ],
        credTitle: "Formação e credenciais",
        credentials: [
          "Mestrado em Crime e Justiça Internacional — John Jay College (CUNY)",
          "Professor certificado pela Bridge Education Group (Bridge Academy)",
          "Intérprete profissional certificado pela Berlitz (francês e espanhol)",
          "Intérprete de francês e espanhol para o NYPD",
          "Analista criminal do NYPD",
        ],
        photoLabel: "Foto do professor",
        languages: [
          "Espanhol",
          "Inglês",
          "Francês",
          "Italiano",
          "Português",
          "Russo",
        ],
      },
      values: {
        kicker: "Nossos Valores",
        title: "Cinco princípios que guiam cada aula",
        items: [
          {
            title: "Excelência",
            desc: "Buscamos os mais altos padrões no ensino e na aprendizagem.",
          },
          {
            title: "Respeito",
            desc: "Cada aluno merece paciência, incentivo e dignidade.",
          },
          {
            title: "Comunicação",
            desc: "Os idiomas são ferramentas para construir relacionamentos e entendimento.",
          },
          {
            title: "Consciência Cultural",
            desc: "Aprender um idioma é apreciar as pessoas e culturas por trás dele.",
          },
          {
            title: "Aprendizado para a Vida",
            desc: "A educação nunca termina; cada idioma abre novas oportunidades.",
          },
        ],
      },
      programs: {
        kicker: "Nossos Programas",
        title: "Instrução ao vivo em seis idiomas",
        text: "Cada programa segue um currículo estruturado que desenvolve fala, escuta, leitura, escrita, pronúncia, gramática, vocabulário e compreensão cultural.",
        list: [
          "Inglês",
          "Francês",
          "Italiano",
          "Português",
          "Espanhol",
          "Alemão",
        ],
      },
      promise: {
        kicker: "Nossa Promessa",
        title: "Na The Ministry of Languages, cada aluno importa",
        text: "Seja para viajar com confiança, impulsionar a carreira, preparar-se para os estudos, comunicar-se com a família ou simplesmente se desafiar com um novo idioma, estamos comprometidos com o seu sucesso.",
        seeClasses: "Ver nossas aulas",
        seePricing: "Explorar preços",
      },
    },
  },

  de: {
    localeLabel: "Deutsch",
    seoTitle:
      "Online-Sprachkurse | Englisch, Französisch, Italienisch und Portugiesisch lernen",
    seoDescription:
      "Nehmen Sie an Live-Online-Sprachkursen für Erwachsene teil. Lernen Sie Englisch, Französisch, Italienisch und Portugiesisch in kleinen Gruppen mit klaren Grammatiklektionen, Ausspracheunterstützung und echter Konversationspraxis.",
    tagline: "Live-Online-Sprachkurse für Erwachsene.",
    heroTitle:
      "Online-Kurse für Englisch, Französisch, Italienisch und Portugiesisch",
    subtitle:
      "Lernen Sie mit Live-Online-Unterricht in kleinen Gruppen, mit Grammatikhilfe und echter Konversationspraxis für erwachsene Lernende.",
    registerNow: "Jetzt anmelden",
    infoHeading: "Info",
    nav: {
      about: "Über uns",
      classes: "Unsere Kurse",
      languages: "Die Sprachen",
      signin: "Anmeldung",
      contact: "Kontakt",
    },
    leftInfo: [
      {
        title: "Live-Unterricht",
        text: "Online-Sitzungen in Echtzeit, bei denen eine Lehrkraft jeden Schritt begleitet.",
      },
      {
        title: "Kleine Gruppen",
        text: "Begrenzte Plätze, damit alle Aufmerksamkeit und Redezeit bekommen.",
      },
      {
        title: "Praxisorientiert",
        text: "Darauf ausgelegt, die Sprache zu nutzen, nicht nur Regeln auswendig zu lernen.",
      },
    ],
    rightInfo: [
      {
        title: "Klare Grammatik",
        text: "Schritt-für-Schritt-Lektionen, die Sicherheit in den Grundlagen geben.",
      },
      {
        title: "Aussprache",
        text: "Verbessern Sie Hören und Sprechen, bis es sich natürlich anfühlt.",
      },
      {
        title: "Konversation",
        text: "Lesen, Schreiben und echte Konversation in jedem Kurs.",
      },
    ],
    about: [
      {
        title: "Wer wir sind",
        text: "The Ministry of Languages hilft erwachsenen Lernenden, durch strukturierten Unterricht, Live-Praxis und unterstützende Lehre Sicherheit in Englisch, Französisch, Italienisch und Portugiesisch zu gewinnen.",
      },
      {
        title: "Online-Lernen",
        text: "Der Unterricht findet online in Live-Sitzungen statt, sodass Studierende von überall teilnehmen und regelmäßig mit einer echten Lehrkraft üben können.",
      },
      {
        title: "Zusätzliche Sprechpraxis",
        text: "Studierende können HelloTalk als zusätzliches Werkzeug nutzen, um mit Muttersprachlern in Kontakt zu treten und ihr Sprechen und Hören außerhalb des Unterrichts weiter zu verbessern.",
      },
    ],
    classesHeading: "Unsere Kurse",
    classesSubtitle:
      "Gewinnen Sie Sicherheit in Grammatik, Aussprache, Lesen und Konversation. Wählen Sie Ihre Sprache und Ihr Niveau.",
    levels: {
      beginner: "Anfänger",
      elementary: "Grundstufe",
      intermediateReading: "Mittelstufe · Lesen",
    },
    languageNames: ["Englisch", "Spanisch", "Italienisch", "Französisch", "Russisch", "Portugiesisch", "Deutsch"],
    signin: {
      eyebrow: "Anmeldung",
      title: "Sichern Sie sich Ihren Platz in der nächsten Gruppe",
      description:
        "Sagen Sie uns, welche Sprache Sie lernen möchten, und wir senden Ihnen den Zeitplan und die Zugangsdaten für die Live-Online-Kurse.",
      fullName: "Vollständiger Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      selectLanguage: "Sprache auswählen",
      send: "Senden",
      sending: "Wird gesendet...",
      sent: "Erfolgreich gesendet.",
      error: "Fehler beim Senden der E-Mail.",
    },
    footer:
      "© {year} The Ministry of Languages Domain. Kurse werden online über HelloTalk durchgeführt.",
    aboutPage: {
      seoTitle: "Über uns — The Ministry of Languages",
      seoDescription:
        "Lernen Sie The Ministry of Languages und Ihren Lehrer Jeffrey A. Guzman kennen: Methodik, Werte und Live-Sprachprogramme.",
      hero: {
        line1: "Lernen Sie mit Selbstvertrauen.",
        line2: "Sprechen Sie mit Sinn.",
        line3: "Verbinden Sie sich mit der Welt.",
        lead: "Wir glauben, dass das Erlernen einer Sprache Türen öffnen und keine Barrieren schaffen sollte. Wir helfen Ihnen, natürlich zu kommunizieren – durch strukturierten Unterricht, Live-Konversation und die Begleitung eines erfahrenen mehrsprachigen Pädagogen.",
        statLabels: [
          "Angebotene Sprachen",
          "Live-Online-Kurse",
          "Jahre kultureller Erfahrung",
        ],
      },
      intro: {
        whoKicker: "Wer Wir Sind",
        whoTitle: "Eine Sprache ist der Schlüssel zur Verbindung mit der Welt",
        whoText: [
          "Ob Ihr Ziel Reisen, beruflicher Aufstieg, akademischer Erfolg, ein Umzug oder persönliches Wachstum ist – unsere Kurse sind so gestaltet, dass Sie schon ab der ersten Lektion selbstbewusst kommunizieren.",
          "Wir schaffen eine einladende Umgebung, in der jede lernende Person ermutigt wird, zu wachsen, Fragen zu stellen, Fehler zu machen und ihre Fortschritte zu feiern.",
        ],
        missionKicker: "Unsere Mission",
        missionTitle:
          "Sprachbildung, die zugänglich, ansprechend und wirksam ist",
        missionText: [
          "Wir glauben, dass jeder mit der richtigen Anleitung, regelmäßiger Übung und einer motivierenden Lernumgebung fließend werden kann.",
          "Jede Lektion baut praktische Kommunikationsfähigkeiten auf, die Sie sofort im Alltag, im Beruf, im Studium und auf internationalen Reisen anwenden können.",
        ],
      },
      why: {
        kicker: "Warum Wir",
        title: "Eine auf Kommunikation ausgerichtete Methodik",
        sub: "Jede Lektion verbindet Grammatik, Wortschatz, Aussprache, Hörverstehen, Lesen, Schreiben und Konversation, mit kontinuierlicher Betreuung und individueller Unterstützung.",
        pillars: [
          {
            title: "Kommunikation ab dem ersten Tag",
            desc: "Statt isolierte Regeln auswendig zu lernen, sprechen und üben Sie ab der ersten Lektion mit persönlichem Feedback.",
          },
          {
            title: "Live-Kurse, 100% online",
            desc: "Live-Unterricht mit Studierenden aus aller Welt: sofortiges Feedback, geführte Übung und echte Interaktion.",
          },
          {
            title: "Über den Unterricht hinaus",
            desc: "Wir begleiten Sie beim Üben mit Muttersprachlern in Austausch-Communities wie HelloTalk und anderen Plattformen.",
          },
          {
            title: "Individuelle Begleitung",
            desc: "Jeder lernt anders. Wir verbinden eine klare Struktur mit persönlicher Aufmerksamkeit für Ihre Bedürfnisse.",
          },
        ],
      },
      instructor: {
        kicker: "Lernen Sie Ihren Lehrer Kennen",
        name: "Jeffrey A. Guzman",
        role: "Mehrsprachiger Pädagoge, Linguist, Dolmetscher, Kriminalanalyst und Historiker, geboren in der Dominikanischen Republik und seit über zwanzig Jahren in New York ansässig.",
        bio: [
          "Jeffrey spricht sieben Sprachen. Neben seinem muttersprachlichen Spanisch und fließendem Englisch studierte er Französisch, Italienisch, Portugiesisch und Russisch auf Universitätsniveau und erlebte selbst die Herausforderungen, als Erwachsener mehrere Sprachen zu lernen. Diese Erfahrung erlaubt es ihm, sich eng mit seinen Studierenden zu verbinden und die Hürden zu verstehen, denen sie begegnen.",
          "Seine Leidenschaft für die dominikanische Geschichte —vom Taíno-Erbe bis zur Diaspora— bereichert seinen Unterricht und hilft den Studierenden, die Kulturen hinter jeder Sprache zu schätzen. Seine Philosophie beruht auf Geduld, Struktur, Ermutigung und persönlicher Unterstützung: Fehler sind keine Misserfolge, sondern wesentliche Schritte zur Sprachbeherrschung.",
        ],
        credTitle: "Ausbildung und Qualifikationen",
        credentials: [
          "Master in Internationaler Kriminalität und Justiz — John Jay College (CUNY)",
          "Zertifizierter Lehrer der Bridge Education Group (Bridge Academy)",
          "Von Berlitz zertifizierter professioneller Dolmetscher (Französisch und Spanisch)",
          "Dolmetscher für Französisch und Spanisch beim NYPD",
          "Kriminalanalyst beim NYPD",
        ],
        photoLabel: "Foto des Lehrers",
        languages: [
          "Spanisch",
          "Englisch",
          "Französisch",
          "Italienisch",
          "Portugiesisch",
          "Russisch",
        ],
      },
      values: {
        kicker: "Unsere Werte",
        title: "Fünf Prinzipien, die jeden Kurs leiten",
        items: [
          {
            title: "Exzellenz",
            desc: "Wir streben nach den höchsten Standards im Lehren und Lernen.",
          },
          {
            title: "Respekt",
            desc: "Jede lernende Person verdient Geduld, Ermutigung und Würde.",
          },
          {
            title: "Kommunikation",
            desc: "Sprachen sind Werkzeuge, um Beziehungen und Verständnis aufzubauen.",
          },
          {
            title: "Kulturelles Bewusstsein",
            desc: "Eine Sprache zu lernen bedeutet, die Menschen und Kulturen dahinter zu schätzen.",
          },
          {
            title: "Lebenslanges Lernen",
            desc: "Bildung endet nie; jede Sprache eröffnet neue Möglichkeiten.",
          },
        ],
      },
      programs: {
        kicker: "Unsere Programme",
        title: "Live-Unterricht in sechs Sprachen",
        text: "Jedes Programm folgt einem strukturierten Lehrplan, der Sprechen, Hören, Lesen, Schreiben, Aussprache, Grammatik, Wortschatz und kulturelles Verständnis entwickelt.",
        list: [
          "Englisch",
          "Französisch",
          "Italienisch",
          "Portugiesisch",
          "Spanisch",
          "Deutsch",
        ],
      },
      promise: {
        kicker: "Unser Versprechen",
        title: "Bei The Ministry of Languages zählt jede lernende Person",
        text: "Ob Sie selbstbewusst reisen, Ihre Karriere vorantreiben, sich auf die Schule vorbereiten, mit Ihrer Familie kommunizieren oder sich einfach mit einer neuen Sprache herausfordern möchten – wir setzen uns für Ihren Erfolg ein.",
        seeClasses: "Unsere Kurse ansehen",
        seePricing: "Preise entdecken",
      },
    },
  },
};
