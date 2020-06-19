// import SliderThumb from './sliderThumb';
import TipValue from './tipValue';
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
  }

  showSliderLine() {
    this.lineElem.classList.add('slider-body');
  }

  showSliderThumb() {
    this.thumbElem.classList.add('slider-thumb');
    this.lineElem.append(this.thumbElem);
    this.thumbElem.style.left = `${(this._options.values[0] - this._options.min) * this.lineElem.offsetWidth / (this._options.max - this._options.min) - this.thumbElem.offsetWidth / 2}px`;
    console.log(this._options.values);
  }

  // positionElement(parent: HTMLElement, elem: HTMLElement, val: number) {
  //   // console.log(parent);
  //   // console.log(elem);
  //   // console.log(val);
  //   // console.log(this._minValue);
  //   // console.log(this._maxValue);
  //   // console.log(parent.offsetLeft);
  //   // console.log(elem.offsetWidth);
  //   // console.log(parent.offsetWidth);
  //   return `${((val - this._minValue) * parent.offsetWidth / (this._maxValue - this._minValue)) + parent.offsetLeft - elem.offsetWidth / 2}px`;
  // }

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

  // sliderLength: number;
  // init() {
  //   const sliderBody: SliderBody = new SliderBody();
  //   sliderBody.init();
  // }

  // getWidthSlider() {
  //   const sliderBody: SliderBody = new SliderBody();
  //   this.sliderLength = sliderBody.getWidth();
  //   return this.sliderLength;
  // }
}
