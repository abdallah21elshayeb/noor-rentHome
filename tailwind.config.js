/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        
      },
      colors: {
        mainBlue: '#05386B',
        blueLight: '#F0F8FF',
        greenBlue: '#379683',
        greenLight: '#8EE4AF',
        fontColor: '#EDF5E1',
        noorStart: '#5a747f',
        noorEnd: '#202c33',
        golden: '#fde7ad'
      },
      fontFamily: {
        custom: ['Exo']
      }
    }
  },
  plugins: [flowbitePlugin]
}
