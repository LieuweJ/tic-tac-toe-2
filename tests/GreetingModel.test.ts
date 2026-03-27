import { describe, expect, test } from 'vitest';

import { GreetingModel } from '../src/GreetingModel';

describe('GreetingModel', () => {
  test('uses world when the name is empty', () => {
    const model = new GreetingModel();

    expect(model.getMessage()).toBe('hello world');
  });

  test('uses the entered name when it is present', () => {
    const model = new GreetingModel();

    model.setName('Lieuwe');

    expect(model.getMessage()).toBe('hello Lieuwe');
  });

  test('trims the name before greeting', () => {
    const model = new GreetingModel();

    model.setName('  Lieuwe  ');

    expect(model.getMessage()).toBe('hello Lieuwe');
  });
});
