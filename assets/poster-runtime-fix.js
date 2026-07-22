(() => {
  const VERSION = '16';

  const style = document.createElement('style');
  style.textContent = `
    .poster-sprite{position:relative;display:block;width:100%;height:100%;overflow:hidden;background:#111827!important;background-image:none!important}
    .poster-sheet-image{position:absolute;z-index:1;width:600%!important;height:500%!important;max-width:none!important;object-fit:fill;display:block}
    .poster-fallback-art{position:absolute;inset:0;z-index:1;overflow:hidden;color:#fff;background:linear-gradient(145deg,hsl(var(--poster-hue) 75% 55%),hsl(calc(var(--poster-hue) + 65) 68% 28%) 58%,#050816)}
    .poster-fallback-art:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 18%,rgba(255,255,255,.3),transparent 26%)}
    .poster-fallback-brand,.poster-fallback-genre,.poster-fallback-title{position:absolute;z-index:2;left:9%;right:8%}
    .poster-fallback-brand{top:7%;font-size:11px;letter-spacing:2px;font-weight:800}
    .poster-fallback-genre{bottom:28%;font-size:10px;letter-spacing:1.5px;color:rgba(255,255,255,.7)}
    .poster-fallback-title{bottom:10%;font-size:clamp(18px,2.1vw,30px);line-height:1.15;word-break:keep-all}
    .poster-fallback-circle{position:absolute;border-radius:50%;background:rgba(255,255,255,.12)}
    .poster-fallback-circle-one{width:35%;aspect-ratio:1;right:8%;top:13%}
    .poster-fallback-circle-two{width:23%;aspect-ratio:1;left:22%;top:34%}
  `;
  document.head.appendChild(style);

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
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
    let completed = false;

    image.className = 'poster-sheet-image';
    image.alt = element.getAttribute('aria-label') || '영화 포스터';
    image.loading = 'eager';
    image.decoding = 'async';
    image.src = `assets/posters.webp?v=${VERSION}`;
    image.style.left = `${-x * 100}%`;
    image.style.top = `${-y * 100}%`;

    image.addEventListener('load', () => {
      completed = true;
      element.classList.add('poster-image-loaded');
    }, { once: true });
    image.addEventListener('error', () => {
      completed = true;
      fallbackMarkup(element);
    }, { once: true });

    element.appendChild(image);
    window.setTimeout(() => {
      if (!completed && !image.complete) fallbackMarkup(element);
    }, 4000);
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
