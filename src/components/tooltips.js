/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';

/**
 * Initializes the tooltip functionality.
 * - Displays tooltips for elements with `data-tooltip` attributes or `<abbr>` elements with `title` attributes.
 * - Tooltips appear on hover or focus, and can be clicked to toggle visibility.
 * - Tooltips are positioned below the element and centered horizontally.
 * - Hides tooltips when clicking outside of them.
 * @param {string} selector - The CSS selector for the tooltip element.
 * @returns {void}
 */
const init = (selector) => {
	const tooltip = dom.get(selector);
	let tooltipTimeout;

	// Tooltip for any element with data-tooltip or abbr[title]
	const getTooltipElements = () => {
		const dataTooltipEls = Array.from(dom.getAll('[data-tooltip]'));
		const abbrTitleEls = Array.from(dom.getAll('abbr[title]'));
		return [...dataTooltipEls, ...abbrTitleEls];
	};

	getTooltipElements().forEach((el) => {
		// Prefer data-tooltip, fallback to title
		const getMessage = () => el.getAttribute('data-tooltip') || el.getAttribute('title');
		// Remove native tooltip for abbr
		if (el.tagName === 'ABBR' && el.hasAttribute('title')) {
			el.setAttribute('data-tooltip', el.getAttribute('title'));
			el.removeAttribute('title');
		}

		const showTooltip = (evt) => {
			tooltip.querySelector('.tooltip-content').textContent = getMessage();
			const rect = el.getBoundingClientRect();
			tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
			tooltip.style.left = `${rect.left + rect.width / 2}px`;
			tooltip.style.transform = 'translateX(-50%)';
			tooltip.classList.add('show');
		};

		const hideTooltip = () => {
			tooltip.classList.remove('show');
			tooltip.style.top = `-100px`;
			tooltip.style.left = `-100px`;
		};

		el.addEventListener('mouseenter', showTooltip);
		el.addEventListener('focus', showTooltip);
		el.addEventListener('mouseleave', hideTooltip);
		el.addEventListener('blur', hideTooltip);

		// Optional: click to toggle (for accessibility)
		el.addEventListener('click', (evt) => {
			evt.preventDefault();
			clearTimeout(tooltipTimeout);
			if (tooltip.classList.contains('show')) {
				hideTooltip();
			} else {
				showTooltip(evt);
				tooltipTimeout = setTimeout(hideTooltip, 7000);
			}
		});
	});

	// Hide tooltip on outside click
	dom.addListener('click', (e) => {
		if (!e.target.classList.contains('hero-popover') && !tooltip.contains(e.target)) {
			tooltip.classList.remove('show');
		}
	});
};

export default { init };