import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Remove trailing slash option - it's causing errors
		// with the current SvelteKit version
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
