/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      ssm: '450px',
      mediumSm: '550px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: {
          450: 'rgba(0, 255, 0, 0.8)'
        },
        white: {
          450: '#fcf6f4'
        }
      },
      boxShadow: {
        '3xl': '0 0 20px 1px rgba(0, 255, 0, 0.2)'
      },
      screens: {
        desktop: '450px'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        bounce: 'bounce 4s infinite',
        float: 'float 4s ease infinite'
      },
      transitionDuration: {
        1000: '1000ms'
      },
      keyframes: {
        float: {
          '0% ': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-55px) translateX(-15px)' },
          '100%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}
