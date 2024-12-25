/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
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
        'spin-slow': 'spin 4s linear infinite'
      },
      transitionDuration: {
        1000: '1000ms'
      }
    }
  },
  plugins: []
}
