
// =====================================================================================================================================>
class LandingVideo {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._videos = document.querySelectorAll(`.${this._class}`);
    }

    addVideoSource() {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        for (let i = 0; i < this._videos.length; i++) {
            let _video = this._videos[i];
            if (_video.dataset.videoMob && !mediaQuery.matches) {
                if (_video.dataset.videoMobWebm) {
                    _video.innerHTML = `<source src="${_video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.videoMob}"> `;
                } else {
                    _video.innerHTML = `<source src="${_video.dataset.videoMob}">`;
                }
            } else if (_video.dataset.video && mediaQuery.matches) {
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

const resultSwiper = new Swiper('.result__swiper', {
    disableOnInteraction: false,
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    autoplay: true,
})


const methodCareSwiper = new Swiper('.method-care__image-frame', {
    effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    loop: true,
    autoplay: {
        delay: 1000,
    },
})


let stepsSwiper = undefined
if (window.matchMedia("(max-width: 767px)").matches) {
    stepsSwiper = new Swiper('.steps__swiper', {
        disableOnInteraction: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        autoplay: true
    })
}


function startFunctionOnScroll(target) {
    let startOnce = false

    let interSectionOptions = {
        root: null,
        rootMargin: `0px 0px 0px 0px`,
        threshold: 0.5,
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!startOnce) {
                    stepsVideos()
                }
                startOnce = true
            }
        })
    }, interSectionOptions)
    observer.observe(target)
}


function stepsVideos() {
    let wrapper = document.querySelector('.steps__swiper')
    let videos = wrapper.querySelectorAll('.steps__video-card')
    let playIt = (el) => { el.play() }
    let stopIt = (el) => { el.pause() }
    let index = 0
    let playVideos = () => {
        stepsSwiper ? stepsSwiper.slideTo(index) : ''
        let video = videos[index].querySelector('.steps__video')
        let description = videos[index].querySelector('.steps__text')
        description.classList.add('steps__text_active')
        playIt(video)
        let duration = +video.duration * 1000
        setTimeout(() => {
            stopIt(video)
            description.classList.remove('steps__text_active')
            index < videos.length - 1 ? index++ : index = 0
            playVideos()
        }, duration)
    }
    playVideos()
}
window.addEventListener('load', () => { startFunctionOnScroll(document.querySelector('.steps__swiper')) })

function sliderStarsHandler() {
    let element = document.querySelector('.swiper-stars-reviews');
    const swiper = new Swiper(element, {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteractions: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};
try {
    sliderStarsHandler();
} catch (err) {
    console.log(err);
}