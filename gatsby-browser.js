/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("prismjs/themes/prism.css")

exports.onClientEntry = function() {
  //One-time, independent code. Set theme if not present in local storage and also in body class
  const currentTheme = localStorage.getItem("theme")
  const initialTheme = currentTheme || "light"
  document.body.classList.add(initialTheme)
  if (!currentTheme) {
    localStorage.setItem("theme", initialTheme)
  }
  /* Set inverted Theme */
  const invertedTheme = initialTheme === "light" ? "dark" : "light"
  localStorage.setItem("invertedTheme", invertedTheme)
}
