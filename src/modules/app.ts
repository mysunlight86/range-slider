// eslint-disable-next-line no-unused-vars
import { Observer } from './presenter';

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
