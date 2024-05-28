import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
	site: 'https://preeminent-basbousa-fd0aa7.netlify.app',
	integrations: [mdx()],
});
