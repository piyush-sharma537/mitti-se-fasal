const cropsData = {
  alluvial: [
    {
      name: "Gehu (गेहूं)",
      emoji: "🌾",
      season: "Rabi",
      rank: 1,
      sowingMonth: "November",
      harvestMonth: "April",
      activeMonths: [false, false, false, false, false, false, false, false, false, false, true, true], // Nov, Dec, Jan, Feb, Mar, Apr (Nov is index 10, Dec 11, Jan 0, Feb 1, Mar 2, Apr 3)
      activeMonthsIndices: [10, 11, 0, 1, 2, 3], // Nov, Dec, Jan, Feb, Mar, Apr
      fertilizers: ["Urea", "DAP (Di-Ammonium Phosphate)", "Muriate of Potash (MOP)", "Zinc Sulphate"],
      steps: [
        "Khet ki achhi tarah jotaai karke mitti ko bhurbhuri banayein aur pata chala kar barabar karein.",
        "Unnat aur swasth beejon (jaise HD-2967, DBW-187) ka chayan karein aur beej upchar zaroor karein.",
        "November ke pehle ya doosre saptah mein seed drill se 4-5 cm gehrai par buwai karein.",
        "Fasal chakra mein pehli sinchai buwai ke 20-25 din baad (Crown Root Initiation stage par) karein.",
        "Sowing ke samay DAP aur potash dalein, aur pehli aur doosri sinchai ke baad nitrogen (Urea) ka chhidkaw karein.",
        "Fasal jab sunehri aur sookhi dikhne lage (April ke aas-paas), tab iski kataai karein."
      ]
    },
    {
      name: "Dhan (धान)",
      emoji: "🍚",
      season: "Kharif",
      rank: 2,
      sowingMonth: "June",
      harvestMonth: "November",
      activeMonthsIndices: [5, 6, 7, 8, 9, 10], // Jun, Jul, Aug, Sep, Oct, Nov
      fertilizers: ["DAP", "Urea", "Zinc Sulphate", "Neem Coated Urea"],
      steps: [
        "May-June mein nursery taiyar karein aur lagbhag 21-25 din ke paudh ko mukhya khet mein lagane ke liye nikalen.",
        "Mukhya khet mein pani bhar kar achhi tarah 'puddling' (kadwa karna) karein taaki pani tik sake.",
        "Paudhon ko 15-20 cm ki doori par line se lagayein aur shuruaati dino mein khet mein 2-3 inch paani banaye rakhein.",
        "Niraye-gudaye samay par karein ya weedicides ka upyog karke kharpatwar par niyantran karein.",
        "Urea ka do se teen baar mein split dose dein, zinc ki kami door karne ke liye Zinc Sulphate ka upyog karein.",
        "October-November mein jab baaliyan sunehri ho jayein aur mitti sookh jaye, tab kataai karein."
      ]
    },
    {
      name: "Ganna (गन्ना)",
      emoji: "🎋",
      season: "Annual",
      rank: 3,
      sowingMonth: "February",
      harvestMonth: "January (Agla Saal)",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Saal bhar ki fasal
      fertilizers: ["DAP", "Urea", "Single Super Phosphate (SSP)", "Potash"],
      steps: [
        "Ganne ki buwai ke liye gehri jotaai zaroori hai. Naliyan (furrows) banakar taiyari karein.",
        "Do ya teen aankh wale swasth ganne ke tukdon ka chayan karein aur fungicide se upcharit karein.",
        "Naliyon mein 3-4 inch gehri mitti daalkar tukdon ko daba dein aur halki sinchai karein.",
        "Garmiyon mein har 10-15 din par aur barasat mein aavashyakta anusar sinchai karein.",
        "Fasal ko girne se bachane ke liye mitti chadhana (earthing up) aur ganne ki bandhaai samay par karein.",
        "10-12 mahine baad jab ganne ka ras gadha ho jaye aur nichi pattiyan sookh jayein, tab kataai karein."
      ]
    },
    {
      name: "Makka (मक्का)",
      emoji: "🌽",
      season: "Kharif",
      rank: 4,
      sowingMonth: "June",
      harvestMonth: "October",
      activeMonthsIndices: [5, 6, 7, 8, 9], // Jun, Jul, Aug, Sep, Oct
      fertilizers: ["NPK (12:32:16)", "Urea", "Zinc Sulphate"],
      steps: [
        "Makka ke liye jal-nikas (drainage) ka achha prabandh hona zaroori hai, paani rukna nahi chahiye.",
        "Line-to-line 60 cm aur plant-to-plant 20 cm ki doori banakar beejon ki buwai karein.",
        "Beej ko 3-4 cm ki gehrai par boyein.",
        "Fasal mein kharpatwar niyantran ke liye 25-30 din par niraye-gudaye karein.",
        "Nitrogen, Phosphorus aur Potash ki santulit maatra dein. Tasel stage par nami banaye rakhein.",
        "Jab bhutte ke daane sakht ho jayein aur outer covering peel padne lage, tab kataai karein."
      ]
    },
    {
      name: "Sarson (सरसों)",
      emoji: "🌼",
      season: "Rabi",
      rank: 5,
      sowingMonth: "October",
      harvestMonth: "March",
      activeMonthsIndices: [9, 10, 11, 0, 1, 2], // Oct, Nov, Dec, Jan, Feb, Mar
      fertilizers: ["Single Super Phosphate (SSP)", "Urea", "Gypsum (Sulphur ke liye)"],
      steps: [
        "Mitti ko bhurbhuri banakar moist seedbed taiyar karein taaki germination achha ho.",
        "October ke mahine mein 30 cm ki row spacing par beej ki buwai karein.",
        "Sarson ko sulphur ki bohot zaroorat hoti hai, isliye SSP aur Gypsum ka use karein.",
        "Fasal mein lagbhag 2 sinchai ki zaroorat hoti hai - pehli phool aane se pehle aur doosri daane bante samay.",
        "Aphids (mahu) ke keet se bachao ke liye neem oil ya insecticide ka chhidkaw karein.",
        "Pattiyan aur phaliyan jab sunehri-peeli ho jayein tab subah ke samay kataai karein taaki phaliyan chatkein nahi."
      ]
    }
  ],
  black: [
    {
      name: "Kapas (कपास)",
      emoji: "☁️",
      season: "Kharif",
      rank: 1,
      sowingMonth: "May",
      harvestMonth: "November",
      activeMonthsIndices: [4, 5, 6, 7, 8, 9, 10], // May to Nov
      fertilizers: ["DAP", "Urea", "MOP", "Magnesium Sulphate"],
      steps: [
        "Kali mitti moisture hold karti hai, isliye gehrai tak jotaai karke taiyar karein.",
        "Bt Cotton ya unnat beejon ka chayan karein aur sahi spacing (90x60 cm) par buwai karein.",
        "Rainfed area mein barasat se pehle ya pehli barish ke baad buwai karein.",
        "Shuruaati 40-50 din fasal ko kharpatwar se mukt rakhein.",
        "N-P-K ke sath magnesium sulphate ka spray karein taaki pattiyan laal na ho.",
        "Bolls (tinde) khulne par ruai ko saaf aur sookhe mausam mein haath se chunein."
      ]
    },
    {
      name: "Soyabean (सोयाबीन)",
      emoji: "🫘",
      season: "Kharif",
      rank: 2,
      sowingMonth: "June",
      harvestMonth: "October",
      activeMonthsIndices: [5, 6, 7, 8, 9], // Jun to Oct
      fertilizers: ["NPK Blend", "Single Super Phosphate", "Rhizobium Culture (Seed treatment)"],
      steps: [
        "Monsoon ki pehli achhi barish (lagbhag 75-100 mm) hone par hi buwai karein.",
        "Beej ko Rhizobium culture se treat karein taaki nitrogen fixation achhi ho sake.",
        "Beej ko 2-3 cm se zyada gehra na boyein aur row distance 45 cm rakhein.",
        "Soyabean mein kharpatwar bohot jaldi ugte hain, isliye starting ke 30 din saaf-safai rakhein.",
        "Fasal mein phool aane (flowering) aur pod formation ke time par moisture ki kami nahi honi chahiye.",
        "Pattiyan peeli hokar jhadne lagein aur phaliyan sookh jayein tab harvested karein."
      ]
    },
    {
      name: "Jowar (ज्वार)",
      emoji: "🌾",
      season: "Kharif",
      rank: 3,
      sowingMonth: "June",
      harvestMonth: "October",
      activeMonthsIndices: [5, 6, 7, 8, 9], // Jun to Oct
      fertilizers: ["Urea", "DAP", "Azospirillum (Biofertilizer)"],
      steps: [
        "Khet ko jot kar barabar karein. Jowar dry areas mein aasani se ug sakta hai.",
        "Beej ki buwai 3-4 cm gehrai par 45x15 cm ki doori par karein.",
        "Rainy season mein extra irrigation ki zaroorat nahi hoti, par drought mein flowering time pani dein.",
        "Nitrogen ki aadhi maatra buwai ke samay aur aadhi buwai ke 30-40 din baad dein.",
        "Chimti (shoot fly) keet se bachav ke liye samay par upachar karein.",
        "Jab daane sakht ho jayein aur unke base par black spot ban jaye, tab fasal kaat lein."
      ]
    },
    {
      name: "Gehu (गेहूं)",
      emoji: "🌾",
      season: "Rabi",
      rank: 4,
      sowingMonth: "November",
      harvestMonth: "April",
      activeMonthsIndices: [10, 11, 0, 1, 2, 3], // Nov to Apr
      fertilizers: ["Urea", "DAP", "Zinc Sulphate"],
      steps: [
        "Kali mitti mein rabi season ke gehu ke liye moisture conservation zaroori hai.",
        "Pre-sowing irrigation (palewa) karke khet ko boyin ke liye taiyar karein.",
        "November ke mid mein beej boyein. Row spacing 22.5 cm rakhein.",
        "Kali mitti mein paani der tak rukta hai, isliye limited aur dhyan se sinchai karein.",
        "Khaad ka prayog mitti ki janch ke hisab se santulit maatra mein karein.",
        "April mein fasal sunehri hone par dhoop mein kataai aur thresing karein."
      ]
    }
  ],
  laal: [
    {
      name: "Moongfali (मूंगफली)",
      emoji: "🥜",
      season: "Kharif",
      rank: 1,
      sowingMonth: "June",
      harvestMonth: "October",
      activeMonthsIndices: [5, 6, 7, 8, 9], // Jun to Oct
      fertilizers: ["Gypsum (Calcium & Sulphur)", "SSP", "Urea"],
      steps: [
        "Mitti ko 2-3 baar jot kar bhurbhuri banayein. Sandy clay loam laal mitti sabse upyukt hai.",
        "Swasth aur mote daano ka selection karein aur fungicidal treatment karein.",
        "Rainy season start hote hi 30x10 cm spacing par seeds ki sowing karein.",
        "Sowing ke 40-45 din baad Gypsum zaroor dalein jo pod develop karne me madad karta hai.",
        "Pegging (suiya banna) stage par mitti ko bilkul na chhedein aur nami banaye rakhein.",
        "Pattiyan peeli padne par aur shell ke andar ka hissa brown-black hone par pod ki khudai karein."
      ]
    },
    {
      name: "Ragi (रागी)",
      emoji: "🌾",
      season: "Kharif",
      rank: 2,
      sowingMonth: "June",
      harvestMonth: "October",
      activeMonthsIndices: [5, 6, 7, 8, 9], // Jun to Oct
      fertilizers: ["Urea", "Super Phosphate", "Potash"],
      steps: [
        "Ragi ek nutritional millet hai jo kam pani aur laal mitti me bohot achha hota hai.",
        "Direct seeding ya transplanting dono tarike apna sakte hain. Transplanting me yield achhi hoti hai.",
        "Nursery 20 din ki hone par main field me 25x10 cm spacing par transplate karein.",
        "Kam paani ki zaroorat hoti hai par dry spells me light watering karein.",
        "Nitrogen ko do bar split doses me dein.",
        "Jab earheads light brown rang ke ho jayein tab unhe kaat lein aur dhoop me sukhayein."
      ]
    },
    {
      name: "Kaju (काजू)",
      emoji: "🥜",
      season: "Perennial",
      rank: 3,
      sowingMonth: "July",
      harvestMonth: "March (Agla Saal)",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Perennial tree
      fertilizers: ["Compost / Organic Manure", "NPK 15:15:15", "Rock Phosphate"],
      steps: [
        "Laal aur well-drained mitti me 60x60x60 cm ke gaddhe (pits) banakar 7-8 meter ki doori par lagayein.",
        "Gaddhon me gobar ki khaad aur topsoil bharein, fir grafting plant lagayein.",
        "Shuruaati 2-3 saal tak young plants ko regular pani dein aur weeding karein.",
        "Har saal monsoon ke dauran compost aur NPK fertilizers ka mixture tree basin me dalein.",
        "Unproductive branches ki pruning karein taaki dhoop aur hawa andar ja sake.",
        "Phal jab mature hokar zameen par gir jayein, tab kaju nikal kar sukhayein."
      ]
    },
    {
      name: "Tamarind (इमली)",
      emoji: "🫛",
      season: "Perennial",
      rank: 4,
      sowingMonth: "June",
      harvestMonth: "February",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Perennial tree
      fertilizers: ["FYM (Farmyard Manure)", "Urea", "Superphosphate"],
      steps: [
        "Imli ka ped laal mitti aur dry climates me bohot bade size ka hota hai.",
        "Grafting ya seedlings ko pits me monsoon ke time lagayein.",
        "Ped ko shuruaat me pani dein, bada hone par iski root system bohot gahri chali jati hai.",
        "Monsoon ke shuru me gobar ki khaad basin me dalein.",
        "Pehle 3-4 saal training aur pruning karein taaki tree structure strong bane.",
        "Guchhon me jab imli dry aur brown ho jaye, tab lathi ki madad se todein."
      ]
    }
  ],
  laterite: [
    {
      name: "Chai (चाय)",
      emoji: "🍵",
      season: "Perennial",
      rank: 1,
      sowingMonth: "October",
      harvestMonth: "March (Harvest cycle continuous)",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Pure saal leaves pluck hote hain
      fertilizers: ["Ammonium Sulphate", "Super Phosphate", "Muriate of Potash"],
      steps: [
        "Laterite mitti dhalan (slopes) par hoti hai, jahan pani bilkul jama nahi hona chahiye.",
        "Acidic soil (pH 4.5-5.5) chai ke liye best hai. Shade trees bhi sath me ugayein.",
        "Tea clones ya seedlings ko contour lines me lagayein taaki soil erosion kam ho.",
        "Light aur continuous shower ki zaroorat hoti hai. Mulching zaroor karein.",
        "Nitrogenous fertilizer (Ammonium sulphate) ka use plucking period me karein.",
        "Har 7-10 din me upar ki do pattiyan aur ek kali (two leaves and a bud) ko plucking karein."
      ]
    },
    {
      name: "Coffee (कॉफी)",
      emoji: "☕",
      season: "Perennial",
      rank: 2,
      sowingMonth: "June",
      harvestMonth: "December",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Round the year care
      fertilizers: ["NPK Mixture", "Organic Manure", "Zinc Sulphate"],
      steps: [
        "Coffee ke liye hilly slopes aur rich laterite mitti suitable hai jisme organic matter ho.",
        "Robusta ya Arabica plants ko bade pedon ki chhaya (shade) me lagayein.",
        "June me monsoon ke aane par nursery se seedlings lekar pits me transplant karein.",
        "Regular pruning karein taaki naye productive shoots ban sakein.",
        "Pre-monsoon aur post-monsoon me NPK ka santulit dose dein.",
        "Coffee ke berries jab bright red (pecherry) rang ke ho jayein tab unhe hath se todein."
      ]
    },
    {
      name: "Kela (केला)",
      emoji: "🍌",
      season: "Annual",
      rank: 3,
      sowingMonth: "June",
      harvestMonth: "April",
      activeMonthsIndices: [5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3], // 10-12 months
      fertilizers: ["Potash", "Urea", "DAP", "Neem Cake"],
      steps: [
        "Laterite mitti me drainage badhiya hona chahiye. Suckers ya Tissue culture plants ka chayan karein.",
        "Plants ko 1.8x1.8 meter ki distance par pits me lagayein.",
        "Drip irrigation system sabse best hai kyunki kela ko zyada aur niyamit pani chahiye.",
        "Potash ka heavy dose dein jo kela ke bunch size aur mithaas ko badhata hai.",
        "Naye side suckers ko kaat-te rahein (desuckering) taaki main plant ko sara nutrition mile.",
        "Guchha aane ke 90-120 din baad jab kela ka angular shape round hone lage, tab harvested karein."
      ]
    },
    {
      name: "Kala Mirch (काली मिर्च)",
      emoji: "🌶️",
      season: "Perennial",
      rank: 4,
      sowingMonth: "June",
      harvestMonth: "January",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Climber on support tree
      fertilizers: ["FYM", "NPK Fertilizer", "Neem Cake", "Trichoderma (Bio-fungicide)"],
      steps: [
        "Kala mirch ek climber (bel) hai, isko support dene ke liye Supari, Nariyal ya Erythrina ke ped lagayein.",
        "Support tree ke base se 30 cm door pits khod kar rooted cuttings lagayein.",
        "Laterite soil me drainage achhi rakhein taaki root rot (sadan) na ho.",
        "Barasat ke shuru me gobar khaad aur NPK dein. Trichoderma ka use root health ke liye karein.",
        "Bel ko ped par chadhte samay halka bandhein.",
        "Spikes jab green se yellow ya red hone lagein tab unhe todein aur dhoop me kaala hone tak sukhayein."
      ]
    }
  ],
  desert: [
    {
      name: "Bajra (बाजरा)",
      emoji: "🌾",
      season: "Kharif",
      rank: 1,
      sowingMonth: "July",
      harvestMonth: "October",
      activeMonthsIndices: [6, 7, 8, 9], // Jul to Oct
      fertilizers: ["Urea", "SSP", "Zinc Sulphate"],
      steps: [
        "Reti mitti me bajra sabse kam paani me hone wali mukhya fasal hai.",
        "July me monsoon ki barish hone par beejon ki sowing karein. Row spacing 45 cm rakhein.",
        "Mitti me nami banaye rakhne ke liye light hoeing karein jo dust mulch ka kaam karti hai.",
        "Kam paani ki zaroorat hoti hai, par drought ke dauran flowering stage par watering karein.",
        "Nitrogen ka chhidkaw do bar me karein, pehli buwai par aur doosra 30 din baad.",
        "Jab earheads poore dry ho jayein aur daane hard ho jayein tab kataai karein."
      ]
    },
    {
      name: "Khejur / Date Palm (खजूर)",
      emoji: "🌴",
      season: "Perennial",
      rank: 2,
      sowingMonth: "August",
      harvestMonth: "June (Dhoop me pakaayein)",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      fertilizers: ["Organic Manure", "NPK", "Sulphate of Potash"],
      steps: [
        "Date palm tissue culture plants ko sandy desert soil me lagayein jahan sunlight bohot ho.",
        "Lagbhag 1x1x1 meter ke pits banakar dry soil aur FYM mixture se bharein.",
        "Halaanki ye desert plant hai, par quality fruit ke liye drip irrigation se pani zaroor dein.",
        "Male aur Female tree alag hote hain, isliye hand pollination (hath se paragan) karna zaroori hai.",
        "Thorns aur dry leaves ki pruning har saal karein.",
        "Fruits jab green se yellow/red (Khalal stage) ya soft (Rutab stage) ho jayein tab harvested karein."
      ]
    },
    {
      name: "Til (तिल)",
      emoji: "🌱",
      season: "Kharif",
      rank: 3,
      sowingMonth: "July",
      harvestMonth: "October",
      activeMonthsIndices: [6, 7, 8, 9], // Jul to Oct
      fertilizers: ["Urea", "SSP", "Sulphur powder"],
      steps: [
        "Til ke barikh beejon ko reti mitti me halki gehrai (1-2 cm) par boyein.",
        "Beej ko sand (ret) ke sath mila kar boyein taaki ghani buwai na ho.",
        "Germination ke baad extra plants ko nikal kar spacing 15 cm kar dein.",
        "Fasal ko bilkul kam paani chahiye, waterlogging se fasal turant kharab hoti hai.",
        "Sulphur ka use karein jo til me oil content ko badhata hai.",
        "Fasal jab peeli pad jaye aur pattiyan jhadne lagein (capsules brown ho jayein) tab harvested karein."
      ]
    },
    {
      name: "Moong Dal (मूंग)",
      emoji: "🫘",
      season: "Kharif",
      rank: 4,
      sowingMonth: "July",
      harvestMonth: "September",
      activeMonthsIndices: [6, 7, 8], // Jul, Aug, Sep (Fast crop)
      fertilizers: ["DAP", "Rhizobium Culture", "Gypsum"],
      steps: [
        "Moong short-duration leguminous fasal hai jo dry soil ke liye bohot achhi hai.",
        "Beej ko Rhizobium bio-fertilizer se upcharit karke 30x10 cm par boyein.",
        "Ye mitti me nitrogen content ko badhati hai, isliye nitrogen fertilzer kam chahiye.",
        "Do barish ke beech agar lamba gap ho to ek halki sinchai karein.",
        "Pattiyon par dhabbe (leaf spot) se bachav ke liye antifungal spray karein.",
        "Jab 80% pod (phaliyan) kaali aur sookhi ho jayein, tab unhe todein ya poora plant kaat lein."
      ]
    }
  ],
  pahaadi: [
    {
      name: "Seb (सेब)",
      emoji: "🍎",
      season: "Perennial",
      rank: 1,
      sowingMonth: "January",
      harvestMonth: "August",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7], // Jan to Aug
      fertilizers: ["Well-rotted FYM", "Calcium Ammonium Nitrate (CAN)", "Superphosphate", "MOP"],
      steps: [
        "Hilly contour terraces par pit taiyar karein aur winter season (dormant phase) me planting karein.",
        "Apple plants ko cooling periods (chilling hours) ki zaroorat hoti hai.",
        "Trees ko proper central leader ya open modified system me training/pruning karein.",
        "Spring season me phool aane par bees ki madad se cross-pollination zaroori hai.",
        "Gobar ki sadi khaad aur CAN (Calcium Ammonium Nitrate) ko spring season ke time dalein.",
        "Phal jab bright red aur sweet ho jayein tab unhe carefully hath se tod kar box me pack karein."
      ]
    },
    {
      name: "Aalu (आलू)",
      emoji: "🥔",
      season: "Rabi",
      rank: 2,
      sowingMonth: "October",
      harvestMonth: "February",
      activeMonthsIndices: [9, 10, 11, 0, 1], // Oct to Feb
      fertilizers: ["DAP", "MOP", "Urea", "Zinc Sulphate"],
      steps: [
        "Mitti ko gehri jotaai karke ridges aur furrows banayein. Humus-rich pahaadi mitti aalu ke liye best hai.",
        "Swasth aur sprouts wale tuber (beej aalu) ka chayan karein.",
        "Ridges par 10-15 cm gehrai par beej aalu boyein aur mitti se dhak dein.",
        "Plants jab 15-20 cm bade ho jayein tab ridges par aur mitti chadhayein (earthing up).",
        "Potash ka high dose aalu ke size ko badhata hai.",
        "Pattiyan jab dry hokar peeli pad jayein, tab aalu ki khudai karein aur shaded jagah sukhayein."
      ]
    },
    {
      name: "Adarak (अदरक)",
      emoji: "🫚",
      season: "Kharif",
      rank: 3,
      sowingMonth: "April",
      harvestMonth: "December",
      activeMonthsIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11], // Apr to Dec
      fertilizers: ["Neem Cake", "Superphosphate", "Potash", "Urea"],
      steps: [
        "Pahaadi slopes par drainage achhi honi chahiye. Raised beds banakar adarak lagayein.",
        "Swasth rhizomes (ganthein) jinme sprouts ho unhe seeds ke roop me use karein.",
        "Beds par mulch (pattiyan/ghas) zaroor lagayein jo moisture hold karega aur dhoop se bachayega.",
        "Waterlogging se adarak sadh sakta hai (rhizome rot), isliye paani nikalne ka rasta rakhein.",
        "Khaad ke roop me organic compost aur neem cake ka kafi use karein.",
        "Leaves jab yellow padkar dry ho jayein tab adarak ki digging karke harvesting karein."
      ]
    },
    {
      name: "Rajma (राजमा)",
      emoji: "🫘",
      season: "Kharif",
      rank: 4,
      sowingMonth: "May",
      harvestMonth: "September",
      activeMonthsIndices: [4, 5, 6, 7, 8], // May to Sep
      fertilizers: ["DAP", "Urea", "MOP"],
      steps: [
        "Rajma pahaadi thande mausam aur well-drained organic mitti me bohot swadisht hota hai.",
        "Row spacing 45 cm aur plant spacing 10 cm par seeds ki sowing karein.",
        "Pole types (bel wali) kism ke liye lathiyon (stakes) ka sahara dein.",
        "Regular moderate watering karein, flowering time par moisture maintain rakhein.",
        "Root nodules achhe se develop ho sakein isliye heavy nitrogen ki zaroorat nahi hoti.",
        "Phaliyan jab yellow-brown hokar dry ho jayein tab plants ko ukhaad kar daane nikal lein."
      ]
    }
  ],
  saline: [
    {
      name: "Jau / Barley (जौ)",
      emoji: "🌾",
      season: "Rabi",
      rank: 1,
      sowingMonth: "November",
      harvestMonth: "April",
      activeMonthsIndices: [10, 11, 0, 1, 2, 3], // Nov to Apr
      fertilizers: ["Gypsum (Mitti ki salinity kam karne ke liye)", "Urea", "DAP"],
      steps: [
        "Namkeen mitti me salinity ko manage karne ke liye pehle gypsum daal kar khet ko leached (dhona) karein.",
        "Barley salinity ko tolerate kar sakti hai, isliye ye saline soils ke liye ideal crop hai.",
        "November me line spacing 22.5 cm par seeds boyein.",
        "Saline water se sinchai karne se bachein. Agar ho sake to shuruaat me fresh water dein.",
        "Nitrogen fertilizer ko split doses me apply karein.",
        "Phaliyan aur daane jab dried aur yellow ho jayein tab April me harvested karein."
      ]
    },
    {
      name: "Sarson (सरसों)",
      emoji: "🌼",
      season: "Rabi",
      rank: 2,
      sowingMonth: "October",
      harvestMonth: "March",
      activeMonthsIndices: [9, 10, 11, 0, 1, 2], // Oct to Mar
      fertilizers: ["Gypsum", "SSP", "Ammonium Sulphate"],
      steps: [
        "October me seedbed ko saline free zone banane ke liye ridges banayein.",
        "Ridges ke slopes par sowing karein jisse salt top par deposit ho aur roots bach sakein.",
        "Gypsum aur sulphur ka heavy use karein jo mitti ke sodium level ko counter karta hai.",
        "Germination ke time halki sinchai zaroor karein.",
        "Kharpatwar ko regular clean karte rahein.",
        "Phaliyan dry hokar brown ho jayein tab kataai karke thresing karein."
      ]
    },
    {
      name: "Senji / Sweet Clover (सेंजी)",
      emoji: "☘️",
      season: "Rabi",
      rank: 3,
      sowingMonth: "October",
      harvestMonth: "February",
      activeMonthsIndices: [9, 10, 11, 0, 1], // Oct to Feb
      fertilizers: ["Superphosphate", "Rhizobium Culture"],
      steps: [
        "Senji ek leguminous green manure / fodder crop hai jo namkeen mitti ko sudharne me madad karti hai.",
        "Seeds ka outer coat hard hota hai, isliye buwai se pehle rubbing/treatment karein.",
        "Khet me paani bhar kar seeds ka chhidkaw (broadcasting) karein.",
        "Fodder ke liye regular light waterings ki aavashyakta hoti hai.",
        "Green manure ke roop me use karna ho to flowering stage par isko mitti me jot kar daba dein.",
        "Fodder ke liye February me jab plants green aur soft ho tab cutting karein."
      ]
    },
    {
      name: "Salt-tolerant Dhan (नमक-सहनशील धान)",
      emoji: "🌾",
      season: "Kharif",
      rank: 4,
      sowingMonth: "June",
      harvestMonth: "November",
      activeMonthsIndices: [5, 6, 7, 8, 9, 10], // Jun to Nov
      fertilizers: ["Zinc Sulphate", "Neem Coated Urea", "Gypsum"],
      steps: [
        "Saline aur coastal areas ke liye CSR-30 ya CSR-43 jaise salt-tolerant seeds ka chayan karein.",
        "Nursery ko saline-free areas me taiyar karein aur 30-35 din ke strong seedlings transplant karein.",
        "Khet me regular water level maintain rakhein taaki soil salinity dilute rahe.",
        "Zinc ki kami namkeen mitti me bohot hoti hai, isliye Zinc Sulphate zaroor dalein.",
        "Organic manure aur dhaincha green manure ka pehle use karein jo soil quality sudharta hai.",
        "November me baaliyan pakne par kataai karein."
      ]
    }
  ],
  peaty: [
    {
      name: "Nariyal (नारियल)",
      emoji: "🥥",
      season: "Perennial",
      rank: 1,
      sowingMonth: "June",
      harvestMonth: "Barahmaasi (Round the year)",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      fertilizers: ["Salt (Sodium chloride)", "Neem Cake", "MOP", "Organic Compost"],
      steps: [
        "Peaty soil waterlogged aur heavy hoti hai, isliye raised bunds ya mounts banakar seedling lagayein.",
        "1x1x1 meter ke pits banayein, niche ret, mitti aur organic compost ka mixture bharein.",
        "Nariyal ko sodium chloride (common salt) ki zaroorat hoti hai jo peaty soil me helpful hai.",
        "Rainy season start hote hi strong seedlings ko plant karein.",
        "Young trees ke aas-paas pani na jamne dein, drainage channel banayein.",
        "Plantation ke 4-5 saal baad flowering hoti hai aur har mahine mature coconuts harvest kiya ja sakte hain."
      ]
    },
    {
      name: "Supari / Areca Nut (सुपारी)",
      emoji: "🍂",
      season: "Perennial",
      rank: 2,
      sowingMonth: "June",
      harvestMonth: "November",
      activeMonthsIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      fertilizers: ["Compost / Gobar Khaad", "NPK 100:40:140", "Green leaf mulching"],
      steps: [
        "Arecanut ko high moisture aur well-drained peaty soils pasand hain.",
        "Seedlings ko 2.7x2.7 meter ki spacing par shandy layers ke sath lagayein.",
        "Mitti me organic matter bohot hota hai, par acidity kam karne ke liye lime (chuna) dalein.",
        "Fasal me summer season me regular irrigation aur monsoon me heavy drainage channels zaroori hain.",
        "Root rot se bachav ke liye Bordeaux mixture drenching karein.",
        "Supari ke guchhe jab orange-yellow ho jayein tab unhe harvested karein aur dhoop me sukhayein."
      ]
    },
    {
      name: "Dhan / Paddy (धान)",
      emoji: "🍚",
      season: "Kharif",
      rank: 3,
      sowingMonth: "June",
      harvestMonth: "November",
      activeMonthsIndices: [5, 6, 7, 8, 9, 10], // Jun to Nov
      fertilizers: ["Lime (Acidity control)", "Rock Phosphate", "Urea"],
      steps: [
        "Peaty mitti acidic hoti hai (low pH), isliye buwai se pehle Lime (chuna) daal kar acidity control karein.",
        "Waterlogging tolerance wali local ya unnat paddy varieties ka selection karein.",
        "Rainy season aane par nursery se seedlings ko puddle field me transplant karein.",
        "Paddy peaty soil me bohot achhi hoti hai kyunki ye organic matter ko consume karti hai.",
        "Acidity aur iron toxicity se bachne ke liye proper drainage-flush system banayein.",
        "Sunehri baaliyan hone par kataai karke dhoop me sukhayein."
      ]
    },
    {
      name: "Jute (जूट)",
      emoji: "🌱",
      season: "Kharif",
      rank: 4,
      sowingMonth: "March",
      harvestMonth: "August",
      activeMonthsIndices: [2, 3, 4, 5, 6, 7], // Mar to Aug
      fertilizers: ["Urea", "SSP", "Potash"],
      steps: [
        "Jute ko garm aur humid mausam aur peaty/daldali mitti bohot raas aati hai.",
        "March-April me broadcast ya line sowing karein. Row distance 30 cm rakhein.",
        "Shuruaat me light irrigation dein, par 3-4 feet bada hone par ye waterlogging jhel sakta hai.",
        "Nitrogen (Urea) ka split dose growth ko tez aur fibers ko lamba karta hai.",
        "Kataai tab karein jab fasal me pod formation start ho (buwai ke 120-150 din baad).",
        "Retting (galana): Kataai ke baad bundles ko paani me 10-15 din ke liye duba kar rakhein taaki fiber alag ho sake."
      ]
    }
  ]
};

module.exports = cropsData;
