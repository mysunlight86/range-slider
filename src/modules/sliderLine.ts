export default class SliderLine {
  private _elemId: string;
  lineElem: HTMLElement;

  constructor(elemId: string) {
    this._elemId = elemId;
  }

  init() {
    this.lineElem = document.getElementById(this._elemId);
    this.lineElem.classList.add('slider-body');
    return this.lineElem;
  }
}
