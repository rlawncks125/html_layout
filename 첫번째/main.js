"use strick";
import { CountEventArry } from "./test.js";

// swiper
const secname = [
    "Accufly",
    "Technology",
    "GenieTalk Go!",
    "GenieBiz",
    "About",
    "Notice",
    "Footer",
];
const he_2 = window.innerHeight / 2;
const mobileWidth = 640;
let mobilemode = false;
let pre_index = 0;

// 카운트 이벤트
const sec2_Count = new CountEventArry(
    ".sec2_online",
    ".sec2_ofline",
    ".sec2_img_count"
);
sec2_Count.setSpeed(20);

const Option = {
    direction: "vertical",
    slidesPerView: "auto",
    mousewheel: true,
    simulateTouch: false,
    pagination: {
        el: ".main-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"><p>${secname[index]}</p></span>`;
        },
    },
    speed: 1000,
    on: {
        slideChange: function (swiper) {
            console.log("시작" + swiper.activeIndex);
            if (swiper.activeIndex == 2) {
                // 카운트 이벤트
                sec2_Count.setCount(65, 4, 12);
            }
        },
        transitionEnd: function (swiper) {
            console.log("끝" + pre_index);
            // 마지막 인덱스가 반응을 안하여 마지막 인덱스시 리턴
            if (pre_index == swiper.activeIndex) return;

            pre_index = swiper.activeIndex;
            console.log("체인지" + pre_index);
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: true,
    },
};
const sec1Option = {
    simulateTouch: false,
    slidesPerView: 1,
    loop: true,
    // effect: 'slide',
    speed: 1000,
    breakpoints: {
        // 데스크탑 화면
        1180: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".sec1-btn-next",
        prevEl: ".sec1-btn-prev",
    },
    autoplay: {
        delay: 2000,
    },
};

const sec2Option = {
    // slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".sec2-next",
        prevEl: ".sec2-prev",
    },
    pagination: {
        el: ".sec2-pagination",
    },
};

const myswiper = new Swiper(".swiper-main", Option);
const sec1swiper = new Swiper(".sec1_container", sec1Option);
const sec2swiper = new Swiper(".sec2_content", sec2Option);

window.addEventListener("resize", () => {
    if (window.innerWidth > mobileWidth) {
        mobilemode ? swiperDesktopOption() : "";
        mobilemode = false;
    } else {
        !mobilemode ? swiperMobileOption() : "";
        mobilemode = true;
    }
});
window.addEventListener("load", () => {
    if (window.innerWidth > mobileWidth) {
        swiperDesktopOption();
        mobilemode = false;
    } else {
        swiperMobileOption();
        mobilemode = true;
    }
});

function swiperMobileOption() {
    myswiper.params.freeMode = true;
    myswiper.params.scrollbar.hide = true;
    sec1swiper.autoplay.start();
}

function swiperDesktopOption() {
    myswiper.params.freeMode = false;
    myswiper.params.scrollbar.hide = false;
    sec1swiper.autoplay.stop();
}
