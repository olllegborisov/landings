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
new ObserverVisible({ class: 'element-for-visible-with-delay', delay: 1500 }).setElementsVisibleOnScroll();
new ObserverVisible({ class: 'element-for-visible-with-margin', marginBottom: '-5%' }).setElementsVisibleOnScroll();
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
const targetSwiper = new Swiper('.target__swiper', {
    disableOnInteraction: false,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    loop: true,
    effect: "fade",
    fadeEffect: {
    },
});
// =====================================================================================================================================>
if (window.innerWidth <= 767) {
    const tipsTypesSwiper = new Swiper('.tip-types', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            disableOnInteraction: false,
            delay: 3000,
        },
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
        },
    });
} else {
    new ObserverVisible('tip-types-for-visible').setElementsVisibleOnScroll();
}
// =====================================================================================================================================>
const massageSliderSwiperSecond = new Swiper('.massage-slider-second-slider', {
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
// =====================================================================================================================================>
function initializeTickerSwiper(className) {
    const armProSwiper = new Swiper(`.${className}`, {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 30000,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            disableOnInteraction: false,
            reverseDirection: true,
            delay: 0,
        },
    });
    return armProSwiper;
}
// =====================================================================================================================================>
initializeTickerSwiper('arm-pro-slider_left_1');
initializeTickerSwiper('arm-pro-slider_right_1');
initializeTickerSwiper('arm-pro-slider_left_2');
initializeTickerSwiper('arm-pro-slider_right_2');
initializeTickerSwiper('arm-pro-slider_left_3');
initializeTickerSwiper('arm-pro-slider_right_3');
// =====================================================================================================================================>
function tahoMeter() {
    if (tahometerOnce) {
        let wrapper = document.querySelector('.intensity__tahometer')
        let elements = Array.from(wrapper.querySelectorAll('*'))
        let reverseElements = Array.from(wrapper.querySelectorAll('*')).reverse()
        let delay = 0
        let reverseDelay = 2000
        let reverseElementsLength = reverseElements.length

        setInterval(() => {
            delay = 0
            reverseDelay = 2000
            elements.forEach((element) => {
                setTimeout(() => {
                    element.style.fill = 'red'
                }, delay)
                delay += 30

            });
            reverseElements.forEach((element, index) => {
                if ((reverseElementsLength - index) > 4)
                    setTimeout(() => {
                        element.removeAttribute('style')
                    }, reverseDelay);
                reverseDelay = reverseDelay * 1.04 + 20
            });
        }, 6500)
    }
}
// =====================================================================================================================================>
let tahometerOnce = true
function setSceneForElementVisible(data) {
    if (typeof data == "object") {

        const currentElement = document.querySelector(`.${data.class}`);
        currentElement.classList.add(`${data.class}_hide`);
        const options = {
            root: null,
            rootMargin: `0px 0px ${data.marginBottom ? data.marginBottom : '-20%'} 0px`,
            threshold: .01,
        }
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    currentElement.classList.remove(`${data.class}_hide`);
                    setTimeout(() => {
                        if (data.callback) currentElement.classList.add(`${data.class}_animation`);

                    }, data.delay ? data.delay : 0)
                }, data.delay ? data.delay : 0)
            }
            if (data.customCallback) {
                data.customCallback()
                tahometerOnce = false
            }
        }, options);

        return observer.observe(currentElement);
    } else {
        const currentElement = document.querySelector(`.${data}`);
        currentElement.classList.add(`${data}_hide`);
        const options = {
            root: null,
            rootMargin: '0px 0px -20% 0px',
            threshold: .01,
        }
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                currentElement.classList.remove(`${data}_hide`);
            }
        }, options);

        return observer.observe(currentElement);
    }
}
setSceneForElementVisible({ class: 'intensity', customCallback: tahoMeter })
// =====================================================================================================================================>


try {
    const arrayText = [
        {
            title: "Насадка U-Shape",
            subtitle: "Для разминающего массажа вдоль позвоночника, талии, икр."
        },
        {
            title: "Круглая насадка с гелемом",
            subtitle: "Для крупных мышц спины и бедер, а также работы в области живота, лица и подбородка."
        },
        {
            title: "Насадка «Пуля»",
            subtitle: "Для точечного массажа стопы и глубокой проработки триггерных точек."
        },
        {
            title: "Плоская насадка",
            subtitle: "Для мышц бедер и области вокруг колена."
        }
    ]

    const titleSection = document.querySelector('.tip-types__title');
    const subtitleSection = document.querySelector('.tip-types__subtitle');
    const videoSection = document.querySelector('.tip-types__video');


    videoSection.ontimeupdate = () => {
        const time = Math.round(videoSection.currentTime)

        if (time == 0) {
            titleSection.textContent = arrayText[0].title
            subtitleSection.textContent = arrayText[0].subtitle
        }
        if (time == 3) {
            titleSection.textContent = arrayText[1].title
            subtitleSection.textContent = arrayText[1].subtitle
        } if (time == 6) {
            titleSection.textContent = arrayText[2].title
            subtitleSection.textContent = arrayText[2].subtitle
        } if (time == 9) {
            titleSection.textContent = arrayText[3].title
            subtitleSection.textContent = arrayText[3].subtitle
        }
    };

} catch (err) {
    console.warn(err)
}