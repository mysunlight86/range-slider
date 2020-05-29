/* eslint-disable func-names */
/* eslint-disable no-shadow */
function sliderRun() {
  const slider = document.getElementById('slider-body');
  const thumb = document.getElementById('slider-handler');
  let isMouseDown = false;

  thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)
    isMouseDown = true;

    const shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    function onMouseMove(event: MouseEvent): void {
      if (!isMouseDown) return;
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
      isMouseDown = false;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  thumb.ondragstart = function () {
    return false;
  };
}

export default sliderRun;
