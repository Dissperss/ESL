const matchesBtn = document.querySelector(".timetable__matches-btn");
const battlesBtn = document.querySelector(".timetable__battles-btn");

const matchesBlock = document.querySelector(".timetable__block--matches");
const battlesBlock = document.querySelector(".timetable__block--battles");

function setActiveTab(tab) {
    if (tab === "matches") {
        matchesBlock.classList.add("active");
        battlesBlock.classList.remove("active");

        matchesBtn.classList.add("active");
        battlesBtn.classList.remove("active");
    } else if (tab === "battles") {
        battlesBlock.classList.add("active");
        matchesBlock.classList.remove("active");

        battlesBtn.classList.add("active");
        matchesBtn.classList.remove("active");
    }

    localStorage.setItem("activeTab", tab); // сохраняем состояние
}

// Обработчики клика
matchesBtn.addEventListener("click", () => setActiveTab("matches"));
battlesBtn.addEventListener("click", () => setActiveTab("battles"));

// При загрузке страницы — активируем сохранённый таб или matches по умолчанию
window.addEventListener("DOMContentLoaded", () => {
    const savedTab = localStorage.getItem("activeTab") || "matches";
    setActiveTab(savedTab);
});

const swiper = new Swiper(".swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const activeSlide = swiper.slides[swiper.activeIndex];
            const type = activeSlide.dataset.type;

            // Убираем старую активность
            matchesBlock.classList.remove("active");
            battlesBlock.classList.remove("active");
            matchesBtn.classList.remove("active");
            battlesBtn.classList.remove("active");

            if (type === "matches") {
                matchesBlock.classList.add("active");
                matchesBtn.classList.add("active");
            } else if (type === "battles") {
                battlesBlock.classList.add("active");
                battlesBtn.classList.add("active");
            }
        },
    },
});

matchesBtn.addEventListener("click", () => {
    swiper.slideTo(0); // Перейти к Matches
});

battlesBtn.addEventListener("click", () => {
    swiper.slideTo(1); // Перейти к Battles
});
