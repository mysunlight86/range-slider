class Scale {
  container = document.getElementById('range-slider');
  minValue = 0;
  maxValue = 300;
  step = 50;
  mark = (this.maxValue - this.minValue) / this.step;
  // position = document.getElementById('tip-value').style.left;
  scale: HTMLElement;
  min: HTMLElement;
  max: HTMLElement;
  elem: HTMLElement;

  constructor() {
    this.scale = document.createElement('DIV');
    this.scale.classList.add('scale');
    this.min = document.createElement('DIV');
    this.min.textContent = `${this.minValue}`;
    this.min.style.position = 'relative';
    this.min.style.left = '-4px';
    // this.min.style.border = '1px solid black';
    this.max = document.createElement('DIV');
    this.max.textContent = `${this.maxValue}`;
    this.max.style.position = 'relative';
    this.max.style.left = '12px';
    // this.max.style.border = '1px solid black';
    // this.max.style.textAlign = 'right';
  }

  init() {
    this.container.append(this.scale);
    // this.scale.style.gridTemplateColumns = `repeat(${this.mark + 1}, 1fr)`;
    this.scale.append(this.min);
    this.scale.append(this.max);
    console.log(this.max.offsetWidth);
    for (let i = 1; i < this.mark; i++) {
      this.elem = document.createElement('DIV');
      this.elem.textContent = `${this.step * i}`;
      // this.elem.style.border = '1px solid black';
      this.elem.style.position = 'relative';
      // this.elem.style.left = `${this.elem.offsetLeft - 28}px`;
      // this.elem.style.left = '20px';
      // console.log(this.position);
      // this.elem.style.textAlign = 'center';
      if (i === 1) {
        this.elem.style.left = `${this.elem.offsetLeft + 8}px`;
      } else {
        this.elem.style.left = `${this.elem.offsetLeft + 12}px`;
      }
      this.max.insertAdjacentElement('beforebegin', this.elem);
    }
  }

  destroy() {
    this.scale.remove();
  }
}

export default Scale;
