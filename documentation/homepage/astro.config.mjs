// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://flightlesslabs.github.io/',
  base: '/dodo-ui',
  image: {
    domains: ['flightlesslabs.github.io'],
    remotePatterns: [{ protocol: 'https' }],
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito',
    },
  ],
});
