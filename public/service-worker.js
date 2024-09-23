const CACHE_NAME = "weather-app-cache";
const urlsToCache = [
    "/",
    "/index.html",
    "/static/js/main.*.js",  // Use this pattern to cache the hashed file
];

// Install the service worker and cache the necessary resources
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Intercept fetch requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached response if it exists
            if (response) {
                return response;
            }

            // Otherwise, fetch from the network
            return fetch(event.request).catch(() => {
                // If the network request fails, return the cached home page
                return caches.match('/');
            });
        })
    );
});
