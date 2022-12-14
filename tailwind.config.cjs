const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Signika', 'sans-serif']
      },
      lineHeight: {
        'lg': '79px',
        'md': '50px',
        'sm': '30px',
      },
      screens: {
        '2xl': '1750px',
        'xl': '1450px',
        'lg': '1250px',
        'md': '800px',
        'sm': '640px',
        'xs': '400px',
        'menu': '1000px',
      },
      backgroundImage : {
        'split-blue-green': "linear-gradient(to right, #124D5E, #228AA8 50%, #40A535 50%);"
      },
    },
    colors: {
      'primary': '#124D5E',
      'secondary': '#40A535',
      'gradient-light': '#228AA8',
      'gradient-dark': '#124D5E',
      'white': '#FFFFFF',
      'alert': '#ff0000',
    },
    maxWidth: {
      'container-12': '1420px',
      'container-6': '710px',
      'container-3': '355px',
      'container-1': '119px',
    }
  },
};

module.exports = config;
