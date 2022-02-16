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
    this.slide0 = 0;
    this.slide1 = 1;
    this.less = function () {
        this.changeMP[this.number].classList.remove('mpAct');
        this.changeTitle[this.number].classList.remove('actTitle');
        this.changeAction[this.number].classList.remove('actM');
        this.changeBack[this.number].classList.remove('actBack');
        this.changeSI[this.slide0].classList.remove('SI' + this.slide0 + 'act');
        this.changeSI[this.slide1].classList.remove('SI' + this.slide1 + 'act');
        this.number--;
        this.slide0--;
        this.slide1--;
        if (this.number < 0) {
            this.number = 0;
            this.slide0 = 0;
            this.slide1 = 1;
        }
        this.changeMP[this.number].classList.add('mpAct');
        this.changeTitle[this.number].classList.add('actTitle');
        this.changeAction[this.number].classList.add('actM');
        this.changeBack[this.number].classList.add('actBack');
        this.changeSI[this.slide0].classList.add('SI' + this.slide0 + 'act');
        this.changeSI[this.slide1].classList.add('SI' + this.slide1 + 'act');
        this.current.textContent = this.number + 1;
    };
    this.more = function () {
        this.changeMP[this.number].classList.remove('mpAct');
        this.changeTitle[this.number].classList.remove('actTitle');
        this.changeAction[this.number].classList.remove('actM');
        this.changeBack[this.number].classList.remove('actBack');
        this.changeSI[this.slide0].classList.remove('SI' + this.slide0  + 'act');
        this.changeSI[this.slide1].classList.remove('SI' + this.slide1 + 'act');
        this.number++;
        this.slide0++;
        this.slide1++;
        if (this.number > 4) {
            this.number = 4;
            this.slide0 = 3;
            this.slide1 = 4;
        }
        this.changeMP[this.number].classList.add('mpAct');
        this.changeTitle[this.number].classList.add('actTitle');
        this.changeAction[this.number].classList.add('actM');
        this.changeBack[this.number].classList.add('actBack');
        this.changeSI[this.slide0].classList.add('SI' + this.number + 'act');
        this.changeSI[this.slide1].classList.add('SI' + (this.number + 1) + 'act');
        this.current.textContent = this.number + 1;
    };
};

shch.LoadFunc = function () {
    shch.goTo = new shch.topSlider();
    document.querySelector('.arrowRight').addEventListener('click', shch.goTo.more.bind(shch.goTo), {passive: true});
    document.querySelector('.arrowLeft').addEventListener('click', shch.goTo.less.bind(shch.goTo), {passive: true});
};

window.addEventListener('load', shch.LoadFunc);