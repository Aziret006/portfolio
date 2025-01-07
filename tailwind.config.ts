/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        'smoky-black': 'var(--smoky-black)',
        'eerie-black1': 'var(--eerie-black1)',
        'eerie-black2': 'var(--eerie-black2)',
        'jet': 'var(--jet)',
        'onyx': 'var(--onyx)',
        'light-gray': 'var(--light-gray)',
        'light-gray70': 'var(--light-gray70)',
        'orange-yellow-crayola': 'var(--orange-yellow-crayola)',
        'white2': 'var(--white2)',
      },
    },
  },
  plugins: [],
}

