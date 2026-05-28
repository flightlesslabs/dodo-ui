export function getCssText(lightTheme?: string, darkTheme?: string) {
  if (!lightTheme && !darkTheme) {
    return '';
  }

  let text = '';

  if (lightTheme) {
    text = `
  :root {
    ${lightTheme}
  }
`;
  }

  if (darkTheme) {
    text = `

  .dodo-theme--dark {
    ${darkTheme}
  }
`;
  }

  return text;
}
