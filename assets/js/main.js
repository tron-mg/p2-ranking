(function () {
  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (path.endsWith(href) || (href === 'index.html' && /\/p2-ranking\/?$/.test(path))) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
