// click-sound.js
// Plays a click sound on all button and link clicks

const clickAudio = new Audio('/click.wav');
clickAudio.volume = 0.2; // Adjust volume as needed


function playClickSound(e) {
  // Prevent double-triggering on keyboard navigation
  if (e.isTrusted) {
    const enabled = localStorage.getItem('sound-enabled') !== 'false';
    if (!enabled) return;
    clickAudio.currentTime = 0;
    clickAudio.play();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  function attachClickSound() {
    document.body.addEventListener('click', function (e) {
      let el = e.target;
      // Traverse up to find button or link
      while (el && el !== document.body) {
        if (el.tagName === 'BUTTON' || el.tagName === 'A') {
          playClickSound(e);
          break;
        }
        el = el.parentElement;
      }
    }, true);
  }
  attachClickSound();
  document.addEventListener('astro:after-swap', () => {
    attachClickSound();
  });
});
