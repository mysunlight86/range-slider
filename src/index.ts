import './style.scss';
import Slider from './modules/slider';

// import { ConcreteSubject } from './modules/app';
// import { ConcreteObserverA, ConcreteObserverB, Presenter } from './modules/presenter';

const slider1: Slider = new Slider('#slider1');
slider1.init();

const slider2: Slider = new Slider('#slider2', { min: 40, step: 60, max: 245 });
slider2.init();

const slider3: Slider = new Slider('#slider3', { values: [300] });
slider3.init();

const slider4: Slider = new Slider('#slider4', { hasInterval: true, values: [29, 138] });
slider4.init();

/**
* Клиентский код.
*/

// const subject = new ConcreteSubject();

// const observer1 = new ConcreteObserverA();
// subject.attach(observer1);

// const observer2 = new ConcreteObserverB();
// subject.attach(observer2);

// subject.someBusinessLogic();
// subject.someBusinessLogic();

// subject.detach(observer2);

// subject.someBusinessLogic();

/* const MVP = {
  makeObservableSubject() {
    const observers = [];
    const addObserver = function (o) {
      if (typeof o !== 'function') {
        throw new Error('observer must be a function');
      }
      for (let i = 0; i < observers.length; i++) {
        const observer = observers[i];
        if (observer === o) {
          throw new Error('observer already in the list');
        }
      }
      observers.push(o);
    };
    const removeObserver = function (o) {
      for (let i = 0; i < observers.length; i++) {
        const observer = observers[i];
        if (observer === o) {
          observers.splice(i, 1);
          return;
        }
      }
      throw new Error('could not find observer in list of observers');
    };
    const notifyObservers = function (data) {
      // Make a copy of observer list in case the list
      // is mutated during the notifications.
      const observersSnapshot = observers.slice(0);
      for (let i = 0; i < observersSnapshot.length; i++) {
        observersSnapshot[i](data);
      }
    };
    return {
      addObserver,
      removeObserver,
      notifyObservers,
      notify: notifyObservers,
    };
  },

  Model(options = {}) {
    // const that = this;
    // const items = [];
    this.options = !options ? {} : options;
    this.modelChangedSubject = MVP.makeObservableSubject();
    this.minValue = 0;
    this.maxValue = 300;
    this.step = 50;
    this.mode = 'horizontal';
    this.type = 'single';
    // this.addItem = function (value) {
    //   if (!value) {
    //     return;
    //   }
    //   items.push(value);
    //   that.modelChangedSubject.notifyObservers();
    // };
    // this.removeCurrentItem = function () {
    //   if (that.selectedIndex === -1) {
    //     return;
    //   }
    //   items.splice(that.selectedIndex, 1);
    //   that.modelChangedSubject.notifyObservers();
    // };
    // this.getItems = function () {
    //   return items;
    // };
    // this.selectedIndex = -1;
    // this.getSelectedIndex = function () {
    //   return that.selectedIndex;
    // };
    // this.setSelectedIndex = function (value) {
    //   that.selectedIndex = value;
    //   that.modelChangedSubject.notifyObservers();
    // };
  },

  View() {
    // const that = this;
    this.init = function () {
      const sliderBody: SliderBody = new SliderBody();
      sliderBody.init();

      const sliderThumb: SliderThumb = new SliderThumb();
      sliderThumb.init();

      const tipValue: TipValue = new TipValue();
      tipValue.init();
    };

    // that.select = $('<select/>').appendTo(rootObject);
    // that.select.attr('size', '4');
    // that.buttonAdd = $('<button>+</button>').appendTo(rootObject).height(20);
    // that.buttonRemove = $('<button>-</button>').appendTo(rootObject).height(20);
    // model.modelChangedSubject.addObserver(function () {
    //   var items = model.getItems();
    //   var innerHTML = '';
    //   for (var i = 0; i < items.length; i += 1) {
    //     innerHTML += "<option>" + items[i] + "</option>";
    //   }
    //   that.select.html(innerHTML);
    // });
  },

  Controller(model, view) {
    view.init();
    // view.buttonAdd.bind('click', function () {
    //   model.addItem(prompt('addvalue'));
    // });
    // view.buttonRemove.bind('click', function () {
    //   model.removeCurrentItem();
    // });
    // view.select.bind('click', function () {
    //   model.setSelectedIndex(view.select[0].selectedIndex);
    // });
  },
}; */

/* $(document).ready(function () {
  var model = new OMVC.Model();
  var view = new OMVC.View(model, $('<div/>').appendTo($("body")));
  var controller = new OMVC.Controller(model, view);
}); */

// const model = new MVP.Model();
// const view = new MVP.View();
// const controller = new MVP.Controller(model, view);

// controller();
