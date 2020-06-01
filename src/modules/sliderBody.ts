class SliderBody {
  container = document.getElementById('range-slider');
  bodySlider: HTMLElement;

  constructor() {
    this.bodySlider = document.createElement('DIV');
    this.bodySlider.classList.add('slider-body');
    this.bodySlider.setAttribute('id', 'slider-body');
  }

  init() {
    this.container.append(this.bodySlider);
  }

  destroy() {
    this.bodySlider.remove();
  }
}

export default SliderBody;
