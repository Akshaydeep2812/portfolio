/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFDD00',
        'primary-dark': '#E6C700',
        secondary: '#FFF200',
        dark: '#121212',
        darker: '#000000',
        card: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
