class Scale {
  container = document.getElementById('range-slider');
  minValue = 0;
  maxValue = 300;
  step = 50;
  mark = (this.maxValue - this.minValue) / this.step;
  scale: HTMLElement;
  min: HTMLElement;
  max: HTMLElement;
  elem: HTMLElement;

  constructor() {
    this.scale = document.createElement('DIV');
    this.scale.classList.add('scale');
    this.min = document.createElement('SPAN');
    this.min.textContent = `${this.minValue}`;
    this.min.style.position = 'absolute';
    this.min.style.left = '24px';
    this.max = document.createElement('SPAN');
    this.max.textContent = `${this.maxValue}`;
    this.max.style.position = 'absolute';
    this.max.style.left = '316px';
  }

  init() {
    this.container.append(this.scale);
    this.scale.append(this.min);
    this.scale.append(this.max);
    console.log(this.max.offsetWidth);
    for (let i = 1; i < this.mark; i++) {
      this.elem = document.createElement('SPAN');
      this.elem.textContent = `${this.step * i}`;
      this.elem.style.position = 'absolute';
      if (Number(this.elem.textContent) < 100) {
        this.elem.style.left = `${Number(this.elem.textContent) + 20}px`;
      } else if (Number(this.elem.textContent) < 1000) {
        this.elem.style.left = `${Number(this.elem.textContent) + 16}px`;
      }
      this.max.insertAdjacentElement('beforebegin', this.elem);
    }
  }

  destroy() {
    this.scale.remove();
  }
}

export default Scale;
