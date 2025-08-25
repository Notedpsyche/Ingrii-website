const footData = [
  {
    id: 1,
    e_code: 'E100',
    title: 'Curcumin / Turmeric',
    info: 'Curcumin is the main yellow-orange pigment of turmeric powder.(Curcuma longa or saffron from India). It can be isolated by steam distillation, or extracted by chemical extraction solvents. \n It is used as a natural coloring agent in food products, and can also be produced artificially. It is used in pastries, confectionery, sauces and soups.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 2,
    e_code: 'E1000',
    title: 'Cholic acid',
    info: 'Part of the bile of vertebrates, colic acid is one of the two main bile acids produced by the liver, where it is synthesized from cholesterol. \n Extract of cow bile, can be produced synthetically. Colorless plates or a white crystalline powder. \n There are no known side effects to date. It is also used in the manufacture of pharmaceutical products.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: 'Permitted; no major risks at typical dietary exposure',
    countries_banned: 'Permitted in most countries'
  },
  {
    id: 3,
    e_code: 'E1001',
    title: 'Choline salts and esters',
    info: 'Choline is an essential nutrient generally classified in the class of vitamins B. Choline is widely present in the diet. \n The reason for the use of this additive is an agent that forms or preserves a mixture of substances normally incapable of mixing, for example: oil and water. \n There is no known secondary effect.  This additive seems to be widely used in baby foods.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: 'Permitted; no major risks at typical dietary exposure',
    countries_banned: 'Permitted in most countries'
  },
  {
    id: 4,
    e_code: 'E101',
    title: 'Riboflavin (Vitamin B2)',
    info: 'Natural riboflavin is the vitamin B2 found in wheat bran, eggs, meat and milk, among other things. They are used as natural coloring agents in food products. \n These dyes are naturally produced in the liver, kidney, eggs, milk and vegetables. They can also be prepared industrially by the synthesis of certain yeasts. E101 gives food a yellow color, but its use is limited by its low solubility.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 5,
    e_code: 'E101a',
    title: 'Riboflavin-5\'-Phosphate',
    info: 'Yellow-orange',
    e_type: 'Yellow-orange',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 6,
    e_code: 'E102',
    title: 'Tartrazine',
    info: 'E102 gives a yellow color to food products and is soluble in water. \n It is used in desserts, cookies, bread, flour, sauces, mayonnaises, soups, juices, soft drinks, liquors, alcoholic beverages, cheeses, canned seafood, fish products, canned vegetables, pickles, pasta, chips, snack, sweets and candies.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Synthetic azo dye; hyperactivity concerns; allergy risk',
    countries_banned: 'Warning label in EU; historically banned in Norway/Austria'
  },
  {
    id: 7,
    e_code: 'E103',
    title: 'Alkannin',
    info: 'It is strong yellow. It is obtained derived from petroleum. Belongs to the group of azo dyes. It is used in pastry and ice cream production. \n In small doses can cause problems of hyperactivity in children by the consumption of the dye.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Azo dye (Chrysoine resorcinol); safety concerns',
    countries_banned: 'Not permitted in EU/USA'
  },
  {
    id: 8,
    e_code: 'E104',
    title: 'Quinoline Yellow',
    info: 'E104 additive is used to give yellow and orange colors.  Since it is a synthetic substance, it is a harmful substance, ie carcinogen. It is more harmful to children than adults. While hyperactivity has side effects in children, it can cause side effects such as skin shedding and asthma in older age groups. Although its effect is temporary in adults, it may be permanent in children. \n It is an artificial petrochemical compound, yellow or green. E104 is highly soluble in water. It is also used in cosmetics such as hair products, lipsticks and perfumes, as well as in a wide variety of foods. It is potentially carcinogenic, including its production residues and is also neurotoxic.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Quinoline Yellow; hyperactivity/sensitivity concerns',
    countries_banned: 'Warning in EU; not approved in USA'
  },
  {
    id: 9,
    e_code: 'E105',
    title: 'Fast Yellow AB',
    info: 'Yellow',
    e_type: 'Yellow',
    halal_status: 'Doubtful',
    risk_factor: 'Fast Yellow AB; safety concerns',
    countries_banned: 'Banned/not permitted in many countries incl. EU/USA'
  },
  {
    id: 10,
    e_code: 'E106',
    title: 'Riboflavin-5-Sodium Phosphate',
    info: 'Yellow',
    e_type: 'Yellow',
    halal_status: 'Doubtful',
    risk_factor: 'Riboflavin derivatives; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 11,
    e_code: 'E107',
    title: 'Yellow 2G',
    info: 'It is a synthetic coal tar and yellow azo dye. It appears to cause allergic or intolerance reactions, particularly amongst those with an aspirin intolerance and asthma sufferers. \n Currently only the UK in the European Union uses this dye and the EU is proposing a total ban. Its use is banned in Austria, Japan, Norway, Sweden, Switzerland and the United States.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Yellow 2G; possible carcinogenicity concerns',
    countries_banned: 'Use suspended/banned in EU'
  },
  {
    id: 12,
    e_code: 'E110',
    title: 'Sunset Yellow FCF ',
    info: 'It is used as a synthetic coloring agent in food and beverage products. It is a synthetic azo dye and is generally used in fermented foods that require heat treatment. \n Used in the production of bakery product, cakes, sweets, snacks, ice cream, beverages and canned fish, instant soups and some syrup-like drugs. \n Side effects are  runny nose (rhinitis), nasal congestion, allergy, hyperactivity, kidney tumor, chromosome damage, abdominal pain, nausea and vomiting and indigestion.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Sunset Yellow; hyperactivity/allergy concerns',
    countries_banned: 'Warning in EU; historically banned in Norway'
  },
  {
    id: 13,
    e_code: 'E1100',
    title: 'Amylases',
    info: 'A digestive enzyme classified as saccharidase (an enzyme that breaks polysaccharides, especially starches, into sugars). \n The origin of this additive is the pancreas of pigs, green mold and genetic engineering. \n Amylase is also synthesized in many fruit species during ripening, which makes them sweeter and also during the germination of cereals. \nThis additive is used especially in bakery.',
    e_type: 'Flour treatment agent',
    halal_status: 'Doubtful',
    risk_factor: 'Amylase; enzyme; allergenicity possible',
    countries_banned: 'Permitted as processing aid'
  },
  {
    id: 14,
    e_code: 'E1101',
    title: 'Proteases',
    info: 'Natural proteases are very abundant enzymes in the living realm, they break the peptide bonds of proteins. \n Their biological functions are varied: they intervene in the maturation of proteins, the digestion of food, the blood coagulation, the remodeling of tissues during the development of the organism and the healing. \n It is divided into 4 classes: Peptidase, Papain, Bromelain and Ficin. \n It is also used in the kitchen to soften meat, and in alcoholic beverages. \n Proteases are also inserted into some pharmaceutical products. ',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: 'Pepsin; enzyme; allergenicity possible',
    countries_banned: 'Permitted as processing aid'
  },
  {
    id: 15,
    e_code: 'E1102',
    title: 'Glucose oxidase',
    info: 'Natural glucose oxidase is an oxidoreductase enzyme that in cells helps break down sugar into its metabolites. \n Commercially, the additive is biosynthesized from microorganisms (fungi) Aspergillus niger or penicillium notatum. \n It can also be inserted into cosmetic products.',
    e_type: 'Antioxidant',
    halal_status: 'Doubtful',
    risk_factor: 'Glucose oxidase; enzyme; allergenicity possible',
    countries_banned: 'Permitted as processing aid'
  },
  {
    id: 16,
    e_code: 'E1103',
    title: 'Invertases',
    info: 'This additive is used in many foods. In the food industry, such as bees, invertase is used to produce invert sugar by dividing sucrose into a molecule of fructose and glucose and, therefore, improving the shelf life of the products. Industrial invertase is extracted from yeasts. \n The resulting mixture of these sugars is called \'invert sugar\' and the most common form is honey, which is a supersaturated mixture of glucose and fructose. \n No side effects have been found.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: 'Invertase; enzyme; allergenicity possible',
    countries_banned: 'Permitted as processing aid'
  },
  {
    id: 17,
    e_code: 'E1104',
    title: 'Lipases ',
    info: 'Lipases are specialized enzymes in the transformation of triglycerides into glycerol and fatty acids. \n They are produced by the glands of the tongue and pancreas and initiate the digestion of dietary fat. \n Commercially, they are usually of animal origin (pig pancreas), but they can also be synthesized biologically by microorganisms.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: 'Lipase; enzyme; allergenicity possible',
    countries_banned: 'Permitted as processing aid'
  },
  {
    id: 18,
    e_code: 'E1105',
    title: 'Lysozyme',
    info: 'An enzyme, that is a normal constituent of tears, saliva, blood and (human) milk.  \n Lysozyme is an enzymatic protein composed of about 130 amino acids (in humans), which is found particularly in egg white, as well as in certain secretions such as tears, saliva and breast milk. \n It has an antibacterial function. Commercially this substance is obtained from the egg white. \n Caution in people with egg allergy and its derivatives. It is widely used in cheeses and spreads.',
    e_type: 'Preservative ',
    halal_status: 'Doubtful',
    risk_factor: 'Lysozyme; enzyme; allergy in egg-sensitive individuals',
    countries_banned: 'Permitted; labeled for egg allergen'
  },
  {
    id: 19,
    e_code: 'E111',
    title: 'Orange GGN',
    info: 'It is also known as alpha-naphthol orange. In Europe, it was named with the number E111. Its use in food since January 1, 1978 is prohibited. \n Examples of foods that may include E111: candies, ice creams, pastry products.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Orange GGN; safety concerns',
    countries_banned: 'Not permitted (EU/USA)'
  },
  {
    id: 20,
    e_code: 'E120',
    title: 'Cochineal or Carminic Acid',
    info: 'It is an additive used as a colorant. It is obtained from insects. \n Used in cosmetics, shampoo, red apple juice, confectionery and other foods. May cause allergic reactions in sensitive individuals.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Carmine/cochineal; can trigger severe allergies',
    countries_banned: 'Permitted with labeling; not vegan'
  },
  {
    id: 21,
    e_code: 'E1200',
    title: 'Polydextroses',
    info: 'Polymer of glucose, with some sorbitol. Produced by heating dextrose (glucose) in the presence of sorbitol and citric acid. A Thickening and filling agent, binds water and protects against freeze damage.  \n  In the human body, it behaves like a dietary fiber. It is obtained by synthesis from dextrose (glucose). \n Classified as a soluble fiber with a sweet taste. \n It is used in sugar-free chocolates, light beverages and low-calorie foods. \n No side effects have been found. At large doses it can cause flatulence  or diarrhea.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: 'Polydextrose; generally safe, may cause GI discomfort at high intake',
    countries_banned: 'Permitted widely'
  },
  {
    id: 22,
    e_code: 'E1201',
    title: 'Polyvinylpyrrolidone',
    info: 'Synthetic polymer. Thickening and filling agent, stabiliser and used in pharmaceutical tablets. \n It is obtained as a derivative of vinyl epirrolidone. It allows to join the lightening agents in drinks. \n It is used in wines and some beers. It is also used as a disintegrant in pharmaceutical tablets. \n In large doses causes cancer and spontaneous abortions in laboratory animals. \n This additive is believed that it could remain in our body even years after having consumed it.',
    e_type: 'Stabiliser',
    halal_status: 'Halal',
    risk_factor: 'Polyvinylpyrrolidone (PVP); processing aid; low risk',
    countries_banned: 'Permitted/reg. limited uses'
  },
  {
    id: 23,
    e_code: 'E1202',
    title: 'Polyvinylpolypyrrolidone',
    info: 'Synthetic polymer . It is obtained as a derivative of vinyl epirrolidone. It allows to join the lightening agents in drinks. It is used in wines and some beers. \n It is also used as a disintegrant in pharmaceutical tablets. Polyvinylpyrrolidone is also inserted into cosmetics (hair fixatives, binders, antistatics, emulsifiers, etc.). \n In large doses causes cancer and spontaneous abortions in laboratory animals. \n This additive is believed that it could remain in our body even years after having consumed it, despite this, it is not mandatory to indicate its use in the labeling of the product.',
    e_type: 'Stabiliser',
    halal_status: 'Halal',
    risk_factor: 'Polyvinylpolypyrrolidone (PVPP); low risk',
    countries_banned: 'Permitted/reg. limited uses'
  },
  {
    id: 24,
    e_code: 'E1203',
    title: 'Polyvinyl alcohol',
    info: 'Polyvinyl alcohol is a synthetic polymer obtained by alkaline hydrolysis (sodium hydroxide, potassium hydroxide) of polyvinyl acetate. It is a recent additive (2010), there is still very little information available on the substance consumed as a food additive, however, the data of the pure substance are not really attractive. \n The finished product contains toxic residues: methanol, methyl acetate, etc. Polyvinyl alcohol is also found in cosmetics and in many pharmaceutical products.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Polyvinyl alcohol; low risk',
    countries_banned: 'Permitted/reg. limited uses'
  },
  {
    id: 25,
    e_code: 'E1204',
    title: 'Pullulan',
    info: 'Pullulan is a polysaccharide made of starch by the fungus Aureobasidium pullulans. \n In other words, it is derived from starch extracted from wood, cereals and vegetables fermented by the fungus It is used in capsules, tablets, covers and edible films used in chewing gums, dragees, enamels and pills to freshen the breath. \n It is also used in oral hygiene products and mouthwashes. \n No side effects have been found for this additive. Other uses of this additive can be found in pharmaceuticals and cosmetics.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Pullulan; low risk',
    countries_banned: 'Permitted widely'
  },
  {
    id: 26,
    e_code: 'E1205',
    title: 'Basic methacrylate copolymer',
    info: 'Coating agent for solid food supplements and solid foods for special medical purposes. The methacrylate ion is the conjugate base of methacrylic acid. Methacrylates are part of the group of vinyls that polymerize by providing methacrylic resins, thermoplastic and colorless, used as safety glass (Plexiglas). \n For this additive, very little toxicological information is available.',
    e_type: 'Coating agent',
    halal_status: 'Doubtful',
    risk_factor: 'Basic methacrylate copolymer; low risk',
    countries_banned: 'Permitted/reg. limits'
  },
  {
    id: 27,
    e_code: 'E1208',
    title: 'Vinyl Acetate Copolymer',
    info: 'It is obtained as a derivative of vinyl epirrolidone. It allows to join the lightening agents in drinks. \n It is used in wines and some beers. It is also used as a disintegrant in pharmaceutical tablets. \n In large doses causes cancer and spontaneous abortions in laboratory animals. \n This additive is believed to remain in our body even years after having consumed it, despite this, it is not mandatory to indicate its use in the labeling of the product. \n For this additive, very little toxicological information is available.',
    e_type: 'Coating agent',
    halal_status: 'Doubtful',
    risk_factor: 'Starch aluminum octenyl succinate; low risk',
    countries_banned: 'Permitted/reg. limits'
  },
  {
    id: 28,
    e_code: 'E1209',
    title: 'Polyvinyl alcohol graft copolymer',
    info: 'The graft copolymer of polyvinyl alcohol and polyethylene glycol is a synthetic material in the form of a colorless powder. \n It is used to create a protective film of instant dissolution that helps protect against unpleasant odors and flavors and preserve sensitive active ingredients. Due to its easy disintegration in contact with liquids, it is only used in solid products. \n It is used in tablets and capsules of food supplements. There are few toxicological reports. ',
    e_type: 'Coating agent',
    halal_status: 'Doubtful',
    risk_factor: 'Polyvinyl alcohol-polyethylene glycol graft copolymer; low risk',
    countries_banned: 'Permitted/reg. limits'
  },
  {
    id: 29,
    e_code: 'E121',
    title: 'Citrus Red 2',
    info: 'It is orange to red. it is produced from fruit peel such as orange or grapefruit. It is used to make the fruit appear ripe and red. \n In low doses produces bladder and gall bladder stones. In large doses decreases the number of red blood cells and hemoglobin, while increasing the size of the kidneys, liver, and spleen. \n In the long term it gives degenerative problems in the liver. Prohibited in Europe since 1977.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Citrus Red 2; suspected carcinogen',
    countries_banned: 'Not permitted in EU; restricted use on orange peels in USA only'
  },
  {
    id: 30,
    e_code: 'E122',
    title: 'Azorubine',
    info: 'It is used as a synthetic colorant in cosmetics, food and beverage products. E122 is a red synthetic coal tar food dye with high water solubility.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Azorubine/Carmoisine; hyperactivity concerns',
    countries_banned: 'Warning in EU; not approved in USA'
  },
  {
    id: 31,
    e_code: 'E123',
    title: 'Amaranth',
    info: 'It is used as a synthetic coloring agent in photography as well as in food and beverage products. \n E123 gives products a red / purple color and is highly water soluble, so it is useful as a dye in photography. \n E123  is often used in wines and liquors. E123  may cause hyperactivity in children as well as asthma and eczema. There have been some doubts about the possibility of this additive being carcinogenic.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Amaranth; suspected carcinogen',
    countries_banned: 'Banned in USA (since 1976)'
  },
  {
    id: 32,
    e_code: 'E124',
    title: 'Cochineal Red A',
    info: 'Used as a synthetic colorant in food and beverage products. E124 is a synthetic carbon tar and azo dye that turns food products into bright red. Highly soluble in water. \n E124 is stated to increase asthma and allergic reactions (especially aspirin allergy). The additive creates carcinogens in animals. \n This additive can be produced synthetically (Ponceau 4R) or naturally (Cochineal Red A). ',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Ponceau 4R; hyperactivity concerns',
    countries_banned: 'Not approved in USA; warning in EU'
  },
  {
    id: 33,
    e_code: 'E125',
    title: 'Scarlet GN',
    info: 'A synthetic dye and dark red. Made from petroleum. E125, belonging to the group of azo dyes, used as disodium salt. In the United States it is prohibited in food. Long-term use can cause cancer. \n Banned in foodstuffs in Europe (since 1976) and the United States (since 1988). (except medicines and cosmetics).',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Scarlet GN; safety concerns',
    countries_banned: 'Not permitted (EU/USA)'
  },
  {
    id: 34,
    e_code: 'E126',
    title: 'Ponceau 6R',
    info: 'This additive is a synthetic dye. It is dark red. It is obtained from petroleum. It belongs to the group of azo dyes. \n Although banned in the European Union, it (under the name CI16250) is still used in cosmetic products . \n May cause hyperactivity in children.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Ponceau 6R; safety concerns',
    countries_banned: 'Not permitted (EU/USA)'
  },
  {
    id: 35,
    e_code: 'E127',
    title: 'Erythrosine BS',
    info: 'It is used as a synthetic coloring agent in food and beverage products. E127 pink, purple or purple color red. \n It is obtained from fluorescein by extraction with iodine and iodic acid in alcohol. E127 contains iodine and is in water soluble. It is used as a colorant. \n Photographic used as a printing ink.',
    e_type: 'Color',
    halal_status: 'Halal',
    risk_factor: 'Erythrosine; thyroid tumor risk',
    countries_banned: 'US FDA revocation ordered 2025 (compliance 2027–28); many limits globally'
  },
  {
    id: 36,
    e_code: 'E128',
    title: 'Red 2G',
    info: 'E128 gives a red coloration to food products. It is used as a synthetic coloring agent in food and beverage products. It is highly soluble in water and tends to be used in meat and confectionery products. \n It may cause hyperactivity in children in low doses. Since it is azo dye, it may cause allergic effects. \n It releases a histamine in large doses. It can increase asthma symptoms, cause eczema and insomnia. \n Within the intestine it can be converted into the toxic compound Aniline and cause serious damage. In the long term it could be carcinogenic.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Red 2G; potential carcinogen',
    countries_banned: 'Banned in EU (since 2007)'
  },
  {
    id: 37,
    e_code: 'E129',
    title: 'Allura red AC',
    info: 'It is obtained from petroleum. It is  used as a synthetic colorant in pharmaceuticals, cosmetics, food and beverage products. \n E129 is an azo dye that gives dark orange / red color to products. It was produced as an alternative to Amaranth (E123) \n After E129 lab tests, it\'s thought to cause bladder cancer in mice.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Allura Red AC; hyperactivity concerns',
    countries_banned: 'Approved EU/USA with labeling; restricted in some countries'
  },
  {
    id: 38,
    e_code: 'E130',
    title: 'Indanthrone blue',
    info: 'It is a dark blue additive. It is obtained by the oxidation of Anthracene, an aromatic hydrocarbon. When derived from a hydrocarbon it is potentially carcinogenic. May produce allergies.',
    e_type: 'Coloring',
    halal_status: 'Doubtful',
    risk_factor: 'Indanthrene Blue; safety concern',
    countries_banned: 'Not permitted (EU/USA)'
  },
  {
    id: 39,
    e_code: 'E131',
    title: 'Patent Blue V',
    info: 'It is used as a synthetic coloring agent in food and beverage products. E131 is highly soluble in water and gives it a blue color. Some allergic reactions have been reported along with the intake of E131.\n Other side effects have included low blood pressure, nausea and skin irritation. Because it is an azo dye, it can cause intolerance in people who are allergic to salicylic acid. ',
    e_type: 'Color',
    halal_status: 'Halal',
    risk_factor: 'Patent Blue V; allergy reactions possible',
    countries_banned: 'Not approved in USA; permitted EU with limits'
  },
  {
    id: 40,
    e_code: 'E132',
    title: 'Indigo Carmine  ',
    info: 'It is used as a synthetic coloring agent in food and beverage products. E132 is highly soluble in water and gives it a blue color. It is most commonly used as an additive for capsules and tablets. \n It can also be used as a biological dye. E132 occurs naturally in indigofera tinctoria bushes. However, since it is used commercially, it is mostly produced artificially. \n It has been found in some studies that E132 causes nausea, vomiting, high blood pressure (hypertension), difficulty breathing and skin irritation.',
    e_type: 'Coloring',
    halal_status: 'Halal',
    risk_factor: 'Indigo Carmine; rare hypersensitivity',
    countries_banned: 'Permitted EU/USA'
  },
  {
    id: 41,
    e_code: 'E133',
    title: 'Brilliant Blue FCF',
    info: 'It is used as a synthetic coloring agent in food and beverage products, but mainly in cosmetics. It is obtained derived from petroleum. E133 is highly soluble in water and gives a blue color to food products. \n E133 can be used together with tartrazine (E102) to give various shades of green. The coloration can also be used in inks and as fabric dye. \n It is known that E133 causes an allergic reaction (this is rare)',
    e_type: 'Colour',
    halal_status: 'Halal',
    risk_factor: 'Brilliant Blue FCF; rare hypersensitivity',
    countries_banned: 'Permitted EU/USA'
  },
  {
    id: 42,
    e_code: 'E140',
    title: 'Chlorophyll',
    info: 'It is used as a synthetic dye in food products and beverages. It is divided into 2 classes: \n • E140 (i): chlorophylls \n • E140 (ii): chlorophyllins \n E140 (i) and E140 (ii) give a dark green color. E140 (i) and E140 (ii) can be used in cosmetics and medicines, as well as in food products. These dyes are soluble in water, although their intensity can disappear with time.  ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 43,
    e_code: 'E1400',
    title: 'Dextrins, roasted starch',
    info: 'It dextrins are a family of polysaccharides, dextrose polymers (glucose, nd.) Prepared by partial degradation with hydrochloric or ortho-phosphoric acid. \n They may be of natural origin obtained from tapioca starch, rice or potatoes or from synthetic origin derived from transgenic maize starches. \n They are also used to give greater stability in frozen foods that need to maintain the same texture and appearance when thawed. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies, cocoa powder, vegetable preparations, stuffed cakes, soft drinks, juices, juices and meat products. \n In large doses can cause hyperactivity.  It can cause an allergic reaction in some people, it contains traces of allergens such as wheat or corn. For gluten intolerant, check that it is not wheat starch. ',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Dextrins (modified starch); generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 44,
    e_code: 'E1401',
    title: 'Acid-treated starch',
    info: 'They may be of natural origin obtained from tapioca starch, rice or potatoes or from synthetic origin derived from transgenic maize starches. \n They are also used to give greater stability in frozen foods that need to maintain the same texture and appearance when thawed. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are frequently present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Acid-treated starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 45,
    e_code: 'E1402',
    title: 'Alkaline treated starch',
    info: 'Prepared by treating starch or starch granules with sodium-or potassium hydroxide. The starch is partially degraded. Used as a Thickening agent and stabiliser in many food products, pharmaceuticals. \n Acceptable Daily Intake is not determined. In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Alkaline-treated starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 46,
    e_code: 'E1403',
    title: 'Bleached starch',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. Then, it is said that the bleached starch E1403 is partially degraded and oxidized. \n Bleaching agents include sodium hypochlorite (bleach), sulfites, ammonium persulfate. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies.  \n  In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Bleached starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 47,
    e_code: 'E1404',
    title: 'Oxidized starch',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. \n The corn can be totally or partially transgenic, without this being added to the label. In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are frequently present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potatoes). \n It contains traces of potentially harmful sulfur dioxide in susceptible asthmatics. In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Oxidized starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 48,
    e_code: 'E1405',
    title: 'Starches, enzyme treated',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. \n The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is then treated with enzymes (amylases) that degrade it. They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches often occur as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n It contains traces of potentially harmful sulfur dioxide in susceptible asthmatics. In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener ',
    halal_status: 'Doubtful',
    risk_factor: 'Enzyme-treated starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 49,
    e_code: 'E141',
    title: 'Copper Complex of Chlorophyll',
    info: 'It is used as a synthetic dye in food products and beverages. E141 (i) includes chlorophyll copper complexes. It is divided into 2 classes:  E141 (i)  and  E141 (ii). These coloring agents provide a tone very similar to olive green. \nHowever, E141 (i) and E141 (ii) are more stable forms than E140 (i) and E140 (ii) because the magnesium ion in chlorophyll in E140 (i) and E140 (ii) is replaced by copper in E141 ( i) and E141 (ii). \n E141 (i) is soluble in water. E141 (ii) is  soluble  in oil. The copper content of the dyes can be released when heated, but must not reach dangerous levels.',
    e_type: 'Color',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 50,
    e_code: 'E1410',
    title: 'Monostarch phosphate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. \n The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. E1410 is partially degraded and then phosphorylated, undergoes a hot reaction with phosphoric acid, sodium orthophosphate or tripolyphosphate. This phosphate may be of animal or vegetable origin. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). E1410 contains traces of potentially harmful sulfur dioxide in susceptible asthmatics. \n In large doses can cause hyperactivity and digestive discomfort. ',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Monostarch phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 51,
    e_code: 'E1411',
    title: 'Distarch glycerol',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.). Potatoes or wheat, but this could change in the near future. \n It is partially degraded and combined with glycerol. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are frequently present as non-toxic or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n  In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Distarch glycerol; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 52,
    e_code: 'E1412',
    title: 'Distarch phosphate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. It is then modified with sodium trimetaphosphate or phosphorus oxychloride. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches often occur as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.  ',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Phosphated distarch phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 53,
    e_code: 'E1413',
    title: 'Phosphated distarch phosphate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It starch is then treated with a phosphorylating agent and then with phosphoric acid (E338). \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Phosphated distarch phosphate (crosslinked); generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 54,
    e_code: 'E1414',
    title: 'Acetylated distarch phosphate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n Starch E1414 is chemically modified with a phosphorylating agent and then with acetic acid (E260) or with vinyl acetate.  \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Acetylated distarch phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 55,
    e_code: 'E142',
    title: 'Green S ',
    info: 'It is used as a synthetic coloring agent in food and beverage products. The derivative of the hydrocarbon Trifenilmethane is obtained. \n E142 is moderately soluble in water, but requires a neutral pH environment to remain stable. In some cases, allergic reactions and anemia have been reported after contact with high concentrations of this dye.\n Potentially long-term carcinogenic. However, E142 is generally considered safe in small quantities.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Green S; hypersensitivity possible',
    countries_banned: 'Not approved in USA; permitted EU'
  },
  {
    id: 56,
    e_code: 'E1420',
    title: 'Starch acetate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n Starch E1420 is chemically modified with acetic acid anhydride (E260) or with vinyl acetate.\n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Acetylated starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 57,
    e_code: 'E1421',
    title: 'Starch acetate esterified with vinyl acetate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n Like many modified starches, E1421 is chemically modified by treatment with vinyl acetate. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Acetylated distarch phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 58,
    e_code: 'E1422',
    title: 'Acetylated distarch adipate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n Acetylated diamidon adipate is chemically modified by the action of anhydrous acetic acid (E260) and anhydrous adipic acid (E355). \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Acetylated distarch adipate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 59,
    e_code: 'E1423',
    title: 'Acetylated distarch glycerol',
    info: 'thickening agent',
    e_type: 'thickening agent',
    halal_status: 'Doubtful',
    risk_factor: 'Acetylated distarch glycerol; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 60,
    e_code: 'E143',
    title: 'Fast Green FCF',
    info: 'It is obtained by synthesis from hydrocarbons, specifically benzene. \n Carcinogenic effects have been found in tests with laboratory animals, as well as mutagenic effects in cell cultures, experimental animals and in humans.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Fast Green FCF; hypersensitivity possible',
    countries_banned: 'Approved USA; not permitted in EU'
  },
  {
    id: 61,
    e_code: 'E1430',
    title: 'Distarch glycerine (stabiliser)',
    info: 'thickening agent',
    e_type: 'thickening agent',
    halal_status: 'Doubtful',
    risk_factor: 'Starch sodium octenyl succinate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 62,
    e_code: 'E1440',
    title: 'Hydroxypropyl starch',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is modified (esterified) with propylene oxide. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Hydroxypropyl starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 63,
    e_code: 'E1441',
    title: 'Hydoxypropyl di-starch glycerol',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is then chemically modified with propylene oxide, epichlorohydrin and glycerol. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Hydroxypropyl distarch glycerol; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 64,
    e_code: 'E1442',
    title: 'Hydroxypropyl distarch phosphate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is then treated with propylene oxide and (according to the European definition) sodium trimetaphosphate or phosphorus oxychloride. The United States allows more chemicals in modified starches, as well as for processed foods in general.\n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Hydroxypropyl distarch phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 65,
    e_code: 'E1443',
    title: 'Hydroxy propyl distarch glycerol',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: 'Hydroxypropyl distarch adipate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 66,
    e_code: 'E1450',
    title: 'Starch sodium octenyl succinate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is then modified chemically by reaction with succinic acid and octanol. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Halal',
    risk_factor: 'Starch sodium octenyl succinate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 67,
    e_code: 'E1451',
    title: 'Acetylated oxidised starch',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n  It is treated especially with an oxidizing agent, sodium hypochlorite and an acetylating agent, anhydrous acetic acid. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Acetylated oxidized starch; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 68,
    e_code: 'E1452',
    title: 'Starch aluminium octenyl succinate',
    info: 'The production of modified starches uses plants such as corn, potatoes or wheat as the main raw materials. The corn can be totally or partially transgenic, without this being added to the label. \n In the European Union, there is no commercial exploitation of genetically modified (rem.) Potatoes or wheat, but this could change in the near future. \n It is chemically modified with succinic acid, octanol and aluminum sulfate. \n They are used in sauces, mayonnaises, soups, cheeses, dairy products, cream for cooking, yoghurts, puddings, custards, desserts, sweets, candies. \n It starches are often present as not or slightly toxic, however, chemical modifications can be dangerous, and transgenic raw materials (corn, wheat, potato). \n In large doses can cause hyperactivity and digestive discomfort.',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: 'Starch aluminum octenyl succinate; low risk',
    countries_banned: 'Permitted/reg. limits'
  },
  {
    id: 69,
    e_code: 'E150',
    title: 'Plain caramel',
    info: 'These are used as synthetic colorants in food and beverage products. It has dark brown color. \n Made from carbohydrates such as corn or wheat in the USA and Europe. Depending on the reagents used in production are divided into 4 classes: \n • E150A: Caustic Candy \n • E150B: Caustic Sulfite Caramel \n • E150C: Ammonic Caramel \n • E150D: Ammonium Sulfite Caramel \n E150 adds a dark brown color to foods. It is produced by the heat treatment of sucrose. E150 can also act as an emulsifier in soft drinks. \n It is thought to cause hyperactivity in children. But no detailed evidence was found. \n It is known that E150C and E150D cause intestinal problems if large amounts are consumed and decrease the absorption of Vitamin B6. In the long term they could be carcinogenic, in some places like the State of California in the USA, they have decided to indicate on their labels this ingredient as a possible carcinogen.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Caramel colors; 4‑MEI concerns in some processes',
    countries_banned: 'Permitted widely; regulated limits'
  },
  {
    id: 70,
    e_code: 'E1501',
    title: 'Benzylated hydrocarbons',
    info: 'Natural compounds that are part of the flavor and fragrance of several plant species. \n They are produced commercially by chemical synthesis. \n These compounds are also used in cosmetics and medicines. \n No effect is known when they are used in food. \n Skin problems may occur when used in cosmetics.',
    e_type: 'Flavoring',
    halal_status: 'Doubtful',
    risk_factor: 'Benzyl alcohol; hypersensitivity possible',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 71,
    e_code: 'E1502',
    title: 'Butane-1,3-diol',
    info: 'This additive is commercially by chemical synthesis.  \nUsed as a solvent for flavours and in Tobacco products. \n Very little is known about this additive and its effect on the human body. At the moment no harmful side effects are known.',
    e_type: 'Flavoring',
    halal_status: 'Doubtful',
    risk_factor: 'Triethyl citrate; low risk',
    countries_banned: 'Permitted widely'
  },
  {
    id: 72,
    e_code: 'E1503',
    title: 'Castor oil',
    info: 'Natural oil extracted from the seeds of Ricinus communis (castor bean). Castor oil is a flavour component as well as a solvent for flavours. \n In large doses can cause diarrhea and severe dehydration. \n In pharmacy, this oil has been used for a long time for its laxative effects, but it is a violent purgative and its use is not formally recommended for this indication It remains present, in small quantities, as an excipient in many pharmaceutical specialties. \nCastor oil is a flavour component as well as a solvent for flavours. Used in products like flavoured sugar , lip products.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: 'Castor oil; rare allergy',
    countries_banned: 'Permitted widely'
  },
  {
    id: 73,
    e_code: 'E1504',
    title: 'Ethyl acetate',
    info: 'Natural component of many fruits; it is commercially produced from acetic acid. \n Ethyl acetate is a flavour component as well as a solvent for flavours. \n Many products with fruit flavour. Acceptable Daily Intake is upto 6 mg/kg body weight. \n No health effects when used in foods.',
    e_type: 'Flavoring',
    halal_status: 'Doubtful',
    risk_factor: 'Ethyl acetate; solvent; low risk at permitted levels',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 74,
    e_code: 'E1505',
    title: 'Triethyl citrate',
    info: 'It is colorless and oily. Obtained as an ester derived from Citric Acid (E330). Triethyl citrate is a synthetic compound manufactured by esterification of citric acid and ethanol. \n The additive can be produced by genetic engineering. \n No side effects are known now. It is recommended not to abuse, since there is little information about this additive.',
    e_type: 'Emulsifier',
    halal_status: 'Halal',
    risk_factor: 'Triethyl phosphate; low risk at permitted levels',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 75,
    e_code: 'E150a',
    title: 'Plain caramel',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Plain caramel; low risk',
    countries_banned: 'Permitted widely'
  },
  {
    id: 76,
    e_code: 'E150b',
    title: 'Caustic sulfite caramel',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Caustic sulfite caramel; sulfite sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 77,
    e_code: 'E150c',
    title: 'Ammonia caramel',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Ammonia caramel; 4‑MEI concern at high levels',
    countries_banned: 'Permitted; regulated (limits on 4‑MEI)'
  },
  {
    id: 78,
    e_code: 'E150d',
    title: 'Sulfite ammonia caramel',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Sulphite ammonia caramel; 4‑MEI concern; sulfite sensitivity',
    countries_banned: 'Permitted; regulated (limits on 4‑MEI)'
  },
  {
    id: 79,
    e_code: 'E151',
    title: 'Black PN',
    info: 'Used as a synthetic colorant in food and beverage products. Made from petroleum. \n E151 is a black synthetic carbon tar and azo dye and is highly soluble in water. \n People who do not tolerate salicylates are also intolerant to E151 because the coloring is an azo dye. \n E151 is also suspected to exacerbate asthma. May be carcinogenic in the long term. ',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Brilliant Black BN; allergy risk',
    countries_banned: 'Not approved in USA; permitted EU'
  },
  {
    id: 80,
    e_code: 'E1510',
    title: 'Ethanol',
    info: 'Ethanol, better known as alcohol, is a basic component of alcoholic beverages such as wine and cider (10 to 13%), beer (0.5 to 7%) and spirits (40 to 50%). \n  In the European Pharmacopoeia, \\"ethanol\\" refers to absolute ethanol, that is, 100% pure (without water), unlike 95% ethanol or 70% found in the pharmacy.   \n Ethanol can be produced from petrochemical products by hydration of ethylene (industry), among others, or by alcoholic fermentation of yeast or cellulose.  \n  Ethanol E1510 may contain traces of highly toxic residues (eg, methanol, benzene) and / or carcinogens.',
    e_type: 'Solvent',
    halal_status: 'Doubtful',
    risk_factor: 'Ethanol; low risk as carrier',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 81,
    e_code: 'E1516',
    title: 'Glycerol monoacetate',
    info: 'Additive E1516 is a mixture of esters produced from the esterification of glycerol with acetic acid, that is to say that it is produced commercially from acetic acid and glycerol. \n  Its function is to act on the senses of taste either to reinforce one\'s own or specific aroma, in order to make it more appetizing or pleasant. \n  There is not much information about this additive, so far no side effects have been found.',
    e_type: 'Flavoring',
    halal_status: 'Doubtful',
    risk_factor: 'Glyceryl monostearate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 82,
    e_code: 'E1517',
    title: 'Glycerol diacetate',
    info: 'Glyceryl diacetate is a synthetic additive and is manufactured chemically with glycerol and acetic acid.   No known side effects to date, at dietary doses, however, the toxicology of diacetin would not be fully known. \n  Ingestion of pure diacetin can cause migraines, nausea, vomiting, dehydration, diarrhea, thirst, dizziness and confusion.',
    e_type: 'Carrier',
    halal_status: 'Doubtful',
    risk_factor: 'Glyceryl diacetate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 83,
    e_code: 'E1518',
    title: 'Triacetin',
    info: 'Triacetin triacetate or glyceryl is a triglyceride, glycerol triester (E422) and acetic acid (E260). It is an artificial compound, obtained by esterification of natural glycerin or petrochemical with acetic anhydride.  \n It is used to create specific artificial flavors, smells and aromas. \n It is also used in the manufacture of perfumes, to manufacture cellulose and in the development of photographic reels (negative).   \n It appears in the list of 599 substances added to cigarettes. \n It can be obtained from transgenic products such as soybeans. It is recommended to avoid this additive.',
    e_type: 'Carrier',
    halal_status: 'Doubtful',
    risk_factor: 'Glyceryl triacetate (triacetin); generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 84,
    e_code: 'E1519',
    title: 'Benzyl alcohol',
    info: 'Benzyl alcohol is naturally produced by many plants and is commonly found in fruits and teas. It is also found in a variety of essential oils. \n Also known as hydroxytoluene or toluene, the benzyl alcohol can be prepared industrially in many ways, inter alia from toluene or by reaction of bromide with formaldehyde. \n Benzyl alcohol is of low acute toxicity. \n It oxidizes rapidly in healthy individuals with benzoic acid, conjugated with glycine in the liver and excreted as hippuric acid. \n It is toxic to newborns and is associated with the panting syndrome. In large doses causes abdominal pain, diarrhea, drowsiness, nausea and vomiting.',
    e_type: 'Carrier',
    halal_status: 'Doubtful',
    risk_factor: 'Benzyl alcohol; hypersensitivity possible',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 85,
    e_code: 'E152',
    title: 'Black 7984',
    info: 'A brown-to-black synthetic diazo dye. It usually comes as a tetrasodium salt. When used as a food dye, it has E number E152. It is also used in cosmetics. \n Its use is discontinued in USA and EU since 1984. It is currently delisted and not used anymore both in European Union and USA. It is also not permitted in Australia and Japan. \n It appears to cause allergic or intolerance reactions, particularly amongst those with an aspirin intolerance. It is a histamine liberator, and may worsen the symptoms of asthma. It is one of the colourants that the Hyperactive Children\'s Support Group recommends be eliminated from the diet of children.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Black 7984; safety concerns',
    countries_banned: 'Not permitted (EU/USA)'
  },
  {
    id: 86,
    e_code: 'E1520',
    title: 'Propylene glycol',
    info: 'Synthetic artificial industrial compound, produced in various ways, including the use of propylene oxide. \n This additive is colorless and has a characteristic odor. It is obtained by hydration of Propylene Oxide.  \n It is used in the color of margarines and butters, as food antifreeze and flavoring in the narrowness (alcoholic beverage). \n It is also used as a tobacco moisturizer, in cosmetics, pharmaceuticals and as a genital intimate lubricant. It is widely used in smoke machines, including electronic cigarettes (vapers). \n  In large doses caused serious damage to the nervous system in laboratory animals. \n Prohibited in feeding for dogs and cats for causing liver problems. Our body metabolizes it to a large extent as Lactic Acid (E270).',
    e_type: 'Flavoring',
    halal_status: 'Doubtful',
    risk_factor: 'Propylene glycol; high doses may cause GI issues',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 87,
    e_code: 'E1521',
    title: 'Polyethylene glycol',
    info: 'Polymers are less toxic than their monomer, perhaps in part because long polymers are not completely absorbed by the intestine. \n It remains to be seen from what length of chain / molecular weight the organism is completely impermeable. \n Synthetic solvent of sweet taste. It is obtained by hydrolysis of Ethylene Oxide.  \n Polyethylene glycol 400 (E1521i), Polyethylene glycol 3000 (E1521ii), Polyethylene glycol 3350 (E1521iii), Polyethylene glycol 4000 (E1521iv), Polyethylene glycol 6000 (E1521v), Polyethylene glycol 8000 (E1521vi).  \n It is widely used in artificial sweeteners and aromas. \n It is also used as an ingredient in the electronic cigarette refill liquid (vapeadores). \n In large doses can cause allergy and promote the appearance of cancerous tumors.',
    e_type: 'Carrier',
    halal_status: 'Doubtful',
    risk_factor: 'Polyethylene glycol; laxative effect at high doses',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 88,
    e_code: 'E1522',
    title: 'Calcium lignosulfonate',
    info: 'Lignosulfonates are by-products of the production of wood pulp, or pulp, by the so-called sulfite or bisulfite process. \n This process uses certain salts of sulphurous acid, sulfites or bisulfites to extract the lignin from the wood chips. \n There is not much information about this additive, so far no side effects have been found. Daily intake: Up to 20 mg / kg of body weight.',
    e_type: 'Carrier',
    halal_status: 'Doubtful',
    risk_factor: 'Polyethylene glycol alkyl ethers; low risk',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 89,
    e_code: 'E1525',
    title: 'Hydroxyethyl cellulose',
    info: 'thickening agent',
    e_type: 'thickening agent',
    halal_status: 'Doubtful',
    risk_factor: 'Hydroxypropyl cellulose; low risk',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 90,
    e_code: 'E153',
    title: 'Carbon Black',
    info: 'It is used as a natural coloring agent in food and beverage products. It is black. It is obtained from the ashes produced by burning wood, coconut shells and other vegetable waste. E153 is produced from burning plant material, but it can also be produced from charcoal. E153 is not soluble in water, which makes it useful as a filtering or clarifying agent, but limits its use in food and beverage products. This could include Genetically Modified crops. Can be found in concentrated fruit juices, jams, jellies and liquorice. ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Vegetable carbon; generally safe',
    countries_banned: 'Permitted with limits (EU allows; some regions restrict)'
  },
  {
    id: 91,
    e_code: 'E154',
    title: 'Brown FK',
    info: 'It is used as a synthetic coloring agent in food and beverage products. It is derived from petroleum.  E154 is a red-brown coloring. It is a mixture of azo dyes, which is highly soluble in water. \n Found mainly in kippers and smoked mackerel but also occasionally in cooked hams and crisps. \n It has been found that E154 exacerbates asthma and, when taken in combination with benzoates, can induce hyperactivity in children. Not recommended for consumption by children. People with intolerance to salicylates may also find that they are intolerant to E154, because the coloration is an azo dye.   In the long term, it could be carcinogenic. \n Banned throughout the EU (except in the UK where its use is still permmitted!) Also prohibited in Australia, Austria, Canada, Finland, Ireland, Japan, Norway, Sweden and the United States.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Brown FK; potential carcinogen',
    countries_banned: 'Banned in EU/USA'
  },
  {
    id: 92,
    e_code: 'E155',
    title: 'Brown HT',
    info: 'It is used as a synthetic coloring agent in food and beverage products. It is obtained derived from petroleum. \n It is a chocolate colored azo dye, very soluble in water. It acts as an alternative coloration to that provided by cocoa or caramel. \n It can exacerbate asthma symptoms and cause adverse effects in people allergic to aspirin (see also aspirin in the news), as well as skin irritation.   People with intolerance to salicylates may also find that they are intolerant to E155, because the coloration is an azo dye.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Brown HT; hypersensitivity concerns',
    countries_banned: 'Not approved in USA; permitted EU'
  },
  {
    id: 93,
    e_code: 'E160A',
    title: 'Alpha, Beta, Gamma Carotene',
    info: 'It is used as a natural coloring agent in food products and beverages. Obtained naturally by extraction in carrots, palm oil and algae or synthetically by microorganism biosynthesis. \n It is a synthetic blend of carotene derived from carrots and is commercially produced on a large scale. However, carotenes also occur naturally in many orange and yellow fruits and vegetables. \n It is not soluble in water and the color intensity tends to fade with exposure to light. Despite being a dye in a natural way, but it is not available in 100% form because it is not soluble in water. \n Gelatin is added to help mix in liquid products. \n Used in butter and soft margarines, coffee sponge cakes, milk products and soft drinks.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 94,
    e_code: 'E160B',
    title: 'Annatto, Bixin, Norbixin',
    info: 'It is used as a natural coloring agent in food products and beverages. The E160B is divided into 3 classes: Annato, Bixina and Norbixina.  E160B is a yellow to red dye derived from the seeds of the annatto tree (Bixa orellana). Bixin refers to the fat-soluble form of coloration, while norbixin refers to the water soluble form. \n In addition to being a food additive, E160B can be used as a coloring agent for body paints and can also act as an agent to aid digestion.  \n It has now been introduced as an alternative coloration to tartrazine, which is also known as E102. \n However, there may still be a possibility that E160B causes an allergic reaction. \n Used, sometimes in combination with E100, in cheese (Cheshire, Double Gloucester and Red Leicester), coleslaw, crisps, custard, fish fingers, flavoured instant mashed potato, fruit and cream fillings and toppings, frying oil, ice cream and lollies, icings, liqueurs, low calorie spreads, margarine, salad cream and mayonnaise, smoked fish, soft drinks, sponge cakes and puddings and yoghurt. \n Also used in soap, fabric dye and varnishes.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 95,
    e_code: 'E160C',
    title: 'Capsanthin or Capsorbin',
    info: 'It is used as a natural coloring agent in food products and beverages. E160C is an intense red coloring and flavoring, derived from red peppers (capsicum annuum). The peppers are dried and ground before extracting the paprika with solvents. \n Capsanthin can be used in bird foods to increase the color intensity of the egg yolk. \n In extreme cases, E160C can irritate the eyes and even cause temporary blindness. Eating large amounts can reduce the effectiveness of the taste buds.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 96,
    e_code: 'E160D',
    title: 'Lycopene',
    info: 'It is used as a natural coloring agent in food products and beverages. E160D is a red coloration that occurs naturally in pink grapefruits, watermelons and tomatoes. \n When used on a large scale for commercial purposes, the coloration is extracted from the tomatoes. It is not soluble in water but it dissolves in oils and organic solvents. \n The concentration of lycopene in body tissues is higher than in other carotenoids.   Some think that E160D reduces the risk of several types of cancer (including breast cancer and prostate cancer) and heart disease.',
    e_type: 'Coulours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 97,
    e_code: 'E160E',
    title: 'ß-Apo-8\'-carotenal',
    info: 'An orange to red colour, normally synthetic when used as a food colour, although it occurs naturally in oranges and tangerines. It is used as a synthetic coloring agent in food and beverage products.   E160E is an orange / red color and although synthetic when used as a food additive, it is also produced naturally by extraction in carrots, palm oil and algae. \n As it is not soluble in Water, sometimes the oil is used. But sometimes gelatin is added to help mix in liquid products.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 98,
    e_code: 'E160F',
    title: 'Ethyl ester of Beta-apo-8-cartonoic acid',
    info: 'It is used as a synthetic coloring agent in food and beverage products. E160F is an orange / red color and although synthetic when used as a food additive, palm oil and algae are also produced naturally by extraction in carrots.   E160f is partially soluble in water.  \n It occurs naturally in many plants, but can also be produced commercially from E160E. No adverse health effects have been found in relation to the use of E160F. Sometimes gelatin is added to help mix in liquid products. \n Found in many different products. Daily intake is upto 5 mg/kg body weight.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 105,
    e_code: 'E161A',
    title: 'Flavoxanthin',
    info: 'Natural colour, present in many plants. Commercially prepared from buttercup (Ranunculus sp). Yellow food colour. Slightly soluble in water.  Rarely used. \n If used only in confectionary. Daily intake is upto 5 mg/kg body weight.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 106,
    e_code: 'E161B',
    title: 'Lutein',
    info: 'It is used as a natural coloring agent in food products and beverages. E161B is a yellow / orange dye that appears naturally in green leaves, egg whites and marigolds. \nThey are yellow pigments, related to carotene. Extracted using the solvent hexane they normally contain other source plant material.\n When required on a commercial scale, E161B is extracted from nettles and grass. This coloration is only partially soluble in water and, therefore, is not widely used. \n Lutein is found in egg yolks, fat cells and green leaves. Can be obtained from the same sources and at the same time as Chlorophyll.  Used in poultry feed to enhance the colour of egg yolks.',
    e_type: 'Color',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 107,
    e_code: 'E161C',
    title: 'Cryptoxanthin',
    info: 'Natural colour, present in many plants. Yellow food colour. It is obtained by extracting the petals of Physalis (a flower). \n Commercially prepared from Physalis species.  Slightly soluble in water. ',
    e_type: 'Color',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 108,
    e_code: 'E161D',
    title: 'Rubixanthin',
    info: 'Natural colour, present in many plants. E161D is a natural dye. It is red. It is obtained by extraction of Rosa Mosqueta or Escaramujo. ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 108,
    e_code: 'E161D',
    title: 'Rubixanthin',
    info: 'Natural colour, present in many plants. E161D is a natural dye. It is red. It is obtained by extraction of Rosa Mosqueta or Escaramujo. ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Astaxanthin – generally safe, used in aquaculture; insufficient human data',
    countries_banned: null
  },
  {
    id: 109,
    e_code: 'E161E',
    title: 'Violaxanthin',
    info: 'Natural colour, present in many plants. It is red. It is obtained by extraction of _Thought (a flower).    ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 109,
    e_code: 'E161E',
    title: 'Violaxanthin',
    info: 'Natural colour, present in many plants. It is red. It is obtained by extraction of _Thought (a flower).    ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Canthaxanthin – may cause retinal crystal deposits at high intake',
    countries_banned: 'Banned in USA'
  },
  {
    id: 110,
    e_code: 'E161F',
    title: 'Rhodoxanthin',
    info: 'Natural colour, present in many plants. E161F is a natural dye and  purple. It is obtained by extracting the petals of Tejo or Taxus Baccata (a flower).  ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 110,
    e_code: 'E161F',
    title: 'Rhodoxanthin',
    info: 'Natural colour, present in many plants. E161F is a natural dye and  purple. It is obtained by extracting the petals of Tejo or Taxus Baccata (a flower).  ',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Cryptoxanthin – precursor of vitamin A, considered safe',
    countries_banned: null
  },
  {
    id: 111,
    e_code: 'E161G',
    title: 'Canthaxanthin',
    info: 'It is used as a natural coloring agent in food products and beverages. E161G is a yellow / orange dye that occurs naturally in various plants and birds. \n When prepared on a commercial scale, the dye is derived from flamingo mushrooms and feathers. E161G is a xanthophyll (an oxygenated derivative of the carotenes). \n In addition to food, coloration is used in self-tanning products.  \n Some studies have indicated that frequent and prolonged close contact with E161G may cause spots on the retina of the eye due to the formation of crystals. It is also suspected that this coloration causes damage to the liver with a prolonged ingestion.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 111,
    e_code: 'E161G',
    title: 'Canthaxanthin',
    info: 'It is used as a natural coloring agent in food products and beverages. E161G is a yellow / orange dye that occurs naturally in various plants and birds. \n When prepared on a commercial scale, the dye is derived from flamingo mushrooms and feathers. E161G is a xanthophyll (an oxygenated derivative of the carotenes). \n In addition to food, coloration is used in self-tanning products.  \n Some studies have indicated that frequent and prolonged close contact with E161G may cause spots on the retina of the eye due to the formation of crystals. It is also suspected that this coloration causes damage to the liver with a prolonged ingestion.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Violaxanthin – limited data, considered safe in small amounts',
    countries_banned: null
  },
  {
    id: 112,
    e_code: 'E161H',
    title: 'Citranaxanthin',
    info: 'E161H is used as a natural coloring agent in food products and beverages. It has a yellow color and is soluble in water. E161H is obtained by extracting several species of dry plants such as algae. E161H there is no secondary effect on health. \n Sometimes the extraction of E161H does not come synthetically or vegetable, but animal origin.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 112,
    e_code: 'E161H',
    title: 'Citranaxanthin',
    info: 'E161H is used as a natural coloring agent in food products and beverages. It has a yellow color and is soluble in water. E161H is obtained by extracting several species of dry plants such as algae. E161H there is no secondary effect on health. \n Sometimes the extraction of E161H does not come synthetically or vegetable, but animal origin.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Rubixanthin – natural pigment, low toxicity',
    countries_banned: null
  },
  {
    id: 113,
    e_code: 'E161I',
    title: 'Citranaxanthin',
    info: 'E161I is a dye in synthetic form. The E161I is used very little, with the exception of bird food to dye chicken fat and egg yolks.   The E161I is not listed as a food additive for human consumption by the United States FDA.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 113,
    e_code: 'E161I',
    title: 'Citranaxanthin',
    info: 'E161I is a dye in synthetic form. The E161I is used very little, with the exception of bird food to dye chicken fat and egg yolks.   The E161I is not listed as a food additive for human consumption by the United States FDA.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Citrus Red 2 – linked to cancer risk',
    countries_banned: 'Banned in EU'
  },
  {
    id: 114,
    e_code: 'E161J',
    title: 'Astaxanthin',
    info: 'E161J is a dye in a synthetic or natural way. It has a red color and is obtained naturally by extraction of fatty fish crabs, molluscs and crustaceans. It is used in salmon and chickens so that their meat or eggs have a more intense color when it is commercialized. \n No side effects of additive E161J are known.  The E161J is not widely used.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 114,
    e_code: 'E161J',
    title: 'Astaxanthin',
    info: 'E161J is a dye in a synthetic or natural way. It has a red color and is obtained naturally by extraction of fatty fish crabs, molluscs and crustaceans. It is used in salmon and chickens so that their meat or eggs have a more intense color when it is commercialized. \n No side effects of additive E161J are known.  The E161J is not widely used.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Zeaxanthin – antioxidant, considered safe',
    countries_banned: null
  },
  {
    id: 125,
    e_code: 'E162',
    title: 'Beetroot Red / Betanin',
    info: 'A deep red/purple natural extract from beetroot. Although widely used, E162 is unstable because it degrades in the presence of light, oxygen and high temperatures. \n It may contain nitrates and, therefore, should not be consumed by infants and young children. No other reports of adverse effects were found during our search. \n It can impart an earthy taste to the food. Can be found in desserts, ice cream, jams, jellies, liquorice, oxtail soup, sauces and sweets.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 125,
    e_code: 'E162',
    title: 'Beetroot Red / Betanin',
    info: 'A deep red/purple natural extract from beetroot. Although widely used, E162 is unstable because it degrades in the presence of light, oxygen and high temperatures. \n It may contain nitrates and, therefore, should not be consumed by infants and young children. No other reports of adverse effects were found during our search. \n It can impart an earthy taste to the food. Can be found in desserts, ice cream, jams, jellies, liquorice, oxtail soup, sauces and sweets.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Beetroot Red (Betanin) – safe natural color',
    countries_banned: null
  },
  {
    id: 126,
    e_code: 'E163',
    title: 'Anthocyanins',
    info: 'It is used as a natural coloring agent in food products and beverages. E163 is a blue, red, violet, purple and brown dye derived from the cellular sap of plants, vegetables, fruits (black grapes, raspberries, cherries, cranberries) and flowers. They are divided into 6 categories: \n • E163A \n •  E163B \n • E163C \n •  E163D \n •  E163E \n •  E163F   \nIt is soluble in water and may contain sugars and minerals.  It has anti-inflammatory properties and acts as an antioxidant when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 126,
    e_code: 'E163',
    title: 'Anthocyanins',
    info: 'It is used as a natural coloring agent in food products and beverages. E163 is a blue, red, violet, purple and brown dye derived from the cellular sap of plants, vegetables, fruits (black grapes, raspberries, cherries, cranberries) and flowers. They are divided into 6 categories: \n • E163A \n •  E163B \n • E163C \n •  E163D \n •  E163E \n •  E163F   \nIt is soluble in water and may contain sugars and minerals.  It has anti-inflammatory properties and acts as an antioxidant when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Anthocyanins – safe antioxidants from fruits',
    countries_banned: null
  },
  {
    id: 127,
    e_code: 'E163A',
    title: 'Cyanidin',
    info: 'It is used as a natural coloring agent in food products and beverages. The E163A is Red. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 127,
    e_code: 'E163A',
    title: 'Cyanidin',
    info: 'It is used as a natural coloring agent in food products and beverages. The E163A is Red. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Cyanidin – natural anthocyanin, safe',
    countries_banned: null
  },
  {
    id: 128,
    e_code: 'E163B',
    title: 'Delphinidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163B is Blue. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 128,
    e_code: 'E163B',
    title: 'Delphinidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163B is Blue. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Delphinidin – natural anthocyanin, safe',
    countries_banned: null
  },
  {
    id: 129,
    e_code: 'E163C',
    title: 'Malvidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163C is purple. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers. \n It has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 129,
    e_code: 'E163C',
    title: 'Malvidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163C is purple. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers. \n It has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Malvidin – natural anthocyanin, safe',
    countries_banned: null
  },
  {
    id: 130,
    e_code: 'E163D',
    title: 'Pelargonidin',
    info: 'It is used as a natural coloring agent in food products and beverages. The E163D is ocher colored. \n Obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers. \n It  has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 130,
    e_code: 'E163D',
    title: 'Pelargonidin',
    info: 'It is used as a natural coloring agent in food products and beverages. The E163D is ocher colored. \n Obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers. \n It  has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables. \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Pelargonidin – natural anthocyanin, safe',
    countries_banned: null
  },
  {
    id: 131,
    e_code: 'E163F',
    title: 'Petunidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163F is dark red. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.  \n It has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables . \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Natural color; occasional allergy/sensitivity possible',
    countries_banned: 'Permitted widely'
  },
  {
    id: 131,
    e_code: 'E163F',
    title: 'Petunidin',
    info: 'It is used as a natural coloring agent in food products and beverages.  The E163F is dark red. \n It is obtained from the skin extract of some blacks, red fruits, blueberries, raspberries, cherries, plants and flowers.  \n It has anti-inflammatory properties and acts as an antioxidant (against heart disease, cancer and diabetes) when it is found in fruits and vegetables . \n Reports suggest that when consumed in adequate amounts, it is thought that this natural dye benefits human health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Petunidin – natural anthocyanin, safe',
    countries_banned: null
  },
  {
    id: 132,
    e_code: 'E164',
    title: 'Gardenia yellow',
    info: 'It is an additive made of dark yellow to dark red carotenoid pigments, mainly crocin and crocetina of gardenias fruits (economical version) or flower stigmas of Crocus sativus (saffron, much more expensive). \n There is no information available on the extraction, chemical or natural, of the principle of dyeing. \n It could contain allergenic components when it comes to saffron. Natural saffron and crocin would have beneficial and protective properties for health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Gardenia yellow/crocetin; natural color',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 132,
    e_code: 'E164',
    title: 'Gardenia yellow',
    info: 'It is an additive made of dark yellow to dark red carotenoid pigments, mainly crocin and crocetina of gardenias fruits (economical version) or flower stigmas of Crocus sativus (saffron, much more expensive). \n There is no information available on the extraction, chemical or natural, of the principle of dyeing. \n It could contain allergenic components when it comes to saffron. Natural saffron and crocin would have beneficial and protective properties for health.',
    e_type: 'Colour',
    halal_status: 'Doubtful',
    risk_factor: 'Saffron extract – safe, but high cost',
    countries_banned: null
  },
  {
    id: 133,
    e_code: 'E165',
    title: 'Blue Gardenia',
    info: 'It is a natural dye, it is an intense blue color. According to the sources reported, carotenoid pigments would be made from dark yellow to dark red, mainly crocin and crocetin derived from gardenia fruits. \n It was discovered that it inhibits the production of important signals of the human body.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Riboflavin-5\'-phosphate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 133,
    e_code: 'E165',
    title: 'Blue Gardenia',
    info: 'It is a natural dye, it is an intense blue color. According to the sources reported, carotenoid pigments would be made from dark yellow to dark red, mainly crocin and crocetin derived from gardenia fruits. \n It was discovered that it inhibits the production of important signals of the human body.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Annatto – may cause allergic reactions',
    countries_banned: null
  },
  {
    id: 134,
    e_code: 'E166',
    title: 'Sandalwood',
    info: 'It is obtained from the extraction of wood from tree forests belonging mainly to the Santalum genus, of the Santalaceae family. \n The trees of the species that produce this type of wood grow naturally in India, Nepal, Australia, New Caledonia and Hawaii. This wood is mainly used as incense, aromatherapy and perfume. \n Natural sandalwood is present in traditional medicine, including the essential oil that can be found, even pure, in Ayurvedic medicine to treat anxiety. Sandalwood is one of the main components of incense made in China, Taiwan, Japan, Vietnam and Korea.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Sanders wood; limited data',
    countries_banned: 'Not permitted in EU'
  },
  {
    id: 134,
    e_code: 'E166',
    title: 'Sandalwood',
    info: 'It is obtained from the extraction of wood from tree forests belonging mainly to the Santalum genus, of the Santalaceae family. \n The trees of the species that produce this type of wood grow naturally in India, Nepal, Australia, New Caledonia and Hawaii. This wood is mainly used as incense, aromatherapy and perfume. \n Natural sandalwood is present in traditional medicine, including the essential oil that can be found, even pure, in Ayurvedic medicine to treat anxiety. Sandalwood is one of the main components of incense made in China, Taiwan, Japan, Vietnam and Korea.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Sanderswood extract – little data',
    countries_banned: null
  },
  {
    id: 135,
    e_code: 'E170',
    title: 'Calcium Carbonate',
    info: 'It is a natural color, white to gray. E170 is a natural mineral present in sedimentary rocks and the most common form of which is limestone; It is also found in chalk, marble, coral and as a main component of egg shells, snails and marine animals. \n To date, the commercial form of calcium carbonate it is obtained from the grinding of limestone or by precipitation of calcareous ions with carbonate ions (precipitated calcium carbonate). It is divided into 2 classes:   \n• Calcium Carbonate \n• Calcium Bicarbonate \n  It is commonly used in medicine as a calcium supplement or as an antacid, but excessive consumption can be dangerous. \n Can be found in biscuits, bread, cakes, ice cream, sweets, vitamin and other tablets and to firm canned fruit and vegetables. Also used in toothpastes, white paint and cleaning powders.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Calcium carbonate; generally safe',
    countries_banned: 'Permitted widely'
  },
  {
    id: 135,
    e_code: 'E170',
    title: 'Calcium Carbonate',
    info: 'It is a natural color, white to gray. E170 is a natural mineral present in sedimentary rocks and the most common form of which is limestone; It is also found in chalk, marble, coral and as a main component of egg shells, snails and marine animals. \n To date, the commercial form of calcium carbonate it is obtained from the grinding of limestone or by precipitation of calcareous ions with carbonate ions (precipitated calcium carbonate). It is divided into 2 classes:   \n• Calcium Carbonate \n• Calcium Bicarbonate \n  It is commonly used in medicine as a calcium supplement or as an antacid, but excessive consumption can be dangerous. \n Can be found in biscuits, bread, cakes, ice cream, sweets, vitamin and other tablets and to firm canned fruit and vegetables. Also used in toothpastes, white paint and cleaning powders.',
    e_type: 'Colours',
    halal_status: 'Doubtful',
    risk_factor: 'Calcium carbonate – safe, widely used',
    countries_banned: null
  },
  {
    id: 136,
    e_code: 'E171',
    title: 'Titanium Dioxide',
    info: 'It is used as a natural coloring agent in food products and beverages. E171 is a white dye that is used to give opacity to food products. \n It is inert (not reactive) and is also used in the manufacture of paint and as a paper coating. \n At room temperature, E171 generally has the structure of rutile  (its mineral form). Titanium dioxide is extracted from the mineral ilmenite.   \n In large doses it can block cellular respiration, especially in organs such as the liver and kidneys. \n A recent reassessment of this additive by the European Union, in tests conducted with animals, determined that their nanoparticles cause chromosomal damage and increase the chances of suffering cancer risk.  For the time being, its continued use is allowed while it is subjected to more tests that determine its admissible daily intake.    \n Although many adverse effects have not been found, it is suspected that E171 acts as an irritant and possibly contaminates the waterways.  Can be found in tablets and capsules, cottage and Mozzarella cheeses, horseradish cream and sauces, lemon curd, toothpaste, and white paint, also in sweets where it is often used to provide a barrier between different colours. \n Banned in Germany.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Titanium dioxide; genotoxicity concern',
    countries_banned: 'Banned in EU (2022), France (2020)'
  },
  {
    id: 136,
    e_code: 'E171',
    title: 'Titanium Dioxide',
    info: 'It is used as a natural coloring agent in food products and beverages. E171 is a white dye that is used to give opacity to food products. \n It is inert (not reactive) and is also used in the manufacture of paint and as a paper coating. \n At room temperature, E171 generally has the structure of rutile  (its mineral form). Titanium dioxide is extracted from the mineral ilmenite.   \n In large doses it can block cellular respiration, especially in organs such as the liver and kidneys. \n A recent reassessment of this additive by the European Union, in tests conducted with animals, determined that their nanoparticles cause chromosomal damage and increase the chances of suffering cancer risk.  For the time being, its continued use is allowed while it is subjected to more tests that determine its admissible daily intake.    \n Although many adverse effects have not been found, it is suspected that E171 acts as an irritant and possibly contaminates the waterways.  Can be found in tablets and capsules, cottage and Mozzarella cheeses, horseradish cream and sauces, lemon curd, toothpaste, and white paint, also in sweets where it is often used to provide a barrier between different colours. \n Banned in Germany.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Titanium dioxide – possible carcinogen (IARC 2B)',
    countries_banned: 'Banned in EU'
  },
  {
    id: 137,
    e_code: 'E172',
    title: 'Iron Oxides and Hydroxides',
    info: 'It is used as a natural coloring agent in food and beverages.   E172 is a red / brown color that is available in three forms: \n • E172 (i) : black iron oxide \n •  E172 (ii): red iron oxide. \n • E172 (iii): yellow iron oxide. \n Iron is not actively absorbed by body tissue. \n Can be found in cake and dessert mixes, meat paste, salmon and shrimp paste. \n This dye can act as an irritant when it is in the form of a powder. Toxic at high doses.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Iron oxides/hydroxides; generally safe',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 137,
    e_code: 'E172',
    title: 'Iron Oxides and Hydroxides',
    info: 'It is used as a natural coloring agent in food and beverages.   E172 is a red / brown color that is available in three forms: \n • E172 (i) : black iron oxide \n •  E172 (ii): red iron oxide. \n • E172 (iii): yellow iron oxide. \n Iron is not actively absorbed by body tissue. \n Can be found in cake and dessert mixes, meat paste, salmon and shrimp paste. \n This dye can act as an irritant when it is in the form of a powder. Toxic at high doses.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Iron oxides – safe in small amounts',
    countries_banned: 'Restricted in USA'
  },
  {
    id: 138,
    e_code: 'E173',
    title: 'Aluminium',
    info: 'It is sometimes used as a coloring agent in food and beverage products. E173 is a silver / gray metal that tends to be used as a metallic surface coating. \n Aluminum is also used in many other food-related applications, such as food wrapping sheets, and even in part in water purification processes (including, for example, to help remove contaminants and other harmful microorganisms from a source of raw water). \n To produce E173 commercially, bauxite is extracted and purified  and the electrolysis takes place in the molten cryolite. \n Although aluminum can be part of a healthy diet, large amounts or accumulations have been linked to skeletal deformities, Alzheimer\'s disease and osteoporosis. It is not yet clear whether the accumulation of aluminum in the brain is or is not a cause or the result of Alzheimer\'s. \n Aluminum is generally considered harmful if inhaled or swallowed by itself.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Aluminium; potential accumulation concern',
    countries_banned: 'Permitted with limits; some restrictions'
  },
  {
    id: 138,
    e_code: 'E173',
    title: 'Aluminium',
    info: 'It is sometimes used as a coloring agent in food and beverage products. E173 is a silver / gray metal that tends to be used as a metallic surface coating. \n Aluminum is also used in many other food-related applications, such as food wrapping sheets, and even in part in water purification processes (including, for example, to help remove contaminants and other harmful microorganisms from a source of raw water). \n To produce E173 commercially, bauxite is extracted and purified  and the electrolysis takes place in the molten cryolite. \n Although aluminum can be part of a healthy diet, large amounts or accumulations have been linked to skeletal deformities, Alzheimer\'s disease and osteoporosis. It is not yet clear whether the accumulation of aluminum in the brain is or is not a cause or the result of Alzheimer\'s. \n Aluminum is generally considered harmful if inhaled or swallowed by itself.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Aluminium – potential neurotoxin',
    countries_banned: 'Banned in EU for food use'
  },
  {
    id: 139,
    e_code: 'E174',
    title: 'Silver',
    info: 'It is used as a coloring agent in food products and beverages. E174 is silver / gray coloring for food products. \n This metal is also used in photography, batteries and for the most obvious uses in jewelry and other cutlery such as cutlery. \n It can be obtained by means of crushed silver ore. Frequent and prolonged exposure to the powder form of silver can cause argyria, which is permanent staining of the eyes (argyrosis) and skin, especially of the nose and throat, in addition to causing eye damage.   \n It is known that in large doses causes damage to the nervous system and brain. \n As a food additive it is used solely for external decoration where it can be found on chocolate confectionery, in the covering of dragees and the decoration of sugar-coated flour confectionery.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Silver; argyria risk at high exposure',
    countries_banned: 'Restricted uses'
  },
  {
    id: 139,
    e_code: 'E174',
    title: 'Silver',
    info: 'It is used as a coloring agent in food products and beverages. E174 is silver / gray coloring for food products. \n This metal is also used in photography, batteries and for the most obvious uses in jewelry and other cutlery such as cutlery. \n It can be obtained by means of crushed silver ore. Frequent and prolonged exposure to the powder form of silver can cause argyria, which is permanent staining of the eyes (argyrosis) and skin, especially of the nose and throat, in addition to causing eye damage.   \n It is known that in large doses causes damage to the nervous system and brain. \n As a food additive it is used solely for external decoration where it can be found on chocolate confectionery, in the covering of dragees and the decoration of sugar-coated flour confectionery.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Silver – can accumulate (argyria)',
    countries_banned: 'Banned in EU'
  },
  {
    id: 140,
    e_code: 'E175',
    title: 'Gold',
    info: 'It is used as a coloring agent in food products and beverages. E175 is, as the name suggests, a golden coloration. \n As a food additive it is used solely for external decoration where it can be found on chocolate confectionery, in the covering of dragees and the decoration of sugar-coated flour confectionery. \n Gold is extracted through the cyanide process (the extraction of gold from its mineral by treatment with sodium cyanide) or through amalgamation with mercury.   Amalgam implies that gold becomes mercury to form an alloy: amalgam.   The mercury can be eliminated by dissolving it in nitric acid, leaving the gold. \n When tested in laboratories, gold has been associated with effects similar to tumors in animals.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Gold; low toxicity',
    countries_banned: 'Permitted for decoration; restricted uses'
  },
  {
    id: 140,
    e_code: 'E175',
    title: 'Gold',
    info: 'It is used as a coloring agent in food products and beverages. E175 is, as the name suggests, a golden coloration. \n As a food additive it is used solely for external decoration where it can be found on chocolate confectionery, in the covering of dragees and the decoration of sugar-coated flour confectionery. \n Gold is extracted through the cyanide process (the extraction of gold from its mineral by treatment with sodium cyanide) or through amalgamation with mercury.   Amalgam implies that gold becomes mercury to form an alloy: amalgam.   The mercury can be eliminated by dissolving it in nitric acid, leaving the gold. \n When tested in laboratories, gold has been associated with effects similar to tumors in animals.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Gold – inert, generally safe',
    countries_banned: null
  },
  {
    id: 141,
    e_code: 'E180',
    title: 'Pigment Rubine , Lithol Rubine BK',
    info: 'It is used as a synthetic coloring agent in food products and beverages. It is obtained derived from petroleum. E180 is a red azo dye, which is insoluble in cold water, but it becomes slightly soluble in warmer water. \n People with intolerance to salicylates may also find that they are intolerant to E180, because the coloration is an azo dye.  E180 can also worsen asthma and have a negative effect on those who suffer from rhinitis or hives from skin disease. Possible hyperactivity in children. \n In large doses it is a histamine releaser and can increase the symptoms of asthma and produce eczema, hives and insomnia.     Because it is an azo dye it can cause intolerance  in people allergic to salicylic acid.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Pigment Rubine; limited uses',
    countries_banned: 'Permitted EU; not approved in USA'
  },
  {
    id: 141,
    e_code: 'E180',
    title: 'Pigment Rubine , Lithol Rubine BK',
    info: 'It is used as a synthetic coloring agent in food products and beverages. It is obtained derived from petroleum. E180 is a red azo dye, which is insoluble in cold water, but it becomes slightly soluble in warmer water. \n People with intolerance to salicylates may also find that they are intolerant to E180, because the coloration is an azo dye.  E180 can also worsen asthma and have a negative effect on those who suffer from rhinitis or hives from skin disease. Possible hyperactivity in children. \n In large doses it is a histamine releaser and can increase the symptoms of asthma and produce eczema, hives and insomnia.     Because it is an azo dye it can cause intolerance  in people allergic to salicylic acid.',
    e_type: 'Colours',
    halal_status: 'Halal',
    risk_factor: 'Lithol Rubine BK – may cause allergic reactions',
    countries_banned: 'Banned in USA'
  },
  {
    id: 142,
    e_code: 'E181',
    title: 'Tannin',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Tannic acid; astringent; limited uses',
    countries_banned: 'Permitted with limits'
  },
  {
    id: 142,
    e_code: 'E181',
    title: 'Tannin',
    info: 'Brown',
    e_type: 'Brown',
    halal_status: 'Doubtful',
    risk_factor: 'Tannic acid – potential liver toxicity at high doses',
    countries_banned: null
  },
  {
    id: 143,
    e_code: 'E182',
    title: 'Orcein, Orchil',
    info: 'Purple',
    e_type: 'Purple',
    halal_status: 'Doubtful',
    risk_factor: 'Orseille/extrait d’orcein; allergy risk',
    countries_banned: 'Not permitted in EU for foods'
  },
  {
    id: 143,
    e_code: 'E182',
    title: 'Orcein, Orchil',
    info: 'Purple',
    e_type: 'Purple',
    halal_status: 'Doubtful',
    risk_factor: 'Orcein – limited safety data',
    countries_banned: 'Banned in USA'
  },
  {
    id: 144,
    e_code: 'E200',
    title: 'Sorbic Acid',
    info: 'Occurring naturally in some fruits Sorbic acid can be commercially manufactured synthetically from the toxic, irritant, colourless gas ketene. \n It is a preservative. The E200 occurs naturally in the fruit of European mountain ash (Sorbus aucuparia), also known as Azarollo, Rowan or Capudre, which gives its name to acid. \n It is used to prevent fungi and yeast. \n In addition to its use in these areas it can also be found in candied peel, cider, dessert sauces, fillings and toppings, fermented milks, frozen pizzas, fruit salads, gelatin capsules, soft drinks, soup concentrates, sweets, yoghurt.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sorbic acid – safe preservative',
    countries_banned: null
  },
  {
    id: 145,
    e_code: 'E201',
    title: 'Soduim Sorbate',
    info: 'It is a natural or synthetic preservative. It is a derivative of sorbic acid (E200). The E201 was isolated for the first time from the immature berries of the mountain ash, Sorbus Aucuparia, a small temperate tree. \n Commercially, today it would be synthesized chemically, especially from ketene. \n Sorbates are the salts of sorbic acid (E200). A chemical bond with simple bodies such as sodium, potassium or calcium forms the sodium sorbents E201, potassium E202 or calcium E203. It is used to prevent fungi and yeast. \n It is a questionable additive, suspected of being mutagenic in unclear conditions. Hypersensitivity and allergies not excluded in a fraction of sensitive consumers. \n It can be found in candied peel, cheese, cider, dessert sauces, dried apricots, fillings and toppings, fermented milks, frozen pizzas, fruit salads, gelatin capsules, margarine, processed cheese spreads and slices, soft drinks, soup concentrates.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium sorbate – safe preservative',
    countries_banned: null
  },
  {
    id: 146,
    e_code: 'E202',
    title: 'Potassium Sorbate',
    info: 'An antifungal and antibacterial  Preservative, manufactured by neutralisation of Sorbic Acid. \n It can be found in candied peel, cheese, cider, concentrated fruit juice, dessert sauces, dried apricots, fillings and toppings, fermented milks, frozen pizzas, fruit salads, gelatin capsules, glace cherries, jams and preserves, margarine, pickled cucumber, processed cheese spreads and slices, salad dressing, seafood dressings, soft drinks, soup concentrates, sweets, table olives, tinned fruit pie fillings and yoghurt.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Potassium sorbate – safe preservative',
    countries_banned: null
  },
  {
    id: 147,
    e_code: 'E203',
    title: 'Calcium Sorbate',
    info: 'An antifungal and antibacterial  Preservative, manufactured by neutralisation of Sorbic Acid, (E200). \nIt can be found in candied peel, cheese, cider, concentrated fruit juice, dessert sauces, dried apricots, fillings and toppings, fermented milks, frozen pizzas, fruit salads, gelatin capsules, margarine, processed cheese spreads and slices, soft drinks, soup concentrates, sweets and yoghurt.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Calcium sorbate – safe preservative',
    countries_banned: null
  },
  {
    id: 148,
    e_code: 'E209',
    title: 'Heptyl p-hydroxybenzoate',
    info: 'preservative',
    e_type: 'preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Heptyl paraben – endocrine disruptor risk',
    countries_banned: 'Banned in EU'
  },
  {
    id: 149,
    e_code: 'E210',
    title: 'Benzoic Acid',
    info: 'Whilst occuring naturally in many edible berries, fruits and vegetables it is available commercially by chemical synthesis from Benzoin, a resin exuded by trees native to Asia. \n Commercially, benzoic acid E210 is produced by chemical synthesis from toluene in particular. It is considered that this chemical preservative is much more toxic than the natural sources contained in certain plants. \n The most commonly reported side effect is allergic: asthma, urticaria, cutaneo-mucosa and respiratory symptoms in people sensitive or intolerant to salicylates.   But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic. \n Can be found in coffee essence, dessert sauces, soft drinks, flavouring syrups, fruit juice, pulp and puree, jam, margarine, marinated herring and mackerel, pickles, salad cream and dressings, fruit yoghurt, baked goods, cheeses, gum, condiments, frozen dairy, relishes, soft sweets, cordials and sugar substitutes. Also used in cosmetics, as an antiseptic in many cough medications and an antifungal in ointments.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Benzoic acid – may cause allergies/asthma',
    countries_banned: 'No global ban'
  },
  {
    id: 150,
    e_code: 'E211',
    title: 'Sodium Benzoate',
    info: 'It is a synthetic preservative. Benzoic acid, benzoates and benzoic acid esters are commonly found in most fruits, especially berries.   Cranberries are a very rich source of benzoic acid. \n In addition to fruits, benzoates are naturally found in mushrooms, cinnamon, cloves and some dairy products (as a result of bacterial fermentation).   For commercial purposes, it is prepared chemically from toluene.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium benzoate – linked to hyperactivity with additives',
    countries_banned: 'Restricted in UK for children'
  },
  {
    id: 151,
    e_code: 'E212',
    title: 'Potassium Benzoate',
    info: 'It is a synthetic preservative. Benzoic acid, benzoates and benzoic acid esters are commonly found in most fruits, especially berries.   Cranberries are a very rich source of benzoic acid. \n In addition to fruits, benzoates are naturally found in mushrooms, cinnamon, cloves and some dairy products (as a result of bacterial fermentation).   For commercial purposes, it is prepared chemically from toluene. \n Used as a Preservative, both antibacterial and antifungal. Can be found in margarine, pickled cucumbers, pineapple juice and table olives.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Potassium benzoate – similar to sodium benzoate',
    countries_banned: null
  },
  {
    id: 152,
    e_code: 'E213',
    title: 'Calcium Benzoate',
    info: 'It is a synthetic preservative. Benzoic acid, benzoates and benzoic acid esters are commonly found in most fruits, especially berries. Cranberries are a very rich source of benzoic acid. In addition to fruits, benzoates are naturally found in mushrooms, cinnamon, cloves and some dairy products (as a result of bacterial fermentation). \n For commercial purposes, it is prepared chemically from toluene.   \n The most commonly reported side effect is allergic: asthma, urticaria, cutaneo-mucosa and respiratory symptoms in sensitive or intolerant people to salicylates.   But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic. ',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Calcium benzoate – similar risks',
    countries_banned: null
  },
  {
    id: 153,
    e_code: 'E214',
    title: 'Ethyl 4-hydroxybenzoate',
    info: 'It is synthetic preservative. Benzoic acid and benzoates are used as preservatives against both yeasts and fungi. They are not very effective against bacteria. Activity does not depend on acidity. \n It exists in several foods such as barley, strawberry, black currant, some grapes. \n Benzoic acid esters are poorly soluble, which limits application. \n This Preservative comes with adverse health effects hence not recommended for consumption by children.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Ethyl p-hydroxybenzoate – paraben, hormone disruptor',
    countries_banned: 'Banned in EU'
  },
  {
    id: 154,
    e_code: 'E215',
    title: 'Ethyl-p-hydroxybenzoate sodium salt',
    info: 'It is synthetic preservative. A paraben is an artificial molecule whose base molecule is parahydroxybenzoic acid, a derivative of E210, it exists in several foods such as barley, strawberry, blackcurrant, some grapes. \n The parabens are prepared by esterification of this molecule with a corresponding alcohol in the presence of an acid catalyst, such as sulfuric acid, and an excess of the specific alcohol (heptanol, ethanol, n-propanol and methanol). The acid is then neutralized with soda caustic. \n The most commonly reported side effect is allergic: asthma, urticaria, cutaneo-mucosa and respiratory symptoms in sensitive or intolerant people to salicylates.    But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium ethyl paraben – paraben, hormone disruptor',
    countries_banned: 'Banned in EU'
  },
  {
    id: 155,
    e_code: 'E216',
    title: 'Propyl 4-hydroxybenzoate',
    info: 'It is synthetic preservative. This chemical belongs to the family of the famous parabens. A paraben is an artificial molecule whose base molecule is parahydroxybenzoic acid, a derivative of E210. \n It exists in several foods such as barley, strawberry, black currant, some grapes, but the toxicity of this molecule would be not at all the same as that of its derivatives. \n The parabens are prepared by esterification of this molecule with a corresponding alcohol in the presence of an acid catalyst, such as sulfuric acid, and an excess of the specific alcohol (heptanol, ethanol, n-propanol and methanol). The acid is then neutralized with soda caustic \n The most commonly reported side effect is allergic: asthma, urticaria, cutaneous-mucosal and respiratory symptoms in people sensitive or intolerant to salicylates.    But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic.  \n Prohibited its use in food for animals because even in small doses it is lethal for dogs and cats. In studies with laboratory animals caused epileptic seizures.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Propyl paraben – hormone disruptor',
    countries_banned: 'Banned in EU'
  },
  {
    id: 156,
    e_code: 'E217',
    title: 'Sodium Salt',
    info: 'It is a synthetic preservative. This chemical belongs to the family of the famous parabens. Component among other cosmetics and pharmacists. It is an n-propanol ester of p-hydroxybenzoic acid, sodium version. \n A paraben is an artificial molecule whose base molecule is arahidroxibenzoic acid, a derivative of E210, exists in several foods such as barley, strawberry, black currant, some grapes, but the toxicity of this molecule would be not at all the same than that of its derivatives. \n The parabens are prepared by esterification of this molecule with a corresponding alcohol in the presence of an acid catalyst, such as sulfuric acid, and an excess of the specific alcohol (heptanol, ethanol, n-propanol and methanol). \n The acid is then neutralized with soda caustic \n The most commonly reported side effect is allergic. Asthma, urticaria, cutaneous-mucosal and respiratory symptoms in people sensitive or intolerant to salicylates.    But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium propyl paraben – hormone disruptor',
    countries_banned: 'Banned in EU'
  },
  {
    id: 157,
    e_code: 'E218',
    title: 'Methyl 4-hydroxybenzoate',
    info: 'It is a synthetic preservative.   This chemical belongs to the family of the famous parabens.\n  Component among other cosmetics and pharmacists. It is an n-propanol ester of p-hydroxybenzoic acid, sodium version. \n A paraben is an artificial molecule whose base molecule is parahydroxybenzoic acid, a derivative of E210. \n It exists in several foods such as barley, strawberry, black currant, some grapes, but the toxicity of this molecule would be Not at all the same than that of its derivatives.  \n The parabens are prepared by esterification of this molecule with a corresponding alcohol in the presence of an acid catalyst, such as sulfuric acid, and an excess of the specific alcohol (heptanol, ethanol, n-propanol and methanol). The acid is then neutralized with soda caustic.  \n The most commonly reported side effect is allergic. Asthma, urticaria, cutaneous-mucosal and respiratory symptoms in people sensitive or intolerant to salicylates.    But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Methyl paraben – possible endocrine disruptor',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 158,
    e_code: 'E219',
    title: 'Methyl-p-hydroxybenzoate sodium salt',
    info: 'It is a synthetic preservative.   This chemical belongs to the family of the famous parabens. Component among other cosmetics and pharmacists. \n It is an n-propanol ester of p-hydroxybenzoic acid, sodium version. \n A paraben is an artificial molecule whose base molecule is parahydroxybenzoic acid, a derivative of E210. It exists in several foods such as barley, strawberry, black currant, some grapes, but the toxicity of this molecule would be Not at all the same than that of its derivatives.  \n The parabens are prepared by esterification of this molecule with a corresponding alcohol in the presence of an acid catalyst, such as sulfuric acid, and an excess of the specific alcohol (heptanol, ethanol, n-propanol and methanol). The acid is then neutralized with soda caustic \n The most commonly reported side effect is allergic. Asthma, urticaria, cutaneous-mucosal and respiratory symptoms in people sensitive or intolerant to salicylates. But it would also be: a potential carcinogen, mutagen (in vitro) and potential neurotoxic.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium methyl paraben – same risks',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 159,
    e_code: 'E220',
    title: 'Sulphur Dioxide',
    info: 'It is synthetic food preservative. The E220 is a poisonous gas with an irritating and suffocating odor that is released by volcanoes and various industrial processes. \n It can be manufactured among other methods by combustion of sulfur, hydrogen sulfide and roasting of sulfide minerals. \n The transformed food can use this pure gas (E220) or a combination of sulphurous acids with sodium, potassium or calcium to form the sulphites. ( E221, E222, E223, E224, E225, E226, E227, 228) \n People who are very sensitive, allergic, asthmatic or intolerant sulphites are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \n In low doses causes irritation in the digestive tract and inactivates Vitamin B. In the long term regular consumption could produce vitamin deficiency (deficiency of vitamins in the body). \n In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sulphur dioxide – can trigger asthma',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 160,
    e_code: 'E221',
    title: 'Sodium Sulphite',
    info: 'Sodium salt of sulphurous acid. It is a white, non-stable powder, which reacts with oxygen to form sodium sulphate. \n In acidic conditions it forms sulphurous acid, a preservative. It is used as a preservative as well as oxidising and bleaching agent to prevent spoilage and discoloration. In meat it prevents browning; however, it is not allowed in meat products, as it may mask bacterial spoilage characterized by discoloration. It is also used as a bread enhancer, by dint of its action in improving the kneading capacity of the bread. \n It is found in Egg-yolk and products with egg-yolk, salads, beer, bread, caramel. As a decontaminating agent in fresh orange juice, and during sugar refining. \n People who are very sensitive, allergic, asthmatic or intolerant sulphites are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis.   In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma. \nThe consumption of fresh meat packed with this additive is not recommended because it could mask the loss of color caused by the bacterial deterioration, although the law allows its use.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium sulphite – allergy/asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 161,
    e_code: 'E222',
    title: 'Sodium hydrogen sulphite',
    info: 'It is a synthetic food preservative. It is derived from the combustion of minerals with sulfur. It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity. \n People who are very sensitive, allergic, asthmatic or intolerant sulfites are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \nIn large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium bisulfite – allergy/asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 162,
    e_code: 'E223',
    title: 'Sodium Metabisulphite',
    info: 'It is a synthetic food preservative. It is derived from the combustion of minerals with sulfur. It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity. \n People who are very sensitive, allergic, asthmatic or intolerant sulfites are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \nIn large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium metabisulfite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 163,
    e_code: 'E224',
    title: 'Potassium Metabisulphite',
    info: 'It is a synthetic food preservative. It is derived from the combustion of minerals with sulfur. It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity. People who are very sensitive, allergic, asthmatic or intolerant sulfites are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \nIn large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Potassium metabisulfite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 164,
    e_code: 'E225',
    title: 'Potassium sulfite',
    info: 'It is a synthetic food preservative. It is derived from the combustion of minerals with sulfur. \n It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity. \n A gastric irritant. Destroys vitamins B and E. Due to its possible adverse effects its not recommended for consumption by children In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma. ',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Potassium sulphite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 165,
    e_code: 'E226',
    title: 'Calcium Sulphite',
    info: 'It is synthetic food preservative. It is derived from the combustion of minerals with sulfur. \n It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity.   People who are very sensitive, allergic, asthmatic or sulphite intolerant are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \n In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Calcium sulphite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 166,
    e_code: 'E227',
    title: 'Calcium Hydrogen Sulphite',
    info: 'It is synthetic food preservative. It is derived from the combustion of minerals with sulfur. It is used to prevent enzymes, bacteria and prevent discoloration of food. \n In bakery it is used to improve the bread kneading capacity. \n People who are very sensitive, allergic, asthmatic or sulphite intolerant are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \n In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma. \n The consumption of fresh meat packed with this additive is not recommended because it could mask the loss of color caused by the bacterial deterioration, although the law allows its use.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Calcium bisulfite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 167,
    e_code: 'E228',
    title: 'Potassium hydrogen sulphite',
    info: 'It is synthetic food preservative. It is derived from the combustion of minerals with sulfur. It is used to prevent enzymes, bacteria and prevent discoloration of the food. \n In bakery it is used to improve the bread kneading capacity. \n People who are very sensitive, allergic, asthmatic or sulphite intolerant are exposed to various mucocutaneous and respiratory symptoms, such as urticaria, asthma and, more rarely, anaphylaxis. \n In large doses can cause headaches, nausea, vomiting, allergy, bronchial irritation and asthma. \n The consumption of fresh meat packed with this additive is not recommended because it could mask the loss of color caused by the bacterial deterioration, although the law allows its use.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Potassium bisulfite – asthma risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 168,
    e_code: 'E230',
    title: 'Biphenyl / Diphenyl',
    info: 'It is a synthetic food preservative.   It is obtained by distillation of coal tar, crude oil or natural gas. \n It is used to prevent mold and mildew. \n The mutagenic and carcinogenic effects observed in animals and reported by the RTECS, penetrate the treated fruits and are not eliminated by a simple wash, they consume untreated citrus fruits. \n In low doses causes allergy, nausea, vomiting and eye irritation. Not recommended for consumption by children due to its possible adverse effects  \n  Its main application are non-organic citrus.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Biphenyl – antifungal, possible carcinogen',
    countries_banned: 'Banned in EU'
  },
  {
    id: 169,
    e_code: 'E231',
    title: '2-Hydroxybiphenyl',
    info: 'It is a synthetic food preservative.   \n It is used to prevent mold and mildew. Anti-mildew preservative used on the surface of non-organic citrus fruits Penetrates into fruits and would not be removed with a simple wash. \n It is used as a pesticide on the skin of citrus fruits, apples, pears and bananas. The skin of the fruits treated with this additive should not be consumed and it is preferable to wash hands before eating from inside. It does not disappear when washed with water. \n Sometimes fruits are also submerged in a liquid solution, which slowly penetrates their skin and therefore may also be present inside the fruit. \n It is also used in medicines Valsartan and Telmisartan against hypertension.   In low doses causes allergy, nausea, vomiting and eye irritation. \n Its main application are non-organic citrus.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Orthophenyl phenol – antifungal, skin irritant',
    countries_banned: 'Banned in EU'
  },
  {
    id: 170,
    e_code: 'E232',
    title: 'Phenylphenol sodium salt',
    info: 'It is a synthetic food preservative.   \n It is used to prevent mold and mildew. Anti-mildew preservative used on the surface of non-organic citrus fruits Penetrates into fruits and would not be removed with a simple wash. \n It is used as a pesticide on the skin of citrus fruits, apples, pears and bananas. The skin of the fruits treated with this additive should not be consumed and it is preferable to wash hands before eating from inside. It does not disappear when washed with water. \n Sometimes fruits are also submerged in a liquid solution, which slowly penetrates their skin and therefore may also be present inside the fruit. \n It is also used in medicines Valsartan and Telmisartan against hypertension.   In low doses causes allergy, nausea, vomiting and eye irritation. \n Its main application are non-organic citrus.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium orthophenyl phenol – similar risk',
    countries_banned: 'Banned in EU'
  },
  {
    id: 171,
    e_code: 'E233',
    title: '2-(Thiazol-4-yl)benzimidazole',
    info: 'It is a synthetic food preservative. It is used to prevent mold and mildew. \n Artificial pesticide used in non-organic fruits and vegetables (the highest doses are for citrus fruits, avocados, mushrooms in layers and storage potatoes). \n It no longer has the status of a food additive, but it is still widely used as an anti-mold pesticide.   \n Carcinogenic safety not excluded: The Association for Therapeutic Research Against Cancer includes thiabendazole as a potential carcinogen, enters the treated foods and is not eliminated by simple washing. \n Be careful with jams, jams and fruit juices (especially the sick and children).',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Thiobendazole – fungicide, toxic at high levels',
    countries_banned: 'Banned in EU'
  },
  {
    id: 172,
    e_code: 'E234',
    title: 'Nisin',
    info: 'It is a synthetic food preservative. It is used to prevent fungi, spores and microbes. \n A small antibacterial protein produced by the bacteria Streptococcus lactis or Lactococcus lactis, which occurs naturally in the intestine of humans and in many mammals. \n Commercially, the substance is or can be transgenic.   Its natural antibiotic action could, by frequent ingestion, cause insensitivity to antibiotics.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Nisin – safe antibacterial peptide',
    countries_banned: null
  },
  {
    id: 173,
    e_code: 'E235',
    title: 'Pimaracin',
    info: 'It is synthetic food preservative. It is used to prevent fungi, spores and microbes. \nAntibiotic molecule derived from the microorganisms Streptomyces natalensis used for a variety of fungal infections, mainly locally, and as a non-organic dietary additive. \n The use, at the discretion of the producer, of transgenic microorganisms is possible.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Natamycin – antifungal, safe at low levels',
    countries_banned: null
  },
  {
    id: 174,
    e_code: 'E236',
    title: 'Formic acid',
    info: 'It is a synthetic food preservative. It is used to prevent bacteria. \n Formic acid is a component of the defensive secretions of many Hymenoptera (including the ants from which it derives its name) and the pungent composition of nettles; It is also found to a lesser extent or in small amounts in some fruits and vegetables, honey, certain leaves and roots. \n Pure formic acid is a smoky, colorless liquid with a penetrating odor, with a possible olfactory detection of 0.024 parts per million (ppm). \n It is synthesized commercially in various ways, especially from carbon monoxide. This corrosive and potentially dangerous acid in pure form can be presented as harmless. \n However, laboratory experiments have shown a mutagenic effect, and it is among the probably carcinogenic additives of the Association for Therapeutic Research Against Cancer. \n It is also used in livestock fodder and in poultry to prevent E-Coli bacteria.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Formic acid – corrosive, limited food use',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 175,
    e_code: 'E237',
    title: 'Sodium formate',
    info: 'Commercially synthesised from sodium hydroxide and carbon monoxide. Present naturally as formic acid Used as a preservative against microorganisms. \n Fruit juices, non-alcoholic drinks, preserved vegetables, etc. Acceptable Daily Intake is upto 3 mg/kg body weight.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium formate – similar to formic acid',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 176,
    e_code: 'E238',
    title: 'Formic acid calcium salt',
    info: 'It is a synthetic food preservative. It is used to prevent bacteria. A derivative of E236 (formic acid) is obtained. \n Formic acid is a component of the defensive secretions of many Hymenoptera (including the ants from which it derives its name) and the pungent composition of nettles; It is also found to a lesser extent or in small amounts in some fruits and vegetables, honey, certain leaves and roots. \n Pure formic acid is a smoky, colorless liquid with a penetrating odor, with a possible olfactory detection of 0.024 parts per million (ppm). \n It is synthesized commercially in various ways, especially from carbon monoxide. This corrosive and potentially dangerous acid in pure form can be presented as harmless. \n However, laboratory experiments have shown a mutagenic effect, and it is among the probably carcinogenic additives of the Association for Therapeutic Research Against Cancer. \n It is also used in livestock fodder and in poultry to prevent E-Coli bacteria.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Calcium formate – similar to formic acid',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 177,
    e_code: 'E239',
    title: 'Hexamine',
    info: 'It is synthetic food preservative. It is used to prevent bacteria. \n Chemical product obtained by the action of ammonia on formaldehyde. \n Its ability to release antibacterial formaldehyde has led the pharmaceutical industry to use it as an anti-infective agent in the treatment of the urinary tract (due to the slow release of formaldehyde by acid hydrolysis).  \n In large doses caused genetic mutations. In the long term it could be carcinogenic.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Hexamethylene tetramine – can release formaldehyde',
    countries_banned: 'Banned in EU'
  },
  {
    id: 178,
    e_code: 'E240',
    title: 'Formaldehyde',
    info: 'It is synthetic food preservative. It is used to prevent bacteria and fungi. \n It is a highly reactive gas found in the incomplete combustion of carbonaceous substances or hydrocarbons, found in the smoke of forest fires, car emissions and tobacco smoke. It is produced industrially by oxidation of methanol. Gaseous formaldehyde is not commercially available. \n In the vast majority of cases, it is produced and sold as aqueous solutions containing 25 to 56% formaldehyde and 0.5 to 15% methanol.  \n It has been confirmed by the International Agency for Research on Cancer (IARC) that causes nasopharyngeal cancer in humans. Prohibited in most countries.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Formaldehyde – carcinogen',
    countries_banned: 'Banned in EU'
  },
  {
    id: 179,
    e_code: 'E241',
    title: 'Gum guaicum',
    info: 'It is a synthetic food preservative. E241 is extracted from the Guaiacum officinale and Guaiacum santum trees that originate in the tropical and subtropical regions of the Americas. \n Its constituents are approximately 70% of alpha and beta-guaiaconic acids, approximately 11% of guaiac acid, related components and gaiarético acid, 15% of vanillin, guaiacan yellow and guaiacan saponina (guaïacine).  \n Since 2017, E241 is no longer included in the Codex Alimentarius, it is often presented as a synonym of \'Guaiac Resin\', which remains Codex as an antioxidant on that date. \n Chewing gum or guaiac resin is included as a food additive in the United States and Canada in particular.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Guanidinoacetic acid – insufficient data',
    countries_banned: 'Banned in EU'
  },
  {
    id: 180,
    e_code: 'E242',
    title: 'Dimethylcarbonate',
    info: 'It is a synthetic food preservative. Synthetic antiseptic preservative. It is obtained through the synthesis of methyl ester of   Chloroformic acid. \n It is used to sterilize beverage containers. As it is not added directly to the drink it is considered a technical aid additive and it is not mandatory to indicate its use on the label. It is used to prevent yeast. \n This additive in alcoholic beverages, where it decomposes quickly in toxic methanol.   It is listed in California (United States) as a known carcinogen.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Dimethyl dicarbonate – safe sterilizer',
    countries_banned: null
  },
  {
    id: 181,
    e_code: 'E243',
    title: 'ethyl lauroyl arginate',
    info: 'It is a synthetic food preservative.  Synthetic antimicrobial preservative.   It is derived from the combination of the natural compounds Ethanol, Lauric Acid and Arginine. \n It is synthesized by esterification of Arginine with Ethanol, followed by a reaction of said ester with Lauroil Chloride, then the obtained Ethyl Lauroil Arginate is recovered as Hydrochloride Salt, which passes a filtering, drying process and finally takes place in the form of white powder. \n It is used to inhibit the proliferation of harmful bacteria, fungi, yeasts and microorganisms without creating genetic resistance on the part of the pathogens towards the additive.   \n In Europe, it is used in meat products. In the United States, it is used in grac variety of foods, both meats and other products.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Ethyl lauroyl arginate – considered safe',
    countries_banned: null
  },
  {
    id: 182,
    e_code: 'E249',
    title: 'Potassium Nitrate',
    info: 'It is synthetic food preservative. It is used to prevent bacteria and microbes. \n Nitrites are the potassium salts of nitrous acid, an important element of air pollution. \n They are also products of the degradation of nitrates in the body (stomach, saliva).  \n Nitrites are probably carcinogenic to humans at the International Agency for Research on Cancer, and they are certainly carcinogenic for the Association for Therapeutic Research Against Cancer.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Potassium nitrite – linked to nitrosamine cancer risk',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 183,
    e_code: 'E250',
    title: 'Sodium Nitrite',
    info: 'It is synthetic food preservative. It is obtained by synthesis of sodium hydroxide with mixtures of nitrous oxide and nitric oxide. It is used to prevent bacteria and microbes. Nitrites are the sodium or potassium salts of nitrous acid, an important element of air pollution. \n They are also products of the degradation of nitrates in the body (stomach, saliva). Nowadays, sodium nitrite is obtained as a byproduct of the nitric acid industry. Potassium nitrite can be obtained by reducing potassium nitrate. \n Nitrites are probably carcinogenic to humans at the International Agency for Research on Cancer, and they are certainly carcinogenic to the Association for Therapeutic Research Against Cancer. In sensitive or exposed persons: migraines, nausea, vomiting, dizziness, gastrointestinal disorders, vasodilatory effects, hypertension, reactions to histamine, cutaneous-mucous symptoms.   \n Its use is not allowed in products aimed at children of 6 months since they have a different type of hemoglobin, which is much more reactive than normal hemoglobin.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium nitrite – cancer risk via nitrosamines',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 184,
    e_code: 'E251',
    title: 'Sodium Nitrate',
    info: 'It is a synthetic food preservative.  Used as a preservative in processed meat products such as sausages and ham, as well as artificially smoked fish.  \n It is used to prevent bacteria and microbes. \n Sodium nitrate is known as nitrate from Chile or Peru because of its abundance in these countries and to distinguish it from potassium nitrate from common saltpeter. \n It is manufactured according to several synthetic processes, especially from nitric acid. It is widely used in agriculture as a fertilizer. \n  In the 1800s and early 1900s, sodium nitrate was used in the manufacture of gunpowder. It is still used today in fireworks, solid rocket fuels, in wastewater treatment and as a food preservative.  \n Nitrates are also used as fertilisers, and leach into watercourses, then subsequently into our drinking water. \n Not recommended for consumption by children due to its possible adverse effects by most health authorities.',
    e_type: 'Preservative',
    halal_status: 'Halal',
    risk_factor: 'Sodium nitrate – cancer risk via nitrosamines',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 185,
    e_code: 'E252',
    title: 'Potassium nitrate',
    info: 'It is a synthetic food preservative. It is used to prevent bacteria and microbes. \n Known since the Middle Ages under the name of saltpeter, with the appearance of white and fluffy fibers, it is found among other limestone caves that harbor bats and other creatures, in ancient cellars or damp houses (bacteria fed ammonia from soil water), in the guano. \n Saltpeter has a long history in the manufacture of gunpowder. It is also one of the oldest meat preservatives. \n  It reacts and produces nitrite and then nitric oxide, which transforms red myoglobin into a pink dye typical of ham, salami and canned meat in which it is injected. \n Nitrates and nitrites are probably classified as carcinogenic to humans at the International Agency for Research on Cancer and certainly are carcinogenic to the Association for Therapeutic Research Against Cancer.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Potassium nitrate – cancer risk via nitrosamines',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 186,
    e_code: 'E260',
    title: 'Acetic Acid',
    info: 'It  is a natural preservative and acidulant or sometimes synthetic food. It is used to prevent bacteria and fungi. \n It is one of the oldest food preservatives, is the well-known active principle of vinegar at a concentration of almost 5%, the latter is formed when ethanol (or pure alcohol) undergoes a bacterial fermentation. \nA variety of animal and vegetable tissues contain small amounts of acetic acid. In practice, acetic acid is not prepared by fermentation of alcoholic juices.   \n The pyrolysis or distillation of wood was widely used at the beginning of the 20th century, but today this method would be supplanted largely by the carbonylation of methanol.  \n  In more concentrated doses it can be corrosive to the digestive system and the bronchi.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Acetic acid – safe, common vinegar',
    countries_banned: null
  },
  {
    id: 187,
    e_code: 'E261',
    title: 'Potassium Acetate',
    info: 'It is a preservative and synthetic food acidulant. It is used to prevent bacteria and fungi. Acetates are the salts of acetic acid E260, which chemically bind to the latter with potassium, sodium, calcium, ammonia or zinc to form acetates E261 to E264 and E650.   \n Typically found in such products as sauces and pickles. Also used as a fabric conditioning agent, and in the manufacture of penicillin. \n In more concentrated doses it can be corrosive to the digestive system and the bronchi. Should be avoided by people with impaired kidney function as it is known to be a diuretic',
    e_type: 'Preservative - Acids',
    halal_status: 'Halal',
    risk_factor: 'Potassium acetate – safe',
    countries_banned: null
  },
  {
    id: 188,
    e_code: 'E262',
    title: 'Sodium acetate',
    info: 'It is a preservative and synthetic food acidulant. It is used to prevent bacteria and fungi. The acetates are the salts of acetic acid, which are chemically bound to the latter with potassium, sodium, calcium, ammonia or zinc to form the acetates E261 to E264 and E650.  \n In more concentrated doses it can be corrosive to the digestive system and the bronchi. ',
    e_type: ' Preservative - Acids',
    halal_status: 'Halal',
    risk_factor: 'Sodium acetate – safe',
    countries_banned: null
  },
  {
    id: 189,
    e_code: 'E263',
    title: 'Calcium Acetate',
    info: 'It is a preservative and synthetic food acidulant. It is used to prevent bacteria and fungi. The acetates are the salts of acetic acid, which are chemically bound to the latter with potassium, sodium, calcium, ammonia or zinc to form the acetates E261 to E264 and E650.   \n In more concentrated doses it can be corrosive to the digestive system and the bronchi.',
    e_type: 'Preservative - Acids',
    halal_status: 'Halal',
    risk_factor: 'Calcium acetate – safe',
    countries_banned: null
  },
  {
    id: 190,
    e_code: 'E264',
    title: 'Ammonium acetate',
    info: 'It is a preservative and synthetic food acidulant. It is used to prevent bacteria and fungi. \n The acetates are the salts of acetic acid, which are chemically bound to the latter with potassium, sodium, calcium, ammonia or zinc to form the acetates E261 to E264 and E650.   \n In more concentrated doses it can be corrosive to the digestive system and the bronchi.',
    e_type: 'Preservative - Acids',
    halal_status: 'Halal',
    risk_factor: 'Ammonium acetate – safe in small amounts',
    countries_banned: null
  },
  {
    id: 191,
    e_code: 'E265',
    title: 'Dehydroacetic acid',
    info: 'It is a synthetic food preservative.  Currently (2018) very few toxicological data are available for the substance in the processed diet. \n Uses are reported in cut or peeled pumpkin preparations, pickles, strawberries and even other processed fruits and vegetables.   \n Attention, strawberries, with grapes, are part of the processed diet of very harmful treated fruits. Buy these fruits in organic.   \n The dehydroacetic acid and / or its salt, sodium dehydroacetate, are also used in the parapharmacy products, in the so-called anti-enzyme toothpastes, as preservatives in cosmetics, as plasticizers for synthetic resins.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Dehydroacetic acid – possible liver toxicity',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 192,
    e_code: 'E266',
    title: 'Sodium dehydroacetate',
    info: 'It is a synthetic food preservative.  Currently (2018) very few toxicological data are available for the substance in the processed diet. \n Uses are reported in cut or peeled pumpkin preparations, pickles, strawberries and even other processed fruits and vegetables.   \n Attention, strawberries, with grapes, are part of the processed diet of very harmful treated fruits. Buy these fruits in organic.   \n The dehydroacetic acid and / or its salt, sodium dehydroacetate, are also used in the parapharmacy products, in the so-called anti-enzyme toothpastes, as preservatives in cosmetics, as plasticizers for synthetic resins.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Sodium dehydroacetate – similar risks',
    countries_banned: 'Restricted in EU'
  },
  {
    id: 193,
    e_code: 'E270',
    title: 'Lactic Acid',
    info: 'As a food additive it increases the antioxidant properties of other substances and can be used to add a bitter taste. All fermented foods are very rich in lactic acid. \n Commercially produced by bacterial fermentation on starch and molasses. \n Also produced in large amounts in the large intestine by the resident bacteria. It is the commonest acidic constituent of fermented milk products such as sour milk, cheese, and buttermilk. \n Also used in carbonated drinks, jams, jellies, soft margarine, marmalade, infant milks and cereals, pickled red cabbage, salad dressings, sweets, tartare sauce and many tinned products, such as babyfoods, mackerel, pears, sardines, strawberries and tomatoes.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Lactic acid – safe, natural',
    countries_banned: 'No global ban'
  },
  {
    id: 194,
    e_code: 'E280',
    title: 'Propionic acid',
    info: 'It is a natural or synthetic food preservative. It is obtained naturally by fermentation of wood pulp or synthetically by oxidation of Propanal.   \n According to the sources consulted, propionic acid is harmless or doubtful if it is not toxic. In fact, it is sometimes reported as a controversial additive.   \n In particular, it has been banned in Germany (and subsequently reintroduced by the European Union). Too much propanoic acid may be the cause of some cases of regressive autism. \n Injected into the brain of rats, it causes reversible neurological disorders, such as tics, hyperactivity and instability.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Propionic acid – safe preservative',
    countries_banned: null
  },
  {
    id: 195,
    e_code: 'E281',
    title: 'Sodium Propionate',
    info: 'It is a synthetic food preservative. Obitene derived from Propionic Acid (E280). Propionic acid is a clear liquid with the unpleasant odor characteristic of sweat. \n Bacteria in the sebaceous or sweat glands produce propionic acid. \n Too much propanoic acid may be the cause of some cases of regressive autism. Injected into the brain of rats, it causes reversible neurological disorders, such as tics, hyperactivity and instability. ',
    e_type: 'Preservative- Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Sodium propionate – safe preservative',
    countries_banned: null
  },
  {
    id: 196,
    e_code: 'E282',
    title: 'Calcium Propionate',
    info: 'It is a synthetic food preservative. Obitene derived from Propionic Acid (E280). Propionic acid is a clear liquid with the unpleasant odor characteristic of sweat. Bacteria in the sebaceous or sweat glands produce propionic acid. \n Too much propanoic acid may be the cause of some cases of regressive autism. \n Injected into the brain of rats, it causes reversible neurological disorders, as tics, hyperactivity and instability.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Calcium propionate – safe, may cause migraines in some',
    countries_banned: null
  },
  {
    id: 197,
    e_code: 'E283',
    title: 'Potassium propionate',
    info: 'It is a synthetic food preservative. Obitene derived from Propionic Acid (E280). Propionic acid is a clear liquid with the unpleasant odor characteristic of sweat. Bacteria in the sebaceous or sweat glands produce propionic acid. \n Too much propanoic acid may be the cause of some cases of regressive autism. \n Injected into the brain of rats, it causes reversible neurological disorders, as tics, hyperactivity and instability.',
    e_type: 'Preservative - Acids',
    halal_status: 'Doubtful',
    risk_factor: 'Potassium propionate – safe preservative',
    countries_banned: null
  },
  {
    id: 198,
    e_code: 'E284',
    title: 'Boric acid',
    info: 'It is a synthetic food preservative.   Substance manufactured by treatment of borax (sodium borate and E285) with a strong mineral acid such as hydrochloric or sulfuric acid.   \n In the United States, boric acid is manufactured mainly from sodium borate minerals, while in Europe it is made from colemanite (a borate mineral hydrated with calcium) imported from Turkey. \n The substance is reprotoxic (it is harmful to fertility and to the fetus, it is also found in breast milk in humans), probably carcinogenic, mutagenic and teratogenic in animals and is suspected in humans. \n The use in the form of lotions and powders can have caused serious poisonings and deaths.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Boric acid – toxic at high doses',
    countries_banned: 'Banned in EU'
  },
  {
    id: 199,
    e_code: 'E285',
    title: 'Sodium tetraborate',
    info: 'It is a synthetic food preservative. Substance manufactured by borax treatment with a strong mineral acid such as hydrochloric or sulfuric acid. \n In the United States, boric acid is manufactured mainly from sodium borate minerals, while in Europe it is made from colemanite (a borate mineral hydrated with calcium) imported from Turkey. \n The substance is reprotoxic (it is harmful to fertility and to the fetus, it is also found in breast milk in humans), probably carcinogenic, mutagenic and teratogenic in animals and is suspected in humans.   \n The use in the form of lotions and powders would have caused serious poisonings and deaths.    According to the World Health Organization (WHO) is unacceptable as a food additive although it is still used by some manufacturers. \n The boric ions oppose the synthesis of glutamine in the brain. In recent studies, its high consumption over a period of 5 to 10 years caused liver cancer in humans.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: 'Sodium tetraborate (Borax) – toxic',
    countries_banned: 'Banned in EU'
  },
  {
    id: 200,
    e_code: 'E290',
    title: 'Carbon Dioxide',
    info: 'It is a packaging gas, propellant and acidulant. E290 is a colorless and odorless gas, specially formed in the body and necessary in the breathing cycle of plants and animals. \n There would be little or no information on the manufacture of carbon dioxide for food purposes, it could be manufactured by fermentation. Otherwise, carbon dioxide can be obtained as a byproduct of many industrial processes: the synthetic production of ammonia, hydrogen, the production of natural gas substitution, fermentation and calcination of limestone. \n Most of the sources consulted do not report known side effects in the diet, but could slow digestion to avoid if possible.',
    e_type: 'Miscellaneous',
    halal_status: 'Halal',
    risk_factor: 'Carbon dioxide – safe, used in drinks',
    countries_banned: null
  },
  {
    id: 201,
    e_code: 'E296',
    title: 'Malic Acid',
    info: 'It is a natural or synthetic food acidulant. Malic acid is very widespread in the vegetable kingdom and is present naturally in apples, pears and grape juice in particular. The human body produces some too.  \n In large doses it can cause digestive problems in children and infants since they lack the ability to metabolize malic acid.   \n Therefore, it is not allowed to add high concentrations in foods for children.',
    e_type: 'Preservative - Acids ',
    halal_status: 'Halal',
    risk_factor: 'Malic acid – safe, natural acid',
    countries_banned: null
  },
  {
    id: 202,
    e_code: 'E297',
    title: 'Fumaric Acid',
    info: 'It is a natural or synthetic food acidulant. Natural or synthetic acid. \n It is obtained naturally by fermentation of sugar with fungi or synthetically by catalytic isomerization of Maleic Acid. \n It is also used to prevent microbes. The sources consulted report an innocuous additive.',
    e_type: 'Preservative- Acids ',
    halal_status: 'Halal',
    risk_factor: 'Fumaric acid – safe in limited amounts',
    countries_banned: null
  },
  {
    id: 203,
    e_code: 'E300',
    title: 'Ascorbic acid (Vitamin C)',
    info: 'It is a natural or synthetic food antioxidant. Ascorbic acid exists in 4 forms of which only one is vitamin C: L-ascorbic acid. The other forms are D-ascorbic acid, D-isoascorbic acid (E315) and L-isoascorbic acid. \n These forms have little or no vitamin value, and potentially toxic in high doses. DL-ascorbic acid is also produced and distributed frequently in pharmacies such as vitamin C. \n The commercial version of L-ascorbic acid is not extracted naturally from carrier foods (fruits, vegetables), but  is biosynthesized by the bacteriological fermentation of D-glucose, from which genetic engineering is found, among others , possible.    \n The sources consulted report shared but positive results in general:  there would be no disadvantages in moderate doses according to some sources, while for others, L-ascorbic acid is harmless or harmless in high doses.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: 'Ascorbic acid (Vitamin C) – safe, antioxidant',
    countries_banned: null
  },
  {
    id: 204,
    e_code: 'E301',
    title: 'Sodium-L-Ascorbate',
    info: 'It is a natural or synthetic food antioxidant. Ascorbates are the salts of ascorbic acid. A bond with sodium allows the manufacture of sodium ascorbates E301. No side effects have been found.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: 'Sodium ascorbate – safe antioxidant',
    countries_banned: null
  },
  {
    id: 205,
    e_code: 'E302',
    title: 'Calcium-L-Ascorbate',
    info: 'It is a synthetic food antioxidant. Ascorbates are the salts of ascorbic acid. A calcium bond allows the manufacture of calcium ascorbate E302. No side effects have been found. \n Sometimes it is believed that the calcium that binds can come from bones. But sometimes it can come from a mineral form.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: 'Calcium ascorbate – safe antioxidant',
    countries_banned: null
  },
  {
    id: 206,
    e_code: 'E303',
    title: 'Potassium ascorbate',
    info: 'It is a synthetic food antioxidant. Ascorbates are the salts of ascorbic acid. A link with potassium allows to manufacture potassium ascorbates E303. \n It is used in meat products to prevent the formation of nitrosamines and in other products. No side effects have been found.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 207,
    e_code: 'E304',
    title: 'Ascorbyl Palmitate',
    info: 'It is a synthetic food antioxidant. Palmitoate and ascorbyl stearate are esters of L-ascorbic acid (Vit C) made with palmitic acid and stearic acid, respectively.  \n  They are reported as a fat-soluble form of vitamin C. There are different ways of making these ascorbyls, mostly if not completely by biosynthesis, from which a transgenic application seems possible. \n It is used in meat products to prevent the formation of nitrosamines and in other products. \n No side effects have been found. Most of the sources consulted do not report any danger.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 208,
    e_code: 'E305',
    title: 'Ascorbyl stearate',
    info: 'antioxidant',
    e_type: 'antioxidant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 209,
    e_code: 'E306',
    title: 'Tocopherol concentrate',
    info: 'It  is a natural antioxidant food. Tocopherols are, along with tocotrienols, the isomeric constituents of vitamin E, and they are eight in number. \n It is obtained from sources such as wheat germ, sunflower and safflower oil. \n The dominant and most effective constituent is alpha-tocopherol, and is often referred to as vitamin E or tocopherol. \n Now it is known that the activity of the vitamin and the antioxidant is not limited to alpha-tocopherol alone. \n Being insoluble in water, it is only used in fatty foods. It is used to prevent the oxidative degradation of lipids. \n It is harmless according to the vast majority of sources consulted.',
    e_type: 'Antioxidants- Vitamin E',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 210,
    e_code: 'E307',
    title: 'Alpha-tocopherol',
    info: 'It is a synthetic food antioxidant. Tocopherols are, along with tocotrienols, the isomeric constituents of vitamin E, and they are eight in number. \n It is obtained from sources such as wheat germ, sunflower and safflower oil.   The dominant and most effective constituent is alpha-tocopherol, and is often referred to as vitamin E or tocopherol. \n Now it is known that the activity of the vitamin and the antioxidant is not limited to alpha-tocopherol alone. \n Being insoluble in water, it is only used in fatty foods. It is used to prevent the oxidative degradation of lipids. \n It is harmless according to the vast majority of sources consulted.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 211,
    e_code: 'E308',
    title: 'Synthetic Gamma-Tocopherol',
    info: 'It is a synthetic food antioxidant. Tocopherols are, along with tocotrienols, the isomeric constituents of vitamin E, and they are eight in number.  It is obtained from sources such as wheat germ, sunflower and safflower oil.   \n The dominant and most effective constituent is alpha-tocopherol, and is often referred to as vitamin E or tocopherol. Now it is known that the activity of the vitamin and the antioxidant is not limited to alpha-tocopherol alone. \n Being insoluble in water, it is only used in fatty foods. It is used to prevent the oxidative degradation of lipids.    ',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 212,
    e_code: 'E309',
    title: 'Delta Tocopherol',
    info: 'It is a synthetic food antioxidant. Tocopherols are, along with tocotrienols, the isomeric constituents of vitamin E, and they are eight in number. It is obtained from sources such as wheat germ, sunflower and safflower oil.   \n The dominant and most effective constituent is alpha-tocopherol, and is often referred to as vitamin E or tocopherol. \n Now it is known that the activity of the vitamin and the antioxidant is not limited to alpha-tocopherol alone. \n Being insoluble in water, it is only used in fatty foods. It is used to prevent the oxidative degradation of lipids. The E309 is harmless according to the vast majority of sources consulted.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 213,
    e_code: 'E310',
    title: 'Propyl Gallate',
    info: 'It  is a synthetic food antioxidant. The E310 is sensitive to heat so it is not used in baked, fried or high temperature products. \n It is used to prevent the oxidative degradation of lipids. E310 is a synthetic product, ester formed by condensation of gallic acid (it exists naturally in some plants) and propanol (chemical alcohol derived from propane gas). \n It would further degrade in the intestine to propanol and gallic acid. In large doses it causes hyperactivity, asthma, urticaria, insomnia, digestive problems, liver and kidney infection, lymphomas and various allergic reactions. The E310 that contain traces of organochlorine substances, possible carcinogenic effect.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 214,
    e_code: 'E311',
    title: 'Octyl gallate',
    info: 'It is a synthetic food antioxidant. The E311 is sensitive to heat so it is not used in baked, fried or high temperature products. \n It is used to prevent the oxidative degradation of lipids. E311 is a synthetic product, ester formed by condensation of gallic acid (exists naturally in some plants) and octanol (chemical alcohol derived from octanol gas). \n It would further degrade in the intestine to octanol and gallic acid.  \n  In large doses it causes hyperactivity, asthma, urticaria, insomnia, digestive problems, liver and kidney infection, lymphomas and various allergic reactions.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 215,
    e_code: 'E312',
    title: 'Dodecyl Gallate',
    info: 'It is a synthetic food antioxidant. The E312 is sensitive to heat so it is not used in baked, fried or high temperature products. \n It is used to prevent the oxidative degradation of lipids. E311 is a synthetic product, ester formed by condensation of gallic acid (it exists naturally in some plants) and dodecanol (chemical alcohol derived from dodecanol gas). \n It would further degrade in the intestine to dodecanol and gallic acid. In large doses it causes hyperactivity, asthma, urticaria, insomnia, digestive problems, liver and kidney infection, lymphomas and various allergic reactions.',
    e_type: 'Antioxidants',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 216,
    e_code: 'E313',
    title: 'Thiodipropionic acid',
    info: 'It is a synthetic food antioxidant. The E313 is sensitive to heat so it is not used in baked, fried or high temperature products. \n It is used to prevent the oxidative degradation of lipids. E313 is a synthetic product, ester formed by condensation of gallic acid (it exists naturally in some plants) and ethanol (pure alcohol). \n Ethyl gallate occurs naturally in a variety of plant sources. In large doses it causes hyperactivity, asthma, urticaria, insomnia, digestive problems, liver and kidney infection, lymphomas and various allergic reactions.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 217,
    e_code: 'E314',
    title: 'Guaiac Gum',
    info: 'It  is a natural food antioxidant.   The guaiacum resin (or gum) is extracted from the trees Guaiacum officinale and Guaiacum santum that originate in the tropical and subtropical regions of the Americas. \n The name rubber gum is sometimes used in place of guaiac resin. \n  Its constituents are approximately 70% alpha and beta-guaiaconic acids, approximately 11% guaiac acid, related components and gaiarético acid, 15% vanillin, guaiacan yellow and guaiacan saponin (guaiacum). \n There would be no known side effects in the proportions used. \n Some allergies have been reported. In the United States, the additive is classified as GRAS level 1. However, it is excluded from the organic diet of the United States.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 218,
    e_code: 'E315',
    title: 'Erythorbic acid',
    info: 'It is a synthetic food antioxidant. The E315 is synthetic of chemical formula identical to vitamin C (L-ascorbic acid), but with a different spatial configuration, it is only a stereoisomer or little biocompatible, which fulfills an antioxidant function but only 1/20 of the function of the vitamin. Its synthesis is simpler and cheaper than that of ascorbic acid. \n There are no known side effects to date, in the concentrations used or in doses lower than the acceptable daily intake. Daily intake: Up to 6 mg / kg of body weight. ',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 219,
    e_code: 'E316',
    title: 'Sodium erythorbate',
    info: 'It is a synthetic food antioxidant. The E316 is obtained derived from the Erythorbic Acid (E315). It is used in meat products to prevent the formation of nitrosamines and in other products. \n Eritorbates are the salts of erythorbic acid. A union with sodium leads to the manufacture of Erytrorbatos of sodium E316. \n There are no known side effects to date.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 220,
    e_code: 'E317',
    title: 'Erythorbic acid',
    info: 'It  is a synthetic food antioxidant. The E317 is obtained derived from the Erythorbic Acid (E315). \n It is used in meat products to prevent the formation of nitrosamines and in other products. \n Eritorbates are the salts of erythorbic acid. A binding with potassium leads to the manufacture of potassium Erytrorbates E317. \n There are no known side effects to date.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 221,
    e_code: 'E318',
    title: 'Calcium erythorbate',
    info: 'It is a synthetic food antioxidant.  The E318 is obtained derived from the Erythorbic Acid (E315). \n It is used in meat products to prevent the formation of nitrosamines and in other products. \n Eritorbates are the salts of erythorbic acid. A binding with calcium leads to the manufacture of E318 calcium Erytrorbates. \n No side effects are known to date',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 222,
    e_code: 'E319',
    title: 'Butylhydroxinon',
    info: 'It is a synthetic food antioxidant. It is used to prevent the oxidation of fats. TBHQ is a synthetic derivative of hydroquinone and a member of the phenol family. Hydroquinones are one of the two main reagents in the defensive glands of Bombardier beetles. \n It is also believed to be the active toxin of the fungus Agaricus hondensis. Cytotoxic, genotoxic, mutagenic and carcinogenic potentials are not excluded. \n Precursor of stomach tumors in animals. Although it is clearly presented as an additive to avoid according to some sources, the official position is that the doses used in the processed diet are not a cause for concern. \n Behavioral and / or hyperactivity disorders are also reported in children.   It is not recommended in children and pregnant women    ',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 223,
    e_code: 'E320',
    title: 'Butylated Hydroxyanisole (BHA)',
    info: 'It is a synthetic food antioxidant. It is used to prevent the oxidation of fats. BHA is a synthetic product, producible by alkylation of 4-hydroxyanisole with isobutylene (syn .: Isobutene, a hydrocarbon derivative of isobutane).  \n BHA is strongly suspected of being carcinogenic   Other side effects reported: \n Alteration of digestive enzyme synthesis in the liver \n  Increase in cholesterol and blood lipids, cumulative risk \n Suspected hyperactivity in children.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 224,
    e_code: 'E321',
    title: 'Butylated Hydroxytoluene (BHT)',
    info: 'It is a synthetic food antioxidant. It is used to prevent the oxidation of fats. BHT is a synthetic product produced by the alkylation of para-cresol with isobutylene (syn .: Isobutene, a hydrocarbon derivative of isobutane)   \n BHT is strongly suspected of being carcinogenic.  Other side effects reported: \n Causes mutagenic effects, alters the blood composition. \n  Increase in cholesterol and blood lipids, cumulative risk \n related to behavioral disorders (care for children).',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 225,
    e_code: 'E322',
    title: 'Lecithin',
    info: 'It is a natural food emulsifier. Natural lecithin is present in all living cells and it is an important component of nerve and brain cells. \n Commercial lecithin comes mainly from soybean oil, which can be genetically modified. Other sources are egg yolks and legume seeds, including peanuts and corn, which can also be transgenic. \n It is used to mix water and oil / fat. \n Lecithins are often presented as non-toxic. Overdose can disturb the stomach, affect appetite and cause sweating   intense.',
    e_type: 'Emulsifiers',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 226,
    e_code: 'E323',
    title: 'Anoxomer',
    info: 'It is a synthetic food antioxidant. Synthetic substance and non-digestible polymeric antioxidant. \n It would have been designed to allow the introduction of antioxidants non-absorbable to avoid the potential health risks associated with your digestion. \n The anoxomer should be used as an antioxidant at a level not to exceed 0.5% of the fat and oil content of the food. \n According to her, A dose of oral anoxomer can be absorbed up to 0.2% in humans. There is not much information about this additive.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 227,
    e_code: 'E324',
    title: 'Ethoxyquin',
    info: 'It is a synthetic food antioxidant. Synthetic chemical, antioxidant and pesticide of the family of quinoline or quinoline, a light yellow to brown liquid with an unpleasant smell of sulphurous chemical compound or  "smell ball". \n  Quinoline is present naturally in the rutáceas (family of plants) that grow in South America, as well as, very rarely in the animal world, in certain stick insects such as the Peruvian Oreophoetes, which secretes, if altered, a rich white liquid.\n  Suspected mutagen, possibility of liver assignment,   The first target organs affected in guinea pigs are the liver and kidneys.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 228,
    e_code: 'E325',
    title: 'Sodium Lactate',
    info: 'It is a synthetic antioxidant and acidity regulator. Obtained a derivative of lactic acid (E270), where it is extracted from the milk sugar (lactose) or synthetically fermenting sugar cane. \n It is used to prevent fungi and bacteria. Lactates are the salts of lactic acid. The latter is chemically bound with sodium to form E325 sodium lactates. \n There are contradictory reports. Some discourage this additive for pregnant or lactating women and for young children who are allergic to milk, while others consider it harmless.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 229,
    e_code: 'E326',
    title: 'Potassium Lactate',
    info: 'It is a synthetic antioxidant and acidity regulator. Obtained a derivative of lactic acid (E270), where it is extracted from the milk sugar (lactose) or synthetically fermenting sugar cane. \n It is used to prevent fungi and bacteria. Lactates are the salts of lactic acid. The latter is chemically bound with potassium to form potassium lactates E326. \n There are contradictory reports. Some discourage this additive for pregnant or lactating women and for young children who are allergic to milk, while others consider it harmless.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 230,
    e_code: 'E327',
    title: 'Calcium Lactate',
    info: 'It is a synthetic antioxidant and acidity regulator. Obtained a derivative of lactic acid (E270), where it is extracted from the milk sugar (lactose) or synthetically fermenting sugar cane. \n It is used to prevent fungi and bacteria. Lactates are the salts of lactic acid. The latter is chemically bound with calcium to form calcium lactates E327. \n There are contradictory reports. Some discourage this additive for pregnant or lactating women and for young children who are allergic to milk, while others consider it harmless.  ',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 231,
    e_code: 'E328',
    title: 'Ammonium lactate',
    info: 'It is a synthetic antioxidant and acidity regulator. Obtained a derivative of lactic acid (E270), where it is extracted from the milk sugar (lactose) or synthetically fermenting sugar cane. It is used to prevent fungi and bacteria.   \n Lactates are the salts of lactic acid. The latter is chemically bound with ammonium to form ammonium lactates E328. \n There are contradictory reports. Some discourage this additive for pregnant or lactating women and for young children who are allergic to milk, while others consider it harmless.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 232,
    e_code: 'E329',
    title: 'Magnesium lactate',
    info: 'It  is a synthetic antioxidant and acidity regulator. Obtained a derivative of lactic acid (E270), where it is extracted from the milk sugar (lactose) or synthetically fermenting sugar cane. It is used to prevent fungi and bacteria. Lactates are the salts of lactic acid. The latter is chemically bound with magnesium to form magnesium lactates E329. There are contradictory reports. Some discourage this additive for pregnant or lactating women and for young children who are allergic to milk, while others consider it harmless.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 233,
    e_code: 'E330',
    title: 'Citric Acid',
    info: 'Natural citric acid (E330) plays a central role in the metabolism of virtually all living organisms and takes its name from the lemon, where it is present in large quantities. \n Today, the main commercial route of the production of citric acid is the culture of Aspergillus niger, fed with a substrate that contains sugar.   \n This microorganism can be transgenic to increase the yield. \n The source of the sugar is macerated corn liquor, molasses, hydrolyzed corn starch or other low-cost sweet solutions.   \n Citric acid can also be obtained from a more expensive method using products derived from pineapple.   \n Citric acid is often presented as harmless,   except that it can attack tooth enamel, aphthosis, allergies / pseudo-allergies and other problems in a sensitive person, in high doses or in regular consumption.',
    e_type: 'Miscellaneous - Citric Acid and its Salts',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 234,
    e_code: 'E331',
    title: 'Sodium Citrates',
    info: 'It is a synthetic food antioxidant. Citrates are the salts of citric acid: a bond with sodium citrates of E331 sodium. \n Citric acid is often presented as harmless, except that it can attack tooth enamel, aphthosis, allergies / pseudo-allergies and other problems in a sensitive person, in high doses or in regular consumption.',
    e_type: 'Miscellaneous - Citric Acid and its Salts',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 235,
    e_code: 'E332',
    title: 'Potassium Citrates',
    info: 'It  is a synthetic food antioxidant. Citrates are the salts of citric acid: a bond with potassium that produces potassium E332 citrates. \n Citric acid is often presented as harmless, except that it can attack tooth enamel, aphtosis, allergies / pseudo-allergies and other problems in a sensitive person, in high doses or in regular consumption.',
    e_type: 'Miscellaneous - Citric Acid and its Salts',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 236,
    e_code: 'E333',
    title: 'Calcium Citrates',
    info: 'It is a synthetic food antioxidant. Citrates are the salts of citric acid: a bond with calcium that produces citrates of E333 calcium.   \n Citric acid is often presented as harmless, except that it can attack tooth enamel, aphthosis, allergies / pseudo-allergies and other problems in a sensitive person, in high doses or in regular consumption. \n Sometimes it can come from animal bone.',
    e_type: 'Miscellaneous - Citric Acid and its Salts',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 237,
    e_code: 'E334',
    title: 'Tartaric Acid',
    info: 'It is a natural acidifier, antioxidant and regulator of food acidity. It is obtained from the fermentation of some fruits such as grapes, tamarinds and certain kinds of berries. \n During the storage of the wine, a background of tartaric acid forms after a certain time in the barrels and in the bottles. \n Many sources do not report side effects. \n The European Union generally authorizes it without a dose limit in canned fruits and vegetables, jams, cocoa and chocolate products, fresh pastes, sweetener tablets, as well as biscuits, biscuits and baby food.',
    e_type: 'Antioxidants - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 238,
    e_code: 'E335',
    title: 'Sodium Tartrates',
    info: 'It is a natural acidifier, antioxidant and regulator of food acidity. It is obtained derived from the salt of Tartaric Acid (E334). Many sources do not report side effects. \n The European Union generally authorizes it without a dose limit in canned fruits and vegetables, jams, cocoa and chocolate products, fresh pastes, sweetener tablets, as well as biscuits, biscuits and baby food.',
    e_type: 'Antioxidants - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 239,
    e_code: 'E336',
    title: 'Potassium Tartrates (Cream of Tartar)',
    info: 'It is a natural acidifier, antioxidant and regulator of food acidity. It is obtained derived from the salt of Tartaric Acid (E334). Tartars are salts of tartaric acid, a link with potassium allows to obtain potassium tartrate E336. \n Many sources do not report side effects. The European Union generally authorizes it without a dose limit in canned fruits and vegetables, jams, cocoa and chocolate products, fresh pastes, sweetener tablets, as well as biscuits, biscuits and baby food.',
    e_type: 'Antioxidants - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 240,
    e_code: 'E337',
    title: 'Potassium Sodium Tartrates',
    info: 'It  is a natural acidifier, antioxidant and regulator of food acidity. \n It is obtained derived from the salt of Tartaric Acid (E334). The Tartars are the salts of tartaric acid, a link with sodium and potassium it allows to obtain the sodium and potassium tartrate E337. \n Many sources do not report side effects. The European Union generally authorizes it without a dose limit in canned fruits and vegetables, jams, cocoa and chocolate products, fresh pastes, sweetener tablets, as well as biscuits, biscuits and baby food.',
    e_type: 'Antioxidants - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 241,
    e_code: 'E338',
    title: 'Orthophosphoric Acid',
    info: 'It  is a natural acidifier, antioxidant and regulator of food acidity. \n Phosphoric acid is a mineral acid that is obtained by treating the calcium phosphate rock with sulfuric acid or a phosphorus combustion process. The latter is the raw material for the production of phosphates. \n Pure phosphoric acid is a corrosive substance, harmful by ingestion and by contact or even by inhalation. \n It is usually used to replace citric acid (E330) because it is cheaper and easier to produce in large quantities.',
    e_type: 'Antioxidants - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 242,
    e_code: 'E339',
    title: 'Sodium Phosphates',
    info: 'It is a natural acidifier and regulator of food acidity. It is obtained by extraction of mineral rocks. \n Phosphates are the salts of phosphoric acid. The union of the latter with sodium allows to obtain sodium phosphate E339. \n Pure phosphoric acid is a corrosive substance, harmful by ingestion and by contact or even by inhalation. In large doses can cause hyperactivity and digestive problems',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 243,
    e_code: 'E340',
    title: 'Potassium Phosphates',
    info: 'It is a natural acidifier and regulator of food acidity. It is obtained by extraction of mineral rocks. Phosphates are the salts of phosphoric acid. \n The union of the latter with potassium allows to obtain potassium phosphates E340. \n Pure phosphoric acid is a corrosive substance, Harmful by ingestion and by contact or even by inhalation. In large doses can cause hyperactivity and digestive problems. ',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 244,
    e_code: 'E341',
    title: 'Calcium Phosphates',
    info: 'It is a natural acidifier and regulator of food acidity. It is obtained by extraction of mineral rocks. Phosphates are the salts of phosphoric acid. The union of the latter with calcium allows to obtain calcium phosphates E341. \n Pure phosphoric acid is a corrosive substance, Harmful by ingestion and by contact or even by inhalation. \n In large doses can cause hyperactivity and digestive problems.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 245,
    e_code: 'E342',
    title: 'Ammonium phosphate',
    info: 'It is a natural acidifier and regulator of food acidity. It is obtained by extraction of mineral rocks. Phosphates are the salts of phosphoric acid, from which a bond with ammonium allows obtaining ammonium phosphates E342. \n Pure phosphoric acid is a corrosive substance, Harmful by ingestion and by contact or even by inhalation.     In large doses can cause hyperactivity and digestive problems. \n They could promote the activity of known carcinogens.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 246,
    e_code: 'E343',
    title: 'Monomagnesium phosphate',
    info: 'It is a natural acidifier and regulator of food acidity. It is obtained by extraction of mineral rocks. Phosphates are the salts of phosphoric acid, from which a bond with magnesium makes it possible to obtain magnesium phosphates E343. \n Pure phosphoric acid is a corrosive substance, Harmful by ingestion and by contact or even by inhalation. In large doses can cause hyperactivity and digestive problems. \n They could promote the activity of known carcinogens.   \n Phosphate in Europe is also obtained from animal bones. ',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 247,
    e_code: 'E344',
    title: 'Lecitin citrate',
    info: 'It is a synthetic acidifier and regulator of food acidity. Additive composed of citric acid E330 and lecithin E322. \n Most lecithins are now extracted from a probably transgenic soybean. Citric acid can also use genetic engineering.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 248,
    e_code: 'E345',
    title: 'Magnesium citrate',
    info: 'It is a synthetic acidifier and regulator of food acidity. Citrates are the salts of citric acid: a bond with magnesium produces citrate of magnesium E345.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 249,
    e_code: 'E349',
    title: 'Ammonium malate',
    info: 'It is a synthetic acidifier and regulator of food acidity. It obtains derivative of the malic acid salt (E296). Malate is the salts of malic acid. \n Ammonium (NH4 +) is a derivative of ammonia (NH3), sometimes presented as an ionized ammonia molecule.\n Present naturally in our body as a waste of metabolism, it comes from the breakdown of proteins. \n It is essentially produced by the intestine, kidneys and muscles to be eliminated by the liver.  \n Ammonium is a derivative of ammonia. It is said to be less toxic, no side effects have been found. \n The body is able to eliminate it without any problem.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 250,
    e_code: 'E350',
    title: 'Sodium Malate',
    info: 'It is a synthetic acidifier and regulator of food acidity. It obtains derivative of the malic acid salt (E296). No side effects have been found.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 251,
    e_code: 'E351',
    title: 'Potassium Malate',
    info: 'It is a synthetic acidifier and regulator of food acidity. It obtains derivative of the malic acid salt (E296). \n Malate are the salts of malic acid. A chemical bond with potassium makes it possible to manufacture potassium maleate E351. \n No side effects have been found. ',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 252,
    e_code: 'E352',
    title: 'Calcium Malate',
    info: 'It is a synthetic acidifier and regulator of food acidity. It obtains derivative of the malic acid salt (E296). Malate is the salts of malic acid. \n A chemical bond with calcium makes it possible to manufacture calcium maleate E352. \n No side effects have been found.',
    e_type: 'Acidulant - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 253,
    e_code: 'E353',
    title: 'Metataric Acid',
    info: 'It is a natural acidifier, antioxidant and regulator of acidity. Metatartaric acid is obtained by dehydration of tartaric acid (E334) at 150 ° C / 170 ° C under atmospheric or reduced pressure. \n No side effects have been found.',
    e_type: 'Antioxidants - Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 254,
    e_code: 'E354',
    title: 'Calcium Tartrate',
    info: 'It is a synthetic acidifier, antioxidant and regulator of food acidity. \n Tartrates are salts of tartaric acid, a link with calcium allows to obtain calcium tartrates E354. \n No side effects have been found.',
    e_type: 'Antioxidants - Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 255,
    e_code: 'E355',
    title: 'Adipic Acid',
    info: 'It is a synthetic acidulant. Adipic acid exists naturally and can be found in small amounts, especially in beets. \n It is manufactured by chemical synthesis from nitric acid and cyclohexanol or cyclohexanone. Apart from the processed diet, it is known and widely used in the nylon industry. \n No side effects have been found.',
    e_type: 'Acidulant ',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 256,
    e_code: 'E356',
    title: 'Sodium adipate',
    info: 'It is a synthetic acidulant. The adipic acid is chemically bound with mineral salts to form the sodium adipates E356 and potassium E357, or with ammonium, an ammonia derivative, to form the ammonium adipate E359. \n No side effects have been found.   Sodium adipate is the sodium salt of adipic acid that is obtained by oxidation of fat.',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 257,
    e_code: 'E357',
    title: 'Potassium adipate',
    info: 'It is a synthetic food acidulant. It is obtained derivative of the adipic acid salt (E355). The adipic acid is chemically bound with mineral salts to form the potassium adipates E357. \n Adipic acid exists naturally and can be found in small amounts, especially in beets. \n No side effects have been found.   E57 is the potassium salt of adipic acid that is obtained by the oxidation of fat.',
    e_type: 'Acidulant',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 258,
    e_code: 'E358',
    title: 'calcium adipates',
    info: 'It is a synthetic food acidulant. It is obtained derivative of the adipic acid salt (E355). The adipic acid is chemically bound with mineral salts to form the calcium adipates E358. E58 is the calcium salt of adipic acid that is obtained by the oxidation of fat. \n Adipic acid exists naturally and can be found in small amounts, especially in beets. \n No side effects have been found.',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 259,
    e_code: 'E359',
    title: 'Aminium adipate',
    info: 'It is a synthetic food acidulant. It is obtained derivative of the adipic acid salt (E355). Adipic acid is chemically bound with mineral salts to form the aminium adipates E359. E359 is the aminium salt of adipic acid that is obtained by the oxidation of fat.  \n Adipic acid exists naturally and can be found in small amounts, especially in beets. \n No side effects have been found.',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 260,
    e_code: 'E360',
    title: 'Magnesium adipate',
    info: 'It is a synthetic food acidulant. It is obtained derivative of the adipic acid salt (E355). Adipic acid is chemically bound with mineral salts to form the adipates of magnesium E360. E360 is the magnesium salt of adipic acid that is obtained by the oxidation of fat. \n Adipic acid exists naturally and can be found in small amounts, especially in beets. \n No side effects have been found.  ',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 261,
    e_code: 'E363',
    title: 'Succinic Acid',
    info: 'It is a natural or synthetic acidifier. Succinic acid has been found for the first time in amber, also called succina. \n It is a natural constituent of most plant and animal tissues. \n Commercially, it can be produced in various ways, including by chemical synthesis from petroleum derivatives or by biosynthesis from sugars and lignocellulosic residues fermented by microorganisms. \n In general it is reported that they have no known side effects, with risk of upset stomach, vomiting and diarrhea in high doses.',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 262,
    e_code: 'E364',
    title: 'Sodium succinate',
    info: 'It is a synthetic acidulant. Succinic acid (E363) is chemically bound to a mineral salt, sodium, to form sodium succinate (E364). \n It is used in cosmetics, among others as a masking agent, to inhibit the smell or taste of the product, and in pharmaceutical products.  \n  In general it is reported that they have no known side effects, with risk of upset stomach, vomiting and diarrhea in high doses.',
    e_type: 'Acidulant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 263,
    e_code: 'E365',
    title: 'Sodium fumarate',
    info: 'It is a synthetic acidifier and regulator of acidity. The derivative of the fumaric acid salt (E297) is obtained. \n Fumarates are the salts of fumaric acid. A union of the molecule with sodium allows to manufacture E365 sodium fumarates. \n It is generally reported that they have no known side effects.',
    e_type: 'Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 264,
    e_code: 'E366',
    title: 'Potassium fumarate',
    info: 'It is a synthetic acidifier and regulator of acidity. The derivative of the fumaric acid salt (E297) is obtained. Fumarates are the salts of fumaric acid. \n A union of the molecule with potassium allows to manufacture potassium fumarates E366.  \n It is generally reported that they have no known side effects. ',
    e_type: ' Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 265,
    e_code: 'E367',
    title: 'Calcium fumarate',
    info: 'It is a synthetic acidifier and regulator of acidity. The derivative of the fumaric acid salt (E297) is obtained. Fumarates are the salts of fumaric acid. \n A union of the molecule with calcium or ammonium allows the manufacture of calcium fumarates E367.  \n It is generally reported that they have no known side effects.',
    e_type: 'Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 266,
    e_code: 'E368',
    title: 'Ammonium fumarate',
    info: 'It is a synthetic acidifier and regulator of acidity. The derivative of the fumaric acid salt (E297) is obtained. Fumarates are the salts of fumaric acid.  \n A union of the molecule with ammonium allows the manufacture of ammonium fumarates E368.   \n  It is generally reported that they have no known side effects.',
    e_type: 'Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 267,
    e_code: 'E369',
    title: ' Magnesium fumarate',
    info: 'It is a synthetic acidifier and regulator of acidity. The derivative of the fumaric acid salt (E297) is obtained. Fumarates are the salts of fumaric acid. \n A union of the molecule with magnesium allows the manufacture of E369 magnesium fumarates.  \n It is generally reported that they have no known side effects.',
    e_type: ' Acidulant - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 268,
    e_code: 'E370',
    title: 'Heptonolactone',
    info: 'It is a synthetic acidifier, flavoring and regulator of acidity.   Heptonolactone occurs mainly as a synthetic and is derived from hydroxyheptanoic acid.  \n In a 1990 report, the European Commission states that the committee could not assess the safety of the use of this anion in the absence of adequate data. \n He considered the use of heptanoic acid and its non-acceptable salts as additives.  \n It is generally reported that they have no known side effects.',
    e_type: 'Acidulant - Flavoring - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 269,
    e_code: 'E375',
    title: 'Nicotinic Acid',
    info: 'It is a synthetic acidulant. Niacin or vitamin B3 exist naturally naturally, especially in certain meats, fruits, dried fruits and vegetables. \n  In the body, the liver can synthesize it from tryptophan, an amino acid. \n Commercially, the additive is probably synthetic,   produced by the oxidation of nicotine with nitric acid. \n It is generally reported that they have no known side effects.',
    e_type: 'Acidulant',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 270,
    e_code: 'E380',
    title: 'Triammonium Citrate',
    info: 'It is a synthetic acidifier, emulsifier and flavoring agent. Citrates are the salts of citric acid E330: A chemical bond with ammonium allows to obtain triammonium citrates E380. \n According to a US scientific report (1957) from the National Institute of Health, triammonium citrate was the most toxic of the ammonium salts studied, from which an increase in the pH of the blood was observed. \n In high doses can lead to disorders of liver function (more frequently), kidney, pancreatic, digestive disorders. \n This substance causes severe irritation in the eyes, skin irritation and irritation of the respiratory tract.',
    e_type: ' Acidulant - Emulsifier - Flavoring',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 271,
    e_code: 'E381',
    title: 'Ammonium Ferric Citrate',
    info: 'It is a synthetic acidifier, emulsifier and flavoring agent. Citrates are the salts of citric acid E330: E381 can be prepared by adding a ferric compound to an aqueous solution of ammonia and citric acid. \n It is said to be less toxic, but its effects on health are not known.',
    e_type: ' Acidulant - Emulsifier - Flavoring',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 272,
    e_code: 'E383',
    title: 'Calcium glycerophosphate',
    info: 'It is a synthetic antioxidant. Calcium glycerophosphate is the calcium salt of glycerophosphoric acid (glycerol-3-phosphate) that forms phosphoglycerides.  \n In processed food, phosphoric acid and additives derived from it or phosphate additives are doubtful because tolerable doses are not studied. \n Special attention to the loss of bone calcium, osteoporosis, children (hyperactivity), kidneys, chronic renal failure.  They could promote the activity of known carcinogens.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 273,
    e_code: 'E384',
    title: 'Isopropyl citrates',
    info: 'It is a synthetic antioxidant. Isopropyl alcohol is used with citric acid to obtain isopropyl citrate. Few studies and toxicological data available. \n The oncological safety of pure isopropyl alcohol is not established and is classified as an unclassifiable agent due to its carcinogenicity for humans in IARC.',
    e_type: 'Preservative',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 274,
    e_code: 'E385',
    title: 'Calcium disodium ethylenediamine',
    info: 'It is a synthetic antioxidant.  \n Its ability to  coat  metals allows, however, to be used in medicine for the treatment of heavy metal poisoning. \n Causes mineral imbalance. It is a known enzyme and blood coagulant inhibitor. \n  Not recommended in children or pregnant women. \n In low doses it inhibits the absorption of minerals and iron. \n In large doses causes vomiting, diarrhea and stomach pains.    The E385 is made of raw materials known to be toxic or carcinogenic.',
    e_type: 'Anti-oxydant',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 275,
    e_code: 'E386',
    title: 'Disodium ethylenediamine tetra-acetate',
    info: 'It is a synthetic antioxidant. Its main chemical characteristic is its high chelating power, so it forms highly stable metal complexes. \n Its ability to  coat metals allows, however, to be used in medicine for the treatment of heavy metal poisoning. In short, it is capable of coating the metal molecules to prevent their activity. \n Not recommended in children or pregnant women. \n In low doses it inhibits the absorption of minerals and iron. \n  In large doses causes vomiting, diarrhea and stomach pains.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 276,
    e_code: 'E387',
    title: 'Oxystearin',
    info: 'It  is a synthetic stabilizer. The origin of this additive is a mixture of glycerides of stearic acid and other fatty acids. \n Its main function is to increase the viscosity of the food without substantially modifying other properties such as taste.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 277,
    e_code: 'E388',
    title: 'Thiodipropionic acid',
    info: 'It is a synthetic antioxidant. Thiodipropionic acid is a synthetic sulfur compound. \n Pure thiodipropionic acid is an irritant to the skin, eyes and respiratory tract.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 278,
    e_code: 'E389',
    title: 'Dilauryl thiodipropionate',
    info: 'It is a synthetic antioxidant. E389 is a chemical in the form of white flakes with a sweet smell, soluble in most organic solvents, and used as an antioxidant in edible fats and oils. \n Pure thiodipropionic acid is an irritant to the skin, eyes and respiratory tract.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 279,
    e_code: 'E390',
    title: 'Distearyl thiodipropionate',
    info: 'It is a synthetic antioxidant. Distearyl thiodipropionate (E390) is an artificial chemical made from thiodipropionic acid (E388) and a fatty alcohol, stearyl alcohol, stearic acid derivative or other fats. \n Pure thiodipropionic acid is an irritant to the skin, eyes and respiratory tract.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 280,
    e_code: 'E391',
    title: 'Phytic acid',
    info: 'It is a natural or synthetic antioxidant. Phytic acid is a biomolecule found naturally in the seeds of many grains and legumes, usually in the form of a calcium or magnesium salt. \n The substance is a source of phosphorus in plants, a signal transfer agent and an antioxidant in human cells.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 281,
    e_code: 'E392',
    title: 'Rosemary extract',
    info: 'It is a natural or synthetic antioxidant. Its function is to protect the food from deterioration caused by oxidation. \n Additive extracted from rosemary by chemical solvents, depending on the decline one or more stages of additional chemical treatments such as deodorization and / or discoloration. \n The additive can be produced according to the biological specifications. Ethanol is no longer required. The E392 in the recommended doses is not very toxic.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 282,
    e_code: 'E399',
    title: 'Calcium lactobionate',
    info: 'It  is a natural or synthetic antioxidant. Its function is to maintain the uniform dispersion of substances in a food. Calcium lactobionate is the chemical bond of a mineral salt, calcium, with lactobionic acid.   \n Lactobionic acid is composed of gluconic acid (E574) and galactose. It can be formed by oxidation of lactose.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 283,
    e_code: 'E400',
    title: 'Alginic Acid',
    info: 'It is a natural foaming, thickener and gelling agent. Obtained by extraction of brown marine algae of the family Phaeophyceae. They are washed, crushed and the paste that is obtained afterwards is treated chemically. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks. \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 284,
    e_code: 'E401',
    title: 'Sodium Alginate',
    info: 'It is a natural foaming, thickener and gelling agent. Obtained by extraction of brown marine algae of the family Phaeophyceae. \n They are washed, crushed and the paste that is obtained afterwards is treated chemically. Alginates are artificial products formed by chemical bonding of E400 alginic acid with mineral salts to give E401 sodium alginate. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks. \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 285,
    e_code: 'E402',
    title: 'Potassium Alginate',
    info: 'It is a natural foaming, thickening and gelling agent. Obtained by extraction of brown marine algae of the family Phaeophyceae. \n They are washed, crushed and the paste that is obtained afterwards is treated chemically.   Alginates are artificial products formed by chemical bonding of E400 alginic acid with mineral salts to give potassium alginate E402. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks. \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 286,
    e_code: 'E403',
    title: 'Ammonium Alginate',
    info: 'It is a natural foaming, thickener and gelling agent. Obtained by extraction of brown marine algae of the family Phaeophyceae. They are washed, crushed and the paste that is obtained afterwards is treated chemically. \n Alginates are artificial products formed by chemical bonding of E400 alginic acid with mineral salts to give E403 ammonium alginate. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks.  \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 287,
    e_code: 'E404',
    title: 'Calcium Alginate',
    info: 'It is a natural foaming, thickener and gelling agent. Obtained by extraction of brown marine algae of the family Phaeophyceae. \n They are washed, crushed and the paste that is obtained afterwards is treated chemically. \n Alginates are artificial products formed by chemical bonding of E400 alginic acid with mineral salts to give calcium alginate E404. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks. \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 288,
    e_code: 'E405',
    title: 'Propylene glycol alginate',
    info: 'It is a natural foaming, thickener and gelling agent.  Obtained by extraction of brown marine algae of the family Phaeophyceae. \n They are washed, crushed and the paste that is obtained afterwards is treated chemically. \n Alginates are artificial products formed by chemical bonding of the E400 alginic acid with mineral salts to give propylene glycol alginate E405. \n Alginic acid and alginates occupy many technological functions in the processed diet, such as gelling agents, coating agents, humectants and thickeners. \n Alginic acid and alginates are also found in some cosmetics, some pharmaceuticals, paints and printing inks. \n There are no known side effects to date. In large doses the absorption of important nutrients in the intestine, possibility of water retention, laxative effect. ',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 289,
    e_code: 'E406',
    title: 'Agar',
    info: 'It is a natural foaming, thickener and gelling agent. Obtained by extraction of brown or red seaweeds, of the family Gelidiaceae, Sphaerococcaceae and Rhodophyceae. \n Agar contains combinations of very long and complex sugars (polysaccharides) that the intestine can not assimilate and leave to ferment: avoid high doses, the risk of flatulence, the laxative effect of swelling and diarrhea. \n The agar-agar (E406) has many technological functions in processed foods, is included in the Codex Alimentarius as coating agent, gelling agent, humectant, stabilizer, thickener, filler, carrier, emulsifier and gelling agent.',
    e_type: 'Foaming agent - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 290,
    e_code: 'E407',
    title: 'Carrageenan',
    info: 'It is a natural foaming, gelling agent. It is obtained by extraction of red marine algae from the Rodoficeas family. \n They are washed, crushed and the paste that is obtained is then treated chemically.    \n These are toxic risks and cancers, particularly gastrointestinal       Not recommended in children and pregnant women. \n Currently, several companies in the market have decided to withdraw this additive due to the pressure of consumers, who complained more about its use in children\'s products and food aimed at children. ',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 291,
    e_code: 'E407A',
    title: 'Processed euchema seaweed',
    info: 'It is a natural foaming, gelling agent. It is obtained by extraction of red marine algae from the Rodoficeas family. \n They are washed, crushed and the paste that is obtained is then treated chemically.   These are toxic risks and cancers, particularly gastrointestinal.   \n Not recommended in children and pregnant women. Currently, several companies in the market have decided to withdraw this additive due to the pressure of consumers, who complained more about its use in children\'s products and food aimed at children.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 292,
    e_code: 'E407a',
    title: 'Processed eucheuma seaweed (thickener) (stabiliser) (gelling agent)',
    info: 'emulsifier',
    e_type: 'emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 293,
    e_code: 'E408',
    title: 'Bakers yeast glycan',
    info: 'It is a natural stabilizer, thickener and gelling agent. The glycans are polysaccharides / oligosaccharides. A natural polysaccharide, produced from marine algae (Furcellaria fastigata) in Denmark. \n In the case of this additive, they are extracted from baker\'s yeast. In its natural state, baking yeast glycan has a beneficial effect on the immune system. \n There is not much information about the E408, for now its side effect in people is unknown.',
    e_type: 'Stabiliser - Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 294,
    e_code: 'E409',
    title: 'Arabinogalactan',
    info: 'It is a natural stabilizer, thickener and gelling agent. Arabinogalactan is a molecule called polysaccharide present in varying amounts in many plants, fungi and bacteria. \n The additive is probably extracted with larch wood water. In the field of plants, it is one of the main constituents of several gums, such as gum arabic, rubber gum, etc.). \n  In the human diet, many plants provide small amounts of arabinogalactans, including carrots, radishes, tomatoes, pears and wheat.',
    e_type: 'Stabiliser - Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 295,
    e_code: 'E410',
    title: 'Locust Bean Gum',
    info: 'It is a natural stabilizer, thickener and gelling agent. It is obtained by extracting and pressing the seeds of the carob tree (Ceratonia siliqua), which is found mainly in the Mediterranean basin. \n There are reports that show that it is harmless in moderate doses. Sometimes cases of allergy are reported. \n In high doses: possible laxative effect, flatulence, abdominal distension. The carob bean flour is indigestible and swells a lot in the intestine.',
    e_type: 'Stabiliser - Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 296,
    e_code: 'E411',
    title: 'Oat gum',
    info: 'It is a natural stabilizer and thickener. Oatmeal is an extract of a polysaccharide plant produced from oats. \n There would be no known side effects in the concentrations used. It would not be suitable for those intolerant to gluten.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 297,
    e_code: 'E412',
    title: 'Guar Gum',
    info: 'It is a natural stabilizer and thickener. Guar gum (E412) is a polysaccharide of natural origin extracted from the seed of the legume Cyamopsis tetragonoloba, a plant also known as guar or guar bean and native to parts of West Africa, Pakistan and India. \n The positive effects studied at high doses (between one and several tens of grams per day) have shown interest in diabetics and cholesterolemia. The additive is generally considered harmless.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 298,
    e_code: 'E413',
    title: 'Tragacanth gum',
    info: 'It is a natural thickener and gelling agent. The exudate flows naturally or by incision in the trunk and branches of different fabaceae, including the astragalus gummifer. \n Complex mixture of several polysaccharides. The medicine gives various medicinal properties, among others, as a laxative, antitussive, against digestive disorders or as a dressing for burns. \n No side effects have been found. At large doses can cause flatulence, diarrhea, allergy or abdominal cramps.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 299,
    e_code: 'E414',
    title: 'Gum Acacia (Gum Arabic)',
    info: 'It  is a natural thickener and emulsifier. It is obtained by scarring in the stems of the Acacias family trees, specifically of 2 species: Senegalia and Vachellia, which grow in the regions of Senegal and Sudan. \n It is used to be an emulsifier of essential oils such as lemon or orange in food. It is also used in cosmetics and perfumes. \n No side effects have been found. But in large doses can cause allergies, inhibit the absorption of minerals and damage the activity of various enzymes.',
    e_type: 'Thickener - Emulsifier',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 300,
    e_code: 'E415',
    title: 'Xanthan Gum',
    info: 'It is a natural thickener and gelling agent. Of natural origin, non-digestible polysaccharide, secretion produced by the fermentation of sugar by a microorganism, then purification by recovery with isopropyl alcohol. \n No side effects have been found. But it is not recommended in newborn babies and pregnant women. In large doses it has a high laxative effect. ',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 301,
    e_code: 'E416',
    title: 'Karaya Gum',
    info: 'It is a natural thickener and gelling agent.     It is extracted from the dried and processed resin, polysaccharide harvested in the woody tissue of the Sterculia urens plant (Sterculiaceae family) native to India, as well as other related species. Unlike other similar gums, it is soluble in cold water.     \n No side effects have been found. In large doses can cause abdominal distension, diarrhea or digestive disorders',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 302,
    e_code: 'E417',
    title: 'Tara gum',
    info: 'It is a natural thickener and gelling agent. Tara gum, also called Peruvian carob, is extracted from the seed of Caesalpinia spinosa, a shrub native to South America. \n It is estimated that tara gum has no side effects with the normal dietary dose. \n No side effects have been found. In high doses, risk of flatulence and abdominal distension (intestinal fermentation of this non-digestible polysaccharide). \n It would be difficult to reach high doses due to the viscosity of the substance.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 303,
    e_code: 'E418',
    title: 'Gellan gum',
    info: 'It is a synthetic thickener and gelling agent. Gellan gum is a polysaccharide produced by the fermentation of   Arbohydrates by bacteriological strains of Pseudomonas elodea. The extraction is carried out by precipitation in isopropyl alcohol. \n No side effects have been found.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 304,
    e_code: 'E419',
    title: 'Gum ghatti',
    info: 'It is a natural thickener and stabilizer. E419 is a water-soluble polysaccharide extracted from Anogeissus latifolia, a medium-sized tree native to parts of India, Sri Lanka, Nepal and Burma.  \n No side effects have been found. Little information available, a priori not very dangerous, except perhaps in high doses as the totality of the gums of the transformed diet (digestive disorder, diarrhea, gases) and the possibility of allergic reaction. ',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 305,
    e_code: 'E420',
    title: 'Sorbitols',
    info: 'It is a natural sweetener, moisturizer, emulsifier and sequestrant. Sorbitol exists naturally in fruits (prunes, plums, peaches, etc.) and takes its name from the sorbidor whose berries contain a lot. \n Commercially, the additive is synthesized from starch (in whole or in part corn) from which several enzymes produce glucose. This glucose is then converted chemically into sorbitol. In low doses it causes flatulence, diarrhea and may aggravate irritable bowel syndrome.     \n Its use in foods for children under 1 year is not allowed because it can cause severe diarrhea.',
    e_type: 'Sweetener - Humectant - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 306,
    e_code: 'E421',
    title: 'Mannitol',
    info: 'It is a natural sweetener. Mannitol exists in its natural state (plants, algae, fungi). To date, there are three main manufacturing methods: industrial synthesis, fermentation with microorganisms and direct extraction of natural products. \n The additive would be commonly produced by industrial technology, which consists of the hydrogenation of a fructose produced from starches by the action of microorganisms (yeast). \n In large doses causes flatulence and diarrhea. It is contraindicated in people suffering from heart failure.',
    e_type: 'Sweetener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 307,
    e_code: 'E422',
    title: 'Glycerol',
    info: 'It is a synthetic and moisturizing sweetener. It is achieved by synthesis of glycerides, these can be of animal origin (extracted from the skin of cattle and pigs) or of vegetable origin (extracted from coconut oil and other vegetable oils). E420 is not very dangerous in foods, however, it could, according to some sources, be transgenic. \n High doses: laxative, diarrhea, flatulence, diuretic effect, thirst sensation, hyperglycemia, nausea, headache, hypertension. It is sold as a laxative form of its host to glycerol. \n It would not be recommended for pregnant or lactating women.',
    e_type: 'Sweetener - Humectant  ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 308,
    e_code: 'E423',
    title: 'Octenyl succinic acid (OSA) modified gum arabic',
    info: 'It is a synthetic emulsifier. To manufacture this additive, the gum arabic modified with octenylsuccinic acid is used. Its function is that of an agent that forms or preserves a mixture of substances that normally can not be mixed, for example: oil and water.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 309,
    e_code: 'E424',
    title: 'Curdlan',
    info: 'It is a stabilizer, thickener and gelling agent. A polysaccharide produced by alkaline bacteria such as Alcaligenes faecalis. Alcaligenes faecalis is an aerobic organism that is often found in the environment. \n It was named for its discovery in the feces, but later it also proved to be much more common elsewhere. \n Alcaligenes faecalis is normally found in soil, water and environments related to people. \n No side effects have been found.\n',
    e_type: 'Stabiliser - Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 310,
    e_code: 'E425',
    title: 'Konjac flour',
    info: 'It is a natural thickener and gelling agent. The polysaccharide is extracted from the tubers of Amorphophallus konjac, a plant of the family Araceae that grows naturally in the forests of Thailand, Vietnam and southern China. \n No side effects have been found. It is not very dangerous, with the notable exceptions of asphyxia by ingestion in the form of gelatin confectionery.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 311,
    e_code: 'E426',
    title: 'Soybean hemicellulose',
    info: 'It is a natural thickener and stabilizer. It is obtained by the extraction of soy fiber. \n No side effects have been found, but it is possible that it is transgenic and allergenic.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 312,
    e_code: 'E427',
    title: 'Cassia gum',
    info: 'It is a natural thickener and gelling agent. Cassia gum is a dietary fiber of polysaccharides, obtained from the seeds of plants of the genus Cassia and Senna. \n Normally, it is known safely in the animal model, but allergic reactions have occurred in humans with other products derived from cassia.',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 313,
    e_code: 'E428',
    title: 'Gelatin',
    info: 'It is a natural thickener. Denatured collagen, a complex mixture of proteins obtained by the prolonged boiling of tendons, ligaments, bones or hides of pig or calf. \n Unlike the United States and Canada, EU gelatin It is no longer considered an additive but an ingredient. Previously, gelatin occupied the number E441 in Europe. \n Today, outside of Europe, it occupies number 428 on the international list official food additives.  It can cause various allergies, asthma, etc. ',
    e_type: 'Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 314,
    e_code: 'E429',
    title: 'Peptones',
    info: 'It is a synthetic emulsifier. A peptone is a substance that results from the transformation of proteins, usually the product of a hydrolysis reaction. \n This hydrolysis can be chemical or enzymatic, the raw materials can be animal, lactic or vegetable (soy, cotton, corn, beans, wheat, ...). \n No side effects are known, at the moment.   For now there is not much information for this additive.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 315,
    e_code: 'E430',
    title: 'Polyoxyethane (8) Stearate',
    info: 'It is a synthetic stabilizer and emulsifier. Synthetic compound produced from ethylene oxide and a fatty acid: stearic acid. \n Polyoxyethylenes contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and remains at the discretion of the producer. \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals. \n Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 316,
    e_code: 'E431',
    title: 'Polyoxyethane (40) Stearate',
    info: 'It is a synthetic stabilizer and emulsifier. Synthetic compound produced from ethylene oxide and a fatty acid: stearic acid. \n Polyoxyethylenes contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and remains at the discretion of the producer. \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals.  \n Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 317,
    e_code: 'E432',
    title: 'Polyoxyethylene (20) sorbitan monolaurate',
    info: 'It is a synthetic stabilizer and emulsifier. It is obtained derived from the mixture of Ethylene Oxide, Sorbitol (E420) and Lauric Acid. Polysorbates contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and remains at the discretion of the producer. \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals. \n Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 318,
    e_code: 'E433',
    title: 'Polyoxyethylene (20) sorbitan monooleate',
    info: 'It is a synthetic stabilizer and emulsifier. It is obtained derived from the mixture of Ethylene Oxide, Sorbitol (E420) and Oleic Acid. Polysorbates contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and remains at the discretion of the producer. \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals. \n Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment. ',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 319,
    e_code: 'E434',
    title: 'Polyoxyethylene (20) sorbitan monopalmitate',
    info: 'It is a synthetic stabilizer and emulsifier.    It is obtained derived from the mixture of Ethylene Oxide, Sorbitol (E420) and Oleic Acid.    \n Polysorbates contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and is up to the producer.     \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals.    Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 320,
    e_code: 'E435',
    title: 'Polyoxyethylene (20) sorbitan monostearate',
    info: 'Polyoxyethylene- (20) -sorbitan monostearate and its relatives, POLYSORBATE 65 and 80, work the same way as mono-and diglycerides, but smaller amounts are required to achieve the same result. \n They help prevent baked goods from going stale, keep dill oil dissolved in bottled dill pickles, help coffee whiteners dissolve in coffee, and prevent oil from separating out of artificial whipped cream. \n An emulsifier and thickener found in bakery products, frozen desserts, imitation dairy products, emulsified sauces and soups. \n Other uses include products such as creams, lotions, pomades, sunscreens, shampoos, conditioners, skin protection creams, salves, pharmaceutical ointments, and other emulsions.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 321,
    e_code: 'E436',
    title: 'Polyoxyethylene sorbitan tristearate',
    info: 'It is a synthetic stabilizer and emulsifier.    It is obtained derived from the mixture of Ethylene Oxide, Sorbitol (E420) and Oleic Acid.    \n Polysorbates contain fatty acids almost always derived from vegetable oils, but the use of animal fats, including pork, is not totally excluded and is up to the producer.     \n Probably the carcinogenic effects, as well as the reproductive effects observed in laboratory animals.    Possibility of allergy to the skin in some people, digestive disorders, effects on the gastrointestinal tract (hypermotility, diarrhea, inflammation), metabolism, liver assignment.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 322,
    e_code: 'E440',
    title: 'Pectins (i) pectin (ii) amidated pectin',
    info: 'emulsifier',
    e_type: 'emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 323,
    e_code: 'E440A',
    title: 'Pectins',
    info: 'It is a natural thickener and gelling agent. Pectin is a polysaccharide that makes up the cells of plant tissues.  \n  Commercial pectin, which is often used to thicken jams and jellies, is extracted from dried apple marc, dried bark (both fruit juice and cider residues) or citrus mesocarps. \n By hot addition of diluted acid.  \n No side effects have been found. ',
    e_type: 'Thickener - Gelling agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 324,
    e_code: 'E440B',
    title: 'Amidated Pectin',
    info: 'It is a natural thickener and gelling agent.    Pectin is a polysaccharide that makes up the cells of plant tissues. Commercial pectin, which is often used to thicken jams and jellies, is extracted from dried apple marc, dried bark (both fruit juice and cider residues) or citrus mesocarps. By hot addition of diluted acid.    \n The treatment of the initial pectin with a dilute acid gives weakly esterified pectins. When this process comprises ammonium hydroxide (ammonia), the amidated pectins (E440 B) are obtained. \n No side effects have been found.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 325,
    e_code: 'E441',
    title: 'Superglycerinated hydrogenated rapeseed oil',
    info: 'It  is a synthetic emulsifier.  Hydrogenated oil is an oil treated with hydrogen injection at high pressure, the term  superglycerin indicates that an excess of glycerol has been added later. \n It is known that partially hydrogenated and, to a lesser extent, fully hydrogenated oils are harmful, including weight problems, cholesterol, cardiovascular diseases, cancers, autoimmune diseases and allergies.',
    e_type: 'Emulsifiers',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 326,
    e_code: 'E442',
    title: 'Ammonium salts of phosphatidic acid',
    info: 'It is a synthetic emulsifier.   Ammonium salts of phosphatidic acid, a mixture of ammonium salts of phosphorylated glycerides. \n The phosphatidic acid is it is usually derived from partially cured (partially hydrogenated) rapeseed oil.  \n In low doses European Food Safety Authority (EFSA), does not report any health problems. \n In large doses can cause digestive problems and inhibit the assimilation of minerals.',
    e_type: 'Emulsifier',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 327,
    e_code: 'E443',
    title: 'Brominated vegetable oils',
    info: 'It is an emulsifier and stabilizer.   The brominated vegetable oil is bonded to the atoms of the bromine element. Bromine is a substance for smoking with an acrid odor classified in toxic gases and vapors, it is very toxic by inhalation, ingestion and contact.   Brominated vegetable oil is little studied. \n It is known that brominated compounds are toxic (or even carcinogenic), neurotoxic and genotoxic.',
    e_type: 'Stabiliser  - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 328,
    e_code: 'E444',
    title: 'Sucrose acetate isobutyrate',
    info: 'It is a synthetic stabilizer and emulsifier. It is a chemical mixture of sucrose esters with acetic and isobutyric acids. It comes in the form of a clear liquid, straw-colored, transparent, without deposits and with a mild odor. \n This substance causes the suspended elements not to settle on the bottom of the bottle   and remain scattered throughout the drink. \n In large doses can cause alterations in the liver and bile in laboratory animals,  it remains to be proven if it is the same effect in humans.',
    e_type: 'Stabiliser - Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 329,
    e_code: 'E445',
    title: 'Glycerol esters of rosin',
    info: 'It is a synthetic stabilizer. It is obtained by reaction of the resin extracted from old pines and firs with Glycerol (E422), which gives it a sweet taste.    It is divided into 3 classes: Resin Glyceride Esters, Glyceride Esters of Pine Oil Rosin and Glyceride Esters of Wood Rosin.      \n No side effects have been found.   \n High intakes can alter calcium / phosphate balance, headache, nausea, vomiting,  dehydration, diarrhea, thirst, dizziness and confusion. ',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 330,
    e_code: 'E446',
    title: 'Succistearin',
    info: 'It is an emulsifier.  There is not much information for this additive.   No side effects have been found.    It is an ester of succinic acid (E363) and a saturated fatty acid, stearic acid (E570).',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 331,
    e_code: 'E450',
    title: 'Diphosphates',
    info: 'It is a synthetic stabilizer and acidity regulator.  You get derivatives of phosphoric acid (E338).  \n This additive is divided into 9 classes: Disodium Diphosphate, Trisodium Diphosphate, Tetrasodium Diphosphate,Dipotassium Diphosphate, Tetrapotassium Diphosphate, Dicalcium Diphosphate, Calcium Acid Diphosphate, Dimagnic Diphosphate and Dihydrogen Magnesium Diphosphate.   \n  Special attention to the loss of bone calcium, osteoporosis, children (hyperactivity and other behavioral disorders), kidneys, chronic renal failure. \n They could promote the activity of known carcinogens.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 332,
    e_code: 'E451',
    title: 'Triphosphates',
    info: 'It is a synthetic stabilizers and acidity regulator.     You get derivatives of phosphoric acid (E338).   \n This additive is divided into 3 classes: Pentasodium Triphosphate, Pentapotassium Triphosphate and Sodium-Potassium Triphosphate.    \n Special attention to the loss of bone calcium, osteoporosis, children (hyperactivity and others)   behavioral disorders), kidneys, chronic renal failure. \n They could promote the activity of known carcinogens.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 333,
    e_code: 'E452',
    title: 'Polyphosphates',
    info: 'It is a synthetic stabilizer and acidity regulator.     You get derivatives of phosphoric acid (E338).   \n This additive is divided into 3 classes: Sodium Polyphosphate, Potassium Polyphosphate, Sodium-Calcium Polyphosphate, Calcium Polyphosphate and Ammonium Polyphosphate.  \n  Special attention to the loss of bone calcium, osteoporosis, children (hyperactivity and others)   behavioral disorders), kidneys, chronic renal failure.     \n They could promote the activity of known carcinogens.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 334,
    e_code: 'E456',
    title: 'Potassium Polyaspartate',
    info: 'It is a stabilizer.    Potassium polyaspartate is the potassium salt of a polymer of aspartic acid, one of the 20 amino acids that make up proteins.     \n Improves the quality of maintenance and stability of wine and its use does not have an impact on sensory properties.   \n  It is a recent additive.   Few data available. Officially the additive is reported harmless.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 335,
    e_code: 'E457',
    title: 'Cyclodextrin',
    info: 'It is a stabilizer and thickener.    Alpha Cyclodextrin is a saccharide in the form of a circular cage of natural origin that It allows to encapsulate several molecules, in particular the aromas.   \n The product is obtained by the action of an enzyme produced by a bacterium in the starch   partially hydrolyzed.    \n They are used in the food, pharmaceutical and chemical industries, as well as in agricultural engineering and environmental.    Alpha Cyclodextrin is synthesized through an enzyme whose gene encoder comes from a bacillus fecal flora.This can be toxic to health.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 336,
    e_code: 'E458',
    title: 'Gamma-cyclodextrin',
    info: 'It is a stabilizer and thickener.   The gamma-cyclodextrin is a saccharide in the form of a circular cage of natural origin that allows to encapsulate various molecules, in particular the aromas. \n The product is obtained by the action of an enzyme produced by a bacterium in the partially hydrolyzed starch.    \n The agri-food industry has commonly (and for more than 20 years in Japan) used cyclodextrins as a flavor enhancer by allowing easy addition of flavor compounds or by fixing molecules that are too volatile and prolonging, for example, the flavor duration of the gums of chew.     \n Few data available. Officially the additive is reported harmless.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 337,
    e_code: 'E459',
    title: 'beta-Cyclodextrin',
    info: 'It is a stabilizer and thickener.    A cycle-dextrin is a cage molecule used to encapsulate several molecules of food additives, flavors and vitamins, among others.    \n  The agri-food industry has commonly (and for more than 20 years in Japan) used cyclodextrins as a flavor enhancer by allowing easy addition of flavor compounds or by fixing molecules that are too volatile and prolonging. \n Beta-cyclodextrin appears more frequently as safe .',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 338,
    e_code: 'E460',
    title: 'Celluloses',
    info: 'It is a synthetic stabilizer and thickener.    Natural cellulose is a non-digestible carbohydrate for humans that consists of in a long chain of molecules of D-Glucose, which is the main constituent of plants and, in particular, the walls of your cells. \n    Cotton is an important source (90%), as well as wood. \n  Reported inoffensive but not unanimously: conflicting reports and cancer risks. ',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 339,
    e_code: 'E461',
    title: 'Methyl cellulose',
    info: 'It is a synthetic stabilizer and thickener. It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton.   \n Found in sterilised, pasteurised and UHT cream, low-calorie cream and pasteurised low-fat cream, laxatives, sun creams and amongst other things, wallpaper paste.  \n May cause asthma, intestinal blockage, itching, skin rash and swallowing difficulty.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 340,
    e_code: 'E462',
    title: 'Ethyl cellulose',
    info: 'It is a synthetic stabilizer and thickener.    It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton. \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people. ',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 341,
    e_code: 'E463',
    title: 'Hydroxypropyl cellulose',
    info: 'It is a synthetic stabilizer and thickener.    It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton.  \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 342,
    e_code: 'E464',
    title: 'Hydroxypropyl methyl cellulose',
    info: 'It is a synthetic stabilizer and thickener.    It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton.  \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 343,
    e_code: 'E465',
    title: 'Methyl ethyl cellulose',
    info: 'It is a synthetic stabilizer and thickener. It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton. \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 344,
    e_code: 'E466',
    title: 'Sodium carboxymethyl cellulose ',
    info: 'It is a synthetic stabilizer and thickener.  It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton. \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 345,
    e_code: 'E467',
    title: 'Ethyl hydroxyethyl cellulose',
    info: 'It is a synthetic stabilizer and thickener.    It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton.  \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 346,
    e_code: 'E468',
    title: 'Cross-linked sodium carboxymethyl cellulose',
    info: 'It is a synthetic stabilizer and thickener.    It is obtained by the treatment with mineral acids of alpha-cellulose extracted from vegetable fibers, these fibers come from a high percentage of cotton. \n There are conflicting reports. Cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers, however, the long-term effect on habitual consumption of artificially added fiber in food has not yet been studied in people.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 347,
    e_code: 'E469',
    title: 'Sodium carboxymethyl cellulose',
    info: 'Sodium carboxymethylcellulose (E466), which is hydrolyzed by the fungus Trichoderma reesei cellulase (obtained by the treatment with mineral acids of alpha-cellulose). \n Chemical derivative of a cellulose whose origin can be transgenic. The E469 would be widely used in the European Union in the so-called  light foods. \n It is also used in preparations of vitamins and minerals (nutrients), enzymes, and also as an additive. \n There are reports that cellulose is not digestible for humans but can be fermented in the large intestine and colon in the form of fibers.',
    e_type: 'Stabiliser - Thickener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 348,
    e_code: 'E470',
    title: 'Salts of fatty acids',
    info: 'It is a synthetic emulsifier, stabilizer and antiglare.    \n A set of fatty acids chemically bound with aluminum, ammonium, calcium, potassium and / or sodium. \n  Fatty acids are originally found in animal and plant cells.    E470 is certainly doubtful if it is not toxic due to its possible aluminum (E173) and / or ammonium content.',
    e_type: ' Stabiliser  - Emulsifier - Anticaking',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 349,
    e_code: 'E470A',
    title: 'Salts of myristic, palmitic and stearic acids with ammonia, calcium, potassium and sodium',
    info: 'It is a synthetic emulsifier, stabilizer and anticaking. Fatty acids are originally found in animal and plant cells. \n The additive is formed by a mixture of stearic, oleic, palmitic and myristic acids and then chemically linked with sodium, potassium and / or calcium.  \n The raw materials used are mainly edible fats (soy, corn, rapeseed), probably transgenic; However, a source of animal fat is also possible, including pork. \n Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected. ',
    e_type: 'Stabiliser  - Emulsifier - Anticaking',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 350,
    e_code: 'E470B',
    title: 'Magnesium stearate',
    info: 'It is a synthetic emulsifier, stabilizer and anticaking. Fatty acids are originally found in animal and plant cells.    The additive is formed by a mixture of stearic, oleic, palmitic and myristic acids and then chemically linked with sodium, potassium and / or calcium. \n   The raw materials used are mainly edible fats (soy, corn, rapeseed), probably transgenic; However, a source of animal fat is also possible, including pork. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Emulsifier - Anticaking',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 353,
    e_code: 'E471',
    title: 'Mono- and di- glycerides of fatty acids',
    info: 'It is a natural emulsifier and antioxidant.   Mono and diglycerides are products of the degradation of fats.   It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n  The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork.  \n  To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.   \n  Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: ' Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 354,
    e_code: 'E472',
    title: 'Esters of mono- and diglycerides',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 355,
    e_code: 'E472A',
    title: 'Acetic and fatty acid esters of glycerol',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 356,
    e_code: 'E472B',
    title: 'Lactic and fatty acid esters of glycerol',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 357,
    e_code: 'E472C',
    title: 'Citric and fatty acid esters of glycerol',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 358,
    e_code: 'E472D',
    title: 'Tartaric acid esters of mono- and di-glycerides of fatty acids',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 359,
    e_code: 'E472E',
    title: 'Diacetyltartaric and fatty acid esters of glycerol',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 360,
    e_code: 'E472F',
    title: 'Mixed esters (tartaric, acetic) of mono- and diglycerides ',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 361,
    e_code: 'E472G',
    title: 'Succinylated monoglycerides',
    info: 'It is a natural emulsifier and antioxidant.   Esters of synthetic fats, produced from glycerol, fatty acids.    \n It is used to lengthen the time of a product and to be in a wet state (avoid drying). \n   The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n   Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 369,
    e_code: 'E473',
    title: 'Sucrose esters of fatty acids',
    info: 'It is a natural emulsifier and antioxidant.   A sucrose ester is the ester of a fatty acid and a sugar, usually sucrose.   \n It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.    \n Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 370,
    e_code: 'E473A',
    title: 'Sucrose oligoesters',
    info: 'It is a natural emulsifier and antioxidant.   A sucrose ester is the ester of a fatty acid and a sugar, usually sucrose.   \n It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.    \n Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 371,
    e_code: 'E474',
    title: 'Sucroglycerides',
    info: 'It is a natural emulsifier and antioxidant.   A sucrose ester is the ester of a fatty acid and a sugar, usually sucrose.   \n It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork.  \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.    \n Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 372,
    e_code: 'E475',
    title: 'Polyglycerol esters of fatty acids',
    info: 'It is a natural emulsifier and antioxidant.   \n The polyglycerol esters of the fatty acids are synthesized by a reaction of glycerol (E422) polymerized with fats, oils or fatty acids from the diet. \n  It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork. \n To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.  \n Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 373,
    e_code: 'E476',
    title: 'Polyglycerol esters of interesterified ricinoleic acid',
    info: 'It  is a natural emulsifier and antioxidant.   Polyglycerol polyricinoleate is synthesized from molten fatty acids of castor oil and polyglycerol.    It is used in substitution of cocoa butter and reduce fat.   \n The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. However, a source of animal fat, including pork. \n  To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.  \n  Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 374,
    e_code: 'E477',
    title: 'Propylene glycol esters of fatty acids',
    info: 'It is a natural emulsifier and antioxidant.   It is obtained by synthesis of propylene glycol (E1520) and fatty acids. The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. \n This oil can also be hydrogenated. However, a source of animal fat, including pork.  \n  It is used to lengthen the time of a product and to be in a wet state (avoid drying).  \n  To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used.    Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 375,
    e_code: 'E478',
    title: 'Lactylated fatty acid esters of glycerol and propylene glycol',
    info: 'It is a natural emulsifier and antioxidant.   Combination of lactic acid (E270), glycerol (E422), propanediol (E1520) and natural fats / fatty acids (E570). \n The origin of the fat is essentially vegetable, but it does not exclude an animal origin, including the pig. It is used to form or preserve a mixture of substances that normally can not be mixed, for example oil and water.  \n  Currently serious harmful effects are admitted, such as breast cancer, hypercholesterolemia, atherosclerosis, diabetes (insulin resistance), cardiovascular risks, hepatic dysfunction, reproductive toxicity with obstetric effects, as psychiatric consequences proven or suspected.',
    e_type: 'Stabiliser  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 376,
    e_code: 'E479',
    title: 'Thermally oxidized soya bean oil interacted with monoand diglycerides of fatty acids',
    info: 'It is a natural emulsifier.  The most used raw material is vegetable: soybean oil, which is usually extracted from a total or partially transgenic plant. This oil can also be hydrogenated. \n However, a source of animal fat, including pork. To extract vegetable fatty acids, toxic hydrocarbon derivatives such as hexane or tetrachlorethylene are often used. \n The origin of the oils, both soy glycerides and fatty acids, is likely to be transgenic.  \n The additive officially contains a very small amount of oxirane, a toxic and carcinogenic agent. It is used in oils to make frying and industrial oils.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 377,
    e_code: 'E479b',
    title: 'Thermally oxidized soya bean oil interacted with mono- and diglycerides of fatty acids',
    info: 'emulsifier',
    e_type: 'emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 378,
    e_code: 'E480',
    title: 'Dioctyl sodium sulfosuccinate',
    info: 'It is a natural emulsifier and an antioxidant.   Produced by reaction between a suitable alcohol and anhydrous maleic acid, followed by a reaction with sodium bisulfite. \n Little information available as a food additive.   Several sources report a possible laxative effect.',
    e_type: ' Emulsifier  - Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 379,
    e_code: 'E481',
    title: 'Sodium lactylates',
    info: 'It is a synthetic emulsifier and a stabilizer. It is composed of stearic acid (a saturated fatty acid), lactic acid (E270) and is neutralized with the sodium base. \n It is often reported that they are harmless or harmless within the limits of the allowable daily intake. It is an additive whose safety is little known, risk of digestive disorders. ',
    e_type: ' Emulsifier - Stabiliser ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 380,
    e_code: 'E482',
    title: 'Calcium lactylates',
    info: 'It is a synthetic emulsifier and a stabilizer. It is composed of stearic acid (a saturated fatty acid), lactic acid (E270) and is neutralized with the sodium base. It is divided into 2 classes: Stearoyl calcium lactylate and calcium oleic lactylate. \n It is often reported that they are harmless or harmless within the limits of the allowable daily intake. \n It is an additive whose safety is little known, risk of digestive disorders.',
    e_type: 'Emulsifier - Stabiliser ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 381,
    e_code: 'E483',
    title: 'Stearyl tartrate',
    info: 'It is a synthetic emulsifier and a stabilizer.   A combination of stearic acid and tartaric acid (E334), which results in a mixture of several compounds.  \n Tartaric acid exists, among other things, in abundance in grapes. It is the origin of the tartar deposited in the wine bottles.   Stearic acid is a fatty acid that is abundant in all animal or vegetable fats to a lesser extent. \n Its commercial version is often a mixture of stearic and palmitic acid. \n It is often reported that they are harmless or harmless within the limits of the allowable daily intake. It is an additive whose safety is little known, risk of digestive disorders.',
    e_type: 'Emulsifier - Stabiliser  ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 382,
    e_code: 'E484',
    title: 'Stearyl citrate',
    info: 'A combination of stearic acid and citric acid, which results in a mixture of several compounds.   Stearic acid is a fatty acid that is abundant in all animal or vegetable fats to a lesser extent. \n Its commercial version is often a mixture of stearic and palmitic acid. \n In general it is reported harmless.   It is a chemical whose safety is little known, with risk of digestive alterations.',
    e_type: 'Emulsifier - Sequestrant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 383,
    e_code: 'E485',
    title: 'Sodium stearoyl fumarate',
    info: 'It is a synthetic ester of fumaric acid (E297) and stearic acid (E570). A second chemical reaction makes it possible to produce a sodium salt. \n The origin is fat (animal or vegetable).   It is used to form or preserve a mixture of substances that normally can not be mixed, for example: oil and water.  \n It does not appear to be subject to special precautions, although the pure substance is dangerous by ingestion.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 384,
    e_code: 'E486',
    title: 'Calcium stearoyl fumarate',
    info: 'It is a synthetic ester of fumaric acid (E297) and stearic acid (E570). A second chemical reaction makes it possible to produce a calcium salt. \n The origin is fat (animal or vegetable).   It is used to form or preserve a mixture of substances that normally can not be mixed, for example: oil and water.  \n It does not appear to be subject to special precautions, although the pure substance is dangerous by ingestion.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 385,
    e_code: 'E487',
    title: 'Sodium laurylsulfate ',
    info: 'It is a synthetic ester of lauric acid (E297) and sulfuric acid (E570). This ester is neutralized with sodium carbonate (E500i). \n It is a strong ionic surfactant that, in addition to its food allocation by Codex, is used in household products such as toothpastes, shampoos, shaving foams or bubble baths for its thickening effects and its ability to create a foam. \n It is generally synthesized by treating lauric alcohol with sulfur trioxide gas (industrial method). \n The product obtained is then neutralized by the addition of sodium hydroxide or carbonate. Lauryl alcohol is usually derived from cheap coconut or palm oil by hydrolysis, which releases its fatty acids, followed by hydrogenation. \n The pure substance remains classified as harmful by ingestion, inhalation and dermal absorption. There are toxic effects by ingestion. These are reactions of allergic sensitivity through cosmetics, toothpastes, etc. that are reported more frequently.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 386,
    e_code: 'E488',
    title: 'Ethoxylated mono- and di-glycerides',
    info: 'The ethoxylated mono and diglycerides are made of edible fats. These fats come mainly from plants, but an animal source is not excluded. \n  Edible fats are broken down with glycerin in a process called glycerolysis to give the mono and diglycerides.    Mono and diglycerides of fatty acids E471, of which E488 is derived from the reaction with ethylene oxide. \n The ethoxylated mono- and diglycerides are distinguished essentially by an additional reaction with ethylene oxide, a carcinogenic listed compound.',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 387,
    e_code: 'E489',
    title: 'Methyl glucoside-coconut oil ester',
    info: 'It does not have much information regarding its origin or its toxicity in humans. It is a little known additive. ',
    e_type: 'Emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 388,
    e_code: 'E490',
    title: 'Propane-1,2-diol',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 389,
    e_code: 'E491',
    title: 'Sorbitan monostearate',
    info: 'It has been produced from sorbitol (E420) and stearic acid, a saturated fatty acid. The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible. \n  In high doses: organ injuries, diarrhea, bladder stones. \n  These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: 'Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 390,
    e_code: 'E492',
    title: 'Sorbitan tristearate',
    info: 'It has been produced from sorbitol (E420) and stearic acid, a saturated fatty acid. The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible. \n  In high doses: organ injuries, diarrhea, bladder stones. \n  These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: 'Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 391,
    e_code: 'E493',
    title: 'Sorbitan Monolaurate',
    info: 'It has been produced from sorbitol (E420) and lauric acid, a saturated fatty acid. The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible. \n  In high doses: organ injuries, diarrhea, bladder stones. \n  These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: ' Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 392,
    e_code: 'E494',
    title: 'Sorbitan monooleate',
    info: 'It is produced from sorbitol (E420) and oleic acid, a monounsaturated fatty acid. \n The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible.   In high doses: organ injuries, diarrhea, bladder stones. \n  These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: 'Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 393,
    e_code: 'E495',
    title: 'Sorbitan monopalmitate',
    info: 'It has been produced from sorbitol (E420) and palmitic acid, a saturated fatty acid. \n The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible.   In high doses: organ injuries, diarrhea, bladder stones. \n These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: 'Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 394,
    e_code: 'E496',
    title: 'Sorbitan trioleate',
    info: 'It is produced from sorbitol (E420) and oleic acid, a monounsaturated fatty acid. \n The origin of this acid is more frequently vegetable (and transgenic), but an animal, porcine and / or bovine source is still possible.   In high doses: organ injuries, diarrhea, bladder stones. \n  These doses would be reached from 150 grams of fine pasta or 300 grams of dessert or sweet.',
    e_type: 'Emulsifier  - Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 395,
    e_code: 'E497',
    title: 'Polyoxypropylene-polyoxyethylene polymers',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 396,
    e_code: 'E498',
    title: 'Partial polyglycerol esters of polycondensed fatty acids of castor oil',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 397,
    e_code: 'E499',
    title: 'Phytosterols Rich in Stigmasterol',
    info: 'Its origin comes from sources rich in plant phytosterols, such as sea buckthorn oil, corn oil, sunflower oil and soybean oil. \n Its main function is to enrich foods and attribute healthier properties. No side effects have been found. \n The total daily consumption of more than 3 grams of plant sterols is not recommended.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 398,
    e_code: 'E500',
    title: 'Sodium carbonates ',
    info: 'Sodium salt of carbonic acid. Natural substance, present as saline deposits left by the water of alkaline lakes. \n It is also synthesized through the Solvay process or by electrolysis of seawater.    Today, the Solvay process is an important part of the global market. The main characteristics of this process are the use of ammonia and carbon dioxide (E290) with sodium chloride.  \n  No side effects have been found. In large doses can irritate, corrode the gastrointestinal tract, electrolyte disturbances, vomiting, diarrhea, concussion.',
    e_type: 'Anticaking - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 399,
    e_code: 'E501',
    title: 'Potassium carbonates',
    info: 'Potassium salt of carbonic acid. Nowadays, commercial potassium carbonate is prepared by electrolysis of potassium chloride (E508). \n The resulting potassium hydroxide (E525) is then carbonized with carbon dioxide (E290) to form potassium carbonate. \n No side effects have been found. In large doses can irritate the digestive tract',
    e_type: 'Anticaking - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 400,
    e_code: 'E503',
    title: 'Ammonium carbonates',
    info: 'Ammonium carbonate is prepared by sublimation of a mixture of ammonium sulfate and calcium carbonate, or by passing gaseous carbon dioxide through an absorption column containing an aqueous solution of ammonia and causing distillation. \n  Ammonium carbonate decomposes slowly in several products. In ambient air, but also in hot water, it releases ammonia and carbon dioxide.  \n  In high doses can deteriorate the acid / base balance of the body, the pH of the urine. Loss of magnesium, calcium and phosphate. It can irritate the digestive tract.',
    e_type: 'Raising agent - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 401,
    e_code: 'E504',
    title: 'Magnesium carbonates',
    info: 'Magnesium carbonate is usually obtained by extraction of the mineral.  \n Magnesium carbonate can also be synthesized by exposing a slurry of magnesium hydroxide to carbon dioxide under pressure, producing soluble magnesium bicarbonate.  \n It is divided into 2 classes: Magnesium Carbonate and Magnesium Bicarbonate.  \n  No side effects have been found.',
    e_type: 'Raising agent - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 402,
    e_code: 'E505',
    title: 'Ferrous carbonate',
    info: 'It is an iron salt, existing in its natural state or obtained synthetically. The   food iron carbonate would be prepared by treating solutions of iron salts with alkali carbonate salts. \n   No side effects have been found. \n The ingestion of high doses of iron is toxic. Care for people with hemochromatosis.',
    e_type: 'Acidity regulator',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 403,
    e_code: 'E507',
    title: 'Hydrochloric Acid',
    info: 'It is a very powerful acid manufactured by synthesis.   Hydrochloric acid exists in its natural state as the main constituent of gastric acids. It exists naturally, in your stomach, it is the main component of stomach acids.  \n  Discovered by the Arab alchemist Jabir Ibn Hayyan around the year 800.    It is used to purify drinking water. \n   At low doses, no side effects have been found.   But at great doses it can provoke erosion of the mucous membranes of the esophagus and stomach. \n The respiratory system as well as the blood circulation may also be affected.',
    e_type: 'Acidulant',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 404,
    e_code: 'E508',
    title: 'Potassium chloride',
    info: 'Salt of hydrochloric acid combined with this metal.    It occurs in the form of discolored, elongated, prismatic or cubic crystals, or granular white powder. Without smell.  \n  In low doses, no side effects have been found. Although some people cause digestive problems.   But at large doses can cause diarrhea, intestinal ulcers and bleeding.',
    e_type: 'Stabiliser - Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 405,
    e_code: 'E509',
    title: 'Calcium chloride',
    info: 'Calcium chloride exists in its natural state. But usually it is derived from the salt of Hydrochloric Acid (E507).    It is commercially manufactured in 3 ways: \n (1) by refining salty natural waters, \n (2) by reaction of calcium hydroxide with ammonium chloride in the synthetic process of Solvay, and \n (3) by reaction of acid Hydrochloric acid with calcium carbonate.  \n  In large quantities can cause: digestion disorders, nausea, vomiting, diarrhea, intestinal ulcers and bleeding, disorders of the heart system. ',
    e_type: 'Stabiliser - Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 406,
    e_code: 'E510',
    title: 'Ammonium chloride',
    info: 'Ammonium chloride is the ammoniacal salt of hydrochloric acid. In nature, it appears in volcanic regions, settling on the rocks near the volcano\'s chimneys. It is also found in deep mines.    \n Ammonium chloride is prepared industrially by reaction of ammonia with hydrogen chloride. \n It can be produced industrially in several ways, in particular through the Solvay process.    \n Ammonium chloride as a food additive is reported, according to the sources consulted, as harmful or harmless. \n In large quantities can cause: Headache, nausea and vomiting. ',
    e_type: 'Stabiliser - Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 407,
    e_code: 'E511',
    title: 'Magnesium chloride',
    info: 'Magnesium chloride is the magnesium salt of hydrochloric acid. It is a compound of natural origin, in particular extracted from seawater by hydrolysis, or from mines (carnallite, bischofite) or synthetically derived from the salt of Hydrochloric Acid (E507). \n In low doses, no side effects have been found. In large doses could cause digestive discomfort and diarrhea. \n Caution should be exercised in case of taking antibiotics, as it may decrease the effectiveness of some of them.',
    e_type: 'Stabiliser - Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 408,
    e_code: 'E512',
    title: 'Stannous chloride',
    info: 'It is obtained from the derivative of the salt of Hydrochloric Acid (E507). \n Tin chloride can be prepared by dissolving tin metal in hydrochloric acid, the reaction takes time. \n It is established that pure tin chloride is dangerous by ingestion. In large doses it could cause digestive discomfort and diarrhea.',
    e_type: 'Stabiliser - Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 409,
    e_code: 'E513',
    title: 'Sulfuric acid',
    info: 'Sulfuric acid is manufactured synthetically, mainly from sulfur, oxygen and water, through a process called contact involving a catalyst, but other processes are also implemented on a smaller scale. \n Pure sulfuric acid is very corrosive, harmful by ingestion, contact and inhalation. \n It is the vitriol and acid from car batteries. \n In large doses it is lethal for an adult is between a teaspoon and a half ounce (approximately 15 ml).  There is a carcinogenic and / or carcinogenic effect by inhalation. \n Normally it is not used in food products. It is used to make fertilizers and detergents.',
    e_type: 'Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 410,
    e_code: 'E514',
    title: 'Sodium sulfates',
    info: 'Salt of sulfuric acid combined with sodium, natural or synthetic. It is divided into two classes: Sodium Sulfate and Partner Acid Sulfate. \n  No side effects have been found in low doses. However, in large doses, it can cause: diarrhea and digestive disorders. It is also used in pharmaceuticals, cosmetics, cleaning products and detergent manufacturing. ',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 411,
    e_code: 'E515',
    title: 'Potassium sulfates',
    info: 'Potassium salt of sulfuric acid, natural or synthetic. It is divided into two classes: Potassium Sulfate and Potassium Acid Sulfate. \n No side effects have been found in low doses. However, in large doses, it can cause: diarrhea and digestive disorders. \n  It is also used in pharmaceuticals, cosmetics, cleaning products and detergent manufacturing.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 412,
    e_code: 'E516',
    title: 'Calcium sulfate',
    info: 'Calcium salt of sulfuric acid. Of natural or synthetic origin. It is divided into two classes: Calcium Sulfate and Calcium Acid Sulfate. \n No side effects have been found in low doses. On the other hand, in large doses it can cause: intestinal obstruction and digestive disorders.  \n It is also used in pharmaceuticals, cosmetics, cleaning products and detergent manufacturing.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 413,
    e_code: 'E517',
    title: 'Ammonium sulfate',
    info: 'Ammonium salt of sulfuric acid, natural or synthetic. It is divided into two classes: Ammonium Sulfate and Ammonium Acid Sulfate. \n The pure substance is dangerous by contact, ingestion and inhalation. It is potentially mutagenic. \n No side effects have been found in low doses. However, in large doses it can cause: diarrhea, digestive disorders, cardiac contraction, hypertension. \n It is also used in pharmaceuticals and cosmetics.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 414,
    e_code: 'E518',
    title: 'Magnesium sulfate',
    info: 'Magnesium sulfate, or magnesium salt of sulfuric acid, is a compound that contains magnesium, sulfur and oxygen, can be natural or synthetic. It is divided into two classes: Magnesium Sulfate and Magnesium Acid Sulfate. \n Natural magnesium sulfate and pharmacopoeia: Epsom salt has been used for centuries for several indications: treatment of skin problems, cardiac arrhythmia, eclampsia, asthma, laxative, additive for mineralized baths, nail growth problem. \n No side effects have been found in low doses. \n However, in large doses it can cause intestinal problems.',
    e_type: 'Stabiliser - Acidity regulator',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 415,
    e_code: 'E519',
    title: 'Cupric sulfate',
    info: 'Copper sulfate is a copper salt of sulfuric acid, it can be either naturally or synthetically. It is divided into two classes: Copper Sulfate and Copper Acid Sulfate.  \n Copper is a paradoxical mineral element, beneficial in the form of trace elements, but can become, in certain conditions, very toxic to humans and certain animals. \n It is sometimes used to purify drinking water. \n Copper sulfate is a toxic product for humans and for the environment. \n In large doses it can cause kidney toxicity, cause of blood disorders, it also causes gastrointestinal-intestinal disorders and is considered neurotoxic.',
    e_type: 'Colour fixative - Preservative ',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 416,
    e_code: 'E520',
    title: 'Aluminium sulfate',
    info: 'Aluminum salt of sulfuric acid, can be natural or synthetic.  \n  The anhydrous form naturally exists in the form of a rare mineral (millosevichite), found, for example, in a volcanic environment and by burning the waste from coal mines. It is sometimes used to purify drinking water. and also in cosmetics and some medications.   \n In large doses it is suspected that it promotes the onset of Alzheimer\'s disease, or Parkinson\'s disease.  \n It can also cause kidney toxicity.',
    e_type: 'Firming agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 417,
    e_code: 'E521',
    title: 'Aluminium sodium sulfate',
    info: 'Salt of aluminum and sulfuric acid of sodium, can be of natural or synthetic form.    It is rarely obtained naturally by the known natural mineral forms of aluminum sulfate and sodium are mendozite and tamarugite. It is usually produced synthetically by a bond of sodium sulfate and aluminum sulfate.  \n  It is sometimes used to purify drinking water. and also in refined sugar and as a food additive.    In large doses it is suspected that it promotes the onset of Alzheimer\'s disease, or Parkinson\'s disease. It can also cause kidney toxicity.',
    e_type: 'Firming agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 418,
    e_code: 'E522',
    title: 'Aluminium potassium sulfate',
    info: 'Prepared from natural aluminium sulphate. \n It is used as acid source in baking powder for bakery products, baked at high temperature. It also stabilises colours. \n It is sometimes used to purify drinking water. \n Used in Industrial baking powder. Acceptable daily intake is upto 0. 6 mg/kg bodyweight. \n Aluminium inhibits the uptake of B-vitamins. \n It may also influence liver function in high concentrations. \n In large doses it is suspected that it promotes the onset of Alzheimer\'s disease, or Parkinson\'s disease. \n It can also cause kidney toxicity.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 419,
    e_code: 'E523',
    title: 'Aluminium ammonium sulfate',
    info: 'Salt of aluminum and ammonium of sulfuric acid, can be natural or synthetic. \n  It is sometimes used to purify drinking water.    It is known that pure aluminum and ammonium sulfate is dangerous by ingestion and inhalation. \n Chronic ingestion can affect the brain and bones.  \n  In large doses it is suspected that it promotes the onset of Alzheimer\'s disease, or Parkinson\'s disease. \n It can also cause kidney toxicity. \n A Side effect of Aluminium is that it inhibits the uptake of B-vitamins.',
    e_type: 'Firming agent - Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 420,
    e_code: 'E524',
    title: 'Sodium hydroxide',
    info: 'Prepared from natural salt.  It is obtained by electrolysis of sodium chloride. \n Strong alkali used as acidity regulator. Also used to enhance the industrial peeling of fruits, also to blacken olives and in the preparation of caramel. \n It is found in many products, including bakery goods, cocoa products, coffee creamer, black olives. Acceptable daily intake is not determined. \n  In low doses it is safe and harmless. But in high doses can cause irritation of the digestive tract. \n It is a harmful heavy metal by bioaccumulation and in a very low dose.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 421,
    e_code: 'E525',
    title: 'Potassium hydroxide',
    info: 'Prepared from the natural salt potassium chloride. Potassium hydroxide is produced by electrolysis of potassium chloride. \n Strong alkali used as acidity regulator. \n Also used to enhance the industrial peeling of fruits and to blacken olives. \n Found in Products like Bakery goods, cocoa products, black olives and the colour annatto (E160b) Acceptable daily intake is not determined.  \n Sodium does not exist as a pure body in nature, but it is very abundant in the form of compounds, for example, in table salt, essentially composed of sodium chloride.  \n  In low doses it is safe and harmless. But in high doses can cause irritation of the digestive tract.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 422,
    e_code: 'E526',
    title: 'Calcium Hydroxide',
    info: 'Calcium hydroxide is a synthetic substance, obtained by mixing quick lime (calcium oxide, E529) with water. Prepared from the natural salt calcium oxide.  \n  In the laboratory, this can be achieved by mixing an aqueous solution of calcium chloride (E509) with sodium hydroxide (E524). \n Strong alkali used as acidity regulator, for example in wine. A solution of calcium hydroxide can be used to preserve eggs.   \n This additive is used for food, pharmaceutical, cosmetic, cement and other construction materials.   \n   In low doses it is safe and harmless. \n But in high doses can cause irritation of the digestive tract.',
    e_type: 'Miscellaneous - Alkalis',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 423,
    e_code: 'E527',
    title: 'Ammonium hydroxide',
    info: 'Prepared from the ammonia and water. Ammonium hydroxide is a solution formed from ammonia, a gas with an extremely irritating odor. \n The industrial production is mainly by direct synthesis from dihydrogen and nitrous. \n  This additive is discouraged, as there may be risks of skin reactions, digestive disorders, ulcers and blood disorders. \n The results suggest that exposure to ammonia may promote gastric cancer induced by other substances.  \n This additive is used for food, pharmaceutical, cosmetic and other products.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 424,
    e_code: 'E528',
    title: 'Magnesium hydroxide',
    info: 'Prepared from natural minerals. Strong alkali used as acidity regulator. Magnesium hydroxide, exists in natural mineral form, but most of its industrial use would result from synthetic production, especially due to seawater. \n This additive is used for food, pharmaceutical, cosmetic and other products.    In low doses, no side effects have been found. However, in large doses it can cause irritation of the digestive tract or laxative effect. \n  Keep in mind that it can disturb the absorption of folic acid (vitamin B9) and iron.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 425,
    e_code: 'E529',
    title: 'Calcium oxide',
    info: 'Prepared from chalk and used as an acidity regulator. Calcium oxide is obtained by calcination of calcium carbonate (E170).  \n Lime is a potentially dangerous product, used mainly in industry and agriculture. \n It is also used in the preparation of intestines for sausages (as cover, not filling). Found in cocoa products, bakery products, intestines.\n Hydrophilic, it is used to dry and destroy organic matter rich in water. When mixing large amounts of quicklime and water, the heat released is such that the water can boil.   \n  In low doses, no side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 426,
    e_code: 'E530',
    title: 'Magnesium oxide',
    info: 'Calcium Oxide is obtained by calcination of Magnesium Carbonate (E504).    Magnesium oxide exists in a natural mineral form, but it is also synthesized. \n  Found in Cocoa products and bakery products. Acceptable daily intake is not determined. \n Magnesium acts as a laxative in high concentrations.  Magnesium acts as a laxative in high concentration. \n Magnesium oxide is part of pharmaceuticals and is used as an antacid to treat heartburn, as a fast laxative in high concentration.    In low doses, no side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 427,
    e_code: 'E535',
    title: 'Sodium ferrocyanide',
    info: 'Sodium ferrocyanide is a synthetic product. It is manufactured industrially from hydrogen cyanide, iron chloride and calcium hydroxide. \n It is interesting to note that the ferrocyanide salts become unstable and toxic in acid solutions. \n  As a food additive, there are no known side effects in doses below the daily intake. \n Use is very limited, partly due to the strong yellow colour. ',
    e_type: 'Stabiliser - Anticaking',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 428,
    e_code: 'E536',
    title: 'Potassium ferrocyanide',
    info: 'Potassium ferrocyanide is a synthetic product. It is manufactured industrially from hydrogen cyanide, ferrous chloride and calcium hydroxide and potassium carbonate \n Used as anti-caking agent and to remove copper from red wine. Copper is used as a fungicide on grapes. \n   It is interesting to note that the ferrocyanide salts become unstable and toxic in acid solutions.  \n  As a food additive, there are no known side effects in doses below the daily intake.',
    e_type: 'Stabiliser - Anticaking',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 429,
    e_code: 'E537',
    title: 'Ferrous hexacyanomanganate',
    info: 'Potassium ferrocyanide is a synthetic product. It is manufactured industrially from hydrogen cyanide, ferrous chloride (E526), calcium hydroxide and calcium carbonate  \n   It is interesting to note that the ferrocyanide salts become unstable and toxic in acid solutions. \n   As a food additive, there are no known side effects in doses below the daily intake.',
    e_type: 'Stabiliser - Anticaking',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 430,
    e_code: 'E538',
    title: 'Calcium ferrocyanide',
    info: 'Calcium ferrocyanide is a synthetic product. It is manufactured industrially from hydrogen cyanide, ferrous chloride (E526), calcium hydroxide and calcium carbonate.  \n  It is interesting to note that the ferrocyanide salts become unstable and toxic in acid solutions.  \n  As a food additive, there are no known side effects in doses below the daily intake.',
    e_type: 'Stabiliser - Anticaking',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 431,
    e_code: 'E539',
    title: 'Sodium thiosulfate',
    info: 'Sodium salt of thiosulfuric acid, synthetic. On an industrial scale, it is produced mainly from liquid waste from the production of sodium sulphide or from the production of sulfur dyes.  \n  The toxicology of sodium thiosulfate has not been fully investigated. The pure compound can be reported for low toxicity. \n   Sodium thiosulfate is broken down in contact with acids and heat, with the emission of sulfur dioxide among others. It is better to avoid cooking with this additive.',
    e_type: 'Antioxidants - Sequestrant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 432,
    e_code: 'E540',
    title: 'Dicalcium diphosphate',
    info: 'Synthetic additive, is obtained from phosphoric acid derivative.  \n  Pure phosphoric acid is a corrosive substance, harmful by ingestion and by contact or even by inhalation. \n   It is an additive that exists in many foods, it is important to take into account its high consumption. ',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 433,
    e_code: 'E541',
    title: 'Sodium aluminium phosphates',
    info: 'Synthetically produced from aluminium, phosphoric acid and sodium hydroxide. \n .Aluminum and sodium salt of phosphoric acid, made of aluminum or aluminum oxide, phosphoric acid and sodium carbonate or hydroxide. \n  It is divided into 2 classes: Sodium and Aluminum Acid Phosphate (E541i) and Basic Sodium and Aluminum Phosphate (E541ii). \n   It is considered toxic additive since there are risks of accumulation of aluminum in certain tissues, several studies report neurotoxic effects, possible contribution with Alzheimer\'s and Parkinson\'s. \n In cases of large doses there are risks such as toxins in the kidneys and heart.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 434,
    e_code: 'E542',
    title: 'Bone phosphate',
    info: 'Produced from animal bones. It consists of tricalcium phosphate, derived from steam under pressure or calcination of bone or ground bone of pigs. \n  Phosphates can be converted into polyphosphates, causing digestive disorders, blocking many enzymes.  \n  It is considered that evidence was detected that bovine spongiform encephalopathy (the condition called "mad cow") could be caused by adding this additive in cattle feed. ',
    e_type: 'Emulsifier - Anticaking agent ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 435,
    e_code: 'E543',
    title: 'Calcium sodium polyphosphate',
    info: 'emulsifier',
    e_type: 'emulsifier',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 436,
    e_code: 'E544',
    title: 'Calcium Polyphosphates',
    info: 'Produced by heating calcium phosphate. Used as emulsifier and stabiliser. It is obtained from derivative of Phosphoric Acid (E338).  \n  In large doses can cause hyperactivity and digestive problems.  \n  It is generally used to increase the mass of foods such as meats and sausages sold by weight.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 437,
    e_code: 'E545',
    title: 'Ammonium Polyphosphates',
    info: 'Inorganic salt of polyphosphoric acid and ammonia. Ammonium polyphosphate can be prepared by reacting concentrated phosphoric acid with ammonia.  \n  Ammonium polyphosphate would also be used as chemical fertilizer and flame retardant in paints (pigments, binders and biocides) and in the manufacture / processing of pulp and paper. \n It is also used as a nutrient for yeasts and increases the binding properties of water.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 438,
    e_code: 'E546',
    title: 'Magnesium pyrophosphate',
    info: 'Phosphates are the natural salts of phosphoric acid (E338). Diphosphates consist of two molecules of condensed phosphates formed by phosphate heating. \n  Attention with this additive can cause loss of bone calcium. \n In children it can cause hyperactivity and other behavioral disorders. Some studies say that it can promote the activity of known carcinogens. ',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 439,
    e_code: 'E550',
    title: 'Sodium silicates',
    info: 'Sodium silicate is formed naturally by the reaction of silica (or silicon dioxide, E551) with sodium carbonate (E500) in the molten state. It is a strong base that forms very alkaline, corrosive solutions for the skin and mucous membranes. \n  It is divided into 2 classes: Sodium Silicate and Sodium Metasilicate. \n It is used in some pharmaceutical products, cosmetics, soaps and detergents. \n The detergents that contain this product are powerful irritants for the skin, the eyes and the respiratory tract.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 440,
    e_code: 'E551',
    title: 'Silicon dioxide',
    info: 'Silicon dioxide is a combination of oxygen and synthetic silicon, but it also exists in abundance in nature. Silicon dioxide and silicates exist naturally in plant foods, particularly cereals. \n It is used in various types of products: pharmaceuticals, perfumes, cosmetics and food manufacturing.    Silicon dioxide is generally considered harmless as an additive. However, silicon dioxide is one of the additives that today can be marketed in the form of nanoparticles. Food nanotechnology poses serious health problems in the medium and long term, and is not sufficiently regulated by law. \n Since they can have (due to their very small size) very different toxicokinetic properties.',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: 'It could promote the development of celiac disease in genetically predisposed individuals by disrupting gut immune homeostasis. Chronic dietary exposure to E551 has been linked to reduced anti-inflammatory intestinal immune cells',
    countries_banned: 'No global ban'
  },
  {
    id: 441,
    e_code: 'E552',
    title: 'Calcium silicate',
    info: 'Calcium silicates exist in their natural state (limestone), but are produced by synthesis from the reaction of lime (E529) and silica (E551) in varying proportions. \n  It is authorized as an additive for the treatment of chewing gum by recovery, but it is also an additive support used especially in the manufacture of emulsifiers and dyes, in potassium chloride preparations for the purpose of salt replacement products.  \n It is also used for pharmaceuticals, cosmetics, various industrial uses.',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 442,
    e_code: 'E553',
    title: 'Magnesium silicates',
    info: 'Produced from magnesium sulphate and sodium silicate or directly from minerals such as talcum, sepiolite and steatite. \n Magnesium silicate is a natural crystalline mineral. \n Commercially, it is an amorphous synthetic compound in the form of a powder formed by the reaction of a precipitate of water-soluble sodium silicate and a water-soluble magnesium salt such as magnesium chloride, nitrate or sulfate.   \n It is divided into 3 classes: Magnesium Silicate and Magnesium Talc. \n They are considered harmful by inhalation.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 443,
    e_code: 'E553a',
    title: '(i) Magnesium silicate (ii) Magnesium trisilicate',
    info: 'anti-caking agent',
    e_type: 'anti-caking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 444,
    e_code: 'E553b',
    title: 'Talc',
    info: 'anti-caking agent',
    e_type: 'anti-caking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 445,
    e_code: 'E554',
    title: 'Sodium aluminosilicate',
    info: 'Sodium aluminosilicate is an acid salt that contains sodium, aluminum, silicon and oxygen. This includes synthetic amorphous sodium aluminosilicate, some natural minerals and synthetic zeolites. Synthetic amorphous sodium aluminosilicate is widely used as a food additive (E554).  \n  It is potentially toxic and neurotoxic because of aluminum. Some reports link it to Alzheimer\'s disease, Parkinson\'s.  \n  Some sources report a harmful potential for bones and kidneys, the fetus and reproduction.   \n  Apart from being used as a food additive, it is also used for pharmaceutical products.',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 446,
    e_code: 'E555',
    title: 'Potassium aluminium silicate',
    info: 'Aluminum potassium silicate is a potassium salt of silicic aluminum. \n Muscovite and phlogopite are the two main commercial micas. Micas are usually found in ordinary rocks. With quartz and feldspar, it is one of the components of granite. It would be synthesized from calcined kaolinite. \n It is potentially toxic and neurotoxic because of aluminum. Some reports link it to Alzheimer\'s disease, Parkinson\'s. It is also harmful to the bones and kidneys and the fetus. \n Apart from being used as a food additive, it is also used for pharmaceutical products.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 447,
    e_code: 'E556',
    title: 'Aluminium Calcium Silicate',
    info: 'Calcium silicoaluminate is the calcium and aluminum salt of silicic acid, it exists naturally as a mineral species of the group of silicates (anortite), present especially in metamorphic and magmatic rocks. It can be produced industrially from calcium hydroxide and kaolinite, a mineral species composed of hydrated aluminum silicate.  \n It is potentially toxic and neurotoxic because of aluminum. \n Some reports link it to Alzheimer\'s disease, Parkinson\'s. It is also harmful to the bones and kidneys and the fetus.',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 448,
    e_code: 'E557',
    title: 'Zinc silicate',
    info: 'The zinc salt of silicic acid exists in its natural state in mineral form (Willemite). It is produced from silicon oxide (quartz) and zinc oxide.  \n  Its function is to help prevent food particles from sticking. \n  It is also used in cosmetics (deodorants).  \n  No side effects have been found. ',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 449,
    e_code: 'E558',
    title: 'Bentonite',
    info: 'Bentonite is an absorbent hydrated aluminum silicate, mainly made of montmorillonite and clay, which makes it a water retainer.  \n The deposits of bentonite are of volcanic and hydrothermal origin. The main raw materials used in the industrial production of bentonite are bentonite ore, sulfuric acid and calcium oxide. \n Also used as clarifying agent in fruit juice preparations. Found in fruit juices, aromas. Main use, however, is in cosmetics.  \n   No side effects have been found.  \n   It is used in the manufacture of lubricating greases, flavorings and as a wine clarifier. It is also used in animal feed to eliminate toxins. A natural type of clay from volcanic origin. Used as anti-caking agent and emulsifier. ',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 450,
    e_code: 'E559',
    title: 'Aluminium silicate',
    info: 'It comes from deposits derived from the local alteration of granitic rocks (feldspar). They are white clays composed mainly of aluminum silicates.  \n  In food, this additive is often used in bakeries and pastry shops. But it is also used for beauty treatments such as exfoliating and bleaching the skin.  \n   No side effects have been found. But there are reports that say it is better to avoid it because of the aluminum (E173) it contains.',
    e_type: 'Anticaking agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 451,
    e_code: 'E560',
    title: 'Potassium silicate',
    info: 'Potassium salt of silicic acid, produced by supercooled fusion of potassium carbonate (E501) and pure silica sand (E551).  \n  Not much is known about the toxicity of this additive, as it is not fully studied.  \n  Besides using it in food, it is also used for cosmetics, anticorrosion, detergent manufacturing, glass, ceramics, welding rods, adhesives, cements, paints and others.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 452,
    e_code: 'E561',
    title: 'Vermiculite',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 453,
    e_code: 'E562',
    title: 'Sepiolite',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 454,
    e_code: 'E563',
    title: 'Sepiolitic clay',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 455,
    e_code: 'E565',
    title: 'Lignosulfonates',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 456,
    e_code: 'E566',
    title: 'Natrolite-phonolite',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 457,
    e_code: 'E570',
    title: 'Fatty acids',
    info: 'Fatty acids originally exist in animal and plant cells. Soy, corn, rapeseed and cotton are often used as raw materials and are usually transgenic. The use of animal fats (porcine and / or bovine) can not be excluded.  \n  In large doses can cause serious adverse effects such as breast cancer, hypercholesterolemia, atherosclerosis, Diabetes (insulin resistance), cardiovascular risks, liver dysfunction. It is advisable to avoid it.',
    e_type: 'Emulsifier - Anticaking agent ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 458,
    e_code: 'E571',
    title: 'Ammonium stearate',
    info: 'Ammonium salt of stearic acid. Used as anti-caking and anti-foaming agent in sugar production. \n Found in Sugar, but mainly used in cosmetics. \n Acceptable daily intake is not determined. \n Although stearic acid and stearates are commercially obtained from plant sources, the use of animal fat (including pork and beef) can not be excluded. Only the producer can provide information on the origin. \n Few information. It is considered harmless, unless the powder is inhaled.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 459,
    e_code: 'E572',
    title: 'Magnesium stearate',
    info: 'Magnesium stearate is a salt synthesized from stearic acid, a saturated fatty acid of animal or vegetable origin  and a bond with magnesium. \n It also contains magnesium palmitate.     Cottonseed oil and palm oil are the crude vegetable fats most commonly reported in the manufacture of magnesium stearate. \n The use of animal, porcine and / or bovine fats, however, are not excluded. Only the producer can provide this information. \n  It is considered harmless, unless the powder is inhaled.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 460,
    e_code: 'E573',
    title: 'Aluminium stearate',
    info: 'Aluminum stearate is a salt synthesized from stearic acid (E570), a saturated fatty acid of animal or vegetable origin and a bond with aluminum.  \n  At recommended doses, no side effects have been found. \n But in large doses can lead to toxicity in the kidneys and accumulation of aluminum particles in the body. \n In some reports it is believed that it can become neurotoxic. It is recommended to avoid it.',
    e_type: 'Anticaking agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 461,
    e_code: 'E574',
    title: 'Gluconic acid',
    info: 'Gluconic acid and gluconate salts and esters come from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar. \n Commercially it is possible to manufacture it in the transformation of glucose into gluconic acid. \n It is widely used in the cleaning of glass bottles before filling the drink or food. It is also used in cosmetics and pharmaceuticals. \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 462,
    e_code: 'E575',
    title: 'Glucono delta-lactone',
    info: 'It is acquired from gluconic acid derivatives (E574). Also used in processing equipment to avoid precipitation of calcium and magnesium.  \n Gluconic acid comes from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar. \n  Commercially it is possible its manufacture via the transformation of glucose into gluconic acid.   The glucono-delta-lactone can be obtained by subjecting the gluconic acid to evaporation. \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 463,
    e_code: 'E576',
    title: 'Sodium gluconate',
    info: 'It is acquired from gluconic acid derivatives (E574). \n  Gluconic acid comes from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar. Also used as nutrient for yeast. \n  Commercially it is possible its manufacture via the transformation of glucose into gluconic acid.     For the manufacture of sodium gluconate are: sodium hydroxide, sodium carbonate, glucose, calcium gluconate and gluconic acid.  \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 464,
    e_code: 'E577',
    title: 'Potassium Gluconate',
    info: 'Potassium salt of gluconic acid. Sequestrant (binds metals) in many products. It is acquired from gluconic acid derivatives (E574). \n Gluconic acid comes from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar. \n Commercially it is possible its manufacture via the transformation of glucose into gluconic acid. \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 465,
    e_code: 'E578',
    title: 'Calcium Gluconate',
    info: 'Calcium salt of gluconic acid. It is an anti-caking agent and strengthens the structure of canned vegetables.  \n It is acquired from gluconic acid derivatives (E574).   Gluconic acid comes from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar.   \n Commercially it is possible its manufacture via the transformation of glucose into gluconic acid. \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 466,
    e_code: 'E579',
    title: 'Ferrous gluconate',
    info: 'Iron salt of gluconic acid . Used as a colour and iron supplement. \n It is acquired from gluconic acid derivatives (E574).  \n  Gluconic acid comes from the oxidation of glucose, they exist in abundance in nature: plants, fruits and other foods such as rice, meat, dairy products, honey and vinegar. \n It is commercially possible to manufacture it via the conversion of glucose into gluconic acid. \n No side effects have been found.',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 467,
    e_code: 'E580',
    title: 'Magnesium gluconate',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 468,
    e_code: 'E585',
    title: 'Ferrous lactate',
    info: 'Iron salt of lactic acid.  Lactates are the salts of lactic acid.    Iron lactate is produced by the interaction of calcium lactate with ferrous sulfate, or by the direct action of lactic acid on iron deposits. \n Although it is often reported that iron lactate poses no danger, even though the pure substance is toxic and derived from lactic acid, possibly transgenic. \n This additive is very used for black olives to maintain its dark color, to avoid that greenish color. ',
    e_type: 'Stabiliser - Regulator of acidity',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 469,
    e_code: 'E586',
    title: 'Hexylresorcinol',
    info: 'Hexylresorcinol can be prepared by reacting caproic acid and resorcinol in the presence of a catalyst. \n It is a little documented and doubtful additive. \n It can cause allergies or intolerance reactions in some people. \n The pure substance is harmful by ingestion, irritating the skin, eyes and respiratory tract. \n It is also used in pharmaceutical products.',
    e_type: 'Antioxidants',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 470,
    e_code: 'E598',
    title: 'Synthetic calcium aluminates',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 471,
    e_code: 'E599',
    title: 'Perlite',
    info: 'Unknown',
    e_type: 'Unknown',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 472,
    e_code: 'E620',
    title: 'Glutamic acid',
    info: 'Natural amino acid (building block of protein).  \n Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. \n It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae. \n Commercially prepared from molasses by bacterial fermentation. \n In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. \n In large doses can cause allergic reactions and asthma attacks.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 473,
    e_code: 'E621',
    title: 'Monosodium L-glutamate',
    info: 'A non-essential amino acid, first isolated in 1865. \n Sodium glutamate which are derived from the salts of glutamic acid (E620), are formed when the latter is chemically bound to sodium. \n Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae. \n In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. \n In large doses can cause allergic reactions and asthma attacks.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: 'While generally safe at low levels, potential risks of MSG include the MSG symptom complex (headaches, nausea, tingling) in some sensitive individuals, and possible links to metabolic issues like obesity, cardiovascular disease, and dyslipidemia when consumed in high quantities, often through processed or fast foods.',
    countries_banned: 'No global ban but almost 50 countries has banned the use of it in baby food'
  },
  {
    id: 474,
    e_code: 'E622',
    title: 'Monopotassium L-glutamate',
    info: 'Potassium glutamate which are derived from the salts of glutamic acid (E620), are formed when the latter is chemically bound to potassium.    \n Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. \n It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae.     \n In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. \n In large doses can cause allergic reactions and asthma attacks. \n Glutamates may not be used in products intended for children under 12 weeks. Although many side effects have been reported for glutamates, these have not been scientifically.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 475,
    e_code: 'E623',
    title: 'Calcium di-L-glutamate',
    info: 'Calcium salt from glutamic acid , a natural amino acid (building block of protein). \n Calcium glutamate that are derived from the salts of glutamic acid (E620), are formed when the latter is chemically bound to calcium. \n Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae.     In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. In large doses can cause allergic reactions and asthma attacks.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 476,
    e_code: 'E624',
    title: 'Monoammonium L-glutamate',
    info: 'Ammonium glutamate which are derived from the salts of glutamic acid (E620), are formed when the latter is chemically bound to ammonium.    Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. \n It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae.     \n In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. \n In large doses can cause allergic reactions and asthma attacks.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 477,
    e_code: 'E625',
    title: 'Magnesium di-L-glutamate',
    info: 'Magnesium glutamate which are derived from the salts of glutamic acid (E620), are formed when the latter is chemically bound to magnesium.    Glutamic acid is a non-essential amino acid and the main excitatory neurotransmitter in the central nervous system in mammals, and has an important role in learning and memory. \n It is naturally present in many animal and vegetable proteins such as cheeses, tomatoes and algae.     \n In low doses it is potentially excitotoxic and neurotoxic since it is able to destroy neurons in the brain very quickly. \n In large doses can cause allergic reactions and asthma attacks',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 478,
    e_code: 'E626',
    title: 'Guanylic acid',
    info: 'Guanylic acid is a natural acid, which is part of RNA, one of the genetic carrier molecules in the cell.  \n Commercially, guanilic acid can be isolated from RNA by the enzymatic degradation that is generally obtained from yeasts or sardines, but it can also be biosynthesized directly from microorganisms or enzymes. \n Mainly without known risk. But it is also better to avoid it since the commercial production of guanilic acid can be transgenic.  \n  It is also advisable to avoid it: asthmatics, babies and small children, pregnant or lactating women.  \n The nucleotides are commercially obtained from Torula yeast cells. \n As guanylates are metabolised to purines, they should be avoided by people suffering from gout. \n However, the concentrations used are generally so low that no effects are to be expected. Guanlyic acid and guanylates are generally produced from yeasts, but partly also from fish.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 479,
    e_code: 'E627',
    title: 'Disodium guanylate, sodium guanylate',
    info: 'Sodium salt of guanylic acid , a natural acid, which is part of RNA, one of the genetic carrier molecules in the cell. It is thus part of all cells in all living organisms. \n Commercially prepared from yeast extract or sardines. A flavour enhancer having specific umami taste but strongly enhance many other flavours, thereby reducing the amounts of salt needed in a product. \n Acceptable daily intake is not determined. Guanylates may not be used in products intended for children under 12 weeks. Asthmatic people should avoid guanylic acid and guanylates. \n As guanylates are metabolised to purines, they should be avoided by people suffering from gout. However, the concentrations used are generally so low that no effects are to be expected. \n Guanlyic acid and guanylates are generally produced from yeasts, but partly also from fish.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: 'Considered safe in small amounts but can increase uric acid levels',
    countries_banned: 'No global ban but needs a halal certification permit'
  },
  {
    id: 480,
    e_code: 'E628',
    title: 'Dipotassium guanylate',
    info: 'Potassium salt of guanylic acid , a natural acid, which is part of RNA, one of the genetic carrier molecules in the cell. \n It is thus part of all cells in all living organisms. Commercially prepared from yeast extract or sardines.  \n A flavour enhancer having specific umami taste but strongly enhance many other flavours, thereby reducing the amounts of salt needed in a product. \n Used in many products, mainly in low-salt/sodium products. Guanylates may not be used in products intended for children under 12 weeks. \n Asthmatic people should avoid guanylic acid and guanylates. As guanylates are metabolised to purines, they should be avoided by people suffering from gout. However, the concentrations used are generally so low that no effects are to be expected. \n Guanlyic acid and guanylates are generally produced from yeasts, but partly also from fish.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 481,
    e_code: 'E629',
    title: 'Calcium guanylate',
    info: 'Guanyilates are guanylic acid derivatives that are formed by a chemical bond to calcium.  \n Guanilic acid is a natural acid that is part of RNA, one of the molecules that carry the genetic code in all the cells of living organisms. \n Commercially, guanilic acid can be isolated from RNA by the enzymatic degradation that is generally obtained from yeasts or sardines, but it can also be biosynthesized directly from microorganisms or enzymes.     Mainly without known risk. But it is also better to avoid it since the commercial production of guanilic acid can be transgenic. \n  It is also advisable to avoid it: asthmatics, babies and small children, pregnant or lactating women.  \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 482,
    e_code: 'E630',
    title: 'Inosinic acid',
    info: 'Inosinic acid is a commercially obtained nucleotide of Torula yeast. \n  Inosinic acid occurs naturally in muscle tissue. It also occurs during the decomposition of meat. \n  Commercially, it is prepared from meat, fish or by potentially transgenic bacterial fermentation. \n In small doses, no secondary effect was found. In large doses can cause: hyperactivity, irritation of mucous membranes, insomnia, allergies and is recommended to avoid in patients who have kidney diseases.   \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 483,
    e_code: 'E631',
    title: 'Disodium 5’-inosinate',
    info: 'The inosinates are the salts of inosinic acid, which chemically bind the latter with sodium. \n Inosinic acid is a commercially obtained nucleotide of Torula yeast.  \n  Inosinic acid occurs naturally in muscle tissue. It also occurs during the decomposition of meat. \n Commercially, it is prepared from meat, fish or by potentially transgenic bacterial fermentation. \n In small doses, no secondary effect was found. In large doses can cause: hyperactivity, irritation of mucous membranes, insomnia, allergies and is recommended to avoid in patients who have kidney diseases. \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'not halal',
    risk_factor: 'For healthy individuals, there are no known harmful effects or significant toxicity from consuming Disodium Inosinate. However, it is advised that children and pregnant women exercise caution or avoid it, and it may trigger symptoms in those with asthma or allergies.',
    countries_banned: 'European Union and Canada prohibit its use if the source is from pork or yeast grown on alcohol, making those products effectively banned in those regions.'
  },
  {
    id: 484,
    e_code: 'E632',
    title: 'Potassium 5’-inosinate',
    info: 'The inosinates are the salts of inosinic acid, which chemically bind the latter with potassium. \n Inosinic acid is a commercially obtained nucleotide of Torula yeast.  \n  Inosinic acid occurs naturally in muscle tissue. It also occurs during the decomposition of meat. \n Commercially, it is prepared from meat, fish or by potentially transgenic bacterial fermentation. \n In small doses, no secondary effect was found. In large doses can cause: hyperactivity, irritation of mucous membranes, insomnia, allergies and is recommended to avoid in patients who have kidney diseases. \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 485,
    e_code: 'E633',
    title: 'Calcium inosinate',
    info: 'The inosinates are the salts of inosinic acid, which chemically bind the latter with potassium. \n Inosinic acid is a commercially obtained nucleotide of Torula yeast.  \n  Inosinic acid occurs naturally in muscle tissue. It also occurs during the decomposition of meat. \n Commercially, it is prepared from meat, fish or by potentially transgenic bacterial fermentation. \n In small doses, no secondary effect was found. In large doses can cause: hyperactivity, irritation of mucous membranes, insomnia, allergies and is recommended to avoid in patients who have kidney diseases. \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 486,
    e_code: 'E634',
    title: 'Calcium 5’-ribonucleotides',
    info: 'Ribonucleotides are a mixture of guanylates and inosinates.  \nGuanylates and inosinates are the salts of guanylic and inosinic acid. These natural acids can be produced using transgenic technologies. It is difficult to determine case by case and to what extent. \n The additives manufactured in closed systems with the help of transgenic microorganisms are not labeled as such, since it is considered that the additive has been purified and no longer contains microorganisms. In the case that the microorganisms in question have received nutrients (substrate) from transgenic plants, the additive is not identified as such. \n Not recommended in children and pregnant women. Our organism once metabolized transforms it into uric acid, which is deposited in the tissues and can cause gout (pain in the joints). In large doses can cause hyperactivity, asthma, skin reactions, insomnia, allergy and irritation of the mucous membranes. \n It is a commercially obtained nucleotide of Torula yeast cells. ',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 487,
    e_code: 'E635',
    title: 'Sodium ribonucleotides',
    info: 'Ribonucleotides are a mixture of guanylates and inosinates. \n Guanylates and inosinates are guanylic salts and inosinic acid. These natural acids can be produced using transgenic technologies. \n In small doses, no secondary effect was found. In large doses can cause: hyperactivity, irritation of mucous membranes, insomnia, allergies and is recommended to avoid in patients who have kidney diseases. \n The nucleotides are commercially obtained from Torula yeast cells.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 488,
    e_code: 'E636',
    title: 'Maltol',
    info: 'Natural maltol is found in the bark of young larches, pine needles, chicory and wood tars.    Maltol is produced by synthesis for use in perfumery and aromatic foods. \n In low doses no side effects have been found. But in large doses can cause benign abdominal pain. There are reports where there is a carcinogenic risk.',
    e_type: 'Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 489,
    e_code: 'E637',
    title: 'Ethyl Maltol',
    info: 'The ethyl maltol is derived from ethylenically Maltol (E636), being 6 times sweeter than maltol itself.    Natural maltol is found in the bark of young larches, pine needles, chicory and wood tars.    Maltol is produced by synthesis for use in perfumery and aromatic foods. \n   In low doses no side effects have been found. \n But in large doses can cause benign abdominal pain. \n There are reports where there is a carcinogenic risk. ',
    e_type: 'Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 490,
    e_code: 'E638',
    title: 'Sodium L-aspartate',
    info: 'Sodium aspartate is the sodium salt of aspartic acid, one of the 20 amino acids that make up proteins. It plays a role in the functions of the nervous system (neurotransmitter?) And the production and release of hormones Aspartic acid can be found naturally in certain vegetables, dried fruits, meats, sugar cane / sugar beets. \n It is also supplied in the form of dietary supplements, to be consumed in a controlled manner. \n Very little is known about this additive. Benign gastrointestinal side effects, including diarrhea, have been reported. \n Due to the lack of long-term studies, L-aspartate salts should be avoided in children, pregnant women and lactating women.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 491,
    e_code: 'E639',
    title: 'Alanine',
    info: 'Non-essential amino acid produced by muscle cells. Among other things, it is useful for the nervous system, immunity, energy and sugar metabolism. \n It is found mainly in meats and fish. To date, no side effects are known. \n This additive is also used in pharmaceutical and cosmetic products.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 492,
    e_code: 'E640',
    title: 'Glycine and its sodium salt ',
    info: 'Glycine is a non-essential amino acid found in many proteins and is abundant in gelatin (E428), sugar cane, peanuts, almonds, meat and fish. In particular, it plays a neurotransmitter role in the central nervous system. \n Discovered in 1820 by boiling gelatin and sulfuric acid (E513), the commercial production is synthetic and diversified. \n To date, no side effects are known.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 493,
    e_code: 'E641',
    title: 'Leucine',
    info: 'Leucine is an essential amino acid with a sweet taste found in wheat germs, potatoes, fish / tuna, meat and peanuts. \n The control of blood glucose is one of its many functions. It can be manufactured in various ways, including by isolation of gluten, casein or keratin (animal proteins), by hydrolysis of proteins (edestine, hemoglobin, zein) by bromination followed by amination of isocaproic acid from hydantoin. \n In low doses, no side effects have been found, but in large doses it can cause stomach upset, prevent the absorption of other amino acids and cause an increase in ammonia levels in the blood, which can be toxic to the liver and kidneys.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 494,
    e_code: 'E642',
    title: 'Lysin hydrochloride',
    info: 'Lysine is an essential amino acid. Commercial lysine is usually made by microbiological fermentation. \n There is also a synthetic process that combines chemical and microbiological techniques of caprolactam and L-ACL-hydrolase. No secondary effect was found. \n Since the chemical is an amino acid bound to hydrochloric acid, it is not toxic a priori. \n It is used in some pharmaceutical and cosmetic products.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 495,
    e_code: 'E650',
    title: 'Zinc acetate',
    info: 'Acetates are the salts of acetic acid E260, which are chemically bound to the latter with potassium, sodium, calcium, ammonia or zinc to form acetates. \n  Zinc acetate is generally reported without known danger, in the dosage of food. Some authors recommend caution.   \n It is used in chewing gum to freshen breath and fight bacterial plaque. It is also used as a dietary supplement, in cold packs and in the treatment of acne.',
    e_type: 'Flavour enhancer',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 496,
    e_code: 'E701',
    title: 'Tetracyclines',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 497,
    e_code: 'E702',
    title: 'Chlortetracycline',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 498,
    e_code: 'E703',
    title: 'Oxytetracycline',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 499,
    e_code: 'E704',
    title: 'Oleandomycin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 500,
    e_code: 'E705',
    title: 'Penicillin G potassium',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 501,
    e_code: 'E706',
    title: 'Penicillin G sodium',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 502,
    e_code: 'E707',
    title: 'Penicillin G procaine',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 503,
    e_code: 'E708',
    title: 'Penicillin G benzathine',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 504,
    e_code: 'E710',
    title: 'Spiramycins',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 505,
    e_code: 'E711',
    title: 'Virginiamycins',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 506,
    e_code: 'E712',
    title: 'Flavomycin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 507,
    e_code: 'E713',
    title: 'Tylosin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 508,
    e_code: 'E714',
    title: 'Monensin A',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 509,
    e_code: 'E715',
    title: 'Avoparcin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 510,
    e_code: 'E716',
    title: 'Salinomycin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 511,
    e_code: 'E717',
    title: 'Avilamycin',
    info: 'antibiotic',
    e_type: 'antibiotic',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 512,
    e_code: 'E900',
    title: 'Dimethyl-polysiloxane',
    info: 'It is obtained by hydrolysis and polycondensation of dichlorodimethylsilane and chlorotrimethylsilane. (It is used especially in breast implants). \n  It is divided into 2 classes: Polydimethylsiloxane and Polymethylphenylsiloxane. \n It is also used in treatment for hair and in pharmaceutic products.    \n In low doses no side effects have been found. But in large doses can cause kidney problems, liver and nervous system. \n There are reports where there is a carcinogenic risk.',
    e_type: 'Antifoam',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 513,
    e_code: 'E900A',
    title: 'Polydimethylsiloxane ',
    info: 'It is obtained by hydrolysis and polycondensation of dichlorodimethylsilane and chlorotrimethylsilane. (It is used especially in breast implants).  \n  It is also used in treatment for hair and in pharmaceutical products.\n  In low doses no side effects have been found. \n But in large doses can cause kidney problems, liver and nervous system. \n There are reports where there is a carcinogenic risk. ',
    e_type: 'Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 514,
    e_code: 'E900B',
    title: 'Methylphenylpolysiloxane',
    info: 'It is obtained by hydrolysis and polycondensation of dichlorodimethylsilane and chlorotrimethylsilane.  (It is used especially in breast implants).  \n It is also used in hair treatment and pharmaceutical products.  \n In low doses no side effects have been found. \n But in large doses can cause kidney problems, liver and nervous system. \n There are reports where there is a carcinogenic risk. ',
    e_type: 'Antifoam',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 515,
    e_code: 'E901',
    title: 'Beeswax',
    info: 'Natural polymer produced by bees.  Beeswax is the particular wax secreted by honey bees, which they use to build honeycombs. \n Beeswax can initially contain impurities because it has a strong affinity for industrial pollutants and pesticides.     \n It is divided into 2 classes: White Beeswax and Yellow Beeswax. \n In low doses, no side effects have been found.  \n But it must be said that in some cases this substance is not reabsorbed by the body, difficult to digest. \n And also the allergy is sometimes reported at the level of cosmetics with this substance. \n Acceptable daily intake is not determined.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 516,
    e_code: 'E902',
    title: 'Candelilla wax',
    info: 'Natural polymer produced from the Mexican trees Euphorbia antisyphilitica , E. cerifera and Pedilanthus pavonis . \n   The wax is extracted by treatment with sulfuric acid and, naturally, contains almost 50% of hydrocarbons. \n  Used as a coating and used in chewing gum. Also found in confectionary. \n  No side effects were found. ',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 517,
    e_code: 'E903',
    title: 'Carnauba wax',
    info: 'Carnauba wax comes from the leaves of a palm tree located partially in northeastern Brazil, Copernicia prunifera.  \n This wax is obtained by threshing the leaves, followed by refining and sometimes fading. \n  In low doses, no side effects have been found. But it must be said that in some cases it can cause small allergic reactions. \n Used as a coating and in chewing gum products. Also found in confectionary, coffee and bakery products. \n Carnauba wax is also widely used in cosmetics and can cause eczema.',
    e_type: 'Glazing agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 518,
    e_code: 'E904',
    title: 'Shellac',
    info: 'The Shellac is a lacquer that results from the secretion of an Asian cochineal, Kerria lacca. \n The resin obtained is yellow / red amber, generally supplied in the form of flakes that dissolve in 95 ° alcohol. \n The mixture obtained can be used in the manufacture of cabinets or in the manufacture of violins for varnishing wood.  \n Other applications are the food industry, pharmaceutical products, the manufacture of adhesives or inks. \n  It is divided into 2 classes: White Lacquer Gum and Orange Lacquer Gum.     \n No side effects have been found. But sometimes they are suspected to be allergenic. \n It has an allergenic potential by contact, with proven cases of allergic reactions when used as a cosmetic ingredient.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 519,
    e_code: 'E905',
    title: 'Paraffins',
    info: 'The paraffins are now obtained in oil refineries. They do not stick. They are not a binder, unlike beeswax (E901) and some vegetable waxes.    \n Microcrystalline wax is produced from waste when motor oils are conditioned. White, odorless wax is used as an ointment base or as a preservative for metal objects. \n No side effects have been found in low doses. But in some cases there may be some difficulty in the absorption of many nutrients, minerals and vitamins. \n Beware of pregnant women, it is better to avoid it. \n It is known that the additive contains traces of at least one polycyclic aromatic hydrocarbon (PAH), benzo (a) pyrene, which is very toxic.',
    e_type: 'Glazing agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 520,
    e_code: 'E905A',
    title: 'Mineral oil',
    info: 'A mineral oil is a mixture derived from the distillation of certain fossil fuels. It is obtained by distillation of coal, oil or certain oil shales and serves mainly as a lubricant for mechanical parts of machines and engines. \n Outside the U.E., it is sometimes used in the food industry, especially in confectionery. According to the US FDA UU (2015), the mineral oil that is eaten in or near meals interferes with the absorption of provitamin A and the fat-soluble vitamins A, D and K, and consequently with the use of calcium and phosphorus. \n The mineral oils of aromatic hydrocarbons can be mutagenic and carcinogenic. \n Daily intake: Up to 20 mg / kg of body weight.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 521,
    e_code: 'E905B',
    title: 'Petroleum jelly',
    info: 'Synthetic mixture of hydrocarbons used as coating, lubricant, solvent, Anti-foaming agent and in chewing gum. \n Vaseline, as paraffin, an oil distillate. Its composition depends on the source of the oil and the refining process. The highly refined categories are used in pharmacy and cosmetics. \n The less refined categories are used industrially and may contain impurities such as polycyclic aromatic carcinogens. A laxative effect is possible. \n It can irritate or interfere with digestion, inhibit the absorption of fats and fat-soluble vitamins. It can be dangerous in high doses. A contact allergy (dermatitis) is possible.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 522,
    e_code: 'E905C',
    title: 'Petroleum wax',
    info: 'The paraffins are now obtained in oil refineries. They do not stick. \n They are not a binder, unlike beeswax (E901) and some vegetable waxes.  Microcrystalline wax is produced from waste when motor oils are conditioned. \n White, odorless wax is used as an ointment base or as a preservative for metal objects. \n  No side effects have been found in low doses. But in some cases there may be some difficulty in the absorption of many nutrients, minerals and vitamins. \n Beware of pregnant women, it is better to avoid it. \n It is known that the additive contains traces of at least one polycyclic aromatic hydrocarbon (PAH), benzo (a) pyrene, which is very toxic.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 523,
    e_code: 'E905D',
    title: 'Mineral oil, high viscosity',
    info: 'A mineral oil is a mixture derived from the distillation of certain fossil fuels. \n It is obtained by distillation of coal, oil or certain oil shales and serves mainly as a lubricant for mechanical parts of machines and engines. Outside the U.E., it is sometimes used in the food industry, especially in confectionery. \n The mineral oils of aromatic hydrocarbons can be mutagenic and carcinogenic.  \n Daily intake: Up to 20 mg / kg of body weight.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 524,
    e_code: 'E905E',
    title: 'Mineral oil, medium and low viscosity',
    info: 'A mineral oil is a mixture derived from the distillation of certain fossil fuels. \n It is obtained by distillation of coal, oil or certain oil shales and serves mainly as a lubricant for mechanical parts of machines and engines. Outside the U.E., it is sometimes used in the food industry, especially in confectionery. \n The mineral oils of aromatic hydrocarbons can be mutagenic and carcinogenic.  \n Daily intake: Up to 20 mg / kg of body weight.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 525,
    e_code: 'E905F',
    title: 'Mineral oil, medium and low viscosity, class II',
    info: 'A mineral oil is a mixture derived from the distillation of certain fossil fuels. \n It is obtained by distillation of coal, oil or certain oil shales and serves mainly as a lubricant for mechanical parts of machines and engines. \n The mineral oils of aromatic hydrocarbons can be mutagenic and carcinogenic.  Daily intake: Up to 20 mg / kg of body weight.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 526,
    e_code: 'E905G',
    title: 'Mineral oil, medium and low viscosity, class III',
    info: 'A mineral oil is a mixture derived from the distillation of certain fossil fuels. \n It is obtained by distillation of coal, oil or certain oil shales and serves mainly as a lubricant for mechanical parts of machines and engines. \n The mineral oils of aromatic hydrocarbons can be mutagenic and carcinogenic.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 530,
    e_code: 'E906',
    title: 'Benzoin gum',
    info: 'Benzoin resin is a reddish brown solid with a vanilla odor, it is a balsamic resin obtained from the bark of several Styrax tree species. \n It is used in perfumes, certain types of incense and in medicine (see benzoin tincture). \n Its main component is often benzoic acid. No secondary effect was found. \n It is unlikely that the pure substance and / or its dye will cause irritation, allergy or contact dermatitis. \n It additive is rarely used as a food additive. It is used in cosmetics, perfumery and pharmaceuticals.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 531,
    e_code: 'E907',
    title: 'hydrogenated polydecene',
    info: 'It is obtained from oil. It is a mixture of hydrocarbons synthesized from pure 1-Decene.    \n Polydecene is also found in motor oils for automobiles, cosmetics, shampoos, lipsticks and some pharmaceutical products, such as skin care creams and anti-odor bars. \n This additive toxicity is high because in high doses can cause poor absorption of vitamins and minerals. \n It can cause hemorrhages in pregnant women. \n Recent WHO studies showed that traces of mineral oils were found in the liver and lymph.',
    e_type: 'Glazing agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 532,
    e_code: 'E908',
    title: 'Rice bran wax',
    info: 'Rice bran wax is a vegetable wax extracted from rice bran oil (Oryza sativa). \n Its main components are aliphatic acids (wax acids) and esters. Rice bran oil is obtained by making white or polished rice (which is actually the endosperm of Oryza sativa L., grass seed). \n A refined wax extracted from rice bran. The refining involves one or more chemical treatments and the consequent loss of nutritional intake. \n The use of solvents during the production process also implies the presence of residual traces generally toxic. \n Rice bran wax is found in a variety of uses such as paper coating, textiles, fruit and vegetable coatings, pharmaceuticals, chewing gum and cosmetics.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 533,
    e_code: 'E909',
    title: 'Spermaceti wax',
    info: 'The white of the whale is a white substance in the head of certain cetaceans, like the sperm whale. The corresponding organ is called the spermaceti organ. \n It is extracted from the spermaceti oil by crystallization during a pressure treatment and an alkaline chemical solution. \n Due to its properties, the target of the whale was very sought after for the realization of candles, soaps, cosmetics, lubricants or similar pharmaceutical excipients.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 534,
    e_code: 'E910',
    title: 'Wax esters',
    info: 'A naturally occuring sulphur containing amino acid, derived from cystine, that the body needs to produce Glutathione, one of the body\'s major antioxidants. \n Esters of a fatty acid and a long-chain alcohol. These oils have properties similar to those of triglycerides, but they are not digestible. \n They are found in some fish like the orange clock. \n Wax esters are also found in certain plants, especially in jojoba, and in some bacteria, such as certain Acinetobacter, in which they are used as energy reserves. \n  In compound form (E920 and E921) it is used in flour and bakery products (except wholemeal) where it is used as an improving agent and in chicken stock cubes where it is used as a flavour. \n Currently no side effects have been found. ',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 535,
    e_code: 'E911',
    title: 'Methyl esters of fatty acids',
    info: 'The methyl esters of the fatty acids are organic aliphatic esters prepared essentially by reaction of a carboxylic acid (derived from natural fats and oils) and methanol. \n They consist of fatty acids of animal or vegetable origin. \n They are used indirectly in a wide range of foods, pharmaceuticals, cosmetics and industrial applications, especially as diesel biofuels or biodiesel. \n No one has been able to participate at this time. It can be derived from vegetable oils such as rapeseed and, therefore, a transgenic biotechnology.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 536,
    e_code: 'E912',
    title: 'Montan wax',
    info: 'Esters of montanic acid (a saturated fatty acid) are derived from a chemical preparation of mountain wax, extracted by a solvent, found in lignite (brown coal). \n The esterification is carried out using ethylene glycol, 1,3-butanediol or triols. In 2013, given the limitations of toxicological data, the Scientific Committee of EFSA concluded that the additive could not be evaluated. \n Some sources report it as acceptable or without known side effects. But there are some sources that report it as an additive to avoid, suspected of being allergic and carcinogenic.',
    e_type: 'Coating for citrus fruits.',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 537,
    e_code: 'E913',
    title: 'Lanolin',
    info: 'A yellow fat secreted by the sebaceous glands of the sheep and extracted from their wool. \n Used as an emollient, cosmetic and pharmaceutical auxiliary. \n This complex mixture of esters of alcohols and fatty acids is chemically classified as wax and naturally serves as a waterproofing agent for wool animals. \n It is used as a glaze in some traditional sweets, and to give a bright coating to candies and chewing gum. It is also used to produce vitamin D3, natural cosmetics, balms, moisturizing ointments, emollient products, lipsticks, cocoa, lip repair and extra moisturizing creams. \n  Its toxicity is very low, although in some cases it can cause allergic reactions of small intensity. \n There is little information about its use in food.   ',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 538,
    e_code: 'E914',
    title: 'Oxidized polyethylene wax',
    info: 'Synthetic product of petrochemical origin. Polyethylene is a milky, firm and flexible translucent plastic prepared by the polymerization of liquid ethylene. \n Wash hands thoroughly after peeling the fruit treated with this additive. Poor absorption of vitamins and minerals. \n It can cause bleeding in pregnant women if large amounts are consumed. In 1991, studies by FAO and WHO showed that there were traces of mineral oils in the liver and lymph, and in 1995 this same Committee showed that certain lesions could be observed in rats as well as in humans due to residues of said oils The pure substance (powder form) shows some signs of carcinogenic activity in laboratory animals, but it is not classified as carcinogenic in humans.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 539,
    e_code: 'E915',
    title: 'Pentaerithrytol esters of colophane',
    info: 'Rosin is the solid residue obtained after the distillation of turpentine, oleoresin, a substance extracted from coniferous trees and, in particular, pine (genus Pinus). \n It is also used to give Citrus flavour. \n Colophony is an irritant and allergen for the skin (dermatitis) and respiratory tract (asthma), in pure form or by its degradation products, without the mechanisms of action are still well known. \n Pure rosin is dangerous by ingestion, it can be toxic to the lungs and skin.     \n The ester of rosin is used in the manufacture of beverages and chewing gum, in the coatings industry (manufacture of lacquers, paints, varnishes), pharmaceuticals (see rosin) and cosmetics.',
    e_type: 'Glazing agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 540,
    e_code: 'E916',
    title: 'Calcium iodate',
    info: 'Calcium salt of iodine acid, prepared by passing chlorine in a solution of hot lime containing dissolved iodine. \n Iodines are used particularly in medicine for iodine deficiency, the treatment of goiter and the protection of the thyroid in the radioactive perimeters. \n Possible nausea at therapeutic doses. \n To date, iodates are not listed as food additives (that is, with an \'E\' code) for the European Union. \n They are allowed in more specific food fields, such as mineral salts that are added to cereals and baby food.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 541,
    e_code: 'E917',
    title: 'Potassium iodate',
    info: 'Iodine as a pure substance is a powerful oxidizing agent, mainly poisoned by the GI tract and direct toxicity against the cells of the retina. \n May cause a fire in contact with flammable or even combustible materials. \n Iodine is used especially in medicines for iodine deficiency and the treatment of thyroid hyperplasia and the protection of the thyroid in radioactive oceans. Possible nausea at therapeutic doses. \n To date, iodine has not been included as a food additive of the European Union, but its use is permitted in more specific food areas, such as: mineral salts added to cereals and baby food.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 542,
    e_code: 'E918',
    title: 'Oxides of nitrogen',
    info: 'Nitric oxide can be manufactured industrially by passing air through an electric arc by oxidizing the ammonia to a platinum gauze. \n Nitrogen dioxide is produced by oxidation of nitric acid. Nitrogen oxides are proven pollutants, harmful both to the environment and to health. \n It has been reported that nitrogen dioxide as a pure substance, among other things, reacts with the blood and forms methemoglobin.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 543,
    e_code: 'E919',
    title: 'Nitrosyl chloride',
    info: 'Nitrosyl chloride is a yellow gas that is most often found as a decomposition product of aqua regia, a mixture of hydrochloric acid and nitric acid. \n It can be manufactured in various ways, including by the reaction of chlorine with sodium nitrate. \n Very toxic gas in its pure state. Pure nitrosyl chloride is a highly toxic and corrosive gas. Inhalation causes severe irritation of the respiratory tract and damages the mucous membranes.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 544,
    e_code: 'E920',
    title: 'Cysteine',
    info: 'Cysteine is an amino acid found in a wide variety of foods, especially cereals. It participates in the synthesis of melanin, which is the natural pigment of the skin and hair.  \n It can be obtained, among other things, by dissolving with hydrochloric acid feathers, pig hair or even human hair. This last mode of production is prohibited today.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 545,
    e_code: 'E921',
    title: 'Cystine (L-) and its hydrochlorides – sodium and potassium salts',
    info: 'Cysteine is an amino acid found in a wide variety of foods, especially cereals. It participates in the synthesis of melanin, which is the natural pigment of the skin and hair.  \n  It can be obtained, among other things, by dissolving with hydrochloric acid feathers, pig hair or even human hair. This last mode of production is prohibited today. \n  It is a bread enhancer and stabilises the structure of leavened bread. \n Acceptable daily intake is not determined.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 546,
    e_code: 'E922',
    title: 'Potassium persulfate',
    info: 'Potassium persulfate is a potassium salt of peroxydisulfuric acid. The latter is an oxo acid of sulfur, a strong oxidant that is used, among other things, in certain metal pickling. \n Pure potassium persulfate is classified as harmful and dangerous. \n If ingested it is irritating to the eyes, the skin and the respiratory tract, it is a sensitizer, its combustion can produce corrosive and toxic gases, while the waste can contaminate the environment.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 547,
    e_code: 'E923',
    title: 'Ammonium persulfate',
    info: 'Ammonium salt of peroxydisulfuric acid (or Marshall acid). \n The latter is an oxo acid of sulfur (a compound containing sulfur, oxygen and hydrogen), it is in its pure state a strong oxidant that is used, among other things, in certain metal pickling. \n Ammonium is naturally present in our body as a waste of metabolism, comes from the breakdown of proteins and is essentially produced by the intestine, kidneys and muscles (depleted by stress) to be eliminated by the liver. \n It is a compound additive that is very harmful to humans. \n Pure ammonium persulfate is a compound that is harmful by ingestion and is very destructive to mucous membranes, is not stable with water and is incompatible with organic matter.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 548,
    e_code: 'E924',
    title: 'Potassium bromate',
    info: 'improving agent',
    e_type: 'improving agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 549,
    e_code: 'E924A',
    title: 'Potassium bromate',
    info: 'Potassium salt of bromic acid, a synthetic compound that can be produced by passing bromine to a solution of potassium hydroxide.     \n A pure substance is recognized as toxic by ingestion, inhalation or contact. In particular, it is incompatible with organic matter. It is very dangerous for the human. \n There are official reports that it can be carcinogenic to humans. It is not advisable to avoid this additive.  \n Potassium bromate is also a cosmetic component (used as neutralizers or oxidants in hair curling preparations) and is also used as an industrial cleanser.',
    e_type: 'Flour treatment agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 550,
    e_code: 'E924B',
    title: 'Calcium bromate',
    info: 'Calcium salt of bromic acid, a synthetic compound that can be produced by passing bromine to a solution of calcium hydroxide. \n  A pure substance is recognized as toxic by ingestion, inhalation or contact. In particular, it is incompatible with organic matter. It is very dangerous for the human. \n There are official reports that it can be carcinogenic to humans. \n Calcium bromate is also a cosmetic component (used as neutralizers or oxidants in hair curling preparations) and is also used as an industrial cleanser.',
    e_type: 'Flour treatment agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 552,
    e_code: 'E925',
    title: 'Chlorine',
    info: 'Chlorine as a single substance is a gas with a stifling odor that is very unpleasant and extremely toxic. \n In nature, chlorine is found only in combination with other elements, particularly sodium chloride (table salt), in this form it is necessary for many life forms.  \n Its use for the disinfection of drinking water or pools generates dangerous products for our health.  \n  It is used as a flour treatment (bleaching) agent.  It is also used for pharmaceuticals, cosmetics, the production of antiseptics, dyes, insecticides, paints and others.',
    e_type: 'Flour treatment agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 553,
    e_code: 'E926',
    title: 'Chlorine dioxide',
    info: 'Obtained from chlorine and sodium chlorite. \n Chlorine dioxide is prepared synthetically, it is a reddish yellow gas. It is relatively stable in its gaseous and liquid state. In practice, it is never used in pure form. \n It is known that the pure substance is very toxic by ingestion, inhalation and contact, is particularly incompatible with organic matter and forms hydrogen chloride with water. \n It is used as a flour treatment (bleaching) agent.   It is also used for pharmaceuticals, cosmetics, the production of antiseptics, dyes, insecticides, paints and others.',
    e_type: 'Flour treatment agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 554,
    e_code: 'E927A',
    title: 'Azodicarbonamide',
    info: 'Obtained from carbonamide. The raw materials used or used in the production are sodium hydroxide, sulfuric acid (E513), hydrogen peroxide, urea (E927b), chlorine (E925), hydrazinium. \n Sodium hypochlorite (bleach), sodium chlorate, chromic acid, nitrogen dioxide (E918) and biurea.  \n Chemically, pure azodicarbonamide is harmful and can act as a respiratory and cutaneous sensitizer, acute effects are a possibility of gastrointestinal disorders. \n  Azodicarbonamide is bound to urea, the main waste excreted in the urine.  \n It is used in flour with low gluten content to condition and strengthen the dough. And it is also used to whiten flour.',
    e_type: 'Flour treatment agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 555,
    e_code: 'E927B',
    title: 'Urea (Carbamide)',
    info: 'Obtained from ammonia and carbon dioxide. Used as nutrient in fermented products. \n . According to the JECFA informed by the WHO, the use at levels of up to 3% in chewing gum (only foods allowed to date, undated) is not a cause for concern. \n It is known that the pure substance causes acute effects (ingestion) nausea, vomiting, abdominal pain, diuretic effect and sore throat. \n Data among other mutagens, reprotoxic and tumorigenic reported by the American RTECS. \n Some other users: pharmaceutical products, cosmetics, ruminants of reproduction (urea as a nutritional additive in the diet, some sectors of differentiated quality prohibit their use), teeth whitening (carbamide peroxide).',
    e_type: 'Flour treatment agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 558,
    e_code: 'E928',
    title: 'Benzoyl peroxide',
    info: 'Obtained from benzoylchloride and sodium peroxide. \n  This product explodes in the dry state with shock, friction or high temperature. \n It is known that the pure substance is very dangerous by ingestion (acute or chronic effects). It is also very reactive and oxidizing, it is an explosive when it is not diluted. \n It is used for pharmaceutical products (including anti-acne with possible side effects), cosmetics as an active ingredient in teeth whitening systems, hair dyes and others',
    e_type: 'Flour bleaching agent',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 559,
    e_code: 'E929',
    title: 'Acetone peroxide',
    info: 'Acetone peroxide is a primary explosive discovered in 1895 by Richard Wolffenstein. \n It is a family of unstable molecules that consist of cyclic organic peroxides. \n More often it is in the form of a white crystalline powder. It has a characteristic pungent smell. \n Pure acetone peroxide is a compound known to be very unstable and explosive. \n It is made of hydrogen peroxide and acetone, two chemicals that are questionable or harmful by ingestion.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 560,
    e_code: 'E930',
    title: 'Calcium peroxide',
    info: 'Calcium peroxide dissolves in acids to form hydrogen peroxide. \n Bread enhancer and bleaching agent for flour but practically not used. \n Pure calcium peroxide is a strong oxidizing agent with acute effects and is corrosive and very dangerous by ingestion, inhalation and contact. \n The users of calcium peroxide are cosmetics, agriculture, aquaculture and soil restoration and others.',
    e_type: 'Flour bleaching agent',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 561,
    e_code: 'E938',
    title: 'Argon',
    info: 'Natural inert gas and propellant. Found in Canned products. \n Argon is a rare, colorless, tasteless and odorless gas that constitutes 0.9% of the air we breathe in the earth, it is used as a propellant (in aerosols) and gas for packaging.    Its non-reactive nature makes it compatible with food products. \n Products without oxygen are protected against oxidation damage and are also protected against the invasion of bacteria and fungi. \n Obtained commercially by distillation of liquid air. \n No side effects were found.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 562,
    e_code: 'E939',
    title: 'Helium',
    info: 'Natural inert gas and propellant.  Helium is a gas. \n It is used as a propellant and as a stabilizer for packaged products. \n Including products sensitive to air or oxygen, such as dairy products. \n Like other noble gases, helium is extremely stable and does not easily form compounds with other elements.  \n Helium, which is neutral under standard conditions, is non-toxic, has no biological role and is found in minute quantities in human blood.  \n For large-scale use, helium is extracted by fractional distillation of natural gas, which can contain up to 7%.  \n No side effects have been found. In large quantities it causes the voice to become sharper for a few seconds.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 563,
    e_code: 'E940',
    title: 'Dichlorodifluormethane',
    info: 'The dichlorodifluoromethane E940 is listed as gaz propellant. \n It is used as an additive for food and cosmetics. \n Dichlorodifluoromethane is also sold under the name Freon-12 or R12 according to the list of fluorinated and refrigerant gases, it is a chlorofluorocarbon dangerous to the ozone layer and is used as a propellant in aerosols until its manufacture was banned in 1995. \n This is a greenhouse gas used as a propellant in aerosols. \n According to the consulted sources, the additive E940 can be reported as toxic, it is not particularly good for human health but there are few risks in low doses, on the other hand, in large doses it can be carcinogenic.',
    e_type: 'Propellant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 564,
    e_code: 'E941',
    title: 'Nitrogen',
    info: 'Natural inert gas and propellant. Nitrogen is a gas.  It is used as a propellant and as a stabilizer for packaged products. \n It is also used as a freezing agent, especially in some kitchens they use it for desserts (such as to aerate some creams or mousses in order to give it more creaminess). \n No side effects have been found.',
    e_type: 'Stabiliser',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 565,
    e_code: 'E942',
    title: 'Nitrous oxide',
    info: 'Natural inert gas and propellant. Natural greenhouse gas, manufactured chemically from ammonium nitrate. \n Also called nitrous oxide, it is classified as a pollutant by the Kyoto Protocol. \n Sometimes it is reported to be toxic, but it is considered safe if it is used only as a propellant in the diet and not in high doses. \n Its use is not recommended during the first trimester of pregnancy. \n Nitrous oxide is also found in: pharmaceuticals (general anesthesia) and cosmetics (propellant).',
    e_type: 'Antioxidant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 566,
    e_code: 'E943A',
    title: 'Butane ',
    info: 'Butane is obtained from petroleum fractions by pressure distillation of G.P.L (liquefied petroleum gases). \n It is also a component of lit cigarettes. Butane is used or intended to be used to displace or suppress oxygen in the processing, storage or packaging of beverage products and other foods, with the exception of fresh meat. \n It is a propeller in pastry pumps made of vegetable oil. No side effects known to date in the use of food. \n There are carcinogenic effects in laboratory animals. In high doses, pure butane is potentially narcotic. Butane E 943a contains very small and harmful residual amounts: methane and butadiene (a known carcinogen).',
    e_type: 'Propellant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 567,
    e_code: 'E943B',
    title: 'Isobutane ',
    info: 'The hydrocarbon is found as a gas under normal conditions of temperature and pressure. \n The main source of isobutane is the refining of crude oil by catalytic or reformed cracking and natural gas fields. \n Very flammable It can ignite in the presence of static electricity. It is particularly a propeller in vegetable oil-based pastry pumps. \n This gas is odorless and colorless and the odor is so strong that the cylinders are added later for greater safety in the event of a gas leak. \n It is used as fuel, solvent, coolant and food additive. \n It is used in aerosols such as oil sprays, butter, cream and other products.',
    e_type: 'Propellant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 570,
    e_code: 'E944',
    title: 'Propane',
    info: 'Gas derived from other petroleum products by thermochemical processes of gas or oil. \n It is commonly used as a source of chemical energy by combustion in internal combustion engines, barbecues and boilers. \n It is used as fuel, solvent, coolant and food additive. \n It is used, among other things, for vegetable oils and aqueous emulsions to spray. \n It is also used as a propellant in cosmetics, pharmaceuticals, as well as fuel or fuel.',
    e_type: 'Propellant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 571,
    e_code: 'E945',
    title: 'Chloropentafluorethane',
    info: 'Chloropentafluoroethane is a chlorofluorocarbon (CFC) used as a refrigerant. It is a transparent, colorless gas with an ethereal smell. \n Vapors may cause dizziness or suffocation without warning. \n Contact with this gas or liquefied gas can cause burns, serious injury and / or freezing.  \n It is prohibited by the Montreal Protocol because of its potential to destroy ozone. This prohibition does not affect industrial foods and certain medical applications.',
    e_type: 'Propellant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 572,
    e_code: 'E946',
    title: 'Octafluorcyclobutane',
    info: 'Transparent, colorless gas with an ethereal (weak) odor. Octafluorocyclobutane vapors may cause dizziness or suffocation without warning. \n Fire can produce irritating, corrosive and / or toxic gases. \n  In animals, the acute effects of this pure gas by inhalation are: possibility of cardiac arrhythmia, possibility of bronchoconstriction.',
    e_type: 'Propellant ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 573,
    e_code: 'E948',
    title: 'Oxygen',
    info: 'Natural gas. Oxygen, commonly known as oxygen, is a transparent, colorless, odorless, tasteless and non-flammable gas. It is obtained by distillation of the air. \n It is used in aerosols such as oil sprays, butter, cream and other products. It is also used for packaging. \n \n Acceptable daily intake is not determined.',
    e_type: 'Propellant',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 574,
    e_code: 'E949',
    title: 'Hydrogen',
    info: 'Natural gas. Hydrogen, commonly known as hydrogen, is a colorless and odorless natural gas, very abundant, present in water and all organic components. \n It is obtained by natural gas catalysis. It is the most abundant element in the universe. \n It is used in aerosols such as oil sprays, butter, cream and other products. It is also used for packaging.',
    e_type: 'Packaging gas',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 575,
    e_code: 'E950',
    title: 'Acesulfame potassium',
    info: 'This additive is approximately 200 times sweeter than sugar, stable to heat. \n As it has a bitter taste, it is usually combined with other sweeteners such as Aspartame and Sucralose. \n\n According to a 2005 study tested in mice, it is interpreted that consumed in the long term could be carcinogenic (with higher incidence of cancer in males) and be linked to neurological problems, hyperglycemia and insulin secretion. ',
    e_type: 'Flavour enhancer',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 576,
    e_code: 'E951',
    title: 'Aspartame',
    info: 'Intense sweeteners, such as aspartame, acesulfame K and saccharin, provide virtually no calories and are mainly used in diet products.. Synthetic low calorie sweetener. \n There are reports that show that there are more common side effects such as weight deregulation, the formation of different forms of cancer and the effect on the brain. ',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 577,
    e_code: 'E952',
    title: 'Cyclamates',
    info: 'It is obtained by a reaction of Cyclohexylamine with Sulfamic Acid or Sulfur Trioxide. \n This additive is a synthetic low calorie sweetener. It is up to 40 times sweeter than ordinary sugar, but at the same time it is the artificial sweetener with less sweetness.  It is divided into 3 classes: Cyclamic Acid, Sodium Cyclamate and Calcium Cyclamate. \n After several investigations, this additive is considered very toxic and could cause cancer if its consumption is not controlled. \n It is advisable to avoid this additive.',
    e_type: 'Sweetener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 578,
    e_code: 'E953',
    title: 'Isomalt ',
    info: ' Discovered in the 1960s, isomalt is made from sucrose and looks much like table sugar. It is white, crystalline and odourless. \n Products made with isomalt have the same texture and appearance as those made with sugar. Because the same amount of isomalt is used in products as would be used if they were sweetened with sugar, isomalt containing products have the same appearance and texture as those made with sugar. \n Found in boiled sweets, toffee, lollipops, fudge, wafers, cough drops, throat lozenges, and a wide variety of other products. \n No side effects have been found. But in large doses can cause flatulations and diarrhea, like many other sugar alcohols.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 579,
    e_code: 'E954',
    title: 'Saccharins ',
    info: 'This artificial sweetening additive can be produced from toluene (methylbenzene), anthranilic acid (successive reaction with nitrous acid, sulfur dioxide, chlorine and ammonia). \n Carcinogenic effects have been observed in guinea pigs. Subsequently, additional studies under the pressure of the food industry led to the elimination of this warning. \n In low doses can present great risks of allergies. In large doses it causes bladder cancer in rats. \n This product contains saccharin, which causes cancer in laboratory animals.',
    e_type: 'Sweetener ',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 580,
    e_code: 'E955',
    title: 'Sucralose',
    info: 'Synthetic low calorie sweetener. It is up to 600 times sweeter than sugar. \n In large doses causes the destruction of the immune system affecting mainly the liver and kidneys. \n There are many studies that show that it can cause severe DNA damage. ',
    e_type: 'Sweetener ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 581,
    e_code: 'E956',
    title: 'Alitame',
    info: 'Synthetic low calorie sweetener. It is up to 2000 times sweeter than sugar. \n No side effects have been found at the moment. But it is an additive that does not have much information about its toxicity in humans.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 582,
    e_code: 'E957',
    title: 'Thaumatin',
    info: 'Sweetener 1600 to 3000 times sweeter than natural sugar. Thaumatin is a sugar protein, traditionally derived from the fruit of the African tropical plant \\"katemfe\\". \n Its flavor is persistent, with a slight liqueur taste and its properties are used to modify flavors and not exclusively as a sweetener. \n Thaumatin, consumed in high doses, seems to have mild laxative effects and cause mild abdominal pain, but the doses that should be ingested to know these drawbacks are extremely important.',
    e_type: 'Sweetener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 583,
    e_code: 'E958',
    title: 'Glycyrrhizin ',
    info: 'Natural sweetener. It is derived from the licorice root. It has an aniseed and bittersweet flavor. \n It is used as a substitute for sugar because it does not produce caries and is suitable for diabetics. \n In high doses, glycyrrhizin may aggravate hypertension, water retention, hypokalemia (low potassium level) and other possible symptoms.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 584,
    e_code: 'E959',
    title: 'Neohesperidine dihydrochalcone',
    info: 'Artificial  sweeter than sugar from grapefruit seed.  \n Synthetic sweetener and flavor enhancer. It is obtained by synthesis of a substance called \'neohesperidin\' present in bitter oranges. \n It is usually used together with other sweeteners. It is up to 1800 times sweeter than normal sugar. Its flavor is persistent, with a slight licorice taste and is used to mask bitter flavors. \n NHDC is often presented as not dangerous. But in large doses it causes nausea and migraines.',
    e_type: 'Sweetener ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 585,
    e_code: 'E960',
    title: 'Steviol glycosides',
    info: 'A natural sweetener extracted from the Stevia plant, 200 to 300 times sweeter than sucrose. \n The additive is obtained from the leaves of Stevia rebaudiana Bertoni. \n The leaves are extracted with hot water and the aqueous extract is passed through an adsorption resin to trap and concentrate the components of the steviol glycoside. \n Some studies indicate that it could have long-term negative effects. ',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 586,
    e_code: 'E961',
    title: 'Neotame ',
    info: 'Synthetic low calorie sweetener and flavor enhancer. \n It is obtained by chemical reaction of Aspartame with dimethylbutyl (dimethyl butyraldehyde), a compound that reduces the amount of phenylalanine and thus eliminates the obligation to include warnings about the risks of consumption of phenylalanine in the labeling of products. \n It is up to 13,000 times sweeter than sugar. This additive is considered toxic and perhaps worse than aspartame, it is better to avoid it.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 587,
    e_code: 'E962',
    title: 'Aspartame-acesulfame',
    info: 'This additive is manufactured by the mixture of aspartame E951 and acesulfame E950. It is up to 350 times sweeter than sugar. \n It is used in general in many products labeled as \'sugar free\', \'0% sugar\', \'light\', \'zero\', \'zero\' and \'low in calories\'. \n An additive to avoid is classified as a carcinogen by the association for therapeutic research against cancer.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 588,
    e_code: 'E963',
    title: 'Tagatose',
    info: 'It is found naturally in dairy products, cocoa and some fruits, although it is usually obtained industrially derived from lactose, from which galactose is extracted in turn and reacted with enzymes of the fungus. \n No side effects have been found. Do not abuse, in large doses can cause diarrhea, nausea or flatulence.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 589,
    e_code: 'E964',
    title: 'Polyglycitol syrup',
    info: 'The polyglycitol syrup belongs to hydrogenated starch hydrolyzate syrups consisting of maltitol (E965), sorbitol (E420) and higher molecular weight polyols. \n No side effects have been found. Although disturbing results have been observed in rats, man would only be concerned about a possible laxative effect or gastric disorders.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 590,
    e_code: 'E965',
    title: 'Maltitols',
    info: 'Humectant, artificial sweetener base, bulking agent, base for essences. Starch decomposed with digestive enzymes. \n Synthetic low calorie sweetener and support for additives. It is obtained from the sugars of malt. It is 25% less sweet than normal sugar. \n It is marketed under the brands Amalty, Lesys, Maltisweet and SweetPearl. It is divided into two types of classes: Maltitol and Maltitol Syrup.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 591,
    e_code: 'E966',
    title: 'Lactitol',
    info: 'Lactitol is a sugar alcohol (polyol) and is derived chemically from milk, specifically lactose, the sugar in milk. \n Its sweetness is approximately 50% less sweet than natural sugar. \n For the final product to be quite sweet, lactitol is often combined with the sweeteners aspartame (E 951) and acefulsame-K (E 950). \n In small doses it can be laxative, cause diarrhea, flatulence and cramps. \n In large doses can cause colic. It should be avoided in children under 3 years.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 592,
    e_code: 'E967',
    title: 'Xylitol ',
    info: 'A natural carbohydrate alcohol, present in many plants. \n It is commercially produced from xylan, a polysaccharide fraction of wood pulp.\n A Low-calorie sweetener found in many bakery and confectionery products. \n Acceptable Daily Intake is not defined. Xylitol is partly absorbed and metabolised as sugar by the body; the remaining fraction is fermented in the large intestine. During fermentation, gases are produced, which may cause bloating and flatulence. \n  Side effects normally occur after an intake of 25-30 grams in a single dose, which is far above the usage in normal foods. The term carbohydrate alcohol is a chemical definition; xylitol does not contain alcohol (ethanol).',
    e_type: 'Sweetener',
    halal_status: 'Halal',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 593,
    e_code: 'E968',
    title: 'Erythritol ',
    info: 'Present naturally in some fruits, vegetables and fermented foods, but the industrial production of erythritol is obtained by fermenting the flour (wheat and / or corn) and could be derived from GMOs. \n Fermentation and due to the hydrolyzed enzyme and to an osmophilic yeast. The sweetening power of erythritol is 60 to 80% of the sugar. \n No side effects have been found. In large doses it can have a laxative effect. ',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 594,
    e_code: 'E969',
    title: 'Advantame',
    info: 'Synthetic low calorie sweetener. It is obtained by combination of Aspartame and Vanillin. \n Its flavor is up to 37,000 times sweeter than normal sugar. It is used to increase the flavor duration of chewing gum, to improve artificial substitutes with flavors of fruits, citrus and mint, and to reduce the high calorie content of some foods. \n In large doses it can have a laxative effect and cause diarrhea.',
    e_type: 'Sweetener',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  },
  {
    id: 595,
    e_code: 'E999',
    title: 'Quillaia extracts',
    info: 'It is obtained from a South American tree. It is often used in supplements and slimming pills to satisfy hunger. \n Some reports say it is harmless while others consider it toxic to the blood and that it can cause intestinal inflammation. ',
    e_type: 'Emulsifier ',
    halal_status: 'Doubtful',
    risk_factor: null,
    countries_banned: null
  }
]

module.exports = footData;
