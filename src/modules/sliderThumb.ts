import Model from './model';

export default class SliderThumb {
  _selector: string;
  _values: number[];
  container: HTMLElement;
  thumbSlider: HTMLElement;

  constructor(selector: string, values: number[]) {
    this._selector = selector;
    this._values = values;
  };

  init() {
    this.container = document.querySelector(this._selector);
    this.thumbSlider = document.createElement('DIV');
    this.thumbSlider.classList.add('slider-thumb');
    // console.log(this._values[0]);
    // console.log(this._selector);
    // console.log(this.container);
    // this.thumbSlider.style.left = model.positionElement(this.container, this.thumbSlider, this._values[0]);
    this.thumbSlider.style.left = `${this._values[0]}px`;
    // this.thumbSlider.setAttribute('id', 'slider-thumb');
    this.container.append(this.thumbSlider);
  }

  destroy() {
    this.thumbSlider.remove();
  }
}
