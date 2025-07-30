/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

import dom from '../utils/dom.js';

/**
 * Initializes the cookie notification banner.
 * - Displays a banner after a short delay.
 * - Provides buttons to accept or decline cookies.
 * - Hides the banner when either button is clicked.
 * @param {string} bannerSelector - The CSS selector for the cookie banner element.
 * @param {string} acceptSelector - The CSS selector for the accept button.
 * @param {string} declineSelector - The CSS selector for the decline button.
 * @returns {void}	
 */
const notify = (bannerSelector, acceptSelector, declineSelector) => {
	const banner = dom.get(bannerSelector);
	const acceptBtn = dom.get(acceptSelector);
	const declineBtn = dom.get(declineSelector);
	const PRIVACY_CONSENT_KEY = 'userPrivacyConsent';

	// Check if consent has already been given
	if (localStorage.getItem(PRIVACY_CONSENT_KEY) === 'accepted') {
		return; // Don't show the banner
	}

	// Show banner after page load
	setTimeout(() => {
		if (banner) {
			banner.classList.add('show');
		}
	}, 1000);

	const hide = () => {
		if (banner) {
			banner.classList.remove('show');
		}
	};

	const handleAccept = () => {
		localStorage.setItem(PRIVACY_CONSENT_KEY, 'accepted');
		hide();
	};

	// Show banner after a delay if no consent is stored
	setTimeout(() => {
		if (banner) banner.classList.add('show');
	}, 1000);

	if (acceptBtn) acceptBtn.addEventListener('click', handleAccept);
	if (declineBtn) declineBtn.addEventListener('click', hide);
};

export default { notify };