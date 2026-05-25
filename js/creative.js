/*!
 * Creative Theme - custom JS (vanilla, no jQuery)
 */
(function () {
  'use strict';

  // Smooth scroll for .page-scroll links
  document.querySelectorAll('a.page-scroll').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      
      // If the link is just an anchor on the current page
      if (href.startsWith('#')) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.scrollY - 50;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      } 
      // If it's a full URL that ends with an anchor on the home page
      else if (href.includes('#')) {
        var parts = href.split('#');
        var path = parts[0];
        var hash = '#' + parts[1];
        
        // If we're already on the home page (or the path matches), just scroll
        if (window.location.pathname === path || window.location.pathname === path + '/' || path === '/') {
          var target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            var top = target.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: top, behavior: 'smooth' });
            // Update URL without reload
            history.pushState(null, null, hash);
          }
        }
      }
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
