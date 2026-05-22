// Содержимое файла script.js

function formatDate() {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    
    let today = date.toLocaleDateString('ru-RU', options);
    today = today.replace(' г.', '');
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.innerText = today;
    }
}

// --- ДАННЫЕ ДЛЯ НОВОСТЕЙ ---
const newsData = {
    'vistavka': {
        title: 'Открытие выставки «ОТ ВЕСНЫ ДО ВЕСНЫ»',
        text: 'Персональная выставка «От весны до весны» уже ждет зрителя в стенах КДДИ РГХПУ им. С.Г. Строганова на Стрелецкой, 2, стр. 1',
        images: ['img/news/vistavka2.png']
    },
    'mk': {
        title: 'Наши мастер-классы',
        text: `Преподаватель Дроздова Татьяна Ивановна провела в школе ЮАО г. Москвы мастер класс "Иероглифическая письменность Палащельской росписи". Детям очень понравилось!
               <br><br>
               Обучающиеся 3 класса общеобразовательной школы «Марьина Роща» посетили увлекательный мастер-класс по созданию ярких весенних образов. Под руководством Трубиной Луизы Андреевны ребята с удовольствием расписали собственные гипсовые фигурки, вложив в каждую частичку своего вдохновения и творчества.
               <br><br>
               Преподаватель Прокофьева Елена Сергеевна провела мастер-класс на тему "Жар-птица" в Музейно-выставочном комплексе "Новый Иерусалим", который проходил в рамках выставки "Лаки. Большая история в миниатюре: Федоскино , Палех, Мстёра и Холуй".Встреча прошла в особой творческой атмосфере: участники погрузились в мир традиционного русского декоративно-прикладного искусства и познакомились с особенностями техники Холуйской лаковой миниатюры.
               <br><br>
               Дети остались в восторге от творческой атмосферы и полученных впечатлений.
               <br>
               Благодарим преподавателей за очень интересные и увлекательные мастер-классы!`,
        images: ['img/news/mk.png','img/news/mk2.png','img/news/mk3.jpg']
    },
    'multiplicatori': {
        title: 'Достижения будущих мультипликаторов',
        text: `На киностудии «Союзмультфильм» прошел питчинг лучших работ наших студентов специальности "Анимация и анимационное кино"!
               <br><br>
               В итоге на питчинг (т.е. презентацию будущих мультфильмов, находящихся в стадии разработки), отправились 8 студентов АНМ-24 и 3 студента АНМ-22. Результат превзошел все наши ожидания!
               <br><br>
                Состав жюри - уважаемые и очень много чего повидавшие сотрудники Союзмультфильма: ведущий креативный продюсер студии Евгения Жиркова, редактор авторского кино Мария Костюкевич, заместитель арт-директора Ксения Фетисова, и конечно наша замечательная хранительница анимации, заместитель директора производства и наш преподаватель Ольга Юрьевна Благова.
               <br><br>
               Спасибо Наталье Владимировне Абрамовой за отличную подготовку студентов! Отдельное спасибо Ольге Юрьевне Благовой за взаимодействие и всяческую поддержку!`,
        images: ['img/news/multiplicatori.png','img/news/mult2.jpg','img/news/mult3.jpg']
    },
    'iconi': {
        title: 'Иконы студентов переданы в храмы',
        text: `Образы деисусного чина и 2 иконы местного ряда с образами Пресвятой Богородицы и Иисуса Христа, которые написаны дипломницами колледжа, группа ИкЖ-21,специальность "Иконопись", для храма Ильи Пророка д. Терехово Валдайского района уже в иконостасе!
               <br><br>
               А в храме Саввы Сторожевского, который в Измайлово, в алтаре образ Господа, написанный бывшей студенткой Варварой Германовной, а ныне прекрасным педагогом направления "Иконопись".
               <br><br>
               Дело живёт... А значит, и мы живы... Слава Богу!`,
        images: ['img/news/ic2.jpg','img/news/ic3.jpg','img/news/iconi.png']
    },
    'maslenica': {
        title: 'Масленица в колледже',
        text: `По традиции в колледже прошла Масленица - Разгуляй!
               Испокон веков Четверг начинал Широкую Масленицу, когда работы прекращались и начинались гулянья. Вот и мы сделали небольшой перерыв и славно погуляли! Сытно, щедро, весело и дружно!
               <br><br>
               Обучающиеся и родители благодарны возможности общения и получения положительных эмоций! Огромное спасибо всем организаторам и участникам! Мы за сохранение традиций!`,
        images: ['img/news/maslenica.png','img/news/mas2.jpg','img/news/mas3.jpg']
    },
    'moushn': {
        title: 'Открытие выставки «Моушн-дизайн»',
        text: `Выставка в Калине!
               <br>
               На первом этаже открылась выставка графики студентов специальности "Моушн-дизайн", группа Мд-25.
               <br><br>
               Поздравляем наших первокурсников с прекрасными работами!`,
        images: ['img/news/mo2.jpg','img/news/moushn.png','img/news/mo3.jpg']
    },
    'nov7': {
        title: 'День открытых дверей!',
        text: `Уважаемые коллеги!
               <br>
               Приглашаем Вас на онлайн-дни открытых дверей направления «Дизайн» Колледжа дизайна и декоративного искусства РГХПУ им. С.Г. Строганова.
               <br><br>
               Руководители образовательных программ представят свои программы и ответят на Ваши вопросы по особенностям обучения, вступительным испытаниям, критериям оценки и порядку проведения вступительных испытаний в 2026 году.
               <br><br>
               17.04.2026 (пятница) 10:00
               <br>Предметный дизайн (Литвина Татьяна Владимировна)
               <br>Вэб-дизайн (Миронова Юлия Борисовна)
               <br>Дизайн интерьера (Алевская Дарья Юрьевна)
               <br><br>
               21.04.2026 (вторник) 12:00
               <br>Ландшафтный дизайн (Московенко Надежда Сергеевна)
               <br>Дизайн среды (Берсенева Алиса Артемовна)
               <br><br>
               22.04.2026 (среда) 11:00
               <br>Арт-дизайн (Выщипанова Любовь Геннадьевна)
               <br>Графический дизайн (Метелик Татьяна Сергеевна)
               <br>Моушн дизайн (Микрюкова Софья Максимовна)`,
        images: []
    },
    'nov8': {
        title: 'Выставка работ студентов',
        text: `Выставки в колледже!
               <br><br>
               На первом этаже колледжа открылась отчетная выставка работ студентов образовательной программы "Лаковая миниатюрная живопись", всех групп и курсов.
               <br><br>
               А на третьем этаже колледжа открылась выставка работ студентов группы АНМ-22, образовательной программы "Анимация и анимационное кино" - "Роботы", выполненных в технике 3D анимации. Для просмотра видео ролика необходимо сосканировать QR код с иллюстрации, которая послужила референсом для для его создания.
               <br><br>
               Благодарим преподавателей за прекрасные работы и профессиональную подготовку студентов!
`,
        images: ['img/news/nov81.jpg','img/news/nov82.jpg','img/news/nov83.jpg']
    },
    'nov9': {
        title: 'Культурная жизнь студентов',
        text: `Студенты колледжа помимо учебы активно участвуют в культурной жизни столицы!
               <br><br>
               Студенты специальности "Техника и искусство фотографии", группа ФХ-25, под руководством Денисовой Е.В., посетила выставку "Владимир Гиляровский" в музее русского импрессионизма. В музее интересно собраны отрывки из его произведений и картины разных художников.
               <br><br>
               Студенты групп МД-23, ХК-25, АНМ-25а, в сопровождении Никоноровой Е.В., посетили оперетту и посмотрели «Собаку на сене» по мотивам комедии Лопе де Вега. Постановка оставила самые положительные эмоции!
               <br><br>
               Благодарим преподавателей за организацию для студентов интересных экскурсий!`,
        images: ['img/news/nov91.jpg','img/news/nov92.jpg','img/news/nov93.jpg']
    },
    'nov10': {
        title: 'Художественная акция "Рождественский Покровский Собор"',
        text: `Студенты специальностей "Художественная эмаль" (групп ЭМ-25), "Художественное стекло" (групппа ХС-25) и "Станковая живопись" (группы СТЖ-23, СТЖ-24, СТЖ-25) вместе с преподавателями Прокофьевой Е.С. и Малиной Е.В., посетили Храм Василия Блаженного и приняли участие в художественной акции "Рождественский Покровский Собор".
               <br><br>
               Зимой 2025-2026 года Покровский собор (Храм Василия Блаженного) в очередной раз открыл свои двери для всех любителей живописи. Этот выдающийся памятник архитектуры, выстроенный в самом центре Москвы в середине XVI века, неизменно привлекает внимание художников.
               <br><br>
               Студентам удалось прикоснуться к истории и культуре памятника древнерусской архитектуры 16 века и насладиться возможностью порисовать интерьеры собора.
               <br><br>
               Ждём от студентов хороших этюдов на выставке, посвященной проекту!`,
        images: ['img/news/nov101.jpg','img/news/nov102.jpg','img/news/nov103.jpg']
    }
};

function openNews(key) {
    const data = newsData[key];
    if (!data) return;

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalText').innerHTML = data.text;

    const photoContainer = document.getElementById('modalPhotos');
    photoContainer.innerHTML = ''; 
    data.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        photoContainer.appendChild(img);
    });

    const arrows = document.querySelectorAll('.nav-arrow');
    if (data.images.length <= 1) {
        arrows.forEach(arrow => arrow.style.display = 'none');
    } else {
        arrows.forEach(arrow => arrow.style.display = 'flex');
    }

    document.getElementById('newsModal').showModal();
}

const modal = document.getElementById('newsModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.close();
    });
}

function moveSlide(direction) {
    const container = document.getElementById('modalPhotos');
    if (container) {
        container.scrollBy({
            left: direction * 350, 
            behavior: 'smooth'
        });
    }
}

// === ГЕНЕРАЦИЯ СЕТКИ ДИСЦИПЛИН ===
document.addEventListener("DOMContentLoaded", () => {
    const disciplines = [
        { title: "Станковая живопись", img: "img/educ_program/stan_jivopis.png" },
        { title: "Лаковая миниатюрная живопись", img: "img/educ_program/lakovaya.png" },
        { title: null, type: 'empty' }, 
        { title: "Графический дизайн", img: "img/educ_program/graf.png" },
        { title: "Веб дизайн", img: "img/educ_program/web.png" },
        { title: null, type: 'empty' }, 
        { title: "Художественное ткачество", img: "img/educ_program/tkachestvo.png" },
        { title: "Средовой дизайн", img: "img/educ_program/sredovoi.png" },
        { title: null, type: 'empty' }, 
        { title: "Художественное стекло", img: "img/educ_program/hud_design.png" },
        { title: "Иконопись", img: "img/educ_program/iconopis.png" },
        { title: "Художественный металл", img: "img/educ_program/metal.png" },
        { title: "Арт дизайн", img: "img/educ_program/art.png" },
        { title: null, type: 'empty' }, 
        { title: "Техника и искусство фотографии", img: "img/educ_program/tex_foto_iskustvo.png" },
        { title: null, type: 'empty' }
    ];

    const container = document.getElementById('disciplines-grid');
    if (container) {
        disciplines.forEach(item => {
            const card = document.createElement('div');
            if (item.type === 'empty') {
                card.classList.add('grid-empty');
            } else {
                card.classList.add('grid-item');
                card.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="overlay">
                        <span>${item.title}</span>
                    </div>
                `;
            }
            container.appendChild(card);
        });
    }
});

// === КАСТОМНЫЕ ВЫПАДАЮЩИЕ СПИСКИ (ОДНА ФУНКЦИЯ) ===
document.addEventListener('DOMContentLoaded', () => {
    const customSelects = document.querySelectorAll('.custom-select');
    
    customSelects.forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const options = select.querySelectorAll('.option');
        const hiddenInput = select.querySelector('input[type="hidden"]');
        const defaultText = trigger.textContent;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            customSelects.forEach(s => {
                if (s !== select) s.classList.remove('active');
            });
            select.classList.toggle('active');
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                trigger.textContent = opt.textContent;
                trigger.style.color = '#272727';
                if (hiddenInput) hiddenInput.value = opt.textContent;
                select.classList.remove('active');
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select')) {
            customSelects.forEach(s => s.classList.remove('active'));
        }
    });
});

// === СЛАЙДЕР НОВОСТЕЙ ===
// === СЛАЙДЕР НОВОСТЕЙ ===
let currentIndex = 0;

function updateSlider() {
    const track = document.getElementById('newsTrack');
    if (!track) return;

    const cards = track.querySelectorAll('.news-card');
    if (cards.length === 0) return;

    // Определяем сколько карточек видно на экране
    const screenWidth = window.innerWidth;
    let cardsPerView;
    
    if (screenWidth <= 768) {
        cardsPerView = 1; // На телефонах — 1 карточка
    } else if (screenWidth <= 1024) {
        cardsPerView = 2; // На планшетах — 2 карточки
    } else {
        cardsPerView = 4; // На десктопе — 4 карточки
    }

    const gap = 20;
    const maxIndex = Math.max(0, cards.length - cardsPerView);
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const cardWidth = cards[0].offsetWidth;
    const offset = currentIndex * (cardWidth + gap);
    
    track.style.transform = `translateX(-${offset}px)`;

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === maxIndex;
}

function moveNews(direction) {
    currentIndex += direction;
    updateSlider();
}

document.addEventListener('DOMContentLoaded', updateSlider);
window.addEventListener('resize', updateSlider);

document.addEventListener('DOMContentLoaded', updateSlider);
window.addEventListener('resize', updateSlider);

// === ОБРАБОТКА ФОРМЫ ===
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('courseForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const requiredInputs = form.querySelectorAll('[required]');
        let isValid = true;
        requiredInputs.forEach(input => {
            if (input.type === 'checkbox' && !input.checked) isValid = false;
            if (input.type !== 'checkbox' && !input.value.trim()) isValid = false;
        });

        if (!isValid) {
            alert('Заполните обязательные поля и дайте согласие.');
            return;
        }

        const formData = {
            id: Date.now(),
            date: new Date().toLocaleString('ru-RU'),
            applicant: form.querySelector('[name="applicantName"]').value,
            phone: form.querySelector('[name="phone"]').value,
            email: form.querySelector('[name="email"]').value,
            direction: form.querySelector('[name="direction"]').value || 'Не выбрано',
            format: form.querySelector('[name="format"]').value || 'Не выбрано'
        };

        const apps = JSON.parse(localStorage.getItem('collegeApplications') || '[]');
        apps.push(formData);
        localStorage.setItem('collegeApplications', JSON.stringify(apps));

        const resultBlock = document.getElementById('formResult');
        if (resultBlock) {
            resultBlock.style.display = 'block';
            resultBlock.innerHTML = `
                <div class="success-message">
                    <h3>Ваша заявка отправлена!</h3>
                    <p>ФИО: ${formData.applicant}<br>Тел: ${formData.phone}<br>Email: ${formData.email}</p>
                </div>
            `;
            resultBlock.scrollIntoView({ behavior: 'smooth' });
        }

        form.reset();
        document.querySelectorAll('.custom-select .select-trigger').forEach(t => {
            const select = t.closest('.custom-select');
            const hiddenName = select.querySelector('input[type="hidden"]')?.name;
            if (hiddenName === 'direction') {
                t.textContent = 'Направление подготовки';
            } else if (hiddenName === 'format') {
                t.textContent = 'Форма обучения';
            } else {
                t.textContent = 'Откуда узнали о нас';
            }
            t.style.color = '#A0A0A0';
        });
    });
});


// === БУРГЕР-МЕНЮ ===
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const menu = document.querySelector('.menu');
    
    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Закрывать меню при клике на ссылку
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Закрывать меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-content') && menu.classList.contains('active')) {
                burgerBtn.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// Запускаем
formatDate();