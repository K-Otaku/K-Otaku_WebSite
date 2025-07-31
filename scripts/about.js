document.addEventListener('DOMContentLoaded', function() {
  const eventsSwiper = new Swiper('.events-swiper', {
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
          576: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      }
  });

  const activitiesSwiper = new Swiper('.activities-swiper', {
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
          576: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      }
  });
});