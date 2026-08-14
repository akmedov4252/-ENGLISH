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
    {en:"Pen", pr:"пен", tg:"қалам", ex:"I write with a pen."},
    {en:"Read", pr:"рид", tg:"хондан", ex:"Read the sentence aloud."},
    {en:"Write", pr:"райт", tg:"навиштан", ex:"Write the English word."},
    {en:"Learn", pr:"лёрн", tg:"омӯхтан", ex:"We learn five words today."},
    {en:"Easy", pr:"изи", tg:"осон", ex:"This exercise is easy."},
    {en:"Answer", pr:"ансер", tg:"ҷавоб", ex:"Choose the correct answer."},
    {en:"Question", pr:"квесчн", tg:"савол", ex:"This question is simple."},
    {en:"Correct", pr:"корект", tg:"дуруст", ex:"Your answer is correct."},
    {en:"Mistake", pr:"мистейк", tg:"хато", ex:"Find your mistake and fix it."}
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
    }
];

const readingTexts = [
    "Tajikistan is a republic with its own law. Every citizen has rights, and the government protects the people. My father works at the ministry, and our family lives in Dushanbe.",
    "People live in cities, towns, and villages. A citizen follows the law and respects the peace. The agent checks the building while soldiers stand straight.",
    "The teacher explains a new lesson to the student. Open your notebook and write with a pen. Read the question carefully and give the correct answer."
];

const pageSize = 20;
const pages = Array.from({ length: Math.ceil(words.length / pageSize) }, (_, index) => ({
    title: `Саҳифаи ${index + 1}`,
    subtitle: index === 0 ? "Давлат, оила ва идора" : index === 1 ? "Ҷомеа, шаҳр ва амрҳо" : "Дарс, дафтар ва омӯзиш",
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
