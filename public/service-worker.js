const CACHE_NAME = "weather-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  
  
];


this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});


this.addEventListener("fetch", (event) => {
  if(!navigator.onLine){
  
   
    event.respondWith(
      caches.match(event.request).then((response) => {
        if(response)
        return response ; 
      })
    );
}
});
