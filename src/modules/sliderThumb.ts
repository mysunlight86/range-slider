class SliderThumb {
  container = document.getElementById('slider-body');
  thumbSlider: HTMLElement;

  constructor() {
    this.thumbSlider = document.createElement('DIV');
    this.thumbSlider.classList.add('slider-thumb');
    this.thumbSlider.setAttribute('id', 'slider-thumb');
  }

  init() {
    this.container.append(this.thumbSlider);
  }

  destroy() {
    this.thumbSlider.remove();
  }
}

export default SliderThumb;
