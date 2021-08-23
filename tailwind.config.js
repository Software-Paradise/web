const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
			roboto: ['Roboto Mono', 'monospace'],
		},
		extend: {
			colors: {
				primary: colors.sky,
				secondary: colors.teal,
				accent: colors.violet,
				info: colors.blue,
				success: colors.green,
				warning: colors.amber,
				danger: colors.red,
				gray: colors.trueGray,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
