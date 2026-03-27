import { describe, expect, test, vi } from 'vitest';

import { GreetingController } from '../src/GreetingController';
import { GreetingModel } from '../src/GreetingModel';
import { GreetingView } from '../src/GreetingView';

describe('GreetingController', () => {
  test('renders the initial greeting and updates it after a click', () => {
    const nameInput = document.createElement('input');
    const greetButton = document.createElement('button');
    const redOutputDiv = document.createElement('div');
    const addEventListenerSpy = vi.spyOn(greetButton, 'addEventListener');
    const model = new GreetingModel();
    const view = new GreetingView(redOutputDiv);
    const renderSpy = vi.spyOn(view, 'render');
    const controller = new GreetingController(nameInput, greetButton, model, view);

    controller.start();

    expect(addEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    expect(renderSpy).toHaveBeenNthCalledWith(1, 'hello world');

    nameInput.value = 'Lieuwe';

    greetButton.click();

    expect(renderSpy).toHaveBeenNthCalledWith(2, 'hello Lieuwe');
    expect(redOutputDiv.textContent).toBe('hello Lieuwe');
  });
});
