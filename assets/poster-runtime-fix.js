(() => {
  const POSTER_URL = 'https://raw.githubusercontent.com/H-jon/-72/main/assets/posters.webp?poster=v21';
  function applyPoster(el) {
    if (!(el instanceof HTMLElement)) return;
    const x = Number.parseInt(el.style.getPropertyValue('--x'), 10) || 0;
    const y = Number.parseInt(el.style.getPropertyValue('--y'), 10) || 0;
    el.style.backgroundImage = `url("${POSTER_URL}")`;
    el.style.backgroundSize = '600% 500%';
    el.style.backgroundPosition = `${x * 20}% ${y * 25}%`;
    el.style.backgroundRepeat = 'no-repeat';
  }
  function scan(root = document) {
    if (root instanceof Element && root.matches('.poster-sprite')) applyPoster(root);
    root.querySelectorAll?.('.poster-sprite').forEach(applyPoster);
  }
  document.addEventListener('DOMContentLoaded', () => {
    scan();
    new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n instanceof Element && scan(n))))
      .observe(document.body, {childList:true, subtree:true});
  });
})();