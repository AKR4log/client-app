module.exports = {
	important: true,
	content: ['./app/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr'
			}
		}
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
