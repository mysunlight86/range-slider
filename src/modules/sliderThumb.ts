class SliderThumb {
  private _parentId: string;
  container: HTMLElement;
  thumbSlider: HTMLElement;

  constructor(parentId) {
    this._parentId = parentId;
  };

  init() {
    this.container = document.getElementById(this._parentId);
    this.thumbSlider = document.createElement('DIV');
    this.thumbSlider.classList.add('slider-thumb');
    this.thumbSlider.setAttribute('id', 'slider-thumb');
    this.container.append(this.thumbSlider);
  }

  destroy() {
    this.thumbSlider.remove();
  }
}

export default SliderThumb;
