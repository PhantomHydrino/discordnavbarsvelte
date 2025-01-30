import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	resolve: {
		alias: {
		  '@components': new URL('./src/components', import.meta.url).pathname,
		},
	},
	plugins: [
		tailwindcss(),
		sveltekit()
	]
});
