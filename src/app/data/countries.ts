export interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  experiences: string[];
  image: string;
}

export interface Country {
  id: string;
  name: string;
  iso3: string;
  description: string;
  overview: string;
  bestTime: string;
  currency: string;
  language: string;
  visa: string;
  locations: Location[];
}

export const countries: Country[] = [
  {
    id: "indonesia",
    name: "Indonesia",
    iso3: "IDN",
    description: "An archipelago of over 17,000 islands, offering everything from volcanic adventures to serene beaches.",
    overview: "Indonesia is the largest archipelago in the world, famous for its diverse cultures, languages, and breathtaking landscapes ranging from rice terraces to active volcanoes.",
    bestTime: "April to October",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian",
    visa: "Visa on Arrival available for many nations",
    locations: [
      {
        id: "bali",
        name: "Bali",
        coordinates: [115.1889, -8.4095],
        description: "The Island of the Gods, known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
        experiences: ["Temple tours", "Beach resorts", "Cultural dances"],
        image: "https://images.unsplash.com/photo-1671223450846-29e05a32366d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwc2NlbmVyeXxlbnwxfHx8fDE3NzAxOTU5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "jakarta",
        name: "Jakarta",
        coordinates: [106.8456, -6.2088],
        description: "The massive capital, a historic mix of cultures - Javanese, Malay, Chinese, Arab, Indian and European.",
        experiences: ["National Monument", "Old Town", "Shopping Malls"],
        image: "https://images.unsplash.com/photo-1680244116826-467f252cf503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWthcnRhJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzcwMTk1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "yogyakarta",
        name: "Yogyakarta",
        coordinates: [110.3695, -7.7956],
        description: "Java's cultural hub, known for its traditional arts and cultural heritage.",
        experiences: ["Borobudur Temple", "Prambanan Temple", "Batik Workshops"],
        image: "https://images.unsplash.com/photo-1623133533805-95c787e436b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZb2d5YWthcnRhJTIwdGVtcGxlfGVufDF8fHx8MTc3MDE5NTkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    iso3: "THA",
    description: "Known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
    overview: "Thailand is a Southeast Asian country known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
    bestTime: "November to February",
    currency: "Thai Baht (THB)",
    language: "Thai",
    visa: "Visa exemption for many tourists up to 30 days",
    locations: [
      {
        id: "bangkok",
        name: "Bangkok",
        coordinates: [100.5018, 13.7563],
        description: "Capital city known for its vibrant street life and cultural landmarks.",
        experiences: ["Grand Palace", "Street Food", "Floating Markets"],
        image: "https://images.unsplash.com/photo-1728017237938-8829b36c1850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW5na29rJTIwZ3JhbmQlMjBwYWxhY2V8ZW58MXx8fHwxNzcwMTk1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "chiangmai",
        name: "Chiang Mai",
        coordinates: [98.9853, 18.7883],
        description: "Mountainous city in northern Thailand, famous for its old city temples.",
        experiences: ["Elephant Sanctuaries", "Night Bazaar", "Doi Suthep"],
        image: "https://images.unsplash.com/photo-1678455884083-bac5c34f2cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGlhbmclMjBNYWklMjB0ZW1wbGV8ZW58MXx8fHwxNzcwMTk1OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "phuket",
        name: "Phuket",
        coordinates: [98.3923, 7.8804],
        description: "Rainforested, mountainous island in the Andaman Sea, has some of Thailand's most popular beaches.",
        experiences: ["Island Hopping", "Beaches", "Nightlife"],
        image: "https://images.unsplash.com/photo-1551418843-01c6b62e864d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaHVrZXQlMjBiZWFjaHxlbnwxfHx8fDE3NzAxOTU5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "vietnam",
    name: "Vietnam",
    iso3: "VNM",
    description: "Known for its beaches, rivers, Buddhist pagodas and bustling cities.",
    overview: "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities.",
    bestTime: "March to April",
    currency: "Vietnamese Dong (VND)",
    language: "Vietnamese",
    visa: "E-visa required for most visitors",
    locations: [
      {
        id: "hanoi",
        name: "Hanoi",
        coordinates: [105.8342, 21.0285],
        description: "The capital, known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.",
        experiences: ["Old Quarter", "Ha Long Bay Tours", "Street Food"],
        image: "https://images.unsplash.com/photo-1758104372177-6a234763a29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYW5vaSUyMHN0cmVldHxlbnwxfHx8fDE3NzAxOTU5MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: "hochiminh",
        name: "Ho Chi Minh City",
        coordinates: [106.6297, 10.8231],
        description: "A high-energy city known for its French colonial landmarks and history museums.",
        experiences: ["War Remnants Museum", "Cu Chi Tunnels", "Ben Thanh Market"],
        image: "https://images.unsplash.com/photo-1692804312847-aa968d19c168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIbyUyMENoaSUyME1pbmglMjBDaXR5JTIwbGFuZG1hcmt8ZW58MXx8fHwxNzcwMTk1OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "malaysia",
    name: "Malaysia",
    iso3: "MYS",
    description: "Occupies parts of the Malay Peninsula and the island of Borneo. Known for its rainforests and mix of cultural influences.",
    overview: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.",
    bestTime: "December to February (West Coast), June to August (East Coast)",
    currency: "Malaysian Ringgit (MYR)",
    language: "Malay",
    visa: "Visa-free for many countries",
    locations: [
      {
        id: "kualalumpur",
        name: "Kuala Lumpur",
        coordinates: [101.6869, 3.1390],
        description: "The capital city, home to colonial landmarks and the iconic Petronas Twin Towers.",
        experiences: ["Petronas Towers", "Batu Caves", "Shopping"],
        image: "https://images.unsplash.com/photo-1596022664454-a5840763aa76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMHRvd2Vyc3xlbnwxfHx8fDE3NzAxOTU5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "philippines",
    name: "Philippines",
    iso3: "PHL",
    description: "An archipelago of more than 7,000 islands, defined by its emerald rice fields, teeming megacities, and pristine beaches.",
    overview: "The Philippines is an archipelagic country in Southeast Asia.",
    bestTime: "December to February",
    currency: "Philippine Peso (PHP)",
    language: "Filipino, English",
    visa: "Visa-free for 30 days for many nationals",
    locations: [
      {
        id: "manila",
        name: "Manila",
        coordinates: [120.9842, 14.5995],
        description: "The capital, a bayside city on the island of Luzon.",
        experiences: ["Intramuros", "Rizal Park", "Food Tours"],
        image: "https://images.unsplash.com/photo-1501890664351-4ef399c1524f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBza3lsaW5lfGVufDF8fHx8MTc3MDE5NTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    iso3: "SGP",
    description: "An island city-state off southern Malaysia, a global financial center with a tropical climate and multicultural population.",
    overview: "Singapore is a sovereign island city-state in maritime Southeast Asia.",
    bestTime: "February to April",
    currency: "Singapore Dollar (SGD)",
    language: "English, Malay, Mandarin, Tamil",
    visa: "Visa-free for many countries",
    locations: [
      {
        id: "singapore-city",
        name: "Singapore",
        coordinates: [103.8198, 1.3521],
        description: "The city-state itself.",
        experiences: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa"],
        image: "https://images.unsplash.com/photo-1517570123306-d58896657b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBnYXJkZW5zJTIwYnklMjB0aGUlMjBiYXl8ZW58MXx8fHwxNzcwMTk1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "cambodia",
    name: "Cambodia",
    iso3: "KHM",
    description: "A Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains and Gulf of Thailand coastline.",
    overview: "Cambodia is known for the Angkor Wat temple complex.",
    bestTime: "November to February",
    currency: "Cambodian Riel (KHR), USD widely accepted",
    language: "Khmer",
    visa: "Visa on arrival available",
    locations: [
      {
        id: "phnompenh",
        name: "Phnom Penh",
        coordinates: [104.9282, 11.5564],
        description: "The bustling capital.",
        experiences: ["Royal Palace", "Mekong River Cruise", "History Museums"],
        image: "https://images.unsplash.com/photo-1706670663016-777de9e62d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaG5vbSUyMFBlbmglMjBwYWxhY2V8ZW58MXx8fHwxNzcwMTk1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "laos",
    name: "Laos",
    iso3: "LAO",
    description: "A Southeast Asian country traversed by the Mekong River and known for mountainous terrain.",
    overview: "Laos is a landlocked country in Southeast Asia.",
    bestTime: "October to April",
    currency: "Laotian Kip (LAK)",
    language: "Lao",
    visa: "Visa on arrival",
    locations: [
      {
        id: "vientiane",
        name: "Vientiane",
        coordinates: [102.6331, 17.9757],
        description: "The capital, home to the That Luang monument.",
        experiences: ["Temple Tours", "Night Market", "Buddha Park"],
        image: "https://images.unsplash.com/photo-1557410840-256354e8f9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWVudGlhbmUlMjBtb251bWVudHxlbnwxfHx8fDE3NzAxOTU5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "myanmar",
    name: "Myanmar",
    iso3: "MMR",
    description: "A nation of more than 100 ethnic groups, bordering India, Bangladesh, China, Laos and Thailand.",
    overview: "Myanmar (formerly Burma) is a Southeast Asian nation.",
    bestTime: "November to February",
    currency: "Burmese Kyat (MMK)",
    language: "Burmese",
    visa: "E-visa required",
    locations: [
      {
        id: "yangon",
        name: "Yangon",
        coordinates: [96.1951, 16.8661],
        description: "The largest city, home to the Shwedagon Pagoda.",
        experiences: ["Shwedagon Pagoda", "Colonial Architecture", "Circular Train"],
        image: "https://images.unsplash.com/photo-1523131992001-c485ccc0d326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZYW5nb24lMjBwYWdvZGF8ZW58MXx8fHwxNzcwMTk1OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "brunei",
    name: "Brunei",
    iso3: "BRN",
    description: "A tiny nation on the island of Borneo, in 2 distinct sections surrounded by Malaysia and the South China Sea.",
    overview: "Brunei is known for its beaches and biodiverse rainforest.",
    bestTime: "January to May",
    currency: "Brunei Dollar (BND)",
    language: "Malay",
    visa: "Visa-free for many countries",
    locations: [
      {
        id: "bandar",
        name: "Bandar Seri Begawan",
        coordinates: [114.9401, 4.9403],
        description: "The capital, home to the opulent Jame'Asr Hassanil Bolkiah mosque.",
        experiences: ["Mosque Tours", "Water Village", "Royal Regalia Museum"],
        image: "https://images.unsplash.com/photo-1709808971436-522aaab4447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcnVuZWklMjBtb3NxdWV8ZW58MXx8fHwxNzcwMTk1OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: "easttimor",
    name: "East Timor",
    iso3: "TLS",
    description: "Timor-Leste, or East Timor, is a Southeast Asian nation occupying half the island of Timor.",
    overview: "East Timor is known for its coral reefs and beaches.",
    bestTime: "May to October",
    currency: "United States Dollar (USD)",
    language: "Tetum, Portuguese",
    visa: "Visa on arrival",
    locations: [
      {
        id: "dili",
        name: "Dili",
        coordinates: [125.5736, -8.5569],
        description: "The capital, located on the north coast.",
        experiences: ["Cristo Rei", "Tais Market", "History Museums"],
        image: "https://images.unsplash.com/photo-1746438411071-5162f6e59a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWxpJTIwVGltb3IlMjBMZXN0ZSUyMGJlYWNofGVufDF8fHx8MTc3MDE5NTkzOHww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  }
];
