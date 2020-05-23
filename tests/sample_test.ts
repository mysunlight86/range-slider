import { Car } from '../src/modules/Car';

describe('Car', () => {
  it('can create', () => {
    const car: Car = new Car();
    expect(car).not.toBe(null);
  });

  it('go() works', () => {
    const car: Car = new Car();
    const returnValue = car.go('vroom');
    expect(returnValue).toEqual('vroom');
  });
});
