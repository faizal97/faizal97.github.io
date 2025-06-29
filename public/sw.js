if (!self.define) {
  let e,
    s = {};
  const a = (a, t) => (
    (a = new URL(a + '.js', t).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = e => a(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(t.map(e => o[e] || r(e))).then(e => (i(...e), c));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'b000592a1a1bf59969e151a5a045c5ce',
        },
        {
          url: '/_next/static/3MOoa-XhWJGDjjqfHrhGu/_buildManifest.js',
          revision: '5862bcf2a3e357b541282d62e44de632',
        },
        {
          url: '/_next/static/3MOoa-XhWJGDjjqfHrhGu/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0e2ee216-011f0825a9efb00c.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/14-3965c312d5c3b04e.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/386-5d42ee58a193d7ce.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/612.ed59360d19ad0dc4.js',
          revision: 'ed59360d19ad0dc4',
        },
        {
          url: '/_next/static/chunks/653-e4e6e04da2fda7bf.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/84-047ab107b6ed72a3.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-38009fdc0894c136.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/app/layout-ad3de3f086d16beb.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/app/page-31a929f406252894.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/app/repositories/page-655f149e082fbcbb.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/framework-6e06c675866dc992.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/main-03b86b590b85e68e.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/main-app-55b3d72b115d6fe7.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/pages/_app-6f6ee00dd15e9bd5.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/pages/_error-c068677a8271ef72.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-d5e226a8269fb1e2.js',
          revision: '3MOoa-XhWJGDjjqfHrhGu',
        },
        {
          url: '/_next/static/css/130af5711ae024c2.css',
          revision: '130af5711ae024c2',
        },
        {
          url: '/_next/static/media/0aa834ed78bf6d07-s.woff2',
          revision: '324703f03c390d2e2a4f387de85fe63d',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/67957d42bae0796d-s.woff2',
          revision: '54f02056e07c55023315568c637e3a96',
        },
        {
          url: '/_next/static/media/886030b0b59bc5a7-s.woff2',
          revision: 'c94e6e6c23e789fcb0fc60d790c9d2c1',
        },
        {
          url: '/_next/static/media/8e9860b6e62d6359-s.woff2',
          revision: '01ba6c2a184b8cba08b0d57167664d75',
        },
        {
          url: '/_next/static/media/939c4f875ee75fbb-s.woff2',
          revision: '4a4e74bed5809194e4bc6538eb1a1e30',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/bb3ef058b751a6ad-s.p.woff2',
          revision: '782150e6836b9b074d1a798807adcb18',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/e4af272ccee01ff0-s.p.woff2',
          revision: '65850a373e258f1c897a2b3d75eb74de',
        },
        {
          url: '/_next/static/media/f911b923c6adde36-s.woff2',
          revision: '0f8d347d49960d05c9430d83e49edeb7',
        },
        { url: '/manifest.json', revision: '8b08df557366369c3dc02e7fc4a9bdc4' },
        {
          url: '/profile_photo.jpeg',
          revision: '30cc4448c4cd6014e2df90452a35aa86',
        },
        {
          url: '/profile_photo.webp',
          revision: '95bf27c69feda9a271fb5aad3ee4b171',
        },
        { url: '/resume.pdf', revision: '4956e72c2fc8d1fc70796daf6d2e033b' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    ));
});
