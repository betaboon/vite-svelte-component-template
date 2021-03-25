import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import Component from '../src/Component.svelte';

describe('<Component>', () => {
  it('renders default name', () => {
    const { getByText } = render(Component);
    const element = getByText(/hello world/i);
    expect(document.body.contains(element));
  });
  it('renders custom name', () => {
    const { getByText } = render(Component, {name: "someone"});
    const element = getByText(/hello someone/i);
    expect(document.body.contains(element));
  });
  it('fails', () => {
    const { getByText } = render(Component);
    const element = getByText(/hello someone/i);
    expect(document.body.contains(element));
  });
});
