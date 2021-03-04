
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
   self.addEventListener('fetch', e => { 

    console.log('Service Worker: Fetching'); 

    e.respondWith( 

        fetch(e.request) 

        .then(res => { 


            const resClone = res.clone(); 


            caches.open(cacheName) 

                .then(cache => { 


                    cache.put(e.request, resClone); 

                }); 

            return res; 

        }).catch( 

            err => caches.match(e.request) 

            .then(res => res) 

        ) 

    ); 
}); 
