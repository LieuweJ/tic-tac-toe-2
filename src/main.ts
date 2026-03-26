import './styles.css';

import { GreetingController } from './GreetingController';
import { GreetingModel } from './GreetingModel';
import { GreetingView } from './GreetingView';

const greenInputDiv = document.querySelector('#greenInputDiv');
const nameInput = document.querySelector('#nameInput');
const greetButton = document.querySelector('#greetButton');
const redOutputDiv = document.querySelector('#redOutputDiv');

if (!(greenInputDiv instanceof HTMLDivElement)) {
  throw new Error('Expected #greenInputDiv to be an HTMLDivElement.');
}

if (!(nameInput instanceof HTMLInputElement)) {
  throw new Error('Expected #nameInput to be an HTMLInputElement.');
}

if (!(greetButton instanceof HTMLButtonElement)) {
  throw new Error('Expected #greetButton to be an HTMLButtonElement.');
}

if (!(redOutputDiv instanceof HTMLDivElement)) {
  throw new Error('Expected #redOutputDiv to be an HTMLDivElement.');
}

const model = new GreetingModel();
const view = new GreetingView(redOutputDiv);
const controller = new GreetingController(nameInput, greetButton, model, view);

controller.start();
