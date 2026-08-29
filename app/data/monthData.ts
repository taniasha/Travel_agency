export type MonthPackage = {
  image: string;
  title: string;
  duration: string;
  description: string;
  link ?: string;
   destinationSlug ?: string;
  packageSlug?: string;
};

export type FollowingMonth = {
  slug: string;
  title: string;
  image: string;
};

export type MonthPage = {
  slug: string;
  title: string;
  heroImage: string;
  heroText: string;

  description: string;
  ctaText: string;
  ctaLink: string;

  packages: MonthPackage[];
  followingMonths: FollowingMonth[];
};

export const MONTH_DATA: MonthPage[] = [
// jan -- DONE
{
  slug: "january",
  title: "A New Year, A New Beginning",
  heroImage: "/images/month/HeroImageJanuary.webp",
  heroText: "Where to Travel This January",

  description:
    "This is the season of fresh starts — the perfect time to trade routine for something extraordinary. Think snow-covered alpine escapes, sunlit island retreats, or even a once-in-a-lifetime safari to begin the year with perspective. Whether you’re travelling as a couple, with family, or with friends, journeys now feel renewing and full of possibility. The world is quieter, experiences feel more personal, and every destination carries a sense of promise. This isn’t just a holiday — it’s a beautiful way to set the tone for everything ahead.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "THE ULTIMATE ITALIAN HONEYMOON: VINTAGE ROMANCE, PRIVATE EXPERIENCES & COASTAL ELEGANCE",
      duration: "12 NIGHTS",
      description: "This extraordinary honeymoon journey is designed for couples seeking a seamless blend of romance, privacy, and timeless Italian elegance across the country’s most iconic destinations.",
      destinationSlug: "italy",
  packageSlug: "ULTIMATE_ITALIAN_HONEYMOON",
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "VOLCANIC LUXURY: SICILY & AEOLIAN ISLAND HOPPING EXPERIENCE",
      duration: "9 NIGHTS",
      description: "This extraordinary journey through Sicily and the Aeolian Islands combines coastal elegance, volcanic landscapes, and island-hopping adventure into a truly unique Mediterranean experience.",
      destinationSlug: "italy",
      packageSlug: "VOLCANIC_LUXURY"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "YIN & YANG OF JAPAN: Tokyo to Kyoto Slow Luxury",
      duration: "8 NIGHTS",
      description: "This journey explores the beautiful contrast that defines Japan — the vibrant energy of Tokyo and the serene traditions of Kyoto...",
      destinationSlug: "japan",
      packageSlug: "YIN_YAG_JAPAN"
    },
    {
        destinationSlug: "japan",
        packageSlug:"IMPERIAL_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "IMPERIAL JAPAN: Cities, Culture & Quiet Luxury",
        duration: "10 Nights",
        description: "From the neon-lit avenues of Tokyo to the quiet temples of Kyoto and the samurai heritage of Kanazawa...",
      },
    {
        destinationSlug: "tanzania",
        packageSlug: "FROM_CRATERS_TO_CORAL",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM CRATERS TO CORAL: TANZANIA’S ULTIMATE WILD-TO-WATER ESCAPE",
        duration: "12 Nights",
        description: "This extraordinary journey through Tanzania combines some of Africa’s most dramatic wildlife...",
      },
      {
        destinationSlug: "tanzania",
        packageSlug: "KILIMANJARO_SUMMIT",
        image: "/images/triple-creek-ranch.avif",
        title: "KILIMANJARO SUMMIT & ZANZIBAR RECOVERY ESCAPE",
        duration: "12 Nights",
        description: "This journey combines one of the world’s most iconic mountain climbs with the serene beauty of the Indian Ocean.",
      },
       {
        destinationSlug: "new-zealand",
        packageSlug:"ULTIMATE_PACIFIC_PRIVATE_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE ULTIMATE PACIFIC PRIVATE ESCAPE: FROM VOLCANIC WONDERS TO ISLAND PARADISE",
        duration: "14 NIGHTS",
        description: "This extraordinary Pacific journey is crafted for travellers seeking a seamless blend of dramatic landscapes, cultural depth...",
      },
      {
        destinationSlug: "new-zealand",
        packageSlug:"PRIVATE_HELI_ULTRA_ISLAND_ESCAPE",
        image: "/images/triple-creek-ranch.avif",
        title: "THE PRIVATE HELI & ULTRA-ISLAND ESCAPE: FROM ALPINE ADVENTURE TO THE BRANDO PARADISE",
        duration: "14 NIGHTS",
        description: "This extraordinary journey brings together two of the world’s most breathtaking landscapes...",
      },
  ],

  followingMonths: [
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// february
{
  slug: "february",
  title: "Romance, Warmth, and Escape",
  heroImage: "/images/month/HeroImageFeb.webp",
  heroText: "Where to Travel This February",

  description:
    "There is a softness in the air — a time made for meaningful travel. Picture overwater villas, candlelit dinners by the sea, or elegant cities filled with culture and charm. For couples, it’s a season of romance; for families, a chance to reconnect somewhere beautiful; for solo travellers, a quiet indulgence. The right journey now feels intimate and effortless, with warmth, luxury, and calm in perfect balance. Travel becomes a reminder that the best moments are often the ones you choose intentionally.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "LA DOLCE VITA ELITE: MILAN COUTURE & PORTOFINO RIVIERA ESCAPE",
      duration: "5 NIGHTS",
      description: "This stylish Italian escape seamlessly blends the world of high fashion, refined gastronomy, and Riviera elegance into one sophisticated journey.",
      destinationSlug: "italy",
      packageSlug: "LA_DOLCE_VITA_ELITE"
    },
    {
      destinationSlug: "japan",
      packageSlug: "IMPERIAL_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "IMPERIAL JAPAN: Cities, Culture & Quiet Luxury",
        duration: "10 NIGHTS",
        description: "From the neon-lit avenues of Tokyo to the quiet temples of Kyoto and the samurai heritage of Kanazawa...",
      },
   {
        destinationSlug: "japan",
        packageSlug:"YIN_YAG_JAPAN",
        image: "/images/triple-creek-ranch.avif",
        title: "YIN & YANG OF JAPAN: Tokyo to Kyoto Slow Luxury",
        duration: "8 Nights",
        description: "This journey explores the beautiful contrast that defines Japan — the vibrant energy of Tokyo and the serene traditions of Kyoto...",
      },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
        destinationSlug: "morocco",
        packageSlug:"IMPERIAL_CITIES_SAHARA_STARS",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
        duration: "13 NIGHTS",
        description: "This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences.",
      },
  ],

  followingMonths: [
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// march
{
  slug: "march",
  title: "Romance, Warmth, and Escape",
  heroImage: "/images/month/HeroImageMarch.webp",
  heroText: "Where to Travel This March",

  description:
    "There is a softness in the air — a time made for meaningful travel. Picture overwater villas, candlelit dinners by the sea, or elegant cities filled with culture and charm. For couples, it’s a season of romance; for families, a chance to reconnect somewhere beautiful; for solo travellers, a quiet indulgence. The right journey now feels intimate and effortless, with warmth, luxury, and calm in perfect balance. Travel becomes a reminder that the best moments are often the ones you choose intentionally.",

  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      destinationSlug: "morocco",
        packageSlug:"IMPERIAL_CITIES_SAHARA_STARS",
        image: "/images/triple-creek-ranch.avif",
        title: "FROM IMPERIAL CITIES TO SAHARA STARS: A GRAND MOROCCAN JOURNEY",
        duration: "13 NIGHTS",
        description: "This extraordinary journey through Morocco reveals a captivating blend of imperial cities, desert landscapes, ancient kasbahs, and refined luxury experiences.",
      },
    {
        destinationSlug: "morocco",
        packageSlug: "BEYOND_THE_ATLAS",
        image: "/images/triple-creek-ranch.avif",
        title: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
        duration: "10 NIGHTS",
        description: "This extraordinary journey ventures beyond Morocco’s well-known cities into the country’s most remote desert landscapes, ancient caravan routes, and hidden oasis valleys.",
      },
   {
        destinationSlug: "italy",
        packageSlug:"GRAND_ITALIAN_ODYSSEY",
        image: "/images/triple-creek-ranch.avif",
        title: "THE GRAND ITALIAN ODYSSEY: PRIVATE VILLAS, VINTAGE DRIVES & COASTAL ELEGANCE",
        duration: "12 NIGHTS",
        description: "This exceptional journey captures the very essence of Italy, weaving together the refined beauty of Lake Como, the timeless charm of Tuscany, the cultural richness of Rome, and the breathtaking coastal elegance of the Amalfi Coast.",
      },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "april", title: "April", image: "/images/month/April.webp" },
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},


// april
{
  slug: "april",
  title: "Spring at Its Most Beautiful",
  heroImage: "/images/month/HeroImageApril.webp",
  heroText: "Where to Travel This April",

  description:
"This is one of the most uplifting times to travel. Landscapes are in bloom, cities feel vibrant, and the world carries a gentle sense of renewal. It’s ideal for countryside retreats, cultural capitals, and coastal escapes before summer arrives. Families love the ease of the season, couples find romance in every street and sunset, and groups enjoy experiences that feel perfectly balanced. Travel now is about colour, comfort, and beauty — discovering destinations at their seasonal best, with luxury that feels effortless.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "may", title: "May", image: "/images/month/May.webp" },
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// may
{
  slug: "may",
  title: "Golden Days Before Summer Arrives (May)",
  heroImage: "/images/month/HeroImageMay.webp",
  heroText: "Where to Travel This May",

  description:
"The world feels warm, open, and beautifully in-between — just before peak season begins. This is the time for vineyard journeys, iconic Mediterranean coastlines, and cultural cities at their most inviting. Whether you’re planning a romantic escape, a family holiday, or a friends’ getaway, experiences feel expansive and unhurried. Long evenings, perfect weather, and destinations full of life make travel now deeply rewarding. It’s a season of indulgence — where every journey feels sunlit, elegant, and perfectly timed.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "june", title: "June", image: "/images/month/June.webp" },
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// june
{
  slug: "june",
  title: "Summer Begins in Style (June)",
  heroImage: "/images/month/HeroImgJune.webp",
  heroText: "",

  description:
"A sense of anticipation fills the air. This is the season for island escapes, sailing along dramatic coastlines, and iconic summer destinations before they reach their busiest. Imagine beach clubs, mountain air, or elegant cities under endless blue skies. Families find adventure, couples find effortless romance, and groups find celebration in every shared moment. Travel now feels bright and easy — the beginning of summer done beautifully, with experiences shaped by warmth, freedom, and unforgettable luxury.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "july", title: "July", image: "/images/month/July.webp" },
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// july
{
  slug: "july",
  title: "Escape Into Cool Horizons (July)",
  heroImage: "/images/month/HeroImgJuly.webp",
  heroText: "Where to Travel This July",

  description:
"As the heat rises, the best journeys offer contrast — cooler landscapes, open skies, and space to breathe differently. Think alpine lakes, northern coastlines, or even wildlife adventures where nature feels extraordinary. For families, it’s a season of discovery; for couples, a refreshing retreat; for groups, an unforgettable shared escape. Travel now is not just about getting away — it’s about finding places that feel expansive, elevated, and alive. This is the luxury of summer at its most freeing.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "august", title: "August", image: "/images/month/August.webp" },
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},


// aug
{
  slug: "august",
  title: "The Height of Summer, Done Beautifully (August)",
  heroImage: "/images/month/HeroImgAugust.webp",
  heroText: "Where to Travel This August",

  description:
"This is the season of bold energy and iconic experiences. Picture private villas, yacht days on glamorous coastlines, cultural festivals in world-class cities, or island luxury at its peak. Whether you’re travelling with family, friends, or as a couple, journeys now feel celebratory and full of colour. The world is vibrant, the days are long, and every moment carries a sense of indulgence. Travel becomes a statement — a season lived beautifully, with memories made at the highest level.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "september", title: "September", image: "/images/month/Sept.webp" },
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// september
{
  slug: "september",
  title: "The World Feels Yours Again (September)",
  heroImage: "/images/month/HeroImgSep.webp",
  heroText: "Where to Travel This September",

  description:
"The crowds fade, the pace softens, and destinations feel calmer, richer, more personal. This is the season for vineyard harvests, golden coastlines, fashion-city escapes, and warm seas without the rush of summer. Families enjoy ease, couples find space, and groups travel with a sense of elegance and comfort. Experiences feel perfectly timed — cultural, scenic, and effortlessly luxurious. Travel now is about balance: exploring the world when it finally feels like it belongs to you again.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "october", title: "October", image: "/images/month/October.webp" },
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// october
{
  slug: "october",
  title: "Autumn’s Most Cinematic Chapter (October)",
  heroImage: "/images/month/HeroImageOct.webp",
  heroText: "Where to Travel This October",

  description:
"There is rare atmosphere in the world now. Think lantern-lit riads, heritage streets, autumn festivals, and landscapes turning gold and crimson. It’s the season for culture, storytelling, and journeys with texture — from maple-lined temples in Japan to desert evenings under the stars. Whether you’re travelling as a couple, with friends, or planning something meaningful for family, every destination feels immersive. Travel now becomes more than an escape — it feels like stepping into a film.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "november", title: "November", image: "/images/month/November.webp" },
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},


// nov
{
  slug: "november",
  title: "A Quiet Escape Before the Year Ends (November)",
  heroImage: "/images/month/HeroImageNov.webp",
  heroText: "Where to Travel This November",

  description:
"A pause arrives before the festive rush begins. This is the perfect season for desert serenity, wellness retreats, cultural depth, and destinations that feel restorative and unrushed. Imagine peaceful islands, vibrant bazaars, or safari landscapes under wide skies. Couples find quiet luxury, families reconnect in calm settings, and groups experience something truly different. Travel now feels like a breath — a chance to reset beautifully, with warmth, stillness, and unforgettable experiences before the year turns.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "december", title: "December", image: "/images/month/December.webp" },
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},

// dec
{
  slug: "december",
  title: "End the Year Somewhere Magical (December)",
  heroImage: "/images/month/HeroImageDec.webp",
  heroText: "Where to Travel This December",

  description:
"The world fills with celebration and emotion. This is the season for snowy fairytales, festive city glamour, luxury shopping streets, or sunlit escapes that feel like a reward. Families create memories that last for years, couples find romance in winter lights, and groups gather somewhere unforgettable. Whether it’s a chalet by the fire or a cultural capital dressed for the season, travel now becomes meaningful. This isn’t just where you go — it’s how you choose to finish beautifully.",
  ctaText: "GET IN TOUCH",
  ctaLink: "/contact",

  packages: [
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Romantic Greece Escape",
      duration: "6 Nights / 7 Days",
      description: "Santorini, Athens, private sailing, slow living.",
      link: "/packages/greece-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
    {
      image: "/images/triple-creek-ranch.avif",
      title: "Japan Winter Culture",
      duration: "8 Nights / 9 Days",
      description: "Kyoto temples, Tokyo, hot springs, winter festivals.",
      link: "/packages/japan-february"
    },
  ],

  followingMonths: [
    { slug: "january", title: "January", image: "/images/month/January.webp" },
    { slug: "february", title: "February", image: "/images/month/February.webp" },
    { slug: "march", title: "March", image: "/images/month/March.webp" },
    { slug: "explore", title: "Explore the year", image: "/images/month/explore.webp" },

  ],
},
];
