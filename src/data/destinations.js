// All destinations are fictional places created for this demonstration site.

export const REGIONS = [
  'The Sunlit Isles',
  'The Highland Realms',
  'The Golden Sands',
  'The Frozen North',
  'The Amber Wilds',
  'The Cloudward Realm',
];

export const INCLUDED = [
  'Return flights from London with a scheduled carrier',
  'All accommodation as described, based on two sharing',
  'Daily breakfast and selected meals as per the itinerary',
  'All guided excursions with expert local guides',
  'All transfers in destination in private vehicles',
  'Full financial protection on every booking',
];

export const EXCLUDED = [
  'Travel insurance (required for all travellers)',
  'Visas and entry fees, where applicable',
  'Meals not listed in the itinerary',
  'Personal expenses and gratuities',
  'Optional activities booked locally',
];

export const destinations = [
  {
    slug: 'azure-bay',
    name: 'Azure Bay',
    country: 'Veleria',
    region: 'The Sunlit Isles',
    price: 1299,
    rating: 4.8,
    reviewsCount: 212,
    durationDays: 7,
    tagline: 'Turquoise shallows and slow island days.',
    description:
      "Set into the western rim of Veleria, Azure Bay is a crescent of powder-white sand wrapped around some of the clearest water in the Sunlit Isles. Days here move at the pace of the tide: snorkelling over coral gardens in the morning, long unhurried lunches in the afternoon, and sunsets that turn the whole bay to copper. Our seven-day escape pairs a boutique beachfront lodge with guided boat trips to the outer reefs, so you experience the very best of the bay without lifting a finger.",
    highlights: [
      'Guided snorkelling over the Coral Gardens reef',
      'Sunset sailing aboard a traditional lateen-rigged boat',
      'Beachfront lodge with private plunge-pool suites',
      "Sea-kayak expedition to the Smugglers' Caves",
      'Velerian cooking evening with a local chef',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Touch down in paradise',
        description:
          'Land at Port Veleria and transfer along the coast road to your beachfront lodge. Settle in, take your first swim, and join your hosts for a welcome dinner of grilled catch and citrus salads as the sun drops into the bay.',
      },
      {
        day: 2,
        title: 'The Coral Gardens',
        description:
          'A marine guide leads a morning snorkelling session over the Coral Gardens, home to parrotfish, rays and the occasional sea turtle. The afternoon is yours: hammock, spa treatment or a lazy read by the plunge pool.',
      },
      {
        day: 3,
        title: "Smugglers' Caves by kayak",
        description:
          'Paddle the sheltered shoreline with a local guide to a series of sea caves once used by Velerian smugglers. Swim through the cathedral cave at midday, when the light turns the water electric blue, then picnic on a beach you can only reach by sea.',
      },
      {
        day: 4,
        title: 'A day at leisure',
        description:
          'No plans and nowhere to be. Borrow a bicycle and explore the fishing village of Cala Mer, book an extra dive, or simply do nothing at all. In the evening, a Velerian chef hosts a hands-on cooking session followed by dinner under the stars.',
      },
      {
        day: 5,
        title: 'Sail into the sunset',
        description:
          'A free morning for last swims and souvenir hunting, then board a traditional lateen-rigged boat for a golden-hour sail along the headlands. Farewell dinner on the beach, with your feet in the sand.',
      },
    ],
    image: '/images/azure-bay.jpg',
    reviews: [
      {
        name: 'Eleanor Whitfield',
        rating: 5,
        date: 'March 2026',
        title: 'The reset we needed',
        text: 'Every detail was thought through — the lodge, the guides, even the picnic on the secret beach. The snorkelling alone was worth the fare.',
      },
      {
        name: 'Daniel Mensah',
        rating: 5,
        date: 'February 2026',
        title: 'Faultless from start to finish',
        text: 'Transfers were seamless and the sunset sail was genuinely magical. We are already planning our return.',
      },
      {
        name: 'Priya Nair',
        rating: 4,
        date: 'January 2026',
        title: 'Beautiful, with one caveat',
        text: 'Stunning bay and wonderful food. The kayak day is more energetic than it sounds, so pace yourself — otherwise perfect.',
      },
    ],
  },
  {
    slug: 'emerald-highlands',
    name: 'Emerald Highlands',
    country: 'Tharnmere',
    region: 'The Highland Realms',
    price: 949,
    rating: 4.9,
    reviewsCount: 187,
    durationDays: 6,
    tagline: 'Mist, moorland and mountain air.',
    description:
      "Tharnmere's high country is a patchwork of emerald pasture, dark pine forest and lochs that mirror the sky. This six-day journey follows old drovers' roads between stone-built villages, with a local guide, tastings at a family-run distillery, and nights in a converted coaching inn. Expect weather that changes by the hour and scenery that changes your mind about what green can do.",
    highlights: [
      "Guided walks along ancient drovers' roads",
      'Tasting at a family-run Tharnmere distillery',
      'Sunrise at the Kilbrae standing stones',
      'Loch cruise with a wildlife spotter',
      'Two nights in a converted coaching inn',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Into the high country',
        description:
          'Travel from the lowland city of Dunvarra into the hills, stopping at a working sheep farm for lunch. Check in to the coaching inn at Glenbrae and stretch your legs on an evening stroll to the waterfall.',
      },
      {
        day: 2,
        title: "The drovers' road",
        description:
          'A full-day guided walk along the old drove road, following the route cattle herders used for centuries. Picnic lunch by a mountain tarn, with red deer often grazing nearby.',
      },
      {
        day: 3,
        title: 'Stones and spirits',
        description:
          'Sunrise among the Kilbrae standing stones, then on to the distillery for a tour and tasting of three single malts. Free afternoon in the village, with dinner at the inn’s celebrated restaurant.',
      },
      {
        day: 4,
        title: 'On the water',
        description:
          'Board a small cruiser for a morning on Loch Mhara with a wildlife spotter — look for ospreys, otters and the occasional golden eagle. Afternoon at leisure, with optional archery or fly-fishing.',
      },
      {
        day: 5,
        title: 'The high pass',
        description:
          'A final, gentler walk over the Bealach Pass with panoramic views across three glens. Farewell ceilidh dinner with local musicians back at the inn.',
      },
    ],
    image: '/images/emerald-highlands.jpg',
    reviews: [
      {
        name: 'Margaret Ellison',
        rating: 5,
        date: 'April 2026',
        title: 'Like stepping into a storybook',
        text: 'The standing stones at sunrise gave me goosebumps. Our guide knew every plant, bird and legend on the trail.',
      },
      {
        name: 'Tomás Ferreira',
        rating: 5,
        date: 'March 2026',
        title: 'Walking holiday perfection',
        text: 'Well-paced walks, superb food and the distillery visit was a highlight. Already recommending it to everyone.',
      },
    ],
  },
  {
    slug: 'solmar-dunes',
    name: 'Solmar Dunes',
    country: 'Qasimra',
    region: 'The Golden Sands',
    price: 1099,
    rating: 4.7,
    reviewsCount: 143,
    durationDays: 5,
    tagline: 'A desert that glows at dusk.',
    description:
      'The great sand sea of Qasimra stretches further than the eye can follow — a landscape of sculpted dunes that burns gold at dawn and rose at dusk. Over five days you will travel with Zafiri desert guides, sleep in a luxury desert camp beneath absurdly clear skies, and visit a thousand-year-old oasis town carved from rose-coloured rock.',
    highlights: [
      'Sunset camel trek across the high dunes',
      'A night in a luxury desert camp under the stars',
      'Guided tour of the rose-rock oasis town of Tamdakh',
      'Sandboarding and a 4x4 dune safari',
      'Traditional Zafiri music around the campfire',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Edge of the sand sea',
        description:
          'Arrive at the desert gateway of Qasr Solmar and meet your Zafiri guides. A short 4x4 transfer brings you to the luxury camp as the dunes turn gold. Dinner and stories around the fire.',
      },
      {
        day: 2,
        title: 'Tamdakh, the rose town',
        description:
          'A full day exploring Tamdakh, the ancient oasis town carved from rose-coloured rock. Wander its shaded souks, climb to the citadel for the view, and lunch in a courtyard riad.',
      },
      {
        day: 3,
        title: 'Into the deep dunes',
        description:
          'Sandboarding in the morning, then a 4x4 dune safari to the great star dune of Erg Amanar. As dusk falls, mount camels for a slow trek to a private viewpoint for sunset, then return to camp for a feast under the stars.',
      },
      {
        day: 4,
        title: 'Dawn and departure',
        description:
          'Wake before sunrise to watch the dunes shift from violet to gold. One last breakfast in the open air before the transfer back to Qasr Solmar.',
      },
    ],
    image: '/images/solmar-dunes.jpg',
    reviews: [
      {
        name: 'Hannah Brooks',
        rating: 5,
        date: 'February 2026',
        title: 'The night sky alone is worth it',
        text: 'I have never seen so many stars. The camp was far more comfortable than I expected and the guides were wonderful company.',
      },
      {
        name: 'Oliver Grant',
        rating: 4,
        date: 'January 2026',
        title: 'Extraordinary, and hot',
        text: 'Bring more water than you think you need and embrace the early starts. The rose town is unforgettable.',
      },
    ],
  },
  {
    slug: 'frostvale-peaks',
    name: 'Frostvale Peaks',
    country: 'Norvikka',
    region: 'The Frozen North',
    price: 1499,
    rating: 4.9,
    reviewsCount: 231,
    durationDays: 8,
    tagline: 'Alpine stillness at the top of the world.',
    description:
      "Norvikka's Frostvale range is winter at its most theatrical: jagged peaks, frozen waterfalls and valleys so quiet you can hear the snow settle. This eight-day journey is built around a timber mountain lodge with a wood-fired sauna, with days spent snowshoeing, dog-sledding and riding the scenic mountain railway. On clear nights the aurora frequently dances overhead — we plan evening outings around the forecast.",
    highlights: [
      'Dog-sledding through silent pine valleys',
      'Aurora hunting with a professional photographer',
      'Ride on the scenic Frostvale mountain railway',
      'Snowshoe trek to the frozen Skarfoss falls',
      'Wood-fired sauna and timber lodge evenings',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at the lodge',
        description:
          'Take the mountain railway from Norvikka City up to Frostvale Lodge, arriving as the lamps come on. Settle into your timber room and ease in with the wood-fired sauna.',
      },
      {
        day: 2,
        title: 'First tracks',
        description:
          'A guided snowshoe trek through old-growth pine forest to a frozen waterfall, with hot berry juice at the turnaround point. Evening talk on aurora science over dinner.',
      },
      {
        day: 3,
        title: 'Dog-sledding day',
        description:
          'Meet your husky team and learn to drive your own sled on a half-day run through the valley. Afternoon free for the sauna or a spa treatment. Aurora outing after dark if the sky cooperates.',
      },
      {
        day: 4,
        title: 'The railway and the falls',
        description:
          'Ride the scenic line to its highest station, then snowshoe the short trail to the great frozen Skarfoss falls — a cathedral of blue ice. Farewell dinner at the lodge.',
      },
      {
        day: 5,
        title: 'Slow morning, homeward',
        description:
          'A lie-in, a final sauna and brunch before the railway carries you back down to the city.',
      },
    ],
    image: '/images/frostvale-peaks.jpg',
    reviews: [
      {
        name: 'Ingrid Johansson',
        rating: 5,
        date: 'March 2026',
        title: 'We saw the lights twice',
        text: 'The aurora outing was handled brilliantly — hot drinks, tripods provided, and the photographer helped everyone get the shot.',
      },
      {
        name: 'Marcus Webb',
        rating: 5,
        date: 'February 2026',
        title: 'Best winter trip we have taken',
        text: 'Dog-sledding was the highlight of my year. The lodge is cosy, the food hearty, the organisation flawless.',
      },
      {
        name: 'Sofia Rossi',
        rating: 5,
        date: 'January 2026',
        title: 'Pure magic',
        text: 'Quiet, beautiful and so well run. Pack proper thermals and you will be perfectly happy.',
      },
    ],
  },
  {
    slug: 'coral-atoll',
    name: 'Coral Atoll',
    country: 'Palavira',
    region: 'The Sunlit Isles',
    price: 1649,
    rating: 4.8,
    reviewsCount: 176,
    durationDays: 7,
    tagline: 'Barefoot luxury on a private lagoon.',
    description:
      "A ring of white sand in the middle of a turquoise lagoon, Palavira's Coral Atoll is the definition of getting away from it all. Your overwater villa steps directly into warm, bath-clear water, and the house reef begins just beyond the deck. Seven days here include a private dolphin cruise, a castaway picnic on a neighbouring sandbank, and a spa perched above the lagoon — though many guests happily do nothing at all.",
    highlights: [
      'Overwater villa with direct lagoon access',
      'Private dolphin-spotting cruise at dawn',
      'Castaway picnic on a deserted sandbank',
      'House-reef snorkelling steps from your deck',
      'Sunset spa ritual above the lagoon',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Seaplane arrival',
        description:
          'A spectacular seaplane flight brings you over the atoll to your overwater villa. The afternoon is yours — the lagoon is waiting.',
      },
      {
        day: 2,
        title: 'The house reef',
        description:
          'A marine biologist introduces you to the house reef on a guided snorkel: turtles, reef sharks and clouds of anthias. Afternoon at leisure.',
      },
      {
        day: 3,
        title: 'Castaway day',
        description:
          'A private boat drops you on a deserted sandbank with a gourmet picnic hamper, snorkelling gear and not much else. Pure castaway bliss, with a safety boat on call.',
      },
      {
        day: 4,
        title: 'Dolphins and departure',
        description:
          'One last dawn cruise to spot spinner dolphins, then a slow breakfast before the seaplane home.',
      },
    ],
    image: '/images/coral-atoll.jpg',
    reviews: [
      {
        name: 'Charlotte Hayes',
        rating: 5,
        date: 'April 2026',
        title: 'Honeymoon perfection',
        text: 'Waking up over the lagoon every morning felt unreal. The staff remembered every preference without being asked.',
      },
      {
        name: 'Rajiv Menon',
        rating: 5,
        date: 'March 2026',
        title: 'Worth every penny',
        text: 'The castaway picnic was the standout — just us, a sandbank and the clearest water I have ever seen.',
      },
    ],
  },
  {
    slug: 'emberwood-forest',
    name: 'Emberwood Forest',
    country: 'Valdoria',
    region: 'The Amber Wilds',
    price: 899,
    rating: 4.6,
    reviewsCount: 158,
    durationDays: 5,
    tagline: 'Ancient woodland in autumn colour.',
    description:
      'Each October, the ancient oaks and beeches of Emberwood ignite in amber, copper and crimson — and this five-day escape is timed to catch the peak. Stay in a forest lodge built around living trees, walk with a naturalist who reads the woods like a book, forage for mushrooms with a chef, and end each day around the firepit with Valdorian cider. Short, restorative and quietly spectacular.',
    highlights: [
      'Guided walks with a forest naturalist',
      'Mushroom foraging followed by a chef-led feast',
      'Canopy walkway at golden hour',
      'Stargazing talk in a forest clearing',
      'Forest lodge built around living trees',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Into the woods',
        description:
          'Arrive at the forest lodge and meet your naturalist guide for an introductory dusk walk, listening for owls as the light fades through the canopy.',
      },
      {
        day: 2,
        title: 'The old forest',
        description:
          "A full-day walk among the oldest oaks in Valdoria, some over four hundred years old. Learn to read tracks, fungi and the forest's layered history.",
      },
      {
        day: 3,
        title: 'Forage and feast',
        description:
          'Morning mushroom foraging with a chef, then help prepare — and devour — a woodland feast back at the lodge. Canopy walkway at golden hour.',
      },
      {
        day: 4,
        title: 'Farewell among the trees',
        description:
          'A slow final walk and a lingering breakfast before departure, timed for the drive when the forest is at its most luminous.',
      },
    ],
    image: '/images/emberwood-forest.jpg',
    reviews: [
      {
        name: 'George Ashworth',
        rating: 5,
        date: 'November 2025',
        title: 'Autumn at its absolute best',
        text: 'The colours were beyond anything I imagined, and the foraging day was enormous fun. A perfect short break.',
      },
      {
        name: 'Amelia Clarke',
        rating: 4,
        date: 'October 2025',
        title: 'Lovely and restorative',
        text: 'Beautiful forest, great food, wonderfully peaceful. Bring waterproof boots — the trails can be muddy.',
      },
    ],
  },
  {
    slug: 'skyspire-citadel',
    name: 'Skyspire Citadel',
    country: 'Zephyria',
    region: 'The Cloudward Realm',
    price: 1199,
    rating: 4.7,
    reviewsCount: 165,
    durationDays: 6,
    tagline: 'A mountain fortress above the clouds.',
    description:
      "Rising from a summit wreathed in cloud, the Skyspire Citadel has watched over Zephyria for nine centuries — and it still takes the breath away. Six days here blend the citadel's grand halls, libraries and sky-gardens with the mountain villages below: artisan workshops, a clifftop monastery at dawn, and the famous stairway of a thousand steps. History, altitude and views in equal measure.",
    highlights: [
      "Private tour of the citadel's great hall and library",
      'Dawn visit to the clifftop monastery',
      'The stairway of a thousand steps at sunrise',
      'Artisan workshops in the mountain villages',
      'Sky-garden dinner above the clouds',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ascent',
        description:
          'Ride the mountain railway and the final cable car up to the citadel. Orientation walk along the ramparts as the clouds part below you, then dinner in the great hall.',
      },
      {
        day: 2,
        title: 'The citadel',
        description:
          'A full day with a historian: the great hall, the nine-century-old library, the armoury and the sky-gardens. Evening free to watch the sunset from the western terrace.',
      },
      {
        day: 3,
        title: 'Villages below',
        description:
          'Descend to the mountain villages to meet weavers, woodcarvers and cheesemakers. Lunch in a family-run tavern, then the cable car back up for the night.',
      },
      {
        day: 4,
        title: 'Monastery at dawn',
        description:
          'An early start for the clifftop monastery as the monks begin their chants — an unforgettable hour. Then the stairway of a thousand steps, taken at your own pace, with a celebratory dinner above the clouds.',
      },
      {
        day: 5,
        title: 'The long view',
        description:
          'A final morning on the ramparts and a last look at the sea of cloud before the descent.',
      },
    ],
    image: '/images/skyspire-citadel.jpg',
    reviews: [
      {
        name: 'Nathan Cole',
        rating: 5,
        date: 'May 2026',
        title: 'Nothing prepares you for the view',
        text: 'The monastery at dawn was one of the great travel moments of my life. Superb guiding throughout.',
      },
      {
        name: 'Isabelle Marchand',
        rating: 4,
        date: 'April 2026',
        title: 'Stunning, with steps',
        text: 'Be honest with yourself about the thousand steps — take it slowly and it is magnificent. The citadel itself is extraordinary.',
      },
    ],
  },
  {
    slug: 'mistveil-lochs',
    name: 'Mistveil Lochs',
    country: 'Kessalia',
    region: 'The Highland Realms',
    price: 1049,
    rating: 4.8,
    reviewsCount: 194,
    durationDays: 6,
    tagline: 'Still waters and storied glens.',
    description:
      'In the north of Kessalia, a chain of dark lochs threads between steep green mountains, wreathed in the mist that gives the region its name. This six-day journey is a slow one by design: cruises on glass-still water, walks through ancient pinewoods, evenings in a lochside inn with a peat fire, and the legends — selkies, kelpies and lost clans — told properly, by people who half believe them.',
    highlights: [
      'Sunrise cruise on glass-still Loch Veil',
      'Walk the ancient pinewoods with a ranger',
      'Evening of Kessalian legends by the peat fire',
      'Visit to a working croft and sheepdog display',
      'Photography masterclass at the waterfall glen',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lochside arrival',
        description:
          'Transfer from Kessalia City to the lochside inn at Veilmouth. Evening walk along the shore and dinner by the peat fire.',
      },
      {
        day: 2,
        title: 'The still water',
        description:
          'A dawn cruise on Loch Veil when the water is at its glassiest and the mist hangs low. Afternoon walk in the ancient pinewoods with a ranger.',
      },
      {
        day: 3,
        title: 'Crofts and clans',
        description:
          'Visit a working croft for a sheepdog display and a taste of Kessalian farmhouse baking. Afternoon at leisure; legends and live music at the inn after dinner.',
      },
      {
        day: 4,
        title: 'The waterfall glen',
        description:
          'A photography masterclass in the waterfall glen — tripods provided, mist guaranteed. Free afternoon for the village shops or a rowing boat on the loch.',
      },
      {
        day: 5,
        title: 'Farewell to the mist',
        description:
          'One last shore walk and a slow breakfast before the transfer back to the city.',
      },
    ],
    image: '/images/mistveil-lochs.jpg',
    reviews: [
      {
        name: 'Fiona Gallagher',
        rating: 5,
        date: 'June 2026',
        title: 'Atmospheric and utterly charming',
        text: 'The dawn cruise in the mist was pure magic. The inn is cosy, the food excellent, the stories even better.',
      },
      {
        name: 'David Osei',
        rating: 5,
        date: 'May 2026',
        title: 'A gentle, beautiful week',
        text: 'Perfectly paced — active mornings, lazy afternoons. The photography session improved my pictures enormously.',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jennings',
    trip: 'Azure Bay, March 2026',
    rating: 5,
    text: 'From the first phone call to the flight home, everything was handled. The bay itself is even more beautiful than the photographs — we are already planning our next trip.',
  },
  {
    name: 'Michael Adeyemi',
    trip: 'Frostvale Peaks, February 2026',
    rating: 5,
    text: 'Dog-sledding under a sky full of stars, then the aurora on our last night. WanderWise thought of details we would never have considered ourselves.',
  },
  {
    name: 'Laura Bennett',
    trip: 'Skyspire Citadel, April 2026',
    rating: 5,
    text: 'The guides were superb historians and the organisation was flawless. It felt like travelling with friends who happened to know everything.',
  },
];

export function getDestination(slug) {
  return destinations.find((d) => d.slug === slug) || null;
}

export function getRelatedDestinations(destination, count = 3) {
  if (!destination) {
    return [];
  }
  const sameRegion = destinations.filter(
    (d) => d.slug !== destination.slug && d.region === destination.region
  );
  const others = destinations.filter(
    (d) => d.slug !== destination.slug && d.region !== destination.region
  );
  return [...sameRegion, ...others].slice(0, count);
}

export function getFeaturedDestinations(count = 4) {
  return [...destinations].sort((a, b) => b.rating - a.rating).slice(0, count);
}
