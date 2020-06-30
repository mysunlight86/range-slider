// eslint-disable-next-line no-unused-vars
import { Observer } from './presenter';

type optionsType = {
  min?: number;
  max?: number;
  step?: number;
  mode?: string;
  hasInterval?: boolean;
  values?: number[];
};

/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
interface Subject {
  // Присоединяет наблюдателя к издателю.
  attach(observer: Observer): void;

  // Отсоединяет наблюдателя от издателя.
  detach(observer: Observer): void;

  // Уведомляет всех наблюдателей о событии.
  notify(): void;
// eslint-disable-next-line semi
}

class Model implements Subject {
  _min: number;
  _max: number;
  _step: number;
  _mode: string;
  _hasInterval: boolean;
  _values: number[];

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
      // console.log('Model: Presenter has been attached already.');
    }

    // console.log('Model: Attached a presenter.');
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      // console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    // console.log('Subject: Detached an observer.');
  }

  /**
   * Запуск обновления в каждом подписчике.
   */
  public notify(): void {
    // console.log('Model: Notifying observers...');
    // eslint-disable-next-line no-restricted-syntax
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setData(options: optionsType) {
    this._min = options.min;
    this._max = options.max;
    this._step = options.step;
    this._mode = options.mode;
    this._hasInterval = options.hasInterval;
    this._values = options.values;
    // console.log('Model: My state has just changed');
    // this.notify();
    this.checkValues();
  }

  checkValues() {
    if (this._min > this._max) {
      const temp = this._min;
      this._min = this._max;
      this._max = temp;
    }

    if (this._step > (this._max - this._min)) {
      this._step = this._max;
    }

    if (this._hasInterval) {
      if (this._values[0] > this._values[1]) {
        const temp = this._values[0];
        // eslint-disable-next-line prefer-destructuring
        this._values[0] = this._values[1];
        this._values[1] = temp;
      } else if (this._values[0] === this._values[1]) {
        this._values[1] += this._step;
      }
    }

    if ((this._values[0] < this._min) || (this._values[0] > this._max)) {
      this._values[0] = this._min;
    }

    if ((this._values[1] < this._min) || (this._values[1] > this._max)) {
      this._values[1] = this._max;
    }
    this.notify();
  }

  getData() {
    // this.checkValues();
    return {
      min: this._min,
      max: this._max,
      step: this._step,
      mode: this._mode,
      hasInterval: this._hasInterval,
      values: this._values,
    };
  }
}

// eslint-disable-next-line no-undef
export { Subject, Model };
