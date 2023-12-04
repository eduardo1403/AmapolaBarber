/*if('serviceWorker' in navigator){
    console.log('Podemos usar SW')
}else{
    console.log('No podemos usar SW')
}*/

//Registrar Service Worker
if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js')
}