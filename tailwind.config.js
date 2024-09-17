/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': '#303030',
        'divider': 'rgba(255, 255, 255, 0.2)',
        'page': '#0F0F0F',
        'primary': 'rgba(255, 255, 255, 0.87)'
      }
    },
  },
  plugins: [],
}
