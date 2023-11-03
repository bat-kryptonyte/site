const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu Mono', ...fontFamily.sans],
        redacted: ['Redacted Script', 'cursive', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}