// eslint-disable-next-line no-unused-vars
import Subject from './app';
// eslint-disable-next-line no-unused-vars
import Model from './model';
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
  _selector: string;
  _options: optionsType;

  communicate(model: Model) {
    this._selector = model.getSelector();
    this._options = model.getData();
    const view: View = new View(this._selector, this._options);
    view.init();
    view.showSliderLine();
    view.showSliderThumb();
    view.showSliderValue();
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
