import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';

import TestHost from '../../../test/TestHost.svelte';
import Checkbox from './Checkbox.svelte';

describe('Checkbox', () => {
  test('renders checkbox with label', () => {
    render(TestHost, {
      props: {
        Component: Checkbox,
        props: { id: 'test-checkbox' },
        children: 'Check this',
      },
    });

    // Label should be visible
    expect(screen.getByText('Check this')).toBeInTheDocument();
  });

  test('toggles checked state on click', async () => {
    const user = userEvent;

    render(TestHost, {
      props: {
        Component: Checkbox,
        props: { id: 'test-checkbox' },
        children: 'Check this',
      },
    });

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test('calls onCheckedChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent;

    render(TestHost, {
      props: {
        Component: Checkbox,
        props: {
          id: 'test-checkbox',
          onCheckedChange: handleChange,
        },
        children: 'Check this',
      },
    });

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });
});
