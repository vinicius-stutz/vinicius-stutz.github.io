/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import './css/style.scss';
import dom from './utils/dom.js';
import model from './models/viewModel.json';
import resume from './services/resume.js';
import skills from './services/skills.js';
import testimonials from './services/testimonials.js';
import faq from './services/faq.js';
import social from './services/social.js';
import modal from './components/modal.js';
import cookies from './components/cookies.js';
import tooltips from './components/tooltips.js';
import navbar from './components/navigation.js';
import scroll from './components/scroll.js';
import dateTime from './utils/dateTime.js';
import request from './utils/request.js';

/**
 * Loads HTML content into a specified element.
 * This function fetches the HTML from the provided path and sets it as the inner HTML
 * of the element identified by the selector.
 * @param {string} selector - The CSS selector of the element where the HTML will be set.
 * @param {string} path - The path to the HTML file to be loaded.
 * @returns {Promise<void>} - A promise that resolves when the HTML is successfully loaded.
 */
const loadHtmlContent = async (selector, path) => {
	const html = await request.loadHtml(path);
	dom.setHtml(selector, html);
};

/**
 * Loads the video source for the specified video element.
 * This function updates the source of the video element to the provided path
 * and reloads the video to reflect the new source.
 * @param {string} selector - The CSS selector of the video element.
 * @param {string} path - The path to the video file.
 * @returns {void}
 */
const loadVideoSource = (selector, path) => {
	const video = dom.get(selector);
	if (!video) return;

	const source = video.querySelector('source');
	source.src = path;

	video.load();
};

/**
 * Sets the current year in the specified element.
 * This is typically used in the footer to display the current year dynamically.
 * @param {string} selector - The CSS selector of the element where the year will be set.
 * @returns {void}
 */
const setCurrentYear = (selector) => {
	const yearElement = dom.get(selector);
	if (yearElement) {
		yearElement.textContent = dateTime.getCurrentYear();
	}
};

/**
 * Hides the preloader with a fade-out effect and removes it from the DOM.
 * This function should be called after all initial content has been loaded.
 */
const hidePreloader = (selector) => {
	const preloader = dom.get(selector);
	if (!preloader) return;

	preloader.classList.add('fade-out');
	// Remove the element from the DOM after the transition completes
	preloader.addEventListener('transitionend', () => {
		preloader.remove();
		document.documentElement.style.overflow = '';
		document.body.style.overflow = '';
		window.onscroll = null;
	});
};

/**
 * Initializes the application by loading various sections and initializing UI components.
 * This function sets up the timeline, skills, testimonials, FAQ, social links, navbar,
 * hero section, tooltips, modals, cookie banner, footer, and sets the current year.
 */
const init = async () => {
	// cookie warning
	cookies.notify('#cookie-banner', '#cookie-accept', '#cookie-decline');

	// Load HTML content for various sections
	await Promise.all([
		loadHtmlContent('#hero-content', model.hero.path),
		loadHtmlContent('#about-content', model.about.path),
		modal.init(model.modal)
	]);

	loadVideoSource('.about-video-element', model.about.video);

	// services
	resume.load('#timeline-content', model.resume);
	skills.load('#skills-content', model.skills);
	testimonials.load('#testimonials-content', model.testimonials);
	faq.load('#faq-content', model.faq);
	social.load('#social-links', model.social);

	// utils
	setCurrentYear('#current-year');

	// hints
	tooltips.init('#tooltip');

	// navigation
	navbar.init('#navbar', '#navbar-menu', '#navbar-toggle', 'a[href^="#"]');

	// scroller
	const navbarHeight = dom.get('#navbar').offsetHeight; // Adjust offset for navbar height
	scroll.init(navbarHeight);

	// open modal depends address bar
	navbar.registerModalListener(model.modal);

	// end
	hidePreloader('#preloader');
};

// Initialize the application when the DOM is fully loaded
dom.addListener('DOMContentLoaded', init);