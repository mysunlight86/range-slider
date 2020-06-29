export default class SliderLine {
  private _selector: string;
  lineElem: HTMLElement;

  constructor(elemId: string) {
    this._selector = elemId;
  }

  init() {
    this.lineElem = document.getElementById(this._selector);
    this.lineElem.classList.add('slider-body');
    return this.lineElem;
  }
}
