new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //буллеты, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
});