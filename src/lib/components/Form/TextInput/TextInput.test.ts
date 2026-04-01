import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, test, expect, vi } from 'vitest';

import TextInput from './TextInput.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('TextInput', () => {
  test('renders input with placeholder', () => {
    render(TestHost, {
      props: {
        Component: TextInput,
        props: { placeholder: 'Type here' },
      },
    });

    const input = screen.getByPlaceholderText('Type here');

    expect(input).toBeInTheDocument();
  });

  test('handles input value', async () => {
    render(TestHost, {
      props: {
        Component: TextInput,
        props: { placeholder: 'Type here' },
      },
    });

    const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;

    await fireEvent.input(input, { target: { value: 'hello' } });

    expect(input.value).toBe('hello');
  });

  test('calls focus and blur handlers', async () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(TestHost, {
      props: {
        Component: TextInput,
        props: {
          placeholder: 'Focus me',
          onfocus: onFocus,
          onblur: onBlur,
        },
      },
    });

    const input = screen.getByPlaceholderText('Focus me');

    await fireEvent.focus(input);
    await fireEvent.blur(input);

    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  test('respects disabled state', () => {
    render(TestHost, {
      props: {
        Component: TextInput,
        props: {
          placeholder: 'Disabled',
          disabled: true,
        },
      },
    });

    const input = screen.getByPlaceholderText('Disabled');

    expect(input).toBeDisabled();
  });

  test('applies error and focus classes', () => {
    const { container } = render(TestHost, {
      props: {
        Component: TextInput,
        props: {
          placeholder: 'Styled',
          error: true,
          focused: true,
        },
      },
    });

    const wrapper = container.querySelector('.dodo-ui-InputEnclosure');

    expect(wrapper?.className).toContain('error');
    expect(wrapper?.className).toContain('focused');
  });
});
