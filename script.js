document.addEventListener('DOMContentLoaded', () => {
    const allLessons = [
        {
            id: 1,
            title: "Урок 1: Душа Чтения — Что такое Таджвид",
            content: `
                <h2>🕌 Урок 1: Душа Чтения — Что такое Таджвид и почему он так важен</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы поймем истинное значение слова «Таджвид» (تَجْوِيد) и узнаем, почему его изучение — это прекрасная форма поклонения.</p>
                
                <h3>📚 Четкое Объяснение</h3>
                <p>На арабском языке «Таджвид» (تَجْوِيد) означает «улучшать», «делать что-то превосходным» или «украшать». Когда мы говорим о Коране, Таджвид — это наука о том, как дать каждой букве ее <strong>право</strong> (ее <strong>хакк</strong>).</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Почему так важно произносить все правильно? Потому что в арабском языке малейшее изменение в звуке может... полностью <strong>изменить смысл</strong>. Например, (قُلْ - Скажи) и (كُلْ - Ешь). Если вы читаете Суру «Аль-Ихляс» и... произнесете «<strong>К</strong>уль...» (Ешь...), смысл полностью искажается!</p>

                <h3>📖 Примеры из Корана</h3>
                <p>Аллах Всевышний повелевает нам:</p>
                <div class="quran-text">أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</div>
                <p class="transliteration">"Wa rattil-il-Qur'āna tartīlā." (Сура: Аль-Муззаммиль, 73:4)</p>
                <p class="explanation"><strong>Объяснение:</strong> «...и читай Коран размеренным чтением (тартиль)». Слово <strong>Тартиль</strong> — это и есть сердце Таджвида.</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика: Повторяйте Суру Аль-Фатиха</p>
                </div>

                <h3>🧠 Тест по Уроку 1</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Что означает слово "Таджвид" (تَجْوِيد) в языковом значении?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Ускорение</button>
                        <button data-correct="true">B) Улучшение или украшение</button>
                        <button data-correct="false">C) Пауза</button>
                    </div>
                    <p class="quiz-question">Какая ошибка может полностью исказить смысл аята "قُلْ هُوَ اللَّهُ أَحَدٌ"?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Произнести (قُلْ) как (كُلْ)</button>
                        <button data-correct="false">B) Протянуть слово "Ахад"</button>
                        <button data-correct="false">C) Прочитать слишком быстро</button>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Урок 2: Ключи к Корану — 28 Арабских Букв",
            content: `
                <h2>🕌 Урок 2: Ключи к Корану — 28 Арабских Букв</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы познакомимся со всеми 28 буквами (Хуруф аль-Хиджа'ийя) — мы узнаем их имена, как они выглядят и... как они звучат.</p>
                
                <h3>📚 Четкое Объяснение</h3>
                <p>Арабский алфавит — это основа всего. В отличие от русского, арабский язык пишется и читается <strong>справа налево</strong>.</p>
                <p>У каждой буквы есть <strong>имя</strong> (например, «Алиф», «Ба», «Та») и <strong>звук</strong> (например, «а», «ба», «та»).</p>

                <h3>✍️ Подробное Описание (Алфавит)</h3>
                <p>Давайте посмотрим на них.</p>
                <table class="lesson-table">
                    <thead><tr><th>Буква</th><th>Имя</th><th>Звук (с Фатхой)</th></tr></thead>
                    <tbody>
                        <tr><td>ا</td><td>Алиф</td><td>(служит для удлинения)</td></tr>
                        <tr><td>ب</td><td>Ба</td><td>بَ (ба)</td></tr>
                        <tr><td>ت</td><td>Та</td><td>تَ (та)</td></tr>
                        <tr><td>ث</td><td>Cа</td><td>ثَ (са - межзубный)</td></tr>
                        <tr><td>ج</td><td>Джим</td><td>جَ (джа)</td></tr>
                        <tr><td>ح</td><td>Ха</td><td>حَ (ха - мягкий, из горла)</td></tr>
                        <tr><td>خ</td><td>Кха</td><td>خَ (кха - твердый, хриплый)</td></tr>
                        <tr><td>...</td><td>...</td><td>...</td></tr>
                        <tr><td>ي</td><td>Йа</td><td>يَ (йа)</td></tr>
                    </tbody>
                </table>
                <p class="explanation"><strong>Очень важный момент:</strong> Не волнуйтесь, если вы не можете произнести их все идеально прямо сейчас! Буквы, как (ع ,ح ,ق ,ض), требуют практики.</p>

                <h3>📖 Примеры из Корана</h3>
                <p>Посмотрите, как эти буквы соединяются:</p>
                <div class="quran-text">بِسْمِ</div>
                <p class="transliteration">"Bismi" (Аль-Фатиха, 1:1)</p>
                <p><strong>Объяснение:</strong> Вы уже знаете эти буквы! بِ (Ба), سْ (Син), مِ (Мим). Они просто соединились.</p>

               <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика: Алфавит</p>
                </div>
                <h3>🧠 Тест по Уроку 2</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Как читается арабский язык?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Слева направо</button>
                        <button data-correct="true">B) Справа налево</button>
                        <button data-correct="false">C) Сверху вниз</button>
                    </div>
                    <p class="quiz-question">Какие три буквы легко спутать, так как они отличаются только точками?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) ج , ح , خ</button>
                        <button data-correct="false">B) د , ذ , ر</button>
                        <button data-correct="true">C) ب , ت , ث</button>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            title: "Урок 3: Где «живут» буквы — Махаридж аль-Хуруф",
            content: `
                <h2>🕌 Урок 3: Где «живут» буквы — Махаридж аль-Хуруф</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы поймем, что такое Махрадж (مَخْرَج), и познакомимся с 5 основными «адресами»...</p>
                
                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Махаридж</strong> (مَخَارِج) ... означает «место выхода». В Таджвиде есть <strong>5 основных областей</strong>:</p>
                <ul>
                    <li><strong>Аль-Джауф (الْجَوْفُ)</strong> – Полость</li>
                    <li><strong>Аль-Хальк (الْحَلْقُ)</strong> – Горло</li>
                    <li><strong>Аль-Лисан (اللِّسَانُ)</strong> – Язык</li>
                    <li><strong>Аш-Шафатан (الشَّفَتَانِ)</strong> – Губы</li>
                    <li><strong>Аль-Хайшум (الْخَيْشُومُ)</strong> – Носовая полость</li>
                </ul>

                <h3>✍️ Подробное Описание (5 Основных Областей)</h3>
                <p><strong>Аль-Хальк (الْحَلْقُ) - Горло:</strong> Здесь «живут» 6 букв, разделенные на три уровня:</p>
                <ul>
                    <li><strong>Дальняя часть горла:</strong> ء (Хамза) и ه (Ха)</li>
                    <li><strong>Средняя часть горла:</strong> ع ('Айн) и ح (Ха)</li>
                    <li><strong>Ближняя часть горла:</strong> غ (Гъайн) и خ (Кха)</li>
                </ul>
                <p><strong>Аль-Хайшум (الْخَيْشُومُ) - Носовая полость:</strong> Здесь рождается качество... <strong>Гунна (غُنَّة)</strong> — ...назальный (носовой) звук, который сопровождает буквы م (Мим) и ن (Нун).</p>

                <h3>🗣 Практическое Упражнение</h3>
                <p class="explanation"><strong>Секрет Таджвида:</strong> Лучший способ найти махрадж буквы — это поставить на нее Сукун (°) и произнести перед ней Хамзу (ء). Например... скажите: «Аб!» (أَبْ). Где ваши губы сомкнулись — там и есть ее «дом»!</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 3</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какая из 5 областей является «домом» для букв Мадд (удлинения)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Аль-Джауф (Полость)</button>
                        <button data-correct="false">B) Аль-Хальк (Горло)</button>
                        <button data-correct="false">C) Аш-Шафатан (Губы)</button>
                    </div>
                    <p class="quiz-question">Какие буквы «живут» в Средней части горла?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) ء (Хамза) и ه (Ха)</button>
                        <button data-correct="false">B) غ (Гъайн) и خ (Кха)</button>
                        <button data-correct="true">C) ع ('Айн) и ح (Ха)</button>
                    </div>
                </div>
            `
        },
        {
            id: 4,
            title: "Урок 4: «Характер» Букв — Сифат аль-Хуруф",
            content: `
                <h2>🕌 Урок 4: «Характер» Букв — Сифат аль-Хуруф</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы поймем, что такое Сифат (صِفَات) и почему одни буквы звучат твердо... а другие — ...мягко.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Если <strong>Махрадж</strong> (Урок 3) — это «дом» буквы, то <strong>Сифат</strong>... — это ее «личность» или «характер». Например, буквы ت (Та) и ط (Та) рождаются в одном месте. Но ت (Та) — мягкая, а ط (Та) — очень твердая... Это качество (твердость) и есть Сифат.</p>
                
                <h3>✍️ Подробное Описание (Твердые и Мягкие)</h3>
                <p>Мы изучим... <strong>Исти'ля</strong> (Твердые Буквы) против <strong>Истифаль</strong> (Мягкие Буквы).</p>
                
                <h4>1. Аль-Исти'ля (الْإِسْتِعْلَاء) — «Возвышение» (Твердые Буквы)</h4>
                <p>При произнесении... <strong>корень (задняя часть) языка</strong> поднимается к верхнему нёбу. Это делает звук «твердым»... (Тафхим). Их семь: <strong>خ (Кха), ص (Сад), ض (Дад), غ (Гъайн), ط (Та), ق (Каф), ظ (За)</strong>.</p>
                
                <h4>2. Аль-Истифаль (الْإِسْتِفَال) — «Опускание» (Мягкие Буквы)</h4>
                <p>При произнесении... <strong>корень языка</strong> остается внизу... Это делает звук «мягким»... (Таркык). Буквы: <strong>Все остальные буквы алфавита</strong>.</p>

                <h3>📖 Примеры из Корана</h3>
                <div class="quran-text">الصِّرَاطَ</div>
                <p class="transliteration">"As-Sirāta" (Аль-Фатиха, 1:6)</p>
                <p class="explanation"><strong>Объяснение:</strong> В этом слове... две твердые буквы: <strong>ص (Сад)</strong> и <strong>ط (Та)</strong>. Почувствуйте, как ваш язык поднимается сзади, чтобы сделать их плотными...</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 4</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Что такое "Сифат" (атрибут) буквы?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) "Дом" буквы (место рождения)</button>
                        <button data-correct="true">B) "Характер" буквы (ее качества)</button>
                        <button data-correct="false">C) Скорость чтения буквы</button>
                    </div>
                    <p class="quiz-question">Какое действие делает 7 букв "Исти'ля" (خ, ص, ض...) твердыми?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Поднятие корня (задней части) языка</button>
                        <button data-correct="false">B) Округление губ (выпячивание)</button>
                        <button data-correct="false">C) Вибрация кончика языка</button>
                    </div>
                </div>
            `
        },
        {
            id: 5,
            title: "Урок 5: Дыхание и Артикуляция",
            content: `
                <h2>🕌 Урок 5: Дыхание и Артикуляция — Подготовка к Чтению</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся двум вещам: как правильно дышать... и как «разбудить» наши губы, язык и горло для четкого произношения.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Чтение Корана — это не то же самое, что обычный разговор. Нам нужен более глубокий... запас воздуха. Большинство из нас дышит «грудью»... Для Корана нам нужно «диафрагмальное» дыхание — <strong>дыхание животом</strong>.</p>
                <p><strong>Артикуляция (Ан-Нутк - النُّطْقُ):</strong> ...Мы должны «размять» наши речевые «мышцы» — язык, губы и горло...</p>

                <h3>✍️ Подробное Описание</h3>
                <p><strong>Правильно:</strong> Сядьте прямо, расслабьте плечи. Сделайте <strong>медленный, тихий вдох через нос</strong>. Почувствуйте, как надувается не грудь, а <strong>живот</strong>.</p>
                
                <h3>📖 Примеры из Корана (Практика Дыхания)</h3>
                <p><strong>Сунна-остановка (Сура Аль-Фатиха):</strong> Пророк (ﷺ) читал Суру «Аль-Фатиха», останавливаясь в конце каждого аята. Это идеальная тренировка...</p>
                <p>Возьмите глубокий вдох (животом). Читайте: (بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ) ... Остановитесь. Выдохните. Возьмите новый глубокий вдох. Читайте: (الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ) ... Остановитесь.</p>

                <h3>🗣 Практическое Упражнение («Разминка Чтеца»)</h3>
                <ul>
                    <li><strong>Дыхание (3 раза):</strong> Медленный, глубокий вдох <strong>через нос</strong> (на 4 счета), наполняя живот. Задержите (на 4 счета). Медленный... выдох <strong>через рот</strong> (на 8 счетов)...</li>
                    <li><strong>Губы (По 5 раз):</strong> Четко и энергично: بَ - بُ - بِ (Ба - Бу - Би)</li>
                    <li><strong>Язык (По 5 раз):</strong> Кончик языка (быстро): لَ لَ لَ لَ لَ (Ля-ля-ля-ля-ля)</li>
                    <li><strong>Горло (По 3 раза, мягко!):</strong> Середина горла: حَ - حُ - حِ (Ха - Ху - Хи)</li>
                </ul>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Вдох ртом посреди слова:</strong> Это категорически запрещено в Таджвиде...</p>
                <p><strong>Читать на «последнем издыхании»:</strong> Когда воздух заканчивается, голос становится слабым, и вы «проглатываете» буквы...</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 5</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какой тип дыхания является правильным для чтения Корана?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Быстрое дыхание ртом</button>
                        <button data-correct="false">B) Неглубокое "дыхание грудью"</button>
                        <button data-correct="true">C) Глубокое "диафрагмальное" (животом)</button>
                    </div>
                    <p class="quiz-question">Почему, согласно Сунне, полезно останавливаться в конце каждого аята «Аль-Фатихи»?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Это идеальная тренировка для дыхания</button>
                        <button data-correct="false">B) Чтобы читать громче</button>
                        <button data-correct="false">C) Чтобы пропустить сложные буквы</button>
                    </div>
                </div>
            `
        },
        {
            id: 6,
            title: "Урок 6: Знакомство с Нун Сакина и Танвином",
            content: `
                <h2>🕌 Урок 6: Знакомство с Нун Сакина (نْ) и Танвином (ـً ـٍ ـٌ)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы поймем, что такое Нун Сакина и Танвин. ...и познакомимся с четырьмя правилами, которые возникают, когда мы их встречаем.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Нун Сакина (النُّونُ السَّاكِنَةُ):</strong> Это просто буква Нун (ن) с Сукуном (знаком тишины °) над ней: نْ.</p>
                <p><strong>Танвин (التَّنْوِينُ):</strong> Это... двойные огласовки в конце слова: ـً (...ан), ـٍ (...ин), ـٌ (...ун)</p>
                <p class="explanation"><strong>Самый главный секрет Таджвида:</strong> Танвин — это просто скрытый Нун Сакина! ...слово بَيْتٌ (байтун) звучит точно так же, как если бы оно было написано بَيْتُنْ (байтун). Поскольку они звучат одинаково, ...к ним применяются одинаковые правила.</p>
                
                <h3>✍️ Подробное Описание (Четыре Правила)</h3>
                <p>Когда Нун Сакина (نْ) или Танвин (ـً ـٍ ـٌ) встречаются со следующей буквой... звук «н»... делает одну из четырех вещей:</p>
                <ol>
                    <li><strong>Изхар (إِظْهَار)</strong> — Ясность (мы читаем «н» четко).</li>
                    <li><strong>Идгам (إِدْغَام)</strong> — Слияние (мы сливаем «н» со следующей буквой).</li>
                    <li><strong>Икляб (إِقْلَاب)</strong> — Превращение (мы меняем звук «н» на звук «м»).</li>
                    <li><strong>Ихфа (إِخْفَاء)</strong> — Скрытие (мы произносим «н» мягко, в нос, «скрывая» его).</li>
                </ol>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Нун Сакина (в середине слова):</strong></p>
                <div class="quran-text">أَنْعَمْتَ</div>
                <p class="transliteration">"an-‘amta" (Сура: Аль-Фатиха, 1:7)</p>
                <p><strong>2. Пример на Танвин (в конце слова):</strong></p>
                <div class="quran-text">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
                <p class="transliteration">"Qul huwa-Llāhu aḥadun" (Сура: Аль-Ихляс, 112:1)</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 6</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какой главный "секрет" объединяет Нун Сакина и Танвин?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Они обе пишутся одинаково</button>
                        <button data-correct="true">B) Танвин — это скрытый Нун Сакина, и у них одинаковые правила</button>
                        <button data-correct="false">C) Они обе встречаются только в середине слова</button>
                    </div>
                    <p class="quiz-question">Какое правило означает "Превращение" (звука "н" в "м")?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Изхар</button>
                        <button data-correct="false">B) Идгам</button>
                        <button data-correct="true">C) Икляб</button>
                    </div>
                </div>
            `
        },
        {
            id: 7,
            title: "Урок 7: Правило Ясности — Изхар Халькы",
            content: `
                <h2>🕌 Урок 7: Правило Ясности — Изхар Халькы (إِظْهَار حَلْقِي)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся произносить Нун Сакина (نْ) и Танвин (ـً ـٍ ـٌ) <strong>четко и ясно</strong>, без какого-либо... назализации (гунны)...</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Изхар (إِظْهَار)</strong> ... означает «ясность», «делать что-то очевидным».</p>
                <p><strong>Правило:</strong> Если после Нун Сакина (نْ) или Танвина (ـً ـٍ ـٌ) стоит одна из <strong>шести букв горла</strong>, мы должны произнести звук «н» <strong>абсолютно четко</strong> и <strong>без</strong>... гунны. Оно называется <strong>Халькы</strong> (حَلْقِي) (горловой), потому что все шесть букв... — это «буквы горла».</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Когда происходит: Когда после نْ или Танвина (ـً , ـٍ , ـٌ) идет одна из этих 6 букв:</p>
                <ul>
                    <li><strong>ء (Хамза), ه (Ха)</strong> — Дальняя часть горла</li>
                    <li><strong>ع ('Айн), ح (Ха)</strong> — Средняя часть горла</li>
                    <li><strong>غ (Гъайн), خ (Кха)</strong> — Ближняя часть горла</li>
                </ul>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Нун Сакина (نْ) + 'Айн (ع):</strong></p>
                <div class="quran-text">أَنْعَمْتَ</div>
                <p class="transliteration">"an-‘amta" (Сура: Аль-Фатиха, 1:7)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...نْ (Нун Сакина) стоит перед ع ('Айн). Мы читаем «Ан-» (четкий «н»), а затем произносим «'амта»...</p>
                
                <p><strong>2. Пример на Танвин (ـٌ) + Ха (ح):</strong></p>
                <div class="quran-text">عَلِيمٌ حَكِيمٌ</div>
                <p class="transliteration">"‘Alīmun-Hakīm"</p>
                <p class="explanation"><strong>Объяснение:</strong> ...Танвин... (ـٌ) ...звучит как «...мун». Сразу за ним идет ح (Ха). Мы читаем «'Алиимун» (четкий «н»), а затем «Хакиим».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Добавление Гунны (назализации):</strong> Это самая частая ошибка. Вместо «а<strong>н</strong>-'амта» ученик читает «а<strong>нннн</strong>-'амта», как бы растягивая звук «н» в нос. Это неправильно. Изхар — это <strong>отсутствие</strong> Гунны.</p>


                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 7</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Сколько букв вызывают правило "Изхар Халькы"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 4 буквы</button>
                        <button data-correct="true">B) 6 букв</button>
                        <button data-correct="false">C) 15 букв</button>
                    </div>
                    <p class="quiz-question">Какая главная ошибка при чтении Изхара?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Добавление Гунны (назализации), растягивание "н"</button>
                        <button data-correct="false">B) Слишком быстрая пауза</button>
                        <button data-correct="false">C) Пропуск буквы</button>
                    </div>
                </div>
            `
        },
        {
            id: 8,
            title: "Урок 8: Правило Слияния — Идгам",
            content: `
                <h2>🕌 Урок 8: Правило Слияния — Идгам (إِدْغَام)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся плавно «сливать» звук Нун Сакина или Танвина со следующей буквой, делая чтение мелодичным...</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Идгам (إِدْغَام)</strong> ... означает «слияние»... В Таджвиде это означает, что мы <strong>полностью игнорируем</strong> звук «н»... и вместо этого <strong>сливаем</strong> его со следующей буквой. ...Например, вместо... «ми<strong>н</strong> раббихим», мы сливаем «н» и читаем «ми<strong>р-р</strong>аббихим».</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Это правило применяется... с одной из 6 букв, собранных в слове: <strong>يَرْمَلُون</strong> (ЯРМАЛУН). Буквы: <strong>ي (Йа), ر (Ра), م (Мим), ل (Лям), و (Вау), ن (Нун)</strong>.</p>
                
                <h4>1. Идгам с Гунной (Слияние с назализацией):</h4>
                <p>...когда Нун/Танвин встречается с одной из 4 букв: <strong>ي ,ن ,م ,و</strong> (собраны в слове يَنْمُو - «ЯНМУ»). Мы сливаем Нун... и <strong>удерживаем</strong>... Гунну... 2-х счетов.</p>
                
                <h4>2. Идгам без Гунны (Слияние без назализации):</h4>
                <p>...с оставшимися 2 буквами: <strong>ل (Лям) и ر (Ра)</strong>. Мы сливаем Нун <strong>полностью</strong>... <strong>без какого-либо</strong> носового звука.</p>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Идгам БЕЗ Гунны (نْ + ل):</strong></p>
                <div class="quran-text">مِن لَّدُنْهُ</div>
                <p class="transliteration">"mil-ladunhu" (а не "min-ladunhu")</p>
                <p class="explanation"><strong>Объяснение:</strong> Нун (نْ) сливается полностью с буквой Лям (ل). Звук «н» исчезает без следа... Читаем чисто: «Мил-ладунху».</p>
                
                <p><strong>2. Идгам С Гунной (نْ + م):</strong></p>
                <div class="quran-text">مِن مَّاءٍ</div>
                <p class="transliteration">"mim-mā'in" (а не "min-mā'in")</p>
                <p class="explanation"><strong>Объяснение:</strong> Нун (نْ)... полностью исчезает. Она сливается... с буквой Мим (م)... Мы читаем это как «Мим-ма'ин» и удерживаем этот звук «ммм» (Гунна) на 2 счета.</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Добавление Гунны к (ل) и (ر):</strong> Это самая распространенная ошибка. Читать «ми<strong>нннн</strong>-Раббихим»... — <strong>неправильно</strong>. Слияние должно быть чистым: «ми<strong>р-Р</strong>аббихим».</p>
                <p><strong>Исключение:</strong> Если Нун Сакина (نْ) и буква Идгама... встречаются в <strong>одном слове</strong>, слияние <strong>НЕ происходит!</strong> Таких слов в Коране всего четыре: <strong>الدُّنْيَا</strong> (ад-Дунья), <strong>قِنْوَانٌ</strong> (Кынванун), <strong>صِنْوَانٌ</strong> (Сынванун), <strong>بُنْيَانٌ</strong> (Бунйанун).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 8</h3>
                <div class="quiz-container">
                    <p class="quiz-question">С какими буквами Идгам (слияние) происходит БЕЗ Гунны (назализации)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) ي , و (Йа, Вау)</button>
                        <button data-correct="true">B) ل , ر (Лям, Ра)</button>
                        <button data-correct="false">C) ن , م (Нун, Мим)</button>
                    </div>
                    <p class="quiz-question">Почему в слове الدُّنْيَا (ад-Дунья) нет Идгама?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Потому что 'Нун' и 'Йа' в одном слове</button>
                        <button data-correct="false">B) Потому что 'Даль' - твердая</button>
                        <button data-correct="false">C) Потому что там Алиф</button>
                    </div>
                </div>
            `
        },
        {
            id: 9,
            title: "Урок 9: Правило Превращения — Икляб",
            content: `
                <h2>🕌 Урок 9: Правило Превращения — Икляб (إِقْلَاب)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся «превращать» звук Нун Сакина (نْ) или Танвина (ـً ـٍ ـٌ) в звук буквы Мим (م), когда он встречается с одной-единственной буквой.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Икляб (إِقْلَاب)</strong> ... означает «переворачивание», «изменение»... Это правило очень простое, потому что оно касается <strong>только одной буквы</strong>: <strong>Ба (ب)</strong>.</p>
                <p><strong>Правило:</strong> Когда Нун Сакина (نْ) или Танвин (ـً ـٍ ـٌ) стоят непосредственно перед буквой <strong>Ба (ب)</strong>, мы <strong>не</strong> читаем звук «н». Вместо этого, мы «превращаем» этот звук «н» в <strong>легкий звук «м»</strong> и произносим его с назализацией (Гунна) в течение 2-х счетов.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p><strong>Подсказка в Коране:</strong> Мусхаф (экземпляр Корана) сам помогает вам! ...вы часто увидите крошечную букву <strong>م</strong> (Мим), написанную <strong>над</strong> Нун (نْ)... Это ваш знак: «Здесь Икляб!».</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Нун Сакина (نْ) + Ба (ب):</strong></p>
                <div class="quran-text">لَيُنبَذَنَّ</div>
                <p class="transliteration">"Layum-badhanna" (а не "Layun-badhanna")</p>
                <p class="explanation"><strong>Объяснение:</strong> ...после نْ (Нун Сакина) идет ب (Ба). ...над этой Нун вы увидите маленькую م. Мы читаем это, превращая Нун в Мим с Гунной: «Ляйу<strong>ммм</strong>-базанна».</p>

                <p><strong>2. Пример на Танвин (ـٍ) + Ба (ب):</strong></p>
                <div class="quran-text">عَلِيمٌ بِذَاتِ</div>
                <p class="transliteration">"‘Alīmum-bidhāti..." (а не "‘Alīmun-bidhāti")</p>
                <p class="explanation"><strong>Объяснение:</strong> Танвин (ـٌ)... «'Алиимун» встречается с буквой ب (Ба). Звук «н» исчезает и превращается в «м»... Мы читаем: «'Алииму<strong>ммм</strong>-бизаати...».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Слишком сильное сжатие губ:</strong> Читать «ми<strong>М</strong>-ба'ди» с твердым, резким звуком «М»... Это ошибка. Смыкание должно быть легким.</p>
                <p><strong>Отсутствие Гунны:</strong> Читать «мим-ба'ди» очень быстро, без удержания звука «м» на 2 счета. Гунна (назализация) здесь <strong>обязательна</strong>.</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                
                <h3>🧠 Тест по Уроку 9</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Сколько букв вызывают правило "Икляб"?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Только одна (ب)</button>
                        <button data-correct="false">B) Шесть (يَرْمَلُون)</button>
                        <button data-correct="false">C) Четыре (يَنْمُو)</button>
                    </div>
                    <p class="quiz-question">В какой звук "Икляб" превращает Нун Сакина (نْ)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) В звук (ر)</button>
                        <button data-correct="false">B) В звук (ل)</button>
                        <button data-correct="true">C) В легкий звук (م)</button>
                    </div>
                </div>
            `
        },
        {
            id: 10,
            title: "Урок 10: Искусство Скрытия — Ихфа Хакикы",
            content: `
                <h2>🕌 Урок 10: Искусство Скрытия — Ихфа Хакикы (إِخْفَاء حَقِيقِي)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся... «скрывать» Нун Сакина и Танвин, создавая легкий, мелодичный носовой звук (Гунна)...</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Ихфа (إِخْفَاء)</strong> ... означает «скрытие»... Это правило — золотая середина. Мы <strong>не</strong> произносим «н» четко (как в Изхаре). Мы <strong>не</strong> сливаем «н» полностью (как в Идгаме). Вместо этого мы «скрываем» букву Нун. ...чистый звук «н» исчезает, но остается его «душа» — <strong>Гунна</strong>... которую мы удерживаем 2 счета.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Когда происходит: ...ко всем <strong>оставшимся 15 буквам</strong> арабского алфавита. (ت , ث , ج , د , ذ , ز , س , ش , ص , ض , ط , ظ , ف , ق , ك)</p>
                <p class="explanation"><strong>Как выполнить Ихфа (Секрет Таджвида):</strong> ...<strong>не</strong> позволяйте кончику вашего языка коснуться того места, где рождается буква «Нун»... Вместо этого, ваш язык «зависает» или <strong>готовится</strong> принять положение для <strong>следующей</strong> буквы. Пока язык «завис», вы издаете Гунну... 2-х счетов.</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Мягкую Ихфа (نْ + ت):</strong></p>
                <div class="quran-text">وَأَنتُمْ</div>
                <p class="transliteration">"wa an(gh)-tum"</p>
                <p class="explanation"><strong>Объяснение:</strong> Мы не говорим «ан-тум» (это Изхар). Мы «скрываем» Нун, делая легкую Гунну 2 счета: «ва-а<strong>(ннн)</strong>-тум».</p>
                
                <p><strong>2. Пример на Твердую Ихфа (نْ + ق):</strong></p>
                <div class="quran-text">يَنقَلِبُونَ</div>
                <p class="transliteration">"yan(gh)-qalibūn" (твердая Гунна)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...نْ стоит перед ق (твердая буква). Гунна тоже становится твердой... «йа<strong>(ннн)</strong>-къалибуун».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Произнесение четкого «Н» (Изхар):</strong> Читать «ку<strong>н</strong>-тум». Это ошибка. Звук «н» должен быть скрыт.</p>
                <p><strong>Прикосновение языка к махраджу Нун:</strong> Если вы коснетесь языком бугорка за зубами... Гунна получится «заблокированной»... Язык должен «парить».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 10</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Сколько букв у правила "Ихфа Хакикы"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 6 букв</button>
                        <button data-correct="false">B) 1 буква</button>
                        <button data-correct="true">C) 15 букв</button>
                    </div>
                    <p class="quiz-question">Как правильно выполнить "Ихфа"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Четко произнести "н", потом следующую букву</button>
                        <button data-correct="true">B) "Подвесить" язык (не касаясь махраджа "н") и дать Гунну на 2 счета</button>
                        <button data-correct="false">C) Полностью пропустить "н" и удвоить следующую букву</button>
                    </div>
                </div>
            `
        },
        {
            id: 11,
            title: "Урок 11: Практика — Мастер-класс по Нун Сакина",
            content: `
                <h2>🕌 Урок 11: Практика в Коране — Мастер-класс по Нун Сакина и Танвину</h2>
                <p class="explanation"><strong>Цель урока:</strong> Закрепить и научиться быстро распознавать и применять все четыре правила Нун Сакина (نْ) и Танвина (ـً ـٍ ـٌ) в реальных аятах Корана.</p>

                <h3>📚 Краткий Обзор (Ваша «Шпаргалка»)</h3>
                <ul>
                    <li><strong>Изхар (Ясность):</strong> 6 горловых букв (ء , ه , ع , ح , غ , خ). Читаем «Н» <strong>четко</strong>.</li>
                    <li><strong>Идгам (Слияние):</strong> 6 букв (ي , ر , م , ل , و , ن). Сливаем «Н». <strong>С Гунной</strong> (ي , ن , م , و), <strong>Без Гунны</strong> (ل , ر).</li>
                    <li><strong>Икляб (Превращение):</strong> 1 буква (ب). Превращаем «Н» в <strong>«М» с Гунной</strong>.</li>
                    <li><strong>Ихфа (Скрытие):</strong> 15 остальных букв (ت , ث , ج...). «Скрываем» «Н» <strong>с Гунной</strong>.</li>
                </ul>
                
                <h3>✍️ Секрет Таджвида: Как Мусхаф (Коран) помогает вам</h3>
                <ul>
                    <li>Если вы видите Сукун (°) над буквой Нун (<strong>نْ</strong>): Это почти всегда <strong>Изхар</strong>. (Пример: أَنْعَمْتَ)</li>
                    <li>Если над Нун (ن) <strong>нет</strong> Сукуна: Это <strong>Идгам</strong> или <strong>Ихфа</strong>.</li>
                    <li>Если вы видите маленькую букву Мим (<strong>م</strong>) над Нун: Это 100% <strong>Икляб</strong>. (Пример: مِنۢ بَعْدِ)</li>
                </ul>

                <h3>📖 Примеры из Корана (Сура «Аль-Масад»)</h3>
                <p><strong>1. Идгам с Гунной (Танвин + و):</strong></p>
                <div class="quran-text">...لَهَبٍ وَتَبَّ</div>
                <p class="transliteration">"...Abī Lahabiw-wa tabb"</p>
                <p class="explanation"><strong>Объяснение:</strong> Танвин... (ـٍ) ...встречается с... و (Вау). Мы сливаем «н» и «в», удерживая Гунну... «...Ляхаби<strong>ввв</strong>-ва табб».</p>

                <p><strong>2. Ихфа (Танвин + ذ):</strong></p>
                <div class="quran-text">نَارًا ذَاتَ لَهَبٍ</div>
                <p class="transliteration">"nāran(gh)-dhāta lahab"</p>
                <p class="explanation"><strong>Объяснение:</strong> Танвин... (ـً) ...За ним — ذ (Заль). Это... Ихфа! Мы скрываем «н»... «...наара<strong>(ннн)</strong>-заата...».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                
                <h3>🧠 Тест по Уроку 11</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Если вы видите (نْ) (Нун с Сукуном над ней), какое правило это, скорее всего, будет?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Изхар (Ясное чтение)</button>
                        <button data-correct="false">B) Ихфа (Скрытие)</button>
                        <button data-correct="false">C) Идгам (Слияние)</button>
                    </div>
                    <p class="quiz-question">В аяте (وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ), какое правило применяется к (كُفُوًا أَحَدٌ)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Изхар (Танвин + Хамза)</button>
                        <button data-correct="false">B) Икляб (Танвин + Алиф)</button>
                        <button data-correct="false">C) Ихфа (Танвин + Хамза)</button>
                    </div>
                </div>
            `
        },
        {
            id: 12,
            title: "Урок 12: Три правила Мим Сакина (مْ)",
            content: `
                <h2>🕌 Урок 12: Сестра буквы Нун — Три правила Мим Сакина (مْ)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы познакомимся с Мим Сакина (مْ) и узнаем о трех (и только трех!) правилах, которые применяются к ней.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Что такое Мим Сакина (الْمِيمُ السَّاكِنَةُ)?</strong> Это просто буква Мим (م) с Сукуном (знаком тишины °) над ней: <strong>مْ</strong>.</p>
                <p>...у Нун Сакина было 4 сложных правила... у Мим Сакина (مْ) всего <strong>3 очень простых правила</strong>...</p>
                
                <h3>✍️ Подробное Описание (Три Правила)</h3>
                <ol>
                    <li><strong>Ихфа Шафави (إِخْفَاء شَفَوِي)</strong> — «Губное Скрытие» (когда за مْ идет <strong>ب</strong>).</li>
                    <li><strong>Идгам Шафави (إِدْغَام شَفَوِي)</strong> — «Губное Слияние» (когда за مْ идет <strong>م</strong>).</li>
                    <li><strong>Изхар Шафави (إِظْهَار شَفَوِي)</strong> — «Губное Ясное Чтение» (когда за مْ идут <strong>все остальные 26 букв</strong>).</li>
                </ol>
                <p>...все правила называются <strong>«Шафави» (شَفَوِي)</strong>? Это арабское слово означает «губной». Буква Мим (م) — это губная буква.</p>
                
                <p class="explanation"><strong>Секрет Таджвида:</strong> ...Вам нужно запомнить только 2 буквы: <strong>ب</strong> и <strong>م</strong>. Если вы видите после مْ букву ب или م, вы делаете Гунну... Если вы видите <strong>любую другую букву</strong> — вы просто читаете «м» четко!</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Изхар Шафави (самое частое правило):</strong></p>
                <div class="quran-text">أَلَمْ تَرَ</div>
                <p class="transliteration">"a-lam-tara" (Сура: Аль-Филь, 105:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ... За ней идет буква ت (Та). ...применяем правило Изхар Шафави и читаем «м» четко: «а-лям-тара».</p>

                <p><strong>2. Пример на Ихфа Шафави (скрытие):</strong></p>
                <div class="quran-text">تَرْمِيهِم بِحِجَارَةٍ</div>
                <p class="transliteration">"tarmīhim-biḥijārah" (Сура: Аль-Филь, 105:4)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ... За ней идет ب (Ба). Мы «скрываем» Мим, делая... Гунну: «тармииhи<strong>ммм</strong>-бихиджаара...».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player"><p>Здесь будет ваше аудио к Уроку</p></div>

                <h3>🧠 Тест по Уроку 12</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Сколько всего правил у Мим Сакина (مْ)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 4</button>
                        <button data-correct="true">B) 3</button>
                        <button data-correct="false">C) 6</button>
                    </div>
                    <p class="quiz-question">Какое правило применяется, если после (مْ) идет ЛЮБАЯ буква, кроме (م) и (ب)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Ихфа Шафави (Скрытие)</button>
                        <button data-correct="false">B) Идгам Шафави (Слияние)</button>
                        <button data-correct="true">C) Изхар Шафави (Ясное чтение)</button>
                    </div>
                </div>
            `
        },
        {
            id: 13,
            title: "Урок 13: Губная Ясность — Изхар Шафави",
            content: `
                <h2>🕌 Урок 13: Губная Ясность — Изхар Шафави (إِظْهَار شَفَوِي)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся произносить букву Мим Сакина (مْ) <strong>абсолютно четко и ясно</strong>, без... гунны... когда она встречается с 26 буквами.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Изхар Шафави</strong> — это «Четкое Губное Произношение».</p>
                <p><strong>Правило:</strong> Если после Мим Сакина (مْ) стоит любая буква арабского алфавита, <strong>кроме م (Мим) и ب (Ба)</strong>... мы должны произнести مْ <strong>четко</strong>... Мы <strong>НЕ</strong> делаем Гунну... и <strong>НЕ</strong> растягиваем звук «м».</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Сколько букв у этого правила? <strong>Их 26!</strong> (Все, кроме م и ب).</p>
                <p class="explanation"><strong>Секрет Таджвида:</strong> ...при встрече مْ с буквами <strong>و (Вау)</strong> и <strong>ف (Фа)</strong>, ученики чаще всего ошибаются и делают Ихфа (скрытие). ...при встрече مْ с و или ف, будьте <strong>особенно</strong> внимательны и читайте «м» <strong>супер-четко</strong>!</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на (مْ + ت):</strong></p>
                <div class="quran-text">أَلَمْ تَرَ</div>
                <p class="transliteration">"a-lam-tara" (Сура: Аль-Филь, 105:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ... За ней идет ت (Та). ...правило — Изхар Шафави. Мы читаем четко: «а-ля<strong>м</strong>-тара». Никакого «а-ля<strong>ммм</strong>-тара».</p>

                <p><strong>2. Особый пример (مْ + و), где часто ошибаются:</strong></p>
                <div class="quran-text">عَلَيْهِمْ وَلَا الضَّالِّينَ</div>
                <p class="transliteration">"‘alayhim-wa la-ḍ-ḍāllīn" (Сура: Аль-Фатиха, 1:7)</p>
                <p class="explanation"><strong>Объяснение:</strong> مْ стоит перед و (Вау). Не позволяйте губам сделать «скрытие»! Читайте четко: «'аляйhи<strong>м</strong>» (пауза в долю секунды) «<strong>в</strong>а ля...».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Добавление Гунны (Растягивание «М»):</strong> Это... ошибка №1. Ученик читает «ляку<strong>ммм</strong>-диинукум». Это <strong>неправильно</strong>. Гунна (2 счета) здесь <strong>запрещена</strong>.</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 13</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Сколько букв вызывают правило "Изхар Шафави"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 2</button>
                        <button data-correct="false">B) 1</button>
                        <button data-correct="true">C) 26</button>
                    </div>
                    <p class="quiz-question">Какая главная ошибка при чтении (مْ) перед (و) или (ف)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Добавление Гунны (растягивание "м")</button>
                        <button data-correct="false">B) Слишком быстрая пауза</button>
                        <button data-correct="false">C) Пропуск буквы "м"</button>
                    </div>
                </div>
            `
        },
        {
            id: 14,
            title: "Урок 14: Встреча Близнецов — Идгам Шафави",
            content: `
                <h2>🕌 Урок 14: Встреча Близнецов — Идгам Шафави (إِدْغَام شَفَوِي)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся... «сливать» две буквы Мим (م), когда одна Мим Сакина (مْ) встречается с другой, огласованной Мим (مَ, مُ, مِ).</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Идгам (إِدْغَام)</strong> означает «слияние»... <strong>Шафави (شَفَوِي)</strong> ...«губной». Это правило также называют <strong>Идгам Мисляйн</strong> ... — «Слияние двух подобных (близнецов)».</p>
                <p><strong>Правило:</strong> Когда Мим Сакина (مْ) ...встречается с <strong>другой</strong> буквой Мим... мы сливаем этих «близнецов» в одну, удвоенную букву Мим (<strong>مّ</strong>). Мы... <strong>обязательно</strong> удерживаем ее с <strong>Гунной</strong>... в течение <strong>2-х счетов</strong>.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p><strong>Подсказка в Коране:</strong> ...над первой Мим (مْ) <strong>нет</strong> Сукуна, а над второй Мим (م) стоит <strong>Шадда (ـّ)</strong>. Это ваш знак: «Здесь Идгам Шафави!».</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример (مْ + مَ):</strong></p>
                <div class="quran-text">لَهُم مَّا يَشَاءُونَ</div>
                <p class="transliteration">"lahum-mā yashā'ūn"</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ... За ней следует مَ... Мы сливаем их: «ляhу<strong>ммм</strong>аа...», удерживая Гунну 2 счета.</p>

                <p><strong>2. Пример (مْ + مِ):</strong></p>
                <div class="quran-text">ءَامَنَهُم مِّنْ خَوْفٍ</div>
                <p class="transliteration">"āmanahum-min khawf" (Сура: Курайш, 106:4)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ...встречается с Мим с Кясрой (مِ)... Мы читаем... «...hу<strong>ммм</strong>ин...» с 2-секундной Гунной.</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Отсутствие Гунны:</strong> Это самая большая ошибка. Прочитать «ляhум-ма» быстро, без удержания 2-секундного носового звука. Гунна здесь <strong>ваджиб</strong> (обязательна).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player"><p>Здесь будет ваше аудио к Уроку</p></div>

                <h3>🧠 Тест по Уроку 14</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какое второе название у правила "Идгам Шафави"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Идгам Мутакарибайн</button>
                        <button data-correct="true">B) Идгам Мисляйн (Слияние близнецов)</button>
                        <button data-correct="false">C) Изхар Шафави</button>
                    </div>
                    <p class="quiz-question">Что ОБЯЗАТЕЛЬНО нужно сделать при "Идгам Шафави"?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Удержать Гунну на 2 счета</button>
                        <button data-correct="false">B) Прочитать "м" четко, без Гунны</button>
                        <button data-correct="false">C) Сделать Калькаля (эхо)</button>
                    </div>
                </div>
            `
        },
        {
            id: 15,
            title: "Урок 15: Губное Скрытие — Ихфа Шафави",
            content: `
                <h2>🕌 Урок 15: Губное Скрытие — Ихфа Шафави (إِخْفَاء شَفَوِي)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся «скрывать» звук Мим Сакина (مْ), когда он встречается с буквой <strong>Ба (ب)</strong>, и поймем важность Гунны (назализации)...</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Ихфа (إِخْfَاء)</strong> означает «скрытие»... <strong>Шафави (شَفَوِي)</strong> ...«губной», потому что обе буквы, <strong>م</strong> (Мим) и <strong>ب</strong> (Ба), рождаются на губах.</p>
                <p><strong>Правило:</strong> Когда Мим Сакина (مْ)... встречается с буквой Ба (ب)... мы <strong>очень легко</strong> смыкаем губы и удерживаем этот звук с <strong>Гунной</strong>... в течение <strong>2-х счетов</strong>...</p>
                <p><strong>Что такое Гунна (الغُنَّة)?</strong> ...Это звук, который исходит... из носовой полости (Аль-Хайшум). Это «душа» букв Нун (ن) и Мим (م).</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p><strong>Сравнение с Икляб (Урок 9):</strong> Икляб: <strong>نْ</strong> (Нун) превращалась в <strong>مْ</strong> перед <strong>ب</strong>. Ихфа Шафави: <strong>مْ</strong> <strong>уже</strong> существует перед <strong>ب</strong>. Результат: Звучание у них почти <strong>одинаковое</strong>!</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример (مْ + بِ):</strong></p>
                <div class="quran-text">تَرْمِيهِم بِحِجَارَةٍ</div>
                <p class="transliteration">"tarmīhim-biḥijārah" (Сура: Аль-Филь, 105:4)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...مْ... За ней — بِ (Би). Мы не читаем «hи<strong>м</strong>-бихиджара». Мы читаем «hи<strong>ммм</strong>-бихиджара», удерживая легкую Гунну 2 счета.</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Чтение с Изхаром (Ясно):</strong> Прочитать «hу<strong>м</strong>-<strong>б</strong>аризун» четко, без Гунны. Это самая частая ошибка. Гунна здесь <strong>обязательна</strong>.</p>
                <p><strong>Слишком сильное сжатие губ:</strong> Если вы <strong>сильно</strong> сожмете губы, Гунна прервется... Смыкание должно быть <strong>едва заметным</strong>.</p>
                
                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 15</h3>
                <div class="quiz-container">
                    <p class="quiz-question">С какой ОДНОЙ буквой работает правило "Ихфа Шафави"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) م (Мим)</button>
                        <button data-correct="true">B) ب (Ба)</button>
                        <button data-correct="false">C) ن (Нун)</button>
                    </div>
                    <p class="quiz-question">Какая главная ошибка при чтении "Ихфа Шафави"?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Читать "м" четко (Изхар), без Гунны</button>
                        <button data-correct="false">B) Слишком долго тянуть Гунну (4 счета)</button>
                        <button data-correct="false">C) Превратить "м" в "н"</button>
                    </div>
                </div>
            `
        },
        {
            id: 16,
            title: "Урок 16: Музыка Корана — Введение в Мадд",
            content: `
                <h2>🕌 Урок 16: Музыка Корана — Введение в Мадд (Удлинение звука)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы поймем, что такое Мадд (مَدّ), познакомимся с тремя буквами, которые его вызывают, и узнаем, почему удлинение... неотъемлемая часть Таджвида.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Мадд (مَدّ)</strong> ... означает «удлинение», «растягивание». В Таджвиде Мадд — это удлинение гласного звука (Фатхи, Кясры или Даммы) с помощью одной из трех специальных букв. ...короткие гласные (а , и , у) — это шаги. А Мадд (аа , ии , уу) — это плавное, долгое скольжение.</p>
                
                <h3>✍️ Подробное Описание (3 Буквы Мадда)</h3>
                <ul>
                    <li><strong>Алиф Сакина (ا):</strong> Условие: Перед ним <strong>обязательно</strong> должна стоять буква с <strong>Фатхой (ـَ)</strong>. Результат: «а» -> «<strong>аа</strong>».</li>
                    <li><strong>Йа Сакина (ي):</strong> Условие: Перед ней <strong>обязательно</strong> должна стоять буква с <strong>Кясрой (ـِ)</strong>. Результат: «и» -> «<strong>ии</strong>».</li>
                    <li><strong>Вау Сакина (و):</strong> Условие: Перед ней <strong>обязательно</strong> должна стоять буква с <strong>Даммой (ـُ)</strong>. Результат: «у» -> «<strong>уу</strong>».</li>
                </ul>
                <p>Ученые собрали их в одном слове: <strong>نُوحِيهَا</strong> (Н<strong>уу</strong>-х<strong>ии</strong>-h<strong>аа</strong>).</p>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Алиф (ـَا):</strong></p>
                <div class="quran-text">مَالِكِ يَوْمِ الدِّينِ</div>
                <p class="transliteration">"Māliki..." (Сура: Аль-Фатиха, 1:4)</p>
                <p class="explanation"><strong>Объяснение:</strong> Посмотрите на <strong>مَا</strong> (Маа). ...Буква م (Мим) с Фатхой, а за ней — ا (Алиф). ...Мы должны тянуть «Маа...» на 2 счета.</p>

                <p><strong>2. Пример на Йа (ـِي):</strong></p>
                <div class="quran-text">الرَّحِيمِ</div>
                <p class="transliteration">"...ar-Raḥīm" (Сура: Аль-Фатиха, 1:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> Посмотрите на <strong>حِي</strong> (Хии). ...буква ح (Ха) с Кясрой, а за ней — ي (Йа). ...Мы тянем «Хии...».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Путаница с «мягкими» буквами (Лин):</strong> Путать ـُو (уу) с <strong>ـَوْ (ау)</strong>, или ـِي (ии) с <strong>ـَيْ (ай)</strong>. ...يَوْم (йа<strong>у</strong>м) — это <strong>не</strong> Мадд, так как перед و (Вау) стоит Фатха (а не Дамма).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 16</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какое условие у буквы Вау (و), чтобы она стала буквой Мадда?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Перед ней должна быть Фатха (ـَ)</button>
                        <button data-correct="true">B) Перед ней должна быть Дамма (ـُ)</button>
                        <button data-correct="false">C) Перед ней должна быть Кясра (ـِ)</button>
                    </div>
                    <p class="quiz-question">Является ли Маддом слово (يَوْم)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Нет, это "Мадд Лин", так как перед (و) стоит Фатха.</button>
                        <button data-correct="false">B) Да, это Мадд на 2 счета.</button>
                        <button data-correct="false">C) Да, это Мадд на 4 счета.</button>
                    </div>
                </div>
            `
        },
        {
            id: 17,
            title: "Урок 17: Естественный Ритм — Мадд Таби‘и",
            content: `
                <h2>🕌 Урок 17: Естественный Ритм — Мадд Таби‘и (الطَبِيعِيّ)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся распознавать и... произносить Мадд Таби'и (Естественный Мадд), растягивая его ровно на <strong>2 счета</strong>.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Таби‘и (الطَبِيعِيّ)</strong> означает «естественный»... ...без него слово... теряет свой смысл.</p>
                <p><strong>Мадд Таби'и</strong> — это просто любая из трех букв Мадда (ـَا , ـِي , ـُو), если после нее <strong>НЕ</strong> стоит ни <strong>Хамза (ء)</strong>, ни <strong>Сукун (°)</strong>. Это «стандартный» Мадд. Его длина <strong>всегда</strong> равна <strong>двум счетам</strong>...</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Итак, Мадд Таби'и — это три ситуации:</p>
                <ol>
                    <li>Алиф (ا), которому предшествует Фатха (ـَ). (Звучит как «<strong>аа</strong>»)</li>
                    <li>Вау (و), которому предшествует Дамма (ـُ). (Звучит как «<strong>уу</strong>»)</li>
                    <li>Йа (ي), которой предшествует Кясра (ـِ). (Звучит как «<strong>ии</strong>»)</li>
                </ol>
                <p>...и... <strong>после</strong> этих букв нет ни Хамзы, ни Сукуна.</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на Алиф (ـَا):</strong></p>
                <div class="quran-text">قَالَ</div>
                <p class="transliteration">"Qāla"</p>
                <p class="explanation"><strong>Объяснение:</strong> Буква ق (Каф) с Фатхой + ا (Алиф). После Алифа идет ل (Лям) с Фатхой (нет ни Хамзы, ни Сукуна). ...мы тянем «Каа...» ровно 2 счета.</p>

                <p><strong>2. Пример на Йа (ـِي):</strong></p>
                <div class="quran-text">الَّذِينَ</div>
                <p class="transliteration">"Alladhīna"</p>
                <p class="explanation"><strong>Объяснение:</strong> Буква ذ (Заль) с Кясрой + ي (Йа). ...Это Мадд Таби'и. Тянем «зии...» на 2 счета.</p>
                
                <p><strong>3. Пример на Вау (ـُو):</strong></p>
                <div class="quran-text">يُؤْمِنُونَ</div>
                <p class="transliteration">"Yu'minūna"</p>
                <p class="explanation"><strong>Объяснение:</strong> Буква ن (Нун) с Даммой + و (Вау). ...Это Мадд Таби'и. Тянем «нуу...» на 2 счета.</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 17</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какова длина "Мадд Таби'и" (Естественного Мадда)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 1 счет</button>
                        <button data-correct="true">B) 2 счета</button>
                        <button data-correct="false">C) 4 или 5 счетов</button>
                    </div>
                    <p class="quiz-question">В каком случае Мадд Таби'и НЕ применяется?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Если после буквы Мадда идет Хамза (ء) или Сукун (°)</button>
                        <button data-correct="false">B) Если буква Мадда стоит в середине слова</button>
                        <button data-correct="false">C) Если перед буквой Мадда стоит твердая буква</button>
                    </div>
                </div>
            `
        },
        {
            id: 18,
            title: "Урок 18: Связанное Удлинение — Мадд Муттасыль",
            content: `
                <h2>🕌 Урок 18: Связанное Удлинение — Мадд Муттасыль (الْمَدُّ الْمُتَّصِل)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся... произносить Мадд Муттасыль — удлинение, которое <strong>обязательно</strong> нужно тянуть <strong>4 или 5 счетов</strong>, когда буква Мадда встречается с Хамзой (ء) <strong>в одном слове</strong>.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Муттасыль (مُتَّصِل)</strong> ... означает «связанный» или «соединенный». ...потому что буква Мадда и причина удлинения (Хамза) находятся <strong>в одном и том же слове</strong>.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p><strong>Формула:</strong> ( ـَا / ـِي / ـُو ) + ء = <strong>В ОДНОМ СЛОВЕ</strong></p>
                <p><strong>Название:</strong> Мадд Муттасыль (Связанное Обязательное Удлинение)</p>
                <p><strong>Длина:</strong> <strong>4 или 5 счетов</strong>. (Это <strong>Ваджиб</strong> - وَاجِب - Обязательно)</p>
                <p><strong>Подсказка в Коране:</strong> ...вы увидите... знак удлинения, похожий на волну: <strong>( ~ )</strong>. Этот знак... кричит вам: «Тяни дольше, чем 2 счета!»</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на (ـَا) + Хамза (ء):</strong></p>
                <div class="quran-text">إِذَا جَاءَ نَصْرُ اللَّهِ</div>
                <p class="transliteration">"idhā jā'a naṣru-Llāhi..." (Сура: Ан-Наср, 110:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> В слове <strong>جَاءَ</strong> (джаа'а) мы видим ا (Алиф Мадда) и сразу за ним ء (Хамза). Они в одном слове. Мы должны тянуть «джаа<strong>аа</strong>'а...» на 4-5 счетов.</p>

                <p><strong>2. Пример на (ـُو) + Хамза (ء):</strong></p>
                <div class="quran-text">السُّوءَ</div>
                <p class="transliteration">"as-sū'a"</p>
                <p class="explanation"><strong>Объяснение:</strong> В слове <strong>السُّوءَ</strong> (ас-суу'а) мы видим و (Вау Мадда) и сразу за ней ء (Хамза) в одном слове. Мы тянем «ас-суу<strong>уу</strong>'а...» на 4-5 счетов.</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 18</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Что означает "Мадд Муттасыль" (Связанный Мадд)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Буква Мадда и Хамза (ء) находятся в ОДНОМ слове</button>
                        <button data-correct="false">B) Буква Мадда и Хамза (ء) находятся в РАЗНЫХ словах</button>
                        <button data-correct="false">C) Буква Мадда встречается с Сукуном</button>
                    </div>
                    <p class="quiz-question">Какова ОБЯЗАТЕЛЬНАЯ (Ваджиб) длина Мадд Муттасыль?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 2 счета</button>
                        <button data-correct="false">B) 6 счетов</button>
                        <button data-correct="true">C) 4 или 5 счетов</button>
                    </div>
                </div>
            `
        },
        {
            id: 19,
            title: "Урок 19: Разделенное Удлинение — Мадд Мунфасыль",
            content: `
                <h2>🕌 Урок 19: Разделенное Удлинение — Мадд Мунфасыль (الْمَدُّ الْمُنْفَصِل)</h2>
                <p class="explanation"><strong>Цель урока:</strong> ...научимся... произносить Мадд Мунфасыль... на <strong>4 или 5 счетов</strong>, когда буква Мадда находится в <strong>конце</strong> одного слова, а <strong>Хамза (ء)</strong> — в <strong>начале</strong> следующего.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Мунфасыль (مُنْفَصِل)</strong> ... означает «разделенный»... ...потому что буква Мадда и причина удлинения (Хамза) находятся <strong>в двух разных словах</strong>.</p>
                <p>Мадд Муттасыль (Урок 18): (Сл<strong>оـَا+ء</strong>во)</p>
                <p>Мадд Мунфасыль (Сегодня): (Слово <strong>ـَا</strong>) + (<strong>ء</strong>Слово)</p>

                <h3>✍️ Подробное Описание</h3>
                <p><strong>Формула:</strong> (Слово 1 заканчивается на ـَا / ـِي / ـُو) + (Слово 2 начинается с ء)</p>
                <p><strong>Длина:</strong> <strong>4 или 5 счетов</strong>.</p>
                <p><strong>Статус:</strong> ...<strong>Джа'из</strong> (جَائِز - дозволенный). ...Но в той традиции, которую мы изучаем (Хафс 'ан 'Асым...), мы <strong>обязаны</strong> тянуть его 4-5 счетов...</p>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Пример на (ـَا) + Хамза (ء) (Самый известный пример):</strong></p>
                <div class="quran-text">يَا أَيُّهَا</div>
                <p class="transliteration">"Yā ayyuhā"</p>
                <p class="explanation"><strong>Объяснение:</strong> Первое слово <strong>يَا</strong> (Йаа) заканчивается на Мадд Алиф. Следующее слово <strong>أَيُّهَا</strong> (аййуhа) начинается с Хамзы (ء). Мы тянем: «Йаа<strong>аа</strong>-аййуhа...» (4-5 счетов).</p>

                <p><strong>2. Пример на (ـُو) + Хамза (ء):</strong></p>
                <div class="quran-text">قَالُوا آمَنَّا</div>
                <p class="transliteration">"Qālū āmannā"</p>
                <p class="explanation"><strong>Объяснение:</strong> Слово <strong>قَالُوا</strong> (Каалуу) заканчивается на Мадд Вау. Следующее слово <strong>آمَنَّا</strong> (ааманнаа) начинается с Хамзы (ء). Мы тянем: «Каалуу<strong>уу</strong>-ааманнаа...» (4-5 счетов).</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Делать паузу:</strong> Прочитать «Йаааа... (пауза) ...аййуhа». Правило... работает, только если вы <strong>соединяете</strong> (васль) эти два слова.</p>
                <p class="explanation"><strong>Секрет Таджвида:</strong> Если у вас закончилось дыхание и вы... <strong>остановиться</strong> на первом слове (например, на يَا), то правило Мадд Мунфасыль <strong>ИСЧЕЗАЕТ!</strong> Вы должны... прочитав его как Мадд Таби'и (<strong>2 счета</strong>): «Йаа».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 19</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Что означает "Мадд Мунфасыль" (Разделенный Мадд)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Буква Мадда и Хамза (ء) находятся в ОДНОМ слове</button>
                        <button data-correct="true">B) Буква Мадда и Хамза (ء) находятся в РАЗНЫХ словах</button>
                        <button data-correct="false">C) Буква Мадда встречается с Сукуном</button>
                    </div>
                    <p class="quiz-question">Что произойдет, если вы остановитесь на слове (قَالُوا) и не будете соединять его со словом (آمَنَّا)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Вы все равно должны тянуть 4-5 счетов</button>
                        <button data-correct="true">B) Правило исчезает, и вы тянете (ـُو) только 2 счета (как Мадд Таби'и)</button>
                        <button data-correct="false">C) Вы должны пропустить Мадд</button>
                    </div>
                </div>
            `
        },
        {
            id: 20,
            title: "Урок 20: Временный Мадд (Мадд ‘Āriḍ) и Мягкий Мадд (Лин)",
            content: `
                <h2>🕌 Урок 20: Временный Мадд (Мадд ‘Āriḍ li-s-Sukūn) и Мягкий Мадд (Мадд Лин)</h2>
                <p class="explanation"><strong>Цель урока:</strong> ...научимся... удлинять звук, когда мы <strong>останавливаемся</strong> на слове, и познакомимся с «мягкими»... звуками «ай» и «ау».</p>

                <h3>📚 Четкое Объяснение</h3>
                <h4>1. Мадд ‘Āriḍ li-s-Sukūn (الْمَدُّ الْعَارِضُ لِلسُّكُونِ) — Временный Мадд</h4>
                <p>«'Āriḍ» (عَارِض) означает «временный»... Это Мадд, который возникает <strong>только</strong> когда мы... делаем <strong>остановку</strong> (вакф) на слове. <strong>Правило:</strong> Вы читаете слово, в котором есть Мадд Таби'и (ـَا , ـِي , ـُو). ...Последняя буква... получает «временный» <strong>Сукун (°)</strong>. Теперь ваш Мадд Таби'и... оказался <strong>перед</strong> Сукуном. ...Это... заставляет его удлиниться. <strong>Длина:</strong> Вы можете выбрать: <strong>2, 4 или 6 счетов</strong>.</p>
                
                <h4>2. Мадд Лин (مَدُّ اللِّينِ) — Мягкий Мадд</h4>
                <p>«Лин» (لِين) означает «мягкость». ...когда у нас есть <strong>و</strong> (Вау) с Сукуном или <strong>ي</strong> (Йа) с Сукуном, а <strong>перед</strong> ними стоит буква с <strong>Фатхой (ـَ)</strong>.</p>
                <ul>
                    <li><strong>ـَوْ</strong> (звучит как «<strong>ау</strong>»)</li>
                    <li><strong>ـَيْ</strong> (звучит как «<strong>ай</strong>»)</li>
                </ul>
                <p>...Если вы <strong>останавливаетесь</strong> на слове, которое... на Мадд Лин (например, خَوْفٌ -> خَوْفْ), он... может тянуться <strong>2, 4 или 6 счетов</strong>.</p>
                
                <p class="explanation"><strong>Секрет Таджвида:</strong> Самое важное... — <strong>последовательность</strong>. Если вы решили тянуть первый Мадд ‘Āriḍ... на 4 счета, вы <strong>обязаны</strong> тянуть <strong>все</strong> Мадды ‘Āriḍ ...на 4 счета...</p>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Мадд ‘Āriḍ li-s-Sukūn:</strong></p>
                <div class="quran-text">ٱلْعَـٰلَمِينَ</div>
                <p>При чтении: al-‘ālamīna. <strong>При остановке: al-‘ālamīn</strong></p>
                <p class="explanation"><strong>Объяснение:</strong> ...В слове «Аль-'Алямина» есть Мадд Таби'и (ـِي). Когда мы останавливаемся, нَ (на) превращается в نْ (н). ...Мы тянем «'Алямии<strong>ии</strong>н» (2, 4 или 6 счетов).</p>

                <p><strong>2. Мадд Лин (при остановке):</strong></p>
                <div class="quran-text">قُرَيْشٍ</div>
                <p>При чтении: Qurayshin. <strong>При остановке: Quraysh</strong></p>
                <p class="explanation"><strong>Объяснение:</strong> ...слове قُرَيْشٍ (Курайшин) есть «мягкая» буква ي ... (ـَيْ). ...Мы тянем «ай» -> «Курай<strong>йй</strong>ш» (2, 4 или 6 счетов).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 20</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Когда возникает "Мадд ‘Āriḍ li-s-Sukūn" (Временный Мадд)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Когда Хамза и Мадд в одном слове</button>
                        <button data-correct="true">B) Только когда мы останавливаемся на слове с Маддом Таби'и</button>
                        <button data-correct="false">C) Когда буква Мадда встречается с Шаддой</button>
                    </div>
                    <p class="quiz-question">Какие звуки образуют "Мадд Лин"?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) "аа", "ии", "уу"</button>
                        <button data-correct="false">B) "ннн", "ммм"</button>
                        <button data-correct="true">C) "ай", "ау"</button>
                    </div>
                </div>
            `
        },
        {
            id: 21,
            title: "Урок 21: «Живые» Буквы — Правило Калькаля",
            content: `
                <h2>🕌 Урок 21: «Живые» Буквы — Правило Калькаля (قَلْقَلَة)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся «оживлять» пять особенных букв, заставляя их звучать с легким эхом или вибрацией (Калькаля), когда они "спят" (т.е. имеют Сукун).</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Слово <strong>Калькаля (قَلْقَلَة)</strong> ... означает «вибрация», «сотрясение» или «эхо». ...есть <strong>пять сильных букв</strong>, которые «отказываются» быть тихими. Когда они получают Сукун, ...мы должны добавить легкий «отскок» или «эхо».</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p>Буквы Калькаля: Их ровно пять. ...фраза: <strong>قُطْبُ جَدٍّ (Кутбу Джадд)</strong></p>
                <p>Это буквы: <strong>ق (Каф), ط (Та), ب (Ба), ج (Джим), د (Даль)</strong>.</p>
                <p>Когда происходит Калькаля? <strong>Только</strong> когда одна из этих пяти букв имеет <strong>Сукун (ـْ)</strong>.</p>
                
                <h4>Два уровня Калькаля:</h4>
                <ul>
                    <li><strong>Калькаля Сугра (Малая):</strong> Когда буква с Сукуном стоит <strong>в середине</strong> слова. Эхо... легкое и быстрое. (Пример: يَ<strong>قْ</strong>طَعُونَ)</li>
                    <li><strong>Калькаля Кубра (Великая):</strong> Когда мы <strong>останавливаемся</strong> на слове, которое заканчивается на одну из этих букв. Эхо... намного сильнее и яснее. (Пример: الْفَلَ<strong>قِ</strong>)</li>
                </ul>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Калькаля Кубра (Великая - при остановке):</strong></p>
                <div class="quran-text">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ</div>
                <p class="transliteration">"...bi-Rabbi-l-Falaq" (Сура: Аль-Фаляк, 113:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> Когда мы останавливаемся на слове الْفَلَقِ... буква ق (Каф) получает временный Сукун. Мы обязаны произнести ее с сильным эхом: «аль-Фаля<strong>К(А)</strong>».</p>
                
                <p><strong>2. Калькаля Сугра (Малая - в середине слова):</strong></p>
                <div class="quran-text">يَجْعَلُونَ</div>
                <p class="transliteration">"yaj-‘alūna"</p>
                <p class="explanation"><strong>Объяснение:</strong> Буква ج (Джим) имеет... Сукун в середине слова. Мы даем ей легкий «отскок»... «йа<strong>дж(а)</strong>-'алюуна».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Добавление полной гласной:</strong> Это самая большая ошибка. Читать «аль-Фаляк-<strong>а</strong>»... Это <strong>изменяет слово</strong>. Калькаля — это эхо, а не новая буква.</p>
                
                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
               <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 21</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какая фраза помогает запомнить 5 букв Калькаля?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) يَرْمَلُون (Ярмалун)</button>
                        <button data-correct="true">B) قُطْبُ جَدٍّ (Кутбу Джадд)</button>
                        <button data-correct="false">C) يَنْمُو (Янму)</button>
                    </div>
                    <p class="quiz-question">Какая Калькаля (эхо) будет сильнее?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Кубра (Великая), при остановке на слове (أَحَدْ)</button>
                        <button data-correct="false">B) Сугра (Малая), в середине слова (يَجْعَلُونَ)</button>
                    </div>
                </div>
            `
        },
        {
            id: 22,
            title: "Урок 22: Твердость и Мягкость Буквы Ра (ر)",
            content: `
                <h2>🕌 Урок 22: Два «настроения» — Твердость и Мягкость Буквы Ра (ر)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся определять, когда букву Ра (ر) нужно произносить <strong>твердо</strong> (Тафхим - تَفْخِيم), а когда — <strong>мягко</strong> (Таркык - تَرْقِيق).</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Буква Ра (ر) уникальна... она меняет свой «характер» в зависимости от огласовок...</p>
                <p><strong>Тафхим (Твердость):</strong> ...произносим ر (Ра) «полным ртом». Корень языка <strong>поднимается</strong>... <strong>РРРА</strong>.</p>
                <p><strong>Таркык (Мягкость):</strong> ...произносим ر (Ра) <strong>мягко</strong>. Корень языка <strong>опущен</strong>... <strong>рря</strong>.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <p class="explanation"><strong>Секрет Таджвида:</strong> Чтобы запомнить просто: <strong>Фатха (а) и Дамма (у)</strong> делают Ра (ر) <strong>Твердой</strong> (сильной). <strong>Кясра (и)</strong> делает Ра (ر) <strong>Мягкой</strong> (слабой).</p>

                <h4>1. Ра (ر) произносится ТВЕРДО (Тафхим):</h4>
                <ul>
                    <li>Если у нее <strong>Фатха (ـَ)</strong> или <strong>Дамма (ـُ)</strong>. (Пример: <strong>رَ</strong> (Ра), <strong>رُ</strong> (Ру)).</li>
                    <li>Если у нее Сукун (رْ), а <strong>перед</strong> ней... Фатха или Дамма. (Пример: أَرْسَلَ (а<strong>р</strong>саля)).</li>
                </ul>
                
                <h4>2. Ра (ر) произносится МЯГКО (Таркык):</h4>
                <ul>
                    <li>Если у нее <strong>Кясра (ـِ)</strong>. (Пример: <strong>رِ</strong> (Ри)).</li>
                    <li>Если у нее Сукун (رْ), а <strong>перед</strong> ней... Кясра. (Пример: فِرْعَوْنَ (Фи<strong>р</strong>'аун)).</li>
                </ul>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Твердая Ра (Тафхим) с Фатхой:</strong></p>
                <div class="quran-text">الرَّحْمَٰنِ الرَّحِيمِ</div>
                <p class="transliteration">"Ar-Raḥmāni-r-Raḥīm" (Сура: Аль-Фатиха, 1:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> Все три буквы ر (Ра) здесь... (ـَ). Они должны звучать твердо...</p>
                
                <p><strong>2. Мягкая Ра (Таркык) с Сукуном (после Кясры):</strong></p>
                <div class="quran-text">إِنَّ فِرْعَوْنَ</div>
                <p class="transliteration">"inna Fir-‘awna"</p>
                <p class="explanation"><strong>Объяснение:</strong> ...رْ (Ра Сакина) стоит после فِ (Фи) с Кясрой. Ра (ر) должна быть мягкой: «Фи<strong>рр</strong>-'ауна».</p>
                
                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
               <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 22</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какие огласовки делают букву Ра (ر) ТВЕРДОЙ?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Кясра (ـِ)</button>
                        <button data-correct="true">B) Фатха (ـَ) и Дамма (ـُ)</button>
                        <button data-correct="false">C) Только Сукун (ـْ)</button>
                    </div>
                    <p class="quiz-question">Как нужно прочитать Ра (ر) в слове (فِرْعَوْنَ)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Мягко (Таркык), потому что перед (رْ) стоит Кясра</button>
                        <button data-correct="false">B) Твердо (Тафхим), потому что (ع) - гортанная</button>
                    </div>
                </div>
            `
        },
        {
            id: 23,
            title: "Урок 23: Лям (ل) в Слове «Аллах» (اللَّه)",
            content: `
                <h2>🕌 Урок 23: Особое Положение — Лям (ل) в Слове «Аллах» (اللَّه)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся произносить Имя «Аллах» (اللَّه) с должным почтением: когда произносить его <strong>твердо</strong> (Тафхим), а когда — <strong>мягко</strong> (Таркык).</p>

                <h3>📚 Четкое Объяснение</h3>
                <p>Буква Лям (ل)... является <strong>мягкой</strong> буквой... <strong>Единственное исключение</strong> — это буква Лям (ل) в Слове <strong>اللَّه</strong> (Аллах). Эта Лям (ل) может быть: Твердой... «<strong>ЛЛ</strong>АХ» или Мягкой... «<strong>лл</strong>ах».</p>
                <p>От чего это зависит? Только от огласовки той буквы, что стоит <strong>ПЕРЕД</strong> этим Словом.</p>
                
                <h3>✍️ Подробное Описание</h3>
                <h4>1. Лям (ل) в (اللَّه) читается ТВЕРДО (Тафхим):</h4>
                <p>Если буква... перед Словом (اللَّه) имеет <strong>Фатху (ـَ)</strong> или <strong>Дамму (ـُ)</strong>.</p>
                
                <h4>2. Лям (ل) в (اللَّه) читается МЯГКО (Таркык):</h4>
                <p>Если буква... перед Словом (اللَّه) имеет <strong>Кясру (ـِ)</strong>.</p>
                
                <p class="explanation"><strong>Секрет Таджвида:</strong> Это правило касается <strong>только</strong> Слова (اللَّه). Все остальные буквы Лям (ل) в Коране... <strong>всегда</strong> мягкие!</p>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Твердое произношение (Тафхим) — после Фатхи (ـَ):</strong></p>
                <div class="quran-text">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
                <p class="transliteration">"Qul huwa-Llāhu Aḥad" (Сура: Аль-Ихляс, 112:1)</p>
                <p class="explanation"><strong>Объяснение:</strong> Перед Словом (اللَّه) стоит буква وَ (Вау) с <strong>Фатхой</strong>... Поэтому Лям (ل) читается твердо: «hува-<strong>ЛЛ</strong>аhу...».</p>

                <p><strong>2. Мягкое произношение (Таркык) — после Кясры (ـِ):</strong></p>
                <div class="quran-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                <p class="transliteration">"Bismi-llāhi..."</p>
                <p class="explanation"><strong>Объяснение:</strong> ...Перед Словом (اللَّهِ) стоит буква م (Мим) с <strong>Кясрой</strong>... Лям (ل) читается мягко: «Бисми-<strong>лл</strong>аhи...».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 23</h3>
                <div class="quiz-container">
                    <p class="quiz-question">В каком случае Лям (ل) в слове (اللَّه) читается МЯГКО (Таркык)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Если перед ним Фатха (ـَ)</button>
                        <button data-correct="false">B) Если перед ним Дамма (ـُ)</button>
                        <button data-correct="true">C) Если перед ним Кясра (ـِ)</button>
                    </div>
                    <p class="quiz-question">Как читается Лям (ل) в аяте (قُلْ هُوَ اللَّهُ أَحَدٌ)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Твердо (Тафхим), потому что перед ним Фатха</button>
                        <button data-correct="false">B) Мягко (Таркык), потому что в слове "Куль" есть Лям</button>
                    </div>
                </div>
            `
        },
        {
            id: 24,
            title: "Урок 24: Хамзат аль-Васль (ٱ) и Хамзат аль-Кат‘ (أ)",
            content: `
                <h2>🕌 Урок 24: «Соединяющая» и «Режущая» Хамза — Хамзат аль-Васль (ٱ) и Хамзат аль-Кат‘ (أ)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы научимся различать Хамзат аль-Кат‘... (которая <strong>всегда</strong> произносится) и Хамзат аль-Васль... (которая... <strong>иногда</strong> произносится, а <strong>иногда</strong> исчезает).</p>

                <h3>📚 Четкое Объяснение</h3>
                <h4>1. Хамзат аль-Кат‘ (هَمْزَةُ الْقَطْعِ) — «Режущая» Хамза:</h4>
                <p>«Кат‘» (قَطْع) означает «резать»... Эта Хамза <strong>всегда</strong> произносится, где бы она ни стояла... Она пишется с символом Хамзы (ء) сверху или снизу: <strong>أَ , إِ , أُ</strong>.</p>
                
                <h4>2. Хамзат аль-Васль (هَمْزَةُ الْوَصْلِ) — «Соединяющая» Хамза:</h4>
                <p>«Васль» (وَصْل) означает «соединение»... ...она нужна <strong>только</strong>... чтобы помочь нам начать читать слово, которое начинается с Сукуна... Она пишется как простой Алиф (ا) или Алиф с... (ص) над ним: <strong>ٱ</strong>.</p>

                <h3>✍️ Подробное Описание (Как работает Хамзат аль-Васль)</h3>
                <ul>
                    <li>Если вы <strong>НАЧИНАЕТЕ</strong> чтение с этого слова, вы <strong>произносите</strong> Хамзат аль-Васль (Пример: <strong>А</strong>ль-хамду (ٱلْحَمْدُ)).</li>
                    <li>Если вы <strong>СОЕДИНЯЕТЕ</strong> это слово с предыдущим, Хамзат аль-Васль <strong>исчезает</strong> (пропускается). (Пример: Бисми-<strong>лл</strong>ах (بِسْمِ ٱللَّهِ)).</li>
                </ul>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Хамзат аль-Кат‘ (أ) — Всегда произносится:</strong></p>
                <div class="quran-text">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ</div>
                <p class="transliteration">"Qul 'a‘ūdhu..."</p>
                <p class="explanation"><strong>Объяснение:</strong> Слово <strong>أَ</strong>عُوذُ... начинается с Хамзат аль-Кат‘ (أَ). Даже после слова «Куль» (قُلْ) мы обязаны ее произнести.</p>

                <p><strong>2. Хамзат аль-Васль (ٱ) — Пропускается при соединении:</strong></p>
                <div class="quran-text">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                <p class="transliteration">"Bismi-llāhi-r-raḥmāni-r-raḥīm"</p>
                <p class="explanation"><strong>Объяснение:</strong> ...Все три Хамзы (ٱ) пропущены! «Бисми-<strong>лл</strong>аh» (а не «Бисми-<strong>А</strong>ллаh»). «...hи-<strong>р-р</strong>ахман» (а не «...hи-<strong>А</strong>р-рахман»).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 24</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Как читается Хамзат аль-Кат‘ (أ) (Режущая Хамза)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Она произносится ВСЕГДА (в начале и при соединении)</button>
                        <button data-correct="false">B) Она произносится ТОЛЬКО в начале чтения</button>
                        <button data-correct="false">C) Она ВСЕГДА пропускается</button>
                    </div>
                    <p class="quiz-question">Как вы прочтете (بِسْمِ ٱللَّهِ)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) "Бисми А-ллаhи" (с произнесением Хамзы)</button>
                        <button data-correct="true">B) "Бисми-ллаhи" (Хамза ٱ пропускается)</button>
                    </div>
                </div>
            `
        },
        {
            id: 25,
            title: "Урок 25: «Близнецы» и «Соседи» (Мутамасиляйн...)",
            content: `
                <h2>🕌 Урок 25: «Близнецы» и «Соседи» — Мутамасиляйн, Мутаджанисайн и Мутакарибайн</h2>
                <p class="explanation"><strong>Цель урока:</strong> ...научимся плавно <strong>сливать</strong> (делать Идгам) две буквы, которые являются либо «близнецами» (одинаковыми), либо «соседями» (рождаются в одном или близких местах).</p>

                <h3>📚 Четкое Объяснение</h3>
                <ul>
                    <li><strong>Мутамасиляйн (مُتَمَاثِلَيْن)</strong> — «Два Близнеца». Это две <strong>абсолютно одинаковые</strong> буквы (например, ب + ب).</li>
                    <li><strong>Мутаджанисайн (مُتَجَانِسَيْن)</strong> — «Два Соседа (одного вида)». У них <strong>один "дом"</strong> (махрадж), но разный характер... (например, ت + ط).</li>
                    <li><strong>Мутакарибайн (مُتَقَارِبَيْن)</strong> — «Два Близких Соседа». У них <strong>очень близкие "дома"</strong>... (например, ل + ر).</li>
                </ul>
                <p><strong>Главное Правило (Идгам):</strong> ...если первая буква имеет Сукун (ـْ), а вторая имеет огласовку... мы делаем Идгам (Слияние). ...мы <strong>полностью пропускаем</strong> первую букву и <strong>удваиваем</strong> вторую...</p>

                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Мутамасиляйн (Близнецы: بْ + ب):</strong></p>
                <div class="quran-text">اضْرِب بِّعَصَاكَ</div>
                <p class="transliteration">"Iḍrib-bi-‘aṣāka" (а не "Iḍrib... bi-‘aṣāka")</p>
                <p class="explanation"><strong>Объяснение:</strong> Первая بْ (Ба) с Сукуном полностью сливается со второй بِ (Би). Мы <strong>не</strong> делаем Калькаля на первой Ба! Мы сразу читаем удвоенную «Б»: «Идри<strong>б-б</strong>и...».</p>

                <p><strong>2. Мутаджанисайн (Соседи: تْ + ط):</strong></p>
                <div class="quran-text">وَقَالَت طَّائِفَةٌ</div>
                <p class="transliteration">"Wa qālaṭ-ṭā'ifatun" (а не "qālat... ṭā'ifatun")</p>
                <p class="explanation"><strong>Объяснение:</strong> Буква تْ (Та) полностью исчезает. Мы произносим только... удвоенную طَّ (Т-та): «Кааля<strong>т-т</strong>аа'ифа...».</p>

                <p><strong>3. Мутакарибайн (Близкие: لْ + ر):</strong></p>
                <div class="quran-text">وَقُل رَّبِّ</div>
                <p class="transliteration">"Wa qur-Rabbi" (а не "Wa qul... Rabbi")</p>
                <p class="explanation"><strong>Объяснение:</strong> Мы уже знаем это правило! لْ (Лям) сливается с ر (Ра). Мы читаем: «Ва ку<strong>р-Р</strong>абби...».</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>

                <h3>🧠 Тест по Уроку 25</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Что означает "Мутамасиляйн" (Близнецы)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Две абсолютно одинаковые буквы подряд (ب + ب)</button>
                        <button data-correct="false">B) Две буквы с близкими махраджами (ل + ر)</button>
                        <button data-correct="false">C) Две буквы с одним махраджем (ت + ط)</button>
                    </div>
                    <p class="quiz-question">Что происходит с Калькаля в аяте (اضْرِب بِّعَصَاكَ)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Калькаля удваивается</button>
                        <button data-correct="true">B) Калькаля ОТМЕНЯЕТСЯ, так как происходит Идгам (слияние)</button>
                        <button data-correct="false">C) Калькаля произносится как обычно</button>
                    </div>
                </div>
            `
        },
        {
            id: 26,
            title: "Урок 26: «Генеральная Уборка» — Практика Махаридж",
            content: `
                <h2>🕌 Урок 26: «Генеральная Уборка» — Практика Махаридж (Мест артикуляции)</h2>
                <p class="explanation"><strong>Цель урока:</strong> ...Мы вернемся к 5 «домам» букв (Махаридж) и сосредоточимся на произношении самых сложных звуков...</p>

                <h3>📚 Четкое Объяснение (Вспоминаем 5 «Домов»)</h3>
                <ul>
                    <li>Аль-Джауф (Полость)</li>
                    <li>Аль-Хальк (Горло) (ء , ه , ع , ح , غ , خ)</li>
                    <li>Аль-Лисан (Язык) (ق , ك , ض , ل , ر...)</li>
                    <li>Аш-Шафатан (Губы) (م , ب , و , ف)</li>
                    <li>Аль-Хайшум (Нос) (Гунна)</li>
                </ul>
                <p>...сосредоточимся на... буквах горла и твердых буквах языка.</p>

                <h3>✍️ Детальная Практика (Фокус на сложных буквах)</h3>
                <p><strong>1. Фокус на Горле (Аль-Хальк):</strong></p>
                <ul>
                    <li>Дальнее горло: ء (А/Хамза) и <strong>ه</strong> (hа - легкий выдох).</li>
                    <li>Среднее горло: <strong>ع</strong> ('Айн) и <strong>ح</strong> (Ха - «горячий», «шепчущий» звук).</li>
                    <li>Ближнее горло: <strong>غ</strong> (Гъайн) и <strong>خ</strong> (Кха - хриплый).</li>
                </ul>
                
                <p><strong>2. Фокус на Языке (Аль-Лисан):</strong> (Твердые vs Мягкие)</p>
                <ul>
                    <li><strong>ق</strong> (Твердая) против <strong>ك</strong> (Мягкая)</li>
                    <li><strong>ص</strong> (Твердая) против <strong>س</strong> (Мягкая)</li>
                    <li><strong>ط</strong> (Твердая) против <strong>ت</strong> (Мягкая)</li>
                </ul>
                
                <h3>📖 Примеры из Корана (Практика Контраста)</h3>
                <p><strong>Контраст (ع) против (ء):</strong></p>
                <div class="quran-text">أَنْعَمْتَ</div>
                <p class="transliteration">"an-‘amta" (Сура: Аль-Фатиха, 1:7)</p>
                <p class="explanation"><strong>Объяснение:</strong> Здесь обе буквы! Сначала <strong>ء (Хамза)</strong> в «an...», а затем <strong>ع ('Айн)</strong> в «...‘amta». Почувствуйте, как «А» рождается глубоко, а «'А» — в середине горла.</p>
                
                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>Произносить (ع) как (А) или (Г):</strong> «А<strong>на</strong>'амта» вместо «А<strong>н'а</strong>мта».</p>
                <p><strong>Произносить (ح) как (Х):</strong> «Ар-Ра<strong>х</strong>ман» (с русским х) вместо «Ар-Ра<strong>ḥ</strong>ман» (с горячим выдохом).</p>
                <p><strong>«Заражение» мягких букв:</strong> В слове خَلَقَ (Халяка)... (ل) между ними — мягкая! Не читайте «Ха-<strong>ЛА</strong>-ка». Читайте «Ха-<strong>ля</strong>-ка»...</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player"><p>Здесь будет ваше аудио к Уроку</p></div>

                <h3>🧠 Тест по Уроку 26</h3>
                <div class="quiz-container">
                    <p class="quiz-question">В какой части горла "живут" буквы (ع) и (ح)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) В дальней (глубокой)</button>
                        <button data-correct="true">B) В средней</button>
                        <button data-correct="false">C) В ближней (ко рту)</button>
                    </div>
                    <p class="quiz-question">Какая частая ошибка в слове (خَلَقَ)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Читать (ق) слишком мягко</button>
                        <button data-correct="true">B) "Заражать" мягкую (ل) и читать ее твердо ("Ха-ЛА-ка")</button>
                        <button data-correct="false">C) Пропускать букву (خ)</button>
                    </div>
                </div>
            `
        },
        {
            id: 27,
            title: "Урок 27: Мелодия Корана — Тренировка Гунны",
            content: `
                <h2>🕌 Урок 27: Мелодия Корана — Тренировка Гунны (غُنَّة)</h2>
                <p class="explanation"><strong>Цель урока:</strong> ...тренируем самый красивый звук в Таджвиде. Наша цель — ...каждая ваша Гунна... была плавной... и длилась ровно <strong>2 счета</strong>.</p>

                <h3>📚 Четкое Объяснение</h3>
                <p><strong>Гунна (غُنَّة)</strong> — ...мелодичный носовой звук, который исходит из носовой полости (Аль-Хайшум). ...длина Гунны... — <strong>2 счета</strong> (две хараки). Это... столько же времени, сколько вы тянете <strong>Мадд Таби'и</strong>... «аа» или «ии».</p>
                
                <h3>✍️ Подробное Описание (Где мы делаем Гунну 2 счета?)</h3>
                <ul>
                    <li><strong>Самая сильная Гунна:</strong> На буквах <strong>Нун (نّ)</strong> и <strong>Мим (مّ)</strong>, когда у них есть <strong>Шадда (ـّ)</strong>. (Пример: إِنَّ, ثُمَّ).</li>
                    <li><strong>Правила Нун Сакина:</strong> Идгам (с ي, ن, م, و), Икляб (перед ب), Ихфа (перед 15 буквами).</li>
                    <li><strong>Правила Мим Сакина:</strong> Идгам Шафави (перед م), Ихфа Шафави (перед ب).</li>
                </ul>
                
                <h3>📖 Примеры из Корана</h3>
                <p><strong>1. Гунна на Шадде (Самая сильная):</strong></p>
                <div class="quran-text">مِنَ الْجِنَّةِ وَالنَّاسِ</div>
                <p class="transliteration">"mina-l-jinnati wa-n-nās" (Сура: Ан-Нас, 114:6)</p>
                <p class="explanation"><strong>Объяснение:</strong> ...Удерживайте نّ в слове الْجِ<strong>ннн</strong>ати на 2 полных счета. Сделайте то же самое для ا<strong>н-Н</strong>аас.</p>
                
                <p><strong>2. Гунна на Ихфа (Скрытие):</strong></p>
                <div class="quran-text">إِن كُنتُمْ صَادِقِينَ</div>
                <p class="transliteration">"in(gh)-kuntum ṣādiqīn"</p>
                <p class="explanation"><strong>Объяснение:</strong> ...два скрытия (Ихфа) подряд. ...Скройте نْ перед ك... «и<strong>(ннн)</strong>...». ...скройте نْ перед ت... «...ку<strong>(ннн)</strong>тум...».</p>

                <h3>⚠️ Ошибки, которых следует избегать</h3>
                <p><strong>«Воровство» Гунны:</strong> Читать Гунну слишком быстро (меньше 2-х счетов). Это «обкрадывает» аят...</p>
                <p><strong>Гунна там, где ее нет (!!!):</strong> Это самая распространенная ошибка.</p>
                <p><strong>Неправильно:</strong> «а<strong>нннн</strong>-'амта» (أَنْعَمْتَ). <strong>Правильно:</strong> «а<strong>н</strong>-'амта» (Четкий «н», <strong>без</strong> Гунны!).</p>
                <p><strong>Неправильно:</strong> «ми<strong>нннн</strong>-Раббихим» (مِن رَّبِّهِمْ). <strong>Правильно:</strong> «ми<strong>р-Р</strong>аббихим» (Идгам <strong>без</strong> Гунны!).</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 27</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какова стандартная длина Гунны?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 1 счет (очень быстро)</button>
                        <button data-correct="true">B) 2 счета (как Мадд Таби'и)</button>
                        <button data-correct="false">C) 4 счета (как Мадд Муттасыль)</button>
                    </div>
                    <p class="quiz-question">В каком из этих примеров Гунна НЕ нужна?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) إِنَّ (Инна)</button>
                        <button data-correct="false">B) مِن مَّاءٍ (Мим-маа)</button>
                        <button data-correct="true">C) أَنْعَمْتَ (Ан'амта)</button>
                    </div>
                </div>
            `
        },
        {
            id: 28,
            title: "Урок 28: Симфония Чтения — Тренировка Маддов",
            content: `
                <h2>🕌 Урок 28: Симфония Чтения — Тренировка Маддов (الْمُدُود)</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы будем практиковаться в <strong>согласованности</strong> (consistency). Наша цель — сделать так, чтобы все ваши 2-секундные Мадды были одной длины, все 4/5-секундные — другой, а 6-секундные — самыми длинными, создавая идеальный ритм.</p> [cite: 1923-1925]

                <h3>📚 Четкое Объяснение (Палитра Маддов)</h3>
                <p>Чтение Корана — это как прекрасная мелодия. В этой мелодии есть короткие ноты, средние и длинные. [cite: 1926] Давайте вспомним нашу «Палитру»:</p>
                
                <h4>1. 2 Счета (Короткий Мадд)</h4>
                <ul><li><strong>Мадд Таби'и (Естественный):</strong> (ـَا , ـِي , ـُو). Пример: قَالَ (Кааля). [cite: 1930-1931]</li></ul>

                <h4>2. 4 или 5 Счетов (Средний Мадд)</h4>
                <ul>
                    <li><strong>Мадд Муттасыль (Связанный):</strong> Мадд + Хамза (ء) в <strong>одном</strong> слове. Пример: جَاءَ (Джаааа'а). [cite: 1933-1934]</li>
                    <li><strong>Мадд Мунфасыль (Разделенный):</strong> Мадд в <strong>конце</strong> слова + Хамза (ء) в <strong>начале</strong> следующего. Пример: يَا أَيُّهَا (Йаааа-аййуhа). [cite: 1935-1936]</li>
                </ul>
                
                <h4>3. 2, 4 или 6 Счетов (Выборочный Мадд)</h4>
                <ul><li><strong>Мадд ‘Āriḍ li-s-Sukūn (Временный):</strong> Когда мы <strong>останавливаемся</strong> на слове, и Мадд оказывается перед «временным» Сукуном. Пример: نَسْتَعِينُ (при остановке -> Наста'иииин). [cite: 1937-1939]</li></ul>

                <h4>4. 6 Счетов (Длинный, Обязательный Мадд)</h4>
                <ul><li><strong>Мадд Лязим (Необходимый):</strong> Мадд, за которым следует <strong>постоянный</strong> Сукун (ـْ) или <strong>Шадда (ـّ)</strong>. Пример: الضَّالِّينَ (ад-Дааааааллиин). [cite: 1940-1942]</li></ul>

                <p class="explanation"><strong>Секрет Таджвида (Последовательность!):</strong> Ошибка новичка — смешивать их: прочитать один Таби'и (قَالَ) на 2 счета, а другой (يَقُولُ) — на 3. Мы должны быть <strong>последовательными</strong>. [cite: 1945, 1949]</p>

                <h3>📖 Примеры из Корана (Переключение Скоростей)</h3>
                <div class="quran-text">وَالسَّمَاءِ وَالطَّارِقِ</div>
                <p class="transliteration">"was-Samā'i waṭ-Ṭāriq" (Ат-Тарик, 86:1)</p>
                <p><strong>Объяснение:</strong><br>
                <strong>السَّمَاءِ (as-Samā'i):</strong> Мадд + Хамза (ء) в одном слове. Это <strong>Муттасыль</strong>. Тянем 4-5 счетов. [cite: 1957-1958]<br>
                <strong>وَالطَّارِقِ (waṭ-Ṭāriq):</strong> Мадд (ـَا) + буква (رِ). Это <strong>Таби'и</strong>. Тянем 2 счета. [cite: 1959]<br>
                Задача: Протянуть «Сам<strong>аааа</strong>'и» (долго), а затем «Т<strong>аа</strong>рикъ» (коротко). [cite: 1960]</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
              <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 28</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Какова ОБЯЗАТЕЛЬНАЯ длина Мадд Лязим (الْمَدُّ اللَّازِمُ), как в слове الضَّالِّينَ?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) 2 счета</button>
                        <button data-correct="false">B) 4 или 5 счетов</button>
                        <button data-correct="true">C) Ровно 6 счетов</button>
                    </div>
                    <p class="quiz-question">Какое правило Мадда применяется, когда вы ОСТАНАВЛИВАЕТЕСЬ на слове نَسْتَعِينُ?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Мадд ‘Āriḍ li-s-Sukūn (Временный Мадд)</button>
                        <button data-correct="false">B) Мадд Муттасыль (Связанный Мадд)</button>
                        <button data-correct="false">C) Мадд Лязим (Необходимый Мадд)</button>
                    </div>
                </div>
            `
        },
        {
            id: 29,
            title: "Урок 29: «Полировка» — Распространенные Ошибки",
            content: `
                <h2>🕌 Урок 29: «Полировка» Чтения — Распространенные Ошибки в Таджвиде</h2>
                <p class="explanation"><strong>Цель урока:</strong> Сегодня мы рассмотрим самые частые ошибки (Ляхн - لَحْن), которые допускают чтецы, и научимся их замечать и исправлять, чтобы наше чтение стало чистым и ясным.</p> [cite: 2001-2003]

                <h3>📚 Четкое Объяснение (Два типа ошибок)</h3>
                
                <h4>1. Ляхн Джали (لَحْن جَلِيّ) — Явная Ошибка</h4>
                <p>Это грубая ошибка, которая <strong>меняет букву</strong> или <strong>огласовку</strong> и, как следствие, <strong>может изменить смысл Корана</strong>. [cite: 2005]<br>
                Например, прочитать أَنْعَمْتَ (ан'амт<strong>а</strong> - <strong>Ты</strong> облагодетельствовал) как أَنْعَمْتُ (ан'амт<strong>у</strong> - <strong>Я</strong> облагодетельствовал). [cite: 2006]<br>
                Это <strong>харам</strong> (запрещено) и должно быть исправлено. [cite: 2007]</p>

                <h4>2. Ляхн Хафи (لَحْن خَفِيّ) — Скрытая Ошибка</h4>
                <p>Это ошибка в <strong>правилах</strong> Таджвида, которая <strong>не меняет смысл</strong>, но <strong>лишает чтение красоты</strong>. [cite: 2008]<br>
                Например, пропустить Гунну (2 счета) или прочитать Мадд (4 счета) как 2 счета. [cite: 2009]<br>
                Это <strong>макрух</strong> (нежелательно), и мы стремимся избавиться от этого. [cite: 2010]</p>

                <h3>✍️ Подробное Описание (Самые Частые Ошибки)</h3>
                
                <p><strong>1. Гунна там, где ее нет (Изхар):</strong> [cite: 2013]<br>
                Ошибка: «а<strong>нннн</strong>-'амта» (أَنْعَمْتَ). [cite: 2015]<br>
                Правильно: «а<strong>н</strong>-'амта» (Четкий «н»). [cite: 2016]</p>

                <p><strong>2. Гунна с (Лям) и (Ра):</strong> [cite: 2017]<br>
                Ошибка: «ми<strong>нннн</strong>-Раббихим» (مِن رَّبِّهِمْ). [cite: 2018]<br>
                Правильно: «ми<strong>р-Р</strong>аббихим» (Чистое слияние «Р» <strong>без</strong> носового звука). [cite: 2019]</p>
                
                <p><strong>3. «Заражение» Мягких Букв:</strong> [cite: 2024]<br>
                Ошибка: В слове خَلَقَ (Халяка) читать «Ха-<strong>ЛА</strong>-ка» (твердое Лям) из-за твердых (خ) и (ق). [cite: 2025]<br>
                Правильно: «Ха-<strong>ля</strong>-ка» (Язык: вверх-вниз-вверх). [cite: 2026]</p>

                <h3>📖 Примеры из Корана (Учимся замечать ошибки)</h3>
                
                <p><strong>1. Ошибка в Басмале (Мягкость Лям):</strong> [cite: 2031]<br>
                Ошибка: Читать «Бисми-<strong>ЛЛА</strong>h...» (с твердой Лям). [cite: 2033]<br>
                Правильно: «Бисми-<strong>лла</strong>h...» (с мягкой Лям, потому что перед ней Кясра (ـِ), Урок 23). [cite: 2034]</p>
                
                <p><strong>2. Ошибка в Калькаля (Добавление гласной):</strong> [cite: 2035]<br>
                Ошибка (при остановке): Читать «Ахад<strong>-у</strong>» или «Ахад<strong>-а</strong>». [cite: 2037]<br>
                Правильно: «Аха<strong>Д(а)</strong>». Это легкое эхо, а не новая гласная (Урок 21). [cite: 2038]</p>
                
                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 29</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Как называется ошибка, которая МЕНЯЕТ смысл, например, чтение "ан'амту" (Я) вместо "ан'амта" (Ты)?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Ляхн Джали (Явная Ошибка)</button>
                        <button data-correct="false">B) Ляхн Хафи (Скрытая Ошибка)</button>
                        <button data-correct="false">C) Тартиль</button>
                    </div>
                    <p class="quiz-question">Как ПРАВИЛЬНО читать фразу "أَنْعَمْتَ" (ан'амта)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) "а(ннн)'амта" (С Гунной, как в Ихфа)</button>
                        <button data-correct="true">B) "ан-'амта" (Четкий "н", как в Изхар)</button>
                        <button data-correct="false">C) "а-'амта" (Пропуская "н")</button>
                    </div>
                </div>
            `
        },
        {
            id: 30,
            title: "Урок 30: Венец Путешествия — Сура «Аль-Фатиха»",
            content: `
                <h2>🕌 Урок 30: Венец Путешествия — Чтение Суры «Аль-Фатиха» со всеми правилами</h2>
                <p class="explanation"><strong>Цель урока:</strong> Собрать <strong>все</strong> 29 уроков в единое, прекрасное чтение, применив все наши знания на практике в Суре, которую мы читаем в каждом намазе.</p> [cite: 2075]
                <p>Сура «Аль-Фатиха» — это чудо. В этих семи коротких аятах Аллах (Свят Он и Велик) собрал огромное количество правил Таджвида. [cite: 2077]</p>

                <h3>✍️ Подробное Описание: «Аль-Фатиха» под микроскопом Таджвида</h3>
                
                <h4>(1) بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h4>
                <p><strong>اللَّهِ (ллаhи):</strong> Хамзат аль-Васль (ٱ) <strong>пропускается</strong>. [cite: 2087] Лям (ل) в Слове «Аллах» читается <strong>мягко (Таркык)</strong>, потому что перед ней стоит Кясра (Урок 23). [cite: 2088]<br>
                <strong>الرَّحْمَٰنِ (Ар-Раḥmāni):</strong> Хамзат аль-Васль (ٱ) <strong>пропускается</strong>. Лям (ل) артикля «Аль» <strong>сливается</strong> (Идгам Шамси). [cite: 2089] Буква <strong>ر (Ра)</strong> читается <strong>твердо (Тафхим)</strong> из-за Фатхи (Урок 22). [cite: 2090] Буква <strong>ح (Ха)</strong> — горячая, из середины горла. [cite: 2091]<br>
                <strong>الرَّحِيمِ (Ар-Раḥīm):</strong> При остановке: Мадд (ـِي) превращается в <strong>Мадд ‘Āriḍ li-s-Sukūn</strong> (Временный Мадд) — тянем 2, 4 или 6 счетов (Урок 20). [cite: 2093]</p>

                <h4>(2) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</h4>
                <p><strong>الْحَمْدُ (Аль-Ḥamdu):</strong> Хамзат аль-Васль (ٱ) <strong>произносится</strong> (как «А»), потому что мы начинаем аят. [cite: 2095] <strong>مْ (Мим Сакина)</strong> читается <strong>четко</strong> (Изхар Шафави) (Урок 13). [cite: 2097]<br>
                <strong>الْعَالَمِينَ (Аль-'Ālamīn):</strong> Четкая <strong>ع ('Айн)</strong> из середины горла. [cite: 2100] <strong>Mадд Таби'и</strong> (2 счета) на (عَا). [cite: 2101] При остановке: <strong>Мадд ‘Āriḍ li-s-Sukūn</strong> на (ـِي). [cite: 2102]</p>
                
                <h4>(5) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</h4>
                <p><strong>إِيَّاكَ (Иййāка):</strong> Это <strong>Хамзат аль-Кат‘ (Режущая)</strong>, она <strong>всегда</strong> произносится (Урок 24). [cite: 2111]</p>

                <h4>(6) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</h4>
                <p><strong>اهْدِنَا (Иhдинā):</strong> Хамзат аль-Васль (ٱ) <strong>произносится</strong> (как «И»), потому что мы начинаем (Урок 24). [cite: 2116]<br>
                <strong>الصِّرَاطَ (Аṣ-Ṣirāṭa):</strong> Хамзат аль-Васль (ٱ) <strong>пропускается</strong>. [cite: 2118] <strong>ص (Сад)</strong> — твердая. <strong>ر (Ра)</strong> — <strong>мягкая (Таркык)</strong> из-за Кясры (Урок 22). [cite: 2119] <strong>ط (Та)</strong> — твердая. [cite: 2120]<br>
                <strong>الْمُسْتَقِيمَ (Аль-Мустаqīм):</strong> <strong>ت (Та)</strong> — мягкая, <strong>ق (Каф)</strong> — твердая. [cite: 2122]</p>

                <h4>(7) صِرَاطَ الَّذِينَ أَنْعَمْتَ ... وَلَا الضَّالِّينَ</h4>
                <p><strong>أَنْعَمْتَ (ан'амта):</strong> <strong>Изхар Халькы</strong> — Нун (نْ) читается <strong>четко</strong>, <strong>БЕЗ</strong> Гунны перед ع ('Айн) (Урок 7). [cite: 2124]<br>
                <strong>وَلَا الضَّالِّينَ (ва ля-ḍ-Ḍāāāāāāllīn):</strong> И вот он, наш финал: <strong>Mадд Лязим (Необходимый Мадд)</strong>. Буква Мадда (ـَا) встречается с Шаддой (ـّ) на букве Лям (ل). Мы <strong>обязаны</strong> тянуть этот Мадд <strong>ровно 6 счетов!</strong> (Урок 28). [cite: 2130-2133]</p>

                <h3>💫 Духовное Напомянание (И наше прощание)</h3>
                <p>Поздравляю! Вы завершили этот курс! Бāрака-Ллаху фикум (Да благословит вас Аллах)! [cite: 2151-2152]</p>
                <p>Мой дорогой ученик, помните: Таджвид — это не 30-дневный курс, это <strong>путешествие длиною в жизнь</strong>. [cite: 2153]</p>
                <p>Никогда не останавливайтесь на достигнутом. Читайте, учитесь и возвышайтесь. [cite: 2159]</p>

                <h3>🎬 Видео и Аудио Практика</h3>
                <div class="media-placeholder"><p>Здесь будет ваше Видео к Уроку</p></div>
                <div class="audio-player">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <p>Аудио-практика:</p>
                </div>
                <h3>🧠 Тест по Уроку 30</h3>
                <div class="quiz-container">
                    <p class="quiz-question">Как правильно читать Лям (ل) в Слове "Аллах" (اللَّهِ) в первом аяте (Бисмиллях)?</p>
                    <div class="quiz-options">
                        <button data-correct="false">A) Твердо (Тафхим): "Бисми-ЛЛАh"</button>
                        <button data-correct="true">B) Мягко (Таркык): "Бисми-ллаh"</button>
                    </div>
                    <p class="quiz-question">Какое самое длинное удлинение (Мадд) во всей Суре Аль-Фатиха?</p>
                    <div class="quiz-options">
                        <button data-correct="true">A) Мадд Лязим (6 счетов) в слове الضَّالِّينَ</button>
                        <button data-correct="false">B) Мадд 'Āriḍ (2, 4, или 6) в слове الرَّحِيمِ</button>
                        <button data-correct="false">C) Мадд Таби'и (2 счета) в слове مَالِكِ</button>
                    </div>
                </div>
            `
        }
    ]

    const lessonList = document.getElementById('lesson-list');
    const lessonDisplay = document.getElementById('lesson-display');
    const searchBar = document.getElementById('search-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    let lessonLinks = [];
    function loadLesson(lessonId) {
        const lesson = allLessons.find(l => l.id === lessonId);
        if (!lesson) return;
        lessonDisplay.innerHTML = lesson.content;
        gsap.fromTo(lessonDisplay.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            }
        );

        lessonLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.dataset.id) === lessonId) {
                link.classList.add('active');
            }
        });

        if (lessonDisplay.parentElement) {
            lessonDisplay.parentElement.scrollTop = 0;
        }
        activateQuizListeners();
    }

    function filterLessons() {
        const searchTerm = searchBar.value.toLowerCase();

        lessonLinks.forEach(link => {
            const title = link.textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                link.parentElement.style.display = 'block';
            } else {
                link.parentElement.style.display = 'none';
            }
        });
    }

    function activateQuizListeners() {
        const quizOptionGroups = lessonDisplay.querySelectorAll('.quiz-options');

        quizOptionGroups.forEach(group => {
            const buttons = group.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('click', handleQuizClick);
            });
        });
    }

    function handleQuizClick(event) {
        const clickedButton = event.target;
        const isCorrect = clickedButton.dataset.correct === 'true';

        const optionsGroup = clickedButton.parentElement;

        if (isCorrect) {
            clickedButton.classList.add('correct');
        } else {
            clickedButton.classList.add('incorrect');
            const correctButton = optionsGroup.querySelector('button[data-correct="true"]');
            if (correctButton) {
                correctButton.classList.add('correct');
            }
        }

        optionsGroup.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
        });
    }
    allLessons.forEach(lesson => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = lesson.title;
        a.dataset.id = lesson.id;
        li.appendChild(a);
        lessonList.appendChild(li);
    });

    lessonLinks = Array.from(lessonList.querySelectorAll('a'));

    searchBar.addEventListener('keyup', filterLessons);

    lessonList.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const lessonId = parseInt(e.target.dataset.id);
            loadLesson(lessonId);

            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    loadLesson(1);
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    if (mainContent && sidebar) {
        mainContent.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }

});