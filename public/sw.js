self.addEventListener('install', (event) => {
    console.log('Service Worker installed.');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // You can implement caching here for offline support.
  });
  