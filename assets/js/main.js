(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var path = window.location.pathname.replace(/\/$/, '');
  if (!path) path = '/index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#')) return;

    var resolved = new URL(href, window.location.href).pathname.replace(/\/$/, '');
    var isSectionMatch =
      (resolved.endsWith('/get-started/index.html') && path.startsWith('/get-started/')) ||
      (resolved.endsWith('/policies/index.html') && path.startsWith('/policies/'));

    if (resolved === path || isSectionMatch || (resolved.endsWith('/index.html') && path === resolved.replace('/index.html', ''))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
