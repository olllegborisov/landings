
// =====================================================================================================================================>
class LandingVideo {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._videos = document.querySelectorAll(`.${this._class}`);
        console.log(data);
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
if (window.innerWidth > 768) {
    new Swiper('.cosiness__swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            disableOnInteraction: false,
            delay: 10000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
}
// =====================================================================================->
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
// =====================================================================================->
const modesImgContainers = document.querySelectorAll('.modes__img-container');
const modesSwiperSecond = new Swiper('.modes__second-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    allowTouchMove: false,
    breakpoints: {
        768: {
            allowTouchMove: true,
        },
    },
});

modesSwiperSecond.on('slideChange', () => {
    for (let i = 0; i < modesImgContainers.length; i++) {
        modesImgContainers[i].classList.remove('modes__img-container_active');
        if (modesSwiperSecond.activeIndex == modesImgContainers[i].id) modesImgContainers[i].classList.add('modes__img-container_active');
    }
});

for (let i = 0; i < modesImgContainers.length; i++) {
    modesImgContainers[i].addEventListener("click", () => {
        modesSwiperSecond.slideTo(modesImgContainers[i].id);
    });
}

// =====================================================================================->
if (window.innerWidth < 768) {

    const modesSwiperFirst = new Swiper('.modes__first-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        allowTouchMove: false,
        breakpoints: {
            768: {
                allowTouchMove: true,
            },
        },
    });
}
// =====================================================================================->
const programmsSwiper = new Swiper('.programms__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        disableOnInteraction: false,
        delay: 10000,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    }, navigation: {
        nextEl: '.programms__button_next',
        prevEl: '.programms__button_prev',
    },
});
// =====================================================================================->
// function initIntroUnmute() {
//     const introVideo = $(".intro__video");
//     const introUnmuteBtn = document.querySelector('.intro__unmute-btn');

//     introUnmuteBtn.addEventListener('click', evt => {
//         if (introUnmuteBtn.classList.contains('intro__unmute-btn_unmute')) {
//             introUnmuteBtn.classList.remove('intro__unmute-btn_unmute');
//             introVideo.prop('muted', true);
//         } else {
//             introUnmuteBtn.classList.add('intro__unmute-btn_unmute');
//             introVideo.prop('muted', false);
//         }
//     });
// }
// try {
//     initIntroUnmute();
// } catch(err) {
//     console.warn(err);
// }
// =====================================================================================->
