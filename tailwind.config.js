module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f5550b",
          200: "#f56725",
          300: "#da5f27",
          400: "#be4209",
          500: "#8a3109",
        },
        fontSize: {
          nunito: ["Nunito"],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
