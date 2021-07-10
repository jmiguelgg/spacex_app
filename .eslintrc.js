// eslint-disable-next-line no-undef
module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    // Enable additional rules
    "indent": [
      "error",
      2, ],
    "linebreak-style": [
      "error",
      "unix", ],
    "quotes": [
      "error",
      "double", ],
    "semi": [
      "error",
      "always", ],

    // Override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": [
      "error",
      "always", ],

    // Disable rules from base configurations
    "for-direction": "off",
  },
};
