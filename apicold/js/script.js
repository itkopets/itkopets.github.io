!function(){window.onload=function(){function e(){o.classList.add("visible"),d.classList.add("blocked")}function n(){o.classList.remove("visible"),d.classList.remove("blocked")}screen.orientation.lock("landscape");const i=document.querySelector(".eliminate-btn"),p=document.querySelector(".smog1"),a=document.querySelector(".smog2"),l=document.querySelector(".smog3"),r=document.querySelector(".threat-clouds"),s=document.querySelector(".throatSlasher"),o=document.querySelector(".popup"),t=document.querySelectorAll("[data-action]");i.onclick=function(){setTimeout(function(){p.classList.add("show"),setTimeout(function(){a.classList.add("show"),setTimeout(function(){l.classList.add("show"),setTimeout(function(){document.querySelector(".oraljs")?s.src="./images/coughbanditnew.png":document.querySelector(".nooser")?s.src="./images/noosernew.png":s.src="./images/throatSlashernew.png",p.classList.remove("show"),p.classList.add("hide"),setTimeout(function(){a.classList.remove("show"),a.classList.add("hide"),setTimeout(function(){r.classList.add("hide"),l.classList.remove("show"),l.classList.add("hide"),i.classList.add("hide")},500)},500)},2e3)},500)},500)},500)},t.forEach(function(i){switch(i.dataset.action){case"open":i.onclick=e;break;case"close":i.onclick=n}});var d=document.querySelector("body");!function(){for(var e=document.querySelectorAll(".translateBtn"),n=document.querySelectorAll(".translated-text"),i=0;i<e.length;i++)e[i].addEventListener("click",function(){for(var i=0;i<e.length;i++)e[i].classList.remove("active");this.classList.add("active");for(var p=0;p<n.length;p++){var a=n[p].getAttribute("key"),l=h[lang][a];n[p].innerHTML=l}})}();var h={ua:{index:"АПІ-ТЕХНОЛОГІЇ",nose:"КОЛИ НЕЖИТЬ","api-tim":"БІЛЬ У ГОРЛІ","api-oral":"КАШЕЛЬ","api-tech-text":"Апі-технології при застуді<br>Гармонія Науки та Природи","api-tech-text-1":"Тільки натуральні компоненти","api-tech-text-2":"4-кратний аналіз якості інгредієнтів","api-tech-text-3":"Відсутність хімічної обробки","api-tech-text-4":"Виробництво по стандартам GMP<sup>1</sup>","tech-container-1":"<b>Апі-технології</b> - європейська технологія виробництва продуктів\n        нового покоління для боротьби з симптомами застуди на основі меду,\n        прополісу та цілющих трав.","tech-container-2":"<li>\n          Використання натуральних інгредієнтів з екологічно чистих зон\n          \nЄвропи\n        </li>\n        <li>\n          Виробництво без хімічної обробки компонентів (меду, прополісу, цілющих\n          трав)\n        </li>\n        <li>\n          Використання низьких температур для збереження корисних властивостей\n          меду\n        </li>\n        <li>\n          4-х кратний аналіз якості та подальший контроль на всіх етапах\n          виробництва\n        </li>\n        <li>\n          Збалансоване поєднання натуральних компонентів Апіколд, які підсилюють\n          дію один одного\n        </li>","tech-images-1":"Мед","tech-images-2":"Прополіс","tech-images-3":"Цілющі трави","who-made-this-1":"<h2>Хто виробник препаратів Апіколд?</h2>\n        <p>\n          Apipharma – хорватський виробник, який спеціалізується на виробництві\n          натуральних продуктів на основі меду, прополісу, маточного молочка та\n          цілющих трав. Новий завод побудований в місці Нашице в Хорватії згідно\n          стандартів GMP у 2012 році<sup>1</sup>. На заводі використовуються\n          якісні стінові конструкції, які відповідають високим міжнародним\n          вимогам та стандартам. Це перший фармацевтичний завод, який встановив\n          хорватські антибактеріальні панелі на чистих стінах всіх виробничих\n          приміщеннях з метою запобігання поширення шкідливих вірусів та\n          бактерій тощо. Високотехнологічне виробництво знаходиться в екологічно\n          чистій зоні поруч з квітучими ланами та пасіками, де створені ідеальні\n          умови для «правильних» бджіл, які виробляють «нашице»<sup>2</sup> мед\n          та прополіс. Саме ці якісні, свої інгредієнти використовує Apipharma\n          при виробництві продуктів нового покоління, Апіколд. Взагалі,\n          асортимент компанії Apipharma складається більше ніж з 40 продуктів,\n          які визнані в країнах Європи, Близького та Далекого Сходу<sup>1</sup>.\n        </p>","api-welcome-1":"Зустрічайте Апі технології в Україні, які втілені в продуктах нового\n        покоління Апіколд!","api-welcome-1-1":"Оберіть свій Апіколд","api-welcome-2":"При нежиті","api-welcome-3":"При болю в горлі","api-welcome-4":"При кашлі","api-tehnologies-all":'<h2>\n          Апі-технології\n          <p>Гармонія Науки та Природи</p>\n        </h2>\n        <a href="index.html" class="api-button">Дізнатись більше</a>',popup:"Дуже хороший хлопчик. Ввічливий, добрий, не любить хворіти.\n            Слухається маму і щоранку робить зарядку. Піклуватися про інших.\n            Характер м'який.","disclamer-1":"Доказова база","disclamer-2":"<li>\n          Хисматуллина Н.З. Практическая апитерапия. - Екатеринбург: Уральский\n          рабочий, 2013, - 336 с. (стр. 52-56).\n        </li>\n        <li>\n          Хисматуллина Н.З. Практическая апитерапия. - Екатеринбург: Уральский\n          рабочий, 2013, - 336 с. (стр. 28, 37-38, 41).\n        </li>\n        <li>\n          Соколов С.Я. Фитотерапия и Фитофармакология. Руководство для врачей.\n          Медицинское информационное агентство МИА, Москва, 2000 г. (стр.\n          324-325)\n        </li>","disclamer-3":"Реклама медичного виробу та дієтичної добавки*. Перед застосуванням уважно ознайомтеся з інструкцією для застосування медичного виробу та дієтичної добавки*. Зберігати в недоступному місці для дітей. Має протипоказання та побічні реакції. *Апіколд Тим’ян - дієтична добавка, нелікарський засіб. Апіколд Мінт, спрей назальний, по 30 мл, медичний виріб: декларація про відповідність № 01/UA версія 1 від 30.03.2018; Апіколд Пропо, спрей назальний, по 30 мл, медичний виріб: декларація про відповідність № 02/UA версія 1 від 30.03.2018; Апіколд Спрей Оральний, по 20 мл, медичний виріб: декларація про відповідність № 03/UA версія 1 від 30.03.2018; Апіколд Тим’ян, дієтична добавка*: протокол випробування харчової продукції № 8/539 від 20.02.2018. Ексклюзивний дистриб’ютор: ПрАТ “Натурфарм”, вул. Лісна, 30а, м. Київ, Пуща-Водиця, 04075; телефон: (044) 401-81-03. Виробник: АПІФАРМА д. о. о..","disclamer-4":"САМОЛІКУВАННЯ МОЖЕ БУТИ ШКІДЛИВИМ ДЛЯ ВАШОГО ЗДОРОВ’Я",instruction:"Iнструкцiя","disclamer-5":"ДЕ КУПИТИ",map:"Де купити","header-nose-1":"Апікол пропо та Апіколд мінт","header-nose-2":"Природа проти нежиті!","header-nose-3":"<p>Забирайся геть, Шмигоніс!</p>\n          <p>Шмиг...<br />Шмиг...<br />Шмиг...</p>","header-nose-4":"<p>Прожени Шмигоноса</p>","symptom-nose-1":"Апікол пропо та Апіколд мінт\n        <p>Природа проти нежиті!</p>","symptom-nose-1-2":"<p>Апі-технології</p>\n        <p>Натуральний склад</p>\n        <p>Європейська якість</p>","symptom-nose-1-3":"<li>Складаються з натуральних компонентів</li>\n        <li>Дбайливо очищають та зволожують слизову оболонку носа</li>\n        <li>Відновлюють комфортне дихання при застуді</li>\n        <li>Не звужують судини, не призводять до звикання</li>","api-double-1":'<p><b>Апіколд пропо</b><br />Коли шмарклі густі</p>\n            <p>назальний ізотонічний розчин з екстрактом прополісу</p>\n            <a class="propo-instruction" href="./apicoldpropo.pdf">Iнструкцiя</a>',"api-double-2":"<li>Сприяє видаленню гнійного вмісту з носу</li>\n          <li>Сприяє усуненню запалення у носі</li>\n          <li>Діє на бактерії, віруси, гриби завдяки прополісу<sup>1</sup></li>","api-double-3":'<p><b>Апіколд мінт</b><br />При закладеності та сухості в носі</p>\n            <p>назальний ізотонічний розчин з олією ментола та евкаліпта</p>\n            <a class="propo-instruction" href="./apicoldmint.pdf">Iнструкцiя</a>',"api-double-4":"<li>Відновлює комфортне дихання</li>\n          <li>Зволожує слизову оболонку носа</li>\n          <li>Очищує та сприяє видаленню сухих кірок з носу</li>\n          <li>\n            Надає приємне відчуття свіжості завдяки олії ментолу та евкаліпту\n          </li>","when-to-use":"<h2>Рекомендовано застосовувати впродовж усього року, коли:</h2>\n      <ul>\n        <li>Симптоми застуди</li>\n        <li>Симптоми алергії</li>\n        <li>Сухе повітря, кондиціонер</li>\n        <li>Щоденна гігієна</li>\n      </ul>","doses-nose-1":"Нежить, як вона є","doses-nose-2":"Здається, що про нежить ми знаємо все. Коли у нас шмарклі та\n            закладеність носа, ми не задумуючись використовуємо\n            судиннозвужувальні засоби та не задаємо собі питання: чи призводить\n            їх часте використання до звикання? Кожна людина робить свій вибір,\n            базуючись на тих знаннях якими володіє. І чим ширше її кругозір –\n            тим більше вірогідність вберегти себе та своїх близьких від помилок.\n            Стосовно здоров'я, часто відповіді нам підказує сама природа і\n            Апі-технології тому приклад: Апіколд\n            пропо та Апіколд мінт – ізотонічні спреї на основі єкстракту\n            прополісу, олії ментолу, евкаліпту для ефективного промивання носу.","doses-nose-3":"правильнi бджiлки<br />дбають про великих людей","doses-nose-4":"<p>Апi-Бджiл</p>","usage-nose-1":"Спосіб використання<br />\n        <p>Апіколд пропо та Апіколд мінт</p>","usage-nose-2":"<p>Тепер я знаю, що робити коли починають текти сопельки</p>\n          <p>Легко приймати</p>\n          <p>Лише 2-3 рази на добу</p>\n          <p>Дітям від 4 років та дорослим</p>\n          <p>1 розпилення в кожну ніздрю кілька разів на день</p>","criminal-list-nose-1":"Важливо знати!\n        <p>Шмигоніс частіше за все приходить не один, а разом з друзями:</p>","criminal-nose-1":"Кашлюковський","criminal-nose-1-1":"Давній друг “Бронхіта”, також відомий на прізвисько “Мокрий” або\n              “Сухий”. Любить протяги. Характер мерзенний, нежонатий.","criminal-nose-2":"Горлодер","criminal-nose-2-2":"З`являється в самий не потрібний момент. Мовчазний, шкідливий та\n              дратує оточуючих. Любить холодні напої та морозиво. Характер\n              прихований, не одружений.","criminal-btn-nose":"як позбутись","header-oral-1":"Апіколд спрей оральний\n        <p>Природна сила прополісу при болю в горлі!</p>","header-oral-2":"<p>Горлодерам тут<br />не місце!!!</p>\n          <p>Гр...<br />Гр-др...<br />Гррр...</p>","header-oral-3":"<p>Прожени Горлодера</p>","header-oral-4":"Апіколд спрей оральний\n        <p>Природна сила прополісу при болю в горлі!</p>","header-oral-5":"<p>Апі-технології</p>\n        <p>Натуральний склад</p>\n        <p>Європейська якість</p>","header-oral-6":"<li>Створений на основі екстракту прополісу</li>\n        <li>Зменшує подразнення та заспокоює запалене горло</li>\n        <li>Має знеболюючу дію завдяки прополісу<sup>1</sup></li>\n        <li>Захищає від повторного зараження</li>\n        <li>\n          Діє на причину: віруси, бактерії, гриби завдяки прополісу<sup>1</sup>\n        </li>","header-oral-7":"<b>Апіколд</b> спрей оральний\n          <p>при болю в горлі</p>","header-oral-8":"Завдяки прополісу має такі дії<sup>1</sup>:","header-oral-9":"<li>знеболюючу</li>\n          <li>антибактеріальну</li>\n          <li>противірусну</li>\n          <li>протигрибкову</li>\n          <li>протизапальну</li>\n          <li>імуномодулюючу</li>","header-oral-10":"Завдяки прополісно-гліцеріновій плівці захищає від повторного\n          зараження","header-oral-11":"Біль у горлі, як він є","header-oral-12":"Біль в горлі – один з найпоширеніших симптомів застуди, причиною\n            якого можуть бути як віруси, так і бактерії або гриби. В переважній\n            більшості препарати для усунення цього симптому синтетичні. У\n            зв’язку з цим варто згадати про природний унікальний засіб, який\n            ефективний при болю в горлі – це прополіс. Прополіс настільки\n            цінний, що його вартість завжди була в 1,5–2 рази вищою, ніж у інших\n            продуктів бджільництва. Він чинить протизапальну, протимікробну,\n            противірусну, імуномодулюючу та анестезуючу дії. Крім того прополіс\n            багатий на вітаміни, амінокислоти та корисні мікроелементи. Через ці\n            цінні властивості прополіс було включено до складу Апіколд спрея\n            орального. Крім прополісу Апіколд спрей оральний містить ще гліцерин\n            та масло м’яти перцевої. Апіколд спрей оральний – природна сила\n            прополісу при болю в горлі!","header-oral-13":"правильнi бджiлки<br />дбають про великих людей","header-oral-14":"Апi-Бджiл","header-oral-15":"Дуже хороший хлопчик. Ввічливий, добрий, не любить хворіти.\n            Слухається маму і щоранку робить зарядку. Піклуэться про інших.\n            Характер м'який.","header-oral-16":"Спосіб використання<p>Апіколд спрей оральний</p>","header-oral-17":"<p>\n            Тепер я знаю, що робити коли болить горло, мені допомагає природна\n            сила прополісу у зручному флаконі\n          </p>\n          <p>Легко приймати</p>\n          <p>Лише 2-3 рази на добу</p>\n          <p>Пряма дія на проблему</p>\n          <p>Розпилювати на запалену ділянку горла</p>","header-oral-18":"Важливо знати!\n        <p>Горлодер частіше за все приходить не один, а разом з друзями:</p>","header-oral-19":"Кашлюковський","header-oral-20":"Давній друг “Бронхіта”, також відомий на прізвисько “Мокрий” або\n              “Сухий”. Любить протяги. Характер мерзенний, нежонатий.","header-oral-21":"як позбутись","header-oral-22":"Шмигоніс","header-oral-23":"У дитинстві був хорошим хлопчиком. Однак потрапив під вплив\n              поганої компанії. Почав гуляти взимку без шапки, сидіти під\n              кондиціонерами і думає, що нежить сама пройде. Характер відсутній,\n              нежонатий.","header-oral-24":"як позбутись","header-tim-1":"Апіколд тим’ян\n        <p>Апімед при кашлі!</p>","header-tim-2":"<p>Пане Кашлюковський,<br />Вам вже пора йти!</p>\n          <p>Кхе...<br />Кхе-е-е...<br />Кхе..</p>","header-tim-3":"<p>Прожени Кашлюковського</p>","header-tim-4":"Апіколд тим’ян<sup>*</sup>\n        <p>Апімед при кашлі!</p>","header-tim-5":"<p>Апі-технології</p>\n        <p>Натуральний склад</p>\n        <p>Європейська якість</p>","header-tim-6":"<li>Створений на основі меду (48%), прополісу та тим’яну</li>\n        <li>Сприяє пом’якшенню кашлю, зменшенню подразнення</li>\n        <li>Полегшує відходження мокротиння</li>\n        <li>Має потрійну антибактеріальну дію<sup>1, 2, 3</sup></li>","header-tim-7":"Апіколд тим’ян<sup>*</sup>\n          <p>сироп від кашлю</p>","header-tim-8":"<b>«Жива» сила меду (48%) підкріплена прополісом та тим’яном<sup>1, 2, 3</sup></b> з широким спектром дії.","header-tim-9":"Прополіс та мед мають такі дії<sup>1, 2</sup>: антибактеріальна, противірусна, протигрибкова, протизапальна, імуномодулююча, протиалергічна","header-tim-10":"<b>Тим’ян має такі дії<sup>3</sup>:</b> антибактеріальна, протизапальна, відхаркувальна, муколітична, спазмолітична","header-tim-11":"Кашель, як він є","header-tim-12":"Кашель – захисний механізм для очищення дихальних шляхів. Він може бути як симптомом легкої застуди, так і бронхіту, трахеїту, ларинготрахеїту, кашлюку та ін. захворювань. Для лікування кашлю з давніх давен застосовували тим’ян, мед та прополіс. Мед має антибактеріальну, протизапальну, протиалергічну дії4. Прополіс чинить противірусну, антибактеріальну, протизапальну, імуномоделюючу дії3. Екстракт тим’яну володіє муколітичною, відхаркувальною, протизапальною, спазмолітичною8 та антибактеріальною5  діями. Завдяки Апі-технологіям від Хорватського виробника був створений сироп від кашлю нового покоління Апіколд тим’ян*. Він містить 48 % (!) натурального стандартизованого меду, «жива сила» якого підкріплена прополісом і тим’яном. А це потрійна (!) антибактеріальна<sup>3,4,5</sup> дія при кашлі. Апіколд тим’ян* – Апімед при кашлі!","header-tim-13":"правильнi бджiлки<br />дбають про великих людей","header-tim-14":"Aпi- Бджiл","header-tim-15":"Спосіб використання<br />\n        <p>Апіколд тим’ян<sup>*</sup></p>","header-tim-16":"<p>Тепер я знаю, що робити коли кашель доводить до сліз</p>\n          <p>\n            Дітям від 4 до 12 років: по 5 мл сиропу 3 рази на добу після їжі\n          </p>\n          <p>\n            Дітям від 12 років та дорослим: по 5 мл 3-5 разів на добу після їжі\n          </p>","header-tim-17":"Важливо знати!\n        <p>\n          Кашлюковський частіше за все приходить не один, а разом з друзями:\n        </p>","header-tim-18":"Горлодер","header-tim-19":"З`являється в самий не потрібний момент. Мовчазний, шкідливий та\n              дратує оточуючих. Любить холодні напої та морозиво. Характер\n              прихований, не одружений.","header-tim-20":"як позбутись","header-tim-21":"Шмигоніс","header-tim-22":"У дитинстві був хорошим хлопчиком. Однак потрапив під вплив\n              поганої компанії, почав гуляти взимку без шапки, сидіти під\n              кондиціонерами і думає, що нежить сама пройде. Характер відсутній,\n              нежонатий.","header-tim-23":"як позбутись"},ru:{index:"АПИ-ТЕХНОЛОГИИ",nose:"КОГДА НАСМОРК","api-tim":"БОЛЬ В ГОРЛЕ","api-oral":"КАШЕЛЬ","api-tech-text":"Апи-технологии при простуде<br>Гармония Науки и Природы","api-tech-text-1":"Только натуральные компоненты","api-tech-text-2":"4-х кратный анализ качества ингредиентов","api-tech-text-3":"Отсутствие химической обработки","api-tech-text-4":"Производство по стандартам GMP<sup>1</sup>","tech-container-1":"<b>Апи-технологии-</b>европейская технология производства продуктов нового поколения для борьбы с симптомами простуды на основе мёда, прополиса и целебных трав.","tech-container-2":"<li>использование натуральных ингредиентов из экологически чистых зон Европы</li>\n        <li>\n          производство без химической обработки компонентов (мёда, прополиса, целебных трав)\n        </li>\n        <li>\n          использование низких температур для сохранения полезных свойств\n          мёда\n        </li>\n        <li>\n          4-х кратный анализ качества и последующий контроль на всех этапах\n          производства\n        </li>\n        <li>\n          сбалансированное сочетание компонентов Апиколд, которые усиливают\n          действие друг друга\n        </li>","tech-images-1":"Мед","tech-images-2":"Прополис","tech-images-3":"Целебные травы","who-made-this-1":"<h2>Кто производитель продуктов Апиколд?</h2><p>Apipharma – хорватский производитель, который специализируется на производстве натуральных продуктов на основе мёда, прополиса, маточного молочка и целебных трав. Новый завод построен в городе Нашице в Хорватии в соответствии со стандартами GMP в 2012 году1. На заводе используются качественные стеновые конструкции, которые отвечают высоким международным требованиям и стандартам. Это первый фармацевтический завод, который установил хорватские антибактериальные панели на чистых стенах во всех производственных помещениях с целью предотвращения распространения вредных вирусов и бактерий и т.д.\n        Высокотехнологичное производство находится в экологически чистой зоне рядом с цветущими полями и пасеками, где созданы идеальные условия для «правильных» пчёл, которые производят «Нашице»2 мёд и прополис.\n        Именно эти качественные, свои ингредиенты использует Apipharma при производстве продуктов нового поколения, Апиколд.\n        В общем, ассортимент компании Apipharma состоит более чем из 40 продуктов, которые признаны в странах Европы, Ближнего и Дальнего Востока1.\n\n        Теперь, продукты нового поколения Апиколд, которые созданы по инновационной Апи-технологии, в Украине. Выбери свой Апиколд при таких симптомах простуды, как боль в горле, насморк и кашель.\n        Апиколд. Апи-технологии при простуде.</p>","api-welcome-1":"Встречайте Апи технологии в Украине, которые воплощены в продуктах нового поколения Апиколд","api-welcome-1-1":"Выбери свой Апиколд","api-welcome-2":"При насморке","api-welcome-3":"При боли в горле","api-welcome-4":"При кашле","api-tehnologies-all":'<h2>\n          Апи-технологии\n          <p>Гармония Науки и Природы</p>\n        </h2>\n        <a href="index.html" class="api-button">Узнать больше</a>',popup:"Очень хороший мальчик. Вежливый, добрый, не любит болеть. Слушается маму и каждое утро делает зарядку. Заботиться о других. Характер мягкий.",map:"Где купить","disclamer-1":"Доказова база","disclamer-2":"<li>\n          Хисматуллина Н.З. Практическая апитерапия. - Екатеринбург: Уральский\n          рабочий, 2013, - 336 с. (стр. 52-56).\n        </li>\n        <li>\n          Хисматуллина Н.З. Практическая апитерапия. - Екатеринбург: Уральский\n          рабочий, 2013, - 336 с. (стр. 28, 37-38, 41).\n        </li>\n        <li>\n          Соколов С.Я. Фитотерапия и Фитофармакология. Руководство для врачей.\n          Медицинское информационное агентство МИА, Москва, 2000 г. (стр.\n          324-325)\n        </li>","disclamer-3":"Реклама медичного виробу та дієтичної добавки*. Перед застосуванням уважно ознайомтеся з інструкцією для застосування медичного виробу та дієтичної добавки*. Зберігати в недоступному місці для дітей. Має протипоказання та побічні реакції. *Апіколд Тим’ян - дієтична добавка, нелікарський засіб. Апіколд Мінт, спрей назальний, по 30 мл, медичний виріб: декларація про відповідність № 01/UA версія 1 від 30.03.2018; Апіколд Пропо, спрей назальний, по 30 мл, медичний виріб: декларація про відповідність № 02/UA версія 1 від 30.03.2018; Апіколд Спрей Оральний, по 20 мл, медичний виріб: декларація про відповідність № 03/UA версія 1 від 30.03.2018; Апіколд Тим’ян, дієтична добавка*: протокол випробування харчової продукції № 8/539 від 20.02.2018. Ексклюзивний дистриб’ютор: ПрАТ “Натурфарм”, вул. Лісна, 30а, м. Київ, Пуща-Водиця, 04075; телефон: (044) 401-81-03. Виробник: АПІФАРМА д. о. о..","disclamer-4":"САМОЛІКУВАННЯ МОЖЕ БУТИ ШКІДЛИВИМ ДЛЯ ВАШОГО ЗДОРОВ’Я",instruction:"Инструкция","disclamer-5":"ГДЕ КУПИТЬ","header-nose-1":"Апиколд пропо, Апиколд минт","header-nose-2":"Природа против насморка!","header-nose-3":"<p>Убирайся вон, Шмыгонос</p>\n          <p>Шмыг...<br />Шмыг...<br />Шмыг...</p>","header-nose-4":"<p>Прогони Шмыгоноса</p>","symptom-nose-1":"Апиколд пропо и Апиколд минт\n        <p>природа против насморка!</p>","symptom-nose-1-2":"<p>Апи-технологии</p>\n        <p>Натуральный состав</p>\n        <p>Европейское качество</p>","symptom-nose-1-3":"<li>Состоят из натуральных компонентов</li>\n        <li>Бережно очищают и увлажняют слизистую оболочку носа</li>\n        <li>Восстанавливают комфортное дыхание при простуде</li>\n        <li>Не сужают сосуды, не приводят к привыканию</li>","api-double-1":'<p><b>Апиколд пропо</b><br />Когда сопли густые</p>\n            <p>назальный изотонический раствор с экстрактом прополиса</p>\n            <a class="propo-instruction" href="./apicoldpropo.pdf">Инструкция</a>',"api-double-2":"<li>Способствует удалению гнойного содержимого из носа</li>\n          <li>Способствует устранению воспаления в носу</li>\n          <li>Действует на бактерии, вирусы, грибы благодаря прополиса<sup>1</sup></li>","api-double-3":'<p><b>Апіколд минт</b><br />При заложенности и сухости в носу</p>\n            <p>назальный изотонический раствор с маслом ментола и эвкалипта</p>\n            <a class="propo-instruction" href="./apicoldmint.pdf">Инструкция</a>',"api-double-4":"<li>Восстанавливает комфортное дыхание</li>\n          <li>Увлажняет слизистую оболочку носа</li>\n          <li>Очищает и способствует удалению сухих корок из носа</li>\n          <li>\n               Оказывает приятное ощущение свежести благодаря маслу ментола и эвкалипта\n          </li>","when-to-use":"<h2>Рекомендуется применять в течение всего года:</h2>\n      <ul>\n        <li>Симптомы простуды</li>\n        <li>Симптомы аллергии</li>\n        <li>Сухой воздух, кондиционер</li>\n        <li>Ежедневная гигиена</li>\n      </ul>","doses-nose-1":"Насморк, как он есть","doses-nose-2":"Кажется, что о насморке мы знаем всё. Когда у нас сопли и\n            заложен нос, мы не задумываясь используем\n            сосудосуживающие средства, но не задаем себе вопрос: приводит ли\n            их частое использование к привыканию? Каждый человек делает свой выбор,\n            основываясь на тех знаниях которыми владеет. И чем шире его кругозор –\n            тем больше вероятность уберечь себя и своих близких от ошибок.\n            В отношении здоровья, часто ответы нам подсказывает сама природа и\n            Апи-технологии тому пример: Апиколд\n            пропо и Апиколд минт - изотонические спреи на основе экстракта\n            прополиса и масла ментола, эвкалипта для эффективного промывания носа.","doses-nose-3":"правильные пчёлы<br />заботятся о великих людях","doses-nose-4":"<p>Апи-Пчёл</p>","usage-nose-1":"Способ применения<br />\n        <p>Апиколд пропо и Апиколд минт</p>","usage-nose-2":"<p>Теперь я знаю, что делать, когда начинают течь сопли</p>\n          <p>Легко принимать</p>\n          <p>Только 2-3 раза на день</p>\n          <p>Детям от 4-х лет и взрослым</p>\n          <p>1 распыление в каждую ноздрю несколько раз в день</p>","criminal-list-nose-1":"Важно знать!\n        <p>Шмыгонос чаще всего приходит не один, а вместе с друзьями:</p>","criminal-nose-1":"Кашлюковский","criminal-nose-1-1":"Давний друг «Бронхита», также известный по прозвищу «Мокрый» или\n              «Сухой». Любит сквозняки. Характер мерзкий, не женат.","criminal-nose-2":"Горлодер","criminal-nose-2-2":"Появляется в самый не нужен момент. Молчаливый, вредный и\n               раздражает окружающих. Любит холодные напитки и мороженое. Характер\n              скрытый, не женат.","criminal-btn-nose":"как избавиться","header-oral-1":"Апиколд спрей оральный\n        <p>Природная сила прополиса при боли в горле!</p>","header-oral-2":"<p>Горлодёрам тут<br />не место!!!</p>\n          <p>Гр...<br />Гр-др...<br />Гррр...</p>","header-oral-3":"<p>Прогони Горлодёра</p>","header-oral-4":"Апиколд спрей оральный\n        <p>Природная сила прополиса при боли в горле!!</p>","header-oral-5":"<p>Апи-технологии</p>\n        <p>Натуральный состав</p>\n        <p>Европейское качествоь</p>","header-oral-6":"<li>Созданный на основе экстракта прополиса</li>\n        <li>Уменьшает раздражение и успокаивает воспалённое горло</li>\n        <li>Уменьшает раздражение и успокаивает воспалённое горло<sup>1</sup></li>\n        <li>Защищает от повторного заражения</li>\n        <li>\n               Действует на вирусы, бактерии, грибы благодаря прополису<sup>1</sup>\n        </li>","header-oral-7":"<b>Апиколд</b> спрей оральный\n          <p>при боли в горле</p>","header-oral-8":"Благодаря прополису имеет такие действия<sup>1</sup>:","header-oral-9":"<li>обезболивающее</li>\n          <li>антибактериальное</li>\n          <li>противовирусное</li>\n          <li>противовирусное</li>\n          <li>противовоспалительное</li>\n          <li>противовоспалительное</li>","header-oral-10":"Благодаря прополисно-глицериновой пленки защищает от повторного\n          заражения","header-oral-11":"Боль в горле, как она есть","header-oral-12":"Боль в горле - один из самых распространенных симптомов простуды, причиной\n            которого могут быть как вирусы, так и бактерии или грибы. В подавляющем\n            большинстве препараты для устранения этого симптома синтетические. В\n            связи с этим стоит вспомнить о природном уникальном средстве, которое\n            эффективно при боли в горле - это прополис. Прополис настолько\n            ценен, что его стоимость всегда была в 1,5-2 раза выше, чем у других\n            продуктов пчеловодства. Он оказывает противовоспалительное,\n            противомикробное, противовирусное, иммуномодулирующее и анестезирующее действия. Кроме того, прополис\n            богат витаминами, аминокислотами и полезными микроэлементами. Через эти\n            ценные свойства прополис был включен в состав спрея\n            орального Апиколд. Кроме прополиса Апиколд спрей оральный содержит еще глицерин\n            и масло мяты перечной. Апиколд спрей оральный - природная сила\n            прополиса при боли в горле!","header-oral-13":"Правильные пчёлы <br/> заботятся о великих людях","header-oral-14":"Апи-Пчёл","header-oral-15":"Очень хороший мальчик. Вежливый, добрый, не любит болеть.\n            Слушается маму и каждое утро делает зарядку. Заботиться о других.\n            Характер мягкий.","header-oral-16":"Способ применения<p>Апиколд спрей оральный</p>","header-oral-17":"<p>\n            Теперь я знаю, что делать, когда болит горло, мне поможет природная\n            сила прополиса в удобном флаконе\n          </p>\n          <p>Легко принимать</p>\n          <p>Всего лишь 2 – 3 раза в день</p>\n          <p>Прямое действие на проблему</p>\n          <p>Распылять на воспалённый участок горла</p>","header-oral-18":"Важно знать!\n        <p>Горлодёр чаще всего приходит не один, а вместе с друзьями:</p>","header-oral-19":"Кашлюковский","header-oral-20":"Давний друг «Бронхита», также известный по прозвищу «Мокрый» или\n              «Сухой». Любит сквозняки. Характер мерзкий, не женат.","header-oral-21":"как избавиться","header-oral-22":"Шмыгонос","header-oral-23":"В детстве был хорошим мальчиком. Однако попал под влияние\n              плохой компании. Начал гулять зимой без шапки, сидеть под\n              кондиционерами и думает, что насморк сам пройдёт. Характер отсутствует,\n              не женат.","header-oral-24":"как избавиться","header-tim-1":"Апиколд тимьян*\n        <p>Апимёд при кашле!</p>","header-tim-2":"<p>Пан Кашлюковский,<br />Вам уже пора идти!</p>\n          <p>Кхе...<br />Кхе-е-е...<br />Кхе..</p>","header-tim-3":"<p>Прогони Кашлюковского</p>","header-tim-4":"Апиколд тимьян*\n        <p>Апимёд при кашле!</p>","header-tim-5":"<p>Апи-технологии</p>\n        <p>Натуральный состав</p>\n        <p>Европейское качество</p>","header-tim-6":"<li>Созданный на основе меда (48%), прополиса и тимьяна</li>\n        <li>Способствует смягчению кашля, уменьшению раздражения</li>\n        <li>Облегчает отхождение мокроты</li>\n        <li>Имеет тройное антибактериальное действие<sup>1, 2, 3</sup></li>","header-tim-7":"Апиколд тимьян<sup>*</sup>\n          <p>Сироп от кашля</p>","header-tim-8":"<b>«Живая» сила мёда (48%), подкреплённая прополисом и тимьяном<sup>1, 2, 3</sup></b> с широким спектром действия.","header-tim-9":"Прополис и мёд имеют такие действия<sup>1, 2</sup>: антибактериальное, противовирусное, противогрибковое, противовоспалительное, иммуномодулирующее, противоаллергическое","header-tim-10":"<b>Тимьян имеет такие действия<sup>3</sup>:</b> антибактериальное, противовоспалительное, отхаркивающее, муколитическое, спазмолитическое","header-tim-11":"Кашель, как он есть\n","header-tim-12":"Кашель – захисний механізм для очищення дихальних шляхів. Він може бути як симптомом легкої застуди, так і бронхіту, трахеїту, ларинготрахеїту, кашлюку та ін. захворювань. Для лікування кашлю з давніх давен застосовували тим’ян, мед та прополіс. Мед має антибактеріальну, протизапальну, протиалергічну дії4. Прополіс чинить противірусну, антибактеріальну, протизапальну, імуномоделюючу дії3. Екстракт тим’яну володіє муколітичною, відхаркувальною, протизапальною, спазмолітичною8 та антибактеріальною5  діями. Завдяки Апі-технологіям від Хорватського виробника був створений сироп від кашлю нового покоління Апіколд тим’ян*. Він містить 48 % (!) натурального стандартизованого меду, «жива сила» якого підкріплена прополісом і тим’яном. А це потрійна (!) антибактеріальна<sup>1, 2, 3</sup> дія при кашлі. Апіколд тим’ян* – Апімед при кашлі!","header-tim-13":"Правильные пчёлы<br />заботятся о больших людях\n","header-tim-14":"Апи-Пчёл\n","header-tim-15":"Способ применения<br />\n        <p>Апиколд тимьян*</p>","header-tim-16":"<p>Теперь я знаю, что делать, когда кашель доводит до слёз</p>\n          <p>\n            Детям от 4 до 12 лет: по 5 мл сиропу 3 раза на день после еды          </p>\n          <p>\n            Детям от 12 лет и взрослым: по 5 мл 3-5 раз на день после еды          </p>",
"header-tim-17":"Важно знать!\n        <p>\n          Кашлюковский чаще всего приходит не один, а вместе с друзьями:\n        </p>","header-tim-18":"Горлодёр","header-tim-19":"Появляется в самый не нужен момент. Молчаливый, вредный и раздражает окружающих. Любит холодные напитки и мороженое. Характер скрытый, не женат.","header-tim-20":"Как избавиться","header-tim-21":"Шмыгонос","header-tim-22":"В детстве был хорошим мальчиком. Однако попал под влияние плохой компании. Начал гулять зимой без шапки, сидеть под кондиционерами и думает, что насморк сам пройдёт. Характер отсутствует, не женат.","header-tim-23":"Как избавиться"}}}}();