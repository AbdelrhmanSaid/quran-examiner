// Service worker version
const version = 'v1'

// Files to cache
const filesToCache = [
  '/',
  '/index.html',
  '/assets/css/pico.min.css',
  '/assets/css/style.css',
  '/assets/fonts/NotoSansArabic.ttf',
  '/assets/fonts/UthmanTN.ttf',
  '/assets/js/script.js',
]

// Event: Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(version)
      .then((cache) => cache.addAll(filesToCache))
      .then(() => self.skipWaiting()),
  )
})

// Event: Activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((cacheName) => cacheName !== version).map((cacheName) => caches.delete(cacheName)),
        )
      })
      .then(() => self.clients.claim()),
  )
})

// Event: Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }

      // Clone the request
      const requestClone = event.request.clone()

      return fetch(requestClone).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // Clone the response
        const responseClone = response.clone()

        // Cache the response
        caches.open(version).then((cache) => {
          cache.put(event.request, responseClone)
        })

        return response
      })
    }),
  )
})
