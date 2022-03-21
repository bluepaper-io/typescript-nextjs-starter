/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        DEFAULT: '#929A9F',
        50: '#F4F4F5',
        100: '#E9EAEB',
        200: '#D3D6D8',
        300: '#BDC2C5',
        400: '#A8AEB2',
        500: '#929A9F',
        600: '#757E84',
        700: '#5A6267',
        800: '#404549',
        900: '#26292B',
      },
      blue: {
        DEFAULT: '#263640',
        50: '#7295AB',
        100: '#658CA4',
        200: '#54778D',
        300: '#446173',
        400: '#354C5A',
        500: '#263640',
        600: '#11181D',
        700: '#000000',
        800: '#000000',
        900: '#000000',
      },
      white: colors.white,
      black: colors.black,
      red: colors.red,
      green: colors.green,
      yellow: {
        DEFAULT: '#F6B142',
        50: '#FEF9F1',
        100: '#FDF1DE',
        200: '#FCE1B7',
        300: '#FAD190',
        400: '#F8C169',
        500: '#F6B142',
        600: '#F39B0C',
        700: '#BF7909',
        800: '#895707',
        900: '#543504',
      },
      lonestar: {
        DEFAULT: '#6A0000',
        50: '#FCF7F7',
        100: '#FF0E0E',
        200: '#E40000',
        300: '#BC0000',
        400: '#930000',
        500: '#6A0000',
        600: '#320000',
        700: '#000000',
        800: '#000000',
        900: '#292626',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      dosis: ['Dosis', 'sans-serif'],
    },
    extend: {
      colors: {
        'text-light-blue': '#929A9F'
      },
      screens: {
        'm-2xl': {'max': '1535px'},
        'm-xl': {'max': '1279px'},
        'm-lg': {'max': '1023px'},
        'm-md': {'max': '767px'},
        'm-sm': {'max': '639px'},
        'm-xs': {'max': '479px'},
        'min-1440': {'min': '1440px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
