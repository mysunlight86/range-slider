export default class Scale {
  private _parentId: string;
  container: HTMLElement;
  // container = document.getElementById('range-slider');
  _min: number;
  _max: number;
  _step: number;
  mark: number;

  // maxValue = 300;
  // step = 50;
  // mark = (this._max - this._min) / this._step;
  scale: HTMLElement;
  min: HTMLElement;
  max: HTMLElement;
  elem: HTMLElement;

  constructor(parentId: string, minValue: number, maxValue: number, stepValue: number) {
    this._parentId = parentId;
    this._min = minValue;
    this._max = maxValue;
    this._step = stepValue;
    this.scale = document.createElement('DIV');
    this.scale.classList.add('scale');
    this.min = document.createElement('SPAN');
    this.min.textContent = `${this._min}`;
    this.min.style.position = 'absolute';
    // this.min.style.left = '24px';
    this.max = document.createElement('SPAN');
    this.max.textContent = `${this._max}`;
    this.max.style.position = 'absolute';
    // this.max.style.left = '316px';
  }

  init() {
    this.container = document.getElementById(this._parentId);
    this.container.append(this.scale);
    this.scale.append(this.min);
    this.scale.append(this.max);
    // console.log(this.min.offsetWidth);
    // this.min.style.left = `${this.scale.offsetLeft - this.min.offsetWidth / 2}px`;
    this.min.style.left = `${this.scale.offsetLeft - this.min.offsetWidth / 2}px`;
    // this.max.style.left = `${this.scale.offsetWidth + 16}px`;
    this.max.style.left = `${this.scale.offsetWidth + this.scale.offsetLeft - this.max.offsetWidth / 2}px`;
    this.mark = (this._max - this._min) / this._step;
    // console.log(this.scale.offsetLeft);
    // console.log(this.scale.offsetWidth);
    // console.log(this.mark);
    for (let i = 1; i < this.mark; i++) {
      // console.log('loop for');
      this.elem = document.createElement('SPAN');
      this.elem.textContent = `${this._step * i + this._min}`;
      // console.log(this.elem.textContent);
      this.elem.style.position = 'absolute';
      this.max.insertAdjacentElement('beforebegin', this.elem);
      if (Number(this.elem.textContent) < 100) {
        // this.elem.style.left = `${Number(this.elem.textContent) * this.scale.offsetWidth / this._max + 20}px`;
        this.elem.style.left = `${(((Number(this.elem.textContent) - this._min)
          * this.scale.offsetWidth) / (this._max - this._min))
          + this.scale.offsetLeft - this.elem.offsetWidth / 2}px`;
      } else if (Number(this.elem.textContent) < 1000) {
        // this.elem.style.left = `${Number(this.elem.textContent) * this.scale.offsetWidth / this._max + 16}px`;
        this.elem.style.left = `${(((Number(this.elem.textContent) - this._min)
          * this.scale.offsetWidth) / (this._max - this._min))
          + this.scale.offsetLeft - this.elem.offsetWidth / 2}px`;
      }
      // this.max.insertAdjacentElement('beforebegin', this.elem);
    }
  }

  destroy() {
    this.scale.remove();
  }
}
