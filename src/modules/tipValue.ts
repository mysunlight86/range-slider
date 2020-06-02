class TipValue {
  container = document.getElementById('slider-body');
  tipValue: HTMLElement;

  constructor() {
    this.tipValue = document.createElement('DIV');
    this.tipValue.classList.add('tip-value');
    this.tipValue.setAttribute('id', 'tip-value');
  }

  init() {
    this.container.append(this.tipValue);
  }

  destroy() {
    this.tipValue.remove();
  }
}

export default TipValue;
