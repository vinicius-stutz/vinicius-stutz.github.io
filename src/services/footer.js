/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
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