/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['SF Compact Display', 'Arial'],
      'body': ['SF Compact', 'Arial']
    }
  },
  plugins: [],
  darkMode: 'selector'
}

