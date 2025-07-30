/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

const getById = (id) => document.getElementById(id);
const getByClass = (className) => document.getElementsByClassName(className);
const getByTag = (tagName) => document.getElementsByTagName(tagName);
const getByName = (name) => document.getElementsByName(name);
const getAll = (selector) => document.querySelectorAll(selector);
const get = (selector) => document.querySelector(selector);
const addListener = (event, handler) => document.addEventListener(event, handler);
const overflow = (show) => document.body.style.overflow = show ? 'auto' : 'hidden';
const create = (tagName, className, innerHTML) => {
	const element = document.createElement(tagName);
	if (className) element.className = className;
	if (innerHTML) element.innerHTML = innerHTML;
	return element;
};

const setHtml = async (selector, html) => {
	const target = get(selector);
	if (!target) return;

	target.innerHTML = html;
};

export default {
	getById,
	getByClass,
	getByTag,
	getByName,
	getAll,
	get,
	addListener,
	overflow,
	create,
	setHtml
};