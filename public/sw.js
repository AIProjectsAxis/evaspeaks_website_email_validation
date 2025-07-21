// sw.js

const CACHE_NAME = 'eva-speaks-v1';
const urlsToCache = [
  '/',
  '/src/main.tsx',
  '/src/styles/index.css',
  '/images/other_logo13.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass Netlify functions entirely
  if (url.pathname.startsWith('/.netlify/functions/')) {
    return event.respondWith(fetch(request));
  }

  // Otherwise do cache-first
  event.respondWith(
    caches.match(request).then(cached => {
      return cached || fetch(request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});