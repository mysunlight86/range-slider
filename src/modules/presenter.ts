// eslint-disable-next-line no-unused-vars
import { Subject, Model } from './model';
// eslint-disable-next-line no-unused-vars
import View from './view';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  mode?: string,
  hasInterval?: boolean,
  values?: number[]
};

/**
* Интерфейс Наблюдателя объявляет метод уведомления, который издатели
* используют для оповещения своих подписчиков.
*/
interface Observer {
  // Получить обновление от субъекта.
  update(subject: Subject): void;
}

/**
* Конкретные Наблюдатели реагируют на обновления, выпущенные Издателем, к
* которому они прикреплены.
*/
// class ConcreteObserverA implements Observer {
//   public update(subject: Subject): void {
//     if (subject instanceof ConcreteSubject && subject.state < 3) {
//       console.log('ConcreteObserverA: Reacted to the event.');
//     }
//   }
// }

class Presenter implements Observer {
  private bindedOnMouseMove;
  private bindedOnMouseUp;
  private bindedOnMouseDown;
  private bindedOnResize;
  _selector: string;
  _options: optionsType;
  _min: number;
  _max: number;
  _step: number;
  _mode: string;
  _hasInterval: boolean;
  _values: number[];
  lineElem: HTMLElement;
  thumbElem: HTMLElement;
  valueElem: HTMLElement;
  minThumbInterval: HTMLElement;
  maxThumbInterval: HTMLElement;
  minValueInterval: HTMLElement;
  maxValueInterval: HTMLElement;

  private _view: View;
  private _model: Model;

  constructor(view: View, model: Model) {
    this.bindedOnMouseMove = this.onMouseMove.bind(this);
    this.bindedOnMouseUp = this.onMouseUp.bind(this);
    this.bindedOnMouseDown = this.onMouseDown.bind(this);
    this.bindedOnResize = this.onResize.bind(this);

    this._model = model;
    this._options = this._model.getData();
    this._min = this._options.min;
    this._max = this._options.max;
    this._step = this._options.step;
    this._mode = this._options.mode;
    this._hasInterval = this._options.hasInterval;
    this._values = this._options.values;

    this._view = view;
    this.lineElem = this._view.initSliderLine();
    if (this._hasInterval) {
      this.minThumbInterval = this._view.initSliderThumb(this._values[0]);
      this.maxThumbInterval = this._view.initSliderThumb(this._values[1]);

      this.minValueInterval = this._view.initSliderValue(this._values[0]);
      this.maxValueInterval = this._view.initSliderValue(this._values[1]);

      this._view.fillSliderLine(Number(this.maxThumbInterval.style.left.slice(0, -2)),
        Number(this.minThumbInterval.style.left.slice(0, -2)));
    } else {
      this.thumbElem = this._view.initSliderThumb(this._values[0]);
      this.valueElem = this._view.initSliderValue(this._values[0]);
      this._view.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
    }
    this._view.initSliderScale();

    this.sliderRun();
    // this.setData();
    // this._model.setData(this._options);
  }

  onMouseMove(event: MouseEvent): void {
    if (this._hasInterval) {
      const delta = this.minThumbInterval.offsetWidth / 2;
      let thumbPoint = event.clientX - this.lineElem.getBoundingClientRect().left - delta;

      // The cursor is out of the slider, then you need to put the slider within its borders.
      if (thumbPoint < -delta) {
        thumbPoint = -delta;
      }

      const rightEdge = this.lineElem.offsetWidth - delta;
      if (thumbPoint > rightEdge) {
        thumbPoint = rightEdge;
      }

      if (thumbPoint <= this.minThumbInterval.offsetLeft) {
        this.minThumbInterval.style.left = `${thumbPoint}px`;
        this._values[0] = this._view.getSliderValue(this.minThumbInterval);
        this.minValueInterval.textContent = `${this._values[0]}`;
        this.minValueInterval.style.left = `${thumbPoint - (this.minValueInterval.offsetWidth
          - this.minThumbInterval.offsetWidth) / 2}px`;
      } else if (thumbPoint >= this.maxThumbInterval.offsetLeft) {
        this.maxThumbInterval.style.left = `${thumbPoint}px`;
        this._values[1] = this._view.getSliderValue(this.maxThumbInterval);
        this.maxValueInterval.textContent = `${this._values[1]}`;
        this.maxValueInterval.style.left = `${thumbPoint - (this.maxValueInterval.offsetWidth
          - this.maxThumbInterval.offsetWidth) / 2}px`;
      } else {
        let distance = this.maxThumbInterval.offsetLeft - this.minThumbInterval.offsetLeft;

        if (thumbPoint - this.minThumbInterval.offsetLeft <= distance / 2) {
          if (distance > 0) {
            this.minThumbInterval.style.left = `${thumbPoint}px`;
            this._values[0] = this._view.getSliderValue(this.minThumbInterval);
            this.minValueInterval.textContent = `${this._values[0]}`;
            this.minValueInterval.style.left = `${thumbPoint - (this.minValueInterval.offsetWidth
              - this.minThumbInterval.offsetWidth) / 2}px`;
            distance = this.maxThumbInterval.offsetLeft - this.minThumbInterval.offsetLeft;
          }
        } else if (distance > 0) {
          this.maxThumbInterval.style.left = `${thumbPoint}px`;
          this._values[1] = this._view.getSliderValue(this.maxThumbInterval);
          this.maxValueInterval.textContent = `${this._values[1]}`;
          this.maxValueInterval.style.left = `${thumbPoint - (this.maxValueInterval.offsetWidth
            - this.maxThumbInterval.offsetWidth) / 2}px`;
          distance = this.maxThumbInterval.offsetLeft - this.minThumbInterval.offsetLeft;
        }
      }

      this._view.fillSliderLine(Number(this.maxThumbInterval.style.left.slice(0, -2)),
        Number(this.minThumbInterval.style.left.slice(0, -2)));
    } else {
      const delta = this.thumbElem.offsetWidth / 2;
      let thumbPoint = event.clientX - this.lineElem.getBoundingClientRect().left - delta;

      // The cursor is out of the slider, then you need to put the slider within its borders.
      if (thumbPoint < -delta) {
        thumbPoint = -delta;
      }
      const rightEdge = this.lineElem.offsetWidth - delta;
      if (thumbPoint > rightEdge) {
        thumbPoint = rightEdge;
      }

      this.thumbElem.style.left = `${thumbPoint}px`;
      this.lineElem.style.background = `linear-gradient(to right, red ${thumbPoint}px, #e5e5e5 ${thumbPoint}px)`;
      this.valueElem.style.left = `${thumbPoint - (this.valueElem.offsetWidth - this.thumbElem.offsetWidth) / 2}px`;

      // const val = Math.round(((thumbPoint
      //   + delta) * (this._max - this._min)) / this.lineElem.offsetWidth + this._min);
      // const val = this._view.getSliderValue(this.thumbElem);

      // const data = this._model.getData();
      // this._values[0] = val;
      this._values[0] = this._view.getSliderValue(this.thumbElem);
      // this._model.setData(data);
      // this._model.setData(this._options);

      // this.valueElem.textContent = `${Math.round(((thumbPoint
      //   + delta) * (this._max - this._min)) / this.lineElem.offsetWidth + this._min)}`;
      this.valueElem.textContent = `${this._values[0]}`;
    }
  }

  onMouseUp(): void {
    document.removeEventListener('mouseup', this.bindedOnMouseUp);
    document.removeEventListener('mousemove', this.bindedOnMouseMove);
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();


    const marker = event.target;
    console.log(marker);

    document.addEventListener('mousemove', this.bindedOnMouseMove);
    document.addEventListener('mouseup', this.bindedOnMouseUp);
  }

  static returnFalse() {
    return false;
  }

  sliderRun() {
    this.lineElem.addEventListener('click', this.bindedOnMouseMove);
    window.addEventListener('resize', this.bindedOnResize);
    if (this._hasInterval) {
      this.minThumbInterval.addEventListener('mousedown', this.bindedOnMouseDown);
      this.minThumbInterval.addEventListener('dragstart', Presenter.returnFalse);
      this.maxThumbInterval.addEventListener('mousedown', this.bindedOnMouseDown);
      this.maxThumbInterval.addEventListener('dragstart', Presenter.returnFalse);
    } else {
      this.thumbElem.addEventListener('mousedown', this.bindedOnMouseDown);
      this.thumbElem.addEventListener('dragstart', Presenter.returnFalse);
    }
  }

  destroy() {
    this.thumbElem.removeEventListener('mousedown', this.bindedOnMouseDown);
    this.lineElem.removeEventListener('click', this.bindedOnMouseMove);
    this.thumbElem.removeEventListener('dragstart', Presenter.returnFalse);
    window.removeEventListener('resize', this.bindedOnResize);
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

  onResize() {
    // this.setData();
    this._view.setOptions(this._options);
    this._view.updateSliderScale();
    if (this._hasInterval) {
      this._view.updateSliderThumb(this.minThumbInterval, this._values[0]);
      this._view.updateSliderThumb(this.maxThumbInterval, this._values[1]);
      this._view.fillSliderLine(Number(this.maxThumbInterval.style.left.slice(0, -2)),
        Number(this.minThumbInterval.style.left.slice(0, -2)));
      this._view.updateSliderValue(this.minValueInterval, this.minThumbInterval);
      this._view.updateSliderValue(this.maxValueInterval, this.maxThumbInterval);
    } else {
      this._view.updateSliderThumb(this.thumbElem, this._values[0]);
      this._view.fillSliderLine(Number(this.thumbElem.style.left.slice(0, -2)));
      this._view.updateSliderValue(this.valueElem, this.thumbElem);
    }
  }

  update(model: Model) {
    this._options = model.getData();
    this.onResize();
    console.log('ModelObserver: Reacted to the event.');
  }
}

// class ViewObserver implements Observer {
//   update(view) {

//   }
// }

// class ConcreteObserverB implements Observer {
//   isSubjectSatisfies(subject) {
//     return subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2);
//   }

//   public update(subject: Subject): void {
//     if (this.isSubjectSatisfies(subject)) {
//       console.log('ConcreteObserverB: Reacted to the event.');
//     }
//   }
// }

// export { Observer, ConcreteObserverA, ConcreteObserverB, Presenter };
// eslint-disable-next-line no-undef
export { Observer, Presenter };
