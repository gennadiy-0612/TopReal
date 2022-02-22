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

shch.secSlide = function (s) {
    this.changer = document.querySelectorAll(s);
    this.changerMemo = document.querySelectorAll(s)[0];
    this.slideSec = document.querySelectorAll('.photo');
    this.slideSecMemo = document.querySelectorAll('.photo')[0];
    this.slideSecMemo1 = document.querySelectorAll('.photo')[1];
    this.memo0 = 0;
    this.memo1 = 1;

    this.slideSecB = document.querySelectorAll('.photoBack');
    this.slideSecMemoB = document.querySelectorAll('.photoBack')[0];
    this.slideSecMemo1B = document.querySelectorAll('.photoBack')[1];
    this.changeIt = function (n) {
        if (this.slideSecMemo !== this.slideSec[n]) {
            this.changerMemo.classList.remove('VividBrownTrapezoid');
            this.changer[n].classList.add('VividBrownTrapezoid');
            this.changerMemo = this.changer[n];

            this.slideSecMemo.classList.remove('photoAct', 'PA' + this.memo0);
            this.slideSecMemo.classList.add('photoNoAct', 'PNA' + this.memo0);
            this.slideSecMemo1.classList.remove('photoNoAct', 'PNA' + this.memo1);
            if (this.memo1 === n) {
                this.slideSecMemo.classList.remove('equal');
                this.slideSecMemo1.classList.add('equal');
            } else {
                this.slideSecMemo.classList.remove('equal');
                this.slideSecMemo1.classList.remove('equal');
            }
            this.slideSecMemo1 = this.slideSecMemo;
            this.memo1 = this.memo0;
            this.memo0 = n;
            this.slideSec[n].classList.add('photoAct', 'PA' + this.memo0);
            this.slideSecMemo = this.slideSec[n];

            this.slideSecMemoB.classList.remove('photoActB');
            this.slideSecMemoB.classList.add('photoNoActB');
            this.slideSecMemo1B.classList.remove('photoNoActB');
            this.slideSecMemo1B = this.slideSecMemoB;
            this.slideSecB[n].classList.add('photoActB');
            this.slideSecMemoB = this.slideSecB[n];
        }
    }
};
shch.addDetect = function (inter) {
    this.checkVision = function (init) {
        const options = {
            rootMargins: '50vh 0',
            threshold: [inter]
        };

        function vdHandler(els) {
            els.forEach((data) => {
                if (data.intersectionRatio > inter) {
                    data.target.classList.add(init.animationName);
                }
            });
        }

        const vd = new IntersectionObserver(vdHandler, options);
        const cImgs = document.querySelectorAll(init.selector);
        cImgs.forEach((el) => {
            vd.observe(el);
        });
    }
};
shch.addTo = function (s, o, f) {
    let links = document.querySelectorAll(s);
    let linksL = links.length;
    this.i = 0;
    for (; this.i < linksL; this.i++) {
        links[this.i].addEventListener('click', f.bind(o, this.i), {passive: true});
    }
};
shch.watch = {
    screenS2: {
        selector: '.SlideBack',
        animationName: 'SlideBackAnim'
    }
};

shch.LoadFunc = function () {
    shch.goTo = new shch.topSlider();
    document.querySelector('.arrowRight').addEventListener('click', shch.goTo.more.bind(shch.goTo), {passive: true});
    document.querySelector('.arrowLeft').addEventListener('click', shch.goTo.less.bind(shch.goTo), {passive: true});
    shch.weMade = new shch.secSlide('.weMade');
    shch.addTo('.weMade', shch.weMade, shch.weMade.changeIt);

    shch.watchS2 = new shch.addDetect(.5);
    shch.watchS2.checkVision(shch.watch.screenS2);
};

window.addEventListener('load', shch.LoadFunc);