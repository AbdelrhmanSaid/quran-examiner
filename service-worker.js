self.addEventListener('fetch', function (event) {
  const request = event.request;

  // Make sure request scheme is http or https
  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
      caches.open('v1').then(async (cache) => {
          let response = await cache.match(request);

          // If the response is in the cache, return it
          if (response) return response;

          // Otherwise, fetch the response from the network and cache it
          response = await fetch(request);
          cache.put(request, response.clone());

          return response;
      }),
  );
});