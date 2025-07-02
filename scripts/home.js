document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Swiper instances
    const bureaSwiper = new Swiper('.bureau-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // When window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    const cellsSwiper = new Swiper('.cells-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is >= 576px
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // When window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});