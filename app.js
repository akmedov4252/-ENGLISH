const words = [
    {en:"State", pr:"стейт", tg:"давлат", ex:"The state has a new law."},
    {en:"Republic", pr:"рипаблик", tg:"ҷумҳурӣ", ex:"Tajikistan is a republic."},
    {en:"Law", pr:"ло", tg:"қонун", ex:"The law protects people."},
    {en:"Ministry", pr:"министри", tg:"вазорат", ex:"He works at the ministry."},
    {en:"Department", pr:"дипартмент", tg:"раёсат, шуъба", ex:"This department writes reports."},
    {en:"Office", pr:"офис", tg:"идора", ex:"My office is near the school."},
    {en:"Right", pr:"райт", tg:"ҳуқуқ, рост", ex:"Every citizen has rights."},
    {en:"Government", pr:"гавермент", tg:"ҳукумат", ex:"The government helps the city."},
    {en:"Chief", pr:"чиф", tg:"сардор", ex:"The chief reads the report."},
    {en:"Report", pr:"рипорт", tg:"гузориш", ex:"I wrote a short report."},
    {en:"Letter", pr:"леттер", tg:"мактуб", ex:"She sends a letter."},
    {en:"Application", pr:"эпликейшн", tg:"ариза", ex:"He filled in an application."},
    {en:"Father", pr:"фазер", tg:"падар", ex:"My father is kind."},
    {en:"Mother", pr:"мазер", tg:"модар", ex:"My mother cooks dinner."},
    {en:"Family", pr:"фэмили", tg:"оила", ex:"My family lives in Dushanbe."},
    {en:"Son", pr:"сан", tg:"писар", ex:"Their son studies English."},
    {en:"Daughter", pr:"дотер", tg:"духтар", ex:"Her daughter reads a book."},
    {en:"Relative", pr:"релатив", tg:"хешованд", ex:"A relative came to visit us."},
    {en:"Soldier", pr:"соулҷер", tg:"сарбоз", ex:"The soldier stands straight."},
    {en:"Colonel", pr:"кёрнел", tg:"полковник", ex:"The colonel spoke to the soldiers."},
    {en:"Rank", pr:"рэнк", tg:"рутба", ex:"His rank is high."},
    {en:"Army", pr:"арми", tg:"артиш, армия", ex:"My brother serves in the army."},
    {en:"War", pr:"вор", tg:"ҷанг", ex:"People do not want war."},
    {en:"Peace", pr:"пис", tg:"сулҳ", ex:"Peace is important for everyone."},
    {en:"Diplomacy", pr:"дипломаси", tg:"дипломатия", ex:"Diplomacy can build peace."},
    {en:"Conversation", pr:"конверсейшн", tg:"гуфтугӯ", ex:"We had a good conversation."},
    {en:"World", pr:"ворлд", tg:"ҷаҳон", ex:"The world is very big."},
    {en:"City", pr:"сити", tg:"шаҳр", ex:"This city is beautiful."},
    {en:"District", pr:"дистрикт", tg:"ноҳия", ex:"Our district has many schools."},
    {en:"Town", pr:"таун", tg:"шаҳрак", ex:"They live in a small town."},
    {en:"Avenue", pr:"эвеню", tg:"хиёбон", ex:"The avenue is clean."},
    {en:"Street", pr:"стрит", tg:"кӯча", ex:"The street is quiet today."},
    {en:"Village", pr:"вилиҷ", tg:"деҳа", ex:"My grandfather lives in a village."},
    {en:"People", pr:"пипл", tg:"одамон", ex:"People are walking in the park."},
    {en:"Citizen", pr:"ситизен", tg:"шаҳрванд", ex:"A citizen follows the law."},
    {en:"Building", pr:"билдинг", tg:"бино", ex:"That building is tall."},
    {en:"Agent", pr:"эйҷент", tg:"агент", ex:"The agent checks the document."},
    {en:"Come", pr:"кам", tg:"биё", ex:"Come here, please."},
    {en:"Go", pr:"гоу", tg:"рав", ex:"Go to the office."},
    {en:"Stand up", pr:"стэнд ап", tg:"хез, бархез", ex:"Stand up and answer."},
    {en:"Swim", pr:"суим", tg:"шино кардан", ex:"I can swim in summer."},
    {en:"Stand straight", pr:"стэнд стрейт", tg:"рост ист", ex:"Stand straight, please."},
    {en:"Do not cry", pr:"ду нот край", tg:"гиря накун", ex:"Do not cry, my friend."},
    {en:"Look", pr:"лук", tg:"нигоҳ кун", ex:"Look at the board."},
    {en:"Listen", pr:"лисн", tg:"гӯш кун", ex:"Listen to the teacher."},
    {en:"Check", pr:"чек", tg:"санҷидан", ex:"Check your answer."},
    {en:"Test", pr:"тест", tg:"имтиҳон, санҷиш", ex:"The test is easy."},
    {en:"Teacher", pr:"тичер", tg:"омӯзгор", ex:"The teacher explains the word."},
    {en:"Student", pr:"стюдент", tg:"донишҷӯ", ex:"The student writes the answer."},
    {en:"Book", pr:"бук", tg:"китоб", ex:"This book is useful."},
    {en:"Notebook", pr:"ноутбук", tg:"дафтар", ex:"Open your notebook."},
    {en:"Pen", pr:"пен", tg:"ручка", ex:"I write with a pen."},
    {en:"Read", pr:"рид", tg:"хондан", ex:"Read the sentence aloud."},
    {en:"Write", pr:"райт", tg:"навиштан", ex:"Write the English word."},
    {en:"Learn", pr:"лёрн", tg:"омӯхтан", ex:"We learn five words today."},
    {en:"Easy", pr:"изи", tg:"осон", ex:"This exercise is easy."},
    {en:"Answer", pr:"ансер", tg:"ҷавоб", ex:"Choose the correct answer."},
    {en:"Question", pr:"квесчн", tg:"савол", ex:"This question is simple."},
    {en:"Correct", pr:"корект", tg:"дуруст", ex:"Your answer is correct."},
    {en:"Mistake", pr:"мистейк", tg:"хато", ex:"Find your mistake and fix it."},
    
    // САҲИФАИ 4 - ИЛОВАИ НАВ
    {en:"Want", pr:"вонт", tg:"хостан", ex:"I want to learn English."},
    {en:"Have", pr:"хэв", tg:"доштан", ex:"We have a good book."},
    {en:"Make", pr:"мейк", tg:"сохтан / кардан", ex:"She makes a plan."},
    {en:"Take", pr:"тейк", tg:"гирифтан", ex:"Take your notebook."},
    {en:"Help", pr:"хелп", tg:"кӯмак кардан", ex:"He helps his friend."},
    {en:"Time", pr:"тайм", tg:"вақт", ex:"I have no time."},
    {en:"Day", pr:"дей", tg:"рӯз", ex:"Today is a good day."},
    {en:"Work", pr:"ворк", tg:"кор", ex:"My work is important."},
    {en:"Friend", pr:"френд", tg:"дӯст", ex:"He is my best friend."},
    {en:"Home", pr:"ҳом", tg:"хона", ex:"I go home after classes."},
    {en:"School", pr:"скул", tg:"мактаб", ex:"The school is big."},
    {en:"Word", pr:"ворд", tg:"калима", ex:"Learn a new word."},
    {en:"Answer", pr:"ансер", tg:"ҷавоб", ex:"Give a short answer."},
    {en:"Idea", pr:"идия", tg:"фикр / ғоя", ex:"That is a good idea."},
    {en:"Way", pr:"уэй", tg:"роҳ / тарз", ex:"Show me the way."},
    {en:"Good", pr:"гуд", tg:"хуб", ex:"This is a good book."},
    {en:"New", pr:"ню", tg:"нав", ex:"I have a new pen."},
    {en:"Big", pr:"биг", tg:"бузург / калон", ex:"Dushanbe is a big city."},
    {en:"Now", pr:"нау", tg:"ҳоло / акнун", ex:"Read the text now."},
    // (ин охирин калимаи саҳифаи 4 буд, баъди он вергул мондем)
    {en:"Always", pr:"олуэз", tg:"ҳамеша", ex:"He always helps others."},

    // САҲИФАИ 5 - Ҷонишинҳо ва Саволҳо
    {en:"I", pr:"ай", tg:"ман", ex:"I am a student."},
    {en:"You", pr:"ю", tg:"ту, шумо", ex:"You are my friend."},
    {en:"He", pr:"ҳӣ", tg:"ӯ (барои мард)", ex:"He is a good worker."},
    {en:"She", pr:"шӣ", tg:"ӯ (барои зан)", ex:"She reads a book."},
    {en:"It", pr:"ит", tg:"ин, он (барои ашё)", ex:"It is a new phone."},
    {en:"We", pr:"вӣ", tg:"мо", ex:"We go to school."},
    {en:"They", pr:"зей", tg:"онҳо", ex:"They play football."},
    {en:"My", pr:"май", tg:"аз ман (меники)", ex:"My pen is blue."},
    {en:"Your", pr:"ёр", tg:"аз ту, аз шумо", ex:"Show me your notebook."},
    {en:"His", pr:"ҳиз", tg:"аз ӯ (мард)", ex:"His car is fast."},
    {en:"Her", pr:"ҳёр", tg:"аз ӯ (зан)", ex:"Her bag is red."},
    {en:"Its", pr:"итс", tg:"аз он (ашё)", ex:"Its color is nice."},
    {en:"Our", pr:"ауэр", tg:"аз мо", ex:"Our office is big."},
    {en:"Their", pr:"зеир", tg:"аз онҳо", ex:"Their house is near."},
    {en:"Who", pr:"ҳу", tg:"кӣ", ex:"Who is that man?"},
    {en:"What", pr:"вот", tg:"чӣ", ex:"What is your name?"},
    {en:"Where", pr:"веэр", tg:"дар куҷо", ex:"Where do you live?"},
    {en:"When", pr:"вен", tg:"кай", ex:"When is the lesson?"},
    {en:"Why", pr:"вай", tg:"чаро", ex:"Why are you late?"},
    // (ин охирин калимаи саҳифаи 5 буд, баъди он вергул мондем)
    {en:"How", pr:"ҳау", tg:"чӣ тавр", ex:"How are you today?"},

    // САҲИФАИ 6 - Ибораҳои лозима (Phrases)
    {en:"So", pr:"соу", tg:"пас, хай", ex:"So, what is the plan?"},
    {en:"As far as I know", pr:"эз фар эз ай ноу", tg:"то ҷое ки ман медонам", ex:"As far as I know, he is at home."},
    {en:"Come on", pr:"кам он", tg:"биё, давай", ex:"Come on, we are late!"},
    {en:"Hurry up", pr:"ҳари ап", tg:"тезтар шав", ex:"Hurry up, the bus is leaving."},
    {en:"Like", pr:"лайк", tg:"ба мисли", ex:"He is strong like a bear."},
    {en:"As", pr:"эз", tg:"ҳамчун, чун", ex:"I work as a teacher."},
    {en:"Of course", pr:"ов корс", tg:"албатта", ex:"Of course, I can help you."},
    {en:"Good luck", pr:"гуд лак", tg:"омади кор", ex:"Good luck with your test!"},
    {en:"See you", pr:"си ю", tg:"то дидор", ex:"See you tomorrow!"},
    {en:"No problem", pr:"ноу проблем", tg:"мушкил нест", ex:"No problem, I will do it."},
    {en:"Exactly", pr:"игзэктли", tg:"аниқ, маҳз ҳамин тавр", ex:"Exactly, that is what I mean."},
    {en:"By the way", pr:"бай зе уэй", tg:"дар омади гап", ex:"By the way, how is your friend?"},
    {en:"I agree", pr:"ай эгри", tg:"ман розӣ ҳастам", ex:"I agree with your idea."},
    {en:"I don't know", pr:"ай доунт ноу", tg:"ман намедонам", ex:"I don't know the answer."},
    {en:"Just a minute", pr:"ҷаст э минит", tg:"як дақиқа", ex:"Just a minute, please."},
    {en:"That's fine", pr:"зэтс файн", tg:"ин хуб аст (мушкил нест)", ex:"That's fine, do not worry."},
    {en:"Me too", pr:"ми ту", tg:"ман ҳам", ex:"I like English. Me too."},
    {en:"Not bad", pr:"нот бэд", tg:"бад не", ex:"How are you? Not bad."},
    {en:"What's up?", pr:"уотс ап", tg:"чӣ гап?", ex:"Hey, what's up?"},
   // (ин охирин ибораи саҳифаи 6 буд, баъди он вергул мондем)
    {en:"Take care", pr:"тейк кеэр", tg:"худро эҳтиёт кун", ex:"Goodbye, take care!"},

    // САҲИФАИ 7 - Пешояндҳо ва Пайвандакҳо
    {en:"In", pr:"ин", tg:"дар, дарун", ex:"The book is in the bag."},
    {en:"On", pr:"он", tg:"дар болои", ex:"The pen is on the table."},
    {en:"At", pr:"эт", tg:"дар (макон ё вақт)", ex:"I am at home."},
    {en:"Under", pr:"андер", tg:"дар зери", ex:"The cat is under the chair."},
    {en:"With", pr:"уиз", tg:"бо", ex:"I am with my friend."},
    {en:"Without", pr:"уизаут", tg:"бе", ex:"I drink tea without sugar."},
    {en:"For", pr:"фор", tg:"барои", ex:"This gift is for you."},
    {en:"About", pr:"эбаут", tg:"дар бораи", ex:"Tell me about your day."},
    {en:"From", pr:"фром", tg:"аз", ex:"I am from Tajikistan."},
    {en:"To", pr:"ту", tg:"ба", ex:"I go to school."},
    {en:"And", pr:"энд", tg:"ва", ex:"I like apples and bananas."},
    {en:"But", pr:"бат", tg:"аммо, лекин", ex:"I am tired, but I will work."},
    {en:"Or", pr:"ор", tg:"ё", ex:"Do you want tea or coffee?"},
    {en:"Because", pr:"бикоз", tg:"чунки, зеро", ex:"I sleep because I am tired."},
    {en:"If", pr:"иф", tg:"агар", ex:"If it rains, I will stay."},
    {en:"That", pr:"зэт", tg:"ки, он", ex:"He said that he is busy."},
    {en:"Than", pr:"зэн", tg:"аз (барои муқоиса)", ex:"He is taller than me."},
    {en:"Very", pr:"вери", tg:"хеле", ex:"Thank you very much."},
    {en:"Really", pr:"рили", tg:"воқеан, дар ҳақиқат", ex:"It is a really good book."},
    // (ин охирин калимаи саҳифаи 7 буд, баъди он вергул мондем)
    {en:"Also", pr:"олсоу", tg:"инчунин, ҳам", ex:"I also speak Russian."},

    // САҲИФАИ 8 - Феълҳо ва сифатҳои иловагӣ
    {en:"Work", pr:"ворк", tg:"кор кардан", ex:"I work every day."},
    {en:"Live", pr:"лив", tg:"зиндагӣ кардан", ex:"We live in Dushanbe."},
    {en:"Speak", pr:"спик", tg:"ҳарф задан", ex:"He speaks English well."},
    {en:"Understand", pr:"андерстэнд", tg:"фаҳмидан", ex:"I understand this lesson."},
    {en:"Know", pr:"ноу", tg:"донистан", ex:"I know the answer."},
    {en:"Think", pr:"синк", tg:"фикр кардан", ex:"Think before you speak."},
    {en:"Say", pr:"сей", tg:"гуфтан", ex:"What did you say?"},
    {en:"Tell", pr:"тел", tg:"гуфтан, нақл кардан", ex:"Tell me a story."},
    {en:"Ask", pr:"аск", tg:"пурсидан", ex:"Ask a question."},
    {en:"Try", pr:"трай", tg:"кӯшиш кардан", ex:"Try to do your best."},
    {en:"Bad", pr:"бэд", tg:"бад", ex:"This is a bad idea."},
    {en:"Small", pr:"смол", tg:"хурд", ex:"It is a small town."},
    {en:"Old", pr:"олд", tg:"куҳна, пир", ex:"This book is old."},
    {en:"Young", pr:"янг", tg:"ҷавон", ex:"He is a young student."},
    {en:"Hot", pr:"ҳот", tg:"гарм", ex:"Summer is hot in Tajikistan."},
    {en:"Cold", pr:"колд", tg:"сард", ex:"Water is cold."},
    {en:"Happy", pr:"ҳэппи", tg:"хурсанд", ex:"I am happy today."},
    {en:"Sad", pr:"сэд", tg:"ғамгин", ex:"Do not be sad."},
    {en:"Fast", pr:"фаст", tg:"тез", ex:"The car is fast."},
    // (ин охирин калимаи саҳифаи 8 буд, баъди он вергул мондем)
    {en:"Slow", pr:"слоу", tg:"оҳиста", ex:"Please speak slowly."},

    // САҲИФАИ 9 - Рақамҳо (1-20)
    {en:"One", pr:"уан", tg:"як", ex:"I have one pen."},
    {en:"Two", pr:"ту", tg:"ду", ex:"Two plus two is four."},
    {en:"Three", pr:"сри", tg:"се", ex:"He has three books."},
    {en:"Four", pr:"фор", tg:"чор", ex:"Four people are here."},
    {en:"Five", pr:"файв", tg:"панҷ", ex:"I have five fingers."},
    {en:"Six", pr:"сикс", tg:"шаш", ex:"Six days of work."},
    {en:"Seven", pr:"севен", tg:"ҳафт", ex:"Seven days in a week."},
    {en:"Eight", pr:"эйт", tg:"ҳашт", ex:"I am eight years old."},
    {en:"Nine", pr:"найн", tg:"нӯҳ", ex:"Nine plus one is ten."},
    {en:"Ten", pr:"тен", tg:"даҳ", ex:"I have ten fingers."},
    {en:"Eleven", pr:"илевэн", tg:"ёздаҳ", ex:"Eleven students are here."},
    {en:"Twelve", pr:"туэлв", tg:"дувоздаҳ", ex:"Twelve months in a year."},
    {en:"Thirteen", pr:"сёртин", tg:"сездаҳ", ex:"He is thirteen years old."},
    {en:"Fourteen", pr:"фортин", tg:"чордаҳ", ex:"Fourteen days."},
    {en:"Fifteen", pr:"фифтин", tg:"понздаҳ", ex:"Fifteen books."},
    {en:"Sixteen", pr:"сикстин", tg:"шонздаҳ", ex:"Sixteen years old."},
    {en:"Seventeen", pr:"севентин", tg:"ҳабдаҳ", ex:"Seventeen pens."},
    {en:"Eighteen", pr:"эйтин", tg:"ҳаждаҳ", ex:"Eighteen students."},
    {en:"Nineteen", pr:"найнтин", tg:"нуздаҳ", ex:"Nineteen pencils."},
    // (ин охирин калимаи саҳифаи 9 буд, баъди он вергул мондем)
    {en:"Twenty", pr:"туэнти", tg:"бист", ex:"Twenty is a nice number."},

    // САҲИФАИ 10 - Вақт, рӯзҳо ва моҳҳо
    {en:"Monday", pr:"мандей", tg:"душанбе", ex:"Monday is the first work day."},
    {en:"Tuesday", pr:"тюздей", tg:"сешанбе", ex:"We have a lesson on Tuesday."},
    {en:"Wednesday", pr:"венсдей", tg:"чоршанбе", ex:"Today is Wednesday."},
    {en:"Thursday", pr:"ҫрздей", tg:"панҷшанбе", ex:"The meeting is on Thursday."},
    {en:"Friday", pr:"фраидей", tg:"ҷумъа", ex:"Friday is a good day."},
    {en:"Saturday", pr:"сатердей", tg:"шанбе", ex:"We rest on Saturday."},
    {en:"Sunday", pr:"сандей", tg:"якшанбе", ex:"Sunday is a holiday."},
    {en:"Week", pr:"уик", tg:"ҳафта", ex:"There are seven days in a week."},
    {en:"Month", pr:"манс", tg:"моҳ", ex:"January is the first month."},
    {en:"Year", pr:"йир", tg:"сол", ex:"A year has twelve months."},
    {en:"Morning", pr:"морнинг", tg:"субҳ, пагоҳӣ", ex:"Good morning, my friend."},
    {en:"Afternoon", pr:"афтернун", tg:"нифирӯзӣ", ex:"See you in the afternoon."},
    {en:"Evening", pr:"ивнинг", tg:"бегоҳ", ex:"We read books in the evening."},
    {en:"Night", pr:"найт", tg:"шаб", ex:"The night is dark and quiet."},
    {en:"Today", pr:"тудей", tg:"имрӯз", ex:"Today is a busy day."},
    {en:"Tomorrow", pr:"тумороу", tg:"фардо", ex:"Tomorrow we will work."},
    {en:"Yesterday", pr:"йестердей", tg:"дирӯз", ex:"Yesterday was a holiday."},
    {en:"Clock", pr:"клок", tg:"соат (деворӣ/милӣ)", ex:"Look at the clock."},
    {en:"Hour", pr:"ауэр", tg:"соат (вақт)", ex:"I need one hour to finish."},
    // (ин охирин калимаи саҳифаи 10 буд, баъди он вергул мондем)
    {en:"Minute", pr:"минит", tg:"дақиқа", ex:"Wait a minute, please."},

    // САҲИФАИ 11 - Моҳҳо ва фаслҳои сол
    {en:"January", pr:"ҷануари", tg:"январ", ex:"January is the first month."},
    {en:"February", pr:"фебруари", tg:"феврал", ex:"February is cold."},
    {en:"March", pr:"марч", tg:"март", ex:"Spring starts in March."},
    {en:"April", pr:"эйприл", tg:"апрел", ex:"April has 30 days."},
    {en:"May", pr:"мей", tg:"май", ex:"May is a warm month."},
    {en:"June", pr:"ҷун", tg:"июн", ex:"Summer begins in June."},
    {en:"July", pr:"ҷулай", tg:"июл", ex:"July is very hot."},
    {en:"August", pr:"огуст", tg:"август", ex:"August is the last month of summer."},
    {en:"September", pr:"септембер", tg:"сентябр", ex:"September is the start of school."},
    {en:"October", pr:"октобер", tg:"октябр", ex:"Leaves fall in October."},
    {en:"November", pr:"новембер", tg:"ноябр", ex:"November is cool."},
    {en:"December", pr:"десембер", tg:"декабр", ex:"December is the last month of the year."},
    {en:"Spring", pr:"спринг", tg:"баҳор", ex:"Spring is a beautiful season."},
    {en:"Summer", pr:"саммер", tg:"тобистон", ex:"Summer is hot."},
    {en:"Autumn", pr:"отум", tg:"қразон / тирамоҳ", ex:"Autumn brings yellow leaves."},
    {en:"Winter", pr:"винтер", tg:"зимистон", ex:"Winter has snow."},
    {en:"Season", pr:"сизон", tg:"фасл", ex:"There are four seasons in a year."},
    {en:"Weather", pr:"везер", tg:"обу ҳаво", ex:"The weather is nice today."},
    {en:"Sun", pr:"сан", tg:"офтоб", ex:"The sun shines brightly."},
    {en:"Rain", pr:"рейн", tg:"борон", ex:"I don't like rain."},

    // САҲИФАИ 12 - Раёсат ва шуъбаҳои калидии ВКД
    {en:"Ministry of Internal Affairs", pr:"министри ов интернал аффайрз", tg:"Вазорати корҳои дохилӣ (ВКД)", ex:"He serves at the Ministry of Internal Affairs."},
    {en:"Department", pr:"дипартмент", tg:"раёсат, шуъба", ex:"Head of department."},
    {en:"Criminal Investigation", pr:"криминал инвестигейшн", tg:"Кофтукови ҷиноятӣ (УУР)", ex:"Criminal investigation department."},
    {en:"Public Security", pr:"паблик сеюрити", tg:"Амнияти ҷамъиятӣ (ОБП)", ex:"Public security service."},
    {en:"State Traffic Inspectorate", pr:"стейт траффик инспекторат", tg:"Раёсати бозрасии давлатии автомобилӣ (ГАИ / РБДА)", ex:"Traffic inspectorate controls roads."},
    {en:"Passport and Registration", pr:"паспорт энд регистрашн", tg:"Хадамоти шиносномавию бақайдгирӣ", ex:"Passport and registration department."},
    {en:"Investigative Department", pr:"инвестигатив дипартмент", tg:"Шуъбаи тафтишотӣ", ex:"Investigative department works on cases."},
    {en:"Duty Station", pr:"дюти стейшн", tg:"Қисми навбатдорӣ (Дежурная часть)", ex:"Call the duty station."},
    {en:"Training Center", pr:"трейнинг сентер", tg:"Маркази таълимӣ", ex:"He is an instructor at the training center."},
    {en:"Inspector", pr:"инспектор", tg:"инспектор", ex:"Police inspector."},
    {en:"Investigator", pr:"инвестигатор", tg:"муфаттиш", ex:"The investigator questions the witness."},
    {en:"Operative", pr:"оператив", tg:"оперативник", ex:"Operative officer."},
    {en:"Cadet", pr:"кадет", tg:"курсант, шунаванда", ex:"Cadets study at the academy."},
    {en:"Law enforcement", pr:"лоу энфорсмэнт", tg:"ҳифзи ҳуқуқ, мақомоти интизомӣ", ex:"Law enforcement agencies."},
    {en:"Order and Discipline", pr:"ордер энд дисиплин", tg:"тартиб ва интизом", ex:"Maintain public order."},
    {en:"Security", pr:"сеюрити", tg:"амният, бехатарӣ", ex:"Ensuring national security."},
    {en:"Patrol", pr:"патрол", tg:"патрул, посбон", ex:"Patrol service on the street."},
    {en:"Protocol", pr:"протокол", tg:"протокол", ex:"Drafting a legal protocol."},
    {en:"Operation", pr:"операшн", tg:"амалиёт", ex:"Special police operation."},
    {en:"Oath", pr:"оуз", tg:"савганд (қасам)", ex:"Take the military oath."},

    // САҲИФАИ 13 - Хӯрок ва нӯшокиҳо
    {en:"Water", pr:"уотер", tg:"об", ex:"I want to drink water."},
    {en:"Tea", pr:"ти", tg:"чой", ex:"Drink hot tea."},
    {en:"Bread", pr:"бред", tg:"нон", ex:"Give me some bread."},
    {en:"Food", pr:"фуд", tg:"хӯрок", ex:"The food is delicious."},
    {en:"Meat", pr:"мит", tg:"гӯшт", ex:"I like meat."},
    {en:"Milk", pr:"милк", tg:"шир", ex:"Drink milk every morning."},
    {en:"Apple", pr:"эпл", tg:"себ", ex:"I eat an apple."},
    {en:"Fruit", pr:"фрут", tg:"мева", ex:"Fresh fruit is good."},
    {en:"Vegetable", pr:"веҷетебл", tg:"сабзавот", ex:"Eat fresh vegetables."},
    {en:"Egg", pr:"эг", tg:"тухм", ex:"I have an egg for breakfast."},
    {en:"Salt", pr:"солт", tg:"намак", ex:"Add some salt, please."},
    {en:"Sugar", pr:"шугар", tg:"шакар", ex:"Tea with sugar."},
    {en:"Soup", pr:"суп", tg:"шӯрбо", ex:"Hot soup is good."},
    {en:"Rice", pr:"райс", tg:"биринҷ", ex:"Rice with meat."},
    {en:"Cheese", pr:"чиз", tg:"панир", ex:"Bread and cheese."},
    {en:"Butter", pr:"батер", tg:"равған (маска)", ex:"Bread with butter."},
    {en:"Cafe", pr:"кафе", tg:"кафе, ошхона", ex:"Let's go to the cafe."},
    {en:"Lunch", pr:"ланч", tg:"хӯроки нисфирӯзӣ", ex:"Time for lunch."},
    {en:"Dinner", pr:"динер", tg:"хӯроки бегоҳӣ", ex:"We have dinner at home."},
    {en:"Hungry", pr:"хангри", tg:"гурусна", ex:"I am very hungry."},

    // САҲИФАИ 14 - Саломатӣ ва бадан
    {en:"Head", pr:"ҳед", tg:"сар", ex:"My head hurts."},
    {en:"Eye", pr:"ай", tg:"чашм", ex:"Open your eyes."},
    {en:"Hand", pr:"хэнд", tg:"даст", ex:"Wash your hands."},
    {en:"Foot", pr:"фут", tg:"пой", ex:"Step on your right foot."},
    {en:"Heart", pr:"ҳарт", tg:"дил", ex:"A healthy heart."},
    {en:"Doctor", pr:"доктор", tg:"духтур", ex:"Call the doctor."},
    {en:"Hospital", pr:"хоспитал", tg:"беморхона", ex:"He is in the hospital."},
    {en:"Medicine", pr:"медисин", tg:"дору", ex:"Take your medicine."},
    {en:"Pain", pr:"пейн", tg:"дард", ex:"I have a pain here."},
    {en:"Sick", pr:"сик", tg:"бемор", ex:"He is sick today."},
    {en:"Health", pr:"ҳелс", tg:"саломатӣ", ex:"Health is wealth."},
    {en:"Body", pr:"боди", tg:"бадан", ex:"Physical body training."},
    {en:"Temperature", pr:"температуре", tg:"ҳарорат, таб", ex:"She has a high temperature."},
    {en:"Cold", pr:"колд", tg:"шамолкашӣ, заккоми", ex:"I caught a cold."},
    {en:"Help", pr:"хелп", tg:"кӯмак", ex:"I need help."},
    {en:"Rest", pr:"рест", tg:"истироҳат", ex:"You need to rest."},
    {en:"Sleep", pr:"слип", tg:"хоб рафтан", ex:"Sleep well at night."},
    {en:"Well", pr:"вел", tg:"хуб, солим", ex:"I feel well today."},
    {en:"Strong", pr:"стронг", tg:"қавӣ, зӯр", ex:"Be strong and healthy."},
    {en:"Life", pr:"лайф", tg:"ҳаёт", ex:"Life is beautiful."},

    // САҲИФАИ 15 - Либос ва харид
    {en:"Clothes", pr:"клоуз", tg:"либос", ex:"I buy new clothes."},
    {en:"Shirt", pr:"шёрт", tg:"курта (мардона)", ex:"He wears a white shirt."},
    {en:"Jacket", pr:"ҷэкет", tg:"куртка / куртаи гарм", ex:"Put on your jacket."},
    {en:"Trousers", pr:"траузерз", tg:"шим", ex:"Black trousers."},
    {en:"Shoes", pr:"шуз", tg:"пойафзол, туфлӣ", ex:"Clean your shoes."},
    {en:"Hat", pr:"ҳэт", tg:"кӯлоҳ", ex:"He wears a hat."},
    {en:"Shop", pr:"шоп", tg:"мағоза, дӯкон", ex:"Go to the shop."},
    {en:"Market", pr:"маркет", tg:"бозор", ex:"We go to the market."},
    {en:"Buy", pr:"бай", tg:"харидан", ex:"I want to buy a shirt."},
    {en:"Sell", pr:"сел", tg:"фурӯхтан", ex:"They sell fresh fruit."},
    {en:"Price", pr:"прайс", tg:"нарх", ex:"What is the price of this?"},
    {en:"Money", pr:"мани", tg:"пул", ex:"I have enough money."},
    {en:"Cost", pr:"кост", tg:"арзиш доштан, истодан", ex:"How much does it cost?"},
    {en:"Cheap", pr:"чип", tg:"арзон", ex:"This book is cheap."},
    {en:"Expensive", pr:"экспенсив", tg:"қимат", ex:"The car is expensive."},
    {en:"Size", pr:"сайз", tg:"андоза", ex:"What size do you need?"},
    {en:"Color", pr:"калер", tg:"ранг", ex:"What color is your shirt?"},
    {en:"Pay", pr:"пей", tg:"пардохт кардан", ex:"Pay with cash or card."},
    {en:"Cash", pr:"кэш", tg:"пули нақд", ex:"I will pay in cash."},
    {en:"Customer", pr:"кастомер", tg:"харидор, миҷоз", ex:"The customer is happy."},

    // САҲИФАИ 16 - Хона ва ҳуҷраҳо
    {en:"House", pr:"ҳаус", tg:"хона, манзил", ex:"This is a big house."},
    {en:"Room", pr:"рум", tg:"ҳуҷра, хона", ex:"My room is clean."},
    {en:"Kitchen", pr:"кичен", tg:"ошхона", ex:"She is in the kitchen."},
    {en:"Bedroom", pr:"бедрум", tg:"утоқи хоб", ex:"Go to your bedroom."},
    {en:"Bathroom", pr:"баҳсрум", tg:"ҳуҷраи оббозӣ, ҳаммом", ex:"Clean the bathroom."},
    {en:"Door", pr:"дор", tg:"дар", ex:"Open the door, please."},
    {en:"Window", pr:"уиндоу", tg:"тиреза", ex:"Close the window."},
    {en:"Table", pr:"тейбл", tg:"миз", ex:"Put the book on the table."},
    {en:"Chair", pr:"чер", tg:"курсӣ", ex:"Sit on the chair."},
    {en:"Bed", pr:"бед", tg:"бистар, кати хоб", ex:"Make your bed."},
    {en:"Wall", pr:"уол", tg:"девор", ex:"White wall."},
    {en:"Floor", pr:"флор", tg:"фарш, ошёна", ex:"Clean the floor."},
    {en:"Light", pr:"лайт", tg:"рӯшноӣ, чароғ", ex:"Turn on the light."},
    {en:"Key", pr:"ки", tg:"калид", ex:"Where is my key?"},
    {en:"Garden", pr:"гарден", tg:"боғ", ex:"Green garden near the house."},
    {en:"Clean", pr:"қлин", tg:"тоза кардан, тоза", ex:"Keep your room clean."},
    {en:"Yard", pr:"ярд", tg:"ҳавлӣ, حیاط", ex:"Children play in the yard."},
    {en:"Television", pr:"телевижн", tg:"телевизор", ex:"Watch television in the evening."},
    {en:"Clock", pr:"клок", tg:"соат (деворӣ ё рӯимизӣ)", ex:"The clock is on the wall."},
    {en:"Home", pr:"ҳом", tg:"хона, оила", ex:"East or west, home is best."},

    // САҲИФАИ 17 - Нақлиёт ва сафар
    {en:"Car", pr:"кар", tg:"мошин, автомобил", ex:"He drives a red car."},
    {en:"Bus", pr:"бас", tg:"автобус", ex:"I take the bus to work."},
    {en:"Train", pr:"трейн", tg:"поезд", ex:"The train is fast."},
    {en:"Plane", pr:"плейн", tg:"самолёт, тайёра", ex:"Travel by plane."},
    {en:"Road", pr:"роуд", tg:"роҳ", ex:"The road is long."},
    {en:"Street", pr:"стрит", tg:"кӯча", ex:"Walk down the street."},
    {en:"City", pr:"сити", tg:"шаҳр", ex:"Dushanbe is a big city."},
    {en:"Village", pr:"вилиҷ", tg:"деҳа", ex:"My grandparents live in a village."},
    {en:"Ticket", pr:"тикет", tg:"пта / чипта", ex:"Buy a ticket for the bus."},
    {en:"Station", pr:"стейшн", tg:"истгоҳ, вокзал", ex:"Wait at the station."},
    {en:"Airport", pr:"эйрпорт", tg:"фурудгоҳ", ex:"Arrive at the airport."},
    {en:"Travel", pr:"травел", tg:"сафар кардан", ex: "I love to travel."},
    {en:"Trip", pr:"трип", tg:"сафар, сари роҳ", ex:"Have a nice trip."},
    {en:"Driver", pr:"драйвер", tg:"ронанда", ex:"The bus driver is polite."},
    {en:"Stop", pr:"стоп", tg:"истедан, истгоҳ", ex:"The car must stop here."},
    {en:"Go", pr:"гоу", tg:"рафтан", ex:"Let's go home."},
    {en:"Come", pr:"кам", tg:"омадан", ex:"Come to my office."},
    {en:"Walk", pr:"уок", tg:"пиёда рафтан", ex:"I walk in the park."},
    {en:"Fast", pr:"фаст", tg:"тез", ex:"The train is fast."},
    {en:"Far", pr:"фар", tg:"дур", ex:"Is it far from here?"},

    // САҲИФАИ 18 - 15 феъл ва 5 сифати нав
    {en:"Help", pr:"хелп", tg:"кӯмак кардан", ex:"I want to help you."},
    {en:"Listen", pr:"лисен", tg:"гӯш кардан", ex:"Listen to the teacher."},
    {en:"Look", pr:"лук", tg:"нигоҳ кардан", ex:"Look at the blackboard."},
    {en:"Open", pr:"оупен", tg:"кушодан", ex:"Open the door."},
    {en:"Close", pr:"клоуз", tg:"пушидан, маҳкам кардан", ex:"Close the window."},
    {en:"Write", pr:"райт", tg:"навиштан", ex:"Write your name."},
    {en:"Read", pr:"рид", tg:"хондан", ex:"Read this book."},
    {en:"Give", pr:"гив", tg:"додан", ex:"Give me a pen."},
    {en:"Take", pr:"тейк", tg:"гирифтан", ex:"Take your bag."},
    {en:"Begin", pr:"бигин", tg:"оғоз кардан", ex:"Let's begin the lesson."},
    {en:"Finish", pr:"финиш", tg:"тамом кардан", ex:"Finish your work."},
    {en:"Find", pr:"файнд", tg:"ёфтан", ex:"Find the correct answer."},
    {en:"Show", pr:"шоу", tg:"нишон додан", ex:"Show me your notebook."},
    {en:"Change", pr:"чеиндж", tg:"иваз кардан", ex:"Change the topic."},
    {en:"Use", pr:"юз", tg:"истифода бурдан", ex:"Use a dictionary."},
    {en:"Clean", pr:"клин", tg:"тоза (сифат)", ex:"A clean room."},
    {en:"Dirty", pr:"дарти", tg:"ифлос", ex:"His shoes are dirty."},
    {en:"Easy", pr:"изи", tg:"осон", ex:"This task is easy."},
    {en:"Difficult", pr:"дификулт", tg:"душвор, мушкил", ex:"English is not difficult."},
    {en:"Important", pr:"импортант", tg:"муҳим", ex:"This is an important rule."},

    // САҲИФАИ 19 - 10 феъл, 5 сифат ва 5 зарфи такрор
    {en:"Work", pr:"уорк", tg:"кор кардан", ex: "I work hard every day."},
    {en:"Play", pr:"плей", tg:"бозӣ кардан", ex:"Children play football."},
    {en:"Talk", pr:"ток", tg:"суҳбат кардан, гап задан", ex:"Talk to your friend."},
    {en:"Ask", pr:"аск", tg:"пурсидан", ex:"Ask me a question."},
    {en:"Answer", pr:"ансер", tg:"ҷавоб додан", ex:"Answer the phone."},
    {en:"Understand", pr:"андерстанд", tg:"фаҳмидан", ex:"I understand English."},
    {en:"Remember", pr:"ремембер", tg:"дар ёд доштан, хотир овардан", ex:"Remember this rule."},
    {en:"Forget", pr:"форгет", tg:"фаромӯш кардан", ex:"Don't forget your keys."},
    {en:"Try", pr:"трай", tg:"кӯшиш кардан", ex:"Try to do your best."},
    {en:"Help", pr:"хелп", tg:"ёрӣ додан", ex:"Help your mother."},
    {en:"Happy", pr:"ҳэпӣ", tg:"хушбахт, шод", ex:"I am very happy today."},
    {en:"Sad", pr:"сэд", tg:"ғамгин", ex:"Why are you sad?"},
    {en:"Cold", pr:"колд", tg:"сармо, хунук", ex:"The weather is cold."},
    {en:"Hot", pr:"хот", tg:"гарм", ex:"Hot tea is good."},
    {en:"Tall", pr:"тол", tg:"қадбаланд, баланд", ex:"He is a tall man."},
    {en:"Always", pr:"олвейз", tg:"ҳамеша", ex:"I always drink tea."},
    {en:"Usually", pr:"южуалӣ", tg:"одатан", ex:"He usually wakes up early."},
    {en:"Often", pr:"офен", tg:"аксар вақт, тез-тез", ex:"We often read books."},
    {en:"Sometimes", pr:"самтаймз", tg:"баъзан", ex:"Sometimes I walk home."},
    {en:"Never", pr:"невер", tg:"ҳеҷ гоҳ", ex:"I never give up."}
];

const specialTopics = [
    {
        id: "self_intro",
        title: "Self Introduction (Муаррифии худ)",
        subtitle: "Мавзӯи махсус барои муаррифӣ дар идора ва ҷои кор",
        sentences: [
            { en: "Hello, my name is Ahmad.", pr: "Ҳэлоу, май нейм из Аҳмад", tg: "Салом, номи ман Аҳмад аст.", speechText: "Hello my name is Ahmad" },
            { en: "I work at the Ministry of Internal Affairs as a police officer.", pr: "Ай ворк эт зэ Министри ов Интэрнэл Эфэрз эз э полис офисер", tg: "Ман дар ВКД ҳамчун корманди полис кор мекунам.", speechText: "I work at the Ministry of Internal Affairs as a police officer" },
            { en: "I have been working here for 5 years.", pr: "Ай хэв бин воркинг хиэ фор файв йиэрз", tg: "Ман дар инҷо 5 сол боз кор мекунам.", speechText: "I have been working here for 5 years" },
            { en: "I am from Tajikistan, from Dushanbe.", pr: "Ай эм фром Таҷикистан, фром Душанбе", tg: "Ман аз Тоҷикистон, аз Душанбе ҳастам.", speechText: "I am from Tajikistan from Dushanbe" },
            { en: "I speak Tajik, Russian and I am learning English to be better in my job.", pr: "Ай спик Таҷик, Рашн энд ай эм лёрнинг Инглиш ту би бетер ин май ҷоб", tg: "Ман бо забонҳои тоҷикӣ, русӣ ҳарф мезанам ва англисиро барои беҳтар будан дар корам меомӯзам.", speechText: "I speak Tajik Russian and I am learning English to be better in my job" },
            { en: "In my free time, I like reading and learning new things.", pr: "Ин май фри тайм ай лайк ридинг энд лёрнинг нию сингс", tg: "Дар вақти холии худ, ман хондан ва омӯхтани чизҳои навро дӯст медорам.", speechText: "In my free time I like reading and learning new things" },
            { en: "Thank you.", pr: "Тэнк ю", tg: "Ташаккур.", speechText: "Thank you" }
        ]
    },
    {
        id: "official_titles",
        title: "Official Titles (муарифии ҷанобҳо ва мансабҳои давлатӣ)",
        subtitle: "Мавзӯи махсус оид ба шахсиятҳо ва мансабҳои давлатӣ",
        sentences: [
            { en: "Emomali Rahmon", pr: "Эмомалӣ Раҳмон", tg: "Эмомалӣ Раҳмон", speechText: "Emomali Rahmon" },
            { en: "Founder of Peace and National Unity - Leader of the Nation", pr: "Фаундер ов Пис энд Нэшэнал Юнити - Лидер ов зе Нейшин", tg: "Асосгузори сулҳу ваҳдати миллӣ - Пешвои миллат", speechText: "Founder of Peace and National Unity Leader of the Nation" },
            { en: "President of the Republic of Tajikistan", pr: "Президэнт ов зе Репаблик ов Точикистон", tg: "Президенти Ҷумҳурии Тоҷикистон", speechText: "President of the Republic of Tajikistan" },
            { en: "Ramazon Rahimzoda", pr: "Рамазон Раҳимзода", tg: "Рамазон Раҳимзода", speechText: "Ramazon Rahimzoda" },
            { en: "Minister of Internal Affairs of the Republic of Tajikistan", pr: "Министэр ов Интернал Афферз ов зе Репаблик ов Точикистон", tg: "Вазири корҳои дохилии Ҷумҳурии Тоҷикистон", speechText: "Minister of Internal Affairs of the Republic of Tajikistan" }
        ]
    }
];

const readingTexts = [
    "Tajikistan is a republic with its own law. Every citizen has rights, and the government protects the people. My father works at the ministry, and our family lives in Dushanbe.",
    "People live in cities, towns, and villages. A citizen follows the law and respects the peace. The agent checks the building while soldiers stand straight.",
    "The teacher explains a new lesson to the student. Open your notebook and write with a pen. Read the question carefully and give the correct answer.",
    "I want to learn a new word every day. I have good friends at school, and we always help each other. Now is the time to do good work and find a new way.",
    "Who is your friend? He is a student. Where do they live? They live in our city. What is this? It is my new book. Why do we study? We study to know how to speak.",
    "What's up? Hurry up, come on! As far as I know, the test is today. Of course, I don't know all the answers, but I agree we need to try. Good luck and take care!",
    "The book is on the table and the pen is in the bag. I go to school with my friend, but today I am at home because I am really tired. If you want, I can also read about it for you.",
    "We live and work in Dushanbe. I speak English and I understand it well. When I ask a question, my teacher helps me. I am happy to learn new words every day.",
    "One, two, three, four, five. I have five apples. Six, seven, eight, nine, ten. Ten books are on the table. Eleven, twelve, thirteen, fourteen, fifteen. I am fifteen years old. Sixteen, seventeen, eighteen, nineteen, twenty. Twenty students study English.",
    "Every week has seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. In the morning I go to work, and in the evening I study English. Yesterday was Tuesday, today is Wednesday, and tomorrow will be Thursday. Time is very important for us.",
    "There are twelve months in a year: January, February, March, April, May, June, July, August, September, October, November, and December. A year has four seasons: spring, summer, autumn, and winter. In summer the weather is hot and the sun shines, but in winter we have cold weather and snow.",
    "The Ministry of Internal Affairs includes key departments such as Criminal Investigation, Public Security, the State Traffic Inspectorate, and the Investigative Department. Officers, investigators, and inspectors serve in law enforcement to protect citizens, maintain public order, and ensure security. Cadets study at the training center and take their professional oath to serve the Motherland.",
    "I am very hungry at lunchtime. We go to a cafe to eat hot soup, meat, and rice, and drink hot tea with sugar. In the evening we have dinner at home with fresh bread, milk, and fruit.",
    "If you feel sick and have a high temperature or a pain, you need to stay at home, take your medicine, and rest. Health is very important in life. Wash your hands, sleep well, and call a doctor if you need help.",
    "Today I go to the shop to buy new clothes. I want a white shirt and black trousers. I ask the customer service about the price and size. Some clothes are expensive, but these shoes are cheap and I pay in cash.",
    "My house has a big yard and a green garden. Inside the house, there is a kitchen, a bathroom, and a bedroom. In the living room, a table and chairs stand near the window, and a clock hangs on the wall.",
    "When I want to travel to another city or a village, I buy a ticket at the station. I take a bus, a train, or a car. The road is long, but the driver is careful. Traveling by plane is very fast.",
    "Listen to me and look at the board. Open your book, read the text, and write down new words. This task is not difficult; it is very easy and important for everyone.",
    "I always work hard and usually talk with my friends. Sometimes we play football, and I often ask questions to understand new rules. Remember, never forget to try your best!"
];

const pages = Array.from({ length: Math.ceil(words.length / pageSize) }, (_, index) => ({
    title: `Саҳифаи ${index + 1}`,
    subtitle: index === 0 ? "Давлат, оила ва идора" : 
              index === 1 ? "Ҷомеа, шаҳр ва амрҳо" : 
              index === 2 ? "Дафтар ва омӯзиш" : 
              index === 3 ? "Феълҳо, исмҳо ва сифатҳо" : 
              index === 4 ? "Ҷонишинҳо ва саволҳо" : 
              index === 5 ? "Ибораҳои муҳим" :
              index === 6 ? "Пешояндҳо ва пайвандакҳо" :
              index === 7 ? "Феълҳо ва сифатҳои иловагӣ" :
              index === 8 ? "Рақамҳо (1-20)" :
              index === 9 ? "Вақт, рӯзҳо ва моҳҳо" :
              index === 10 ? "Моҳҳо ва фаслҳои сол" :
              index === 11 ? "Раёсат ва шуъбаҳои ВКД" :
              index === 12 ? "Хӯрок ва нӯшокиҳо" :
              index === 13 ? "Саломатӣ ва бадан" :
              index === 14 ? "Либос ва харид" :
              index === 15 ? "Хона ва ҳуҷраҳо" :
              index === 16 ? "Нақлиёт ва сафар" :
              index === 17 ? "Феълҳо ва сифатҳои нав" :
              "Феълҳо, сифатҳо ва зарфҳо",
    items: words.slice(index * pageSize, (index + 1) * pageSize)
}));
const state = {
    page: 0,
    activeTopicIndex: 0,
    currentTab: 'words'
};

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzEK-3rDjlFnSONbDBX-WR2p5JYR0uV3VZr0iLjsyFidk8JWe_GQdP0MrTe_plQTTyU/exec';

function switchMainTab(tab) {
    state.currentTab = tab;
    const wordsSec = document.getElementById("wordsSection");
    const topicsSec = document.getElementById("topicsSection");
    const navWords = document.getElementById("navWordsBtn");
    const navTopics = document.getElementById("navTopicsBtn");

    if (tab === 'words') {
        if (wordsSec) wordsSec.style.display = "block";
        if (topicsSec) topicsSec.style.display = "none";
        if (navWords) navWords.classList.add("active");
        if (navTopics) navTopics.classList.remove("active");
    } else {
        if (wordsSec) wordsSec.style.display = "none";
        if (topicsSec) topicsSec.style.display = "block";
        if (navWords) navWords.classList.remove("active");
        if (navTopics) navTopics.classList.add("active");
        renderSpecialTopics();
    }
}

function renderSpecialTopics() {
    const topicTabs = document.getElementById("topicTabs");
    const topicContent = document.getElementById("topicContent");
    if (!topicTabs || !topicContent) return;

    topicTabs.innerHTML = specialTopics.map((topic, index) => `
        <button class="page-tab ${index === state.activeTopicIndex ? 'active' : ''}" onclick="selectTopic(${index})">
            📌 ${topic.title}
        </button>
    `).join("");

    const currentTopic = specialTopics[state.activeTopicIndex];

    topicContent.innerHTML = `
        <div class="topic-header" style="margin-bottom: 20px;">
            <h2>${currentTopic.title}</h2>
            <p style="color: #666;">${currentTopic.subtitle}</p>
        </div>

        <div class="sentences-list">
            ${currentTopic.sentences.map((s, idx) => `
                <div class="word-card-item" style="margin-bottom: 15px; padding: 15px; border-radius: 10px; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div class="word-card-top">
                        <div class="word-card-title">
                            <span class="num">${idx + 1}.</span>
                            <span class="eng" style="font-size: 1.1rem; font-weight: 600;">${s.en}</span>
                        </div>
                        <div class="audio-actions">
                            <button class="speak" onclick="speak('${s.speechText.replace(/'/g, "\\'")}')" title="Шунидани овоз">🔊</button>
                            <button class="mic-btn" onclick="testPronunciation('${s.speechText.replace(/'/g, "\\'")}', 'topic_status_${idx}')" title="Санҷиши овоз">🎤</button>
                        </div>
                    </div>
                    <div class="word-card-body" style="margin-top: 8px;">
                        <span class="pron" style="color: #2563eb; font-weight: 500;">[${s.pr}]</span>
                    </div>
                    <div class="example" style="margin-top: 5px; color: #4b5563;">
                        💡 <strong>Тарҷума:</strong> ${s.tg}
                    </div>
                    <div class="voice-feedback" id="topic_status_${idx}"></div>
                </div>
            `).join("")}
        </div>

        <div class="reading-section" style="margin-top: 30px; background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h3>🎙 Сабти пурраи матн барои муаллим</h3>
            <p style="font-size: 0.95rem; color: #475569;">Лутфан ҳамаи ҷумлаҳои болоро бо овоз хонда, сабт кунед ва тугмаи фиристоданро зер кунед.</p>
            <div style="margin: 15px 0;">
                <button id="topicStartRecBtn" class="action-btn" onclick="startTopicRecording()">🔴 Оғози сабт</button>
                <button id="topicStopRecBtn" class="action-btn" disabled onclick="stopTopicRecording()">⏹ Стоп</button>
            </div>
            <div id="topicRecStatus" style="font-weight: 500; margin-bottom: 10px;"></div>
            <audio id="topicAudioPreview" controls style="display:none; width: 100%; margin-bottom: 10px;"></audio>
            <button id="topicSendVoiceBtn" class="action-btn primary" style="display:none; background: #16a34a; color:#fff;" onclick="sendTopicVoice()">🚀 Фиристодан ба муаллим</button>
        </div>
    `;
}

function selectTopic(index) {
    state.activeTopicIndex = index;
    renderSpecialTopics();
}

// СОХТОРИ МАШҚҲО
let exerciseStep = 1; 
let exerciseScore = 0;
let isProcessingStep = false;
let currentQuizList = [];
let currentWriteList = [];
let currentSentenceItem = null;
let quizIndex = 0;
let writeIndex = 0;
let quizWord = null;
let selectedChoice = null;
let sentenceWords = [];
let placedWords = [];

function initExercise() {
    exerciseStep = 1;
    exerciseScore = 0;
    isProcessingStep = false;
    quizIndex = 0;
    writeIndex = 0;
    
    const pageItems = [...pages[state.page].items].sort(() => Math.random() - 0.5);
    currentQuizList = pageItems.slice(0, 5);
    currentWriteList = pageItems.slice(5, 10);
    currentSentenceItem = pageItems[10] || pageItems[0];

    updateExerciseUI();
}

function updateExerciseUI() {
    document.getElementById('resultBox').style.display = 'none';
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('show');
    celebration.innerHTML = "";
    
    const roundsContainer = document.getElementById('rounds');
    if (roundsContainer) {
        roundsContainer.innerHTML = `
            <span class="round-pill ${exerciseStep <= 5 ? 'active' : 'open'}">Тестҳо (${Math.min(quizIndex + 1, 5)}/5)</span>
            <span class="round-pill ${exerciseStep > 5 && exerciseStep <= 10 ? 'active' : (exerciseStep > 10 ? 'open' : '')}">Навиштан (${Math.min(writeIndex + 1, 5)}/5)</span>
            <span class="round-pill ${exerciseStep === 11 ? 'active' : ''}">Ҷобаҷогузорӣ</span>
        `;
    }

    document.getElementById('round1').style.display = (exerciseStep <= 5) ? 'block' : 'none';
    document.getElementById('round2').style.display = (exerciseStep > 5 && exerciseStep <= 10) ? 'block' : 'none';
    document.getElementById('round3').style.display = (exerciseStep === 11) ? 'block' : 'none';

    if (exerciseStep <= 5) {
        renderQuizStep();
    } else if (exerciseStep > 5 && exerciseStep <= 10) {
        renderWriteStep();
    } else if (exerciseStep === 11) {
        renderSentenceStep();
    }
}

function renderQuizStep() {
    quizWord = currentQuizList[quizIndex];
    let options = [quizWord.tg];
    while (options.length < 4) {
        let randomItem = words[Math.floor(Math.random() * words.length)].tg;
        if (!options.includes(randomItem)) options.push(randomItem);
    }
    options = options.sort(() => Math.random() - 0.5);

    const box = document.getElementById('quizBox');
    box.innerHTML = `
        <div class="question">
            <strong>Тест ${quizIndex + 1} аз 5. Тарҷумаи калимаро интихоб кунед:</strong>
            <h4 style="font-size:1.5rem; color:#16324f; margin:10px 0;">${quizWord.en}</h4>
        </div>
        <div class="choices" id="choicesList">
            ${options.map(opt => `<button class="choice-btn" onclick="selectChoice(this, '${opt}')">${opt}</button>`).join('')}
        </div>
    `;
    selectedChoice = null;
}

function selectChoice(btn, choice) {
    document.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedChoice = choice;
}

function renderWriteStep() {
    quizWord = currentWriteList[writeIndex];
    const box = document.getElementById('writeBox');
    box.innerHTML = `
        <div class="question">
            <strong>Навиштан ${writeIndex + 1} аз 5. Ин калима бо англисӣ чӣ мешавад?</strong>
            <h4 style="font-size:1.5rem; color:#16324f; margin:10px 0;">${quizWord.tg}</h4>
        </div>
        <input type="text" class="write-input" id="writeInput" placeholder="Калимаи англисиро нависед..." autocomplete="off">
        <div class="correction" id="writeCorrection">Ҷавоби дуруст: ${quizWord.en}</div>
    `;
}

function renderSentenceStep() {
    quizWord = currentSentenceItem;
    const sentence = quizWord.ex.replace(/[.,]/g, '');
    sentenceWords = sentence.split(' ').filter(w => w.length > 0);
    let shuffled = [...sentenceWords].sort(() => Math.random() - 0.5);
    placedWords = [];

    const box = document.getElementById('sentenceTaskBox');
    box.innerHTML = `
        <div class="sentence-target"><strong>Ҷобаҷогузории ҷумла. Тарҷума:</strong> ${quizWord.tg} (Барои калимаи: ${quizWord.en})</div>
        <p style="font-size:0.9rem; color:#666;">Ҷумларо бо тартиб созед:</p>
        <div class="answer-line empty" id="answerLine"></div>
        <div class="word-bank" id="wordBank">
            ${shuffled.map((w, i) => `<button class="word-chip" id="chip_${i}" onclick="placeWord('${w.replace(/'/g, "\\'")}', ${i})">${w}</button>`).join('')}
        </div>
    `;
}

function placeWord(word, index) {
    placedWords.push(word);
    document.getElementById(`chip_${index}`).classList.add('used');
    renderAnswerLine();
}

function renderAnswerLine() {
    const line = document.getElementById('answerLine');
    line.classList.remove('empty');
    line.innerHTML = placedWords.map(w => `<span class="word-chip placed-chip">${w}</span>`).join('');
}

// ПЕШГИРИИ КЛИКИ ДУБОРА ВА ИҶРОИ ДУРУСТИ МАШҚҲО
document.getElementById('checkBtn')?.addEventListener('click', () => {
    if (isProcessingStep) return;

    if (exerciseStep <= 5) {
        if (!selectedChoice) return alert("Яке аз ҷавобҳоро интихоб кунед!");
        isProcessingStep = true;
        if (selectedChoice === quizWord.tg) {
            exerciseScore++;
            showResult(true, "✅ Офарин! Ҷавоб дуруст аст.");
        } else {
            showResult(false, `❌ Хато. Ҷавоби дуруст: ${quizWord.tg}`);
        }
        setTimeout(() => {
            quizIndex++;
            exerciseStep++;
            isProcessingStep = false;
            updateExerciseUI();
        }, 1200);
    } else if (exerciseStep > 5 && exerciseStep <= 10) {
        const val = document.getElementById('writeInput').value.trim().toLowerCase();
        if (!val) return alert("Калимаро нависед!");
        isProcessingStep = true;
        if (val === quizWord.en.toLowerCase()) {
            exerciseScore++;
            showResult(true, "✅ Беҳтарин! Шумо калимаро дуруст навиштед.");
            setTimeout(() => {
                writeIndex++;
                exerciseStep++;
                isProcessingStep = false;
                updateExerciseUI();
            }, 1200);
        } else {
            showResult(false, `❌ Хато.`);
            document.getElementById('writeCorrection').classList.add('show');
            setTimeout(() => {
                writeIndex++;
                exerciseStep++;
                isProcessingStep = false;
                updateExerciseUI();
            }, 2000);
        }
    } else if (exerciseStep === 11) {
        if (placedWords.length !== sentenceWords.length) return alert("Ҳамаи калимаҳоро ҷойгир кунед!");
        isProcessingStep = true;
        if (placedWords.join(' ') === sentenceWords.join(' ')) {
            exerciseScore++;
            showResult(true, "✅ Ҷумла дуруст сохта шуд!");
        } else {
            showResult(false, "❌ Тартиби калимаҳо нодуруст аст.");
        }
        setTimeout(() => {
            isProcessingStep = false;
            finishExercises();
        }, 1500);
    }
});

function showResult(isGood, msg) {
    const box = document.getElementById('resultBox');
    box.style.display = 'block';
    box.className = 'result ' + (isGood ? 'good' : 'try');
    box.textContent = msg;
    setTimeout(() => { if(isGood) box.style.display = 'none'; }, 1200);
}

function finishExercises() {
    document.getElementById('quizBox').innerHTML = "";
    document.getElementById('writeBox').innerHTML = "";
    document.getElementById('sentenceTaskBox').innerHTML = "";
    document.getElementById('resultBox').style.display = 'none';

    const celebration = document.getElementById('celebration');
    celebration.classList.add('show');
    celebration.innerHTML = `
        🎉 Табрик! Шумо ҳамаи машқҳои ин саҳифаро анҷом додед.<br>
        <strong>Натиҷаи шумо: ${exerciseScore} аз 11 хол</strong><br><br>
        <button id="sendQuizBtn" class="action-btn primary" style="background:#16a34a; color:#fff; width:100%; margin-top:10px;" onclick="sendQuizResultsToTeacher()">
            📤 Фиристодани натиҷа ба муаллим
        </button>
        <div id="quizSendStatus" style="margin-top:10px; font-weight:bold; font-size:1rem;"></div>
    `;
}

// ✅ ФИРИСТОДАНИ НАТИҶА – ИСЛОҲШУДА (action: "send_score")
function sendQuizResultsToTeacher() {
    const studentName = checkStudentName();
    if (!studentName) return;

    const sendBtn = document.getElementById('sendQuizBtn');
    const statusDiv = document.getElementById('quizSendStatus');

    if (sendBtn) sendBtn.disabled = true;
    if (statusDiv) {
        statusDiv.style.color = "#1d4ed8";
        statusDiv.textContent = "⏳ Натиҷа ба муаллим фиристода шуда истодааст...";
    }

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: "send_score",           // ← ин амалест, ки сервер ба Telegram мефиристад
            name: studentName,
            score: `${exerciseScore} / 11`,
            readingTitle: `Саҳифаи ${state.page + 1}`
        })
    }).then(() => {
        if (statusDiv) {
            statusDiv.style.color = "#15803d";
            statusDiv.textContent = `🎉 Натиҷаи ${exerciseScore}/11 бомуваффақият ба муаллим фиристода шуд!`;
        }
        if (sendBtn) sendBtn.style.display = "none";
    }).catch((err) => {
        console.error("Хатогӣ:", err);
        if (statusDiv) {
            statusDiv.style.color = "#b91c1c";
            statusDiv.textContent = "❌ Хатогӣ ҳангоми фиристодани натиҷа!";
        }
        if (sendBtn) sendBtn.disabled = false;
    });
}

function checkStudentName() {
    const input = document.getElementById("studentNameInput");
    const name = input ? input.value.trim() : "";
    if (!name) {
        alert("⚠️ Лутфан аввал дар боло ном ва насаби худро нависед!");
        if (input) input.focus();
        return null;
    }
    return name;
}

function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
}

function renderTabs() {
    const pageTabs = document.getElementById("pageTabs");
    if (!pageTabs) return;
    pageTabs.innerHTML = pages.map((page, index) => `
        <button class="page-tab ${index === state.page ? 'active' : ''}" onclick="changePage(${index})">
            ${page.title}
        </button>
    `).join("");
}

function renderPage() {
    const page = pages[state.page];
    const wordRows = document.getElementById("wordRows");
    
    const readingEl = document.getElementById("readingTextContent");
    if (readingEl && readingTexts[state.page]) {
        readingEl.textContent = readingTexts[state.page];
    }

    if (!wordRows) return;
    renderRows(page.items);
    renderTabs();
    initExercise();
}

function renderRows(items) {
    const wordRows = document.getElementById("wordRows");
    if (!wordRows) return;
    wordRows.innerHTML = items.map((item, index) => `
        <div class="word-card-item">
            <div class="word-card-top">
                <div class="word-card-title">
                    <span class="num">${index + 1}.</span>
                    <span class="eng">${item.en}</span>
                </div>
                <div class="audio-actions">
                    <button class="speak" onclick="speak('${item.en.replace(/'/g, "\\'")}')" title="Шунидани талафуз">🔊</button>
                    <button class="mic-btn" onclick="testPronunciation('${item.en.replace(/'/g, "\\'")}', 'status_${index}')" title="Талаффузи худро санҷед">🎤</button>
                </div>
            </div>
            <div class="word-card-body">
                <span class="pron">[${item.pr}]</span> — <span class="tg-word"><strong>${item.tg}</strong></span>
            </div>
            <div class="example">💬 ${item.ex}</div>
            <div class="voice-feedback" id="status_${index}"></div>
        </div>
    `).join("");
}

function testPronunciation(targetWord, elementId) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const statusBox = document.getElementById(elementId);

    if (!SpeechRecognition) {
        alert("Браузери шумо санҷиши овозиро дастгирӣ намекунад.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    statusBox.className = "voice-feedback listening";
    statusBox.textContent = "🎙 Гӯш карда истодаам, калимаро 100% дақиқ гӯед...";

    recognition.start();

    recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript.toLowerCase().trim();
        const cleanTarget = targetWord.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
        const cleanSpoken = spokenWord.replace(/[^a-z0-9 ]/g, '');

        if (cleanSpoken === cleanTarget) {
            statusBox.className = "voice-feedback success";
            statusBox.innerHTML = `✅ Офарин! Талаффузи 100% дуруст: <b>"${event.results[0][0].transcript}"</b>`;
        } else {
            statusBox.className = "voice-feedback error";
            statusBox.innerHTML = `❌ Хато! Шумо гуфтед: <b>"${event.results[0][0].transcript}"</b> <br>Асли калима/ҷумла: <b>"${targetWord}"</b>`;
        }
    };

    recognition.onerror = () => {
        statusBox.className = "voice-feedback error";
        statusBox.textContent = "⚠️ Овоз шунида нашуд ё талаффуз нодуруст аст.";
    };
}

function changePage(index) {
    state.page = index;
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

let readingMediaRecorder = null;
let readingAudioChunks = [];
let readingBase64Audio = null;

async function startReadingRecording() {
    if (!checkStudentName()) return;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
        readingMediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
        readingAudioChunks = [];

        readingMediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) readingAudioChunks.push(e.data);
        };

        readingMediaRecorder.onstop = () => {
            const audioBlob = new Blob(readingAudioChunks, { type: readingMediaRecorder.mimeType || 'audio/webm' });
            const audioPreview = document.getElementById("audioPreview");
            const recStatus = document.getElementById("recStatus");
            const sendVoiceBtn = document.getElementById("sendVoiceBtn");

            audioPreview.src = URL.createObjectURL(audioBlob);
            audioPreview.style.display = "block";

            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = function () {
                readingBase64Audio = reader.result.split(',')[1];
                if (recStatus) {
                    recStatus.textContent = "✅ Овоз сабт шуд!";
                    recStatus.style.color = "#166534";
                }
                if (sendVoiceBtn) sendVoiceBtn.style.display = "block";
            };
        };

        readingMediaRecorder.start();
        document.getElementById("startRecBtn").disabled = true;
        document.getElementById("stopRecBtn").disabled = false;
        
        const recStatus = document.getElementById("recStatus");
        if (recStatus) {
            recStatus.textContent = "🔴 Сабти овоз рафта истодааст...";
            recStatus.style.color = "#ef4444";
        }
    } catch (err) {
        alert("Лутфан ба микрофон иҷозат диҳед!");
    }
}

function stopReadingRecording() {
    if (readingMediaRecorder && readingMediaRecorder.state !== "inactive") {
        readingMediaRecorder.stop();
        readingMediaRecorder.stream.getTracks().forEach(t => t.stop());
        document.getElementById("startRecBtn").disabled = false;
        document.getElementById("stopRecBtn").disabled = true;
    }
}

function sendReadingVoice() {
    const studentName = checkStudentName();
    if (!studentName || !readingBase64Audio) return alert("⚠️ Лутфан аввал овозро сабт кунед!");

    const recStatus = document.getElementById("recStatus");
    const sendVoiceBtn = document.getElementById("sendVoiceBtn");
    
    if (recStatus) recStatus.textContent = "⏳ Маълумот фиристода шуда истодааст...";
    sendVoiceBtn.disabled = true;

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: "send_voice",
            name: studentName,
            studentName: studentName,
            readingTitle: `Саҳифаи ${state.page + 1}: Reading`,
            audioBase64: readingBase64Audio
        })
    }).then(() => {
        if (recStatus) {
            recStatus.textContent = "🎉 Овоз бо муваффақият ба муаллим фиристода шуд!";
            recStatus.style.color = "#15803d";
        }
        sendVoiceBtn.style.display = "none";
        readingBase64Audio = null;
    }).catch(() => {
        if (recStatus) recStatus.textContent = "❌ Хатогӣ ҳангоми фиристодан!";
        sendVoiceBtn.disabled = false;
    });
}

let topicMediaRecorder = null;
let topicAudioChunks = [];
let topicBase64Audio = null;

async function startTopicRecording() {
    if (!checkStudentName()) return;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
        topicMediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
        topicAudioChunks = [];

        topicMediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) topicAudioChunks.push(e.data);
        };

        topicMediaRecorder.onstop = () => {
            const audioBlob = new Blob(topicAudioChunks, { type: topicMediaRecorder.mimeType || 'audio/webm' });
            const audioPreview = document.getElementById("topicAudioPreview");
            const recStatus = document.getElementById("topicRecStatus");
            const sendVoiceBtn = document.getElementById("topicSendVoiceBtn");

            audioPreview.src = URL.createObjectURL(audioBlob);
            audioPreview.style.display = "block";

            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = function () {
                topicBase64Audio = reader.result.split(',')[1];
                if (recStatus) {
                    recStatus.textContent = "✅ Овоз сабт шуд!";
                    recStatus.style.color = "#166534";
                }
                if (sendVoiceBtn) sendVoiceBtn.style.display = "block";
            };
        };

        topicMediaRecorder.start();
        document.getElementById("topicStartRecBtn").disabled = true;
        document.getElementById("topicStopRecBtn").disabled = false;
        
        const recStatus = document.getElementById("topicRecStatus");
        if (recStatus) {
            recStatus.textContent = "🔴 Сабти овоз рафта истодааст...";
            recStatus.style.color = "#ef4444";
        }
    } catch (err) {
        alert("Лутфан ба микрофон иҷозат диҳед!");
    }
}

function stopTopicRecording() {
    if (topicMediaRecorder && topicMediaRecorder.state !== "inactive") {
        topicMediaRecorder.stop();
        topicMediaRecorder.stream.getTracks().forEach(t => t.stop());
        document.getElementById("topicStartRecBtn").disabled = false;
        document.getElementById("topicStopRecBtn").disabled = true;
    }
}

function sendTopicVoice() {
    const studentName = checkStudentName();
    if (!studentName || !topicBase64Audio) return alert("⚠️ Лутфан аввал овозро сабт кунед!");

    const recStatus = document.getElementById("topicRecStatus");
    const sendVoiceBtn = document.getElementById("topicSendVoiceBtn");
    
    if (recStatus) recStatus.textContent = "⏳ Маълумот фиристода шуда истодааст...";
    sendVoiceBtn.disabled = true;

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: "send_voice",
            name: studentName,
            studentName: studentName,
            readingTitle: `Мавзӯи махсус: ${specialTopics[state.activeTopicIndex].title}`,
            audioBase64: topicBase64Audio
        })
    }).then(() => {
        if (recStatus) {
            recStatus.textContent = "🎉 Овоз бо муваффақият ба муаллим фиристода шуд!";
            recStatus.style.color = "#15803d";
        }
        sendVoiceBtn.style.display = "none";
        topicBase64Audio = null;
    }).catch(() => {
        if (recStatus) recStatus.textContent = "❌ Хатогӣ ҳангоми фиристодан!";
        sendVoiceBtn.disabled = false;
    });
}

renderPage();
