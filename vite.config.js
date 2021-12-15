import vue from '@vitejs/plugin-vue';
// import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import critical from 'rollup-plugin-critical';
import eslintPlugin from 'vite-plugin-eslint';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './web/dist',
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
    eslintPlugin({
      cache: false,
      include: [
        'src/**/*.js',
        'src/**/*.ts',
        'src/**/*.d.ts',
        'src/**/*.vue',
        'templates/**/*.js',
        'templates/**/*.ts',
        'templates/**/*.vue',
      ],
    }),
    critical({
      criticalUrl: 'https://stage.baukasten.io/',
      criticalBase: './web/dist/criticalcss/',
      criticalPages: [{ uri: '', template: 'index' }],
      criticalConfig: {
        dimensions: [
          {
            width: 375,
            height: 800,
          },
          {
            width: 1680,
            height: 1200,
          },
        ],
      },
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
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    nodeResolve({
      moduleDirectories: [path.resolve('./node_modules')],
    }),
    ViteRestart({
      reload: ['./translations/**/*', './templates/**/*'],
      restart: [
        './tailwind.config.js',
        './postcss.config.js',
        './tailwind/**/*',
        './.eslintrc.js',
        './.prettierrc.js',
      ],
    }),
    vue(),
  ],
  publicDir: './src/public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000/',
    port: 3000,
    strictPort: true,
  },
});
