module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nice-white': '#F4F2EF',
        'nice-yellow': '#FEBD2E',
        'nice-dark': '#333',
        'prod-white': '#F9FAFE',
      },
      boxShadow: {
        neuo: '5px 5px 15px #b6b7b9,-5px -5px 15px #ffffff',
      },
      fontFamily: {
        title: ['Questrial'],
      },
    },
    screens: {
      xls: '423px',
      xs: '640px',

      sm: '780px',
      // => @media (min-width: 640px) { ... }

      md: '1180px',
      // => @media (min-width: 768px) { ... }

      lg: '1436px',
      // => @media (min-width: 1024px) { ... }

      xl: '1692px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1948px',
      // => @media (min-width: 1536px) { ... }
    },
    zIndex: {
      '-1': '-1',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
