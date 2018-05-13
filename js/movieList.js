var movieTitles = ['the sixth sense', 'the matrix', 'tarzan', 'big daddy', 'the mummy', 'runaway bride', 'the blair witch project', 'stuart little', 'the green mile', 'american beauty', 'the world is not enough', 'double jeopardy', 'notting hill', 'wild wild west', 'analyze this', 'american pie', 'sleepy hollow', 'inspector gadget', 'the haunting', 'entrapment', 'payback', 'any given sunday', 'deep blue sea', 'galaxy quest', 'the thomas crown affair', 'blue streak', 'end of days', 'the bone collector', 'bowfinger', 'life', 'three kings', 'bicentennial man', 'the cider house rules', 'eyes wide shut', 'never been kissed', 'varsity blues', 'forces of nature', 'message in a bottle', 'the hurricane', 'stigmata', 'house on haunted hill', 'anna and the king', 'cruel intentions', 'fight club', 'my favorite martian', 'for love of the game', 'man on the moon', 'instinct', 'the best man', 'mickey blue eyes', 'october sky', 'lake placid', 'random hearts', 'dogma', 'superstar', 'mystery men', 'the insider', 'the other sister', 'baby geniuses', 'the story of us', 'blast from the past', 'the wood', 'arlington road', 'the iron giant', 'being john malkovich', 'magnolia', 'at first sight', 'the bachelor', 'stir of echoes', 'summer of sam', 'anywhere but here', 'an ideal husband', 'drive me crazy', 'go', 'bringing out the dead', 'true crime', 'muppets from space', 'the corruptor', 'election', 'music of the heart', 'snow falling on cedars', 'saving private ryan', 'armageddon', 'the waterboy', 'doctor dolittle', 'rush hour', 'deep impact', 'godzilla', 'patch adams', 'the truman show', 'mulan', 'enemy of the state', 'the prince of egypt', 'the rugrats movie', 'shakespeare in love', 'the mask of zorro', 'stepmom', 'antz', 'the wedding singer', 'city of angels', 'the horse whisperer', 'blade', 'lost in space', 'a perfect murder', 'the parent trap', 'hope floats', 'life is beautiful', 'the man in the iron mask', 'a civil action', 'snake eyes', 'what dreams may come', 'small soldiers', 'mighty joe young', 'practical magic', 'meet joe black', 'the negotiator', 'ronin', 'the siege', 'pleasantville', 'the faculty', 'i still know what you did last summer', 'primary colors', 'urban legend', 'how stella got her groove back', 'out of sight', 'sphere', 'the thin red line', 'jack frost', 'mercury rising', 'bride of chucky', 'a night at the roxbury', 'wild things', 'elizabeth ', 'madeline', 'spice world', 'the object of my affection', 'the big hit', 'paulie', 'bulworth', 'great expectations', 'fallen', 'waking ned devine', 'one true thing', 'the players club', 'rounders', 'beloved', 'the borrowers', 'quest for camelot', 'he got game', 'hard rain', 'the replacement killers', 'simon birch', 'disturbing behavior', 'half baked', 'the big lebowski', 'rushmore', 'a simple plan ', 'dance with me', 'titanic', 'men in black', 'liar liar', 'air force one', 'as good as it gets', 'good will hunting', 'tomorrow never dies', 'batman and robin', 'george of the jungle', 'con air', 'contact', 'hercules', 'flubber', 'conspiracy theory', 'i know what you did last summer', 'anaconda', 'the fifth element', 'mouse hunt', 'the saint', 'kiss the girls', 'anastasia', 'the jackal', 'spawn', 'starship troopers', 'breakdown', 'absolute power', 'volcano', 'the game', 'alien resurrection', 'the full monty', 'bean', 'cop land', 'nothing to lose', 'amistad', 'soul food', 'wag the dog', 'donnie brasco', 'the peacemaker', 'private parts', 'money talks', 'jackie brown', 'seven years in tibet', 'vegas vacation', 'selena', 'addicted to love', 'the relic', 'metro', 'for richer or poorer', 'beverly hills ninja', 'picture perfect', 'fools rush in', 'out to sea', 'grosse pointe blank', 'the edge', 'event horizon', 'an american werewolf in paris', 'boogie nights', 'mimic', 'good burger', 'hoodlum', 'air bud', 'red corner', 'booty call', 'the apostle', 'that darn cat', 'the postman', 'that old feeling', 'fire down below', 'wishmaster', 'rocket man', 'independence day', 'twister', 'jerry maguire', 'ransom', 'the rock', 'the birdcage', 'a time to kill', 'the first wives club', 'phenomenon', 'scream', 'eraser', 'the hunchback of notre dame', 'michael', 'space jam', 'the english patient', 'jingle all the way', 'the cable guy', 'courage under fire', 'jack', 'executive decision', 'primal fear', 'tin cup', 'sleepers', 'dragonheart', 'up close and personal', 'evita', 'one fine day', 'the mirror has two faces', 'happy gilmore', 'the ghost and the darkness', 'set it off', 'shine', 'a thin line between love and hate', 'muppet treasure island', 'matilda', 'the long kiss goodnight', 'striptease', 'daylight', 'black sheep', 'rumble in the bronx', 'eddie', 'james and the giant peach', 'spy hard', 'eye for an eye', 'harriet the spy', 'first kid', 'from dusk till dawn', 'down periscope', 'fly away home', 'kingpin', 'the craft', 'fargo', 'sling blade', 'the juror', 'my fellow americans', 'emma', 'the quest', 'bulletproof', 'a very brady sequel', 'high school high', 'chain reaction', 'multiplicity', 'fear', 'the glimmer man', 'city hall', 'flipper', 'bed of roses', 'kazaam', 'the fan', 'last man standing', 'extreme measures', 'the phantom', 'fled', 'the frighteners', 'trainspotting', 'supercop', 'the adventures of pinocchio', 'toy story', 'batman forever', 'pocahontas', 'goldeneye', 'jumanji', 'casper', 'seven', 'crimson tide', 'waterworld', 'dangerous minds', 'while you were sleeping', 'congo', 'braveheart', 'get shorty', 'grumpier old men', 'the bridges of madison county', 'mortal kombat', 'nine months', 'outbreak', 'heat', 'waiting to exhale', 'bad boys', 'babe', 'the american president', 'species', 'clueless', 'sabrina', 'something to talk about', 'the net', 'a walk in the clouds', 'the brady bunch movie', 'sense and sensibility', 'casino', 'man of the house', 'dead man walking', 'french kiss', 'higher learning', 'first knight', 'just cause', 'the indian in the cupboard', 'money train', 'a goofy movie', 'judge dredd', 'forget paris', 'tommy boy', 'copycat', 'leaving las vegas', 'rob roy', 'powder', 'assassins', 'major payne', 'friday', 'now and then', 'houseguest', 'billy madison', 'desperado', 'operation dumbo drop', 'dolores claiborne', 'dead presidents', 'virtuosity', 'tom and huck', 'how to make an american quilt', 'boys on the side', 'circle of friends', 'the usual suspects', 'don juan de marco', 'il postino', 'to die for', 'demon knight', 'showgirls', 'sudden death', 'vampire in brooklyn', 'it takes two', 'johnny mnemonic', 'the quick and the dead', 'the big green', 'heavyweights', 'home for the holidays', 'murder in the first', 'jury duty', 'devil in a blue dress', 'the prophecy', 'mad love', 'kiss of death', 'nixon', 'forrest gump', 'the lion king', 'true lies', 'the santa clause', 'the flintstones', 'dumb and dumber', 'clear and present danger', 'speed', 'the mask', 'pulp fiction', 'interview with the vampire', 'maverick', 'the client', 'disclosure', 'stargate', 'legends of the fall', 'wolf', 'the specialist', 'four weddings and a funeral', 'the little rascals', 'the crow', 'natural born killers', 'when a man loves a woman', 'the river wild', 'timecop', 'the paper', 'on deadly ground', 'richie rich', 'it could happen to you', 'junior', 'nell', 'street fighter', 'the shadow', 'i love trouble', 'blank check', 'blown away', 'a low down dirty shame', 'in the army now', 'drop zone', 'guarding tess', 'wyatt earp', 'quiz show', 'renaissance man', 'blue chips', 'intersection', 'the air up there', 'iron will', 'reality bites', 'speechless', 'the cowboy way', 'only you', 'with honors', 'color of night', 'the professional', 'little giants', 'getting even with dad', 'love affair', 'sugar hill', 'milk money', 'the war', 'lightning jack', 'andre', 'blink', 'terminal velocity', 'monkey trouble', 'above the rim', 'no escape', 'bad girls', 'the madness of king george', 'threesome', 'the pagemaster', 'crooklyn', 'bullets over broadway', 'greedy', 'little big league', 'jurassic park', 'the fugitive', 'the firm', 'sleepless in seattle', 'indecent proposal', 'in the line of fire', 'the pelican brief', 'cliffhanger', 'free willy', 'philadelphia', 'groundhog day', 'grumpy old men', 'cool runnings', 'dave', 'rising sun', 'demolition man', 'tombstone', 'rookie of the year', 'dennis the menace', 'sommersby', 'last action hero', 'addams family values', 'malice', 'made in america', 'the good son', 'the beverly hillbillies', 'falling down', 'the piano', 'hocus pocus', 'hot shots! part deux', 'alive', 'sliver', 'the joy luck club', 'hard target', 'the sandlot', 'the age of innocence', 'cop and a half', 'the secret garden', 'a perfect world', 'point of no return', 'my life', 'poetic justice', 'shadowlands', 'in the name of the father', 'the man without a face', 'striking distance', 'the adventures of huck finn', 'benny and joon', 'the remains of the day', 'the program', 'guilty as sin', 'rudy', 'much ado about nothing', 'nowhere to run', 'like water for chocolate', 'coneheads', 'another stakeout', 'fire in the sky', 'sniper', 'untamed heart', 'posse', 'born yesterday', 'a bronx tale', 'sidekicks', 'heart and souls', 'needful things', 'indian summer', 'the vanishing', 'the crush', 'body of evidence', 'a far off place', 'judgment night', 'life with mikey', 'undercover blues', 'true romance', 'strictly ballroom', 'so i married an axe murderer', 'aladdin', 'batman returns', 'a few good men', 'sister act', 'the bodyguard', 'basic instinct', 'a league of their own', 'unforgiven', 'the hand that rocks the cradle', 'under siege', 'patriot games', 'the last of the mohicans', 'boomerang', 'scent of a woman', 'the crying game', 'far and away', 'housesitter', 'death becomes her', 'unlawful entry', 'beethoven', 'forever young', 'my cousin vinny', 'sneakers', 'the mighty ducks', 'malcolm x', 'single white female', 'the distinguished gentleman', 'medicine man', 'a river runs through it', 'encino man', 'universal soldier', 'honeymoon in vegas', 'the lawnmower man', 'sleepwalkers', 'final analysis', 'the muppet christmas carol', 'howards end', 'candyman', 'the cutting edge', 'hoffa', 'leap of faith', 'toys', 'thunderheart', 'captain ron', 'the player', 'shining through', 'consenting adults', 'raising cain', 'straight talk', 'kuffs', 'juice', 'prelude to a kiss', 'hero', 'singles', 'used people', 'the babe', 'freejack', 'deep cover', 'buffy the vampire slayer', 'pure country', 'ladybugs', 'school ties', 'city of joy', 'memoirs of an invisible man', 'rapid fire', 'cool world', 'class act', 'trespass', 'enchanted april', 'american me', 'a stranger among us', 'whispers in the dark', 'stay tuned', 'glengarry glen ross', 'husbands and wives', 'chaplin', 'white sands', 'once upon a crime', 'beauty and the beast', 'the silence of the lambs', 'city slickers', 'hook', 'the addams family', 'sleeping with the enemy', 'father of the bride', 'fried green tomatoes', 'cape fear', 'backdraft', 'the prince of tides', 'jfk', 'the last boy scout', 'my girl', 'boyz n the hood', 'doc hollywood', 'bugsy', 'new jack city', 'the rocketeer', 'thelma and louise', 'point break', 'regarding henry', 'the fisher king', 'out for justice', 'the doctor', 'dead again', 'soapdish', 'white fang', 'the doors', 'king ralph', 'curly sue', 'dying young', 'grand canyon', 'jungle fever', 'double impact', 'deceived', 'necessary roughness', 'the hard way', 'little man tate', 'class action', 'the people under the stairs', 'lionheart', 'oscar', 'pure luck', 'only the lonely', 'ricochet', 'mobsters', 'mortal thoughts', 'for the boys', 'hudson hawk', 'defending your life', 'billy bathgate', 'switch', 'a kiss before dying', 'shipwrecked', 'toy soldiers', 'the commitments', 'once around', 'all i want for christmas', 'not without my daughter', 'flight of the intruder', 'ernest scared stupid', 'the perfect weapon', 'drop dead fred', 'the marrying man', 'shattered', 'career opportunities', 'one good cop', 'the super', 'a rage in harlem', 'scenes from a mall', 'guilty by suspicion', 'body parts', 'stone cold', 'home alone', 'ghost', 'dances with wolves', 'pretty woman', 'teenage mutant ninja turtles', 'the hunt for red october', 'total recall', 'dick tracy', 'kindergarten cop', 'presumed innocent', 'days of thunder', 'three men and a little lady', 'bird on a wire', 'flatliners', 'misery', 'edward scissorhands', 'problem child', 'arachnophobia', 'awakenings', 'hard to kill', 'goodfellas', 'marked for death', 'joe versus the volcano', 'postcards from the edge', 'mermaids', 'darkman', 'air america', 'green card', 'pacific heights', 'the rescuers down under', 'internal affairs', 'cadillac man', 'memphis belle', 'house party', 'navy seals', 'ernest goes to jail', 'ghost dad', 'my blue heaven', 'the russia house', 'the first power', 'the freshman', 'the adventures of ford fairlane', 'quigley down under', 'madhouse', 'stella', 'taking care of business', 'sibling rivalry', 'white palace', 'death warrant', 'tremors', 'men at work', 'i love you to death', 'avalon', 'the bonfire of the vanities', 'revenge', 'reversal of fortune', 'spaced invaders', 'quick change', 'fire birds', 'wild at heart', 'the lord of the flies', 'the grifters', 'crazy people', 'bad influence', 'cinema paradiso', 'graveyard shift', 'pump up the volume', 'opportunity knocks', 'wild orchid', 'nuns on the run', 'narrow margin', 'the witches', 'adventures of milo and otis', 'the two jakes'];
