type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  mode?: string,
  hasInterval?: boolean,
  values?: number[]
};

export default class View {
  _elemId: string;
  _options: optionsType;
  _min: number;
  _max: number;
  _step: number;
  _mode: string;
  _hasInterval: boolean;
  _values: number[];

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
    this._min = options.min;
    this._max = options.max;
    this._step = options.step;
    this._mode = options.mode;
    this._hasInterval = options.hasInterval;
    this._values = options.values;
  }

  initSliderLine() {
    this.lineElem = document.getElementById(this._elemId);
    this.lineElem.classList.add('slider-body');
    return this.lineElem;
  }

  initSliderThumb() {
    this.thumbElem = document.createElement('DIV');
    this.thumbElem.classList.add('slider-thumb');
    this.lineElem.append(this.thumbElem);
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, this._values[0]);
    this.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
    return this.thumbElem;
  }

  initSliderValue() {
    this.valueElem = document.createElement('DIV');
    this.valueElem.classList.add('tip-value');
    this.lineElem.append(this.valueElem);
    this.valueElem.textContent = `${this.getSliderValue(this.thumbElem)}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, Number(this.valueElem.textContent));
    return this.valueElem;
  }

  initSliderScale() {
    this.scaleElem = document.createElement('DIV');
    this.scaleElem.classList.add('scale');

    this.minElem = document.createElement('SPAN');
    this.minElem.textContent = `${this._min}`;
    this.minElem.style.position = 'absolute';

    this.maxElem = document.createElement('SPAN');
    this.maxElem.textContent = `${this._max}`;
    this.maxElem.style.position = 'absolute';

    this.lineElem.append(this.scaleElem);
    this.scaleElem.append(this.minElem);
    this.scaleElem.append(this.maxElem);

    this.minElem.style.left = `${this.scaleElem.offsetLeft - this.minElem.offsetWidth / 2}px`;
    this.maxElem.style.left = `${this.scaleElem.offsetWidth + this.scaleElem.offsetLeft
      - this.maxElem.offsetWidth / 2}px`;

    this.mark = (this._max - this._min) / this._step;
    for (let i = 1; i < this.mark; i++) {
      this.middleElem = document.createElement('SPAN');
      this.middleElem.textContent = `${this._step * i + this._min}`;
      this.middleElem.style.position = 'absolute';
      this.maxElem.insertAdjacentElement('beforebegin', this.middleElem);
      this.middleElem.style.left = `${(((Number(this.middleElem.textContent) - this._min)
        * this.scaleElem.offsetWidth) / (this._max - this._min))
        + this.scaleElem.offsetLeft - this.middleElem.offsetWidth / 2}px`;
    }
  }

  getPositionElement(elem: HTMLElement, val: number) {
    return `${((val - this._min) * this.lineElem.offsetWidth) / (this._max - this._min) - elem.offsetWidth / 2}px`;
  }

  fillSliderLine(length: number) {
    this.lineElem.style.background = `linear-gradient(to right, red ${length}px, #e5e5e5 ${length}px)`;
  }

  getSliderValue(elem: HTMLElement) {
    return Math.round(((elem.offsetLeft + elem.offsetWidth / 2 - this.lineElem.offsetLeft)
      * (this._max - this._min)) / this.lineElem.offsetWidth + this._min);
  }

  updateSliderThumb() {
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, this._values[0]);
    this.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
  }

  updateSliderValue() {
    this.valueElem.textContent = `${this.getSliderValue(this.thumbElem)}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, Number(this.valueElem.textContent));
  }

  updateSliderScale() {
    this.maxElem.style.left = `${this.scaleElem.offsetWidth + this.scaleElem.offsetLeft
      - this.maxElem.offsetWidth / 2}px`;
    const middleElems: any = Array.from(this.scaleElem.children);
    for (let i = 1; i < this.mark; i++) {
      middleElems[i].style.left = `${(((Number(middleElems[i].textContent) - this._min)
        * this.scaleElem.offsetWidth) / (this._max - this._min))
        + this.scaleElem.offsetLeft - middleElems[i].offsetWidth / 2}px`;
    }
  }

  setOptions(options: optionsType) {
    this._options = options;
  }
}
