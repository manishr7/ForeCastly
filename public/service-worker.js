const CACHE_NAME = "weather-app-cache";
self.__WB_MANIFEST = self.__WB_MANIFEST || [];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(self.__WB_MANIFEST);    
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // If there's a cached response, return it
            if (response) {
                return response;
            }
            // If no cached response, try to fetch from the network
            return fetch(event.request).catch(() => {
                // Optionally return a fallback response if network fetch fails
                return caches.match('/');
            });
        })
    );
});
