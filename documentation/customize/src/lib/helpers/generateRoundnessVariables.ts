const roundness = {
  '--dodo-ui-element-roundness-1': 0.4375,
  '--dodo-ui-element-roundness-2': 0.8125,
  '--dodo-ui-element-roundness-3': 1.9375,
};

export function generateRoundnessVariables(unit: number) {
  const variables: string[] = [];

  if (unit === 1) {
    return { variables };
  }

  Object.entries(roundness).forEach(([key, value]) => {
    const result = unit === 0 ? 0 : value * unit;

    variables.push(`${key}: ${result}em;`);
  });

  return { variables };
}
