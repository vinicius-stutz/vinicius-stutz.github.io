/*
 * Copyright (c) 2025 vinici.us.com. All Rights Reserved.
 * Licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.
 */

import { resolve } from 'path'

export default {
	base: '/',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				bio: resolve(__dirname, 'bio.html'),
			}
		}
	}
}
