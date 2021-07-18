module.exports = {
  purge: [
    './components/**/*.{jsx,js,ts,tsx}',
    './pages/**/*.{jsx,js,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    screens: {
      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      spacing: {
        'unset': 'unset',
        '1px': '1px',
        '2px': '2px',
        '5': '0.3125rem',
        '20px': '20px',
        '25px': '25px',
        '30': '1.875rem',
        '40px': '40px',
        '126px': '126px',
        '250px': '250px',
        '500px': '500px',
        '75vh': '75vh',
        '3%': '3%',
        '50': '50px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      dropShadow: {
        'nav': '0 15px 50px rgba(170, 170, 170, .1)',
      },
      minHeight: {
        '25': '25px',
        '35': '35px',
        '40': '40px',
        '50': '50px',
        '75': '4.6875rem',
        '100': '100px',
        '150': '150px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '375': '375px',
        'full': '100%',
      },
      maxHeight: {
        '25': '25px',
        '35': '35px',
        '40': '40px',
        '50': '50px',
        '75': '75px',
        '100': '100px',
        '250': '250px',
        '400': '400px',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33.3%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33.3%',
        '1/2': '50%',
        '3/4': '75%',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '500px': '500px',
        'full': '100%',
      },
      boxShadow: {
        custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      },
      flexGrow: {
        '1': '1',
        '2': '2',
      },
      colors: {
        transparent: "transparent",
        skyblue: "#92fff4",//"#DEFCF9",
        blue: "#a3c8ff",//"#CADEFC",
        purple: "#C3BEF0",
        pink: "#CCA8E9",
        white: "#FFFFFF",
        black: "#000000",
        red: "#FF390F",
        blackred: "#db0000"
      },
    },
  },
  plugins: [

  ],
}
