self.addEventListener('push', function (event) {
    try {
      if (event.data) {
        const data = event.data.json()
  
        // Set default values for missing properties in the push data
        const title = data.title || 'Default Title';
        const body = data.body || 'No message available';
        const icon = data.icon || '/icon.png';
        const badge = data.badge || '/badge.png';
  
        // Notification options
        const options = {
          body: body,
          icon: icon,
          badge: badge,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: '2', // This can be used for custom behavior, such as routing.
          },
        };
  
        // Show the notification
        event.waitUntil(self.registration.showNotification(title, options));
      }
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  });
  
  self.addEventListener('notificationclick', function (event) {
    console.log('Notification click received.');
    
    // Close the notification when clicked
    event.notification.close();
  
    // Open a new window/tab if clients.openWindow is available
    event.waitUntil(
      clients.openWindow ? clients.openWindow('https://imageai.pigeonic.com') : Promise.resolve()
    );
  });
  