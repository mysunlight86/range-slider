function sliderRun() {
  const slider = document.getElementById('slider-body');
  const thumb = document.getElementById('slider-thumb');
  const tip = document.getElementById('tip-value');

  const delta = thumb.offsetWidth / 2;
  tip.textContent = `${getComputedStyle(thumb).left.slice(0, -2)}`;
  // tip.textContent = `${(getComputedStyle(thumb).left.slice(0, -2)) - (tip.offsetWidth - thumb.offsetWidth) / 2}`;
  console.log(Number(getComputedStyle(thumb).left));
  console.log(typeof thumb.style.left);

  thumb.onmousedown = function (event: MouseEvent): void {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    // const shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    function onMouseMove(event: MouseEvent): void {
      let newLeft = event.clientX - delta - slider.getBoundingClientRect().left;
      // let newLeft = event.clientX + delta;
      // let newLeft = event.clientX - delta;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }
      // const rightEdge = slider.offsetWidth - thumb.offsetWidth;
      const rightEdge = slider.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = `${newLeft}px`;
      tip.textContent = `${newLeft}`;
      tip.style.left = `${newLeft - (tip.offsetWidth - thumb.offsetWidth) / 2}px`;
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  thumb.ondragstart = function () {
    return false;
  };
}

export default sliderRun;
