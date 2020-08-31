module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        crayola: "#F9234A",
        brown: "#A23530",
        charcoal: "#424749",
        silver: "#6E7679",
        platinum: "#E2E4E4",
        cultured: "#F1F1F2",
      },
      fontFamily: {
        body: ["Roboto"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      boxShadow: {
        outer: "0 8px 10px 0 rgba(10, 31, 68, 0.1)",
      },
      spacing: {
        36: "144px",
      },
    },
  },
  variants: {},
  plugins: [],
};
