const fs = require('fs');
const path = require('path');

const site = {
  domain: 'https://www.floorplanto3dapp.com',
  blogUrl: 'https://blog.floorplanto3dapp.com',
  ctaUrl: 'https://floorplan.onelink.me/KuAF/8u8ynpwj',
  appStoreListingUrl:
    'https://apps.apple.com/us/app/ai-home-planner-room-design/id6751739187',
  ogImage: 'https://www.floorplanto3dapp.com/screen-compare.webp',
  lastmod: '2026-03-17',
  analytics: {
    posthogKey: 'phc_8L4V3GZ5IBfP9TWrhh1U7UDVf5ySxHagitOSRIHvXkF',
    posthogDefaults: '2026-01-30',
    gtagId: 'G-XL7QHS2Q7N',
  },
};

// Selected to match the strongest countries visible in the current revenue mix
// while minimizing redundant locales: English, Spanish, Italian, Romanian,
// Swedish, German, French, Portuguese, Polish, and Arabic.
const locales = [
  {
    code: 'en',
    path: '/',
    lang: 'en',
    hreflang: 'en',
    ogLocale: 'en_US',
    nativeName: 'English',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D & Home Redesign - AI Room Planner for iOS',
      metaDescription:
        'Turn floor plans into 3D and redesign interiors, exteriors, and empty rooms with AI. A fast home planner and room planner for iPhone and iPad.',
      heroTitle: 'Turn floor plans into 3D and redesign rooms with AI',
      heroTagline:
        'Go from floor plan to 3D, room planner, and home redesign ideas in one simple iOS app.',
      heroNote:
        'Use it for interior redesign, exterior refreshes, empty-room staging, and renovation previews without heavy 3D software.',
      featureChips: [
        'Floor Plan to 3D',
        'Home Planner',
        'Room Planner',
        'Interior & Exterior Redesign',
      ],
      faqTitle: 'FAQ',
      localesTitle: 'Available in 10 languages',
      localesIntro:
        'Choose the version that best matches the language your customers search in.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Language',
      downloadAria: 'Download Floor Plan to 3D on the App Store',
      downloadAlt: 'Download on the App Store',
      appIconAlt: 'Floor Plan to 3D app icon',
      ogImageAlt:
        'Comparison between a black-and-white 2D plan and a full-color 3D render.',
      compareAlt: 'Compare a 2D floor plan to a 3D render inside the app UI',
      stylesAlt:
        'Customize render styles like Standard, Mediterranean, and Loft in the app',
      screenshotsLabel: 'App screenshots',
      srAppStore:
        'App Store listing: Floor Plan to 3D, AI home redesign, room planner, and renovation previews.',
      softwareDescription:
        'Turn floor plans into 3D and redesign interiors, exteriors, and empty rooms with a simple iOS app.',
      faqs: [
        {
          q: 'What is Floor Plan to 3D?',
          a: 'It is a simple iOS app that turns any black-and-white floor plan or blueprint into a clean 3D render. It also helps you redesign rooms, homes, and empty spaces with AI-guided ideas.',
        },
        {
          q: 'Is it useful for room planner or home planner tasks?',
          a: 'Yes. Many people use it as part of their room planner and home planner workflow to preview house design ideas, compare layout options, plan renovations, and share a quick concept with clients.',
        },
        {
          q: 'What does the AI preserve from my plan?',
          a: 'The app reads labels and dimensions and preserves counts, positions, and proportions, so the 3D result reflects your original plan and layout instead of inventing a new one.',
        },
        {
          q: 'Can I redesign interiors, exteriors, or empty rooms?',
          a: 'Yes. You can upload a room, facade, or empty space and use AI to explore furnishing ideas, home redesign directions, curb-appeal updates, and renovation looks in seconds.',
        },
        {
          q: 'Does it support AI home design and AI room previews?',
          a: 'Yes. The render is AI-assisted for speed and clarity. It works well for AI home design explorations, fast room previews, and quick before-and-after redesign concepts without manual 3D modeling.',
        },
        {
          q: 'Can I export or share the 3D render?',
          a: 'You can export high-resolution images of the 3D render to include in proposals, building or renovation planning, and presentations.',
        },
        {
          q: 'Which files or plans work best?',
          a: 'Black-and-white plans work best: floor plan PDFs, blueprint scans, or clear photos. The app is ideal when you want a quick 3D view of a plan before modeling.',
        },
      ],
    },
  },
  {
    code: 'es',
    path: '/es/',
    lang: 'es',
    hreflang: 'es',
    ogLocale: 'es_ES',
    nativeName: 'Español',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: planos en 3D y planificador de habitaciones con IA para iOS',
      metaDescription:
        'Convierte planos en 3D y rediseña interiores, exteriores y habitaciones vacías con IA. Una app rápida de planificación del hogar y diseño de habitaciones para iPhone y iPad.',
      heroTitle: 'Convierte planos en 3D y rediseña espacios con IA',
      heroTagline:
        'Pasa de plano a 3D, planificación de habitaciones e ideas de reforma del hogar en una sola app para iOS.',
      heroNote:
        'Úsala para renovar interiores, fachadas, habitaciones vacías y vistas previas de reforma sin meterte en software 3D pesado.',
      featureChips: [
        'Planos en 3D',
        'Planificador del hogar',
        'Planificador de habitaciones',
        'Reforma interior y exterior',
      ],
      faqTitle: 'Preguntas frecuentes',
      localesTitle: 'Disponible en 10 idiomas',
      localesIntro:
        'Elige la versión que mejor encaja con el idioma con el que te buscan tus clientes.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Idioma',
      downloadAria: 'Descargar Floor Plan to 3D en el App Store',
      downloadAlt: 'Descargar en el App Store',
      appIconAlt: 'Icono de la app Floor Plan to 3D',
      ogImageAlt:
        'Comparación entre un plano 2D en blanco y negro y un render 3D a color.',
      compareAlt:
        'Comparación de un plano 2D y un render 3D dentro de la interfaz de la app',
      stylesAlt:
        'Personaliza estilos como clásico, mediterráneo y loft en la app',
      screenshotsLabel: 'Capturas de la app',
      srAppStore:
        'Ficha del App Store: Floor Plan to 3D, planos en 3D, rediseño del hogar y planificador de habitaciones con IA.',
      softwareDescription:
        'Convierte planos en 3D y rediseña interiores, exteriores y habitaciones vacías con una app sencilla para iOS.',
      faqs: [
        {
          q: '¿Qué es Floor Plan to 3D?',
          a: 'Es una app para iOS que convierte cualquier plano o plano técnico en blanco y negro en una visualización 3D limpia. Además, te ayuda a rediseñar habitaciones, casas y espacios vacíos con ideas guiadas por IA.',
        },
        {
          q: '¿Sirve para planificación de habitaciones o del hogar?',
          a: 'Sí. Mucha gente la usa para visualizar ideas de distribución, comparar opciones, planear reformas y compartir un concepto rápido con clientes.',
        },
        {
          q: '¿Qué conserva la IA de mi plano?',
          a: 'La app lee etiquetas y dimensiones y conserva cantidades, posiciones y proporciones, de modo que el resultado 3D refleja tu plano original en lugar de inventar una distribución nueva.',
        },
        {
          q: '¿Puedo rediseñar interiores, exteriores o habitaciones vacías?',
          a: 'Sí. Puedes subir una habitación, una fachada o un espacio vacío y usar la IA para explorar ideas de mobiliario, rediseño del hogar, mejoras de fachada y estilos de reforma en segundos.',
        },
        {
          q: '¿Sirve para diseño de interiores con IA y vistas previas de habitaciones?',
          a: 'Sí. La visualización usa IA para ganar velocidad y claridad. Funciona muy bien para explorar ideas de diseño, generar vistas previas rápidas y ver conceptos de antes y después sin modelado 3D manual.',
        },
        {
          q: '¿Puedo exportar o compartir el render 3D?',
          a: 'Puedes exportar imágenes en alta resolución del render 3D para incluirlas en propuestas, planificación de obra o reforma y presentaciones.',
        },
        {
          q: '¿Qué archivos o planos funcionan mejor?',
          a: 'Los mejores resultados llegan con planos en blanco y negro: PDFs de planos, escaneos de planos técnicos o fotos claras. Es ideal cuando quieres una vista 3D rápida antes de modelar.',
        },
      ],
    },
  },
  {
    code: 'it',
    path: '/it/',
    lang: 'it',
    hreflang: 'it',
    ogLocale: 'it_IT',
    nativeName: 'Italiano',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: planimetrie 3D e pianificatore di stanze con IA per iOS',
      metaDescription:
        'Trasforma planimetrie in 3D e rinnova interni, esterni e stanze vuote con l’IA. Un’app veloce per pianificare casa e stanze su iPhone e iPad.',
      heroTitle: 'Trasforma planimetrie in 3D e rinnova gli spazi con l’IA',
      heroTagline:
        'Passa da planimetria a 3D, progettazione delle stanze e idee per rinnovare casa in una sola app iOS.',
      heroNote:
        'Usala per rinnovare interni, facciate, stanze vuote e vedere anteprime di ristrutturazione senza software 3D complessi.',
      featureChips: [
        'Planimetrie in 3D',
        'Pianificatore casa',
        'Pianificatore stanze',
        'Rinnovo interni ed esterni',
      ],
      faqTitle: 'Domande frequenti',
      localesTitle: 'Disponibile in 10 lingue',
      localesIntro:
        'Scegli la versione più adatta alla lingua con cui i clienti cercano il tuo prodotto.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Lingua',
      downloadAria: 'Scarica Floor Plan to 3D su App Store',
      downloadAlt: 'Scarica su App Store',
      appIconAlt: 'Icona dell’app Floor Plan to 3D',
      ogImageAlt:
        'Confronto tra una planimetria 2D in bianco e nero e un render 3D a colori.',
      compareAlt:
        'Confronto tra una planimetria 2D e un render 3D nell’interfaccia dell’app',
      stylesAlt:
        'Personalizza stili come classico, mediterraneo e loft nell’app',
      screenshotsLabel: 'Screenshot dell’app',
      srAppStore:
        'Scheda App Store: Floor Plan to 3D, planimetrie 3D, rinnovo casa e pianificatore di stanze con IA.',
      softwareDescription:
        'Trasforma planimetrie in 3D e rinnova interni, esterni e stanze vuote con una semplice app iOS.',
      faqs: [
        {
          q: 'Che cos’è Floor Plan to 3D?',
          a: 'È una semplice app iOS che trasforma qualsiasi planimetria o disegno tecnico in bianco e nero in una vista 3D pulita. Inoltre ti aiuta a ripensare stanze, case e spazi vuoti con idee guidate dall’IA.',
        },
        {
          q: 'È utile per pianificare stanze o casa?',
          a: 'Sì. Molte persone la usano per visualizzare idee di casa, confrontare soluzioni, pianificare ristrutturazioni e condividere rapidamente una proposta con i clienti.',
        },
        {
          q: 'Cosa preserva l’IA del mio progetto?',
          a: 'L’app legge etichette e misure e preserva quantità, posizioni e proporzioni, così il risultato 3D riflette la pianta originale invece di inventarne una nuova.',
        },
        {
          q: 'Posso riprogettare interni, esterni o stanze vuote?',
          a: 'Sì. Puoi caricare una stanza, una facciata o uno spazio vuoto e usare l’IA per esplorare arredi, idee per rinnovare casa, miglioramenti estetici esterni e look da ristrutturazione in pochi secondi.',
        },
        {
          q: 'Supporta il design della casa con IA e anteprime rapide delle stanze?',
          a: 'Sì. La resa usa l’IA per offrire velocità e chiarezza. È utile per esplorare idee di design d’interni, creare anteprime rapide e vedere concetti prima e dopo senza modellazione 3D manuale.',
        },
        {
          q: 'Posso esportare o condividere il render 3D?',
          a: 'Puoi esportare immagini ad alta risoluzione del render 3D da includere in proposte, pianificazione edilizia o di ristrutturazione e presentazioni.',
        },
        {
          q: 'Quali file o planimetrie funzionano meglio?',
          a: 'I migliori risultati arrivano con planimetrie in bianco e nero: PDF, scansioni di disegni tecnici o foto nitide. È ideale quando vuoi una vista 3D rapida prima di modellare.',
        },
      ],
    },
  },
  {
    code: 'de',
    path: '/de/',
    lang: 'de',
    hreflang: 'de',
    ogLocale: 'de_DE',
    nativeName: 'Deutsch',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: Grundrisse in 3D und KI-Raumplaner für iOS',
      metaDescription:
        'Wandle Grundrisse in 3D um und gestalte Innenräume, Außenbereiche und leere Zimmer mit KI neu. Ein schneller Wohnplaner und Raumplaner für iPhone und iPad.',
      heroTitle: 'Wandle Grundrisse in 3D um und plane Räume neu',
      heroTagline:
        'Vom Grundriss zu 3D, zur Raumplanung und zu Ideen für die Hausgestaltung in einer einzigen iOS-App.',
      heroNote:
        'Nutze sie für die Neugestaltung von Innenräumen, Fassaden, leeren Räumen und Renovierungsvorschauen ohne schwere 3D-Software.',
      featureChips: [
        'Grundriss zu 3D',
        'Wohnplaner',
        'Raumplaner',
        'Innen- und Außengestaltung',
      ],
      faqTitle: 'Häufige Fragen',
      localesTitle: 'In 10 Sprachen verfügbar',
      localesIntro:
        'Wähle die Version, die am besten zu der Sprache passt, in der deine Kunden suchen.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Sprache',
      downloadAria: 'Floor Plan to 3D im App Store laden',
      downloadAlt: 'Im App Store laden',
      appIconAlt: 'App-Symbol von Floor Plan to 3D',
      ogImageAlt:
        'Vergleich zwischen einem schwarz-weißen 2D-Grundriss und einem farbigen 3D-Rendering.',
      compareAlt:
        'Vergleich eines 2D-Grundrisses mit einem 3D-Rendering in der App-Oberfläche',
      stylesAlt:
        'Passe Darstellungsstile wie klassisch, mediterran und Loft in der App an',
      screenshotsLabel: 'App-Screenshots',
      srAppStore:
        'App-Store-Eintrag: Floor Plan to 3D, Grundrisse in 3D, Hausgestaltung und Raumplaner mit KI.',
      softwareDescription:
        'Verwandle Grundrisse in 3D und gestalte Innenräume, Außenbereiche und leere Zimmer mit einer einfachen iOS-App neu.',
      faqs: [
        {
          q: 'Was ist Floor Plan to 3D?',
          a: 'Es ist eine einfache iOS-App, die jeden schwarz-weißen Grundriss oder Bauplan in ein sauberes 3D-Rendering umwandelt. Zusätzlich hilft sie dir, Räume, Häuser und leere Flächen mit KI-Ideen neu zu gestalten.',
        },
        {
          q: 'Ist sie für Raumplanung oder Wohnplanung geeignet?',
          a: 'Ja. Viele nutzen sie, um Hausideen zu prüfen, Grundrissvarianten zu vergleichen, Renovierungen zu planen und schnell ein Konzept mit Kunden zu teilen.',
        },
        {
          q: 'Was übernimmt die KI aus meinem Plan?',
          a: 'Die App liest Beschriftungen und Maße und bewahrt Mengen, Positionen und Proportionen, damit das 3D-Ergebnis deinen Originalplan widerspiegelt statt einen neuen Grundriss zu erfinden.',
        },
        {
          q: 'Kann ich Innenräume, Außenbereiche oder leere Zimmer neu gestalten?',
          a: 'Ja. Du kannst ein Zimmer, eine Fassade oder einen leeren Raum hochladen und mit KI Möbelideen, Ideen für die Hausgestaltung, Fassaden-Updates und Renovierungsstile in Sekunden ausprobieren.',
        },
        {
          q: 'Unterstützt sie KI-Wohndesign und schnelle Raumvorschauen?',
          a: 'Ja. Das Rendering ist KI-gestützt und liefert schnell klare Ergebnisse. Das ist ideal für Wohnideen, schnelle Raumvorschauen und Vorher-Nachher-Konzepte ohne manuelle 3D-Modellierung.',
        },
        {
          q: 'Kann ich das 3D-Rendering exportieren oder teilen?',
          a: 'Du kannst hochauflösende Bilder des 3D-Renderings exportieren und in Angebote, Bau- oder Renovierungsplanung und Präsentationen einbinden.',
        },
        {
          q: 'Welche Dateien oder Pläne funktionieren am besten?',
          a: 'Am besten funktionieren schwarz-weiße Pläne: Grundriss-PDFs, Bauplan-Scans oder klare Fotos. Ideal, wenn du vor dem Modellieren schnell eine 3D-Ansicht brauchst.',
        },
      ],
    },
  },
  {
    code: 'fr',
    path: '/fr/',
    lang: 'fr',
    hreflang: 'fr',
    ogLocale: 'fr_FR',
    nativeName: 'Français',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D : plans en 3D et aménagement maison avec IA pour iOS',
      metaDescription:
        'Transformez des plans en 3D et repensez intérieurs, extérieurs et pièces vides avec l’IA. Une app rapide pour l’aménagement de la maison et des pièces sur iPhone et iPad.',
      heroTitle: 'Transformez des plans en 3D et repensez vos pièces avec l’IA',
      heroTagline:
        'Passez du plan au 3D, à l’aménagement des pièces et aux idées pour réaménager la maison dans une seule app iOS.',
      heroNote:
        'Utilisez-la pour repenser l’intérieur, les façades, les pièces vides et les aperçus de rénovation sans logiciel 3D lourd.',
      featureChips: [
        'Plans en 3D',
        'Aménagement maison',
        'Aménagement des pièces',
        'Aménagement intérieur et extérieur',
      ],
      faqTitle: 'FAQ',
      localesTitle: 'Disponible en 10 langues',
      localesIntro:
        'Choisissez la version qui correspond le mieux à la langue utilisée par vos clients dans Google.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Langue',
      downloadAria: 'Télécharger Floor Plan to 3D sur l’App Store',
      downloadAlt: 'Télécharger sur l’App Store',
      appIconAlt: 'Icône de l’app Floor Plan to 3D',
      ogImageAlt:
        'Comparaison entre un plan 2D en noir et blanc et un rendu 3D en couleur.',
      compareAlt:
        'Comparaison entre un plan 2D et un rendu 3D dans l’interface de l’app',
      stylesAlt:
        'Personnalisez des styles comme classique, méditerranéen et loft dans l’app',
      screenshotsLabel: 'Captures de l’app',
      srAppStore:
        'Fiche App Store : Floor Plan to 3D, plans en 3D, aménagement maison et planification des pièces avec IA.',
      softwareDescription:
        'Transformez des plans en 3D et repensez intérieurs, extérieurs et pièces vides avec une app iOS simple.',
      faqs: [
        {
          q: 'Qu’est-ce que Floor Plan to 3D ?',
          a: 'C’est une app iOS simple qui transforme n’importe quel plan ou plan technique en noir et blanc en un rendu 3D propre. Elle aide aussi à repenser des pièces, des maisons et des espaces vides avec des idées guidées par l’IA.',
        },
        {
          q: 'Est-ce utile pour aménager des pièces ou la maison ?',
          a: 'Oui. Beaucoup de personnes l’utilisent pour tester des idées, comparer des agencements, préparer des rénovations et partager rapidement un concept avec des clients.',
        },
        {
          q: 'Que préserve l’IA de mon plan ?',
          a: 'L’app lit les libellés et les dimensions et préserve les quantités, positions et proportions afin que le résultat 3D reflète votre plan d’origine au lieu d’inventer une nouvelle disposition.',
        },
        {
          q: 'Puis-je repenser un intérieur, un extérieur ou une pièce vide ?',
          a: 'Oui. Vous pouvez importer une pièce, une façade ou un espace vide et utiliser l’IA pour explorer du mobilier, des idées pour réaménager la maison, des améliorations de façade et des styles de rénovation en quelques secondes.',
        },
        {
          q: 'Est-ce adapté à l’aménagement intérieur avec IA et aux aperçus rapides des pièces ?',
          a: 'Oui. Le rendu est assisté par IA pour gagner en vitesse et en clarté. C’est très utile pour explorer des idées d’aménagement intérieur, générer des aperçus rapides et visualiser des concepts avant/après sans modélisation 3D manuelle.',
        },
        {
          q: 'Puis-je exporter ou partager le rendu 3D ?',
          a: 'Vous pouvez exporter des images haute résolution du rendu 3D pour les intégrer à des propositions, à la planification de travaux ou de rénovation, et à des présentations.',
        },
        {
          q: 'Quels fichiers ou quels plans fonctionnent le mieux ?',
          a: 'Les meilleurs résultats viennent des plans en noir et blanc : PDF de plans, scans de plans techniques ou photos nettes. Idéal pour obtenir rapidement une vue 3D avant de modéliser.',
        },
      ],
    },
  },
  {
    code: 'pt',
    path: '/pt/',
    lang: 'pt',
    hreflang: 'pt',
    ogLocale: 'pt_PT',
    nativeName: 'Português',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: plantas em 3D e planeamento da casa com IA para iOS',
      metaDescription:
        'Converte plantas em 3D e redesenha interiores, exteriores e divisões vazias com IA. Uma app rápida para planeamento da casa e das divisões no iPhone e iPad.',
      heroTitle: 'Converte plantas em 3D e redesenha espaços com IA',
      heroTagline:
        'Passa de planta para 3D, planeamento de divisões e ideias para renovar a casa numa única app iOS.',
      heroNote:
        'Usa-a para renovar interiores, fachadas, divisões vazias e pré-visualizações de renovação sem software 3D pesado.',
      featureChips: [
        'Plantas em 3D',
        'Planeamento da casa',
        'Planeamento de divisões',
        'Renovação interior e exterior',
      ],
      faqTitle: 'Perguntas frequentes',
      localesTitle: 'Disponível em 10 idiomas',
      localesIntro:
        'Escolhe a versão mais alinhada com o idioma em que os teus clientes pesquisam.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Idioma',
      downloadAria: 'Descarregar Floor Plan to 3D na App Store',
      downloadAlt: 'Descarregar na App Store',
      appIconAlt: 'Ícone da app Floor Plan to 3D',
      ogImageAlt:
        'Comparação entre uma planta 2D a preto e branco e um render 3D a cores.',
      compareAlt:
        'Comparação entre uma planta 2D e um render 3D dentro da interface da app',
      stylesAlt:
        'Personaliza estilos como clássico, mediterrânico e loft na app',
      screenshotsLabel: 'Capturas da app',
      srAppStore:
        'Página da App Store: Floor Plan to 3D, plantas em 3D, planeamento da casa e divisões com IA.',
      softwareDescription:
        'Converte plantas em 3D e redesenha interiores, exteriores e divisões vazias com uma app iOS simples.',
      faqs: [
        {
          q: 'O que é o Floor Plan to 3D?',
          a: 'É uma app simples para iOS que transforma qualquer planta ou desenho técnico a preto e branco numa visualização 3D limpa. Também ajuda a redesenhar divisões, casas e espaços vazios com ideias guiadas por IA.',
        },
        {
          q: 'É útil para planear divisões ou a casa?',
          a: 'Sim. Muitas pessoas usam-na para visualizar ideias de casa, comparar distribuições, planear renovações e partilhar rapidamente um conceito com clientes.',
        },
        {
          q: 'O que é que a IA preserva do meu plano?',
          a: 'A app lê etiquetas e dimensões e preserva quantidades, posições e proporções, para que o resultado 3D reflita o teu plano original em vez de inventar uma nova disposição.',
        },
        {
          q: 'Posso redesenhar interiores, exteriores ou divisões vazias?',
          a: 'Sim. Podes carregar uma divisão, uma fachada ou um espaço vazio e usar a IA para explorar mobiliário, ideias para renovar a casa, melhorias de fachada e estilos de renovação em segundos.',
        },
        {
          q: 'Suporta design de interiores com IA e pré-visualizações rápidas de divisões?',
          a: 'Sim. O render usa IA para ganhar velocidade e clareza. É ótimo para explorar ideias de design interior, gerar pré-visualizações rápidas e ver conceitos antes/depois sem modelação 3D manual.',
        },
        {
          q: 'Posso exportar ou partilhar o render 3D?',
          a: 'Podes exportar imagens de alta resolução do render 3D para incluir em propostas, planeamento de obra ou renovação e apresentações.',
        },
        {
          q: 'Que ficheiros ou plantas funcionam melhor?',
          a: 'Os melhores resultados vêm de plantas a preto e branco: PDFs, digitalizações de desenhos técnicos ou fotos nítidas. É ideal quando queres uma vista 3D rápida antes de modelar.',
        },
      ],
    },
  },
  {
    code: 'ro',
    path: '/ro/',
    lang: 'ro',
    hreflang: 'ro',
    ogLocale: 'ro_RO',
    nativeName: 'Română',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: planuri 3D și amenajarea casei cu AI pentru iOS',
      metaDescription:
        'Transformă planurile în 3D și redesenează interioare, exterioare și camere goale cu AI. O aplicație rapidă pentru planificarea casei și a camerelor pe iPhone și iPad.',
      heroTitle: 'Transformă planurile în 3D și redesenează spațiile cu AI',
      heroTagline:
        'Treci de la plan la 3D, planificarea camerelor și idei pentru amenajarea casei într-o singură aplicație iOS.',
      heroNote:
        'Folosește-o pentru amenajări interioare, fațade, camere goale și previzualizări de renovare fără software 3D complicat.',
      featureChips: [
        'Planuri în 3D',
        'Planificator de casă',
        'Planificator de camere',
        'Amenajări interioare și exterioare',
      ],
      faqTitle: 'Întrebări frecvente',
      localesTitle: 'Disponibil în 10 limbi',
      localesIntro:
        'Alege versiunea care se potrivește cel mai bine cu limba în care te caută clienții.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Limbă',
      downloadAria: 'Descarcă Floor Plan to 3D din App Store',
      downloadAlt: 'Descarcă din App Store',
      appIconAlt: 'Pictograma aplicației Floor Plan to 3D',
      ogImageAlt:
        'Comparație între un plan 2D alb-negru și un render 3D color.',
      compareAlt:
        'Comparație între un plan 2D și un render 3D în interfața aplicației',
      stylesAlt:
        'Personalizează stiluri precum clasic, mediteranean și loft în aplicație',
      screenshotsLabel: 'Capturi din aplicație',
      srAppStore:
        'Pagina App Store: Floor Plan to 3D, planuri 3D, amenajarea casei și planificator de camere cu AI.',
      softwareDescription:
        'Transformă planurile în 3D și redesenează interioare, exterioare și camere goale cu o aplicație iOS simplă.',
      faqs: [
        {
          q: 'Ce este Floor Plan to 3D?',
          a: 'Este o aplicație iOS simplă care transformă orice plan sau plan tehnic alb-negru într-o randare 3D curată. De asemenea, te ajută să redesenezi camere, case și spații goale cu idei generate de AI.',
        },
        {
          q: 'Este utilă pentru planificarea camerelor sau a casei?',
          a: 'Da. Mulți utilizatori o folosesc pentru a testa idei, a compara configurații, a planifica renovări și a trimite rapid un concept clienților.',
        },
        {
          q: 'Ce păstrează AI-ul din planul meu?',
          a: 'Aplicația citește etichete și dimensiuni și păstrează numărul elementelor, pozițiile și proporțiile, astfel încât rezultatul 3D să reflecte planul original, nu să inventeze unul nou.',
        },
        {
          q: 'Pot redesena interioare, exterioare sau camere goale?',
          a: 'Da. Poți încărca o cameră, o fațadă sau un spațiu gol și poți folosi AI-ul pentru a explora mobilier, idei pentru amenajarea casei, îmbunătățiri de fațadă și stiluri de renovare în câteva secunde.',
        },
        {
          q: 'Ajută la design interior cu AI și previzualizări rapide ale camerelor?',
          a: 'Da. Randarea este asistată de AI pentru viteză și claritate. Este foarte utilă pentru a explora idei de design interior, a genera previzualizări rapide și a vedea concepte înainte și după fără modelare 3D manuală.',
        },
        {
          q: 'Pot exporta sau distribui renderul 3D?',
          a: 'Poți exporta imagini la rezoluție mare ale renderului 3D pentru oferte, planificare de construcții sau renovări și prezentări.',
        },
        {
          q: 'Ce fișiere sau planuri funcționează cel mai bine?',
          a: 'Cele mai bune rezultate vin din planuri alb-negru: PDF-uri, scanări de planuri tehnice sau fotografii clare. Este ideal când vrei o vedere 3D rapidă înainte de modelare.',
        },
      ],
    },
  },
  {
    code: 'sv',
    path: '/sv/',
    lang: 'sv',
    hreflang: 'sv',
    ogLocale: 'sv_SE',
    nativeName: 'Svenska',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: planritningar i 3D och rumsplanering med AI för iOS',
      metaDescription:
        'Förvandla planritningar till 3D och gör om interiörer, exteriörer och tomma rum med AI. En snabb app för hemplanering och rumsplanering på iPhone och iPad.',
      heroTitle: 'Förvandla planritningar till 3D och gör om rum med AI',
      heroTagline:
        'Gå från planritning till 3D, rumsplanering och idéer för att göra om hemmet i en enda iOS-app.',
      heroNote:
        'Använd den för inredningsförslag, fasader, tomma rum och renoveringsförhandsvisningar utan tung 3D-programvara.',
      featureChips: [
        'Planritning till 3D',
        'Hemplanering',
        'Rumsplanering',
        'Interiör och exteriör',
      ],
      faqTitle: 'Vanliga frågor',
      localesTitle: 'Tillgänglig på 10 språk',
      localesIntro:
        'Välj den version som passar bäst för det språk dina kunder använder i sökningar.',
      blogLabel: 'Blogg',
      localeBadgeLabel: 'Språk',
      downloadAria: 'Ladda ner Floor Plan to 3D på App Store',
      downloadAlt: 'Ladda ner på App Store',
      appIconAlt: 'Appikon för Floor Plan to 3D',
      ogImageAlt:
        'Jämförelse mellan en svartvit 2D-plan och en 3D-rendering i färg.',
      compareAlt:
        'Jämförelse mellan en 2D-planritning och en 3D-rendering i appens gränssnitt',
      stylesAlt:
        'Anpassa stilar som klassisk, medelhavs och loft i appen',
      screenshotsLabel: 'Appskärmbilder',
      srAppStore:
        'App Store-listning: Floor Plan to 3D, planritningar i 3D, hemplanering och rumsplanering med AI.',
      softwareDescription:
        'Förvandla planritningar till 3D och gör om interiörer, exteriörer och tomma rum med en enkel iOS-app.',
      faqs: [
        {
          q: 'Vad är Floor Plan to 3D?',
          a: 'Det är en enkel iOS-app som förvandlar vilken svartvit planritning eller byggnadsritning som helst till en ren 3D-rendering. Den hjälper dig också att göra om rum, hem och tomma ytor med AI-styrda idéer.',
        },
        {
          q: 'Är den användbar för rumsplanering eller hemplanering?',
          a: 'Ja. Många använder den för att testa husidéer, jämföra planlösningar, planera renoveringar och snabbt dela ett koncept med kunder.',
        },
        {
          q: 'Vad bevarar AI:n från min plan?',
          a: 'Appen läser etiketter och mått och bevarar antal, positioner och proportioner, så att 3D-resultatet speglar din ursprungliga plan i stället för att hitta på en ny planlösning.',
        },
        {
          q: 'Kan jag göra om interiörer, exteriörer eller tomma rum?',
          a: 'Ja. Du kan ladda upp ett rum, en fasad eller en tom yta och använda AI för att utforska möblering, idéer för att göra om hemmet, fasadförbättringar och renoveringsstilar på några sekunder.',
        },
        {
          q: 'Stöder den AI-baserad inredningsdesign och snabba rumsförhandsvisningar?',
          a: 'Ja. Renderingen är AI-stödd för hastighet och tydlighet. Den passar bra för att utforska designidéer, få snabba rumsförhandsvisningar och se före- och efterkoncept utan manuell 3D-modellering.',
        },
        {
          q: 'Kan jag exportera eller dela 3D-renderingen?',
          a: 'Du kan exportera högupplösta bilder av 3D-renderingen för offerter, bygg- eller renoveringsplanering och presentationer.',
        },
        {
          q: 'Vilka filer eller planer fungerar bäst?',
          a: 'Svartvita planer fungerar bäst: planritnings-PDF:er, skanningar av byggnadsritningar eller tydliga foton. Perfekt när du vill ha en snabb 3D-vy innan modellering.',
        },
      ],
    },
  },
  {
    code: 'pl',
    path: '/pl/',
    lang: 'pl',
    hreflang: 'pl',
    ogLocale: 'pl_PL',
    nativeName: 'Polski',
    dir: 'ltr',
    strings: {
      seoTitle: 'Floor Plan to 3D: rzuty 3D i planer pomieszczeń z AI na iOS',
      metaDescription:
        'Zmieniaj rzuty na 3D i przeprojektowuj wnętrza, elewacje oraz puste pokoje z AI. Szybka aplikacja do planowania domu i pomieszczeń na iPhone i iPad.',
      heroTitle: 'Zamieniaj rzuty na 3D i przeprojektowuj przestrzenie z AI',
      heroTagline:
        'Przejdź od rzutu do 3D, planowania pomieszczeń i pomysłów na metamorfozę domu w jednej aplikacji iOS.',
      heroNote:
        'Używaj jej do aranżacji wnętrz, elewacji, pustych pokoi i podglądów remontu bez ciężkiego oprogramowania 3D.',
      featureChips: [
        'Rzut do 3D',
        'Planer domu',
        'Planer pomieszczeń',
        'Metamorfoza wnętrz i elewacji',
      ],
      faqTitle: 'Najczęstsze pytania',
      localesTitle: 'Dostępne w 10 językach',
      localesIntro:
        'Wybierz wersję najlepiej dopasowaną do języka, w którym szukają Cię klienci.',
      blogLabel: 'Blog',
      localeBadgeLabel: 'Język',
      downloadAria: 'Pobierz Floor Plan to 3D z App Store',
      downloadAlt: 'Pobierz z App Store',
      appIconAlt: 'Ikona aplikacji Floor Plan to 3D',
      ogImageAlt:
        'Porównanie czarno-białego planu 2D z kolorowym renderem 3D.',
      compareAlt:
        'Porównanie planu 2D i renderu 3D w interfejsie aplikacji',
      stylesAlt:
        'Dostosuj style, takie jak klasyczny, śródziemnomorski i loft, w aplikacji',
      screenshotsLabel: 'Zrzuty ekranu aplikacji',
      srAppStore:
        'Karta App Store: Floor Plan to 3D, rzuty 3D, metamorfoza domu i planer pomieszczeń z AI.',
      softwareDescription:
        'Zamieniaj rzuty na 3D i przeprojektowuj wnętrza, elewacje oraz puste pokoje za pomocą prostej aplikacji iOS.',
      faqs: [
        {
          q: 'Czym jest Floor Plan to 3D?',
          a: 'To prosta aplikacja na iOS, która zamienia dowolny czarno-biały plan lub rysunek techniczny w czystą wizualizację 3D. Pomaga też przeprojektowywać pokoje, domy i puste przestrzenie przy pomocy pomysłów generowanych przez AI.',
        },
        {
          q: 'Czy przydaje się do planowania pomieszczeń albo domu?',
          a: 'Tak. Wiele osób używa jej do testowania pomysłów, porównywania układów, planowania remontów i szybkiego udostępniania koncepcji klientom.',
        },
        {
          q: 'Co AI zachowuje z mojego planu?',
          a: 'Aplikacja odczytuje etykiety i wymiary oraz zachowuje liczby, położenia i proporcje, dzięki czemu wynik 3D odzwierciedla oryginalny plan zamiast wymyślać nowy układ.',
        },
        {
          q: 'Czy mogę przeprojektować wnętrza, elewacje albo puste pokoje?',
          a: 'Tak. Możesz wgrać pokój, fasadę albo pustą przestrzeń i użyć AI do sprawdzania umeblowania, pomysłów na metamorfozę domu, zmian elewacji i stylów remontu w kilka sekund.',
        },
        {
          q: 'Czy nadaje się do projektowania wnętrz z AI i szybkich podglądów pomieszczeń?',
          a: 'Tak. Wizualizacja jest wspierana przez AI dla szybkości i przejrzystości. Świetnie sprawdza się przy eksplorowaniu pomysłów, szybkich podglądach pomieszczeń i konceptach przed/po bez ręcznego modelowania 3D.',
        },
        {
          q: 'Czy mogę eksportować albo udostępniać render 3D?',
          a: 'Możesz eksportować obrazy renderu 3D w wysokiej rozdzielczości do ofert, planowania budowy lub remontu oraz prezentacji.',
        },
        {
          q: 'Jakie pliki lub plany działają najlepiej?',
          a: 'Najlepiej sprawdzają się czarno-białe plany: PDF-y, skany rysunków technicznych albo wyraźne zdjęcia. To idealne rozwiązanie, gdy chcesz szybko zobaczyć plan w 3D przed modelowaniem.',
        },
      ],
    },
  },
  {
    code: 'ar',
    path: '/ar/',
    lang: 'ar',
    hreflang: 'ar',
    ogLocale: 'ar_SA',
    nativeName: 'العربية',
    dir: 'rtl',
    strings: {
      seoTitle: 'Floor Plan to 3D: تحويل المخططات إلى 3D وتخطيط المنزل بالذكاء الاصطناعي على iOS',
      metaDescription:
        'حوّل المخططات إلى 3D وأعد تصميم المساحات الداخلية والخارجية والغرف الفارغة بالذكاء الاصطناعي. تطبيق سريع لتخطيط المنزل والغرف على iPhone وiPad.',
      heroTitle: 'حوّل المخططات إلى 3D وأعد تصميم المساحات بالذكاء الاصطناعي',
      heroTagline:
        'انتقل من المخطط إلى 3D وتخطيط الغرف وأفكار تنسيق المنزل داخل تطبيق iOS واحد.',
      heroNote:
        'استخدمه لإعادة تصميم المساحات الداخلية والواجهات والغرف الفارغة ومعاينات التجديد بدون برامج 3D معقدة.',
      featureChips: [
        'تحويل المخطط إلى 3D',
        'مخطط المنزل',
        'مخطط الغرف',
        'إعادة تصميم داخلي وخارجي',
      ],
      faqTitle: 'الأسئلة الشائعة',
      localesTitle: 'متاح بـ 10 لغات',
      localesIntro:
        'اختر النسخة الأنسب للغة التي يبحث بها عملاؤك عن هذا النوع من الحلول.',
      blogLabel: 'المدونة',
      localeBadgeLabel: 'اللغة',
      downloadAria: 'نزّل Floor Plan to 3D من App Store',
      downloadAlt: 'نزّل من App Store',
      appIconAlt: 'أيقونة تطبيق Floor Plan to 3D',
      ogImageAlt:
        'مقارنة بين مخطط ثنائي الأبعاد بالأبيض والأسود ورندر ثلاثي الأبعاد بالألوان.',
      compareAlt:
        'مقارنة بين مخطط ثنائي الأبعاد ورندر ثلاثي الأبعاد داخل واجهة التطبيق',
      stylesAlt:
        'خصّص أنماطاً مثل الكلاسيكي والمتوسطي واللوفت داخل التطبيق',
      screenshotsLabel: 'لقطات شاشة التطبيق',
      srAppStore:
        'صفحة App Store: Floor Plan to 3D، تحويل المخططات إلى 3D، تخطيط المنزل وتخطيط الغرف بالذكاء الاصطناعي.',
      softwareDescription:
        'حوّل المخططات إلى 3D وأعد تصميم المساحات الداخلية والخارجية والغرف الفارغة باستخدام تطبيق iOS بسيط.',
      faqs: [
        {
          q: 'ما هو Floor Plan to 3D؟',
          a: 'هو تطبيق iOS بسيط يحوّل أي مخطط طابق أو مخطط هندسي بالأبيض والأسود إلى تصور ثلاثي الأبعاد واضح. كما يساعدك أيضاً على إعادة تصميم الغرف والمنازل والمساحات الفارغة بأفكار موجّهة بالذكاء الاصطناعي.',
        },
        {
          q: 'هل هو مناسب لتخطيط الغرف أو المنزل؟',
          a: 'نعم. يستخدمه كثيرون لمراجعة أفكار التصميم، ومقارنة توزيعات المساحات، والتخطيط للتجديد، ومشاركة تصور سريع مع العملاء.',
        },
        {
          q: 'ما الذي يحافظ عليه الذكاء الاصطناعي من المخطط الأصلي؟',
          a: 'يقرأ التطبيق التسميات والأبعاد ويحافظ على الأعداد والمواقع والنِسب، بحيث يعكس الناتج ثلاثي الأبعاد مخططك الأصلي بدلاً من اختراع توزيع جديد.',
        },
        {
          q: 'هل يمكنني إعادة تصميم المساحات الداخلية أو الخارجية أو الغرف الفارغة؟',
          a: 'نعم. يمكنك رفع غرفة أو واجهة أو مساحة فارغة واستخدام الذكاء الاصطناعي لاستكشاف الأثاث، وأفكار إعادة تصميم المنزل، وتحسينات الواجهة، وأنماط التجديد خلال ثوانٍ.',
        },
        {
          q: 'هل يدعم تصميم المنازل بالذكاء الاصطناعي ومعاينات الغرف السريعة؟',
          a: 'نعم. الرندر مدعوم بالذكاء الاصطناعي من أجل السرعة والوضوح، وهو مناسب لاستكشاف أفكار التصميم والحصول على معاينات سريعة ورؤية أفكار قبل/بعد بدون نمذجة ثلاثية الأبعاد يدوية.',
        },
        {
          q: 'هل يمكنني تصدير أو مشاركة الرندر ثلاثي الأبعاد؟',
          a: 'يمكنك تصدير صور عالية الدقة من الرندر الثلاثي الأبعاد لاستخدامها في العروض، أو تخطيط البناء أو التجديد، أو العروض التقديمية.',
        },
        {
          q: 'ما أنواع الملفات أو المخططات التي تعمل بشكل أفضل؟',
          a: 'أفضل النتائج تكون مع المخططات بالأبيض والأسود: ملفات PDF للمخططات، أو صور Blueprint الممسوحة ضوئياً، أو الصور الواضحة. التطبيق مثالي عندما تحتاج إلى عرض ثلاثي الأبعاد سريع قبل النمذجة.',
        },
      ],
    },
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsonScript(value) {
  return JSON.stringify(value, null, 2).replace(/</g, '\\u003c');
}

function pageUrlFor(locale) {
  return locale.path === '/' ? `${site.domain}/` : `${site.domain}${locale.path}`;
}

function hreflangLinks(currentLocale) {
  return locales
    .map(
      (locale) =>
        `  <link rel="alternate" hreflang="${locale.hreflang}" href="${pageUrlFor(locale)}">`,
    )
    .concat(
      `  <link rel="alternate" hreflang="x-default" href="${pageUrlFor(locales[0])}">`,
    )
    .join('\n');
}

function ogLocaleAlternates(currentLocale) {
  return locales
    .filter((locale) => locale.code !== currentLocale.code)
    .map(
      (locale) =>
        `  <meta property="og:locale:alternate" content="${locale.ogLocale}">`,
    )
    .join('\n');
}

function localeLinks(currentLocale) {
  return locales
    .map((locale) => {
      const href = locale.path;
      const current = locale.code === currentLocale.code;
      return `        <a class="locale-link${current ? ' current' : ''}" href="${href}"${
        current ? ' aria-current="page"' : ''
      }>${escapeHtml(locale.nativeName)}</a>`;
    })
    .join('\n');
}

function featureChips(currentLocale) {
  return currentLocale.strings.featureChips
    .map((chip) => `        <span class="feature-chip">${escapeHtml(chip)}</span>`)
    .join('\n');
}

function softwareApplicationSchema(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Home Planner & Room Design',
    alternateName: 'Floor Plan to 3D',
    operatingSystem: 'iOS 17.0+',
    applicationCategory: 'DesignApplication',
    inLanguage: locale.hreflang,
    description: locale.strings.softwareDescription,
    url: site.appStoreListingUrl,
    image: site.ogImage,
    publisher: {
      '@type': 'Organization',
      name: 'Yuca Apps',
    },
  };
}

function faqSchema(locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: locale.strings.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

function pageHtml(locale) {
  const pageUrl = pageUrlFor(locale);
  const dirAttribute = locale.dir === 'rtl' ? ' dir="rtl"' : '';
  const faqsHtml = locale.strings.faqs
    .map(
      (faq, index) => `    <details open${index === 0 ? '' : ''}>
      <summary>${escapeHtml(faq.q)}</summary>
      <p>${escapeHtml(faq.a)}</p>
    </details>`,
    )
    .join('\n');

  return `<!doctype html>
<html lang="${locale.lang}"${dirAttribute}>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(locale.strings.seoTitle)}</title>
  <meta name="description" content="${escapeHtml(locale.strings.metaDescription)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${pageUrl}">
${hreflangLinks(locale)}
  <link rel="preload" as="image" href="/screen-compare.webp" fetchpriority="high">
  <link rel="preload" as="image" href="/screen-styles.webp">
  <link rel="icon" href="/logo.webp">
  <link rel="apple-touch-icon" href="/logo.webp">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Floor Plan to 3D">
  <meta property="og:locale" content="${locale.ogLocale}">
${ogLocaleAlternates(locale)}
  <meta property="og:title" content="${escapeHtml(locale.strings.seoTitle)}">
  <meta property="og:description" content="${escapeHtml(locale.strings.metaDescription)}">
  <meta property="og:image" content="${site.ogImage}">
  <meta property="og:image:alt" content="${escapeHtml(locale.strings.ogImageAlt)}">
  <meta property="og:url" content="${pageUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(locale.strings.seoTitle)}">
  <meta name="twitter:description" content="${escapeHtml(locale.strings.metaDescription)}">
  <meta name="twitter:image" content="${site.ogImage}">

  <script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('${site.analytics.posthogKey}', { api_host: 'https://us.i.posthog.com', defaults: '${site.analytics.posthogDefaults}' });
  </script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=${site.analytics.gtagId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${site.analytics.gtagId}');
  </script>

  <script>
    function gtagSendEvent(url) {
      var callback = function () {
        if (typeof url === 'string') {
          window.location = url;
        }
      };
      gtag('event', 'sign_up', {
        event_callback: callback,
        event_timeout: 2000,
        event_category: 'cta',
        event_label: 'hero-button'
      });
      return false;
    }
  </script>

  <style>
    :root {
      color-scheme: light dark;
      --bg: #ffffff;
      --fg: #0b1020;
      --muted: #5b647a;
      --accent: #2563eb;
      --accent-2: #22c55e;
      --card: #f8fafc;
      --chip-bg: #ffffff;
      --chip-border: #d7dfeb;
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body { min-height: 100%; overflow-x: hidden; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      display: grid;
      place-items: start center;
      background: radial-gradient(1200px 600px at 50% -10%, rgba(37,99,235,.08), transparent 60%), var(--bg);
      color: var(--fg);
      overflow-x: hidden;
      padding-bottom: 32px;
    }
    header,
    main,
    .faq {
      width: 100%;
      max-width: 1000px;
      padding: 0 16px;
    }
    header {
      margin-top: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .brand-block {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
    .logo {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      box-shadow: 0 6px 20px rgba(37,99,235,.25);
      flex: 0 0 auto;
    }
    .brand {
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .header-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      flex-wrap: wrap;
    }
    .header-link {
      color: var(--fg);
      text-decoration: none;
      font-weight: 700;
    }
    .header-link:hover { color: var(--accent); text-decoration: underline; }
    .locale-menu {
      position: relative;
    }
    .locale-menu details {
      position: relative;
    }
    .locale-trigger {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid rgba(37,99,235,.1);
      background: rgba(37,99,235,.08);
      color: var(--accent);
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
      list-style: none;
    }
    .locale-trigger::-webkit-details-marker { display: none; }
    .locale-chevron {
      width: 9px;
      height: 9px;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(45deg) translateY(-1px);
      transition: transform .16s ease;
      opacity: .8;
    }
    .locale-menu details[open] .locale-chevron {
      transform: rotate(-135deg) translateY(-1px);
    }
    .locale-dropdown {
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      z-index: 20;
      display: grid;
      gap: 8px;
      width: min(260px, calc(100vw - 32px));
      padding: 10px;
      border: 1px solid #e9eef5;
      border-radius: 16px;
      background: rgba(255,255,255,.98);
      box-shadow: 0 18px 48px rgba(2,6,23,.14), 0 4px 12px rgba(2,6,23,.08);
      backdrop-filter: blur(10px);
    }
    .accent-bar {
      height: 3px;
      width: min(1000px, calc(100% - 32px));
      margin: 10px auto 0;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      opacity: .9;
    }
    main {
      padding-top: 10px;
      text-align: center;
    }
    .card {
      display: grid;
      gap: 18px;
      padding: 16px;
      margin: 0 auto;
      border-radius: 16px;
      background: linear-gradient(180deg, #ffffff, #fbfdff);
      border: 1px solid #e9eef5;
      box-shadow: 0 10px 40px rgba(2,6,23,.08), 0 2px 8px rgba(2,6,23,.06);
      align-items: center;
      width: 100%;
      max-width: 1000px;
    }
    .copy {
      text-align: left;
      margin-inline: auto;
      max-width: 520px;
    }
    h1 {
      font-size: 1.9rem;
      line-height: 1.2;
      margin: 8px 0 6px;
    }
    .tagline {
      margin: 0 0 14px;
      font-size: 1.06rem;
      color: var(--muted);
    }
    .hero-note {
      margin: 0 0 12px;
      color: var(--muted);
      font-size: .98rem;
      line-height: 1.5;
    }
    .feature-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 0 16px;
    }
    .feature-chip {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(37,99,235,.08);
      border: 1px solid rgba(37,99,235,.12);
      color: var(--fg);
      font-size: .92rem;
      font-weight: 700;
      white-space: nowrap;
    }
    .visual {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .shots {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 6px;
      width: 100%;
    }
    .shots figure { margin: 0; scroll-snap-align: center; flex: 0 0 auto; }
    .shots img {
      display: block;
      width: min(40vw, 180px);
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 6px 28px rgba(0,0,0,.12);
      background: #f7f7f7;
    }
    .cta {
      display: inline-block;
      margin-top: 4px;
      padding: 0;
      background: transparent;
      border-radius: 0;
      text-decoration: none;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border: 0;
    }
    .locale-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 42px;
      width: 100%;
      padding: 8px 12px;
      border-radius: 12px;
      border: 1px solid var(--chip-border);
      background: var(--chip-bg);
      color: var(--fg);
      text-decoration: none;
      font-weight: 700;
      box-shadow: 0 4px 14px rgba(2,6,23,.04);
    }
    .locale-link:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    .locale-link.current {
      border-color: transparent;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      color: #ffffff;
      box-shadow: 0 8px 24px rgba(37,99,235,.22);
    }
    .faq {
      margin: 30px auto 10px;
      text-align: left;
    }
    .faq h2 {
      font-size: 1.4rem;
      margin: 0 0 8px;
    }
    .faq details {
      background: #ffffff;
      border: 1px solid #e9eef5;
      border-left: 4px solid var(--accent);
      border-radius: 10px;
      padding: 10px 12px;
      margin: 10px 0;
      box-shadow: 0 4px 16px rgba(2,6,23,.04);
    }
    .faq summary {
      cursor: pointer;
      font-weight: 700;
      list-style: none;
    }
    .faq summary::-webkit-details-marker { display: none; }
    .faq p { margin: 8px 2px 0; color: var(--muted); }
    @media (min-width: 980px) {
      .card {
        grid-template-columns: 1.05fr 1.2fr;
        padding: 20px;
      }
      .copy {
        text-align: left;
        margin: 0;
      }
      .visual { justify-content: flex-end; }
      .shots {
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: visible;
      }
      .shots img { width: min(15vw, 220px); }
    }
    html[dir="rtl"] body { direction: rtl; }
    html[dir="rtl"] header { flex-direction: row-reverse; }
    html[dir="rtl"] .copy,
    html[dir="rtl"] .faq { text-align: right; }
    html[dir="rtl"] .locale-dropdown {
      left: 0;
      right: auto;
    }
    html[dir="rtl"] .shots { direction: ltr; }
  </style>

  <script type="application/ld+json">
${escapeJsonScript(softwareApplicationSchema(locale))}
  </script>
</head>
<body>
  <header>
    <div class="brand-block">
      <img class="logo" src="/logo.webp" alt="${escapeHtml(locale.strings.appIconAlt)}" loading="eager" decoding="async" width="36" height="36">
      <div class="brand">Floor Plan to 3D</div>
    </div>
    <nav class="header-nav" aria-label="${escapeHtml(locale.strings.localeBadgeLabel)}">
      <div class="locale-menu">
        <details>
          <summary class="locale-trigger">
            <span>${escapeHtml(locale.nativeName)}</span>
            <span class="locale-chevron" aria-hidden="true"></span>
          </summary>
          <div class="locale-dropdown">
${localeLinks(locale)}
          </div>
        </details>
      </div>
      <a class="header-link" href="${site.blogUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(locale.strings.blogLabel)}</a>
    </nav>
  </header>
  <div class="accent-bar" aria-hidden="true"></div>
  <main>
    <section class="card">
      <div class="copy">
        <h1>${escapeHtml(locale.strings.heroTitle)}</h1>
        <p class="tagline">${escapeHtml(locale.strings.heroTagline)}</p>
        <p class="hero-note">${escapeHtml(locale.strings.heroNote)}</p>
        <div class="feature-chips">
${featureChips(locale)}
        </div>
        <a
          class="cta"
          href="${site.ctaUrl}"
          rel="noopener"
          id="download-cta"
          onclick="return gtagSendEvent(this.href);"
          aria-label="${escapeHtml(locale.strings.downloadAria)}"
        ><img src="/download.webp" alt="${escapeHtml(locale.strings.downloadAlt)}" width="180" height="60" style="height:auto; width:180px; display:block;" loading="lazy" decoding="async"></a>
      </div>
      <div class="visual">
        <div class="shots" role="region" aria-label="${escapeHtml(locale.strings.screenshotsLabel)}">
          <figure>
            <img src="/screen-compare.webp" alt="${escapeHtml(locale.strings.compareAlt)}" loading="eager" decoding="async" fetchpriority="high" width="220" height="477" srcset="/screen-compare.webp 220w" sizes="(min-width: 980px) 220px, 40vw">
          </figure>
          <figure>
            <img src="/screen-styles.webp" alt="${escapeHtml(locale.strings.stylesAlt)}" loading="lazy" decoding="async" width="220" height="477" srcset="/screen-styles.webp 220w" sizes="(min-width: 980px) 220px, 40vw">
          </figure>
        </div>
      </div>
    </section>
    <span class="sr-only">${escapeHtml(locale.strings.srAppStore)}</span>
  </main>
  <section class="faq" aria-labelledby="faq-title">
    <h2 id="faq-title">${escapeHtml(locale.strings.faqTitle)}</h2>
${faqsHtml}
  </section>
  <script type="application/ld+json">
${escapeJsonScript(faqSchema(locale))}
  </script>
</body>
</html>
`;
}

function sitemapXml() {
  const entries = locales
    .map((locale) => {
      const pageUrl = pageUrlFor(locale);
      const alternates = locales
        .map(
          (alternate) =>
            `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${pageUrlFor(alternate)}" />`,
        )
        .concat(
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrlFor(locales[0])}" />`,
        )
        .join('\n');
      return `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${site.lastmod}</lastmod>
${alternates}
  </url>`;
    })
    .join('\n');

  const blogEntry = `  <url>
    <loc>${site.blogUrl}/</loc>
    <lastmod>${site.lastmod}</lastmod>
  </url>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
${blogEntry}
</urlset>
`;
}

function robotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${site.domain}/sitemap.xml
`;
}

function writeFile(relativePath, content) {
  const outputPath = path.join(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content);
}

function run() {
  locales.forEach((locale) => {
    const filePath = locale.path === '/' ? 'index.html' : `${locale.code}/index.html`;
    writeFile(filePath, pageHtml(locale));
  });

  writeFile('sitemap.xml', sitemapXml());
  writeFile('robots.txt', robotsTxt());
}

run();
