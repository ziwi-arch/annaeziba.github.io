const data = {
  date:        "2026-10-24T14:00:00",
  rsvp:       "#",
  footerDate: "24 ottobre 2026 • Varese",

  churchMap: "https://www.google.com/maps/search/?api=1&query=Chiesa+di+Santa+Maria+del+Monte+Varese",
  venueMap:  "https://www.google.com/maps/search/?api=1&query=Istituto+De+Filippi+Varese",

  fr: {
    nav: { home: "Home", rsvp: "RSVP", info: "Info", stay: "Séjour", gifts: "Liste", about: "Nous" },
    mapLink: "Voir sur Maps →",

    subtitle:   "24 octobre 2026 • Varese, Italie",

    rsvp: "https://forms.gle/jyVtb3jzDnzdfGWeA",

    rsvpEyebrow: "Répondre",
    rsvpTitle:   "Serez-vous là ?",
    rsvpSub:     "Faites-nous savoir avant le 1er septembre 2026.",
    rsvpBtn:     "Confirmer",

    infoTitle:   "Informations",
    churchLabel:   "Cérémonie",
    churchAddress: "Chiesa di Santa Maria del Monte, Varese",
    churchTime:    "11h00",
    accessNote: [
      "🏔️ L'église se trouve en hauteur — le dernier tronçon se fait à pied sur un chemin pavé.",
      "🛗 Un ascenseur est disponible depuis le parking pour ceux qui en ont besoin.",
      "🅿️ Les places de stationnement sont limitées. Nous envisageons d'organiser des navettes depuis le lieu de réception jusqu'à l'église (aller-retour). Si vous êtes intéressé·e, merci de l'indiquer dans le formulaire RSVP.",
    ],
    venueLabel:  "Réception",
    venue:       "Istituto De Filippi, Varese",
    stayLabel:   "Hébergement",
    stayTitle:   "Où dormir",
    stayMapLink:  "Maps →",
    stayWebLink:  "Site →",

    howToGet: "Comment arriver à Varese",
    trenord: "Acheter les billets sur Trenord →",
    routes: [
      {
        from: "✈️ Aéroport Malpensa",
        options: [
          { icon: "🚆", desc: "Train direct depuis Malpensa Terminal 1 ou Terminal 2 → Varese", duration: "~45 min" },
        ],
      },
      {
        from: "🏙️ Milan",
        options: [
          { icon: "🚆", desc: "Train direct depuis Milano Cadorna → Varese Nord",               duration: "~1h" },
          { icon: "🚆", desc: "Train direct depuis Milano Garibaldi → Varese",                  duration: "~1h" },
        ],
      },
    ],

    giftsTitle:  "Liste de mariage",
    giftIntro: "Si vous souhaitez nous aider à commencer ce nouveau chapitre de notre famille, vous pouvez nous offrir l’un des objets ci-dessous ou contribuer à notre voyage de noces en Chine ❤️",
    offrirBtn:   "Offrir",

    aboutTitle:  "Les mariés",
    aboutSub:    "Clique sur la photo pour une surprise",
    about:       "On a hâte de pouvoir fêter notre mariage avec toi !",
  },

  it: {
    nav: { home: "Home", rsvp: "RSVP", info: "Info", stay: "Soggiorno", gifts: "Lista", about: "Noi" },
    mapLink: "Vedi su Maps →",

    subtitle:   "24 ottobre 2026 • Varese, Italia",

    rsvp: "https://forms.gle/m83yreZxVGcN8cgx7",
    rsvpEyebrow: "Rispondere",
    rsvpTitle:   "Ci sarai?",
    rsvpSub:     "Facci sapere entro il 1° settembre 2026.",
    rsvpBtn:     "Confermare",

    infoTitle:   "Informazioni",
    churchLabel:   "Celebrazione",
    churchAddress: "Chiesa di Santa Maria del Monte, Varese",
    churchTime:    "ore 11:00",
    accessNote: [
      "🏔️ La chiesa si trova in altura — l'ultimo tratto si percorre a piedi su un sentiero acciottolato.",
      "🛗 È disponibile un ascensore dal parcheggio per chi ne ha bisogno.",
      "🅿️ I posti auto sono limitati. Stiamo valutando di organizzare delle navette dal luogo del ricevimento alla chiesa (andata e ritorno). Se sei interessato/a, segnalalo nel modulo RSVP.",
    ],
    venueLabel:  "Ricevimento",
    venue:       "Istituto De Filippi, Varese",
    stayLabel:   "Pernottamento",
    stayTitle:   "Dove dormire",
    stayMapLink:  "Maps →",
    stayWebLink:  "Sito →",

    howToGet: "Come raggiungere Varese",
    trenord: "Acquista i biglietti su Trenord →",
    routes: [
      {
        from: "✈️ Aeroporto Malpensa",
        options: [
          { icon: "🚆", desc: "Treno diretto da Malpensa Terminal 1 o Terminal 2 → Varese", duration: "~45 min" },
        ],
      },
      {
        from: "🏙️ Milano",
        options: [
          { icon: "🚆", desc: "Treno diretto da Milano Cadorna → Varese Nord",               duration: "~1h" },
          { icon: "🚆", desc: "Treno diretto da Milano Garibaldi → Varese",                  duration: "~1h" },
        ],
      },
    ],

    giftsTitle:  "Lista nozze",
    giftIntro: "Se desiderate aiutarci a iniziare questo nuovo capitolo della nostra famiglia, potete regalarci uno degli oggetti qui sotto oppure contribuire al nostro viaggio di nozze in Cina ❤️",
    offrirBtn:   "Offrire",

    aboutTitle:  "Gli sposi",
    aboutSub:    "Clicca sulle foto per una sorpresa",
    about:       "Non vediamo l'ora di festeggiare il nostro matrimonio con te!",
  },

  gifts: [
    { name: "Viaggio di nozze in Cina",                                                                     nameFr: "Voyage de noces en Chine",                                                                        price: 1200, icon: "✈️", photo: "photos-liste/voyage.png", hidePrice: true },
    { name: "Giradischi e vinili - Per ascoltare le nostre canzoni preferite",                              nameFr: "Tourne-disque et vinyles - Pour écouter nos chansons préférées",                                  price: 300,  icon: "☕", photo: "photos-liste/vinile.png" },
    { name: "Proiettore - Per guardare insieme i nostri film preferiti e le partite del Milan",             nameFr: "Projecteur - Pour regarder ensemble nos films préférés et les matchs du Milan",                   price: 600,  icon: "🎁", photo: "photos-liste/videoproj.png" },
    { name: "Caraffa GluGlu - Per idratarsi con simpatia",                                                  nameFr: "Carafe GluGlu - Pour s'hydrater avec style",                                                      price: 100,  icon: "🕯️", photo: "photos-liste/caraffa.png" },
    { name: "Cocotte Le Creuset - Per creare dei piatti sfiziosissimi",                                     nameFr: "Cocotte Le Creuset - Pour cuisiner des plats délicieux",                                           price: 300,  icon: "🍝", photo: "photos-liste/cocotte.png" },
    { name: "Set coltelli giapponesi Wusaki - Per sfilettare il pesce e sminuzzare le verdure",            nameFr: "Set de couteaux japonais Wusaki - Pour fileter le poisson et émincer les légumes",                price: 200,  icon: "🎵", photo: "photos-liste/coltelli.png" },
    { name: "Ps5 - Perché va bene la tesi, ma i ragazzi hanno anche bisogno di relax",                     nameFr: "PS5 - Parce que la thèse c'est bien, mais on a aussi besoin de se détendre",           price: 500,  icon: "🌙", photo: "photos-liste/play.png" },
  ],

  hotels: [
    {
      icon:     "🏨",
      name:     "Hotel Palace",
      location: "Via Manara 11, Varese",
      price:    110,
      website:  "https://www.hotelpalacevarese.it",
      map:      "https://www.google.com/maps/search/?api=1&query=Hotel+Palace+Varese",
    },
    {
      icon:     "🏡",
      name:     "B&B La Terrazza",
      location: "Via Caracciolo 4, Varese",
      price:    75,
      website:  "https://www.booking.com/hotel/it/la-terrazza-varese.html",
      map:      "https://www.google.com/maps/search/?api=1&query=B%26B+La+Terrazza+Varese",
    },
    {
      icon:     "🌿",
      name:     "Colonne Hotel",
      location: "Via Volta 9, Varese",
      price:    95,
      website:  "https://www.colonnehotel.it",
      map:      "https://www.google.com/maps/search/?api=1&query=Colonne+Hotel+Varese",
    },
    {
      icon:     "🛏️",
      name:     "B&B Sant'Antonio",
      location: "Via Sant'Antonio 18, Varese",
      price:    65,
      website:  "https://www.booking.com/hotel/it/santantonio-varese.html",
      map:      "https://www.google.com/maps/search/?api=1&query=BB+Sant+Antonio+Varese",
    },
  ],
};
