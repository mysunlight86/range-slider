// import { Subject } from './app';
import Subject from './app';
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
      return console.log('Model: Presenter has been attached already.');
    }

    console.log('Model: Attached a presenter.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  /**
   * Запуск обновления в каждом подписчике.
   */
  public notify(): void {
    console.log('Model: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  getData(options: options) {
    this._min = options.min;
    this._max = options.max;
    this._step = options.step;
    this._kind = options.kind;
    this._isBasic = options.isBasic;
    this._values = options.values;
    console.log(`Model: My state has just changed`);
    this.notify();
  }

  // calcUnit() {
  //   console.log(`Model: My state has just changed`);

  //   return {
  //     min: this._min,
  //     max: this._max,
  //     step: this._step
  //   };
  // }
}
