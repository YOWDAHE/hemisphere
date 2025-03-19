/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maskImage: {
        'gradient': 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
      },
    },
  },
  plugins: [],
} 