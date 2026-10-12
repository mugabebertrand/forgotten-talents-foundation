// All website text in English (en), French (fr) and Kinyarwanda (rw).
// To fix a word, change it here. Text in **double stars** shows in bold.
// {placeholders} are filled in by the code; keep them as they are.

export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "rw", label: "RW", name: "Ikinyarwanda" },
];

export const translations = {
  /* =====================================================
     ENGLISH
     ===================================================== */
  en: {
    nav: {
      home: "Home",
      how: "How It Works",
      challenges: "Talents & Showcases",
      businesses: "For Businesses",
      gallery: "Talent Gallery",
      upload: "Submit Work",
      contact: "Contact",
      rules: "Rules",
      youtube: "YouTube",
      menu: "Toggle navigation menu",
      language: "Choose language",
    },
    common: {
      seeCategories: "See talent categories",
      bookSponsor: "Book or sponsor talent",
      submitWork: "Submit your work",
      watchYoutube: "Watch on YouTube",
      readRules: "Read the rules",
      contact: "Contact",
    },
    notFound: "Page not found",

    footer: {
      tagline: "Don't just tell us what you can do. Show us.",
      disclaimer:
        "Forgotten Talent is an independent platform founded by Jean Mugabe to help overlooked creators be seen, rewarded and connected to real opportunities.",
    },

    home: {
      eyebrow: "Forgotten Talent • Online talent challenges",
      title: "Don't just tell us what you can do. Show us.",
      subtitle:
        "Forgotten Talent discovers overlooked talent: singers, musicians, artists, performers, designers and more. Every submission is reviewed, and the best are promoted through our gallery, live showcases and social media, then connected to bookings, clients and paid opportunities.",
      submit: "Submit Your Work",
      gallery: "View Talent Gallery",
      bookSponsor: "Book or Sponsor Talent",
      note: "Open to participants 18+. Please don't share home addresses or personal schedules in uploads.",
      howTitle: "How it works",
      how: [
        "Talent submits work (invitation code during the pilot)",
        "Reviewers score every entry fairly, for quality and safety",
        "The best are featured in our gallery, showcases and social media",
        "Talent connects to bookings, clients and paid opportunities",
      ],
      pilot: "Challenge #1 is coming soon. Follow us on YouTube for the launch.",
      missionTitle: "Our mission",
      missionText:
        "Talent is everywhere. Opportunity isn't. We discover people with real ability who lack connections, followers or experience, verify what they can do on real work, and help them rise into paid projects and careers.",
      cards: [
        {
          title: "For talent",
          text: "Music, art, performance, design and more. Free entry, fair review, feedback and a verified record of what you can do, even if you're not selected.",
          link: "See talent categories →",
        },
        {
          title: "For businesses & sponsors",
          text: "Book reviewed talent for your events, sponsor a showcase, buy original work, or bring a real challenge for talent to solve.",
          link: "Work with our talent →",
        },
        {
          title: "Verified Talent Record",
          text: "Every reviewed entry, showcase and completed project becomes proof of ability, so the best talent can grow from a first stage to paid work and bigger opportunities.",
          link: "See the Talent Gallery →",
        },
      ],
      ctaTitle: "Be part of Showcase #1",
      ctaText: "Talent: show us what you can do. Businesses and sponsors: help us put them on stage.",
      ctaButton: "Show Us What You Can Do",
    },

    how: {
      eyebrow: "How it works",
      title: "Discover. Prove. Promote. Connect. Rise.",
      lead: "Social platforms reward attention. Traditional hiring rewards experience. Forgotten Talent is built to make demonstrated ability visible, for people who have real skill but lack the connections, followers or track record to be noticed.",
      step: "Step {n}",
      steps: [
        ["Open call", "We invite talent to show what they can do: music, art, performance, design and more. Sometimes a business brings a real challenge to solve."],
        ["Free entry", "Participants (18+) submit their work. Entry is always free."],
        ["Fair review", "Trained reviewers score every eligible entry with the same rubric. No public voting or popularity contests."],
        ["Promote", "The best are featured in our gallery, at live showcases and on our social media."],
        ["Connect", "Audiences, businesses and brands book, buy or hire the talent they discover."],
        ["Verified record", "Reviews, showcases and completed work become proof of ability on the participant's record."],
        ["Rise", "Top talent get active support toward bigger stages and opportunities."],
      ],
      valueTitle: "Value for everyone who takes part",
      values: [
        ["Every eligible entry", "A verified completion on your record, plus scorecard feedback on your work."],
        ["Finalists", "Finalist recognition and detailed feedback from reviewers."],
        ["Featured talent", "A place in the gallery, at showcases and on social media, plus booking and sales opportunities."],
        ["Progression", "Consistent performers build a record that leads toward direct paid opportunities."],
      ],
      founderTitle: "About the founder",
      founderText:
        "I'm Jean Mugabe, an Information Systems major and Music minor at the University of Texas at Arlington, with a completed software engineering bootcamp. I first built this platform to help overlooked children get seen. Building it showed me the bigger problem: talented people have no trusted way to prove what they can do. Forgotten Talent is my answer: a fair, structured way to discover talent and help it rise.",
      statusTitle: "Current status",
      statusText:
        "Working today: invitation-based submissions, admin review for quality and safety, a public gallery of approved work, challenge rules and our YouTube channel. Coming next: Challenge #1, with rewards for the winners and their work featured on YouTube.",
    },

    challenges: {
      eyebrow: "Talents & Showcases",
      title: "Every kind of talent deserves to be seen.",
      lead: "Whatever you do (sing, play, draw, perform, design, build or create), show us your best work. Every entry is reviewed fairly, and the best are promoted and connected to real opportunities.",
      comingSoon: "Coming soon",
      openCallTitle: "Forgotten Talent Showcase #1: Open Call",
      openCallText:
        "Our first online open call welcomes every kind of talent from creators 18+ around the world. Entry is free. Reviewers score every entry, and the winners are rewarded and featured on our YouTube channel.",
      current: {
        tag: "Challenge #1",
        title: "Show us your talent",
        text: "Our first online challenge is open to creators 18+ in every talent category. Submit your best work through the website. Reviewers score every entry, and the winners are rewarded and featured on our YouTube channel.",
        prizeLabel: "Prize",
        prize: "Announced when the challenge opens",
        deadlineLabel: "Deadline",
        deadline: "To be announced",
      },
      categoriesTitle: "Talent categories",
      judgedTitle: "How entries are judged",
      judged: [
        ["Same rules for everyone", "Criteria are published before an open call starts, and every entry in a category is judged the same way."],
        ["Ability, not popularity", "Trained reviewers score skill, originality, presentation and impact. Followers and likes don't count, and there is no public voting."],
        ["Finalists get the stage", "Finalists are featured in the gallery, on social media and at showcases. Every eligible entry still earns a verified record and feedback."],
        ["Real talent, made by you", "You keep ownership of everything you submit. Your work must be created by you: AI-generated images, music, voices, video or writing are not allowed. Normal tools like cameras, editing software, filters and recording apps are fine."],
      ],
      businessTitle: "Business challenges",
      businessText:
        "Sometimes a business brings a real problem, like a poster, a jingle, a short video or an app idea, and talent compete to solve it. These challenges are announced here when available.",
    },

    categories: {
      music: { name: "Music", examples: "Singing, playing an instrument, songwriting, beat making, DJing." },
      "visual-arts": { name: "Visual Arts", examples: "Drawing, painting, illustration, sculpture, crafts." },
      performance: { name: "Performance", examples: "Dance, comedy, acting, spoken word, magic." },
      design: { name: "Design & Fashion", examples: "Graphic design, branding, fashion design, styling." },
      media: { name: "Photo, Film & Media", examples: "Photography, videography, short films, content creation." },
      writing: { name: "Writing", examples: "Poetry, stories, scripts, lyrics." },
      architecture: { name: "Architecture & Interiors", examples: "Concept designs, models, 3D visualizations, interior ideas." },
      technology: { name: "Technology", examples: "Apps, websites, games, prototypes, digital tools." },
      other: { name: "Other Talents", examples: "Something unique that doesn't fit a box? Show us." },
    },

    businesses: {
      eyebrow: "For businesses & sponsors",
      title: "Discover talent before everyone else does.",
      lead: "Every talent on Forgotten Talent has been reviewed for quality and safety. Work with them in three ways.",
      ways: [
        {
          title: "Book talent",
          text: "Need a singer, a band, a comedian, a painter for a live demo or a photographer for your event? Book reviewed talent from our gallery.",
          button: "Request a booking",
          subject: "Forgotten Talent: booking request",
          body: "Hi Jean,\n\nName / business:\nType of talent needed:\nEvent date and place:\nBudget (approximate):\nBest way to reach me:\n\nThanks!",
        },
        {
          title: "Sponsor a showcase",
          text: "Put your name on a Forgotten Talent showcase, open call or prize, and reach a young, local audience while helping talent rise.",
          button: "Become a sponsor",
          subject: "Forgotten Talent: sponsorship",
          body: "Hi Jean,\n\nBusiness / brand:\nWhat we'd like to sponsor:\nBest way to reach me:\n\nThanks!",
        },
        {
          title: "Bring a challenge",
          text: "Have a small real problem, like a poster, a jingle, a short video or an app idea? Talent compete to solve it, and you choose the best result.",
          button: "Bring a challenge",
          subject: "Forgotten Talent: our business has a challenge",
          body: "Hi Jean,\n\nBusiness name:\nWhat we do:\nA small problem we'd like help with:\nBest way to reach us:\n\nThanks!",
        },
      ],
      pilotTag: "Pilot",
      info: [
        ["Starting online, worldwide", "Our first challenges are online and open to creators 18+ around the world. Business partnerships come next, as our audience grows."],
        ["Simple and transparent", "Bookings, purchases and sponsorships are agreed in writing, with clear terms for you and the talent."],
        ["Fair to talent", "Talent keep ownership of their work. Using someone's work requires their agreement and fair payment."],
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      lead: "Questions about a challenge, interested in becoming a pilot partner, or want to take part? Send a message.",
      founder: "Jean Mugabe, Founder",
      email: "Email:",
      city: "Arlington, Texas",
    },

    rules: {
      eyebrow: "Rules",
      title: "Challenge rules",
      intro: "These rules apply to every Forgotten Talent challenge. Please read them before you submit.",
      updated: "Last updated: October 2026",
      sections: [
        ["Who can enter", "Anyone 18 or older can enter, from any country where taking part is allowed by local law. Forgotten Talent organizers and their immediate families cannot win prizes."],
        ["Free to enter", "Entering is always free. No purchase, subscription or payment is ever required."],
        ["How to enter", "Submit your work through the Submit Work page while a challenge is open. During the pilot, an invitation code is required. Each challenge may add its own instructions, such as a theme or a time limit."],
        ["How winners are chosen", "Winners are chosen by our reviewers using the same criteria for everyone: skill, originality, presentation and impact. Winners are never chosen by luck, likes or public voting."],
        ["Prizes", "Each challenge announces its prize, the number of winners and its deadline before it opens. Winners are contacted by email and paid by mobile money or another agreed method, usually within 30 days. Winners may be asked to confirm their identity and age, and are responsible for any taxes in their country."],
        ["Your work and YouTube", "You keep ownership of everything you submit. By entering, you allow Forgotten Talent to review your work and, if selected, show it with your display name on the website, our YouTube channel and social media, including in reaction and highlight videos. You can ask us at any time to stop using your work in new content."],
        ["What is not allowed", "Work that isn't yours, AI-generated work (images, music, voices, video or writing made by AI), hateful, sexual, violent or unsafe content, and false information. Normal tools like cameras, editing software, filters and recording apps are allowed. Entries that break these rules are removed and cannot win."],
        ["Changes and questions", "We may update these rules. Details announced for a specific challenge apply to that challenge. Questions? Write to {email}."],
      ],
    },

    talents: {
      loading: "Loading talents...",
      title: "Talent Gallery",
      subtitle: "Reviewed work from emerging talent. Every entry is checked for quality and safety before it is published.",
      empty: "No work published yet. The first pilot challenge is coming in fall 2026.",
      anonymous: "Anonymous",
      untitled: "Untitled",
      imageAlt: "Published talent",
      shared: "Shared with permission. The creator keeps ownership of this work.",
    },

    upload: {
      title: "Submit Your Work",
      intro:
        "Submit an **audio, video, or image** file for review. Every submission is reviewed before it is published. Open to participants **18 and older**.",
      privacy:
        "**Privacy note:** You can use a display name or initials. Please do **not** share your home address, personal schedule, or other sensitive details. Your email is only used to follow up and is never shown publicly.",
      codeTitle: "Invitation Code *",
      codeHelp: "During the pilot, submissions are by invitation. This prevents spam and keeps every entry review-only.",
      codePlaceholder: "Example: FT-0001",
      aboutTitle: "About You *",
      displayName: "Display name (shown publicly if approved)",
      email: "Email (private, for follow-up)",
      category: "Talent category (optional)",
      workTitle: "Your Work *",
      titlePlaceholder: "Title (e.g., Original song, Portrait painting, Stand-up set)",
      description: "Short description (optional). Tell us about your work and how you made it.",
      fileLabel: "File (audio, video, or image)",
      confirmAdult: "I am 18 years of age or older.",
      confirmOriginal: "This is my own original work, not generated by AI, and I have the right to share any material in it.",
      confirmOwnership:
        "I keep ownership of my work. I give Forgotten Talent permission to review it and, if selected, show it with my display name on the website, the Forgotten Talent YouTube channel and social media.",
      submit: "Submit",
      submitting: "Submitting...",
      errConfirm: "Please confirm all three statements before submitting.",
      errFile: "Please choose an audio, video, or image file.",
      errRequired: "Please fill in all required fields.",
      errCode: "Invalid invitation code or inactive code.",
      errType: "Only audio, video, or image files are allowed.",
      success: "✅ Submitted! This entry is pending admin review.",
      failed: "❌ Failed while {step}. Error: {error}",
      unknownError: "Unknown error",
      steps: {
        start: "starting the submission",
        code: "validating the invitation code",
        upload: "uploading the file",
        url: "getting the file link",
        save: "saving the submission",
      },
    },
  },

  /* =====================================================
     FRANÇAIS
     ===================================================== */
  fr: {
    nav: {
      home: "Accueil",
      how: "Fonctionnement",
      challenges: "Talents et spectacles",
      businesses: "Entreprises",
      gallery: "Galerie",
      upload: "Participer",
      contact: "Contact",
      rules: "Règlement",
      youtube: "YouTube",
      menu: "Ouvrir ou fermer le menu",
      language: "Choisir la langue",
    },
    common: {
      seeCategories: "Voir les catégories de talents",
      bookSponsor: "Réserver ou parrainer un talent",
      submitWork: "Soumettre votre travail",
      watchYoutube: "Regarder sur YouTube",
      readRules: "Lire le règlement",
      contact: "Contact",
    },
    notFound: "Page introuvable",

    footer: {
      tagline: "Ne nous dites pas seulement ce que vous savez faire. Montrez-le-nous.",
      disclaimer:
        "Forgotten Talent est une plateforme indépendante fondée par Jean Mugabe pour aider les créateurs méconnus à être vus, récompensés et mis en relation avec de vraies opportunités.",
    },

    home: {
      eyebrow: "Forgotten Talent • Défis de talents en ligne",
      title: "Ne nous dites pas ce que vous savez faire. Montrez-le-nous.",
      subtitle:
        "Forgotten Talent révèle des talents méconnus : chanteurs, musiciens, artistes, performeurs, designers et bien d'autres. Chaque soumission est évaluée, et les meilleurs sont mis en avant dans notre galerie, lors de spectacles en direct et sur les réseaux sociaux, puis mis en relation avec des réservations, des clients et des opportunités rémunérées.",
      submit: "Soumettre mon travail",
      gallery: "Voir la galerie des talents",
      bookSponsor: "Réserver ou parrainer un talent",
      note: "Ouvert aux participants de 18 ans et plus. Merci de ne pas indiquer d'adresse ou d'emploi du temps personnel dans vos envois.",
      howTitle: "Comment ça marche",
      how: [
        "Le talent soumet son travail (code d'invitation pendant le pilote)",
        "Des évaluateurs notent chaque soumission équitablement, pour la qualité et la sécurité",
        "Les meilleurs sont mis en avant dans notre galerie, nos spectacles et sur les réseaux sociaux",
        "Le talent est mis en relation avec des réservations, des clients et des opportunités rémunérées",
      ],
      pilot: "Le Défi n°1 arrive bientôt. Suivez-nous sur YouTube pour son lancement.",
      missionTitle: "Notre mission",
      missionText:
        "Le talent est partout. Les opportunités, non. Nous découvrons des personnes aux vraies compétences qui manquent de relations, d'abonnés ou d'expérience, nous vérifions ce qu'elles savent faire sur de vrais projets, et nous les aidons à accéder à des projets rémunérés et à des carrières.",
      cards: [
        {
          title: "Pour les talents",
          text: "Musique, art, spectacle, design et plus encore. Participation gratuite, évaluation équitable, retours et un dossier vérifié de vos compétences, même si vous n'êtes pas sélectionné.",
          link: "Voir les catégories →",
        },
        {
          title: "Pour les entreprises et les sponsors",
          text: "Réservez des talents évalués pour vos événements, parrainez un spectacle, achetez des œuvres originales ou proposez un vrai défi à résoudre.",
          link: "Travailler avec nos talents →",
        },
        {
          title: "Dossier de talent vérifié",
          text: "Chaque soumission évaluée, chaque spectacle et chaque projet terminé devient une preuve de compétence, pour que les meilleurs talents passent d'une première scène à un travail rémunéré et à de plus grandes opportunités.",
          link: "Voir la galerie des talents →",
        },
      ],
      ctaTitle: "Participez au Spectacle n°1",
      ctaText: "Talents : montrez-nous ce que vous savez faire. Entreprises et sponsors : aidez-nous à les faire monter sur scène.",
      ctaButton: "Montrez-nous ce que vous savez faire",
    },

    how: {
      eyebrow: "Comment ça marche",
      title: "Découvrir. Prouver. Promouvoir. Connecter. S'élever.",
      lead: "Les réseaux sociaux récompensent l'attention. Le recrutement traditionnel récompense l'expérience. Forgotten Talent est conçu pour rendre visibles les compétences démontrées, pour les personnes qui ont un vrai talent mais qui manquent de relations, d'abonnés ou d'expérience pour se faire remarquer.",
      step: "Étape {n}",
      steps: [
        ["Appel ouvert", "Nous invitons les talents à montrer ce qu'ils savent faire : musique, art, spectacle, design et plus encore. Parfois, une entreprise propose un vrai défi à résoudre."],
        ["Participation gratuite", "Les participants (18 ans et plus) soumettent leur travail. La participation est toujours gratuite."],
        ["Évaluation équitable", "Des évaluateurs formés notent chaque soumission admissible avec la même grille. Pas de vote du public ni de concours de popularité."],
        ["Promouvoir", "Les meilleurs sont mis en avant dans notre galerie, lors de spectacles en direct et sur nos réseaux sociaux."],
        ["Connecter", "Le public, les entreprises et les marques réservent, achètent ou engagent les talents qu'ils découvrent."],
        ["Dossier vérifié", "Les évaluations, les spectacles et les travaux réalisés deviennent des preuves de compétence dans le dossier du participant."],
        ["S'élever", "Les meilleurs talents reçoivent un accompagnement actif vers de plus grandes scènes et opportunités."],
      ],
      valueTitle: "Des avantages pour chaque participant",
      values: [
        ["Chaque soumission admissible", "Une participation vérifiée dans votre dossier, plus une grille d'évaluation commentée de votre travail."],
        ["Finalistes", "Une reconnaissance de finaliste et des retours détaillés des évaluateurs."],
        ["Talents mis en avant", "Une place dans la galerie, lors des spectacles et sur les réseaux sociaux, plus des opportunités de réservation et de vente."],
        ["Progression", "Ceux qui se distinguent régulièrement construisent un dossier qui mène à des opportunités rémunérées directes."],
      ],
      founderTitle: "À propos du fondateur",
      founderText:
        "Je suis Jean Mugabe, étudiant en systèmes d'information avec une mineure en musique à l'Université du Texas à Arlington, et diplômé d'un bootcamp en génie logiciel. J'ai d'abord créé cette plateforme pour aider des enfants oubliés à être vus. En la construisant, j'ai découvert un problème plus large : les personnes talentueuses n'ont aucun moyen fiable de prouver ce qu'elles savent faire. Forgotten Talent est ma réponse : une façon juste et structurée de découvrir les talents et de les aider à s'élever.",
      statusTitle: "Situation actuelle",
      statusText:
        "Disponible aujourd'hui : soumissions sur invitation, vérification par l'administrateur pour la qualité et la sécurité, une galerie publique des travaux approuvés, le règlement des défis et notre chaîne YouTube. Prochaine étape : le Défi n°1, avec des récompenses pour les gagnants et leur travail présenté sur YouTube.",
    },

    challenges: {
      eyebrow: "Talents et spectacles",
      title: "Chaque talent mérite d'être vu.",
      lead: "Quoi que vous fassiez (chanter, jouer, dessiner, monter sur scène, concevoir, construire ou créer), montrez-nous votre meilleur travail. Chaque soumission est évaluée équitablement, et les meilleures sont mises en avant et reliées à de vraies opportunités.",
      comingSoon: "Bientôt",
      openCallTitle: "Forgotten Talent Spectacle n°1 : appel ouvert",
      openCallText:
        "Notre premier appel ouvert en ligne accueille tous les talents, pour les créateurs de 18 ans et plus du monde entier. La participation est gratuite. Les évaluateurs notent chaque participation, et les gagnants sont récompensés et présentés sur notre chaîne YouTube.",
      current: {
        tag: "Défi n°1",
        title: "Montrez-nous votre talent",
        text: "Notre premier défi en ligne est ouvert aux créateurs de 18 ans et plus, dans toutes les catégories. Soumettez votre meilleur travail via le site. Les évaluateurs notent chaque participation, et les gagnants sont récompensés et présentés sur notre chaîne YouTube.",
        prizeLabel: "Prix",
        prize: "Annoncé à l'ouverture du défi",
        deadlineLabel: "Date limite",
        deadline: "Bientôt annoncée",
      },
      categoriesTitle: "Catégories de talents",
      judgedTitle: "Comment les soumissions sont évaluées",
      judged: [
        ["Les mêmes règles pour tous", "Les critères sont publiés avant le début de chaque appel ouvert, et chaque soumission d'une catégorie est évaluée de la même manière."],
        ["Le talent, pas la popularité", "Des évaluateurs formés notent la compétence, l'originalité, la présentation et l'impact. Les abonnés et les « j'aime » ne comptent pas, et il n'y a pas de vote du public."],
        ["La scène pour les finalistes", "Les finalistes sont mis en avant dans la galerie, sur les réseaux sociaux et lors des spectacles. Chaque soumission admissible obtient quand même un dossier vérifié et des retours."],
        ["Du vrai talent, créé par vous", "Vous restez propriétaire de tout ce que vous soumettez. Votre travail doit être créé par vous : les images, musiques, voix, vidéos ou textes générés par l'IA ne sont pas acceptés. Les outils habituels comme les caméras, logiciels de montage, filtres et applications d'enregistrement sont autorisés."],
      ],
      businessTitle: "Défis d'entreprises",
      businessText:
        "Parfois, une entreprise propose un vrai problème, comme une affiche, un jingle, une courte vidéo ou une idée d'application, et les talents rivalisent pour le résoudre. Ces défis sont annoncés ici lorsqu'ils sont disponibles.",
    },

    categories: {
      music: { name: "Musique", examples: "Chant, pratique d'un instrument, écriture de chansons, création de beats, DJ." },
      "visual-arts": { name: "Arts visuels", examples: "Dessin, peinture, illustration, sculpture, artisanat." },
      performance: { name: "Spectacle", examples: "Danse, humour, théâtre, slam, magie." },
      design: { name: "Design et mode", examples: "Design graphique, image de marque, création de mode, stylisme." },
      media: { name: "Photo, film et médias", examples: "Photographie, vidéo, courts métrages, création de contenu." },
      writing: { name: "Écriture", examples: "Poésie, histoires, scénarios, paroles de chansons." },
      architecture: { name: "Architecture et intérieur", examples: "Projets conceptuels, maquettes, visualisations 3D, idées d'aménagement intérieur." },
      technology: { name: "Technologie", examples: "Applications, sites web, jeux, prototypes, outils numériques." },
      other: { name: "Autres talents", examples: "Quelque chose d'unique qui n'entre dans aucune case ? Montrez-le-nous." },
    },

    businesses: {
      eyebrow: "Pour les entreprises et les sponsors",
      title: "Découvrez les talents avant tout le monde.",
      lead: "Chaque talent sur Forgotten Talent a été évalué pour la qualité et la sécurité. Travaillez avec eux de trois façons.",
      ways: [
        {
          title: "Réserver un talent",
          text: "Besoin d'un chanteur, d'un groupe, d'un humoriste, d'un peintre pour une démonstration en direct ou d'un photographe pour votre événement ? Réservez un talent évalué depuis notre galerie.",
          button: "Demander une réservation",
          subject: "Forgotten Talent : demande de réservation",
          body: "Bonjour Jean,\n\nNom / entreprise :\nType de talent recherché :\nDate et lieu de l'événement :\nBudget (approximatif) :\nMeilleur moyen de me joindre :\n\nMerci !",
        },
        {
          title: "Parrainer un spectacle",
          text: "Associez votre nom à un spectacle, un appel ouvert ou un prix Forgotten Talent, et touchez un public jeune et local tout en aidant les talents à s'élever.",
          button: "Devenir sponsor",
          subject: "Forgotten Talent : parrainage",
          body: "Bonjour Jean,\n\nEntreprise / marque :\nCe que nous aimerions parrainer :\nMeilleur moyen de me joindre :\n\nMerci !",
        },
        {
          title: "Proposer un défi",
          text: "Vous avez un petit problème concret, comme une affiche, un jingle, une courte vidéo ou une idée d'application ? Les talents rivalisent pour le résoudre, et vous choisissez le meilleur résultat.",
          button: "Proposer un défi",
          subject: "Forgotten Talent : notre entreprise a un défi",
          body: "Bonjour Jean,\n\nNom de l'entreprise :\nNotre activité :\nUn petit problème pour lequel nous aimerions de l'aide :\nMeilleur moyen de nous joindre :\n\nMerci !",
        },
      ],
      pilotTag: "Pilote",
      info: [
        ["En ligne, partout dans le monde", "Nos premiers défis se déroulent en ligne et sont ouverts aux créateurs de 18 ans et plus du monde entier. Les partenariats avec les entreprises viendront ensuite, avec la croissance de notre audience."],
        ["Simple et transparent", "Les réservations, achats et parrainages sont convenus par écrit, avec des conditions claires pour vous et pour le talent."],
        ["Équitable pour les talents", "Les talents restent propriétaires de leur travail. Utiliser l'œuvre de quelqu'un nécessite son accord et une rémunération équitable."],
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Contactez-nous",
      lead: "Une question sur un défi, envie de devenir partenaire du pilote ou de participer ? Envoyez-nous un message.",
      founder: "Jean Mugabe, fondateur",
      email: "E-mail :",
      city: "Arlington, Texas",
    },

    rules: {
      eyebrow: "Règlement",
      title: "Règlement des défis",
      intro: "Ce règlement s'applique à tous les défis Forgotten Talent. Merci de le lire avant de participer.",
      updated: "Dernière mise à jour : octobre 2026",
      sections: [
        ["Qui peut participer", "Toute personne de 18 ans ou plus peut participer, depuis tout pays où la loi locale le permet. Les organisateurs de Forgotten Talent et leur famille proche ne peuvent pas gagner de prix."],
        ["Participation gratuite", "La participation est toujours gratuite. Aucun achat, abonnement ou paiement n'est jamais exigé."],
        ["Comment participer", "Soumettez votre travail via la page Participer pendant qu'un défi est ouvert. Pendant le pilote, un code d'invitation est nécessaire. Chaque défi peut ajouter ses propres consignes, comme un thème ou une durée maximale."],
        ["Comment les gagnants sont choisis", "Les gagnants sont choisis par nos évaluateurs selon les mêmes critères pour tous : compétence, originalité, présentation et impact. Ils ne sont jamais choisis au hasard, selon les « j'aime » ou par vote du public."],
        ["Prix", "Chaque défi annonce son prix, le nombre de gagnants et sa date limite avant son ouverture. Les gagnants sont contactés par e-mail et payés par mobile money ou par un autre moyen convenu, généralement sous 30 jours. Ils peuvent devoir confirmer leur identité et leur âge, et restent responsables des impôts éventuels dans leur pays."],
        ["Votre travail et YouTube", "Vous restez propriétaire de tout ce que vous soumettez. En participant, vous autorisez Forgotten Talent à évaluer votre travail et, s'il est sélectionné, à le montrer avec votre nom affiché sur le site, notre chaîne YouTube et les réseaux sociaux, y compris dans des vidéos de réaction et des compilations. Vous pouvez à tout moment nous demander de ne plus utiliser votre travail dans de nouveaux contenus."],
        ["Ce qui est interdit", "Les œuvres qui ne sont pas les vôtres, les œuvres générées par l'IA (images, musiques, voix, vidéos ou textes créés par l'IA), les contenus haineux, sexuels, violents ou dangereux, et les fausses informations. Les outils habituels comme les caméras, logiciels de montage, filtres et applications d'enregistrement sont autorisés. Les participations qui enfreignent ces règles sont retirées et ne peuvent pas gagner."],
        ["Modifications et questions", "Nous pouvons mettre à jour ce règlement. Les détails annoncés pour un défi précis s'appliquent à ce défi. Une question ? Écrivez-nous à {email}."],
      ],
    },

    talents: {
      loading: "Chargement des talents...",
      title: "Galerie des talents",
      subtitle: "Des travaux évalués de talents émergents. Chaque soumission est vérifiée pour la qualité et la sécurité avant d'être publiée.",
      empty: "Aucun travail publié pour le moment. Le premier défi pilote arrive à l'automne 2026.",
      anonymous: "Anonyme",
      untitled: "Sans titre",
      imageAlt: "Talent publié",
      shared: "Partagé avec autorisation. Le créateur reste propriétaire de cette œuvre.",
    },

    upload: {
      title: "Soumettre votre travail",
      intro:
        "Envoyez un fichier **audio, vidéo ou image** pour évaluation. Chaque soumission est vérifiée avant d'être publiée. Ouvert aux participants de **18 ans et plus**.",
      privacy:
        "**Vie privée :** vous pouvez utiliser un pseudonyme ou vos initiales. Merci de **ne pas** indiquer votre adresse, votre emploi du temps ou d'autres informations sensibles. Votre e-mail sert uniquement à vous recontacter et n'est jamais affiché publiquement.",
      codeTitle: "Code d'invitation *",
      codeHelp: "Pendant le pilote, les soumissions se font sur invitation. Cela évite le spam et garantit que chaque soumission est vérifiée.",
      codePlaceholder: "Exemple : FT-0001",
      aboutTitle: "À propos de vous *",
      displayName: "Nom affiché (visible publiquement si approuvé)",
      email: "E-mail (privé, pour vous recontacter)",
      category: "Catégorie de talent (facultatif)",
      workTitle: "Votre travail *",
      titlePlaceholder: "Titre (ex. : chanson originale, portrait peint, numéro d'humour)",
      description: "Courte description (facultatif). Parlez-nous de votre travail et de la façon dont vous l'avez réalisé.",
      fileLabel: "Fichier (audio, vidéo ou image)",
      confirmAdult: "J'ai 18 ans ou plus.",
      confirmOriginal: "Il s'agit de mon œuvre originale, non générée par l'IA, et j'ai le droit de partager tout ce qu'elle contient.",
      confirmOwnership:
        "Je reste propriétaire de mon travail. J'autorise Forgotten Talent à l'évaluer et, s'il est sélectionné, à le montrer avec mon nom affiché sur le site, la chaîne YouTube de Forgotten Talent et les réseaux sociaux.",
      submit: "Envoyer",
      submitting: "Envoi en cours...",
      errConfirm: "Veuillez confirmer les trois déclarations avant d'envoyer.",
      errFile: "Veuillez choisir un fichier audio, vidéo ou image.",
      errRequired: "Veuillez remplir tous les champs obligatoires.",
      errCode: "Code d'invitation invalide ou inactif.",
      errType: "Seuls les fichiers audio, vidéo ou image sont acceptés.",
      success: "✅ Envoyé ! Cette soumission attend la vérification de l'administrateur.",
      failed: "❌ Échec pendant l'étape : {step}. Erreur : {error}",
      unknownError: "Erreur inconnue",
      steps: {
        start: "démarrage de l'envoi",
        code: "vérification du code d'invitation",
        upload: "envoi du fichier",
        url: "récupération du lien du fichier",
        save: "enregistrement de la soumission",
      },
    },
  },

  /* =====================================================
     IKINYARWANDA
     ===================================================== */
  rw: {
    nav: {
      home: "Ahabanza",
      how: "Uko bikora",
      challenges: "Impano n'ibitaramo",
      businesses: "Ku bigo",
      gallery: "Imurika",
      upload: "Ohereza",
      contact: "Twandikire",
      rules: "Amategeko",
      youtube: "YouTube",
      menu: "Fungura cyangwa ufunge menu",
      language: "Hitamo ururimi",
    },
    common: {
      seeCategories: "Reba ibyiciro by'impano",
      bookSponsor: "Tumira cyangwa ushyigikire umunyempano",
      submitWork: "Ohereza igihangano cyawe",
      watchYoutube: "Reba kuri YouTube",
      readRules: "Soma amategeko",
      contact: "Twandikire",
    },
    notFound: "Iyi paji ntiyabonetse",

    footer: {
      tagline: "Ntutubwire gusa ibyo ushoboye. Bitwereke.",
      disclaimer:
        "Forgotten Talent ni urubuga rwigenga rwashinzwe na Jean Mugabe kugira ngo rufashe abanyempano birengagijwe kubonwa, guhembwa no guhuzwa n'amahirwe nyayo.",
    },

    home: {
      eyebrow: "Forgotten Talent • Amarushanwa y'impano kuri interineti",
      title: "Ntutubwire ibyo ushoboye. Bitwereke.",
      subtitle:
        "Forgotten Talent ivumbura impano zirengagijwe: abaririmbyi, abacuranzi, abanyabugeni, abakinnyi, abahanga mu gushushanya (designers) n'abandi. Buri gihangano cyoherejwe kirasuzumwa, maze ibyiza kurusha ibindi bikamenyekanishwa mu imurika ryacu, mu bitaramo bibera imbonankubone no ku mbuga nkoranyambaga, hanyuma ba nyirabyo bagahuzwa n'ababatumira, abakiriya n'amahirwe y'akazi gahemberwa.",
      submit: "Ohereza igihangano cyawe",
      gallery: "Reba imurika ry'impano",
      bookSponsor: "Tumira cyangwa ushyigikire umunyempano",
      note: "Bifunguriwe abafite imyaka 18 kuzamura. Ntimushyire aho mutuye cyangwa gahunda zanyu bwite mu byo mwohereza.",
      howTitle: "Uko bikora",
      how: [
        "Umunyempano yohereza igihangano (hakoreshwa kode y'ubutumire muri iki gihe cy'igerageza)",
        "Abasuzumyi baha amanota buri gihangano mu buryo buboneye, bagendeye ku bwiza n'umutekano",
        "Ibyiza kurusha ibindi bigaragazwa mu imurika ryacu, mu bitaramo no ku mbuga nkoranyambaga",
        "Umunyempano ahuzwa n'abamutumira, abakiriya n'amahirwe y'akazi gahemberwa",
      ],
      pilot: "Irushanwa rya 1 riraza vuba. Dukurikire kuri YouTube kugira ngo umenye igihe rizatangirira.",
      missionTitle: "Intego yacu",
      missionText:
        "Impano ziri hose. Amahirwe ntari hose. Tuvumbura abantu bafite ubushobozi nyabwo ariko batagira abo baziranye, ababakurikira cyangwa uburambe, tukagenzura ibyo bashoboye dukoresheje imirimo nyayo, kandi tukabafasha gutera imbere bakabona imishinga ihemberwa n'imyuga.",
      cards: [
        {
          title: "Ku banyempano",
          text: "Umuziki, ubugeni, ibitaramo, design n'ibindi. Kwitabira ni ubuntu, isuzuma riboneye, inama ku gihangano cyawe n'inyandiko yemejwe y'ibyo ushoboye, n'iyo waba udatoranyijwe.",
          link: "Reba ibyiciro by'impano →",
        },
        {
          title: "Ku bigo n'abaterankunga",
          text: "Tumira abanyempano basuzumwe mu birori byanyu, mutere inkunga igitaramo, mugure ibihangano by'umwimerere, cyangwa muzane ikibazo nyacyo abanyempano bakemura.",
          link: "Korana n'abanyempano bacu →",
        },
        {
          title: "Inyandiko y'Impano Yemejwe",
          text: "Buri gihangano cyasuzumwe, buri gitaramo na buri mushinga warangiye biba ikimenyetso cy'ubushobozi, ku buryo abanyempano beza bava ku rubyiniro rwa mbere bakagera ku kazi gahemberwa n'amahirwe akomeye kurushaho.",
          link: "Reba imurika ry'impano →",
        },
      ],
      ctaTitle: "Ba umwe mu bazitabira Igitaramo cya 1",
      ctaText: "Banyempano: nimutwereke ibyo mushoboye. Bigo n'abaterankunga: dufashe kubageza ku rubyiniro.",
      ctaButton: "Twereke ibyo ushoboye",
    },

    how: {
      eyebrow: "Uko bikora",
      title: "Vumbura. Garagaza. Menyekanisha. Huza. Zamuka.",
      lead: "Imbuga nkoranyambaga zihemba abakurura amaso. Uburyo busanzwe bwo gutanga akazi buhemba uburambe. Forgotten Talent yubakiwe kugaragaza ubushobozi bwagaragajwe, ku bantu bafite ubuhanga nyabwo ariko batagira abo baziranye, ababakurikira cyangwa amateka y'ibyo bakoze ngo bamenyekane.",
      step: "Intambwe ya {n}",
      steps: [
        ["Ubutumire rusange", "Dutumira abanyempano ngo batwereke ibyo bashoboye: umuziki, ubugeni, ibitaramo, design n'ibindi. Rimwe na rimwe, ikigo kizana ikibazo nyacyo gikeneye gukemurwa."],
        ["Kwitabira ni ubuntu", "Abitabira (bafite imyaka 18 kuzamura) bohereza ibihangano byabo. Kwitabira buri gihe ni ubuntu."],
        ["Isuzuma riboneye", "Abasuzumyi bahuguwe baha amanota buri gihangano cyujuje ibisabwa bakoresheje ibipimo bimwe. Nta matora y'abaturage, nta n'amarushanwa yo kumenyekana."],
        ["Kumenyekanisha", "Ibyiza kurusha ibindi bigaragazwa mu imurika ryacu, mu bitaramo bibera imbonankubone no ku mbuga nkoranyambaga zacu."],
        ["Guhuza", "Abakunzi, ibigo n'ibirango batumira, bagura cyangwa baha akazi abanyempano bavumbuye."],
        ["Inyandiko yemejwe", "Amasuzuma, ibitaramo n'imirimo yarangiye biba ibimenyetso by'ubushobozi mu nyandiko y'uwitabiriye."],
        ["Kuzamuka", "Abanyempano b'indashyikirwa bahabwa ubufasha bufatika bwo kugera ku nzego n'amahirwe akomeye kurushaho."],
      ],
      valueTitle: "Inyungu kuri buri wese witabiriye",
      values: [
        ["Buri gihangano cyujuje ibisabwa", "Icyemezo cy'uko witabiriye mu nyandiko yawe, hamwe n'amanota n'inama ku gihangano cyawe."],
        ["Abageze ku cyiciro cya nyuma", "Kumenyekana nk'uwageze ku cyiciro cya nyuma n'inama zirambuye z'abasuzumyi."],
        ["Abanyempano bagaragajwe", "Umwanya mu imurika, mu bitaramo no ku mbuga nkoranyambaga, hamwe n'amahirwe yo gutumirwa no kugurisha."],
        ["Gutera imbere", "Abitwara neza buri gihe bubaka inyandiko ibageza ku mahirwe y'akazi gahemberwa."],
      ],
      founderTitle: "Ibyerekeye uwashinze",
      founderText:
        "Nitwa Jean Mugabe. Niga Information Systems nk'ishami ry'ibanze n'Umuziki nk'ishami rya kabiri muri Kaminuza ya Texas i Arlington, kandi narangije amahugurwa yihuse (bootcamp) mu gukora porogaramu za mudasobwa. Natangije uru rubuga mbanje kugira ngo mfashe abana birengagijwe kubonwa. Kurwubaka byanyeretse ikibazo kinini kurushaho: abantu bafite impano nta buryo bwizewe bafite bwo kugaragaza ibyo bashoboye. Forgotten Talent ni igisubizo cyanjye: uburyo buboneye kandi buteguwe neza bwo kuvumbura impano no kuzifasha gutera imbere.",
      statusTitle: "Aho umushinga ugeze",
      statusText:
        "Ibikora ubu: kohereza ibihangano hakoreshejwe ubutumire, isuzuma ry'umuyobozi ku bwiza n'umutekano, imurika rusange ry'ibihangano byemejwe, amategeko y'amarushanwa n'urubuga rwacu rwa YouTube. Igikurikiyeho: Irushanwa rya 1, aho abatsinze bazahembwa kandi ibihangano byabo bikagaragazwa kuri YouTube.",
    },

    challenges: {
      eyebrow: "Impano n'ibitaramo",
      title: "Buri bwoko bw'impano bukwiye kubonwa.",
      lead: "Icyo waba ukora cyose (kuririmba, gucuranga, gushushanya, gukina, guhanga, kubaka cyangwa kurema), twereke igihangano cyawe cyiza kurusha ibindi. Buri gihangano gisuzumwa mu buryo buboneye, maze ibyiza kurusha ibindi bikamenyekanishwa kandi bigahuzwa n'amahirwe nyayo.",
      comingSoon: "Biraza vuba",
      openCallTitle: "Igitaramo cya 1 cya Forgotten Talent: Ubutumire rusange",
      openCallText:
        "Ubutumire bwacu rusange bwa mbere kuri interineti bwakira ubwoko bwose bw'impano ku bahanzi bafite imyaka 18 kuzamura ku isi hose. Kwitabira ni ubuntu. Abasuzumyi baha amanota buri gihangano, maze abatsinze bagahembwa kandi bakagaragazwa ku rubuga rwacu rwa YouTube.",
      current: {
        tag: "Irushanwa rya 1",
        title: "Twereke impano yawe",
        text: "Irushanwa ryacu rya mbere rikorerwa kuri interineti rifunguriwe abahanzi bafite imyaka 18 kuzamura, mu byiciro byose by'impano. Ohereza igihangano cyawe cyiza kurusha ibindi unyuze ku rubuga. Abasuzumyi baha amanota buri gihangano, maze abatsinze bagahembwa kandi bakagaragazwa ku rubuga rwacu rwa YouTube.",
        prizeLabel: "Igihembo",
        prize: "Kizatangazwa irushanwa nirifungura",
        deadlineLabel: "Itariki ntarengwa",
        deadline: "Izatangazwa vuba",
      },
      categoriesTitle: "Ibyiciro by'impano",
      judgedTitle: "Uko ibihangano bisuzumwa",
      judged: [
        ["Amategeko amwe kuri bose", "Ibipimo bitangazwa mbere y'uko ubutumire rusange butangira, kandi buri gihangano mu cyiciro kimwe gisuzumwa mu buryo bumwe."],
        ["Ubushobozi, si ukumenyekana", "Abasuzumyi bahuguwe batanga amanota ku buhanga, umwimerere, uko igihangano kigaragazwa n'uruhare rwacyo. Umubare w'abagukurikira n'abakunze (likes) ntubarwa, kandi nta matora y'abaturage."],
        ["Abageze ku cyiciro cya nyuma bajya ku rubyiniro", "Abageze ku cyiciro cya nyuma bagaragazwa mu imurika, ku mbuga nkoranyambaga no mu bitaramo. Buri gihangano cyujuje ibisabwa nacyo kibona inyandiko yemejwe n'inama."],
        ["Impano nyakuri, wihangiye", "Ukomeza kuba nyiri ibyo wohereje byose. Igihangano cyawe kigomba kuba wakihangiye ubwawe: amafoto, umuziki, amajwi, videwo cyangwa inyandiko byakozwe n'ubwenge buhangano (AI) ntibyemewe. Ibikoresho bisanzwe nka kamera, porogaramu zo gutunganya amashusho, filtres na porogaramu zo gufata amajwi biremewe."],
      ],
      businessTitle: "Ibibazo by'ibigo",
      businessText:
        "Rimwe na rimwe, ikigo kizana ikibazo nyacyo, nk'icyapa, indirimbo y'iyamamaza (jingle), videwo ngufi cyangwa igitekerezo cya porogaramu, maze abanyempano bagahatanira kugikemura. Ibyo bibazo bitangarizwa hano iyo bihari.",
    },

    categories: {
      music: { name: "Umuziki", examples: "Kuririmba, gucuranga igikoresho cy'umuziki, kwandika indirimbo, gukora injyana (beats), kuvanga umuziki (DJ)." },
      "visual-arts": { name: "Ubugeni", examples: "Gushushanya, gusiga amarangi, ibishushanyo by'ibitabo, kubumba no kubaza ibishusho, ubukorikori." },
      performance: { name: "Ibitaramo n'imikino", examples: "Imbyino, urwenya, gukina amakinamico, imivugo ivugwa (spoken word), imikino y'ubuhanga (magic)." },
      design: { name: "Design n'imideli", examples: "Gushushanya ibyapa n'ibirango (graphic design), kubaka isura y'ikirango, guhanga imideli, gutunganya imyambarire." },
      media: { name: "Amafoto, filime n'itangazamakuru", examples: "Gufotora, gufata amashusho, filime ngufi, gukora ibiganiro byo ku mbuga (content)." },
      writing: { name: "Ubwanditsi", examples: "Imivugo, inkuru, inyandiko za filime n'amakinamico, amagambo y'indirimbo." },
      architecture: { name: "Ubwubatsi n'imitako y'inzu", examples: "Ibishushanyo by'ibitekerezo, ingero z'inyubako (models), amashusho ya 3D, ibitekerezo by'imitako yo mu nzu." },
      technology: { name: "Ikoranabuhanga", examples: "Porogaramu za telefoni, imbuga za interineti, imikino, ingero z'ibikoresho (prototypes), ibikoresho by'ikoranabuhanga." },
      other: { name: "Izindi mpano", examples: "Ufite ikintu kidasanzwe kitajya mu cyiciro na kimwe? Kitwereke." },
    },

    businesses: {
      eyebrow: "Ku bigo n'abaterankunga",
      title: "Vumbura impano mbere y'abandi bose.",
      lead: "Buri munyempano uri kuri Forgotten Talent yasuzumwe ku bwiza n'umutekano. Mushobora gukorana na bo mu buryo butatu.",
      ways: [
        {
          title: "Tumira umunyempano",
          text: "Ukeneye umuririmbyi, itsinda ry'abacuranzi, umunyarwenya, umunyabugeni ushushanya imbonankubone cyangwa umufotozi mu birori byawe? Tumira umunyempano wasuzumwe uvuye mu imurika ryacu.",
          button: "Saba gutumira",
          subject: "Forgotten Talent: gusaba gutumira umunyempano",
          body: "Muraho Jean,\n\nIzina / ikigo:\nUbwoko bw'umunyempano nkeneye:\nItariki n'aho ibirori bizabera:\nIngengo y'imari (hafi):\nUburyo bwiza bwo kumbona:\n\nMurakoze!",
        },
        {
          title: "Tera inkunga igitaramo",
          text: "Shyira izina ryawe ku gitaramo, ku butumire rusange cyangwa ku gihembo cya Forgotten Talent, ugere ku rubyiruko rwo mu karere kawe, unafasha abanyempano gutera imbere.",
          button: "Ba umuterankunga",
          subject: "Forgotten Talent: gutera inkunga",
          body: "Muraho Jean,\n\nIkigo / ikirango:\nIcyo twifuza gutera inkunga:\nUburyo bwiza bwo kumbona:\n\nMurakoze!",
        },
        {
          title: "Zana ikibazo",
          text: "Mufite ikibazo gito nyacyo, nk'icyapa, indirimbo y'iyamamaza, videwo ngufi cyangwa igitekerezo cya porogaramu? Abanyempano bahatanira kugikemura, maze mugahitamo igisubizo cyiza kurusha ibindi.",
          button: "Zana ikibazo",
          subject: "Forgotten Talent: ikigo cyacu gifite ikibazo",
          body: "Muraho Jean,\n\nIzina ry'ikigo:\nIbyo dukora:\nIkibazo gito twifuza gufashwamo:\nUburyo bwiza bwo kutubona:\n\nMurakoze!",
        },
      ],
      pilotTag: "Igerageza",
      info: [
        ["Duhereye kuri interineti, ku isi hose", "Amarushanwa yacu ya mbere abera kuri interineti kandi afunguriwe abahanzi bafite imyaka 18 kuzamura ku isi hose. Ubufatanye n'ibigo buzaza nyuma, uko abadukurikira biyongera."],
        ["Byoroshye kandi bisobanutse", "Gutumira, kugura no gutera inkunga byemeranywaho mu nyandiko, hamwe n'amabwiriza asobanutse kuri wowe no ku munyempano."],
        ["Biboneye ku banyempano", "Abanyempano bakomeza kuba ba nyiri ibihangano byabo. Gukoresha igihangano cy'undi bisaba ko abyemera kandi akishyurwa mu buryo buboneye."],
      ],
    },

    contact: {
      eyebrow: "Twandikire",
      title: "Tuvugane",
      lead: "Ufite ikibazo ku irushanwa runaka, wifuza kuba umufatanyabikorwa mu igerageza, cyangwa ushaka kwitabira? Twandikire.",
      founder: "Jean Mugabe, Uwashinze",
      email: "Imeri:",
      city: "Arlington, muri Texas",
    },

    rules: {
      eyebrow: "Amategeko",
      title: "Amategeko y'amarushanwa",
      intro: "Aya mategeko areba amarushanwa yose ya Forgotten Talent. Turabasaba kuyasoma mbere yo kohereza.",
      updated: "Byavuguruwe bwa nyuma: Ukwakira 2026",
      sections: [
        ["Abemerewe kwitabira", "Umuntu wese ufite imyaka 18 kuzamura ashobora kwitabira, aturutse mu gihugu icyo ari cyo cyose amategeko yacyo abyemera. Abategura Forgotten Talent n'imiryango yabo ya hafi ntibashobora gutsindira ibihembo."],
        ["Kwitabira ni ubuntu", "Kwitabira buri gihe ni ubuntu. Nta kugura, kwiyandikisha ku bwishyu cyangwa kwishyura bisabwa."],
        ["Uko witabira", "Ohereza igihangano cyawe unyuze ku ipaji ya Ohereza igihe irushanwa rifunguye. Muri iki gihe cy'igerageza, hasabwa kode y'ubutumire. Buri rushanwa rishobora kongeraho amabwiriza yaryo, nk'insanganyamatsiko cyangwa igihe ntarengwa cya videwo."],
        ["Uko abatsinze batoranywa", "Abatsinze batoranywa n'abasuzumyi bacu hakoreshejwe ibipimo bimwe kuri bose: ubuhanga, umwimerere, uko igihangano kigaragazwa n'uruhare rwacyo. Abatsinze ntibatoranywa ku bw'amahirwe, ku mubare w'abakunze (likes) cyangwa ku matora y'abaturage."],
        ["Ibihembo", "Buri rushanwa ritangaza igihembo cyaryo, umubare w'abazatsinda n'itariki ntarengwa mbere y'uko rifungura. Abatsinze bamenyeshwa kuri imeri kandi bakishyurwa hakoreshejwe Mobile Money cyangwa ubundi buryo twumvikanyeho, akenshi mu minsi 30. Abatsinze bashobora gusabwa kwemeza umwirondoro n'imyaka yabo, kandi ni bo bishyura imisoro yose isabwa mu gihugu cyabo."],
        ["Igihangano cyawe na YouTube", "Ukomeza kuba nyiri ibyo wohereje byose. Iyo witabiriye, uha Forgotten Talent uruhushya rwo gusuzuma igihangano cyawe, kandi nikimara gutoranywa, kukigaragaza hamwe n'izina ryawe ku rubuga, ku rubuga rwacu rwa YouTube no ku mbuga nkoranyambaga, harimo no muri videwo zitanga ibitekerezo ku bihangano (reaction) n'iz'incamake. Igihe icyo ari cyo cyose, ushobora kudusaba kureka gukoresha igihangano cyawe mu bikorwa bishya."],
        ["Ibitemewe", "Igihangano kitari icyawe, ibihangano byakozwe na AI (amafoto, umuziki, amajwi, videwo cyangwa inyandiko byakozwe na AI), ibikorwa by'urwango, iby'urukozasoni, iby'urugomo cyangwa ibishyira abantu mu kaga, n'amakuru y'ibinyoma. Ibikoresho bisanzwe nka kamera, porogaramu zo gutunganya amashusho, filtres na porogaramu zo gufata amajwi biremewe. Ibihangano binyuranyije n'aya mategeko bivanwaho kandi ntibishobora gutsinda."],
        ["Impinduka n'ibibazo", "Dushobora kuvugurura aya mategeko. Ibisobanuro bitangajwe ku irushanwa runaka ni byo bikurikizwa kuri iryo rushanwa. Ufite ikibazo? Twandikire kuri {email}."],
      ],
    },

    talents: {
      loading: "Impano ziri kuza...",
      title: "Imurika ry'impano",
      subtitle: "Ibihangano byasuzumwe by'abanyempano bakizamuka. Buri gihangano kigenzurwa ku bwiza n'umutekano mbere yo gutangazwa.",
      empty: "Nta gihangano kiratangazwa. Irushanwa rya mbere ry'igerageza rizaba mu muhindo wa 2026.",
      anonymous: "Utavuzwe izina",
      untitled: "Nta mutwe",
      imageAlt: "Impano yatangajwe",
      shared: "Byasangijwe habonetse uruhushya. Uwabihanze akomeza kuba nyirabyo.",
    },

    upload: {
      title: "Ohereza igihangano cyawe",
      intro:
        "Ohereza dosiye **y'amajwi, videwo cyangwa ifoto** kugira ngo isuzumwe. Buri gihangano gisuzumwa mbere yo gutangazwa. Bifunguriwe **abafite imyaka 18 kuzamura**.",
      privacy:
        "**Icyitonderwa ku buzima bwite:** Ushobora gukoresha izina ry'ubuhanzi cyangwa inyuguti z'ibanze. **Ntushyireho** aho utuye, gahunda zawe bwite cyangwa andi makuru y'ibanga. Imeri yawe ikoreshwa gusa mu kukuvugisha kandi ntigaragazwa ku mugaragaro.",
      codeTitle: "Kode y'ubutumire *",
      codeHelp: "Muri iki gihe cy'igerageza, kohereza bikorwa ku butumire. Ibi bikumira ubutumwa butifuzwa (spam) kandi bigatuma buri gihangano kibanza gusuzumwa.",
      codePlaceholder: "Urugero: FT-0001",
      aboutTitle: "Ibyerekeye wowe *",
      displayName: "Izina rizagaragara (niba igihangano cyemejwe)",
      email: "Imeri (ni ibanga, kugira ngo tukuvugishe)",
      category: "Icyiciro cy'impano (si ngombwa)",
      workTitle: "Igihangano cyawe *",
      titlePlaceholder: "Umutwe (urugero: Indirimbo y'umwimerere, Ifoto ishushanyije, Urwenya)",
      description: "Ibisobanuro bigufi (si ngombwa). Tubwire ibyerekeye igihangano cyawe n'uko wagikoze.",
      fileLabel: "Dosiye (amajwi, videwo cyangwa ifoto)",
      confirmAdult: "Mfite imyaka 18 cyangwa irenga.",
      confirmOriginal: "Iki ni igihangano cyanjye cy'umwimerere, kitakozwe na AI, kandi mfite uburenganzira bwo gusangiza ibikirimo byose.",
      confirmOwnership:
        "Nkomeza kuba nyiri igihangano cyanjye. Mpaye Forgotten Talent uruhushya rwo kugisuzuma, kandi nikimara gutoranywa, kukigaragaza hamwe n'izina ryanjye ku rubuga, ku rubuga rwa YouTube rwa Forgotten Talent no ku mbuga nkoranyambaga.",
      submit: "Ohereza",
      submitting: "Birimo koherezwa...",
      errConfirm: "Banza wemeze ibintu bitatu byose mbere yo kohereza.",
      errFile: "Hitamo dosiye y'amajwi, videwo cyangwa ifoto.",
      errRequired: "Uzuza ahasabwa hose.",
      errCode: "Kode y'ubutumire ntiyemewe cyangwa ntigikora.",
      errType: "Hemewe gusa dosiye z'amajwi, videwo cyangwa amafoto.",
      success: "✅ Byoherejwe! Iki gihangano gitegereje gusuzumwa n'umuyobozi.",
      failed: "❌ Byanze mu gihe cyo {step}. Ikosa: {error}",
      unknownError: "Ikosa ritazwi",
      steps: {
        start: "gutangira kohereza",
        code: "kugenzura kode y'ubutumire",
        upload: "kohereza dosiye",
        url: "kubona aho dosiye iherereye",
        save: "kubika ibyoherejwe",
      },
    },
  },
};
