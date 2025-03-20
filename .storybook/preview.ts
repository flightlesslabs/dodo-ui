import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';
import './global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set the initial theme
      current: 'light',
      // Override the default dark theme
      dark: { ...themes.dark, appBg: '#212324' },
      // Override the default light theme
      light: { ...themes.normal },
      stylePreview: true,
      darkClass: ['glc-theme--dark'],
      lightClass: ['glc-theme--light'],
    },
  },
};

export default preview;
