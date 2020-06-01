function sliderRun() {
  const slider = document.getElementById('slider-body');
  const thumb = document.getElementById('slider-thumb');

  thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    const shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    function onMouseMove(event: MouseEvent): void {
      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }
      const rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = `${newLeft}px`;
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
