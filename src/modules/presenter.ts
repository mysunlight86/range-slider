// eslint-disable-next-line no-unused-vars
import Subject from './app';
// eslint-disable-next-line no-unused-vars
import Model from './model';
// eslint-disable-next-line no-unused-vars
import View from './view';

type optionsType = {
  min?: number,
  max?: number,
  step?: number,
  kind?: string,
  isBasic?: boolean,
  values?: number[]
};

/**
* Интерфейс Наблюдателя объявляет метод уведомления, который издатели
* используют для оповещения своих подписчиков.
*/
interface Observer {
  // Получить обновление от субъекта.
  communicate(subject: Subject): void;
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
  // modelOptions: {min: number, max: number, step: number};
  private bindedOnMouseMove;
  private bindedOnMouseUp;
  private bindedOnMouseDown;
  private bindedOnResize;
  _selector: string;
  _options: optionsType;
  lineElem: HTMLElement;
  thumbElem: HTMLElement;
  valueElem: HTMLElement;

  private view: View;
  private _model: Model;

  constructor(view: View, model: Model) {
    this.bindedOnMouseMove = this.onMouseMove.bind(this);
    this.bindedOnMouseUp = this.onMouseUp.bind(this);
    this.bindedOnMouseDown = this.onMouseDown.bind(this);
    // this.bindedOnResize = Presenter.onResize.bind(this);
    this.bindedOnResize = this.onResize.bind(this);
    this.view = view;
    this.lineElem = this.view.init();
    this.view.showSliderLine();
    this.thumbElem = view.showSliderThumb();

    this._options = model.getData();
    this.valueElem = view.showSliderValue();
    this._model = model;

    this.sliderRun();
  }

  // private bindedOnMouseUp = this.onMouseUp.bind(this);

  onMouseMove(event: MouseEvent): void {
    const delta = this.thumbElem.offsetWidth / 2;
    let thumbPoint = event.clientX - this.lineElem.getBoundingClientRect().left - delta;
    // const min = this._options.min;
    const {
      min,
      max,
      // step,
      // kind,
      // isBasic,
      // values
    } = this._options;

    // курсор вышел из слайдера => оставить бегунок в его границах.
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

    const val = Math.round(((thumbPoint
      + delta) * (max - min)) / this.lineElem.offsetWidth + min);

    const data = this._model.getData();
    data.values[0] = val;
    const selector = this._model.getSelector();
    this._model.setData(data, selector);

    this.valueElem.textContent = `${Math.round(((thumbPoint
      + delta) * (max - min)) / this.lineElem.offsetWidth + min)}`;
  }

  onMouseUp(): void {
    document.removeEventListener('mouseup', this.bindedOnMouseUp);
    document.removeEventListener('mousemove', this.bindedOnMouseMove);
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();

    document.addEventListener('mousemove', this.bindedOnMouseMove);
    document.addEventListener('mouseup', this.bindedOnMouseUp);
  }

  static returnFalse() {
    return false;
  }

  sliderRun() {
    this.thumbElem.addEventListener('mousedown', this.bindedOnMouseDown);
    this.lineElem.addEventListener('click', this.bindedOnMouseMove);
    this.thumbElem.addEventListener('dragstart', Presenter.returnFalse);
    window.addEventListener('resize', this.bindedOnResize);
  }

  destroy() {
    this.thumbElem.removeEventListener('mousedown', this.bindedOnMouseDown);
    this.lineElem.removeEventListener('click', this.bindedOnMouseMove);
    this.thumbElem.removeEventListener('dragstart', Presenter.returnFalse);
    window.removeEventListener('resize', this.bindedOnResize);
  }

  // static onResize(view: View) {
  //   view.showSliderLine();
  //   this.thumbElem = view.showSliderThumb();
  //   this.valueElem = view.showSliderValue();
  // }

  onResize() {
    this.view.setOptions(this._options);

    this.view.showSliderThumb();
    this.view.showSliderValue();

    // this function create new elemnts
    // TODO: use exist elements
    // this.view.showSliderScale();

    console.log(this.lineElem.offsetWidth);
  }

  communicate(model: Model) {
    this._selector = model.getSelector();
    this._options = model.getData();
    this.view.setOptions(this._options);
    this.thumbElem = this.view.showSliderThumb();
    this.valueElem = this.view.showSliderValue();

    // this function create new elemnts
    // TODO: use exist elements
    // this.view.showSliderScale();

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
