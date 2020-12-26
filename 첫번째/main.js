'use strick'

// swiper
const secname = ["Accufly", "Technology", "GenieTalk Go!", "GenieBiz", "About", "Notice", "Footer"]
const he_2 = window.innerHeight / 2;
const mobileWidth = 640;
let mobilemode=false;
let pre_index = 0;

const Option = {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheel: true,
    simulateTouch: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"><p>${secname[index]}</p></span>`;
        },
    },
    speed: 1000,
    // on: {
    //     slideChange: function (swiper) {
    //         console.log("시작" + swiper.activeIndex);
    //     },
    //     transitionEnd: function (swiper) {

    //         console.log("끝" + pre_index);
    //         // 마지막 인덱스가 반응을 안하여 마지막 인덱스시 리턴
    //         if (pre_index == swiper.activeIndex) return

    //         pre_index = swiper.activeIndex;
    //         console.log("체인지" + pre_index);
    //     }
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide : true,
    },
};
const sec1Option = {
    simulateTouch: false,
    slidesPerView: 1,
    loop: true,
    // effect: 'slide',
    speed : 1000,
    breakpoints : {
        1300 :{
            slidesPerView: 5,
        }
    },
    navigation: {
        nextEl: '.sec1-btn-next',
        prevEl: '.sec1-btn-prev',
      },
}



const myswiper = new Swiper('.swiper-main',Option);
const sec1swiper = new Swiper(".sec1_container",sec1Option);




window.addEventListener("resize",()=>{
    if (window.innerWidth > mobileWidth) {
        (mobilemode) ? swiperDesktopOption(): '';
        mobilemode = false;
    } else {
        (!mobilemode) ? swiperMobileOption(): '';
        mobilemode = true;
    }

})
window.addEventListener("load",()=>{
    if (window.innerWidth > mobileWidth) {
        swiperDesktopOption()
        mobilemode = false;
    } else {
        swiperMobileOption()
        mobilemode = true;
    }
})

function swiperMobileOption(){
    myswiper.params.freeMode=true ;
    myswiper.params.scrollbar.hide=true;
}


function swiperDesktopOption(){
    myswiper.params.freeMode=false ;
    myswiper.params.scrollbar.hide=false;
    
    sec1Option.effect='fade';    
}