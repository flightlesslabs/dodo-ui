export function getSpaceMappings(unit: number) {
  if (!unit) {
    return '';
  }

  const sizes = {
    '--dodo-ui-space-small': 6,
    '--dodo-ui-space': 8,
    '--dodo-ui-space-large': 10,
  };

  return Object.entries(sizes)
    .map(([key, value]) => `${key}: ${value + unit}px;`)
    .join('\n');
}
