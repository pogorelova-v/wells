let slidersLine = document.querySelector('.sliders')
let slidersArr = document.querySelectorAll('.slide')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')

let count = 0;
let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
console.log(slideWidth);

slideNext.addEventListener('click', () => {
    count++;
    slidersLine.style.transition = 'all 0.5s';
    if(count >= slidersArr.length){
        count = 0;
        slidersLine.style.transition = 'all 0s';
    }
    rollSlide()
})

slidePrev.addEventListener('click', () => {
    count--;
    slidersLine.style.transition = 'all 0.5s';
    if(count < 0){
        count = slidersArr.length -1;
        slidersLine.style.transition = 'all 0s';
    }
    rollSlide()
})

function rollSlide() {
    slidersLine.style.transform = 'translate(-'+count*slideWidth+'px)';
}
