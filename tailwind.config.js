module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      keyframes: {
        move: {
          "50%": {
            transform: "translate(40%, 5%) rotate(1deg)",
          },
        },
      },
      animation: {
        move: "move 3s ease-in-out infinite alternate",
      },
      boxShadow: {
        "3xl": "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
