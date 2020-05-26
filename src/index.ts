import './style.scss';

import { Car } from './modules/Car';

// eslint-disable-next-line no-console
console.log('hi');
const car: Car = new Car();
car.go('vroom');
