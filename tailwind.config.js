/* eslint-disable no-undef */
const svgToDataUri = require("mini-svg-data-uri");


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'pColor': '#8539f7'
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(90deg,#fc2f98  0%, #8539f7 100%)",
      
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
        
      },
      
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
    addVariablesForColors,
    function ({
      matchUtilities,
      theme
    }) {
      matchUtilities({
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" });
    },
   
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#ffffff',
          secondary: '#f0f0f0',
          accent: '#8636ff',
          neutral: '#000000',
          'base-100': '#ffffff', 
          'base-200': '#ffffff', 
          'base-300': '#fc2f98', 
        
      
        },
        black: {
          primary: '#080612',
          secondary: '#110d22',
          accent: '#8636ff',
          neutral: '#ffffff',
          'base-100': '#080612',
          'base-300': '#fc2f98',
        },
      },
    ],
  },
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}








