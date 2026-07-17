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
  localeLabel: string
  seoTitle: string
  seoDescription: string
  tagline: string
  heroTitle: string
  subtitle: string
  registerNow: string
  infoHeading: string
  nav: { about: string; classes: string; languages: string; signin: string; contact: string }
  leftInfo: { title: string; text: string }[]
  rightInfo: { title: string; text: string }[]
  about: { title: string; text: string }[]
  classesHeading: string
  classesSubtitle: string
  levels: { beginner: string; elementary: string; intermediateReading: string }
  languageNames: string[]
  signin: {
    eyebrow: string
    title: string
    description: string
    fullName: string
    namePlaceholder: string
    email: string
    selectLanguage: string
    send: string
    sending: string
    sent: string
    error: string
  }
  footer: string
}

export const content: Record<Locale, ContentShape> = {
  en: {
    localeLabel: "English",
    seoTitle: "Online Language Classes | Learn English, French, Italian & Portuguese",
    seoDescription:
      "Join live online language classes for adults. Study English, French, Italian and Portuguese with small groups, clear grammar lessons, pronunciation support and real conversation practice.",
    tagline: "Live online language classes for adults.",
    heroTitle: "Online English, French, Italian and Portuguese Classes",
    subtitle:
      "Learn with live online lessons, small groups, grammar guidance and real conversation practice for adult learners.",
    registerNow: "Register Now",
    infoHeading: "Info",
    nav: { about: "About Us", classes: "Our Classes", languages: "The Languages", signin: "Sign-In", contact: "Contact Us" },
    leftInfo: [
      { title: "Live classes", text: "Real-time online sessions with a teacher guiding every step." },
      { title: "Small groups", text: "Limited seats so everyone gets attention and speaking time." },
      { title: "Practice focused", text: "Built around using the language, not just memorizing rules." },
    ],
    rightInfo: [
      { title: "Clear grammar", text: "Step-by-step lessons that build confidence in the basics." },
      { title: "Pronunciation", text: "Improve listening and speaking until it feels natural." },
      { title: "Conversation", text: "Reading, writing and real conversation in every class." },
    ],
    about: [
      { title: "Who We Are", text: "The Ministry of Languages helps adult learners build confidence in English, French, Italian and Portuguese through structured lessons, live practice and supportive teaching." },
      { title: "Online Learning", text: "Classes are taught online in live sessions, making it easy for students to join from anywhere and practice consistently with a real teacher." },
      { title: "Extra Speaking Practice", text: "Students can use HelloTalk as an extra tool to connect with native speakers and keep improving their speaking and listening skills outside class." },
    ],
    classesHeading: "Our Classes",
    classesSubtitle: "Build confidence in grammar, pronunciation, reading, and conversation. Pick your language and level.",
    levels: { beginner: "Beginner", elementary: "Elementary", intermediateReading: "Intermediate · Reading" },
    languageNames: ["English", "French", "Italian", "Portuguese"],
    signin: {
      eyebrow: "Sign-In",
      title: "Reserve your seat in the next group",
      description: "Tell us which language you want to learn and we'll send you the schedule and joining details for the live online classes.",
      fullName: "Full name",
      namePlaceholder: "Your name",
      email: "Email",
      selectLanguage: "Select a language",
      send: "Send",
      sending: "Sending...",
      sent: "Sent successfully.",
      error: "Error sending email.",
    },
    footer: "© {year} The Ministry of Languages Domain. Lessons delivered online via HelloTalk.",
  },

  es: {
    localeLabel: "Español",
    seoTitle: "Clases de idiomas online | Aprende inglés, francés, italiano y portugués",
    seoDescription:
      "Únete a clases de idiomas online en vivo para adultos. Estudia inglés, francés, italiano y portugués con grupos reducidos, lecciones claras de gramática, apoyo en pronunciación y práctica de conversación real.",
    tagline: "Clases de idiomas online en vivo para adultos.",
    heroTitle: "Clases online de inglés, francés, italiano y portugués",
    subtitle:
      "Aprende con clases online en vivo, grupos reducidos, guía gramatical y práctica de conversación real para estudiantes adultos.",
    registerNow: "Regístrate ahora",
    infoHeading: "Info",
    nav: { about: "Sobre nosotros", classes: "Nuestras clases", languages: "Los idiomas", signin: "Inscripción", contact: "Contáctanos" },
    leftInfo: [
      { title: "Clases en vivo", text: "Sesiones online en tiempo real con un profesor que te guía en cada paso." },
      { title: "Grupos reducidos", text: "Plazas limitadas para que todos reciban atención y tiempo para hablar." },
      { title: "Enfoque en la práctica", text: "Diseñadas para usar el idioma, no solo memorizar reglas." },
    ],
    rightInfo: [
      { title: "Gramática clara", text: "Lecciones paso a paso que dan confianza en lo básico." },
      { title: "Pronunciación", text: "Mejora la escucha y el habla hasta que suene natural." },
      { title: "Conversación", text: "Lectura, escritura y conversación real en cada clase." },
    ],
    about: [
      { title: "Quiénes somos", text: "The Ministry of Languages ayuda a estudiantes adultos a ganar confianza en inglés, francés, italiano y portugués mediante clases estructuradas, práctica en vivo y una enseñanza cercana." },
      { title: "Aprendizaje online", text: "Las clases se imparten online en sesiones en vivo, para que los estudiantes se unan desde cualquier lugar y practiquen de forma constante con un profesor real." },
      { title: "Práctica extra de conversación", text: "Los estudiantes pueden usar HelloTalk como herramienta adicional para conectar con hablantes nativos y seguir mejorando su expresión y comprensión fuera de clase." },
    ],
    classesHeading: "Nuestras clases",
    classesSubtitle: "Gana confianza en gramática, pronunciación, lectura y conversación. Elige tu idioma y tu nivel.",
    levels: { beginner: "Principiante", elementary: "Elemental", intermediateReading: "Intermedio · Lectura" },
    languageNames: ["Inglés", "Francés", "Italiano", "Portugués"],
    signin: {
      eyebrow: "Inscripción",
      title: "Reserva tu plaza en el próximo grupo",
      description: "Dinos qué idioma quieres aprender y te enviaremos el horario y los detalles para unirte a las clases online en vivo.",
      fullName: "Nombre completo",
      namePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      selectLanguage: "Selecciona un idioma",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Enviado correctamente.",
      error: "Error al enviar el correo.",
    },
    footer: "© {year} The Ministry of Languages Domain. Clases impartidas online a través de HelloTalk.",
  },

  it: {
    localeLabel: "Italiano",
    seoTitle: "Corsi di lingue online | Impara inglese, francese, italiano e portoghese",
    seoDescription:
      "Partecipa a corsi di lingue online dal vivo per adulti. Studia inglese, francese, italiano e portoghese con piccoli gruppi, lezioni di grammatica chiare, supporto alla pronuncia e pratica di conversazione reale.",
    tagline: "Lezioni di lingue online dal vivo per adulti.",
    heroTitle: "Corsi online di inglese, francese, italiano e portoghese",
    subtitle:
      "Impara con lezioni online dal vivo, piccoli gruppi, guida grammaticale e pratica di conversazione reale per studenti adulti.",
    registerNow: "Iscriviti ora",
    infoHeading: "Info",
    nav: { about: "Chi siamo", classes: "I nostri corsi", languages: "Le lingue", signin: "Iscrizione", contact: "Contattaci" },
    leftInfo: [
      { title: "Lezioni dal vivo", text: "Sessioni online in tempo reale con un insegnante che ti guida a ogni passo." },
      { title: "Piccoli gruppi", text: "Posti limitati perché tutti ricevano attenzione e tempo per parlare." },
      { title: "Focus sulla pratica", text: "Pensate per usare la lingua, non solo per memorizzare regole." },
    ],
    rightInfo: [
      { title: "Grammatica chiara", text: "Lezioni passo dopo passo che danno sicurezza sulle basi." },
      { title: "Pronuncia", text: "Migliora ascolto e conversazione finché non diventa naturale." },
      { title: "Conversazione", text: "Lettura, scrittura e conversazione reale in ogni lezione." },
    ],
    about: [
      { title: "Chi siamo", text: "The Ministry of Languages aiuta gli studenti adulti a prendere sicurezza in inglese, francese, italiano e portoghese con lezioni strutturate, pratica dal vivo e un insegnamento attento." },
      { title: "Apprendimento online", text: "Le lezioni si tengono online in sessioni dal vivo, così gli studenti possono partecipare ovunque e praticare con costanza con un insegnante reale." },
      { title: "Pratica extra di conversazione", text: "Gli studenti possono usare HelloTalk come strumento in più per entrare in contatto con madrelingua e continuare a migliorare l'ascolto e il parlato fuori dalle lezioni." },
    ],
    classesHeading: "I nostri corsi",
    classesSubtitle: "Prendi sicurezza in grammatica, pronuncia, lettura e conversazione. Scegli la tua lingua e il tuo livello.",
    levels: { beginner: "Principiante", elementary: "Elementare", intermediateReading: "Intermedio · Lettura" },
    languageNames: ["Inglese", "Francese", "Italiano", "Portoghese"],
    signin: {
      eyebrow: "Iscrizione",
      title: "Prenota il tuo posto nel prossimo gruppo",
      description: "Dicci quale lingua vuoi imparare e ti invieremo l'orario e i dettagli per partecipare alle lezioni online dal vivo.",
      fullName: "Nome completo",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      selectLanguage: "Seleziona una lingua",
      send: "Invia",
      sending: "Invio in corso...",
      sent: "Inviato con successo.",
      error: "Errore durante l'invio dell'email.",
    },
    footer: "© {year} The Ministry of Languages Domain. Lezioni erogate online tramite HelloTalk.",
  },

  fr: {
    localeLabel: "Français",
    seoTitle: "Cours de langues en ligne | Apprenez l'anglais, le français, l'italien et le portugais",
    seoDescription:
      "Rejoignez des cours de langues en ligne en direct pour adultes. Étudiez l'anglais, le français, l'italien et le portugais en petits groupes, avec des leçons de grammaire claires, un soutien à la prononciation et une vraie pratique de la conversation.",
    tagline: "Cours de langues en ligne en direct pour adultes.",
    heroTitle: "Cours en ligne d'anglais, de français, d'italien et de portugais",
    subtitle:
      "Apprenez avec des cours en ligne en direct, en petits groupes, un accompagnement en grammaire et une vraie pratique de la conversation pour les adultes.",
    registerNow: "Inscrivez-vous",
    infoHeading: "Info",
    nav: { about: "À propos", classes: "Nos cours", languages: "Les langues", signin: "Inscription", contact: "Contactez-nous" },
    leftInfo: [
      { title: "Cours en direct", text: "Des sessions en ligne en temps réel avec un enseignant qui vous guide à chaque étape." },
      { title: "Petits groupes", text: "Des places limitées pour que chacun reçoive de l'attention et du temps de parole." },
      { title: "Axé sur la pratique", text: "Conçu pour utiliser la langue, pas seulement mémoriser des règles." },
    ],
    rightInfo: [
      { title: "Grammaire claire", text: "Des leçons pas à pas qui donnent confiance dans les bases." },
      { title: "Prononciation", text: "Améliorez l'écoute et l'expression jusqu'à ce que ce soit naturel." },
      { title: "Conversation", text: "Lecture, écriture et vraie conversation à chaque cours." },
    ],
    about: [
      { title: "Qui sommes-nous", text: "The Ministry of Languages aide les apprenants adultes à gagner en confiance en anglais, français, italien et portugais grâce à des leçons structurées, une pratique en direct et un enseignement bienveillant." },
      { title: "Apprentissage en ligne", text: "Les cours sont donnés en ligne lors de sessions en direct, ce qui permet aux étudiants de participer depuis n'importe où et de pratiquer régulièrement avec un vrai enseignant." },
      { title: "Pratique orale supplémentaire", text: "Les étudiants peuvent utiliser HelloTalk comme outil complémentaire pour échanger avec des locuteurs natifs et continuer à progresser à l'oral en dehors des cours." },
    ],
    classesHeading: "Nos cours",
    classesSubtitle: "Gagnez en confiance en grammaire, prononciation, lecture et conversation. Choisissez votre langue et votre niveau.",
    levels: { beginner: "Débutant", elementary: "Élémentaire", intermediateReading: "Intermédiaire · Lecture" },
    languageNames: ["Anglais", "Français", "Italien", "Portugais"],
    signin: {
      eyebrow: "Inscription",
      title: "Réservez votre place dans le prochain groupe",
      description: "Dites-nous quelle langue vous souhaitez apprendre et nous vous enverrons l'horaire et les informations pour rejoindre les cours en ligne en direct.",
      fullName: "Nom complet",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      selectLanguage: "Choisissez une langue",
      send: "Envoyer",
      sending: "Envoi en cours...",
      sent: "Envoyé avec succès.",
      error: "Erreur lors de l'envoi de l'e-mail.",
    },
    footer: "© {year} The Ministry of Languages Domain. Cours dispensés en ligne via HelloTalk.",
  },

  ru: {
    localeLabel: "Русский",
    seoTitle: "Онлайн-курсы языков | Английский, французский, итальянский и португальский",
    seoDescription:
      "Присоединяйтесь к живым онлайн-занятиям по языкам для взрослых. Изучайте английский, французский, итальянский и португальский в небольших группах с понятной грамматикой, работой над произношением и реальной разговорной практикой.",
    tagline: "Живые онлайн-занятия по языкам для взрослых.",
    heroTitle: "Онлайн-курсы английского, французского, итальянского и португальского",
    subtitle:
      "Учитесь на живых онлайн-занятиях в небольших группах с грамматической поддержкой и реальной разговорной практикой для взрослых.",
    registerNow: "Записаться",
    infoHeading: "Инфо",
    nav: { about: "О нас", classes: "Наши курсы", languages: "Языки", signin: "Запись", contact: "Контакты" },
    leftInfo: [
      { title: "Живые занятия", text: "Онлайн-сессии в реальном времени, где преподаватель ведёт вас на каждом шаге." },
      { title: "Небольшие группы", text: "Ограниченное число мест, чтобы каждому уделили внимание и дали время говорить." },
      { title: "Упор на практику", text: "Построены на использовании языка, а не на зубрёжке правил." },
    ],
    rightInfo: [
      { title: "Понятная грамматика", text: "Пошаговые уроки, которые дают уверенность в основах." },
      { title: "Произношение", text: "Улучшайте восприятие и речь, пока это не станет естественным." },
      { title: "Разговор", text: "Чтение, письмо и реальный разговор на каждом занятии." },
    ],
    about: [
      { title: "Кто мы", text: "The Ministry of Languages помогает взрослым обрести уверенность в английском, французском, итальянском и португальском через структурированные уроки, живую практику и поддерживающее преподавание." },
      { title: "Онлайн-обучение", text: "Занятия проходят онлайн в живом формате, поэтому студенты могут присоединиться откуда угодно и регулярно практиковаться с настоящим преподавателем." },
      { title: "Дополнительная разговорная практика", text: "Студенты могут использовать HelloTalk как дополнительный инструмент, чтобы общаться с носителями языка и продолжать улучшать речь и восприятие вне занятий." },
    ],
    classesHeading: "Наши курсы",
    classesSubtitle: "Обретайте уверенность в грамматике, произношении, чтении и разговоре. Выберите язык и уровень.",
    levels: { beginner: "Начальный", elementary: "Элементарный", intermediateReading: "Средний · Чтение" },
    languageNames: ["Английский", "Французский", "Итальянский", "Португальский"],
    signin: {
      eyebrow: "Запись",
      title: "Забронируйте место в следующей группе",
      description: "Сообщите, какой язык вы хотите изучать, и мы пришлём вам расписание и данные для подключения к живым онлайн-занятиям.",
      fullName: "Полное имя",
      namePlaceholder: "Ваше имя",
      email: "Электронная почта",
      selectLanguage: "Выберите язык",
      send: "Отправить",
      sending: "Отправка...",
      sent: "Успешно отправлено.",
      error: "Ошибка при отправке письма.",
    },
    footer: "© {year} The Ministry of Languages Domain. Занятия проводятся онлайн через HelloTalk.",
  },

  pt: {
    localeLabel: "Português",
    seoTitle: "Aulas de idiomas online | Aprenda inglês, francês, italiano e português",
    seoDescription:
      "Participe de aulas de idiomas online ao vivo para adultos. Estude inglês, francês, italiano e português em grupos pequenos, com lições de gramática claras, apoio na pronúncia e prática de conversação real.",
    tagline: "Aulas de idiomas online ao vivo para adultos.",
    heroTitle: "Aulas online de inglês, francês, italiano e português",
    subtitle:
      "Aprenda com aulas online ao vivo, grupos pequenos, orientação gramatical e prática de conversação real para alunos adultos.",
    registerNow: "Inscreva-se agora",
    infoHeading: "Info",
    nav: { about: "Sobre nós", classes: "Nossas aulas", languages: "Os idiomas", signin: "Inscrição", contact: "Fale conosco" },
    leftInfo: [
      { title: "Aulas ao vivo", text: "Sessões online em tempo real com um professor guiando cada passo." },
      { title: "Grupos pequenos", text: "Vagas limitadas para que todos recebam atenção e tempo para falar." },
      { title: "Foco na prática", text: "Feitas para usar o idioma, não apenas memorizar regras." },
    ],
    rightInfo: [
      { title: "Gramática clara", text: "Lições passo a passo que dão confiança no básico." },
      { title: "Pronúncia", text: "Melhore a escuta e a fala até soar natural." },
      { title: "Conversação", text: "Leitura, escrita e conversação real em todas as aulas." },
    ],
    about: [
      { title: "Quem somos", text: "The Ministry of Languages ajuda alunos adultos a ganhar confiança em inglês, francês, italiano e português por meio de aulas estruturadas, prática ao vivo e ensino acolhedor." },
      { title: "Aprendizado online", text: "As aulas são ministradas online em sessões ao vivo, facilitando que os alunos participem de qualquer lugar e pratiquem com constância com um professor real." },
      { title: "Prática extra de conversação", text: "Os alunos podem usar o HelloTalk como ferramenta extra para se conectar com falantes nativos e continuar melhorando a fala e a escuta fora da aula." },
    ],
    classesHeading: "Nossas aulas",
    classesSubtitle: "Ganhe confiança em gramática, pronúncia, leitura e conversação. Escolha seu idioma e seu nível.",
    levels: { beginner: "Iniciante", elementary: "Elementar", intermediateReading: "Intermediário · Leitura" },
    languageNames: ["Inglês", "Francês", "Italiano", "Português"],
    signin: {
      eyebrow: "Inscrição",
      title: "Reserve sua vaga no próximo grupo",
      description: "Diga-nos qual idioma você quer aprender e enviaremos o horário e os detalhes para participar das aulas online ao vivo.",
      fullName: "Nome completo",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      selectLanguage: "Selecione um idioma",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Enviado com sucesso.",
      error: "Erro ao enviar o e-mail.",
    },
    footer: "© {year} The Ministry of Languages Domain. Aulas ministradas online via HelloTalk.",
  },

  de: {
    localeLabel: "Deutsch",
    seoTitle: "Online-Sprachkurse | Englisch, Französisch, Italienisch und Portugiesisch lernen",
    seoDescription:
      "Nehmen Sie an Live-Online-Sprachkursen für Erwachsene teil. Lernen Sie Englisch, Französisch, Italienisch und Portugiesisch in kleinen Gruppen mit klaren Grammatiklektionen, Ausspracheunterstützung und echter Konversationspraxis.",
    tagline: "Live-Online-Sprachkurse für Erwachsene.",
    heroTitle: "Online-Kurse für Englisch, Französisch, Italienisch und Portugiesisch",
    subtitle:
      "Lernen Sie mit Live-Online-Unterricht in kleinen Gruppen, mit Grammatikhilfe und echter Konversationspraxis für erwachsene Lernende.",
    registerNow: "Jetzt anmelden",
    infoHeading: "Info",
    nav: { about: "Über uns", classes: "Unsere Kurse", languages: "Die Sprachen", signin: "Anmeldung", contact: "Kontakt" },
    leftInfo: [
      { title: "Live-Unterricht", text: "Online-Sitzungen in Echtzeit, bei denen eine Lehrkraft jeden Schritt begleitet." },
      { title: "Kleine Gruppen", text: "Begrenzte Plätze, damit alle Aufmerksamkeit und Redezeit bekommen." },
      { title: "Praxisorientiert", text: "Darauf ausgelegt, die Sprache zu nutzen, nicht nur Regeln auswendig zu lernen." },
    ],
    rightInfo: [
      { title: "Klare Grammatik", text: "Schritt-für-Schritt-Lektionen, die Sicherheit in den Grundlagen geben." },
      { title: "Aussprache", text: "Verbessern Sie Hören und Sprechen, bis es sich natürlich anfühlt." },
      { title: "Konversation", text: "Lesen, Schreiben und echte Konversation in jedem Kurs." },
    ],
    about: [
      { title: "Wer wir sind", text: "The Ministry of Languages hilft erwachsenen Lernenden, durch strukturierten Unterricht, Live-Praxis und unterstützende Lehre Sicherheit in Englisch, Französisch, Italienisch und Portugiesisch zu gewinnen." },
      { title: "Online-Lernen", text: "Der Unterricht findet online in Live-Sitzungen statt, sodass Studierende von überall teilnehmen und regelmäßig mit einer echten Lehrkraft üben können." },
      { title: "Zusätzliche Sprechpraxis", text: "Studierende können HelloTalk als zusätzliches Werkzeug nutzen, um mit Muttersprachlern in Kontakt zu treten und ihr Sprechen und Hören außerhalb des Unterrichts weiter zu verbessern." },
    ],
    classesHeading: "Unsere Kurse",
    classesSubtitle: "Gewinnen Sie Sicherheit in Grammatik, Aussprache, Lesen und Konversation. Wählen Sie Ihre Sprache und Ihr Niveau.",
    levels: { beginner: "Anfänger", elementary: "Grundstufe", intermediateReading: "Mittelstufe · Lesen" },
    languageNames: ["Englisch", "Französisch", "Italienisch", "Portugiesisch"],
    signin: {
      eyebrow: "Anmeldung",
      title: "Sichern Sie sich Ihren Platz in der nächsten Gruppe",
      description: "Sagen Sie uns, welche Sprache Sie lernen möchten, und wir senden Ihnen den Zeitplan und die Zugangsdaten für die Live-Online-Kurse.",
      fullName: "Vollständiger Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      selectLanguage: "Sprache auswählen",
      send: "Senden",
      sending: "Wird gesendet...",
      sent: "Erfolgreich gesendet.",
      error: "Fehler beim Senden der E-Mail.",
    },
    footer: "© {year} The Ministry of Languages Domain. Kurse werden online über HelloTalk durchgeführt.",
  },
}
