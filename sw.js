var staticCacheName =  "pwa-v" + new Date().getTime();
  
var filesToCache = [
 
    
 





 
 ];  
    
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache 
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// check network truoc neu khong thi tra ve cache response
self.addEventListener("fetch", event => {
	const req = event.request;
	const url = new URL (req.url);
    
    if (url.origin === location.origin){
    	event.respondWith(networkFirst(req));
    }
    else{
    	event.respondWith(cacheFirst(req));
    }
});
async function networkFirst(req){
	const cache = await caches.open("pwa-dynamic");
	try{
		const res = await fetch(req);
		cache.put(req, res.clone());
		return res;
	} catch (error) {
		const cachedResponse = await cache.match(req);
		return cachedResponse || await caches.match("./noconnection.json");
	}
}
async function cacheFirst(req){
	return await caches.match(req) || fetch(req);
	
}

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.google.com');
    // url khi click vao notifications
    notification.close();
  }
});