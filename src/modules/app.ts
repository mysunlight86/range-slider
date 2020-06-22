// eslint-disable-next-line no-unused-vars
import { Observer } from './presenter';

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
// eslint-disable-next-line semi
}
