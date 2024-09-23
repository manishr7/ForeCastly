const CACHE_NAME = "weather-app-cache";
const urlsToCache = [
    "/",
    "/index.html",
    "/static/js/main.d1711662.js"
  ];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);    
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
            
            return fetch(event.request).catch(() => {
                
                return caches.match('/');
            });
        })
    );
});
