import { Subject } from './app';
import { Observer } from './presenter';

type options = {
  min?: number;
  max?: number;
  step?: number;
  kind?: string;
  isBasic?: boolean;
};

export default class Model implements Subject {
  private _min = 0;
  private _max = 300;
  private _step = 50;
  private _kind = 'horizontal';
  private _isBasic = true;
  constructor(options: options) {
    this._min = options.min ? options.min : this._min;
    this._max = options.max ? options.max : this._max;
    this._step = options.step ? options.step : this._step;
    this._kind = options.kind ? options.kind : this._kind;
    this._isBasic = options.isBasic ? options.isBasic : this._isBasic;
  }

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
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
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
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  calcUnit() {

  }
}
