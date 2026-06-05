const space = {
  '--dodo-ui-space-small': 6,
  '--dodo-ui-space': 8,
  '--dodo-ui-space-large': 10,
};

export function generateSpaceVariables(unit: number) {
  const variables: string[] = [];

  if (!unit) {
    return { variables };
  }

  Object.entries(space).forEach(([key, value]) => {
    variables.push(`${key}: ${value + unit}px;`);
  });

  return { variables };
}
