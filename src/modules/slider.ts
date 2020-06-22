import { Presenter } from './presenter';
import Model from './model';

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

  _min = 0;
  _max = 300;
  _step = 57;
  _kind = 'horizontal';
  _isBasic = true;
  _values = [this._step];

  constructor(elemId: string, options?: optionsType) {
    this._selector = elemId;
    if (options) {
      this._min = options.min ? options.min : this._min;
      this._max = options.max ? options.max : this._max;
      this._step = options.step ? options.step : this._step;
      this._kind = options.kind ? options.kind : this._kind;
      this._isBasic = options.isBasic ? options.isBasic : this._isBasic;
      this._values = options.values ? options.values : [this._step];
    }
  }

  setData() {
    this._options = {
      min: this._min,
      max: this._max,
      step: this._step,
      kind: this._kind,
      isBasic: this._isBasic,
      values: this._values,
    };
  }

  init() {
    const model: Model = new Model();
    const presenter = new Presenter();
    model.attach(presenter);
    this.setData();
    console.log(this._options);
    model.setData(this._options, this._selector);
  }
}
