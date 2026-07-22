(() => {
  const VERSION = '15';

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    })[char]);
  }

  function fallbackMarkup(element) {
    const label = element.getAttribute('aria-label') || 'MOODIE 포스터';
    const title = label.replace(/\s*포스터$/, '');
    const hue = [...title].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 360;

    element.classList.add('poster-fallback-visible');
    element.innerHTML = `
      <div class="poster-fallback-art" style="--poster-hue:${hue}">
        <span class="poster-fallback-brand">MOODIE ORIGINAL</span>
        <span class="poster-fallback-circle poster-fallback-circle-one"></span>
        <span class="poster-fallback-circle poster-fallback-circle-two"></span>
        <span class="poster-fallback-genre">MOVIE COLLECTION</span>
        <strong class="poster-fallback-title">${escapeHtml(title)}</strong>
      </div>`;
  }

  function enhancePoster(element) {
    if (!(element instanceof HTMLElement) || element.dataset.posterEnhanced === 'true') return;
    element.dataset.posterEnhanced = 'true';

    const x = Number.parseInt(element.style.getPropertyValue('--x'), 10) || 0;
    const y = Number.parseInt(element.style.getPropertyValue('--y'), 10) || 0;
    const image = document.createElement('img');

    image.className = 'poster-sheet-image';
    image.alt = element.getAttribute('aria-label') || '영화 포스터';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.src = `assets/posters.webp?v=${VERSION}`;
    image.style.left = `${-x * 100}%`;
    image.style.top = `${-y * 100}%`;

    image.addEventListener('load', () => element.classList.add('poster-image-loaded'), { once: true });
    image.addEventListener('error', () => fallbackMarkup(element), { once: true });
    element.appendChild(image);
  }

  function scan(root = document) {
    if (root instanceof Element && root.matches('.poster-sprite')) enhancePoster(root);
    root.querySelectorAll?.('.poster-sprite').forEach(enhancePoster);
  }

  document.addEventListener('DOMContentLoaded', () => {
    scan();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) scan(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
