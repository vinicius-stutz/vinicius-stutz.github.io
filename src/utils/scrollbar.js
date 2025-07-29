/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

const disableScroll = () => {
	// Salvar posição atual do scroll
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

	// Aplicar overflow hidden
	document.documentElement.style.overflow = 'hidden';
	document.body.style.overflow = 'hidden';

	// Manter posição
	window.onscroll = () => {
		window.scrollTo(scrollLeft, scrollTop);
	};
};

const enableScroll = () => {
	document.documentElement.style.overflow = '';
	document.body.style.overflow = '';
	window.onscroll = null;
};

export default { disableScroll, enableScroll };