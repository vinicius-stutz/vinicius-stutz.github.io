/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';

/**
 * Register modal service listener.
 * @param {string} modalList - The list of modal.
 * @returns {void}
 */
const registerModalListener = (modalList) => {
	const hash = window.location.hash?.toLowerCase();

	const key = hash.replace('#', '');
	const search = `./pages/${key}.html`;
	const match = modalList.find(item => item === search) || null;

	if (match) {
		const link = dom.get(`a[href="${hash}"]`);

		if (link) {
			link.click();
		}
	}
};

/**
 * Initializes the navigation bar with smooth scrolling and history management.
 * - Sets up click listeners for navbar links to enable smooth scrolling to sections.
 * - Updates the browser history state when navigating to sections.
 * - Adds a background to the navbar when scrolling down.
 * - Highlights the active section link based on the current scroll position.
 * - Handles mobile menu toggle for smaller screens.
 * - Automatically scrolls to sections when the page loads with a hash in the URL.
 * - Updates the active link based on the visible section during scroll events.
 * @param {string} navbarSelector - The CSS selector for the navbar element.
 * @param {string} menuSelector - The CSS selector for the navbar menu element.
 * @param {string} toggleSelector - The CSS selector for the navbar toggle button.
 * @param {string} linkListSelector - The CSS selector for the list of navigation links.
 * @returns {void}
 */
const init = (navbarSelector, menuSelector, toggleSelector, linkListSelector) => {
	const navbar = dom.get(navbarSelector);
	const menu = dom.get(menuSelector);
	const toggle = dom.get(toggleSelector);
	const navLinks = Array.from(dom.getAll(linkListSelector));

	// Mobile toggle
	toggle.addEventListener('click', () => {
		toggle.classList.toggle('active');
		menu.classList.toggle('active');
	});

	// Navigation links
	// Animated navigation + address bar update
	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			const target = dom.get(href);
			if (target) {
				menu.classList.remove('active');
				toggle.classList.remove('active');

				// Update active link
				navLinks.forEach(l => l.classList.remove('active'));
				link.classList.add('active');
			}
		});
	});

	// Scroll event to add background and update active nav link
	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}

		// Update history.pushState according to the visible section
		const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
		const navbarHeight = navbar.offsetHeight;
		let currentSectionId = null;

		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const rect = section.getBoundingClientRect();
			const sectionTop = rect.top + window.scrollY - navbarHeight;
			const sectionBottom = sectionTop + section.offsetHeight;

			if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
				currentSectionId = section.id;
				break;
			}
		}

		// Update history only if necessary
		if (currentSectionId) {
			const newHash = `#${currentSectionId}`;
			if (window.location.hash !== newHash) {
				history.pushState(null, '', newHash);
			}

			// Update active menu link
			navLinks.forEach(link => {
				const href = link.getAttribute('href');
				if (href === newHash) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		} else if (window.scrollY < 100 && window.location.hash) {
			history.pushState(null, '', window.location.pathname);

			// Remove active from all links if at the top
			navLinks.forEach(link => link.classList.remove('active'));
		}
	});
};

export default { init, registerModalListener };