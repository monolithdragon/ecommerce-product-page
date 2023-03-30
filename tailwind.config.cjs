/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          neutral: {
            100: withOpacity('--color-neutral-light'),
            200: withOpacity('--color-neutral'),
            300: withOpacity('--color-neutral-dark'),
            400: withOpacity('--color-neutral-very-dark')
          }
        }
      },
      backgroundColor: {
        skin: {
          primary: {
            100: withOpacity('--color-primary-alt'),
            200: withOpacity('--color-primary')
          },
          neutral: withOpacity('--color-neutral-light')
        }
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-primary')
        }
      },
      ringColor: {
        skin: {
          primary: withOpacity('--color-primary')
        }
      },
      boxShadowColor: {
        skin: {
          primary: withOpacity('--color-primary')
        }
      }
    },
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue !== null) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }

    return `hsl(var(${variableName}))`;
  }
}
