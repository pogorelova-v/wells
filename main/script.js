let slidersLine = document.querySelector('.sliders')
let slidersArr = document.querySelectorAll('.slide')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')

let count = 0;
let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;
console.log(slideWidth);

slideNext.addEventListener('click', () => {
    rollSlideNext()
})
slidePrev.addEventListener('click', () => {
    rollSlidePrev()
})


function rollSlideNext(){
    count++;
    slidersLine.style.transition = 'all 0.5s';
    if(count >= slidersArr.length){
        count = 0;
        slidersLine.style.transition = 'all 0s';
    }
    rollSlide()
}
function rollSlidePrev(){
    count--;
    slidersLine.style.transition = 'all 0.5s';
    if(count < 0){
        count = slidersArr.length -1;
        slidersLine.style.transition = 'all 0s';
    }
    rollSlide()
}

function rollSlide() {
    slidersLine.style.transform = 'translate(-'+count*slideWidth+'px)';
}

//------------------------swipe-slide

let wrapperSlider = document.querySelector('.wrapper-slider')

wrapperSlider.addEventListener('touchstart', handleTouchStart, false);
wrapperSlider.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart (event){
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove (event){
    if(!x1 || !y1){
        return false;
    }
    const lastTouch = event.touches[0];
    x2 = lastTouch.clientX;
    y2 = lastTouch.clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if(Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0){
            rollSlidePrev()
        } else {
            rollSlideNext()
        }
    }
    x1 = null;
    y1 = null;
}
 