"use strict";
let shch = {};
shch.topSlider = function () {
    this.number = 0;
    this.current = document.querySelector('.current');
    this.changeMP = document.querySelectorAll('.mainProposition');
    this.changeTitle = document.querySelectorAll('.headMain');
    this.changeAction = document.querySelectorAll('.actionMain');
    this.changeBack = document.querySelectorAll('.headBack');
    this.changeSI = document.querySelectorAll('.SliderItem');
    this.SliderBack = document.querySelectorAll('.SliderBack');
    this.slide0 = -1;
    this.slide1 = 0;
    this.less = function () {
        this.changeMP[this.number].classList.remove('mpAct');
        this.changeTitle[this.number].classList.remove('actTitle');
        this.changeAction[this.number].classList.remove('actM');
        this.changeBack[this.number].classList.remove('actBack');
        if (-1 < this.slide0 && this.slide0 < 5) {
            this.changeSI[this.slide0].classList.remove('SI' + this.slide0 + 'act', 'prevSlide');
            this.SliderBack[this.slide0].classList.remove('SB' + this.slide0 + 'actSB', 'prevSlideSB');
        }
        if (-1 < this.slide1 && this.slide1 < 5) {
            this.changeSI[this.slide1].classList.remove('SI' + this.slide1 + 'act', 'currentSlide');
            this.SliderBack[this.slide1].classList.remove('SB' + this.slide1 + 'actSB', 'currentSlideSB');
        }
        this.number--;
        this.slide0--;
        this.slide1--;
        if (this.number < 0) this.number = 0;
        if (this.slide0 < -1) this.slide0 = -1;
        if (this.slide1 < 0) this.slide1 = 0;
        this.changeMP[this.number].classList.add('mpAct');
        this.changeTitle[this.number].classList.add('actTitle');
        this.changeAction[this.number].classList.add('actM');
        this.changeBack[this.number].classList.add('actBack');
        if (-1 < this.slide0 && this.slide0 < 5) {
            this.changeSI[this.slide0].classList.add('SI' + this.slide0 + 'act', 'prevSlide');
            this.SliderBack[this.slide0].classList.add('SB' + this.slide0 + 'actSB', 'prevSlideSB');
        }
        if (-1 < this.slide1 && this.slide1 < 5) {
            this.changeSI[this.slide1].classList.add('SI' + this.slide1 + 'act', 'currentSlide');
            this.SliderBack[this.slide1].classList.add('SB' + this.slide1 + 'actSB', 'currentSlideSB');
        }
        this.current.textContent = this.number + 1;
    };
    this.more = function () {
        this.changeMP[this.number].classList.remove('mpAct');
        this.changeTitle[this.number].classList.remove('actTitle');
        this.changeAction[this.number].classList.remove('actM');
        this.changeBack[this.number].classList.remove('actBack');
        if (-1 < this.slide0 && this.slide0 < 5) {
            this.changeSI[this.slide0].classList.remove('SI' + this.slide0 + 'act', 'prevSlide');
            this.SliderBack[this.slide0].classList.remove('SB' + this.slide0 + 'actSB', 'prevSlideSB');
        }
        if (-1 < this.slide1 && this.slide1 < 5) {
            this.changeSI[this.slide1].classList.remove('SI' + this.slide1 + 'act', 'currentSlide');
            this.SliderBack[this.slide1].classList.remove('SB' + this.slide1 + 'actSB', 'currentSlideSB');
        }
        this.number++;
        this.slide0++;
        this.slide1++;
        if (this.number > 3) this.number = 4;
        if (this.slide0 > 3) this.slide0 = 3;
        if (this.slide1 > 4) this.slide1 = 4;
        this.changeMP[this.number].classList.add('mpAct');
        this.changeTitle[this.number].classList.add('actTitle');
        this.changeAction[this.number].classList.add('actM');
        this.changeBack[this.number].classList.add('actBack');
        if (-1 < this.slide0 && this.slide0 < 5) {
            this.changeSI[this.slide0].classList.add('SI' + this.slide0 + 'act', 'prevSlide');
            this.SliderBack[this.slide0].classList.add('SB' + this.slide0 + 'actSB', 'prevSlideSB');
        }
        if (-1 < this.slide1 && this.slide1 < 5) {
            this.changeSI[this.slide1].classList.add('SI' + this.slide1 + 'act', 'currentSlide');
            this.SliderBack[this.slide1].classList.add('SB' + this.slide1 + 'actSB', 'currentSlideSB');
        }
        this.current.textContent = this.number + 1;
    };
};

shch.LoadFunc = function () {
    shch.goTo = new shch.topSlider();
    document.querySelector('.arrowRight').addEventListener('click', shch.goTo.more.bind(shch.goTo), {passive: true});
    document.querySelector('.arrowLeft').addEventListener('click', shch.goTo.less.bind(shch.goTo), {passive: true});
};

window.addEventListener('load', shch.LoadFunc);