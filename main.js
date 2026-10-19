/* Apparitions au défilement (opacité + translation). Sans JavaScript, tout est visible. */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var vh = window.innerHeight || 800;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) {
    if (el.getBoundingClientRect().top < vh) return; // déjà visible au chargement : rien à animer
    el.classList.add('will');
    io.observe(el);
  });
})();
