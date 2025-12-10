// Використовуємо класи для кращої організації та ООП
class TopSlider {
    constructor(maxIndex = 4) {
        // Використовуємо 'this' для властивостей
        this.number = 0; // Поточний індекс слайда (0 до maxIndex)
        this.maxIndex = maxIndex;
        
        // Використовуємо const/let замість this для DOM-елементів, які не змінюються
        this.currentEl = document.querySelector('.current');
        this.changeMP = document.querySelectorAll('.mainProposition');
        this.changeTitle = document.querySelectorAll('.headMain');
        this.changeAction = document.querySelectorAll('.actionMain');
        this.changeBack = document.querySelectorAll('.headBack');
        this.changeSI = document.querySelectorAll('.SliderItem');
        this.SliderBack = document.querySelectorAll('.SliderBack');
        
        // slide0 і slide1 використовуються для відображення попереднього/поточного елемента
        this.slide0 = -1; // Попередній елемент
        this.slide1 = 0; // Поточний елемент

        // Прив'язуємо методи до 'this' (екземпляра класу), щоб вони зберігали контекст при використанні як обробники подій
        this.less = this.less.bind(this);
        this.more = this.more.bind(this);
    }

    /**
     * Оновлює DOM, додаючи/видаляючи класи для активації слайда.
     * @param {number} newNumber - Новий індекс слайда.
     * @param {number} newSlide0 - Новий індекс 'slide0'.
     * @param {number} newSlide1 - Новий індекс 'slide1'.
     */
    _updateDOM(newNumber, newSlide0, newSlide1) {
        // 1. Видалення активних класів з поточного слайда
        this.changeMP[this.number]?.classList.remove('mpAct');
        this.changeTitle[this.number]?.classList.remove('actTitle');
        this.changeAction[this.number]?.classList.remove('actM');
        this.changeBack[this.number]?.classList.remove('actBack');

        // Видалення класів для slide0 (попередній)
        if (this.slide0 >= 0 && this.slide0 <= this.maxIndex) {
            this.changeSI[this.slide0]?.classList.remove(`SI${this.slide0}act`, 'prevSlide');
            this.SliderBack[this.slide0]?.classList.remove(`SB${this.slide0}actSB`, 'prevSlideSB');
        }
        // Видалення класів для slide1 (поточний)
        if (this.slide1 >= 0 && this.slide1 <= this.maxIndex) {
            this.changeSI[this.slide1]?.classList.remove(`SI${this.slide1}act`, 'currentSlide');
            this.SliderBack[this.slide1]?.classList.remove(`SB${this.slide1}actSB`, 'currentSlideSB');
        }
        
        // 2. Оновлення індексів
        this.number = newNumber;
        this.slide0 = newSlide0;
        this.slide1 = newSlide1;
        
        // 3. Додавання активних класів до нового слайда
        this.changeMP[this.number]?.classList.add('mpAct');
        this.changeTitle[this.number]?.classList.add('actTitle');
        this.changeAction[this.number]?.classList.add('actM');
        this.changeBack[this.number]?.classList.add('actBack');

        // Додавання класів для slide0 (попередній)
        if (this.slide0 >= 0 && this.slide0 <= this.maxIndex) {
            this.changeSI[this.slide0]?.classList.add(`SI${this.slide0}act`, 'prevSlide');
            this.SliderBack[this.slide0]?.classList.add(`SB${this.slide0}actSB`, 'prevSlideSB');
        }
        // Додавання класів для slide1 (поточний)
        if (this.slide1 >= 0 && this.slide1 <= this.maxIndex) {
            this.changeSI[this.slide1]?.classList.add(`SI${this.slide1}act`, 'currentSlide');
            this.SliderBack[this.slide1]?.classList.add(`SB${this.slide1}actSB`, 'currentSlideSB');
        }

        // 4. Оновлення лічильника
        if (this.currentEl) {
            this.currentEl.textContent = this.number + 1;
        }
    }

    less() {
        if (this.number === 0) return; // Запобігання виходу за межі на початку
        
        const newNumber = this.number - 1;
        // Запобігаємо виходу за межі: min(-1) для slide0, min(0) для slide1
        const newSlide0 = Math.max(-1, this.slide0 - 1);
        const newSlide1 = Math.max(0, this.slide1 - 1);
        
        this._updateDOM(newNumber, newSlide0, newSlide1);
    }

    more() {
        if (this.number === this.maxIndex) return; // Запобігання виходу за межі в кінці
        
        const newNumber = this.number + 1;
        // Запобігаємо виходу за межі: max(maxIndex-1) для slide0, max(maxIndex) для slide1
        const newSlide0 = Math.min(this.maxIndex - 1, this.slide0 + 1);
        const newSlide1 = Math.min(this.maxIndex, this.slide1 + 1);
        
        this._updateDOM(newNumber, newSlide0, newSlide1);
    }
}


class SecondarySlider {
    constructor(selector) {
        this.changer = document.querySelectorAll(selector);
        this.slideSec = document.querySelectorAll('.photo');
        this.slideSecB = document.querySelectorAll('.photoBack');

        // Зберігаємо посилання на поточні активні елементи
        this.changerMemo = this.changer[0];
        this.slideSecMemo = this.slideSec[0];
        this.slideSecMemoB = this.slideSecB[0];
        
        // Зберігаємо посилання на попередні активні елементи
        this.slideSecMemo1 = this.slideSec[1];
        this.slideSecMemo1B = this.slideSecB[1];
        
        // Зберігаємо індекси для динамічних класів
        this.memo0 = 0; // Поточний активний індекс
        this.memo1 = 1; // Попередній активний індекс
        
        // Встановлюємо початковий стан (перший елемент активний)
        if (this.changerMemo) this.changerMemo.classList.add('VividBrownTrapezoid');
        if (this.slideSecMemo) this.slideSecMemo.classList.add('photoAct', 'PA0');
        if (this.slideSecMemo1) this.slideSecMemo1.classList.add('photoNoAct', 'PNA1');
        if (this.slideSecMemoB) this.slideSecMemoB.classList.add('photoActB');
        if (this.slideSecMemo1B) this.slideSecMemo1B.classList.add('photoNoActB');
    }

    // Використовуємо стрілкову функцію, щоб автоматично прив'язати 'this' до екземпляра класу
    changeIt = (n) => {
        // Перевірка: якщо клікнули на той самий елемент, нічого не робити
        if (this.slideSecMemo === this.slideSec[n]) return;

        // 1. Оновлення елемента керування (трапеція)
        this.changerMemo.classList.remove('VividBrownTrapezoid');
        this.changer[n].classList.add('VividBrownTrapezoid');
        this.changerMemo = this.changer[n];

        // 2. Оновлення фото (основний слайд)
        this.slideSecMemo.classList.remove('photoAct', `PA${this.memo0}`);
        this.slideSecMemo.classList.add('photoNoAct', `PNA${this.memo0}`);
        
        // Попередній стає новим "попереднім"
        this.slideSecMemo1 = this.slideSecMemo;
        this.memo1 = this.memo0;
        
        // Новий стає "поточним"
        this.memo0 = n;
        this.slideSec[n].classList.remove('photoNoAct', `PNA${this.memo0}`);
        this.slideSec[n].classList.add('photoAct', `PA${this.memo0}`);
        this.slideSecMemo = this.slideSec[n];

        // 3. Оновлення фону фото
        this.slideSecMemoB.classList.remove('photoActB');
        this.slideSecMemoB.classList.add('photoNoActB');
        
        this.slideSecMemo1B = this.slideSecMemoB; // Попередній стає новим "попереднім"
        this.slideSecB[n].classList.remove('photoNoActB');
        this.slideSecB[n].classList.add('photoActB');
        this.slideSecMemoB = this.slideSecB[n];
    }
    
    // Додає обробники подій до елементів, що викликають зміну слайда
    addListeners(selector) {
        const links = document.querySelectorAll(selector);
        links.forEach((link, index) => {
            // Використовуємо bind(this) або стрілкову функцію для збереження контексту
            link.addEventListener('click', () => this.changeIt(index), { passive: true });
        });
    }
}


class IntersectionWatcher {
    /**
     * @param {Object} config
     * @param {string} config.selector - CSS-селектор елементів для спостереження.
     * @param {string} config.animationName - Клас анімації, який потрібно додати.
     * @param {number} config.threshold - Частка видимості елемента (0.0 до 1.0) для спрацювання.
     */
    constructor({ selector, animationName, threshold }) {
        this.selector = selector;
        this.animationName = animationName;
        this.threshold = threshold;
        this.options = {
            rootMargin: '50vh 0', // Спрацювання, коли елемент в межах 50% екрана
            threshold: [threshold]
        };
        // Прив'язка для забезпечення правильного контексту
        this.vdHandler = this.vdHandler.bind(this);
    }

    // Обробник, який викликається IntersectionObserver
    vdHandler(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > this.threshold) {
                entry.target.classList.add(this.animationName);
                // Опціонально: припинити спостереження після спрацювання
                // observer.unobserve(entry.target);
            }
        });
    }

    // Ініціалізація IntersectionObserver
    observe() {
        const vd = new IntersectionObserver(this.vdHandler, this.options);
        const elements = document.querySelectorAll(this.selector);
        
        elements.forEach((el) => {
            vd.observe(el);
        });
    }
}


// Ініціалізація після завантаження всього контенту сторінки
window.addEventListener('load', () => {
    // Створюємо екземпляри класів
    const topSlider = new TopSlider();
// ... (існуючий код, частина до функції SecSlider) ...

// SecSlider: Slider on secondDisplay
const weMade = document.querySelectorAll('.weMade');
const photo = document.querySelectorAll('.photo');
let activeSlide = 0;

function SecSlider(index) {
    if (activeSlide === index) {
        return; // Якщо слайд не змінюється, виходимо
    }

    // 1. Приховуємо поточний активний слайд
    // Додаємо клас, який ініціює анімацію приховування
    photo[activeSlide].classList.add('photoNoAct');

    // 2. Встановлюємо новий активний слайд
    activeSlide = index;

    // 3. Знімаємо клас photoAct з попереднього слайда та додаємо новому
    // Використовуємо setTimeout, щоб клас photoNoAct мав час для повної анімації (1.2с = 1200мс)
    setTimeout(() => {
        // Видаляємо клас .photoNoAct та .photoAct з попереднього слайда
        photo.forEach(p => {
            p.classList.remove('photoAct', 'photoNoAct');
        });

        // Додаємо клас .photoAct новому слайду
        photo[activeSlide].classList.add('photoAct');

        // Оновлюємо стилі підменю
        weMade.forEach((item, i) => {
            item.classList.remove('VividBrownTrapezoid');
        });
        weMade[activeSlide].classList.add('VividBrownTrapezoid');

    }, 1200); // Час має відповідати тривалості CSS transition (1.2s)
}

weMade.forEach((item, index) => {
    item.addEventListener('click', () => SecSlider(index));
});

// ... (решта файлу JS) ...
    const secSlider = new SecondarySlider('.weMade'); // .weMade - елементи для перемикання

    // Прив'язуємо методи до подій
    document.querySelector('.arrowRight')?.addEventListener('click', topSlider.more, { passive: true });
    document.querySelector('.arrowLeft')?.addEventListener('click', topSlider.less, { passive: true });
    
    // Додаємо обробники для вторинного слайдера
    secSlider.addListeners('.weMade');

    // Ініціалізуємо спостерігач видимості
    new IntersectionWatcher({ 
        selector: '.SlideBack', 
        animationName: 'SlideBackAnim', 
        threshold: 0.5 
    }).observe();
});
