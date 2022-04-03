import React, { useState } from "react";
import classes from "./Main.module.css";
import CharacterList from "./CharacterList";
import CharacterFilter from "./CharacterFilter";

const Main = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [factionFilter, setFactionFitler] = useState("All");

  const characters = [
    {
      id: "C1",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spiderman_3a64e546.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://upload.wikimedia.org/wikipedia/ms/e/e8/Amazingspiderman50.jpg",
      alias: "Spider-Man",
      about:
        "The bite from a radioactive spider granted Peter Parker amazing arachnid-like powers. After losing his beloved Uncle Ben to a burglar, grief- stricken Peter vowed to use his incredible abilities to protect his city as the Amazing Spider-Man. Peter’s trials taught him an invaluable lesson: with great power, there must also come great responsibility.",
      abilities: [
        'Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-shooters allowing him to fire and swing from sticky webs, special "Spider-Sense" warns of incoming danger, genius intellect specializing in chemistry and invention.',
      ],
      gender: "Male",
      faction: "Hero",
    },
    {
      id: "C2",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-kidarachnid_a2279414.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://marvelplotpoints.files.wordpress.com/2014/12/miles_morales_ultimate_spider-man_vol_1_1_staples_variant_textless.jpg",
      alias: "Kid Arachnid",
      about:
        "Hailing from an alternate world in which Peter Parker sacrificed his life to protect the city, Miles Morales inherited the mantle (and powers) of Spider-Man when he was similarly bitten by a genetically altered spider. Though his predecessor's tragic departure left a pair of heroically large shoes to fill, Morales is up to the task, knowing that with great power there must also come great responsibility.",
      abilities: [
        "Superhuman strength, agility, and endurance",
        "Ability to stick to and climb walls and other surfaces",
        "Uses a pair of web-shooters similar to the ones worn by Peter Parker",
        'Special "Spider-Sense" warns of immediate danger',
        "Can camouflage himself and his clothing, blending in with surroundings and becoming nearly invisible",
        "Discharges a powerful electrical Venom Strike, capable of paralyzing most foes with a mere touch.",
      ],
      gender: "gender",
      faction: "Hero",
    },
    {
      id: "C3",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spidergwen_6a5c4db0.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:911/q:75/https://bleedingcool.com/wp-content/uploads/2017/07/Spider-Gwen.jpg",
      alias: "Ghost-Spider",
      about:
        'In an alternate universe, a twist of fate caused Midtown High student Gwen Stacy to receive the bite of a radioactive spider instead of Peter Parker, granting her amazing arachnid-like abilities. Dubbed Spider-Woman by the media, Stacy donned a unique costume and endeavored to exploit her newfound talents for personal gain and attention. However, when Parker, desperate to be "special" like his new idol Spider-Woman, died in a tragic lab experiment gone wrong, Stacy learned that with great power there must also come great responsibility. Now she uses her powers to protect the innocent, balancing her life as Spider-Woman with the challenges of teenage life.',
      abilities: [
        "Superhuman strength, agility, and endurance",
        "Ability to stick to and climb walls and other surfaces",
        'Special "Spider-Sense" warns of incoming danger',
        "Uses mechanical web-shooters, allowing her to fire and swing from sticky webs.",
      ],
      gender: "Female",
      faction: "Hero",
    },
    {
      id: "C4",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spidergirl_64d1f345.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b87c7415-5e1b-412c-94e8-9f1f245659cd/d330k72-907e0a17-d9ce-4e68-9210-a21a2981adfb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4N2M3NDE1LTVlMWItNDEyYy05NGU4LTlmMWYyNDU2NTljZFwvZDMzMGs3Mi05MDdlMGExNy1kOWNlLTRlNjgtOTIxMC1hMjFhMjk4MWFkZmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Nk-AJ--0OLCBZhJK8WBbD2UaDVST1B_FTPjhE0J1M8w",
      alias: "Spider-Girl",
      about:
        "Teenager Anya Corazon was granted amazing spider-like powers after a freak accident. Deciding to use her newfound abilities to help protect the city, she joins the growing community of arachnid-based heroes as the new Spider-Girl.",
      abilities: [
        "Superhuman strength, agility, and endurance; Ability to stick to and climb walls and other surfaces",
        'Special "Spider-Sense" warns of incoming danger',
        "Uses mechanical web-shooters, allowing her to fire and swing from sticky webs.",
      ],
      gender: "Female",
      faction: "Hero",
    },
    {
      id: "C5",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-symbiotesuit_1c7c3869.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cae0799-7cba-4d0e-8a7d-394c85cb0f9f/deeiahb-af68cd30-7540-4a63-b524-0ec906ab231f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2NhZTA3OTktN2NiYS00ZDBlLThhN2QtMzk0Yzg1Y2IwZjlmXC9kZWVpYWhiLWFmNjhjZDMwLTc1NDAtNGE2My1iNTI0LTBlYzkwNmFiMjMxZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.IPjhEQP0bw2_dnLmCpOz4Y77KBpWX7G9B84oIkdA930",
      alias: "Spider-Man Symbiote Suit",
      about:
        "When Spider-Man first donned this slick black suit of unknown origin, he couldn't believe his luck. The new costume not only enhanced his already tremendous spider-strength, it could actually reshape itself based on his mental commands, mimicking civilian clothing and providing an unlimited source of webbing. He soon discovered the chilling truth, however: the costume was in fact a living entity, which wished to permanently bond with and take over his body! Spider-Man quickly shed the symbiotic being, though it would later return in the form of one of his most dangerous foes - Venom!",
      abilities: [
        "When bonded to a host, the symbiote grants its wearer massive superhuman strength, agility and durability",
        "Amorphous form allows the symbiote to take a variety of shapes, extrude tendrils, mimic clothing and otherwise camouflage itself",
        "Can create and project a web-like fluid from its own substance.",
      ],
      gender: "Male",
      faction: "Hero",
    },
    {
      id: "C6",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-protosuit_4bc54164.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/originals/f5/84/41/f58441fbd0d8c09a34191535521dd8ab.jpg",
      alias: "Spider-Man Proto Suit",
      about:
        "During the early days when Peter Parker pledged his life to becoming the heroic Spider-Man, he knew a costume would be key to his new persona. Scraping together a design from what garments and gear he could muster, Parker ventured forth as Spider-Man for the first time in this functional, if not entirely fashionable, proto-suit.",
      abilities: [
        'Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-shooters allowing him to fire and swing from sticky webs, special "Spider-Sense" warns of incoming danger, genius intellect specializing in chemistry and invention.',
      ],
      gender: "Male",
      faction: "Hero",
    },
    {
      id: "C7",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-spider-man2099_71d54ee9.jpeg?region=0%2C0%2C300%2C300",
      image_url_full: "https://cdn.wallpapersafari.com/36/52/lZQLjo.png",
      alias: "Spider-Man 2099",
      about:
        "In an alternate future in which the corrupt Alchemax corporation took over New York City, the brilliant geneticist Miguel O'Hara, inspired by the surviving records of the legendary Spider-Man, sought to create a similarly powered individual. Though his work was initially imperfect, an attempt at sabotaging O'Hara's experiments left him on the receiving end of fantastic spider powers. With a futuristic costume equipped with high-tech gear, O'Hara set out to undo the damage done to the world by Alchemax, becoming a new Spider-Man for the year 2099.",
      abilities: [
        "Superhuman strength, agility, and endurance",
        "Sharp talons on his hands and feet can be used both offensively and to climb walls",
        "Enhanced hearing and vision",
        "Organic web-spinners in each wrist allow him to create and fire his own webbing",
        "Suit contains a variety of futuristic features, including highly increased durability, holographic camouflage and an advanced artificial intelligence.",
      ],
      gender: "Male",
      faction: "Hero",
    },
    {
      id: "C8",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-ironspider_dfc395ac.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://static.wikia.nocookie.net/b89c641a-9091-4868-aeb5-181e19a2819e",
      alias: "Iron Spider",
      about:
        "Iron Spider, AKA Amadeus Cho, is a teenaged super-genius. At only 13 years old, he's already the 7th most intelligent person in the world. A fellow student and academic rival of Peter Parker at Midtown High, Amadeus “borrows” the Iron Spider armor after Peter brings it to school as a last-minute science fair project. With the armor now on a semi-permanent loan, he fights alongside Spider-Man as the new Iron Spider. As Iron Spider, Amadeus brings both strength and smarts to any fight. With his incredible intellect, he’s always looking for a high-tech solution to any problem, although his inquisitive nature can sometimes cause more problems than it solves.",
      abilities: [
        "Enhanced strength",
        "Enchanced agility",
        "Mechanical spider arms",
        "Repulsor Webbing",
        "Repulsor Rays",
        "Recharge Systems",
        "Digital Senses",
        "Flight",
        "Transforming Backpack",
      ],
      gender: "Male",
      faction: "Hero",
    },
    {
      id: "C9",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-venom_891c191c.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/550x/8c/15/e5/8c15e5e5095770a0b8bff63922921473.jpg",
      alias: "Venom",
      about:
        "Grown from the combined hatred of Eddie Brock and Spider-Man's old alien costume, the vicious ... and viscous ... super-brute known as Venom possesses all of Spider-Man's powers and even greater strength. Undetectable to the web-heads “Spider-Sense,” Venom has proven to be Spider-Man's fiercest opponent!",
      abilities: [
        "When bonded to a host, the symbiote grants its wearer massive superhuman strength, agility and durability",
        "Amorphous form allows the symbiote to take a variety of shapes, extrude tendrils, mimic clothing and otherwise camouflage itself",
        "Can create and project a web-like fluid from its own substance.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C10",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-carnage_5150f94d.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/550x/c9/6b/ef/c96bef7d9ed21e40ca9866afcf64c398.jpg",
      alias: "Carnage",
      about:
        "Created from the alien being known as Venom, the Carnage symbiote is an amorphous life form that can bond with a host, granting it superhuman powers. In a twist of fate that would spell disaster for innocents around the world, the Carnage symbiote encountered and bonded with Cletus Kasady, an unstable and dangerous criminal. With the symbiote's strength and Kasady's ferocity, Carnage became a threat unlike any other, kept in check only by heroes like the Amazing Spider-Man.",
      abilities: [
        "When bonded to a host, the symbiote grants its wearer massive superhuman strength, agility and durability",
        "Amorphous form allows the symbiote to take a variety of shapes, extrude tendrils, mimic clothing and otherwise camouflage itself",
        "Can create and project a web-like fluid from its own substance.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C11",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-goblin_a3bcf783.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://pm1.narvii.com/6651/af7e6e09c0f4b1c20d44420c4a9f0934e6ac5776_hq.jpg",
      alias: "Green Goblin",
      about:
        "A laboratory accident involving an experimental formula granted Norman Osborn superhuman strength, a heightened intellect and an accelerated healing factor. That same accident also robbed him of his sanity and turned him into Spider-Man's greatest enemy, the Green Goblin!",
      abilities: [
        "Superhuman strength, stamina, durability and agility; Genius intellect with advanced understanding of various scientific fields, including chemistry, engineering, and genetics",
        "Utilizes a variety of goblin-themed weaponry including explosive pumpkin bombs, a high-speed glider equipped with various armaments, razor-sharp batwing throwing projectiles and gloves capable of discharging and powerful electric blasts.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C12",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-lizard_5c0066a6.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://media.comicbook.com/wp-content/uploads/2012/05/AmazingSpiderMan_688_CampbellVariant.jpg",
      alias: "Lizard",
      about:
        "An untested formula made from reptilian DNA re-grew Dr. Curt Connors’ lost arm, but the mixture proved too powerful, and transformed Connors into the savage Lizard! Lizard possesses a primitive intellect and a thick alligator-like hide, along with a 6.5 foot tail capable of whipping at speeds in excess of 70 mph.",
      abilities: [
        "Superhuman strength, stamina, agility and durability",
        "Highly resistant to conventional injury due to his thick, scaly hide",
        "Can inflict grave injuries using his savage teeth, claws and whip-like tail",
        "Can mentally communicate with and control nearby reptiles",
        "As a human, possesses advanced scientific understanding of genetics, biochemistry, surgery and herpetology.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C13",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-electro_2a30b5b4.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://64.media.tumblr.com/ef3338ab52bf20e387801e01afec7413/tumblr_inline_pljhdp93641qbv7u8_1280.jpg",
      alias: "Electro",
      about:
        "While working on an overhead power line, disgruntled Max Dillon was struck by lightning from a rolling thunderstorm. The resulting electrical shock imbued Dillon with the power to store and discharge vast amounts of electricity. Trading his blue-collar existence for a colorful costume, Dillon gives the world of crime a jolt as the high-voltage villain Electro!",
      abilities: [
        "Lightning Bolt Projection",
        "Electromagnetic Propulsion via Electrical Lines and Bridges",
        "Electrical Detection",
        "Electrocution",
        "Recharging",
        "Electrical Conversion into Enhanced Physical Attributions",
        "Metal Ionization",
        "Immunity to Electricity",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C14",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-doctoroctopus_2b014e4e.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/originals/46/d5/54/46d55422df7b96aa936478e9730fac31.jpg",
      alias: "Doctor Octopus",
      about:
        "Dr. Octopus controls four Adamantium tentacles via a permanently attached harness that encircles his lower chest and waist. Each telescoping limb can move at speeds of 90 feet per second and can strike with the force of a jackhammer. Driven mad by power, the once brilliant Dr. Octopus wants nothing more than to use his tentacles to crush his most hated enemy, the Amazing Spider-Man!",
      abilities: [
        "Can mentally control the four mechanical arms fused to his torso. Each arm is incredibly durable, can extend to multiple times its length and is capable of lifting several tons. The reaction time and agility of these tentacles is superhumanly fast and precise",
        "One of the world`s foremost geniuses in multiple scientific fields, including physics, invention, engineering, and radiation.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C15",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-kraven_70474b65.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/originals/b7/25/5d/b7255d33e6d077c8985f9f2054ccad5f.jpg",
      alias: "Kraven the Hunter",
      about:
        "Former Russian noble Sergei Kravinoff came to America for one reason: to hunt Spider-Man, the ultimate prey. Kraven the Hunter's initial pursuit gave way to a years-long battle between the two, and Kraven's repeated failures have slowly driven him to the brink of insanity.",
      abilities: [
        "Experienced Combatant",
        "Weapon Specialist",
        "Expert Marksman",
        "Master Tactician and Strategist",
        "Master Hunter and Tracker",
        "Medical Knowledge",
        "Master Animal Tamer",
        "Minor Occult Knowledge",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C16",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-rhino_b5de6cb6.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/originals/a7/15/b8/a715b8790b84938982d92d9a893b0ba3.jpg",
      alias: "Rhino",
      about:
        "Low-level thug Aleksei Sytsevich underwent a series of chemical and radiation treatments that endowed him with superhuman strength and a nearly invulnerable exoskeleton. As the Rhino, Sytsevich (aka Alex O'Hirn) uses his own body as a powerful concussive missile often with brutal results!",
      abilities: [
        "Massive superhuman strength and stamina",
        "Possesses a thick, rhino-hide-like polymer suit covering his entire body, providing extreme durability. The head of the suit is outfitted with horns capable of puncturing solid steel.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C17",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-scorpion_9967b86b.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/8064265-7120710-rco020_1571878687.jpg",
      alias: "Scorpion",
      about:
        "Always seeking to discredit the masked menace Spider-Man, Daily Bugle publisher J. Jonah Jameson paid to have Mac Gargan transformed by science. Though the process cost Gargan his sanity, it equipped him with a menacing mechanical tail, which he uses to terrorize the city as Scorpion!",
      abilities: [
        "Scorpion/Human Hybrid Physiology",
        "Superhuman Strength",
        "Superhuman Speed",
        "Superhuman Stamina",
        "Superhuman Durability",
        "Superhuman Agility",
        "Superhuman Reflexes",
        "Wall Crawling",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C18",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-sandman_e6020098.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://i.pinimg.com/564x/c9/84/6f/c9846f60422d3774ab88b4f85597ec95.jpg",
      alias: "Sandman",
      about:
        "Bombarded with a massive dose of radiation from an experimental reactor, low-level mob henchman William Baker discovered that he could transform himself into a sand-like form that he could manipulate and reshape at will. Eager to use his new powers to better his station in life, Baker embarked on a life of daring robberies as Sandman!",
      abilities: [
        "Sand Body",
        "Sand Control Transferral",
        "Immortality",
        "Self-Sustenance",
        "Body Conversion-Sand",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C19",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-mysterio_4d75e822.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://thicc.mywaifulist.moe/waifus/22417/274cf7dea8da6d98d93e251b9c412da4d8c99d22aa64840fff0a94f20488a890_thumb.jpeg",
      alias: "Mysterio",
      about:
        "Stunt Man. Hypnotist. Illusionist. Former special effects wizard Quentin Beck is master of the unreal, able to conjure beguiling and psychedelic scenarios using the holographic technology in his costume. These tricks are great assets in his ostentatious life of crime and in Mysterio's mad quest to confound Spider-Man!",
      abilities: ["VFX Artist", "Psychiatry", "Hypnotist"],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C20",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-blackcat_3eeb89c2.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "http://pm1.narvii.com/6309/45cbfcd7ead08294a3a6653873482bd07d7c2e75_00.jpg",
      alias: "Black Cat",
      about:
        "Reformed cat burglar Felicia Hardy relies solely on her athletic acumen and fighting skills in the fight against injustice. In her case, the superstition is true: it's very bad luck to cross paths with Black Cat!",
      abilities: [
        "Tychokinesis",
        "Claws",
        "Expert Thief",
        "Olympic Level Athlete",
        "Skilled Martial Artist",
      ],
      gender: "Female",
      faction: "Villain",
    },
    {
      id: "C21",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-vulture_84cd11d8.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://64.media.tumblr.com/d680ea7cbb8f33249574b9dc40fad274/tumblr_inline_pigcnny7lM1qbv7u8_1280.jpg",
      alias: "Vulture",
      about:
        "A brilliant and embittered engineer, Adrian Toomes invented an electromagnetic harness that would grant its wearer the power of flight and augment his physical strength. Toomes was instantly intoxicated with the power at his disposal and became determined to make a name for himself as The Vulture!",
      abilities: [
        "Wears a one-of-a-kind mechanical harness, granting superhuman strength via electromagnetic means",
        "The harness is equipped with large bird-like wings, allowing for flight at high speeds with precise and silent maneuverability. It also features razor-sharp talons capable of tearing through steel",
        "Possesses advanced skills in the disciplines of engineering and invention.",
      ],
      gender: "Male",
      faction: "Villain",
    },
    {
      id: "C22",
      image_url_head:
        "https://lumiere-a.akamaihd.net/v1/images/spiderman-characterthumbnail-shocker_03a17f73.jpeg?region=0%2C0%2C300%2C300",
      image_url_full:
        "https://external-preview.redd.it/4YDfPpDEKiBjkdnJl2-kxYIuWczz_bmf9KyHIbqIoZY.jpg?auto=webp&s=b7bd215e517fc0b4961f3b96e148be24dd3fe8a6",
      alias: "Shocker",
      about:
        "Downtrodden after an unsuccessful criminal career, Herman Schultz used his electrical expertise to build costume powered by vibro-shock units. In his insulated Shocker suit, Schultz can emit shock wave blasts powerful enough to shake off Spider-Man's webbing or even crack open a bank safe!",
      abilities: [
        "Vibro-Shock Gauntlets",
        "Engineer",
        "Inventor",
        "Safecracker",
      ],
      gender: "Male",
      faction: "Villain",
    },
  ];

  const setNameFilterHandler = (filter) => {
    setNameFilter(filter);
  };

  const setFactionFilterHandler = (filter) => {
    setFactionFitler(filter);
  };

  let filteredCharacters = characters.filter((character) => {
    if (nameFilter.trim() === "") {
      return true;
    }

    return character.alias.toLowerCase().includes(nameFilter.toLowerCase());
  });

  filteredCharacters = filteredCharacters.filter((character) => {
    if (factionFilter === "All") {
      return true;
    }
    return character.faction === factionFilter;
  });

  return (
    <div className={classes.main}>
      <CharacterFilter
        onNameFilterChange={setNameFilterHandler}
        onFactionFilterChange={setFactionFilterHandler}
      />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default Main;
