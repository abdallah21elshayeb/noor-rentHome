/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlue: '#05386B',
        blueLight: '#F0F8FF',
        greenBlue: '#379683',
        greenLight: '#8EE4AF',
        fontColor: '#EDF5E1'
      }
    }
  },
  plugins: [flowbitePlugin]
}
