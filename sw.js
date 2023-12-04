
self.addEventListener('install', e=>{
    console.log('Instalando SW');
})


self.addEventListener('activate', e=>{
    console.log('SW: Activo y Controlara toda la aplicación');
})