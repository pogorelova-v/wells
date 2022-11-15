//-----------------carousel

const carouselControlLeft  = document.getElementById('carouselControlLeft');
const carouselControlRight  = document.getElementById('carouselControlRight');
let carouselWrapper = document.querySelector('.carousel-wrapper');


function goRight() {
    let goRight = carouselWrapper.offsetLeft;
    if(goRight % 350){
        return false
    }

    if(goRight < -1400){
        carouselWrapper.style.left = 0;
    } else {
        carouselWrapper.style.left = goRight - 350 + "px";
    }
}
function goLeft() {
    let goRight = carouselWrapper.offsetLeft;
    if(goRight % 350){
        return false
    }
    
    if(goRight === 0){
        carouselWrapper.style.left = -1750 + "px";
    } else {
        carouselWrapper.style.left = goRight + 350 + "px";
    }
}

carouselControlRight.addEventListener('click', () => {
    goRight()
})
carouselControlLeft.addEventListener('click', () => {
    goLeft()
})


let touchstartX = 0
let touchendX = 0

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function checkDirection() {
    if (touchendX < touchstartX){
      goRight()
    }
    if (touchendX > touchstartX) {
      goLeft()
    }
}

//-----------------------carousel elem

let carouselElemArr = document.querySelectorAll('.carousel-elem')