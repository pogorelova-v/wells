let slidersLine = document.querySelector('.sliders')
let slidersArr = document.querySelectorAll('.slide')
let slidePrev = document.querySelector('.slide-prev')
let slideNext = document.querySelector('.slide-next')
slidersArr = Array.from(slidersArr);

let slideWidthNext = '-' + slidersArr[0].clientWidth + "px";
let slideWidthPrev = slidersArr[0].clientWidth + "px";

function slideAnimate(start, end) {
    slidersLine.animate([
        // keyframes
        { transform: `translateX(${start})` },
        { transform: `translateX(${end})` }
      ], {
        // timing options
        duration: 500
      });
}



slideNext.addEventListener('click', () => {
    
    slideAnimate(0, slideWidthNext)

    setTimeout(() => {
    
            slidersLine.append(slidersArr[0]);
            slidersArr.push(slidersArr.shift())
            console.log(slidersArr[0]);
    }, 500);
    
})



/*
slidersLine.prepend(slidersArr[1])

node.append(...nodes or strings) – добавляет узлы или строки в конец node,
node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,



slidePrev.addEventListener('click', () => {
   
})
*/
