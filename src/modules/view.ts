import SliderBody from './sliderBody';
import SliderThumb from './sliderThumb';
import TipValue from './tipValue';
import Scale from './scale';

export default class View {
  private _parentId: string;
  sliderLineId: string;
  _minValue: number;
  _maxValue: number;
  _stepValue: number;

  constructor(parentId?) {
    this._parentId = parentId;
  };

  showSlider() {
    const sliderBody: SliderBody = new SliderBody(this._parentId);
    this.sliderLineId = sliderBody.init();
    const sliderThumb: SliderThumb = new SliderThumb(this.sliderLineId);
    sliderThumb.init();
    const tipValue: TipValue = new TipValue(this.sliderLineId);
    tipValue.init();
  }

  showScale(min: number, max: number, step: number) {
    this._minValue = min;
    this._maxValue = max;
    this._stepValue = step;
    // console.log(this._parentId);
    const scale: Scale = new Scale(this._parentId, this._minValue, this._maxValue, this._stepValue);
    scale.init();
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
