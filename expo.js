/* Navigasi presentasi saja; tidak membaca atau mengubah state game. */
(() => {
  const links = [...document.querySelectorAll('.navlinks a, .bottom-nav a')];
  const sections = [...new Set(links.map(a => a.hash))].map(hash => document.querySelector(hash)).filter(Boolean);
  function highlight() {
    let active = '';
    const line = Math.min(window.innerHeight * .35, 230);
    for (const section of sections) if (section.getBoundingClientRect().top <= line) active = '#' + section.id;
    // Materi and boss are part of their respective learning steps.
    for (const a of links) {
      const selected = a.hash === active || (active === '#belajar' && a.closest('.bottom-nav') && a.hash === '#kelas');
      a.classList.toggle('active', Boolean(selected));
      if (selected) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
    }
  }
  let pending = false;
  window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(() => { pending = false; highlight(); }); } }, {passive:true});
  window.addEventListener('resize', highlight);
  window.addEventListener('load', highlight);
  highlight();
})();
