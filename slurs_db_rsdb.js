/*
http://www.rsdb.org
document.querySelectorAll('#slurs tr').forEach( e => { if(e.querySelector('td:nth-child(3)')){ x.push(e.querySelector('td:nth-child(3)').textContent) } })
*/

let slurs_db_rsdb = [
  {
    slur:  "10% Off",
    refers_to:  "Jews",
    reason_and_origin:  "Refers to circumcision and consumerism (never pay retail). The term is most widely used in the UK where circumcision among non-Jews o…"
  },
  {
    slur:  "51st Stater",
    refers_to:  "Canadians",
    reason_and_origin:  "Canada is so culturally similar to the U. S. that they are practically the 51st state"
  },
  {
    slur:  "539",
    refers_to:  "Jews",
    reason_and_origin:  "Corresponds with the letters J-E-W on a telephone."
  },
  {
    slur:  "7-11",
    refers_to:  "Arabs",
    reason_and_origin:  "Work at menial jobs like 7-11 clerks."
  },
  {
    slur:  "8 Mile",
    refers_to:  "Whites",
    reason_and_origin:  "When white kids try to act ghetto or \"black\". From the 2002 movie \"8 Mile\"."
  },
  {
    slur:  "925",
    refers_to:  "Blacks",
    reason_and_origin:  "Police Code in Suburban LA for \"Suspicious Person"
  },
  {
    slur:  "A.I.",
    refers_to:  "Americans",
    reason_and_origin:  "Stands for American Ignorance as well as Artificial Intelligence-in other words...Americans are stupid and ignorant. they think they hav…"
  },
  {
    slur:  "AA",
    refers_to:  "Blacks",
    reason_and_origin:  "African American. Could also refer to double-A batteries, which you use for a while then throw away."
  },
  {
    slur:  "Abba-Dabba",
    refers_to:  "Arabs",
    reason_and_origin:  "Used in the movie \"Betrayed\" by rural American hate group."
  },
  {
    slur:  "ABC",
    refers_to:  "Chinese",
    reason_and_origin:  "American-Born Chinese. An Americanized Chinese person who does not understand Chinese culture."
  },
  {
    slur:  "ABC",
    refers_to:  "Australians",
    reason_and_origin:  "Aboriginals use it to offend white australians, it means \"Aboriginal Bum Cleaner"
  },
  {
    slur:  "ABCD",
    refers_to:  "Indians",
    reason_and_origin:  "Means American Born Confused Desi (pronounced day-see). Used by Indians to describe American-born Indians who are confused about thei…"
  },
  {
    slur:  "Abco",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Aboriginals being alcoholics"
  },
  {
    slur:  "Abdul",
    refers_to:  "Arabs",
    reason_and_origin:  "Common name."
  },
  {
    slur:  "Abe Lincoln",
    refers_to:  "Whites",
    reason_and_origin:  "Former United States president hailing from the caucasian sector of race."
  },
  {
    slur:  "Abeed",
    refers_to:  "Blacks",
    reason_and_origin:  "Arabic term that means Black, many Middle Eastern immigrants to the United States use this"
  },
  {
    slur:  "Abi-Dabi",
    refers_to:  "Arabs",
    reason_and_origin:  "A mispronunciation of the capitol city of The United Arab Emarites, which is Abu-Dhabi"
  },
  {
    slur:  "Abo",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Short for Aboriginal, they take offense to it"
  },
  {
    slur:  "Ace Of Spades",
    refers_to:  "Blacks",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Adolf",
    refers_to:  "Germans",
    reason_and_origin:  "Hitler, of course. Generally thought of the worst person ever."
  },
  {
    slur:  "African",
    refers_to:  "Blacks",
    reason_and_origin:  "Home continent."
  },
  {
    slur:  "African't",
    refers_to:  "Blacks",
    reason_and_origin:  "Unemployed/lazy Blacks"
  },
  {
    slur:  "Africoon",
    refers_to:  "Blacks",
    reason_and_origin:  "Combination of African and Coon."
  },
  {
    slur:  "Afro",
    refers_to:  "Blacks",
    reason_and_origin:  "Referring to hairstyle"
  },
  {
    slur:  "Afro-Saxon",
    refers_to:  "Whites",
    reason_and_origin:  "Young white men who act black."
  },
  {
    slur:  "Agent Orange",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Agent Orange was a defoliant used in Vietnam."
  },
  {
    slur:  "Ahab",
    refers_to:  "Arabs",
    reason_and_origin:  "From the song \"Ahab, the A-rab"
  },
  {
    slur:  "Aibu",
    refers_to:  "Whites",
    reason_and_origin:  "Nigerian word for White people. Pronounced Oyee-bo. Not necessarily a slur nor derogatory, but rather a direct translation."
  },
  {
    slur:  "Ainu",
    refers_to:  "Japanese Aboriginals",
    reason_and_origin:  "Originally, a word for the native Japanese islanders from Hokkaido, but now means roughly a \"primitive\" person. Usually look more Europea…"
  },
  {
    slur:  "Akata",
    refers_to:  "Black Americans",
    reason_and_origin:  "West African (Yoruba) term for African-Americans. Meaning ancestors of slaves or \"cotton picker\"."
  },
  {
    slur:  "Aladdin",
    refers_to:  "Arabs",
    reason_and_origin:  "One Thousand and One Nights"
  },
  {
    slur:  "Albino",
    refers_to:  "Whites",
    reason_and_origin:  "Albinos are white."
  },
  {
    slur:  "Albo",
    refers_to:  "Albanians",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Alcoholic",
    refers_to:  "Native Americans",
    reason_and_origin:  "Known to have a hard time handling their liquor."
  },
  {
    slur:  "Alphabet",
    refers_to:  "Arabs",
    reason_and_origin:  "Many names seem to use every letter of the alphabet."
  },
  {
    slur:  "Ame-koh",
    refers_to:  "Americans",
    reason_and_origin:  "Term for Americans used by Japanese."
  },
  {
    slur:  "American't",
    refers_to:  "Americans",
    reason_and_origin:  "Americans are stereotypically lazy."
  },
  {
    slur:  "Americoon",
    refers_to:  "Blacks",
    reason_and_origin:  "Combination of American and Coon."
  },
  {
    slur:  "Americunt",
    refers_to:  "Americans",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "AmeriKKKan",
    refers_to:  "Americans",
    reason_and_origin:  "Reference to inherent racism in US society. Entered the language as a part 1960s counter-cultural slang."
  },
  {
    slur:  "Amerikos",
    refers_to:  "Americans",
    reason_and_origin:  "Russian deragatory term for a dumb American"
  },
  {
    slur:  "AMF",
    refers_to:  "Jews",
    reason_and_origin:  "Short for \"Arbeit Macht Frei\" (Work Brings Freedom) which was on the gates of the concentration camp Auswitz"
  },
  {
    slur:  "Ami",
    refers_to:  "Americans",
    reason_and_origin:  "This is just a German abbreviation. By itself it is not derogatory. Scheiss-Ami = Shit American, obviously derogatory."
  },
  {
    slur:  "Amigo",
    refers_to:  "Hispanics",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Anchor Baby",
    refers_to:  "Mexicans",
    reason_and_origin:  "Children of parents who crossed the border illegally; A reference to their adulthood. At that time, they will be able to become the famil…"
  },
  {
    slur:  "Ancient Chinese Secret",
    refers_to:  "Chinese",
    reason_and_origin:  "From a 1970s TV commercial for Calgon stereotyping all laundry services are run by Chinese immigrants (link)"
  },
  {
    slur:  "Angie",
    refers_to:  "Canadians",
    reason_and_origin:  "English-speaking Canadians. Short for \"Anglophone\" and used in Quebec, especially for Anglophones in Quebec province itself. Also: Anglo"
  },
  {
    slur:  "Anglo",
    refers_to:  "Whites",
    reason_and_origin:  "A term used by Mexicans and other non whites in Texas to describe whites in a derogatory fashion."
  },
  {
    slur:  "Angus",
    refers_to:  "Blacks",
    reason_and_origin:  "Angus are a black breed of beef cattle."
  },
  {
    slur:  "Ant",
    refers_to:  "Antarcticans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Antique Farm Equipment",
    refers_to:  "Blacks",
    reason_and_origin:  "Slaves being used for labor."
  },
  {
    slur:  "Ape",
    refers_to:  "Blacks",
    reason_and_origin:  "Self Explanatory."
  },
  {
    slur:  "Apna",
    refers_to:  "Indians",
    reason_and_origin:  "Hindi/Punjabi slang meaning \"our guy,\" and referring to a male of their own race. \"Apni\" refers to Indian females. Used in areas of Punjab…"
  },
  {
    slur:  "Apple",
    refers_to:  "Native Americans",
    reason_and_origin:  "Used by Native Americans as derogatory for other Native Americans who are red on the outside but white on the inside."
  },
  {
    slur:  "Apple",
    refers_to:  "Blacks",
    reason_and_origin:  "Has to do with \"hanging from a tree\"."
  },
  {
    slur:  "Apu",
    refers_to:  "Indians",
    reason_and_origin:  "Hindu character from The Simpsons. Before that, one of the most famous films out of India was the \"Apu Trilogy."
  },
  {
    slur:  "Ararat",
    refers_to:  "Armenians",
    reason_and_origin:  "Mount Ararat is the tallest peak in Armenia, and it is said that Noah's Ark landed on it during the great flood. Ararat is in \"historic…"
  },
  {
    slur:  "Aravi",
    refers_to:  "Arabs",
    reason_and_origin:  "Hebrew word for arabs"
  },
  {
    slur:  "Arf",
    refers_to:  "Blacks",
    reason_and_origin:  "African Rock Fish. Jones Beach (NYC) term for Blacks due to their poor swimming abilities."
  },
  {
    slur:  "Argie",
    refers_to:  "Argentinans",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Arm Pits",
    refers_to:  "Armenians",
    reason_and_origin:  "False acronym for the Hollywood based street gang called AP, which stands for Armenian Power"
  },
  {
    slur:  "Armo",
    refers_to:  "Armenians",
    reason_and_origin:  "Short for Armenian."
  },
  {
    slur:  "Aryan",
    refers_to:  "Whites",
    reason_and_origin:  "The name Hitler used to refer to his blonde-haired, blue-eyed \"Master Race.\" Can be used towards racist whites who don't think they'r…"
  },
  {
    slur:  "Ashy",
    refers_to:  "Blacks",
    reason_and_origin:  "When their skin gets dry it can tend to look ashy."
  },
  {
    slur:  "Atta",
    refers_to:  "Arabs",
    reason_and_origin:  "Taken from the 9/11 terrorist who flew a plane into the World Trade Center, Mohammed Atta"
  },
  {
    slur:  "Aunt Jemima",
    refers_to:  "Blacks",
    reason_and_origin:  "After the stereotypically Black trademark picture on \"Aunt Jemima\" brand breakfast foods."
  },
  {
    slur:  "Ayatollah",
    refers_to:  "Persians",
    reason_and_origin:  "A religious leader amongst Shiite Muslims. More specifically, it would refer to Iranians."
  },
  {
    slur:  "Azn",
    refers_to:  "Asians",
    reason_and_origin:  "Asians that spend too much time online and hence use \"l33t\", the \"hacker\" language"
  },
  {
    slur:  "Babar",
    refers_to:  "Indians",
    reason_and_origin:  "From the character Babar the Elephant. First appeared in the book \"Babar the King\" published in 1963 and made into a popular animated HB…"
  },
  {
    slur:  "Baboomba",
    refers_to:  "Blacks",
    reason_and_origin:  "From the \"booming\" of their car stereos."
  },
  {
    slur:  "Baboon",
    refers_to:  "Blacks",
    reason_and_origin:  "Another simian reference"
  },
  {
    slur:  "Babu",
    refers_to:  "Indians",
    reason_and_origin:  "Means \"child\" in Hindi.Getting multiple \"definitions\" for this word."
  },
  {
    slur:  "Baby-Muncher",
    refers_to:  "Chinese",
    reason_and_origin:  "The Chinese ate their babies because of their poverty stricken homes and to keep down the population."
  },
  {
    slur:  "Bacardi",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Bacardi - Puerto Rican Rum"
  },
  {
    slur:  "Bacon Bits",
    refers_to:  "Whites",
    reason_and_origin:  "White Trailer Trash that have sex with Pigs"
  },
  {
    slur:  "Bagel-Dog",
    refers_to:  "Jews",
    reason_and_origin:  "From Kosher \"bagel dogs\" - a Kosher sausage inside of a bagel."
  },
  {
    slur:  "Bahadur",
    refers_to:  "Nepalese",
    reason_and_origin:  "Bahadur, means brave, has become a derogatory term for Nepali servants. They are also called Gaurkhs."
  },
  {
    slur:  "Bai Tou",
    refers_to:  "Whites",
    reason_and_origin:  "Mandarin Chinese term meaning \"white head\"."
  },
  {
    slur:  "Baijo",
    refers_to:  "Whites",
    reason_and_origin:  "Japanese term meaing strangers, used in a hostile way."
  },
  {
    slur:  "Bak Guiy",
    refers_to:  "Whites",
    reason_and_origin:  "Cantonese for \"white ghost."
  },
  {
    slur:  "Balsero",
    refers_to:  "Cubans",
    reason_and_origin:  "Spanish for \"rafter"
  },
  {
    slur:  "Balt",
    refers_to:  "Lithuanians",
    reason_and_origin:  "From \"Baltic"
  },
  {
    slur:  "Baluba",
    refers_to:  "Blacks",
    reason_and_origin:  "Name belonging to a tribe that killed Irish soldiers in Africa."
  },
  {
    slur:  "Baluga",
    refers_to:  "Blacks",
    reason_and_origin:  "Filipino equiv. to Nigger, known by all Filipinos"
  },
  {
    slur:  "Bamboo Coon",
    refers_to:  "Chinese",
    reason_and_origin:  "Bamboo grows in China."
  },
  {
    slur:  "Ban",
    refers_to:  "Hispanics",
    reason_and_origin:  "CuBANS. See also: Can"
  },
  {
    slur:  "Banana",
    refers_to:  "Asians",
    reason_and_origin:  "An Asian American who has lost their heritage. Yellow on the outside, white on the inside."
  },
  {
    slur:  "Banana Bender",
    refers_to:  "Australians",
    reason_and_origin:  "Austrlian slang term for a useless person living in the state of Queensland."
  },
  {
    slur:  "Bananame",
    refers_to:  "Asians",
    reason_and_origin:  "Banana\" and \"anime.\" Refers to Asians, esp. Filipinos, who are fixated on Japanese pop culture(anime, music, etc.), only date Japanese…"
  },
  {
    slur:  "Bandwidth Nigger/Whore",
    refers_to:  "Asians",
    reason_and_origin:  "Represents Asians who, instead of using the Asian video game servers they are assigned, jump to a US server and hog the bandwidth of U…"
  },
  {
    slur:  "Banjo Lips",
    refers_to:  "Blacks",
    reason_and_origin:  "Big lips"
  },
  {
    slur:  "Bantu",
    refers_to:  "Blacks",
    reason_and_origin:  "Comes from the apartheid racial classification for Blacks. Rarely used today. Derogatory"
  },
  {
    slur:  "BAP",
    refers_to:  "Blacks",
    reason_and_origin:  "Means \"Black American Princess\". Arrogant female blacks who flaunt their money around and demand the finest things in life."
  },
  {
    slur:  "Bar Code",
    refers_to:  "Jews",
    reason_and_origin:  "Jewish prisoners were tattooed with a number on their arm while in concentration camps. While the bar code was not invented(or at leas…"
  },
  {
    slur:  "Bara",
    refers_to:  "Arabs",
    reason_and_origin:  "Arab spelled backwards."
  },
  {
    slur:  "Bargain Korean",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Hawaiians are sometimes confused for asian, but are not quite right."
  },
  {
    slur:  "Bat-gwai/Bai-guei",
    refers_to:  "Whites",
    reason_and_origin:  "Bat-gwai\" is the Cantonese for \"white ghost;\" or as we more commonly hear it translated, \"white devil.\" It may be worth noting that whit…"
  },
  {
    slur:  "Batman",
    refers_to:  "Arabs",
    reason_and_origin:  "Women of the Islamic faith who wear a cape(loosely) and mask similar to that of Batman."
  },
  {
    slur:  "Bay Frog",
    refers_to:  "Canadians",
    reason_and_origin:  "Hudson Bay + Frog. Specifically refers to French descendents from Quebec"
  },
  {
    slur:  "Bazi",
    refers_to:  "Germans",
    reason_and_origin:  "Bazi\" is a Bavarian/Southern German term for a loveable crook. Pronounced \"baht-see"
  },
  {
    slur:  "BBC",
    refers_to:  "Chinese",
    reason_and_origin:  "British Born Chinese. A British Chinese person who may or may not understand Chinese culture. BBC is also a major television network i…"
  },
  {
    slur:  "BBK",
    refers_to:  "Blacks",
    reason_and_origin:  "Big Black Cocks. Spelled with a K, as in the Korn song of the same title."
  },
  {
    slur:  "BDN",
    refers_to:  "Blacks",
    reason_and_origin:  "Big Dummy Nigger\" Comes from the movie \"The Green Mile\". A white prisoner calls a black prisoner a Big Dummy Nigger."
  },
  {
    slur:  "Beach-Nigger",
    refers_to:  "Whites",
    reason_and_origin:  "Overly-tanned people/surfers."
  },
  {
    slur:  "Bean Bandit",
    refers_to:  "Hispanics",
    reason_and_origin:  "They eat beans."
  },
  {
    slur:  "Bean Burrito",
    refers_to:  "Hispanics",
    reason_and_origin:  "Common Hispanic food is bean burritos and the coloring of the beans is similar to the coloring of their skin."
  },
  {
    slur:  "Bean Dipper",
    refers_to:  "Whites",
    reason_and_origin:  "White men, or any non-hispanic, who date hispanic women."
  },
  {
    slur:  "Beanbag",
    refers_to:  "Hispanics",
    reason_and_origin:  "Another slur based on the Hispanics consumption of beans"
  },
  {
    slur:  "Beaner",
    refers_to:  "Hispanics",
    reason_and_origin:  "Because they are known to have a lot of beans in their diet and are also hired many times to pick beans for (sometimes less than) minimu…"
  },
  {
    slur:  "Beaner Ball",
    refers_to:  "Hispanics",
    reason_and_origin:  "Soccer is quite popular in Mexico and South America."
  },
  {
    slur:  "Beaner Shnitzel",
    refers_to:  "Mixed Races",
    reason_and_origin:  "German/Hispanic mix"
  },
  {
    slur:  "Beaniard",
    refers_to:  "Hispanics",
    reason_and_origin:  "Refers to the Spanish origin \"Spaniard\" mixed \"Bean\", with a commom food in many Mexican dishes."
  },
  {
    slur:  "Beanie",
    refers_to:  "Jews",
    reason_and_origin:  "Referring to the yarmulke."
  },
  {
    slur:  "Bear",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Educated And Rich"
  },
  {
    slur:  "Beastie Boy",
    refers_to:  "Jews",
    reason_and_origin:  "Jews who act Black, like the Jewish rap group The Beastie Boys."
  },
  {
    slur:  "Beaver-Beater",
    refers_to:  "French Canadians",
    reason_and_origin:  "Fur trade."
  },
  {
    slur:  "Bebe's Kids",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to a stand up comic's famous bit about Bebe's kids that inspired a movie years later."
  },
  {
    slur:  "Bed Time",
    refers_to:  "Asians",
    reason_and_origin:  "Reference to their eyes."
  },
  {
    slur:  "Bee-Keeper",
    refers_to:  "Afghans",
    reason_and_origin:  "Because Arab women are clothed from head to toe, even their faces, and they look like bee keepers."
  },
  {
    slur:  "Beecher",
    refers_to:  "Whites",
    reason_and_origin:  "For white people who kowtow to Black people or racist White People. Derived from the show \"Oz\" on HBO, where the character Beecher wa…"
  },
  {
    slur:  "Beggar",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people often want \"something for nothing."
  },
  {
    slur:  "Belegana",
    refers_to:  "Whites",
    reason_and_origin:  "Navajo term which roughly translates to \"silly white person"
  },
  {
    slur:  "Belgie",
    refers_to:  "Belgians",
    reason_and_origin:  "Shortening of word"
  },
  {
    slur:  "Bennie",
    refers_to:  "Falkland Islanders",
    reason_and_origin:  "The Islanders were named after a less than academically gifted character (Benny) in a mediocre British TV soap (Crossroads) by Britis…"
  },
  {
    slur:  "Bergie",
    refers_to:  "Blacks",
    reason_and_origin:  "Originally referring to the primarily coloured hobos who live on Table Mountain near Cape Town."
  },
  {
    slur:  "Berry Picker",
    refers_to:  "Hispanics",
    reason_and_origin:  "Refers to Hispanics who would work berry fields in California, specifically illegal immigrants, as their employer didn't have to pay the…"
  },
  {
    slur:  "BET",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Entertainment Television"
  },
  {
    slur:  "Betty",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Bouncing Bettys in Vietnam War"
  },
  {
    slur:  "Betty Crocker",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to white women in general"
  },
  {
    slur:  "Beur",
    refers_to:  "Arabs",
    reason_and_origin:  "Verlan (French slang) for \"reube\", which is itself verlan for \"Arabe\". Usually used for children of migrants from Maghreb settled in Franc…"
  },
  {
    slur:  "BFI",
    refers_to:  "Native Americans",
    reason_and_origin:  "The \"Big Fucking Indian\" at the back of the bar you dont want to piss off."
  },
  {
    slur:  "BFI",
    refers_to:  "Blacks",
    reason_and_origin:  "BFI, the name of a waste disposal company, is on the side of their dumpsters. Stands for Black Family Inside."
  },
  {
    slur:  "Bhindu",
    refers_to:  "Indians",
    reason_and_origin:  "Similar to \"hillbilly\" or simpleton. Bindu is a Sanskrit word meaning drop. The word bindi, which is the typical \"red dot\" worn on th…"
  },
  {
    slur:  "Bhrempti",
    refers_to:  "Indians",
    reason_and_origin:  "Their pronunciation of the number 20."
  },
  {
    slur:  "Bible-Shortener",
    refers_to:  "Jews",
    reason_and_origin:  "Seen on a Conan O'Brien sketch \"Rednecks' Favorite Euphemisms for Jews,\" backwards refers to the difference between the Christian Bible an…"
  },
  {
    slur:  "Bic-Needer",
    refers_to:  "French",
    reason_and_origin:  "Most likely because French women don't tend to shave there arm pits and legs."
  },
  {
    slur:  "Big Mac",
    refers_to:  "Scottish",
    reason_and_origin:  "A large Scottish man."
  },
  {
    slur:  "Big Nose",
    refers_to:  "Jews",
    reason_and_origin:  "Refers to how Jews are said to have large noses."
  },
  {
    slur:  "Big Nose",
    refers_to:  "Whites",
    reason_and_origin:  "Term used by Asians when refering to westerners because of their larger noses"
  },
  {
    slur:  "Big Red",
    refers_to:  "Native Americans",
    reason_and_origin:  "A fat native person. Refference to the gum with the same name."
  },
  {
    slur:  "Billy Reuben",
    refers_to:  "Blacks",
    reason_and_origin:  "The pigment that makes feces brown is called \"bilirubin"
  },
  {
    slur:  "Bin Laden",
    refers_to:  "Arabs",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Binder",
    refers_to:  "Indians",
    reason_and_origin:  "slang for turbin"
  },
  {
    slur:  "Bindi",
    refers_to:  "Indians",
    reason_and_origin:  "From the dot that Hindu women wear on their foreheads."
  },
  {
    slur:  "Bingo",
    refers_to:  "Bengalis",
    reason_and_origin:  "Derogatory, used by Indians and Pakistanis"
  },
  {
    slur:  "Bingo-Bongo",
    refers_to:  "Blacks",
    reason_and_origin:  "Italian wordplay of African names/language"
  },
  {
    slur:  "Bink",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Chinese Mix. Black person with Chinese or \"Chink\" blood"
  },
  {
    slur:  "Bipty",
    refers_to:  "Indians",
    reason_and_origin:  "When an Indian gives you change at 7-11, they sound like they're saying, \"Here is one dollar and bipty cents."
  },
  {
    slur:  "Bird Shit",
    refers_to:  "Whites",
    reason_and_origin:  "Because bird shit is mainly white"
  },
  {
    slur:  "Bird Turd",
    refers_to:  "Whites",
    reason_and_origin:  "Bird shit is white."
  },
  {
    slur:  "Biscuit Head",
    refers_to:  "Koreans",
    reason_and_origin:  "KATUSAS - Koreans augmented to the United States Army, commonly referred to as Biscuit Heads by American GI's, because of their squar…"
  },
  {
    slur:  "Biscuit Lip",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to large lips."
  },
  {
    slur:  "Bix Nood",
    refers_to:  "Blacks",
    reason_and_origin:  "From a racist cartoon spread on the internet where a black man is breaking into a house saying \"mup da doo ditta po mo BIX NOOD"
  },
  {
    slur:  "Bjork",
    refers_to:  "Icelanders",
    reason_and_origin:  "She's the Icelander everyone knows."
  },
  {
    slur:  "Black Barbie",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to a black woman when she wears her hair and makeup to try and look like a white woman."
  },
  {
    slur:  "Black Bean",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Black. Self Explanitory"
  },
  {
    slur:  "Black Dagos",
    refers_to:  "Italians",
    reason_and_origin:  "Believed that some Sicilians are part Black."
  },
  {
    slur:  "Black Magic",
    refers_to:  "Blacks",
    reason_and_origin:  "It has always fascinated researchers how the black folk manage to get there hands on grog money daily.\" Specific words of the origina…"
  },
  {
    slur:  "Black Time",
    refers_to:  "Blacks",
    reason_and_origin:  "Perceived tendency for Blacks to be late"
  },
  {
    slur:  "Blackanese",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Asian mix; from a line by Chris Tucker in Rush Hour 2"
  },
  {
    slur:  "Blackfoot",
    refers_to:  "French",
    reason_and_origin:  "Possible reference to French-Indian War and/or WW1 and the general sense of French cowardess during wars. Since they had no boots due t…"
  },
  {
    slur:  "Blackhead",
    refers_to:  "Turkish",
    reason_and_origin:  "Turkish workers in Europe are degraded because of their darker hair color than German races."
  },
  {
    slur:  "Blackie",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Blackout",
    refers_to:  "Native Americans",
    reason_and_origin:  "A stereo type of American Indians referencing their prevalence to excessive alcohol consumption."
  },
  {
    slur:  "Blackrobe",
    refers_to:  "Whites",
    reason_and_origin:  "White Missionaries. Native American term."
  },
  {
    slur:  "Blacky Chan",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who practice martial arts"
  },
  {
    slur:  "Blanco",
    refers_to:  "Whites",
    reason_and_origin:  "Blanco' is Spanish for white or blank."
  },
  {
    slur:  "Blanket-Ass",
    refers_to:  "Native Americans",
    reason_and_origin:  "From when the US Government gave tribes blankets.. I guess to make up for killing so many of them. The blankets were also rumored to b…"
  },
  {
    slur:  "Blaxican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Mexican mix. Pioneered by the Black/Mexican hip-hop group \"Delinquent Habits\"."
  },
  {
    slur:  "Bleach Boy",
    refers_to:  "Whites",
    reason_and_origin:  "Because bleach whitens things"
  },
  {
    slur:  "Bleck",
    refers_to:  "Blacks",
    reason_and_origin:  "Sounds like the word \"black\" said with a South African accent. http://imdb.com/title/tt0097733/"
  },
  {
    slur:  "Block Hoppers",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Because so many Puerto Ricans live in Apartment Block to Apartment Block"
  },
  {
    slur:  "Blockbuster",
    refers_to:  "Blacks",
    reason_and_origin:  "A real estate agent who sells a home in an upper-class white neighborhood to a black family, thus lowering the values of other homes in th…"
  },
  {
    slur:  "Blockhead",
    refers_to:  "Germans",
    reason_and_origin:  "Refers to the shape of their heads. Term dates back to the beginning of time. Used a lot by Charles M. Schulz in \"The Peanuts\" comics …"
  },
  {
    slur:  "Blockhead",
    refers_to:  "Macedonians",
    reason_and_origin:  "Shape of their heads; Australian."
  },
  {
    slur:  "Bloke",
    refers_to:  "British",
    reason_and_origin:  "Used by french canadians to identify english speaking people"
  },
  {
    slur:  "Blood",
    refers_to:  "Blacks",
    reason_and_origin:  "LA-based gang. Can be used offensively towards non-gang members."
  },
  {
    slur:  "Blood Sucker",
    refers_to:  "Romanians",
    reason_and_origin:  "Dracula was a Romanian"
  },
  {
    slur:  "Blow",
    refers_to:  "Blacks",
    reason_and_origin:  "Originated from blacks originally living in Africa and using blow guns."
  },
  {
    slur:  "Blowfish",
    refers_to:  "Whites",
    reason_and_origin:  "From the pop band Hootie and the Blowfish. The lead singer was black (Hootie), the band was white (The Blowfish)."
  },
  {
    slur:  "BLT",
    refers_to:  "Blacks",
    reason_and_origin:  "Big-Lipped Tyrone,\" or for female version \"Big-Lipped Tyreesha.\" Inspired from the 80's version of Degrassi Jr. High where the black gu…"
  },
  {
    slur:  "Bludger",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "A bludger, or more accurately \"dole-bludger\", in Australian slang is someone who doesnt work and relies on the government for mone…"
  },
  {
    slur:  "Blue collar",
    refers_to:  "Mexicans",
    reason_and_origin:  "Many illegal immigrants take manual labor jobs."
  },
  {
    slur:  "Blue Gums",
    refers_to:  "Blacks",
    reason_and_origin:  "Old myth that if one were bitten by a nigger with blue gums, they would die."
  },
  {
    slur:  "Blue-Eyed Devil",
    refers_to:  "Whites",
    reason_and_origin:  "Whites primarily with blue eyes are said to be the most evil. Especially since their skin is so pale, it looks scary to others as thei…"
  },
  {
    slur:  "Blue/Blew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Jewish Mix."
  },
  {
    slur:  "Blushing",
    refers_to:  "Black Russians",
    reason_and_origin:  "Black Russian / Blussian / Blushing"
  },
  {
    slur:  "BMO",
    refers_to:  "Arabs",
    reason_and_origin:  "Muslim Women. Stands for Black Moving Objects - refers to the complete head-to-toe black dress of Muslim women."
  },
  {
    slur:  "BMW",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Mans Wish,\" referring to BMW automobiles. Also: \"Black Man, Working.\" Used by young Black women seeking a partner who is steadil…"
  },
  {
    slur:  "BMW",
    refers_to:  "Mexicans",
    reason_and_origin:  "Big Mexican Woman (or Women)\" - applied to heavy or obese Hispanic women."
  },
  {
    slur:  "Bo-Bo",
    refers_to:  "Blacks",
    reason_and_origin:  "Sounds like a monkeys name or implies stupidty."
  },
  {
    slur:  "Boat Rower",
    refers_to:  "Cubans",
    reason_and_origin:  "Many people from Cuba attempt to sneak into the United States via rafts and boats."
  },
  {
    slur:  "Bobblehead",
    refers_to:  "Blacks",
    reason_and_origin:  "Black women have a tendency to violently shake their heads in heated conversations."
  },
  {
    slur:  "Boche",
    refers_to:  "Germans",
    reason_and_origin:  "The French called the Germans this in WWII. \"Boche\" is short for \"alcaboche\" or cabbage-head."
  },
  {
    slur:  "Bodinki",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Slur used by Portuguse in Hawaii"
  },
  {
    slur:  "Boffer/Boofer",
    refers_to:  "Blacks",
    reason_and_origin:  "The Hawaiians or Polynesians call Blacks this name. Same as nigger in the United States."
  },
  {
    slur:  "Bog-Jumper",
    refers_to:  "Irish",
    reason_and_origin:  "Many bogs in Ireland"
  },
  {
    slur:  "Bog-trotter",
    refers_to:  "Irish",
    reason_and_origin:  "Abundance of bogs in Ireland"
  },
  {
    slur:  "Bogan",
    refers_to:  "Australians",
    reason_and_origin:  "New Zealand/Australian white trash or rednecks.↵↵Appearance: Typically clad in black rib jersey (Hallensteins, $49.95),↵black jeans, and …"
  },
  {
    slur:  "Bohunk",
    refers_to:  "Hungarians",
    reason_and_origin:  "May be a contraction of 'Bohemian/Hungarian', and might refer to Hungarians, Czechs and Ukrainians (As well as Russians). Possibly o…"
  },
  {
    slur:  "Bolillo",
    refers_to:  "Whites",
    reason_and_origin:  "Mexicans use it to refer to white people: bolillo=white bread bun"
  },
  {
    slur:  "Bolita",
    refers_to:  "Bolivian",
    reason_and_origin:  "Argentines refer to the poorer Bolivian immigrants who live in Argentina as \"bolitas.\" It means \"small balls\" in Spanish."
  },
  {
    slur:  "Bologna",
    refers_to:  "Italians",
    reason_and_origin:  "Reference to Bologna, Italy"
  },
  {
    slur:  "Bomb",
    refers_to:  "Blacks",
    reason_and_origin:  "Bombs in cartoons are typically black"
  },
  {
    slur:  "Bomb Watcher",
    refers_to:  "Japanese",
    reason_and_origin:  "Refers to atom bombs the US dropped on Hiroshima and Nagasaki in WWII."
  },
  {
    slur:  "Bomb-Builder",
    refers_to:  "Arabs",
    reason_and_origin:  "Many terrorists nowadays are Arabs."
  },
  {
    slur:  "Bones",
    refers_to:  "Jews",
    reason_and_origin:  "Reference to the holocaust when Jews were often worked so hard, they were turned into a mere pile of bones."
  },
  {
    slur:  "Bonky",
    refers_to:  "Blacks",
    reason_and_origin:  "Name for blacks who act or talk white"
  },
  {
    slur:  "Boogalee",
    refers_to:  "Cajuns",
    reason_and_origin:  "May be a corruption of the French slang for \"feces\"."
  },
  {
    slur:  "Boogat",
    refers_to:  "Blacks",
    reason_and_origin:  "Comes from the similar idea of calling a black person a \"Spook.\" C. 1940s"
  },
  {
    slur:  "Boogie",
    refers_to:  "Blacks",
    reason_and_origin:  "Referring to \"Boogie Woogie\" form of jazz? Could come from W. African \"Buuker\" or \"Buckra\", meaning \"Devil\", \"Boogie man\" or \"White Man\"…"
  },
  {
    slur:  "Boogie Man",
    refers_to:  "Whites",
    reason_and_origin:  "Enslaved African-Americans told tales to their children of a Boogie Man who would abduct you, kill you or otherwise cause harm to you i…"
  },
  {
    slur:  "Boojie",
    refers_to:  "Indians",
    reason_and_origin:  "Pronounced 'boo-jee'; refers to all the 7-11 workers of the world."
  },
  {
    slur:  "Boomer",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "They use boomerangs"
  },
  {
    slur:  "Boon",
    refers_to:  "Blacks",
    reason_and_origin:  "Probably a derivation of \"Baboon\" or the black \"Boon Bug\" beetle."
  },
  {
    slur:  "Booner",
    refers_to:  "Australian",
    reason_and_origin:  "Canberra word for bogan. Sometimes shortened too boon."
  },
  {
    slur:  "Boong",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Origin: \"Boonga\" is a native word from the Sydney area pre-1788 meaning anus."
  },
  {
    slur:  "Boori",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Same As Abo, Coon, Boong, Moorindachi, Pikinini."
  },
  {
    slur:  "Bootlip",
    refers_to:  "Blacks",
    reason_and_origin:  "During the Industrial boom of the auto industry and OSHA'a requirement of safety precautions, workers were required to wear steel-toe…"
  },
  {
    slur:  "Border Bandit",
    refers_to:  "Mexicans",
    reason_and_origin:  "A Mexican who has crossed the border illegally. Also a \"BB"
  },
  {
    slur:  "Border Bunny",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hopping the border to get into America."
  },
  {
    slur:  "Border Nigger",
    refers_to:  "Hispanics",
    reason_and_origin:  "See Border Bunny."
  },
  {
    slur:  "Border-Hopper",
    refers_to:  "Hispanics",
    reason_and_origin:  "Same as Border Bunny. Border-Jumper too."
  },
  {
    slur:  "Bosants",
    refers_to:  "Bosnians",
    reason_and_origin:  "A non derogatory name of themselves bosanats turned derogatory in Slovenia, a word bos also means barefoot, many Bosnians are muslim, an…"
  },
  {
    slur:  "Bosch",
    refers_to:  "Germans",
    reason_and_origin:  "French WW2 term. Name of a big german tool and machine producer?"
  },
  {
    slur:  "Boskur",
    refers_to:  "Bosnians",
    reason_and_origin:  "a mix of Bosnian and chefur used derogatory in Slovenia, typically hard uneducated workers from Bosnia and Hercegovina"
  },
  {
    slur:  "Boss",
    refers_to:  "Whites",
    reason_and_origin:  "Commonly used by American minority groups (blacks, hispanics, asians) to refer to white people."
  },
  {
    slur:  "Boudreaux",
    refers_to:  "Cajuns",
    reason_and_origin:  "Common name among Cajuns."
  },
  {
    slur:  "Bounty Bar",
    refers_to:  "Blacks",
    reason_and_origin:  "The Bounty Bar is a coconut filled chocolate bar, so it's brown on the outside but white on the inside. An insult to (for example) blac…"
  },
  {
    slur:  "Bourbon",
    refers_to:  "Blacks",
    reason_and_origin:  "Bourbon are brown coloured brown cream filled biscuits. Possibly a variant of eggplant. Bourbon is also a dark alchoholic drink"
  },
  {
    slur:  "Bow Bender",
    refers_to:  "Native Americans",
    reason_and_origin:  "Indians shot bows."
  },
  {
    slur:  "Boxcutter",
    refers_to:  "Arabs",
    reason_and_origin:  "September 11th"
  },
  {
    slur:  "Boxhead",
    refers_to:  "Germans",
    reason_and_origin:  "Germans typically have, or are thought to have, rather square heads."
  },
  {
    slur:  "Boy",
    refers_to:  "Blacks",
    reason_and_origin:  "Originated during slavery. Used to belittle blacks."
  },
  {
    slur:  "Bozak",
    refers_to:  "Blacks",
    reason_and_origin:  "Pronounced (bow-zack) southern term for a big black man. \"thats one black bozak"
  },
  {
    slur:  "Bozgor",
    refers_to:  "Hungarians",
    reason_and_origin:  "Term used in Eastern Europe for Hungarian-Ethnics living in different countries after WWI. It means \"man without country\" or just imitate…"
  },
  {
    slur:  "Bracero",
    refers_to:  "Mexicans",
    reason_and_origin:  "Spanish term for a Mexican migrant worker"
  },
  {
    slur:  "Brady",
    refers_to:  "Whites",
    reason_and_origin:  "From TV show \"The Brady Bunch,\" especially used to make the point that whites are acting \"uncool.\" A variation is to refer to someone b…"
  },
  {
    slur:  "Branch Manager",
    refers_to:  "Blacks",
    reason_and_origin:  "Monkeys climb trees."
  },
  {
    slur:  "Brass Ankle",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Refers to a person of black and white heritage who passes for a white person. Unsure of origins."
  },
  {
    slur:  "Brazuca",
    refers_to:  "Brazilians",
    reason_and_origin:  "Does not necessarily bear a negative connotation. It is used by Brazilians most often when depicting Brazilian athletes playing abroad."
  },
  {
    slur:  "Brew",
    refers_to:  "Jews",
    reason_and_origin:  "Short for \"Hebrew\"."
  },
  {
    slur:  "Briar",
    refers_to:  "Whites",
    reason_and_origin:  "Term probably comes from the briar bushes found in Appalachian states. Variant: briar-hopper. Applied locally to redneck Kentucky native o…"
  },
  {
    slur:  "Brillo Pad",
    refers_to:  "Blacks",
    reason_and_origin:  "Hair reminiscent of a Brillo Pad."
  },
  {
    slur:  "Brit",
    refers_to:  "British",
    reason_and_origin:  "Short for British. Used as in \"Brits Out!\:  graffiti from Ireland."
  },
  {
    slur:  "Bro",
    refers_to:  "Blacks",
    reason_and_origin:  "Contraction of brother, see: Brother."
  },
  {
    slur:  "Bro-ho",
    refers_to:  "Whites",
    reason_and_origin:  "A white woman who dates or has sex with black men. Bro = black man. Ho = short for \"whore."
  },
  {
    slur:  "Bronx Indian",
    refers_to:  "Jews",
    reason_and_origin:  "Probably not derogatory, possibly self-referential. Most likely from sometime between the turn of the century and the early sixties. I hav…"
  },
  {
    slur:  "Brother",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by blacks in an effort to help unify their race. Also used by non-black races to poke fun at or try to identify with the black race."
  },
  {
    slur:  "Brown Pants/Shirts",
    refers_to:  "Italians",
    reason_and_origin:  "From the color of their uniforms in WW II. Said by American GIs to hide when they defecate themselves on the battlefield."
  },
  {
    slur:  "Brown Tractor",
    refers_to:  "Mexicans",
    reason_and_origin:  "They sometimes do work tractors might normally be used for."
  },
  {
    slur:  "Brown Trumpet",
    refers_to:  "Blacks",
    reason_and_origin:  "Represents Black American jazz musicians."
  },
  {
    slur:  "Brownie",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin color, like the favorite treat."
  },
  {
    slur:  "Bruce Lee",
    refers_to:  "Asians",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Bruised Banana",
    refers_to:  "Asians",
    reason_and_origin:  "A \"banana\" who acts black."
  },
  {
    slur:  "Bubb Rubb",
    refers_to:  "Blacks",
    reason_and_origin:  "Wooooo Wooooo."
  },
  {
    slur:  "Bubba",
    refers_to:  "Blacks",
    reason_and_origin:  "When referring to prison, the big guy who takes advantage of all the new prisoners is derogatorily called Bubba."
  },
  {
    slur:  "Bubba",
    refers_to:  "Whites",
    reason_and_origin:  "Common southern name Reference to any big dumb white guy."
  },
  {
    slur:  "Bubble",
    refers_to:  "Greeks",
    reason_and_origin:  "Bubble & Squeak\" is Cockney slang for Greek."
  },
  {
    slur:  "Bubbles",
    refers_to:  "Blacks",
    reason_and_origin:  "Big Black man from the film Lilo and Stitch"
  },
  {
    slur:  "Buck",
    refers_to:  "Native Americans",
    reason_and_origin:  "The male equivalent of \"squaw"
  },
  {
    slur:  "Buck/Buck Nigger",
    refers_to:  "Blacks",
    reason_and_origin:  "This word has been used since the 17th century to refer to a male Negro - no matter whether slave or not."
  },
  {
    slur:  "Bucket",
    refers_to:  "Whites",
    reason_and_origin:  "You ain't pale, you bucket"
  },
  {
    slur:  "Buckethead",
    refers_to:  "Koreans",
    reason_and_origin:  "Of all Asian groups, Koreans are said to have the biggest heads."
  },
  {
    slur:  "Buckra",
    refers_to:  "Whites",
    reason_and_origin:  "Gullah language word meaning White Trash."
  },
  {
    slur:  "Buckwheat",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to Buckwheat, a Black character on \"The Little Rascals."
  },
  {
    slur:  "Buddhahead",
    refers_to:  "Asians",
    reason_and_origin:  "A lot of Asians are Buddhists."
  },
  {
    slur:  "Buddhahead",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Hawaiian-born Japanese Americans. Originally from \"buta-head\" meaning pig-headed since Hawaiians were stubborn compared to their mainlan…"
  },
  {
    slur:  "Buddy Blaster",
    refers_to:  "Americans",
    reason_and_origin:  "Refers to US troops' inability to distinguish between friend and foe on the battlefield."
  },
  {
    slur:  "Buffalo Jockey",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Buffalo Soldier",
    refers_to:  "Blacks",
    reason_and_origin:  "When the U.S. government was clearing the West of Native Americans, they sent many black units to hunt them down. The Indians thought the…"
  },
  {
    slur:  "Buffy",
    refers_to:  "Whites",
    reason_and_origin:  "From Buffy the Vampire Slayer. A reference to teenage white girls who watch and identify with the show's main character."
  },
  {
    slur:  "Bug-Eater",
    refers_to:  "Asians",
    reason_and_origin:  "Many Asians eat bugs such as Locusts and Grasshoppers."
  },
  {
    slur:  "Bugre",
    refers_to:  "Brazilians",
    reason_and_origin:  "Means Indian in Portuguese"
  },
  {
    slur:  "Buk-Buk",
    refers_to:  "Filipinos",
    reason_and_origin:  "Insult originates in Hawaii. A slur on how their language sounds to non-Filipinos. Sounds like \"book-book."
  },
  {
    slur:  "Bukakke Warrior",
    refers_to:  "Japanese",
    reason_and_origin:  "Refers to perverse Japanese sex fetish that involves a woman being the reciepent of several males ejaculation on her face."
  },
  {
    slur:  "Bukkakese",
    refers_to:  "Asians",
    reason_and_origin:  "Reference to the popular Bukkake fetish. (Bukkake + Japanese)"
  },
  {
    slur:  "Buleh",
    refers_to:  "Whites",
    reason_and_origin:  "Means Albino in Indonesian"
  },
  {
    slur:  "Bulgie",
    refers_to:  "Bulgarians",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Bumblebee",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Oriental couple or mixed child."
  },
  {
    slur:  "Bumi",
    refers_to:  "Malaysians",
    reason_and_origin:  "short for the malaysian term \"bumiputra\" - son of the soil. Used by non-native Malays"
  },
  {
    slur:  "Bump",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Many vehicles in Australia have 'roo bars mounted on the front (to protect the vehicle from collisions with kangaroos). \"Bump\" is for th…"
  },
  {
    slur:  "Bumper Lips",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Bun",
    refers_to:  "Jews",
    reason_and_origin:  "As in \"bun in the oven."
  },
  {
    slur:  "Bun",
    refers_to:  "Blacks",
    reason_and_origin:  "Big Ugly Nigger."
  },
  {
    slur:  "Bunker",
    refers_to:  "Whites",
    reason_and_origin:  "For the bigoted \"All In The Family\" character Archie Bunker."
  },
  {
    slur:  "Bunny",
    refers_to:  "Mormons",
    reason_and_origin:  "Propensity to spawn many children"
  },
  {
    slur:  "Buppie",
    refers_to:  "Blacks",
    reason_and_origin:  "A (young) black upwardly professional person. Like yuppie, but refers to blacks."
  },
  {
    slur:  "Burger",
    refers_to:  "Jews",
    reason_and_origin:  "Many of their names end it \"Burg"
  },
  {
    slur:  "Burglar",
    refers_to:  "Bulgarians",
    reason_and_origin:  "The word sounds like \"Bulgar"
  },
  {
    slur:  "Burnt Cracker",
    refers_to:  "Blacks",
    reason_and_origin:  "Used as a response to Blacks who call Whites crackers."
  },
  {
    slur:  "Burnt Match",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Burnt Pizza",
    refers_to:  "Italians",
    reason_and_origin:  "Slur towards dark skinned Italians"
  },
  {
    slur:  "Burnt Rice",
    refers_to:  "Asians",
    reason_and_origin:  "Darker-skinned Asians."
  },
  {
    slur:  "Burnt Toast",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin color can resemble that of a burnt piece of bread."
  },
  {
    slur:  "Burr Head",
    refers_to:  "Blacks",
    reason_and_origin:  "Hair Texture."
  },
  {
    slur:  "Burrito",
    refers_to:  "Hispanics",
    reason_and_origin:  "Comes from the old adage you are what you eat. Also burrito-head, burrito-brain, etc."
  },
  {
    slur:  "Bush Bandit",
    refers_to:  "Native American",
    reason_and_origin:  "They hide is bushes"
  },
  {
    slur:  "Bush-Boogie",
    refers_to:  "Blacks",
    reason_and_origin:  "Derived from their jungle origins."
  },
  {
    slur:  "Bushmen",
    refers_to:  "Americans",
    reason_and_origin:  "For electing the bush dynasty."
  },
  {
    slur:  "Bushnigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Buster",
    refers_to:  "Bulgarians",
    reason_and_origin:  "From the cartoon Arthur"
  },
  {
    slur:  "Butter",
    refers_to:  "Blacks",
    reason_and_origin:  "Alternative to Nigger."
  },
  {
    slur:  "Butter Cookie",
    refers_to:  "Danish",
    reason_and_origin:  "Reference to Kjeldsen's Butter Cookies, a fairly famous export from Denmark."
  },
  {
    slur:  "Butterfingers",
    refers_to:  "French",
    reason_and_origin:  "Started during WWII when the French were occupied by the Germans and were forced to \"drop\" all their weapons."
  },
  {
    slur:  "Butterhead",
    refers_to:  "Japanese",
    reason_and_origin:  "Used by U.S. Marines in the Pacific Theater of WWII, and some survivors of it to this day. Refers to yellow skin tone of Japanese soldiers…"
  },
  {
    slur:  "Buttonhead",
    refers_to:  "Indians",
    reason_and_origin:  "Due to the red dot on many Hindu's foreheads."
  },
  {
    slur:  "B�d�s Ol�h",
    refers_to:  "Romanians",
    reason_and_origin:  "The slur means \"stinky Romanian\" and it originates in Transylvania where Romanians and Hungarians live together. Hungarians used to cal…"
  },
  {
    slur:  "B�g",
    refers_to:  "Swedes",
    reason_and_origin:  "Finnish people regard Swedish men to be woman-like homosexuals - thus b�g which is Swedish for a homosexual"
  },
  {
    slur:  "C-15",
    refers_to:  "Blacks",
    reason_and_origin:  "From some mythical form where the circle you filled out for \"race = black\" was column c, number 15."
  },
  {
    slur:  "Cabbage",
    refers_to:  "Whites",
    reason_and_origin:  "Small town farm trash that wore spotted welder beanie caps and carried concealed knives to school."
  },
  {
    slur:  "Cabbie",
    refers_to:  "Arabs",
    reason_and_origin:  "A large portion of cab drivers seem to be foreigners, mostly of Arab or Indo descent."
  },
  {
    slur:  "Caber Tosser",
    refers_to:  "Scottish",
    reason_and_origin:  "Scottish sport."
  },
  {
    slur:  "Cabezita Negra",
    refers_to:  "Hispanics",
    reason_and_origin:  "What whites in Argentina call mestizo people who are darker and poorer. It means Little Black Head; Most of the Argentinians from europea…"
  },
  {
    slur:  "Caco",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Puerto Rican youths who dress and act 'gangsta' and drive tricked out import cars with loud sound systems blasting 'Reggaeton' (a type o…"
  },
  {
    slur:  "Caffre",
    refers_to:  "Blacks",
    reason_and_origin:  "Derogatory term used by South African whites during the apartheid era, now considered an offense and beeped out from the media (like a…"
  },
  {
    slur:  "Cairo Coon",
    refers_to:  "Arabs",
    reason_and_origin:  "Variant on sand nigger."
  },
  {
    slur:  "Calf",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Black mix. A child with a white mother and black father."
  },
  {
    slur:  "California Roll",
    refers_to:  "Asian/White",
    reason_and_origin:  "Much like the food, a mix of American and Asian. Also Asians, and thus half-Asians are much more prevalent on the west coast than on th…"
  },
  {
    slur:  "Calpurnia",
    refers_to:  "Blacks",
    reason_and_origin:  "Black women that are nannies. Comes from the character Calpurnia in the book \"To Kill a Mocking Bird."
  },
  {
    slur:  "Calzone",
    refers_to:  "Italians",
    reason_and_origin:  "Italian food"
  },
  {
    slur:  "Camel Cowboy",
    refers_to:  "Arabs",
    reason_and_origin:  "They ride camels like cowboys ride horses."
  },
  {
    slur:  "Camel Crunch",
    refers_to:  "Arabs",
    reason_and_origin:  "From the cereal \"Captin Crunch\" only the Arabian version"
  },
  {
    slur:  "Camel Jockey",
    refers_to:  "Arabs",
    reason_and_origin:  "From camels being a major form of transportation in the Middle Eastern countries."
  },
  {
    slur:  "Camel Lips",
    refers_to:  "Blacks",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Camel-Fucker",
    refers_to:  "Arabs",
    reason_and_origin:  "Refers to lonely Arab shepherds."
  },
  {
    slur:  "Camel-Jacker",
    refers_to:  "Arabs",
    reason_and_origin:  "A take off on Camel Jockey and Camel-Humper. This refers to the act of \"stimulating\" a camel by hand."
  },
  {
    slur:  "Campers",
    refers_to:  "Jews",
    reason_and_origin:  "WWII reference and the propensity of Jewish parents to send their children to summer camps."
  },
  {
    slur:  "Can",
    refers_to:  "Hispanics",
    reason_and_origin:  "MexiCANS, Puerto RiCANS"
  },
  {
    slur:  "Can'ardly",
    refers_to:  "Asians",
    reason_and_origin:  "They can'ardly see, originated in Australia."
  },
  {
    slur:  "Can-Kicker",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "They play baseball and soccer with crushed cans."
  },
  {
    slur:  "Canadian",
    refers_to:  "Blacks",
    reason_and_origin:  "Used as a masked replacement for 'Nigger.'"
  },
  {
    slur:  "Canadian Goose",
    refers_to:  "Jews",
    reason_and_origin:  "Joe Kennedy used this term in public to refer to Jews without anyone knowing he was doing so. Refers to Jews being loud, pesty and foreig…"
  },
  {
    slur:  "Canal",
    refers_to:  "Panamanians",
    reason_and_origin:  "Panama Canal."
  },
  {
    slur:  "Canasian",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Canadian/Asian mix. Used in the US to describe annoying Asians that come down from Canada to shop."
  },
  {
    slur:  "Cancer",
    refers_to:  "Whites",
    reason_and_origin:  "Cancer causes the face to become white, and the blood to drain away."
  },
  {
    slur:  "Candy Man",
    refers_to:  "Blacks",
    reason_and_origin:  "Named after Sammy Davis Jr.'s famous song, the \"Candy Man."
  },
  {
    slur:  "Caneater",
    refers_to:  "Australians",
    reason_and_origin:  "Differing origins. 1.) A reference to the amount of canned beer they consume, or 2.) A reference to rural Australians who hail from th…"
  },
  {
    slur:  "Canigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Combination of Canadian and Nigger for black Canadians."
  },
  {
    slur:  "Cankee/Cankie",
    refers_to:  "Canadians",
    reason_and_origin:  "Canadian-Yankee."
  },
  {
    slur:  "Canned Labor",
    refers_to:  "Mexicans",
    reason_and_origin:  "Origin Unknown, Afri(can), Mexi(can), Etc. Labor"
  },
  {
    slur:  "Canuck",
    refers_to:  "Canadians",
    reason_and_origin:  "From Johnny Canuck, emerging in 1869 as a \"younger, simpler cousin to America's Uncle Sam or Britain's John Bull.\" Reborn during World Wa…"
  },
  {
    slur:  "Canucklehead",
    refers_to:  "Canadians",
    reason_and_origin:  "Diminutive of Canuck."
  },
  {
    slur:  "Canyada",
    refers_to:  "Canadians",
    reason_and_origin:  "Insulting Canada as being as unimportant as our neighbors to the South (Mexico). Usually refferred to Canyada-our 51st state."
  },
  {
    slur:  "Captain",
    refers_to:  "Turks",
    reason_and_origin:  "English rhyming slang. Captain Kirk = Turk"
  },
  {
    slur:  "Car Thief",
    refers_to:  "Hispanics",
    reason_and_origin:  "Based on the stereotype that Hispanics steal cars"
  },
  {
    slur:  "Caramel",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Not chocolate, not vanilla, Caramel"
  },
  {
    slur:  "Cargo",
    refers_to:  "Blacks",
    reason_and_origin:  "Slave ship reference."
  },
  {
    slur:  "Carl Winslow",
    refers_to:  "Blacks",
    reason_and_origin:  "Obese black males. Reference to character from \"Family Matters\" TV show."
  },
  {
    slur:  "Carlton (Banks)",
    refers_to:  "Blacks",
    reason_and_origin:  "Black males who behave like whites or talk very proper. \"Fresh Prince of Bel-Air\" reference."
  },
  {
    slur:  "Carnie",
    refers_to:  "Mexicans",
    reason_and_origin:  "A lot of mexicans are carnies."
  },
  {
    slur:  "Carpet Pilot",
    refers_to:  "Arabs",
    reason_and_origin:  "Reference to Aladdin and his magic flying carpet. Also: Carpet Jockey"
  },
  {
    slur:  "Carpetbagger",
    refers_to:  "Americans",
    reason_and_origin:  "During the post-Civil War reconstruction era, businessmen from the North moved to the South with their possessions in bags made out o…"
  },
  {
    slur:  "Carrot Snapper",
    refers_to:  "Mormons",
    reason_and_origin:  "Refers to the mormon tradition of growing and canning foods for storage."
  },
  {
    slur:  "Carrot Top",
    refers_to:  "Irish",
    reason_and_origin:  "Hair color."
  },
  {
    slur:  "Casabooboo",
    refers_to:  "Blacks",
    reason_and_origin:  "From 1960s African leader Casavubu."
  },
  {
    slur:  "Cascos",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Black mix. Describes the offspring of two mulattos. See: Mulatto."
  },
  {
    slur:  "Cashew",
    refers_to:  "Jews",
    reason_and_origin:  "Catholic Jews. Mainly, the children of a Jew and a Catholic. Originated from a standup routine by Jack Carter in the 60s"
  },
  {
    slur:  "Casino",
    refers_to:  "Native Americans",
    reason_and_origin:  "In reference to the many casinos popping up on Indian reservations all over America"
  },
  {
    slur:  "Casper",
    refers_to:  "Whites",
    reason_and_origin:  "Casper the friendly ghost"
  },
  {
    slur:  "Cast Iron",
    refers_to:  "Blacks",
    reason_and_origin:  "The color of cast iron after weathering or \"black\" pipe - plumber's term for ungalvanized cast/ductile iron."
  },
  {
    slur:  "Cat-lick",
    refers_to:  "Irish",
    reason_and_origin:  "Catholic - Cat-lick."
  },
  {
    slur:  "Caublasian",
    refers_to:  "Mixed Races",
    reason_and_origin:  "A caucasian, black, and asian person. Pronounced \"Kuh-blasian\" (example: Tiger Woods)"
  },
  {
    slur:  "Caucasianally- Challenged",
    refers_to:  "Non-Whites",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Caucazoid",
    refers_to:  "Whites",
    reason_and_origin:  "A word used to belittle or poke fun at the caucasian designation for whites."
  },
  {
    slur:  "Caulkie",
    refers_to:  "Whites",
    reason_and_origin:  "Caulk is white."
  },
  {
    slur:  "Cave Nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Osama Bin Laden reference"
  },
  {
    slur:  "Caveman",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to the Neanderthals living in caves; used by rappers."
  },
  {
    slur:  "CBC",
    refers_to:  "Chinese",
    reason_and_origin:  "Canadian Born Chinese. A Canadian Chinese person who does not understand Chinese culture. CBC is also a major television network in Canada."
  },
  {
    slur:  "Celestial",
    refers_to:  "Chinese",
    reason_and_origin:  "Mainly used in the past by whites to describe the Chinese whom they saw as strange and from some where far away. The Chinese used to refe…"
  },
  {
    slur:  "Center Denter",
    refers_to:  "Arabs",
    reason_and_origin:  "Destroying the World Trade Center"
  },
  {
    slur:  "Chack",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Black"
  },
  {
    slur:  "Chad",
    refers_to:  "Blacks",
    reason_and_origin:  "Chad is the country next to Niger in Africa"
  },
  {
    slur:  "Chain Dragger",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to being on a prison chain gang."
  },
  {
    slur:  "Chale",
    refers_to:  "Chinese",
    reason_and_origin:  "Informal/derogatory term used by Hispanics, primarily in Mexico, to refer to Chinese people. As in \"Cafe de Chales\" = Chinese-run or owne…"
  },
  {
    slur:  "Chalky",
    refers_to:  "Blacks",
    reason_and_origin:  "Heard throughout Ireland, extremely derogatory word for blacks, who have an increasing number in the Irish population."
  },
  {
    slur:  "Chalupa",
    refers_to:  "Mexicans",
    reason_and_origin:  "The popular Mexican food dish"
  },
  {
    slur:  "Cham",
    refers_to:  "Hispanics",
    reason_and_origin:  "CHicano AMerican."
  },
  {
    slur:  "Champi�on",
    refers_to:  "Ecuadorians",
    reason_and_origin:  "Champi�on is used by Spaniards to refer to Ecuadorian immigrants in Spain. In Spanish, champi�on means mushroom. The stereotypical perso…"
  },
  {
    slur:  "Chang-Ke",
    refers_to:  "Chinese",
    reason_and_origin:  "Derogatory Korean word for the Chinese"
  },
  {
    slur:  "Chango",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by Hispanics. Spanish word meaning monkey."
  },
  {
    slur:  "Chankoro",
    refers_to:  "Chinese",
    reason_and_origin:  "Derogatory Japanese word for \"chink"
  },
  {
    slur:  "Chap",
    refers_to:  "Asians",
    reason_and_origin:  "Chinese/Japanese mix"
  },
  {
    slur:  "Chapin",
    refers_to:  "Guatemalans",
    reason_and_origin:  "Nickname to describe people from Guatemala, non-derogratory used to describe themselves"
  },
  {
    slur:  "Chapta",
    refers_to:  "Chinese",
    reason_and_origin:  "Chapta means flat in Hindi."
  },
  {
    slur:  "Chara",
    refers_to:  "Indians",
    reason_and_origin:  "A South African term for Indians. Not as derogatory as coolie"
  },
  {
    slur:  "Charcoal Briquette",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by Tony Soprano from The Sopranos to represent his daughter's half black boyfriend."
  },
  {
    slur:  "Charlie",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Originated during the Vietnam War (1960-1974) from the phrase 'Viet Cong,' shortened to V.C., which in the military phonetic alphabet i…"
  },
  {
    slur:  "Cheap Labor",
    refers_to:  "Hispanics",
    reason_and_origin:  "Because minimum wage only applies to U.S. citizens."
  },
  {
    slur:  "Checker Back",
    refers_to:  "Czechs",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Checkpoint",
    refers_to:  "Arabs",
    reason_and_origin:  "They get stopped at all airport security checkpoints."
  },
  {
    slur:  "Cheddar",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics who are frequently in the welfare line getting \"government cheese."
  },
  {
    slur:  "Cheech",
    refers_to:  "Mexicans",
    reason_and_origin:  "Famous Mexican Cheech Marin"
  },
  {
    slur:  "Cheese Nip",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Japanese. Mix of Cracker and Nip"
  },
  {
    slur:  "Cheese-Eater",
    refers_to:  "Dutch",
    reason_and_origin:  "Represents their fondness of eating cheese; used mostly by Germans."
  },
  {
    slur:  "Cheesehead",
    refers_to:  "Whites",
    reason_and_origin:  "Wisconsin is the dairybelt; frequently used in a derogatory manner."
  },
  {
    slur:  "Cheesehead",
    refers_to:  "Dutch",
    reason_and_origin:  "Used by Germans during WWII, still very offensive today"
  },
  {
    slur:  "Cheeser/Cheesehead",
    refers_to:  "Canadians",
    reason_and_origin:  "Used primarily in northern Washington State. Refers to Canadians who cross the border to shop for big blocks of inexpensive American Cheese."
  },
  {
    slur:  "Chefur",
    refers_to:  "Balkan",
    reason_and_origin:  "Comes from the same roots as \"Kaffir\", and is used in Slovenia as a derogatory term for anyone originating from one of the former Yugosla…"
  },
  {
    slur:  "Chernozhopyi",
    refers_to:  "Blacks",
    reason_and_origin:  "Russian term literally translating as 'Black-Assed'. Found here"
  },
  {
    slur:  "Cherry Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Color of their skin."
  },
  {
    slur:  "Cherry Picker",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics are often limited to low paying jobs, such as picking fruit, which includes but is not limited to cherries."
  },
  {
    slur:  "Cheshire Cat",
    refers_to:  "Blacks",
    reason_and_origin:  "From Alice In Wonderland. The only way you see them in the dark is if they open their eyes and smile."
  },
  {
    slur:  "Cheskey",
    refers_to:  "Czechs",
    reason_and_origin:  "Play on the word Czech"
  },
  {
    slur:  "Chesky",
    refers_to:  "Czech",
    reason_and_origin:  "česky, adverb. česk�, adjective. is literally pronounced \"Chesky\". This actually means \"Czech\" in the Czech language. I don't thin…"
  },
  {
    slur:  "Chew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Jewish"
  },
  {
    slur:  "Chex Mex",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Czech / Mexican"
  },
  {
    slur:  "Chex Mix",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Mexican"
  },
  {
    slur:  "Chexican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Chinese mix"
  },
  {
    slur:  "Chic",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Mexican"
  },
  {
    slur:  "Chicago Navajo",
    refers_to:  "Blacks",
    reason_and_origin:  "Heavy concentration of blacks in Chicago"
  },
  {
    slur:  "Chicken Bandit",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to one of their favorite foods."
  },
  {
    slur:  "Chico",
    refers_to:  "Hispanics",
    reason_and_origin:  "Spanish for 'little boy'"
  },
  {
    slur:  "Chief",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Chiegro",
    refers_to:  "Chinese",
    reason_and_origin:  "Refers to Chinese people that try to act like Black people or are half Black."
  },
  {
    slur:  "Chigger",
    refers_to:  "Chinese",
    reason_and_origin:  "See Chiegro. Can also be a Chinese/Black mix, or a Chinese person who acts black."
  },
  {
    slur:  "Chilango",
    refers_to:  "Hispanics",
    reason_and_origin:  "Specifically Mexico City inhabitants. People from Mexico's provinces use it as an insult denoting a lazy, tricky, cheating person from th…"
  },
  {
    slur:  "Chili",
    refers_to:  "Hispanics",
    reason_and_origin:  "They tend to eat lots of chili peppers."
  },
  {
    slur:  "Chili Choker",
    refers_to:  "Mexicans",
    reason_and_origin:  "A term used in one of the Cheech & Chong movies"
  },
  {
    slur:  "Chili-Shitter",
    refers_to:  "Hispanics",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Chinaman",
    refers_to:  "Asians",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Chindian",
    refers_to:  "Nepalese",
    reason_and_origin:  "Nepal is a really small country in between China and India, hence Chindian. Could also just as easily refer to a Chinese/Indian mix."
  },
  {
    slur:  "Chinee",
    refers_to:  "Chinese",
    reason_and_origin:  "An archaic singular for the plural Chinese, now considered offensive. Also said to be an emphasis of many Asian's inability to pronounc…"
  },
  {
    slur:  "Chinegro",
    refers_to:  "Chileans",
    reason_and_origin:  "All people from sudamerica laughs when they see a chilean and call'em that way. it is a combination of CHIleno + NEGRO (black). it refer…"
  },
  {
    slur:  "Ching-Chong",
    refers_to:  "Asians",
    reason_and_origin:  "Typically used by schoolchildren in a derogatory manner towards Asian people."
  },
  {
    slur:  "Chinig",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Black mix. Combination of 'Chink' and 'Nigger'"
  },
  {
    slur:  "Chinina",
    refers_to:  "Asians",
    reason_and_origin:  "The female version of \"chino"
  },
  {
    slur:  "Chink",
    refers_to:  "Asians",
    reason_and_origin:  "Asian equivalent of \"Nigger\" for blacks. Two possible origins: the dictionary definition is \"A narrow opening or slit\", meaning …"
  },
  {
    slur:  "Chink-a-billy",
    refers_to:  "Chinese",
    reason_and_origin:  "Half Chinese, half hillbilly."
  },
  {
    slur:  "Chinkaboo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Black mix (Chink + Jigaboo)"
  },
  {
    slur:  "Chinkamo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Half Chinese/Half Inuit Eskimo"
  },
  {
    slur:  "Chinkerbell",
    refers_to:  "Asians",
    reason_and_origin:  "Self-Explanatory"
  },
  {
    slur:  "Chinksta",
    refers_to:  "Chinese",
    reason_and_origin:  "Chinese people who try to act black; like Wanksta for white people."
  },
  {
    slur:  "Chinless Wonder",
    refers_to:  "British",
    reason_and_origin:  "Reference to inbreeding and a weak gene pool resulting in poor bone structure."
  },
  {
    slur:  "Chino",
    refers_to:  "Chinese",
    reason_and_origin:  "Spanish for Chinese."
  },
  {
    slur:  "Chinxican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Mexican mix."
  },
  {
    slur:  "Chiquita",
    refers_to:  "Blacks",
    reason_and_origin:  "The chiquita bananas have the black woman on the sticker"
  },
  {
    slur:  "Chirp",
    refers_to:  "Whites",
    reason_and_origin:  "Bird-like features, many english have big noses."
  },
  {
    slur:  "Chite",
    refers_to:  "Whites",
    reason_and_origin:  "White people trying to act Chinese or Asian."
  },
  {
    slur:  "Choco",
    refers_to:  "Blacks",
    reason_and_origin:  "Short for chocolate, in reference to skin color."
  },
  {
    slur:  "Chocolate Dip(per)",
    refers_to:  "Whites",
    reason_and_origin:  "White men, or any non black, who date black women."
  },
  {
    slur:  "Chocolate Drop",
    refers_to:  "Blacks",
    reason_and_origin:  "Chocolate is brown."
  },
  {
    slur:  "Chocolate-Covered Marshmallow",
    refers_to:  "Blacks",
    reason_and_origin:  "A black guy who acts white."
  },
  {
    slur:  "Chocolate-Dipper",
    refers_to:  "Whites",
    reason_and_origin:  "White women who date Black men."
  },
  {
    slur:  "Chod",
    refers_to:  "Guamanians",
    reason_and_origin:  "Used by Guamanians to denote other, lower class, Guamanians. ie. Guamanian trash."
  },
  {
    slur:  "Chole",
    refers_to:  "Creole",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Cholo",
    refers_to:  "Mexicans",
    reason_and_origin:  "A term used to refer to Mexican gangsters."
  },
  {
    slur:  "Cholo/chola",
    refers_to:  "Hispanics",
    reason_and_origin:  "Of uncertain origin. Commonly denotes Hispanic gangster types (in the U.S., not in Mexico)"
  },
  {
    slur:  "Chombo",
    refers_to:  "Blacks",
    reason_and_origin:  "Panamanian derogatory jargon."
  },
  {
    slur:  "Chonkey",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/White"
  },
  {
    slur:  "Chonky",
    refers_to:  "Chinese",
    reason_and_origin:  "Concatenation of Chinese or Chink and Honky. See: Chink, Honky."
  },
  {
    slur:  "Choo-Choo",
    refers_to:  "Chinese",
    reason_and_origin:  "Chinese immigrants help build the Pacific railroad."
  },
  {
    slur:  "Chop",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Italian. Chink + wop = chop."
  },
  {
    slur:  "Chop Stick",
    refers_to:  "Chinese",
    reason_and_origin:  "Refers to the utensils commonly used to eat Chinese food"
  },
  {
    slur:  "Chopper",
    refers_to:  "Americans",
    reason_and_origin:  "There is a high circumcision rate in the United States."
  },
  {
    slur:  "Chork",
    refers_to:  "Chinese",
    reason_and_origin:  "chinese dork"
  },
  {
    slur:  "Chosenjin",
    refers_to:  "Koreans",
    reason_and_origin:  "Japanese word calling Koreans inferior to them."
  },
  {
    slur:  "Christ Killer",
    refers_to:  "Jews",
    reason_and_origin:  "See: Jesus Killer."
  },
  {
    slur:  "Chromer",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Majority of Aboriginals (Abos) sniff paint from a Coca-cola bottle commonly known as chroming"
  },
  {
    slur:  "Chromey",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Whites mix. What the old-timers called them when I was a kid fifty years ago."
  },
  {
    slur:  "Chuck",
    refers_to:  "Polish",
    reason_and_origin:  "Lots of Polish last names end in czyk, pronounced \"chuck."
  },
  {
    slur:  "Chuco",
    refers_to:  "Mexicans",
    reason_and_origin:  "Laredo Used to describe gang bangers. Comes from the word Pachuco"
  },
  {
    slur:  "CHUD",
    refers_to:  "Blacks",
    reason_and_origin:  "From the monster movie \"C.H.U.D.\", starring primitive dark creatures that lived in sewers"
  },
  {
    slur:  "Chug",
    refers_to:  "Native Americans",
    reason_and_origin:  "Refers to alcoholism in Native Americans. They chug it back."
  },
  {
    slur:  "Chukcha",
    refers_to:  "Eskimos",
    reason_and_origin:  "Russian for Eskimo. In Russian jokes they do ask a lot of stupid questions, make silly remarks, and draw wrong conclusions."
  },
  {
    slur:  "Chunga",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanic girls who dress and act Black. No idea why[?]"
  },
  {
    slur:  "Chunk",
    refers_to:  "Chinese",
    reason_and_origin:  "A variant of \"chink.\" Used in the place of chink when speaking to a fat chinese person, or a \"chunk."
  },
  {
    slur:  "Chunt",
    refers_to:  "Mexicans",
    reason_and_origin:  "Comes from 'chuntaro' meaning bad-dressed Mexican"
  },
  {
    slur:  "Cigani",
    refers_to:  "Serbs",
    reason_and_origin:  "Means, \"Gypsy\", derogatory reference to the Roma/Gypsy backround lineage of Serbians"
  },
  {
    slur:  "Cigarette-Smuggler",
    refers_to:  "Montenegrians",
    reason_and_origin:  "Ask their president Milo Djukanovic, and his brother Atzo"
  },
  {
    slur:  "Circle-K",
    refers_to:  "Jews",
    reason_and_origin:  "Circle K appears on kosher food labels"
  },
  {
    slur:  "CJ",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Chinese/Jew"
  },
  {
    slur:  "Clamhand",
    refers_to:  "Whites",
    reason_and_origin:  "Probably used because many white males used to live in poverty, surviving by scavenging clams and the like."
  },
  {
    slur:  "Clampett",
    refers_to:  "Whites",
    reason_and_origin:  "Originated on TV's \"The Beverly Hillbillies."
  },
  {
    slur:  "Clay-Eater",
    refers_to:  "Whites",
    reason_and_origin:  "Similar to cracker in that it was in reference to poor southern whites who resorted to eating clay."
  },
  {
    slur:  "Cleaning Lady",
    refers_to:  "Polish",
    reason_and_origin:  "There are many Polish cleaning ladies"
  },
  {
    slur:  "Clicker",
    refers_to:  "Africans",
    reason_and_origin:  "Some African tribes communicate by \"clicking."
  },
  {
    slur:  "Clicky",
    refers_to:  "Blacks",
    reason_and_origin:  "From that African language that all it is is clicks and whistles"
  },
  {
    slur:  "Cliff Ape",
    refers_to:  "Blacks",
    reason_and_origin:  "Black/Simian/Primate eference"
  },
  {
    slur:  "Cliptip",
    refers_to:  "Jews",
    reason_and_origin:  "Circumcision reference."
  },
  {
    slur:  "Clit-Chopper",
    refers_to:  "Arabs",
    reason_and_origin:  "Female circumcision"
  },
  {
    slur:  "Clit-Swiper",
    refers_to:  "Arabs",
    reason_and_origin:  "Female circumcision is a common practive in some Arab countries"
  },
  {
    slur:  "Clitless",
    refers_to:  "Arabs",
    reason_and_origin:  "From the practice of female circumcision in some parts of the Arab world"
  },
  {
    slur:  "Clocker",
    refers_to:  "Blacks",
    reason_and_origin:  "A street term for lowest level crack dealer."
  },
  {
    slur:  "Cloggie",
    refers_to:  "Dutch",
    reason_and_origin:  "The wooden shoes."
  },
  {
    slur:  "Clover",
    refers_to:  "Irish",
    reason_and_origin:  "Clovers are prevalent in Irish society."
  },
  {
    slur:  "Clown",
    refers_to:  "Irish",
    reason_and_origin:  "Not used so much as a racial slur, however, the classic clown is based on a stereotyped image of Irish people: bushy red hair, a large re…"
  },
  {
    slur:  "Clown-Car",
    refers_to:  "Mexicans",
    reason_and_origin:  "Used to describe the overcrowded vehicles of migrant workers."
  },
  {
    slur:  "Clyde",
    refers_to:  "Blacks",
    reason_and_origin:  "Perhaps comes from the name of the monkey in the Clint Eastwood films"
  },
  {
    slur:  "Coal-Burner",
    refers_to:  "Whites",
    reason_and_origin:  "White Women. From the film 'Freeway', represents when a white woman dates a black man. Also used in the porn industry to refer to whit…"
  },
  {
    slur:  "Coal-Cracker",
    refers_to:  "Irish",
    reason_and_origin:  "Many Irish immigrants mined coal."
  },
  {
    slur:  "Coal-Miner",
    refers_to:  "Blacks",
    reason_and_origin:  "A Russian term for blacks, which originated because of their dark skin which looks like it is covered in coal dust. Pronounced \"shahktor…"
  },
  {
    slur:  "Coalhauler",
    refers_to:  "Whites",
    reason_and_origin:  "A white woman that has relations with black men."
  },
  {
    slur:  "Coat",
    refers_to:  "Hispanics",
    reason_and_origin:  "Instead of showering, they put on a new coat of cologne."
  },
  {
    slur:  "Coca",
    refers_to:  "Mozambicans",
    reason_and_origin:  "Term used by the Portuguese referring to white people from Mozambique. From \"Coca-Cola\"."
  },
  {
    slur:  "Cocachewers",
    refers_to:  "Peruvians",
    reason_and_origin:  "Instead of chewing tabacco they chew coca leaves (cocaine)"
  },
  {
    slur:  "Cochise",
    refers_to:  "Native Americans",
    reason_and_origin:  "An Apache chief who killed many a white man"
  },
  {
    slur:  "Cock-Asian",
    refers_to:  "Whites",
    reason_and_origin:  "Play on words"
  },
  {
    slur:  "Cock/Cauc",
    refers_to:  "Whites",
    reason_and_origin:  "Sort for Caucasian"
  },
  {
    slur:  "Cocks",
    refers_to:  "British",
    reason_and_origin:  "Short for \"cockneys"
  },
  {
    slur:  "Cocksauce",
    refers_to:  "Whites",
    reason_and_origin:  "Semen is white."
  },
  {
    slur:  "Cocoa",
    refers_to:  "Blacks",
    reason_and_origin:  "From southwestern area of the US, called blacks \"cocoa\" for very much disrespect. See Cocoa Puff."
  },
  {
    slur:  "Cocoa Puff",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks with afros or puffy hair"
  },
  {
    slur:  "Cocoa Puff",
    refers_to:  "Whites",
    reason_and_origin:  "Represents a slang term for Blacks or a derogatory term for a White woman who sleeps or has children from Blacks. Originated from th…"
  },
  {
    slur:  "Cocolo",
    refers_to:  "Blacks",
    reason_and_origin:  "Dominicans used this term for Blacks because they look like \"Coco\"nuts and it sounds really African."
  },
  {
    slur:  "Coconut",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks, Hispanics, Filipino, Arabs, etc. Mainly used to describe dark-skinned people who are perceived as trying to be \"white\"...brown o…"
  },
  {
    slur:  "Coconut Nigger",
    refers_to:  "Pacific Islanders",
    reason_and_origin:  "They're dark-skinned, hence the \"Nigger\", and they're from places where there are coconuts."
  },
  {
    slur:  "Cocoon",
    refers_to:  "Blacks",
    reason_and_origin:  "It's what you call a black guy that stutters"
  },
  {
    slur:  "Coffee Bean",
    refers_to:  "Colombians",
    reason_and_origin:  "A high precent of coffee comes from Colombia"
  },
  {
    slur:  "Coin Slot",
    refers_to:  "Asians",
    reason_and_origin:  "Reference to their eyes"
  },
  {
    slur:  "Coke Camel",
    refers_to:  "Hispanics",
    reason_and_origin:  "Drug trafficking."
  },
  {
    slur:  "Cold Drink",
    refers_to:  "Blacks",
    reason_and_origin:  "In the South, some Blacks refer to all beverages as \"Cold Drinks.\" For example, \"I want some cold drink!"
  },
  {
    slur:  "Colin",
    refers_to:  "Blacks",
    reason_and_origin:  "Black who act white: Colin Powell."
  },
  {
    slur:  "Colonel's Kids",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to Colonel Sanders. Blacks are thought to love Kentucky Fried Chicken."
  },
  {
    slur:  "Colonial",
    refers_to:  "Americans",
    reason_and_origin:  "Used by Europeans for Americans."
  },
  {
    slur:  "Colored",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin color. Probably not a very good slur, as it's one of the words of NAACP."
  },
  {
    slur:  "Coltrane",
    refers_to:  "Blacks",
    reason_and_origin:  "In reference to John Coltrane, the famous Jazz saxophonist. Used in the film \"The Royal Tenenbaum's"
  },
  {
    slur:  "Commie",
    refers_to:  "Russians",
    reason_and_origin:  "Originated during the cold war. Short for communist."
  },
  {
    slur:  "Comrade Chinx",
    refers_to:  "Africans",
    reason_and_origin:  "Comrade Chinx was a rebel in Zimbabwe during British rule, and now rebels throughout Africa have adopted this name."
  },
  {
    slur:  "Confederate",
    refers_to:  "Whites",
    reason_and_origin:  "Many people in the southern U.S. supported the confederacy in the Civil War, and still display their support with confederate flags…"
  },
  {
    slur:  "Congo",
    refers_to:  "Blacks",
    reason_and_origin:  "Dark African Americans who act better than White people"
  },
  {
    slur:  "Congo Lip",
    refers_to:  "Blacks",
    reason_and_origin:  "In reference to the ring-shaped objects primitive peoples from the South American jungles insert into their lips."
  },
  {
    slur:  "Conky",
    refers_to:  "Whites",
    reason_and_origin:  "Combination of \"caucasian\" (or \"cracker\") and \"honky."
  },
  {
    slur:  "Conky",
    refers_to:  "Blacks",
    reason_and_origin:  "Derived from \"conk\", a lye-straightened hairdo popularized in the 1920s by Cab Calloway."
  },
  {
    slur:  "Conquistador",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the Spanish conquerors who took over areas against the will of the current inhabitants."
  },
  {
    slur:  "Convict",
    refers_to:  "Blacks",
    reason_and_origin:  "Two-thirds of American inmates are Black."
  },
  {
    slur:  "Convict",
    refers_to:  "Australians",
    reason_and_origin:  "Implies that all Australians are descended from the penal colonies early in Australia's western colonisation."
  },
  {
    slur:  "Cook",
    refers_to:  "Asians",
    reason_and_origin:  "Most Asians in non-asian countries are cooks."
  },
  {
    slur:  "Cookie",
    refers_to:  "Chinese",
    reason_and_origin:  "Refers to fortune cookies. 'Cookie person/people.'"
  },
  {
    slur:  "Cookie",
    refers_to:  "Blacks",
    reason_and_origin:  "One of the few jobs blacks were allowed to do after enlisting in the U.S. Navy was food preparation. Referenced in \"Men of Honor."
  },
  {
    slur:  "Cookies 'n Cream",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White"
  },
  {
    slur:  "Coolie",
    refers_to:  "Asians",
    reason_and_origin:  "Term for unskilled Chinese workers, especially on U.S. railroads."
  },
  {
    slur:  "Coon",
    refers_to:  "Blacks",
    reason_and_origin:  "Probably refers to the Portuguese word for slave pens or barracks \"baracoons\". Could also have meaning as a shortening of \"raccoon\", a…"
  },
  {
    slur:  "Coonadian",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people from Canada"
  },
  {
    slur:  "Coonass",
    refers_to:  "Cajuns",
    reason_and_origin:  "The origin of the term is said to have come from the French word \"conasse\". During the Second World War, many Cajun men served in the arme…"
  },
  {
    slur:  "Cooner",
    refers_to:  "Blacks",
    reason_and_origin:  "Black actor who sells out to get laughs from white people."
  },
  {
    slur:  "Coontang",
    refers_to:  "Blacks",
    reason_and_origin:  "Whenever a White man fucks a Black woman, he gets some Coontang"
  },
  {
    slur:  "Cordon",
    refers_to:  "Blacks",
    reason_and_origin:  "Derivative of the name of a champagne; Cordon Negro."
  },
  {
    slur:  "Corky",
    refers_to:  "Whites",
    reason_and_origin:  "For kids with downs syndrome, Corky, on \"Life Goes On."
  },
  {
    slur:  "Corky",
    refers_to:  "Dominicans",
    reason_and_origin:  "Sammy Sosa's corked bat."
  },
  {
    slur:  "Corn",
    refers_to:  "Mexicans",
    reason_and_origin:  "From Mexi-Corn, from Southern California reference to Mexicans picking corn or other produce."
  },
  {
    slur:  "Cornbread",
    refers_to:  "Blacks",
    reason_and_origin:  "It was in the movie \"Shaft.\" Apparently Black people like Corn Bread."
  },
  {
    slur:  "Cornelius",
    refers_to:  "Blacks",
    reason_and_origin:  "Planet Of The Apes reference."
  },
  {
    slur:  "Cornfed",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to large white boys from rural areas (They are cornfed like premium cattle) Typically considered to be extremely strong but not to…"
  },
  {
    slur:  "Cosby",
    refers_to:  "Blacks",
    reason_and_origin:  "Sitcom named the Cosby's. A family of all blacks."
  },
  {
    slur:  "Cossak",
    refers_to:  "Russians",
    reason_and_origin:  "A slur for Russians in general"
  },
  {
    slur:  "Cotton Ball",
    refers_to:  "Blacks",
    reason_and_origin:  "Nappy/frizzy hair esp. the 70's Afro style; bought to pick cotton in the Old South"
  },
  {
    slur:  "Cotton-Picker",
    refers_to:  "Blacks",
    reason_and_origin:  "Originates from pre-Civil War US. Refers to the slaves who picked cotton all day at the plantations."
  },
  {
    slur:  "Cow-Kisser",
    refers_to:  "Indians",
    reason_and_origin:  "For the worship of cows in India."
  },
  {
    slur:  "Cowboy-Killer",
    refers_to:  "Native Americans",
    reason_and_origin:  "They killed many a cowboy."
  },
  {
    slur:  "Cowfuck",
    refers_to:  "Whites",
    reason_and_origin:  "Farmers in the fields getting intimate with their animals"
  },
  {
    slur:  "Crabrangook",
    refers_to:  "Chinese",
    reason_and_origin:  "Crabrangoon. Take away the goon and add gook."
  },
  {
    slur:  "Cracker",
    refers_to:  "Whites",
    reason_and_origin:  "This term is said to have originated in England before the 16th century, refering to the lower class whose diet primarily consisted o…"
  },
  {
    slur:  "Cracker Jack",
    refers_to:  "Whites",
    reason_and_origin:  "Same as cracker only derived from the popcorn"
  },
  {
    slur:  "Cracker Jap",
    refers_to:  "Japanese",
    reason_and_origin:  "A person of mixed Japanese/Caucasian descent"
  },
  {
    slur:  "Crapaud",
    refers_to:  "French",
    reason_and_origin:  "Originally the name of a South European frog, although during the Napoleonic Wars it became a term used by British soldiers referring t…"
  },
  {
    slur:  "Craw",
    refers_to:  "Blacks",
    reason_and_origin:  "Fondness of \"CRAW\"dads."
  },
  {
    slur:  "Crayola",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people are colored, as in crayons."
  },
  {
    slur:  "Cream Of Wheat",
    refers_to:  "Blacks",
    reason_and_origin:  "A famous black person in the world of advertising is the man on the Cream of Wheat box."
  },
  {
    slur:  "Cremlin",
    refers_to:  "Whites",
    reason_and_origin:  "White Europeans."
  },
  {
    slur:  "Crick Gypsy",
    refers_to:  "Whites",
    reason_and_origin:  "White trash who wander around looking for a job. In West Viginia the only navigable areas are the valleys formed by rivers an…"
  },
  {
    slur:  "Cricket",
    refers_to:  "Blacks",
    reason_and_origin:  "Color of skin vs. cricket's color (brown/black). Pure blooded Blacks having \"large fish eyes, dark brown skin, and long legs like …"
  },
  {
    slur:  "Crikey",
    refers_to:  "Jews",
    reason_and_origin:  "A corrupted version of \"Christ Killer"
  },
  {
    slur:  "Crikey",
    refers_to:  "Australians",
    reason_and_origin:  "Catch phrase of Steve Irwin, a famous Australian animal expert"
  },
  {
    slur:  "Crime",
    refers_to:  "Blacks",
    reason_and_origin:  "The high crime rate among Blacks."
  },
  {
    slur:  "Crimestopper",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to an African American woman who has an abortion"
  },
  {
    slur:  "Criminal Factory",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to pregnant black women, thought to be breeding future criminals."
  },
  {
    slur:  "Crioulo",
    refers_to:  "Blacks",
    reason_and_origin:  "Brazilian slur for black people"
  },
  {
    slur:  "Crisco",
    refers_to:  "Whites",
    reason_and_origin:  "Crisco is a white vegetable oil product."
  },
  {
    slur:  "Crispy",
    refers_to:  "Blacks",
    reason_and_origin:  "Very dark black people are refered to as crispy"
  },
  {
    slur:  "Crizm",
    refers_to:  "Whites",
    reason_and_origin:  "Some sort of variant of \"cracker.\" Unsure of origins, but have heard it used in Florida."
  },
  {
    slur:  "Cross-Dresser",
    refers_to:  "Scottish",
    reason_and_origin:  "The wearing of Kilts (like skirts)"
  },
  {
    slur:  "Crotchless Pants",
    refers_to:  "Koreans",
    reason_and_origin:  "Refers to some of their characters looking like crotchless pants."
  },
  {
    slur:  "Crote",
    refers_to:  "Croatians",
    reason_and_origin:  "Slang term for Croatians"
  },
  {
    slur:  "Crouton",
    refers_to:  "French",
    reason_and_origin:  "French salad dressing"
  },
  {
    slur:  "Crow",
    refers_to:  "Blacks",
    reason_and_origin:  "Relatively large black bird. Could also be a reference to \"Jim Crow\", a popular 19th-century minstrel song that stereotyped Africa…"
  },
  {
    slur:  "Crow",
    refers_to:  "Native Americans",
    reason_and_origin:  "Used against other then Crows. Crows were scouts for the American Military or considered tradors by other Native Americans."
  },
  {
    slur:  "Crudo",
    refers_to:  "Whites",
    reason_and_origin:  "Literally \"Raw\" in Spanish"
  },
  {
    slur:  "Crumpet-Stuffer",
    refers_to:  "British",
    reason_and_origin:  "They eat crumpets with their tea."
  },
  {
    slur:  "Crumpet-Sucker",
    refers_to:  "British",
    reason_and_origin:  "They eat crumpets."
  },
  {
    slur:  "Crunchy",
    refers_to:  "Iraqis",
    reason_and_origin:  "Used by US Marines in the second Iraq war. When the US attacked Iraq, Saddam Hussein allegedly told his troops that the American tank…"
  },
  {
    slur:  "Cube",
    refers_to:  "Cubans",
    reason_and_origin:  "Self-Explanitory"
  },
  {
    slur:  "Cube",
    refers_to:  "Eskimos",
    reason_and_origin:  "Referring to their igloos made of cubes"
  },
  {
    slur:  "Cubs",
    refers_to:  "Blacks",
    reason_and_origin:  "Look like cartoon bear cubs."
  },
  {
    slur:  "Cuff",
    refers_to:  "Blacks",
    reason_and_origin:  "Heard used by white southern Georgia farmers to describe blacks. The origin is that blacks are always being arrested and being hand\"cuffed…"
  },
  {
    slur:  "Curb-Biter",
    refers_to:  "Blacks",
    reason_and_origin:  "Having someone bite the curb and kicking him in the back of the head is a painful way to kill someone. Often, as in the movie America…"
  },
  {
    slur:  "Curry",
    refers_to:  "Indians",
    reason_and_origin:  "Derivative of Curry Muncher etc."
  },
  {
    slur:  "Curry-Muncher",
    refers_to:  "Indians",
    reason_and_origin:  "They eat Curry."
  },
  {
    slur:  "Custer",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Native Americans. I guess it means they want to see them dead like General Custer."
  },
  {
    slur:  "Cuz",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Form of \"cousin\", all Aboriginals consider themselves to be from the same family, hence they refer to each other as \"cuz"
  },
  {
    slur:  "Cygan",
    refers_to:  "Gypsy",
    reason_and_origin:  "Polish word for Gypsy, used officially, but Gypsies prefer to be called Roma. Cygan is becoming unacceptable in the Polish language."
  },
  {
    slur:  "Czarnuch",
    refers_to:  "Blacks",
    reason_and_origin:  "In Polish 'black' (as a color) is 'czarny'. Strongly derogatory."
  },
  {
    slur:  "Czigger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black Czechs"
  },
  {
    slur:  "D.F.N.",
    refers_to:  "Blacks",
    reason_and_origin:  "Dumb Fucking Nigger"
  },
  {
    slur:  "D.I.P.",
    refers_to:  "Indians",
    reason_and_origin:  "Dumb Idiotic Punjab"
  },
  {
    slur:  "Da Bi Zi",
    refers_to:  "Whites",
    reason_and_origin:  "Used in China, it means \"big nose.\" Da Bi Zi is the phonetic equivalent of \"tabeestu."
  },
  {
    slur:  "Da Gui",
    refers_to:  "Whites",
    reason_and_origin:  "Mandarin Chinese term meaning \"big demon\"."
  },
  {
    slur:  "Dago",
    refers_to:  "Italians",
    reason_and_origin:  "Slang for Italian, originally coming from Spain. \"Diego\" was a common name in Italy at the time this slang was first used. See: Wop."
  },
  {
    slur:  "Dago",
    refers_to:  "Spanish",
    reason_and_origin:  "Apparently the British use \"dago\" to describe Spaniards as opposed to Italians."
  },
  {
    slur:  "Dagowop",
    refers_to:  "Italians",
    reason_and_origin:  "Combination of two slurs."
  },
  {
    slur:  "Dahati",
    refers_to:  "Iranians",
    reason_and_origin:  "Like a hillbilly or redneck; a villager or someone from the country"
  },
  {
    slur:  "Daikon",
    refers_to:  "Japanese",
    reason_and_origin:  "The Dakion Radish is very popular is Japanese cooking."
  },
  {
    slur:  "DAK",
    refers_to:  "Koreans",
    reason_and_origin:  "Dumb Ass Korean. Name given to Koreans by the Whites who visit the country."
  },
  {
    slur:  "DampBack",
    refers_to:  "Mexicans",
    reason_and_origin:  "Part Mexican, not quite wet."
  },
  {
    slur:  "DAN",
    refers_to:  "Blacks",
    reason_and_origin:  "Dumb Ass Nigger\". Used to conceil racially discrimative remarks towards blacks when present."
  },
  {
    slur:  "Dancing Dragon",
    refers_to:  "Chinese",
    reason_and_origin:  "During Chinese festivals, its typical to see many people in a long dragon costume in which they bounce up and down...usually in large…"
  },
  {
    slur:  "Dandruff",
    refers_to:  "Whites",
    reason_and_origin:  "Self-expanatory"
  },
  {
    slur:  "Darkie",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin color."
  },
  {
    slur:  "Darkness",
    refers_to:  "Blacks",
    reason_and_origin:  "Self Explanatory. Often used to describe a crowd of African Americans."
  },
  {
    slur:  "Data",
    refers_to:  "Asians",
    reason_and_origin:  "From the move \"The Goonies.\" Data was a stereotypical Asian child prodigy."
  },
  {
    slur:  "Dawg",
    refers_to:  "Blacks",
    reason_and_origin:  "Some blacks call other \"Dawgs\". See: Homie"
  },
  {
    slur:  "Ddang Kong",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Term used by Koreans to describe Vietnamese. Literally means \"peanut\". Reasons for this word: 1) it may be because the word sounds ver…"
  },
  {
    slur:  "Dead Sea Pedestrian",
    refers_to:  "Jews",
    reason_and_origin:  "See: Red Sea Pedestrian."
  },
  {
    slur:  "Dees-Right",
    refers_to:  "Arabs",
    reason_and_origin:  "Arab people always ask \"Is dees right, Is dees right?\" (meaning 'is this right?')"
  },
  {
    slur:  "Defendant",
    refers_to:  "Blacks",
    reason_and_origin:  "They are known often as this in a court of law"
  },
  {
    slur:  "Dema",
    refers_to:  "Icelanders",
    reason_and_origin:  "dema refers to an ancestral deity in many mythologies that is murdered and then from the body comes some form of creation- i.e. a plant, o…"
  },
  {
    slur:  "Demi-nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Somewhat lighter skin tone than Blacks."
  },
  {
    slur:  "Democrats",
    refers_to:  "Blacks",
    reason_and_origin:  "A popular political affiliation among African Americans. Also in reference to always wanting stuff for free."
  },
  {
    slur:  "DeNiro",
    refers_to:  "Whites",
    reason_and_origin:  "A white man who dates black women"
  },
  {
    slur:  "Derka Derka",
    refers_to:  "Arabs",
    reason_and_origin:  "From Team America: World Police."
  },
  {
    slur:  "Desabrido",
    refers_to:  "Whites",
    reason_and_origin:  "Spanish slang for without color, or flavorless with no substance."
  },
  {
    slur:  "Desi",
    refers_to:  "Indians",
    reason_and_origin:  "Refers to native Indians, non-derogatory even humorous, \"des\" means \"country\" and \"desi\" means fellow countrymen"
  },
  {
    slur:  "Desi",
    refers_to:  "Cubans",
    reason_and_origin:  "Reference to Desi Arnaz."
  },
  {
    slur:  "Destro",
    refers_to:  "Blacks",
    reason_and_origin:  "Destro is the evil Cobra character from G.I. Joe."
  },
  {
    slur:  "Deuce",
    refers_to:  "Blacks",
    reason_and_origin:  "On the Philadelphia police form, 1=white, 2=black"
  },
  {
    slur:  "Devil",
    refers_to:  "Whites",
    reason_and_origin:  "Used mainly by Blacks to refer to the evil white man."
  },
  {
    slur:  "Dexican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Dutch/Mexican mix."
  },
  {
    slur:  "Dholia",
    refers_to:  "Whites",
    reason_and_origin:  "Indian for white person"
  },
  {
    slur:  "Dial",
    refers_to:  "Jews",
    reason_and_origin:  "During WWII, the Nazis would make soap out of the fat of the burned Jews (Dial is a brand of soap). This story is said to be true, and als…"
  },
  {
    slur:  "Diaper-Head",
    refers_to:  "Arabs",
    reason_and_origin:  "Same idea as Towel-head or Rag-head."
  },
  {
    slur:  "Dib",
    refers_to:  "Israelis",
    reason_and_origin:  "Dumb Israeli Bastard. Commonly used by American Jews to deride the Israeli culture."
  },
  {
    slur:  "Dicksuckinflog",
    refers_to:  "Dutch",
    reason_and_origin:  "16th Century term for prostitutes accused of witchcraft."
  },
  {
    slur:  "Diesel",
    refers_to:  "Native Americans",
    reason_and_origin:  "Rhyming slang, diesel engine = injun"
  },
  {
    slur:  "Dim Sum",
    refers_to:  "Chinese",
    reason_and_origin:  "Refers to the food. Used in the movie \"Romeo Must Die."
  },
  {
    slur:  "Ding Dong",
    refers_to:  "Blacks",
    reason_and_origin:  "Black on the outside, white on the inside. Blacks who act white"
  },
  {
    slur:  "Dinge",
    refers_to:  "Blacks",
    reason_and_origin:  "Used in the novel \"To Kill a Mockingbird\"."
  },
  {
    slur:  "Dingo Fucker",
    refers_to:  "Australians",
    reason_and_origin:  "See Roofucker"
  },
  {
    slur:  "Dink",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Used in the movies Apocalypse Now and Platoon to refer to the North Vietnamese. Comes from French Vietnamese \"beaucoup dinky dau\".…"
  },
  {
    slur:  "Dirt-Worshipper",
    refers_to:  "Native Americans",
    reason_and_origin:  "Made popular by HBO's \"Deadwood"
  },
  {
    slur:  "Dirty Knees",
    refers_to:  "Arabs",
    reason_and_origin:  "In reference to the daily Muslim prayings on their knees"
  },
  {
    slur:  "Dirty Sanchez",
    refers_to:  "Mexicans",
    reason_and_origin:  "Common hispanic name."
  },
  {
    slur:  "Ditchpig",
    refers_to:  "Whites",
    reason_and_origin:  "Redneck kids who play in the ditches/streets."
  },
  {
    slur:  "Ditz",
    refers_to:  "Whites",
    reason_and_origin:  "Mentally lacking, blonde haired, white women."
  },
  {
    slur:  "Do-Da",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people stand by the mail box and ask the mailman, \"Do 'da, do 'da welfare check come today?"
  },
  {
    slur:  "Doener",
    refers_to:  "Turkish",
    reason_and_origin:  "Avery common Turkish food (meat and vegetables in a roasted bread)"
  },
  {
    slur:  "Dog-Breath",
    refers_to:  "Koreans",
    reason_and_origin:  "Eating dogs, plus mean temper."
  },
  {
    slur:  "Dog-Eater",
    refers_to:  "Asians",
    reason_and_origin:  "They have been known to eat dogs; as seen on \"Faces of Death\" Volumes 1-6."
  },
  {
    slur:  "Dog-Fucker",
    refers_to:  "Whites",
    reason_and_origin:  "All bestiality porn actors are white"
  },
  {
    slur:  "Dog-Muncher",
    refers_to:  "Asians",
    reason_and_origin:  "See Dog-Eater"
  },
  {
    slur:  "Dome",
    refers_to:  "Dominicans",
    reason_and_origin:  "New York origin, Washington Heights region. Used by other Hispanics to refer to the Dominicans."
  },
  {
    slur:  "Domino",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black / White"
  },
  {
    slur:  "Donkey",
    refers_to:  "Irish",
    reason_and_origin:  "It was cheaper to hire an irishman than a donkey in the pennsylvania coal minning days of the 1800's"
  },
  {
    slur:  "Donkey Kong",
    refers_to:  "Blacks",
    reason_and_origin:  "Donkey Kong was a large ape."
  },
  {
    slur:  "Dootie",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to their dootie-brown skin."
  },
  {
    slur:  "Doozers",
    refers_to:  "Whites",
    reason_and_origin:  "Used to describe white college students who do nothing but party and pull 2.0 GPAs."
  },
  {
    slur:  "Dorito",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks have a fondness for Doritos."
  },
  {
    slur:  "Dot Knot",
    refers_to:  "Indians",
    reason_and_origin:  "Dot (red dot on forehead) Knot (turbins on Punjabs)"
  },
  {
    slur:  "Dot/Dot-Head",
    refers_to:  "Indians",
    reason_and_origin:  "Refers to the \"bindi\" (dot) on their foreheads. The dot's significance relates to the marital status of an indian female. Red dot: married…"
  },
  {
    slur:  "Dottie",
    refers_to:  "Indians",
    reason_and_origin:  "Indians are the smart ones that put the \"dot\" in \".com"
  },
  {
    slur:  "Double A",
    refers_to:  "Blacks",
    reason_and_origin:  "Shorter version of 'African American.'"
  },
  {
    slur:  "Double D",
    refers_to:  "Arabs",
    reason_and_origin:  "Desert Darky"
  },
  {
    slur:  "Double Dip",
    refers_to:  "Blacks",
    reason_and_origin:  "Used for extra-dark Blacks, appearing as if they were dipped in chocolate twice."
  },
  {
    slur:  "Doujin",
    refers_to:  "Blacks",
    reason_and_origin:  "Japanese slur for blacks. Dou means dirt, jin means person."
  },
  {
    slur:  "Douse",
    refers_to:  "Whites",
    reason_and_origin:  "Pronounced \"Doosss\". Used by British Blacks of Jamaican heritage. Thought to originate from one of the first white men to reach Jamaica…"
  },
  {
    slur:  "Dozer",
    refers_to:  "Hispanics",
    reason_and_origin:  "They always work on in the field of construction, thats were Bull \"Dozer\" comes into play."
  },
  {
    slur:  "DP",
    refers_to:  "Polish",
    reason_and_origin:  "Dumb Polish,\" pronounced \"deepee.\" After World War II, displaced refugees of Eastern European origin were referred as Displaced Persons…"
  },
  {
    slur:  "Drac",
    refers_to:  "Romanians",
    reason_and_origin:  "Short for \"Dracula\" who is from a town in Transylvania which makes up a good deal of modern Romania."
  },
  {
    slur:  "Drago",
    refers_to:  "Russians",
    reason_and_origin:  "Character from Rocky 4, the big dumb Neanderthal"
  },
  {
    slur:  "Dreads",
    refers_to:  "Jamaicans",
    reason_and_origin:  "Hair style."
  },
  {
    slur:  "Dreidl",
    refers_to:  "Jews",
    reason_and_origin:  "Jewish toy"
  },
  {
    slur:  "Dried Shit",
    refers_to:  "Whites",
    reason_and_origin:  "Shit turns white after being left alone"
  },
  {
    slur:  "Drongo",
    refers_to:  "Australians",
    reason_and_origin:  "A drongo is a very Australian word for an idiot"
  },
  {
    slur:  "Drunk",
    refers_to:  "Irish",
    reason_and_origin:  "Irish are stereotypically drunks."
  },
  {
    slur:  "Dryback",
    refers_to:  "Canadians",
    reason_and_origin:  "Canadian cross the border on land mostly unlike many Mexicans who do so via the Rio Grande (see Wetback)"
  },
  {
    slur:  "Drywaller",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics do a lot of construction work and are usually paid very little or nothing."
  },
  {
    slur:  "Dub",
    refers_to:  "Ukrainians",
    reason_and_origin:  "Dumb Ukrainian Bastard."
  },
  {
    slur:  "Dubya",
    refers_to:  "Americans",
    reason_and_origin:  "The not-so-bright president"
  },
  {
    slur:  "Duck",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Based on noises made by Vietnamese people speaking in their native tongue, everything comes out sounding like \"duk-duk-duk\". Also i…"
  },
  {
    slur:  "Duke Nukem",
    refers_to:  "Americans",
    reason_and_origin:  "Used the first Atomic bomb."
  },
  {
    slur:  "Dumb Wet",
    refers_to:  "Hispanics",
    reason_and_origin:  "Variation of Wet-Back, as used on an episode of X-Files."
  },
  {
    slur:  "Dumb-inican",
    refers_to:  "Dominicans",
    reason_and_origin:  "People from Domincan Republic"
  },
  {
    slur:  "Dune Coon",
    refers_to:  "Arabs",
    reason_and_origin:  "Comes from 'coon' (Blacks) of the 'dunes' (sand dunes) in the Middle East. Also just Dunecoon"
  },
  {
    slur:  "Dune Nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Same ideas as Doon Coon and Sand Nigger."
  },
  {
    slur:  "Durka-durka",
    refers_to:  "Arabs",
    reason_and_origin:  "How English-speakers hear their language(s). From the film \"Team America: World Police"
  },
  {
    slur:  "Dusty Nuts",
    refers_to:  "Arabs",
    reason_and_origin:  "It comes from Arabs living in the desert."
  },
  {
    slur:  "DWB",
    refers_to:  "Whites",
    reason_and_origin:  "Down With Brown. A white female who dates black men."
  },
  {
    slur:  "DWB",
    refers_to:  "Blacks",
    reason_and_origin:  "Driving While Black. Police-type term referring to blacks driving through white neighborhoods."
  },
  {
    slur:  "DWO",
    refers_to:  "Asians",
    reason_and_origin:  "Driving While Oriental. Based on the idea that being Asian and driving is just as dangerous as being intoxicated and driving."
  },
  {
    slur:  "Dyke",
    refers_to:  "Dutch",
    reason_and_origin:  "The country owes its existence to the many dikes that were used to reclaim land from the sea, also from the story of the Dutch boy who use…"
  },
  {
    slur:  "Dyke-Jumper",
    refers_to:  "Dutch",
    reason_and_origin:  "Because of all the dykes in Holland, Dutch farmers used to use long wooden poles to pole-vault from one section of farmland to another."
  },
  {
    slur:  "Easy-Bake Nigger",
    refers_to:  "Jews",
    reason_and_origin:  "WWII reference."
  },
  {
    slur:  "Egg",
    refers_to:  "Whites",
    reason_and_origin:  "White males that try to really get into East Asian culture and date Asian women. White on the outside, yellow on the inside (opposite o…"
  },
  {
    slur:  "Egghead",
    refers_to:  "Asians",
    reason_and_origin:  "Asians, especially Koreans, have large heads."
  },
  {
    slur:  "Egglet",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Children -- \"little eggplant."
  },
  {
    slur:  "Eggot",
    refers_to:  "Blacks",
    reason_and_origin:  "Tagalog word for black (Phillipines)"
  },
  {
    slur:  "Eggplant",
    refers_to:  "Blacks",
    reason_and_origin:  "Slur used mainly by Italians. See: Moolie."
  },
  {
    slur:  "Eggplant Parmesan",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Italian mix"
  },
  {
    slur:  "Eggroll",
    refers_to:  "Asians",
    reason_and_origin:  "Refers to Asian babies who would be wrapped in blankets."
  },
  {
    slur:  "Egot",
    refers_to:  "Blacks",
    reason_and_origin:  "A derogatory term used by Filipinos meaning \"nigger\"."
  },
  {
    slur:  "Egoy",
    refers_to:  "Blacks",
    reason_and_origin:  "Filipino racial slang for Black people"
  },
  {
    slur:  "Eight Ball",
    refers_to:  "Blacks",
    reason_and_origin:  "Color of the eight ball in pool"
  },
  {
    slur:  "El Chino",
    refers_to:  "Chinese",
    reason_and_origin:  "It was used by Equadors in addressing Alberto Fujimori during war as a result of Berlin Congress in 19c where borders left apart. The wa…"
  },
  {
    slur:  "Elephant Jockey",
    refers_to:  "Indians",
    reason_and_origin:  "Elephants were a popular mode of transport in Victorian and Pre-Victorian Asia"
  },
  {
    slur:  "Elevator Operator",
    refers_to:  "Blacks",
    reason_and_origin:  "Non-demanding job for education-less/trade-less person."
  },
  {
    slur:  "Elvis",
    refers_to:  "Whites",
    reason_and_origin:  "Used by blacks to describe a white person doing black things, like Elvis did with black music. Eminem is referred to as \"Elvis\" in th…"
  },
  {
    slur:  "Eminem",
    refers_to:  "Whites",
    reason_and_origin:  "White male who tries to act Black"
  },
  {
    slur:  "Eraser Head",
    refers_to:  "Blacks",
    reason_and_origin:  "During the late 80's and early 90's it was popular for blacks to cut their hair at an angle, forming a bevel that look similar to thos…"
  },
  {
    slur:  "Es-obe",
    refers_to:  "Blacks",
    reason_and_origin:  "Meaning \"Apes Obey!\" Used by British Colonial masters in Africa commanding the African workers to get to work. The early colonize…"
  },
  {
    slur:  "Esau",
    refers_to:  "Whites",
    reason_and_origin:  "Hebrew Israelites refer to whites as being the actual color of \"red\". A white person laughs, gets angry, slapped, and cries, will turn red…"
  },
  {
    slur:  "Ese",
    refers_to:  "Hispanics",
    reason_and_origin:  "Pronounced \"s-a.\" Roughly translates to \"dude.\" Offensively used by races other than Hispanics."
  },
  {
    slur:  "Eskimo",
    refers_to:  "Native Americans",
    reason_and_origin:  "Eskimo was once acceptable in Canada, and still is almost anywhere else. It means \"raw meat eater.\" Eskimo orginated from southern India…"
  },
  {
    slur:  "Etch",
    refers_to:  "Indians",
    reason_and_origin:  "Some say their music sounds like etch-a-sketch."
  },
  {
    slur:  "Etchy",
    refers_to:  "Whites",
    reason_and_origin:  "Comes from \"Sketchy\" and denotes the foreman at a jobsite (often with sketchpad in hand)"
  },
  {
    slur:  "Etnikum",
    refers_to:  "Gypsy",
    reason_and_origin:  "Hungarian word for \"ethnic."
  },
  {
    slur:  "Eucalyptus Nigger",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "The eucalyptus is a native plant of Australia."
  },
  {
    slur:  "Eurinal",
    refers_to:  "Europeans",
    reason_and_origin:  "Many European countries use pay-toilets, having to pay for public restrooms. Europe + Urinal"
  },
  {
    slur:  "Euro",
    refers_to:  "Mediterraneans",
    reason_and_origin:  "Represents whites of mediterannean nations such as Greeks, Italians, Spaniards and Portuguese. Named after the habit of starting every nam…"
  },
  {
    slur:  "Eurotrash",
    refers_to:  "Europeans",
    reason_and_origin:  "A pseudo-intellectual who believes they are are smart and americans are stupid."
  },
  {
    slur:  "Ewok",
    refers_to:  "Arabs",
    reason_and_origin:  "Refers to Muslim religious headdress resembling that worn by the Star Wars characters, \"Ewoks."
  },
  {
    slur:  "Extra Crispy",
    refers_to:  "Blacks",
    reason_and_origin:  "A southern exspression that represents their burnt appearence, as well as their stereotypical love of fried chicken."
  },
  {
    slur:  "F.B.I.",
    refers_to:  "Irish",
    reason_and_origin:  "Foreign Born Irish"
  },
  {
    slur:  "Fabo",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Fucking Abos"
  },
  {
    slur:  "Fadi",
    refers_to:  "Arabs",
    reason_and_origin:  "Common Arab name, plural is Fadii (Fa-Die)."
  },
  {
    slur:  "Fahim",
    refers_to:  "Blacks",
    reason_and_origin:  "Arabs use this word meaning charcoal to describe blacks and very dark arabs"
  },
  {
    slur:  "Fake Mexican",
    refers_to:  "Hispanics",
    reason_and_origin:  "Used to describe those who have lost the language, culture, etc. of Mexico."
  },
  {
    slur:  "Fakey Jamaikey",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who try to act Jamaican, but actually aren't. Mostly used on TV or for musical purposes. For example, Miss Cleo: psychic advisor an…"
  },
  {
    slur:  "Falasha",
    refers_to:  "Jews",
    reason_and_origin:  "Ethiopian Jews. A derogotory nickname. The proper name is Bet-Yisrael"
  },
  {
    slur:  "Fan Kuei",
    refers_to:  "Whites",
    reason_and_origin:  "Chinese for \"ocean ghosts\". Refers to skin color."
  },
  {
    slur:  "Farang",
    refers_to:  "Whites",
    reason_and_origin:  "From the Thai word for French (farangsayt) who were among the first to colonize Southeast Asia. Generally non-derogatory, though depends o…"
  },
  {
    slur:  "Farang/Falang",
    refers_to:  "Whites",
    reason_and_origin:  "Means foreigner (i.e. non-Thai) of the white race. It is very frequently used in a simple descriptive way. It's negative only if the inten…"
  },
  {
    slur:  "Farq",
    refers_to:  "Whites",
    reason_and_origin:  "Arab word, meaning \"chicken,\" used to describe whites and light skinned arabs as in weak and fragile"
  },
  {
    slur:  "Fat Albert",
    refers_to:  "Blacks",
    reason_and_origin:  "Used against overweight African American males in reference to a popular 1980's cartoon created by Bill Cosby (for example, saying \"hey he…"
  },
  {
    slur:  "FBI",
    refers_to:  "Native Americans",
    reason_and_origin:  "Full Blooded Indian. Used in the movie Thunderheart. Not really a slur."
  },
  {
    slur:  "Feargal",
    refers_to:  "Blacks",
    reason_and_origin:  "Short for Feargal Sharkey (a UK Pop singer from late 70's and 80's) which rhymes with Darkie."
  },
  {
    slur:  "Feather",
    refers_to:  "Native Americans",
    reason_and_origin:  "Used to differentiate Indians from India (\"Dots\") from those from America (\"Feathers\")."
  },
  {
    slur:  "Featherhead",
    refers_to:  "Native Americans",
    reason_and_origin:  "Comes from Native American tribes that wore feathered headdresses."
  },
  {
    slur:  "Feb",
    refers_to:  "Blacks",
    reason_and_origin:  "February is Black history month."
  },
  {
    slur:  "Feb",
    refers_to:  "British",
    reason_and_origin:  "Stands for Filthy (or Fucking) English Bastard."
  },
  {
    slur:  "Felipe Parkhurst",
    refers_to:  "Guatemalans",
    reason_and_origin:  "Exiled from the country for life for selling many children to slavery."
  },
  {
    slur:  "Fence Fairy",
    refers_to:  "Mexicans",
    reason_and_origin:  "Reference to border crossing."
  },
  {
    slur:  "Fence-Hopper",
    refers_to:  "Mexicans",
    reason_and_origin:  "Mexicans hopping fences to get into the U.S."
  },
  {
    slur:  "Fenian",
    refers_to:  "Irish",
    reason_and_origin:  "Refers to Irish Roman Catholic immigrants living in such large U.K. cities as Glasgow, Liverpool and Manchester. Also used by Protestant…"
  },
  {
    slur:  "Fesskin",
    refers_to:  "Mexicans",
    reason_and_origin:  "Fuckin' messkin (mexican)"
  },
  {
    slur:  "Fez",
    refers_to:  "Arabs",
    reason_and_origin:  "They wear fezes, the little hats."
  },
  {
    slur:  "Fidel",
    refers_to:  "Hispanics",
    reason_and_origin:  "Reference to the infamous Cuban dictator Fidel Castro."
  },
  {
    slur:  "Field Nigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Field nigger is the term used to label blacks who choose not to identify with popular white society and culture, as opposed to hous…"
  },
  {
    slur:  "Field Rat",
    refers_to:  "Mexicans",
    reason_and_origin:  "Working in Migrant Fields"
  },
  {
    slur:  "Fig Gobbler",
    refers_to:  "Arabs",
    reason_and_origin:  "They eat figs."
  },
  {
    slur:  "FILA",
    refers_to:  "Blacks",
    reason_and_origin:  "Finally I Left Africa, popular clothing brand"
  },
  {
    slur:  "Fili Cheese Steak",
    refers_to:  "Filipinos",
    reason_and_origin:  "Refers to what it looks like when a Filipino woman is in a gangbang"
  },
  {
    slur:  "Filthy Pino",
    refers_to:  "Filipinos",
    reason_and_origin:  "Poor Filipinos, Filipinos who act black."
  },
  {
    slur:  "Fingernail Rancher",
    refers_to:  "Asians",
    reason_and_origin:  "A lot of Asians own Nail Salons"
  },
  {
    slur:  "Finne",
    refers_to:  "Finnish",
    reason_and_origin:  "Swedes call Finns for \"finne\", which means pimple in Swedish."
  },
  {
    slur:  "Firangi",
    refers_to:  "Whites",
    reason_and_origin:  "From Arabic \"Firanji\" or \"Firangi\" in Egyptian Arabic, meaning \"European\". Corruption of \"French\" or \"Franks\". Made famous in a slyl…"
  },
  {
    slur:  "Fire Bush",
    refers_to:  "Irish",
    reason_and_origin:  "Red hair."
  },
  {
    slur:  "Fire Crotch",
    refers_to:  "Irish",
    reason_and_origin:  "They have red hair"
  },
  {
    slur:  "Firecracker",
    refers_to:  "Whites",
    reason_and_origin:  "White women who date Black men. There used to be a firecracker called a \"niggerchaser\" but today they are called simply \"chasers."
  },
  {
    slur:  "Firecracker",
    refers_to:  "Arabs",
    reason_and_origin:  "They blow themselves up."
  },
  {
    slur:  "Firewood",
    refers_to:  "Jews",
    reason_and_origin:  "WWII Holocaust reference. 'Nazi Firewood' to be more specific."
  },
  {
    slur:  "Fischkopf",
    refers_to:  "Germans",
    reason_and_origin:  "Fish-head\" used by southern Germans for northern Germans"
  },
  {
    slur:  "Fish",
    refers_to:  "Israelis",
    reason_and_origin:  "Fucking Israeli Shithead. See: Dib."
  },
  {
    slur:  "Fish",
    refers_to:  "Portuguese",
    reason_and_origin:  "Bacalou (codfish) is a major part of their diet."
  },
  {
    slur:  "Fish",
    refers_to:  "Bengals",
    reason_and_origin:  "Bengali's eat a lot of fish and go fishing often. This slur is used commonly by Pakistanis."
  },
  {
    slur:  "Fish-Belly",
    refers_to:  "Whites",
    reason_and_origin:  "Similar color"
  },
  {
    slur:  "Fish-Eater",
    refers_to:  "Norwegians",
    reason_and_origin:  "Their diet consists almost entirely of fish."
  },
  {
    slur:  "Fishhead",
    refers_to:  "Asians",
    reason_and_origin:  "Japan's only true source of food is the sea, so they eat a lot of fish."
  },
  {
    slur:  "Flash",
    refers_to:  "Americans",
    reason_and_origin:  "Fucking Lazy American Shit Head. Used by Israelis to refer to American tourists who are accustomed to an easier standard of living.…"
  },
  {
    slur:  "Flat-ass",
    refers_to:  "Whites",
    reason_and_origin:  "Used as reference to the flatter backsides of white people, and other non-blacks"
  },
  {
    slur:  "Flat-Back",
    refers_to:  "Whites",
    reason_and_origin:  "Term refers primarily to white women who unlike women of other races have flat butts and no shape."
  },
  {
    slur:  "Flease",
    refers_to:  "Greeks",
    reason_and_origin:  "Flap Grease. Since greeks work in the diners all of their lives, their uncircumcised penis build up grease underneath the flap. hence th…"
  },
  {
    slur:  "Fligga",
    refers_to:  "Filipinos",
    reason_and_origin:  "Flip + nigga. Filipino's attempting to act black."
  },
  {
    slur:  "Fligger",
    refers_to:  "Filipinos",
    reason_and_origin:  "Filipinos that think they are black."
  },
  {
    slur:  "Flip",
    refers_to:  "Filipinos",
    reason_and_origin:  "Shortened and rearranged term, easier to say. Could also stand for \"Funny (or Fucking) Little Island People\"."
  },
  {
    slur:  "Flipper",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Fillipino/Black Mix. Combination of Flip and Nigger."
  },
  {
    slur:  "Flipsican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican Filipino"
  },
  {
    slur:  "Flock of Seagulls",
    refers_to:  "Whites",
    reason_and_origin:  "Making fun of a certain person's hairdo. Derived from the 80's band that made the 1 hit, \"And I ran\"."
  },
  {
    slur:  "Floppy",
    refers_to:  "Blacks",
    reason_and_origin:  "In Zimbabwe, the blacks are referred to as floppies because of the floppy hats they wear on their heads."
  },
  {
    slur:  "Floss",
    refers_to:  "Asians",
    reason_and_origin:  "Tou can blindfold them with floss"
  },
  {
    slur:  "Flour Bag",
    refers_to:  "Whites",
    reason_and_origin:  "For the pale, pasty skin."
  },
  {
    slur:  "FOB",
    refers_to:  "Immigrants",
    reason_and_origin:  "Stands for \"Fresh off the Boat.\" Used in English-speaking countries for anyone with a heavy accent and are clearly immigrants, mostl…"
  },
  {
    slur:  "FOB",
    refers_to:  "Mexicans",
    reason_and_origin:  "Fresh over the Border"
  },
  {
    slur:  "Foedy",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people are known to drink \"40\"oz beers"
  },
  {
    slur:  "FOF",
    refers_to:  "Mexicans",
    reason_and_origin:  "Fresh Over the Fence. Refrence to crossing the border from Mexico to US."
  },
  {
    slur:  "Fog Horn",
    refers_to:  "British",
    reason_and_origin:  "A loud/annoying British person."
  },
  {
    slur:  "Fog Nigger",
    refers_to:  "English",
    reason_and_origin:  "British Blacks. The weather is usually foggy in Britain."
  },
  {
    slur:  "Fog-Breather",
    refers_to:  "British",
    reason_and_origin:  "Englands weather is often extremely foggy"
  },
  {
    slur:  "Fonzie",
    refers_to:  "Italians",
    reason_and_origin:  "Happy Days\" character Arthur \"Fonzie\" Fonzarelli."
  },
  {
    slur:  "Fort Injun/Indian",
    refers_to:  "Native Americans",
    reason_and_origin:  "A term used to represent the [traitor?] Indians who hid behind the safety of the forts."
  },
  {
    slur:  "Forty-Fiver",
    refers_to:  "Chinese",
    reason_and_origin:  "Represents the angle of their eyes (45 degrees)"
  },
  {
    slur:  "Foster",
    refers_to:  "Australians",
    reason_and_origin:  "Australian for piss-poor beer that no self-respecting Aussie would be seen dead drinking."
  },
  {
    slur:  "Fountain Swimmer",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Homeless aboriginals are often spotted bathing/swimming in public fountains during the summer months."
  },
  {
    slur:  "Four By Two",
    refers_to:  "Jews",
    reason_and_origin:  "Cockney rhyming slang \"four by two\" = Jew."
  },
  {
    slur:  "Four Footer",
    refers_to:  "Mexicans",
    reason_and_origin:  "Ususally used when referring to illegal immigrant workers. \"I'm gonna go down to 7-11 tomorrow morning, to pick up a four-footer.\" Becaus…"
  },
  {
    slur:  "Franklin",
    refers_to:  "Blacks",
    reason_and_origin:  "The only black kid from the Peanuts series."
  },
  {
    slur:  "Frasier",
    refers_to:  "Blacks",
    reason_and_origin:  "Term that represents people with big \"packages."
  },
  {
    slur:  "Fremen",
    refers_to:  "Arabs",
    reason_and_origin:  "A reference to the Dune series of novels. Their nomadic lives in the desert are similar to that of Arabs. In addition, they also spea…"
  },
  {
    slur:  "Fritz",
    refers_to:  "Germans",
    reason_and_origin:  "Russians in WWII called Germans Fritzes, a common German name in those days (short for Friedrich). Also, Germany was ruled by severa…"
  },
  {
    slur:  "FroBro",
    refers_to:  "Blacks",
    reason_and_origin:  "From Afro hair style and Bro for brother."
  },
  {
    slur:  "Frog",
    refers_to:  "French",
    reason_and_origin:  "The French are said to laugh like frogs. When they laugh, their adam's apples bulge out of their necks like frogs. Also perhaps from th…"
  },
  {
    slur:  "Frogman",
    refers_to:  "Colombians",
    reason_and_origin:  "Originated from the movie \"Scarface\", where Colombians were refered to as frogmen because of their squashed-like faces. Also: Frogface"
  },
  {
    slur:  "Frostback",
    refers_to:  "Canadians",
    reason_and_origin:  "A play on \"wetback\", altered to fit Canadians."
  },
  {
    slur:  "Frostbite",
    refers_to:  "Blacks",
    reason_and_origin:  "when one gets frostbite, their skin becomes dark"
  },
  {
    slur:  "Frosty",
    refers_to:  "Whites",
    reason_and_origin:  "Frosty the Snowman"
  },
  {
    slur:  "Frotch",
    refers_to:  "Irish",
    reason_and_origin:  "See: Fire Crotch"
  },
  {
    slur:  "Frozen Frog",
    refers_to:  "French Canadians",
    reason_and_origin:  "Canada = Cold, French = Frog"
  },
  {
    slur:  "Fruit-Picker",
    refers_to:  "Hispanics",
    reason_and_origin:  "The Mexicans who cross the border often pick fruit, usually for pennies an hour. Often, when it is time to give the illegal aliens thei…"
  },
  {
    slur:  "FUBU",
    refers_to:  "Blacks",
    reason_and_origin:  "As in the clothing line F.U.B.U., or known by African Americans as \"For Us, By Us.\" Racially translated to \"Farmers Used to Buy (or Beat…"
  },
  {
    slur:  "Fuji",
    refers_to:  "Japanese",
    reason_and_origin:  "Japanese tourists tend to wear cameras and take pictures 24/7. Mount Fuji is a mountain in Japan, and a brand of film."
  },
  {
    slur:  "Fumblin' Dublin",
    refers_to:  "Irish",
    reason_and_origin:  "Known as a slur for drunk, unemployed, Irish men. They are usually found under the influence outside of Dublin's bars."
  },
  {
    slur:  "Fur Licker",
    refers_to:  "French",
    reason_and_origin:  "Sexual preference."
  },
  {
    slur:  "Future Inmate",
    refers_to:  "Blacks",
    reason_and_origin:  "Two-thirds of American inmates are Black."
  },
  {
    slur:  "G/Gee",
    refers_to:  "Blacks",
    reason_and_origin:  "Shortened from Gangster or OG (Original Gangster). Used as a greeting between gang members (\"Yo, G, what up?\"). Used in a derogator…"
  },
  {
    slur:  "Gabacho",
    refers_to:  "Whites",
    reason_and_origin:  "Connotes \"imperialist\"; used by Mexicans and Mexican-Americans; apparently originated in Spain to refer to French."
  },
  {
    slur:  "Gádzsó",
    refers_to:  "Hungarians",
    reason_and_origin:  "Gypsy term meaning \"peasant man"
  },
  {
    slur:  "Gai-jin",
    refers_to:  "Whites",
    reason_and_origin:  "Japanese equivalent to \"Goyim,\" refers to anyone not Japanese, but especially Westerners. Actually is a shortened version of \"Gai-koku-jin…"
  },
  {
    slur:  "Gai-ko",
    refers_to:  "Whites",
    reason_and_origin:  "Pronounced \"guy-ko\". Derogatory way of saying gaijin which is 'foreigner' (literally outside person) in Japanese."
  },
  {
    slur:  "Gallego",
    refers_to:  "Spaniards",
    reason_and_origin:  "Used by Cubans regarding Spaniards."
  },
  {
    slur:  "Galleta",
    refers_to:  "Whites",
    reason_and_origin:  "Means \"cookie\" or \"cracker\" in Spanish."
  },
  {
    slur:  "Gandhi",
    refers_to:  "Indians",
    reason_and_origin:  "Famous Indian."
  },
  {
    slur:  "Ganesh",
    refers_to:  "Indians",
    reason_and_origin:  "A hindu god."
  },
  {
    slur:  "Gans",
    refers_to:  "Latvians",
    reason_and_origin:  "Derived from german name \"Hans\" - Latvia have close connections with Germany"
  },
  {
    slur:  "Gar",
    refers_to:  "Blacks",
    reason_and_origin:  "Redneck term. Short for nig-GAR. Could also refer to the Gar, a fish similar to the piranha, found in streams in the Southern US and eatin…"
  },
  {
    slur:  "Garden Gnome",
    refers_to:  "Hispanics",
    reason_and_origin:  "They do all the gardening for rich white people"
  },
  {
    slur:  "Gardner",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics do most of the hired gardening."
  },
  {
    slur:  "Gargamel",
    refers_to:  "Jews",
    reason_and_origin:  "Refers to greedy, money centered nature of Jews. Reference from Smurfs cartoon."
  },
  {
    slur:  "Garlic Bread",
    refers_to:  "Italians",
    reason_and_origin:  "Self Explanatory."
  },
  {
    slur:  "Garlic Breath",
    refers_to:  "Italians",
    reason_and_origin:  "They eat a lot highly spiced dishes seasoned with garlic"
  },
  {
    slur:  "Gas Huffer",
    refers_to:  "Native Americans",
    reason_and_origin:  "A large number of Native Americans, particularly those living in northwest Canada/Alaska, are said to be addicted to inhalants."
  },
  {
    slur:  "Gas Pumper",
    refers_to:  "Indians",
    reason_and_origin:  "Most gas station are owned and operated by Indians"
  },
  {
    slur:  "Gasbag",
    refers_to:  "Native Americans",
    reason_and_origin:  "Some Natives are commonly prone to 'huffing' gas out of a plastic bag."
  },
  {
    slur:  "Gatemaster",
    refers_to:  "Jews",
    reason_and_origin:  "Some say they are destined for hell."
  },
  {
    slur:  "Gatorbait",
    refers_to:  "Blacks",
    reason_and_origin:  "Dark meat of the chicken that was fed to alligators."
  },
  {
    slur:  "Gavacho",
    refers_to:  "Whites",
    reason_and_origin:  "Mexican term for white Americans. Used more commonly than the outdated \"Gringo"
  },
  {
    slur:  "GED",
    refers_to:  "Blacks",
    reason_and_origin:  "The highest level of education many Blacks get to."
  },
  {
    slur:  "Geechee",
    refers_to:  "Blacks",
    reason_and_origin:  "Specifically a derogatory term referring to the Gullah culture of African ex-slaves on the Atlantic coast of Sout…"
  },
  {
    slur:  "Geep",
    refers_to:  "Italians",
    reason_and_origin:  "From Pinnochio's \"father\" Gepetto, who was Italian."
  },
  {
    slur:  "General Tso",
    refers_to:  "Chinese",
    reason_and_origin:  "As in General Tso's chicken."
  },
  {
    slur:  "Germ",
    refers_to:  "Germans",
    reason_and_origin:  "Being a plague to humans, sickening them"
  },
  {
    slur:  "German Candle",
    refers_to:  "Jews",
    reason_and_origin:  "Nazi's incinerated many Jews during WW2"
  },
  {
    slur:  "German Oven Mitt",
    refers_to:  "Jews",
    reason_and_origin:  "WWII."
  },
  {
    slur:  "Gew",
    refers_to:  "Jews",
    reason_and_origin:  "A German Jew. Pronounced like 'goo'."
  },
  {
    slur:  "Ghengi",
    refers_to:  "Mongolians",
    reason_and_origin:  "Refers to Ghengis Khan, used towards to Eastern Europeans of Mongol descent"
  },
  {
    slur:  "Ghetto",
    refers_to:  "Blacks",
    reason_and_origin:  "Many Black people are forced into poor, crowded neighborhoods, like Jews were during the Holocaust. The crowded, poor Jewish neighborhood…"
  },
  {
    slur:  "Ghetto Hamster",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Children. A disposable pet."
  },
  {
    slur:  "Ghetto Monkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks tend to live in ghettos."
  },
  {
    slur:  "Ghinder",
    refers_to:  "Indians",
    reason_and_origin:  "Origins are unknown. The generally accepted derivative is from the ultimate ghinder, Mahatma Gandhi."
  },
  {
    slur:  "Ghost",
    refers_to:  "Whites",
    reason_and_origin:  "Ghosts are white."
  },
  {
    slur:  "Ghost Rider",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who have sex with whites."
  },
  {
    slur:  "Ghoul",
    refers_to:  "Whites",
    reason_and_origin:  "Ghouls are said to be pale skinned like a dead person"
  },
  {
    slur:  "Gilligan",
    refers_to:  "Whites",
    reason_and_origin:  "Goofy white guy from Gilligan's Island."
  },
  {
    slur:  "Gimmie",
    refers_to:  "Arabs",
    reason_and_origin:  "7-11 workers, \"gimmie\" a dollar"
  },
  {
    slur:  "Gimpy",
    refers_to:  "Blacks",
    reason_and_origin:  "It is an often stereotype that most people who collect unemployment are black. And blacks pretend they are injured so they can collect."
  },
  {
    slur:  "Gin",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Represents Aboriginal female - they take offense"
  },
  {
    slur:  "Gina",
    refers_to:  "Italians",
    reason_and_origin:  "Female term for Gino"
  },
  {
    slur:  "Gingerbread Man",
    refers_to:  "Jews",
    reason_and_origin:  "Reference to the practices of the former state of Germany."
  },
  {
    slur:  "Gink",
    refers_to:  "Asians",
    reason_and_origin:  "Cross between a \"gook\" and a \"chink"
  },
  {
    slur:  "Ginny",
    refers_to:  "Italians",
    reason_and_origin:  "In reference to popular Italian garb Ginny T's, now more commonly known as wife beater shirts."
  },
  {
    slur:  "Gino",
    refers_to:  "Italians",
    reason_and_origin:  "Common Italian name A Toronto municipal politician recently got into hot water for using this slur."
  },
  {
    slur:  "Ginzo",
    refers_to:  "Italians",
    reason_and_origin:  "From Guinee/Guinea."
  },
  {
    slur:  "Glass Nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "If an atomic weapon were to go off, sand niggers would become glass niggers."
  },
  {
    slur:  "Glendale",
    refers_to:  "Armenians",
    reason_and_origin:  "Glendale, CA has a very large Armenian community"
  },
  {
    slur:  "Glocky",
    refers_to:  "Blacks",
    reason_and_origin:  "Always carry Glocks when the go dealing"
  },
  {
    slur:  "Glonni",
    refers_to:  "Native Americans",
    reason_and_origin:  "Navajo for drunk. Extremely offensive to anyone who speaks Navajo."
  },
  {
    slur:  "Goat Roper",
    refers_to:  "Arabs",
    reason_and_origin:  "See Camel Jockeys, etc."
  },
  {
    slur:  "Goat Roper",
    refers_to:  "Whites",
    reason_and_origin:  "Often used as a term for suburban cowboys."
  },
  {
    slur:  "Goatbanger",
    refers_to:  "Greeks",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "GOB",
    refers_to:  "Whites",
    reason_and_origin:  "Stands for Good Ol' Boy, a redneck reference"
  },
  {
    slur:  "Gobbler",
    refers_to:  "Greeks",
    reason_and_origin:  "Refers to the greek penis. They are uncircumcised, the flap resembles the neck of a turkey, also known as the gobbler."
  },
  {
    slur:  "Godzilla Snack",
    refers_to:  "Japanese",
    reason_and_origin:  "From the Godzilla movies"
  },
  {
    slur:  "Goggles",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Aboriginals have very large nostrils which resemble a pair of goggles"
  },
  {
    slur:  "Goldberg",
    refers_to:  "Jews",
    reason_and_origin:  "Common Jewish name. Also has slight money-related reference."
  },
  {
    slur:  "Golden Toe",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who don't bathe get golden toes."
  },
  {
    slur:  "Goldfish Monger",
    refers_to:  "Asians",
    reason_and_origin:  "A fish monger is a Shakespearean term for pimp, and there are many coi at Chinese restaurants"
  },
  {
    slur:  "Goldie",
    refers_to:  "Jews",
    reason_and_origin:  "Jews had to wear gold stars of david during WW2"
  },
  {
    slur:  "Golliwog",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to an old black caricature doll."
  },
  {
    slur:  "Goloid",
    refers_to:  "Asians",
    reason_and_origin:  "Short for Mongoloid"
  },
  {
    slur:  "Gomer",
    refers_to:  "Whites",
    reason_and_origin:  "White goof Gomer Pyle from the television show of the same name. A spin-off of The Andy Griffith Show."
  },
  {
    slur:  "Gong Fei",
    refers_to:  "Chinese",
    reason_and_origin:  "In Chinese, means \"communist bastard"
  },
  {
    slur:  "Goober",
    refers_to:  "Whites",
    reason_and_origin:  "Black racists in NYC area use it to refer to Whites. Interestingly, the goober peanut was one of the food products imported from Africa fo…"
  },
  {
    slur:  "Gook",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Term most likely dates back to the Philippine-American War (~1900) and has been used against a wide range of peoples, usually Asians bu…"
  },
  {
    slur:  "Gookaniese",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Their language is Gookaniese."
  },
  {
    slur:  "Gookemon",
    refers_to:  "Asians",
    reason_and_origin:  "Gook + Pokemon."
  },
  {
    slur:  "Gookie Monster",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Sounding like \"Cookie Moster\" from Sesame Street."
  },
  {
    slur:  "Goombah",
    refers_to:  "Italians",
    reason_and_origin:  "From the Italian word \"Compare\" (pronounced 'cumpa') meaning \"a close friend.\" Considered a slur when used by non-Italians to describe a…"
  },
  {
    slur:  "Goon Ninja",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "A stealthy abo who goes around stealing goon."
  },
  {
    slur:  "Gor",
    refers_to:  "Blacks",
    reason_and_origin:  "Rodney Gor (ney-gor)"
  },
  {
    slur:  "Gora",
    refers_to:  "Whites",
    reason_and_origin:  "Comes from Hindi"
  },
  {
    slur:  "Gord",
    refers_to:  "Canadians",
    reason_and_origin:  "Generic Canadian name"
  },
  {
    slur:  "Gordita",
    refers_to:  "Mexicans",
    reason_and_origin:  "Comes from the Taco Bell food. Means \"large\" or \"fat\" in Spanish."
  },
  {
    slur:  "Gorilla",
    refers_to:  "Blacks",
    reason_and_origin:  "Another Black-primate reference."
  },
  {
    slur:  "Gorilla Head",
    refers_to:  "Whites",
    reason_and_origin:  "Popular White 80s hairstyle called a 'mullet' is similar to a gorilla: short on top and long in the back. Countless small-town White fol…"
  },
  {
    slur:  "Goulash",
    refers_to:  "Hungarians",
    reason_and_origin:  "A popular kind of soup in Hungary."
  },
  {
    slur:  "Goy/Goyim",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Jews to describe White gentiles or non-Jews in general. Hebrew derivation from the word for nation (goy singular; goyim plural)…"
  },
  {
    slur:  "Goya",
    refers_to:  "Hispanics",
    reason_and_origin:  "Probably the most popular and most mainstream Latin food company in the world"
  },
  {
    slur:  "Graham Cracker",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Black mix or a light skinned black who acts white"
  },
  {
    slur:  "Grand Dragon",
    refers_to:  "Whites",
    reason_and_origin:  "Reference to the leader of the KKK."
  },
  {
    slur:  "Grape-Smasher",
    refers_to:  "Italians",
    reason_and_origin:  "Smash grapes with feet to make wine, hence grape smasher"
  },
  {
    slur:  "Grape-Stomper",
    refers_to:  "Italians",
    reason_and_origin:  "They make wine."
  },
  {
    slur:  "Grapico",
    refers_to:  "Blacks",
    reason_and_origin:  "It is said that blacks have an affinity for grape soda. Grapico is a popular brand in the South."
  },
  {
    slur:  "Grasshopper",
    refers_to:  "Asians",
    reason_and_origin:  "Keye Luke's protege (the young Caine) from the TV series, Kung Fu. \"Snatch the pebble from my hand, Grasshopper."
  },
  {
    slur:  "Grasshopper",
    refers_to:  "Mexicans",
    reason_and_origin:  "They jump fences like grasshoppers"
  },
  {
    slur:  "Gravelbellies",
    refers_to:  "Hispanics",
    reason_and_origin:  "Crawling across border on their bellies."
  },
  {
    slur:  "Gray",
    refers_to:  "Whites",
    reason_and_origin:  "A white that tries to act black (white & black mix = gray). See: Wigger. Could also just as easily be a half black/half white child."
  },
  {
    slur:  "Grayboy/girl",
    refers_to:  "Whites",
    reason_and_origin:  "See: Gray."
  },
  {
    slur:  "Grease Ball",
    refers_to:  "Italians",
    reason_and_origin:  "Multiple origins. The most common being that the Italian people supposedly have an abnormally oily dermis and epidermis."
  },
  {
    slur:  "Grease Ball/Bag",
    refers_to:  "Greeks",
    reason_and_origin:  "Possibly because of the grease they sometimes put in their hair or because of the types of food they make. Also: Greaser. Applicable t…"
  },
  {
    slur:  "Greaser",
    refers_to:  "Mexicans",
    reason_and_origin:  "Used as early as the battle of the Alamo in 1836."
  },
  {
    slur:  "Greaser",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the oily nature of a black person's hair."
  },
  {
    slur:  "Great Satan",
    refers_to:  "Americans",
    reason_and_origin:  "Some Muslim leaders have referred to America as The Great Satan"
  },
  {
    slur:  "Greek-arican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Puerto Rican/Greek Mix. Common racial mix in NY city."
  },
  {
    slur:  "Green",
    refers_to:  "Irish",
    reason_and_origin:  "The Irish were once loosely called the green race."
  },
  {
    slur:  "Green Bean",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Irish/Mexican mix"
  },
  {
    slur:  "Green Nigger",
    refers_to:  "Irish",
    reason_and_origin:  "Mainly in US cities with large Irish populations. Used to denote the Irish, who many hold in the same regard as blacks."
  },
  {
    slur:  "Greenhorn",
    refers_to:  "Portuguese",
    reason_and_origin:  "Derogatory term for Portugese. Often used when referring to those of Portugese descent who come from the Azores. Meaning stupid an…"
  },
  {
    slur:  "Grenade",
    refers_to:  "Arabs",
    reason_and_origin:  "They blow themselves up."
  },
  {
    slur:  "Grinder",
    refers_to:  "Asians",
    reason_and_origin:  "Can't drive manual transmission vehicles"
  },
  {
    slur:  "Gringo",
    refers_to:  "Whites",
    reason_and_origin:  "This is truly only derogatory in regions of northern Mexico and in the United States where it translates to \"white foreigner.\" Gringo i…"
  },
  {
    slur:  "Gro",
    refers_to:  "Blacks",
    reason_and_origin:  "From neGRO."
  },
  {
    slur:  "Groid",
    refers_to:  "Blacks",
    reason_and_origin:  "Short for Negroid."
  },
  {
    slur:  "Gronesha",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Women. Used at the Battle of Valley Forge to describe the Black women who prepared the cannons."
  },
  {
    slur:  "Groundskeeper Willie",
    refers_to:  "Scottish",
    reason_and_origin:  "From the Scottish character in 'The Simpsons'."
  },
  {
    slur:  "Grout",
    refers_to:  "Germans",
    reason_and_origin:  "WWII."
  },
  {
    slur:  "GTA",
    refers_to:  "Blacks",
    reason_and_origin:  "Grand Theft Auto games are said to represent the lifestyle of black males."
  },
  {
    slur:  "Guachupine",
    refers_to:  "Spaniards",
    reason_and_origin:  "Used in Mexico as reference to disease bringing Spaniards who brought a plague called guachu to the natives when the conquistadore…"
  },
  {
    slur:  "Guancaca",
    refers_to:  "Salvadorans",
    reason_and_origin:  "Probably from \"guanaca,\" which is non-derogatory Central American slang for a Salvadoran + \"caca,\" which means what it means in the US"
  },
  {
    slur:  "Guati",
    refers_to:  "Guatemalans",
    reason_and_origin:  "Same level of offensiveness as nigger or chink."
  },
  {
    slur:  "Gubba",
    refers_to:  "Australians",
    reason_and_origin:  "Used by Aboriginal people of white Australians. Two theories: some like to think it's a corruption of \"governor\". Others say it's short fo…"
  },
  {
    slur:  "Guero",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Latin Americans"
  },
  {
    slur:  "Guero/Guera",
    refers_to:  "Whites",
    reason_and_origin:  "Supposedly means blonde in northern Mexico."
  },
  {
    slur:  "Guerro",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Hispanic-Americans. Light skinned light haired person."
  },
  {
    slur:  "Guffie",
    refers_to:  "English",
    reason_and_origin:  "North-East-based, on the irritating \"guffaw\" stereotypical laugh of the English hunting and fishing set"
  },
  {
    slur:  "Guido",
    refers_to:  "Italians",
    reason_and_origin:  "Northern term referring to Italians who try to portray a mafia mentality. Feminine version is Guidette."
  },
  {
    slur:  "Guinea Pig",
    refers_to:  "Italians",
    reason_and_origin:  "An overweight Italian"
  },
  {
    slur:  "Guinea/Ginney",
    refers_to:  "Italians",
    reason_and_origin:  "Pronounced \"gi-nee.\" Came from \"Guinea Negro\" and originally referred to any Black or any person of mixed ancestry. This dates back to th…"
  },
  {
    slur:  "Gulper",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Sounds like their gulping when the speak English"
  },
  {
    slur:  "Gumby",
    refers_to:  "Macedonians",
    reason_and_origin:  "They have square-shaped heads like the animated character Gumby"
  },
  {
    slur:  "Gump",
    refers_to:  "Whites",
    reason_and_origin:  "Relatively slow and ungraceful white male athletes, particularly tall white basketball players. From the title character in the movi…"
  },
  {
    slur:  "Gunmaker",
    refers_to:  "Columbian",
    reason_and_origin:  "Columbian stereotype."
  },
  {
    slur:  "Guppie",
    refers_to:  "Greeks",
    reason_and_origin:  "Pronounced 'guppy' (like the fish). From Greek + Yuppie. Originated in Astoria, New York, which is densely populated with Greeks. No…"
  },
  {
    slur:  "Gupta",
    refers_to:  "Indians",
    reason_and_origin:  "A former Hindu dynasty."
  },
  {
    slur:  "Gurrya",
    refers_to:  "Whites",
    reason_and_origin:  "Used by the \"Bundjyma\" Aboriginal people of west-coast and central desert region of Western Australia"
  },
  {
    slur:  "Gusak",
    refers_to:  "Whites",
    reason_and_origin:  "Alaskan Native Dorogatry term for Caucasion"
  },
  {
    slur:  "Gut-Eater",
    refers_to:  "Native Americans",
    reason_and_origin:  "They eat stomach lining (tripe) of deer, buffalo, etc. Also after the newly-arrived whites killed all the buffalo they would take ever…"
  },
  {
    slur:  "Guttermonkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Monkeys that live in the gutter."
  },
  {
    slur:  "Gwai-lo",
    refers_to:  "Whites",
    reason_and_origin:  "Cantonese term to refer to any Western person. Translates to 'White ghost' or 'White devil'. The first whites seen in China were sailors…"
  },
  {
    slur:  "Gwat",
    refers_to:  "Central Americans",
    reason_and_origin:  "Short for Guatemalan."
  },
  {
    slur:  "Gyp/Gyppo",
    refers_to:  "Egyptians",
    reason_and_origin:  "Play on word \"Gypsy\". Gyp also actually means a cheat or swindler."
  },
  {
    slur:  "Gypsy",
    refers_to:  "Romanians",
    reason_and_origin:  "Some Romanians are gypsies. The ones that aren't would most likely take offense."
  },
  {
    slur:  "HAB",
    refers_to:  "Asians",
    reason_and_origin:  "Hot Asian Bitch"
  },
  {
    slur:  "Habib",
    refers_to:  "Indians",
    reason_and_origin:  "Indian name. Used in the TV show Married With Children where a gas attendant was an Indian."
  },
  {
    slur:  "Habibi",
    refers_to:  "Arabs",
    reason_and_origin:  "Translates in Arabic to \"Beloved\". Technically a term of affection but still sounds funny."
  },
  {
    slur:  "Hadji",
    refers_to:  "Indians",
    reason_and_origin:  "Reference to a youthful East Indian side-kick character named Hadji from the '70s Saturday-morning cartoon, \"Johnny Quest"
  },
  {
    slur:  "Haggis",
    refers_to:  "Scottish",
    reason_and_origin:  "Scots eats haggis on Rabbie Burns Day."
  },
  {
    slur:  "Haggistani",
    refers_to:  "Scottish",
    reason_and_origin:  "Compares Scotland to a 3rd world country such as Pakistan"
  },
  {
    slur:  "Hagwei/Hayquay",
    refers_to:  "Blacks",
    reason_and_origin:  "Cantonese for \"black ghost."
  },
  {
    slur:  "Hakui",
    refers_to:  "Blacks",
    reason_and_origin:  "Word means 'burnt' in Chinese"
  },
  {
    slur:  "Halee Halaa",
    refers_to:  "Indians",
    reason_and_origin:  "Manner in which they speak used by Latin Americans"
  },
  {
    slur:  "Half Baked",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix."
  },
  {
    slur:  "Half Breed",
    refers_to:  "Mixed Races",
    reason_and_origin:  "A person who is, for example, of both Black and White ancestry."
  },
  {
    slur:  "Half Cast",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White"
  },
  {
    slur:  "Half-a-gas-can",
    refers_to:  "Native Americans",
    reason_and_origin:  "Comes from the name \"Athabaskan\", an Alaskan Indian group."
  },
  {
    slur:  "Half-Dick",
    refers_to:  "Jews",
    reason_and_origin:  "Circumcision reference."
  },
  {
    slur:  "Half-Human",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to when blacks were counted as half a human for voting purposes."
  },
  {
    slur:  "Halfrican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Any other race. Represents a person that is half African. Also: Halfrican American"
  },
  {
    slur:  "Halfro",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Black Mixed Race"
  },
  {
    slur:  "Halfula",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix. Pronounced like \"Dracula"
  },
  {
    slur:  "Hambone",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to overweight black men."
  },
  {
    slur:  "Hamburger",
    refers_to:  "Americans",
    reason_and_origin:  "Used by Koreans to slur Americans."
  },
  {
    slur:  "Hamilton",
    refers_to:  "Indians",
    reason_and_origin:  "Rhyming slang in Scotland from a Scottish soccer team called Hamilton Academicals. This is shortened to Hamilton Accies (Akkies) …"
  },
  {
    slur:  "Hanah",
    refers_to:  "Jews",
    reason_and_origin:  "Popular Jewish name for girls, pronounced like the chanu in Chanukah"
  },
  {
    slur:  "Hans Bitterman",
    refers_to:  "Germans",
    reason_and_origin:  "Personifies the humourless German"
  },
  {
    slur:  "Haole",
    refers_to:  "Whites",
    reason_and_origin:  "Hawaiian: Haole is a contraction of ha (breath) and a'ole (no) meaning \"no breath\" used to described foreigners who shook hands instead o…"
  },
  {
    slur:  "Hapa",
    refers_to:  "Pacific Islanders",
    reason_and_origin:  "This is a term that describes somebody of mixed ethnic or racial background, usually (but not always) Asian/Pacific Islander and Caucasian…"
  },
  {
    slur:  "Hapshi",
    refers_to:  "Africans",
    reason_and_origin:  "Animal like, originates in ancient India, when some slaves were imported from Africa. Still in use."
  },
  {
    slur:  "Harbor-Bomber",
    refers_to:  "Japanese",
    reason_and_origin:  "The Japanese bombed Pearl Harbor in 1941, which caused the US to enter World War II."
  },
  {
    slur:  "Harlem",
    refers_to:  "Blacks",
    reason_and_origin:  "Harlem's (NY) residents are primarily Black."
  },
  {
    slur:  "Harp",
    refers_to:  "Irish",
    reason_and_origin:  "Perhaps derived from the fact that Harp Ale is brewed in Ireland or that the Harp is popular instrument amongst the Irish. The harp is als…"
  },
  {
    slur:  "Harpoon-Chucker",
    refers_to:  "Eskimos",
    reason_and_origin:  "Eskimos chuck spears to hunt fish. Play on spear-chucker"
  },
  {
    slur:  "Hatchet-Packer",
    refers_to:  "Native Americans",
    reason_and_origin:  "They are always carrying their hatchets"
  },
  {
    slur:  "Haunt",
    refers_to:  "Blacks",
    reason_and_origin:  "See: Spook"
  },
  {
    slur:  "Hawaga/Khawaga",
    refers_to:  "Whites",
    reason_and_origin:  "Originally a Persian word for \"Lord\". Heard in Egypt. Accent on second syllable."
  },
  {
    slur:  "Hay Seed",
    refers_to:  "Whites",
    reason_and_origin:  "Slang term for country-farmer-type whites (or all whites in general)."
  },
  {
    slur:  "Head Hunters",
    refers_to:  "Polynesians",
    reason_and_origin:  "Many Polynesian cultures have practiced head hunting."
  },
  {
    slur:  "Head-bangers",
    refers_to:  "Muslims",
    reason_and_origin:  "As stipulated by their religion, believers in Islam pray in the direction of Mecca 5 times per day. Bowing of the head is required; hence …"
  },
  {
    slur:  "Hear-em-screama",
    refers_to:  "Japanese",
    reason_and_origin:  "Hiroshima atomic bombing tragedy"
  },
  {
    slur:  "Hebe/Heeb",
    refers_to:  "Jews",
    reason_and_origin:  "Short for Hebrew."
  },
  {
    slur:  "Hebro",
    refers_to:  "Jews",
    reason_and_origin:  "Black Jews. Combination of \"Hebrew\" and \"bro,\" or \"Hebrew\" and \"Negro."
  },
  {
    slur:  "Heebarican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Puerto Rican mix"
  },
  {
    slur:  "Heinee",
    refers_to:  "Germans",
    reason_and_origin:  "Possibly from the root name, \"Hein."
  },
  {
    slur:  "Heinz",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Any mix of races. From the label on the ketchup bottle reading \"57 Varieties."
  },
  {
    slur:  "Helo",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who try to immerse themselves in hoodlum culture."
  },
  {
    slur:  "Hendrix",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people who are able to play an electric guitar. Found offensive among certain groups."
  },
  {
    slur:  "Hentai",
    refers_to:  "Japanese",
    reason_and_origin:  "Translates to something like \"pervert\" and is used primarily to refer to anime porn."
  },
  {
    slur:  "Herm",
    refers_to:  "Germans",
    reason_and_origin:  "Herman the German - self-explanatory."
  },
  {
    slur:  "Herring Choker",
    refers_to:  "Scandinavians",
    reason_and_origin:  "Scandinavians are known for eating lots of fish."
  },
  {
    slur:  "Hibe",
    refers_to:  "Irish",
    reason_and_origin:  "Short for Hibernian (of, relating to, or characteristic of Ireland or the Irish)."
  },
  {
    slur:  "Hick",
    refers_to:  "Whites",
    reason_and_origin:  "Country dweller, rustic farmer, unsophisticated tourist. The whites that live in the country. Also, Sometimes they make a hicking nois…"
  },
  {
    slur:  "Hickory-Smoked",
    refers_to:  "Jews",
    reason_and_origin:  "WWII."
  },
  {
    slur:  "Higger",
    refers_to:  "Indians",
    reason_and_origin:  "Hindus who act Black."
  },
  {
    slur:  "High Yellow",
    refers_to:  "Blacks",
    reason_and_origin:  "Light-skinned black person. Adjective, generally used by blacks in describing blacks with a light complexion"
  },
  {
    slur:  "Highboots",
    refers_to:  "Greeks",
    reason_and_origin:  "Attributed to fishing heritage/large number of Greek immigrants to US with that trade. Heard from the matriarch of a large Greek-America…"
  },
  {
    slur:  "Hightalians",
    refers_to:  "Italians",
    reason_and_origin:  "Spoiled, rich, brown-noising Italians"
  },
  {
    slur:  "Hillbilly",
    refers_to:  "Whites",
    reason_and_origin:  "Redneck, Hick and Hillbilly are all used as derogatory terms for whites."
  },
  {
    slur:  "Hillbilly",
    refers_to:  "Scottish",
    reason_and_origin:  "Ulster Scots who supported the Protestant King William of Orange at the Battle of the Boyne came to be known as \"Billy Boys.\" Th…"
  },
  {
    slur:  "Hilljack",
    refers_to:  "Whites",
    reason_and_origin:  "Same as hillbilly. Heard often in reference to folks from southern Ohio who moved from Kentucky or West Virginia."
  },
  {
    slur:  "Hillwilliam",
    refers_to:  "Whites",
    reason_and_origin:  "From hillbilly; upscale white trash."
  },
  {
    slur:  "Himey",
    refers_to:  "Jews",
    reason_and_origin:  "Most noteworthy usage by Rev. Jesse Jackson calling New York \"himey town.\" Also: heime, heimey"
  },
  {
    slur:  "Hispandex",
    refers_to:  "Hispanics",
    reason_and_origin:  "Don't know if Hispanics are known for wearing Spandex, but it sounds funny anyway."
  },
  {
    slur:  "Hitler",
    refers_to:  "Germans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "HNIC",
    refers_to:  "Blacks",
    reason_and_origin:  "Acronym for \"Head Nigger In Charge.\" Used by Morgan Freeman's character in \"Lean on Me."
  },
  {
    slur:  "Ho Baas",
    refers_to:  "Blacks",
    reason_and_origin:  "Words uttered when a gun is pointed at Blacks in old South Africa. \"Baas\" being Afrikaans for boss."
  },
  {
    slur:  "Ho De Doz",
    refers_to:  "Blacks",
    reason_and_origin:  "They work in large hotels and \"hold the door\" to let white folks in"
  },
  {
    slur:  "Ho-chi",
    refers_to:  "Vietnamese",
    reason_and_origin:  "North Vietnamese leader in the 40's"
  },
  {
    slur:  "Hohol",
    refers_to:  "Ukranians",
    reason_and_origin:  "Derived from the typical rural Ukranian haircut of the 19th century: a shaved head with a \"hohol\"- a single strand of hair hanging to th…"
  },
  {
    slur:  "Hollowhead",
    refers_to:  "Dutch",
    reason_and_origin:  "Holland\" originally comes from the words \"Hollow Land\" because it's so flat"
  },
  {
    slur:  "Holly",
    refers_to:  "Whites",
    reason_and_origin:  "Bastardized form of Haole, what Hawaiians call White people. See: Haole"
  },
  {
    slur:  "Holy Shit",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Priests only"
  },
  {
    slur:  "Homey/Homie",
    refers_to:  "Blacks",
    reason_and_origin:  "Synonymous with friend in the black community, used by other races to poke fun at that."
  },
  {
    slur:  "Homocrat",
    refers_to:  "Greeks",
    reason_and_origin:  "The Greeks invented democracy and some say homosexuality"
  },
  {
    slur:  "Honger",
    refers_to:  "Chinese",
    reason_and_origin:  "Teenage Asian kids, that are fresh from Hong Kong. Usually found squatting in large groups and drive Honda's with spoilers."
  },
  {
    slur:  "Honkaloid",
    refers_to:  "Whites",
    reason_and_origin:  "From a Christ Rock skit on Saturday Night Live where he bemoans lack of racist terms for whites"
  },
  {
    slur:  "Honky/Honkie",
    refers_to:  "Whites",
    reason_and_origin:  "Possibly comes from the term \"Honky Tonk\", which is a type of country music. Another interesting theory suggests it originated as \"Hunky…"
  },
  {
    slur:  "Honky/Honkie",
    refers_to:  "Asians",
    reason_and_origin:  "Asians hailing from Hong Kong."
  },
  {
    slur:  "Hooknose",
    refers_to:  "Jews",
    reason_and_origin:  "In recognition of a common Hebrew facial characteristic."
  },
  {
    slur:  "Hoon",
    refers_to:  "Australians",
    reason_and_origin:  "Australian origin representing an irresponsible person."
  },
  {
    slur:  "Hoopie",
    refers_to:  "Whites",
    reason_and_origin:  "Term for southerners/poor whites who used barrel hoops as belts, term similar to hillbilly and hick"
  },
  {
    slur:  "Hoopty",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people in the United States and Canada use this term to refer to an older, beaten up, junky car."
  },
  {
    slur:  "Hoosier",
    refers_to:  "Whites",
    reason_and_origin:  "Rednecks, trailer park trash."
  },
  {
    slur:  "Hootie",
    refers_to:  "Blacks",
    reason_and_origin:  "From the pop band of the 1980's Hootie and the Blowfish. The lead singer was black (obviously Hootie). The other members of the band wer…"
  },
  {
    slur:  "Hop-Sing",
    refers_to:  "Chinese",
    reason_and_origin:  "Refers to the name of the Chinese cook on the television show \"Bonanza"
  },
  {
    slur:  "Hori",
    refers_to:  "Maori",
    reason_and_origin:  "Pronounced whore-ree."
  },
  {
    slur:  "Horse-Gums",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Horseface",
    refers_to:  "Whites",
    reason_and_origin:  "Elongated whites, such as Nordids, resemble equines."
  },
  {
    slur:  "Horvitz",
    refers_to:  "Jews",
    reason_and_origin:  "Last name of famous Jewish con-artist/criminal. Refers to Jews who complain about low-paying jobs."
  },
  {
    slur:  "Hoser",
    refers_to:  "Canadians",
    reason_and_origin:  "A lower-class white guy who drinks beer and watches hockey."
  },
  {
    slur:  "Hot Dog Eater",
    refers_to:  "Americans",
    reason_and_origin:  "Used by Canadians, referring to American tourists who eat a lot of hot dogs."
  },
  {
    slur:  "Hot Footer",
    refers_to:  "Hispanics",
    reason_and_origin:  "Ones that can't swim across the border. See: Wet-Back."
  },
  {
    slur:  "Hot Pocket",
    refers_to:  "Jews",
    reason_and_origin:  "Quick easy thing to cook in an oven."
  },
  {
    slur:  "Hotel",
    refers_to:  "Blacks",
    reason_and_origin:  "Ebonics: \"I gave the bitch crabs and the hotel everybody."
  },
  {
    slur:  "Hothead",
    refers_to:  "Italians",
    reason_and_origin:  "Self-Explanatory. Italian men are often very short tempered and hot headed"
  },
  {
    slur:  "Hotnot",
    refers_to:  "Blacks",
    reason_and_origin:  "Probably derived from Afrikaans \"Hottentot\", a name for a very traditional Khoisan group generally recognized as among the most primitiv…"
  },
  {
    slur:  "House Nigger",
    refers_to:  "Blacks",
    reason_and_origin:  "The slaves called the butlers house niggers, basic Uncle Tom reference."
  },
  {
    slur:  "Housekeeping",
    refers_to:  "Hispanics",
    reason_and_origin:  "Many hotel housekeepers are Hispanic."
  },
  {
    slur:  "Howdy",
    refers_to:  "Whites",
    reason_and_origin:  "Howdy Doody"
  },
  {
    slur:  "HP",
    refers_to:  "Whites",
    reason_and_origin:  "Human Parasites. Europeans destroy every culture they encounter"
  },
  {
    slur:  "Hucka-lucka",
    refers_to:  "Arabs",
    reason_and_origin:  "Derived from the sound of them speaking (as heard by a dumb American)."
  },
  {
    slur:  "Huey",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Panther founder Huey P. Newton"
  },
  {
    slur:  "Huff",
    refers_to:  "Native Americans",
    reason_and_origin:  "They huff gas to get high as they can't afford real drugs"
  },
  {
    slur:  "Huk",
    refers_to:  "Filipinos",
    reason_and_origin:  "HUKbong Bayang Laban sa Hapon (Citizens' Forces Against the Japanese). Guerilla group that fought against the Japanese in World War II…"
  },
  {
    slur:  "Hun",
    refers_to:  "Germans",
    reason_and_origin:  "When the Europeans united to crush the Chinese boxer rebellion, Kaiser Wilhelm II said something like \"let the Germans strike fear into th…"
  },
  {
    slur:  "Hunkie",
    refers_to:  "Hungarians",
    reason_and_origin:  "Originally Hungarian American immigrants often used to include Ukrainians, Romanians immigrants from Communist block countries."
  },
  {
    slur:  "Hunyak",
    refers_to:  "Polish",
    reason_and_origin:  "Contraction of Hungarian & Polock."
  },
  {
    slur:  "Hurammi",
    refers_to:  "Arabs",
    reason_and_origin:  "Arabic word for thief."
  },
  {
    slur:  "Hurri",
    refers_to:  "Swedes",
    reason_and_origin:  "Hurri is a word used by Finns to address the Swedish-speaking people who live in Finland (and who are often the descendants of the ric…"
  },
  {
    slur:  "Huskie",
    refers_to:  "Eskimos",
    reason_and_origin:  "Refers to a type of dog found in Northern parts. 'Husky' also means large or overweight."
  },
  {
    slur:  "Hutch",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by some southern people to refer to black people. May reference the type of cage used to keep small animals."
  },
  {
    slur:  "Huxtable",
    refers_to:  "Blacks",
    reason_and_origin:  "Taken from the Cosby show. A commentary on rich black people living like whites."
  },
  {
    slur:  "Hymie",
    refers_to:  "Jews",
    reason_and_origin:  "Common name: Chaim, pronounced (roughly) hy-EEM. Jesse Jackson once referred to New York City as \"Hymie-town."
  },
  {
    slur:  "I P's",
    refers_to:  "Blacks",
    reason_and_origin:  "stands for Indigenous Population"
  },
  {
    slur:  "I-Tie",
    refers_to:  "Italians",
    reason_and_origin:  "Old-fashioned epithet, derived from the 1st 2 syllables in \"Italian\" with a corruption of the 2nd syllable."
  },
  {
    slur:  "Ian",
    refers_to:  "Armenians",
    reason_and_origin:  "All their last names end in IAN."
  },
  {
    slur:  "Ice Monkey",
    refers_to:  "Finnish",
    reason_and_origin:  "Because of their clear skin and facial features."
  },
  {
    slur:  "Ice Nigger",
    refers_to:  "Canadians",
    reason_and_origin:  "It's cold in Canada. Coined by comedian Scott Thompson from the Kids in the Hall."
  },
  {
    slur:  "Iceback",
    refers_to:  "Canadians",
    reason_and_origin:  "Another take on frozen Wetback. See Frostback."
  },
  {
    slur:  "Ikey-Mo",
    refers_to:  "Jews",
    reason_and_origin:  "Abbreviation of \"Isaac Moses\"."
  },
  {
    slur:  "Imitasian",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to whites who try to be Asian. Imitation Asians."
  },
  {
    slur:  "Imperialist",
    refers_to:  "Americans",
    reason_and_origin:  "The USA is considered to be an empire."
  },
  {
    slur:  "In-Betweener",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "They ain't white and they ain't black, THEY'RE IN BETWEEN"
  },
  {
    slur:  "Incognegro",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who act Black. Play off of \"incognito"
  },
  {
    slur:  "Indian",
    refers_to:  "Native Americans",
    reason_and_origin:  "Indians come from India, not North/South America. Offensive because original American settlers from Europe completely misnamed them."
  },
  {
    slur:  "Indijew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Native American/Jewish"
  },
  {
    slur:  "Indo",
    refers_to:  "Indonesians",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Indon",
    refers_to:  "Indonesians",
    reason_and_origin:  "Malaysians, Singaporeans and some Australians like to call Indonesians \"Indon\". Indonesians find it offensive."
  },
  {
    slur:  "Indonigger",
    refers_to:  "Indians",
    reason_and_origin:  "Indian who tries to be black, or is darker in skin."
  },
  {
    slur:  "Init",
    refers_to:  "Native Americans",
    reason_and_origin:  "Sioux Indians. Init is a actual word the Sioux like to use. We like to say this is \"rez talk\" so eventually it fit to call them Inits."
  },
  {
    slur:  "Injun",
    refers_to:  "Native Americans",
    reason_and_origin:  "Pioneer-related term dates back to the 19th century during the Western Expansion. Probably comes from country people who could no…"
  },
  {
    slur:  "Inky",
    refers_to:  "Blacks",
    reason_and_origin:  "Referring to the color of skin. Used mainly by darker-skinned Blacks to lighter-skinned Blacks. Also Ink Baby or Inkspot."
  },
  {
    slur:  "Interesting",
    refers_to:  "Jews",
    reason_and_origin:  "Used by some upper-class Whites, especially females, when discussing men. \"He's a nice guy. Is He...interesting?"
  },
  {
    slur:  "Inverse Raddish",
    refers_to:  "Russians",
    reason_and_origin:  "White on the outside, but bright crimson Commie Red on the inside. (raddishes are white inside and red outside)"
  },
  {
    slur:  "Iraqi Pete",
    refers_to:  "Arabs",
    reason_and_origin:  "From the Staurday Night Live character played by Adam Sandler."
  },
  {
    slur:  "IROC",
    refers_to:  "Italians",
    reason_and_origin:  "Italian Retards Out Crusing. IROC Camaros are popular among east coast Italians."
  },
  {
    slur:  "Ironing Board",
    refers_to:  "Asians",
    reason_and_origin:  "Ironing boards are flat, same with asian face/body."
  },
  {
    slur:  "Isaac",
    refers_to:  "Jews",
    reason_and_origin:  "Used by Errol Flynn in a 1933 letter to German intelligence agent Hermann Erben. Assumes that \"Isaac\" and all of its other incarnations ar…"
  },
  {
    slur:  "Island Beaner",
    refers_to:  "Cubans",
    reason_and_origin:  "Widely used in Florida to describe Cubans"
  },
  {
    slur:  "Island Monkey",
    refers_to:  "English",
    reason_and_origin:  "Heard in Germany. Self explanatory."
  },
  {
    slur:  "Island Nigger",
    refers_to:  "Polynesians",
    reason_and_origin:  "Polynesians live in islands and some have hair similar to that of Black people."
  },
  {
    slur:  "Itch",
    refers_to:  "Yugoslavs",
    reason_and_origin:  "A lot of Yugoslavian names end with -ich"
  },
  {
    slur:  "Ivan",
    refers_to:  "Russians",
    reason_and_origin:  "German WW2 slang, like Tommy for English"
  },
  {
    slur:  "Ivory",
    refers_to:  "Whites",
    reason_and_origin:  "This is kind of an interesting term, because \"Ebony\" is considered a very good word and used by Blacks to reference themselves (some eve…"
  },
  {
    slur:  "J.J.",
    refers_to:  "Blacks",
    reason_and_origin:  "A goofy black guy, like the guy from Good Times."
  },
  {
    slur:  "Jab",
    refers_to:  "Indians",
    reason_and_origin:  "Short for Punjab, a region of India."
  },
  {
    slur:  "Jabonee",
    refers_to:  "Italians",
    reason_and_origin:  "What American-born Italians call immigrant Italians, as in \"He/she is a real Jabonee right off the boat. Can't even speak English.…"
  },
  {
    slur:  "Jackamammy",
    refers_to:  "Blacks",
    reason_and_origin:  "Combination of 'jack rabbit' and 'Aunt Jemima.' People have said that jack rabbits looked like 'lynched' black people."
  },
  {
    slur:  "Jacker",
    refers_to:  "Arabs",
    reason_and_origin:  "Many prominent hijackings over the past 25 years were done by various Arab/Islamic fundamentalist groups."
  },
  {
    slur:  "Jackpot",
    refers_to:  "Blacks",
    reason_and_origin:  "Cause they always want to hit the jackpot"
  },
  {
    slur:  "Jafa",
    refers_to:  "Australians",
    reason_and_origin:  "Just Another Fucking Aussie"
  },
  {
    slur:  "Jafa",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Derives from the joke that all Aboriginals steal red cars. Black on the inside, red on the outside, just like the candy \"Jafas"
  },
  {
    slur:  "Jafaken",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to a white guy with dredlocks"
  },
  {
    slur:  "Jagger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Japanese / Nigger"
  },
  {
    slur:  "Jake",
    refers_to:  "Americans",
    reason_and_origin:  "Used by Jamaicans towards white Americans. May be from \"Jake and the Fat Man\" TV show."
  },
  {
    slur:  "Jam Bun",
    refers_to:  "Germans",
    reason_and_origin:  "Cockney slang for Hun (See: Hun)"
  },
  {
    slur:  "Jamairican",
    refers_to:  "Jamaicans",
    reason_and_origin:  "Jamaican immigrants."
  },
  {
    slur:  "Jambo",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to Blacks from Africa who are considered by other Blacks as unsophisticated. Comes from 'Jambo Kenya' in the Kenya National Anthem"
  },
  {
    slur:  "Jandel",
    refers_to:  "Polynesians",
    reason_and_origin:  "Because most Polynesians wear jandels."
  },
  {
    slur:  "Jane Goodall",
    refers_to:  "Whites",
    reason_and_origin:  "White girl who prefers black men."
  },
  {
    slur:  "Jank",
    refers_to:  "Japanese",
    reason_and_origin:  "Japanese living in America, Jap + yankee = Jank"
  },
  {
    slur:  "Janner",
    refers_to:  "English",
    reason_and_origin:  "Refers to any English person born within ten miles of the sea but primarily people from Plymouth"
  },
  {
    slur:  "Jap",
    refers_to:  "Japanese",
    reason_and_origin:  "Short for Japanese."
  },
  {
    slur:  "JAP",
    refers_to:  "Jews",
    reason_and_origin:  "Stands for \"Jewish-American Princess\". Related to the familiar 'Yenta'. Origins in Philip Roth's short story \"Goodbye Columbus."
  },
  {
    slur:  "Japanigger",
    refers_to:  "Asians",
    reason_and_origin:  "Describes Asians of unknown origin."
  },
  {
    slur:  "Japansy",
    refers_to:  "Japanese",
    reason_and_origin:  "WWII (sneak attack)"
  },
  {
    slur:  "Jar Jar",
    refers_to:  "Blacks",
    reason_and_origin:  "In Star Wars Episode 1, the computer-generated character Jar Jar Binks was filled with stereotypical black behavior. The actor who did th…"
  },
  {
    slur:  "Jar-Head/Jarhead",
    refers_to:  "Americans",
    reason_and_origin:  "U.S. Marines have haircuts that look like lids on jars."
  },
  {
    slur:  "Jarhead",
    refers_to:  "Americans",
    reason_and_origin:  "The original Marine uniform included a stiff white and/or leather collar topping a dark blue coat, giving their heads an inhuma…"
  },
  {
    slur:  "Jaundy Boy",
    refers_to:  "Asians",
    reason_and_origin:  "Comes from Jaundice (Hepatitis), which turns your skin yellow."
  },
  {
    slur:  "Jawa",
    refers_to:  "Arabs",
    reason_and_origin:  "Sand people from Star Wars (used to refer to Arabs on South Park)"
  },
  {
    slur:  "Jeeves",
    refers_to:  "British",
    reason_and_origin:  "A supposedly common name of British butlers."
  },
  {
    slur:  "Jek",
    refers_to:  "Chinese",
    reason_and_origin:  "Used by Thai people to describe Chinese immigrants."
  },
  {
    slur:  "Jellybean",
    refers_to:  "Blacks",
    reason_and_origin:  "Everyone hates the black ones."
  },
  {
    slur:  "Jerry",
    refers_to:  "Germans",
    reason_and_origin:  "Apparently used since World War I. Jerry was a British nickname for \"chamberpot\", and was a reference to the shape of the helmets th…"
  },
  {
    slur:  "Jerry Curl",
    refers_to:  "Blacks",
    reason_and_origin:  "Popular black hairstyle."
  },
  {
    slur:  "Jersey-Dweller",
    refers_to:  "Blacks",
    reason_and_origin:  "New Jersey = the arm pit of America, this does not mean that African Americans live in Jersey. However, in any city in America, Africa…"
  },
  {
    slur:  "Jesus Killer",
    refers_to:  "Jews",
    reason_and_origin:  "Christians in the times of WWII when the Jews were most hated used this slur as a reason to hate Jews."
  },
  {
    slur:  "Jet",
    refers_to:  "Blacks",
    reason_and_origin:  "For their \"jet black\" skin. Also for the black-orienied weekly magazine JET."
  },
  {
    slur:  "Jew",
    refers_to:  "Jews",
    reason_and_origin:  "Short for Jewish. Not really a slur but could be if you say it the right way."
  },
  {
    slur:  "Jew Burner",
    refers_to:  "Germans",
    reason_and_origin:  "Refers to Jewish Holocaust during WW2."
  },
  {
    slur:  "Jew Jew Bee",
    refers_to:  "Jews",
    reason_and_origin:  "Theres a type of candy called JuJu"
  },
  {
    slur:  "Jew Killer",
    refers_to:  "Germans",
    reason_and_origin:  "Reference to the Holocaust."
  },
  {
    slur:  "Jew Yorker",
    refers_to:  "Jews",
    reason_and_origin:  "Due to high incidence of Jews in NY"
  },
  {
    slur:  "Jew-Bag",
    refers_to:  "Jews",
    reason_and_origin:  "Reference to being cheap."
  },
  {
    slur:  "Jewbacca",
    refers_to:  "Jews",
    reason_and_origin:  "Hairy Jews. In reference to the hairy creature Chewbacca from the Star Wars movies."
  },
  {
    slur:  "Jewban",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Cuban Mix."
  },
  {
    slur:  "Jewbling",
    refers_to:  "Jews",
    reason_and_origin:  "Small/young Jews."
  },
  {
    slur:  "Jewbrew",
    refers_to:  "Jews",
    reason_and_origin:  "Hebrew combined with Jew"
  },
  {
    slur:  "Jewbu",
    refers_to:  "Jews",
    reason_and_origin:  "A former person of the Jewish faith who has switched to Buddhism(apparently there are many)."
  },
  {
    slur:  "Jewess",
    refers_to:  "Jews",
    reason_and_origin:  "Mix of Jew and Princess, as the teenage girls are often treated like. Not any more a slur than Jew is."
  },
  {
    slur:  "Jewgaboo",
    refers_to:  "Jews",
    reason_and_origin:  "A Jewish person that acts or tries to act like a black person or is half black."
  },
  {
    slur:  "Jewlet",
    refers_to:  "Jews",
    reason_and_origin:  "Female Teenage Jews. Heard frequently in NY."
  },
  {
    slur:  "Jewmaican",
    refers_to:  "Jews",
    reason_and_origin:  "A Jewish person that acts Jamaican or Rastafarian or is half Jamaican."
  },
  {
    slur:  "Jewop",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Italian mix (Jew+Wop)."
  },
  {
    slur:  "Jewpac",
    refers_to:  "Jews",
    reason_and_origin:  "Twist on Tupac Shakur's name."
  },
  {
    slur:  "Jewpidity",
    refers_to:  "Jews",
    reason_and_origin:  "Jewish + stupidity."
  },
  {
    slur:  "Jewrab",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Arabian mix."
  },
  {
    slur:  "Jewrican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Puerto Rican mix."
  },
  {
    slur:  "Jewronimo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jew/Native American mix (Geronimo)"
  },
  {
    slur:  "Jewxican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Mexican mix."
  },
  {
    slur:  "Jibaro",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Traditional term for mountain coffee bean pickers. Hillbilly."
  },
  {
    slur:  "Jiffy Pop",
    refers_to:  "Blacks",
    reason_and_origin:  "Specifically Rastifarians. The traditional Rastafarian hat resembles a popped container of Jiffy Pop popcorn"
  },
  {
    slur:  "Jig",
    refers_to:  "Blacks",
    reason_and_origin:  "Short for Jigaboo."
  },
  {
    slur:  "Jig",
    refers_to:  "Japanese",
    reason_and_origin:  "Japanese Nig(ger). Japanese people who act black."
  },
  {
    slur:  "Jig",
    refers_to:  "Native Americans",
    reason_and_origin:  "In Canada, they do a dance called a jig or jigging."
  },
  {
    slur:  "Jig And A Pig",
    refers_to:  "Blacks",
    reason_and_origin:  "Black men go for fat white chicks"
  },
  {
    slur:  "Jig-Abdul",
    refers_to:  "Arabs",
    reason_and_origin:  "Mid-East version of 'Jigaboo'"
  },
  {
    slur:  "Jigaboo",
    refers_to:  "Blacks",
    reason_and_origin:  "Very dark-skinned Black people. Usually used among lighter-skinned African-Americans to refer to ones of very dark complexion. Made popula…"
  },
  {
    slur:  "Jigabrew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Jew mix (Jigaboo and Hebrew)"
  },
  {
    slur:  "Jigga",
    refers_to:  "Blacks",
    reason_and_origin:  "Shortening of Jigaboo used in pop culture today,"
  },
  {
    slur:  "Jigger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Black mix. Jew + Nigger."
  },
  {
    slur:  "Jihad",
    refers_to:  "Arabs",
    reason_and_origin:  "A word used by militant Muslims in reference to purging the world of infidels. Translates roughly to \"struggle\"."
  },
  {
    slur:  "Jihadi",
    refers_to:  "Arabs",
    reason_and_origin:  "Mosslems in India have been branded after Jihad."
  },
  {
    slur:  "Jim",
    refers_to:  "Blacks",
    reason_and_origin:  "Heard it used by Renko on Hill Street Blues. He called an older black man \"Jim\" and the guy flipped out and roared, \"Who are you callin…"
  },
  {
    slur:  "Jim Crow",
    refers_to:  "Blacks",
    reason_and_origin:  "Used a lot during the Civil War. He was a stereotypical minstrel show character, history described here. Also used to describ…"
  },
  {
    slur:  "Jin",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "AboriJINal."
  },
  {
    slur:  "Jin",
    refers_to:  "Asians",
    reason_and_origin:  "Asian people who try to act Black and use the slang, etc. Jin is the name of a Chinese rapper (link)."
  },
  {
    slur:  "Jink",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Chinese."
  },
  {
    slur:  "Jish",
    refers_to:  "Jewish",
    reason_and_origin:  "Slurred contraction of \"Jewish"
  },
  {
    slur:  "Jjanggae",
    refers_to:  "Chinese",
    reason_and_origin:  "Term used by Koreans to describe Chinese"
  },
  {
    slur:  "Jock",
    refers_to:  "Scottish",
    reason_and_origin:  "Scottish variant of the name \"Jack.\" Originally used to describe soldiers, but now used for anyone Scottish."
  },
  {
    slur:  "Joe",
    refers_to:  "Americans",
    reason_and_origin:  "Were referred to as \"G.I. Joe\" in World War II."
  },
  {
    slur:  "Johk Sing",
    refers_to:  "Chinese",
    reason_and_origin:  "Cantonese term used to refer to American-born Chinese"
  },
  {
    slur:  "John Deere",
    refers_to:  "Whites",
    reason_and_origin:  "John Deere is a popular tractor manufacturer."
  },
  {
    slur:  "John Redcorn",
    refers_to:  "Native Americans",
    reason_and_origin:  "The Native Americans character on the animated show King of the Hill is named John Redcorn"
  },
  {
    slur:  "John Rocker",
    refers_to:  "Whites",
    reason_and_origin:  "Rednecks. Refers to John Rocker's comments about New York and how it would be something that a stupid ass redneck would say"
  },
  {
    slur:  "Johnny Bull",
    refers_to:  "English",
    reason_and_origin:  "John Bull as symbol of England. Non-English ethnics in the USA use the term derisively towards English-Americans"
  },
  {
    slur:  "Johnny Reb",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to the Rebels in the American Civil War, AKA Southerners"
  },
  {
    slur:  "JOJ",
    refers_to:  "Immigrants",
    reason_and_origin:  "Just Off the Jet. Updated version of FOB (Fresh Off the Boat) and refers to any recent immigrant who cannot speak english well"
  },
  {
    slur:  "Jr. Mint",
    refers_to:  "Blacks",
    reason_and_origin:  "White on inside, black on outside."
  },
  {
    slur:  "Juan Valdez",
    refers_to:  "Hispanics",
    reason_and_origin:  "The guy from the Colombian coffee can."
  },
  {
    slur:  "Juba",
    refers_to:  "Blacks",
    reason_and_origin:  "The black slave from the movie \"Gladiator."
  },
  {
    slur:  "Juban",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish/Cuban"
  },
  {
    slur:  "JUBU",
    refers_to:  "Jews",
    reason_and_origin:  "Jewish people attempting to act black. From the clothing marketed towards black people, FUBU."
  },
  {
    slur:  "Jughead",
    refers_to:  "Koreans",
    reason_and_origin:  "Koreans have large heads"
  },
  {
    slur:  "Julab",
    refers_to:  "Indians",
    reason_and_origin:  "Means \"wet shit\" in Hindi/Punjabi"
  },
  {
    slur:  "July Ham",
    refers_to:  "Blacks",
    reason_and_origin:  "July Ham is a Watermelon"
  },
  {
    slur:  "Jumbo Jaws",
    refers_to:  "Americans",
    reason_and_origin:  "The great big mutant chins many Yanks have."
  },
  {
    slur:  "Jump-up",
    refers_to:  "Jamaicans",
    reason_and_origin:  "Derogatory term used by Bermudians for Jamaican immigrants who come north looking for cheap jobs."
  },
  {
    slur:  "Jumping Bean",
    refers_to:  "Mexicans",
    reason_and_origin:  "Jumping beans are popular among Mexicans."
  },
  {
    slur:  "June Bug",
    refers_to:  "Blacks",
    reason_and_origin:  "They come out in great numbers in the summer, and sit in the middle of the road."
  },
  {
    slur:  "Jungle Bunny",
    refers_to:  "Blacks",
    reason_and_origin:  "Jungle is referred to their jungle origins and bunny is referred to some people saying that jack rabbits looked like 'lynched' black people."
  },
  {
    slur:  "Junta",
    refers_to:  "Asians",
    reason_and_origin:  "known as the ones who spend there time hanging round by the arcades thinking they are all hard"
  },
  {
    slur:  "Justin Igger",
    refers_to:  "Blacks",
    reason_and_origin:  "Ie. \"Hey I know that guy, he's Justin Igger"
  },
  {
    slur:  "Kaaskop",
    refers_to:  "Dutch",
    reason_and_origin:  "Dutch for \"Cheese head\". Refers to improvised helmets made of cheesbuckets, as worn by millitant farmers during the 80-year war."
  },
  {
    slur:  "Kabloonuk",
    refers_to:  "Whites",
    reason_and_origin:  "Inuit (Eskimo) word for any non-Inuit. Literal translation means \"person with bushy eyebrows."
  },
  {
    slur:  "Kabob",
    refers_to:  "Armenians",
    reason_and_origin:  "Almost every Armenian resteraunt serves kabobs."
  },
  {
    slur:  "Kaek",
    refers_to:  "Indians",
    reason_and_origin:  "Thais, living in Thailand, refer to the Indians (who have been in Thailand for at least 200 years, I think) as Kaeks, which means \"guest…"
  },
  {
    slur:  "Kaffer/ir",
    refers_to:  "Blacks",
    reason_and_origin:  "Afrikaaner word for blacks, very derogatory. Made popular by Lethal Weapon 2."
  },
  {
    slur:  "Kaffir",
    refers_to:  "Blacks",
    reason_and_origin:  "In apartheit South Africa, it meant much the same as 'nigger' does in the United States."
  },
  {
    slur:  "Kafir",
    refers_to:  "Africans",
    reason_and_origin:  "Referring to Black Africans. Kafir is an Arabic word with meanings similar to Goy or Goyim of the Jews, only describing any non-Musli…"
  },
  {
    slur:  "Kaiser",
    refers_to:  "Germans",
    reason_and_origin:  "Referance to World War One."
  },
  {
    slur:  "Kala",
    refers_to:  "Blacks",
    reason_and_origin:  "Indian word for the color black. Used by Indians as a slur for black people."
  },
  {
    slur:  "Kaliali",
    refers_to:  "Indians",
    reason_and_origin:  "Malu is actually short for \"Maliali\" which is spelled Malayalee. Specifically South Indians from the state of Kerala in India"
  },
  {
    slur:  "Kalu",
    refers_to:  "Indians",
    reason_and_origin:  "Indian acting like a black person"
  },
  {
    slur:  "Kamikaze",
    refers_to:  "Japanese",
    reason_and_origin:  "Some Japanese pilots(called Kamikaze) were trained to make a suicidal crash attack durin World War II."
  },
  {
    slur:  "Kanak",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Hawaiian names starting with Kanak i.e. Kanaka, Kane, Kanakeole"
  },
  {
    slur:  "Kanaka",
    refers_to:  "Hawaiians",
    reason_and_origin:  "A Hawaiian word meaning simply \"person.\" Whites and Asians began to use it in a disparaging way and for most of the 19th and 20th centur…"
  },
  {
    slur:  "Kangaroo",
    refers_to:  "Australians",
    reason_and_origin:  "Self Explanatory."
  },
  {
    slur:  "Kango",
    refers_to:  "Whites",
    reason_and_origin:  "Used for white guys who act like black guys, comes form a biscuit that was vanilla on outside choclate on inside"
  },
  {
    slur:  "Kangy",
    refers_to:  "Australians",
    reason_and_origin:  "Kangaroos (and old queen Molly B II loved kangaroos)"
  },
  {
    slur:  "Kano",
    refers_to:  "Americans",
    reason_and_origin:  "Filipino slang for Americans. Shortened from \"Amerikano."
  },
  {
    slur:  "Kartoffel",
    refers_to:  "Germans",
    reason_and_origin:  "Called this by foreigners because they think Germans eat a lot of potatos (Kartoffel)"
  },
  {
    slur:  "Katsap",
    refers_to:  "Russians",
    reason_and_origin:  "Etymology of the word comes from a tradition of Russian males, before Peter the Great, to uniformally wear a goatee. So it is …"
  },
  {
    slur:  "Katwa",
    refers_to:  "Muslims",
    reason_and_origin:  "Slur used in India to represent Muslims (similar to Landya - \"Actually means 'cut cocks' because of the rite of circumcising followed b…"
  },
  {
    slur:  "Katzenfresser",
    refers_to:  "Italians",
    reason_and_origin:  "German slur meaning \"cat eater\"."
  },
  {
    slur:  "Keebler",
    refers_to:  "Whites",
    reason_and_origin:  "Reference to Keebler Elf line of snack crackers."
  },
  {
    slur:  "Kees",
    refers_to:  "Dutch",
    reason_and_origin:  "Flemish for \"cheese\". Also a very common name in Holland (and possibly also Flanders); it is a shortened form of the name \"Cornelis\". I…"
  },
  {
    slur:  "Kekeke",
    refers_to:  "Koreans",
    reason_and_origin:  "Refers to the incessant e-laughter of Koreans. Commonly used to mock internerds who Zerg rush or act like fags."
  },
  {
    slur:  "Kermit",
    refers_to:  "French",
    reason_and_origin:  "Kermit the Frog from \"The Muppets."
  },
  {
    slur:  "Kerpal",
    refers_to:  "Pakistanis",
    reason_and_origin:  "From the famous prank phone calls."
  },
  {
    slur:  "KFC",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people like fried chicken."
  },
  {
    slur:  "Khao-Khao",
    refers_to:  "Whites",
    reason_and_origin:  "(pronounced: cow-cow) Thai slang referring to whites. Khao means white."
  },
  {
    slur:  "Khmerican",
    refers_to:  "Cambodians",
    reason_and_origin:  "Cambodian Americans. Khmer=Cambodian American=American Khmer + American=Khmerican"
  },
  {
    slur:  "Khokhol",
    refers_to:  "Ukrainians",
    reason_and_origin:  "Comes from a traditional Ukranian Cossak haircut, where all head was shaved, except the cock in front of the head."
  },
  {
    slur:  "Ki Yi",
    refers_to:  "Native Americans",
    reason_and_origin:  "Rhymes with 'pie pie'. The sounds made in old western movies by the Indians."
  },
  {
    slur:  "Kike",
    refers_to:  "Jews",
    reason_and_origin:  "Originates from the word 'keikl', in Yiddish, which means 'circle', the reason being that the first Jewish immigrants in America, who wer…"
  },
  {
    slur:  "Killer Bee",
    refers_to:  "Mexicans",
    reason_and_origin:  "Refers to the fact that like the insect, they too have been migrating out of Mexico into Texas."
  },
  {
    slur:  "Kilt",
    refers_to:  "Scottish",
    reason_and_origin:  "From a traditional article of national garb."
  },
  {
    slur:  "Kimchee",
    refers_to:  "Koreans",
    reason_and_origin:  "Kimchee\" is a type of ferminted cabbage in Korea, and it sort of sounds like \"Korean"
  },
  {
    slur:  "Kingfish",
    refers_to:  "Blacks",
    reason_and_origin:  "From Amos & Andy. Usually in reference to a poor, older black man."
  },
  {
    slur:  "Kink",
    refers_to:  "Koreans",
    reason_and_origin:  "Like Chink, but for Koreans."
  },
  {
    slur:  "Kink",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Half Jew, half Chinese (kike + chink)"
  },
  {
    slur:  "Kirby",
    refers_to:  "Blacks",
    reason_and_origin:  "Cuban slur for blacks. Kirby is a popular black bean manufacturer amongst cubans."
  },
  {
    slur:  "Kitchen Sink",
    refers_to:  "Chinese",
    reason_and_origin:  "Cockney rhyming slang, chink = kitchen sink"
  },
  {
    slur:  "Kiwi",
    refers_to:  "New Zealanders",
    reason_and_origin:  "The native bird of NZ and a popular fruit. Not necessarily a slur."
  },
  {
    slur:  "Kizzy",
    refers_to:  "Blacks",
    reason_and_origin:  "Kunta Kinte's daughter from the movie Roots."
  },
  {
    slur:  "Klondyke",
    refers_to:  "Eskimos",
    reason_and_origin:  "Female eskimos"
  },
  {
    slur:  "Klooch",
    refers_to:  "Native Americans",
    reason_and_origin:  "Common slur used for Alaskan Indians."
  },
  {
    slur:  "Knee Jerk",
    refers_to:  "Native Americans",
    reason_and_origin:  "Subset of Native American indicating person who was at Wounded Knee incident in South Dakota in the '70s; Member of A.I.M. (America…"
  },
  {
    slur:  "Knees",
    refers_to:  "Asians",
    reason_and_origin:  "Japanese, chinese, vietnamese, ect. Reference to the suffix \"nese."
  },
  {
    slur:  "Knees Grow",
    refers_to:  "Blacks",
    reason_and_origin:  "Comes from Negro."
  },
  {
    slur:  "Knuckle-Dragger",
    refers_to:  "Blacks",
    reason_and_origin:  "Often believed that black people have longer arms than other races and therefore their knuckles would drag."
  },
  {
    slur:  "Koala",
    refers_to:  "Australians",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Kobe",
    refers_to:  "Blacks",
    reason_and_origin:  "The popular black basketball player recently embroiled in a rape trial."
  },
  {
    slur:  "Kogut",
    refers_to:  "Ukrainians",
    reason_and_origin:  "Pronounced \"ko-goot\", derogatory term Russians use to call Ukrainians."
  },
  {
    slur:  "Koku-jin",
    refers_to:  "Blacks",
    reason_and_origin:  "Japanese term for Blacks or anyone of African descent."
  },
  {
    slur:  "Kook",
    refers_to:  "Whites",
    reason_and_origin:  "Hawaiian surfers use this term towards novice white surfers"
  },
  {
    slur:  "Koolaid",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people are stereotypically partial to the red Koolaid."
  },
  {
    slur:  "Koona",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Koona nurks tara. Aborigonal meaning \"you bloody cunt\" i.e. menstruating. Menstrual blood is used in Abo medicine."
  },
  {
    slur:  "Koorie",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Aboriginal tribe name. Probably not a slur"
  },
  {
    slur:  "Kooshi",
    refers_to:  "Blacks",
    reason_and_origin:  "Hebrew word for Africa or a black person"
  },
  {
    slur:  "Kosher Konsumer",
    refers_to:  "Jews",
    reason_and_origin:  "They only eat kosher food"
  },
  {
    slur:  "Koshie",
    refers_to:  "Jews",
    reason_and_origin:  "As in kosher"
  },
  {
    slur:  "Kossy",
    refers_to:  "Germans",
    reason_and_origin:  "Cossack tribes who lived in Northern Germany"
  },
  {
    slur:  "Kotonk",
    refers_to:  "Japanese",
    reason_and_origin:  "Mainland-Born Japanese-Americans when a Buddhahead would beat a mainland kids head, the hollow sound coming from the head was \"kotonk…"
  },
  {
    slur:  "Kraftwerk",
    refers_to:  "Germans",
    reason_and_origin:  "Early German Techno Band"
  },
  {
    slur:  "Kraut",
    refers_to:  "Germans",
    reason_and_origin:  "Short for sauerkraut, a popular German food."
  },
  {
    slur:  "Kukolokod",
    refers_to:  "Native Americans",
    reason_and_origin:  "From the Beatles song where there is a verse \"I am the walrus, kuko loko chu\". Walrus live in Alaska."
  },
  {
    slur:  "Kullemaia",
    refers_to:  "Estonians",
    reason_and_origin:  "Used towards Estonians or Finnish, because of their strange language, i suppose. It is used in Lithuania and Latvia. It's an Estonia…"
  },
  {
    slur:  "Kumar",
    refers_to:  "Indians",
    reason_and_origin:  "From the movie 'Harlad and Kumar go to White Castle', Kumar is the Indian character"
  },
  {
    slur:  "Kung-fu",
    refers_to:  "Chinese",
    reason_and_origin:  "Chinese delivery person, mainly 'Is that Kung-Fu with my Lo Mein?'"
  },
  {
    slur:  "Kunta (Kinte)",
    refers_to:  "Blacks",
    reason_and_origin:  "From Kunta Kinte in the book/movie \"Roots."
  },
  {
    slur:  "Kurad",
    refers_to:  "Estonians",
    reason_and_origin:  "Originally \"Kurad\" is an estonian word, which means \"Old Nick\". Usually it's used by Russians, who are referring to Estonians."
  },
  {
    slur:  "Kurochan",
    refers_to:  "Blacks",
    reason_and_origin:  "Japanese derogatory term-\"kuro\"=black color; \"chan\"=suffix used for children or someone younger"
  },
  {
    slur:  "Kurombo",
    refers_to:  "Blacks",
    reason_and_origin:  "Used in Japan; considered very derogatory. Comes from \"kuro\" (=black color) and \"bo\" (casual suffix meaning young man)."
  },
  {
    slur:  "Kushi",
    refers_to:  "Blacks",
    reason_and_origin:  "Israelis call black ethiopians kushi and blacks period. Means nigger. Originated from Cush."
  },
  {
    slur:  "Kuthi",
    refers_to:  "Indians",
    reason_and_origin:  "Means 'Bitch' In Punjabi"
  },
  {
    slur:  "Kwai-lo",
    refers_to:  "Whites",
    reason_and_origin:  "Literally meaning \"Ghost person/guy\". In Cantonese, it's \"guih lo\". Somewhat popular...used to refer to the presence of British peopl…"
  },
  {
    slur:  "Labanc",
    refers_to:  "Austrians",
    reason_and_origin:  "Reference to the clothing worn by Austrian troops during the Hungarian war for independence ."
  },
  {
    slur:  "Labus",
    refers_to:  "Latvians",
    reason_and_origin:  "Lativans say \"labi\" (good) to everything, whether they mean it or not."
  },
  {
    slur:  "Lamb Chop",
    refers_to:  "Greeks",
    reason_and_origin:  "Greeks in general love lamb, but also it makes reference to Greek women's hairy sideburns"
  },
  {
    slur:  "Lamington",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Most of them are dirty, as they dont bathe and therefore develop dandruff, hence the lamington look (a lamington is an Aussie cake - spong…"
  },
  {
    slur:  "Lamp Shade",
    refers_to:  "Jews",
    reason_and_origin:  "The Nazis had lamp shades made from Jewish skin"
  },
  {
    slur:  "Land Torpedo",
    refers_to:  "Arabs",
    reason_and_origin:  "Car bombers."
  },
  {
    slur:  "Lando",
    refers_to:  "Blacks",
    reason_and_origin:  "Lando\" is the token Black character in both the original Star Wars Trilogy, and in Clerks: The Animated Series (Which lampoons that aspec…"
  },
  {
    slur:  "Landscaper",
    refers_to:  "Mexicans",
    reason_and_origin:  "Mexicans do a lot of landscaping. Similar to \"landscraper."
  },
  {
    slur:  "Landya",
    refers_to:  "Arabs",
    reason_and_origin:  "Actually means 'cut cocks' because of the rite of circumcising followed by Muslims."
  },
  {
    slur:  "Langosta/Langostina",
    refers_to:  "Cubans",
    reason_and_origin:  "Means \"Lobster\", slang for Cuban women because like the lobster they carry all their meat in the tail"
  },
  {
    slur:  "Lao-Mo",
    refers_to:  "Hispanics",
    reason_and_origin:  "Chinese. Mo is the first chinese character of Moxige (Mexico) and also happened to mean \"Old Ink"
  },
  {
    slur:  "Lao-wai",
    refers_to:  "Whites",
    reason_and_origin:  "Applies to all foreigners in China. Literally means \"Old Outsider."
  },
  {
    slur:  "Laplander",
    refers_to:  "Sami",
    reason_and_origin:  "The Sami (Saami/S�mi) are known for wearing patchwork clothing, which is what 'lap' means. It's used across northern Scandinavia, and i…"
  },
  {
    slur:  "Laposta",
    refers_to:  "Italians",
    reason_and_origin:  "Italian slang for lazy person with a small dick. In some areas its used to describe someone unusually skinny, pedophilia, and I've eve…"
  },
  {
    slur:  "Lapp",
    refers_to:  "Sami",
    reason_and_origin:  "An old Norwegian name for S�mi that is now considered derogatory. (The S�mi are a people living in Northern Scandinavia)"
  },
  {
    slur:  "Larrikin",
    refers_to:  "Australians",
    reason_and_origin:  "Not so much an insult; Comical, roguish individual, prone to rowdy and unruly behaviour, (drunkenness). Coined from an Irish policeman in …"
  },
  {
    slur:  "Lassie",
    refers_to:  "Whites",
    reason_and_origin:  "Tefers to white people smelling like dogs when they get wet"
  },
  {
    slur:  "Latifah",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to famous black actor/singer."
  },
  {
    slur:  "Latrino",
    refers_to:  "Hispanics",
    reason_and_origin:  "Combination of \"Latino\" and \"Latrine."
  },
  {
    slur:  "Latte",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White and usually Mexican due to color of skin being similar to the coffee drink."
  },
  {
    slur:  "Latvo",
    refers_to:  "Latvians",
    reason_and_origin:  "Shortening of word"
  },
  {
    slur:  "Lava Lamp",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Also works on Pacific Islanders or anyone in the volcanic circle."
  },
  {
    slur:  "Lava Nigger",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Hawaii is made up of many volcanoes."
  },
  {
    slur:  "Lawn Jockey",
    refers_to:  "Blacks",
    reason_and_origin:  "Most all Lawn Jockeys are Black, sometimes also known as Porch Monkey. Author Ralph Ellison used the term to describe black people wh…"
  },
  {
    slur:  "Lawnmower",
    refers_to:  "Mexicans",
    reason_and_origin:  "A large portion of the landscapers are Mexican/Hispanic."
  },
  {
    slur:  "LBD",
    refers_to:  "Non-Whites",
    reason_and_origin:  "Little Brown Dude. For anyone not white"
  },
  {
    slur:  "LBFM",
    refers_to:  "Filipinos",
    reason_and_origin:  "Female Filipinos, or Asians in general. From 70's military slang, stands for \"Little Brown Fucking Machine"
  },
  {
    slur:  "Leafblower",
    refers_to:  "Hispanics",
    reason_and_origin:  "Many Hispanics are involved with landscaping, and sometimes carry leafblowers"
  },
  {
    slur:  "Leb/Lebbo",
    refers_to:  "Lebanese",
    reason_and_origin:  "Pretty Self-explanatory. Used a lot in Australia where there was a large arrival of Lebanese immigrants in the mid 80's. Often no…"
  },
  {
    slur:  "Leche",
    refers_to:  "Whites",
    reason_and_origin:  "Spanish for milk; color of white skin"
  },
  {
    slur:  "Lefty",
    refers_to:  "Arabs",
    reason_and_origin:  "Thieves in the Arab countries get their hand chopped off."
  },
  {
    slur:  "Lego",
    refers_to:  "Asians",
    reason_and_origin:  "Shortened from Lego man, the tiny yellow toy with missing genitalia."
  },
  {
    slur:  "Lemonhead",
    refers_to:  "Asians",
    reason_and_origin:  "Skin color."
  },
  {
    slur:  "Leprechaun",
    refers_to:  "Irish",
    reason_and_origin:  "From the well-known old Irish myth of the chubby green-clad gnome (what happens when you mix Catholicism with Paganism). Popularized i…"
  },
  {
    slur:  "Leprecoon",
    refers_to:  "Blacks",
    reason_and_origin:  "Combination of Leprechaun and Coon for blacks of Irish descent."
  },
  {
    slur:  "Leroy",
    refers_to:  "Blacks",
    reason_and_origin:  "A stereotypically black name. Typically used as the name of a character is a racial joke, e.g."
  },
  {
    slur:  "LeRoy Rogers",
    refers_to:  "Blacks",
    reason_and_origin:  "Black cowboys."
  },
  {
    slur:  "Levar",
    refers_to:  "Blacks",
    reason_and_origin:  "Educated blacks. Refers to Levar Burton of \"Reading Rainbow\" and \"Star Trek: The Next Generation\" fame."
  },
  {
    slur:  "Lice",
    refers_to:  "Whites",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Lice-Nester",
    refers_to:  "Whites",
    reason_and_origin:  "Whites are known by many to carry and host lice in their hair when they dont keep it clean"
  },
  {
    slur:  "Lily",
    refers_to:  "Whites",
    reason_and_origin:  "From the TV Show 'The Jeffersons'"
  },
  {
    slur:  "Limey",
    refers_to:  "British",
    reason_and_origin:  "The British Royal Navy supplied a daily ration of lime or lemon juice to their sailors to prevent scurvy."
  },
  {
    slur:  "Lincoln's Mistake",
    refers_to:  "Blacks",
    reason_and_origin:  "US President Abraham Lincoln is known to have freed the slaves."
  },
  {
    slur:  "Linthead",
    refers_to:  "Whites",
    reason_and_origin:  "Poor working-class whites. Refers to airborne cotton lint in textile plants where low-income whites worked."
  },
  {
    slur:  "Lit",
    refers_to:  "Lithuanians",
    reason_and_origin:  "Shortening of \"Lithuanian"
  },
  {
    slur:  "Lithwhack",
    refers_to:  "Lithuanians",
    reason_and_origin:  "Was used as a nickname for unstable, mead-swilling Lithuanians."
  },
  {
    slur:  "Little (Black) Sambo",
    refers_to:  "Blacks",
    reason_and_origin:  "As with the Golliwog, originated as a relatively benign though mildly offensive characterization and was adapted by other writers to embod…"
  },
  {
    slur:  "Little Brown Buddy",
    refers_to:  "Filipinos",
    reason_and_origin:  "FDR referred to them as this."
  },
  {
    slur:  "Little Hiroshima",
    refers_to:  "Asians",
    reason_and_origin:  "The United States dropped an atomic bomb on Hiroshima during WW2. The association with the city and asian people in general has stuck…"
  },
  {
    slur:  "Litvok",
    refers_to:  "Lithuanians",
    reason_and_origin:  "Lithuanian Jews. From the Polish word for Lithuania, Some Jews do not consider this an insult but ethnic Lithuanians do"
  },
  {
    slur:  "Liver Lips",
    refers_to:  "Blacks",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Liverlips",
    refers_to:  "Blacks",
    reason_and_origin:  "because it looks like they have liver on thier faces (originates in the southern US)"
  },
  {
    slur:  "Lizard",
    refers_to:  "Chinese",
    reason_and_origin:  "Rumor that the Chinese evolved from lizards."
  },
  {
    slur:  "Lobster",
    refers_to:  "Whites",
    reason_and_origin:  "White people burn red like lobsters when they spend too long sunbathing."
  },
  {
    slur:  "Lobsterback",
    refers_to:  "British",
    reason_and_origin:  "Redcoats in Revolutionary War."
  },
  {
    slur:  "Loby",
    refers_to:  "Hispanics",
    reason_and_origin:  "Armenian word for \"beans\". Hispanics are known to have a lot of beans in their diet."
  },
  {
    slur:  "Lock",
    refers_to:  "Polish",
    reason_and_origin:  "Short for \"polock"
  },
  {
    slur:  "Locust Eater",
    refers_to:  "Afghans",
    reason_and_origin:  "Locusts are considered to be fine dining in their country, they praise allah for about 3 hours if they should be so fortunate as to obtai…"
  },
  {
    slur:  "Lofan",
    refers_to:  "Whites",
    reason_and_origin:  "Anglo-Americans. A Chinese word, not necessarily derogatory."
  },
  {
    slur:  "Lov",
    refers_to:  "Russians",
    reason_and_origin:  "Many names end in \"lov"
  },
  {
    slur:  "Lowlander",
    refers_to:  "Dutch",
    reason_and_origin:  "The Netherlands are below sea level."
  },
  {
    slur:  "Lowrider",
    refers_to:  "Hispanics",
    reason_and_origin:  "Refers to lowriders. The tricked out, custom cars Hispanic gang members often drive."
  },
  {
    slur:  "Lubricano",
    refers_to:  "Mexicans",
    reason_and_origin:  "Variant of greaser."
  },
  {
    slur:  "Lucius",
    refers_to:  "Blacks",
    reason_and_origin:  "Commonly used on poor black people. During the period prior to the Civil War, many blacks were named after famous Romans (e.g. Lucius…"
  },
  {
    slur:  "Lugan",
    refers_to:  "Lithuanians",
    reason_and_origin:  "Reasons unknown. Possible origins in the Chicago area."
  },
  {
    slur:  "Lugz",
    refers_to:  "Blacks",
    reason_and_origin:  "Named after the brand of footwear who's ad campaign is targeted towards blacks."
  },
  {
    slur:  "Luigi",
    refers_to:  "Italians",
    reason_and_origin:  "Famous Italian videogame plumber. Used to refer to tall, thin Italians"
  },
  {
    slur:  "Lynch-monger",
    refers_to:  "Whites",
    reason_and_origin:  "Comes from Whites lynching Blacks before and around US Civil War times. \"Monger\" meaning someone who promotes this practice."
  },
  {
    slur:  "Ma Se Poes",
    refers_to:  "Blacks",
    reason_and_origin:  "Comes from the general curse used by Afrikaans-speaking South Africans (mainly coloureds in Cape Town), \"Jou ma se poes\", which means \"You…"
  },
  {
    slur:  "Mac",
    refers_to:  "Scottish",
    reason_and_origin:  "Common Scottish surname prefix."
  },
  {
    slur:  "Macaca",
    refers_to:  "Indians",
    reason_and_origin:  "Derived from the word \"monkey.\" Famously used by Republican U.S. Senator George Allen during his 2006 re-election campaign."
  },
  {
    slur:  "Macaco",
    refers_to:  "Brazilians",
    reason_and_origin:  "The Argentinians call Brazilians \"macacos\" (monkeys in brazilian portuguese language) because they are more racially mixed. Specially use…"
  },
  {
    slur:  "Macaquito",
    refers_to:  "Brazilians",
    reason_and_origin:  "The Argentinians call Brazilians \"macaquitos\" (little monkeys) because they are more racially mixed."
  },
  {
    slur:  "Macaroni",
    refers_to:  "Italians",
    reason_and_origin:  "The famous macaroni noodle originated in Italy."
  },
  {
    slur:  "Mackerel Snapper",
    refers_to:  "Irish",
    reason_and_origin:  "It can be applied to any Catholic, Irish or otherwise. In the past, Catholics were forbidden from eating meat on Fridays. They got aroun…"
  },
  {
    slur:  "MacLord",
    refers_to:  "Whites",
    reason_and_origin:  "Macintosh users, typically caucasians, are often haughty and arrogant much like English lords of Olde."
  },
  {
    slur:  "Madrasis",
    refers_to:  "Indians",
    reason_and_origin:  "The biggest city in South India used to be called Madras(now Chennai)."
  },
  {
    slur:  "Maggot",
    refers_to:  "Whites",
    reason_and_origin:  "Maggots breed from filth and when the Whites came to America, they brought with them rats and diseases therefore wiping out half of th…"
  },
  {
    slur:  "Magila Gorilla",
    refers_to:  "Blacks",
    reason_and_origin:  "Term for a Huge, Fat, Black man."
  },
  {
    slur:  "Mahout",
    refers_to:  "Indians",
    reason_and_origin:  "Literally means \"Elephant Driver\" but was turned into a popular racial slur around 1997 when a lot of Indains began to move onto Lon…"
  },
  {
    slur:  "Mail-order Bride",
    refers_to:  "Filipinos",
    reason_and_origin:  "The Philippines is one of the biggest sources of mail-order brides."
  },
  {
    slur:  "Maize-Muncher",
    refers_to:  "Native Americans",
    reason_and_origin:  "Natives are known for there love of corn."
  },
  {
    slur:  "Makak",
    refers_to:  "Moroccan",
    reason_and_origin:  "Makak is some kinda ape. It's a Belgian word."
  },
  {
    slur:  "Makaronifresser",
    refers_to:  "Italians",
    reason_and_origin:  "German. Fressen is impolite term for eating (people essen, but animals fressen)."
  },
  {
    slur:  "Malabari",
    refers_to:  "Malayali/Indian",
    reason_and_origin:  "Popular slang used in the MiddleEast to describe the Malayalam speaking people from Kerala state in India. Malabar which is a part o…"
  },
  {
    slur:  "Maldito Bori",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Puerto Ricans come from Boriquen and call themselves Boriquas. Bori is short for that. Maldito is used so commonly before Bori by man…"
  },
  {
    slur:  "Mammy",
    refers_to:  "Blacks",
    reason_and_origin:  "Similar to Aunt Jemima. Stereotype of black women as nannies to white children, especially overweight black women - see \"Gone With Th…"
  },
  {
    slur:  "Mandingo",
    refers_to:  "Blacks",
    reason_and_origin:  "In reference to the 1975 blacksploitation movie with the same name."
  },
  {
    slur:  "Mandinka",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to the motion picture \"Roots\:  A Mandinka warrior was a 'Big Black Buck'."
  },
  {
    slur:  "Mango",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Reference to the mongoloid appearance of many Hawaiins and other Pacific islanders."
  },
  {
    slur:  "Mangosteen",
    refers_to:  "Indians",
    reason_and_origin:  "The mangosteen is a fruit that grows in the East Indies and is black on the outside but white on the inside. Refers to Indians who hav…"
  },
  {
    slur:  "Mangro-Monkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Monkeys live in mangroves."
  },
  {
    slur:  "Manny",
    refers_to:  "Portuguese",
    reason_and_origin:  "Because it seems nine out of ten Portuguese guys are named \"Manuel\", or \"Manny"
  },
  {
    slur:  "Manuel Labor",
    refers_to:  "Mexicans",
    reason_and_origin:  "Mexicans residing in the United States are used predominantly for manual labor. Manuel is a common hispanic name."
  },
  {
    slur:  "Mao",
    refers_to:  "Chinese",
    reason_and_origin:  "From Mao Tse-tung, original leader of communist China."
  },
  {
    slur:  "Mape",
    refers_to:  "Canadians",
    reason_and_origin:  "Maple leaf on their flag."
  },
  {
    slur:  "Maple Leaf Nigger",
    refers_to:  "Canadians",
    reason_and_origin:  "Their flag has a maple leaf on it."
  },
  {
    slur:  "Maple-Sucker",
    refers_to:  "Canadians",
    reason_and_origin:  "Refers to Canadian people and the assumption that they consume lots of maple syrup"
  },
  {
    slur:  "Mario",
    refers_to:  "Italians",
    reason_and_origin:  "Famous Italian vidoegame plumber. Used to refer to fat Italians."
  },
  {
    slur:  "Maroon",
    refers_to:  "Blacks",
    reason_and_origin:  "When the slave ships had a troublemaking slave-to-be they would drop him off on a small island or rock in the middle of the ocean thu…"
  },
  {
    slur:  "Marsh Nigger",
    refers_to:  "Dutch",
    reason_and_origin:  "The Netherlands is a very marshy country"
  },
  {
    slur:  "Marshmallow",
    refers_to:  "Whites",
    reason_and_origin:  "A traditional, middle-aged caucasian: Soft and White."
  },
  {
    slur:  "MARTA",
    refers_to:  "Blacks",
    reason_and_origin:  "Metro Atlanta Regional Transit Authority. Or as it's sometimes known: Moving Africans Rapidly Through Atlanta."
  },
  {
    slur:  "Martha Stewart",
    refers_to:  "Whites",
    reason_and_origin:  "Means like a bad term for white housewife, bored crooked ass homemaker."
  },
  {
    slur:  "Mascot",
    refers_to:  "Native Americans",
    reason_and_origin:  "Their likeness is often mascots for sports teams"
  },
  {
    slur:  "Massa",
    refers_to:  "Whites",
    reason_and_origin:  "Black Southern speech. The Negro slaves addressed their Masters in this way."
  },
  {
    slur:  "Mat Saleh",
    refers_to:  "Whites",
    reason_and_origin:  "Malaysian slur for caucasians."
  },
  {
    slur:  "Matza-Gobbler",
    refers_to:  "Jews",
    reason_and_origin:  "Matza is Jewish un-levened bread"
  },
  {
    slur:  "Matzah",
    refers_to:  "Jews",
    reason_and_origin:  "Refers to the Jewish food matzah balls"
  },
  {
    slur:  "Mavro/Mav",
    refers_to:  "Blacks",
    reason_and_origin:  "Greek word for black"
  },
  {
    slur:  "Mayate",
    refers_to:  "Blacks",
    reason_and_origin:  "Hispanic term for 'Nigger.'"
  },
  {
    slur:  "Mayflower",
    refers_to:  "Whites",
    reason_and_origin:  "American whites. Reference to the ship called Mayflower."
  },
  {
    slur:  "Mayonnaise",
    refers_to:  "Whites",
    reason_and_origin:  "Skin color."
  },
  {
    slur:  "McChigger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Irish/Chinese/African American mix"
  },
  {
    slur:  "McGook",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Soldier in name called them that, referring to McDonalds (slaughtered meat)"
  },
  {
    slur:  "McKraut",
    refers_to:  "Mixed Races",
    reason_and_origin:  "German/Irish person. Used in the Godfather trilogy."
  },
  {
    slur:  "McNigga",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to McDonald's new line of advertising campaigns marketed towards blacks."
  },
  {
    slur:  "McNugget",
    refers_to:  "Scottish",
    reason_and_origin:  "For scottish or irish children - Mc (or Mac) for scottish/irish, nugget to represent that they are children"
  },
  {
    slur:  "McSpic",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mixed race of Irish and Hispanics"
  },
  {
    slur:  "McWop",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Irish/Italian, Mick and Wop, play on common Irish last names."
  },
  {
    slur:  "MD",
    refers_to:  "Whites",
    reason_and_origin:  "Melanin Deficient"
  },
  {
    slur:  "Mead",
    refers_to:  "Irish",
    reason_and_origin:  "The Irish are commonly drunk on mead and mead-derived alcohols"
  },
  {
    slur:  "Meat Pie",
    refers_to:  "Asians",
    reason_and_origin:  "Yellow on the outside, black on the inside."
  },
  {
    slur:  "Meatball",
    refers_to:  "Italians",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Mechanical",
    refers_to:  "Blacks",
    reason_and_origin:  "English rhyming slang - Mechanical digger = Nigger"
  },
  {
    slur:  "Med Wop",
    refers_to:  "Mediterraneans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Mehi",
    refers_to:  "Mexican",
    reason_and_origin:  "X's (like J's) are pronounced in Spanish like an English H. Thus this slur is a mockery of their pronounciation."
  },
  {
    slur:  "Melanzana",
    refers_to:  "Blacks",
    reason_and_origin:  "Italian for \"eggplant\" - very dark black people have a purplish tint to their skin, so does eggplant."
  },
  {
    slur:  "Mellanoid",
    refers_to:  "Blacks",
    reason_and_origin:  "Dictionary: one having dark pigmentation."
  },
  {
    slur:  "Melon Johnny",
    refers_to:  "Blacks",
    reason_and_origin:  "Italian slang for Blacks."
  },
  {
    slur:  "Memetis",
    refers_to:  "Turks",
    reason_and_origin:  "Greek pronounciation of the Islamic name of Mehmet"
  },
  {
    slur:  "Memphis",
    refers_to:  "Whites",
    reason_and_origin:  "Dirty white trailor trash people normally resemble the population of Memphis, TN."
  },
  {
    slur:  "Merkin",
    refers_to:  "Americans",
    reason_and_origin:  "American pronunciation of \"American\", also a pubic wig"
  },
  {
    slur:  "Meshback",
    refers_to:  "Whites",
    reason_and_origin:  "For Rednecks. Refers to the mesh-backed caps they wear"
  },
  {
    slur:  "Meshky",
    refers_to:  "Blacks",
    reason_and_origin:  "Translated into Farsi (Persian language) means \"black\". Used commonly among young white boys as undercover means of saying \"nigger"
  },
  {
    slur:  "Mestizo",
    refers_to:  "Hispanics",
    reason_and_origin:  "Specifically, Spanish/Native American mixed breed. Not polite, but not taboo either. From the Spanish word for \"mixed\"."
  },
  {
    slur:  "Mexcrement",
    refers_to:  "Mexicans",
    reason_and_origin:  "Obvious combination of \"Mexican\" and \"excrement"
  },
  {
    slur:  "Mexi-Ho's",
    refers_to:  "Mexicans",
    reason_and_origin:  "Term to describe Mexican girls who get pregnant at an early age."
  },
  {
    slur:  "Mexican't",
    refers_to:  "Mexicans",
    reason_and_origin:  "Based on the stereotype that Mexicans are lazy."
  },
  {
    slur:  "Mexicoon",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Black mix."
  },
  {
    slur:  "Mexijew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Jewish mix."
  },
  {
    slur:  "Meximese",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Vietnamese"
  },
  {
    slur:  "Mi Dang",
    refers_to:  "Blacks",
    reason_and_origin:  "The Vietnamese term for African Americans."
  },
  {
    slur:  "Michelli",
    refers_to:  "Whites",
    reason_and_origin:  "Commonly used to refer to Whites living in southern United States."
  },
  {
    slur:  "Mick/Mic/Mc",
    refers_to:  "Irish",
    reason_and_origin:  "Many Irish surnames begin with \"Mc\" or \"Mac.\" Many Irish are also named after the famed Michael Collins, making Michael (Mick) a ver…"
  },
  {
    slur:  "Midnight",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Migger",
    refers_to:  "Mexicans",
    reason_and_origin:  "Mexicans/Hispanics who act black."
  },
  {
    slur:  "Miguel",
    refers_to:  "Mexicans",
    reason_and_origin:  "Stereotypical name for Mexicans"
  },
  {
    slur:  "Milano",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix. In reference to the cookie."
  },
  {
    slur:  "Milk",
    refers_to:  "Whites",
    reason_and_origin:  "Due to the light color of their skin"
  },
  {
    slur:  "Milk Dud",
    refers_to:  "Blacks",
    reason_and_origin:  "A black person with a shaved head."
  },
  {
    slur:  "Milkhead",
    refers_to:  "Whites",
    reason_and_origin:  "Very white with a big head. Can be heard in John Waters' \"Female Trouble"
  },
  {
    slur:  "Milkman",
    refers_to:  "Blacks",
    reason_and_origin:  "Black men who prefer white women. Used by blacks."
  },
  {
    slur:  "Milky",
    refers_to:  "Whites",
    reason_and_origin:  "Referring to their racism and white skin."
  },
  {
    slur:  "Mingia",
    refers_to:  "Italians",
    reason_and_origin:  "In Sicilian dialect it means 'dick'."
  },
  {
    slur:  "Mishwa",
    refers_to:  "Blacks",
    reason_and_origin:  "Means \"barbequed\" or \"grilled\" in Arabic, blacks for their dark skin. Mishweya for females."
  },
  {
    slur:  "Miss Cleo",
    refers_to:  "Blacks",
    reason_and_origin:  "A reference to the (in)famous commercial personality."
  },
  {
    slur:  "Missing Tooth",
    refers_to:  "Whites",
    reason_and_origin:  "Redneck whites commonly have missing teeth."
  },
  {
    slur:  "Missippi Tree Emblem",
    refers_to:  "Blacks",
    reason_and_origin:  "Due to when they were hung in the Southern states."
  },
  {
    slur:  "Mississippi Blue Lip",
    refers_to:  "Blacks",
    reason_and_origin:  "Old redneck term."
  },
  {
    slur:  "Mister Charles",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Used during the vietnam war referring to VC or Victor Charlie."
  },
  {
    slur:  "Mister Charlie",
    refers_to:  "Whites",
    reason_and_origin:  "Lying, Conniving, Untrustworthy white"
  },
  {
    slur:  "Miyagi",
    refers_to:  "Asians",
    reason_and_origin:  "From the movie The Karate Kid"
  },
  {
    slur:  "Miyate",
    refers_to:  "Blacks",
    reason_and_origin:  "Mexican/Latino slang for \"minority\"."
  },
  {
    slur:  "MLK",
    refers_to:  "Blacks",
    reason_and_origin:  "Pronouced \"milk,\" made due to misrepresentation of national holidays"
  },
  {
    slur:  "Mo",
    refers_to:  "Mexicans",
    reason_and_origin:  "Acronym for Mexican Orderly: Used in jails to refer to mexican trustees."
  },
  {
    slur:  "Mo",
    refers_to:  "Eskimos",
    reason_and_origin:  "Shortened version of \"Eskimo"
  },
  {
    slur:  "Mo And Yo",
    refers_to:  "Blacks",
    reason_and_origin:  "2 of the more common sounds they make in their general street slang."
  },
  {
    slur:  "Moanback",
    refers_to:  "Blacks",
    reason_and_origin:  "From Southern black garbage men giving the driver directions on when to back up (Come on back, or 'mon back)."
  },
  {
    slur:  "MOB",
    refers_to:  "Americans",
    reason_and_origin:  "Morbidly Obese Bodies on account of Americans are mostly fat (also could be Morbidly Obese Bitches for women)"
  },
  {
    slur:  "Mocha",
    refers_to:  "Arabs",
    reason_and_origin:  "Skin color (not quite black)."
  },
  {
    slur:  "Mockey",
    refers_to:  "Jews",
    reason_and_origin:  "Jews \"mocked\" Jesus at his death."
  },
  {
    slur:  "Mocro",
    refers_to:  "Moroccans",
    reason_and_origin:  "Used by themselves and the Dutch. Originated from Spanish"
  },
  {
    slur:  "Modern Farm Equipment",
    refers_to:  "Mexicans",
    reason_and_origin:  "Many Mexicans work in agriculture today. Evolved from the \"Antique Farm Equipment\" slur for Blacks."
  },
  {
    slur:  "Moe",
    refers_to:  "Chinese",
    reason_and_origin:  "Since Chinese always have haircuts that look like Moe from The 3 Stooges"
  },
  {
    slur:  "Mof/Moffen",
    refers_to:  "Germans",
    reason_and_origin:  "Used by the Dutch in the 2nd World War."
  },
  {
    slur:  "Mohow",
    refers_to:  "Native Americans",
    reason_and_origin:  "Indians have Mohawks & Pow wows."
  },
  {
    slur:  "Mojack",
    refers_to:  "Icelandics",
    reason_and_origin:  "Military term for Icelandics, origin unknown[?]"
  },
  {
    slur:  "Mojado",
    refers_to:  "Hispanics",
    reason_and_origin:  "Means 'wet' or 'dunked' in Spanish. See Mojo"
  },
  {
    slur:  "Mojo",
    refers_to:  "Hispanics",
    reason_and_origin:  "Normally used among Hispanics towards other Hispanics. \"Mojo\" derives from \"mojado\" meaning \"wet\" i.e. wet-backs. Mojados are Mexica…"
  },
  {
    slur:  "Moke",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Refers to how locals in Hawaii are big/fat/dumb. Used by locals similar to how blacks use \"nigger."
  },
  {
    slur:  "Molecko Jecko",
    refers_to:  "Egyptians",
    reason_and_origin:  "A term used for an Epygtian young male in America. \"Molecko Jecko\" was a character in a comedy who used to come to America just to buy …"
  },
  {
    slur:  "Monday",
    refers_to:  "Blacks",
    reason_and_origin:  "Nobody likes Mondays."
  },
  {
    slur:  "Mongrel",
    refers_to:  "Mixed Races",
    reason_and_origin:  "When dogs of two different breeds, breed. The offspring is called a mongrel breed"
  },
  {
    slur:  "Monkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Similar appearance/genetics."
  },
  {
    slur:  "Monkeyboy",
    refers_to:  "Blacks",
    reason_and_origin:  "People once believed, because of their high cranium, blacks were close cousins to primates."
  },
  {
    slur:  "Mono",
    refers_to:  "Blacks",
    reason_and_origin:  "A hispanic term for blacks meaning monkey in most dialects."
  },
  {
    slur:  "Montana",
    refers_to:  "Hispanics",
    reason_and_origin:  "Derived from the movie \"Scarface\" which stars a cuban immigrant druglord named \"Tony Montana\", slur usually said with a Spanish accent"
  },
  {
    slur:  "Montu",
    refers_to:  "Blacks",
    reason_and_origin:  "Old African word that refers to tribes people."
  },
  {
    slur:  "Mook",
    refers_to:  "Chinese",
    reason_and_origin:  "A 'mook jonk' is a wooden dummy used in kung fu. Word defined as \"an ineffectual, foolish, or contemptible person."
  },
  {
    slur:  "Mooliachi",
    refers_to:  "Blacks",
    reason_and_origin:  "Female version of Mooley. Used in The Godfather."
  },
  {
    slur:  "Moolie",
    refers_to:  "Blacks",
    reason_and_origin:  "Shortened from Melanzane, meaning \"eggplant\" in Italian. Eggplants have black skin."
  },
  {
    slur:  "Moolignon",
    refers_to:  "Blacks",
    reason_and_origin:  "Italian for eggplant (technically Mulignane). Could be combination of Moolie and hooligan."
  },
  {
    slur:  "Moon Cricket",
    refers_to:  "Blacks",
    reason_and_origin:  "See Cricket. Possibly derived from the \"MC\" often used after many black nicknames. Also a possible reference to the minoral aspect of th…"
  },
  {
    slur:  "Moon Cricket",
    refers_to:  "Whites",
    reason_and_origin:  "The slur is also used by some Native Americans against whites: \"moon\" as in pale, and \"cricket\" as in whites have big eyes and gangly legs…"
  },
  {
    slur:  "Moor",
    refers_to:  "Arabs",
    reason_and_origin:  "For the Muslims that invaded Europe during the Middle Ages. Also used as derogatory against those of ancestry where the Moors settle…"
  },
  {
    slur:  "Moose",
    refers_to:  "Koreans",
    reason_and_origin:  "Used by American GIs to refer to Korean whores because of their facial features."
  },
  {
    slur:  "Moosefucker",
    refers_to:  "Canadians",
    reason_and_origin:  "Tom Green, a Canadian, mocked sexual contact with a moose on his television show."
  },
  {
    slur:  "Moron",
    refers_to:  "Mormons",
    reason_and_origin:  "Similiar words"
  },
  {
    slur:  "Morta Cristo",
    refers_to:  "Jews",
    reason_and_origin:  "Italian for 'Christ-killer.'"
  },
  {
    slur:  "Moses",
    refers_to:  "Jews",
    reason_and_origin:  "Famous Jew who led his people out of Egypt."
  },
  {
    slur:  "Moskal",
    refers_to:  "Russians",
    reason_and_origin:  "Used by Ukrainians, because of the arrogance of the Moscow citizens"
  },
  {
    slur:  "Mosquito",
    refers_to:  "Muslims",
    reason_and_origin:  "Reference to Muslims going to mosques."
  },
  {
    slur:  "Mosquito",
    refers_to:  "Jews",
    reason_and_origin:  "Jews tend have long noses, similar to a mosquito."
  },
  {
    slur:  "Moss Eater",
    refers_to:  "Whites",
    reason_and_origin:  "White trash in the Pacific Northwest."
  },
  {
    slur:  "Mottisa",
    refers_to:  "Blacks",
    reason_and_origin:  "Back in slave days the Black servants would ask \"Mo tee Sah\", which in proper English translates to \"More tea Sir?"
  },
  {
    slur:  "Mountain Monkey",
    refers_to:  "Norwegians",
    reason_and_origin:  "Danish slur for Norwegians. Frequently used at sporting events."
  },
  {
    slur:  "Mouse",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Blacks to refer to nervous (\"shook\") white people walking through the ghetto."
  },
  {
    slur:  "Mow-Mow",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the Mau Mau movement in Kenya , that rose up in protest to the theft of their land by the British. Mau Mau is european-invente…"
  },
  {
    slur:  "Mozzie",
    refers_to:  "Muslims",
    reason_and_origin:  "Shortend term"
  },
  {
    slur:  "Mr. Big",
    refers_to:  "Blacks",
    reason_and_origin:  "From Yaphet Kotto's Character in the Bond film \"Live and Let Die."
  },
  {
    slur:  "Mr. Bojangles",
    refers_to:  "Blacks",
    reason_and_origin:  "William \"Bojangles\" Robinson was a famous black dancer."
  },
  {
    slur:  "MSG Farmers",
    refers_to:  "Chinese",
    reason_and_origin:  "The Chinese use a harmful additive, M.S.G., in their food to enhance the flavor."
  },
  {
    slur:  "Muck",
    refers_to:  "Eskimos",
    reason_and_origin:  "Short for Eskimuck, due to the problems the Eskimo have pronouncing the English language."
  },
  {
    slur:  "Muck",
    refers_to:  "Native Americans",
    reason_and_origin:  "Short for \"Muckleshoot\", one of the most stereotypical and despised tribes of the Pacific Northwest"
  },
  {
    slur:  "Muckadoo",
    refers_to:  "Blacks",
    reason_and_origin:  "Shawnee, Native American term for \"Mud person"
  },
  {
    slur:  "Mucker",
    refers_to:  "Irish",
    reason_and_origin:  "Used in Boston because Irish immigrants could mostly only find employment helping to fill in the Back Bay which was at the time, marsh an…"
  },
  {
    slur:  "Mud",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix, or white women who date black men"
  },
  {
    slur:  "Mud Duck",
    refers_to:  "Blacks",
    reason_and_origin:  "Dark skin. See Mud People."
  },
  {
    slur:  "Mud Flaps",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people who have large lips."
  },
  {
    slur:  "Mud People",
    refers_to:  "Blacks",
    reason_and_origin:  "Sentiment that only Wasps are born with souls, everyone else God made from mud. Also suggests life without meaning, value or worth. Used b…"
  },
  {
    slur:  "Mud Shark",
    refers_to:  "Whites",
    reason_and_origin:  "White girls who date black men."
  },
  {
    slur:  "Mud Turtle",
    refers_to:  "Blacks",
    reason_and_origin:  "Being bottom-feeders; Mud \"musk\" turtles have a distinct odor and are mud-colored"
  },
  {
    slur:  "Mudak",
    refers_to:  "Russians",
    reason_and_origin:  "Similar to dumb ass, but very explicit."
  },
  {
    slur:  "Mudskipper",
    refers_to:  "Whites",
    reason_and_origin:  "A white woman who dates black men."
  },
  {
    slur:  "Mudslide",
    refers_to:  "Mexicans",
    reason_and_origin:  "What a jailbreak of Mexicans looks like."
  },
  {
    slur:  "Mufasa",
    refers_to:  "Blacks",
    reason_and_origin:  "James Earl Jones' character from The Lion King."
  },
  {
    slur:  "Muffin-head",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to the popular black hair style of afro's."
  },
  {
    slur:  "Muhammad",
    refers_to:  "Arabs",
    reason_and_origin:  "Common name."
  },
  {
    slur:  "Muk/Muktuk",
    refers_to:  "Eskimos",
    reason_and_origin:  "Comes from the main Eskimo food source - Muktuk - whale fat/meat."
  },
  {
    slur:  "Muktuk",
    refers_to:  "Eskimos",
    reason_and_origin:  "Muktuk is eskimo for whale blubber"
  },
  {
    slur:  "Mulan",
    refers_to:  "Chinese",
    reason_and_origin:  "Female charater in a chinese story"
  },
  {
    slur:  "Mule",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics transport drugs."
  },
  {
    slur:  "Mullato",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix, usually. The Spanish \"Mullato\" translates to \"like a mule.\" Could refer to any mixed breed."
  },
  {
    slur:  "Mulletard",
    refers_to:  "Whites",
    reason_and_origin:  "Retarded white trash with a mullet."
  },
  {
    slur:  "Mullethead",
    refers_to:  "Whites",
    reason_and_origin:  "Bad hair cut (short on top, long in back) rural whites sport fashionably. Could easily be shortened to just \"mullet."
  },
  {
    slur:  "Mulunyan",
    refers_to:  "Blacks",
    reason_and_origin:  "Italian word for egg plant, which is black when uncooked."
  },
  {
    slur:  "Mung",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Vietnamese people that were relocated to America by the US government during and after the Vietnam War. It's actually the correc…"
  },
  {
    slur:  "Mungen",
    refers_to:  "Chinese",
    reason_and_origin:  "A Tamil word used by the Indians to insult the Chinese"
  },
  {
    slur:  "Mungie Cake",
    refers_to:  "Whites",
    reason_and_origin:  "White sponge cake found in Europe."
  },
  {
    slur:  "Munt",
    refers_to:  "Blacks",
    reason_and_origin:  "Rhodesian. Comes from the African word for \"person"
  },
  {
    slur:  "Mupp",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to white people who are as filthy as a mop."
  },
  {
    slur:  "Muppetfucker",
    refers_to:  "Whites",
    reason_and_origin:  "Backwoods inbred rednecks of the U.S. south are called muppetfuckers because they look like Muppets."
  },
  {
    slur:  "Murray",
    refers_to:  "Maori",
    reason_and_origin:  "Sounds similar to \"Māori\", New Zealand aboriginals."
  },
  {
    slur:  "Mushu",
    refers_to:  "Asians",
    reason_and_origin:  "Probably from Asian kid on Crank Yankers"
  },
  {
    slur:  "Musungu",
    refers_to:  "Whites",
    reason_and_origin:  "Swahili word for white people"
  },
  {
    slur:  "Mutt",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Any mix of races. The regular use of 'mutt' refers to dogs of mixed breed."
  },
  {
    slur:  "Muzzie",
    refers_to:  "Arabs",
    reason_and_origin:  "A lot of Arabs are Muslims. Muslim, Muzzie."
  },
  {
    slur:  "My Friend!",
    refers_to:  "Indians",
    reason_and_origin:  "Started by the constant greetings of the clerks of a deli as they greet customers."
  },
  {
    slur:  "Mythmaker",
    refers_to:  "Greeks",
    reason_and_origin:  "Because the Greeks made up myths"
  },
  {
    slur:  "N'er",
    refers_to:  "Blacks",
    reason_and_origin:  "Nonchalant way of saying \"nigger."
  },
  {
    slur:  "N.E.D.",
    refers_to:  "Scottish",
    reason_and_origin:  "Non Educated Delinquent. A major subculture in Scotland, NEDs are young criminal men who live off government handouts."
  },
  {
    slur:  "N.L.B.",
    refers_to:  "Whites",
    reason_and_origin:  "Nigger Loving Bitch.\" Represents a woman, while not of the African race, sleeps with those who are."
  },
  {
    slur:  "Naca",
    refers_to:  "Blacks",
    reason_and_origin:  "North American Concrete Ape"
  },
  {
    slur:  "Nacho",
    refers_to:  "Hispanics",
    reason_and_origin:  "Based on the popular snack."
  },
  {
    slur:  "Naco",
    refers_to:  "Hispanics",
    reason_and_origin:  "Native Mexicans. Used as an insult by city dwellers on indigenous, small town inhabitants or vulgar people even from the big city."
  },
  {
    slur:  "Nade",
    refers_to:  "Canadians",
    reason_and_origin:  "Shortened form of \"Canadian.\" Nades is a 2v1 game of tennis."
  },
  {
    slur:  "Naffer",
    refers_to:  "Arabs",
    reason_and_origin:  "Naf short for North-African"
  },
  {
    slur:  "NAGA",
    refers_to:  "Blacks",
    reason_and_origin:  "North American Ground Ape; Affectionately used by the LAPD during the Watts riot in Los Angeles."
  },
  {
    slur:  "Nagasaki",
    refers_to:  "Japanese",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Nagur",
    refers_to:  "Blacks",
    reason_and_origin:  "The Irish-Americans called black people \"Nagurs\" because they could not pronounce the word \"Nigger\" with their accent."
  },
  {
    slur:  "NAHA",
    refers_to:  "Blacks",
    reason_and_origin:  "North American Hairless Apes"
  },
  {
    slur:  "Nammer",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Derived from Vietnam being called \"Nam\"."
  },
  {
    slur:  "Nanner",
    refers_to:  "Blacks",
    reason_and_origin:  "Banana/Monkey/etc related. Also a way to mask the word Nigger"
  },
  {
    slur:  "Nanner",
    refers_to:  "Afghans",
    reason_and_origin:  "Nann\" is the main bread that Afghans eat."
  },
  {
    slur:  "NAPA",
    refers_to:  "Blacks",
    reason_and_origin:  "Nother American Pavement Apes."
  },
  {
    slur:  "Napalm",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Napalm was used during the Vietnam war."
  },
  {
    slur:  "Napkin Nigger",
    refers_to:  "Indians",
    reason_and_origin:  "Obvious reasons."
  },
  {
    slur:  "Nappy Head",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to hair type."
  },
  {
    slur:  "Nappy-headed Ho",
    refers_to:  "Blacks",
    reason_and_origin:  "Black female basketball players (Thanks Don Imus, you racist douchebag)"
  },
  {
    slur:  "Narrow Back",
    refers_to:  "Irish",
    reason_and_origin:  "The son or daughter of an Irish immigrant."
  },
  {
    slur:  "NASA",
    refers_to:  "African Americans",
    reason_and_origin:  "North American Street Ape"
  },
  {
    slur:  "Natasha",
    refers_to:  "Russians",
    reason_and_origin:  "From the common Slavic woman's name, used in Turkey and other countries to refer to East European prostitutes, and by extension to any Eas…"
  },
  {
    slur:  "Nate",
    refers_to:  "Native Americans",
    reason_and_origin:  "Shortened. Could probably be used on any native peoples."
  },
  {
    slur:  "Nazi",
    refers_to:  "Germans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Neanderthal",
    refers_to:  "Scottish",
    reason_and_origin:  "Neanderthals were supposedly discovered in Scotland."
  },
  {
    slur:  "Neck",
    refers_to:  "Whites",
    reason_and_origin:  "Shortened version of 'redneck.'"
  },
  {
    slur:  "Neechee",
    refers_to:  "Native Americans",
    reason_and_origin:  "Love of Lychee fruit."
  },
  {
    slur:  "Neekeri/Nekru",
    refers_to:  "Blacks",
    reason_and_origin:  "Finnish for \"nigger."
  },
  {
    slur:  "Negative",
    refers_to:  "Blacks",
    reason_and_origin:  "South African - Referred to as undeveloped (as in film negatives)."
  },
  {
    slur:  "Negress",
    refers_to:  "Blacks",
    reason_and_origin:  "Black female. Adapted from \"nigger\"."
  },
  {
    slur:  "Negro",
    refers_to:  "Blacks",
    reason_and_origin:  "Once acceptable, it is now often taken derogatorily by Blacks."
  },
  {
    slur:  "Negroid",
    refers_to:  "Blacks",
    reason_and_origin:  "Negro + oid; +oid being a general english suffix meaning related to."
  },
  {
    slur:  "Negrophiliac",
    refers_to:  "Whites",
    reason_and_origin:  "White people with an unhealthly obsession with niggers, derived from necrophiliac."
  },
  {
    slur:  "Nelly",
    refers_to:  "Blacks",
    reason_and_origin:  "Like Mammy. Common black name/character in Antebellum South."
  },
  {
    slur:  "Nethead",
    refers_to:  "Hispanics",
    reason_and_origin:  "Chicano slur used in L.A. From Mexican boys wearing thin nets to cover their hair."
  },
  {
    slur:  "New York Met",
    refers_to:  "Hispanics",
    reason_and_origin:  "There are a lot of Hispanics on the Mets."
  },
  {
    slur:  "Newfie",
    refers_to:  "Canadians",
    reason_and_origin:  "Newfoundlanders. Some of the people from Newfoundland are considered to be less intelligent."
  },
  {
    slur:  "Newspaper",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Newspapers are Black & White."
  },
  {
    slur:  "Newyorican",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Puerto Ricans living in New York"
  },
  {
    slur:  "NFT",
    refers_to:  "Blacks",
    reason_and_origin:  "NFT is the name of the MetroBus system in Buffalo, the initials came to represent Nigger Freight Train"
  },
  {
    slur:  "Ng",
    refers_to:  "Asians",
    reason_and_origin:  "Pronounced 'Ing' . Ng is a very common Asian surname that is considered goofy and is used derogatorily."
  },
  {
    slur:  "Ni-ni",
    refers_to:  "Blacks",
    reason_and_origin:  "Used instead of \"nigger\" in potentially sensitive company, to avoid being overheard, or to appear politically correct."
  },
  {
    slur:  "Niche",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by Cubans regarding Blacks."
  },
  {
    slur:  "Nickel Nose",
    refers_to:  "Jews",
    reason_and_origin:  "Money and Facial characteristic."
  },
  {
    slur:  "Nico/a",
    refers_to:  "Nicaraguans",
    reason_and_origin:  "Non-derogatory Nickname used by themselves and others."
  },
  {
    slur:  "Nig-nog",
    refers_to:  "Blacks",
    reason_and_origin:  "Used in England. Probably from the Dutch \"niknok\" (nigger) by way of South Africa."
  },
  {
    slur:  "Nigdu",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Nigger + Hindu. Half black, half Indian. Also an Indian trying to act black."
  },
  {
    slur:  "Niggabyte",
    refers_to:  "Blacks",
    reason_and_origin:  "A computer geek who happens to be Black."
  },
  {
    slur:  "Niggapotomous",
    refers_to:  "Blacks",
    reason_and_origin:  "An extremely fat nigger."
  },
  {
    slur:  "Nigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Most likely originates with the Latin word \"niger\" which translates to \"black\". Similar words for \"black\" exist in other language…"
  },
  {
    slur:  "Nigger",
    refers_to:  "Whites",
    reason_and_origin:  "Irony"
  },
  {
    slur:  "Nigger Digger",
    refers_to:  "Whites",
    reason_and_origin:  "A white female who dates black men."
  },
  {
    slur:  "Nigger Magnet",
    refers_to:  "Whites",
    reason_and_origin:  "White girl with a big ass"
  },
  {
    slur:  "Nigger mortis",
    refers_to:  "Blacks",
    reason_and_origin:  "It's like rigor mortis, except you're just too lazy to move."
  },
  {
    slur:  "Niggerachi",
    refers_to:  "Blacks",
    reason_and_origin:  "Black person who acts Hispanic"
  },
  {
    slur:  "Niggerette",
    refers_to:  "Blacks",
    reason_and_origin:  "Black women. Adapted from: Nigger, See: Nigger."
  },
  {
    slur:  "Niggerican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Puerto Rican mix."
  },
  {
    slur:  "Niggerino",
    refers_to:  "Blacks",
    reason_and_origin:  "A little nigger"
  },
  {
    slur:  "Niggeroid",
    refers_to:  "Blacks",
    reason_and_origin:  "Usually light skinned mixed breed black and any other race."
  },
  {
    slur:  "Nigglet",
    refers_to:  "Blacks",
    reason_and_origin:  "Black children. Adapted from mixing Nigger with the word piglet (a baby pig)"
  },
  {
    slur:  "Night Club Bomber",
    refers_to:  "Muslims",
    reason_and_origin:  "Bali Bombing"
  },
  {
    slur:  "Night Fighter",
    refers_to:  "Black",
    reason_and_origin:  "Was probably originally coined in the Boer War when the British/Afrikaaneers were fighting the Zulus"
  },
  {
    slur:  "Night-Rider",
    refers_to:  "Whites",
    reason_and_origin:  "White women who date Black men."
  },
  {
    slur:  "Nightcrawler",
    refers_to:  "Blacks",
    reason_and_origin:  "Out at night,"
  },
  {
    slur:  "Nightlite",
    refers_to:  "Whites",
    reason_and_origin:  "White people that live in Africa are brighter than others at night"
  },
  {
    slur:  "Niglige",
    refers_to:  "Blacks",
    reason_and_origin:  "This describes the snow that piles up on the side of the street that turns black. To make a black snowman, you use niglige."
  },
  {
    slur:  "Nigloo",
    refers_to:  "Blacks",
    reason_and_origin:  "In northern Canada, it refers to Blacks living way up north in the cold with the Eskimos."
  },
  {
    slur:  "Nignorant",
    refers_to:  "Blacks",
    reason_and_origin:  "Nigger + ignorant."
  },
  {
    slur:  "Nigonometry",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who are scholars at math."
  },
  {
    slur:  "Nigook",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Nigger + gook. Self explanatory."
  },
  {
    slur:  "Nigra",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by Whites in the Jim Crow South who were too lace-curtain to say \"nigger\" but too racist to say \"Negro."
  },
  {
    slur:  "Nigress",
    refers_to:  "Blacks",
    reason_and_origin:  "Black women. Nigress is to Nigger as Tigris is to Tiger."
  },
  {
    slur:  "Nike",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Nigger + Kike = Nike"
  },
  {
    slur:  "Niknok",
    refers_to:  "Blacks",
    reason_and_origin:  "Dutch version of Nigger."
  },
  {
    slur:  "Nikon",
    refers_to:  "Asians",
    reason_and_origin:  "Popular brand of camera. Asian tourists are known to take a lot of photographs."
  },
  {
    slur:  "Nilla",
    refers_to:  "Whites",
    reason_and_origin:  "Used by white people to describe other white people, is offensive if black people say it to whites. (i.e. \"sup mah nilla?\") Mocking th…"
  },
  {
    slur:  "Nina",
    refers_to:  "Irish",
    reason_and_origin:  "No Irish Need Apply (from the days of the potato famine and they immigrated to the US and nobody wanted to hire them)"
  },
  {
    slur:  "Nine Iron",
    refers_to:  "Asians",
    reason_and_origin:  "Golf club with a dramatic degree of loft, ostensibly resembling stereotypical Asian 'slanted' eyes. As slanted as..."
  },
  {
    slur:  "Nineteens (19's)",
    refers_to:  "Blacks",
    reason_and_origin:  "When choosing an exterior color for a Cadillac, a popular car amongst Blacks, the color code for black is 19."
  },
  {
    slur:  "Ninja",
    refers_to:  "Asians",
    reason_and_origin:  "The idea of ninjas comes from Asia"
  },
  {
    slur:  "Ninja",
    refers_to:  "Blacks",
    reason_and_origin:  "Ninjas wear black clothing."
  },
  {
    slur:  "Nink",
    refers_to:  "Chinese",
    reason_and_origin:  "Chinese person acting Black"
  },
  {
    slur:  "Ninky",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix. See Carlton or Zebra. It can be both."
  },
  {
    slur:  "Nip",
    refers_to:  "Japanese",
    reason_and_origin:  "Shortened version of Nipponese(the former name for the Japanese."
  },
  {
    slur:  "Nip/Nipper",
    refers_to:  "Japanese",
    reason_and_origin:  "Short for Nippon meaning \"Japan\"."
  },
  {
    slur:  "Niponese",
    refers_to:  "Japanese",
    reason_and_origin:  "Used instead of 'Japanese.'"
  },
  {
    slur:  "Nipper",
    refers_to:  "Japanese",
    reason_and_origin:  "They live in Japan, also known as Nippon."
  },
  {
    slur:  "Nippopotomus",
    refers_to:  "Japanese",
    reason_and_origin:  "A Japanese person of robust proportions."
  },
  {
    slur:  "Niptai",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Japanese/Thailandese"
  },
  {
    slur:  "Nit",
    refers_to:  "Native Americans",
    reason_and_origin:  "Chivington ordered him men: \"kill and scalp all, big and little; nits make lice\" just before the Sand Creek massacre in 1864. This was a…"
  },
  {
    slur:  "Nitch",
    refers_to:  "Blacks",
    reason_and_origin:  "The females. Nigger-Bitch."
  },
  {
    slur:  "Nog",
    refers_to:  "Blacks",
    reason_and_origin:  "Stands for \"Nigger Out of Gas\". Used by White police officers to describe Blacks who run out of gas and wait for the police to supply the…"
  },
  {
    slur:  "NOLA",
    refers_to:  "Blacks",
    reason_and_origin:  "Hurricane Katrina evacuees"
  },
  {
    slur:  "Non",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Native Americans to describe people who are \"non-native\". This can be directed at any race, but primarily used toward whites…"
  },
  {
    slur:  "Nonswimmer",
    refers_to:  "Blacks",
    reason_and_origin:  "You don't often see Black swimming"
  },
  {
    slur:  "Nooc",
    refers_to:  "Blacks",
    reason_and_origin:  "Coon backwards"
  },
  {
    slur:  "Noodle Nigger",
    refers_to:  "Chinese",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Nooger",
    refers_to:  "Chinese",
    reason_and_origin:  "Noodle-nigger."
  },
  {
    slur:  "Noogin",
    refers_to:  "Norwegians",
    reason_and_origin:  "Columnist Mike Royko invented this one, claiming that there were no insults for Norwegians, because they were too well-liked and \"nice.\" S…"
  },
  {
    slur:  "Norbagge",
    refers_to:  "Norwegians",
    reason_and_origin:  "Used in Sweden to describe Norwegians"
  },
  {
    slur:  "Nordski",
    refers_to:  "Scandinavians",
    reason_and_origin:  "They come from \"da Nord\"."
  },
  {
    slur:  "Nork",
    refers_to:  "North Koreans",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Norsk",
    refers_to:  "Norwegians",
    reason_and_origin:  "One of the words used by the Swedes for Norwegians"
  },
  {
    slur:  "Norsky",
    refers_to:  "Norwegians",
    reason_and_origin:  "Shortened/derogatory slang term"
  },
  {
    slur:  "North Mexican",
    refers_to:  "Canadians",
    reason_and_origin:  "Because Canada is on the north side of the U.S. Border"
  },
  {
    slur:  "November",
    refers_to:  "Blacks",
    reason_and_origin:  "In the phonetic alphabet, \"nigger\" is spelled: November - India - Golf - Golf - Echo - Romeo"
  },
  {
    slur:  "Nubian Princess",
    refers_to:  "Blacks",
    reason_and_origin:  "Originally was a compliment for Black women, grew popularity from the movie \"Friday\" then was commonly used mockingly under mentality tha…"
  },
  {
    slur:  "Number 2",
    refers_to:  "Blacks",
    reason_and_origin:  "Usually when checking off racial or ethnic background African-American is the second choice."
  },
  {
    slur:  "Nunga",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Originally an Aboriginal name for themselves as a people; used by others, however, it is considered derogatory."
  },
  {
    slur:  "Nuprin",
    refers_to:  "Asians",
    reason_and_origin:  "Little, yellow, different."
  },
  {
    slur:  "Nurple",
    refers_to:  "Blacks",
    reason_and_origin:  "African Blacks, specifically. \"So black they appear purple."
  },
  {
    slur:  "O.J.",
    refers_to:  "Blacks",
    reason_and_origin:  "From the football star/accused murderer O.J. Simpson."
  },
  {
    slur:  "O.T.W.",
    refers_to:  "Blacks",
    reason_and_origin:  "Other Than White. Could be used for any non-caucasian race"
  },
  {
    slur:  "Oar Tuggers",
    refers_to:  "Blacks",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "OBG",
    refers_to:  "Blacks",
    reason_and_origin:  "Original Blue Gums. Refering to the color of thier gums"
  },
  {
    slur:  "Ocnod",
    refers_to:  "Arabs",
    reason_and_origin:  "A bastardization of Achnad, a common Arab name."
  },
  {
    slur:  "Octoroon",
    refers_to:  "Mixed Races",
    reason_and_origin:  "A person who is 1/8th Black. Originated by the Spanish in the 14th/15th century as they were very exact in their racial classifications t…"
  },
  {
    slur:  "Ofay",
    refers_to:  "Whites",
    reason_and_origin:  "Used to be popular with political types who were down with their \"African Roots.\" Made popular in the play \"A Raisin in the Sun.\" Possibl…"
  },
  {
    slur:  "Off Beat",
    refers_to:  "Whites",
    reason_and_origin:  "White people can't dance (well)."
  },
  {
    slur:  "Off-White",
    refers_to:  "Mediterraneans",
    reason_and_origin:  "Darker skin yet still called white"
  },
  {
    slur:  "Oil Baron",
    refers_to:  "Arabs",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Oil Junky",
    refers_to:  "Americans",
    reason_and_origin:  "The United States is a major consumer of oil."
  },
  {
    slur:  "Oil Slick",
    refers_to:  "Blacks",
    reason_and_origin:  "A very dark skinned black person who is sweaty, making his skin slippery."
  },
  {
    slur:  "Ola",
    refers_to:  "Norwegians",
    reason_and_origin:  "Swedish slang for stupid Norwegian."
  },
  {
    slur:  "Olaf",
    refers_to:  "Scandinavians",
    reason_and_origin:  "Olaf is a common Scandinavians (Swede, Norwegian) name"
  },
  {
    slur:  "Old Brown Tucker",
    refers_to:  "Blacks",
    reason_and_origin:  "Slur for an old African American man. Comes from a popular song during the time of the Civil War."
  },
  {
    slur:  "Old Fig",
    refers_to:  "Whites",
    reason_and_origin:  "Figs are white cookies; used by the infamous \"Word Association\" skit on Saturday Night Live with Chevy Chase and Richard Pryor"
  },
  {
    slur:  "Olejnik",
    refers_to:  "Slovakians",
    reason_and_origin:  "Coined from the famous Peter Olejnik Hatred fund"
  },
  {
    slur:  "Olive Nigger",
    refers_to:  "Greeks",
    reason_and_origin:  "Greece is renowned for its olives."
  },
  {
    slur:  "Olive-Picker",
    refers_to:  "Greeks",
    reason_and_origin:  "Large amount of olives"
  },
  {
    slur:  "Olympican",
    refers_to:  "Mexicans",
    reason_and_origin:  "From the joke \"Why are there no Mexicans in the olympics? Because every Mexican who can run, jump, or swim is in this country!"
  },
  {
    slur:  "Omarosa",
    refers_to:  "Blacks",
    reason_and_origin:  "Bitchy black woman from the TV show \"The Apprentice"
  },
  {
    slur:  "Onionhead",
    refers_to:  "Urkranians",
    reason_and_origin:  "Based on their buildings having large onion-type roofs"
  },
  {
    slur:  "OPEC",
    refers_to:  "Arabs",
    reason_and_origin:  "The Organization of Petrolium Exporting Countries"
  },
  {
    slur:  "Opie",
    refers_to:  "Whites",
    reason_and_origin:  "Blacks call goofy whites this."
  },
  {
    slur:  "Oquizi Ohcha",
    refers_to:  "Whites",
    reason_and_origin:  "Means 'White Devil'. From Africa"
  },
  {
    slur:  "Orange Picker",
    refers_to:  "Hispanics",
    reason_and_origin:  "From all the Hispanics that work in the agriculture industry in California."
  },
  {
    slur:  "Orangie",
    refers_to:  "Dutch",
    reason_and_origin:  "The national Dutch color is Orange, and they manifest this color everwhere in their country- from soccer season to vehicle paint jobs"
  },
  {
    slur:  "Orb",
    refers_to:  "Blacks",
    reason_and_origin:  "The word 'bro' backwards."
  },
  {
    slur:  "Oreo",
    refers_to:  "Blacks",
    reason_and_origin:  "A black person who acts white. Black on the outside, white on the inside. Or a person who half black/half white."
  },
  {
    slur:  "Oreo",
    refers_to:  "Asians",
    reason_and_origin:  "Oreo is bastardized form of Oriental."
  },
  {
    slur:  "Oriental",
    refers_to:  "Asian",
    reason_and_origin:  "Considered offensive because it dates back to \"Orientalism,\" when Asians were considered savages and Asian women were all seen as sexua…"
  },
  {
    slur:  "Orlando",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by other black people to refer to the 'old-school' blacks who do not keep current with the 'gansta' styles of music or clothing."
  },
  {
    slur:  "Ornamental",
    refers_to:  "Asians",
    reason_and_origin:  "From Oriental."
  },
  {
    slur:  "Osama",
    refers_to:  "Arabs",
    reason_and_origin:  "Osama Bin Laden, obviously"
  },
  {
    slur:  "Osrouge",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Native American/Black mix. Rouge means 'Red' in French."
  },
  {
    slur:  "Otaku",
    refers_to:  "Whites",
    reason_and_origin:  "A white person that tries to be Japanese in every way"
  },
  {
    slur:  "Othello",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to black men who only date white women. Reference to the Shakespearean play of the same title about a black man named Othell…"
  },
  {
    slur:  "Oven Magnet",
    refers_to:  "Jews",
    reason_and_origin:  "Attracted to the inside of ovens."
  },
  {
    slur:  "Oven-Baked",
    refers_to:  "Jews",
    reason_and_origin:  "World War II reference."
  },
  {
    slur:  "Oven-Dweller",
    refers_to:  "Jews",
    reason_and_origin:  "World War II reference."
  },
  {
    slur:  "Oye",
    refers_to:  "Cubans",
    reason_and_origin:  "(Pronounced \"o-yay\") Derogatory term used by non-Cubans. Derived from their frequent and rude use of the word \"oye\" in conversation. Mean…"
  },
  {
    slur:  "Oyebo",
    refers_to:  "Whites",
    reason_and_origin:  "It literally means peeled skin. It is what the Yoruba people of Nigeria used to call the first Europeans they saw."
  },
  {
    slur:  "Oz",
    refers_to:  "Australians",
    reason_and_origin:  "Shortened form of Aussie"
  },
  {
    slur:  "P-1",
    refers_to:  "Asians",
    reason_and_origin:  "P-1 is a commonly used abbreviation for traffic collision reports for Party #1, Party #1 is normally the person at fault for a collision."
  },
  {
    slur:  "P. R.",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "self-explanatory"
  },
  {
    slur:  "P.L.O.",
    refers_to:  "Arabs",
    reason_and_origin:  "Palestinian Liberation Organization"
  },
  {
    slur:  "P.O.A.",
    refers_to:  "Blacks",
    reason_and_origin:  "Previously Owned American"
  },
  {
    slur:  "Pac Man",
    refers_to:  "Pakistanis",
    reason_and_origin:  "Sounds similar to pac-man (the early 80s arcade game)"
  },
  {
    slur:  "Pachuco",
    refers_to:  "Mexicans",
    reason_and_origin:  "A gang of Mexicans living in California in the 1940s"
  },
  {
    slur:  "Paddy",
    refers_to:  "Irish",
    reason_and_origin:  "Used mainly in Britain. Similar negativity connotations as \"nigger\". Comes from St. Patrick and/or from the common Irish name Padraig.…"
  },
  {
    slur:  "Paddy Wagon",
    refers_to:  "Irish",
    reason_and_origin:  "Variation of \"paddy.\" The term Paddy Wagon derives from the idea that the Irish were all criminals, and when the police came to quell …"
  },
  {
    slur:  "Pajama Mamma",
    refers_to:  "Arabs",
    reason_and_origin:  "Arab (and/or Muslim) women wear clothes that resemble pajamas"
  },
  {
    slur:  "Pakeha",
    refers_to:  "New Zealanders",
    reason_and_origin:  "White New Zealanders. Not generally seen as derogatory. The word derives from 'pakepakeha'...mythical fair-skinned human-like creatures an…"
  },
  {
    slur:  "Paki",
    refers_to:  "Indians",
    reason_and_origin:  "Short for Pakistani. Often not derogatory when used. In The UK many Indians and Pakistanis have been lumped under the same term. It'…"
  },
  {
    slur:  "Pakoniggy",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Pakistani/Black mix."
  },
  {
    slur:  "Pal",
    refers_to:  "Palestinians",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Palangi",
    refers_to:  "Whites",
    reason_and_origin:  "Samoan name for Caucasians"
  },
  {
    slur:  "Paleface",
    refers_to:  "Whites",
    reason_and_origin:  "The brim of a cowboy's hat would make an odd suntan across his face. The bottom half would be tanned dark, while the top half remaine…"
  },
  {
    slur:  "Paleostinian",
    refers_to:  "Palestinians",
    reason_and_origin:  "Accusing the Palestinians of primitive, barbarous behavior."
  },
  {
    slur:  "Palesimian",
    refers_to:  "Palestinians",
    reason_and_origin:  "Combination of \"Palestinian\" with \"simian\", i.e. ape-like or subhuman."
  },
  {
    slur:  "Palewhineian",
    refers_to:  "Palestinians",
    reason_and_origin:  "Israeli, meaning discontent nature of Palestinians"
  },
  {
    slur:  "Palm Beacher",
    refers_to:  "Jews",
    reason_and_origin:  "Elderly Jews in Palm Beach County Florida deadlocked the election for 2 months."
  },
  {
    slur:  "Palta",
    refers_to:  "Blacks",
    reason_and_origin:  "Means avocado in south american spanish, referring to the color of a ripe avocado"
  },
  {
    slur:  "Pancake",
    refers_to:  "Asians",
    reason_and_origin:  "Facial characteristics."
  },
  {
    slur:  "Pancake",
    refers_to:  "Whites",
    reason_and_origin:  "Dark on the outside, white in the middle."
  },
  {
    slur:  "Panda",
    refers_to:  "Panamanians",
    reason_and_origin:  "Mispronunciation."
  },
  {
    slur:  "Panda Trainer",
    refers_to:  "Chinese",
    reason_and_origin:  "Pandas are from China."
  },
  {
    slur:  "Panface",
    refers_to:  "Chinese",
    reason_and_origin:  "Faces flat like they were hit with a pan."
  },
  {
    slur:  "Panhead",
    refers_to:  "Asians",
    reason_and_origin:  "Facial characteristics."
  },
  {
    slur:  "Papa Ganoush",
    refers_to:  "Arabs",
    reason_and_origin:  "A play on the arabic food baba ganoush, an eggplant and garlic sauce which is often consumed by arabic people."
  },
  {
    slur:  "Paperbag",
    refers_to:  "Creole",
    reason_and_origin:  "The light color blacks in South Louisiana, mainly around New Orleans (Creoles), skin is the color of a brown paper bag."
  },
  {
    slur:  "Papolo",
    refers_to:  "Blacks",
    reason_and_origin:  "Hawaiian word for \"purple."
  },
  {
    slur:  "Paragraph",
    refers_to:  "Hispanics",
    reason_and_origin:  "Referring to hispanic children. 'Not quite an essay (see ese), but a paragraph.'"
  },
  {
    slur:  "Paragua",
    refers_to:  "Paraguayans",
    reason_and_origin:  "Argentines refer to the poorer Paraguayan immigrants who live in Argentina as \"Paraguas.\" It means \"umbrella\", only related with the alik…"
  },
  {
    slur:  "Paris Hilton",
    refers_to:  "Whites",
    reason_and_origin:  "Based off the hotel heiress who represents every negative stereotype about WASP women."
  },
  {
    slur:  "Parsik",
    refers_to:  "Persians",
    reason_and_origin:  "Armenian word for Persians. Insulting, apparently."
  },
  {
    slur:  "Pastyface",
    refers_to:  "Whites",
    reason_and_origin:  "Used mainly by Blacks to refer to a really pale White person. The vanilla, creamy color of Whites' skin that seldom gets exposed to th…"
  },
  {
    slur:  "Patel",
    refers_to:  "Indians",
    reason_and_origin:  "Means \"Innkeeper\" or \"Motel Owner\". Pal is a name of rich, land owning Indians. It means landowner. It's a slur because only the ric…"
  },
  {
    slur:  "Patio Primate",
    refers_to:  "Blacks",
    reason_and_origin:  "Politically-correct version of \"Porch Monkey"
  },
  {
    slur:  "Patn�",
    refers_to:  "Creole",
    reason_and_origin:  "Stems from the word \"partner\". Commonly used by Creole-speaking blacks."
  },
  {
    slur:  "Patty",
    refers_to:  "Asians",
    reason_and_origin:  "Abundance of rice patties in Asia"
  },
  {
    slur:  "Patty",
    refers_to:  "Whites",
    reason_and_origin:  "Whites used to pat black people on top of thier head for good luck. Blacks reffered to whites as patty."
  },
  {
    slur:  "Peanut Butter Brother",
    refers_to:  "Arabs",
    reason_and_origin:  "Not quite White; Not Quite Black. The color of peanut butter."
  },
  {
    slur:  "Peasouper",
    refers_to:  "French Canadians",
    reason_and_origin:  "Late 19th, early 20th century slur, refers to the fact that pea soup was a popular food amongst the people of Quebec"
  },
  {
    slur:  "Peckerwood",
    refers_to:  "Whites",
    reason_and_origin:  "Originated in the South (pre-Civil War by the slaves). Comes from red-necked woodpecker. See: Redneck"
  },
  {
    slur:  "Peckin",
    refers_to:  "Whites",
    reason_and_origin:  "Reminiscent of farm life and chickens pecking the ground when eating seed."
  },
  {
    slur:  "Peeled Banana",
    refers_to:  "Asians",
    reason_and_origin:  "Americanized Asians who try to act like whites."
  },
  {
    slur:  "Pekka",
    refers_to:  "Finnish",
    reason_and_origin:  "Used by many Estonian and Russian immigrants in Finland. They think that every Finn is \"pekka\" and that they are jerks. Also known a…"
  },
  {
    slur:  "Pelu-ano",
    refers_to:  "Peruvians",
    reason_and_origin:  "Pelu-ano means hairy ass but at the same time sound like Peruano, Peruvians in Spanish."
  },
  {
    slur:  "Pen and Ink",
    refers_to:  "Chinese",
    reason_and_origin:  "Cockney rhyming slang, chink = pen and ink"
  },
  {
    slur:  "Pendos",
    refers_to:  "Greeks",
    reason_and_origin:  "Used by Russians as a derogatory term for Greeks. There has been a sizable Greek community in southern Russia for many generations. Many o…"
  },
  {
    slur:  "Penny Chaser",
    refers_to:  "Jews",
    reason_and_origin:  "The old \"Jews are cheap\" thing."
  },
  {
    slur:  "Penny-Pincher",
    refers_to:  "Jews",
    reason_and_origin:  "Cheapness"
  },
  {
    slur:  "Pepik",
    refers_to:  "Czechs",
    reason_and_origin:  "Czech Males. Pepik is a Czech name that sounds funny to Polish people, so we called them Pepiks."
  },
  {
    slur:  "Pepper",
    refers_to:  "French Canadians",
    reason_and_origin:  "A derivative of Pepsi. Quebec is the only place in North America where Pepsi has traditionally outsold Coke."
  },
  {
    slur:  "Pepperbelly",
    refers_to:  "Hispanics",
    reason_and_origin:  "They eat a lot of peppers. Refrence to their love for spicy foods."
  },
  {
    slur:  "Pepsi",
    refers_to:  "French Canadians",
    reason_and_origin:  "Empty from the neck up. Stereotypical softdrink of choice (considered quite insulting). Related to \"Pepper\"."
  },
  {
    slur:  "Perm Sperm",
    refers_to:  "Whites",
    reason_and_origin:  "Meaning they are forever white, since they were a sperm to when they were born through their entire live they stay white like a sperm."
  },
  {
    slur:  "Perogy",
    refers_to:  "Ukrainians",
    reason_and_origin:  "From the popular Ukrainian dish."
  },
  {
    slur:  "Persuasion",
    refers_to:  "Whites",
    reason_and_origin:  "Similar sound to Caucasion; Implies their persuasive, scandalous actions and attitudes."
  },
  {
    slur:  "Peter Pan/Tinkerbell",
    refers_to:  "Dutch",
    reason_and_origin:  "The Dutch live in the Netherlands (Neverland)"
  },
  {
    slur:  "Petrol Sniffers",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "In Australia they sniff all the petrol and gas."
  },
  {
    slur:  "Petrolera",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Hispanics against White Women that like Black Men. Comes from the word Petrolio or Petrolium in Spanish. Indicates that thes…"
  },
  {
    slur:  "Petrolero",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics Who Are Attracted To Blacks. Means \"Oil Drillers\"."
  },
  {
    slur:  "Petrovich",
    refers_to:  "Slovakians",
    reason_and_origin:  "Common (sounding) name"
  },
  {
    slur:  "Pez Dispenser",
    refers_to:  "Blacks",
    reason_and_origin:  "Used to refer to black women who have a great deal of children."
  },
  {
    slur:  "Phlegm",
    refers_to:  "Belgians",
    reason_and_origin:  "Pronounced \"flems\", from Monty Python's Flying Circus."
  },
  {
    slur:  "Pickaninny",
    refers_to:  "Blacks",
    reason_and_origin:  "From the days of slavery. Three possible origins: The slave owners would \"pick a nincompoop\" from the lineup of slaves; or the slav…"
  },
  {
    slur:  "Pie Face",
    refers_to:  "Eskimos",
    reason_and_origin:  "Round shape of their faces. Most like originates from (or at least made popular by) the comic book The Green Lantern, who had a mechani…"
  },
  {
    slur:  "Piffke",
    refers_to:  "Germans",
    reason_and_origin:  "Pronounced \"pif - ka.\" Used by Bavarians/Austrians to refer to North Germans (after a famous Prussian with the last name \"Pieffke\")."
  },
  {
    slur:  "Pig-fucker",
    refers_to:  "Whites",
    reason_and_origin:  "One who engages in the act of pig-fucking, a favorite pass time among those hailing from rural areas of America's southern states."
  },
  {
    slur:  "Pigger",
    refers_to:  "Pakistanis",
    reason_and_origin:  "Pakistanis trying to act black."
  },
  {
    slur:  "Pigmently-Challenged",
    refers_to:  "Whites",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "PIGS",
    refers_to:  "Mediterraneans",
    reason_and_origin:  "Portuguese, Italian, Greek, Spanish. Specifically refers to Mediterranean men and their piggish behavior toward women in particular"
  },
  {
    slur:  "Pikachu",
    refers_to:  "Japanese",
    reason_and_origin:  "A popular Japanese cartoon character."
  },
  {
    slur:  "Pikajew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "A Jewish Asian."
  },
  {
    slur:  "Pikey",
    refers_to:  "Gypsies",
    reason_and_origin:  "Referenced in the film \"Snatch."
  },
  {
    slur:  "Pilgrim",
    refers_to:  "Whites",
    reason_and_origin:  "All white people come from Europe, they claim to be American, but they are not, they are pilgrims. It's a racist term because when whit…"
  },
  {
    slur:  "Pindos",
    refers_to:  "Americans",
    reason_and_origin:  "A new word for \"american\" used in Russia"
  },
  {
    slur:  "Pindunderjip",
    refers_to:  "Indians",
    reason_and_origin:  "From the joke; What is an East Indian that got hit by a truck called? Answer; Pindunbderjip or Pinned under jeep."
  },
  {
    slur:  "Pine Sol",
    refers_to:  "Blacks",
    reason_and_origin:  "A fat black woman - inspired by the Pine Sol commercials."
  },
  {
    slur:  "Pine Tree Ornament",
    refers_to:  "Blacks",
    reason_and_origin:  "Pine trees were the tree of choice to hang blacks"
  },
  {
    slur:  "Pineapple",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who act like Asians, or is very into Asian culture. Black on the outside, yellow on the inside"
  },
  {
    slur:  "Pineapple",
    refers_to:  "Filipinos",
    reason_and_origin:  "Pineapples grow there and they kinda look like pineapples. Short, Fat, with weird hair."
  },
  {
    slur:  "Pineapple Lump",
    refers_to:  "Asians",
    reason_and_origin:  "Reference to asian vehicles?"
  },
  {
    slur:  "Pineapple Nigger",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Pineapples grow there."
  },
  {
    slur:  "Pineback",
    refers_to:  "Canadians",
    reason_and_origin:  "Canadians in the United States illegally. Wetbacks have to cross a river, pinebacks deal with pine trees."
  },
  {
    slur:  "Pinewood",
    refers_to:  "Whites",
    reason_and_origin:  "Pine being a whiter colored wood than most."
  },
  {
    slur:  "Piney",
    refers_to:  "Whites",
    reason_and_origin:  "Women who use the pine tree shaped car fresheners as perfume to remove a multitude of smells inherent to the white trash lifestyle."
  },
  {
    slur:  "Ping Pong",
    refers_to:  "Chinese",
    reason_and_origin:  "Because Ping Pong is the favorite sport of the chinese"
  },
  {
    slur:  "Ping-pang",
    refers_to:  "Asians",
    reason_and_origin:  "Mimics the way their language sounds to non-Asians."
  },
  {
    slur:  "Pink Toe",
    refers_to:  "Whites",
    reason_and_origin:  "They have pink toes"
  },
  {
    slur:  "Pink-Heel",
    refers_to:  "Blacks",
    reason_and_origin:  "Color of heel is pink."
  },
  {
    slur:  "Pinkaloid",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to skin color"
  },
  {
    slur:  "Pinko",
    refers_to:  "Russians",
    reason_and_origin:  "Originally referred to Communist sympathizers - later as a general slur against all Leftists, including Communist Party members. Now prett…"
  },
  {
    slur:  "Pinky",
    refers_to:  "Whites",
    reason_and_origin:  "Skin color closer to pink"
  },
  {
    slur:  "Pinky Poop",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Vietnamese/Black mix. For when Black soldiers had kids with Vietnamese women."
  },
  {
    slur:  "Pinocchio",
    refers_to:  "Jews",
    reason_and_origin:  "Pinocchio's nose corrolates with that of a stereotypical Jew."
  },
  {
    slur:  "Pinto",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Native American mix. Pinto horses are white and brown."
  },
  {
    slur:  "Pipe Blower",
    refers_to:  "Scottish",
    reason_and_origin:  "Reference to bag pipes"
  },
  {
    slur:  "Piper",
    refers_to:  "Scottish",
    reason_and_origin:  "As in bag pipes"
  },
  {
    slur:  "Pit",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Children. Stands for 'Perpetrator In Training.'"
  },
  {
    slur:  "Pizdaglaz",
    refers_to:  "Asians",
    reason_and_origin:  "Combination of Russian words \"pizda\" (\"cunt\") and \"glaz(a)\" (\"eyes\") Pronounced \"peezdah-glahz.\" Self-explanatory."
  },
  {
    slur:  "Pizza",
    refers_to:  "Jews",
    reason_and_origin:  "Both go in the oven."
  },
  {
    slur:  "Pizza Nigger",
    refers_to:  "Italians",
    reason_and_origin:  "Italians are said to wholly enjoy pizza, as it is considered their national dish to the rest of the world."
  },
  {
    slur:  "Pizzabagel",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Italian/Jewish mix. Popular in New York as Italian and Jewish neighborhoods grew together."
  },
  {
    slur:  "Plantain",
    refers_to:  "Dominicans",
    reason_and_origin:  "Plantains are a main food source of Dominicans"
  },
  {
    slur:  "Plastic Paddy",
    refers_to:  "Irish",
    reason_and_origin:  "Term used by the Irish describing those who grew up in the a foreign country (specifically the UK) and still identify as being Irish."
  },
  {
    slur:  "Platano Power",
    refers_to:  "Dominicans",
    reason_and_origin:  "Need for Dominicans to always eat and have Platanos in their house."
  },
  {
    slur:  "Plate Tossers",
    refers_to:  "Asians",
    reason_and_origin:  "They name their kids by throwing plates down the stairs and seeing what sound it makes. (Ching, Chong, Ding)"
  },
  {
    slur:  "Platneus",
    refers_to:  "Blacks",
    reason_and_origin:  "Afrikaans. Means flat nose"
  },
  {
    slur:  "Pleb",
    refers_to:  "Whites",
    reason_and_origin:  "Derivative of word 'Plebian' maning white middle class common people. Used in Australia."
  },
  {
    slur:  "Plow Jockey",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks used to work the plows before the Civil War."
  },
  {
    slur:  "Po'bucker",
    refers_to:  "Whites",
    reason_and_origin:  "Corruption of West African \"Buuker\" meaning devil, boogie-man or white man. Poor white trash were referred to as \"Po'buckers\"."
  },
  {
    slur:  "Po-Bean",
    refers_to:  "Hispanics",
    reason_and_origin:  "Short for Poor Beaner."
  },
  {
    slur:  "POC",
    refers_to:  "Blacks",
    reason_and_origin:  "Person Of Color"
  },
  {
    slur:  "Pocho",
    refers_to:  "Hispanics",
    reason_and_origin:  "Chicano derogatory term referring to Hispanics who can't speak Spanish. Used by Hispanics. May technically only refer to Portuguese people."
  },
  {
    slur:  "Pocky",
    refers_to:  "Japanese",
    reason_and_origin:  "Pocky is a popular Japanese treat."
  },
  {
    slur:  "Pogue",
    refers_to:  "Irish",
    reason_and_origin:  "Possibly from Irish Gaelic \"pogue mo thoin\", meaning \"kiss my arse\". Could also refer to the Irish folk group \"The Pogues\" who did popula…"
  },
  {
    slur:  "Pohm",
    refers_to:  "British",
    reason_and_origin:  "Prisoner Of Her Majesty\". Used mainly in Australia as a derogatory term for British People. Comes from the fact that Australia was …"
  },
  {
    slur:  "Poi-belly",
    refers_to:  "Hawaiians",
    reason_and_origin:  "Hawaiians eat a lot of poi (taro root) and are fat."
  },
  {
    slur:  "Point-Six (.6)",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to the 3/5ths Compromise, where the US Gov't decided that slaves (Blacks) only counted as 3/5ths of a person for populatio…"
  },
  {
    slur:  "Pointy-Head",
    refers_to:  "Asians",
    reason_and_origin:  "J. W. Pepper says it a number of times in \"The Man with the Golden Gun\" while speaking to some Asians in Bangkok."
  },
  {
    slur:  "Pokemon",
    refers_to:  "Japanese",
    reason_and_origin:  "They created that damn game"
  },
  {
    slur:  "Polar Bear",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to their skin tone."
  },
  {
    slur:  "Polarican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Polish/Puerto Rican mix."
  },
  {
    slur:  "Pole",
    refers_to:  "Polish",
    reason_and_origin:  "Short for Polish."
  },
  {
    slur:  "Polentone",
    refers_to:  "Italians",
    reason_and_origin:  "Northern Italians because of the Polenta that they eat in the north. It came in response their use or Terrone for Southern Italians"
  },
  {
    slur:  "Polexican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Polish/Mexican mix."
  },
  {
    slur:  "Pollo",
    refers_to:  "Hispanics",
    reason_and_origin:  "The U.S. Border Patrol uses this term to refer to illegal aliens. Pollo means chicken in Spanish. Agents call the illegals Pollos on thei…"
  },
  {
    slur:  "Polock/Polak",
    refers_to:  "Polish",
    reason_and_origin:  "Polish for \"Polish man.\" Correctly spelled \"Polak."
  },
  {
    slur:  "Polski",
    refers_to:  "Polish",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Pome",
    refers_to:  "British",
    reason_and_origin:  "Prisoners/Property Of Mother England' Used in Australia, New Zealand, etc. Probably related to and/or another version of Pom."
  },
  {
    slur:  "Pontiac",
    refers_to:  "Blacks",
    reason_and_origin:  "Stands for \"poor old nigger thinks it's a Cadillac"
  },
  {
    slur:  "Poo",
    refers_to:  "Blacks",
    reason_and_origin:  "Poo-Poo (Feces are black or brown in color.)"
  },
  {
    slur:  "Pookie",
    refers_to:  "Blacks",
    reason_and_origin:  "In the movie \"New Jack City\" Chris Rock played a black/crack-head named Pookie"
  },
  {
    slur:  "Pool-digger",
    refers_to:  "Mexicans",
    reason_and_origin:  "Another reference to the manual labor many of them do in the States."
  },
  {
    slur:  "Poon",
    refers_to:  "Hindus",
    reason_and_origin:  "Punjab as in, popular Indian restaurant names, slang for punjab is poon"
  },
  {
    slur:  "Pooty",
    refers_to:  "Whites",
    reason_and_origin:  "Derived from Tagalog \"puti,\" meaning \"white"
  },
  {
    slur:  "Popolo",
    refers_to:  "Blacks",
    reason_and_origin:  "Hawaiian for 'black person.'"
  },
  {
    slur:  "Popov",
    refers_to:  "Russians",
    reason_and_origin:  "A cheap brand of vodka."
  },
  {
    slur:  "Poppin Fresh",
    refers_to:  "Whites",
    reason_and_origin:  "Pillsbury dough boy"
  },
  {
    slur:  "Popular Science",
    refers_to:  "Jews",
    reason_and_origin:  "Experiments performed on the Jews during WW2"
  },
  {
    slur:  "Porch Honkey",
    refers_to:  "Whites",
    reason_and_origin:  "White version of porch monkey."
  },
  {
    slur:  "Porch Monkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Low-income housing with no air conditioning led to many blacks in the projects sitting on the porch to stay cool. It was said that the…"
  },
  {
    slur:  "Pork and Cheese",
    refers_to:  "Portuguese",
    reason_and_origin:  "Sounds similar."
  },
  {
    slur:  "Pork-chop",
    refers_to:  "Portuguese",
    reason_and_origin:  "Sounds similar."
  },
  {
    slur:  "Porky",
    refers_to:  "Jews",
    reason_and_origin:  "The Old Testament forbids them to eat pork"
  },
  {
    slur:  "Poro",
    refers_to:  "Finnish",
    reason_and_origin:  "Poro is Finnish for reindeer"
  },
  {
    slur:  "Porqin",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Slurred speech of Puerto Rican"
  },
  {
    slur:  "Porridge Wog",
    refers_to:  "Scottish",
    reason_and_origin:  "Mainly used by the British - Scots love their porridge!"
  },
  {
    slur:  "Portagee",
    refers_to:  "Portuguese",
    reason_and_origin:  "Derogatory term for Portugese. Often used when referring to those of Portugese descent who come from the Azores. Meaning stupid an…"
  },
  {
    slur:  "Portajew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Puerto (Porta) Rican/Jewish mix."
  },
  {
    slur:  "Portawop",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Portuguese/Italian mix"
  },
  {
    slur:  "Portugoose",
    refers_to:  "Portuguese",
    reason_and_origin:  "Portu\"geese\" = Portu\"goose"
  },
  {
    slur:  "Post It",
    refers_to:  "Asians",
    reason_and_origin:  "Yellow and disposable. In reference to how Japan and China treat their people/army."
  },
  {
    slur:  "Pot-Licker",
    refers_to:  "Irish",
    reason_and_origin:  "During the potato famine, the would lick their pots clean to get every last morsel of food."
  },
  {
    slur:  "Potato",
    refers_to:  "Mexicans",
    reason_and_origin:  "A Mexican-American that has lost their heritage. Brown on the outside; White on the inside."
  },
  {
    slur:  "Potato Breath",
    refers_to:  "Irish",
    reason_and_origin:  "The Irish are notorious for their love of the potato"
  },
  {
    slur:  "Potato Head",
    refers_to:  "Irish",
    reason_and_origin:  "The Irish grow potatoes."
  },
  {
    slur:  "Potato Nigger",
    refers_to:  "Irish",
    reason_and_origin:  "Because they eat lots of potatoes"
  },
  {
    slur:  "Potato Queen",
    refers_to:  "Asians",
    reason_and_origin:  "Asian women who only date white men. Overweight white business men, on the typical."
  },
  {
    slur:  "Potato-Eater",
    refers_to:  "Irish",
    reason_and_origin:  "Irish eat potatoes. Used in Gangs of New York."
  },
  {
    slur:  "Poutine",
    refers_to:  "French Canadians",
    reason_and_origin:  "The name of a mixture of french fries, cheese, and gravy. Popular in Montreal and other parts of eastern Canada"
  },
  {
    slur:  "Pow Wow",
    refers_to:  "Native Americans",
    reason_and_origin:  "Their calls"
  },
  {
    slur:  "Powder",
    refers_to:  "Whites",
    reason_and_origin:  "Skin color. Might be from the albino guy in the movie Powder."
  },
  {
    slur:  "Powdered Donut",
    refers_to:  "Whites",
    reason_and_origin:  "See \"Egg"
  },
  {
    slur:  "Powerpoint",
    refers_to:  "Asians",
    reason_and_origin:  "Used mainly by Australians. Australian electricity outlets are commonly called power points, they are said to look like a stick figur…"
  },
  {
    slur:  "Prairie Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Where Natives originate, or were sent"
  },
  {
    slur:  "Prapper",
    refers_to:  "Blacks",
    reason_and_origin:  "A Gang known as the Bloods, say PRAAAAAP! sounding like a machine gun. It is used when 2 Bloods meet and greet."
  },
  {
    slur:  "Pretendian",
    refers_to:  "Native Americans",
    reason_and_origin:  "Native Americans who claim to be pure, but are just mixed-breeds. I suppose this could refer to any mixed -ian race."
  },
  {
    slur:  "Pretzel",
    refers_to:  "Blacks",
    reason_and_origin:  "Used in situations when saying the word \"Nigger\" would be inappropriate"
  },
  {
    slur:  "Prieto",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by hispanics in conjunction with nigger, but not just for black people."
  },
  {
    slur:  "Prigger",
    refers_to:  "Canadian Aboriginals/Native Canadians",
    reason_and_origin:  "Prairie nigger. They are called priggers because they resemble America's Black population, living in ghettos of poverty and violence wit…"
  },
  {
    slur:  "Primate",
    refers_to:  "Blacks",
    reason_and_origin:  "Ape reference"
  },
  {
    slur:  "Printer",
    refers_to:  "Whites",
    reason_and_origin:  "Printers are generally white. So is the paper that comes out of them."
  },
  {
    slur:  "Proddy",
    refers_to:  "Irish",
    reason_and_origin:  "Northern Irish Protestants. Shortened, diminutive form of Protestant."
  },
  {
    slur:  "Property",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks were regarded as property and openly bought or traded before the Yankees won."
  },
  {
    slur:  "Protractor",
    refers_to:  "Asians",
    reason_and_origin:  "Eyes, In the shape of a protractor, 180 degrees at bottom, straight line"
  },
  {
    slur:  "Provo",
    refers_to:  "Irish",
    reason_and_origin:  "Shortened form of \"Provisional Irish Republican Army (I.R.A.)\" which is the most noted of the pro Northern Irish independence terroris…"
  },
  {
    slur:  "Provolone",
    refers_to:  "Italians",
    reason_and_origin:  "Italian-Americans who act \"overly Italian\" with attitude and gold chains (i.e. cheesy)"
  },
  {
    slur:  "Pube Face",
    refers_to:  "Arabs",
    reason_and_origin:  "They have pubes on their chins"
  },
  {
    slur:  "Pube Head",
    refers_to:  "Blacks",
    reason_and_origin:  "Black persons hair appears to be pubic."
  },
  {
    slur:  "Pubie",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the pubic-like hair on blacks' heads."
  },
  {
    slur:  "Puck",
    refers_to:  "Canadians",
    reason_and_origin:  "Reference to their over-indulgence in the game of Hockey."
  },
  {
    slur:  "Puck-Chaser",
    refers_to:  "Canadians",
    reason_and_origin:  "Due to mass love of hockey"
  },
  {
    slur:  "Puckhead",
    refers_to:  "Canadians",
    reason_and_origin:  "For their love of hockey."
  },
  {
    slur:  "Puckstop",
    refers_to:  "Americans",
    reason_and_origin:  "Great Targets, slow moving, and slow witted."
  },
  {
    slur:  "Pudden",
    refers_to:  "English",
    reason_and_origin:  "Stereotypical view of Northerners love of Black Pudding"
  },
  {
    slur:  "Puddle Duck",
    refers_to:  "Blacks",
    reason_and_origin:  "From \"Jemima Puddle Duck,\" a Peter Rabbit character"
  },
  {
    slur:  "Puerto Grecan",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Puerto Rican/Greek Mix. Common racial mix in NY city."
  },
  {
    slur:  "Puerto Potty",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Play on words/smell."
  },
  {
    slur:  "Puika",
    refers_to:  "Latvians",
    reason_and_origin:  "Means \"boy\" in Latvian."
  },
  {
    slur:  "Puke",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Polish/Ukrainian"
  },
  {
    slur:  "Pull-Start",
    refers_to:  "Indians",
    reason_and_origin:  "Reference to pulling their turbans off their heads."
  },
  {
    slur:  "Pumpkinhead",
    refers_to:  "Asians",
    reason_and_origin:  "Asians have relatively large and round heads, which resemble Halloween pumkins."
  },
  {
    slur:  "Punjab",
    refers_to:  "Indians",
    reason_and_origin:  "Punjab is the Indian character from \"Little Orphan Annie.\" Also represents the Punjab region of India (near the Punjab river). When th…"
  },
  {
    slur:  "Pus",
    refers_to:  "Whites",
    reason_and_origin:  "Blacks refer to whites as this because they are thought to infect everything they touch"
  },
  {
    slur:  "Push-Button",
    refers_to:  "Indians",
    reason_and_origin:  "Refers to the caste-mark (dot) on their foreheads. Push-Start also."
  },
  {
    slur:  "Pusher-Man",
    refers_to:  "Blacks",
    reason_and_origin:  "Drug dealing is the popular occupation in urban ghettos."
  },
  {
    slur:  "Pute",
    refers_to:  "Whites",
    reason_and_origin:  "Pronounced \"poo-tee;\" Filipino-American slang from Tagalog's term for the color \"white"
  },
  {
    slur:  "PWT",
    refers_to:  "Whites",
    reason_and_origin:  "Poor White Trash"
  },
  {
    slur:  "Pyramid-Fucker",
    refers_to:  "Egyptians",
    reason_and_origin:  "Egyptians use pyramids for storage of the dead, umbrellas, and love making."
  },
  {
    slur:  "Q-Tip Head",
    refers_to:  "Arabs",
    reason_and_origin:  "Turbans/other headdress"
  },
  {
    slur:  "Quadroon",
    refers_to:  "African Americans",
    reason_and_origin:  "A person who is 1/4 Black. Coined during the Civil War, referring to how White you had to be in order to serve in the army."
  },
  {
    slur:  "Quarter Jockey",
    refers_to:  "Asians",
    reason_and_origin:  "Asians that go to arcades and play one game for hours off of a single quarter"
  },
  {
    slur:  "Quashee",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by British to refer to blacks (originally slaves) in the West Indies; derived from Quassi, name of slave from Surinam who became famous"
  },
  {
    slur:  "Queeb",
    refers_to:  "French Canadians",
    reason_and_origin:  "French Canadians come from Quebec"
  },
  {
    slur:  "Queue Warmer",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Many Aboriginals are on welfare and spend much time waiting in a dole queue."
  },
  {
    slur:  "Rab",
    refers_to:  "Arabs",
    reason_and_origin:  "Rab short for \"Arab"
  },
  {
    slur:  "Rabbit",
    refers_to:  "Whites",
    reason_and_origin:  "A reference to the peace sign of the 1960's being similar to rabbit ears. Or could also reference white trash who have lots of children."
  },
  {
    slur:  "Rabiz",
    refers_to:  "Armenians",
    reason_and_origin:  "Armenian gangsters call themselves \"Rabiz"
  },
  {
    slur:  "Race-Traitor",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Any other race mix. Term used by whites for any person of mixed race or who marries a non-white.."
  },
  {
    slur:  "Racial Slurry",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Self-Explanatory"
  },
  {
    slur:  "Racially-Challanged",
    refers_to:  "Non-Whites",
    reason_and_origin:  "Politically correct\" way to insult people based solely on race."
  },
  {
    slur:  "Racoon",
    refers_to:  "Arabs",
    reason_and_origin:  "Dark around the eyes"
  },
  {
    slur:  "Rad",
    refers_to:  "Russians",
    reason_and_origin:  "US army personnel use this as a short version of \"comrade\" in reference to communism"
  },
  {
    slur:  "Radish",
    refers_to:  "Native Americans",
    reason_and_origin:  "Red on the outside, white on the inside."
  },
  {
    slur:  "Rafter",
    refers_to:  "Cubans",
    reason_and_origin:  "Rafting across the Atlantic to the illegally enter the US. Also: Raft Jockey, Raft Captain, Raft Monkey, etc"
  },
  {
    slur:  "Rag",
    refers_to:  "Filipinos",
    reason_and_origin:  "Filipinos (especialy women) tend to have raggy looking course hair"
  },
  {
    slur:  "Rag-head",
    refers_to:  "Arabs",
    reason_and_origin:  "Referring to common head dressings of middle easterners."
  },
  {
    slur:  "Ragoona",
    refers_to:  "Blacks",
    reason_and_origin:  "New Orleans white slang refering to the \"doo-rag\" which blacks frequently wear to keep their hair in place."
  },
  {
    slur:  "Ragu",
    refers_to:  "Italians",
    reason_and_origin:  "Spaghetti sauce."
  },
  {
    slur:  "Rail-Hopper",
    refers_to:  "Chinese",
    reason_and_origin:  "In early America many Chinese were sent to build the railroads."
  },
  {
    slur:  "Railer",
    refers_to:  "Chinese",
    reason_and_origin:  "They built the railroads all across the US."
  },
  {
    slur:  "Raisin",
    refers_to:  "Asians",
    reason_and_origin:  "Approximates \"Rolling Asian.\" Refers to an Asian who rolls X-tacy, e.g. at a Rave."
  },
  {
    slur:  "Raisinhead",
    refers_to:  "Blacks",
    reason_and_origin:  "Used on the TV show \"Rescue Me"
  },
  {
    slur:  "Rake",
    refers_to:  "Somalians",
    reason_and_origin:  "Somali's are very thin like a rake"
  },
  {
    slur:  "Random",
    refers_to:  "Asians",
    reason_and_origin:  "The facial characteristics of an Asian face are said to be very similar. For that reason all the new Asians who are around you in e.g th…"
  },
  {
    slur:  "Rangoon",
    refers_to:  "Asians",
    reason_and_origin:  "Chinese Food (Crab Rangoon)"
  },
  {
    slur:  "Raq-Coon",
    refers_to:  "Arabs",
    reason_and_origin:  "As in Iraqi coon (see: coon)"
  },
  {
    slur:  "Rasian",
    refers_to:  "Asians",
    reason_and_origin:  "Term used to describe when an Asian drinks and turns really red."
  },
  {
    slur:  "Rasputin",
    refers_to:  "Russians",
    reason_and_origin:  "Rasputin was a historical figure in Russia."
  },
  {
    slur:  "Rasta Fazoul",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jamaican/Italian. Pasta Fazoul mixed with Rastafarian."
  },
  {
    slur:  "Raw Chicken",
    refers_to:  "Whites",
    reason_and_origin:  "Middle aged white women with pot-bellies resemble raw chicken when naked."
  },
  {
    slur:  "Re-nigg",
    refers_to:  "Blacks",
    reason_and_origin:  "Explains a shift change at any of your local popular fast food establishments."
  },
  {
    slur:  "Recyclables",
    refers_to:  "Whites",
    reason_and_origin:  "A polite way of saying white trash"
  },
  {
    slur:  "Red",
    refers_to:  "Native Americans",
    reason_and_origin:  "Skin color."
  },
  {
    slur:  "Red",
    refers_to:  "Russians",
    reason_and_origin:  "Refers to the color of the Communist revolution, as well as old Red Russia. Too, \"Red Army.\" See J. Edgar Hoover's use."
  },
  {
    slur:  "Red",
    refers_to:  "Chinese",
    reason_and_origin:  "When they became communist"
  },
  {
    slur:  "Red Beard",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Taiwanese (and other Asians) in reference to whites being hairy and light haired."
  },
  {
    slur:  "Red Coat",
    refers_to:  "British",
    reason_and_origin:  "Used during the Revolutionary War, because of the Red coats the British army wore."
  },
  {
    slur:  "Red Monkey",
    refers_to:  "Chinese",
    reason_and_origin:  "China is a communist nation."
  },
  {
    slur:  "Red Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Red Sea Pedestrian",
    refers_to:  "Jews",
    reason_and_origin:  "Moses led the Israelites across the Red Sea from Egypt. Heard in Monty Python's \"Life of Brian."
  },
  {
    slur:  "Redbone",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by darker-colored Blacks to refer to Blacks with a very light complexion. Origin unknown. Link"
  },
  {
    slur:  "Redface",
    refers_to:  "Albanians",
    reason_and_origin:  "Many Albanians seem to have a red face"
  },
  {
    slur:  "Redneck",
    refers_to:  "Whites",
    reason_and_origin:  "Previously referred only to the rural prejudice whites, mostly farmers, who have reddish necks (or a \"farmer's tan\"). However, its usag…"
  },
  {
    slur:  "Redskin",
    refers_to:  "Native Americans",
    reason_and_origin:  "The term Redskin, came from two places, the skin color, then the cruel torture of skinning Native Americans for a bounty. Since their ski…"
  },
  {
    slur:  "Ref",
    refers_to:  "Hispanics",
    reason_and_origin:  "Many people use it in Southern Florida referring to the latins (mainly Cubans) that come to South Florida and don't speak English well"
  },
  {
    slur:  "Reggie",
    refers_to:  "Blacks",
    reason_and_origin:  "Common name, especially for famous Black sports stars."
  },
  {
    slur:  "Reggin",
    refers_to:  "Blacks",
    reason_and_origin:  "Nigger spelled backwards"
  },
  {
    slur:  "Reggina",
    refers_to:  "Blacks",
    reason_and_origin:  "A Nigger\" spelled backwards"
  },
  {
    slur:  "Remote Control",
    refers_to:  "Blacks",
    reason_and_origin:  "Remotes are black and they do things for you. (slavery)"
  },
  {
    slur:  "Reset",
    refers_to:  "Indians",
    reason_and_origin:  "Comes from the common red dot on an Indian's forehead, resembling the reset button on many electronics"
  },
  {
    slur:  "Reverse Oreo",
    refers_to:  "Whites",
    reason_and_origin:  "White slur used by blacks. Meaning white on the outside and black on the inside."
  },
  {
    slur:  "Rhythmless Nation",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to the fact that white people cannot dance. Janet Jackson also made an album called \"Rhythm Nation\" for people with rhythm (no…"
  },
  {
    slur:  "Ric",
    refers_to:  "Whites",
    reason_and_origin:  "White person who tries to act black. Stands for Racial Identity Crisis."
  },
  {
    slur:  "Rice Ball",
    refers_to:  "Asians",
    reason_and_origin:  "Used in the Vietnam War to describe the enemy at times."
  },
  {
    slur:  "Rice Burner/Rice Rocket",
    refers_to:  "Asians",
    reason_and_origin:  "Person who drives an Asian car that has modifications which are supposed to make the car look faster. No gain in performance is achieved…"
  },
  {
    slur:  "Rice Cracker",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Asian/White mix"
  },
  {
    slur:  "Rice Cracker",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who try to act Japanese. Defined as those who are obsessed with Japanese culture, including but not limited to: frequentl…"
  },
  {
    slur:  "Rice King",
    refers_to:  "Whites",
    reason_and_origin:  "White men who date Asian women."
  },
  {
    slur:  "Rice Nigger",
    refers_to:  "Asians",
    reason_and_origin:  "Similar to sand nigger, but for Asians"
  },
  {
    slur:  "Rice-Chaser",
    refers_to:  "Whites",
    reason_and_origin:  "White men who solely go after (or have a fetish for) Asian women."
  },
  {
    slur:  "Rice-Cooker",
    refers_to:  "Asians",
    reason_and_origin:  "Australian equivalent of Rice Burner."
  },
  {
    slur:  "Rice-Eater",
    refers_to:  "Asians",
    reason_and_origin:  "Popular food among Asians."
  },
  {
    slur:  "Rice-Paddy",
    refers_to:  "Asians",
    reason_and_origin:  "Places where they grow rice in Asia and Japan."
  },
  {
    slur:  "Rice-Picker",
    refers_to:  "Asians",
    reason_and_origin:  "Because they pick rice. Probably the Asian version of 'Cotton Picker.'"
  },
  {
    slur:  "Rico Suave",
    refers_to:  "Hispanics",
    reason_and_origin:  "The 80's singer/rapper of the same name."
  },
  {
    slur:  "Rifle-Dropper",
    refers_to:  "French",
    reason_and_origin:  "Inability to win a war since Napoleanic times - loss of their colonies and their surrender of their homeland"
  },
  {
    slur:  "Rigger",
    refers_to:  "Russians",
    reason_and_origin:  "A Russian who thinks he is a gangster from the streets."
  },
  {
    slur:  "Ringo",
    refers_to:  "English",
    reason_and_origin:  "After Ringo Starr of the Beatles. Used in Pulp Fiction against an English character."
  },
  {
    slur:  "Ritz Cracker",
    refers_to:  "Whites",
    reason_and_origin:  "A rich white person."
  },
  {
    slur:  "River Nigger",
    refers_to:  "Mexicans",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "River-Crosser",
    refers_to:  "Hispanics",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Rizzo",
    refers_to:  "Italians",
    reason_and_origin:  "Rizzo's pasta sauce advertises on dumpsters"
  },
  {
    slur:  "Rjeindeer-Fjucker",
    refers_to:  "Norwegians",
    reason_and_origin:  "More specifically applies to Scandinavian aboriginals (Saami), but most popular towards Norwegians. Refers to the abundance of Reindee…"
  },
  {
    slur:  "Roach",
    refers_to:  "Mexicans",
    reason_and_origin:  "They \"infest\" places"
  },
  {
    slur:  "Roach",
    refers_to:  "Blacks",
    reason_and_origin:  "They come out at night to raise hell - turn on the lights and they scatter"
  },
  {
    slur:  "Roach-Rancher",
    refers_to:  "Arabs",
    reason_and_origin:  "Their apartments often have roaches, which they are forbidden to kill."
  },
  {
    slur:  "Roadblock",
    refers_to:  "Mexicans",
    reason_and_origin:  "Called this because some have a tendency to travel slow, pacing one another on the freeway not allowing anyone else to pass. Mostly a Texa…"
  },
  {
    slur:  "Rock",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by lifeguards, because they're always rescuing blacks; they sink like rocks."
  },
  {
    slur:  "Rock Ape",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "The rugged aussie outback is full of rocks, the gins look like apes, hence the connection."
  },
  {
    slur:  "Rock Spider",
    refers_to:  "Whites",
    reason_and_origin:  "Term used by English speaking South Africans to refer to Afrikaners. Would not be suprised if used for black people as well, but definatel…"
  },
  {
    slur:  "Rock-Chucker",
    refers_to:  "Arabs",
    reason_and_origin:  "They don't have guns so they throw rocks"
  },
  {
    slur:  "Rockfish",
    refers_to:  "Blacks",
    reason_and_origin:  "Plays on the stereotype that blacks cannot swim, and will \"sink like a rock.\" Also: \"African rockfish."
  },
  {
    slur:  "Rod",
    refers_to:  "Polish",
    reason_and_origin:  "Rod is another way to say Pole"
  },
  {
    slur:  "Roid",
    refers_to:  "Blacks",
    reason_and_origin:  "Short for Negroid."
  },
  {
    slur:  "ROK",
    refers_to:  "Koreans",
    reason_and_origin:  "Troops from Korea sent to Vietnam to fight on the side of the United States. Not necessarily a derogatory term."
  },
  {
    slur:  "Rolling Stones",
    refers_to:  "Montenegrians",
    reason_and_origin:  "They roll down from their mountains to come to Serbia. Slur used by Serbs."
  },
  {
    slur:  "Rom",
    refers_to:  "Romanians",
    reason_and_origin:  "Same meaning and origin as \"Roma"
  },
  {
    slur:  "Roma",
    refers_to:  "Romanians",
    reason_and_origin:  "A large segment of Romanians are either Gypsies or of Gypsy origin. Non-gypsy Romanians find this very offensive."
  },
  {
    slur:  "Roman Candle",
    refers_to:  "Arabs",
    reason_and_origin:  "Suicide bomber who's bomb doesn't go off as planned."
  },
  {
    slur:  "Roo",
    refers_to:  "Australians",
    reason_and_origin:  "Commonly used due to their extensive supply of the specific animal \"kangaroo\", used as an offensive term to describe them and the way the…"
  },
  {
    slur:  "Roo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Russian Jew"
  },
  {
    slur:  "Roof Rabbit Killer",
    refers_to:  "Chinese",
    reason_and_origin:  "Roof rabbit = cat. Chinese eat cat, therefore roof rabbit killer."
  },
  {
    slur:  "Roofucker",
    refers_to:  "Australians",
    reason_and_origin:  "Kangaroo-fucker. Australian version of Sheepfucker. Used often on USENET and other internet forums."
  },
  {
    slur:  "Rooineck",
    refers_to:  "British",
    reason_and_origin:  "South African version of redneck."
  },
  {
    slur:  "Rooinek",
    refers_to:  "British",
    reason_and_origin:  "This derogatory name was used by the Boers to describe the British primarily after the Anglo-Boer war which lasted from 1899-1902."
  },
  {
    slur:  "Rook",
    refers_to:  "Russians",
    reason_and_origin:  "Commonly used as a reference to the Russians' stereotypical chess prowess."
  },
  {
    slur:  "Rope-Head",
    refers_to:  "Blacks",
    reason_and_origin:  "Name for younger black women who use thick, braided hair weaves because the end result often looks like rope."
  },
  {
    slur:  "Rope-Straightener",
    refers_to:  "Blacks",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Rosbif",
    refers_to:  "British",
    reason_and_origin:  "Rosbif has been a reference used by the French for the British for hundreds of years - long before tourist holidays. It is a reference t…"
  },
  {
    slur:  "Rosuke",
    refers_to:  "Russians",
    reason_and_origin:  "Used by Japanese. Ro (Roshia) means Russia in Japanese. Suke is the suffix attached Japanese common name."
  },
  {
    slur:  "Round-Eye",
    refers_to:  "Whites",
    reason_and_origin:  "Asian derogatory term for American whites."
  },
  {
    slur:  "Round-face",
    refers_to:  "Slovakians",
    reason_and_origin:  "They are said to have round faces."
  },
  {
    slur:  "Royal Hawaiian",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks in Hawaii who attempt to pass themselves off as ethnically Hawaiian."
  },
  {
    slur:  "RSDB",
    refers_to:  "This Site",
    reason_and_origin:  "Really Stupid Derogative Bullshit. \"Your site is a pointless piece of shit that represents how ignorant you are since you can't look past …"
  },
  {
    slur:  "Rubberhead",
    refers_to:  "Canadians",
    reason_and_origin:  "Heads bounce off ice in hockey games."
  },
  {
    slur:  "Rube",
    refers_to:  "Whites",
    reason_and_origin:  "In the same league as hick. See: Hick."
  },
  {
    slur:  "Ruble Head",
    refers_to:  "Russians",
    reason_and_origin:  "Originated because of the national currency and it's origin."
  },
  {
    slur:  "Rufus",
    refers_to:  "Blacks",
    reason_and_origin:  "After the character \"Rufus Xavier Sasparilla\" from schoolhouse rock."
  },
  {
    slur:  "Rug Merchant",
    refers_to:  "Arabs",
    reason_and_origin:  "Obvious"
  },
  {
    slur:  "Rug Pilot",
    refers_to:  "Arabs",
    reason_and_origin:  "Same as Carpet Pilot"
  },
  {
    slur:  "Rug-Rider",
    refers_to:  "Arabs",
    reason_and_origin:  "See: Rug Pilot."
  },
  {
    slur:  "Runs, The",
    refers_to:  "Blacks",
    reason_and_origin:  "The \"runs\" is a term commonly used to speak of diahrrea; also because black people are known to excel in running"
  },
  {
    slur:  "Ruskie",
    refers_to:  "Russians",
    reason_and_origin:  "The Russian word for the Russian language is pronounced \"pa-rooski.\" Was popular during the Cold War."
  },
  {
    slur:  "Russian Swede",
    refers_to:  "Finnish",
    reason_and_origin:  "A joke that the Finnish don't have an identity of their own."
  },
  {
    slur:  "Rutabaga",
    refers_to:  "Swedes",
    reason_and_origin:  "Swedes cherish this thick bulbous edible yellow root; used as food and animal feed, which is even called the Swede or Swedish turnip."
  },
  {
    slur:  "R�stifresser",
    refers_to:  "Swiss",
    reason_and_origin:  "Hash browns eater\". \"R�sti\" is the national dish."
  },
  {
    slur:  "Saf",
    refers_to:  "South Africans",
    reason_and_origin:  "Abreviation of South Africa (commonly used in Britain)."
  },
  {
    slur:  "Safe",
    refers_to:  "Blacks",
    reason_and_origin:  "Because the government gives them food, housing, money and protects them from \"hate\"."
  },
  {
    slur:  "Sailor",
    refers_to:  "Blacks",
    reason_and_origin:  "Because they constantly wear the clothing line Nauitica, yet very, very few own a boat."
  },
  {
    slur:  "Salami",
    refers_to:  "Italians",
    reason_and_origin:  "Italian body odor is often reminiscent of salami"
  },
  {
    slur:  "Salmon Cruncher",
    refers_to:  "Native Americans",
    reason_and_origin:  "Salmon is the main part of the diet in many northern villages."
  },
  {
    slur:  "Salmon Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Salmon was a primary food source for Northwestern Native Americans."
  },
  {
    slur:  "Salt-Prick",
    refers_to:  "South Africans",
    reason_and_origin:  "Used to define South Africans loyal to Britain. One foot on Africa, one foot on England and their prick dangles into the ocean."
  },
  {
    slur:  "Saltine",
    refers_to:  "Whites",
    reason_and_origin:  "Same color as skin. Same sentiments expressed as in \"cracker."
  },
  {
    slur:  "Saltwater Nigger",
    refers_to:  "Cubans",
    reason_and_origin:  "Immigrants who come to America by boats or ships (or rafts)."
  },
  {
    slur:  "Salty",
    refers_to:  "Cubans",
    reason_and_origin:  "Cubans Who Have Recently Arrived To The U.S.. They're salty because of all the days they were on the Ocean water."
  },
  {
    slur:  "Sam",
    refers_to:  "Somalians",
    reason_and_origin:  "Shortening of \"Somalian"
  },
  {
    slur:  "SAM",
    refers_to:  "Mexican",
    reason_and_origin:  "Sorry-Ass Mexican"
  },
  {
    slur:  "Sambo",
    refers_to:  "Indians",
    reason_and_origin:  "Derives from the traditional children's story, \"The Story of Little Black Sambo\" about an Asian Indian who had dark skin."
  },
  {
    slur:  "Sambo",
    refers_to:  "Blacks",
    reason_and_origin:  "See Little (Black) Sambo."
  },
  {
    slur:  "Sammie",
    refers_to:  "Somalians",
    reason_and_origin:  "Used by Americans in 1992-1993 when in Somalia. Also known as skinnies"
  },
  {
    slur:  "San",
    refers_to:  "Blacks",
    reason_and_origin:  "(S)tupid (A)ss (N)igger .. see Dan"
  },
  {
    slur:  "Sanchez",
    refers_to:  "Hispanics",
    reason_and_origin:  "Common Hispanic name"
  },
  {
    slur:  "Sand Flea",
    refers_to:  "Arabs",
    reason_and_origin:  "Parasitic sand dwellers."
  },
  {
    slur:  "Sand Groper",
    refers_to:  "Australians",
    reason_and_origin:  "Derived from the Sand Groper who lives in the western deserts of Australia."
  },
  {
    slur:  "Sand Kisser",
    refers_to:  "Arabs",
    reason_and_origin:  "When kneeling to Mecca, Arabs bend in a position enabling them to kiss the sand."
  },
  {
    slur:  "Sand Monkey",
    refers_to:  "Arabs",
    reason_and_origin:  "Same as sand nigger."
  },
  {
    slur:  "Sand Moolie",
    refers_to:  "Arabs",
    reason_and_origin:  "Same idea as Sand Nigger, only with Moolie."
  },
  {
    slur:  "Sand Nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Arabs generally live in sandy places."
  },
  {
    slur:  "Sand Rat",
    refers_to:  "Arabs",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Sand Scratcher",
    refers_to:  "Arabs",
    reason_and_origin:  "Demeaning to people living in deserts"
  },
  {
    slur:  "Sandies",
    refers_to:  "Arabs",
    reason_and_origin:  "Specifically Afghani's & Iraqi's. Used by the 82nd Airborne in 2003."
  },
  {
    slur:  "Sandy",
    refers_to:  "Arabs",
    reason_and_origin:  "Yet another sand reference"
  },
  {
    slur:  "Sandy Crockett",
    refers_to:  "Arabs",
    reason_and_origin:  "Patriotic arab. Play on Davey Crockett."
  },
  {
    slur:  "Sanford",
    refers_to:  "Blacks",
    reason_and_origin:  "From Sanford and Son."
  },
  {
    slur:  "Sanjay",
    refers_to:  "Indians",
    reason_and_origin:  "Apu's co-worker on the Simpsons is named Sanjay"
  },
  {
    slur:  "Sanyika",
    refers_to:  "Hungarians",
    reason_and_origin:  "Popular name."
  },
  {
    slur:  "SARS",
    refers_to:  "Chinese",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Sassenach",
    refers_to:  "English",
    reason_and_origin:  "Gaelic word for \"southerner\" or \"saxon.\" Also the Welsh \"Sassain.\" Link"
  },
  {
    slur:  "Satchmo",
    refers_to:  "Blacks",
    reason_and_origin:  "Originally Louis Armstrong's nickname. Can be heard amongst other slurs in the People Haters song, \"You're A Nigger"
  },
  {
    slur:  "Saupreiss",
    refers_to:  "Germans",
    reason_and_origin:  "Austrians and Bavarians use it for Northern Germans. Preiss is Austrian dialect for Preusse (Prussian) and a Sau is a female pig."
  },
  {
    slur:  "Savage",
    refers_to:  "Native Americans",
    reason_and_origin:  "Americans commonly called Native Americans by this name in the 1800s."
  },
  {
    slur:  "SAW",
    refers_to:  "Whites",
    reason_and_origin:  "Stupid Ass White. Coincidentally also the word for \"White\" in Cambodian culture or Khmer language."
  },
  {
    slur:  "Sayeedi/Saeedi",
    refers_to:  "Egyptians",
    reason_and_origin:  "Used by Cairenes to refer to inhabitants of Upper Egypt."
  },
  {
    slur:  "SBH",
    refers_to:  "Asians",
    reason_and_origin:  "Represents their Straight Black Hair."
  },
  {
    slur:  "SCAB",
    refers_to:  "Americans",
    reason_and_origin:  "Stupid Caucasian American Bitches"
  },
  {
    slur:  "Scalper",
    refers_to:  "Native Americans",
    reason_and_origin:  "Based on the Native American practice of scalping enemies."
  },
  {
    slur:  "Scandie",
    refers_to:  "Scandinavians",
    reason_and_origin:  "Obvious"
  },
  {
    slur:  "Scap",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Scottish/Japanese mix."
  },
  {
    slur:  "Scat",
    refers_to:  "Blacks",
    reason_and_origin:  "Scat is also known as animal fecal matter, which is brown; also for Scat music which is from black origin"
  },
  {
    slur:  "Sceptic",
    refers_to:  "Americans",
    reason_and_origin:  "Rhyming slang, Sceptic Tank = Yank. Both are \"full of shit."
  },
  {
    slur:  "Scheiss-Ami",
    refers_to:  "Americans",
    reason_and_origin:  "Used by Germans as derogatory reference of Americans."
  },
  {
    slur:  "Schemie",
    refers_to:  "Scottish",
    reason_and_origin:  "White trash in Scotland. Local housing estates in Scotland are called schemes. Schemies are the ones who have never worked and lived o…"
  },
  {
    slur:  "Schiptar",
    refers_to:  "Albanians",
    reason_and_origin:  "Derives from an Albanian word for themselves, but can be derog. when used by other people to describe Albanians. Also Shiptar, Shqiptar…"
  },
  {
    slur:  "Schleu",
    refers_to:  "Germans",
    reason_and_origin:  "Frech slur during WWI; common German consonant combination that is unpleasent sounding to French speakers"
  },
  {
    slur:  "Schlitzauge",
    refers_to:  "Asians",
    reason_and_origin:  "German word, literally \"eye like a slit"
  },
  {
    slur:  "Schluchtenscheisser",
    refers_to:  "Austrians",
    reason_and_origin:  "Used by Germans for their beloved Austrian neighbours, stands for someone taking his dumps in canyons (since Austria is very mountainous)"
  },
  {
    slur:  "Schmeisser",
    refers_to:  "Germans",
    reason_and_origin:  "WWII term for a German soldier, derived from a machine gun of the same make."
  },
  {
    slur:  "Schwartza",
    refers_to:  "Blacks",
    reason_and_origin:  "(sh-var-tza) Stems from the Yiddish word schvartz, or black. It is not derogatory in nature, but usually ends up being used in not th…"
  },
  {
    slur:  "Schwarzenigger",
    refers_to:  "Blacks",
    reason_and_origin:  "A black man who is extremely muscular."
  },
  {
    slur:  "Schwarzie",
    refers_to:  "Blacks",
    reason_and_origin:  "Schwarz' is German for 'black.'"
  },
  {
    slur:  "Schwoogie",
    refers_to:  "Blacks",
    reason_and_origin:  "Believed to be contraction of Yiddish/German schwatrz (black) and boogie."
  },
  {
    slur:  "Scooby Doo",
    refers_to:  "Jews",
    reason_and_origin:  "Rhyming slang for 'Jew'."
  },
  {
    slur:  "Scotch",
    refers_to:  "Scottish",
    reason_and_origin:  "Archaic synonym for \"Scottish.\" Fell out of common use because of the association with whiskey, but now used occasionally as a derogator…"
  },
  {
    slur:  "Scotty",
    refers_to:  "Scottish",
    reason_and_origin:  "From the Star Trek character of that name."
  },
  {
    slur:  "Scrap",
    refers_to:  "Mexicans",
    reason_and_origin:  "Slur used by Mexican gang members to degrade other members."
  },
  {
    slur:  "Scratch-Back",
    refers_to:  "Hispanics",
    reason_and_origin:  "Mexicans (illegals) who crawl under fences, getting their backs scratched up in the process, to get into America."
  },
  {
    slur:  "Scrob",
    refers_to:  "Icelanders",
    reason_and_origin:  "What fisherman and dockers call Icelanders. From \"Scrod,\" which is a 19th century word for young cod fish."
  },
  {
    slur:  "Sea Jew",
    refers_to:  "Norwegians",
    reason_and_origin:  "Norwegian Vikings travelled all over the world"
  },
  {
    slur:  "Sea Monkey",
    refers_to:  "Pacific Islanders",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Seagull",
    refers_to:  "Filipinos",
    reason_and_origin:  "Possibly from how Filipinos often travel overseas to work like migratory birds (although the seagull is not migratory...). Heard in Japan…"
  },
  {
    slur:  "Seal-Clubber",
    refers_to:  "Native Americans",
    reason_and_origin:  "Clubbing of seals for the fur and meat"
  },
  {
    slur:  "Seal-Fucker",
    refers_to:  "Canadians",
    reason_and_origin:  "Extension of sheep-fucker, roo-fucker, etc."
  },
  {
    slur:  "Seaweed-Sucker",
    refers_to:  "Asians",
    reason_and_origin:  "Seafood diet."
  },
  {
    slur:  "Seinfeld",
    refers_to:  "Jews",
    reason_and_origin:  "Probably one of the most famous Jews."
  },
  {
    slur:  "Self-Chosen",
    refers_to:  "Jews",
    reason_and_origin:  "In reference to their moniker 'chosen people of God.'"
  },
  {
    slur:  "Semi-Simian",
    refers_to:  "Blacks",
    reason_and_origin:  "Simian meaning of, relating to, or resembling monkeys or apes."
  },
  {
    slur:  "Semihole",
    refers_to:  "Native Americans",
    reason_and_origin:  "Referring to the Seminole tribe."
  },
  {
    slur:  "Seoul Man",
    refers_to:  "Koreans",
    reason_and_origin:  "Describes Koreans who try to act Black."
  },
  {
    slur:  "Seppo",
    refers_to:  "Americans",
    reason_and_origin:  "Cockney rhyming slang for septic tank = yank, shortened."
  },
  {
    slur:  "Seppo/Zeppo",
    refers_to:  "Americans",
    reason_and_origin:  "Short for Septic, see Septic, Septic Tank."
  },
  {
    slur:  "Septic",
    refers_to:  "Americans",
    reason_and_origin:  "Short for Septic Tank, which is rhyming slang for \"Yank.\" Commonly used in Ireland. May also be used in the UK."
  },
  {
    slur:  "Septic Tank",
    refers_to:  "Americans",
    reason_and_origin:  "Cockney rhyming slang for \"yank\", often abreviated to \"Seppo"
  },
  {
    slur:  "Septic/Sherman",
    refers_to:  "Americans",
    reason_and_origin:  "Cockney rhyming slang. Septic Tank/Sherman Tank = Yank"
  },
  {
    slur:  "Serial Killer",
    refers_to:  "Whites",
    reason_and_origin:  "Most serial killers are white."
  },
  {
    slur:  "Serpent",
    refers_to:  "Whites",
    reason_and_origin:  "See: Snake"
  },
  {
    slur:  "Sexican",
    refers_to:  "Hispanics",
    reason_and_origin:  "Refers to how fast the Mexican-American population is increasing."
  },
  {
    slur:  "SFA",
    refers_to:  "Americans",
    reason_and_origin:  "Stupid Fucking American - not very clever, but very prevelent in Europe"
  },
  {
    slur:  "Shackle Dragger",
    refers_to:  "Australians",
    reason_and_origin:  "Deported british convicts."
  },
  {
    slur:  "Shade",
    refers_to:  "Blacks",
    reason_and_origin:  "Old-fashioned term derived because blacks are dark like a shade"
  },
  {
    slur:  "Shadow",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to color of skin"
  },
  {
    slur:  "Shadow-Smurf",
    refers_to:  "Blacks",
    reason_and_origin:  "They the darkest of all Smurfs."
  },
  {
    slur:  "Shaft",
    refers_to:  "Blacks",
    reason_and_origin:  "Black man, from black exploitation film \"Shaft"
  },
  {
    slur:  "Shaka Zulu",
    refers_to:  "Blacks",
    reason_and_origin:  "Leader of the Zulu tribe in Africa located in present day Zimbabwe"
  },
  {
    slur:  "Shamrock Nigger",
    refers_to:  "Irish",
    reason_and_origin:  "Shamrocks represent Ireland's heritage"
  },
  {
    slur:  "Shant",
    refers_to:  "Irish",
    reason_and_origin:  "Poor Irish People. Derived from the shacks they lived in -- the shanty."
  },
  {
    slur:  "Sheeny",
    refers_to:  "Jews",
    reason_and_origin:  "From Yiddish \"shaine\" or German \"schon\" meaning \"beautiful\"."
  },
  {
    slur:  "Sheep Dip",
    refers_to:  "Whites",
    reason_and_origin:  "Describes White Ranchers that have sex with Sheep."
  },
  {
    slur:  "Sheep-Shagger",
    refers_to:  "Welsh/Scottish",
    reason_and_origin:  "There's a myth that Scotsmen and/or Welsh have a thing for buggering sheep. The sheep are said to outnumber the people in both som…"
  },
  {
    slur:  "Sheepie",
    refers_to:  "New Zealanders",
    reason_and_origin:  "Well know for their habits with sheep"
  },
  {
    slur:  "Sheethead",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to the KKK."
  },
  {
    slur:  "Sheister",
    refers_to:  "Jews",
    reason_and_origin:  "Like a shyster lawyer. One who carries on any business, especially legal business, in a mean and dishonest way."
  },
  {
    slur:  "Shiksa",
    refers_to:  "Whites",
    reason_and_origin:  "Yiddish word used mainly by Orthodox Jews to describe non-Jewish women or a Jewish woman who doesn't observe all Jewish precepts."
  },
  {
    slur:  "Shillelagh-Hugger",
    refers_to:  "Irish",
    reason_and_origin:  "A shillelagh is a staff commonly use by the Irish"
  },
  {
    slur:  "Shine/Shiner",
    refers_to:  "Blacks",
    reason_and_origin:  "In reference to the shine their skin can sometimes give off. Also a 1920's main occupation, shoe shiners."
  },
  {
    slur:  "Ship-wrecked Mexican",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "The island of Puerto Rico"
  },
  {
    slur:  "Shipping Cargo",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to slave trading. Slaves to be shipped were packed inhumanly close."
  },
  {
    slur:  "Shiptar",
    refers_to:  "Albanians",
    reason_and_origin:  "A derogatory term employed by Balkan Slavs (Croats, Serbs, Montenegrins and Macedonians) when referring to Albanians. However, its us…"
  },
  {
    slur:  "Shit Hand",
    refers_to:  "Arabs",
    reason_and_origin:  "Refers to the Arab custom of wiping one's butt with the left hand, rather than with toilet paper."
  },
  {
    slur:  "Shit Palm",
    refers_to:  "Whites",
    reason_and_origin:  "They never wash their hands when they go to the washroom"
  },
  {
    slur:  "Shit-Eater",
    refers_to:  "Germans",
    reason_and_origin:  "Feces eating is a fetish that originated in Germany, otherwise known as scat sex or shit sex eg. shit eating, rubbing shit, etc."
  },
  {
    slur:  "Shit-Kicker",
    refers_to:  "Whites",
    reason_and_origin:  "From farmers or country boys walking through the cow pastures."
  },
  {
    slur:  "Shit-Slinger",
    refers_to:  "Blacks",
    reason_and_origin:  "A typical behavior of monkeys is to throw feces."
  },
  {
    slur:  "Shitheel",
    refers_to:  "Blacks",
    reason_and_origin:  "Slang term for a Black servant. Southern origins."
  },
  {
    slur:  "Shitskin",
    refers_to:  "Blacks",
    reason_and_origin:  "Color of skin."
  },
  {
    slur:  "Shnozzle",
    refers_to:  "Jews",
    reason_and_origin:  "They have large noses, or \"shnozzes."
  },
  {
    slur:  "Shoe",
    refers_to:  "Dutch",
    reason_and_origin:  "Name is derived from the wooden shoes they would wear."
  },
  {
    slur:  "Shoe Shiner",
    refers_to:  "Blacks",
    reason_and_origin:  "Many shoe shiners in cities are black."
  },
  {
    slur:  "Shonnicker",
    refers_to:  "Jews",
    reason_and_origin:  "Early 20th century American"
  },
  {
    slur:  "Shoobie",
    refers_to:  "Canadians",
    reason_and_origin:  "Reference to tourists from Canada who come to the shore. Also reference to any tourist."
  },
  {
    slur:  "Shovel",
    refers_to:  "Bosnians",
    reason_and_origin:  "Many bosnians have large heads with flat facial features."
  },
  {
    slur:  "Shovel-Head",
    refers_to:  "Koreans",
    reason_and_origin:  "Believed their heads look like shovels. Also shovel-face"
  },
  {
    slur:  "Shuffalong",
    refers_to:  "Blacks",
    reason_and_origin:  "Supposed to mean \"shuffle along.\" Refering to lazy slaves."
  },
  {
    slur:  "Shvartz",
    refers_to:  "Blacks",
    reason_and_origin:  "Yiddish (German origin) word for Black. Used neutrally and disparagingly."
  },
  {
    slur:  "Shvatsa",
    refers_to:  "Blacks",
    reason_and_origin:  "Yiddish word for nigger"
  },
  {
    slur:  "Shvooga",
    refers_to:  "Blacks",
    reason_and_origin:  "Another word in Yiddish that means nigger"
  },
  {
    slur:  "Shylock",
    refers_to:  "Jews",
    reason_and_origin:  "Comes from Shakespeare's \"The Merchant of Venice."
  },
  {
    slur:  "Sid",
    refers_to:  "Irish",
    reason_and_origin:  "Small Irish Dick. Irishmen are proud of their manhood"
  },
  {
    slur:  "Silver-tip",
    refers_to:  "Swedes",
    reason_and_origin:  "Many Swedes have hair so blonde that it appears silvery"
  },
  {
    slur:  "Silverback",
    refers_to:  "Blacks",
    reason_and_origin:  "Old Black. Silverbacks are the leaders in a pack of gorillas."
  },
  {
    slur:  "Silvery",
    refers_to:  "Blacks",
    reason_and_origin:  "Cockney rhyming slang for Coon - Silvery Moon - Silvery."
  },
  {
    slur:  "Simian",
    refers_to:  "Blacks",
    reason_and_origin:  "Primate"
  },
  {
    slur:  "Simpson",
    refers_to:  "Asians",
    reason_and_origin:  "The Simpsons are yellow"
  },
  {
    slur:  "Sir Mix A Lot",
    refers_to:  "Blacks",
    reason_and_origin:  "They like big butts and they cannot lie..."
  },
  {
    slur:  "Siwash",
    refers_to:  "Native Americans",
    reason_and_origin:  "Originates from the French word Sauvage which means \"savage"
  },
  {
    slur:  "Six",
    refers_to:  "Blacks",
    reason_and_origin:  "In the times of political correctness this is a good way to say Nigger without getting jumped. I belive it has to do with 6 letters in th…"
  },
  {
    slur:  "Six Point(er)",
    refers_to:  "Jews",
    reason_and_origin:  "Six points on the star of David"
  },
  {
    slur:  "Six-nose",
    refers_to:  "Jews",
    reason_and_origin:  "Jews have hooked or \"six shaped\" nose"
  },
  {
    slur:  "Six-Weeker",
    refers_to:  "French",
    reason_and_origin:  "Derogatory term used by Germans due to the quick collapse of France during WWII."
  },
  {
    slur:  "Sixer",
    refers_to:  "Blacks",
    reason_and_origin:  "On the U.S. census, African American is code number six on the list of ethnicities."
  },
  {
    slur:  "Skel/Skell",
    refers_to:  "Whites",
    reason_and_origin:  "White Trash. A centuries-old word that has made a recent comeback, seems to be used mainly by blue-collar whites. Originally meant th…"
  },
  {
    slur:  "Ski",
    refers_to:  "Somalians",
    reason_and_origin:  "Because they are thin (like skis)"
  },
  {
    slur:  "Skier",
    refers_to:  "Polish",
    reason_and_origin:  "A lot of Polish last names end with -ski"
  },
  {
    slur:  "Skillet",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the color of iron skillets."
  },
  {
    slur:  "Skimo",
    refers_to:  "Eskimos",
    reason_and_origin:  "Derogatory slang of 'Eskimo'."
  },
  {
    slur:  "Skinflint",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin appearance related."
  },
  {
    slur:  "Skinhead",
    refers_to:  "Whites",
    reason_and_origin:  "A popular white supremacist group."
  },
  {
    slur:  "Skinny",
    refers_to:  "Somalians",
    reason_and_origin:  "Because of the time in 1992 where 300,000 somalians were starved. Used in the film Black Hawk Down (2002)."
  },
  {
    slur:  "Skip",
    refers_to:  "Australians",
    reason_and_origin:  "White Australians specifically. From \"Skippy the Bush Kangaroo."
  },
  {
    slur:  "Skippy Poofter",
    refers_to:  "Australians",
    reason_and_origin:  "Comes from ethnic immigrants; skippy meaning kangaroo and poofter is how aussies say someone is gay. So skippy poofter is common insult"
  },
  {
    slur:  "Skunk",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Black mix"
  },
  {
    slur:  "Slackjaw",
    refers_to:  "Whites",
    reason_and_origin:  "A recessive gene cause the lower jaw to protrude outward more than the upper."
  },
  {
    slur:  "Slant",
    refers_to:  "Asians",
    reason_and_origin:  "Facial description -- referring to the eyes."
  },
  {
    slur:  "Slantey-eye'd",
    refers_to:  "Asians",
    reason_and_origin:  "Facial description -- referring to the eyes."
  },
  {
    slur:  "Slave",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Slave Ships",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to pregnant black women. The idea is that they are carrying many children packed tightly inside. Similar to a slave ship."
  },
  {
    slur:  "Sleeper Cell",
    refers_to:  "Arabs",
    reason_and_origin:  "Terrorism-related"
  },
  {
    slur:  "Sleepwalker",
    refers_to:  "Asians",
    reason_and_origin:  "Small eyes appear to be closed, even during the day"
  },
  {
    slur:  "Sleestack",
    refers_to:  "Blacks",
    reason_and_origin:  "From \"Land of the Lost.\" The Sleestacks were stupid, slow, and apparently very lazy. They could never catch Chaka."
  },
  {
    slur:  "Slide",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by some police. It was created so that they could refer to blacks in a derrogatory way and not get in trouble. Said because black…"
  },
  {
    slur:  "Slim",
    refers_to:  "Somalians",
    reason_and_origin:  "Same as \"Skinnie"
  },
  {
    slur:  "Slim Shady",
    refers_to:  "Whites",
    reason_and_origin:  "From the Rapper Eminem, thought of as a white person who tries to be black."
  },
  {
    slur:  "Slingshot",
    refers_to:  "Palestinians",
    reason_and_origin:  "They use slingshots as weapons"
  },
  {
    slur:  "Slit",
    refers_to:  "Asians",
    reason_and_origin:  "Another eye reference."
  },
  {
    slur:  "Sloat",
    refers_to:  "Vietnamese",
    reason_and_origin:  "From French Indo-China [?]"
  },
  {
    slur:  "Slope",
    refers_to:  "Asians",
    reason_and_origin:  "Facial description, Self-explanatory. Also: Slopehead"
  },
  {
    slur:  "Slope Head",
    refers_to:  "Asians",
    reason_and_origin:  "Their faces are rather slopped"
  },
  {
    slur:  "Slot Machine",
    refers_to:  "Asian",
    reason_and_origin:  "their eyes look like coin slots"
  },
  {
    slur:  "Slurpee",
    refers_to:  "Arabs",
    reason_and_origin:  "Traditional convenience store employee."
  },
  {
    slur:  "Slurpee Jockey",
    refers_to:  "Indians",
    reason_and_origin:  "Reference to convenience store franchises"
  },
  {
    slur:  "Slurpee Nigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Operation of convenience stores, which sell Slurpees."
  },
  {
    slur:  "Slushee-Slinger",
    refers_to:  "Arabs",
    reason_and_origin:  "In reference to how many Arabians deal slushees out of their convenience stores."
  },
  {
    slur:  "Smack",
    refers_to:  "Asians",
    reason_and_origin:  "They look like they've been smacked in the forehead, giving a slope and a squint to their eye."
  },
  {
    slur:  "Smigger",
    refers_to:  "Blacks",
    reason_and_origin:  "From the joke \"what do you call a Black Smurf?"
  },
  {
    slur:  "Smoke",
    refers_to:  "Blacks",
    reason_and_origin:  "From the similarity between their skin color and the color of smoke. Also from the way that they were said to be able to sneak aroun…"
  },
  {
    slur:  "Smoke Jumper",
    refers_to:  "Whites",
    reason_and_origin:  "White women who date Black men."
  },
  {
    slur:  "Smoke-Signal",
    refers_to:  "Native Americans",
    reason_and_origin:  "Many American Indians communicated by using smoke signals."
  },
  {
    slur:  "Smoked Irish",
    refers_to:  "Blacks",
    reason_and_origin:  "Irish, especially during the late 19th early 20th century, were thought of as no better than \"niggers,\" and conversely, blacks wer…"
  },
  {
    slur:  "Smokefoot",
    refers_to:  "Blacks",
    reason_and_origin:  "Color of feet."
  },
  {
    slur:  "Smokestack",
    refers_to:  "Blacks",
    reason_and_origin:  "Believed to originate in pre WW II Detroit. Comparison to the blackened smokestacks of the manufacturing plants."
  },
  {
    slur:  "Smokey",
    refers_to:  "Blacks",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Smore",
    refers_to:  "Samoans",
    reason_and_origin:  "Letters rearranged"
  },
  {
    slur:  "Snail-Snapper",
    refers_to:  "French",
    reason_and_origin:  "They eat snails"
  },
  {
    slur:  "Snake",
    refers_to:  "Whites",
    reason_and_origin:  "Refers to them being sneaky and evil."
  },
  {
    slur:  "Snake Charmer",
    refers_to:  "Arabs",
    reason_and_origin:  "Known to frequently \"charm\" Cobra snakes."
  },
  {
    slur:  "Sneakers",
    refers_to:  "Blacks",
    reason_and_origin:  "They always come in pairs"
  },
  {
    slur:  "Snicker Licker",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who date Blacks"
  },
  {
    slur:  "Snigger",
    refers_to:  "Arabs",
    reason_and_origin:  "Short for Sand Nigger"
  },
  {
    slur:  "Snigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Snow nigger.\" Black people seen on the ski slopes; a stereotype that they generally don't go skiing because they dislike the cold."
  },
  {
    slur:  "Snipcock",
    refers_to:  "Jews",
    reason_and_origin:  "Henry Ford used it, reference to circumcision"
  },
  {
    slur:  "Snipes",
    refers_to:  "Blacks",
    reason_and_origin:  "Wesley Snipes is the blackest of the Black people."
  },
  {
    slur:  "Snob",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who can't afford cars and are always seen riding bikes: (S)illy (N)iggers (O)n (B)ikes"
  },
  {
    slur:  "Snow",
    refers_to:  "Whites",
    reason_and_origin:  "Snow is white"
  },
  {
    slur:  "Snow Bird",
    refers_to:  "Canadians",
    reason_and_origin:  "The Snowbirds are a group of Canadian airforce pilots who display their flying at air shows."
  },
  {
    slur:  "Snow Bird",
    refers_to:  "Jews",
    reason_and_origin:  "Refers to old Jewish retirees who transplant themselves to Florida. Although they move to the sunshine state, they stay indoors thu…"
  },
  {
    slur:  "Snow Chink",
    refers_to:  "Eskimos",
    reason_and_origin:  "They look fairly Asian and live in the snow"
  },
  {
    slur:  "Snow Monkey",
    refers_to:  "Canadians",
    reason_and_origin:  "Lots of snow in Canada"
  },
  {
    slur:  "Snow Nigger",
    refers_to:  "Eskimos",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Snowback",
    refers_to:  "Canadians",
    reason_and_origin:  "Play on 'wet-back'."
  },
  {
    slur:  "Snowblower",
    refers_to:  "Eskimos",
    reason_and_origin:  "An out-of-shape eskimo that breathes heavily after walking a few feet in the snow."
  },
  {
    slur:  "Snowflake",
    refers_to:  "Blacks",
    reason_and_origin:  "Was used to indicate an educated black man during the civil war; white collar blacks were pretty rare - only white people had desk jobs."
  },
  {
    slur:  "Snowflake",
    refers_to:  "Jews",
    reason_and_origin:  "When they would burn the Jews and the ashes would come out the smoke stacks. (See Schiendler's List)"
  },
  {
    slur:  "Snowflake",
    refers_to:  "Whites",
    reason_and_origin:  "Used in the movie \"Bones\" for a black man's white woman."
  },
  {
    slur:  "Snowfrogs",
    refers_to:  "French Canadians",
    reason_and_origin:  "French = frogs, living in Canada = snow"
  },
  {
    slur:  "Snowman",
    refers_to:  "Whites",
    reason_and_origin:  "Snowmen are white."
  },
  {
    slur:  "Soak",
    refers_to:  "Mexicans",
    reason_and_origin:  "Much like a wetback, when they cross the Rio Grande river their backs get soaked."
  },
  {
    slur:  "Soap Dodger",
    refers_to:  "French",
    reason_and_origin:  "From the French habit of not appearing to bathe regularly. Also France supposedly has the lowest per capita soap consumption in Europe."
  },
  {
    slur:  "Socket Face",
    refers_to:  "Asians",
    reason_and_origin:  "Thier eyes are slitted, like the electrical sockets on a wall."
  },
  {
    slur:  "Sodbuster",
    refers_to:  "Americans",
    reason_and_origin:  "People moving to the Midwest built their homes out of thick sod, since no other building material was available. They also had to break u…"
  },
  {
    slur:  "Soggy Cracker",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Mexican. Wetback and Cracker."
  },
  {
    slur:  "Sole",
    refers_to:  "Samoan",
    reason_and_origin:  "Pronounced 'So Lee,' means \"male\" in Somoan."
  },
  {
    slur:  "Somppu",
    refers_to:  "Somalians",
    reason_and_origin:  "Somali Refugee In Finland"
  },
  {
    slur:  "Son",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to the way blacks speak Ebonics and append the word \"son\" to every phrase/sentence."
  },
  {
    slur:  "Sooty",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Sortarican",
    refers_to:  "Puerto Ricans",
    reason_and_origin:  "Mix of Puerto Rican and any other race. Read in National Lampoon."
  },
  {
    slur:  "Soul Food",
    refers_to:  "Blacks",
    reason_and_origin:  "From the black drama \"Soul Food."
  },
  {
    slur:  "Soup",
    refers_to:  "Mixed Races",
    reason_and_origin:  "A person who has many different races in his blood."
  },
  {
    slur:  "Southern Windchime",
    refers_to:  "Blacks",
    reason_and_origin:  "During the days of the KKK many black people were hanged from th same tree."
  },
  {
    slur:  "Soutpiel",
    refers_to:  "English",
    reason_and_origin:  "South Africa Afrikaans for 'salt dick' as English South Africans have one foot in SA, the other in UK, and dicks in ocean."
  },
  {
    slur:  "Soy Sauce",
    refers_to:  "Asians",
    reason_and_origin:  "They love soy sauce"
  },
  {
    slur:  "Soyback",
    refers_to:  "Asians",
    reason_and_origin:  "Refers to Asains always using soy sauce"
  },
  {
    slur:  "Spabook",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by Michael Jackson for some unknown reason"
  },
  {
    slur:  "Spade",
    refers_to:  "Blacks",
    reason_and_origin:  "The spades in decks of cards are black."
  },
  {
    slur:  "Spaghetti Vender",
    refers_to:  "Italians",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Spaghetti-Slurper",
    refers_to:  "Italians",
    reason_and_origin:  "Popular Italian dish and method of eating said dish"
  },
  {
    slur:  "Spaghetti-Twister",
    refers_to:  "Italians",
    reason_and_origin:  "Popular Italian dish and method of eating said dish"
  },
  {
    slur:  "Spaghetto",
    refers_to:  "Italians",
    reason_and_origin:  "Italians who act Black"
  },
  {
    slur:  "Spanglish",
    refers_to:  "Hispanics",
    reason_and_origin:  "Spanish-Americans; English-speaking Hispanics, also the language they speak."
  },
  {
    slur:  "Spear-Chucker",
    refers_to:  "Blacks",
    reason_and_origin:  "Comes from the hunting styles of African tribal natives."
  },
  {
    slur:  "Spec",
    refers_to:  "Hispanics",
    reason_and_origin:  "Baby Spic. See: Spic."
  },
  {
    slur:  "Special Meal",
    refers_to:  "Jews",
    reason_and_origin:  "When a Jewish person gets a meal on a plane, it's from the kosher menu and a special meal not offered to regular passengers"
  },
  {
    slur:  "Speed Demon",
    refers_to:  "Hispanics",
    reason_and_origin:  "Amphetamines are popular among Hispanics."
  },
  {
    slur:  "Spegro",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Spanish/Black mix."
  },
  {
    slur:  "Spew",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Spanish/Jewish mix."
  },
  {
    slur:  "Spic",
    refers_to:  "Hispanics",
    reason_and_origin:  "Short for Hispanic. Might also be acronym of SPanish, Indian, and Colored, coming from the mixed breeds that resulted from the union o…"
  },
  {
    slur:  "Spic and Span",
    refers_to:  "Hispanics",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Spicaninny",
    refers_to:  "Mexicans",
    reason_and_origin:  "Young Mexican girls. Combination form of Spic and Picaninny."
  },
  {
    slur:  "Spice Rubber",
    refers_to:  "Indians",
    reason_and_origin:  "Because they use massive spices in their cuisine and they rub them on their bodies."
  },
  {
    slur:  "Spicet Fence",
    refers_to:  "Mexicans",
    reason_and_origin:  "10 mexicans lined up side by side at the border."
  },
  {
    slur:  "Spickaboo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Black mix. Derived from 'Spic' and 'Jigaboo.'"
  },
  {
    slur:  "SpicNic",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics who pull over on the side of a main highway, pop the hood on their car, set up the volleyball net, sit on thier coolers and hav…"
  },
  {
    slur:  "Spicracker",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Hispanic/White mix."
  },
  {
    slur:  "Spicy Cracker",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Mexican mix"
  },
  {
    slur:  "Spider",
    refers_to:  "Italians",
    reason_and_origin:  "Reference to a character in the film GoodFellas."
  },
  {
    slur:  "Spigger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Hispanics/Black mix. Combination of 'Spic' and 'Nigger.'"
  },
  {
    slur:  "Spike",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Jewish and Hispanic, Spic + Kike = Spike"
  },
  {
    slur:  "Spink",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Spanish/Chinese mix. Combination of 'Spic' and 'Chink.'"
  },
  {
    slur:  "Spivic",
    refers_to:  "Hispanics",
    reason_and_origin:  "Often referred to Hispanics that drive Honda Civics"
  },
  {
    slur:  "Spizzician",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Hispanic/Guatemalan mix. Pronounced \"spizzz-ik-ien."
  },
  {
    slur:  "Splib",
    refers_to:  "Blacks",
    reason_and_origin:  "Most likely origin comes from the 1960's as an acronym for: South Philadelphia Lower-Income Blacks."
  },
  {
    slur:  "Spliv",
    refers_to:  "Blacks",
    reason_and_origin:  "Washington DC area police term"
  },
  {
    slur:  "Spoda",
    refers_to:  "Blacks",
    reason_and_origin:  "How blacks talk (ex.) \"We ain't Spoda be here.\" (we aren't supposed to be here)"
  },
  {
    slur:  "Sponge Head",
    refers_to:  "Blacks",
    reason_and_origin:  "African's naturally bouncy/kinky hair, when uncut, tends to be big and poofy when dried out. When you sqeeze it it seems as if it woul…"
  },
  {
    slur:  "Spook",
    refers_to:  "Blacks",
    reason_and_origin:  "Because of their dark skin, which can blend into the night, making them ghost-like."
  },
  {
    slur:  "Spoon",
    refers_to:  "Blacks",
    reason_and_origin:  "From the reflection you see when looking at a spoon. Originates from the shape of a Black person's nose"
  },
  {
    slur:  "Spoonbill",
    refers_to:  "Blacks",
    reason_and_origin:  "A spoonbill is a type of bird. Look at one and the origin will be obvious."
  },
  {
    slur:  "Spoonhead",
    refers_to:  "Cardassians",
    reason_and_origin:  "Facial feature looks like a spoon on their forehead"
  },
  {
    slur:  "Spota",
    refers_to:  "Blacks",
    reason_and_origin:  "(Pronounced Spoh-tuh) Stereotype of dumb inner city blacks' slang for supposed to. \"Spota get a job. Spota take care of the kids. Spot…"
  },
  {
    slur:  "Spread",
    refers_to:  "Mexicans",
    reason_and_origin:  "They continue \"spreading\" across the United States."
  },
  {
    slur:  "Sprout",
    refers_to:  "Belgians",
    reason_and_origin:  "Obscure Monty Python reference; take on \"brussel sprouts\", hence Belgians."
  },
  {
    slur:  "Spruce Monkey",
    refers_to:  "Native Americans",
    reason_and_origin:  "Spruce forests"
  },
  {
    slur:  "Spud",
    refers_to:  "Irish",
    reason_and_origin:  "The heavy influence of the potato in Ireland."
  },
  {
    slur:  "Spudnigger",
    refers_to:  "Irish",
    reason_and_origin:  "Irish/Potato relationship. Also, Spudfucker."
  },
  {
    slur:  "Sputnik",
    refers_to:  "Russians",
    reason_and_origin:  "The world's first artificial satellite sent into space. Not really a heinous threat, but sounds that way."
  },
  {
    slur:  "Squanto",
    refers_to:  "Native Americans",
    reason_and_origin:  "Name of a Native American who helped the English colonists in Massachusetts develop agricultural techniques and served as an interprete…"
  },
  {
    slur:  "Squarehead",
    refers_to:  "Scandanavians",
    reason_and_origin:  "Shape of head, late 19th/early 20th century American word. Applies to all Scandinavians."
  },
  {
    slur:  "Squarehead",
    refers_to:  "Albanians",
    reason_and_origin:  "Many Albanians seem to have a square head"
  },
  {
    slur:  "Squaw",
    refers_to:  "Native Americans",
    reason_and_origin:  "Refers to Native American women. Usually thought to refer to a woman's vagina, but this is fairly controversial."
  },
  {
    slur:  "Squaw Hopper",
    refers_to:  "Native Americans",
    reason_and_origin:  "Usually associated with natives, but also used for anyone in a relationship with a native female"
  },
  {
    slur:  "Squint",
    refers_to:  "Asians",
    reason_and_origin:  "Facial reference"
  },
  {
    slur:  "Stable Boy",
    refers_to:  "Croats",
    reason_and_origin:  "Their most common occupation in Austrian Empire. Betch-key ko-new-sharey, Serbian pronounciation."
  },
  {
    slur:  "Stacks",
    refers_to:  "Blacks",
    reason_and_origin:  "From the movie Goodfellas, character Stacks Edwards, the only black character, manages to fuck up the heist."
  },
  {
    slur:  "Stallion",
    refers_to:  "Italians",
    reason_and_origin:  "Like in the movie Rocky, Rocky an Italian, was know as the Stallion."
  },
  {
    slur:  "Stan",
    refers_to:  "Arabs",
    reason_and_origin:  "AfghaniSTAN, PakiSTAN, etc."
  },
  {
    slur:  "Stein",
    refers_to:  "Jews",
    reason_and_origin:  "Common name"
  },
  {
    slur:  "Stepn Fetchit",
    refers_to:  "Blacks",
    reason_and_origin:  "Stage name of American actor Lincoln Perry, type cast as a slow, uneducated & easily frightened Black man. Derogatory term also used t…"
  },
  {
    slur:  "Still",
    refers_to:  "Falkland Islanders",
    reason_and_origin:  "After British troops were forbidden to use the insulting term \"Bennies\", they named the Islanders \"Stills\" - because they were stil…"
  },
  {
    slur:  "Stinkian",
    refers_to:  "Armenians",
    reason_and_origin:  "Odor"
  },
  {
    slur:  "Stormwatcher",
    refers_to:  "Whites",
    reason_and_origin:  "Trailer trash that are forced to watch tornadoes while trapped in trailors."
  },
  {
    slur:  "Stovelid",
    refers_to:  "Blacks",
    reason_and_origin:  "A book from the 1950's set in Florida (_The Lotus Eaters_) used Stovelid, which makes some sense if you've ever operated a big wood stove …"
  },
  {
    slur:  "Stovepipe",
    refers_to:  "Blacks",
    reason_and_origin:  "Stovepipes from wood-fired stoves get encrusted with black soot, hence the association."
  },
  {
    slur:  "Strange Fruit",
    refers_to:  "Blacks",
    reason_and_origin:  "Coined by Blacks during slavery to refer to other Blacks who were hanged from trees. Used in a Billie Holiday song during the Civil Right…"
  },
  {
    slur:  "Strap Hangers",
    refers_to:  "Blacks",
    reason_and_origin:  "When the whites were sitting on the bus, the blacks had to stand and hold onto the strap."
  },
  {
    slur:  "Street Cheetah",
    refers_to:  "Blacks",
    reason_and_origin:  "A reference to the ghetto, i.e. uneducated Black criminals hanging around the streets day and night, along with the speed of young blac…"
  },
  {
    slur:  "Stump/Tree Jumper",
    refers_to:  "Whites",
    reason_and_origin:  "Rednecks use Stump Jumper or Tree Jumper against hillbillies lower than themselves, but they also use it to point out hillbillies tha…"
  },
  {
    slur:  "Sub-Human",
    refers_to:  "Blacks",
    reason_and_origin:  "They are said to be the missing link between apes and humans."
  },
  {
    slur:  "Sudaca",
    refers_to:  "South Americans",
    reason_and_origin:  "Used in Spain as a derogatory term for South American immigrants. Derived from the Spanish word for South American (sudamericano)."
  },
  {
    slur:  "Suddha",
    refers_to:  "Whites",
    reason_and_origin:  "Sinhala (Sri Lankan language) word for white. Similar to \"Gora"
  },
  {
    slur:  "Sun Goblin",
    refers_to:  "Arabs",
    reason_and_origin:  "Small, ulgly, vicious creatures of a sunny land"
  },
  {
    slur:  "Sunarefa",
    refers_to:  "Arabs",
    reason_and_origin:  "Used by Russian metal band Korrozia Metalla on the song (title translates to) \"Kill The Sunarefa.\" Sunarefa refers to a Soviet brand o…"
  },
  {
    slur:  "Sunny Side Up",
    refers_to:  "Asians",
    reason_and_origin:  "Refers to Asians who believe they are white on the inside and try to fit in with whites, but are really Asian and yellow on the outside…"
  },
  {
    slur:  "Suntan",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to their dark skin color."
  },
  {
    slur:  "Superfly",
    refers_to:  "Pacific Islanders",
    reason_and_origin:  "WWF wrestler \"Superfly\" Jimmy Snuka. Could be used for any dark-skinned individual."
  },
  {
    slur:  "Surrender Monkeys",
    refers_to:  "French",
    reason_and_origin:  "Referenced by Groudskeeper Willy on the Simpsons"
  },
  {
    slur:  "Suspect",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Svenne",
    refers_to:  "Swedes",
    reason_and_origin:  "Used by immigrants in Sweden about Swedes"
  },
  {
    slur:  "Swami",
    refers_to:  "Indians",
    reason_and_origin:  "A Hindu religious teacher."
  },
  {
    slur:  "Swamp Donkey",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks from rural areas"
  },
  {
    slur:  "Swamp Kike",
    refers_to:  "Cajuns",
    reason_and_origin:  "It has been said that Cajuns are the Jews of Louisiana because of their propensity for commerce and finance. The slur is used by an…"
  },
  {
    slur:  "Swamp Yankee",
    refers_to:  "Americans",
    reason_and_origin:  "Of the same nature as \"trailer trash\", but referring to a poor Whites who live in the boonies."
  },
  {
    slur:  "Swamp-Runner",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks running from slavery"
  },
  {
    slur:  "Swamper",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to poor blacks who live in rural areas, especially if the area is predominantly white"
  },
  {
    slur:  "Swan",
    refers_to:  "Whites",
    reason_and_origin:  "Slut With A Nigger (S.W.A.N.)"
  },
  {
    slur:  "Swap",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Italian/Mexican. Spic + Wop"
  },
  {
    slur:  "Sway",
    refers_to:  "Blacks",
    reason_and_origin:  "They tended to sway from trees back in the Civil War days."
  },
  {
    slur:  "Sweaty",
    refers_to:  "Blacks",
    reason_and_origin:  "Perception that blacks appear sweaty and greasy."
  },
  {
    slur:  "Sweaty Sock",
    refers_to:  "Scottish",
    reason_and_origin:  "Cockney rhyming slang -- Jock = Sweaty Sock"
  },
  {
    slur:  "Swedish Meatball",
    refers_to:  "Swedes",
    reason_and_origin:  "Greasy beef balls from Sweden."
  },
  {
    slur:  "Sweetback",
    refers_to:  "Blacks",
    reason_and_origin:  "Name of Black Pimp in Melvin Van Peebles movie who kills white police and gets away with it, common aspiration of black ghetto youths"
  },
  {
    slur:  "Swine",
    refers_to:  "Whites",
    reason_and_origin:  "Relates to the pink color of the pig's color. Tendency for the pig to lay in or eat anything. (Refers also to police men)"
  },
  {
    slur:  "Swinger",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks being hung"
  },
  {
    slur:  "Swirlie",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix."
  },
  {
    slur:  "Tab",
    refers_to:  "Asians",
    reason_and_origin:  "Trendy Asian Bitch. Self explanatory"
  },
  {
    slur:  "Tabeetsu",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Chinese. Means \"great-nosed ones\"."
  },
  {
    slur:  "Table Face",
    refers_to:  "Asians",
    reason_and_origin:  "They tend to have flat faces."
  },
  {
    slur:  "Taco",
    refers_to:  "Hispanics",
    reason_and_origin:  "Because they eat tacos."
  },
  {
    slur:  "Taco Bender",
    refers_to:  "Hispanics",
    reason_and_origin:  "Because they eat tacos."
  },
  {
    slur:  "Taco Jockey",
    refers_to:  "Mexicans",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Taco Nigger",
    refers_to:  "Hispanics",
    reason_and_origin:  "Because they eat tacos."
  },
  {
    slur:  "Taco Shell",
    refers_to:  "Whites",
    reason_and_origin:  "White women who sleep with Mexicans"
  },
  {
    slur:  "Tad Pole",
    refers_to:  "French",
    reason_and_origin:  "French baby"
  },
  {
    slur:  "Taffy",
    refers_to:  "Welsh",
    reason_and_origin:  "The Taff is the name of the river that runs through Cardiff, the capital of Wales. Also from a poem that starts: \"Taffy was a Welshman…"
  },
  {
    slur:  "Tagger",
    refers_to:  "Blacks",
    reason_and_origin:  "They often leave the tags on clothing."
  },
  {
    slur:  "Tai-chink",
    refers_to:  "Asians",
    reason_and_origin:  "Martial arts."
  },
  {
    slur:  "Taig",
    refers_to:  "Irish",
    reason_and_origin:  "Means \"hero\" in Gaelic. Used today as an insult by the Loyalist community in N Ireland."
  },
  {
    slur:  "Tailless Monkeys",
    refers_to:  "Filipinos",
    reason_and_origin:  "Americans who came to the Philippines at the end of the 19th century called Filipinos tailless monkeys because they were small, brown, an…"
  },
  {
    slur:  "Tamale",
    refers_to:  "Hispanics",
    reason_and_origin:  "A common latin American food."
  },
  {
    slur:  "Tans",
    refers_to:  "British",
    reason_and_origin:  "Refers to the criminal army the English sent into Ireland to rape, plunder, and terrorize the inhabitants. The uniform was made up o…"
  },
  {
    slur:  "TAP",
    refers_to:  "Americans",
    reason_and_origin:  "Typical American Prick"
  },
  {
    slur:  "TAP",
    refers_to:  "Taiwanese",
    reason_and_origin:  "Taiwanese American Princess"
  },
  {
    slur:  "Tape Head",
    refers_to:  "Asians",
    reason_and_origin:  "Facial characteristics--slanted eyes as if someone pulled back their eyes using Scotch tape around the back of their head."
  },
  {
    slur:  "Tar Baby",
    refers_to:  "Blacks",
    reason_and_origin:  "Skin color. From the \"Uncle Remus\" (Br'er Rabbit) story."
  },
  {
    slur:  "Taran",
    refers_to:  "Romanians",
    reason_and_origin:  "Equivalent to calling someone a redneck."
  },
  {
    slur:  "Target",
    refers_to:  "Iraqis",
    reason_and_origin:  "Gulf War related."
  },
  {
    slur:  "Target",
    refers_to:  "Indians",
    reason_and_origin:  "The dot on their head looks like a laser sight."
  },
  {
    slur:  "Taro",
    refers_to:  "Polynesians",
    reason_and_origin:  "They eat a hell of a lot of Taro. It's why they're so big"
  },
  {
    slur:  "Tater Tot",
    refers_to:  "Irish",
    reason_and_origin:  "Irish Child."
  },
  {
    slur:  "Taxi",
    refers_to:  "Asians",
    reason_and_origin:  "Taxis are yellow"
  },
  {
    slur:  "Taxi Driver",
    refers_to:  "Indians",
    reason_and_origin:  "The famous New York taxi drivers"
  },
  {
    slur:  "Tea-wop",
    refers_to:  "British",
    reason_and_origin:  "Tea-drinking immigrants."
  },
  {
    slur:  "Teabag",
    refers_to:  "British",
    reason_and_origin:  "British are said to drink a good deal of tea."
  },
  {
    slur:  "Ted Stevens",
    refers_to:  "Blacks",
    reason_and_origin:  "A brand of candied chocolate in England; Quite dull and worthless."
  },
  {
    slur:  "Tee-Pee Creeper",
    refers_to:  "Native Americans",
    reason_and_origin:  "Some live in tee-pees."
  },
  {
    slur:  "Termite",
    refers_to:  "Whites",
    reason_and_origin:  "Termites are typically white, pale, or clear."
  },
  {
    slur:  "Terr-ab",
    refers_to:  "Arabs",
    reason_and_origin:  "Short for terrorist-Arab"
  },
  {
    slur:  "Terrence",
    refers_to:  "Blacks",
    reason_and_origin:  "Likely comes from the black singer Terence Trent D'Arby, who claimed that his debut album was the most important album since \"Sgt. Pepper…"
  },
  {
    slur:  "Terrone",
    refers_to:  "Italians",
    reason_and_origin:  "Southern Italians. Any Italian living more south than Rome, very offensive, describes living standards and cultural differences from th…"
  },
  {
    slur:  "Terrorist",
    refers_to:  "Arabs",
    reason_and_origin:  "Self explanatory."
  },
  {
    slur:  "Test-Taker",
    refers_to:  "Asians",
    reason_and_origin:  "Asians are always taking standardized tests to further their education."
  },
  {
    slur:  "Tetris",
    refers_to:  "Russians",
    reason_and_origin:  "Popular video game which originated in Russia"
  },
  {
    slur:  "Tex-mex",
    refers_to:  "Mexicans",
    reason_and_origin:  "A person of hispanic lineage, hopefully Mexican, that is from Texas."
  },
  {
    slur:  "Texican",
    refers_to:  "Mexicans",
    reason_and_origin:  "Brown texans, usually illegal and doing drywall work. Technically: a Hispanic-American that lives in Texas"
  },
  {
    slur:  "Thank You Come Again",
    refers_to:  "Indians",
    reason_and_origin:  "A phrase made popular by stereotypical Indian convenience store owner Apu on The Simpsons."
  },
  {
    slur:  "The Element",
    refers_to:  "Blacks",
    reason_and_origin:  "Used in reference to minorities in terms of location. Example: This neighborhhod was nice until the element moved in. Not necessaril…"
  },
  {
    slur:  "The Missing Link",
    refers_to:  "Blacks",
    reason_and_origin:  "The oldest living black person in a community."
  },
  {
    slur:  "Thick Lips",
    refers_to:  "Blacks",
    reason_and_origin:  "Originates from Shakespeare's Othello"
  },
  {
    slur:  "Thick Mick",
    refers_to:  "Irish",
    reason_and_origin:  "Commonly used in England where Irish immigrants did much of the manual labour. Thick meaning stupid, Mick as an abbreviation of Michael, …"
  },
  {
    slur:  "Thief",
    refers_to:  "Blacks",
    reason_and_origin:  "Common stereotype"
  },
  {
    slur:  "Thin-Eyed",
    refers_to:  "Asians",
    reason_and_origin:  "In Russian \"uzko glaziye\" means \"thin eyed\" and is used for referring to all Far East Asians."
  },
  {
    slur:  "Thing-a-manigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Used when talking about a third(black) person you don't know."
  },
  {
    slur:  "Thirty-Six-Thirty (36-30)",
    refers_to:  "Blacks",
    reason_and_origin:  "The latitude line between slave and free states"
  },
  {
    slur:  "Thistle Arse",
    refers_to:  "Scottish",
    reason_and_origin:  "Emblem of the country. Apparently used by other United Kingdom Inhabitants"
  },
  {
    slur:  "Three-Fifth (3/5)",
    refers_to:  "Blacks",
    reason_and_origin:  "Same vain as Point-Six. In reference to the 3/5ths Compromise, where the US Gov't decided that slaves (Blacks) only counted as 3/5ths of …"
  },
  {
    slur:  "Thug",
    refers_to:  "Whites",
    reason_and_origin:  "Represents white ppl/teenagers or young adults that want to be black."
  },
  {
    slur:  "Thumper",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks listen to loud \"thumping\" music in their cars."
  },
  {
    slur:  "Tibbs",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to one of the cast members of \"In the Heat of the Night."
  },
  {
    slur:  "Tibla",
    refers_to:  "Russians",
    reason_and_origin:  "Ti blya. The slur roughly translates to: \"you, damn it\" or \"you, fucking..."
  },
  {
    slur:  "Tico",
    refers_to:  "Costa Ricans",
    reason_and_origin:  "Nickname, non-derogatory."
  },
  {
    slur:  "Tifuti",
    refers_to:  "Blacks",
    reason_and_origin:  "Black Brazilians. Word for \"niggar\" in Brazil, pronounced CHEE-foo-CHEE"
  },
  {
    slur:  "Tiger",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Thai/Black. Thai + nigger. An equivalent to eggplant. Originating from Tiger Woods racial heritage."
  },
  {
    slur:  "Tigger",
    refers_to:  "Blacks",
    reason_and_origin:  "A \"typical nigger"
  },
  {
    slur:  "Timber Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Similar to Prairie Nigger."
  },
  {
    slur:  "Tinty",
    refers_to:  "Asians",
    reason_and_origin:  "Their eyes are tinted, and can not be seen into, only out of. Also pertaining to Asian woman who sleep with numerous men in one night."
  },
  {
    slur:  "Tiny",
    refers_to:  "Asians",
    reason_and_origin:  "For their small stature (penis, etc)"
  },
  {
    slur:  "Tiny Tim",
    refers_to:  "Whites",
    reason_and_origin:  "Reference to White people supposedly having smaller penises."
  },
  {
    slur:  "Tipi Tom",
    refers_to:  "Native Americans",
    reason_and_origin:  "Combination if Tee-pee living and tom-tom usage."
  },
  {
    slur:  "Tira-flecha",
    refers_to:  "Latin Americans",
    reason_and_origin:  "Racial term mostly used by Cubans or White Hispanics referring to the Mestizo peoples (or mixed Indian/Spanish) of Central or South americ…"
  },
  {
    slur:  "Tire-Hugger",
    refers_to:  "Mexicans",
    reason_and_origin:  "Method used to cross Rio Grande, floating on inner tubes and tires."
  },
  {
    slur:  "Tizzun",
    refers_to:  "Blacks",
    reason_and_origin:  "Neapolitan derogatory term for black person."
  },
  {
    slur:  "TNT",
    refers_to:  "Filipinos",
    reason_and_origin:  "Tago Nang Tago\" It's a filipino thats an illegal alien. Translates to \"hides and hides\" (from the I.N.S.)"
  },
  {
    slur:  "Toad",
    refers_to:  "French",
    reason_and_origin:  "Frog-related, see: frog."
  },
  {
    slur:  "Toad",
    refers_to:  "Blacks",
    reason_and_origin:  "In prison, this is a widely used word for blacks."
  },
  {
    slur:  "Toboggan",
    refers_to:  "Trinidadians",
    reason_and_origin:  "Play on quiet rivalry between Trinidad and Tobago"
  },
  {
    slur:  "Toby",
    refers_to:  "Blacks",
    reason_and_origin:  "Reference to the character in \"Roots."
  },
  {
    slur:  "Toilet Swimmer",
    refers_to:  "Blacks",
    reason_and_origin:  "When sitting on the toilet, reference to large genetalia"
  },
  {
    slur:  "Tojo",
    refers_to:  "Japanese",
    reason_and_origin:  "General Hideki Tojo, Japanese Prime Minister during WW2. Ordered the attack on Pearl Harbor."
  },
  {
    slur:  "Token",
    refers_to:  "Blacks",
    reason_and_origin:  "Indicates that a person is unqualified for his/her position and received it on racial grounds. One of the two black characters on the sho…"
  },
  {
    slur:  "Tokenbump",
    refers_to:  "Blacks",
    reason_and_origin:  "For blacks that ride in hoopties with loud systems and smoke marijuana"
  },
  {
    slur:  "Tom Robinson",
    refers_to:  "Blacks",
    reason_and_origin:  "Black criminals. Comes from \"To Kill a Mockingbird"
  },
  {
    slur:  "Tomahawk-Chucker",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Tomahonky",
    refers_to:  "Native Americans",
    reason_and_origin:  "Normally refers to whites with a Native American heritage. Combo of tomahawk + honky"
  },
  {
    slur:  "Tomato Picker",
    refers_to:  "Hispanics",
    reason_and_origin:  "Hispanics pick tomatoes."
  },
  {
    slur:  "Tommy",
    refers_to:  "British",
    reason_and_origin:  "Tommy Atkins was a fictional soldier used to represent all British soldiers for morale purposes durin…"
  },
  {
    slur:  "Tonk",
    refers_to:  "Mexicans",
    reason_and_origin:  "Illegal Mexican immigrants. \"Tonk\" is the sound that is made when the illegals are hit over the head with the large flashlights/batons tha…"
  },
  {
    slur:  "Tonto",
    refers_to:  "Native Americans",
    reason_and_origin:  "Native American character from The Lone Ranger. Spanish for \"Idiot"
  },
  {
    slur:  "Tony",
    refers_to:  "Italians",
    reason_and_origin:  "Started when there was a big Italian emigration to the U.S. Their Luggage would say \"TO NY\" (New York)."
  },
  {
    slur:  "Tony Soprano",
    refers_to:  "Italians",
    reason_and_origin:  "Suggests that all Italians are in the mob"
  },
  {
    slur:  "Tootsie Rolls",
    refers_to:  "Blacks",
    reason_and_origin:  "Black children. Tootsie rolls are small and brown."
  },
  {
    slur:  "Tornado Bait",
    refers_to:  "Whites",
    reason_and_origin:  "Refering to trailer trash conmonly hit by tornadoes"
  },
  {
    slur:  "Tory",
    refers_to:  "Irish",
    reason_and_origin:  "Bandit, from the Irish Tory Island, a noted have for bandits and pirates. Also common slang term for a member of Canada's Conservativ…"
  },
  {
    slur:  "Toubob",
    refers_to:  "Whites",
    reason_and_origin:  "Toubob\" was the Mandika word for whites in the novel \"Roots"
  },
  {
    slur:  "Toucan Sam",
    refers_to:  "Jews",
    reason_and_origin:  "Toucans have large, protruding beaks"
  },
  {
    slur:  "Tounge-Clicker",
    refers_to:  "Blacks",
    reason_and_origin:  "The Language for som African Peoples involves clicking of the tounge"
  },
  {
    slur:  "Towel-head",
    refers_to:  "Arabs",
    reason_and_origin:  "Referring to a popular Muslim headdress. Also: Rag-head."
  },
  {
    slur:  "Towlie",
    refers_to:  "Arabs",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "TP",
    refers_to:  "Pakistanis",
    reason_and_origin:  "Means Typical Paki. Insult used by western born Pakistanis against other Pakistanis who are acting like they are \"straight off the boat"
  },
  {
    slur:  "TPT",
    refers_to:  "Whites",
    reason_and_origin:  "Short for \"trailer park trash."
  },
  {
    slur:  "Trail Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Trailer Trash",
    refers_to:  "Whites",
    reason_and_origin:  "Similar to \"White Trash\" but only used for lower-class Whites who live in trailer parks."
  },
  {
    slur:  "Trash",
    refers_to:  "Whites",
    reason_and_origin:  "Self-explanatory. Usually used as \"White trash,\" \"Poor white trash,\" or \"Trailer trash."
  },
  {
    slur:  "Tree Hockey",
    refers_to:  "Blacks",
    reason_and_origin:  "Used by hockey players to make fun of blacks playing basketball."
  },
  {
    slur:  "Tree Ornament",
    refers_to:  "Blacks",
    reason_and_origin:  "Hanging reference."
  },
  {
    slur:  "Tree-Jumper",
    refers_to:  "Blacks",
    reason_and_origin:  "Mike Tyson in an interview referred to others calling him a \"tree jumper\", obviously because monkeys in the jungle jump between trees i…"
  },
  {
    slur:  "Tree-Looper",
    refers_to:  "Whites",
    reason_and_origin:  "Rednecks are commonly known for incest, thus 'looping' the family tree"
  },
  {
    slur:  "Tree-Swinger",
    refers_to:  "Blacks",
    reason_and_origin:  "Either from monkeys or the victim of a lynching."
  },
  {
    slur:  "Triad",
    refers_to:  "Asians",
    reason_and_origin:  "The Asian mob based out of Macao is called the Triad."
  },
  {
    slur:  "Triathlete",
    refers_to:  "Mexicans",
    reason_and_origin:  "Mexicans that can run, jump, or swim are already in the US."
  },
  {
    slur:  "Trigger",
    refers_to:  "Blacks",
    reason_and_origin:  "Rerence to high murder rate. Sounds like Nigger"
  },
  {
    slur:  "Tripod",
    refers_to:  "Blacks",
    reason_and_origin:  "Stereotypical large penises"
  },
  {
    slur:  "Triscuit",
    refers_to:  "Whites",
    reason_and_origin:  "White trash so bad they are worse than a cracker"
  },
  {
    slur:  "Trisket",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/White; A brown cracker."
  },
  {
    slur:  "Trog",
    refers_to:  "Whites",
    reason_and_origin:  "Used by Police in relation to unemployed whites. Short for Troglodyte or \"cave dweller."
  },
  {
    slur:  "Tsinker",
    refers_to:  "Thais",
    reason_and_origin:  "They can't swim"
  },
  {
    slur:  "Tuft",
    refers_to:  "Greeks",
    reason_and_origin:  "Many Greeks wear their hair high on the front of their head, apparently because they use it for protection when in a fight"
  },
  {
    slur:  "Tuna",
    refers_to:  "Portuguese",
    reason_and_origin:  "Portuguese in San Diego worked principally as tuna fishermen."
  },
  {
    slur:  "Tundra Nigger",
    refers_to:  "Native Americans",
    reason_and_origin:  "same as prarie nigger, but Eskimos are a different species of animal than Indians."
  },
  {
    slur:  "Tunnel Digger",
    refers_to:  "Vietnamese",
    reason_and_origin:  "They used to dig foxholes and tunnels in Vietnam to kill American soldiers."
  },
  {
    slur:  "Tunnel Rat",
    refers_to:  "Vietnamese",
    reason_and_origin:  "They used to dig interconnected series of tunnels through which they would live."
  },
  {
    slur:  "Tupperware Head",
    refers_to:  "Austrians",
    reason_and_origin:  "Related to slur \"Boxhead\" for Germans.. it's a slightly more efficient and cleaner version of a box."
  },
  {
    slur:  "Turbinator",
    refers_to:  "Indians",
    reason_and_origin:  "Seekh Indians wear turbans because their religion dictates that they may not cut hair"
  },
  {
    slur:  "Turco",
    refers_to:  "Arabs",
    reason_and_origin:  "Used primarily in Spanish-speaking countries, and South America in particular as a derogatory term for people of Arabic descent. It mean…"
  },
  {
    slur:  "Turf-Cutter",
    refers_to:  "Irish",
    reason_and_origin:  "Turf is peat moss, found in deep layers in Ireland. It was originally cut by most Irish farmers and used as fuel (an early form of coal).…"
  },
  {
    slur:  "Turkey",
    refers_to:  "Whites",
    reason_and_origin:  "Turkey is white meat"
  },
  {
    slur:  "Turkey Sandwich",
    refers_to:  "Turkish",
    reason_and_origin:  "Self-explanitory."
  },
  {
    slur:  "Turkish Axe",
    refers_to:  "Turks",
    reason_and_origin:  "Brand of deodorant. Greeks use this word for Turks as many of them they usually don't take a bath for days. They mostly use this deodoran…"
  },
  {
    slur:  "Turtleneck",
    refers_to:  "French",
    reason_and_origin:  "Many of the French are uncircumcised."
  },
  {
    slur:  "Tuskan Raider",
    refers_to:  "Arabs",
    reason_and_origin:  "Inspired by Star Wars, they are the sand people with the spears."
  },
  {
    slur:  "Tusken",
    refers_to:  "Somalians",
    reason_and_origin:  "Star Wars reference to the Tuscan Raiders, nomadic desert dwellers that no one likes."
  },
  {
    slur:  "Tusken Raider",
    refers_to:  "Arabs",
    reason_and_origin:  "Sand people in Star Wars"
  },
  {
    slur:  "Tutsoon/Tootsoon",
    refers_to:  "Blacks",
    reason_and_origin:  "Origins in Chicago (particularly Italians)."
  },
  {
    slur:  "Twink",
    refers_to:  "Taiwanese",
    reason_and_origin:  "Similar to \"chink"
  },
  {
    slur:  "Twinkie",
    refers_to:  "Asians",
    reason_and_origin:  "An Asian-American who has lost their heritage. Yellow on the outside, white on the inside."
  },
  {
    slur:  "Twister Fodder",
    refers_to:  "Americans",
    reason_and_origin:  "Many Midwesterners live in \"Tornado Alley,\" which is known for having a disproportionate number of tornados every year."
  },
  {
    slur:  "Two Stroke",
    refers_to:  "Asians",
    reason_and_origin:  "Eyes look like 2 strokes"
  },
  {
    slur:  "TWO-TONE",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Tycoon",
    refers_to:  "Blacks",
    reason_and_origin:  "A black man from Thailand"
  },
  {
    slur:  "Tyrone",
    refers_to:  "Blacks",
    reason_and_origin:  "Popular Black name"
  },
  {
    slur:  "Tyvek",
    refers_to:  "Blacks",
    reason_and_origin:  "Refers to unusual names given to many black men; actually, a material used by Du Pont for large mailing envelopes."
  },
  {
    slur:  "Ubangi",
    refers_to:  "Blacks",
    reason_and_origin:  "A river in Africa."
  },
  {
    slur:  "Uda",
    refers_to:  "Spanish",
    reason_and_origin:  "Spanish accordion player. Origins unknown, thought to come from Philadelphia area."
  },
  {
    slur:  "UFO",
    refers_to:  "Asians",
    reason_and_origin:  "Ugly Fucking Oriental."
  },
  {
    slur:  "Uke",
    refers_to:  "Ukrainians",
    reason_and_origin:  "Short form of Ukrainian, not derogatory, commonly used by Ukrainians to refer to themselves or one another."
  },
  {
    slur:  "Ukey",
    refers_to:  "Ukrainians",
    reason_and_origin:  "Name which they call one another, when others call them this it is derogratory similar if a non-Black calls a Black nigger"
  },
  {
    slur:  "Umlungu",
    refers_to:  "Whites",
    reason_and_origin:  "Zulus called whites this, meaning the white scum that forms in the surf."
  },
  {
    slur:  "Uncle Ben",
    refers_to:  "Blacks",
    reason_and_origin:  "Black man on the famous rice box."
  },
  {
    slur:  "Uncle Ben's Boys",
    refers_to:  "Vietnamese",
    reason_and_origin:  "From the Vietnam War, referring to Vietnamese soldiers, due to large number of rice patties."
  },
  {
    slur:  "Uncle Daddy",
    refers_to:  "Whites",
    reason_and_origin:  "Rumors of inbreeding in the Appalachians."
  },
  {
    slur:  "Uncle Scam",
    refers_to:  "Americans",
    reason_and_origin:  "In reference to Uncle Sam but with America's bad reputation"
  },
  {
    slur:  "Uncle Tom",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks who suck up to white people. In reference to the Uncle Tom character in the famous 1852 book \"Uncle Tom's Cabin\" by Harriet Beeche…"
  },
  {
    slur:  "Underbite",
    refers_to:  "Koreans",
    reason_and_origin:  "Koreans are said to have large underbites."
  },
  {
    slur:  "Unemployus Africanus",
    refers_to:  "Blacks",
    reason_and_origin:  "Genus & species. Scientific name. self explanatory"
  },
  {
    slur:  "Uni-brow",
    refers_to:  "Greeks",
    reason_and_origin:  "They tend to have hairy the eyebrows that often meet and appear as one. Also applies to some Italians."
  },
  {
    slur:  "Upsurt",
    refers_to:  "Bulgarians",
    reason_and_origin:  "This is how Bulgarians pronounce the word \"Absurd\". It is also a popular Bulgarian rap-group."
  },
  {
    slur:  "Urban Turban",
    refers_to:  "Arabs",
    reason_and_origin:  "Arab who tries to act black"
  },
  {
    slur:  "Urkel",
    refers_to:  "Blacks",
    reason_and_origin:  "Nerdy Blacks. Character from \"Family Matters\" TV show."
  },
  {
    slur:  "Uzbek",
    refers_to:  "Asians",
    reason_and_origin:  "Armenian word for people with slanted eyes."
  },
  {
    slur:  "Vacuum Cleaner",
    refers_to:  "Blacks",
    reason_and_origin:  "Their noses represent a vacuum. Also used because they \"vacuum up\" much cocaine."
  },
  {
    slur:  "Vamp",
    refers_to:  "Whites",
    reason_and_origin:  "Possibly the lack of melanin resembles the pale skin of a vampire. Another reason could be vampires need blood, and whites tend to loo…"
  },
  {
    slur:  "Vanilla",
    refers_to:  "Whites",
    reason_and_origin:  "Originates from vanilla ice cream and the white pop star Vanilla Ice."
  },
  {
    slur:  "Vanilla Asian",
    refers_to:  "Russians",
    reason_and_origin:  "They are white Asians"
  },
  {
    slur:  "Vanilla Coke",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people with white personalities."
  },
  {
    slur:  "Vanilla Gorilla",
    refers_to:  "Blacks",
    reason_and_origin:  "A black guy who acts white. Used mostly to describe unathletic blacks, who, according to stereotypes, should be naturally good at sports"
  },
  {
    slur:  "Vanilla Ice",
    refers_to:  "Whites",
    reason_and_origin:  "In reference to the singer Vanilla Ice."
  },
  {
    slur:  "Vato",
    refers_to:  "Mexicans",
    reason_and_origin:  "Originates from Chicano slang. In Spanish it means \"guy\". Can be compared with \"dude\"."
  },
  {
    slur:  "VC",
    refers_to:  "Asians",
    reason_and_origin:  "Term used to describe \"Viet Cong\" during the Vietnam War. Often used now to group all Asians as the enemy or as untrustworthy."
  },
  {
    slur:  "Vegemite",
    refers_to:  "Australian Aboriginals",
    reason_and_origin:  "Aboriginal skin colour resembles popular Australian sandwich spread"
  },
  {
    slur:  "Velcro-head",
    refers_to:  "Blacks",
    reason_and_origin:  "Characteristics of the hair."
  },
  {
    slur:  "Verbes",
    refers_to:  "Romanians",
    reason_and_origin:  "Transylvanian Saxon slur for Romanians"
  },
  {
    slur:  "Viceroy",
    refers_to:  "Japanese",
    reason_and_origin:  "From Star Wars Episode One, trade federation people have similiar characteristics of Japanese buisness men."
  },
  {
    slur:  "Victor Charlie",
    refers_to:  "Vietnamese",
    reason_and_origin:  "From the Vietnam War. US Military radio code breakdown for \"Vietcong"
  },
  {
    slur:  "Viet Cong",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Self Explanatory"
  },
  {
    slur:  "Vike",
    refers_to:  "Scandinavians",
    reason_and_origin:  "Vike is short for \"viking\". The Vikings were the warrior class of the ancient Scandinavians"
  },
  {
    slur:  "Viking",
    refers_to:  "Norwegians",
    reason_and_origin:  "Self explanatory"
  },
  {
    slur:  "Vinegar",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/Vietnamese. (Vi-nigger)"
  },
  {
    slur:  "Vink",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Adaptation of Chinese 'chink' for Vietnamese"
  },
  {
    slur:  "Vinny Del",
    refers_to:  "Blacks",
    reason_and_origin:  "Vinny del Negro was a basketball player"
  },
  {
    slur:  "Vlade",
    refers_to:  "Serbs",
    reason_and_origin:  "Vlade Divac from the Lakers and Kings"
  },
  {
    slur:  "Vlah",
    refers_to:  "Serbs",
    reason_and_origin:  "Stayed behind for 500 years. Vlah's are now extinct but the saying still stuck with the Serbs who replaced them."
  },
  {
    slur:  "Vodka Nigger",
    refers_to:  "Russians",
    reason_and_origin:  "They like to drink Vodka"
  },
  {
    slur:  "Vodkalky",
    refers_to:  "Russians",
    reason_and_origin:  "Vodka + alcoholics. Plural: Vodkalkies."
  },
  {
    slur:  "Volkswagen",
    refers_to:  "Germans",
    reason_and_origin:  "Self explanatory."
  },
  {
    slur:  "Voodoo",
    refers_to:  "Blacks",
    reason_and_origin:  "Stereotypical thought of blacks using voodoo."
  },
  {
    slur:  "Voons",
    refers_to:  "Hatians",
    reason_and_origin:  "Hatians in New Orleans, practice alot of voodoo. Voodoo + Coon"
  },
  {
    slur:  "W.O.G.",
    refers_to:  "Hispanics",
    reason_and_origin:  "Those who worked on the suez canal project would wear a uniform which had Working On Government (project) on it. Typically used to describ…"
  },
  {
    slur:  "Wab",
    refers_to:  "Hispanics",
    reason_and_origin:  "Short for Wet-Back. See: Wet-Back."
  },
  {
    slur:  "Wadie",
    refers_to:  "Mexicans",
    reason_and_origin:  "The Rio Grande is so shallow now that illegals just have to wade across."
  },
  {
    slur:  "Wadjyla",
    refers_to:  "Whites",
    reason_and_origin:  "Mainly used by the \"Nyoongar\" Aboriginal people of south-west Australia. Pronounced \"wad-jah-lah."
  },
  {
    slur:  "Waffle",
    refers_to:  "Belgians",
    reason_and_origin:  "Belgian waffles."
  },
  {
    slur:  "Wagon-Burner",
    refers_to:  "Native Americans",
    reason_and_origin:  "They burnt wagons"
  },
  {
    slur:  "Wahoo",
    refers_to:  "Native Americans",
    reason_and_origin:  "War Cry, there was also a famous Native American wrestler named Wahoo McDaniel in the 80's."
  },
  {
    slur:  "Wailer",
    refers_to:  "Jamaicans",
    reason_and_origin:  "Comes from Bob Marley and the Wailers"
  },
  {
    slur:  "Waki",
    refers_to:  "Pakistanis",
    reason_and_origin:  "Pakistanis who try to act white"
  },
  {
    slur:  "Waki Paki",
    refers_to:  "Pakistanis",
    reason_and_origin:  "Wacky Pakistanis."
  },
  {
    slur:  "Walking Carpet",
    refers_to:  "Armenians",
    reason_and_origin:  "Most Armenians are hairy"
  },
  {
    slur:  "Wallione",
    refers_to:  "Italians",
    reason_and_origin:  "In addressing a fellow Italian, but condescending when used by non-Italians"
  },
  {
    slur:  "WAM",
    refers_to:  "Whites",
    reason_and_origin:  "White American Male"
  },
  {
    slur:  "Wandering Jew",
    refers_to:  "Jews",
    reason_and_origin:  "The jews wandered the desert for 40 years after crossing the red sea to get out of egypt, before reaching the holy-land."
  },
  {
    slur:  "Wang Chung",
    refers_to:  "Asians",
    reason_and_origin:  "Represents a typical Asian name. Also a British new wave band in the 80's famous for their song \"Everybody Have Fun Tonight\" with th…"
  },
  {
    slur:  "Wanian",
    refers_to:  "Lithuanians",
    reason_and_origin:  "Typically refers to Lithuanians who have recently moved to North America, or sometimes Lithuanians still living in the old country. No…"
  },
  {
    slur:  "Wanker",
    refers_to:  "British",
    reason_and_origin:  "Implies that the addresser is accusing the addressee of self-gratification."
  },
  {
    slur:  "Wankster",
    refers_to:  "Whites",
    reason_and_origin:  "A white person acting as a gangster."
  },
  {
    slur:  "WAP",
    refers_to:  "Whites",
    reason_and_origin:  "Means \"White American Princess\". Arrogant female whites who flaunt their money around and demand the finest things in life."
  },
  {
    slur:  "Wapanese",
    refers_to:  "Whites",
    reason_and_origin:  "Used to describe a white person who is obssesed with japanese culture. This would include manga/hentai/and anime."
  },
  {
    slur:  "War Whoop",
    refers_to:  "Native Americans",
    reason_and_origin:  "Refers to the traditional Native American war cry."
  },
  {
    slur:  "Washisho",
    refers_to:  "Whites",
    reason_and_origin:  "Pronounced Wa-She-Shoo; is a typical reservation slur for Native Americans to use when talking about white people in a derogatory manner."
  },
  {
    slur:  "Wasian",
    refers_to:  "Whites",
    reason_and_origin:  "Combination of \"wigger\" and \"Asian\". Refers to White people who are infatuated with Asian culture and society. Usually in reference t…"
  },
  {
    slur:  "Wasp",
    refers_to:  "Whites",
    reason_and_origin:  "Stands for \"White Anglo-Saxon Protestant.\" Refers to \"Pure whites."
  },
  {
    slur:  "Water Buffalo",
    refers_to:  "Blacks",
    reason_and_origin:  "Originally meant for noisy people but gained notoriety when a Jewish University of Pennsylvania student used it to describe members of …"
  },
  {
    slur:  "Watermelon",
    refers_to:  "Blacks",
    reason_and_origin:  "For their fondness for watermelon. Used in the movie \"48 Hours\"."
  },
  {
    slur:  "Watermelon",
    refers_to:  "Guatemalans",
    reason_and_origin:  "Words sound alike."
  },
  {
    slur:  "Waverunner",
    refers_to:  "Asians",
    reason_and_origin:  "Reference to the 2004 tsunami."
  },
  {
    slur:  "Wayans",
    refers_to:  "Blacks",
    reason_and_origin:  "The whole \"Wayans\" family was on In Living Color"
  },
  {
    slur:  "Weaner",
    refers_to:  "Whites",
    reason_and_origin:  "Short for White Beaner (like wigger). Refers to a white guy that acts like a beaner."
  },
  {
    slur:  "Webe",
    refers_to:  "Blacks",
    reason_and_origin:  "Pronounced \"we be\", this refers to the inability of most blacks to conjugate the \"be\" verb, thus resulting in \"we be\" instead of \"we are…"
  },
  {
    slur:  "Weegie",
    refers_to:  "Norwegians",
    reason_and_origin:  "A shortening of Norwegian"
  },
  {
    slur:  "Weegie",
    refers_to:  "Scottish",
    reason_and_origin:  "A derogatory term used by Edinburgh people for Glasgow people. Comes from Glaswegians. The collective noun for people from Glasgow…"
  },
  {
    slur:  "Wegro",
    refers_to:  "Whites",
    reason_and_origin:  "Same as wigger."
  },
  {
    slur:  "Wej",
    refers_to:  "Jews",
    reason_and_origin:  "Jew spelled backwards."
  },
  {
    slur:  "Welfare Monkey",
    refers_to:  "Blacks",
    reason_and_origin:  "See Welfare Mother."
  },
  {
    slur:  "Welfare Mother",
    refers_to:  "Blacks",
    reason_and_origin:  "Common stereotype representing that large, black, single-parent families are disproportionately represented on welfare rolls."
  },
  {
    slur:  "Welsher",
    refers_to:  "Welsh",
    reason_and_origin:  "Supposedly dates from the 19th Century when the English government decided that all Welsh children should speak English in school. An…"
  },
  {
    slur:  "Wet Dog",
    refers_to:  "Whites",
    reason_and_origin:  "When white people sweat/get wet, they smell like wet dogs."
  },
  {
    slur:  "Wetback",
    refers_to:  "Mexicans",
    reason_and_origin:  "Comes from \"Operation Wetback\", a military operation devised in 1954 to stop the onslaught of illegal aliens entering the United States…"
  },
  {
    slur:  "WetBlack",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Mexican/Black mix"
  },
  {
    slur:  "Wetvac",
    refers_to:  "Mexicans",
    reason_and_origin:  "A play on wetback. Many Mexicans who have illegaly entered the country take cleaning jobs."
  },
  {
    slur:  "Wexican",
    refers_to:  "Mixed Races",
    reason_and_origin:  "White/Mexican mix."
  },
  {
    slur:  "Whack",
    refers_to:  "Whites",
    reason_and_origin:  "Combination of white and black. Whites who act black."
  },
  {
    slur:  "Whacky Iraqi",
    refers_to:  "Iraqis",
    reason_and_origin:  "When the U.S. drops the bomb, they go nuts"
  },
  {
    slur:  "Whale Turd",
    refers_to:  "Blacks",
    reason_and_origin:  "Derived from the joke - Q. What do you call a black in the ocean? A. A whale turd."
  },
  {
    slur:  "Wheat Thin",
    refers_to:  "Whites",
    reason_and_origin:  "Represents skinny white women with a tan."
  },
  {
    slur:  "Whipping Post",
    refers_to:  "Blacks",
    reason_and_origin:  "Black people were whipped while they were slaves."
  },
  {
    slur:  "Whiskey Tango",
    refers_to:  "Whites",
    reason_and_origin:  "White trash in the military"
  },
  {
    slur:  "White Chocolate",
    refers_to:  "Whites",
    reason_and_origin:  "Whites who try to act like Blacks."
  },
  {
    slur:  "White Devil",
    refers_to:  "Whites",
    reason_and_origin:  "This was and still is used by Black Muslims, who believe whites are spawns of the devil. Malcolm X used this slur."
  },
  {
    slur:  "White Eye",
    refers_to:  "Whites",
    reason_and_origin:  "Term used by Indians in the late 1800's to describe white settlers."
  },
  {
    slur:  "White Nigger",
    refers_to:  "Irish",
    reason_and_origin:  "Blacks called Irish Americans this during the 1800's in retaliation to being called \"Nagurs"
  },
  {
    slur:  "White Out",
    refers_to:  "Whites",
    reason_and_origin:  "Used by non-whites describing places uncomfortably too white"
  },
  {
    slur:  "White Wall",
    refers_to:  "Blacks",
    reason_and_origin:  "White wall tires have a thin line of white. Used for blacks who pretend to be white."
  },
  {
    slur:  "White-wash",
    refers_to:  "Mixed Races",
    reason_and_origin:  "To be White-washed is to lose all culture after coming to the United States; also \"bleached."
  },
  {
    slur:  "Whitebread",
    refers_to:  "Whites",
    reason_and_origin:  "Self-explanatory"
  },
  {
    slur:  "Whiteflagger",
    refers_to:  "French",
    reason_and_origin:  "Comes from the French surrendering (whiteflagging) many wars"
  },
  {
    slur:  "Whitetrash",
    refers_to:  "Whites",
    reason_and_origin:  "Lower class whites. Self-explanatory."
  },
  {
    slur:  "Whitey",
    refers_to:  "Whites",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Whopper",
    refers_to:  "Italians",
    reason_and_origin:  "Basically the idea of a WOP but in a more easily said slur"
  },
  {
    slur:  "Whose My Daddy?",
    refers_to:  "Blacks",
    reason_and_origin:  "Common question among black children."
  },
  {
    slur:  "Wic",
    refers_to:  "Whites",
    reason_and_origin:  "White Irish Catholic'"
  },
  {
    slur:  "Widescreen",
    refers_to:  "Asians",
    reason_and_origin:  "They see only widscreen vision because their eyes are typically wider than taller."
  },
  {
    slur:  "Wigger",
    refers_to:  "Whites",
    reason_and_origin:  "Affluent suburban white kids who dress, talk and act like they were brought up in the ghetto."
  },
  {
    slur:  "Wiggerette",
    refers_to:  "Whites",
    reason_and_origin:  "Same as Wigger only for women."
  },
  {
    slur:  "Wiggie/Wigg",
    refers_to:  "Non-Whites",
    reason_and_origin:  "Non-Whites who date only Whites or have a strong preference for whites. Stands for \"white guy groupie\" or \"white girl groupie"
  },
  {
    slur:  "Wigglet",
    refers_to:  "Whites",
    reason_and_origin:  "Young whites that think they are black."
  },
  {
    slur:  "Wikki Wikki",
    refers_to:  "Blacks",
    reason_and_origin:  "DJ turntable scratching noise, often heard in rap music."
  },
  {
    slur:  "Windchimes",
    refers_to:  "Blacks",
    reason_and_origin:  "A common practice of southerners was to hang blacks. When the wind blew and swung them back and forth against each other southerners woul…"
  },
  {
    slur:  "Windian",
    refers_to:  "Whites",
    reason_and_origin:  "White people who try to act like they're Indian"
  },
  {
    slur:  "Windmill Winder",
    refers_to:  "Dutch",
    reason_and_origin:  "They got lots of windmills"
  },
  {
    slur:  "Wink",
    refers_to:  "Whites",
    reason_and_origin:  "White person trying to be like or associates with Chinese."
  },
  {
    slur:  "Winkle",
    refers_to:  "Whites",
    reason_and_origin:  "Robert Van Winkle (aka Vanilla Ice)"
  },
  {
    slur:  "Winky",
    refers_to:  "Asians",
    reason_and_origin:  "Eyes reference"
  },
  {
    slur:  "Wog",
    refers_to:  "Asians",
    reason_and_origin:  "Abbreviation of either \"White-\", \"Westernised-\" or \"Worthy-Oriental Gentleman.\" Originally intended as a term denoting respect. In commo…"
  },
  {
    slur:  "Wog",
    refers_to:  "Greeks",
    reason_and_origin:  "Originated from the cheap labour sent to Australia to work on Government project in return for citizenship back around the 1940-1960's…"
  },
  {
    slur:  "Wog",
    refers_to:  "Indians",
    reason_and_origin:  "British Imperialists commonly referred to Indians as a \"WOG\" since they were commonly used as security, it stood for \"Warden on Guard\"."
  },
  {
    slur:  "Wog",
    refers_to:  "Blacks",
    reason_and_origin:  "British, short for Golliwogg, a stuffed doll that mimicked Blacks. Recently was dropped (ref) as the logo used on jars of Robertson's jam…"
  },
  {
    slur:  "Woggle",
    refers_to:  "Asians",
    reason_and_origin:  "Variation of Wog"
  },
  {
    slur:  "Won Ton",
    refers_to:  "Whites",
    reason_and_origin:  "A white person who wants to be asian"
  },
  {
    slur:  "Won Ton Parmesan",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Asian/Italian mix"
  },
  {
    slur:  "Wonder Bread",
    refers_to:  "Whites",
    reason_and_origin:  "Wonder Bread is white."
  },
  {
    slur:  "Wonder Bread Wop",
    refers_to:  "Italians",
    reason_and_origin:  "Used by Italians to describe Italians who are more assimilated into \"North American\" culture."
  },
  {
    slur:  "Wood",
    refers_to:  "Whites",
    reason_and_origin:  "Short for Peckerwood."
  },
  {
    slur:  "Woodies",
    refers_to:  "Dutch",
    reason_and_origin:  "They're known to wear wooden shoes"
  },
  {
    slur:  "Wookie",
    refers_to:  "Blacks",
    reason_and_origin:  "In reference to the big brown Chewbacca the Wookie"
  },
  {
    slur:  "Wool Head",
    refers_to:  "Blacks",
    reason_and_origin:  "Self-explanatory."
  },
  {
    slur:  "Woolie Jumpers",
    refers_to:  "New Zealanders",
    reason_and_origin:  "Implies that New Zealanders enjoy 'jumping' sheep."
  },
  {
    slur:  "Woolyback",
    refers_to:  "Welsh",
    reason_and_origin:  "NW England origins. Lots of sheep in Wales."
  },
  {
    slur:  "WOP",
    refers_to:  "Italians",
    reason_and_origin:  "High class Italian. Stands for \"With Out Papers.\" Started when there was a big Italian emigration to the U.S., and many were coming i…"
  },
  {
    slur:  "WOPaho",
    refers_to:  "Native Americans",
    reason_and_origin:  "Any person claiming to be part Navaho Indian, but are without papers or pedigree showing it. Similar To Wigger In Some Respects. A coupl…"
  },
  {
    slur:  "Wopalock",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Italian/Polish mix -- Wop + Polock"
  },
  {
    slur:  "Wopski",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Italian/Polish mix"
  },
  {
    slur:  "Wound",
    refers_to:  "Whites",
    reason_and_origin:  "Used when Native Americans and Blacks describing Whites whom they see as hurting them many times in present and past and represent a…"
  },
  {
    slur:  "WT",
    refers_to:  "Whites",
    reason_and_origin:  "White Trash."
  },
  {
    slur:  "WTT",
    refers_to:  "Whites",
    reason_and_origin:  "White Trailer Trash"
  },
  {
    slur:  "Xarnego",
    refers_to:  "Spanish",
    reason_and_origin:  "Originally meaning people whose ancestors came from different parts of Catalonia, and later Spanish-speaking people that migrated int…"
  },
  {
    slur:  "Yahoodi",
    refers_to:  "Jews",
    reason_and_origin:  "The word 'Jew' in Arabic."
  },
  {
    slur:  "Yak",
    refers_to:  "Bosnians",
    reason_and_origin:  "Bosniak shortened to yak, also associated with their smell."
  },
  {
    slur:  "Yakoo",
    refers_to:  "Whites",
    reason_and_origin:  "From a Christ Rock skit on Saturday Night Live where he bemoans lack of racist terms for whites"
  },
  {
    slur:  "Yaku",
    refers_to:  "Whites",
    reason_and_origin:  "1960's Black Panther slang. Still used today"
  },
  {
    slur:  "Yam",
    refers_to:  "Blacks",
    reason_and_origin:  "Term used extensively by the military in Robert O'Connors novel \"Buffalo Soldiers\" about US Soldiers stationed in Germany. Originate…"
  },
  {
    slur:  "Yam",
    refers_to:  "Amish",
    reason_and_origin:  "Refers to the sound of the Pennsylvania Dutch dialect"
  },
  {
    slur:  "Yan Kwi Ze/Yang Gui Zi",
    refers_to:  "Whites",
    reason_and_origin:  "White Westerner (esp. British), often preceded by \"chow\" (stinky) or \"si\" (goddamned)."
  },
  {
    slur:  "Yang Guizi",
    refers_to:  "Whites",
    reason_and_origin:  "Mandarin Chinese: \"Foreign Devil\" pronounced: yahng GWAY zi"
  },
  {
    slur:  "Yangmo",
    refers_to:  "Asians",
    reason_and_origin:  "Generic term representing any Asian group without having to identify country of origin."
  },
  {
    slur:  "Yank",
    refers_to:  "Americans",
    reason_and_origin:  "A more commonly used derivative of Yankee, used by pretty much every other English speaking country in the world. It is usually derogatory…"
  },
  {
    slur:  "Yankee",
    refers_to:  "Americans",
    reason_and_origin:  "Slang used primarily by the British. Also used in the former Confederate states to refer to people of the Union states. Origins can b…"
  },
  {
    slur:  "Yankee Doodle",
    refers_to:  "Americans",
    reason_and_origin:  "Used by the British Army to make fun of the rag-tag American army in the revolutionary war."
  },
  {
    slur:  "Yanni",
    refers_to:  "Greeks",
    reason_and_origin:  "The famous piano player named Yanni."
  },
  {
    slur:  "Yao",
    refers_to:  "Asians",
    reason_and_origin:  "Tall asians. Reference to Yao Ming, a professional basketball player of Chinese origin."
  },
  {
    slur:  "Yape",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Condensed form of Yard Ape. Applies towards Blacks or Mexicans. Blacks sit out in the yard to keep cool. Mexicans are gardeners, thu…"
  },
  {
    slur:  "Yard Ape",
    refers_to:  "Blacks",
    reason_and_origin:  "Low-income housing quite often has no air conditioning. Thus, people who live in housing projects often sit out front to keep cool. Thi…"
  },
  {
    slur:  "Yazzie",
    refers_to:  "Native Americans",
    reason_and_origin:  "Common last name among Navajos which is used in the derogatorily by whites."
  },
  {
    slur:  "YBM",
    refers_to:  "Blacks",
    reason_and_origin:  "Young Black Male, police terminology."
  },
  {
    slur:  "Yeehaw",
    refers_to:  "Whites",
    reason_and_origin:  "Common cowboy/redneck saying."
  },
  {
    slur:  "Yellow",
    refers_to:  "Asians",
    reason_and_origin:  "Skin color (as compared to Caucasians)."
  },
  {
    slur:  "Yellow Cab",
    refers_to:  "Japanese",
    reason_and_origin:  "Japanese women who only date non-Japanese. Also used to indicate Japanese women who are supposed to be easy. I.E. anyone can ride her."
  },
  {
    slur:  "Yellow Devil",
    refers_to:  "Asians",
    reason_and_origin:  "Common name used by American servicemen to describe the Japanese. Play on \"White Devil"
  },
  {
    slur:  "Yellow Monkey",
    refers_to:  "Asians",
    reason_and_origin:  "Skin Color as well as referring to the Asian race as monkeys, from Vietnam."
  },
  {
    slur:  "Yelvis",
    refers_to:  "Asians",
    reason_and_origin:  "Yellow Elvis. Asians with pompadours. Plural: Yelvi."
  },
  {
    slur:  "Yen",
    refers_to:  "Blacks",
    reason_and_origin:  "Yellow Eyed Nigger. These are Blacks, usually male, that due to a life of hard substance abuse have the whites of their eyes turn …"
  },
  {
    slur:  "Yenta",
    refers_to:  "Jews",
    reason_and_origin:  "Know-it-all Jewish women. Not really a slur."
  },
  {
    slur:  "Yerd",
    refers_to:  "Spanish",
    reason_and_origin:  "From Spaniards"
  },
  {
    slur:  "Yeti",
    refers_to:  "Nepalese",
    reason_and_origin:  "Yeti (Abominabol Snowman/Snowmen) live in the Himalayas"
  },
  {
    slur:  "Yick",
    refers_to:  "Jewish/Hispanic",
    reason_and_origin:  "Yiddish combined with Spic"
  },
  {
    slur:  "Yid",
    refers_to:  "Jews",
    reason_and_origin:  "The Yiddish connection"
  },
  {
    slur:  "Yid/Yid-Lid",
    refers_to:  "Jews",
    reason_and_origin:  "Yid = Yiddish, lid = Yarmulke."
  },
  {
    slur:  "Yiddiot",
    refers_to:  "Jews",
    reason_and_origin:  "Yiddish and Idiot combined (stupid jew)"
  },
  {
    slur:  "Yigger",
    refers_to:  "Asians",
    reason_and_origin:  "Yellow nigger."
  },
  {
    slur:  "Yitze",
    refers_to:  "Jews",
    reason_and_origin:  "Name for Jews. Also Yitze Braun, Yitze Braud"
  },
  {
    slur:  "Yo Boy/Girl",
    refers_to:  "Whites",
    reason_and_origin:  "White person who tries to act black."
  },
  {
    slur:  "Yo Yo",
    refers_to:  "Blacks",
    reason_and_origin:  "Yo Yo's hang from strings."
  },
  {
    slur:  "Yobo",
    refers_to:  "Koreans",
    reason_and_origin:  "Literally means \"sweetheart\" but used in deragatory manner"
  },
  {
    slur:  "Yogurt",
    refers_to:  "Whites",
    reason_and_origin:  "Same color"
  },
  {
    slur:  "Yoko",
    refers_to:  "Japanese",
    reason_and_origin:  "Yoko Ono broke up the Beatles."
  },
  {
    slur:  "Yolk",
    refers_to:  "Asians",
    reason_and_origin:  "Egg yolks are yellow."
  },
  {
    slur:  "Yom",
    refers_to:  "Blacks",
    reason_and_origin:  "In Brooklyn is short for melanzane."
  },
  {
    slur:  "Yom",
    refers_to:  "Jews",
    reason_and_origin:  "From the holiday Yom Kippur"
  },
  {
    slur:  "Yombo",
    refers_to:  "Blacks",
    reason_and_origin:  "The Yombo was a sandwich way back when that was the first to come in a styrofoam box. Spelled \"Yumbo\" or \"Yambo"
  },
  {
    slur:  "Yont'an Saram",
    refers_to:  "Blacks",
    reason_and_origin:  "Korean for \"coal person"
  },
  {
    slur:  "You People",
    refers_to:  "Blacks",
    reason_and_origin:  "Ross Perot, while at the 1992 NAACP convention in Nashville TN, frequently addressed his audience as \"you people.\" Revitalized again i…"
  },
  {
    slur:  "Youn",
    refers_to:  "Vietnamese",
    reason_and_origin:  "Used by Cambodians. Youn was a tribe of Vietnamese descent that lived along the border between Vietnam and Cambodia. Cambodians did no…"
  },
  {
    slur:  "YT",
    refers_to:  "Whites",
    reason_and_origin:  "Pronounced \"White e\" Used by blacks."
  },
  {
    slur:  "Yugo",
    refers_to:  "Yugoslavs",
    reason_and_origin:  "Self-explanatory (and because they can't make a car)."
  },
  {
    slur:  "Yukes",
    refers_to:  "Yugoslavs",
    reason_and_origin:  "Yugoslavs"
  },
  {
    slur:  "Yup-Boon-Jie",
    refers_to:  "Japanese",
    reason_and_origin:  "While all races in Chinese are refered to as a type of ghost/shadow (sub-human), the word for Japanese is unique in that it means child."
  },
  {
    slur:  "Yuppie",
    refers_to:  "Whites",
    reason_and_origin:  "Young Urban Professional. Refers to a person with a well paid professional occupation and a well-to-do lifestyle. Used frequently in th…"
  },
  {
    slur:  "Yurug",
    refers_to:  "Turks",
    reason_and_origin:  "If one (as a foreigner) listens closely to conversation between Turkish people, it sounds like \"yurug\" appear quite often"
  },
  {
    slur:  "Zambo",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Indian/African mix."
  },
  {
    slur:  "Ze Goggles",
    refers_to:  "Blacks",
    reason_and_origin:  "They do nothing."
  },
  {
    slur:  "Zeb",
    refers_to:  "Arabs",
    reason_and_origin:  "Zeb is the Arabic word for \"dick"
  },
  {
    slur:  "Zebra",
    refers_to:  "Mixed Races",
    reason_and_origin:  "Black/White mix. Relates the colors of a person's parents to the colors of a zebra's stripes."
  },
  {
    slur:  "Zeeb",
    refers_to:  "Whites",
    reason_and_origin:  "An alternate usage for the word wigger."
  },
  {
    slur:  "Zerote Pisado",
    refers_to:  "Salvadoreans",
    reason_and_origin:  "Means \"stepped-on piece of shit\" because they are called zerotes"
  },
  {
    slur:  "Zhid",
    refers_to:  "Jews",
    reason_and_origin:  "Russian-language version of \"Jew\" or \"yid\". Only considered a derogatory term close to \"kike\" in Orthodox Christian countries.. in other…"
  },
  {
    slur:  "Zhidan",
    refers_to:  "Jews",
    reason_and_origin:  "Romanian word for jew, dirty jew, or cheap jew"
  },
  {
    slur:  "Zigaboo",
    refers_to:  "Blacks",
    reason_and_origin:  "Variant of Jigaboo."
  },
  {
    slur:  "Zionist",
    refers_to:  "Jews",
    reason_and_origin:  "Jews are typically Zionist in political nature. The ultimate goal being to take over Palestine. Also: Zog"
  },
  {
    slur:  "Zip",
    refers_to:  "Italians",
    reason_and_origin:  "Used by some Italian-Americans to refer to new Italian immigrants because of how fast they are able to speak the old language. The term wa…"
  },
  {
    slur:  "Zip",
    refers_to:  "Asians",
    reason_and_origin:  "When they smile, their teeth look like a zipper. AKA: Zipper, See also: Zipperhead"
  },
  {
    slur:  "Zip Coon",
    refers_to:  "Blacks",
    reason_and_origin:  "Black stereotypical character from Antebellum South."
  },
  {
    slur:  "Zipperhead",
    refers_to:  "Asians",
    reason_and_origin:  "Coined by US soldiers during Korean War. Also used in the film Full Metal Jacket. MULTIPLE reasons have been submitted: 1) If Asians wer…"
  },
  {
    slur:  "Zog",
    refers_to:  "Jews",
    reason_and_origin:  "Zionist Occupation Government - Written near the body of murdered radio talk show host Allen Burg in Denver, Co."
  },
  {
    slur:  "Zoo Ape",
    refers_to:  "Blacks",
    reason_and_origin:  "Ape in a zoo = Nigger in jail"
  },
  {
    slur:  "Zoot",
    refers_to:  "Blacks",
    reason_and_origin:  "Blacks in the 1930s/1940s used to wear snazzy suits called zoot suits."
  },
  {
    slur:  "Zorba",
    refers_to:  "Greeks",
    reason_and_origin:  "From the novel \"Zorba the Greek,\" by Nikos Kazantzakis."
  },
  {
    slur:  "Zulu",
    refers_to:  "Blacks",
    reason_and_origin:  "Tribe name in Africa"
  },
  {
    slur:  "Olauge",
    refers_to:  "Turks",
    reason_and_origin:  "Literally \"oily eye\" referring to the dark eye color of Turkish people, can also be used for other nationalities"
  },
  {
    slur:  "Clouf-Booter",
    refers_to:  "French",
    reason_and_origin:  "An old french man who steals the buttons off of women's clothing and then hides the buttons under his foreskin. After about a week or tw…"
  },
  {
    slur:  "Squint Nigger",
    refers_to:  "Asians,",
    reason_and_origin:  "A derogatory term for an Asian indicating they have the social status of a black person. Stems from the epicanthic fold in Mongoloi…"
  },
  {
    slur:  "Autobahn",
    refers_to:  "German",
    reason_and_origin:  "German for freeway. Refers to the idea that Adolf Hitler build the autobahn for war."
  },
  {
    slur:  "Jingley",
    refers_to:  "Iraqis",
    reason_and_origin:  "When the carvans moved over the silk road through the middle east, they would jingle due to all the bells on the reins of the camels…"
  },
  {
    slur:  "Jell-O Eater",
    refers_to:  "Mormons",
    reason_and_origin:  "A small portion of the United States is known as the Jell-O Belt which covers Utah, Southeast Idaho, and small bits of Nevada, California…"
  },
  {
    slur:  "Albino Peltonen",
    refers_to:  "Finnish",
    reason_and_origin:  "Refers to a pale Finnish fuck with beatty eyes and blonde hair who sucks a lot of penis"
  },
  {
    slur:  "Willy B.",
    refers_to:  "Blacks",
    reason_and_origin:  "famous gorilla from the Atlanta Zoo"
  },
  {
    slur:  "TNB",
    refers_to:  "Blacks",
    reason_and_origin:  "Acronym for \"Typical Nigger Behaviour"
  },
  {
    slur:  "Weeaboo",
    refers_to:  "Whites",
    reason_and_origin:  "During 2005, the imageboard 4chan experienced an increase in the usage of the derogatory slur \"Wapanese\". The moderators then used …"
  },
  {
    slur:  "свиња",
    refers_to:  "Macedonians",
    reason_and_origin:  "Macedonian for pig."
  }
]