// eslint-disable-next-line no-unused-vars
import Subject from './app';
// eslint-disable-next-line no-unused-vars
import { Observer } from './presenter';

type options = {
  min?: number;
  max?: number;
  step?: number;
  kind?: string;
  isBasic?: boolean;
  values?: number[];
};

export default class Model implements Subject {
  private _min: number;
  private _max: number;
  private _step: number;
  private _kind: string;
  private _isBasic: boolean;
  private _values: number[];
  _selector: string;

  // constructor(options?: options) {
  //   if (!options) options = {}
  //   this._min = options.min ? options.min : 0;
  //   this._max = options.max ? options.max : 300;
  //   this._step = options.step ? options.step : 50;
  //   this._kind = options.kind ? options.kind : 'horizontal';
  //   this._isBasic = options.isBasic ? options.isBasic : true;
  // this.notify();
  // }

  /**
   * @type {Observer[]} Список подписчиков. В реальной жизни список
   * подписчиков может храниться в более подробном виде (классифицируется по
   * типу события и т.д.)
   */
  private observers: Observer[] = [];

  /**
   * Методы управления подпиской.
   */
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log('Model: Presenter has been attached already.');
    }

    console.log('Model: Attached a presenter.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  /**
   * Запуск обновления в каждом подписчике.
   */
  public notify(): void {
    console.log('Model: Notifying observers...');
    // eslint-disable-next-line no-restricted-syntax
    for (const observer of this.observers) {
      observer.communicate(this);
    }
  }

  setData(options: options, selector: string) {
    this._min = options.min;
    this._max = options.max;
    this._step = options.step;
    this._kind = options.kind;
    this._isBasic = options.isBasic;
    this._values = options.values;
    this._selector = selector;
    console.log('Model: My state has just changed');
    this.notify();
  }

  getSelector() {
    return this._selector;
  }

  getData() {
    return {
      min: this._min,
      max: this._max,
      step: this._step,
      kind: this._kind,
      isBasic: this._isBasic,
      values: this._values,
    };
  }
}
