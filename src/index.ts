import './style.scss';

import sliderRun from './modules/slider';
import SliderBody from './modules/sliderBody';
import SliderThumb from './modules/sliderThumb';
import TipValue from './modules/tipValue';
// import User from './modules/app';

const sliderBody: SliderBody = new SliderBody();
sliderBody.init();

const sliderThumb: SliderThumb = new SliderThumb();
sliderThumb.init();

const tipValue: TipValue = new TipValue();
tipValue.init();

sliderRun();

// const el = document.getElementById('content');

// const tom: User = new User('Том', 29);
// el.innerHTML = `Имя: ${tom.name} возраст: ${tom.age}`;
