let slidersLine = document.querySelector('.sliders')
let slidersArr = document.querySelectorAll('.slide')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')

let count = 0;
let slideWidth = document.querySelector('.wrapper-slider').offsetWidth;

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
const body = document.querySelector('body')

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
 
//---------------------video section, slider

const videoElem = document.querySelector('input[type="range"]');
let videoLine = document.querySelector('.video-line')
let videoCards = document.querySelectorAll('.video-card');
videoCards = Array.from(videoCards);

let videoWrapWidth = document.querySelector('.video-wrapper').offsetWidth;
let videoCardWidth = videoWrapWidth / 2 - 20;
for (let i = 0; i < videoCards.length; i++) {
    videoCards[i].style.width =  videoCardWidth +'px'; 
}

const rangeValue = function(){
  let newValue = videoElem.value;
  videoLine.style.left = '-' + videoCardWidth * newValue -20 * newValue + 'px';
}

videoElem.addEventListener("input", rangeValue);

//------------------------swipe-video

let videoWrapper = document.querySelector('.video-wrapper')

videoWrapper.addEventListener('touchstart', handleTouchStartV, false);
videoWrapper.addEventListener('touchmove', handleTouchMoveV, false);


let xV1 = null;
let yV1 = null;

function handleTouchStartV (e){
    const firstTouchV = e.touches[0];
    xV1 = firstTouchV.clientX;
    yV1 = firstTouchV.clientY;
}
function handleTouchMoveV (e){
    if(!xV1 || !yV1){
        return false;
    }
    const lastTouchV = e.touches[0];
    xV2 = lastTouchV.clientX;
    yV2 = lastTouchV.clientY;

    let VxDiff = xV2 - xV1;
    let VyDiff = yV2 - yV1;
    if(Math.abs(VxDiff) > Math.abs(VyDiff)){
        if(VxDiff > 0){
            videoElem.value--
            rangeValue()
        } else {
            videoElem.value++
            rangeValue()
        }
    }
    xV1 = null;
    yV1 = null;
}

//-------------------scale video  .video-file-wrapper-open

let videoFile = document.querySelectorAll('.video-file');
videoFile = Array.from(videoFile);

let indClickVideo = null;
videoCards.forEach(element => {
    element.addEventListener("click", () => {
        videoFile.forEach(elementF => {
            elementF.classList.remove('video-file-open');
        });
        indClickVideo = videoCards.indexOf(element);
        videoFile[indClickVideo].classList.add('video-file-open');
    })
});

const videoS = document.getElementById('video')
 
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(videoS);
 
	if ( !withinBoundaries ) {
		for (let i = 0; i < videoFile.length; i++) {
            videoFile[i].classList.remove('video-file-open');
        }
	}
})
 