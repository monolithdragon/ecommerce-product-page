/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-primary)',
          neutral: {
            100: 'var(--color-neutral-light)',
            200: 'var(--color-neutral)',
            300: 'var(--color-neutral-dark)',
            400: 'var(--color-neutral-very-dark)'
          }
        }
      },
      backgroundColor: {
        skin: {
          primary: {
            100: 'var(--color-primary-alt)',
            200: 'var(--color-primary)'
          }
        }
      },
      borderColor: {
        skin: {
          primary: 'var(--color-primary)'
        }
      },
      ringColor: {
        skin: {
          primary: 'var(--color-primary)'
        }
      }
    },
  },
  plugins: [],
};
