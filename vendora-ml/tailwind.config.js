module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{scss,css}' // Add this line to include Sass files
    ],
    theme: { extend: {} },
    plugins: [],
  };