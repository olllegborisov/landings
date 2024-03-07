// --- слайдер в блоке benefits --->
const benefitsSwiper = new Swiper('.benefits__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1240: {
            slidesPerView: 5,
        },
    }
});
// ---------->
const betterImage = document.querySelector('.better__img_2');
const betterParagraph = document.querySelector('.better__paragraph_1');
const betterSwiper = new Swiper('.better__button-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,
    autoplay: {
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});
console.log(betterSwiper);

betterSwiper.on('slideChange', () => {
    const activeSlideIndex = betterSwiper.activeIndex;

    if (activeSlideIndex == 0) {
        betterImage.src = './images/better/img-2-1.webp';
        betterParagraph.textContent = `Очищающий гель для умывания и прибор по антивозрастному уходу за кожей 
        лица Anti-Age Skin Care — это инновационная формула бережного очищения кожи от себума, 
        загрязнений, остатков макияжа и ороговевших клеток.`;
    }
    if (activeSlideIndex == 1) {
        betterImage.src = './images/better/img-2-2.webp';
        betterParagraph.textContent = `Очищающий гель для умывания и прибор для очищения и 
        массажа лица Silicone Cleansing Brush — это инновационная формула бережного 
        очищения кожи от себума, загрязнений, остатков макияжа и ороговевших клеток.`;
    }
    if (activeSlideIndex == 2) {
        betterImage.src = './images/better/img-2-3.webp';
        betterParagraph.textContent = `Очищающий гель для умывания и прибор для ухода за кожей лица  
        Cleansing System 3-in-1 — это инновационная формула бережного очищения кожи 
        от себума, загрязнений, остатков макияжа и ороговевших клеток.`;
    }
});
// ---------->
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
// ---------->
const addClassOnScrollController = new ScrollMagic.Controller();
function setSceneForElementVisible(elementClass) {
    const currentElement = document.querySelector(`.${elementClass}`);
    currentElement.classList.add(`${elementClass}_hide`);
    const currentScene = new ScrollMagic.Scene({
        triggerElement: document.querySelector(`.${elementClass}`),
        triggerHook: 0.8,
    })
        .on('enter', (evt) => {
            currentElement.classList.remove(`${elementClass}_hide`);
        })
        .addTo(addClassOnScrollController);

    return currentScene;
}
// ---------->
const cleansingGelImgController = setSceneForElementVisible('cleansing__gel-img');
const formulaParagraph1Controller = setSceneForElementVisible('formula__grid-item_1');
const formulaParagraph2Controller = setSceneForElementVisible('formula__grid-item_2');
const formulaParagraph3Controller = setSceneForElementVisible('formula__grid-item_3');
const compositionSubitleController = setSceneForElementVisible('composition__subtitle');
const compositionParagraphController = setSceneForElementVisible('composition__paragraph');
const compositionImgController = setSceneForElementVisible('composition__img');

// ---------->

// ---------->

// ---------->

// ---------->

// ---------->

