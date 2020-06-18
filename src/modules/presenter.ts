// import { Subject, ConcreteSubject } from './app';
import Subject from './app';
// import SliderBody from './sliderBody';
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
  // modelOptions: {min: number, max: number, step: number};
  _selector;
  _options;

  // constructor(selector?: string, options?: optionsType) {
  //   this._selector = selector;
  //   this._options = options;
  // }

  // setDataToModel() {
  //   const model: Model = new Model();
  //   model.getData();
  // }

  // transferModelData(model: Model, view: View) {
  //   this.modelOptions = model.calcUnit();
  //   console.log(this.modelOptions);
  //   view.showScale(this.modelOptions.min, this.modelOptions.max, this.modelOptions.step);
  //   // console.log('ModelObserver: Reacted to the event.');
  //   // if (model instanceof Model) {
  //   //   this.modelOptions = model.calcUnit();
  //   //   console.log(this.modelOptions);
  //     // const view = new View();
  //     // view.showScale(this.modelOptions.min, this.modelOptions.max, this.modelOptions.step);
  //     // console.log('ModelObserver: Reacted to the event.');
  //   // }
  // }

  // transfer() {
  //   const view: View = new View();
    // return view.getWidthSlider();
  // }

  update(model: Model) {
    console.log('ModelObserver: Reacted to the event.');
    // if (model instanceof Model) {
    //   this.modelOptions = model.calcUnit();
    //   console.log(this.modelOptions);
    //   const view = new View();
    //   view.showScale(this.modelOptions.min, this.modelOptions.max, this.modelOptions.step);
    //   console.log('ModelObserver: Reacted to the event.');
    // }
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
export { Observer, Presenter };
