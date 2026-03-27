import { describe, expect, test } from 'vitest';

import { GreetingController } from '../src/GreetingController';
import { GreetingModel } from '../src/GreetingModel';
import { GreetingView } from '../src/GreetingView';

class FakeButton {
  private clickListener: (() => void) | null = null;

  public addEventListener(eventName: string, listener: () => void): void {
    if (eventName === 'click') {
      this.clickListener = listener;
    }
  }

  public click(): void {
    if (this.clickListener === null) {
      throw new Error('Expected a click listener to be registered.');
    }

    this.clickListener();
  }
}

describe('GreetingController', () => {
  test('renders the initial greeting and updates it after a click', () => {
    const nameInput = { value: '' } as HTMLInputElement;
    const greetButton = new FakeButton() as unknown as HTMLButtonElement;
    const redOutputDiv = { textContent: '' } as HTMLDivElement;
    const model = new GreetingModel();
    const view = new GreetingView(redOutputDiv);
    const controller = new GreetingController(nameInput, greetButton, model, view);

    controller.start();

    expect(redOutputDiv.textContent).toBe('hello world');

    nameInput.value = 'Lieuwe';
    (greetButton as unknown as FakeButton).click();

    expect(redOutputDiv.textContent).toBe('hello Lieuwe');
  });
});
