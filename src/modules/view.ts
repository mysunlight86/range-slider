import SliderLine from './sliderLine';
import SliderThumb from './sliderThumb';
import SliderValue from './sliderValue';
import SliderScale from './sliderScale';

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
    this.lineElem = new SliderLine(this._elemId).init();
    return this.lineElem;
  }

  initSliderThumb(value: number) {
    this.thumbElem = new SliderThumb(this.lineElem).init();
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, value);
    return this.thumbElem;
  }

  initSliderValue(value: number) {
    this.valueElem = new SliderValue(this.lineElem).init();
    this.valueElem.textContent = `${value}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, value);
    return this.valueElem;
  }

  initSliderScale() {
    this.scaleElem = new SliderScale(this.lineElem, this._min, this._max, this._step).init();
  }

  getСoefficient() {
    return this.lineElem.offsetWidth / (this._max - this._min);
  }

  getPositionElement(elem: HTMLElement, val: number) {
    return `${(val - this._min) * this.getСoefficient() - elem.offsetWidth / 2}px`;
  }

  fillSliderLine(pointTo: number, pointFrom?: number) {
    if (pointFrom) {
      this.lineElem.style.background = `linear-gradient(to right, #e5e5e5 ${pointFrom}px,
        red ${pointFrom}px, red ${pointTo}px, #e5e5e5 ${pointTo}px)`;
    } else {
      this.lineElem.style.background = `linear-gradient(to right, red ${pointTo}px, #e5e5e5 ${pointTo}px)`;
    }
  }

  getSliderValue(elem: HTMLElement) {
    return Math.round((elem.offsetLeft + elem.offsetWidth / 2) / this.getСoefficient() + this._min);
  }

  updateSliderThumb(elem: HTMLElement, value: number) {
    this.thumbElem = elem;
    this.thumbElem.style.left = this.getPositionElement(this.thumbElem, value);
  }

  updateSliderValue(label: HTMLElement, thumb: HTMLElement) {
    this.valueElem = label;
    this.thumbElem = thumb;
    this.valueElem.textContent = `${this.getSliderValue(this.thumbElem)}`;
    this.valueElem.style.left = this.getPositionElement(this.valueElem, Number(this.valueElem.textContent));
  }

  updateSliderScale() {
    const middleElems: any = Array.from(this.scaleElem.children);
    for (let i = 1; i < middleElems.length; i++) {
      middleElems[i].style.left = `${(Number(middleElems[i].textContent) - this._min)
        * this.getСoefficient() + this.scaleElem.offsetLeft - middleElems[i].offsetWidth / 2}px`;
    }
  }

  setOptions(options: optionsType) {
    this._options = options;
  }
}
