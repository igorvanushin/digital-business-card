'use strict';

// sidebar contacts toggle (mobile)
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

sidebarBtn.addEventListener('click', function () {
  const isActive = sidebar.classList.toggle('active');
  sidebarBtn.setAttribute('aria-expanded', String(isActive));
});
