/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fef7f0',
          100: '#f7e6da',
          200: '#eec2a9',
          300: '#dda078',
          400: '#bf7040',
          500: '#a15024',
          600: '#7c3d1b',
          700: '#602f14',
          800: '#4b240f',  // Aqui está o tom que vamos usar para os títulos
          900: '#391a0b',
        },
      },
    },
  },
  plugins: [],
}
