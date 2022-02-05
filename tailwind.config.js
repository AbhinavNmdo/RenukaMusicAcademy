module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 1px 8px 0px rgba(0, 0, 0, 0.2);',
        '4xl': '0 1px 20px 3px rgba(0, 0, 0, 0.2);'
      },
      screens: {
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'mlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'msm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
