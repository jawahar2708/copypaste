/* ILP Unified Script - use this single file for all pages */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const loader = document.querySelector('.loading-screen');

    // Loader: hide after window load, with fallback timeout
    const hideLoader = () => loader && loader.classList.add('hide-loader');
    window.addEventListener('load', () => setTimeout(hideLoader, 450));
    setTimeout(hideLoader, 1300);

    // Persisted dark mode
    if (localStorage.getItem('ilp-theme') === 'dark') {
      body.classList.add('dark-mode');
    }

    // Theme toggle injected near user area
    const userArea = document.querySelector('.userarea');
    if (userArea && !document.querySelector('.theme-toggle')) {
      const toggle = document.createElement('button');
      toggle.className = 'theme-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Toggle dark mode');
      toggle.innerHTML = '<span class="theme-toggle-knob">' +
        (body.classList.contains('dark-mode') ? '🌙' : '☀️') +
        '</span>';

      userArea.parentNode.insertBefore(toggle, userArea);

      toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('ilp-theme', isDark ? 'dark' : 'light');
        const knob = toggle.querySelector('.theme-toggle-knob');
        if (knob) knob.textContent = isDark ? '🌙' : '☀️';
      });
    }

    // Mobile sidebar toggle
    document.querySelectorAll('.menu-bars').forEach(function (menu) {
      menu.addEventListener('click', function () {
        body.classList.toggle('sidebar-open');
      });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        if (history.length > 1) history.back();
      });
    });

    // Completed projects table search
    const search = document.querySelector('.project-search');
    const projectRows = document.querySelectorAll('.project-table tbody tr');
    const resultCount = document.querySelector('[data-result-count]');
    if (search && projectRows.length) {
      search.addEventListener('input', function () {
        const query = search.value.toLowerCase().trim();
        let visibleCount = 0;

        projectRows.forEach(function (row) {
          const match = row.innerText.toLowerCase().includes(query);
          row.style.display = match ? '' : 'none';
          if (match) visibleCount += 1;
        });

        if (resultCount) {
          resultCount.textContent = 'Showing ' + (visibleCount ? 1 : 0) +
            ' to ' + visibleCount + ' of ' + visibleCount + ' projects';
        }
      });
    }

    // Filter select feedback
    document.querySelectorAll('.tool-row select').forEach(function (select) {
      select.addEventListener('change', function () {
        select.classList.add('selected-filter');
        setTimeout(function () {
          select.classList.remove('selected-filter');
        }, 550);
      });
    });

    // Hover focus for tables
    document.querySelectorAll('.stage-table tbody tr, .team-table tbody tr, .ticket-table tbody tr, .project-table tbody tr')
      .forEach(function (row) {
        row.addEventListener('mouseenter', function () { row.classList.add('row-focus'); });
        row.addEventListener('mouseleave', function () { row.classList.remove('row-focus'); });
      });

    // Raise ticket character counter
    const description = document.querySelector('#description');
    const counter = document.querySelector('.counter');
    if (description && counter) {
      const updateCounter = () => { counter.textContent = description.value.length + ' / 2000'; };
      description.addEventListener('input', updateCounter);
      updateCounter();
    }

    // User dropdown
    if (userArea) {
      userArea.addEventListener('click', function (event) {
        event.stopPropagation();
        userArea.classList.toggle('show-user-menu');
      });

      document.addEventListener('click', function (event) {
        if (!userArea.contains(event.target)) {
          userArea.classList.remove('show-user-menu');
        }
      });
    }
  });
})();
