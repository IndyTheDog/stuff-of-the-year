/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
      },
      minWidth: {
        'full-lg': '1090px',
        full: '545px',
      },
      maxWidth: {
        article: '512px',
      },
      colors: {
        primary: {
          bg: 'rgb(17, 17, 17)',
          color: 'rgb(115, 115, 115)',
        },
        secondary: {
          bg: 'rgb(23, 23, 23)',
          color: 'rgb(255, 255, 255)',
        },
        tertiary: {
          color: 'rgb(51, 65, 85)',
          bg: 'rgb(203, 213, 225)',
        },
        title: 'rgb(234, 179, 8)',
      },
      spacing: {
        article: '37.5rem',
      },
    },
    fontFamily: {
      primary: ['Montserrat'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.625rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
