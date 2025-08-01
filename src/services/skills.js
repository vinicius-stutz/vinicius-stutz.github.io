/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

import dom from '../utils/dom.js';

/**
 * Loads and displays the skills data into a specified container.
 * @param {string} selector - The CSS selector of the container where the skills will be loaded (e.g., '#skills-content').
 * @param {Object} model - The skills data model containing categories and items.
 * @returns {void}
 */
const load = (selector, model) => {
	const container = dom.get(selector);
	if (container) {
		model.forEach((skill) => {
			const card = dom.create('div', 'skill-card', /*html*/ `
				<h3 class="skill-category">${skill.category}</h3>
				<ul class="skill-list">
					${skill.items.map((i) => /*html*/ `<li class="skill-item">${i}</li>`).join('')}
				</ul>
			`);

			container.appendChild(card);
		});
	}
};

export default { load };