/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        input:"#434BE7"
    }
    },
    screens: {
      '2xxl': {'max': '1535px'},
      'xxl': {'max': '1281px'},
      'lgg': {'max': '1024px'},
      'mdd': {'max': '800px'},
      'ssm': {'max': '639px'},
      'sssm': {'max': '390px'},
      'ssssm': {'max': '330px'}
    },
  },
  plugins: [],
}

