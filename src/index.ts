/* eslint-disable no-console */
import './style.scss';

import sliderRun from './modules/slider';
// import Car from './modules/Car';
// import User from './modules/app';

// const car: Car = new Car();
// car.go('vroom');

// const slider: Slider = new Slider();
sliderRun();
// slider.output('Слайдер');

// const el = document.getElementById('content');

// const tom: User = new User('Том', 29);
// el.innerHTML = `Имя: ${tom.name} возраст: ${tom.age}`;
// console.log(el.offsetWidth);
// console.log(el);
// console.log(el.style.left);

//

// const slider = document.querySelector('.slider-body');
// const handler = slider.querySelector('.slider-handler');

// console.log(slider.offsetWidth);
// console.log(handler.style.left);

// let shiftX;

// function onMouseMove(event) {
//   let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

//   // курсор вышел из слайдера => оставить бегунок в его границах.
//   if (newLeft < 0) {
//     newLeft = 0;
//   }
//   console.log(slider);
//   console.log(slider.offsetWidth);
//   const rightEdge = slider.offsetWidth - handler.offsetWidth;
//   if (newLeft > rightEdge) {
//     newLeft = rightEdge;
//   }

//   handler.style.left = newLeft + 'px';
// }

// function onMouseUp() {
//   document.removeEventListener('mouseup', onMouseUp);
//   document.removeEventListener('mousemove', onMouseMove);
// }

// const onMouseDown = (event) => {
//   event.preventDefault(); // предотвратить запуск выделения (действие браузера)

//   shiftX = event.clientX - handler.getBoundingClientRect().left;
//   // shiftY здесь не нужен, слайдер двигается только по горизонтали

//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);
// };

// handler.addEventListener('mousedown', onMouseDown);

// function returnFalse() {
//   return false;
// }

// handler.addEventListener('dragstart', returnFalse);
