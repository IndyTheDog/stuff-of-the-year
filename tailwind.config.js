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
        'full': '545px'
      },
      maxWidth: {
        'article': '513px',
      },
      colors: {
        'neutral-920': '#111111',
      },
      spacing: {
        'article': '34rem',
      }
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
