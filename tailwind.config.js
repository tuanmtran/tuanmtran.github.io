// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      roboto: ['Roboto']
    },
    extend: {
      animation: {
        fadeIn:"fadeIN 2s ease-in forwards",
        // If you are using Toast component
        left: 'left 0.3s',
        right: 'right 0.3s',
        // if you are using the animate variant of the modal
        modal: 'modal 0.3s',
        // if you are using drawer variant right
        'drawer-right': 'drawer-right 0.3s',
        // if you are using drawer variant left
        'drawer-left': 'drawer-left 0.3s',
        // if you are using drawer variant top
        'drawer-top': 'drawer-top 0.3s',
        // if you are using drawer variant bottom
        'drawer-bottom': 'drawer-bottom 0.3s',
      },
      keyframes: {
        fadeIn: {
          "0": {opacity: 0},
          "100%": {opacity: 1}
        },
        // if you are using drawer variant right
        'drawer-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },
        // if you are using drawer variant left
        'drawer-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },
        // if you are using drawer variant top
        'drawer-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        // if you are using drawer variant bottom
        'drawer-bottom': {
          '0%, 100%': { bottom: '-500px' },
          '100%': { bottom: '0' },
        },
        // if you are using the animate variant of the modal
        modal: {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },
        /* If you are using Toast component*/
        left: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        right: {
          '0%, 100%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    variants: {
      animation: ["motion-safe"],
      /* If you are using Collapse or Accordion component*/
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      inset: ['checked'],
      opacity: ['disabled'],
      textColor: ['active'],
    },
  },
  
  plugins: [
    require('@themesberg/flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],

  content: [
    "./node_modules/@themesberg/flowbite/**/*.js"],
};