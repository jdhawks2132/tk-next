import type { Config } from 'tailwindcss';

const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('daisyui')],
	// @ts-expect-error - plugin option not in Tailwind Config typing
	daisyui: {
		themes: [
			{
				thunder: {
					primary: '#FFD60A',
					secondary: '#111111',
					accent: '#333333',
					neutral: '#1C1C1C',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				},
			},
			'light',
			'dark',
			'cupcake',
		],
	},
} satisfies Config;

export default config;
