import { Presenter } from './presenter';
import View from './view';
import { Model } from './model';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  mode?: string,
  hasInterval?: boolean,
  values?: number[]
};

export default class Slider {
  _selector: string;
  _options: optionsType;

  _min = 0;
  _max = 300;
  _step = 82;
  _mode = 'horizontal';
  _hasInterval = true;
  _values = [this._step];

  constructor(elemId: string, options?: optionsType) {
    this._selector = elemId;
    if (options) {
      this._min = options.min ? options.min : this._min;
      this._max = options.max ? options.max : this._max;
      this._step = options.step ? options.step : this._step;
      this._mode = options.mode ? options.mode : this._mode;
      this._hasInterval = options.hasInterval ? options.hasInterval : this._hasInterval;
      this._values = options.values ? options.values : [this._step];
    }
  }

  setData() {
    this._options = {
      min: this._min,
      max: this._max,
      step: this._step,
      mode: this._mode,
      hasInterval: this._hasInterval,
      values: this._values,
    };
  }

  init() {
    const model: Model = new Model();
    this.setData();
    model.setData(this._options);
    const view = new View(this._selector, this._options);
    const presenter = new Presenter(view, model);
    model.attach(presenter);
  }
}
