import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandImage: 'logo-with-text.png',
    brandTitle: 'Dodo UI',
    brandUrl: 'https://flightlesslabs.github.io/dodo-ui',
    brandTarget: '_self',
    fontBase: '"Nunito", sans-serif',
  },
});
