/**
 * Service worker
 */

const PREFIX = "V1";

const BASE = location.protocol + "//" + location.host + '/domoz';
console.log(BASE);
// Rnager dans le tableau tous les fichiers qui doivent etre caché
const CACHED_FILES = [
    `${BASE}/offline.html`,
    `${BASE}/favicon.ico`
]

self.addEventListener('install', (event) => {
    console.warn(`install ${PREFIX}`);
    // Ne pas attendre que la version précédente se finisse pour installer celle ci
    self.skipWaiting();
    //Apres l'installation du service worker, lui demander de mettre en cache la page offline.html pour la restituer plus tard
    event.waitUntil((async () => {
        const cache = await caches.open(PREFIX);

        await cache.addAll(CACHED_FILES);
        /*
        await Promise.all(CACHED_FILES.map((path) => {
            console.warn(`${PREFIX} Ajout dans le cache de ${path}`)
            return cache.add(new Request(path));
        })

        )
        */
        //cache.add(new Request('offline.html'));
    })())
})

self.addEventListener('activate', (event) => {
    console.warn(`active ${PREFIX}`);
    // Controler la page dès l'activation du service worker
    clients.claim();
    //Effacer les anciens caches
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(
            keys.map((key) => {
                if(! key.includes(PREFIX)){
                    caches.delete(key);
                    console.warn(`${PREFIX} ${key} effacé`);
                }else{
                    console.warn(`${PREFIX} ${key} conservé`);
                }
            })
        )
    })())
})

self.addEventListener("fetch", (event) => {
    console.warn(`SW Fetching : ${PREFIX} ${event.request.url}  Mode: ${event.request.mode}`)
    if(event.request.mode == "navigate"){
        event.respondWith((async () => {
            try{
                // On regarde si la reponse est dans le cache
                const preloadResponse = await event.preloadResponse;
                if(preloadResponse){
                    return preloadResponse;
                }

                // sinon, si le réseau est disponible, on la renvoit
                return  await fetch(event.request);
            } catch(e) { // une erreur sera produite s'il n'y a pas de réseau
                // Et on renvoit un truc bateau
                const cache = await caches.open(PREFIX);
                return await cache.match('offline.html');
                //return new Response('Bonjour les gens');
            }
        })())
    }else if(CACHED_FILES.includes(event.request.url)){
        console.warn(`${PREFIX} files from cache ${event.request.url}`)
        event.respondWith(caches.match(event.request));
    }
})
