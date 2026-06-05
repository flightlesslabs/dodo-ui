const sizes = {
  '--dodo-ui-element-height-small': 34,
  '--dodo-ui-element-height-normal': 40,
  '--dodo-ui-element-height-large': 50,

  '--dodo-ui-track-element-height-small': 6,
  '--dodo-ui-track-element-height-normal': 8,
  '--dodo-ui-track-element-height-large': 10,

  '--dodo-ui-element-border-width': 1,
};

export function generateSizeVariables(unit: number) {
  const variables: string[] = [];

  if (!unit) {
    return { variables };
  }

  Object.entries(sizes).forEach(([key, value]) => {
    variables.push(`${key}: ${value + unit}px;`);
  });

  return { variables };
}
