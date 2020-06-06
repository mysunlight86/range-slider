class Scale {
  container = document.getElementById('range-slider');
  minValue = 0;
  maxValue = 300;
  step = 137;
  mark = (this.maxValue - this.minValue) / this.step;
  // position = document.getElementById('tip-value').style.left;
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
    // this.min.style.border = '1px solid black';
    this.max = document.createElement('SPAN');
    this.max.textContent = `${this.maxValue}`;
    this.max.style.position = 'absolute';
    this.max.style.left = '316px';
    // this.max.style.left = `${Number(this.max.textContent) - 45}px`;
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
      this.elem = document.createElement('SPAN');
      this.elem.textContent = `${this.step * i}`;
      // this.elem.style.border = '1px solid black';
      this.elem.style.position = 'absolute';
      // this.elem.style.left = `${this.elem.offsetLeft - 28}px`;
      // this.elem.style.left = '130px';
      // console.log(this.position);
      // this.elem.style.textAlign = 'center';
      /* if (i === 1) {
        this.elem.style.left = `${Number(this.elem.textContent) - 20}px`;
      } else {
        this.elem.style.left = `${Number(this.elem.textContent) - 44}px`;
      } */
      if (Number(this.elem.textContent) < 100) {
        this.elem.style.left = `${Number(this.elem.textContent) + 20}px`;
      } else if (Number(this.elem.textContent) < 1000) {
        this.elem.style.left = `${Number(this.elem.textContent) + 16}px`;
      }
      /* if (this.mark <= 3) {
        this.elem.style.left = `${Number(this.elem.textContent) + 16}px`;
      } else if (i === 1) {
        this.elem.style.left = `${Number(this.elem.textContent) + 20}px`;
      } else {
        this.elem.style.left = `${Number(this.elem.textContent) + 16}px`;
      } */
      // if (i === 1) {
      //   this.elem.style.left = `${Number(this.elem.textContent) - 16}px`;
      // } else if (i === 2) {
      //   this.elem.style.left = `${Number(this.elem.textContent) - 32}px`;
      // } else {
      //   this.elem.style.left = `${Number(this.elem.textContent) - 56}px`;
      // }
      // this.elem.style.left = `${Number(this.elem.textContent) - 20}px`;
      /* if (i === 1) {
        this.elem.style.left = `${this.elem.offsetLeft + 8}px`;
      } else {
        this.elem.style.left = `${this.elem.offsetLeft + 12}px`;
      } */
      this.max.insertAdjacentElement('beforebegin', this.elem);
    }
  }

  destroy() {
    this.scale.remove();
  }
}

export default Scale;
