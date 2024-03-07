class ObserverVisible {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._currentElements = document.querySelectorAll(`.${this._class}`);
        this._options = {
            root: null,
            rootMargin: `0px 0px ${data.marginBottom ? data.marginBottom : '-20%'} 0px`,
            threshold: data.threshold ? data.threshold : .01,
        }
        this._observer = new IntersectionObserver((entries, obs) => {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    setTimeout(() => {
                        entries[i].target.classList.remove(`_hide`);
                    }, data.delay ? data.delay : 0)
                }
            }
        }, this._options);
    }

    setElementsVisibleOnScroll() {
        const _observerArr = [];
        for (let i = 0; i < this._currentElements.length; i++) {
            this._currentElements[i].classList.add('_hide');
            _observerArr.push(this._observer.observe(this._currentElements[i]));
        }
        return _observerArr;
    }
}
// =====================================================================================================================================>
new ObserverVisible('element-for-visible').setElementsVisibleOnScroll();
new ObserverVisible({ class: 'element-for-visible-with-delay', delay: 1000 }).setElementsVisibleOnScroll();
// =====================================================================================================================================>
class LandingVideo {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._videos = document.querySelectorAll(`.${this._class}`);
    }

    addVideoSource() {
        const _mediaQuery = window.matchMedia('(min-width: 768px)');

        for (let i = 0; i < this._videos.length; i++) {
            let _video = this._videos[i];
            if (_video.dataset.videoMob && !_mediaQuery.matches) {
                if (_video.dataset.videoMobWebm) {
                    _video.innerHTML = `<source src="${_video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.videoMob}"> `;
                } else {
                    _video.innerHTML = `<source src="${_video.dataset.videoMob}">`;
                }
            } else if (_video.dataset.video && _mediaQuery.matches) {
                if (_video.dataset.videoWebm) {
                    _video.innerHTML = `<source src="${_video.dataset.videoWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.video}"> `;
                } else {
                    _video.innerHTML = `<source src="${_video.dataset.video}">`;
                }
            }
        }
    }

    playOnScroll() {
        const _options = {
            root: null,
            rootMargin: `0px 0px 0px 0px`,
            threshold: 0.01,
        }
        const _observer = new IntersectionObserver((entries, obs) => {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    entries[i].target.play();
                } else {
                    entries[i].target.pause();
                }
            }
        }, _options);
        const _observerArr = [];
        for (let i = 0; i < this._videos.length; i++) {
            _observerArr.push(_observer.observe(this._videos[i]));
        }
        return _observerArr;
    }
}
// =====================================================================================================================================>
new LandingVideo('video-on-load').addVideoSource();
new LandingVideo('video-on-load').playOnScroll();
// =====================================================================================================================================>
const smoothFlowSwiper1 = new Swiper('.smooth-flow-swiper_1', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 7000,
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 0,
    },
});
// =====================================================================================================================================>
const smoothFlowSwiper2 = new Swiper('.smooth-flow-swiper_2', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 7000,
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 0,
        reverseDirection: true,
    },
});
// =====================================================================================================================================>
const smoothFlowSwiper3 = new Swiper('.smooth-flow-swiper_3', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 7000,
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 0,
    },
});
// =====================================================================================================================================>training__swiper
const gallerySwiper = new Swiper('.training__swiper', {
    disableOnInteraction: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        disableOnInteraction: false,
        delay: 3000,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// =====================================================================================================================================>
// =====================================================================================================================================>
// =====================================================================================================================================>
// =====================================================================================================================================>
// =====================================================================================================================================>
// =====================================================================================================================================>