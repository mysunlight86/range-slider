export default class TipValue {
  private _parentId: string;
  container: HTMLElement;
  tipValue: HTMLElement;

  constructor(parentId) {
    this._parentId = parentId;
  };

  init() {
    this.container = document.getElementById(this._parentId);
    this.tipValue = document.createElement('DIV');
    this.tipValue.classList.add('tip-value');
    this.tipValue.setAttribute('id', 'tip-value');
    this.container.append(this.tipValue);
  }

  destroy() {
    this.tipValue.remove();
  }
}
