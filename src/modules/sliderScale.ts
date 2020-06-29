export default class SliderScale {
  private _parentElement: HTMLElement;
  private _min: number;
  private _max: number;
  private _step: number;
  mark: number;
  scaleElem: HTMLElement;
  minElem: HTMLElement;
  maxElem: HTMLElement;
  middleElem: HTMLElement;

  constructor(parentElement: HTMLElement, min: number, max: number, step: number) {
    this._parentElement = parentElement;
    this._min = min;
    this._max = max;
    this._step = step;
  }

  init() {
    this.scaleElem = document.createElement('DIV');
    this.scaleElem.classList.add('scale');

    this.minElem = document.createElement('SPAN');
    this.minElem.textContent = `${this._min}`;
    this.minElem.style.position = 'absolute';

    this.maxElem = document.createElement('SPAN');
    this.maxElem.textContent = `${this._max}`;
    this.maxElem.style.position = 'absolute';

    this._parentElement.append(this.scaleElem);
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

    return this.scaleElem;
  }
}
