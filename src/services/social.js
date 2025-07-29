/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';

/**
 * Loads social media links into the specified container.
 * Each link is created as an anchor element with an icon and the appropriate URL.
 * @param {string} selector - The CSS selector for the container where social links will be loaded.
 * @param {Array} model - An array of objects representing social media links, each containing `url` and `icon` properties.
 */
const load = (selector, model) => {
	const container = dom.get(selector);
	model.forEach((s) => {
		const a = dom.create('a', '', /* html */ `<i class="${s.icon}"></i>`);
		a.href = s.url;
		a.target = '_blank';
		a.rel = 'noopener noreferrer';

		container.appendChild(a);
	});
};

export default { load };