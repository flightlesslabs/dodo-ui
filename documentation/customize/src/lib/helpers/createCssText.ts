import * as prettier from 'prettier/standalone';
import * as cssPlugin from 'prettier/plugins/postcss';

type CreateTextInput = {
  variables?: string[];
  variablesDark?: string[];
};

export async function createCssText(data: CreateTextInput) {
  if (!data.variablesDark?.length && !data.variables?.length) {
    return '';
  }

  let text = ``;

  if (data.variables?.length) {
    text += `:root { \n`;

    data.variables.forEach((variable) => {
      text += `${variable} \n`;
    });

    text += `\n } \n`;
  }

  if (data.variablesDark?.length) {
    text += `.dodo-theme--dark { \n`;

    data.variablesDark.forEach((variable) => {
      text += `${variable} \n`;
    });

    text += `\n } \n`;
  }

  const formattedCss = await prettier.format(text, {
    parser: 'css',
    plugins: [cssPlugin],
  });

  return formattedCss;
}
