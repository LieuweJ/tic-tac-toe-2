import { describe, expect, test, vi } from 'vitest';

import { GreetingView } from '../src/GreetingView';

describe('GreetingView', () => {
  test('renders the message into the injected output div', () => {
    const redOutputDiv = document.createElement('div');
    const setTextContent = vi.spyOn(redOutputDiv, 'textContent', 'set');
    const view = new GreetingView(redOutputDiv);

    view.render('hello Lieuwe');

    expect(setTextContent).toHaveBeenCalledWith('hello Lieuwe');
    expect(redOutputDiv.textContent).toBe('hello Lieuwe');
  });
});
