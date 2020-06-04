class Scale {
  container = document.getElementById('range-slider');
  minValue = 0;
  maxValue = 300;
  step = 100;
  mark = (this.maxValue - this.minValue) / this.step;
  scale: HTMLElement;
  min: HTMLElement;
  max: HTMLElement;
  elem: HTMLElement;

  constructor() {
    this.scale = document.createElement('DIV');
    this.scale.classList.add('scale');
    this.min = document.createElement('DIV');
    this.min.textContent = `${this.minValue}`;
    this.max = document.createElement('DIV');
    this.max.textContent = `${this.maxValue}`;
  }

  init() {
    this.container.append(this.scale);
    this.scale.append(this.min);
    this.scale.append(this.max);
    for (let i = 1; i < this.mark; i++) {
      this.elem = document.createElement('DIV');
      this.elem.textContent = `${this.step * i}`;
      this.max.insertAdjacentElement('beforebegin', this.elem);
    }
  }

  destroy() {
    this.scale.remove();
  }
}

export default Scale;
