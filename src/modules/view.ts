// import Scale from './scale';

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

  constructor(elemId: string, options: optionsType) {
    this._elemId = elemId.slice(1);
    this._options = options;
  }

  init() {
    this.lineElem = document.getElementById(this._elemId);
    this.thumbElem = document.createElement('DIV');
    this.valueElem = document.createElement('DIV');
  }

  showSliderLine() {
    this.lineElem.classList.add('slider-body');
  }

  getPositionElement(elem: HTMLElement, val: number) {
    return `${((val - this._options.min) * this.lineElem.offsetWidth)
      / (this._options.max - this._options.min) - elem.offsetWidth / 2}px`;
  }

  fillSliderLine(length: number) {
    this.lineElem.style.background = `linear-gradient(to right, red ${length}px, #e5e5e5 ${length}px)`;
  }

  showSliderThumb() {
    this.thumbElem.classList.add('slider-thumb');
    this.lineElem.append(this.thumbElem);
    console.log(this._options);
    // console.log(this._options.values[0]);
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, this._options.values[0]);
    this.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
  }

  showSliderValue() {
    this.valueElem.classList.add('tip-value');
    this.lineElem.append(this.valueElem);
    this.valueElem.textContent = `${Math.round(((this.thumbElem.offsetLeft
       + this.thumbElem.offsetWidth / 2 - this.lineElem.offsetLeft)
       * (this._options.max - this._options.min))
       / this.lineElem.offsetWidth + this._options.min)}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, Number(this.valueElem.textContent));
  }

  // showScale(min: number, max: number, step: number) {
  //   this._minValue = min;
  //   this._maxValue = max;
  //   this._stepValue = step;
  //   // console.log(this._parentId);
  //   const scale: Scale = new Scale(this._selector, this._minValue, this._maxValue, this._stepValue);
  //   scale.init();
  // }
}
