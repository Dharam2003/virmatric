module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'virmatric-blue': '#1E88E5',
        'virmatric-yellow': '#FFB300',
        'virmatric-dark': '#333333'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Lato', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}
