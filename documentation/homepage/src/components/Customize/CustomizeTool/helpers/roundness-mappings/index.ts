export function getRoundnessMappings(unit: number) {
  if (unit === 1) {
    return '';
  }

  const roundness = {
    '--dodo-ui-element-roundness-1': 0.4375,
    '--dodo-ui-element-roundness-2': 0.8125,
    '--dodo-ui-element-roundness-3': 1.9375,
  };

  return Object.entries(roundness)
    .map(([key, value]) => {
      const result = unit === 0 ? 0 : value * unit;
      return `${key}: ${result}em;`;
    })
    .join('\n');
}
