/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		keyframes: {
			morph: {
				'0%': {
					borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
				},
				'50%': {
					borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
				},
				'100%': {
					borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
				},
			},
		}
	},
	plugins: [],
}
