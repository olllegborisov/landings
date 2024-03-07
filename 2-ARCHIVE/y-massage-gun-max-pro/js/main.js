
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
function initFirstNozzleSwiper(deviceSwiperselector, videoSwiperselector) {
    const videoSwiper = new Swiper(deviceSwiperselector, {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        fadeEffect: {
            crossFade: false,
        },
    })
    const deviceSwiper = new Swiper(videoSwiperselector, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
            }
        }
    })
    deviceSwiper.on('slideChange', () => videoSwiper.slideTo(deviceSwiper.realIndex + 1));
}

class MainLandingVideo {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._videos = document.querySelectorAll(`.${this._class}`);
        this._isMobileQuery = window.innerWidth < 768 ? true : false;
    }
    addVideoSource() {
        for (let _video of this._videos) {
            if (_video.dataset.videoMob && this._isMobileQuery) {
                _video.innerHTML = _video.dataset.videoMobWebm
                    ? `<source src="${_video.dataset.videoMob}"> <source src="${_video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'>`
                    : `<source src="${_video.dataset.videoMob}">`;
            } else {
                _video.innerHTML = _video.dataset.videoWebm
                    ? `<source src="${_video.dataset.video}"> <source src="${_video.dataset.videoWebm}" type='video/webm; codecs="vp8, vorbis"'>`
                    : `<source src="${_video.dataset.video}">`;
            }
        }
    }
    playOnScroll() {
        const _options = {
            root: null,
            rootMargin: `0px 0px 0px 0px`,
            threshold: 0.01,
        }
        const _observer = new IntersectionObserver((_entries, _obs) => {
            for (let _entry of _entries) {
                _entry.isIntersecting ? _entry.target.play() : _entry.target.pause();
            }
        }, _options);
        for (let _video of this._videos) _observer.observe(_video);
    }
}


function initMainVideo() {
    const mainLandingVideo = new MainLandingVideo('__js-videoToPlay');
    mainLandingVideo.addVideoSource();
    mainLandingVideo.playOnScroll();
}
try {
    if (window.innerWidth > 768) new ObserverVisible('element-for-visible').setElementsVisibleOnScroll();
    initMainVideo();
    initFirstNozzleSwiper('.__js-videoSwiper1', '.__js-deviceSwiper1');
    initFirstNozzleSwiper('.__js-videoSwiper2', '.__js-deviceSwiper2');
} catch (err) {
    console.warn(err);
}






new Swiper('.deep-massage__smooth-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 40,
    speed: 7000,
    breakpoints: {
        768: {
            spaceBetween: 35,
            slidesPerView: 4.5,
        },
    },
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 0,
    },
});
new Swiper('.modes__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: false,
    },
    autoplay: {
        dalay: 1000,
        disableOnInteraction: false,
    },
});


if (window.innerWidth > 450) {
    new Swiper('.gallery', {
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



