// 这是一个最简版的 Service Worker
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('adr-store').then(function(cache) {
            return cache.addAll([
                './index.html',
                './css/main.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
