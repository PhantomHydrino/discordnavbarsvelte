import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	resolve: {
		alias: {
		  '@components': new URL('./src/routes/components', import.meta.url).pathname,
		},
	},
	plugins: [
		tailwindcss(),
		sveltekit()
	]
});
