
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  },
  safelist: [
    'bg-green-600',
    'text-green-100',
    'bg-blue-600',
    'text-blue-100',
    'bg-red-600',
    'text-red-100',
    'bg-yellow-600',
    'text-yellow-100',
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
}