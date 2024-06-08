/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#FBF7F1',
        // customMainTxt: '#D77CA1',
        // customMainTxt: '#E34B76',
        customMainTxt: ' #ff0066',
        hoverText: '#EAC0CB',
      },
      fontFamily: {
        'cooper-black': ['"Cooper Black"', 'serif'],
        'roboto-mono' : ['"Roboto Mono"', '"Source Code Pro"']
      }
    },
  },
  plugins: [],
}