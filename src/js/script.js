document.addEventListener("DOMContentLoaded", () => {
    const swiperMatches = new Swiper("#matches .swiper", {
        direction: "horizontal",
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 520px
            520: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 760px
            760: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        pagination: {
            el: "#matches .swiper-pagination",
            type: "bullets",
            clickable: true,
        },

        navigation: {
            nextEl: "#matches .swiper-button-next",
            prevEl: "#matches .swiper-button-prev",
        },
    });

    const swiperBattles = new Swiper("#battles .swiper", {
        direction: "horizontal",
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,

        pagination: {
            el: "#battles .swiper-pagination",
            type: "bullets",
            clickable: true,
        },

        navigation: {
            nextEl: "#battles .swiper-button-next",
            prevEl: "#battles .swiper-button-prev",
        },
    });

    const [matchesBtn, battlesBtn] =
        document.querySelectorAll(".timetable__tab");
    const battlesWrapper = document.querySelector("#battles");
    const matchesWrapper = document.querySelector("#matches");

    matchesBtn.addEventListener("click", () => {
        battlesWrapper.classList.remove("active");
        matchesWrapper.classList.add("active");
        battlesBtn.classList.remove("active");
        matchesBtn.classList.add("active");
        setTimeout(() => {
            swiperMatches.update();
        }, 100);
    });

    battlesBtn.addEventListener("click", () => {
        battlesWrapper.classList.add("active");
        matchesWrapper.classList.remove("active");
        battlesBtn.classList.add("active");
        matchesBtn.classList.remove("active");
        setTimeout(() => {
            swiperBattles.update();
        }, 100);
    });
});
