const SOUNDS = {
  hover: '/audio/UI/Hover.ogg',
  click: '/audio/UI/Click.ogg',
  back: '/audio/UI/Back.ogg',
  home: '/audio/UI/Home.ogg',
//   activate: '/audio/UI/activate.mp3'
};

const playSound = (type) => {
  const path = SOUNDS[type];
  if (path) {
    const sfx = new Audio(path);
    sfx.preservesPitch = false;
    sfx.playbackRate = 0.9 + Math.random() * 0.2;
    sfx.volume = 0.3;
    sfx.play().catch(() => {});
  }
};

// Listen for Hovers
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('[data-sfx-hover]');
  if (target) playSound('hover');
});

// Listen for Clicks
document.addEventListener('mousedown', (e) => {
  const target = e.target.closest('[data-sfx-click]');
  if (target) {
    const action = target.dataset.sfxClick;
    playSound(action || 'click');
  }
});
