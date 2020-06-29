export default class SliderValue {
  private _parentElement: HTMLElement;
  valueElem: HTMLElement;

  constructor(parentElement: HTMLElement) {
    this._parentElement = parentElement;
  }

  init() {
    this.valueElem = document.createElement('DIV');
    this.valueElem.classList.add('tip-value');
    this._parentElement.append(this.valueElem);
    return this.valueElem;
  }
}
