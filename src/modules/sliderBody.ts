export default class SliderBody {
  selector: string
  container: HTMLElement;
  bodySlider: HTMLElement;
  sliderLine = 'slider-body';

  constructor(parentSelector: string) {
    this.selector = parentSelector;
  };

  init() {
    // console.log(this.selector);
    this.container = document.querySelector(this.selector);
    this.container.style.padding = '50px 20px 20px';
    this.bodySlider = document.createElement('DIV');
    this.bodySlider.classList.add(this.sliderLine);
    // this.bodySlider.setAttribute('id', this.sliderLine);
    this.container.append(this.bodySlider);
    return this.sliderLine;
  }

  destroy() {
    this.bodySlider.remove();
  }
}
