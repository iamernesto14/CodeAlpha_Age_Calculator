/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // custom font
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'primary-puple': '#854dff',
        'primary-light-red': '#ff5757',
        'neutral-off-black': '#141414',
        'neutral-grey': {
          100: '#dbdbdb',
          200: '#716f6f'
        },
        'neutral-white': {
            100: '#ffffff',
            200: '#f0f0f0'
        }
      },
      italic: {
        fontStyle: 'italic',
      },
      color: {
        error: '#f87171', // Adding custom error color if needed
      },
    },
  },
  plugins: [],
}