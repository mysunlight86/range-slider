export default class SliderThumb {
  private _parentElement: HTMLElement;
  thumbElem: HTMLElement;

  constructor(parentElement: HTMLElement) {
    this._parentElement = parentElement;
  }

  init() {
    this.thumbElem = document.createElement('DIV');
    this.thumbElem.classList.add('slider-thumb');
    this._parentElement.append(this.thumbElem);
    return this.thumbElem;
  }
}
