/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';

/**
 * Loads and displays the timeline data into a specified container.
 * @param {string} selector - The CSS selector of the container where the timeline will be loaded (e.g., '#timeline-content').
 * @param {Array} model - An array of objects representing the timeline data, each containing 'year', 'role', and 'company'.
 * @returns {void}
 */
const load = (selector, model) => {
	const container = dom.get(selector);
	model.forEach((item) => {
		const wrapper = dom.create('div', 'timeline-item', /*html*/ `
			<div class="timeline-year">${item.year}</div>
			<div class="timeline-content">
				<div class="timeline-role">${item.role}</div>
				<div class="timeline-company">${item.company.replace(/\n/g, '<br />')}</div>
			</div>
		`);

		container.appendChild(wrapper);
	});
};

export default { load };