import SliderBody from './sliderBody';
import SliderThumb from './sliderThumb';

export default class View {
  private _parentId: string;
  sliderLineId: string;

  constructor(parentId?) {
    this._parentId = parentId;
  };

  show() {
    const sliderBody: SliderBody = new SliderBody(this._parentId);
    this.sliderLineId = sliderBody.init();
    const sliderThumb: SliderThumb = new SliderThumb(this.sliderLineId);
    sliderThumb.init();
  }

  // sliderLength: number;
  // init() {
  //   const sliderBody: SliderBody = new SliderBody();
  //   sliderBody.init();
  // }

  // getWidthSlider() {
  //   const sliderBody: SliderBody = new SliderBody();
  //   this.sliderLength = sliderBody.getWidth();
  //   return this.sliderLength;
  // }
}
