/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';

import Button from './Button.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('Button', () => {
  test('renders as button by default', () => {
    render(TestHost, {
      props: {
        Component: Button,
        children: 'Click me',
      },
    });

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('renders as anchor when href is provided', () => {
    render(TestHost, {
      props: {
        Component: Button,
        props: { href: 'https://example.com' },
        children: 'Go',
      },
    });

    const link = screen.getByRole('link', { name: 'Go' });

    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('handles click events', async () => {
    const handleClick = vi.fn();

    render(TestHost, {
      props: {
        Component: Button,
        props: { onclick: handleClick },
        children: 'Click',
      },
    });

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test('respects disabled state', async () => {
    const handleClick = vi.fn();

    render(TestHost, {
      props: {
        Component: Button,
        props: { disabled: true, onclick: handleClick },
        children: 'Disabled',
      },
    });

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
