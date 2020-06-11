import SliderBody from './sliderBody';

export default class View {
  sliderLength: number;
  // init() {
  //   const sliderBody: SliderBody = new SliderBody();
  //   sliderBody.init();
  // }

  getWidthSlider() {
    const sliderBody: SliderBody = new SliderBody();
    this.sliderLength = sliderBody.getWidth();
    return this.sliderLength;
  }
}
