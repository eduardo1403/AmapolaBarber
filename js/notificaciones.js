function mostrarNotificacion() {
    if (Notification.permission === 'granted') {
      const notificacion = new Notification('Nuevos Productos.!', {
        body: 'Conoce los nuevos productos de la tienda',
        icon: './img/noti.jpg'
      });
  
      notificacion.addEventListener('click', () => {
        // Acción cuando el usuario hace clic en la notificación
        console.log('El usuario hizo clic en la notificación');
      });
    }
  }