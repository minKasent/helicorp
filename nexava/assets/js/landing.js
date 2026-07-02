(function () {
  'use strict';

  function each(selector, fn) {
    document.querySelectorAll(selector).forEach(fn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('#mobile-menu ul');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (menu && mobileMenu) mobileMenu.appendChild(menu.cloneNode(true));

    each('.sidebar__toggle', function (button) {
      button.addEventListener('click', function () {
        document.querySelector('.offcanvas__info')?.classList.add('info-open');
        document.querySelector('.offcanvas__overlay')?.classList.add('overlay-open');
      });
    });

    each('.offcanvas__close, .offcanvas__overlay, .mobile-menu a', function (el) {
      el.addEventListener('click', function () {
        document.querySelector('.offcanvas__info')?.classList.remove('info-open');
        document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open');
      });
    });

    each('[data-bs-toggle="tab"]', function (tab) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.querySelector(tab.getAttribute('href'));
        if (!target) return;
        each('[data-bs-toggle="tab"]', function (item) { item.classList.remove('active'); });
        each('.tab-pane', function (pane) { pane.classList.remove('show', 'active'); });
        tab.classList.add('active');
        target.classList.add('show', 'active');
      });
    });

    var backTop = document.querySelector('#back-top');
    if (backTop) {
      addEventListener('scroll', function () {
        backTop.classList.toggle('show', scrollY > 20);
      }, { passive: true });
      backTop.addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var form = document.querySelector('#contact-form');
    var messages = document.querySelector('#form-messages');
    if (form && messages) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        fetch(form.action, { method: 'POST', body: new FormData(form) })
          .then(function (response) { return response.text(); })
          .then(function (text) {
            messages.className = 'text-dark fw-bold mt-3 border py-2 px-3';
            messages.textContent = text || 'Thank you. We will contact you soon.';
            form.reset();
          })
          .catch(function () {
            messages.className = 'text-warning fw-bolder mt-2';
            messages.textContent = 'Oops! Your message could not be sent.';
          });
      });
    }
  });
}());
