import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [yaml()],
  },
});

