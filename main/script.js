let slidersLine = document.querySelector('.sliders')
let slidersArr = document.querySelectorAll('.slide')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')
slidersArr = Array.from(slidersArr);

let marginSlidersLine = '-' + slidersArr[0].clientWidth *2 + "px";
slidersLine.style.left = marginSlidersLine;

let slideWidthNext = '-' + slidersArr[0].clientWidth + "px";
let slideWidthPrev = slidersArr[0].clientWidth + "px";

function slideAnimate(end) {
    slidersLine.animate([
        // keyframes
        { transform: `translateX(${end})` }
      ], {
        // timing options
        duration: 400
      });
}

slideNext.addEventListener('click', () => {
    setTimeout(() => {
            slidersLine.prepend(slidersArr[0]);
            slidersArr.unshift(slidersArr.pop())
    }, 400);
    slideAnimate(slideWidthPrev)
})

slidePrev.addEventListener('click', () => {
          slidersLine.append(slidersArr[0]);
          slidersArr.push(slidersArr.shift())
    slideAnimate(slideWidthNext)
})

/*
slidersLine.prepend(slidersArr[1])

node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,



slidePrev.addEventListener('click', () => {
   
})
*/
