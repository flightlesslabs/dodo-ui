import { render, screen } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import TestHost from '../../../test/TestHost.svelte';
import FormField from './FormField.svelte';

describe('FormField', () => {
  test('renders string label', () => {
    render(TestHost, {
      props: {
        Component: FormField,
        props: {
          label: 'Name:',
          for: 'name-input',
        },
        children: '<input id="name-input" />',
      },
    });

    expect(screen.getByText('Name:')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(TestHost, {
      props: {
        Component: FormField,
        children: '<input placeholder="Type here" />',
      },
    });

    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  test('associates label with input via "for"', () => {
    render(TestHost, {
      props: {
        Component: FormField,
        props: {
          label: 'Email',
          for: 'email-input',
        },
        children: '<input id="email-input" />',
      },
    });

    const input = screen.getByLabelText('Email');

    expect(input).toBeInTheDocument();
  });

  test('applies custom class', () => {
    render(TestHost, {
      props: {
        Component: FormField,
        props: {
          class: 'custom-class',
        },
        children: '<input />',
      },
    });

    const wrapper = screen.getByRole('textbox').parentElement;

    expect(wrapper?.className).toContain('custom-class');
  });
});
