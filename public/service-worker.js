const CACHE_NAME = "weather-app-cache-v1";
const urlsToCache = [
  "/",                      // Main page
  "/index.html",             // Main HTML file
  "/static/js/bundle.js",    // JS bundle
  "/favicon.ico",            // Favicon
  "/manifest.json"           // Manifest file
];


self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        try {
          return cache.addAll(urlsToCache);
        } catch (error) {
          console.error("Failed to cache resources:", error);
        }
      })
    );
  });


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      
      return response || fetch(event.request);
    })
  );
});
