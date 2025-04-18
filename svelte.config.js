import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Add custom alias if needed
		alias: {
			$lib: './src/lib'
		},
		// Ensure proper server-side handling
		prerender: {
			handleMissingId: 'ignore'
		},
		// Add trailing slashes for consistent routing
		trailingSlash: 'always'
	}
};

export default config;
