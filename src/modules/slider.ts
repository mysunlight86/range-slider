function sliderRun() {
  const slider = document.getElementById('slider-body');
  const thumb = document.getElementById('slider-thumb');
  const tip = document.getElementById('tip-value');

  const delta = thumb.offsetWidth / 2;
  tip.textContent = `${getComputedStyle(thumb).left.slice(0, -2)}`;

  function fillSliderLine(length) {
    slider.style.background = `linear-gradient(to right, red ${length}px, #e5e5e5 ${length}px)`;
  }

  function onMouseMove(event: MouseEvent): void {
    let newLeft = event.clientX - delta - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    const rightEdge = slider.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = `${newLeft}px`;
    tip.textContent = `${newLeft}`;
    tip.style.left = `${newLeft - (tip.offsetWidth - thumb.offsetWidth) / 2}px`;
    fillSliderLine(newLeft);
  }

  function onMouseUp(): void {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  function onMouseDown(event: MouseEvent): void {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onMouseClick(event: MouseEvent): void {
    event.preventDefault();
    const clickPoint = event.clientX - delta - slider.getBoundingClientRect().left;
    thumb.style.left = `${clickPoint}px`;
    tip.textContent = `${clickPoint + delta}`;
    tip.style.left = `${clickPoint - (tip.offsetWidth - thumb.offsetWidth) / 2}px`;
    fillSliderLine(clickPoint);
  }

  function returnFalse() {
    return false;
  }

  thumb.addEventListener('mousedown', onMouseDown);
  slider.addEventListener('click', onMouseClick);
  thumb.addEventListener('dragstart', returnFalse);
}

export default sliderRun;
