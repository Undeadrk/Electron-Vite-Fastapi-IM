/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 包含的内容
  theme: {
    
    extend: {
      colors: {
        'background-gray': '#F2F3F5',
        'background-sample' : '#6E9DE7'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

