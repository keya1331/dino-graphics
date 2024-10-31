// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a202c', // Dark background
        lightText: '#edf2f7', // Light text
        accentBlue: '#63b3ed', // Accent color
        softGray: '#2d3748', // Card background
      },
    },
  },
  plugins: [],
};