const SOUNDS = {
  hover: '/audio/UI/Hover.ogg',
  click: '/audio/UI/Click.ogg',
  back: '/audio/UI/Back.ogg',
  home: '/audio/UI/Home.ogg',
};

// 1. Preload everything immediately
const audioCache = {};
Object.entries(SOUNDS).forEach(([name, path]) => {
  audioCache[name] = new Audio(path);
  audioCache[name].preload = 'auto';
});

const playSound = (type) => {
  const source = audioCache[type];
  if (!source) return;

  // 2. Clone the node so sounds can overlap (multi-channel)
  const instance = source.cloneNode();
  instance.volume = 0.1;
  instance.preservesPitch = false;
  instance.playbackRate = 0.85 + Math.random() * 0.3; // Adds "flavor" to UI sounds
  
  instance.play().catch(() => {
    // Silently fail if browser still hasn't allowed audio
  });
};

// 3. The "Silent Unlock"
// The moment the user clicks anywhere, we play a 0.0001s silent sound.
const unlock = () => {
  const context = new (window.AudioContext || window.webkitAudioContext)();
  if (context.state === 'suspended') {
    context.resume();
  }
  // Once unlocked, we don't need this listener anymore
  document.removeEventListener('click', unlock);
};
document.addEventListener('click', unlock);

// 4. Global Event Delegation
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('[data-sfx-hover]')) playSound('hover');
});

document.addEventListener('mousedown', (e) => {
  const target = e.target.closest('[data-sfx-click]');
  if (target) {
    const action = target.dataset.sfxClick;
    playSound(action || 'click');
  }
});