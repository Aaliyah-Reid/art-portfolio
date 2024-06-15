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
        categoriesTxt: '#FBF7F1',
        // customMainTxt: '#D77CA1',
        // customMainTxt: '#E34B76',
        customMainTxt: ' #ff0066',
        customSubTxt: '#E34B76',
        hoverText: '#EAC0CB',
        cardColour:'#EDE4DF',
        cardBorder:'#F6ADB8',
        fieldBorder: '#EAC0CB',
        fieldTxt: '#C6A1AB',
        focusFieldTxt: '#ff0066',
        buttonBg: '#E15673',
        buttonTxt: '#FBF7F1',
        buttonHover: '#ff0066'
      },
      fontFamily: {
        'cooper-black': ['"Cooper Black"', 'serif'],
        'roboto-mono' : ['"Roboto Mono"', '"Source Code Pro"']
      }
    },
  },
  plugins: [],
}