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
  scaleElem: HTMLElement;
  minElem: HTMLElement;
  maxElem: HTMLElement;
  middleElem: HTMLElement;
  mark: number;

  constructor(elemId: string, options: optionsType) {
    this._elemId = elemId.slice(1);
    this._options = options;
  }

  init() {
    this.lineElem = document.getElementById(this._elemId);
    this.thumbElem = document.createElement('DIV');
    this.valueElem = document.createElement('DIV');
    return this.lineElem;
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
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, this._options.values[0]);
    this.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
    return this.thumbElem;
  }

  getSliderValue(elem: HTMLElement) {
    return Math.round(((elem.offsetLeft
      + elem.offsetWidth / 2 - this.lineElem.offsetLeft)
      * (this._options.max - this._options.min))
      / this.lineElem.offsetWidth + this._options.min);
  }

  showSliderValue() {
    this.valueElem.classList.add('tip-value');
    this.lineElem.append(this.valueElem);
    this.valueElem.textContent = `${this.getSliderValue(this.thumbElem)}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, Number(this.valueElem.textContent));
    return this.valueElem;
  }

  showSliderScale() {
    this.scaleElem = document.createElement('DIV');
    this.scaleElem.classList.add('scale');
    this.minElem = document.createElement('SPAN');
    this.minElem.textContent = `${this._options.min}`;
    this.minElem.style.position = 'absolute';
    this.maxElem = document.createElement('SPAN');
    this.maxElem.textContent = `${this._options.max}`;
    this.maxElem.style.position = 'absolute';
    this.lineElem.append(this.scaleElem);
    this.scaleElem.append(this.minElem);
    this.scaleElem.append(this.maxElem);
    this.minElem.style.left = `${this.scaleElem.offsetLeft - this.minElem.offsetWidth / 2}px`;
    this.maxElem.style.left = `${this.scaleElem.offsetWidth + this.scaleElem.offsetLeft
      - this.maxElem.offsetWidth / 2}px`;
    this.mark = (this._options.max - this._options.min) / this._options.step;
    for (let i = 1; i < this.mark; i++) {
      this.middleElem = document.createElement('SPAN');
      this.middleElem.textContent = `${this._options.step * i + this._options.min}`;
      this.middleElem.style.position = 'absolute';
      this.maxElem.insertAdjacentElement('beforebegin', this.middleElem);
      this.middleElem.style.left = `${(((Number(this.middleElem.textContent) - this._options.min)
        * this.scaleElem.offsetWidth) / (this._options.max - this._options.min))
        + this.scaleElem.offsetLeft - this.middleElem.offsetWidth / 2}px`;
    }
  }

  setOptions(options) {
    this._options = options;
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
