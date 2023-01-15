/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
      preflight: false,
    },
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#5643F2',
        },
      },
    },
    plugins: [],
  };