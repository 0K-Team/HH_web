module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#6DBE45',
          light: '#A8E6A3',
          dark: '#4A8C34',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
}
