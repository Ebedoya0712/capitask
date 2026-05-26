// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ebedoya0712.github.io',
  base: '/capitask',
  vite: {
    plugins: [tailwindcss()]
  }
});