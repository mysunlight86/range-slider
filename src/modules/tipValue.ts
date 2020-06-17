export default class TipValue {
  private _selector: string;
  container: HTMLElement;
  tipValue: HTMLElement;

  constructor(selector: string) {
    this._selector = selector;
  };

  init() {
    this.container = document.querySelector(this._selector);
    this.tipValue = document.createElement('DIV');
    this.tipValue.classList.add('tip-value');
    this.tipValue.setAttribute('id', 'tip-value');
    this.container.append(this.tipValue);
  }

  destroy() {
    this.tipValue.remove();
  }
}
