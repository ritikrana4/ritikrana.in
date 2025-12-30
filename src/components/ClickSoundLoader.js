// Add this to your main layout or in the <head> of your site
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.src = '/click-sound.js';
  script.defer = true;
  document.head.appendChild(script);
}
