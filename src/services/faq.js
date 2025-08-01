/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

import dom from '../utils/dom.js';

/**
 * Loads and displays FAQs into a specified container.
 * @param {string} selector - The CSS selector of the container where the FAQs will be loaded (e.g., '#faq-content').
 * @param {Array} model - An array of FAQ objects, each containing a question and an answer.
 * @returns {void}
 */
const load = (selector, model) => {
	const container = dom.get(selector);
	if (container) {
		model.forEach((f) => {
			const item = dom.create('div', 'faq-item', /* html */ `
				<button class="faq-question">
					<span>${f.question}</span>
					<i class="fas fa-plus faq-icon"></i>
				</button>
				<div class="faq-answer"><p>${f.answer.replace(/\n/g, '<br />')}</p></div>
			`);

			item.querySelector('.faq-question').addEventListener('click', () => {
				item.classList.toggle('active');
			});

			container.appendChild(item);
		});
	}
};

export default { load };