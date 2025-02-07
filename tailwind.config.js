/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5CF6', // 보라색 (lighter)
          DEFAULT: '#7C3AED', // 보라색 (main)
          dark: '#6D28D9' // 보라색 (darker)
        },
        secondary: {
          light: '#6B21A8', // 진한 보라색 (lighter)
          DEFAULT: '#581C87', // 진한 보라색 (main)
          dark: '#3B0764' // 진한 보라색 (darker)
        }
      }
    }
  },
  plugins: []
}
