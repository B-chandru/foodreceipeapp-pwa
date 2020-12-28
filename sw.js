const CACHE_NAME ='site-static';
const CONTENTS =[
    '/',
    '/index.html',
    '/app.js',
    '/main.js',
    '/style.css',
    '/img/192.png',
    '/img/512.png'
];
self.addEventListener("install",e =>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(CONTENTS);

        })
    );
});
self.addEventListener("fetch",e =>{
    e.respondWith(
        fetch(e.request).catch(()=>{
             return caches.open(CACHE_NAME).then(cache => {
                return cache.match(e.request);
             })
        })
        
    );
});