const trou1 = [
    "___ : le meilleur remède contre la gueule de bois",
    "Le 8e jour, Dieu créa ___ et il vit que cela était bon",
    "Vous n'avez pas, M. Mitterand, le monopole de ___",
    "Les premiers rayons de soleil, le pollen dans l'air, l'amour, ___, le printemps quoi",
    "Homme 45 ans, célibataire, bonne situation, cherche ___",
    "___, j'y pense tous les matins en me rasant",
    "Pour le service réclamations, tapez 1, pour ___ tapez 2, sinon veuillez patienter",
    "Si t'es pas chaud tant pis, n'empêche que ___ normalement çà ne se refuse pas",
    "Pour moi les années 90 c'est avant tout ___",
    "Pour égayer la vie d'un enfant aveugle, donne-lui ___",
    "___, pour moi, c'est une belle métaphore du quinquennat de François Hollande",
    "Plus que le mariage, ce qui a scellé notre union c'est ___",
    "3 trucs qui remontent le moral et c'est physiologique, c'est le chocolat, le soleil et ___",
    "Malheureusement, avec votre apport initial, tout ce que notre banque peut vous proposer aujourd'hui c'est ___",
    "Ce qui m'a permis de résister toutes ces années en prison, c'est ___",
    "En 3 je mets le travail, en 2 la famille et en 1 ___",
    "Le sujet de ma thèse de doctorat, ___, a été étonnamment mal reçu par le jury",
    "Entre ___ et une vie de famille, il faut choisir !",
    "il ya deux manières de sauver la France de la faillite, une grande réforme fiscale et ___",
    "Changer une vitre c'est comme ___ : tu le feras aussi bien tout seul et çà te coûtera moins cher",
    "Afin d'apaiser les tensions interconfessionnelles dans le pays, le pape a prononcé un discours intitulé ___",
    "Mon investissement au Secours Catholique ? Je fais pas çà pour l'argent, je fais pas çà pour la gloire mais pour ___",
    "Le seul truc qui m'embête vraiment avec la mondialisation, c'est ___",
    "Mon dernier post Facebook est un selfie de moi avec ___, j'ai eu 27 like",
    "___, quand je te vois faire, je me dis que c'est un art",
    "'Pour Grand Maître Jedi devenir, ___ tu feras'",
    "A quelques encablures du ventre historique et loin de la cohue touristique, suivez le sentier côtier 5 minutes et venez admirer ___",
    "Un truc sympa, simple et romantique pour le soir de la Saint-Valentin, c'est ___",
    "___, çà c'est tellement ton père",
    "Afin de pimenter notre vie de couple après 35 ans de mariage, nous pratiquons ___",
    "800g de viande hachée, 3 jaunes d'oeufs, des câpres, de la sauce worcester et ___ : là on tient un bon tartare",
    "___ çà m'a pris 2 minutes et encore je me suis pas pressé",
    "___ c'est un concept... On pourrait essayer",
    "Rater la naissance de son fils pour ___, à la rigueur, ça peut se comprendre",
    "C'est quoi déjà ton truc qui marche bien contre les maux de gorge",
    "Père Noël, pour Noël je voudrais ___",
    "La fin justifie ___",
    "___, c'est un détail à l'échelle de l'humanité",
    "___ ?? Avec ça, les videurs te laisseront jamais rentrer",
    "200 m2 orienté plein sud, calme, haut standing, et le petit plus est à la cave : ___",
    "___, c'est le prix à payer pour la paix dans le monde",
    "Pour me détendre le dimanche en fin d'après-midi, avant de reprendre le boulot, rien de tel que ___",
    "Oui ! Avec le Pack Sérénité votre logement est même assuré contre ___",
    "Au fond, ce qui manquait le plus à Auschwitz, c'était ___",
    "___ : challenge accepted !",
    "'Je suis Monsieur Marc, vous notez : M comme une Maison, A comme un Arbre, R comme Romeo, C comme ___'",
    "La vraie raison de mes premiers cheveux blancs, c'est ___",
    "J'ai peut-être pas d'amis, pas de copine et pas de boulot, mais j'ai ___",
    "Jusqu'à ce qu'elle évoque ___, on passait presque un bon moment avec ma belle-mère",
    "___, c'est un luxe en période de crise",
    "___, c'est comme les mauvaises herbes : il faut traiter le problème à la racine",
    "___, YOLO",
    "___ fait indéniablement partie de la culture française",
    "___, c'est comme une bonne guerre, ça forge la jeunesse",
    "Oui mon enfant, Dieu pardonne tout, même ___",
    "Quand j'ai rencontré ta mère, ça a tout de suite été ___",
    "Aujourd'hui ___, #VDM",
    "___, c'est en quelque sorte ma madeleine de Proust",
    "___ a marqué à coup sûr le premier jour du reste de ma vie",
    "___ : l'essayer c'est l'adopter",
    "Papa, c'est quoi ___ ?",
    "Bon vent ! Mais fais attention à toi, ___ est si vite arrivé",
    "Chez nous, ___ se transmet de père en fils depuis des générations",
    "J'ai commencé ___ quand j'avais 7 ans et demi, j'aurais peut-être dû attendre mes 9 ans",
    "Le meilleur moyen aujourd'hui pour lutter contre la surnatalité en Afrique, c'est ___",
    "Les belles histoires commencent toujours par ___",
    "Quand une réunion client s'annonce mal, je ramène ___, en général ça détend l'atmosphère",
    "___, c'est la faute à pas-de-chance",
    "___, ça aurait dû se jouer à pile ou face",
    "___, le film",
    "J'ai une technique simple pour réveiller en douceur un nouveau-né : ___",
    "___, c'est comme pour tout, il y a la théorie, et la pratique",
    "___, un travail bâclé",
    "Ce qui distingue l'homme de l'animal à mon sens, c'est ___",
    "J'ai toujours donné des petits noms à mes sextoys, celui-là s'appelle ___",
    "A Abidjan, pour 1 euro tu peux avoir ___",
    "___, c'est tout le bonheur que je te souhaite, ma fille",
    "Le premier soir je me suis donc endormi sur le sable à mille milles de toute terre habitée. J'étais bien plus isolé qu'un naufragé sur un radeau au milieu de l'océan. Alors vous imaginez ma surprise, au lever du jour, quand une drôle de petite voix m'a réveillé. Elle disait : 's'il vous plaît... dessine moi ___'",
    "C'est pas ce que je voulais dire, ___, ce sont des propos sortis de leur contexte",
    "___, un mal pour un bien",
    "une GoPro c'est un peu gadget, mais c'est vrai que pour ___, ça peut se justifier",
    "___ : je m'en souviens pas. J'étais bourré",
    "Un truc à faire une fois dans sa vie, c'est ___... Mais seulement une fois",
    "Petit SMS pour vous souhaiter beaucoup de bonheur et ___ pour cette nouvelle année",
    "___, La Mecque n'était peut-être pas l'endroit le plus indiqué, tu y avais pensé ?",
    "Le péché mignon de Grand-Père, c'est ___, c'est pour ça qu'on le trouve tous trop cool !",
    "C'est quoi ton parfum ? ___ de Guerlain",
    "La gauche va pousser le thème du dialogue social, il faut absolument recentrer le débat sur ___",
    "C'est quoi ton mot de passe ? ___ tout attaché",
    "Vous allez me traiter de petite nature, mais ___ il y a un quart d'heure ça m'a coupé l'appétit",
    "___, ça n'existe pas, c'est des fables, des balivernes",
    "Sans ___, la fête est moins folle",
    "Notre devis comprend aussi la livraison à votre domicile, un an d'assurance et ___ pour le client fidèle que vous êtes",
    "L'acupuncture n'a pas marché, l'hypnose et l'homéopathie non plus, alors ils ont tenté ___",
    "Bon... ___, on l'a tous fait un jour ou l'autre",
    "Contre toute attente, Martine et ___ a été l'opus le moins vendu de la série",
    "On a d'abord cru à un canular mais AQMI a bel et bien exigé ___ pour la libération des 3 otages",
    "Tiens, Roger, tu nous remettras ___",
    "Amen, je vous le dis, celui qui croit en moi aura ___",
    "J'ai 45 minutes de métro le matin pour aller au boulot, ça me laisse du temps pour ___",
    "___, c'est le premier truc à larguer dans une montgolfière qui perd de l'altitude",
    "Si j'habitais en Californie, la chose qui me manquerait le plus de France, c'est ___",
    "J'aime le papier à bulles, l'odeur de la colle et ___",
    "Petit on n'avait besoin de rien, on pouvait jouer une journée entière avec ___",
    "___, mes beaux-parents dominent allègrement le classement, et de loin",
    "___, je nie pas les faits, je dis juste qu'ils sont exagérés",
    "Avant que je lise son testament, la dernière intention de votre père a été que je vous montre ___",
    "Ça en a le goût, ça en a la texture, la couleur, mais ce n'est pas ___",
    "Un tournevis, tu as ? Non. Alors passe moi ___",
    "Il y aura une baby-sitter pour le mariage? Non mais on a quand même prévu, on a ___",
    "Promis, à partir du 1er janvier, j'arrête ___"   
];

const trou2 = [
    "___, c'est ___",
    "___ : gros effort, petit résultat ; alors que ___ : petit effort, gros résultat",
    "Pour réussir ___ il te manque ___",
    "___ poil au nez, ___ poil au bras",
    "Si on se penche sur les statistiques, ___ et ___ sont étroitement corrélés",
    "Tu préfères ___ ou bien ___ ?",
    "Comparer ___ et ___, ce n'est rendre justice ni à l'un ni à l'autre",
    "___ et ___... Ou comment allier l'utile à l'agréable",
    "Si tu plaides coupable pour ___, tu peux t'en tirer avec ___",
    "Un apéro sans pastis, et pourquoi pas ___ sans ___ tant qu'on y est ?",
    "___ : Bien .... ___ : Pas bien",
    "A 75 ans, il y a 2 choses que tu regrettes : ___ et surtout ___",
    "___ un problème, ___ la solution",
    "___ c'est bien, ___ c'est mieux",
    "___ : le rêve, ___ : la réalité",
    "___ ne tue pas mais ___ si",
    "Luc Besson se demande comment intégrer ___ et ___ à son adaptation de la vie de Saint-Paul"
];

const trou3 = [
    "Vous avez aimé ___, vous aimez ___, vous allez aimer ___",
    "Alors ce weekend ? Bah comme d'hab : vendredi soir ___, samedi ___ et donc dimanche matin ___",
    "___ ça passe, ___ ça encore aussi why not, mais ___ là je dis stop",
    "Tu mets ___, puis ___, tu mélanges et abracadabra : ___"
];

const reponse = [
    "allumer le feu",
    "le slip kangourou",
    "enfiler sa burka",
    "un boxer porté 8 jours de suite",
    "la tante à Robert",
    "Vivel Dop Fixation Béton",
    "Magic System",
    "un plan-cul fiable",
    "se faire gauler en matant un porno",
    "un pet humide juste ce qu'il faut",
    "Christine Boutin",
    "une crise hémorroïdaire",
    "la République Démocratique du Congo",
    "Maubeuge",
    "reste sous la couette",
    "100 ml de laxatif",
    "un magret de canard/Nutella/cornichons/mascarpone",
    "un sorbet au foutre",
    "la ceinture de chasteté",
    "le coup de grâce",
    "un sextoys pour chien",
    "une blague bien misogyne comme on les aime",
    "tirer une taffe après 6 mois sans clope",
    "larguer par texto",
    "Dachau",
    "mes poignées d'amour",
    "le trafic d'organes",
    "apprendre qu'on est cocu sur Closer",
    "la paix dans le monde",
    "30 ans de gonzo",
    "un papillon tatoué dans le bas du dos",
    "les lourdeurs administratives",
    "le cumul des mandats",
    "voter utile",
    "une plâtrée de choux de Bruxelles",
    "une femme fontaine",
    "aller voir chez les Grecs si j'y suis",
    "sortir du placard",
    "une lapidation en bonne et due forme",
    "flamby",
    "une banane pour Taubira",
    "une fille qui fait plus que ses 15 ans",
    "échanger des banalités",
    "le problème de l'amiante dans le couloir de la mort",
    "pardonner à moitié",
    "ouvrir un compte en Suisse",
    "prendre possession du podium",
    "ta soeur qui est aussi ta mère",
    "sortir l'artillerie lourde",
    "la France de Vichy",
    "le beurre et l'argent du beurre",
    "pinailler sur le nombre de victimes de la Shoah",
    "amputer les mendiants pour qu'ils rapportent plus",
    "vouloir le meilleur pour son chien",
    "les fautes de goût",
    "un CAP coiffure",
    "la conduite en état d'ivresse",
    "un pantalon coupé 'poutre-apparente'",
    "les femmes au volant",
    "l'Amicale des Anciens Khmers Rouges",
    "100 balles et 1 Mars",
    "la mauvaise foi",
    "les pédés",
    "la misère",
    "la première bière du vendredi soir",
    "laisser 10 centimes de pourboire",
    "la franche camaraderie des tranchées",
    "se torcher avec la Convention de Genève",
    "le savoir-être marseillais",
    "les femmes",
    "charrier un videur",
    "la vin en cubi",
    "un pet de fouffe",
    "enculer les mouches",
    "Work Hard - Play hard",
    "la sodomie pour les Nuls",
    "le plombier polonais",
    "www.impots.gouv.fr",
    "mettre le feu à une garderie",
    "Youporn comme page d'accueil",
    "aller aux putes",
    "l'Algérie française",
    "les habitants d'Evreux",
    "une orgie de frères bénédictins",
    "serrer les fesses",
    "un Paki avec un bouquet de roses",
    "un promotion canapé",
    "la Gray Pride",
    "le cassoulet William Saurin",
    "Être en coloc avec Papa",
    "les problèmes de riches",
    "1 litre et demi de purin",
    "aménager un espace pour les roux",
    "marcher pieds nus dans une salle de shoot",
    "une démocratie à l'africaine",
    "un noir, une pute, un belge et un homo",
    "la certification ISO 9001",
    "envoyer 'Amour' au 8 200 200",
    "les bonnes manières",
    "la queue chez Pôle Emploi",
    "offrir une 8.6 à un SDF",
    "refuser un test de paternité",
    "des fleurs sur la tombe de Pétain",
    "une bonne vieille branlette",
    "un PSG/OM avec des pizzas et des bières",
    "l'abstinence",
    "les fausses résolutions du 31 décembre",
    "le connard qui ne récure jamais les chiottes",
    "une pastille de Viagra",
    "le sexe punitif",
    "la consanguinité",
    "Ma Benz' volume max",
    "le concile Vatican 3",
    "le FN",
    "égorger le mouton dans la baignoire",
    "parler la bouche pleine",
    "mettre de la moquette au mur",
    "éviter de manger trop gras, trop salé, trop sucré",
    "le string qui dépasse",
    "une faciale",
    "traiter les femmes avec respect",
    "la langue de bois",
    "Europe Écologie les Verts",
    "l'acharnement thérapeutique",
    "tenir la chandelle",
    "réformer en France",
    "avoir une bouteille de Pétrus et pas de tire-bouchon",
    "le dernier jour du condamné",
    "trouver la fréquence des baby-phones du quartier",
    "le Zyklon B",
    "faire croire qu'on est gay pour pouvoir toucher",
    "la monogamie",
    "la légitime défense",
    "un test de grossesse",
    "chier vert",
    "la levrette avec un chapeau de cowboy",
    "les punks à chien",
    "le Carlton de Lille",
    "se taper la nounou",
    "les filles de l'Est",
    "des menottes et un leg-in en latex",
    "un crédit conso",
    "le rétablissement de la peine de mort",
    "un lieu pour se recueillir",
    "violer une chèvre",
    "l'adoption par les couples zoophiles",
    "mettre un aileron sur une Fiat Punto",
    "un SMS qui dit qu'on arrive dans 15 minutes alors que pas du tout",
    "un zizi-oreille au petit matin",
    "la Macarena",
    "Céline Dion",
    "un couscous aux lardons",
    "les boulettes de viande Ikea",
    "une vie de petit bourgeois",
    "paumer son alliance en teuf",
    "acheter une perruque",
    "ta maman",
    "la gangrène généralisée",
    "une petite pièce, une cigarette ou ticket restaurant",
    "la vague Bleu Marine",
    "les goudous",
    "la Manif Pour Tous",
    "une blague raciste qui tombe au mauvais moment",
    "les bienfaits de la colonisation",
    "licencier une mère célibataire",
    "les blancs",
    "jouir ou mourir",
    "trois doigts dans le cul",
    "un canard en plastique jaune",
    "une belle paire de nibards",
    "un plan à trois",
    "le passage de la cocaïne au crack",
    "un poire à lavement",
    "la double pénétration",
    "des ladyboys séropositifs",
    "les petites lèvres",
    "le subjonctif imparfait",
    "un doliprane",
    "la Françafrique",
    "Kärcher à volonté",
    "aller promener le chien",
    "les caves de Sarcelles",
    "un diabolo grenadine",
    "se curer le nez",
    "vomir des spaghetti",
    "rater l'apéro",
    "l'historique de mes 1000 dernières navigations Internet, le vrai",
    "le caca mou du lendemain de soirée",
    "un ver solitaire",
    "être en galère de PQ",
    "en avoir plein le cul",
    "un pyjama rayé avec une étoile ",
    "tendre la joue gauche",
    "la France d'en bas",
    "une raison de continuer à y croire",
    "débrancher Mamie",
    "les rudiments de l'hygiène corporelle",
    "ma chatte bien sûr",
    "battre sa femme",
    "l'égalité homme-femme",
    "le colonel Moutarde dans la cuisine",
    "le petit Grégory",
    "proposer une clope à un dauphin",
    "Fort Boyard",
    "une pinte de glaire",
    "l'amant de ma femme",
    "être puceau à 40 ans",
    "un doigt dans le cul",
    "le point G",
    "éjaculer après 47 secondes",
    "un bout de salade coincé entre les dents",
    "les francs-maçons",
    "un mâle reproducteur",
    "la culpabilité du lendemain",
    "acheter les alliances chez Tati Or",
    "une thèse sur les modèles prédictifs de la susceptibilité des cellules souches pluripotentes",
    "l'immunité parlementaire",
    "une épisiotomie sans péridurale",
    "Al Qaïda",
    "manger la couenne",
    "je t'aime, moi non plus",
    "le botox",
    "jouer au docteur",
    "une pipe au miel",
    "la Renault Espace",
    "le racisme anti-blanc",
    "la gauche caviar",
    "commencer avec le doigt, finir avec le bras",
    "la collaboration",
    "bourrer les urnes",
    "72 vierges, comme promis",
    "le concours national du lancer de nain",
    "un conflit multipolarisé d'envergure internationale",
    "21 cm de bonheur",
    "le verre de trop",
    "la réunionite",
    "la mort du petit Aylan",
    "des chaussettes Mickey",
    "l'inspection des travaux finis",
    "le quinquennat de François Hollande",
    "Yabon Banania",
    "avoir une mi-molle",
    "appeler un chat un chat",
    "du chocolat pour attirer les enfants",
    "un coup de genou là où ça fait mal",
    "le minimum syndical",
    "les machettes au Rwanda",
    "les roms",
    "les 'thaïlandaises'",
    "Bond, James Bond",
    "3 petits pschitts de Febreze",
    "la beauf attitude",
    "le gaz moutarde",
    "la charia",
    "mettre bébé dans la cave",
    "la démobilisation des électeurs",
    "une étagère Billy",
    "marcher pieds nus sur un Lego",
    "un costume 3 pièces Kiabi",
    "faire une fausse promesse de don au Téléthon",
    "la pétanque",
    "voler les caisses de Médecins Sans Frontières",
    "le droit de chacun à posséder une Rolex",
    "Ebola",
    "1 kg d'amiante",
    "l'odeur du chemisier de Grand-Mère",
    "une chambre à l'heure",
    "annexer la Wallonie",
    "prendre le deuxième Big Mac à 1 euro",
    "viser les pastilles de chlore bleues quand on pisse",
    "un gros paquet",
    "les années 80",
    "Blanc-Manger-Coco",
    "une thérapie de couple",
    "Monseigneur André Vingt-Trois",
    "le passage du salaire brut au net",
    "une grossesse prématurée",
    "jouer au triangle dans un orchestre",
    "faire un geste pour la planète",
    "la purée blanche sous le prépuce",
    "la traditionnelle gaule matinale",
    "investir dans une particule",
    "prendre un enfant par la main",
    "deux doigt dans le cul",
    "un toucher rectal",
    "une pause gourmande",
    "se triturer le gland",
    "dire 'je t'aime' sans vraiment le penser",
    "coucher le premier soir",
    "un cintre à défaut de pilule abortive",
    "boire des bières et fumer des clopes",
    "un cancer de la prostate",
    "faire la une de FHM",
    "une bouteille de pastis et un Justin Bridou à partager",
    "une cuillère tordue, un briquet et une seringue",
    "faire une croix sur les caresses et les préliminaires",
    "la propension naturelle des femmes à s'occuper des enfants et du foyer",
    "le caviar Beluga",
    "Marc Dutroux",
    "Guillaume Musso",
    "la perte des eaux",
    "changer de femme pour monter en gamme", 
    "être une bête de sexe",
    "le grand théorème de Fermat",
    "la droite décomplexée",
    "les doigts qui collent",
    "l'industrie de l'armement",
    "la famille et les amis",
    "Jacquie et Michel",
    "enterrer une pute dans un désert",
    "l'acnée juvénile",
    "la pilule du lendemain",
    "le cannabis thérapeutique",
    "Ségolène, Valérie et Julie",
    "la morosité ambiante",
    "les populations métissés",
    "10 astuces de grand-mère pour tomber enceinte",
    "l'extrême onction",
    "la roulette russe",
    "un bébé contre le sein de sa mère",
    "l'autotouchage",
    "quitter Neuilly",
    "payer pour voir des films porno en 2016",
    "le remix techno de la BO de Pirates des Caraïbes",
    "un pitbull dans un jardin d'enfant",
    "faire un trou dans sa poche pour se masturber en public",
    "une soutane et rien dessous",
    "tirer la langue avant d'avaler",
    "les arabes",
    "l'euthanise systématique à 75 ans",
    "Saga Africa, ambiance de la brousse",
    "louer un poney",
    "l'odeur de la clope froide",
    "être gardien au handball",
    "respecter les quotas",
    "le gars qui crie POOOPOLOPOPOPO POOOO à Roland Garros",
    "un poireau sur la joue",
    "les maximes de la Rochefoucauld",
    "la Malaysia Airlines",
    "Candy Crush",
    "7 ans sans sexe",
    "la sélection naturelle des espèces",
    "un abonnement à Famille Chrétienne",
    "la France",
    "Lucy l'Australopithèque",
    "le sourire honnête et franc de mon banquier",
    "mes vacances à St Barth'",
    "un poster Playboy au dessus de mon lit",
    "la discrimination positive",
    "l'intégrale de Katsuni",
    "le troussage de domestique",
    "le coït",
    "Dodo la Saumure",
    "être VIP au Macumba",
    "un oeil pour un oeil",
    "l'envie de pisser",
    "chier et pisser en même temps",
    "secouer la petite goutte",
    "la traite des noirs",
    "Marion Maréchal-Le Pen",
    "une bonne grosse teuf", 
    "le journal du hard",
    "croire au Père Noël",
    "une gourmette en argent", 
    "le chantage sexuel",
    "le best-of des chansons paillardes",
    "avaler l'éthylotest",
    "un viol collectif", 
    "l'orgasme total", 
    "aller aux prud'hommes",
    "péter sur le mec qui refuse de se lever de son strapontin",
    "la quenelle",
    "faire l'amour et garder ses chaussettes",
    "les alcooliques dépressifs atteints de paralysie faciale", 
    "rédiger des scripts pour mendiants", 
    "une perfusion de sang contaminé",
    "un désacord sur la notion de consentement", 
    "une entorse au protocole",
    "les énarques", 
    "prendre l'hélico avec Balavoine et Florence Arthaud", 
    "l'esprit Daech",
    "Francky Vincent", 
    "un frigo vide",
    "Émile Louis",
    "une erreur de diagnostic au centre anti-VIH",
    "la ménopause",
    "titiller la prostate",
    "le génocide arménien",
    "sniper la dernière famille de pandas sur Terre",
    "la gueule de bois", 
    "Patrick Sébastien", 
    "le tic-tac de l'horloge biologique",
    "un concours de T-shirts mouillés", 
    "ce je-ne-sais-quoi des Ch'tis",
    "les noirs", 
    "les juifs", 
    "l'huile de foie de morue", 
    "manger 5 fruits et légumes par jour",
    "un chiotte à la turque et rien pour s'essuyer",
    "une AK-47",
    "la ligue des éjaculateurs précoces",
    "un cul pas plus large que ça", 
    "un déni de grossesse",
    "un rhube",
    "embrasser la plus belle fille du lycée",
    "les fesses potelées",
    "le sperme qui colle sur la baignoire",
    "le bonnet rouge du commandant Cousteau",
    "un sandwich triangle sur une aire d'autoroute",
    "ma bite",
    "la sauce samouraï",
    "un Notre-Père et dix Je-vous-salue-Marie",
    "un cercueil en kit",
    "1 milliard d'euros",
    "un sauna gay",
    "faire la queue chez Burger King",
    "Joseph Goebbels", 
    "le droit de cuissage",
    "le Costa Concordia", 
    "les femmes qui font le poirier après l'amour",
    "les prêtres pédophiles",
    "un Tampax imbibé de Vodka",
    "relire Mein Kampf", 
    "une place handicapé",
    "les grands donateurs de la banque du sperme", 
    "un Français bien de chez nous",
    "les promesses électorales", 
    "s'en foutre plein les fouilles",
    "passer une soirée en boîte en note de frais",
    "la mentalité parisienne",
    "Zlatan",
    "la grasse matinée",
    "une histoire d'amour avec une curé de 62 ans",
    "un dîner chez la belle famille",
    "Perdre 1,2 kg quand on en pèse 123",
    "les cotisations URSSAF et la CSG",
    "la jurisprudence Nafissatou Diallo",
    "Soweto",
    "les envies de femme enceinte",
    "une fausse couche",
    "Vladimir Poutine",
    "une maison avec jardin à Melun, une Opel Vectra et un labrador",
    "les activités extra-conjugales",
    "une piqûre de testostérone",
    "le gras du bide",
    "l'aide alimentaire pour la Somalie",
    "la mise en place d'une organisation tayloriste",
    "un samedi soir devant le plus grand cabaret du monde",
    "un bébé qui flotte dans un étang",
    "la gastronomie allemande",
    "le port du voile intégral",
    "le syndrome de Stockholm",
    "dépuceler sans ménagement ni tendresse",
    "une crampe au poignet",
    "un 18 trous",
    "Hiroshima"
];