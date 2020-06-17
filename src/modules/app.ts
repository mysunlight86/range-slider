import { Observer } from './presenter';

/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable max-classes-per-file */

// class User {
//   name: string;
//   age: number;

//   constructor(_name: string, _age: number) {
//     this.name = _name;
//     this.age = _age;
//   }
// }

// export default User;

/**
 * Интферфейс издателя объявляет набор методов для управлениями подписчиками.
 */
export default interface Subject {
  // Присоединяет наблюдателя к издателю.
  attach(observer: Observer): void;

  // Отсоединяет наблюдателя от издателя.
  detach(observer: Observer): void;

  // Уведомляет всех наблюдателей о событии.
  notify(): void;
}

/**
* Издатель владеет некоторым важным состоянием и оповещает наблюдателей о его
* изменениях.
*/
// class ConcreteSubject implements Subject {
  /**
   * @type {number} Для удобства в этой переменной хранится состояние
   * Издателя, необходимое всем подписчикам.
   */
  // public state: number;

  /**
   * @type {Observer[]} Список подписчиков. В реальной жизни список
   * подписчиков может храниться в более подробном виде (классифицируется по
   * типу события и т.д.)
   */
  // private observers: Observer[] = [];

  /**
   * Методы управления подпиской.
   */
  // public attach(observer: Observer): void {
  //   const isExist = this.observers.includes(observer);
  //   if (isExist) {
  //     return console.log('Subject: Observer has been attached already.');
  //   }

  //   console.log('Subject: Attached an observer.');
  //   this.observers.push(observer);
  // }

  // public detach(observer: Observer): void {
  //   const observerIndex = this.observers.indexOf(observer);
  //   if (observerIndex === -1) {
  //     return console.log('Subject: Nonexistent observer.');
  //   }

  //   this.observers.splice(observerIndex, 1);
  //   console.log('Subject: Detached an observer.');
  // }

  /**
   * Запуск обновления в каждом подписчике.
   */
  // public notify(): void {
  //   console.log('Subject: Notifying observers...');
  //   for (const observer of this.observers) {
  //     observer.update(this);
  //   }
  // }

  /**
   * Обычно логика подписки – только часть того, что делает Издатель. Издатели
   * часто содержат некоторую важную бизнес-логику, которая запускает метод
   * уведомления всякий раз, когда должно произойти что-то важное (или после
   * этого).
   */
//   public someBusinessLogic(): void {
//     console.log('\nSubject: I\'m doing something important.');
//     this.state = Math.floor(Math.random() * (10 + 1));

//     console.log(`Subject: My state has just changed to: ${this.state}`);
//     this.notify();
//   }
// }

// export { Subject, ConcreteSubject };
