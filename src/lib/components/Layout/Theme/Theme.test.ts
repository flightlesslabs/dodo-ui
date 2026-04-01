import { render } from '@testing-library/svelte';
import { describe, test, expect, vi } from 'vitest';

import Theme from './Theme.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('Theme', () => {
  test('renders children', () => {
    const { getByText } = render(TestHost, {
      props: {
        Component: Theme,
        children: 'Hello Theme',
      },
    });

    expect(getByText('Hello Theme')).toBeInTheDocument();
  });

  test('applies light theme when type="light"', () => {
    const { container } = render(TestHost, {
      props: {
        Component: Theme,
        props: { type: 'light' },
        children: 'Light',
      },
    });

    const wrapper = container.querySelector('.dodo-ui-Theme');

    expect(wrapper?.className).toContain('dodo-theme--light');
  });

  test('applies dark theme when type="dark"', () => {
    const { container } = render(TestHost, {
      props: {
        Component: Theme,
        props: { type: 'dark' },
        children: 'Dark',
      },
    });

    const wrapper = container.querySelector('.dodo-ui-Theme');

    expect(wrapper?.className).toContain('dodo-theme--dark');
  });

  test('auto mode uses system preference (mocked)', () => {
    // mock matchMedia
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation(() => ({
        matches: true, // simulate dark mode
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    );

    const { container } = render(TestHost, {
      props: {
        Component: Theme,
        props: { type: 'auto' },
        children: 'Auto',
      },
    });

    const wrapper = container.querySelector('.dodo-ui-Theme');

    expect(wrapper?.className).toContain('dodo-theme--dark');
  });
});
