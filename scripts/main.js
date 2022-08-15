let swiper ;
let init = false;

let showMoreButton = document.querySelector('.slider__show-more-button');
let SlidesHide = true;
let brandsSlider = document.querySelector('.brand-slider__wrapper');
let brandsArray = brandsSlider.children;

function swiperMode() {
    if (window.innerWidth < 768) {
        if (!init) {
          init = true;
          swiper = new Swiper('.brand-slider', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
        });        }
    } else if (init) {
        swiper.destroy();
        init = false;
      }
}

function hideElements() {
    
    if (window.innerWidth < 768) {
        for (let i=6; i < brandsArray.length; i++) {
            if (brandsArray[i].classList.contains('brand-slider__slide--visibility--hide')) {
                brandsArray[i].classList.remove('brand-slider__slide--visibility--hide');
            }
        }
    }
    else if (SlidesHide) {
        if (window.innerWidth < 1120) {
            for (let i = 6; i < brandsArray.length; i++) {
                if (!brandsArray[i].classList.contains('brand-slider__slide--visibility--hide')) {
                    brandsArray[i].classList.add('brand-slider__slide--visibility--hide');
                }
            }
        }
        else {
            brandsArray[6].classList.remove('brand-slider__slide--visibility--hide');
            brandsArray[7].classList.remove('brand-slider__slide--visibility--hide');
            for (let i = 8; i < brandsArray.length; i++) {
                if (!brandsArray[i].classList.contains('brand-slider__slide--visibility--hide')) {
                    brandsArray[i].classList.add('brand-slider__slide--visibility--hide');
                }
            }
        }
    }
}

window.addEventListener('load', function() {
    swiperMode();
    hideElements();
});

window.addEventListener('resize', function() {
    swiperMode();
    hideElements();
});


showMoreButton.addEventListener('click', function () {
    let index = 6;
    if (window.innerWidth >= 1120) {
        index = 8;
    }
    if (SlidesHide) {
        SlidesHide = false;
        showMoreButton.textContent = 'Скрыть';
        showMoreButton.classList.remove('slider__show-more-button--show-all');
        showMoreButton.classList.add('slider__show-more-button--hide');
        
        for (; index < brandsArray.length; index++){
            if (brandsArray[index].classList.contains('brand-slider__slide--visibility--hide')) {
                brandsArray[index].classList.remove('brand-slider__slide--visibility--hide');
            }
        }
    }
    else {
        SlidesHide = true;
        showMoreButton.textContent = 'Показать все';
        showMoreButton.classList.remove('slider__show-more-button--hide');
        showMoreButton.classList.add('slider__show-more-button--show-all');

        for (let i=brandsArray.length-1; i >= index; i--){
            if (!brandsArray[i].classList.contains('brand-slider__slide--visibility--hide')) {
                brandsArray[i].classList.add('brand-slider__slide--visibility--hide');
            }
        }
    }
});
