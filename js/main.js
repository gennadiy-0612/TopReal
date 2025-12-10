/* ... (існуючий код до SecSlider) ... */

// SecSlider: Slider on secondDisplay
const weMade = document.querySelectorAll('.weMade');
const photo = document.querySelectorAll('.photo');
let activeSlide = 0;

function SecSlider(index) {
    if (activeSlide === index) {
        return; // Якщо слайд не змінюється, виходимо
    }

    // 1. Ініціюємо приховування поточного активного слайда
    // Додаємо клас, який анімує приховування (Opacity: 1 -> 0, Scale: 1 -> 0.9)
    photo[activeSlide].classList.add('photoNoAct');

    // 2. Зберігаємо індекс нового слайда
    activeSlide = index;

    // 3. Запускаємо setTimeout, щоб чекати завершення анімації приховування (1200ms)
    setTimeout(() => {
        // Очищаємо класи з усіх слайдів:
        // Це знімає .photoAct з попереднього слайда та .photoNoAct, який щойно завершив анімацію.
        photo.forEach(p => {
            p.classList.remove('photoAct', 'photoNoAct');
        });

        // Активуємо новий слайд:
        // Клас .photoAct ініціює анімацію появи (Opacity: 0 -> 1, Scale: 1.1 -> 1)
        photo[activeSlide].classList.add('photoAct');

        // Оновлюємо стилі підменю
        weMade.forEach((item, i) => {
            item.classList.remove('VividBrownTrapezoid');
        });
        weMade[activeSlide].classList.add('VividBrownTrapezoid');

    }, 1200); // 1200ms відповідає тривалості transition у CSS (1.2s)
}

weMade.forEach((item, index) => {
    item.addEventListener('click', () => SecSlider(index));
});

/* ... (решта вашого коду main.js) ... */
