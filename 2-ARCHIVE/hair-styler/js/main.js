new Swiper('.tech-swiper', {
    loop: true,
    autoplay: true,
    speed: 300,
    disableOnInteraction: false,
    slidesPerView: 2,
    breakpoints: {
        768: {
            speed: 200,
            slidesPerView: "auto",
        },
    },
});
new Swiper('.cold-air__swiper', {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    loop: true,
    fadeEffect: {
        crossFade: true,
    },
});
new Swiper('.effect__swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 39,
    autoplay: true,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
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
new Swiper('.stars-swiper', {
    disableOnInteraction: false,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: false,
    },
});
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
            threshold: 0.001,
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

function scrollMagicAnim(sectionClassName, durationValue = .2, offsetValue = 0, noLeave = null) {
    let addClassOnScrollController = new ScrollMagic.Controller();
    const section = document.querySelector(sectionClassName);
    let sectionHeight = section.clientHeight;

    let classOnScroll = new ScrollMagic.Scene({
        triggerElement: section,
        duration: durationValue * sectionHeight,
        offset: offsetValue * sectionHeight,
    })
        .on("enter", () => {
            section.classList.add("active");
        })
        .addTo(addClassOnScrollController);
};
try {
    scrollMagicAnim(".lamination");
    scrollMagicAnim(".modes");
    scrollMagicAnim(".image");
    scrollMagicAnim(".ions");
    scrollMagicAnim(".volume-nozzle");
    scrollMagicAnim(".curls-nozzle");
    scrollMagicAnim(".straightening-nozzle");
    scrollMagicAnim(".engine");
} catch (err) {
    console.warn(err);
};


const titles = ['.removable-nozzles__title-text-block-bold', '.volumetric-styling__title-text-block-bold']
const nozzles = ['.removable-nozzles__nozzle-img_left', '.removable-nozzles__nozzle-img_right', '.volumetric-styling__nozzle-img_right', '.volumetric-styling__nozzle-img_left']
// '.volumetric-styling__nozzle-img_right', '.volumetric-styling__nozzle-img_left'

const observer50 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const arrClass = entry.target.classList;
        if (arrClass.contains('removable-nozzles__title-text-block-bold')) entry.isIntersecting ? arrClass.add('removable-nozzles__title-text-block-bold_animation') : arrClass.remove('removable-nozzles__title-text-block-bold_animation')
        if (arrClass.contains('volumetric-styling__title-text-block-bold')) entry.isIntersecting ? arrClass.add('volumetric-styling__title-text-block-bold_animation') : arrClass.remove('volumetric-styling__title-text-block-bold_animation')
    })
}, {
    threshold: .5
});

const observer10 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const arrClass = entry.target.classList;
        const animation = Array.from(arrClass).some(item => item.match(/animation/));
        if (entry.isIntersecting && !animation) {
            if (arrClass.contains('removable-nozzles__nozzle-img_left')) arrClass.add('removable-nozzles__nozzle-img_animation-left');
            if (arrClass.contains('removable-nozzles__nozzle-img_right')) arrClass.add('removable-nozzles__nozzle-img_animation-right');
            if (arrClass.contains('volumetric-styling__nozzle-img_right')) arrClass.add('volumetric-styling__nozzle-img_right-animation');
            if (arrClass.contains('volumetric-styling__nozzle-img_left')) arrClass.add('volumetric-styling__nozzle-img_left-animation');
            // if(!mediaQuery && arrClass.contains('three-steps__text')) arrClass.add('three-steps__text_animation');
        }
    })
}, {
    threshold: .1
});

titles.forEach(selector => observer50.observe(document.querySelector(selector)))
nozzles.forEach(selector => observer10.observe(document.querySelector(selector)))
