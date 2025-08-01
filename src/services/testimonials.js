/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

import dom from '../utils/dom.js';

/**
 * Loads and displays testimonials into a specified container.
 * @param {string} selector - The CSS selector of the container where the testimonials will be loaded (e.g., '#testimonials-content').
 * @param {Object[]} model - An array of testimonial objects, each containing `text`, `name`, and `avatar` properties.
 * @returns {void}
 */
const load = (selector, model) => {
	const container = dom.get(selector);
	if (container) {
		model.forEach((t) => {
			const card = dom.create('div', 'testimonial-card', /* html */`
				<p class="testimonial-text">"${t.text}"</p>
				<div class="testimonial-author">
					<img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" />
					<span class="testimonial-name">${t.name}</span>
				</div>
			`);

			container.appendChild(card);
		});
	}
};

export default { load };