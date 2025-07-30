/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

/**
 * Initializes the footer functionality by adding a click event listener to the element
 * with the class 'footer-top'. When clicked, it smoothly scrolls the page to the top,
 * targeting the hero section with the ID 'home'.
 *
 * @function
 */
const initFooter = () => {
	const footerTop = select('.footer-top');
	if (footerTop) {
		footerTop.addEventListener('click', (e) => {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
};