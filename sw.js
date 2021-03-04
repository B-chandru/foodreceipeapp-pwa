var cacheName = 'food receipe app v1'; 

var cacheAssets = [ 
  '/',
    '/index.html',
    '/app.js',
    '/main.js',
    '/style.css',
    '/img/logo192.png',
    '/img/logo512.png'
]; 

  

self.addEventListener('install', e => { 

    e.waitUntil( 
        caches.open(cacheName) 
        .then(cache => { 
            console.log(`Service Worker: Caching Files: ${cache}`); 
            cache.addAll(cacheAssets) 
                .then(() => self.skipWaiting())
        }) 
    ); 
}) 


self.addEventListener('activate', e => { 
    console.log('Service Worker: Activated'); 
    e.waitUntil( 
        caches.keys().then(cacheNames => { 
            return Promise.all( 
                cacheNames.map( 
                    cache => { 
                        if (cache !== cacheName) { 
                            console.log('Service Worker: Clearing Old Cache'); 
                            return caches.delete(cache); 
                        } 
                    } 
                ) 

            ) 

        }) 

    ); 
}) 

   
   
