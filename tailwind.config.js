/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {        
        sans: ['var(--opensans)', ...defaultTheme.fontFamily.sans],
        spacegrotesk: ['var(--spacegrotesk)', ...defaultTheme.fontFamily.sans],
        spacemono: ['var(--spacemono)', ...defaultTheme.fontFamily.sans],       
        raleway: ['var(--raleway)', ...defaultTheme.fontFamily.sans],       
      },

      colors:{
        dark:{
          DEFAULT:'#0E0C15'
        },
        purple:{
          DEFAULT:'#6D3AFF'
        }
      },

      backgroundImage: {
        'linear-1':'linear-gradient(180deg, #DD81EB 0%, #FCC979 45.31%, #94DEC5 66.15%, #9773FE 79.69%, #8BB2F9 100%)',
        'linear-2':'linear-gradient(180deg, rgba(14, 12, 21, 0.70) 0%, rgba(0, 0, 0, 0.70) 55.21%, rgba(10, 6, 15, 0.70) 100%)',
        'linear-3':'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'linear-4':'linear-gradient(180deg, rgba(14, 12, 21, 0.70) 0%, rgba(0, 0, 0, 0.70) 55.21%, rgba(10, 6, 15, 0.70) 100%)',
        'linear-5':'linear-gradient(180deg, rgba(109, 58, 255, 0.10) 0%, rgba(219, 92, 152, 0.10) 100%)',
        'linear-6':'linear-gradient(180deg, #6D3AFF 0%, #DB5C98 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-2': 'radial-gradient(56.52% 56.52% at 61.68% 45.27%, #BDA6FF 0%, #6D3AFF 100%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        1: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
      },
      gridTemplateColumns: {
				13: 'repeat(13, minmax(0, 1fr))',
				14: 'repeat(14, minmax(0, 1fr))',
				15: 'repeat(15, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				17: 'repeat(17, minmax(0, 1fr))',
				18: 'repeat(18, minmax(0, 1fr))',
				19: 'repeat(19, minmax(0, 1fr))',
				20: 'repeat(20, minmax(0, 1fr))',
			},

			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20'
			},
    },
  },
  plugins: [],
}
