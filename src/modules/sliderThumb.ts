// import Model from './model';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  kind?: string,
  isBasic?: boolean,
  values?: number[]
};

export default class SliderThumb {
  _selector: string;
  _options: optionsType;
  container: HTMLElement;
  thumbSlider: HTMLElement;

  constructor(selector: string, options: optionsType) {
    this._selector = selector;
    this._options = options;
  };

  init() {
    this.container = document.querySelector(this._selector);
    this.thumbSlider = document.createElement('DIV');
    this.thumbSlider.classList.add('slider-thumb');
    // console.log(this._values[0]);
    // console.log(this._selector);
    // console.log(this.container);
    // this.thumbSlider.style.left = model.positionElement(this.container, this.thumbSlider, this._values[0]);
    // this.thumbSlider.setAttribute('id', 'slider-thumb');
    this.container.append(this.thumbSlider);
    this.thumbSlider.style.left = `${(this._options.values[0] - this._options.min) * this.container.offsetWidth / (this._options.max - this._options.min) + this.container.offsetLeft - this.thumbSlider.offsetWidth / 2}px`;
  }

  destroy() {
    this.thumbSlider.remove();
  }
}
