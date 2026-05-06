/*!
 * Creative Theme - custom JS (vanilla, no jQuery)
 */
(function () {
  'use strict';

  // Smooth scroll for .page-scroll links
  document.querySelectorAll('a.page-scroll').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Add .navbar-scrolled class when page scrolls past 100px
  var mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', function () {
      mainNav.classList.toggle('navbar-scrolled', window.scrollY > 100);
    }, { passive: true });
  }

  // Close mobile navbar when a nav link is clicked
  var navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    navbarCollapse.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

})();
