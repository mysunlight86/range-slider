function sliderRun() {
  const slider = document.getElementById('slider-body');
  const thumb = document.getElementById('slider-thumb');
  const tip = document.getElementById('tip-value');

  // const slider2 = document.querySelector('.range-slider2');
  // console.log(slider2.offsetLeft);

  const delta = thumb.offsetWidth / 2;
  tip.textContent = `${Number(getComputedStyle(thumb).left.slice(0, -2)) + delta}`;

  function fillSliderLine(length) {
    slider.style.background = `linear-gradient(to right, red ${length}px, #e5e5e5 ${length}px)`;
  }

  function onMouseMove(event: MouseEvent): void {
    let thumbPoint = event.clientX - slider.getBoundingClientRect().left - delta;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (thumbPoint < -delta) {
      thumbPoint = -delta;
    }
    const rightEdge = slider.offsetWidth - delta;
    if (thumbPoint > rightEdge) {
      thumbPoint = rightEdge;
    }

    thumb.style.left = `${thumbPoint}px`;
    tip.textContent = `${thumbPoint + delta}`;
    tip.style.left = `${thumbPoint - (tip.offsetWidth - thumb.offsetWidth) / 2}px`;
    fillSliderLine(thumbPoint + delta);
  }

  function onMouseUp(): void {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  function onMouseDown(event: MouseEvent): void {
    event.preventDefault();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function returnFalse() {
    return false;
  }

  thumb.addEventListener('mousedown', onMouseDown);
  slider.addEventListener('click', onMouseMove);
  thumb.addEventListener('dragstart', returnFalse);
}

export default sliderRun;
