module.exports = {
  extends: [
    require.resolve("eslint-config-react-app"),
    require.resolve("eslint-config-react-app/jest"),
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      // default of `version: "detect"` causes console warning when `react` is not installed
      version: "999.999.999",
    },
  },
  rules: {
    "linebreak-style": ["error", "unix"],
  },
};
