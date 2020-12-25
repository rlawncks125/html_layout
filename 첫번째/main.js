// 스와이프
const arry = ["첫번쨰", "두번째", "세번쨰", "4번쨰", "5번째", "6번쨰", "7번쨰"]
const he_2 = window.innerHeight / 2;
const mobileWidth = 600;
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
            return `<span class="${className}"><p>${arry[index]}</p></span>`;
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


const myswiper = new Swiper('.swiper-main',Option);
const pag = document.querySelector(".swiper-pagination");

swiperDesktopOption();


window.addEventListener("resize",()=>{
    if (window.innerWidth > mobileWidth) {
        (mobilemode) ? swiperDesktopOption(): '';
        mobilemode = false;
    } else {
        (!mobilemode) ? swiperMobileOption(): '';
        mobilemode = true;
    }

})

function swiperMobileOption(){
    myswiper.params.freeMode=true ;
    pag.classList.add("swiper-pagination-hidden");
    myswiper.params.scrollbar.hide=true;
}
function swiperDesktopOption(){
    myswiper.params.freeMode=false ;
    pag.classList.remove("swiper-pagination-hidden");
    myswiper.params.scrollbar.hide=false;
}