class SliderBody {
  private _parentId: string;
  container: HTMLElement;
  bodySlider: HTMLElement;

  constructor(parentId) {
    this._parentId = parentId;
  };

  init() {
    this.container = document.getElementById(this._parentId);
    this.bodySlider = document.createElement('DIV');
    this.bodySlider.classList.add('slider-body');
    this.bodySlider.setAttribute('id', 'slider-body');
    this.container.append(this.bodySlider);
  }

  destroy() {
    this.bodySlider.remove();
  }

  // getWidth() {
  //   return this.bodySlider.offsetWidth;
  // }
}

export default SliderBody;
