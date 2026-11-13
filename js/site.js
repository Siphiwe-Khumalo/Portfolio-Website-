// Portfolio interactions: header state, mobile menu, section highlight, reveal, gallery lightbox.
(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');

  // Header background once the page scrolls
  function onScroll() { header.classList.toggle('is-solid', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    list.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setMenu(!list.classList.contains('is-open')); });
  list.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && list.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });

  // Highlight the nav link of the section in view
  var links = Array.prototype.slice.call(list.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) spy.observe(s); });

    // Gentle reveal on scroll
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); rev.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { rev.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Gallery lightbox (links still open the image directly if JS or <dialog> is unavailable)
  var dlg = document.querySelector('.lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('.lb-stage img');
  var cap = dlg.querySelector('.lb-caption');
  var count = dlg.querySelector('.lb-count');
  var items = [], index = 0, title = '', opener = null;

  function show(i) {
    index = (i + items.length) % items.length;
    var a = items[index], thumb = a.querySelector('img'), fc = a.querySelector('figcaption');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = fc ? fc.textContent : '';
    count.textContent = title + ' · ' + (index + 1) + ' / ' + items.length;
    var multi = items.length > 1;
    dlg.querySelectorAll('[data-lb="prev"],[data-lb="next"]').forEach(function (b) { b.hidden = !multi; });
  }

  document.querySelectorAll('[data-gallery]').forEach(function (g) {
    var group = Array.prototype.slice.call(g.querySelectorAll('a.g-item'));
    group.forEach(function (a, i) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        items = group; title = g.getAttribute('data-gallery'); opener = a;
        show(i);
        dlg.showModal();
      });
    });
  });

  dlg.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lb]');
    if (b) {
      var act = b.getAttribute('data-lb');
      if (act === 'close') dlg.close();
      else show(index + (act === 'next' ? 1 : -1));
      return;
    }
    if (e.target === dlg || e.target.classList.contains('lb-stage')) dlg.close();
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
  });
  dlg.addEventListener('close', function () { img.removeAttribute('src'); if (opener) opener.focus(); });
})();
