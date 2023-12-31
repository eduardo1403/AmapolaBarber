
self.addEventListener('install', e=>{
    console.log('Instalando SW');
})

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('mi-pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/sw.js',
          '/css/acerca.css',
          '/css/index.css',
          '/img/banner.jpg',
          '/img/logo.png',
          '/img/noti.jpg',
          '/img/presentacion1.jpg',
          '/img/presentacion2.jpg',
          '/views/acerca.html',
          '/views/login.html',
          '/views/registro.html',
          '/views/productos.html',
          '/views/politicas.html',
          '/views/preguntas.html',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/icons/maskable_icon_x48.png',
          '/icons/maskable_icon_x72.png',
          '/icons/maskable_icon_x96.png',
          '/icons/maskable_icon_x128.png',
          '/icons/maskable_icon_x192.png',
          '/icons/maskable_icon_x384.png',
          '/icons/maskable_icon_x512.png',
          '/icons/maskable_icon.png',
          '/js/app.js'
          // Agrega aquí todos los archivos que quieres cachear
        ]);
      })
    );
  });


  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );  
  });

self.addEventListener('activate', e=>{
    console.log('SW: Activo y Controlara toda la aplicación');
})

self.addEventListener('sync', e=>{
    console.log('Tenemos conexión');
    console.log(e);
    console.log(e.tag);
})

self.addEventListener('push', (event) => {
    const options = {
      body: 'Bienvenido a Barberia Amapola',
      icon: 'img/noti.jpg'
    };
  
    event.waitUntil(
      self.registration.showNotification('Hola!!', options)
    );
  });


  function mostrarNoti() {
    if (Notification.permission === 'granted') {
        self.addEventListener('push', (event) => {
            const options = {
              body: 'Conoce los nuevos productos de la tienda',
              icon: 'img/noti.jpg'
            };
          
            event.waitUntil(
              self.registration.showNotification('Nuevos Productos.!', options)
            );
          })
      };
  
      notificacion.addEventListener('click', () => {
        // Acción cuando el usuario hace clic en la notificación
        console.log('El usuario hizo clic en la notificación');
      });
    }
  