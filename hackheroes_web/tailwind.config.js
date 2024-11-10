module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
      textColor: {
        default: '#E0E0E0',
      },
      backgroundColor: {
        default: '#1E1E1E',
        },
      colors: {
        green: {
          DEFAULT: '#6DBE45',
          light: '#A8E6A3',
          dark: '#4A8C34',
          green: '#29FF77',
          hover: "#19c257"
        },
        gray: {
          light: '#303030',
          lighter: '#333333',
          dark: '#171717',
          DEFAULT: '#E0E0E0',
        },
        red: {
          DEFAULT: "#FF3336",
          hover: "#d62225"
        }
      },
    },
  },
  plugins: [],
}
