/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

const htmlCache = new Map();

/**
 * Loads HTML content from a specified path and caches it for future use.
 * @param {string} path - The path to the HTML file to be loaded.
 * @returns {Promise<string>} - A promise that resolves with the loaded HTML content.
 */
const loadHtml = async (path) => {
	if (htmlCache.has(path)) {
		return htmlCache.get(path);
	}

	const html = await fetch(path).then(r => r.text());
	htmlCache.set(path, html);
	return html;
};

export default { loadHtml };