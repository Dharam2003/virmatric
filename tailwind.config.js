module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'virmatric-blue': {
          DEFAULT: '#007BFF',
          light: '#6AB7FF',
          dark: '#0056b3',
        },
        'virmatric-dark': {
          DEFAULT: '#111827',
          light: '#1f2937',
        },
        'virmatric-light': '#f9fafb',
      },
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'],
        body: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards'
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
        }
      },
    },
  },
  plugins: [],
}