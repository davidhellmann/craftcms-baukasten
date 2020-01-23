/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/dist/js/workbox-catch-handler.js",
  "/dist/js/precache-manifest.d1787b8e63eed3c2558f17d3053a7293.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/admin.*$/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/\.php$/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 20, purgeOnQuotaError: false })] }), 'GET');

workbox.googleAnalytics.initialize({});
