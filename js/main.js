"use strict";
let shch = {};
shch.topSlider = function () {
    this.number = 1;
    this.prev = 1;
    this.current = document.querySelector('.current')
    this.changeTag = document.querySelector('.headBack');
    this.changeBack = document.querySelectorAll('.headBack');
    this.setA = document.querySelectorAll('.arrowRight');
    this.beforeAct = '';
    this.act = '';
    this.less = function () {
        this.changeBack[this.number - 1].classList.remove('actBack');
        this.prev = this.number;
        this.number--;
        if (this.number < 1) this.number = 1;
        this.changeBack[this.number - 1].classList.add('actBack');
        this.changeTag.classList.remove('headBack' + this.prev);
        this.changeTag.classList.add('headBack' + this.number);
        this.current.textContent = this.number;
    };
    this.more = function () {
        this.changeBack[this.number + 1].classList.remove('actBack');
        this.prev = this.number;
        this.number++;
        if (this.number > 5) this.number = 5;
        this.changeBack[this.number + 1].classList.add('actBack');
        this.changeTag.classList.remove('headBack' + this.prev);
        this.changeTag.classList.add('headBack' + this.number);
        this.current.textContent = this.number;
    };
};

shch.LoadFunc = function () {
    shch.goTo = new shch.topSlider();
    document.querySelector('.arrowRight').addEventListener('click', shch.goTo.more.bind(shch.goTo), {passive: true});
    document.querySelector('.arrowLeft').addEventListener('click', shch.goTo.less.bind(shch.goTo), {passive: true});
};

window.addEventListener('load', shch.LoadFunc);