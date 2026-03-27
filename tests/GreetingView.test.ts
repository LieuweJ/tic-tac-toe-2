import { describe, expect, test } from 'vitest';

import { GreetingView } from '../src/GreetingView';

describe('GreetingView', () => {
  test('renders the message into the injected output div', () => {
    const redOutputDiv = { textContent: '' } as HTMLDivElement;
    const view = new GreetingView(redOutputDiv);

    view.render('hello Lieuwe');

    expect(redOutputDiv.textContent).toBe('hello Lieuwe');
  });
});
