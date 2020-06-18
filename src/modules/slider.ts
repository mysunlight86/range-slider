import View from './view';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  kind?: string,
  isBasic?: boolean,
  values?: number[]
};

export default class Slider {
  _selector: string;
  _options: optionsType;

  _min: number;
  _max: number;
  _step: number;
  _kind: string;
  _isBasic: boolean;
  _values: number[];

  constructor(selector: string, options?: optionsType) {
    this._selector = selector;
    if (!options) options = {}
    this._min = options.min ? options.min : 0;
    this._max = options.max ? options.max : 300;
    this._step = options.step ? options.step : 57;
    this._kind = options.kind ? options.kind : 'horizontal';
    this._isBasic = options.isBasic ? options.isBasic : true;
    this._values = options.values ? options.values : [38];
  }

  sliderStart() {
    this._options = {
      min: this._min,
      max: this._max,
      step: this._step,
      kind: this._kind,
      isBasic: this._isBasic,
      values: this._values
    };
    console.log(this._options);
    // if (this._isBasic) {

    // }
    // console.log(this._selector);
    const view: View = new View(this._selector, this._options);
    view.showSlider();
  }
}
