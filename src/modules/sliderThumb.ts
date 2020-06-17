export default class SliderThumb {
  private _selector: string;
  container: HTMLElement;
  thumbSlider: HTMLElement;

  constructor(selector: string) {
    this._selector = selector;
  };

  init() {
    this.container = document.querySelector(this._selector);
    this.thumbSlider = document.createElement('DIV');
    this.thumbSlider.classList.add('slider-thumb');
    this.thumbSlider.setAttribute('id', 'slider-thumb');
    this.container.append(this.thumbSlider);
  }

  destroy() {
    this.thumbSlider.remove();
  }
}
