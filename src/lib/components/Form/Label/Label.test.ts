import { render, screen } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import Label from './Label.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('Label', () => {
  test('renders text content', () => {
    render(TestHost, {
      props: {
        Component: Label,
        children: 'My Label',
      },
    });

    expect(screen.getByText('My Label')).toBeInTheDocument();
  });

  test('associates with input via "for"', () => {
    render(TestHost, {
      props: {
        Component: Label,
        props: { for: 'input-id' },
        children: `
          My Label
          <input id="input-id" />
        `,
      },
    });

    const label = screen.getByText('My Label');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', 'input-id');
    expect(input).toHaveAttribute('id', 'input-id');
  });
});
