/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';

/**
 * Smoothly scrolls the page to the element with the given target ID,
 * accounting for the height of the navbar to prevent overlap.
 *
 * @param {string} targetId - The CSS selector or ID of the target element to scroll to.
 * @param {number} height - The height to offset the scroll position, typically the navbar height.
 * @returns {void}
 */
const smoothScroll = (targetId, height) => {
	const target = dom.get(targetId);
	if (!target) return;
	const offsetTop = target.getBoundingClientRect().top + window.scrollY - height + 1;
	window.scrollTo({ top: offsetTop, behavior: 'smooth' });
};

/**
 * Instantly jumps the page to the element with the given target ID,
 * accounting for the height of the navbar to prevent overlap.
 *
 * @param {string} targetId - The CSS selector or ID of the target element to jump to.
 * @param {number} height - The height to offset the scroll position, typically the navbar height.
 * @returns {void}
 */
const jumpTo = (targetId, height) => {
	const target = dom.get(targetId);
	if (!target) return;
	const offsetTop = target.getBoundingClientRect().top + window.scrollY - height + 1;
	window.scrollTo({ top: offsetTop, behavior: 'instant' });
};

/**
 * Initializes smooth scrolling for anchor links on the page.
 * - Listens for click events on anchor links that start with `#`.
 * - Prevents default link behavior and scrolls to the target element with a smooth animation.
 * - Uses the provided offsetTopSize to adjust the scroll position.
 * @param {number} offsetTopSize - The height of the navbar or any other fixed
 * @returns {void}
 */
const init = (offsetTopSize) => {
	Array.from(dom.getAll('a[href^="#"]')).forEach((el) => {
		el.addEventListener('click', async (e) => {
			e.preventDefault();
			const targetId = e.currentTarget.getAttribute('href');
			history.pushState(null, '', targetId);
			smoothScroll(targetId, offsetTopSize);
		});
	});
};

export default { init, smoothScroll, jumpTo };