import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// proctologiaonline.com (BUILD_proctologiaonline.md): Astro + Tailwind, HTML estático para SiteGround.
// CSS inline en cada página (sin petición extra) y fuentes autoalojadas con font-display: swap.
export default defineConfig({
  site: 'https://proctologiaonline.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always', format: 'directory' },
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
