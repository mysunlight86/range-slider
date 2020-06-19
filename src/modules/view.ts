// import TipValue from './tipValue';
import Scale from './scale';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  kind?: string,
  isBasic?: boolean,
  values?: number[]
};

export default class View {
  _elemId: string;
  _options: optionsType;
  lineElem: HTMLElement;
  thumbElem: HTMLElement;
  valueElem: HTMLElement;
  // _minValue: number;
  // _maxValue: number;
  // _stepValue: number;
  // _values: number[];

  constructor(elemId: string, options: optionsType) {
    this._elemId = elemId.slice(1);
    this._options = options;
    // this._minValue =
  };

  init() {
    this.lineElem = document.getElementById(this._elemId);
    this.thumbElem = document.createElement('DIV');
    this.valueElem = document.createElement('DIV');
  }

  showSliderLine() {
    this.lineElem.classList.add('slider-body');
  }

  showSliderThumb() {
    this.thumbElem.classList.add('slider-thumb');
    this.lineElem.append(this.thumbElem);
    this.thumbElem.style.left = `${(this._options.values[0] - this._options.min) * this.lineElem.offsetWidth / (this._options.max - this._options.min) - this.thumbElem.offsetWidth / 2}px`;
  }

  showSliderValue() {
    this.valueElem.classList.add('tip-value');
    this.lineElem.append(this.valueElem);
    this.valueElem.textContent = `${Math.round((this.thumbElem.offsetLeft + this.thumbElem.offsetWidth / 2 - this.lineElem.offsetLeft) * (this._options.max - this._options.min) / this.lineElem.offsetWidth + this._options.min)}`;
    this.valueElem.style.left = `${(Number(this.valueElem.textContent) - this._options.min) * this.lineElem.offsetWidth / (this._options.max - this._options.min) - this.valueElem.offsetWidth / 2}px`;
  }

  // showSlider() {
  //   const sliderBody: SliderBody = new SliderBody(this._selector);
  //   this.sliderLineClass = sliderBody.init();
  //   // this.sliderLineElem = sliderBody.init().elemSliderLine;
  //   // console.log(this._values);
  //   // console.log(this._options.values);
  //   // const sliderThumb: SliderThumb = new SliderThumb(`${this._selector} > #${this.sliderLineId}`, this._values);
  //   // console.log(this.sliderLineElem);
  //   // console.log(`${this._selector} > .${this.sliderLineClass}`);
  //   const sliderThumb: SliderThumb = new SliderThumb(`${this._selector} > .${this.sliderLineClass}`, this._options);
  //   sliderThumb.init();
  //   const tipValue: TipValue = new TipValue(`${this._selector} > .${this.sliderLineClass}`);
  //   tipValue.init();
  // }

  // showScale(min: number, max: number, step: number) {
  //   this._minValue = min;
  //   this._maxValue = max;
  //   this._stepValue = step;
  //   // console.log(this._parentId);
  //   const scale: Scale = new Scale(this._selector, this._minValue, this._maxValue, this._stepValue);
  //   scale.init();
  // }
}
