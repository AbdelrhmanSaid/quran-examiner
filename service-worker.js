// Service worker version
const version = 'v1'

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
