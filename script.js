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

    // Initialize swiper for events if on about page
    const eventsSwiper = document.querySelector('.events-swiper');
    if (eventsSwiper) {
        new Swiper('.events-swiper', {
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
    }

    // Initialize swiper for activities if on about page
    const activitiesSwiper = document.querySelector('.activities-swiper');
    if (activitiesSwiper) {
        new Swiper('.activities-swiper', {
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
    }

    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to your backend
            console.log('Form submitted with:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});