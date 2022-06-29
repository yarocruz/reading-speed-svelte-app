import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

//const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		// paths: {
		// 	base: dev ? '' : '/reading-speed-svelte-app',
		// },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		prerender: {
			default: true,
		},

	}
};

export default config;