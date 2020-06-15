import { Subject, ConcreteSubject } from './app';
import SliderBody from './sliderBody';
import Model from './model';
import View from './view';
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
class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ModelObserver implements Observer {
  // transfer() {
  //   const view: View = new View();
    // return view.getWidthSlider();
  // }
  update(model) {

  }
}

class ViewObserver implements Observer {
  update(view) {

  }
}

class ConcreteObserverB implements Observer {
  isSubjectSatisfies(subject) {
    return subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2);
  }

  public update(subject: Subject): void {
    if (this.isSubjectSatisfies(subject)) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}

export { Observer, ConcreteObserverA, ConcreteObserverB };
