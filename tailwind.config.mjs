/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./src/*.js"],
	theme: {
		extend: {
			keyframes: {
				'open-menu': {
					'0%':{transform:'scaleY(0)'},
					'80%':{transform:'scaleY(1.2)'},
					'100%':{transform:'scaleY(1)'},
				},
			},
			animation: {
				'open-menu': 'open-menu 0.5s ease-in-out forwards',
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
