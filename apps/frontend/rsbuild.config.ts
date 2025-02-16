import { defineConfig } from '@rsbuild/core';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  html: {
    title: 'Pizza Shop',
    favicon: './public/favicon.svg',
  },
  server: {
    publicDir: {
      name: 'public',
      copyOnBuild: true,
    },
  },
  dev: {
    lazyCompilation: true,
  },
  performance: {
    printFileSize: {
      total: true,
      detail: true,
      compressed: true,
    },
    removeConsole: ['log'],
  },
  plugins: [
    pluginImageCompress(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
    pluginReact(),
  ],
});
