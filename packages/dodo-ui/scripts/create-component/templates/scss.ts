export function scss(name: string) {
  return `
// ${name}

.dodo-ui-${name} {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 1rem;

  padding: var(--dodo-ui-space-small);
  border-radius: var(--dodo-ui-radius-1);

  background: var(--dodo-ui-color-surface);
  color: var(--dodo-ui-color-text);

  &[aria-disabled='true'] {
    opacity: 0.6;
    pointer-events: none;
  }
}
`;
}
