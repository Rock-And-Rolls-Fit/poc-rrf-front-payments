// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro'
import { esES } from '@clerk/localizations'


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), clerk({ localization: esES })],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
  output: 'server'
});