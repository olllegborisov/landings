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

const addClassOnScrollController = new ScrollMagic.Controller();



// =================>
const programsSwiper = new Swiper('.programs__swiper', {
    slidesPerView: 1,
    centeredSlidesBounds: false,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoints: {
        521: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});


// =================>
const levelsIndicator = document.querySelector('.levels__button-indicator');
const levelsButtonsArray = document.querySelectorAll('.levels__button');
const levelsSwiper = new Swiper('.levels__swiper', {
    disableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});


levelsSwiper.on('slideChange', () => {
    let activeClass = `levels__button-indicator_${levelsSwiper.activeIndex}`;
    levelsIndicator.classList.remove('levels__button-indicator_0', 'levels__button-indicator_1', 'levels__button-indicator_2');
    levelsIndicator.classList.add(activeClass);
});

levelsButtonsArray.forEach((btn) => {
    let btnIndex = btn.id;
    btn.addEventListener("click", () => {
        levelsSwiper.slideTo(btnIndex);
    })
})

// =================>
const whyImportantSwiper = new Swiper('.why-important__swiper', {
    disableOnInteraction: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 500,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: false,
    },
});

// =================>
const plusAnimation = new ScrollMagic.Scene({
    triggerElement: document.querySelector('.plus__logo'),
    triggerHook: 0.8,
})
    .on('enter', (evt) => {
        document.querySelector('.plus__logo').classList.remove('plus__logo_hide');
    })
    .addTo(addClassOnScrollController);

// =================>
const designAnimation = new ScrollMagic.Scene({
    triggerElement: document.querySelector('.design__main-img'),
    triggerHook: 0.7,
})
    .on('enter', (evt) => {
        document.querySelector('.design__main-img').classList.remove('design__main-img_hide');
    })
    .addTo(addClassOnScrollController);

// =================>
if (window.innerWidth > 450) {
    const gallerySwiper = new Swiper('.gallery', {
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
}
// =================>
const levelsMainSwiper = new Swiper('.levels__main-swipper', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        disableOnInteraction: false,
    },
    effect: "fade",
});