/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import InputEnclosure from './InputEnclosure.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('InputEnclosure', () => {
  test('renders children content', () => {
    render(TestHost, {
      props: {
        Component: InputEnclosure,
        children: '<input placeholder="Type here" />',
      },
    });

    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  test('applies state classes', () => {
    render(TestHost, {
      props: {
        Component: InputEnclosure,
        props: {
          error: true,
          focused: true,
          disabled: true,
        },
        children: '<input />',
      },
    });

    const wrapper = document.querySelector('.dodo-ui-InputEnclosure')!;

    expect(wrapper.className).toContain('error');
    expect(wrapper.className).toContain('focused');
    expect(wrapper.className).toContain('disabled');
  });

  test('applies size and roundness classes', () => {
    render(TestHost, {
      props: {
        Component: InputEnclosure,
        props: {
          size: 'large',
          roundness: 'pill',
        },
        children: '<input />',
      },
    });

    const wrapper = document.querySelector('.dodo-ui-InputEnclosure')!;

    expect(wrapper.className).toContain('size--large');
    expect(wrapper.className).toContain('roundness--pill');
  });

  test('renders before and after content', () => {
    render(TestHost, {
      props: {
        Component: InputEnclosure,
        children: `
          <span>Before</span>
          <input />
          <span>After</span>
        `,
      },
    });

    expect(screen.getByText('Before')).toBeInTheDocument();
    expect(screen.getByText('After')).toBeInTheDocument();
  });
});
