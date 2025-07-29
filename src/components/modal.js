/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the MIT license.
 */

import dom from '../utils/dom.js';
import scrollbar from '../utils/scrollbar.js';

// Open
const open = (title, content) => {
	const modal = dom.getById('modal');
	const modalTitle = dom.getById('modal-title');
	const modalContent = dom.getById('modal-content');

	modalTitle.innerHTML = title;
	modalContent.innerHTML = content;
	modal.classList.add('show');
	scrollbar.disableScroll();
};

// Close
const close = () => {
	const modal = dom.getById('modal');
	modal.classList.remove('show');
	scrollbar.enableScroll();
};

// Load external HTML
const load = async (filename) => {
	try {
		const response = await fetch(filename);
		if (!response.ok) throw new Error(`Não foi possível carregar o conteúdo de ${filename}`);
		return await response.text();
	} catch (error) {
		console.error('Erro:', error);
		return '<p>Erro ao carregar o conteúdo.</p>';
	}
};

/**
 * Initializes the modal functionality by setting up event listeners for elements
 * that trigger modals. It listens for clicks on elements with the `data-modal` attribute
 * and opens the modal with the corresponding content loaded from the specified HTML file.
 * @param {Array<string>} modalPathList - List of paths to HTML files for modals.
 * @returns {void}
 */
const init = async (modalPathList) => {
	const modalPaths = Object.fromEntries(
		modalPathList.map(path => {
			const key = path.split('/').pop().replace('.html', '');
			return [key, path];
		})
	);

	Array.from(dom.getAll('a[data-modal]')).forEach((el) => {
		el.addEventListener('click', async (e) => {
			e.preventDefault();
			const modalType = el.getAttribute('data-modal');
			const title = el.getAttribute('data-title') || '';

			const htmlPath = modalPaths[modalType];
			if (!htmlPath) {
				console.error(`Documento HTML não encontrado para: ${modalType}`);
				return;
			}

			const content = await load(htmlPath);

			history.pushState({ modalType }, title, `#${modalType}`);
			open(title, content);
		});
	});

	// Listener to close the modal
	dom.getById('modal-close').addEventListener('click', close);

	// Close a modal click outside the modal content
	dom.getById('modal').addEventListener('click', (e) => {
		if (e.target === e.currentTarget) {
			close();
		}
	});

	// Close modal on Escape key press
	dom.addListener('keydown', (e) => {
		if (e.key === 'Escape' && dom.getById('modal').classList.contains('show')) {
			close();
		}
	});
};

export default { init };
