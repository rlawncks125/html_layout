
const arry = ["첫번쨰","두번째","세번쨰","4번쨰","5번째","6번쨰","7번쨰"]
const he_2 = window.innerHeight/2;
let pre_index =0 ;
var myswiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheel: true,
    simulateTouch : false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"><p>${arry[index]}</p></span>`;
          },
    },    
    speed : 1000,
    on: {
        slideChange : function(swiper){
            console.log( "시작"+swiper.activeIndex);
        },
        transitionEnd : function(swiper){

            console.log("끝"+pre_index);
            // 마지막 인덱스가 반응을 안하여 마지막 인덱스시 리턴
            if(pre_index == swiper.activeIndex) return
            
            pre_index = swiper.activeIndex;
            console.log("체인지"+pre_index);
        }
    },
});


