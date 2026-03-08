// ============================================
// SERVICE WORKER - Offline Caching & Performance
// ============================================

const CACHE_NAME = 'newtestweb-v1';
const OFFLINE_URL = 'offline.html';

// Assets to cache immediately
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/about.html',
    '/services.html',
    '/projects.html',
    '/contact.html'
];

// Install event - cache core assets
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(function() {
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }

                return fetch(event.request).then(function(networkResponse) {
                    // Cache successful responses
                    if (networkResponse && networkResponse.status === 200) {
                        var responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseClone);
                            });
                    }
                    return networkResponse;
                }).catch(function() {
                    // Return offline page for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match(OFFLINE_URL);
                    }
                    return new Response('Offline', { status: 503 });
                });
            })
    );
});

// Background sync for form submissions
self.addEventListener('sync', function(event) {
    if (event.tag === 'form-submission') {
        event.waitUntil(
            // Handle form sync when back online
            console.log('Background sync triggered')
        );
    }
});

// Push notifications (for future use)
self.addEventListener('push', function(event) {
    var data = event.data ? event.data.json() : {};
    var title = data.title || 'NewTestWeb';
    var options = {
        body: data.body || 'You have a new notification',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/'
        }
    };
    
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Notification click
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
