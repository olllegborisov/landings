{
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const videosSource = document.querySelectorAll(".video-source-js");
    const videosObserv = document.querySelectorAll(".video-observe-js");
    const sectionsObserver = document.querySelectorAll(".section-observer-js");
    const massageSection = document.querySelectorAll(".massage-section-js");

    if (mediaQuery.matches) {
        initDescImgSwiper();
        bigSwiperInit();
    } else {
        initWishSwiper();
    }
    ySwiperInit();
    initSpaSwiper();
    initControlSwiper();
    fingerTouchAnim();
    musicAnimInit();
    hoursAnim();
    // toggleAudio();
    uniqueAnim();
    observElements(videosObserv, VideoPaused);
    observElements(sectionsObserver, sectionsObserv, null, "0px", [.1, .9]);
    observElements(massageSection, noObserveAfterCross, null, "0px", .8);
    addVideoSource(videosSource);

    function observElements(elements, func, myRoot = null, myRootMargin = "0px", myThreshold = 0) {
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    func(entry, observer);
                });
            },
            {
                root: myRoot,
                rootMargin: myRootMargin,
                threshold: myThreshold,
            }
        );

        for (let i = 0; i < elements.length; i++) {
            observer.observe(elements[i]);
        }
    }

    function addVideoSource(videos) {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];
            if (video.dataset.videoMob && !mediaQuery.matches) {
                if (video.dataset.videoMobWebm) {
                    video.innerHTML = `<source src="${video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${video.dataset.videoMob}"> `;
                } else {
                    video.innerHTML = `<source src="${video.dataset.videoMob}">`;
                }
            } else if (video.dataset.video && mediaQuery.matches) {
                if (video.dataset.videoWebm) {
                    video.innerHTML = `<source src="${video.dataset.videoWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${video.dataset.video}"> `;
                } else {
                    video.innerHTML = `<source src="${video.dataset.video}">`;
                }
            }
        }
    }

    // function toggleAudio() {
    //   const heroVideo = document.querySelector(".hero__video");
    //   const muteBtn = document.querySelector(".hero__unmute");

    //   muteBtn.addEventListener("click", () => {
    //     if (heroVideo.muted === true) {
    //       heroVideo.muted = false;
    //       muteBtn.classList.toggle("hero__unmute_mute");
    //     } else {
    //       heroVideo.muted = true;
    //       muteBtn.classList.toggle("hero__unmute_mute");
    //     }
    //   });
    // }

    function VideoPaused(entry) {
        if (!entry.target.paused) {
            entry.target.pause();
        } else if (entry.isIntersecting) {
            entry.target.play();
        }
    }

    function sectionsObserv(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("_active");
        } else {
            entry.target.classList.remove("_active");
        }
    }

    function noObserveAfterCross(entry, observer) {
        if (entry.isIntersecting) {
            entry.target.classList.add("_active");
            observer.unobserve(entry.target)
        }
    }

    function ySwiperInit() {
        new Swiper(".yamaguchi__swiper", {
            autoplay: false,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.yamaguchi__swiper-button-next',
                prevEl: '.yamaguchi__swiper-button-prev',
            },
        })
    }

    function fingerTouchAnim() {
        const mainIcons = document.querySelectorAll(".finger-touch__icon_main");
        const subIcons = Array.from(
            document.querySelectorAll(".finger-touch__icon_sub")
        );
        const subIconsReversed = subIcons.reverse();
        let subIcon = 0;
        let subIconPrev;

        function mainIconsAnim() {
            mainIcons.forEach((icon) => {
                icon.classList.toggle("_active");
            });
        }

        function subIconsAnim() {
            if (subIcon == 0) {
                subIconPrev = subIconsReversed.length - 1;
            } else {
                subIconPrev = subIcon - 1;
            }
            subIconsReversed[subIcon].classList.add("_active");
            subIconsReversed[subIconPrev].classList.remove("_active");

            if (subIcon === subIconsReversed.length - 1) {
                subIcon = 0;
            } else {
                subIcon += 1;
            }
        }

        let timerId = setInterval(() => {
            setTimeout(mainIconsAnim, 600);
            subIconsAnim();
        }, 1000);
    }

    function uniqueAnim() {
        const icon = document.querySelector(".unique__10-icon");
        const iconPaths = icon.querySelectorAll("path");
        let iconPath = 0;
        let iconPathPrev;

        function iconPathsAnim() {
            iconPaths[iconPaths.length - 2].classList.toggle("_active");
            iconPaths[iconPaths.length - 1].classList.toggle("_active");
            if (iconPath == 0) {
                iconPathPrev = iconPaths.length - 3;
            } else {
                iconPathPrev = iconPath - 1;
            }
            iconPaths[iconPath].classList.add("_active");
            iconPaths[iconPathPrev].classList.remove("_active");

            if (iconPath === iconPaths.length - 3) {
                iconPath = 0;
            } else {
                iconPath += 1;
            }
        }

        let timerId = setInterval(iconPathsAnim, 1000);
    }

    function initWishSwiper() {
        new Swiper(".wish__swiper", {
            effect: "fade",
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            fadeEffect: {
                crossFade: true,
            },
        });
    }

    function initSpaSwiper() {
        new Swiper(".spa-swiper", {
            direction: "horizontal",
            speed: 10000,
            autoplay: {
                delay: 0,
            },
            allowTouchMove: false,
            loop: true,
            centeredSlides: true,

            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: "1%",
                },

                768: {
                    slidesPerView: 4.2,
                    spaceBetween: ".8%",
                },
            },
        });
    }

    function musicAnimInit() {
        const musicLotus = document.querySelector(".music__lotus");
        const musicList = document.querySelector(".music__list");
        const musicBg = document.querySelector(".music__bg-img");

        function toggleClasses() {
            musicLotus.classList.toggle("_blue");
            musicLotus.classList.toggle("_medit");

            musicList.classList.toggle("_blue");
            musicList.classList.toggle("_medit");
        }

        let timerId = setInterval(toggleClasses, 6000);
    }

    function bigSwiperInit() {
        new Swiper(".big-swiper__swiper", {
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".big-swiper__pagination",
                clickable: true,
            },
        });
    }

    function initControlSwiper() {
        new Swiper(".control__swiper", {
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            fadeEffect: {
                crossFade: true,
            },
        });
    }

    function initDescImgSwiper() {
        new Swiper(".desc-img__swiper", {
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 1,
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".desc-img__pagination",
                clickable: true,
            },
        });
    }

    function hoursAnim() {
        const timeNumber = document.querySelector(".hours__time-number");
        let numberTimerId;

        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        numberTimerId = setInterval(changeNumber, 150, timeNumber, numberTimerId);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 }
        );

        observer.observe(timeNumber);
    }

    function changeNumber(element, timerId) {
        let elementValue = +element.innerText;
        if (elementValue < 6) {
            element.innerText = elementValue + 1;
        } else {
            clearInterval(timerId);
        }
    }
}