export default class SliderBody {
  private _parentId: string;
  container: HTMLElement;
  bodySlider: HTMLElement;
  sliderLine = 'slider-body';

  constructor(parentId) {
    this._parentId = parentId;
  };

  init() {
    this.container = document.getElementById(this._parentId);
    this.bodySlider = document.createElement('DIV');
    this.bodySlider.classList.add('slider-body');
    this.bodySlider.setAttribute('id', this.sliderLine);
    this.container.append(this.bodySlider);
    return this.sliderLine;
  }

  destroy() {
    this.bodySlider.remove();
  }

  // getWidth() {
  //   return this.bodySlider.offsetWidth;
  // }
}
