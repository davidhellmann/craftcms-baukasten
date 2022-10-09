import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import manifestSRI from 'vite-plugin-manifest-sri';
import { visualizer } from 'rollup-plugin-visualizer';
import eslintPlugin from 'vite-plugin-eslint';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import critical from 'rollup-plugin-critical';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: path.resolve('./web/dist'),
    rollupOptions: {
      input: {
        app: './src/js/app.ts',
      },
      output: {
        sourcemap: true,
      },
    },
  },
  plugins: [
    critical({
      criticalUrl: 'https://stage.baukasten.io/',
      criticalBase: './web/dist/criticalcss/',
      criticalPages: [
        { uri: '', template: 'index' },
        { uri: 'content-builder', template: 'entry/pages/contentBuilder' },
      ],
      criticalConfig: {
        width: 1680,
        height: 1200,
      },
    }),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    nodeResolve({
      moduleDirectories: ['node_modules'],
    }),
    ViteFaviconsPlugin({
      logo: './src/public/images/favicon-src.svg',
      inject: false,
      outputPath: 'favicons-default',
      favicons: {
        appName: 'craftcms-baukasten',
        lang: 'de',
        background: '#244F43',
        theme_color: '#244F43',
      },
    }),
    ViteRestart({
      reload: ['./translations/**/*.php', './templates/**/*.{twig,html,php}'],
    }),
    vue(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i,
    }),
    manifestSRI(),
    visualizer({
      filename: './web/dist/assets/stats.html',
      template: 'treemap',
      sourcemap: true,
    }),
    eslintPlugin({
      cache: false,
    }),
    splitVendorChunkPlugin(),
  ],
  publicDir: './src/public',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve('./src'),
      '@templates': path.resolve('./templates'),
      '@components': path.resolve('./templates/_components'),
    },
  },
  // Use this for Laravel Valet
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3100',
    port: 3100,
    strictPort: true,
  },
}));
